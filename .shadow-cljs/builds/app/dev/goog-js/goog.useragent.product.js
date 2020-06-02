["^ ","~:resource-id",["~:shadow.build.classpath/resource","goog/useragent/product.js"],"~:js","goog.provide(\"goog.userAgent.product\");\ngoog.require(\"goog.labs.userAgent.browser\");\ngoog.require(\"goog.labs.userAgent.platform\");\ngoog.require(\"goog.userAgent\");\n/** @define {boolean} */ goog.userAgent.product.ASSUME_FIREFOX = goog.define(\"goog.userAgent.product.ASSUME_FIREFOX\", false);\n/** @define {boolean} */ goog.userAgent.product.ASSUME_IPHONE = goog.define(\"goog.userAgent.product.ASSUME_IPHONE\", false);\n/** @define {boolean} */ goog.userAgent.product.ASSUME_IPAD = goog.define(\"goog.userAgent.product.ASSUME_IPAD\", false);\n/** @define {boolean} */ goog.userAgent.product.ASSUME_ANDROID = goog.define(\"goog.userAgent.product.ASSUME_ANDROID\", false);\n/** @define {boolean} */ goog.userAgent.product.ASSUME_CHROME = goog.define(\"goog.userAgent.product.ASSUME_CHROME\", false);\n/** @define {boolean} */ goog.userAgent.product.ASSUME_SAFARI = goog.define(\"goog.userAgent.product.ASSUME_SAFARI\", false);\n/** @private @type {boolean} */ goog.userAgent.product.PRODUCT_KNOWN_ = goog.userAgent.ASSUME_IE || goog.userAgent.ASSUME_EDGE || goog.userAgent.ASSUME_OPERA || goog.userAgent.product.ASSUME_FIREFOX || goog.userAgent.product.ASSUME_IPHONE || goog.userAgent.product.ASSUME_IPAD || goog.userAgent.product.ASSUME_ANDROID || goog.userAgent.product.ASSUME_CHROME || goog.userAgent.product.ASSUME_SAFARI;\n/** @type {boolean} */ goog.userAgent.product.OPERA = goog.userAgent.OPERA;\n/** @type {boolean} */ goog.userAgent.product.IE = goog.userAgent.IE;\n/** @type {boolean} */ goog.userAgent.product.EDGE = goog.userAgent.EDGE;\n/** @type {boolean} */ goog.userAgent.product.FIREFOX = goog.userAgent.product.PRODUCT_KNOWN_ ? goog.userAgent.product.ASSUME_FIREFOX : goog.labs.userAgent.browser.isFirefox();\n/**\n * @private\n * @return {boolean}\n */\ngoog.userAgent.product.isIphoneOrIpod_ = function() {\n  return goog.labs.userAgent.platform.isIphone() || goog.labs.userAgent.platform.isIpod();\n};\n/** @type {boolean} */ goog.userAgent.product.IPHONE = goog.userAgent.product.PRODUCT_KNOWN_ ? goog.userAgent.product.ASSUME_IPHONE : goog.userAgent.product.isIphoneOrIpod_();\n/** @type {boolean} */ goog.userAgent.product.IPAD = goog.userAgent.product.PRODUCT_KNOWN_ ? goog.userAgent.product.ASSUME_IPAD : goog.labs.userAgent.platform.isIpad();\n/** @type {boolean} */ goog.userAgent.product.ANDROID = goog.userAgent.product.PRODUCT_KNOWN_ ? goog.userAgent.product.ASSUME_ANDROID : goog.labs.userAgent.browser.isAndroidBrowser();\n/** @type {boolean} */ goog.userAgent.product.CHROME = goog.userAgent.product.PRODUCT_KNOWN_ ? goog.userAgent.product.ASSUME_CHROME : goog.labs.userAgent.browser.isChrome();\n/**\n * @private\n * @return {boolean}\n */\ngoog.userAgent.product.isSafariDesktop_ = function() {\n  return goog.labs.userAgent.browser.isSafari() && !goog.labs.userAgent.platform.isIos();\n};\n/** @type {boolean} */ goog.userAgent.product.SAFARI = goog.userAgent.product.PRODUCT_KNOWN_ ? goog.userAgent.product.ASSUME_SAFARI : goog.userAgent.product.isSafariDesktop_();\n","~:source","// Copyright 2008 The Closure Library Authors. All Rights Reserved.\n//\n// Licensed under the Apache License, Version 2.0 (the \"License\");\n// you may not use this file except in compliance with the License.\n// You may obtain a copy of the License at\n//\n//      http://www.apache.org/licenses/LICENSE-2.0\n//\n// Unless required by applicable law or agreed to in writing, software\n// distributed under the License is distributed on an \"AS-IS\" BASIS,\n// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n// See the License for the specific language governing permissions and\n// limitations under the License.\n\n/**\n * @fileoverview Detects the specific browser and not just the rendering engine.\n *\n */\n\ngoog.provide('goog.userAgent.product');\n\ngoog.require('goog.labs.userAgent.browser');\ngoog.require('goog.labs.userAgent.platform');\ngoog.require('goog.userAgent');\n\n\n/**\n * @define {boolean} Whether the code is running on the Firefox web browser.\n */\ngoog.userAgent.product.ASSUME_FIREFOX =\n    goog.define('goog.userAgent.product.ASSUME_FIREFOX', false);\n\n\n/**\n * @define {boolean} Whether we know at compile-time that the product is an\n *     iPhone.\n */\ngoog.userAgent.product.ASSUME_IPHONE =\n    goog.define('goog.userAgent.product.ASSUME_IPHONE', false);\n\n\n/**\n * @define {boolean} Whether we know at compile-time that the product is an\n *     iPad.\n */\ngoog.userAgent.product.ASSUME_IPAD =\n    goog.define('goog.userAgent.product.ASSUME_IPAD', false);\n\n\n/**\n * @define {boolean} Whether we know at compile-time that the product is an\n *     AOSP browser or WebView inside a pre KitKat Android phone or tablet.\n */\ngoog.userAgent.product.ASSUME_ANDROID =\n    goog.define('goog.userAgent.product.ASSUME_ANDROID', false);\n\n\n/**\n * @define {boolean} Whether the code is running on the Chrome web browser on\n * any platform or AOSP browser or WebView in a KitKat+ Android phone or tablet.\n */\ngoog.userAgent.product.ASSUME_CHROME =\n    goog.define('goog.userAgent.product.ASSUME_CHROME', false);\n\n\n/**\n * @define {boolean} Whether the code is running on the Safari web browser.\n */\ngoog.userAgent.product.ASSUME_SAFARI =\n    goog.define('goog.userAgent.product.ASSUME_SAFARI', false);\n\n\n/**\n * Whether we know the product type at compile-time.\n * @type {boolean}\n * @private\n */\ngoog.userAgent.product.PRODUCT_KNOWN_ = goog.userAgent.ASSUME_IE ||\n    goog.userAgent.ASSUME_EDGE || goog.userAgent.ASSUME_OPERA ||\n    goog.userAgent.product.ASSUME_FIREFOX ||\n    goog.userAgent.product.ASSUME_IPHONE ||\n    goog.userAgent.product.ASSUME_IPAD ||\n    goog.userAgent.product.ASSUME_ANDROID ||\n    goog.userAgent.product.ASSUME_CHROME ||\n    goog.userAgent.product.ASSUME_SAFARI;\n\n\n/**\n * Whether the code is running on the Opera web browser.\n * @type {boolean}\n */\ngoog.userAgent.product.OPERA = goog.userAgent.OPERA;\n\n\n/**\n * Whether the code is running on an IE web browser.\n * @type {boolean}\n */\ngoog.userAgent.product.IE = goog.userAgent.IE;\n\n\n/**\n * Whether the code is running on an Edge web browser (EdgeHTML based).\n * @type {boolean}\n */\ngoog.userAgent.product.EDGE = goog.userAgent.EDGE;\n\n\n/**\n * Whether the code is running on the Firefox web browser.\n * @type {boolean}\n */\ngoog.userAgent.product.FIREFOX = goog.userAgent.product.PRODUCT_KNOWN_ ?\n    goog.userAgent.product.ASSUME_FIREFOX :\n    goog.labs.userAgent.browser.isFirefox();\n\n\n/**\n * Whether the user agent is an iPhone or iPod (as in iPod touch).\n * @return {boolean}\n * @private\n */\ngoog.userAgent.product.isIphoneOrIpod_ = function() {\n  return goog.labs.userAgent.platform.isIphone() ||\n      goog.labs.userAgent.platform.isIpod();\n};\n\n\n/**\n * Whether the code is running on an iPhone or iPod touch.\n *\n * iPod touch is considered an iPhone for legacy reasons.\n * @type {boolean}\n */\ngoog.userAgent.product.IPHONE = goog.userAgent.product.PRODUCT_KNOWN_ ?\n    goog.userAgent.product.ASSUME_IPHONE :\n    goog.userAgent.product.isIphoneOrIpod_();\n\n\n/**\n * Whether the code is running on an iPad.\n * @type {boolean}\n */\ngoog.userAgent.product.IPAD = goog.userAgent.product.PRODUCT_KNOWN_ ?\n    goog.userAgent.product.ASSUME_IPAD :\n    goog.labs.userAgent.platform.isIpad();\n\n\n/**\n * Whether the code is running on AOSP browser or WebView inside\n * a pre KitKat Android phone or tablet.\n * @type {boolean}\n */\ngoog.userAgent.product.ANDROID = goog.userAgent.product.PRODUCT_KNOWN_ ?\n    goog.userAgent.product.ASSUME_ANDROID :\n    goog.labs.userAgent.browser.isAndroidBrowser();\n\n\n/**\n * Whether the code is running on any Chromium-based web browser on any platform\n * or AOSP browser or WebView in a KitKat+ Android phone or tablet.\n * @type {boolean}\n */\ngoog.userAgent.product.CHROME = goog.userAgent.product.PRODUCT_KNOWN_ ?\n    goog.userAgent.product.ASSUME_CHROME :\n    goog.labs.userAgent.browser.isChrome();\n\n\n/**\n * @return {boolean} Whether the browser is Safari on desktop.\n * @private\n */\ngoog.userAgent.product.isSafariDesktop_ = function() {\n  return goog.labs.userAgent.browser.isSafari() &&\n      !goog.labs.userAgent.platform.isIos();\n};\n\n\n/**\n * Whether the code is running on the desktop Safari web browser.\n * Note: the legacy behavior here is only true for Safari not running\n * on iOS.\n * @type {boolean}\n */\ngoog.userAgent.product.SAFARI = goog.userAgent.product.PRODUCT_KNOWN_ ?\n    goog.userAgent.product.ASSUME_SAFARI :\n    goog.userAgent.product.isSafariDesktop_();\n","~:compiled-at",1591107228317,"~:source-map-json","{\n\"version\":3,\n\"file\":\"goog.useragent.product.js\",\n\"lineCount\":35,\n\"mappings\":\"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\",\n\"sources\":[\"goog/useragent/product.js\"],\n\"sourcesContent\":[\"// Copyright 2008 The Closure Library Authors. All Rights Reserved.\\n//\\n// Licensed under the Apache License, Version 2.0 (the \\\"License\\\");\\n// you may not use this file except in compliance with the License.\\n// You may obtain a copy of the License at\\n//\\n//      http://www.apache.org/licenses/LICENSE-2.0\\n//\\n// Unless required by applicable law or agreed to in writing, software\\n// distributed under the License is distributed on an \\\"AS-IS\\\" BASIS,\\n// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\\n// See the License for the specific language governing permissions and\\n// limitations under the License.\\n\\n/**\\n * @fileoverview Detects the specific browser and not just the rendering engine.\\n *\\n */\\n\\ngoog.provide('goog.userAgent.product');\\n\\ngoog.require('goog.labs.userAgent.browser');\\ngoog.require('goog.labs.userAgent.platform');\\ngoog.require('goog.userAgent');\\n\\n\\n/**\\n * @define {boolean} Whether the code is running on the Firefox web browser.\\n */\\ngoog.userAgent.product.ASSUME_FIREFOX =\\n    goog.define('goog.userAgent.product.ASSUME_FIREFOX', false);\\n\\n\\n/**\\n * @define {boolean} Whether we know at compile-time that the product is an\\n *     iPhone.\\n */\\ngoog.userAgent.product.ASSUME_IPHONE =\\n    goog.define('goog.userAgent.product.ASSUME_IPHONE', false);\\n\\n\\n/**\\n * @define {boolean} Whether we know at compile-time that the product is an\\n *     iPad.\\n */\\ngoog.userAgent.product.ASSUME_IPAD =\\n    goog.define('goog.userAgent.product.ASSUME_IPAD', false);\\n\\n\\n/**\\n * @define {boolean} Whether we know at compile-time that the product is an\\n *     AOSP browser or WebView inside a pre KitKat Android phone or tablet.\\n */\\ngoog.userAgent.product.ASSUME_ANDROID =\\n    goog.define('goog.userAgent.product.ASSUME_ANDROID', false);\\n\\n\\n/**\\n * @define {boolean} Whether the code is running on the Chrome web browser on\\n * any platform or AOSP browser or WebView in a KitKat+ Android phone or tablet.\\n */\\ngoog.userAgent.product.ASSUME_CHROME =\\n    goog.define('goog.userAgent.product.ASSUME_CHROME', false);\\n\\n\\n/**\\n * @define {boolean} Whether the code is running on the Safari web browser.\\n */\\ngoog.userAgent.product.ASSUME_SAFARI =\\n    goog.define('goog.userAgent.product.ASSUME_SAFARI', false);\\n\\n\\n/**\\n * Whether we know the product type at compile-time.\\n * @type {boolean}\\n * @private\\n */\\ngoog.userAgent.product.PRODUCT_KNOWN_ = goog.userAgent.ASSUME_IE ||\\n    goog.userAgent.ASSUME_EDGE || goog.userAgent.ASSUME_OPERA ||\\n    goog.userAgent.product.ASSUME_FIREFOX ||\\n    goog.userAgent.product.ASSUME_IPHONE ||\\n    goog.userAgent.product.ASSUME_IPAD ||\\n    goog.userAgent.product.ASSUME_ANDROID ||\\n    goog.userAgent.product.ASSUME_CHROME ||\\n    goog.userAgent.product.ASSUME_SAFARI;\\n\\n\\n/**\\n * Whether the code is running on the Opera web browser.\\n * @type {boolean}\\n */\\ngoog.userAgent.product.OPERA = goog.userAgent.OPERA;\\n\\n\\n/**\\n * Whether the code is running on an IE web browser.\\n * @type {boolean}\\n */\\ngoog.userAgent.product.IE = goog.userAgent.IE;\\n\\n\\n/**\\n * Whether the code is running on an Edge web browser (EdgeHTML based).\\n * @type {boolean}\\n */\\ngoog.userAgent.product.EDGE = goog.userAgent.EDGE;\\n\\n\\n/**\\n * Whether the code is running on the Firefox web browser.\\n * @type {boolean}\\n */\\ngoog.userAgent.product.FIREFOX = goog.userAgent.product.PRODUCT_KNOWN_ ?\\n    goog.userAgent.product.ASSUME_FIREFOX :\\n    goog.labs.userAgent.browser.isFirefox();\\n\\n\\n/**\\n * Whether the user agent is an iPhone or iPod (as in iPod touch).\\n * @return {boolean}\\n * @private\\n */\\ngoog.userAgent.product.isIphoneOrIpod_ = function() {\\n  return goog.labs.userAgent.platform.isIphone() ||\\n      goog.labs.userAgent.platform.isIpod();\\n};\\n\\n\\n/**\\n * Whether the code is running on an iPhone or iPod touch.\\n *\\n * iPod touch is considered an iPhone for legacy reasons.\\n * @type {boolean}\\n */\\ngoog.userAgent.product.IPHONE = goog.userAgent.product.PRODUCT_KNOWN_ ?\\n    goog.userAgent.product.ASSUME_IPHONE :\\n    goog.userAgent.product.isIphoneOrIpod_();\\n\\n\\n/**\\n * Whether the code is running on an iPad.\\n * @type {boolean}\\n */\\ngoog.userAgent.product.IPAD = goog.userAgent.product.PRODUCT_KNOWN_ ?\\n    goog.userAgent.product.ASSUME_IPAD :\\n    goog.labs.userAgent.platform.isIpad();\\n\\n\\n/**\\n * Whether the code is running on AOSP browser or WebView inside\\n * a pre KitKat Android phone or tablet.\\n * @type {boolean}\\n */\\ngoog.userAgent.product.ANDROID = goog.userAgent.product.PRODUCT_KNOWN_ ?\\n    goog.userAgent.product.ASSUME_ANDROID :\\n    goog.labs.userAgent.browser.isAndroidBrowser();\\n\\n\\n/**\\n * Whether the code is running on any Chromium-based web browser on any platform\\n * or AOSP browser or WebView in a KitKat+ Android phone or tablet.\\n * @type {boolean}\\n */\\ngoog.userAgent.product.CHROME = goog.userAgent.product.PRODUCT_KNOWN_ ?\\n    goog.userAgent.product.ASSUME_CHROME :\\n    goog.labs.userAgent.browser.isChrome();\\n\\n\\n/**\\n * @return {boolean} Whether the browser is Safari on desktop.\\n * @private\\n */\\ngoog.userAgent.product.isSafariDesktop_ = function() {\\n  return goog.labs.userAgent.browser.isSafari() &&\\n      !goog.labs.userAgent.platform.isIos();\\n};\\n\\n\\n/**\\n * Whether the code is running on the desktop Safari web browser.\\n * Note: the legacy behavior here is only true for Safari not running\\n * on iOS.\\n * @type {boolean}\\n */\\ngoog.userAgent.product.SAFARI = goog.userAgent.product.PRODUCT_KNOWN_ ?\\n    goog.userAgent.product.ASSUME_SAFARI :\\n    goog.userAgent.product.isSafariDesktop_();\\n\"],\n\"names\":[\"goog\",\"provide\",\"require\",\"userAgent\",\"product\",\"ASSUME_FIREFOX\",\"define\",\"ASSUME_IPHONE\",\"ASSUME_IPAD\",\"ASSUME_ANDROID\",\"ASSUME_CHROME\",\"ASSUME_SAFARI\",\"PRODUCT_KNOWN_\",\"ASSUME_IE\",\"ASSUME_EDGE\",\"ASSUME_OPERA\",\"OPERA\",\"IE\",\"EDGE\",\"FIREFOX\",\"labs\",\"browser\",\"isFirefox\",\"isIphoneOrIpod_\",\"goog.userAgent.product.isIphoneOrIpod_\",\"platform\",\"isIphone\",\"isIpod\",\"IPHONE\",\"IPAD\",\"isIpad\",\"ANDROID\",\"isAndroidBrowser\",\"CHROME\",\"isChrome\",\"isSafariDesktop_\",\"goog.userAgent.product.isSafariDesktop_\",\"isSafari\",\"isIos\",\"SAFARI\"]\n}\n"]