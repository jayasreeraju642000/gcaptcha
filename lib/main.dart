import 'dart:convert';

import 'package:counter_web/timer_service_provider.dart';
import 'package:flutter/foundation.dart';
import 'package:flutter/material.dart';
import 'package:g_recaptcha_v3/g_recaptcha_v3.dart';
import 'package:http/http.dart';

void main() async {
  if (kIsWeb) {
    bool ready =
        await GRecaptchaV3.ready("6Lf4KykpAAAAADS0nmaFDFO56-NNrI2kMCq0Ptlu");
    debugPrint("Is Recaptcha ready? $ready");
    GRecaptchaV3.hideBadge();
  }
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  @override
  Widget build(BuildContext context) {
    return TimerServiceProvider(
      service: TimerService(context: context),
      child: MaterialApp(
        title: 'Flutter Demo',
        theme: ThemeData(
          colorScheme: ColorScheme.fromSeed(seedColor: Colors.deepPurple),
          useMaterial3: true,
        ),
        home: const MyHomePage(title: 'Google Captcha Test'),
      ),
    );
  }
}

class MyHomePage extends StatefulWidget {
  const MyHomePage({super.key, required this.title});

  final String title;

  @override
  State<MyHomePage> createState() => _MyHomePageState();
}

class _MyHomePageState extends State<MyHomePage> {
  final userNameTextFieldController = TextEditingController();
  final passwordTextFieldController = TextEditingController();

  Future<bool> verifyToken() async {
    String token = await GRecaptchaV3.execute('submit') ?? '';
    if (token.isNotEmpty) {
      try {
        Uri uri = Uri.parse('https://www.google.com/recaptcha/api/siteverify');
        final response = await post(uri, body: {
          "secret": "6Lf4KykpAAAAALHBnwoP5klD6WpIVuIwv4pmxNVO",
          "response": token,
        }, headers: {
          'Access-Control-Allow-Origin': "https://jayasreeraju642000.github.io",
          'Access-Control-Max-Age': '1800',
          'Access-Control-Allow-Methods': 'POST',
          'Access-Control-Allow-Headers': 'Content-Type'
        },);
        final Map<String, dynamic> jsonResponse = json.decode(response.body);
        if (jsonResponse['success']) {
          debugPrint('successs');
          return true;
        } else {
          debugPrint('failed');

          return false;
        }
      } catch (e) {
        debugPrint(e.toString());
      }
    }
    debugPrint('Failed');

    return false;
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: Colors.purple[50],
      appBar: AppBar(
        backgroundColor: Theme.of(context).colorScheme.inversePrimary,
        title: Text(widget.title),
      ),
      body: Center(
        child: Padding(
          padding: const EdgeInsets.all(20.0),
          child: Column(
            mainAxisAlignment: MainAxisAlignment.center,
            children: <Widget>[
              TextField(
                controller: userNameTextFieldController,
                decoration: const InputDecoration(
                    border: OutlineInputBorder(), label: Text("Username")),
              ),
              const SizedBox(
                height: 20,
              ),
              TextField(
                controller: passwordTextFieldController,
                obscureText: true,
                decoration: const InputDecoration(
                    border: OutlineInputBorder(), label: Text("Password")),
              ),
              const SizedBox(
                height: 50,
              ),
              ElevatedButton(
                  onPressed: () {
                    if (userNameTextFieldController.text.isNotEmpty &&
                        passwordTextFieldController.text.isNotEmpty) {
                      verifyToken();
                    } else {
                      ScaffoldMessenger.of(context).showSnackBar(const SnackBar(
                          content: Text(
                              "Username and Password reqired to continue")));
                    }
                  },
                  child: const Text("Submit"))
            ],
          ),
        ),
      ),
      // This trailing comma makes auto-formatting nicer for build methods.
    );
  }
}
