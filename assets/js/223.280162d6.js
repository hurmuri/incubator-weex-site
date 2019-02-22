(window.webpackJsonp=window.webpackJsonp||[]).push([[223],{407:function(e,t,r){"use strict";r.r(t);var s=r(1),i=Object(s.a)({},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"content"},[r("p",[e._v("本文将介绍 Weex 中 uri(url) 的用法。包括使用图像、字体等资源，处理相对路径以及如何访问本地及打包的资源文件。")]),e._m(0),e._m(1),e._m(2),e._m(3),e._m(4),e._m(5),e._m(6),r("p",[r("a",{attrs:{href:"https://www.w3.org/TR/html4/types.html#type-uri",target:"_blank",rel:"noopener noreferrer"}},[e._v("与我们在 HTML 中的用法类似"),r("OutboundLink")],1),e._v("，Weex 以相同的方式处理相对路径。以"),r("code",[e._v("/")]),e._v("、"),r("code",[e._v(".")]),e._v("、"),r("code",[e._v("..")]),e._v("、"),r("code",[e._v("//")]),e._v(" 开头的相对 URI 将相对于 bundle url 解析。")]),e._m(7),e._m(8),e._m(9)])},[function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"schemes"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#schemes","aria-hidden":"true"}},[this._v("#")]),this._v(" Schemes")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"本地资源"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#本地资源","aria-hidden":"true"}},[this._v("#")]),this._v(" 本地资源")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("Weex SDK 提供 "),t("code",[this._v("local")]),this._v("  scheme 来访问打包在应用程序中的资源，此 scheme 无法在 H5 环境下使用。目前，开发者可以在 "),t("code",[this._v("image")]),this._v(" 组件和字体文件中使用本地资源。")])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ul",[r("li",[r("p",[e._v("在 iOS 中，Weex 会在 "),r("code",[e._v("bundle resources")]),e._v(" 中查找。例如，"),r("code",[e._v("image")]),e._v(" 组件的 "),r("code",[e._v("src")]),e._v(" 属性为 "),r("code",[e._v("local:///app_icon'")]),e._v("， Weex 会加载 "),r("code",[e._v("bundle resouce")]),e._v(" 中名为 "),r("code",[e._v("app_icon")]),e._v(" 的图像资源，而字体文件也以相同的方式工作。")])]),r("li",[r("p",[e._v("在 Android 中，"),r("code",[e._v("image")]),e._v(" 组件将从 "),r("code",[e._v("drawable")]),e._v(" 资源文件夹加载，如  "),r("code",[e._v("res/drawable-xxx")]),e._v("。但加载字体文件是不同的，Android 框架无法从 "),r("code",[e._v("res")]),e._v(" 加载字体文件，因此 SDK 将从 "),r("code",[e._v("asserts")]),e._v(" 文件夹加载它。")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"远程资源"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#远程资源","aria-hidden":"true"}},[this._v("#")]),this._v(" 远程资源")])},function(){var e=this.$createElement,t=this._self._c||e;return t("ul",[t("li",[t("p",[this._v("HTTP/HTTPS,它的工作方式与 web 相同，Weex 一直支持这种方式。")])]),t("li",[t("p",[this._v("File ，使用 "),t("code",[this._v("file")]),this._v("  scheme 访问本地磁盘文件。这个方案有其局限性：")]),t("ul",[t("li",[this._v("你不应该在源页面中硬编码文件 url。因为不管它是否运行在不同的平台（iOS，Android）上，同一平台不同机型的结果也可能不同，这取决于具体的设备。")]),t("li",[this._v("所以一种可行的方案是在运行时动态获取文件 url，你可以使用它来显示本地磁盘的图像，或者稍后上传它。")])])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"相对路径"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#相对路径","aria-hidden":"true"}},[this._v("#")]),this._v(" 相对路径")])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("p",[e._v("这意味着， 一个以 "),r("code",[e._v("/")]),e._v(" 开头的路径将是相对于 JS Bundle 文件的根文件夹。"),r("code",[e._v(".")]),e._v(" 则是当前文件夹，"),r("code",[e._v("..")]),e._v(" 是父文件夹。 "),r("code",[e._v("//")]),e._v(" 则被解析为与 JS Bundle 相同的 scheme。")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"uri-adapter"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#uri-adapter","aria-hidden":"true"}},[this._v("#")]),this._v(" URI Adapter")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("以上所有是默认实现，开发者可以通过提供一个 "),t("code",[this._v("URI Adapter")]),this._v(" 来扩展或覆盖默认实现。与其他 Adapter 相同，应在 Weex SDK 初始化之前设置自定义 Adapter。")])}],!1,null,null,null);t.default=i.exports}}]);