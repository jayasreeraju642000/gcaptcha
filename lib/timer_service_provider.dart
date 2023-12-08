import 'dart:async';

import 'package:flutter/material.dart';

class TimerServiceProvider extends InheritedWidget {
  final TimerService _service;
  const TimerServiceProvider(
      {Key? key,
      required TimerService service,
      required Widget child,})
      : _service = service,
        super(key: key, child: child);

  @override
  bool updateShouldNotify(TimerServiceProvider oldWidget) =>
      _service != oldWidget._service;
}

class TimerService extends ChangeNotifier {
  final BuildContext context;
  TimerService({required this.context});
  Timer? _timer;
  Duration get currentDuration => _currentDuration;
  final Duration _currentDuration = Duration.zero;
  bool get isRunning => _timer != null;
  Timer? secondAlertTimer;
  Timer? thirdtimer;
  void _logout() {
    int remainingTime = 30;

    secondAlertTimer = Timer(
      Duration(
        seconds: (remainingTime - 20),
      ),
      () {
        CommonAlert.showSessionTimeoutDialog(
          context,
          timerDuration: 10,
          submitFunction: () {
            reset();
          },
          cancelFunction: () {
            Constants.isIgnored = false;

            thirdtimer = Timer(
              const Duration(seconds: 10),
              () {},
            );
          },
        );
      },
    );
  }

  void reset() {
    stop();
    start();
    secondAlertTimer?.cancel();
    secondAlertTimer = null;
    thirdtimer?.cancel();
    thirdtimer = null;
  }

  void stop() {
    _timer?.cancel();
    _timer = null;
  }

  void start() {
    if (_timer != null) return;
    _timer = Timer.periodic(const Duration(seconds: 30), (timer) {
      _logout();
    });
  }

  static TimerService of(BuildContext context) {
    final TimerServiceProvider? provider =
        context.dependOnInheritedWidgetOfExactType();
    return provider!._service;
  }
}

class Constants {
  static bool isIgnored = true;
}

class CommonAlert {
  static void showSessionTimeoutDialog(BuildContext context,
      {Function? cancelFunction,
      int timerDuration = 0,
      Function? submitFunction}) {
    StreamController<int> events = StreamController<int>();

    int alertDisplayTime = timerDuration;
    events.add(timerDuration);
    Timer timerForSessionAlert =
        Timer.periodic(const Duration(seconds: 1), (timer) {
      if (alertDisplayTime > 0) {
        alertDisplayTime--;
        events.add(alertDisplayTime);
      } else {
        timer.cancel();
        Constants.isIgnored = true;
        Navigator.of(context).pop();
      }
    });

    showDialog(
      context: context,
      barrierDismissible: false,
      builder: (context) {
        return StreamBuilder<int>(
            stream: events.stream,
            builder: (context, snapshot) {
              return AlertDialog(
                backgroundColor: Theme.of(context).scaffoldBackgroundColor,
                shape: RoundedRectangleBorder(
                    borderRadius: BorderRadius.circular(8)),
                title: Text(
                  "Your session is about to expire in ${"${((snapshot.data ?? 0) ~/ 60).toString().padLeft(2, '0')}:${((snapshot.data ?? 0) % 60).toString().padLeft(2, '0')}"} minutes.",
                  style: TextStyle(
                    color: Theme.of(context).colorScheme.primary.withAlpha(
                          200,
                        ),
                  ),
                ),
                content: RichText(
                  text: TextSpan(
                    text: "To continue without any interruption, click on ",
                    style: Theme.of(context).textTheme.bodySmall,
                    children: [
                      TextSpan(
                        text: "Continue session",
                        style: Theme.of(context).textTheme.bodySmall?.copyWith(
                              fontWeight: FontWeight.bold,
                            ),
                      ),
                      TextSpan(
                          text: ". Else click on ",
                          style: Theme.of(context).textTheme.bodySmall),
                      TextSpan(
                        text: "Ignore",
                        style: Theme.of(context).textTheme.bodySmall?.copyWith(
                              fontWeight: FontWeight.bold,
                            ),
                      ),
                      TextSpan(
                        text: " and you will be logout on session expiry.",
                        style: Theme.of(context).textTheme.bodySmall,
                      ),
                    ],
                  ),
                ),
                actions: [
                  ElevatedButton(
                    child: const Text(
                      "Ignore",
                    ),
                    onPressed: () {
                      if (cancelFunction != null) {
                        cancelFunction();
                      }
                      timerForSessionAlert.cancel();
                      Navigator.of(context).pop();
                    },
                  ),
                  ElevatedButton(
                    style:
                        Theme.of(context).elevatedButtonTheme.style?.copyWith(
                              backgroundColor: MaterialStatePropertyAll(
                                  Theme.of(context).primaryColor),
                            ),
                    child: Text("Continue session",
                        style: TextStyle(
                            color: Theme.of(context).colorScheme.onPrimary)),
                    onPressed: () {
                      Constants.isIgnored = false;
                      timerForSessionAlert.cancel();

                      Navigator.of(context).pop();
                    },
                  ),
                ],
              );
            });
      },
    );
  }
}
