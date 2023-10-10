"use weex:vue";

if (typeof Promise !== 'undefined' && !Promise.prototype.finally) {
  Promise.prototype.finally = function(callback) {
    const promise = this.constructor
    return this.then(
      value => promise.resolve(callback()).then(() => value),
      reason => promise.resolve(callback()).then(() => {
        throw reason
      })
    )
  }
};

if (typeof uni !== 'undefined' && uni && uni.requireGlobal) {
  const global = uni.requireGlobal()
  ArrayBuffer = global.ArrayBuffer
  Int8Array = global.Int8Array
  Uint8Array = global.Uint8Array
  Uint8ClampedArray = global.Uint8ClampedArray
  Int16Array = global.Int16Array
  Uint16Array = global.Uint16Array
  Int32Array = global.Int32Array
  Uint32Array = global.Uint32Array
  Float32Array = global.Float32Array
  Float64Array = global.Float64Array
  BigInt64Array = global.BigInt64Array
  BigUint64Array = global.BigUint64Array
};


(() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getOwnPropSymbols = Object.getOwnPropertySymbols;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __propIsEnum = Object.prototype.propertyIsEnumerable;
  var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
  var __spreadValues = (a, b) => {
    for (var prop in b || (b = {}))
      if (__hasOwnProp.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    if (__getOwnPropSymbols)
      for (var prop of __getOwnPropSymbols(b)) {
        if (__propIsEnum.call(b, prop))
          __defNormalProp(a, prop, b[prop]);
      }
    return a;
  };
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
    // If the importer is in node compatibility mode or this is not an ESM
    // file that has been converted to a CommonJS file using a Babel-
    // compatible transform (i.e. "__esModule" has not been set), then set
    // "default" to the CommonJS "module.exports" for node compatibility.
    isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
    mod
  ));
  var __async = (__this, __arguments, generator) => {
    return new Promise((resolve, reject) => {
      var fulfilled = (value) => {
        try {
          step(generator.next(value));
        } catch (e2) {
          reject(e2);
        }
      };
      var rejected = (value) => {
        try {
          step(generator.throw(value));
        } catch (e2) {
          reject(e2);
        }
      };
      var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
      step((generator = generator.apply(__this, __arguments)).next());
    });
  };

  // vue-ns:vue
  var require_vue = __commonJS({
    "vue-ns:vue"(exports, module) {
      module.exports = Vue;
    }
  });

  // ../../../../myitem/uniapp/轻影视/unpackage/dist/dev/.nvue/pages/play/play.js
  var import_vue = __toESM(require_vue());
  var isString = (val) => typeof val === "string";
  function formatAppLog(type, filename, ...args) {
    if (uni.__log__) {
      uni.__log__(type, filename, ...args);
    } else {
      console[type].apply(console, [...args, filename]);
    }
  }
  function resolveEasycom(component, easycom) {
    return isString(component) ? easycom : component;
  }
  var icons = {
    "uicon-level": "\uE693",
    "uicon-column-line": "\uE68E",
    "uicon-checkbox-mark": "\uE807",
    "uicon-folder": "\uE7F5",
    "uicon-movie": "\uE7F6",
    "uicon-star-fill": "\uE669",
    "uicon-star": "\uE65F",
    "uicon-phone-fill": "\uE64F",
    "uicon-phone": "\uE622",
    "uicon-apple-fill": "\uE881",
    "uicon-chrome-circle-fill": "\uE885",
    "uicon-backspace": "\uE67B",
    "uicon-attach": "\uE632",
    "uicon-cut": "\uE948",
    "uicon-empty-car": "\uE602",
    "uicon-empty-coupon": "\uE682",
    "uicon-empty-address": "\uE646",
    "uicon-empty-favor": "\uE67C",
    "uicon-empty-permission": "\uE686",
    "uicon-empty-news": "\uE687",
    "uicon-empty-search": "\uE664",
    "uicon-github-circle-fill": "\uE887",
    "uicon-rmb": "\uE608",
    "uicon-person-delete-fill": "\uE66A",
    "uicon-reload": "\uE788",
    "uicon-order": "\uE68F",
    "uicon-server-man": "\uE6BC",
    "uicon-search": "\uE62A",
    "uicon-fingerprint": "\uE955",
    "uicon-more-dot-fill": "\uE630",
    "uicon-scan": "\uE662",
    "uicon-share-square": "\uE60B",
    "uicon-map": "\uE61D",
    "uicon-map-fill": "\uE64E",
    "uicon-tags": "\uE629",
    "uicon-tags-fill": "\uE651",
    "uicon-bookmark-fill": "\uE63B",
    "uicon-bookmark": "\uE60A",
    "uicon-eye": "\uE613",
    "uicon-eye-fill": "\uE641",
    "uicon-mic": "\uE64A",
    "uicon-mic-off": "\uE649",
    "uicon-calendar": "\uE66E",
    "uicon-calendar-fill": "\uE634",
    "uicon-trash": "\uE623",
    "uicon-trash-fill": "\uE658",
    "uicon-play-left": "\uE66D",
    "uicon-play-right": "\uE610",
    "uicon-minus": "\uE618",
    "uicon-plus": "\uE62D",
    "uicon-info": "\uE653",
    "uicon-info-circle": "\uE7D2",
    "uicon-info-circle-fill": "\uE64B",
    "uicon-question": "\uE715",
    "uicon-error": "\uE6D3",
    "uicon-close": "\uE685",
    "uicon-checkmark": "\uE6A8",
    "uicon-android-circle-fill": "\uE67E",
    "uicon-android-fill": "\uE67D",
    "uicon-ie": "\uE87B",
    "uicon-IE-circle-fill": "\uE889",
    "uicon-google": "\uE87A",
    "uicon-google-circle-fill": "\uE88A",
    "uicon-setting-fill": "\uE872",
    "uicon-setting": "\uE61F",
    "uicon-minus-square-fill": "\uE855",
    "uicon-plus-square-fill": "\uE856",
    "uicon-heart": "\uE7DF",
    "uicon-heart-fill": "\uE851",
    "uicon-camera": "\uE7D7",
    "uicon-camera-fill": "\uE870",
    "uicon-more-circle": "\uE63E",
    "uicon-more-circle-fill": "\uE645",
    "uicon-chat": "\uE620",
    "uicon-chat-fill": "\uE61E",
    "uicon-bag-fill": "\uE617",
    "uicon-bag": "\uE619",
    "uicon-error-circle-fill": "\uE62C",
    "uicon-error-circle": "\uE624",
    "uicon-close-circle": "\uE63F",
    "uicon-close-circle-fill": "\uE637",
    "uicon-checkmark-circle": "\uE63D",
    "uicon-checkmark-circle-fill": "\uE635",
    "uicon-question-circle-fill": "\uE666",
    "uicon-question-circle": "\uE625",
    "uicon-share": "\uE631",
    "uicon-share-fill": "\uE65E",
    "uicon-shopping-cart": "\uE621",
    "uicon-shopping-cart-fill": "\uE65D",
    "uicon-bell": "\uE609",
    "uicon-bell-fill": "\uE640",
    "uicon-list": "\uE650",
    "uicon-list-dot": "\uE616",
    "uicon-zhihu": "\uE6BA",
    "uicon-zhihu-circle-fill": "\uE709",
    "uicon-zhifubao": "\uE6B9",
    "uicon-zhifubao-circle-fill": "\uE6B8",
    "uicon-weixin-circle-fill": "\uE6B1",
    "uicon-weixin-fill": "\uE6B2",
    "uicon-twitter-circle-fill": "\uE6AB",
    "uicon-twitter": "\uE6AA",
    "uicon-taobao-circle-fill": "\uE6A7",
    "uicon-taobao": "\uE6A6",
    "uicon-weibo-circle-fill": "\uE6A5",
    "uicon-weibo": "\uE6A4",
    "uicon-qq-fill": "\uE6A1",
    "uicon-qq-circle-fill": "\uE6A0",
    "uicon-moments-circel-fill": "\uE69A",
    "uicon-moments": "\uE69B",
    "uicon-qzone": "\uE695",
    "uicon-qzone-circle-fill": "\uE696",
    "uicon-baidu-circle-fill": "\uE680",
    "uicon-baidu": "\uE681",
    "uicon-facebook-circle-fill": "\uE68A",
    "uicon-facebook": "\uE689",
    "uicon-car": "\uE60C",
    "uicon-car-fill": "\uE636",
    "uicon-warning-fill": "\uE64D",
    "uicon-warning": "\uE694",
    "uicon-clock-fill": "\uE638",
    "uicon-clock": "\uE60F",
    "uicon-edit-pen": "\uE612",
    "uicon-edit-pen-fill": "\uE66B",
    "uicon-email": "\uE611",
    "uicon-email-fill": "\uE642",
    "uicon-minus-circle": "\uE61B",
    "uicon-minus-circle-fill": "\uE652",
    "uicon-plus-circle": "\uE62E",
    "uicon-plus-circle-fill": "\uE661",
    "uicon-file-text": "\uE663",
    "uicon-file-text-fill": "\uE665",
    "uicon-pushpin": "\uE7E3",
    "uicon-pushpin-fill": "\uE86E",
    "uicon-grid": "\uE673",
    "uicon-grid-fill": "\uE678",
    "uicon-play-circle": "\uE647",
    "uicon-play-circle-fill": "\uE655",
    "uicon-pause-circle-fill": "\uE654",
    "uicon-pause": "\uE8FA",
    "uicon-pause-circle": "\uE643",
    "uicon-eye-off": "\uE648",
    "uicon-eye-off-outline": "\uE62B",
    "uicon-gift-fill": "\uE65C",
    "uicon-gift": "\uE65B",
    "uicon-rmb-circle-fill": "\uE657",
    "uicon-rmb-circle": "\uE677",
    "uicon-kefu-ermai": "\uE656",
    "uicon-server-fill": "\uE751",
    "uicon-coupon-fill": "\uE8C4",
    "uicon-coupon": "\uE8AE",
    "uicon-integral": "\uE704",
    "uicon-integral-fill": "\uE703",
    "uicon-home-fill": "\uE964",
    "uicon-home": "\uE965",
    "uicon-hourglass-half-fill": "\uE966",
    "uicon-hourglass": "\uE967",
    "uicon-account": "\uE628",
    "uicon-plus-people-fill": "\uE626",
    "uicon-minus-people-fill": "\uE615",
    "uicon-account-fill": "\uE614",
    "uicon-thumb-down-fill": "\uE726",
    "uicon-thumb-down": "\uE727",
    "uicon-thumb-up": "\uE733",
    "uicon-thumb-up-fill": "\uE72F",
    "uicon-lock-fill": "\uE979",
    "uicon-lock-open": "\uE973",
    "uicon-lock-opened-fill": "\uE974",
    "uicon-lock": "\uE97A",
    "uicon-red-packet-fill": "\uE690",
    "uicon-photo-fill": "\uE98B",
    "uicon-photo": "\uE98D",
    "uicon-volume-off-fill": "\uE659",
    "uicon-volume-off": "\uE644",
    "uicon-volume-fill": "\uE670",
    "uicon-volume": "\uE633",
    "uicon-red-packet": "\uE691",
    "uicon-download": "\uE63C",
    "uicon-arrow-up-fill": "\uE6B0",
    "uicon-arrow-down-fill": "\uE600",
    "uicon-play-left-fill": "\uE675",
    "uicon-play-right-fill": "\uE676",
    "uicon-rewind-left-fill": "\uE679",
    "uicon-rewind-right-fill": "\uE67A",
    "uicon-arrow-downward": "\uE604",
    "uicon-arrow-leftward": "\uE601",
    "uicon-arrow-rightward": "\uE603",
    "uicon-arrow-upward": "\uE607",
    "uicon-arrow-down": "\uE60D",
    "uicon-arrow-right": "\uE605",
    "uicon-arrow-left": "\uE60E",
    "uicon-arrow-up": "\uE606",
    "uicon-skip-back-left": "\uE674",
    "uicon-skip-forward-right": "\uE672",
    "uicon-rewind-right": "\uE66F",
    "uicon-rewind-left": "\uE671",
    "uicon-arrow-right-double": "\uE68D",
    "uicon-arrow-left-double": "\uE68C",
    "uicon-wifi-off": "\uE668",
    "uicon-wifi": "\uE667",
    "uicon-empty-data": "\uE62F",
    "uicon-empty-history": "\uE684",
    "uicon-empty-list": "\uE68B",
    "uicon-empty-page": "\uE627",
    "uicon-empty-order": "\uE639",
    "uicon-man": "\uE697",
    "uicon-woman": "\uE69C",
    "uicon-man-add": "\uE61C",
    "uicon-man-add-fill": "\uE64C",
    "uicon-man-delete": "\uE61A",
    "uicon-man-delete-fill": "\uE66A",
    "uicon-zh": "\uE70A",
    "uicon-en": "\uE692"
  };
  var version = "3.1.6";
  {
    formatAppLog("log", "at uni_modules/uview-plus/libs/config/config.js:6", `
 %c uview-plus V${version} %c https://uiadmin.net/uview-plus 

`, "color: #ffffff; background: #3c9cff; padding:5px 0;", "color: #3c9cff;background: #ffffff; padding:5px 0;");
  }
  var config = {
    v: version,
    version,
    // 主题名称
    type: [
      "primary",
      "success",
      "info",
      "error",
      "warning"
    ],
    // 颜色部分，本来可以通过scss的:export导出供js使用，但是奈何nvue不支持
    color: {
      "u-primary": "#2979ff",
      "u-warning": "#ff9900",
      "u-success": "#19be6b",
      "u-error": "#fa3534",
      "u-info": "#909399",
      "u-main-color": "#303133",
      "u-content-color": "#606266",
      "u-tips-color": "#909399",
      "u-light-color": "#c0c4cc"
    },
    // 默认单位，可以通过配置为rpx，那么在用于传入组件大小参数为数值时，就默认为rpx
    unit: "px"
  };
  var ActionSheet = {
    // action-sheet组件
    actionSheet: {
      show: false,
      title: "",
      description: "",
      actions: () => [],
      index: "",
      cancelText: "",
      closeOnClickAction: true,
      safeAreaInsetBottom: true,
      openType: "",
      closeOnClickOverlay: true,
      round: 0
    }
  };
  var Album = {
    // album 组件
    album: {
      urls: () => [],
      keyName: "",
      singleSize: 180,
      multipleSize: 70,
      space: 6,
      singleMode: "scaleToFill",
      multipleMode: "aspectFill",
      maxCount: 9,
      previewFullImage: true,
      rowCount: 3,
      showMore: true
    }
  };
  var Alert = {
    // alert警告组件
    alert: {
      title: "",
      type: "warning",
      description: "",
      closable: false,
      showIcon: false,
      effect: "light",
      center: false,
      fontSize: 14
    }
  };
  var Avatar = {
    // avatar 组件
    avatar: {
      src: "",
      shape: "circle",
      size: 40,
      mode: "scaleToFill",
      text: "",
      bgColor: "#c0c4cc",
      color: "#ffffff",
      fontSize: 18,
      icon: "",
      mpAvatar: false,
      randomBgColor: false,
      defaultUrl: "",
      colorIndex: "",
      name: ""
    }
  };
  var AvatarGroup = {
    // avatarGroup 组件
    avatarGroup: {
      urls: () => [],
      maxCount: 5,
      shape: "circle",
      mode: "scaleToFill",
      showMore: true,
      size: 40,
      keyName: "",
      gap: 0.5,
      extraValue: 0
    }
  };
  var Backtop = {
    // backtop组件
    backtop: {
      mode: "circle",
      icon: "arrow-upward",
      text: "",
      duration: 100,
      scrollTop: 0,
      top: 400,
      bottom: 100,
      right: 20,
      zIndex: 9,
      iconStyle: () => ({
        color: "#909399",
        fontSize: "19px"
      })
    }
  };
  var Badge = {
    // 徽标数组件
    badge: {
      isDot: false,
      value: "",
      show: true,
      max: 999,
      type: "error",
      showZero: false,
      bgColor: null,
      color: null,
      shape: "circle",
      numberType: "overflow",
      offset: () => [],
      inverted: false,
      absolute: false
    }
  };
  var Button = {
    // button组件
    button: {
      hairline: false,
      type: "info",
      size: "normal",
      shape: "square",
      plain: false,
      disabled: false,
      loading: false,
      loadingText: "",
      loadingMode: "spinner",
      loadingSize: 15,
      openType: "",
      formType: "",
      appParameter: "",
      hoverStopPropagation: true,
      lang: "en",
      sessionFrom: "",
      sendMessageTitle: "",
      sendMessagePath: "",
      sendMessageImg: "",
      showMessageCard: false,
      dataName: "",
      throttleTime: 0,
      hoverStartTime: 0,
      hoverStayTime: 200,
      text: "",
      icon: "",
      iconColor: "",
      color: ""
    }
  };
  var Calendar = {
    // calendar 组件
    calendar: {
      title: "\u65E5\u671F\u9009\u62E9",
      showTitle: true,
      showSubtitle: true,
      mode: "single",
      startText: "\u5F00\u59CB",
      endText: "\u7ED3\u675F",
      customList: () => [],
      color: "#3c9cff",
      minDate: 0,
      maxDate: 0,
      defaultDate: null,
      maxCount: Number.MAX_SAFE_INTEGER,
      // Infinity
      rowHeight: 56,
      formatter: null,
      showLunar: false,
      showMark: true,
      confirmText: "\u786E\u5B9A",
      confirmDisabledText: "\u786E\u5B9A",
      show: false,
      closeOnClickOverlay: false,
      readonly: false,
      showConfirm: true,
      maxRange: Number.MAX_SAFE_INTEGER,
      // Infinity
      rangePrompt: "",
      showRangePrompt: true,
      allowSameDay: false,
      round: 0,
      monthNum: 3
    }
  };
  var CarKeyboard = {
    // 车牌号键盘
    carKeyboard: {
      random: false
    }
  };
  var Cell = {
    // cell组件的props
    cell: {
      customClass: "",
      title: "",
      label: "",
      value: "",
      icon: "",
      disabled: false,
      border: true,
      center: false,
      url: "",
      linkType: "navigateTo",
      clickable: false,
      isLink: false,
      required: false,
      arrowDirection: "",
      iconStyle: {},
      rightIconStyle: {},
      rightIcon: "arrow-right",
      titleStyle: {},
      size: "",
      stop: true,
      name: ""
    }
  };
  var CellGroup = {
    // cell-group组件的props
    cellGroup: {
      title: "",
      border: true,
      customStyle: {}
    }
  };
  var Checkbox = {
    // checkbox组件
    checkbox: {
      name: "",
      shape: "",
      size: "",
      checkbox: false,
      disabled: "",
      activeColor: "",
      inactiveColor: "",
      iconSize: "",
      iconColor: "",
      label: "",
      labelSize: "",
      labelColor: "",
      labelDisabled: ""
    }
  };
  var CheckboxGroup = {
    // checkbox-group组件
    checkboxGroup: {
      name: "",
      value: () => [],
      shape: "square",
      disabled: false,
      activeColor: "#2979ff",
      inactiveColor: "#c8c9cc",
      size: 18,
      placement: "row",
      labelSize: 14,
      labelColor: "#303133",
      labelDisabled: false,
      iconColor: "#ffffff",
      iconSize: 12,
      iconPlacement: "left",
      borderBottom: false
    }
  };
  var CircleProgress = {
    // circleProgress 组件
    circleProgress: {
      percentage: 30
    }
  };
  var Code = {
    // code 组件
    code: {
      seconds: 60,
      startText: "\u83B7\u53D6\u9A8C\u8BC1\u7801",
      changeText: "X\u79D2\u91CD\u65B0\u83B7\u53D6",
      endText: "\u91CD\u65B0\u83B7\u53D6",
      keepRunning: false,
      uniqueKey: ""
    }
  };
  var CodeInput = {
    // codeInput 组件
    codeInput: {
      adjustPosition: true,
      maxlength: 6,
      dot: false,
      mode: "box",
      hairline: false,
      space: 10,
      value: "",
      focus: false,
      bold: false,
      color: "#606266",
      fontSize: 18,
      size: 35,
      disabledKeyboard: false,
      borderColor: "#c9cacc",
      disabledDot: true
    }
  };
  var Col = {
    // col 组件
    col: {
      span: 12,
      offset: 0,
      justify: "start",
      align: "stretch",
      textAlign: "left"
    }
  };
  var Collapse = {
    // collapse 组件
    collapse: {
      value: null,
      accordion: false,
      border: true
    }
  };
  var CollapseItem = {
    // collapseItem 组件
    collapseItem: {
      title: "",
      value: "",
      label: "",
      disabled: false,
      isLink: true,
      clickable: true,
      border: true,
      align: "left",
      name: "",
      icon: "",
      duration: 300
    }
  };
  var ColumnNotice = {
    // columnNotice 组件
    columnNotice: {
      text: "",
      icon: "volume",
      mode: "",
      color: "#f9ae3d",
      bgColor: "#fdf6ec",
      fontSize: 14,
      speed: 80,
      step: false,
      duration: 1500,
      disableTouch: true
    }
  };
  var CountDown = {
    // u-count-down 计时器组件
    countDown: {
      time: 0,
      format: "HH:mm:ss",
      autoStart: true,
      millisecond: false
    }
  };
  var CountTo = {
    // countTo 组件
    countTo: {
      startVal: 0,
      endVal: 0,
      duration: 2e3,
      autoplay: true,
      decimals: 0,
      useEasing: true,
      decimal: ".",
      color: "#606266",
      fontSize: 22,
      bold: false,
      separator: ""
    }
  };
  var DatetimePicker = {
    // datetimePicker 组件
    datetimePicker: {
      show: false,
      showToolbar: true,
      value: "",
      title: "",
      mode: "datetime",
      maxDate: new Date(new Date().getFullYear() + 10, 0, 1).getTime(),
      minDate: new Date(new Date().getFullYear() - 10, 0, 1).getTime(),
      minHour: 0,
      maxHour: 23,
      minMinute: 0,
      maxMinute: 59,
      filter: null,
      formatter: null,
      loading: false,
      itemHeight: 44,
      cancelText: "\u53D6\u6D88",
      confirmText: "\u786E\u8BA4",
      cancelColor: "#909193",
      confirmColor: "#3c9cff",
      visibleItemCount: 5,
      closeOnClickOverlay: false,
      defaultIndex: () => []
    }
  };
  var Divider = {
    // divider组件
    divider: {
      dashed: false,
      hairline: true,
      dot: false,
      textPosition: "center",
      text: "",
      textSize: 14,
      textColor: "#909399",
      lineColor: "#dcdfe6"
    }
  };
  var Empty = {
    // empty组件
    empty: {
      icon: "",
      text: "",
      textColor: "#c0c4cc",
      textSize: 14,
      iconColor: "#c0c4cc",
      iconSize: 90,
      mode: "data",
      width: 160,
      height: 160,
      show: true,
      marginTop: 0
    }
  };
  var Form = {
    // form 组件
    form: {
      model: () => ({}),
      rules: () => ({}),
      errorType: "message",
      borderBottom: true,
      labelPosition: "left",
      labelWidth: 45,
      labelAlign: "left",
      labelStyle: () => ({})
    }
  };
  var GormItem = {
    // formItem 组件
    formItem: {
      label: "",
      prop: "",
      borderBottom: "",
      labelWidth: "",
      rightIcon: "",
      leftIcon: "",
      required: false,
      leftIconStyle: ""
    }
  };
  var Gap = {
    // gap组件
    gap: {
      bgColor: "transparent",
      height: 20,
      marginTop: 0,
      marginBottom: 0,
      customStyle: {}
    }
  };
  var Grid = {
    // grid组件
    grid: {
      col: 3,
      border: false,
      align: "left"
    }
  };
  var GridItem = {
    // grid-item组件
    gridItem: {
      name: null,
      bgColor: "transparent"
    }
  };
  var {
    color: color$3
  } = config;
  var Icon = {
    // icon组件
    icon: {
      name: "",
      color: color$3["u-content-color"],
      size: "16px",
      bold: false,
      index: "",
      hoverClass: "",
      customPrefix: "uicon",
      label: "",
      labelPos: "right",
      labelSize: "15px",
      labelColor: color$3["u-content-color"],
      space: "3px",
      imgMode: "",
      width: "",
      height: "",
      top: 0,
      stop: false
    }
  };
  var Image = {
    // image组件
    image: {
      src: "",
      mode: "aspectFill",
      width: "300",
      height: "225",
      shape: "square",
      radius: 0,
      lazyLoad: true,
      showMenuByLongpress: true,
      loadingIcon: "photo",
      errorIcon: "error-circle",
      showLoading: true,
      showError: true,
      fade: true,
      webp: false,
      duration: 500,
      bgColor: "#f3f4f6"
    }
  };
  var IndexAnchor = {
    // indexAnchor 组件
    indexAnchor: {
      text: "",
      color: "#606266",
      size: 14,
      bgColor: "#dedede",
      height: 32
    }
  };
  var IndexList = {
    // indexList 组件
    indexList: {
      inactiveColor: "#606266",
      activeColor: "#5677fc",
      indexList: () => [],
      sticky: true,
      customNavHeight: 0
    }
  };
  var Input = {
    // index 组件
    input: {
      value: "",
      type: "text",
      fixed: false,
      disabled: false,
      disabledColor: "#f5f7fa",
      clearable: false,
      password: false,
      maxlength: -1,
      placeholder: null,
      placeholderClass: "input-placeholder",
      placeholderStyle: "color: #c0c4cc",
      showWordLimit: false,
      confirmType: "done",
      confirmHold: false,
      holdKeyboard: false,
      focus: false,
      autoBlur: false,
      disableDefaultPadding: false,
      cursor: -1,
      cursorSpacing: 30,
      selectionStart: -1,
      selectionEnd: -1,
      adjustPosition: true,
      inputAlign: "left",
      fontSize: "15px",
      color: "#303133",
      prefixIcon: "",
      prefixIconStyle: "",
      suffixIcon: "",
      suffixIconStyle: "",
      border: "surround",
      readonly: false,
      shape: "square",
      formatter: null
    }
  };
  var Keyboard = {
    // 键盘组件
    keyboard: {
      mode: "number",
      dotDisabled: false,
      tooltip: true,
      showTips: true,
      tips: "",
      showCancel: true,
      showConfirm: true,
      random: false,
      safeAreaInsetBottom: true,
      closeOnClickOverlay: true,
      show: false,
      overlay: true,
      zIndex: 10075,
      cancelText: "\u53D6\u6D88",
      confirmText: "\u786E\u5B9A",
      autoChange: false
    }
  };
  var Line = {
    // line组件
    line: {
      color: "#d6d7d9",
      length: "100%",
      direction: "row",
      hairline: true,
      margin: 0,
      dashed: false
    }
  };
  var LineProgress = {
    // lineProgress 组件
    lineProgress: {
      activeColor: "#19be6b",
      inactiveColor: "#ececec",
      percentage: 0,
      showText: true,
      height: 12
    }
  };
  var {
    color: color$2
  } = config;
  var Link = {
    // link超链接组件props参数
    link: {
      color: color$2["u-primary"],
      fontSize: 15,
      underLine: false,
      href: "",
      mpTips: "\u94FE\u63A5\u5DF2\u590D\u5236\uFF0C\u8BF7\u5728\u6D4F\u89C8\u5668\u6253\u5F00",
      lineColor: "",
      text: ""
    }
  };
  var List = {
    // list 组件
    list: {
      showScrollbar: false,
      lowerThreshold: 50,
      upperThreshold: 0,
      scrollTop: 0,
      offsetAccuracy: 10,
      enableFlex: false,
      pagingEnabled: false,
      scrollable: true,
      scrollIntoView: "",
      scrollWithAnimation: false,
      enableBackToTop: false,
      height: 0,
      width: 0,
      preLoadScreen: 1
    }
  };
  var ListItem = {
    // listItem 组件
    listItem: {
      anchor: ""
    }
  };
  var {
    color: color$1
  } = config;
  var LoadingIcon = {
    // loading-icon加载中图标组件
    loadingIcon: {
      show: true,
      color: color$1["u-tips-color"],
      textColor: color$1["u-tips-color"],
      vertical: false,
      mode: "spinner",
      size: 24,
      textSize: 15,
      text: "",
      timingFunction: "ease-in-out",
      duration: 1200,
      inactiveColor: ""
    }
  };
  var LoadingPage = {
    // loading-page组件
    loadingPage: {
      loadingText: "\u6B63\u5728\u52A0\u8F7D",
      image: "",
      loadingMode: "circle",
      loading: false,
      bgColor: "#ffffff",
      color: "#C8C8C8",
      fontSize: 19,
      iconSize: 28,
      loadingColor: "#C8C8C8"
    }
  };
  var Loadmore = {
    // loadmore 组件
    loadmore: {
      status: "loadmore",
      bgColor: "transparent",
      icon: true,
      fontSize: 14,
      iconSize: 17,
      color: "#606266",
      loadingIcon: "spinner",
      loadmoreText: "\u52A0\u8F7D\u66F4\u591A",
      loadingText: "\u6B63\u5728\u52A0\u8F7D...",
      nomoreText: "\u6CA1\u6709\u66F4\u591A\u4E86",
      isDot: false,
      iconColor: "#b7b7b7",
      marginTop: 10,
      marginBottom: 10,
      height: "auto",
      line: false,
      lineColor: "#E6E8EB",
      dashed: false
    }
  };
  var Modal = {
    // modal 组件
    modal: {
      show: false,
      title: "",
      content: "",
      confirmText: "\u786E\u8BA4",
      cancelText: "\u53D6\u6D88",
      showConfirmButton: true,
      showCancelButton: false,
      confirmColor: "#2979ff",
      cancelColor: "#606266",
      buttonReverse: false,
      zoom: true,
      asyncClose: false,
      closeOnClickOverlay: false,
      negativeTop: 0,
      width: "650rpx",
      confirmButtonShape: ""
    }
  };
  var color = {
    primary: "#3c9cff",
    info: "#909399",
    default: "#909399",
    warning: "#f9ae3d",
    error: "#f56c6c",
    success: "#5ac725",
    mainColor: "#303133",
    contentColor: "#606266",
    tipsColor: "#909399",
    lightColor: "#c0c4cc",
    borderColor: "#e4e7ed"
  };
  var Navbar = {
    // navbar 组件
    navbar: {
      safeAreaInsetTop: true,
      placeholder: false,
      fixed: true,
      border: false,
      leftIcon: "arrow-left",
      leftText: "",
      rightText: "",
      rightIcon: "",
      title: "",
      bgColor: "#ffffff",
      titleWidth: "400rpx",
      height: "44px",
      leftIconSize: 20,
      leftIconColor: color.mainColor,
      autoBack: false,
      titleStyle: ""
    }
  };
  var NoNetwork = {
    // noNetwork
    noNetwork: {
      tips: "\u54CE\u5440\uFF0C\u7F51\u7EDC\u4FE1\u53F7\u4E22\u5931",
      zIndex: "",
      image: "data:image/png;base64,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"
    }
  };
  var NoticeBar = {
    // noticeBar
    noticeBar: {
      text: () => [],
      direction: "row",
      step: false,
      icon: "volume",
      mode: "",
      color: "#f9ae3d",
      bgColor: "#fdf6ec",
      speed: 80,
      fontSize: 14,
      duration: 2e3,
      disableTouch: true,
      url: "",
      linkType: "navigateTo"
    }
  };
  var Notify = {
    // notify组件
    notify: {
      top: 0,
      type: "primary",
      color: "#ffffff",
      bgColor: "",
      message: "",
      duration: 3e3,
      fontSize: 15,
      safeAreaInsetTop: false
    }
  };
  var NumberBox = {
    // 步进器组件
    numberBox: {
      name: "",
      value: 0,
      min: 1,
      max: Number.MAX_SAFE_INTEGER,
      step: 1,
      integer: false,
      disabled: false,
      disabledInput: false,
      asyncChange: false,
      inputWidth: 35,
      showMinus: true,
      showPlus: true,
      decimalLength: null,
      longPress: true,
      color: "#323233",
      buttonSize: 30,
      bgColor: "#EBECEE",
      cursorSpacing: 100,
      disableMinus: false,
      disablePlus: false,
      iconStyle: ""
    }
  };
  var NumberKeyboard = {
    // 数字键盘
    numberKeyboard: {
      mode: "number",
      dotDisabled: false,
      random: false
    }
  };
  var Overlay = {
    // overlay组件
    overlay: {
      show: false,
      zIndex: 10070,
      duration: 300,
      opacity: 0.5
    }
  };
  var Parse = {
    // parse
    parse: {
      copyLink: true,
      errorImg: "",
      lazyLoad: false,
      loadingImg: "",
      pauseVideo: true,
      previewImg: true,
      setTitle: true,
      showImgMenu: true
    }
  };
  var Picker = {
    // picker
    picker: {
      show: false,
      showToolbar: true,
      title: "",
      columns: () => [],
      loading: false,
      itemHeight: 44,
      cancelText: "\u53D6\u6D88",
      confirmText: "\u786E\u5B9A",
      cancelColor: "#909193",
      confirmColor: "#3c9cff",
      visibleItemCount: 5,
      keyName: "text",
      closeOnClickOverlay: false,
      defaultIndex: () => [],
      immediateChange: false
    }
  };
  var Popup = {
    // popup组件
    popup: {
      show: false,
      overlay: true,
      mode: "bottom",
      duration: 300,
      closeable: false,
      overlayStyle: () => {
      },
      closeOnClickOverlay: true,
      zIndex: 10075,
      safeAreaInsetBottom: true,
      safeAreaInsetTop: false,
      closeIconPos: "top-right",
      round: 0,
      zoom: true,
      bgColor: "",
      overlayOpacity: 0.5
    }
  };
  var Radio = {
    // radio组件
    radio: {
      name: "",
      shape: "",
      disabled: "",
      labelDisabled: "",
      activeColor: "",
      inactiveColor: "",
      iconSize: "",
      labelSize: "",
      label: "",
      labelColor: "",
      size: "",
      iconColor: "",
      placement: ""
    }
  };
  var RadioGroup = {
    // radio-group组件
    radioGroup: {
      value: "",
      disabled: false,
      shape: "circle",
      activeColor: "#2979ff",
      inactiveColor: "#c8c9cc",
      name: "",
      size: 18,
      placement: "row",
      label: "",
      labelColor: "#303133",
      labelSize: 14,
      labelDisabled: false,
      iconColor: "#ffffff",
      iconSize: 12,
      borderBottom: false,
      iconPlacement: "left"
    }
  };
  var Rate = {
    // rate组件
    rate: {
      value: 1,
      count: 5,
      disabled: false,
      size: 18,
      inactiveColor: "#b2b2b2",
      activeColor: "#FA3534",
      gutter: 4,
      minCount: 1,
      allowHalf: false,
      activeIcon: "star-fill",
      inactiveIcon: "star",
      touchable: true
    }
  };
  var ReadMore = {
    // readMore
    readMore: {
      showHeight: 400,
      toggle: false,
      closeText: "\u5C55\u5F00\u9605\u8BFB\u5168\u6587",
      openText: "\u6536\u8D77",
      color: "#2979ff",
      fontSize: 14,
      textIndent: "2em",
      name: ""
    }
  };
  var Row = {
    // row
    row: {
      gutter: 0,
      justify: "start",
      align: "center"
    }
  };
  var RowNotice = {
    // rowNotice
    rowNotice: {
      text: "",
      icon: "volume",
      mode: "",
      color: "#f9ae3d",
      bgColor: "#fdf6ec",
      fontSize: 14,
      speed: 80
    }
  };
  var ScrollList = {
    // scrollList
    scrollList: {
      indicatorWidth: 50,
      indicatorBarWidth: 20,
      indicator: true,
      indicatorColor: "#f2f2f2",
      indicatorActiveColor: "#3c9cff",
      indicatorStyle: ""
    }
  };
  var Search = {
    // search
    search: {
      shape: "round",
      bgColor: "#f2f2f2",
      placeholder: "\u8BF7\u8F93\u5165\u5173\u952E\u5B57",
      clearabled: true,
      focus: false,
      showAction: true,
      actionStyle: () => ({}),
      actionText: "\u641C\u7D22",
      inputAlign: "left",
      inputStyle: () => ({}),
      disabled: false,
      borderColor: "transparent",
      searchIconColor: "#909399",
      searchIconSize: 22,
      color: "#606266",
      placeholderColor: "#909399",
      searchIcon: "search",
      margin: "0",
      animation: false,
      value: "",
      maxlength: "-1",
      height: 32,
      label: null
    }
  };
  var Section = {
    // u-section组件
    section: {
      title: "",
      subTitle: "\u66F4\u591A",
      right: true,
      fontSize: 15,
      bold: true,
      color: "#303133",
      subColor: "#909399",
      showLine: true,
      lineColor: "",
      arrow: true
    }
  };
  var Skeleton = {
    // skeleton
    skeleton: {
      loading: true,
      animate: true,
      rows: 0,
      rowsWidth: "100%",
      rowsHeight: 18,
      title: true,
      titleWidth: "50%",
      titleHeight: 18,
      avatar: false,
      avatarSize: 32,
      avatarShape: "circle"
    }
  };
  var Slider = {
    // slider组件
    slider: {
      value: 0,
      blockSize: 18,
      min: 0,
      max: 100,
      step: 1,
      activeColor: "#2979ff",
      inactiveColor: "#c0c4cc",
      blockColor: "#ffffff",
      showValue: false,
      disabled: false,
      blockStyle: () => {
      }
    }
  };
  var StatusBar = {
    // statusBar
    statusBar: {
      bgColor: "transparent"
    }
  };
  var Steps = {
    // steps组件
    steps: {
      direction: "row",
      current: 0,
      activeColor: "#3c9cff",
      inactiveColor: "#969799",
      activeIcon: "",
      inactiveIcon: "",
      dot: false
    }
  };
  var StepsItem = {
    // steps-item组件
    stepsItem: {
      title: "",
      desc: "",
      iconSize: 17,
      error: false
    }
  };
  var Sticky = {
    // sticky组件
    sticky: {
      offsetTop: 0,
      customNavHeight: 0,
      disabled: false,
      bgColor: "transparent",
      zIndex: "",
      index: ""
    }
  };
  var Subsection = {
    // subsection组件
    subsection: {
      list: [],
      current: 0,
      activeColor: "#3c9cff",
      inactiveColor: "#303133",
      mode: "button",
      fontSize: 12,
      bold: true,
      bgColor: "#eeeeef",
      keyName: "name"
    }
  };
  var SwipeAction = {
    // swipe-action组件
    swipeAction: {
      autoClose: true
    }
  };
  var SwipeActionItem = {
    // swipeActionItem 组件
    swipeActionItem: {
      show: false,
      name: "",
      disabled: false,
      threshold: 20,
      autoClose: true,
      options: [],
      duration: 300
    }
  };
  var Swiper = {
    // swiper 组件
    swiper: {
      list: () => [],
      indicator: false,
      indicatorActiveColor: "#FFFFFF",
      indicatorInactiveColor: "rgba(255, 255, 255, 0.35)",
      indicatorStyle: "",
      indicatorMode: "line",
      autoplay: true,
      current: 0,
      currentItemId: "",
      interval: 3e3,
      duration: 300,
      circular: false,
      previousMargin: 0,
      nextMargin: 0,
      acceleration: false,
      displayMultipleItems: 1,
      easingFunction: "default",
      keyName: "url",
      imgMode: "aspectFill",
      height: 130,
      bgColor: "#f3f4f6",
      radius: 4,
      loading: false,
      showTitle: false
    }
  };
  var SwipterIndicator = {
    // swiperIndicator 组件
    swiperIndicator: {
      length: 0,
      current: 0,
      indicatorActiveColor: "",
      indicatorInactiveColor: "",
      indicatorMode: "line"
    }
  };
  var Switch = {
    // switch
    switch: {
      loading: false,
      disabled: false,
      size: 25,
      activeColor: "#2979ff",
      inactiveColor: "#ffffff",
      value: false,
      activeValue: true,
      inactiveValue: false,
      asyncChange: false,
      space: 0
    }
  };
  var Tabbar = {
    // tabbar
    tabbar: {
      value: null,
      safeAreaInsetBottom: true,
      border: true,
      zIndex: 1,
      activeColor: "#1989fa",
      inactiveColor: "#7d7e80",
      fixed: true,
      placeholder: true
    }
  };
  var TabbarItem = {
    //
    tabbarItem: {
      name: null,
      icon: "",
      badge: null,
      dot: false,
      text: "",
      badgeStyle: "top: 6px;right:2px;"
    }
  };
  var Tabs = {
    //
    tabs: {
      duration: 300,
      list: () => [],
      lineColor: "#3c9cff",
      activeStyle: () => ({
        color: "#303133"
      }),
      inactiveStyle: () => ({
        color: "#606266"
      }),
      lineWidth: 20,
      lineHeight: 3,
      lineBgSize: "cover",
      itemStyle: () => ({
        height: "44px"
      }),
      scrollable: true,
      current: 0,
      keyName: "name"
    }
  };
  var Tag = {
    // tag 组件
    tag: {
      type: "primary",
      disabled: false,
      size: "medium",
      shape: "square",
      text: "",
      bgColor: "",
      color: "",
      borderColor: "",
      closeColor: "#C6C7CB",
      name: "",
      plainFill: false,
      plain: false,
      closable: false,
      show: true,
      icon: ""
    }
  };
  var Text = {
    // text 组件
    text: {
      type: "",
      show: true,
      text: "",
      prefixIcon: "",
      suffixIcon: "",
      mode: "",
      href: "",
      format: "",
      call: false,
      openType: "",
      bold: false,
      block: false,
      lines: "",
      color: "#303133",
      size: 15,
      iconStyle: () => ({
        fontSize: "15px"
      }),
      decoration: "none",
      margin: 0,
      lineHeight: "",
      align: "left",
      wordWrap: "normal"
    }
  };
  var Textarea = {
    // textarea 组件
    textarea: {
      value: "",
      placeholder: "",
      placeholderClass: "textarea-placeholder",
      placeholderStyle: "color: #c0c4cc",
      height: 70,
      confirmType: "done",
      disabled: false,
      count: false,
      focus: false,
      autoHeight: false,
      fixed: false,
      cursorSpacing: 0,
      cursor: "",
      showConfirmBar: true,
      selectionStart: -1,
      selectionEnd: -1,
      adjustPosition: true,
      disableDefaultPadding: false,
      holdKeyboard: false,
      maxlength: 140,
      border: "surround",
      formatter: null
    }
  };
  var Toast = {
    // toast组件
    toast: {
      zIndex: 10090,
      loading: false,
      text: "",
      icon: "",
      type: "",
      loadingMode: "",
      show: "",
      overlay: false,
      position: "center",
      params: () => {
      },
      duration: 2e3,
      isTab: false,
      url: "",
      callback: null,
      back: false
    }
  };
  var Toolbar = {
    // toolbar 组件
    toolbar: {
      show: true,
      cancelText: "\u53D6\u6D88",
      confirmText: "\u786E\u8BA4",
      cancelColor: "#909193",
      confirmColor: "#3c9cff",
      title: ""
    }
  };
  var Tooltip = {
    // tooltip 组件
    tooltip: {
      text: "",
      copyText: "",
      size: 14,
      color: "#606266",
      bgColor: "transparent",
      direction: "top",
      zIndex: 10071,
      showCopy: true,
      buttons: () => [],
      overlay: true,
      showToast: true
    }
  };
  var Transition = {
    // transition动画组件的props
    transition: {
      show: false,
      mode: "fade",
      duration: "300",
      timingFunction: "ease-out"
    }
  };
  var Upload = {
    // upload组件
    upload: {
      accept: "image",
      capture: () => ["album", "camera"],
      compressed: true,
      camera: "back",
      maxDuration: 60,
      uploadIcon: "camera-fill",
      uploadIconColor: "#D3D4D6",
      useBeforeRead: false,
      previewFullImage: true,
      maxCount: 52,
      disabled: false,
      imageMode: "aspectFill",
      name: "",
      sizeType: () => ["original", "compressed"],
      multiple: false,
      deletable: true,
      maxSize: Number.MAX_VALUE,
      fileList: () => [],
      uploadText: "",
      width: 80,
      height: 80,
      previewImage: true
    }
  };
  var defprops = __spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues({}, ActionSheet), Album), Alert), Avatar), AvatarGroup), Backtop), Badge), Button), Calendar), CarKeyboard), Cell), CellGroup), Checkbox), CheckboxGroup), CircleProgress), Code), CodeInput), Col), Collapse), CollapseItem), ColumnNotice), CountDown), CountTo), DatetimePicker), Divider), Empty), Form), GormItem), Gap), Grid), GridItem), Icon), Image), IndexAnchor), IndexList), Input), Keyboard), Line), LineProgress), Link), List), ListItem), LoadingIcon), LoadingPage), Loadmore), Modal), Navbar), NoNetwork), NoticeBar), Notify), NumberBox), NumberKeyboard), Overlay), Parse), Picker), Popup), Radio), RadioGroup), Rate), ReadMore), Row), RowNotice), ScrollList), Search), Section), Skeleton), Slider), StatusBar), Steps), StepsItem), Sticky), Subsection), SwipeAction), SwipeActionItem), Swiper), SwipterIndicator), Switch), Tabbar), TabbarItem), Tabs), Tag), Text), Textarea), Toast), Toolbar), Tooltip), Transition), Upload);
  var props$1 = {
    props: {
      // 图标类名
      name: {
        type: String,
        default: defprops.icon.name
      },
      // 图标颜色，可接受主题色
      color: {
        type: String,
        default: defprops.icon.color
      },
      // 字体大小，单位px
      size: {
        type: [String, Number],
        default: defprops.icon.size
      },
      // 是否显示粗体
      bold: {
        type: Boolean,
        default: defprops.icon.bold
      },
      // 点击图标的时候传递事件出去的index（用于区分点击了哪一个）
      index: {
        type: [String, Number],
        default: defprops.icon.index
      },
      // 触摸图标时的类名
      hoverClass: {
        type: String,
        default: defprops.icon.hoverClass
      },
      // 自定义扩展前缀，方便用户扩展自己的图标库
      customPrefix: {
        type: String,
        default: defprops.icon.customPrefix
      },
      // 图标右边或者下面的文字
      label: {
        type: [String, Number],
        default: defprops.icon.label
      },
      // label的位置，只能右边或者下边
      labelPos: {
        type: String,
        default: defprops.icon.labelPos
      },
      // label的大小
      labelSize: {
        type: [String, Number],
        default: defprops.icon.labelSize
      },
      // label的颜色
      labelColor: {
        type: String,
        default: defprops.icon.labelColor
      },
      // label与图标的距离
      space: {
        type: [String, Number],
        default: defprops.icon.space
      },
      // 图片的mode
      imgMode: {
        type: String,
        default: defprops.icon.imgMode
      },
      // 用于显示图片小图标时，图片的宽度
      width: {
        type: [String, Number],
        default: defprops.icon.width
      },
      // 用于显示图片小图标时，图片的高度
      height: {
        type: [String, Number],
        default: defprops.icon.height
      },
      // 用于解决某些情况下，让图标垂直居中的用途
      top: {
        type: [String, Number],
        default: defprops.icon.top
      },
      // 是否阻止事件传播
      stop: {
        type: Boolean,
        default: defprops.icon.stop
      }
    }
  };
  var mpMixin = {};
  var mixin = {
    // 定义每个组件都可能需要用到的外部样式以及类名
    props: {
      // 每个组件都有的父组件传递的样式，可以为字符串或者对象形式
      customStyle: {
        type: [Object, String],
        default: () => ({})
      },
      customClass: {
        type: String,
        default: ""
      },
      // 跳转的页面路径
      url: {
        type: String,
        default: ""
      },
      // 页面跳转的类型
      linkType: {
        type: String,
        default: "navigateTo"
      }
    },
    data() {
      return {};
    },
    onLoad() {
      this.$u.getRect = this.$uGetRect;
    },
    created() {
      this.$u.getRect = this.$uGetRect;
    },
    computed: {
      // 在2.x版本中，将会把$u挂载到uni对象下，导致在模板中无法使用uni.$u.xxx形式
      // 所以这里通过computed计算属性将其附加到this.$u上，就可以在模板或者js中使用uni.$u.xxx
      // 只在nvue环境通过此方式引入完整的$u，其他平台会出现性能问题，非nvue则按需引入（主要原因是props过大）
      $u() {
        return uni.$u;
      },
      /**
       * 生成bem规则类名
       * 由于微信小程序，H5，nvue之间绑定class的差异，无法通过:class="[bem()]"的形式进行同用
       * 故采用如下折中做法，最后返回的是数组（一般平台）或字符串（支付宝和字节跳动平台），类似['a', 'b', 'c']或'a b c'的形式
       * @param {String} name 组件名称
       * @param {Array} fixed 一直会存在的类名
       * @param {Array} change 会根据变量值为true或者false而出现或者隐藏的类名
       * @returns {Array|string}
       */
      bem() {
        return function(name, fixed, change) {
          const prefix = `u-${name}--`;
          const classes = {};
          if (fixed) {
            fixed.map((item) => {
              classes[prefix + this[item]] = true;
            });
          }
          if (change) {
            change.map((item) => {
              this[item] ? classes[prefix + item] = this[item] : delete classes[prefix + item];
            });
          }
          return Object.keys(classes);
        };
      }
    },
    methods: {
      // 跳转某一个页面
      openPage(urlKey = "url") {
        const url = this[urlKey];
        if (url) {
          this.$u.route({ type: this.linkType, url });
        }
      },
      // 查询节点信息
      // 目前此方法在支付宝小程序中无法获取组件跟接点的尺寸，为支付宝的bug(2020-07-21)
      // 解决办法为在组件根部再套一个没有任何作用的view元素
      $uGetRect(selector, all) {
        return new Promise((resolve) => {
          uni.createSelectorQuery().in(this)[all ? "selectAll" : "select"](selector).boundingClientRect((rect) => {
            if (all && Array.isArray(rect) && rect.length) {
              resolve(rect);
            }
            if (!all && rect) {
              resolve(rect);
            }
          }).exec();
        });
      },
      getParentData(parentName = "") {
        if (!this.parent)
          this.parent = {};
        this.parent = uni.$u.$parent.call(this, parentName);
        if (this.parent.children) {
          this.parent.children.indexOf(this) === -1 && this.parent.children.push(this);
        }
        if (this.parent && this.parentData) {
          Object.keys(this.parentData).map((key) => {
            this.parentData[key] = this.parent[key];
          });
        }
      },
      // 阻止事件冒泡
      preventEvent(e2) {
        e2 && typeof e2.stopPropagation === "function" && e2.stopPropagation();
      },
      // 空操作
      noop(e2) {
        this.preventEvent(e2);
      }
    },
    onReachBottom() {
      uni.$emit("uOnReachBottom");
    },
    beforeDestroy() {
      if (this.parent && uni.$u.test.array(this.parent.children)) {
        const childrenList = this.parent.children;
        childrenList.map((child, index) => {
          if (child === this) {
            childrenList.splice(index, 1);
          }
        });
      }
    }
  };
  var _style_0$3 = { "u-icon": { "": { "alignItems": "center" } }, "u-icon--left": { "": { "flexDirection": "row-reverse", "alignItems": "center" } }, "u-icon--right": { "": { "flexDirection": "row", "alignItems": "center" } }, "u-icon--top": { "": { "flexDirection": "column-reverse", "justifyContent": "center" } }, "u-icon--bottom": { "": { "flexDirection": "column", "justifyContent": "center" } }, "u-icon__icon": { "": { "fontFamily": "uicon-iconfont", "position": "relative", "flexDirection": "row", "alignItems": "center" } }, "u-icon__icon--primary": { "": { "color": "#3c9cff" } }, "u-icon__icon--success": { "": { "color": "#5ac725" } }, "u-icon__icon--error": { "": { "color": "#f56c6c" } }, "u-icon__icon--warning": { "": { "color": "#f9ae3d" } }, "u-icon__icon--info": { "": { "color": "#909399" } } };
  var _export_sfc = (sfc, props2) => {
    const target = sfc.__vccOpts || sfc;
    for (const [key, val] of props2) {
      target[key] = val;
    }
    return target;
  };
  var fontUrl = "https://at.alicdn.com/t/font_2225171_8kdcwk4po24.ttf";
  var domModule = weex.requireModule("dom");
  domModule.addRule("fontFace", {
    "fontFamily": "uicon-iconfont",
    "src": `url('${fontUrl}')`
  });
  var _sfc_main$3 = {
    name: "u-icon",
    data() {
      return {};
    },
    emits: ["click"],
    mixins: [mpMixin, mixin, props$1],
    computed: {
      uClasses() {
        let classes = [];
        classes.push(this.customPrefix + "-" + this.name);
        if (this.color && uni.$u.config.type.includes(this.color))
          classes.push("u-icon__icon--" + this.color);
        return classes;
      },
      iconStyle() {
        let style = {};
        style = {
          fontSize: uni.$u.addUnit(this.size),
          lineHeight: uni.$u.addUnit(this.size),
          fontWeight: this.bold ? "bold" : "normal",
          // 某些特殊情况需要设置一个到顶部的距离，才能更好的垂直居中
          top: uni.$u.addUnit(this.top)
        };
        if (this.color && !uni.$u.config.type.includes(this.color))
          style.color = this.color;
        return style;
      },
      // 判断传入的name属性，是否图片路径，只要带有"/"均认为是图片形式
      isImg() {
        return this.name.indexOf("/") !== -1;
      },
      imgStyle() {
        let style = {};
        style.width = this.width ? uni.$u.addUnit(this.width) : uni.$u.addUnit(this.size);
        style.height = this.height ? uni.$u.addUnit(this.height) : uni.$u.addUnit(this.size);
        return style;
      },
      // 通过图标名，查找对应的图标
      icon() {
        return icons["uicon-" + this.name] || this.name;
      }
    },
    methods: {
      clickHandler(e2) {
        this.$emit("click", this.index);
        this.stop && this.preventEvent(e2);
      }
    }
  };
  function _sfc_render$3(_ctx, _cache, $props, $setup, $data, $options) {
    return (0, import_vue.openBlock)(), (0, import_vue.createElementBlock)(
      "view",
      {
        class: (0, import_vue.normalizeClass)(["u-icon", ["u-icon--" + _ctx.labelPos]]),
        onClick: _cache[0] || (_cache[0] = (...args) => $options.clickHandler && $options.clickHandler(...args)),
        renderWhole: true
      },
      [
        $options.isImg ? ((0, import_vue.openBlock)(), (0, import_vue.createElementBlock)("u-image", {
          key: 0,
          class: "u-icon__img",
          src: _ctx.name,
          mode: _ctx.imgMode,
          style: (0, import_vue.normalizeStyle)([$options.imgStyle, _ctx.$u.addStyle(_ctx.customStyle)])
        }, null, 12, ["src", "mode"])) : ((0, import_vue.openBlock)(), (0, import_vue.createElementBlock)("u-text", {
          key: 1,
          class: (0, import_vue.normalizeClass)(["u-icon__icon", $options.uClasses]),
          style: (0, import_vue.normalizeStyle)([$options.iconStyle, _ctx.$u.addStyle(_ctx.customStyle)]),
          hoverClass: _ctx.hoverClass
        }, (0, import_vue.toDisplayString)($options.icon), 15, ["hoverClass"])),
        (0, import_vue.createCommentVNode)(' \u8FD9\u91CC\u8FDB\u884C\u7A7A\u5B57\u7B26\u4E32\u5224\u65AD\uFF0C\u5982\u679C\u4EC5\u4EC5\u662Fv-if="label"\uFF0C\u53EF\u80FD\u4F1A\u51FA\u73B0\u4F20\u90120\u7684\u65F6\u5019\uFF0C\u7ED3\u679C\u4E5F\u65E0\u6CD5\u663E\u793A '),
        _ctx.label !== "" ? ((0, import_vue.openBlock)(), (0, import_vue.createElementBlock)(
          "u-text",
          {
            key: 2,
            class: "u-icon__label",
            style: (0, import_vue.normalizeStyle)({
              color: _ctx.labelColor,
              fontSize: _ctx.$u.addUnit(_ctx.labelSize),
              marginLeft: _ctx.labelPos == "right" ? _ctx.$u.addUnit(_ctx.space) : 0,
              marginTop: _ctx.labelPos == "bottom" ? _ctx.$u.addUnit(_ctx.space) : 0,
              marginRight: _ctx.labelPos == "left" ? _ctx.$u.addUnit(_ctx.space) : 0,
              marginBottom: _ctx.labelPos == "top" ? _ctx.$u.addUnit(_ctx.space) : 0
            })
          },
          (0, import_vue.toDisplayString)(_ctx.label),
          5
          /* TEXT, STYLE */
        )) : (0, import_vue.createCommentVNode)("v-if", true)
      ],
      2
      /* CLASS */
    );
  }
  var __easycom_1$1 = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["render", _sfc_render$3], ["styles", [_style_0$3]], ["__file", "D:/myitem/uniapp/\u8F7B\u5F71\u89C6/uni_modules/uview-plus/components/u-icon/u-icon.vue"]]);
  var props = {
    props: {
      // 最小可选值
      min: {
        type: [Number, String],
        default: defprops.slider.min
      },
      // 最大可选值
      max: {
        type: [Number, String],
        default: defprops.slider.max
      },
      // 步长，取值必须大于 0，并且可被(max - min)整除
      step: {
        type: [Number, String],
        default: defprops.slider.step
      },
      // 当前取值
      value: {
        type: [Number, String],
        default: defprops.slider.value
      },
      // 滑块右侧已选择部分的背景色
      activeColor: {
        type: String,
        default: defprops.slider.activeColor
      },
      // 滑块左侧未选择部分的背景色
      inactiveColor: {
        type: String,
        default: defprops.slider.inactiveColor
      },
      // 滑块的大小，取值范围为 12 - 28
      blockSize: {
        type: [Number, String],
        default: defprops.slider.blockSize
      },
      // 滑块的颜色
      blockColor: {
        type: String,
        default: defprops.slider.blockColor
      },
      // 禁用状态
      disabled: {
        type: Boolean,
        default: defprops.slider.disabled
      },
      // 是否显示当前的选择值
      showValue: {
        type: Boolean,
        default: defprops.slider.showValue
      }
    }
  };
  var _style_0$2 = {};
  var _sfc_main$2 = {
    name: "u--slider",
    mixins: [mpMixin, mixin, props],
    methods: {
      // 拖动过程中触发
      changingHandler(e2) {
        const {
          value
        } = e2.detail;
        this.$emit("input", value);
        this.$emit("changing", value);
      },
      // 滑动结束时触发
      changeHandler(e2) {
        const {
          value
        } = e2.detail;
        this.$emit("input", value);
        this.$emit("change", value);
      }
    }
  };
  function _sfc_render$2(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_u_slider = resolveEasycom((0, import_vue.resolveDynamicComponent)("u-slider", true), __easycom_1);
    return (0, import_vue.openBlock)(), (0, import_vue.createElementBlock)(
      "view",
      {
        class: "u-slider",
        style: (0, import_vue.normalizeStyle)([_ctx.$u.addStyle(_ctx.customStyle)]),
        renderWhole: true
      },
      [
        (0, import_vue.createVNode)(_component_u_slider, {
          min: _ctx.min,
          max: _ctx.max,
          step: _ctx.step,
          value: _ctx.value,
          activeColor: _ctx.activeColor,
          inactiveColor: _ctx.inactiveColor,
          blockSize: _ctx.$u.getPx(_ctx.blockSize),
          blockColor: _ctx.blockColor,
          showValue: _ctx.showValue,
          disabled: _ctx.disabled,
          onChanging: $options.changingHandler,
          onChange: $options.changeHandler
        }, null, 8, ["min", "max", "step", "value", "activeColor", "inactiveColor", "blockSize", "blockColor", "showValue", "disabled", "onChanging", "onChange"])
      ],
      4
      /* STYLE */
    );
  }
  var __easycom_1 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["render", _sfc_render$2], ["styles", [_style_0$2]], ["__file", "D:/myitem/uniapp/\u8F7B\u5F71\u89C6/uni_modules/uview-plus/components/u-slider/u-slider.vue"]]);
  var Aliyun = class {
    constructor() {
      this.userInfo = {};
      this.file = {};
      this.pwd = "";
      this.next_marker = "";
      this.share_token = "";
      this.isDesc = true;
      this.panUser = {};
      this.my_file_id = "";
      this.getUserInfo();
    }
    // 获取视频播放链接
    getVideoPlay(file) {
      return __async(this, null, function* () {
        this.file = file;
        if (!this.share_token) {
          let sres = yield this.getCacheShareToken();
          if (sres != "\u6210\u529F") {
            return sres;
          }
        }
        let mres = yield this.getCacheFile();
        if (mres == "\u6210\u529F") {
          if (this.userInfo["jxType"] == "down") {
            var playUrlList = yield this.getVideoDownUrl();
          } else {
            var playUrlList = yield this.getVideoPlayUrl();
          }
          return playUrlList;
        } else {
          return mres;
        }
      });
    }
    // 获取分享链接资源列表
    getShareFile(file, pwd, isDesc) {
      return __async(this, null, function* () {
        this.file = file;
        this.pwd = pwd;
        this.isDesc = isDesc;
        if (!this.share_token) {
          let sres = yield this.getCacheShareToken();
          if (sres != "\u6210\u529F") {
            fmsg = smsg;
            return { fileList, fmsg };
          }
        }
        var fileList = yield this.getShareFileList();
        return fileList;
      });
    }
    // 获取缓存中的网盘信息
    getUserInfo() {
      return __async(this, null, function* () {
        this.panUser = getApp().globalData.panUser;
        if (this.panUser["aliyun"]) {
          this.userInfo = this.panUser["aliyun"];
        } else {
          uni.showToast({
            icon: "none",
            title: "\u8BF7\u5148\u7ED1\u5B9A\u963F\u91CC\u4E91\u76D8\u8D26\u53F7"
          });
        }
      });
    }
    // 缓存网盘信息
    setUserInfo() {
      this.panUser["aliyun"] = this.userInfo;
      uni.setStorage({
        key: "panUser",
        data: this.panUser
      });
    }
    // 刷新账号
    Refresh() {
      return __async(this, null, function* () {
        var data = {
          "refresh_token": this.userInfo["refresh_token"],
          "grant_type": "refresh_token"
        };
        var hedaer = {
          "content-type": "application/json;charset=UTF-8",
          "Referer": "https://www.aliyundrive.com/",
          "Origin": "https://www.aliyundrive.com",
          "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/98.0.4758.102 Safari/537.36"
        };
        const ures = yield uni.$u.http.post("https://auth.aliyundrive.com/v2/account/token", data, { header: hedaer }).then((res) => {
          if (res.data["access_token"]) {
            this.userInfo = res.data;
            if (this.userInfo["cache_file_id"]) {
              res.data["cache_file_id"] = this.userInfo["cache_file_id"];
              this.setUserInfo();
              return "\u6210\u529F";
            } else {
              return this.AddFolder();
            }
          } else {
            return "\u8D26\u53F7\u5237\u65B0\u5931\u8D25";
          }
        }).catch((err) => {
          return "\u8D26\u53F7\u5237\u65B0\u5931\u8D25";
        });
        return ures;
      });
    }
    // 创建目录
    AddFolder() {
      return __async(this, null, function* () {
        var name = "\u7F13\u5B58" + Date.now();
        var data = {
          "drive_id": this.userInfo["default_drive_id"],
          "parent_file_id": "root",
          "name": name,
          "check_name_mode": "refuse",
          "type": "folder"
        };
        var hedaer = {
          "authorization": "Bearer " + this.userInfo["access_token"],
          "content-type": "application/json;charset=UTF-8",
          "Referer": "https://www.aliyundrive.com/",
          "Origin": "https://www.aliyundrive.com",
          "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/98.0.4758.102 Safari/537.36"
        };
        const amsg = yield uni.$u.http.post("https://api.aliyundrive.com/adrive/v2/file/createWithFolders", data, { header: hedaer }).then((res) => {
          if (res.data["file_id"]) {
            this.userInfo["cache_file_id"] = res.data["file_id"];
            this.setUserInfo();
            return "\u6210\u529F";
          } else {
            return "\u7F13\u5B58\u76EE\u5F55\u521B\u5EFA\u5931\u8D25";
          }
        }).catch((err) => {
          return "\u7F13\u5B58\u76EE\u5F55\u521B\u5EFA\u5931\u8D25";
        });
        return amsg;
      });
    }
    // 获取视频播放地址
    getVideoPlayUrl() {
      return __async(this, null, function* () {
        var data = {
          "drive_id": this.userInfo["default_drive_id"],
          "file_id": this.my_file_id,
          "category": "live_transcoding",
          "template_id": "QHD|FHD|HD|SD|LD",
          "url_expire_sec": 14400
        };
        var hedaer = {
          "authorization": "Bearer " + this.userInfo["access_token"],
          "content-type": "application/json;charset=UTF-8",
          "Referer": "https://www.aliyundrive.com/",
          "Origin": "https://www.aliyundrive.com",
          "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/98.0.4758.102 Safari/537.36"
        };
        let playUrlList = yield uni.$u.http.post("https://api.aliyundrive.com/v2/file/get_video_preview_play_info", data, { header: hedaer }).then((res) => {
          var playUrlList2 = [];
          var urlList = res.data["video_preview_play_info"]["live_transcoding_task_list"];
          if (urlList.length > 0) {
            urlList.forEach((e2) => {
              playUrlList2.unshift({
                title: e2["template_height"] + "P",
                url: e2["url"]
              });
            });
            return playUrlList2;
          } else {
            return "\u89E3\u6790\u5931\u8D25";
          }
        }).catch((err) => {
          var restxt = JSON.stringify(err.data);
          if (restxt.includes("AccessTokenInvalid"))
            ;
          return "\u89E3\u6790\u5931\u8D25";
        });
        return playUrlList;
      });
    }
    // 获取视频下载地址
    getVideoDownUrl() {
      return __async(this, null, function* () {
        this.userInfo;
        var data = {
          "drive_id": this.userInfo["default_drive_id"],
          "file_id": this.my_file_id,
          "url_expire_sec": 14400
        };
        var hedaer = {
          "authorization": "Bearer " + this.userInfo["access_token"],
          "content-type": "application/json;charset=UTF-8",
          "Referer": "https://www.aliyundrive.com/",
          "Origin": "https://www.aliyundrive.com",
          "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/98.0.4758.102 Safari/537.36"
        };
        let playUrlList = yield uni.$u.http.post("https://api.aliyundrive.com/v2/file/get_download_url", data, { header: hedaer }).then((res) => {
          if (res.data["url"]) {
            playUrlList = [
              {
                title: "\u7EBF\u8DEF1",
                url: res.data["url"]
              }
            ];
            return playUrlList;
          } else {
            return "\u89E3\u6790\u5931\u8D25";
          }
        }).catch((err) => {
          var restxt = JSON.stringify(err.data);
          if (restxt.includes("AccessTokenInvalid"))
            ;
          return "\u89E3\u6790\u5931\u8D25";
        });
        return playUrlList;
      });
    }
    getCacheFile() {
      return __async(this, null, function* () {
        const res = yield uni.getStorageSync(this.file["file_id"]);
        if (res["my_file_id"]) {
          if (res["cache_file_id"] == this.userInfo["cache_file_id"]) {
            this.my_file_id = res["my_file_id"];
            return "\u6210\u529F";
          }
          return yield this.saveFile();
        } else {
          return yield this.saveFile();
        }
      });
    }
    // 转存
    saveFile() {
      return __async(this, null, function* () {
        var file = this.file;
        var data = '{"requests":[{"body":{"file_id":"' + file["file_id"] + '","share_id":"' + file["share_id"] + '","auto_rename":true,"to_parent_file_id":"' + this.userInfo["cache_file_id"] + '","to_drive_id":"' + this.userInfo["default_drive_id"] + '"},"headers":{"Content-Type":"application/json"},"id":"0","method":"POST","url":"/file/copy"}],"resource":"file"}';
        var hedaer = {
          "authorization": "Bearer " + this.userInfo["access_token"],
          "x-share-token": this.share_token,
          "content-type": "application/json;charset=UTF-8",
          "Referer": "https://www.aliyundrive.com/",
          "Origin": "https://www.aliyundrive.com",
          "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/98.0.4758.102 Safari/537.36"
        };
        const mres = yield uni.$u.http.post("https://api.aliyundrive.com/adrive/v2/batch", data, { header: hedaer }).then((res) => {
          if (res.data["responses"]["0"]["body"]["file_id"]) {
            this.my_file_id = res.data["responses"]["0"]["body"]["file_id"];
            uni.setStorage({
              key: file["file_id"],
              data: {
                "cache_file_id": this.userInfo["cache_file_id"],
                "my_file_id": this.my_file_id
              }
            });
            return "\u6210\u529F";
          } else {
            return "\u8F6C\u5B58\u5931\u8D25";
          }
        }).catch((err) => {
          var restxt = JSON.stringify(err.data);
          if (restxt.includes("AccessTokenInvalid"))
            ;
          if (restxt.includes("QuotaExhausted.Drive")) {
            return "\u8D26\u53F7\u5185\u5B58\u5DF2\u6EE1\uFF0C\u8BF7\u5728\u7F51\u76D8\u754C\u9762\u6E05\u7406\u8D26\u53F7";
          }
          return "\u8F6C\u5B58\u5931\u8D25";
        });
        return mres;
      });
    }
    getCacheShareToken() {
      return __async(this, null, function* () {
        const res = yield uni.getStorageSync(this.file["share_id"]);
        if (res) {
          if (res["time"] > Date.now()) {
            this.share_token = res["share_token"];
            return "\u6210\u529F";
          }
          return yield this.getShareToken();
        } else {
          return yield this.getShareToken();
        }
      });
    }
    // 获取分享资源ShareToken
    getShareToken() {
      return __async(this, null, function* () {
        var data = {
          "share_id": this.file["share_id"],
          "share_pwd": this.pwd
        };
        var header = {
          "content-type": "application/json;charset=UTF-8",
          "origin": "https://www.aliyundrive.com",
          "referer": "https://www.aliyundrive.com/",
          "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/98.0.4758.102 Safari/537.36"
        };
        const sres = yield uni.$u.http.post("https://api.aliyundrive.com/v2/share_link/get_share_token", data, { header }).then((res) => {
          if (res.data["share_token"]) {
            uni.setStorage({
              key: this.file["share_id"],
              data: {
                "share_token": res.data["share_token"],
                "time": Date.now() + 3e5
              }
            });
            this.share_token = res.data["share_token"];
            return "\u6210\u529F";
          } else {
            return "\u8D44\u6E90\u83B7\u53D6\u5931\u8D25";
          }
        });
        return sres;
      });
    }
    // 获取阿里网盘分享资源列表
    getShareFileList() {
      return __async(this, null, function* () {
        var file = this.file;
        var data = {
          "image_thumbnail_process": "image/resize,w_256/format,jpeg",
          "image_url_process": "image/resize,w_1920/format,jpeg/interlace,1",
          "limit": 20,
          "marker": this.next_marker,
          "order_by": "name",
          "order_direction": this.isDesc ? "ASC" : "DESC",
          "parent_file_id": file["file_id"],
          "share_id": file["share_id"],
          "video_thumbnail_process": "video/snapshot,t_1000,f_jpg,ar_auto,w_256"
        };
        var header = {
          "x-share-token": this.share_token,
          "content-type": "application/json;charset=UTF-8",
          "origin": "https://www.aliyundrive.com",
          "referer": "https://www.aliyundrive.com/",
          "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/98.0.4758.102 Safari/537.36"
        };
        let fres = yield uni.$u.http.post("https://api.aliyundrive.com/adrive/v3/file/list", data, { header }).then((res) => {
          if (res.data["items"]) {
            this.next_marker = res.data["next_marker"];
            return res.data["items"];
          } else {
            return "\u83B7\u53D6\u5931\u8D25";
          }
        }).catch((err) => {
          return "\u83B7\u53D6\u5931\u8D25";
        });
        return fres;
      });
    }
  };
  var _style_0$1 = { "iconfont": { "": { "fontFamily": "fontFamilyName" } }, "Active": { "": { "left": 0 } }, "noActive": { "": { "left": "750rpx", "transitionProperty": "left", "transitionDuration": 300 } }, "cmShow": { "": { "opacity": 1, "transitionProperty": "opacity", "transitionDuration": 1e3 } }, "cmShowActive": { "": { "opacity": 0 } }, "@TRANSITION": { "noActive": { "property": "left", "duration": 300 }, "cmShow": { "property": "opacity", "duration": 1e3 } } };
  var _sfc_main$1 = {
    name: "myVideoPlayer",
    props: ["modelValue", "videoTitle", "videoList", "type", "pwd"],
    emits: ["update:modelValue"],
    data() {
      return {
        windowWidth: 0,
        // 屏幕宽度
        windowHeight: 0,
        videoContext: {},
        isFull: false,
        // 是否是全屏
        isPlay: false,
        // 是否在播放
        isShowJuJi: false,
        // 是否展示剧集选择
        isShowBeiSu: false,
        // 是否展示倍速选择
        isShowJK: false,
        // 是否展示接口选择
        isShowCM: true,
        // 是否展示控制面板
        ifShowNext: true,
        // 是否显示下一集按钮
        videoDuration: "00.00",
        videoCurrentTime: "00.00",
        videoDurationNum: 0,
        sliderValue: 0,
        videoPlayUrl: "",
        // 当前播放链接
        playUrlArr: [],
        //播放链接数组
        currentXL: 0,
        // 当前播放线路
        currentJuJi: this.modelValue,
        // 当前播放剧集
        currentJK: 0,
        // 当前接口
        rateList: ["0.5", "0.8", "1.0", "1.25", "1.5", "2.0"],
        currentRate: "1.0",
        videoTopTitle: "",
        lastTapDiffTime: {},
        // 记录点击时间间隔
        TouchMoveType: "",
        oldTouces: {},
        zuoyou_Width: 0,
        DataY: 0,
        SliderLiangduValue: 0,
        // 系统亮度
        SliderYingliangValue: 0,
        // 系统音量
        isfangdou: false,
        isTouchMove: false,
        isClickOver: false,
        // 是否点击结束
        isPressRate: false,
        // 是否长按倍速
        oldValue: {
          LiangduValue: 0,
          YingLiangValue: 0
        },
        isLock: false,
        // 锁屏
        panUserInfo: {},
        // 账号信息
        share_token: "",
        //阿里share_token
        videoPlayHeader: {},
        Aliyun: null
      };
    },
    created() {
      var domModule2 = weex.requireModule("dom");
      domModule2.addRule("fontFace", {
        fontFamily: "fontFamilyName",
        src: "url('https://at.alicdn.com/t/c/font_3867346_yxkt1x9z21e.ttf')"
      });
      let system = uni.getSystemInfoSync();
      this.windowWidth = system.windowWidth;
      this.windowHeight = system.windowHeight;
    },
    beforeMount() {
      this.videoContext = uni.createVideoContext("myVideo");
    },
    mounted() {
      if (this.type == "0") {
        this.Aliyun = new Aliyun();
        this.lessPlay();
      } else {
        this.lessPlay();
      }
    },
    watch: {
      modelValue(val) {
        this.chooseJuJi(val);
      }
    },
    methods: {
      lessPlay() {
        var timer = setInterval((res) => {
          if (this.videoList && this.videoList[this.currentJuJi]) {
            this.chooseJuJi(this.currentJuJi);
            clearInterval(timer);
          }
        }, 500);
      },
      // 解析
      jkParse() {
        return __async(this, null, function* () {
          var f = this.videoList[this.currentJuJi];
          if (this.type == "0") {
            let playUrlList = yield this.Aliyun.getVideoPlay(f);
            if (typeof playUrlList == "object" && playUrlList.length > 0) {
              this.playUrlArr = playUrlList;
              this.videoPlayHeader = {
                "Origin": "https://www.aliyundrive.com",
                "Referer": "https://www.aliyundrive.com/",
                "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/110.0.0.0 Safari/537.36"
              };
              if (playUrlList[this.currentJK] && playUrlList[this.currentJK]["url"]) {
                this.videoPlayUrl = playUrlList[this.currentJK]["url"];
              } else {
                this.videoPlayUrl = playUrlList[0]["url"];
                this.currentJK = 0;
              }
            } else {
              uni.showToast({
                icon: "none",
                title: playUrlList
              });
            }
          }
          if (this.type == "1") {
            this.webParse();
          }
        });
      },
      webParse() {
        var f = this.videoList[this.currentJuJi];
        uni.$u.http.post("api/movie/api", {
          "type": this.type,
          "file": f,
          "pwd": this.pwd,
          "share_token": this.share_token
        }).then((res) => {
          var _a;
          if (res.data["status"] == "0") {
            this.playUrlArr = res.data["data"];
            if (res.data["data"][this.currentJK] && res.data["data"][this.currentJK]["url"]) {
              this.videoPlayUrl = res.data["data"][this.currentJK]["url"];
            } else {
              this.videoPlayUrl = res.data["data"][0]["url"];
              this.currentJK = 0;
            }
          } else {
            uni.showToast({
              icon: "none",
              title: (_a = res.data["msg"]) != null ? _a : "\u89E3\u6790\u5931\u8D25"
            });
          }
        }).catch((err) => {
          uni.showToast({
            icon: "error",
            title: "\u8BF7\u6C42\u5931\u8D25"
          });
        });
      },
      // 隐藏播放控制
      hideShowCM() {
        if (!this.isShowBeiSu && !this.isShowJK && !this.isShowJuJi) {
          if (this.isPlay) {
            this.isShowCM = !this.isShowCM;
          } else {
            this.isShowCM = true;
          }
        }
      },
      // 选择线路
      chooseJK(index) {
        formatAppLog("log", "at components/myVideoPlayer/myVideoPlayer.vue:380", this.videoPlayHeader);
        this.currentJK = index;
        this.videoPlayUrl = this.playUrlArr[index]["url"];
        uni.showToast({
          icon: "none",
          title: this.playUrlArr[index]["title"]
        });
      },
      // 展示接口
      showChooseJK() {
        this.isShowCM = false;
        this.isShowJK = true;
      },
      // 隐藏接口
      hideShowJK() {
        this.isShowJK = false;
        this.isShowCM = true;
      },
      // 选择倍速
      chooseBeiSu(rate) {
        this.currentRate = rate;
        this.videoContext.playbackRate(parseFloat(rate));
        uni.showToast({
          icon: "none",
          title: rate
        });
      },
      // 展示倍速
      showChooseBeiSu() {
        this.isShowCM = false;
        this.isShowBeiSu = true;
      },
      // 隐藏倍速
      hideShowBeiSu() {
        this.isShowBeiSu = false;
        this.isShowCM = true;
      },
      // 选集
      chooseJuJi(index) {
        if (this.videoList && this.videoList[index]) {
          this.currentJuJi = index;
          this.$emit("update:modelValue", this.currentJuJi);
          if (this.type == "0") {
            if (getApp().globalData.panUser["aliyun"]) {
              this.videoTopTitle = this.videoList[index]["name"];
              this.jkParse();
            } else {
              uni.showToast({
                icon: "none",
                title: "\u8BF7\u5148\u7ED1\u5B9A\u963F\u91CC\u4E91\u8D26\u53F7"
              });
            }
          }
          if (this.type == "1") {
            this.videoTopTitle = this.videoList[index]["fileName"];
            this.jkParse();
          }
          uni.showToast({
            icon: "none",
            title: this.videoTopTitle
          });
        }
      },
      // 展示选集
      showChooseJuJi() {
        this.isShowCM = false;
        this.isShowJuJi = true;
      },
      // 隐藏选集
      hideShowJuJi() {
        this.isShowJuJi = false;
        this.isShowCM = true;
      },
      // 进/退全屏事件回调
      onFullScreenChange(e2) {
        this.isFull = e2.detail.fullScreen;
        if (this.isFull == false) {
          this.isShowJuJi = false;
          this.isShowCM = true;
        }
      },
      // 退出页面
      exitPlay() {
        uni.navigateBack();
      },
      // 改变进度条回调
      sliderChange(e2) {
        this.videoContext.seek(e2.detail.value / 100 * this.videoDurationNum);
      },
      // 播放进度改变回调
      onTimeUpdate(e2) {
        this.videoDuration = this.getForMatTime(e2.detail.duration);
        this.videoCurrentTime = this.getForMatTime(e2.detail.currentTime);
        this.sliderValue = e2.detail.currentTime / e2.detail.duration * 100;
        this.videoDurationNum = e2.detail.duration;
      },
      // 格式化播放时间
      getForMatTime(time) {
        var dz = parseInt(time);
        if (dz < 60) {
          if (dz < 10) {
            dz = `0${dz}`;
          }
          d = `00:${dz}`;
        } else {
          var dm = parseInt(dz / 60);
          var dzy = dz % 60;
          if (dzy < 10) {
            dzy = `0${dzy}`;
          }
          if (dm < 60) {
            if (dm < 10) {
              dm = `0${dm}`;
            }
            d = `${dm}:${dzy}`;
          } else {
            var dh = parseInt(dm / 60);
            var dmy = dm % 60;
            if (dmy < 10) {
              dmy = `0${dmy}`;
            }
            d = `${dh}:${dmy}:${dzy}`;
          }
        }
        return d;
      },
      // 进入/退出全屏
      fullScreen() {
        if (this.isFull) {
          this.videoContext.exitFullScreen();
        } else {
          this.videoContext.requestFullScreen();
        }
        this.isFull = !this.isFull;
      },
      // 播放/暂停视频
      videoPlay() {
        if (this.isPlay) {
          this.videoContext.pause();
        } else {
          this.videoContext.play();
        }
        this.isPlay = !this.isPlay;
      },
      // 视频播放回调
      onVideoPlayBack() {
        this.isPlay = true;
        if (this.isShowCM == true) {
          setTimeout((res) => {
            this.isShowCM = false;
          }, 2e3);
        }
      },
      // 视频暂停回调
      onVideoPauseBack() {
        this.isPlay = false;
        this.isShowCM = true;
      },
      // 视频结束回调
      onVideoEndBack() {
        this.isPlay = false;
        this.isShowCM = true;
        this.videoContext.stop();
      },
      /* 获取屏幕亮度值 */
      getScreenLiangdu() {
        uni.getScreenBrightness({
          success: (res) => {
            var Value = res.value;
            if (Value == Number(-1)) {
              Value = 0;
            }
            this.SliderLiangduValue = Math.ceil(Value * 100);
          }
        });
      },
      /* 获取设备的系统音量 */
      getDeviceVolume() {
        let Value = plus.device.getVolume();
        if (Value == Number(-1)) {
          Value = 0;
        }
        this.SliderYingliangValue = Math.ceil(Value * 100);
      },
      onTouchMove(event) {
        if (this.isLock)
          return false;
        this.isTouchMove = true;
        let oldTouces = this.oldTouces;
        let newTouces = event.changedTouches[0];
        this.newTouces = newTouces;
        newTouces.pageX - oldTouces.pageX;
        var dataY = newTouces.pageY - oldTouces.pageY;
        this.DataY = dataY;
        if (this.isfangdou == true)
          ;
        if (this.isFull) {
          this.zuoyou_Width = Number(this.windowHeight / 2);
        } else {
          this.zuoyou_Width = Number(this.windowWidth / 2);
        }
        if (!this.TouchMoveType) {
          this.TouchMoveType = Math.abs(newTouces.pageX - oldTouces.pageX) >= 20 ? "conterVideoJinDu" : null;
          this.TouchMoveType = Math.abs(newTouces.pageY - oldTouces.pageY) > 35 && newTouces.pageX < this.zuoyou_Width ? "leftLiangDu" : this.TouchMoveType;
          this.TouchMoveType = Math.abs(newTouces.pageY - oldTouces.pageY) > 35 && newTouces.pageX > this.zuoyou_Width ? "rightYingLiang" : this.TouchMoveType;
          if (this.TouchMoveType) {
            this.moveX = newTouces.pageX - oldTouces.pageX;
            this.moveY = newTouces.pageY - oldTouces.pageY;
            this.isfangdou = true;
          }
        } else if (this.TouchMoveType == "leftLiangDu") {
          let curr_pageY = this.moveY > 0 ? this.moveY : 0;
          let sensitivity = Number(0.3);
          this.newTouchLiangduValue = (oldTouces.pageY - newTouces.pageY - curr_pageY) * sensitivity + this.oldValue.LiangduValue;
          this.newTouchLiangduValue = this.newTouchLiangduValue > 100 ? 100 : this.newTouchLiangduValue;
          this.newTouchLiangduValue = this.newTouchLiangduValue < 0 ? 0 : this.newTouchLiangduValue;
          if (this.newTouchLiangduValue == this.oldValue.LiangduValue)
            this.oldTouces = newTouces;
          this.SliderLiangduValue = parseInt(this.newTouchLiangduValue);
          var Liangdu = this.SliderLiangduValue / 100;
          if (Liangdu >= 1) {
            Liangdu = 1;
            this.SliderLiangduValue = 100;
          } else if (Liangdu <= 0) {
            Liangdu = 0;
            this.SliderLiangduValue = 0;
          }
          uni.setScreenBrightness({
            value: Liangdu
          });
        } else if (this.TouchMoveType == "rightYingLiang" && this.isFull == true && dataY != 0) {
          let curr_pageY = this.moveY > 0 ? this.moveY : 0;
          let sensitivity = Number(0.3);
          this.newTouchYingliangValue = (oldTouces.pageY - newTouces.pageY - curr_pageY) * sensitivity + this.oldValue.YingLiangValue;
          this.newTouchYingliangValue = this.newTouchYingliangValue > 100 ? 100 : this.newTouchYingliangValue;
          this.newTouchYingliangValue = this.newTouchYingliangValue < 0 ? 0 : this.newTouchYingliangValue;
          if (this.newTouchYingliangValue == this.oldValue.YingLiangValue)
            this.oldTouces = newTouces;
          this.SliderYingliangValue = parseInt(this.newTouchYingliangValue);
          var YingLiang = Math.abs(this.SliderYingliangValue / 100);
          if (YingLiang <= 0.1) {
            YingLiang = 0.1;
          }
          if (YingLiang >= 1) {
            YingLiang = 1;
            this.SliderYingliangValue = 100;
          }
          plus.device.setVolume(YingLiang);
        } else if (this.TouchMoveType == "conterVideoJinDu") {
          let curr_pageX = this.moveX > 0 ? this.moveX : 0;
          let nfenzhong = parseInt(this.timeUpdate[0].duration / 60);
          let sensitivity = Number(this.Config.sensitivity.X * nfenzhong);
          this.newTouchCurrentTime = (newTouces.pageX - oldTouces.pageX - curr_pageX) * sensitivity + (100 / this.timeUpdate[0].duration + this.oldValue.currentTime * 1);
          this.newTouchCurrentTime = this.newTouchCurrentTime >= this.timeUpdate[0].duration ? this.timeUpdate[0].duration : this.newTouchCurrentTime;
          this.newTouchCurrentTime = this.newTouchCurrentTime <= 0 ? 0 : this.newTouchCurrentTime;
          if (this.newTouchCurrentTime == this.timeUpdate[0].currentTime)
            this.oldTouces = newTouces;
          if (this.changingSliderX == false)
            ;
        }
      },
      // 判断单双击
      onTouchStart(event) {
        return __async(this, null, function* () {
          this.isClickOver = false;
          yield this.getDeviceVolume();
          this.oldValue.YingLiangValue = this.SliderYingliangValue;
          yield this.getScreenLiangdu();
          this.oldValue.LiangduValue = this.SliderLiangduValue;
          this.oldTouces = event.changedTouches[0];
          if (!this.isTouchMove) {
            setTimeout((res) => {
              if (!this.isClickOver && !this.isTouchMove) {
                var timer = setInterval((res2) => {
                  if (!this.isClickOver) {
                    this.isPressRate = true;
                    if (this.currentRate != "2.0") {
                      this.chooseBeiSu("2.0");
                    }
                  } else if (this.isPressRate == true) {
                    if (this.currentRate != "1.0") {
                      this.chooseBeiSu("1.0");
                    }
                    this.isPressRate = false;
                    clearInterval(timer);
                  } else {
                    clearInterval(timer);
                  }
                }, 100);
              }
            }, 500);
          }
        });
      },
      onTouchEnd() {
        this.isClickOver = true;
        this.TouchMoveType = null;
        if (!this.isPressRate && !this.isTouchMove) {
          let curTime = new Date().getTime();
          let lastTime = this.lastTapDiffTime;
          this.lastTapDiffTime = curTime;
          let diff = curTime - lastTime;
          if (diff < 300) {
            this.videoPlay();
            clearTimeout(this.lastTapTimeoutFunc);
          } else {
            this.lastTapTimeoutFunc = setTimeout((res) => {
              this.hideShowCM();
            }, 300);
          }
        }
        setTimeout((res) => {
          this.isTouchMove = false;
        }, 500);
      }
    }
  };
  function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_u_icon = resolveEasycom((0, import_vue.resolveDynamicComponent)("u-icon"), __easycom_1$1);
    const _component_u_slider = resolveEasycom((0, import_vue.resolveDynamicComponent)("u-slider"), __easycom_1);
    return (0, import_vue.openBlock)(), (0, import_vue.createElementBlock)("view", {
      class: "myVideoPlayer",
      renderWhole: true
    }, [
      (0, import_vue.createElementVNode)("view", {
        class: "",
        style: { "width": "750rpx", "background-color": "#000" }
      }, [
        (0, import_vue.createElementVNode)("view", {
          class: "",
          style: { "width": "750rpx" }
        }, [
          (0, import_vue.createElementVNode)("u-video", {
            id: "myVideo",
            autoplay: $data.videoPlayUrl ? true : false,
            controls: false,
            showFullscreenBtn: false,
            showCenterPlayBtn: false,
            showPlayBtn: false,
            enableProgressGesture: false,
            vslideGestureInFullscreen: false,
            header: $data.videoPlayHeader,
            src: $data.videoPlayUrl,
            style: { "position": "relative", "width": "750rpx" },
            onPlay: _cache[12] || (_cache[12] = (...args) => $options.onVideoPlayBack && $options.onVideoPlayBack(...args)),
            onPause: _cache[13] || (_cache[13] = (...args) => $options.onVideoPauseBack && $options.onVideoPauseBack(...args)),
            onEnded: _cache[14] || (_cache[14] = (...args) => $options.onVideoEndBack && $options.onVideoEndBack(...args)),
            onTimeupdate: _cache[15] || (_cache[15] = (...args) => $options.onTimeUpdate && $options.onTimeUpdate(...args)),
            onFullscreenchange: _cache[16] || (_cache[16] = (...args) => $options.onFullScreenChange && $options.onFullScreenChange(...args))
          }, [
            (0, import_vue.createElementVNode)("u-scalable", { style: { position: "absolute", left: "0", right: "0", top: "0", bottom: "0" } }, [
              (0, import_vue.createCommentVNode)(" \u906E\u7F69\u5C42 "),
              (0, import_vue.createElementVNode)("cover-view", { style: { "width": "750rpx", "height": "470rpx", "position": "absolute", "left": "0", "top": "0", "right": "0", "bottom": "0" } }, [
                (0, import_vue.createElementVNode)(
                  "view",
                  {
                    onTouchstart: _cache[0] || (_cache[0] = (0, import_vue.withModifiers)((...args) => $options.onTouchStart && $options.onTouchStart(...args), ["stop"])),
                    onTouchend: _cache[1] || (_cache[1] = (0, import_vue.withModifiers)((...args) => $options.onTouchEnd && $options.onTouchEnd(...args), ["stop"])),
                    onTouchmove: _cache[2] || (_cache[2] = (...args) => $options.onTouchMove && $options.onTouchMove(...args)),
                    style: { "width": "750rpx", "height": "470rpx", "position": "absolute", "left": "0", "top": "0", "right": "0", "bottom": "0" }
                  },
                  null,
                  32
                  /* HYDRATE_EVENTS */
                )
              ]),
              (0, import_vue.createCommentVNode)(" \u64AD\u653E\u5668\u9876\u90E8 "),
              (0, import_vue.createElementVNode)(
                "cover-view",
                {
                  class: (0, import_vue.normalizeClass)(["cmShow", $data.isShowCM ? "" : "cmShowActive"]),
                  style: { "z-index": "999", "width": "750rpx", "position": "absolute", "top": "20rpx" }
                },
                [
                  $data.isFull && !$data.isLock ? ((0, import_vue.openBlock)(), (0, import_vue.createElementBlock)("view", {
                    key: 0,
                    class: "",
                    style: { "width": "750rpx", "display": "flex", "flex-direction": "row", "justify-content": "space-between", "align-items": "center", "padding": "0 20rpx" }
                  }, [
                    (0, import_vue.createElementVNode)("view", { style: { "display": "flex", "flex-direction": "row", "justify-content": "space-between", "align-items": "center" } }, [
                      (0, import_vue.createVNode)(_component_u_icon, {
                        name: "arrow-left",
                        color: "#fff",
                        size: "20",
                        onClick: $options.fullScreen
                      }, null, 8, ["onClick"]),
                      (0, import_vue.createElementVNode)(
                        "u-text",
                        { style: { "color": "#fff", "padding": "0 10rpx" } },
                        (0, import_vue.toDisplayString)($props.videoTitle + " " + $data.videoTopTitle),
                        1
                        /* TEXT */
                      )
                    ]),
                    (0, import_vue.createElementVNode)("view", { style: { "display": "flex", "flex-direction": "row", "justify-content": "space-between", "align-items": "center" } }, [
                      (0, import_vue.createVNode)(_component_u_icon, {
                        name: "more-dot-fill",
                        color: "#fff",
                        size: "20"
                      })
                    ])
                  ])) : (0, import_vue.createCommentVNode)("v-if", true),
                  !$data.isFull ? ((0, import_vue.openBlock)(), (0, import_vue.createElementBlock)("view", {
                    key: 1,
                    class: "",
                    style: { "width": "750rpx", "display": "flex", "flex-direction": "row", "justify-content": "space-between", "align-items": "center", "padding": "0 20rpx" }
                  }, [
                    (0, import_vue.createElementVNode)("view", { style: { "display": "flex", "flex-direction": "row", "justify-content": "space-between", "align-items": "center" } }, [
                      (0, import_vue.createVNode)(_component_u_icon, {
                        name: "arrow-left",
                        color: "#fff",
                        size: "20",
                        onClick: $options.exitPlay
                      }, null, 8, ["onClick"]),
                      (0, import_vue.createElementVNode)(
                        "u-text",
                        { style: { "color": "#fff", "padding": "0 10rpx" } },
                        (0, import_vue.toDisplayString)($props.videoTitle + " " + $data.videoTopTitle),
                        1
                        /* TEXT */
                      )
                    ])
                  ])) : (0, import_vue.createCommentVNode)("v-if", true)
                ],
                2
                /* CLASS */
              ),
              (0, import_vue.createCommentVNode)(" \u9501 "),
              $data.isFull && $data.isShowCM ? ((0, import_vue.openBlock)(), (0, import_vue.createElementBlock)("cover-view", {
                key: 0,
                style: { "z-index": "999", "width": "750rpx", "position": "absolute", "top": "150rpx", "left": "50rpx" }
              }, [
                (0, import_vue.createElementVNode)(
                  "view",
                  {
                    class: "",
                    style: (0, import_vue.normalizeStyle)({ width: $data.windowWidth / 2 - 10 + "px" })
                  },
                  [
                    (0, import_vue.createElementVNode)(
                      "u-text",
                      {
                        class: "iconfont",
                        style: { "color": "#fff", "font-size": "25px" },
                        onClick: _cache[3] || (_cache[3] = ($event) => $data.isLock = !$data.isLock)
                      },
                      (0, import_vue.toDisplayString)($data.isLock ? "\uE600" : "\uE601"),
                      1
                      /* TEXT */
                    )
                  ],
                  4
                  /* STYLE */
                )
              ])) : (0, import_vue.createCommentVNode)("v-if", true),
              (0, import_vue.createCommentVNode)(" \u4EAE\u5EA6 \u97F3\u91CF\u8BBE\u7F6E "),
              $data.isFull && !$data.isLock && ($data.TouchMoveType == "rightYingLiang" || $data.TouchMoveType == "leftLiangDu") ? ((0, import_vue.openBlock)(), (0, import_vue.createElementBlock)("cover-view", {
                key: 1,
                style: { "width": "750rpx", "position": "absolute", "top": "60rpx" }
              }, [
                (0, import_vue.createElementVNode)("view", {
                  class: "",
                  style: { "display": "flex", "flex-direction": "row", "padding": "0 300rpx" }
                }, [
                  (0, import_vue.createVNode)(_component_u_slider, {
                    blockSize: "0",
                    step: "5",
                    activeColor: "#FB7299",
                    value: $data.TouchMoveType == "leftLiangDu" ? $data.SliderLiangduValue : $data.SliderYingliangValue
                  }, null, 8, ["value"])
                ])
              ])) : (0, import_vue.createCommentVNode)("v-if", true),
              (0, import_vue.createElementVNode)(
                "cover-view",
                {
                  class: (0, import_vue.normalizeClass)(["cmShow", $data.isShowCM ? "" : "cmShowActive"]),
                  style: { "z-index": "999", "width": "750rpx", "position": "absolute", "bottom": "10rpx" }
                },
                [
                  (0, import_vue.createCommentVNode)(" \u5168\u5C4F\u5E95\u90E8\u63A7\u5236\u9762\u677F "),
                  $data.isFull && !$data.isLock ? ((0, import_vue.openBlock)(), (0, import_vue.createElementBlock)("view", {
                    key: 0,
                    style: { "width": "750rpx", "display": "flex", "flex-direction": "column", "justify-content": "space-between", "align-items": "center" }
                  }, [
                    (0, import_vue.createElementVNode)("view", {
                      class: "",
                      style: { "width": "750rpx", "display": "flex", "flex-direction": "row", "justify-content": "space-between", "align-items": "center", "padding-left": "30rpx", "padding-right": "20rpx" }
                    }, [
                      (0, import_vue.createElementVNode)(
                        "u-text",
                        { style: { "color": "#fff", "font-size": "12px" } },
                        (0, import_vue.toDisplayString)($data.videoCurrentTime),
                        1
                        /* TEXT */
                      ),
                      (0, import_vue.createVNode)(_component_u_slider, {
                        style: { "padding": "0 15rpx" },
                        blockSize: "12",
                        activeColor: "#FB7299",
                        value: $data.sliderValue,
                        onChange: $options.sliderChange
                      }, null, 8, ["value", "onChange"]),
                      (0, import_vue.createElementVNode)(
                        "u-text",
                        { style: { "color": "#fff", "font-size": "12px" } },
                        (0, import_vue.toDisplayString)($data.videoDuration),
                        1
                        /* TEXT */
                      )
                    ]),
                    (0, import_vue.createElementVNode)("view", {
                      class: "",
                      style: { "height": "20rpx" }
                    }),
                    (0, import_vue.createElementVNode)("view", {
                      class: "",
                      style: { "width": "750rpx", "display": "flex", "flex-direction": "row", "justify-content": "space-between", "align-items": "center", "padding-left": "30rpx", "padding-right": "20rpx" }
                    }, [
                      (0, import_vue.createElementVNode)("view", {
                        class: "",
                        style: { "display": "flex", "flex-direction": "row", "align-items": "center" }
                      }, [
                        (0, import_vue.createVNode)(_component_u_icon, {
                          name: $data.isPlay ? "pause" : "play-right-fill",
                          color: "#fff",
                          size: "30",
                          onClick: $options.videoPlay
                        }, null, 8, ["name", "onClick"]),
                        (0, import_vue.createElementVNode)("view", {
                          class: "",
                          style: { "width": "20rpx" }
                        }),
                        (0, import_vue.createElementVNode)("u-text", {
                          class: "iconfont",
                          style: { "color": "#fff", "font-size": "25px" },
                          onClick: _cache[4] || (_cache[4] = (...args) => $options.fullScreen && $options.fullScreen(...args))
                        }, "\uE7BA")
                      ]),
                      (0, import_vue.createElementVNode)("view", {
                        class: "",
                        style: { "display": "flex", "flex-direction": "row" }
                      }, [
                        (0, import_vue.createElementVNode)("u-text", {
                          style: { "color": "#fff", "padding": "0 10rpx" },
                          onClick: _cache[5] || (_cache[5] = (...args) => $options.showChooseJuJi && $options.showChooseJuJi(...args))
                        }, "\u9009\u96C6"),
                        (0, import_vue.createElementVNode)("u-text", {
                          style: { "color": "#fff", "padding": "0 10rpx" },
                          onClick: _cache[6] || (_cache[6] = (...args) => $options.showChooseBeiSu && $options.showChooseBeiSu(...args))
                        }, "\u500D\u901F"),
                        (0, import_vue.createElementVNode)("u-text", {
                          style: { "color": "#fff", "padding": "0 10rpx" },
                          onClick: _cache[7] || (_cache[7] = (...args) => $options.showChooseJK && $options.showChooseJK(...args))
                        }, "\u7EBF\u8DEF")
                      ])
                    ])
                  ])) : (0, import_vue.createCommentVNode)("v-if", true),
                  (0, import_vue.createCommentVNode)(" \u672A\u5168\u5C4F\u5E95\u90E8\u63A7\u5236\u9762\u677F "),
                  !$data.isFull ? ((0, import_vue.openBlock)(), (0, import_vue.createElementBlock)("view", {
                    key: 1,
                    style: { "width": "750rpx", "display": "flex", "flex-direction": "row", "justify-content": "space-between", "align-items": "center", "padding": "20rpx" }
                  }, [
                    (0, import_vue.createVNode)(_component_u_icon, {
                      name: $data.isPlay ? "pause" : "play-right-fill",
                      color: "#fff",
                      size: "20",
                      onClick: $options.videoPlay
                    }, null, 8, ["name", "onClick"]),
                    (0, import_vue.createVNode)(_component_u_slider, {
                      style: { "padding": "0 15rpx" },
                      blockSize: "12",
                      activeColor: "#FB7299",
                      value: $data.sliderValue,
                      onChange: $options.sliderChange
                    }, null, 8, ["value", "onChange"]),
                    (0, import_vue.createElementVNode)(
                      "u-text",
                      { style: { "color": "#fff", "font-size": "12px" } },
                      (0, import_vue.toDisplayString)($data.videoCurrentTime) + "/" + (0, import_vue.toDisplayString)($data.videoDuration),
                      1
                      /* TEXT */
                    ),
                    (0, import_vue.createElementVNode)("view", {
                      class: "",
                      style: { "width": "20rpx" }
                    }),
                    (0, import_vue.createElementVNode)("u-text", {
                      class: "iconfont",
                      style: { "color": "#fff", "font-size": "20px" },
                      onClick: _cache[8] || (_cache[8] = (...args) => $options.fullScreen && $options.fullScreen(...args))
                    }, "\uE629")
                  ])) : (0, import_vue.createCommentVNode)("v-if", true)
                ],
                2
                /* CLASS */
              ),
              (0, import_vue.createCommentVNode)(" \u5267\u96C6 "),
              $data.isFull ? ((0, import_vue.openBlock)(), (0, import_vue.createElementBlock)(
                "cover-view",
                {
                  key: 2,
                  class: (0, import_vue.normalizeClass)(["noActive", $data.isShowJuJi ? "Active" : ""]),
                  style: { "position": "absolute", "top": "0", "width": "750rpx", "background-color": "rgba(40,40,40,.5)" }
                },
                [
                  $data.isShowJuJi ? ((0, import_vue.openBlock)(), (0, import_vue.createElementBlock)(
                    "view",
                    {
                      key: 0,
                      class: "",
                      style: (0, import_vue.normalizeStyle)([{ height: $data.windowWidth + "px" }, { "display": "flex", "flex-direction": "row", "width": "750rpx", "justify-content": "space-between" }]),
                      onClick: _cache[9] || (_cache[9] = (...args) => $options.hideShowJuJi && $options.hideShowJuJi(...args))
                    },
                    [
                      (0, import_vue.createElementVNode)("view", {
                        class: "",
                        style: { "display": "flex", "flex-direction": "column", "align-items": "center", "width": "300rpx", "padding-top": "20rpx" }
                      }, [
                        (0, import_vue.createElementVNode)("u-text", { style: { "color": "#fff", "font-size": "16px", "width": "260rpx" } }, "\u9009\u96C6")
                      ]),
                      (0, import_vue.createElementVNode)(
                        "scroll-view",
                        {
                          scrollY: true,
                          style: (0, import_vue.normalizeStyle)([{ height: $data.windowWidth + "px" }, { "display": "flex", "flex-direction": "column", "padding": "10rpx", "align-items": "center", "width": "300rpx" }])
                        },
                        [
                          ((0, import_vue.openBlock)(true), (0, import_vue.createElementBlock)(
                            import_vue.Fragment,
                            null,
                            (0, import_vue.renderList)($props.videoList, (vod, index) => {
                              return (0, import_vue.openBlock)(), (0, import_vue.createElementBlock)("view", {
                                class: "",
                                onClick: ($event) => $options.chooseJuJi(index)
                              }, [
                                vod && vod["ifShow"] ? ((0, import_vue.openBlock)(), (0, import_vue.createElementBlock)(
                                  "view",
                                  {
                                    key: 0,
                                    style: (0, import_vue.normalizeStyle)([{ border: $data.currentJuJi == index ? "1px solid #FB7299" : "1px solid #cdcdcd" }, { "width": "260rpx", "padding": "10rpx", "border-radius": "5rpx", "margin": "3rpx 0" }])
                                  },
                                  [
                                    $props.type == "0" ? ((0, import_vue.openBlock)(), (0, import_vue.createElementBlock)(
                                      "u-text",
                                      {
                                        key: 0,
                                        class: "",
                                        style: (0, import_vue.normalizeStyle)({ color: $data.currentJuJi == index ? "#FB7299" : "#fff" })
                                      },
                                      (0, import_vue.toDisplayString)(vod["name"]),
                                      5
                                      /* TEXT, STYLE */
                                    )) : (0, import_vue.createCommentVNode)("v-if", true),
                                    $props.type == "1" ? ((0, import_vue.openBlock)(), (0, import_vue.createElementBlock)(
                                      "u-text",
                                      {
                                        key: 1,
                                        class: "",
                                        style: (0, import_vue.normalizeStyle)({ color: $data.currentJuJi == index ? "#FB7299" : "#fff" })
                                      },
                                      (0, import_vue.toDisplayString)(vod["fileName"]),
                                      5
                                      /* TEXT, STYLE */
                                    )) : (0, import_vue.createCommentVNode)("v-if", true)
                                  ],
                                  4
                                  /* STYLE */
                                )) : (0, import_vue.createCommentVNode)("v-if", true)
                              ], 8, ["onClick"]);
                            }),
                            256
                            /* UNKEYED_FRAGMENT */
                          ))
                        ],
                        4
                        /* STYLE */
                      )
                    ],
                    4
                    /* STYLE */
                  )) : (0, import_vue.createCommentVNode)("v-if", true)
                ],
                2
                /* CLASS */
              )) : (0, import_vue.createCommentVNode)("v-if", true),
              (0, import_vue.createCommentVNode)(" \u500D\u901F "),
              $data.isFull ? ((0, import_vue.openBlock)(), (0, import_vue.createElementBlock)(
                "cover-view",
                {
                  key: 3,
                  class: (0, import_vue.normalizeClass)(["noActive", $data.isShowBeiSu ? "Active" : ""]),
                  style: { "position": "absolute", "top": "0", "width": "750rpx", "background-color": "rgba(40,40,40,.5)" }
                },
                [
                  $data.isShowBeiSu ? ((0, import_vue.openBlock)(), (0, import_vue.createElementBlock)(
                    "view",
                    {
                      key: 0,
                      class: "",
                      style: (0, import_vue.normalizeStyle)([{ height: $data.windowWidth + "px" }, { "display": "flex", "flex-direction": "row", "width": "750rpx", "justify-content": "space-between" }]),
                      onClick: _cache[10] || (_cache[10] = (...args) => $options.hideShowBeiSu && $options.hideShowBeiSu(...args))
                    },
                    [
                      (0, import_vue.createElementVNode)("view", {
                        class: "",
                        style: { "display": "flex", "flex-direction": "column", "align-items": "center", "width": "300rpx", "padding-top": "20rpx" }
                      }, [
                        (0, import_vue.createElementVNode)("u-text", { style: { "color": "#fff", "font-size": "16px", "width": "260rpx" } }, "\u500D\u901F")
                      ]),
                      (0, import_vue.createElementVNode)(
                        "scroll-view",
                        {
                          scrollY: true,
                          style: (0, import_vue.normalizeStyle)([{ height: $data.windowWidth + "px" }, { "display": "flex", "flex-direction": "column", "padding": "10rpx", "align-items": "center", "width": "300rpx" }])
                        },
                        [
                          ((0, import_vue.openBlock)(true), (0, import_vue.createElementBlock)(
                            import_vue.Fragment,
                            null,
                            (0, import_vue.renderList)($data.rateList, (rate) => {
                              return (0, import_vue.openBlock)(), (0, import_vue.createElementBlock)("view", {
                                class: "",
                                onClick: ($event) => $options.chooseBeiSu(rate),
                                style: (0, import_vue.normalizeStyle)([{ border: $data.currentRate == rate ? "1px solid #FB7299" : "1px solid #cdcdcd" }, { "width": "260rpx", "padding": "10rpx", "border-radius": "5rpx", "margin": "3rpx 0" }])
                              }, [
                                (0, import_vue.createElementVNode)(
                                  "u-text",
                                  {
                                    class: "",
                                    style: (0, import_vue.normalizeStyle)({ color: $data.currentRate == rate ? "#FB7299" : "#fff" })
                                  },
                                  (0, import_vue.toDisplayString)(rate),
                                  5
                                  /* TEXT, STYLE */
                                )
                              ], 12, ["onClick"]);
                            }),
                            256
                            /* UNKEYED_FRAGMENT */
                          ))
                        ],
                        4
                        /* STYLE */
                      )
                    ],
                    4
                    /* STYLE */
                  )) : (0, import_vue.createCommentVNode)("v-if", true)
                ],
                2
                /* CLASS */
              )) : (0, import_vue.createCommentVNode)("v-if", true),
              (0, import_vue.createCommentVNode)(" \u63A5\u53E3 "),
              $data.isFull ? ((0, import_vue.openBlock)(), (0, import_vue.createElementBlock)(
                "cover-view",
                {
                  key: 4,
                  class: (0, import_vue.normalizeClass)(["noActive", $data.isShowJK ? "Active" : ""]),
                  style: { "position": "absolute", "top": "0", "width": "750rpx", "background-color": "rgba(40,40,40,.5)" }
                },
                [
                  $data.isShowJK ? ((0, import_vue.openBlock)(), (0, import_vue.createElementBlock)(
                    "view",
                    {
                      key: 0,
                      class: "",
                      style: (0, import_vue.normalizeStyle)([{ height: $data.windowWidth + "px" }, { "display": "flex", "flex-direction": "row", "width": "750rpx", "justify-content": "space-between" }]),
                      onClick: _cache[11] || (_cache[11] = (...args) => $options.hideShowJK && $options.hideShowJK(...args))
                    },
                    [
                      (0, import_vue.createElementVNode)("view", {
                        class: "",
                        style: { "display": "flex", "flex-direction": "column", "align-items": "center", "width": "300rpx", "padding-top": "20rpx" }
                      }, [
                        (0, import_vue.createElementVNode)("u-text", { style: { "color": "#fff", "font-size": "16px", "width": "260rpx" } }, "\u7EBF\u8DEF")
                      ]),
                      (0, import_vue.createElementVNode)(
                        "scroll-view",
                        {
                          scrollY: true,
                          style: (0, import_vue.normalizeStyle)([{ height: $data.windowWidth + "px" }, { "display": "flex", "flex-direction": "column", "padding": "10rpx", "align-items": "center", "width": "300rpx" }])
                        },
                        [
                          ((0, import_vue.openBlock)(true), (0, import_vue.createElementBlock)(
                            import_vue.Fragment,
                            null,
                            (0, import_vue.renderList)($data.playUrlArr, (jk, index) => {
                              return (0, import_vue.openBlock)(), (0, import_vue.createElementBlock)("view", {
                                class: "",
                                onClick: ($event) => $options.chooseJK(index),
                                style: (0, import_vue.normalizeStyle)([{ border: $data.currentJK == jk ? "1px solid #FB7299" : "1px solid #cdcdcd" }, { "width": "260rpx", "padding": "10rpx", "border-radius": "5rpx", "margin": "3rpx 0" }])
                              }, [
                                (0, import_vue.createElementVNode)(
                                  "u-text",
                                  {
                                    class: "",
                                    style: (0, import_vue.normalizeStyle)({ color: $data.currentJK == index ? "#FB7299" : "#fff" })
                                  },
                                  (0, import_vue.toDisplayString)(jk["title"]),
                                  5
                                  /* TEXT, STYLE */
                                )
                              ], 12, ["onClick"]);
                            }),
                            256
                            /* UNKEYED_FRAGMENT */
                          ))
                        ],
                        4
                        /* STYLE */
                      )
                    ],
                    4
                    /* STYLE */
                  )) : (0, import_vue.createCommentVNode)("v-if", true)
                ],
                2
                /* CLASS */
              )) : (0, import_vue.createCommentVNode)("v-if", true)
            ])
          ], 40, ["autoplay", "header", "src"])
        ])
      ])
    ]);
  }
  var __easycom_0 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1], ["styles", [_style_0$1]], ["__file", "D:/myitem/uniapp/\u8F7B\u5F71\u89C6/components/myVideoPlayer/myVideoPlayer.vue"]]);
  var _style_0 = { "tabMain": { "": { "width": "750rpx", "display": "flex", "flexDirection": "row", "whiteSpace": "nowrap" } }, "tab": { "": { "width": "750rpx", "display": "flex", "flexDirection": "row", "whiteSpace": "nowrap" } }, "tabLineView": { "": { "position": "relative", "height": 2 } }, "tabLine": { "": { "position": "absolute", "height": 2, "top": 0, "bottom": 0, "width": 0, "backgroundColor": "#FB7299" } }, "tabLineActive": { "": { "transitionDuration": 200, "transitionProperty": "left" } }, "childPageView": { "": { "display": "flex", "flexDirection": "column" } }, "tabItemTitle": { "": { "color": "#505050", "fontSize": 14, "height": "50rpx", "lineHeight": "50rpx", "display": "flex", "flexWrap": "nowrap", "alignItems": "center", "justifyContent": "center" } }, "tabItemTitleActive": { "": { "color": "#FB7299" } }, "childPageViewItem": { "": { "flex": 1, "flexDirection": "column", "marginTop": "10rpx" } }, "@TRANSITION": { "tabLineActive": { "duration": 200, "property": "left" } } };
  var _sfc_main = {
    data() {
      return {
        currentJuJi: 0,
        type: "",
        pwd: "",
        videoTile: "\u89C2\u5F71\u6109\u5FEB",
        vod_play_list: [],
        videoInfo: {},
        videoList: [],
        tabIndex: 0,
        tabScrollInto: "",
        tabItemLineLeft: 0,
        tabItemLineWidth: 24,
        windowHeight: 0,
        windowWidth: 0,
        tabListSize: [],
        swiperHeight: 0,
        myclass: [
          {
            name: "\u7B80\u4ECB"
          },
          {
            name: "\u8BC4\u8BBA",
            tip: "1.7\u4EBF"
          }
        ]
      };
    },
    onLoad(option) {
      this.currentJuJi = option.index;
      this.type = option.type;
      this.pwd = option.pwd;
      let system = uni.getSystemInfoSync();
      this.windowHeight = system.windowHeight;
      this.windowWidth = system.windowWidth;
      var rpx = this.windowWidth / 750;
      this.swiperHeight = this.windowHeight / rpx - 610;
      this.jcsetTabItemDistance();
      this.id = option.id;
      this.getVideoInfo();
    },
    onShow() {
      if (this.$refs.myVideo) {
        this.$refs.myVideo.videoPlay();
      }
    },
    methods: {
      openDetail() {
      },
      // 选集
      chooseJuJi(index) {
        if (this.videoList && this.videoList[index]) {
          this.currentJuJi = index;
        }
      },
      // 返回上一页
      goBack() {
        uni.navigateBack();
      },
      getVideoInfo() {
        uni.getStorage({
          key: "fileList",
          success: (res) => {
            if (this.type == "0") {
              for (var i = 0; i < res.data.length; i++) {
                e = res.data[i];
                res.data[i]["ifShow"] = false;
                if (e["category"]) {
                  if (e["category"] == "video") {
                    res.data[i]["ifShow"] = true;
                  }
                }
              }
            }
            if (this.type == "1") {
              for (var i = 0; i < res.data.length; i++) {
                e = res.data[i];
                res.data[i]["ifShow"] = false;
                if (e["suffix"]) {
                  if (e["suffix"] == "mp4" || e["suffix"] == "mkv") {
                    res.data[i]["ifShow"] = true;
                  }
                }
              }
            }
            this.videoList = res.data;
          }
        });
        uni.getStorage({
          key: "fileInfo",
          success: (res) => {
            this.videoInfo = res.data;
          }
        });
      },
      swiperChange(e2) {
        let index = e2.detail.current;
        this.setTabSelect(index);
        this.setTabItemLinePosition(this.tabListSize[this.tabIndex].left, this.tabListSize[this.tabIndex].width);
      },
      pressScrollViewItem(index) {
        this.setTabSelect(index);
      },
      jcsetTabItemDistance() {
        var queryTabSize = uni.createSelectorQuery().in(this);
        var timer = setInterval((res) => {
          queryTabSize.select("#tabb" + (this.myclass.length - 1)).boundingClientRect((data) => {
            if (data) {
              clearInterval(timer);
              this.setTabItemDistance();
            }
          }).exec();
        }, 100);
      },
      setTabItemDistance() {
        var queryTabSize = uni.createSelectorQuery().in(this);
        for (var i = 0; i < this.myclass.length; i++) {
          queryTabSize.select("#tabb" + [i]).boundingClientRect();
        }
        queryTabSize.exec((rects) => {
          rects.forEach((rect) => {
            this.tabListSize[rect.dataset.id] = rect;
          });
          this.setTabItemLinePosition(this.tabListSize[this.tabIndex].left, this.tabListSize[this.tabIndex].width);
        });
      },
      setTabItemLinePosition(left, width) {
        this.tabItemLineLeft = left + width / 2 - 12;
      },
      setTabSelect(index) {
        this.tabScrollInto = "tabb" + index;
        this.tabIndex = index;
      }
    }
  };
  function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_myVideoPlayer = resolveEasycom((0, import_vue.resolveDynamicComponent)("myVideoPlayer"), __easycom_0);
    const _component_u_icon = resolveEasycom((0, import_vue.resolveDynamicComponent)("u-icon"), __easycom_1$1);
    const _component_swiper_item = (0, import_vue.resolveComponent)("swiper-item");
    const _component_swiper = (0, import_vue.resolveComponent)("swiper");
    return (0, import_vue.openBlock)(), (0, import_vue.createElementBlock)("scroll-view", {
      scrollY: true,
      showScrollbar: true,
      enableBackToTop: true,
      bubble: "true",
      style: { flexDirection: "column" }
    }, [
      (0, import_vue.createElementVNode)("view", { class: "flex-col" }, [
        (0, import_vue.createElementVNode)("view", { class: "header flex-col" }, [
          (0, import_vue.createElementVNode)("view", {
            class: "",
            style: { "height": "60rpx", "background-color": "#000" }
          }),
          (0, import_vue.createElementVNode)("view", {
            class: "",
            style: {}
          }, [
            (0, import_vue.createVNode)(_component_myVideoPlayer, {
              ref: "myVideo",
              videoTitle: $data.videoTile,
              videoList: $data.videoList,
              type: $data.type,
              pwd: $data.pwd,
              modelValue: $data.currentJuJi,
              "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $data.currentJuJi = $event)
            }, null, 8, ["videoTitle", "videoList", "type", "pwd", "modelValue"])
          ])
        ]),
        (0, import_vue.createElementVNode)("view", { class: "center flex-col" }, [
          (0, import_vue.createElementVNode)("view", { class: "" }, [
            (0, import_vue.createElementVNode)("scroll-view", {
              class: "tabMain flex-col",
              showScrollbar: false,
              scrollX: true,
              scrollIntoView: $data.tabScrollInto
            }, [
              (0, import_vue.createElementVNode)("view", {
                class: "tabContent flex-col",
                style: { "width": "750rpx", "background-color": "#fff", "border-bottom": "1px solid #e7e7e7" }
              }, [
                (0, import_vue.createElementVNode)("view", { class: "flex-row" }, [
                  ((0, import_vue.openBlock)(true), (0, import_vue.createElementBlock)(
                    import_vue.Fragment,
                    null,
                    (0, import_vue.renderList)($data.myclass, (tab, tabItemIndex) => {
                      return (0, import_vue.openBlock)(), (0, import_vue.createElementBlock)("view", {
                        class: "tabItem flex-row",
                        id: "tabb" + tabItemIndex,
                        "data-id": tabItemIndex,
                        onClick: ($event) => $options.pressScrollViewItem(tabItemIndex),
                        style: {}
                      }, [
                        (0, import_vue.createElementVNode)("view", {
                          class: "flex-row",
                          style: { "padding": "0 20rpx", "height": "70rpx" }
                        }, [
                          (0, import_vue.createElementVNode)(
                            "u-text",
                            {
                              class: (0, import_vue.normalizeClass)(["tabItemTitle", $data.tabIndex == tabItemIndex ? "tabItemTitleActive" : ""]),
                              style: { "line-height": "70rpx" }
                            },
                            (0, import_vue.toDisplayString)(tab.name),
                            3
                            /* TEXT, CLASS */
                          ),
                          tab.tip ? ((0, import_vue.openBlock)(), (0, import_vue.createElementBlock)(
                            "u-text",
                            {
                              key: 0,
                              class: (0, import_vue.normalizeClass)($data.tabIndex == tabItemIndex ? "tabItemTitleActive" : ""),
                              style: { "font-size": "11px", "line-height": "70rpx", "padding-left": "3rpx" }
                            },
                            (0, import_vue.toDisplayString)(tab.tip),
                            3
                            /* TEXT, CLASS */
                          )) : (0, import_vue.createCommentVNode)("v-if", true)
                        ])
                      ], 8, ["id", "data-id", "onClick"]);
                    }),
                    256
                    /* UNKEYED_FRAGMENT */
                  ))
                ]),
                (0, import_vue.createElementVNode)("view", { class: "tabLineView flex-row" }, [
                  (0, import_vue.createElementVNode)(
                    "view",
                    {
                      class: "tabLine tabLineActive",
                      style: (0, import_vue.normalizeStyle)({
                        left: `${$data.tabItemLineLeft}px`,
                        width: `${$data.tabItemLineWidth}px`
                      })
                    },
                    null,
                    4
                    /* STYLE */
                  )
                ])
              ])
            ], 8, ["scrollIntoView"]),
            (0, import_vue.createVNode)(_component_swiper, {
              class: "childPageView",
              current: $data.tabIndex,
              duration: 100,
              onChange: $options.swiperChange,
              style: (0, import_vue.normalizeStyle)({ height: $data.swiperHeight + "rpx" })
            }, {
              default: (0, import_vue.withCtx)(() => [
                ((0, import_vue.openBlock)(true), (0, import_vue.createElementBlock)(
                  import_vue.Fragment,
                  null,
                  (0, import_vue.renderList)($data.myclass, (page, childPageViewItemIndex) => {
                    return (0, import_vue.openBlock)(), (0, import_vue.createBlock)(
                      _component_swiper_item,
                      {
                        class: "childPageViewItem flex-col",
                        key: childPageViewItemIndex
                      },
                      {
                        default: (0, import_vue.withCtx)(() => [
                          (0, import_vue.createElementVNode)(
                            "scroll-view",
                            {
                              class: "flex-col",
                              style: (0, import_vue.normalizeStyle)([{ "padding": "30rpx 20rpx" }, { height: $data.swiperHeight + "rpx" }]),
                              scrollY: true,
                              lowerThreshold: "300"
                            },
                            [
                              $data.tabIndex == 0 ? ((0, import_vue.openBlock)(), (0, import_vue.createElementBlock)("view", {
                                key: 0,
                                class: "flex-col"
                              }, [
                                (0, import_vue.createElementVNode)("view", { class: "" }, [
                                  (0, import_vue.createElementVNode)(
                                    "u-text",
                                    { style: { "font-weight": "600", "font-size": "18px" } },
                                    (0, import_vue.toDisplayString)($data.videoInfo["name"]),
                                    1
                                    /* TEXT */
                                  )
                                ]),
                                (0, import_vue.createElementVNode)("view", {
                                  class: "flex-row justify-between",
                                  style: { "margin-top": "15rpx" }
                                }, [
                                  (0, import_vue.createElementVNode)("view", { class: "" }, [
                                    (0, import_vue.createElementVNode)(
                                      "u-text",
                                      {
                                        class: "line_1",
                                        style: { "font-size": "12px" }
                                      },
                                      (0, import_vue.toDisplayString)($data.videoInfo["pan_type"]),
                                      1
                                      /* TEXT */
                                    )
                                  ]),
                                  (0, import_vue.createElementVNode)("view", {
                                    class: "flex-row",
                                    onClick: _cache[1] || (_cache[1] = (...args) => $options.openDetail && $options.openDetail(...args))
                                  }, [
                                    (0, import_vue.createElementVNode)("u-text", { style: { "font-size": "12px" } }, "\u8BE6\u60C5"),
                                    (0, import_vue.createVNode)(_component_u_icon, {
                                      name: "arrow-right",
                                      size: "14"
                                    })
                                  ])
                                ]),
                                (0, import_vue.createCommentVNode)(" \u9009\u96C6 "),
                                (0, import_vue.createElementVNode)("view", { class: "" }, [
                                  (0, import_vue.createElementVNode)("view", {
                                    class: "flex-row justify-between",
                                    style: { "margin-top": "30rpx" }
                                  }, [
                                    (0, import_vue.createElementVNode)("view", { class: "" }, [
                                      (0, import_vue.createElementVNode)("u-text", { style: { "font-size": "14px" } }, "\u9009\u96C6")
                                    ]),
                                    (0, import_vue.createElementVNode)("view", { class: "" }, [
                                      (0, import_vue.createVNode)(_component_u_icon, {
                                        name: "arrow-right",
                                        size: "14"
                                      })
                                    ])
                                  ]),
                                  (0, import_vue.createElementVNode)("view", {
                                    class: "",
                                    style: { "margin-top": "15rpx" }
                                  }, [
                                    (0, import_vue.createElementVNode)("scroll-view", {
                                      class: "flex-row",
                                      style: { "position": "relative", "left": "-10rpx" },
                                      scrollX: true,
                                      showScrollbar: false
                                    }, [
                                      ((0, import_vue.openBlock)(true), (0, import_vue.createElementBlock)(
                                        import_vue.Fragment,
                                        null,
                                        (0, import_vue.renderList)($data.videoList, (vod, index) => {
                                          return (0, import_vue.openBlock)(), (0, import_vue.createElementBlock)("view", {
                                            onClick: ($event) => $options.chooseJuJi(index)
                                          }, [
                                            vod && vod["ifShow"] ? ((0, import_vue.openBlock)(), (0, import_vue.createElementBlock)("view", {
                                              key: 0,
                                              class: "",
                                              style: { "margin": "0 10rpx", "padding": "30rpx 60rpx", "border-radius": "10rpx", "background-color": "#f0f1f3" }
                                            }, [
                                              (0, import_vue.createElementVNode)("view", { style: { "width": "200rpx" } }, [
                                                $data.type == "0" ? ((0, import_vue.openBlock)(), (0, import_vue.createElementBlock)(
                                                  "u-text",
                                                  {
                                                    key: 0,
                                                    style: (0, import_vue.normalizeStyle)([{ color: $data.currentJuJi == index ? "#FB7299" : "#000" }, { "font-size": "13px", "text-align": "center" }])
                                                  },
                                                  (0, import_vue.toDisplayString)(vod["name"]),
                                                  5
                                                  /* TEXT, STYLE */
                                                )) : (0, import_vue.createCommentVNode)("v-if", true),
                                                $data.type == "1" ? ((0, import_vue.openBlock)(), (0, import_vue.createElementBlock)(
                                                  "u-text",
                                                  {
                                                    key: 1,
                                                    style: (0, import_vue.normalizeStyle)([{ color: $data.currentJuJi == index ? "#FB7299" : "#000" }, { "font-size": "13px", "text-align": "center" }])
                                                  },
                                                  (0, import_vue.toDisplayString)(vod["fileName"]),
                                                  5
                                                  /* TEXT, STYLE */
                                                )) : (0, import_vue.createCommentVNode)("v-if", true)
                                              ])
                                            ])) : (0, import_vue.createCommentVNode)("v-if", true)
                                          ], 8, ["onClick"]);
                                        }),
                                        256
                                        /* UNKEYED_FRAGMENT */
                                      ))
                                    ])
                                  ])
                                ])
                              ])) : (0, import_vue.createCommentVNode)("v-if", true),
                              $data.tabIndex == 1 ? ((0, import_vue.openBlock)(), (0, import_vue.createElementBlock)("view", {
                                key: 1,
                                class: "flex-col"
                              }, [
                                (0, import_vue.createElementVNode)("u-text", null, " \u8BC4\u8BBA\u533A ")
                              ])) : (0, import_vue.createCommentVNode)("v-if", true)
                            ],
                            4
                            /* STYLE */
                          )
                        ]),
                        _: 2
                        /* DYNAMIC */
                      },
                      1024
                      /* DYNAMIC_SLOTS */
                    );
                  }),
                  128
                  /* KEYED_FRAGMENT */
                ))
              ]),
              _: 1
              /* STABLE */
            }, 8, ["current", "onChange", "style"])
          ])
        ]),
        (0, import_vue.createElementVNode)("view", { class: "bottom" })
      ])
    ]);
  }
  var play = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["styles", [_style_0]], ["__file", "D:/myitem/uniapp/\u8F7B\u5F71\u89C6/pages/play/play.nvue"]]);

  // <stdin>
  var webview = plus.webview.currentWebview();
  if (webview) {
    const __pageId = parseInt(webview.id);
    const __pagePath = "pages/play/play";
    let __pageQuery = {};
    try {
      __pageQuery = JSON.parse(webview.__query__);
    } catch (e2) {
    }
    play.mpType = "page";
    const app = Vue.createPageApp(play, { $store: getApp({ allowDefault: true }).$store, __pageId, __pagePath, __pageQuery });
    app.provide("__globalStyles", Vue.useCssStyles([...__uniConfig.styles, ...play.styles || []]));
    app.mount("#root");
  }
})();
