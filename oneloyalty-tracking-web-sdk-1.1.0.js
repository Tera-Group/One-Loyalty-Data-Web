!function(e,n){"object"==typeof exports&&"undefined"!=typeof module?module.exports=n():"function"==typeof define&&define.amd?define(n):(e="undefined"!=typeof globalThis?globalThis:e||self).OneLoyaltyTrackingWebSDK=n()}(this,(function(){"use strict";var e=function(){return e=Object.assign||function(e){for(var n,t=1,i=arguments.length;t<i;t++)for(var o in n=arguments[t])Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o]);return e},e.apply(this,arguments)};"function"==typeof SuppressedError&&SuppressedError;const n=[];for(let e=0;e<256;++e)n.push((e+256).toString(16).slice(1));let t;const i=new Uint8Array(16);function o(){if(!t){if("undefined"==typeof crypto||!crypto.getRandomValues)throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");t=crypto.getRandomValues.bind(crypto)}return t(i)}var r={randomUUID:"undefined"!=typeof crypto&&crypto.randomUUID&&crypto.randomUUID.bind(crypto)};function a(e,t,i){if(r.randomUUID&&!t&&!e)return r.randomUUID();const a=(e=e||{}).random||(e.rng||o)();if(a[6]=15&a[6]|64,a[8]=63&a[8]|128,t){i=i||0;for(let e=0;e<16;++e)t[i+e]=a[e];return t}return function(e,t=0){return(n[e[t+0]]+n[e[t+1]]+n[e[t+2]]+n[e[t+3]]+"-"+n[e[t+4]]+n[e[t+5]]+"-"+n[e[t+6]]+n[e[t+7]]+"-"+n[e[t+8]]+n[e[t+9]]+"-"+n[e[t+10]]+n[e[t+11]]+n[e[t+12]]+n[e[t+13]]+n[e[t+14]]+n[e[t+15]]).toLowerCase()}(a)}function s(e){var n,t=((n=localStorage.getItem("tracking_failed_events"))?JSON.parse(n):null)||[];t.push(e),localStorage.setItem("tracking_failed_events",JSON.stringify(t))}return new(function(){function n(){this.apiKey=null,this.appInfo=null,this.debug=!1,this.deviceInfo=null,this.eventQueue=[],this.properties={},this.sdkInfo=null,this.userId=null,this.trackingUrl=null,this.loyaltyUrl=null}return n.prototype.init=function(e){var n,t,i=e.token,o=e.appName,r=e.appVersion,a=e.trackingUrl,s=e.loyaltyUrl,d=e.apiKey,c=void 0===d?"oneloyalty-app":d,l=e.debug,p=void 0!==l&&l;c?i&&a&&s?o&&r?(this.apiKey=c,this.appInfo={name:o,version:r},this.trackingUrl=a,this.loyaltyUrl=s,this.debug=p,this.deviceInfo=(n="",t=function(e){var n,t={deviceType:"Unknown"};if(/Mobi|Android/i.test(e)?t.deviceType="Mobile":/Tablet|iPad/i.test(e)?t.deviceType="Tablet":/Desktop|Macintosh|Windows/i.test(e)&&(t.deviceType="Desktop"),/iPhone/i.test(e))t.deviceBrand="Apple",t.deviceModel="iPhone";else if(/iPad/i.test(e))t.deviceBrand="Apple",t.deviceModel="iPad";else if(/Samsung/i.test(e)){t.deviceBrand="Samsung";var i=e.match(/SM-[\w\d]+/);i&&(t.deviceModel=i[0])}else/Huawei/i.test(e)?t.deviceBrand="Huawei":/Pixel/i.test(e)&&(t.deviceBrand="Google",t.deviceModel="Pixel");for(var o=0,r=[{name:"iOS",regex:/CPU (iPhone )?OS ([\d_]+)/},{name:"Android",regex:/Android ([\d.]+)/},{name:"Windows",regex:/Windows NT ([\d.]+)/},{name:"MacOS",regex:/Mac OS X ([\d_]+)/},{name:"Linux",regex:/Linux/}];o<r.length;o++){var a=r[o];if(u=e.match(a.regex)){t.os={name:a.name,version:null===(n=u[2])||void 0===n?void 0:n.replace(/_/g,".")};break}}for(var s=0,d=[{name:"Chrome",regex:/Chrome\/([\d.]+)/},{name:"Firefox",regex:/Firefox\/([\d.]+)/},{name:"Safari",regex:/Version\/([\d.]+).*Safari/},{name:"Edge",regex:/Edg\/([\d.]+)/},{name:"Opera",regex:/Opera\/([\d.]+)|OPR\/([\d.]+)/}];s<d.length;s++){var c=d[s];if(u=e.match(c.regex)){t.browser={name:c.name,version:u[1]||u[2]};break}}for(var l=0,p=[{name:"Blink",regex:/Chrome\/([\d.]+)/},{name:"WebKit",regex:/AppleWebKit\/([\d.]+)/},{name:"Gecko",regex:/Gecko\/([\d.]+)/}];l<p.length;l++){var u,h=p[l];if(u=e.match(h.regex)){t.engine={name:h.name,version:u[1]};break}}return t}(navigator.userAgent),{id:n,name:t.deviceModel,timezone:Intl.DateTimeFormat().resolvedOptions().timeZone,language:navigator.language,os:t.os.name,osVersion:t.os.version,type:"Mobile"===t.deviceType?"PHONE":t.deviceType,width:window.screen.width+"",height:window.screen.height+"",manufacturer:t.deviceBrand||navigator.vendor,model:""}),this.properties={userAgent:navigator.userAgent},this.sdkInfo={name:"oneloyalty-tracking-web-sdk",version:"1.1.0"},this.getMe(i),this.debug&&console.log("Tracking SDK initialized:",{token:i,trackingUrl:a})):console.error("Tracking SDK: Missing appName or appVersion."):console.error("Tracking SDK: Missing token or trackingUrl or loyaltyUrl."):console.error("Tracking SDK: Missing apiKey.")},n.prototype.trackEvent=function(n,t){var i;if(void 0===t&&(t={}),this.userId&&this.trackingUrl&&this.appInfo&&this.deviceInfo&&this.sdkInfo){var o={id:a(),specVersion:this.sdkInfo.version,source:"".concat(this.appInfo.name,"-").concat(this.sdkInfo.name),type:"EVENT",data:{deviceId:null===(i=this.deviceInfo)||void 0===i?void 0:i.id,eventName:n,context:{appInformation:this.appInfo,sdk:this.sdkInfo,device:this.deviceInfo},properties:e(e(e({},this.properties),{userId:this.userId}),t),timeRecord:Date.now()}};this.eventQueue.push(o),this.sendEvent(o)}else console.error("Tracking SDK: SDK not initialized.")},n.prototype.getMe=function(e){var n=this;this.apiKey&&this.loyaltyUrl&&e&&fetch("".concat(this.loyaltyUrl,"/api/v1/users/id"),{method:"GET",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(e),"X-Client-Id":"".concat(this.apiKey)}}).then((function(e){if(!e.ok)throw new Error("Network response was not ok");return e.json()})).then((function(e){var t;n.debug&&console.log("Parse token success:",e),n.userId=null===(t=null==e?void 0:e.data)||void 0===t?void 0:t.userId})).catch((function(e){console.error("Parse token failed:",e)}))},n.prototype.sendEvent=function(e){var n=this;this.apiKey&&this.userId&&this.trackingUrl&&fetch("".concat(this.trackingUrl,"/publish/api/v1/user-events"),{method:"POST",headers:{"Content-Type":"application/json","X-Client-Id":"".concat(this.apiKey)},body:JSON.stringify({limit:1,records:[e]})}).then((function(e){if(!e.ok)throw new Error("Network response was not ok");return e.json()})).then((function(t){n.debug&&console.log("Event tracked:",t),n.eventQueue=n.eventQueue.filter((function(n){return n!==e}))})).catch((function(n){console.error("Tracking SDK: Error tracking event:",n),s(e)}))},n.prototype.setUser=function(n,t){void 0===t&&(t={}),this.trackEvent("set_user",e({userId:n},t))},n}())}));
//# sourceMappingURL=oneloyalty-tracking-web-sdk-1.1.0.js.map