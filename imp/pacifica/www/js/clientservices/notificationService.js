var servicesModule=angular.module("notificationService",[]);servicesModule.factory("NotificationService",["$http","$rootScope","$translate","authHttp","Environment","AccountService","HabitsService",function(i,o,n,t,a,r,e){function c(){u.registrationId&&(a.isAndroid()?r.registerGCMToken(u.registrationId,function(i){409==i.status&&u.push.unregister(function(){u.push=void 0,u.registerNotifications()},function(){})}):r.registerAPNSToken(u.registrationId))}var d=1e3,u={push:void 0,registrationId:void 0};return u.registerNotifications=function(i,o){window.PushNotification&&!u.push&&(u.push=PushNotification.init({android:{senderID:"435361669565",icon:"notif",iconColor:"#1ac88d"},ios:{alert:"true",badge:"true",sound:"true",clearBadge:"true"}}),u.push.on("registration",function(o){u.registrationId=o.registrationId,c(),i&&i()}),u.push.on("notification",function(i){i.additionalData&&!i.additionalData.foreground&&i.additionalData.url&&(localStorage.setItem("externalLoadURL",i.additionalData.url),window.checkExternalURL()),a.isIos()&&i.additionalData["content-available"]&&u.push.finish(function(){})}),u.push.on("error",function(i){o&&o()}))},u.queryForHabitReminder=function(i,o){if(window.cordova&&window.cordova.plugins&&window.cordova.plugins.notification&&window.cordova.plugins.notification.local){var n=d+i.id;cordova.plugins.notification.local.get(n,function(i){i&&o&&o(i)})}},u.cancelHabitReminder=function(i,o){if(window.cordova&&window.cordova.plugins&&window.cordova.plugins.notification&&window.cordova.plugins.notification.local){var n=d+i.id;cordova.plugins.notification.local.cancel(n,function(){o&&o()})}},u.scheduleHabitReminder=function(i,o,t){if(window.cordova&&window.cordova.plugins&&window.cordova.plugins.notification&&window.cordova.plugins.notification.local){var a=d+i.id;cordova.plugins.notification.local.schedule({id:a,text:n.instant("HABIT_REMINDER_TEXT").replace("XXXREPLACEXXX",e.getHabitName(i)),at:o,every:"day"},function(i){t&&t(i)})}},u}]);