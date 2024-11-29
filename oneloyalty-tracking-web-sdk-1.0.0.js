!function(e,n){"object"==typeof exports&&"undefined"!=typeof module?module.exports=n():"function"==typeof define&&define.amd?define(n):(e="undefined"!=typeof globalThis?globalThis:e||self).OneLoyaltyTrackingWebSDK=n()}(this,(function(){"use strict";var e=function(){return e=Object.assign||function(e){for(var n,i=1,t=arguments.length;i<t;i++)for(var o in n=arguments[i])Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o]);return e},e.apply(this,arguments)};"function"==typeof SuppressedError&&SuppressedError;const n=[];for(let e=0;e<256;++e)n.push((e+256).toString(16).slice(1));let i;const t=new Uint8Array(16);function o(){if(!i){if("undefined"==typeof crypto||!crypto.getRandomValues)throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");i=crypto.getRandomValues.bind(crypto)}return i(t)}var r={randomUUID:"undefined"!=typeof crypto&&crypto.randomUUID&&crypto.randomUUID.bind(crypto)};function a(e,i,t){if(r.randomUUID&&!i&&!e)return r.randomUUID();const a=(e=e||{}).random||(e.rng||o)();if(a[6]=15&a[6]|64,a[8]=63&a[8]|128,i){t=t||0;for(let e=0;e<16;++e)i[t+e]=a[e];return i}return function(e,i=0){return(n[e[i+0]]+n[e[i+1]]+n[e[i+2]]+n[e[i+3]]+"-"+n[e[i+4]]+n[e[i+5]]+"-"+n[e[i+6]]+n[e[i+7]]+"-"+n[e[i+8]]+n[e[i+9]]+"-"+n[e[i+10]]+n[e[i+11]]+n[e[i+12]]+n[e[i+13]]+n[e[i+14]]+n[e[i+15]]).toLowerCase()}(a)}function s(e){var n,i=((n=localStorage.getItem("tracking_failed_events"))?JSON.parse(n):null)||[];i.push(e),localStorage.setItem("tracking_failed_events",JSON.stringify(i))}return new(function(){function n(){this.apiKey=null,this.appInfo=null,this.baseUrl=null,this.debug=!1,this.deviceId=null,this.deviceInfo=null,this.eventQueue=[],this.properties={},this.sdkInfo=null}return n.prototype.init=function(e){var n,i,t=e.deviceId,o=e.appName,r=e.appVersion,a=e.baseUrl,s=e.apiKey,d=void 0===s?"oneloyalty-app":s,c=e.debug,p=void 0!==c&&c,l=e.userId,u=void 0===l?null:l;d?t&&a?o&&r?(this.apiKey=d,this.appInfo={name:o,version:r},this.baseUrl=a,this.debug=p,this.deviceId=t,this.deviceInfo=(n=t,i=function(e){var n,i={deviceType:"Unknown"};if(/Mobi|Android/i.test(e)?i.deviceType="Mobile":/Tablet|iPad/i.test(e)?i.deviceType="Tablet":/Desktop|Macintosh|Windows/i.test(e)&&(i.deviceType="Desktop"),/iPhone/i.test(e))i.deviceBrand="Apple",i.deviceModel="iPhone";else if(/iPad/i.test(e))i.deviceBrand="Apple",i.deviceModel="iPad";else if(/Samsung/i.test(e)){i.deviceBrand="Samsung";var t=e.match(/SM-[\w\d]+/);t&&(i.deviceModel=t[0])}else/Huawei/i.test(e)?i.deviceBrand="Huawei":/Pixel/i.test(e)&&(i.deviceBrand="Google",i.deviceModel="Pixel");for(var o=0,r=[{name:"iOS",regex:/CPU (iPhone )?OS ([\d_]+)/},{name:"Android",regex:/Android ([\d.]+)/},{name:"Windows",regex:/Windows NT ([\d.]+)/},{name:"MacOS",regex:/Mac OS X ([\d_]+)/},{name:"Linux",regex:/Linux/}];o<r.length;o++){var a=r[o];if(u=e.match(a.regex)){i.os={name:a.name,version:null===(n=u[2])||void 0===n?void 0:n.replace(/_/g,".")};break}}for(var s=0,d=[{name:"Chrome",regex:/Chrome\/([\d.]+)/},{name:"Firefox",regex:/Firefox\/([\d.]+)/},{name:"Safari",regex:/Version\/([\d.]+).*Safari/},{name:"Edge",regex:/Edg\/([\d.]+)/},{name:"Opera",regex:/Opera\/([\d.]+)|OPR\/([\d.]+)/}];s<d.length;s++){var c=d[s];if(u=e.match(c.regex)){i.browser={name:c.name,version:u[1]||u[2]};break}}for(var p=0,l=[{name:"Blink",regex:/Chrome\/([\d.]+)/},{name:"WebKit",regex:/AppleWebKit\/([\d.]+)/},{name:"Gecko",regex:/Gecko\/([\d.]+)/}];p<l.length;p++){var u,v=l[p];if(u=e.match(v.regex)){i.engine={name:v.name,version:u[1]};break}}return i}(navigator.userAgent),{id:n,name:i.deviceModel,timezone:Intl.DateTimeFormat().resolvedOptions().timeZone,language:navigator.language,os:i.os.name,osVersion:i.os.version,type:"Mobile"===i.deviceType?"PHONE":i.deviceType,width:window.screen.width+"",height:window.screen.height+"",manufacturer:i.deviceBrand||navigator.vendor,model:""}),this.properties={userAgent:navigator.userAgent,userId:u},this.sdkInfo={name:"oneloyalty-tracking-web-sdk",version:"1.0.0"},this.debug&&console.log("Tracking SDK initialized:",{deviceId:t,baseUrl:a})):console.error("Tracking SDK: Missing appName or appVersion."):console.error("Tracking SDK: Missing deviceId or baseUrl."):console.error("Tracking SDK: Missing apiKey.")},n.prototype.trackEvent=function(n,i){var t;if(void 0===i&&(i={}),this.apiKey&&this.baseUrl&&this.appInfo&&this.deviceInfo&&this.sdkInfo){var o={id:a(),specVersion:this.sdkInfo.version,source:"".concat(this.appInfo.name,"-").concat(this.sdkInfo.name),type:"EVENT",data:{deviceId:null===(t=this.deviceInfo)||void 0===t?void 0:t.id,eventName:n,context:{appInformation:this.appInfo,sdk:this.sdkInfo,device:this.deviceInfo},properties:e(e({},this.properties),i),timeRecord:Date.now()}};this.eventQueue.push(o),this.sendEvent(o)}else console.error("Tracking SDK: SDK not initialized.")},n.prototype.sendEvent=function(e){var n=this;this.apiKey&&this.deviceId&&this.baseUrl&&fetch("".concat(this.baseUrl,"/publish/api/v1/user-events"),{method:"POST",headers:{"Content-Type":"application/json","X-Client-Id":"".concat(this.apiKey)},body:JSON.stringify({limit:1,records:[e]})}).then((function(e){if(!e.ok)throw new Error("Network response was not ok");return e.json()})).then((function(i){n.debug&&console.log("Event tracked:",i),n.eventQueue=n.eventQueue.filter((function(n){return n!==e}))})).catch((function(n){console.error("Tracking SDK: Error tracking event:",n),s(e)}))},n.prototype.setUser=function(n,i){void 0===i&&(i={}),this.trackEvent("set_user",e({userId:n},i))},n}())}));
//# sourceMappingURL=oneloyalty-tracking-web-sdk-1.0.0.js.map