'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "b40091df62968a22b3c5d68b7806e2d5",
"index.html": "95315e910442d539e049c148fd7d5f44",
"/": "95315e910442d539e049c148fd7d5f44",
"main.dart.js": "0171066482843508618cfc1194ee318b",
"flutter.js": "6fef97aeca90b426343ba6c5c9dc5d4a",
"favicon.png": "4dc36157a57e6caa65da53d88838a235",
"icons/Icon-192.png": "c466ae3f5c0f6473cf79271977bcdfd0",
"icons/Icon-maskable-192.png": "c466ae3f5c0f6473cf79271977bcdfd0",
"icons/Icon-maskable-512.png": "6344b0fc0b8ca311ef73db5e6d23e260",
"icons/Icon-512.png": "6344b0fc0b8ca311ef73db5e6d23e260",
"manifest.json": "218122d7c5c56218cbc2229f24003ffa",
"assets/configuration/app_settings.json": "6f33d9f6229632b2f3d8b96ede6bdd9d",
"assets/AssetManifest.json": "eb806cc43b1148b31f366fe1e3a98c0a",
"assets/NOTICES": "9cc9fe15c24e7b07cafd3883caeb6a88",
"assets/FontManifest.json": "224908e76b30fe3080210f389de7785b",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "f2163b9d4e6f1ea52063f498c8878bb9",
"assets/packages/fluttertoast/assets/toastify.js": "56e2c9cedd97f10e7e5f1cebd85d53e3",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/flex_color_picker/assets/opacity.png": "49c4f3bcb1b25364bb4c255edcaaf5b2",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.css": "5a8d0222407e388155d7d1395a75d5b9",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.html": "16911fcc170c8af1c5457940bd0bf055",
"assets/packages/html_editor_enhanced/assets/plugins/summernote-at-mention/summernote-at-mention.js": "8d1a7c753cf1a4cd0058e31fa1e5376e",
"assets/packages/html_editor_enhanced/assets/summernote-lite-dark.css": "3f3cb618d1d51e3e6d0d4cce469b991b",
"assets/packages/html_editor_enhanced/assets/summernote.html": "8ce8915ee5696d3c568e94911eb0d9bf",
"assets/packages/html_editor_enhanced/assets/jquery.min.js": "b61aa6e2d68d21b3546b5b418bf0e9c3",
"assets/packages/html_editor_enhanced/assets/summernote-no-plugins.html": "89ca56cd85a91f1dc39f5413204e24d0",
"assets/packages/html_editor_enhanced/assets/font/summernote.ttf": "82fa597f29de41cd41a7c402bcf09ba5",
"assets/packages/html_editor_enhanced/assets/font/summernote.eot": "f4a47ce92c02ef70fc848508f4cec94a",
"assets/packages/html_editor_enhanced/assets/summernote-lite.min.css": "570da368f96dc6433b8a1006c425ca7d",
"assets/packages/html_editor_enhanced/assets/summernote-lite.min.js": "4fe75f9b35f43da141d60d6a697db1c1",
"assets/packages/wakelock_plus/assets/no_sleep.js": "7748a45cd593f33280669b29c2c8919a",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"assets/AssetManifest.bin": "191a314aab03ed7d08e5b4769bd6b30b",
"assets/fonts/MaterialIcons-Regular.otf": "b4aaa39c08eeeddc45fb09ec65fcb755",
"assets/assets/svg/search.svg": "15530fc1c49745bb089cd0ca6b31e9be",
"assets/assets/svg/checkmark.svg": "4a95cc7bd8157ef97819b194fc386538",
"assets/assets/svg/docview.svg": "7667a41c68f77d0d732bc0fc117132f0",
"assets/assets/svg/emrmenu.svg": "48e9f0c4faa914c84004b194294debc2",
"assets/assets/svg/RPTBiopsy.svg": "b9b059237f63f0bae210f13778780238",
"assets/assets/svg/hamburgermenu.svg": "22127735f330722a1586a15024379cc4",
"assets/assets/svg/user.svg": "553d7196fe9392488fdbd6a5766b2209",
"assets/assets/svg/Healthstatus.svg": "57e23ad8991b022ce406bd4e01ca6f65",
"assets/assets/svg/home.svg": "dc47831e6798016e2ef843fc0c54813e",
"assets/assets/svg/login.png": "698a3f8a150b58964350796b50441938",
"assets/assets/svg/SaathCarelogo.svg": "14e61b3cbc31ded0b53ac9c01fcecb2f",
"assets/assets/svg/grid%2520active.svg": "7d28884449cbb251025e8b2cd045b97a",
"assets/assets/svg/saath_logo_updated.svg": "28ba756182dfe4e2a651db6e6e09ba3c",
"assets/assets/svg/uploadmenu.svg": "7e1722c46af894f6fdedafdfe9be44e4",
"assets/assets/svg/icon_visibility.svg": "bf58027c8a46d1ec7ba4922fea6b4042",
"assets/assets/svg/new%2520customer.svg": "0559d356487f73c3804081a261e658cd",
"assets/assets/svg/heart-round.svg": "dee098685b29e2d81710f7097ca9cb66",
"assets/assets/svg/ESM.png": "b8437ddcc2d2874d96317bede8548244",
"assets/assets/svg/doc.svg": "0b80c5b8bdb05f01eeb7aa2b7c99741e",
"assets/assets/svg/TAG.png": "09d4891e5d8885dc952a171c33a54eec",
"assets/assets/svg/settings.svg": "48c6d17843b065ce52fea2d29cadc00b",
"assets/assets/svg/closedocview.svg": "c1d6ddc3695ab2a5e2c3c893787378e6",
"assets/assets/svg/projects.svg": "aa395a7bfa1544daf071dddacae9a8db",
"assets/assets/svg/arrow-left%2520doc%2520view.svg": "564c02b31eed5e00415fec71316e6bcf",
"assets/assets/svg/Lab.svg": "66b8a48421dfd4c319523ec6735bab99",
"assets/assets/svg/sendsave.svg": "f8f28b4124bae71004440b240a518eaf",
"assets/assets/svg/down-arrow.svg": "45bff6bf25accd2b631658fc102bbef2",
"assets/assets/svg/logoffnew.svg": "58a55d0ffaa5f8614f7a24c283f3c090",
"assets/assets/svg/saath-logo.svg": "6fdf0fe19db6cc36d9bd0a7d65766bc1",
"assets/assets/svg/add.svg": "e405a4a170584eb9979526c520eac2fd",
"assets/assets/svg/active.svg": "50ce0661b5affc317367f2cfeba7c405",
"assets/assets/svg/logoutgood.svg": "61d4152b8e492fcf92ef71c06aa14983",
"assets/assets/svg/filterdoclist.svg": "d1c6a8830f0a8611eb3fb3236bb5ddd8",
"assets/assets/svg/ridelog.pdf": "dfd3e77fa9fc2d2c621ec5c9294595cc",
"assets/assets/svg/notification.svg": "bfcba664d12e63135fe3428c137bc649",
"assets/assets/svg/sample.pdf": "1c310399c0ef9e6f62570ebf51f9802d",
"assets/assets/svg/customers.svg": "0b9696137e7338a6829369e8e4d795ec",
"assets/assets/svg/edit.svg": "0318be7953dd722725e09807b0ecfe47",
"assets/assets/svg/RPTPrescriptions.svg": "be56dbfff145c3fb9e6bf67b759218fe",
"assets/assets/svg/delete.svg": "1dc604acd77ffc908c548443356c6d26",
"assets/assets/svg/language-globe.svg": "409d3fef38e5692a048961da670e8310",
"assets/assets/svg/listactive.svg": "081a75ea8eac5bc4408b4fb4e77b20cb",
"assets/assets/svg/Genetictest.svg": "f719e58a7bb61cc9e09a756feb29abfa",
"assets/assets/svg/profile.svg": "5b584232664237b1a0d09b6b087e3615",
"assets/assets/svg/view.svg": "e1a690e9ee3c402f2e89a2861c62b219",
"assets/assets/svg/filter.svg": "b0c5f9526d06bd4c3d93628b8b596316",
"assets/assets/svg/trackermenu.svg": "a6d06d3a6d28a79335570a95d86b33ba",
"assets/assets/svg/upload.svg": "b3068616f0828480e9d0895ad65b8541",
"assets/assets/svg/cmpnylogo.png": "a68c4854e2c727c8118455a36e4bfa85",
"assets/assets/svg/help.svg": "c4aa55a10ac418233995913313e7b499",
"assets/assets/svg/homemenu.svg": "8328d6fccb979e111f58f76076e9d8d0",
"assets/assets/svg/new%2520project.svg": "702c469a3bc65be4d10b21ddbd6fa6cd",
"assets/assets/svg/close-btn.svg": "48257c5058481e5c1e081e83fff3b240",
"assets/assets/svg/logof.svg": "a228debf32d0c580654764cc446a0f79",
"assets/assets/svg/moremenu.svg": "782040d8736349499ca0da86928ba668",
"assets/assets/svg/arrow-right%2520doc%2520view.svg": "fc3be90e1bba9357788cefcd93f5c984",
"assets/assets/svg/heart.svg": "a572d241aa3ddc18f81d609ea40d4ea8",
"assets/assets/icons/favicon.ico": "86d15345e42a19788aecfa818ffe0b07",
"assets/assets/icons/logo_dark_theme.svg": "034f8aec21fb70403796cb4571c3205f",
"assets/assets/icons/logout_dark.svg": "e79c591e8fe82acd8a1e0f9e91532e83",
"assets/assets/icons/logout_icon.svg": "5836e6ef7dfbed3d1cf66a2da8cae4e3",
"assets/assets/fonts/Poppins-ExtraLight.ttf": "6f8391bbdaeaa540388796c858dfd8ca",
"assets/assets/fonts/Poppins-ThinItalic.ttf": "01555d25092b213d2ea3a982123722c9",
"assets/assets/fonts/Poppins-ExtraLightItalic.ttf": "a9bed017984a258097841902b696a7a6",
"assets/assets/fonts/Poppins-BoldItalic.ttf": "19406f767addf00d2ea82cdc9ab104ce",
"assets/assets/fonts/Poppins-Light.ttf": "fcc40ae9a542d001971e53eaed948410",
"assets/assets/fonts/Poppins-Medium.ttf": "bf59c687bc6d3a70204d3944082c5cc0",
"assets/assets/fonts/Poppins-SemiBoldItalic.ttf": "9841f3d906521f7479a5ba70612aa8c8",
"assets/assets/fonts/Poppins-ExtraBoldItalic.ttf": "8afe4dc13b83b66fec0ea671419954cc",
"assets/assets/fonts/Poppins-ExtraBold.ttf": "d45bdbc2d4a98c1ecb17821a1dbbd3a4",
"assets/assets/fonts/Poppins-BlackItalic.ttf": "e9c5c588e39d0765d30bcd6594734102",
"assets/assets/fonts/OFL.txt": "481fed197dac47775fb62cefafa2555e",
"assets/assets/fonts/Poppins-Regular.ttf": "093ee89be9ede30383f39a899c485a82",
"assets/assets/fonts/Poppins-LightItalic.ttf": "0613c488cf7911af70db821bdd05dfc4",
"assets/assets/fonts/Poppins-Bold.ttf": "08c20a487911694291bd8c5de41315ad",
"assets/assets/fonts/Poppins-Black.ttf": "14d00dab1f6802e787183ecab5cce85e",
"assets/assets/fonts/Poppins-Thin.ttf": "9ec263601ee3fcd71763941207c9ad0d",
"assets/assets/fonts/Poppins-SemiBold.ttf": "6f1520d107205975713ba09df778f93f",
"assets/assets/fonts/Poppins-Italic.ttf": "c1034239929f4651cc17d09ed3a28c69",
"assets/assets/fonts/Poppins-MediumItalic.ttf": "cf5ba39d9ac24652e25df8c291121506",
"canvaskit/skwasm.js": "95f16c6690f955a45b2317496983dbe9",
"canvaskit/skwasm.wasm": "1a074e8452fe5e0d02b112e22cdcf455",
"canvaskit/chromium/canvaskit.js": "96ae916cd2d1b7320fff853ee22aebb0",
"canvaskit/chromium/canvaskit.wasm": "be0e3b33510f5b7b0cc76cc4d3e50048",
"canvaskit/canvaskit.js": "bbf39143dfd758d8d847453b120c8ebb",
"canvaskit/canvaskit.wasm": "42df12e09ecc0d5a4a34a69d7ee44314",
"canvaskit/skwasm.worker.js": "51253d3321b11ddb8d73fa8aa87d3b15"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
