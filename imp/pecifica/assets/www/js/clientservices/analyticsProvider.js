var tokenModule=angular.module("pacificaAnalytics",[]);tokenModule.provider("$analytics",function(){var e=!1,n={initialize:function(i,a,o){window.ga&&(window.ga("create",i,{storage:"none",cookieDomain:"none",clientId:window.device?device.uuid:"abc123"}),window.ga("set","appName","Pacifica"),window.ga("set","appVersion",a),window.ga("set","checkProtocolTask",function(){}),window.ga("set","forceSSL",!0),window.ga("set","anonymizeIp",!0),e=!0,n.pageTrack(o))},eventTrack:function(n,i){window.ga&&e&&window.ga("send","event",i.category,n,i.label)},pageTrack:function(n){window.ga&&e&&(window.ga("set","screenName",n),window.ga("send","screenview",{screenName:n}))},setUserId:function(n){window.ga&&e&&window.ga("set","&uid",""+n)}};return{eventTrack:n.eventTrack,initialize:n.initialize,setUserId:n.setUserId,$get:function(){return n}}});