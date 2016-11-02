!function(){function e(){i&&i()}function t(t,o){s||(s=!0,t.on("resume",e)),i=o}function o(){i=void 0}var i,n=angular.module("homeCtrl",[]),s=!1,r=!1;n.controller("HomeCtrl",["$sce","$scope","$rootScope","$controller","$state","$http","$analytics","$timeout","$translate","$ionicModal","$ionicPopup","$ionicPopover","$ionicPlatform","$ionicHistory","$ionicSlideBoxDelegate","$ionicScrollDelegate","HabitsService","AccountService","GoalsService","GroupsService","PayService","SkillsService","NotificationService","GeneralService","Environment",function(e,i,n,s,a,c,d,u,l,_,g,T,f,E,p,v,S,A,m,I,h,L,M,O,C){function P(){i.grantingPermission=!1,i.savingNotifications=!1,A.setUserPreference("notification_timing","after7"),i.$$phase||i.$apply()}function w(){i.grantingPermission=!1,i.savingNotifications=!1,i.$$phase||i.$apply()}function y(){if(A.isLoggedIn()){var e=A.getUserPreference("last_nux_state");e&&""!==e&&"completed"==e?(i.nux=!1,window.StatusBar&&StatusBar.styleLightContent(),i.setHideTabs(!1)):(s("BackgroundsCtrl",{$scope:i}),$(".item").css("color","#fefefe"),u(function(){$(".item").css("color",""),p.update()}),i.nux=!0,i.setHideTabs(!0),i.lockNux=!1,window.StatusBar&&StatusBar.styleDefault(),i.getNotificationsLine3=function(){var e=l.instant("MOOD_NOTIFICATIONS_LINE_3");return i.isUMNUser()&&(e=e.replace("mood","stress level, mood,")),e},i.getName=function(){return A.getAccountUser().user.name},i.grantingPermission=!1,i.handleNotificationRegistration=function(){i.savingNotifications=!0,M.registerNotifications(P,w)},i.nuxSlideChanged=function(e){p.enableSlide(2==e&&i.grantingPermission?!1:!0)},i.nextNuxSlide=function(){p.next()},window.PushNotification?PushNotification.hasPermission(function(e){e.isEnabled?M.registerNotifications(P,w):i.grantingPermission=!0},function(){M.registerNotifications(P,w)}):C.isDebug()&&window.alert("No Push Notification Service."),p.update())}}function U(e){L.recreateTodaysActions(),r&&u(function(){L.checkForLevelUp(function(e){i.newLevels=e})},500),e&&(r=!0),i.todaysActionList=L.getTodaysActions(),y()}function D(e){var t=i.suggestedActivities[e];if(t){t.sort(function(e,t){return e.sort-t.sort});for(var o,n=A.getUserPreference("completed_core_activity"),s=!n,r=0;r<t.length&&(o=t[r],s&&A.isActivityPremium(o.id));++r);return o}}i.nux=!1,i.newLevels=0,i.savingNotifications=!1,i.closeNux=function(){i.nux=!1,window.StatusBar&&StatusBar.styleLightContent(),i.setHideTabs(!1),A.setUserPreference("last_nux_state","completed")},f.ready(function(){U(!1)}),n.$on("event:userContextInitialized",function(){U(!0)}),i.$on("$ionicView.afterEnter",function(){window.plugins&&window.plugins.bgVideo&&window.plugins.bgVideo.releaseAudio(),L.setSuggestedActivityId(void 0)}),i.resumeListener=function(){i.$$phase||i.$apply()},t(f,i.resumeListener),i.$on("$destroy",function(){o()}),i.$on("event:viewAttempt",function(){i.viewAttempt||(i.viewAttempt=!0,u(function(){i.viewAttempt=!1},2e3))}),S.setActiveDate(void 0),window.StatusBar&&A.getAccountUser().user&&!i.nux&&StatusBar.styleLightContent(),i.showPremiumModal=function(e){h.showPremiumModal(i,"home",e,!0)},i.isShowingActions=function(){var e=A.getUserPreference("display_action_feed");return!e||"true"==e},i.toggleActions=function(){i.isShowingActions()?(A.setUserPreference("display_action_feed",!1),v.resize()):(A.setUserPreference("display_action_feed",!0),v.resize())},i.closeActionsModal=function(){i.actionsModal&&(closeModal(i.actionsModal),i.actionsModal.remove(),i.actionsModal=void 0)},i.showActionPanel=function(){L.setSuggestedActivityId(void 0),i.hideActionsTooltip(),i.suggestedActivities={},i.energyLevel="",_.fromTemplateUrl("views/skills/actions.modal.html",{scope:i,animation:"slide-in-up"}).then(function(e){i.actionsModal=e,openModal(i.actionsModal)})},i.getSuggestedActivityId=function(e){var t=D(e);return t?t.id:void 0},i.getSuggestedActivities=function(e){var t=D(e);if(t){var o="";return o=t.display?l.instant(t.display):A.getDisplayForActivity(t.id)}},i.checkSuggestSub=function(e){var t=i.suggestedActivities[e];return t?!0:!1};for(var G=[],N=0;50>N;++N)G[N]=Math.random();i.setEnergyLevel=function(e){var t,o=S.getTodaysLastMoodEntry();t="Not Good"==o||"Bad"==o||"Awful"==o?"low":"Good"==o||"Okay"==o?"medium":"high",i.suggestedActivities={};var n=0;return i.energyLevel==e?void(i.energyLevel=void 0):(i.energyLevel=e,void(i.suggestedActivities="low"==e?"low"==t?{relax:[{id:"COMPLETED_CALM_BREATHE",sort:G[n++]},{id:"COMPLETED_DIFFICULT_EXPERIENCE",sort:G[n++]},{id:"COMPLETED_SELF_COMPASSION",sort:G[n++]}]}:"medium"==t?{relax:[{id:"COMPLETED_MUSCLE_RELAXATION",sort:G[n++]},{id:"COMPLETED_MINDFUL_SENSES",sort:G[n++]},{id:"COMPLETED_MINDFUL_BODY_SCAN",sort:G[n++]},{id:"COMPLETED_POSITIVE_VISUALIZATION",sort:G[n++]}],habits:[{display:"SUGGESTED_ACTIVITY_GO_FOR_A_WALK",sort:G[n++]},{display:"SUGGESTED_ACTIVITY_GET_SOME_EXERCISE",sort:G[n++]}]}:{relax:[{id:"COMPLETED_POSITIVE_VISUALIZATION",sort:G[n++]},{id:"COMPLETED_MINDFUL_SENSES",sort:G[n++]},{id:"COMPLETED_MINDFUL_BODY_SCAN",sort:G[n++]}],habits:[{display:"SUGGESTED_ACTIVITY_GO_FOR_A_WALK",sort:G[n++]},{display:"SUGGESTED_ACTIVITY_GET_SOME_EXERCISE",sort:G[n++]}],goals:[{display:"SUGGESTED_ACTIVITY_NON_SOCIAL_GOALS",sort:G[n++]}]}:"medium"==e?"low"==t?{relax:[{id:"COMPLETED_CALM_MIND",sort:G[n++]},{id:"COMPLETED_DEFUSION",sort:G[n++]},{id:"COMPLETED_BECOMING_THE_TREE",sort:G[n++]}],thoughts:[{id:"COMPLETED_RETHINK",sort:G[n++]}]}:"medium"==t?{thoughts:[{id:"COMPLETED_RETHINK",sort:G[n++]}],habits:[{display:"SUGGESTED_ACTIVITY_GO_FOR_A_WALK",sort:G[n++]},{display:"SUGGESTED_ACTIVITY_GET_SOME_EXERCISE",sort:G[n++]}]}:{relax:[{id:"COMPLETED_GRATITUDE",sort:G[n++]}],thoughts:[{id:"COMPLETED_POSITIVITY_JOURNAL",sort:G[n++]}],goals:[{display:"SUGGESTED_ACTIVITY_ANY_GOALS",sort:G[n++]}]}:"low"==t?{habits:[{display:"SUGGESTED_ACTIVITY_GO_FOR_A_WALK",sort:G[n++]},{display:"SUGGESTED_ACTIVITY_GET_SOME_EXERCISE",sort:G[n++]}],thoughts:[{id:"COMPLETED_RETHINK",sort:G[n++]}],goals:[{display:"SUGGESTED_ACTIVITY_NON_SOCIAL_GOALS",sort:G[n++]}]}:"medium"==t?{thoughts:[{id:"COMPLETED_RETHINK",sort:G[n++]}],goals:[{display:"SUGGESTED_ACTIVITY_SOCIAL_GOALS",sort:G[n++]}]}:{relax:[{id:"COMPLETED_MINDFUL_WALK",sort:G[n++]}],thoughts:[{id:"COMPLETED_POSITIVITY_JOURNAL",sort:G[n++]},{id:"COMPLETED_GRATITUDE_JOURNAL",sort:G[n++]}],goals:[{display:"SUGGESTED_ACTIVITY_ANY_GOALS",sort:G[n++]}]}))},i.isPremiumEnabled=function(){return A.isPremiumEnabled()},i.getSubClass=function(e){return e.skillSubClass?e.skillSubClass:""},i.getActionTitle=function(e){return"health"==e.actionClass?l.instant("HEALTHY_HABIT")+": "+e.actionTitle:e.actionTitle},i.getActionClass=function(e){return e.actionClass},i.getActionTimeDisplay=function(e){return moment(e.actionTimestamp).calendar()},i.slideLeft=function(){p.previous()},i.slideRight=function(){p.next()},i.getCharacterSplitTestClass=function(){var e=A.getSplitTestContext();if(!e||!e.splitTestGroups)return"characters_B";var t=e.splitTestGroups.illustratedCharacters;return t?"characters_"+t:void 0},i.updateLastActivity=function(){A.getAccountUser().user},i.goToAccount=function(){i.closeActionsModal(),a.go("app.account")},i.goToProgress=function(){i.closeActionsModal();var e={};i.newLevels>0&&(e.tab="skills"),a.go("app.progress-mood",e),i.newLevels=0},i.hasCompletedIntro=function(){return!A.viewedVideoToday()&&i.hasViewedVideo(6)},i.hasViewedVideo=function(e){return A.hasViewedVideo(e)},i.$on("event:goToActivity",function(e,t){var o=t.activity;"mood"==o?i.goToMood():"relax"==o?i.goToRelax():"thoughts"==o?i.goToThoughts():"goals"==o?i.goToGoals():"health"==o?i.goToHabits():"communities"==o&&i.goToCommunities()}),i.showMoodTooltip=function(){var e=A.getUserPreference("viewed_mood_tooltip");return e&&"true"==e?void 0:!0},i.hideMoodTooltip=function(){A.setUserPreference("viewed_mood_tooltip",!0)},i.showActionsTooltip=function(){var e=!1;if(!i.showMoodTooltip()&&!i.isUMNUser()){var t=A.getUserPreference("viewed_mood_actions_tooltip");e=!t||"true"!=t}return e},i.hideActionsTooltip=function(){A.setUserPreference("viewed_mood_actions_tooltip",!0)},i.showRelaxTooltip=function(){var e=!1;return e},i.hideRelaxTooltip=function(){A.setUserPreference("viewed_relax_tooltip",!0)},i.goToMood=function(){i.closeActionsModal(),i.hideMoodTooltip();var e=A.getUserPreference("completed_mood_intro");e&&"true"==e?i.isUMNUser()?a.go("app.habits-Stress",{habitId:19}):a.go("app.habits-Mood",{habitId:1}):(window.pauseVideo(),n.$broadcast("event:viewVideo",{video:A.MOOD_VIDEO}),u(function(){A.setUserPreference("completed_mood_intro",!0)},500))},i.goToHabits=function(e){L.setSuggestedActivityId(e),i.closeActionsModal(),window.openURL("/habits")},i.goToRelax=function(e){i.closeActionsModal(),L.setSuggestedActivityId(e),window.openURL("/relax")},i.goToGroups=function(){if(i.closeActionsModal(),C.isOnline())window.openURL("/groups");else{g.alert({template:l.instant("GROUPS_OFFLINE_ERROR"),okText:l.instant("OK_GOT_IT"),okType:"button-default"})}},i.goToCommunities=function(){if(i.closeActionsModal(),C.isOnline())window.openURL("/communities");else{g.alert({template:l.instant("GROUPS_OFFLINE_ERROR"),okText:l.instant("OK_GOT_IT"),okType:"button-default"})}},i.showThoughts=function(){return i.hasViewedMoodPopup()&&!i.isPacificaLiteUser()},i.goToThoughts=function(e){i.closeActionsModal(),L.setSuggestedActivityId(e);var t=A.getUserPreference("completed_rethink_intro");t&&"true"==t?a.go("app.thoughts-list"):(window.pauseVideo(),n.$broadcast("event:viewVideo",{video:A.THOUGHTS_VIDEO}),A.setUserPreference("completed_rethink_intro",!0))},i.showGoals=function(){return i.hasViewedMoodPopup()&&!i.isPacificaLiteUser()},i.canSkipVideos=function(){var e=A.getUserPreference("can_skip_intro_videos");return"undefined"!=typeof e&&"true"===e},i.goToGoals=function(e){i.closeActionsModal(),L.setSuggestedActivityId(e);var t=A.getUserPreference("completed_goals_intro");t&&"true"==t?a.go("app.goals"):(window.pauseVideo(),n.$broadcast("event:viewVideo",{video:A.GOALS_VIDEO}),A.setUserPreference("completed_goals_intro",!0))},i.goToMeditate=function(){i.closeActionsModal();var e=A.getUserPreference("completed_meditate_intro");e&&"true"==e?a.go("app.meditate"):a.go("app.meditate-help",{intro:!0})},i.hasViewedMoodPopup=function(){var e=A.getUserPreference("completed_mood_intro");return e&&"true"==e},i.hasCompletedMood=function(){var e=A.getUserPreference("viewed_mood_popup");return!!e&&"?"!=S.getTodaysLastMoodEntry()};var V;i.showActivities=function(){var e=A.getUserPreference("viewed_mood_popup");return"undefined"==typeof e||V&&e==V||p.update(),V=e,!!e},i.getActivityName=function(){return l.instant(i.isUMNUser()?"STRESS_ACTIVITY":"MOOD_ACTIVITY")},i.getTodaysLastMoodEntry=function(){var e=S.getTodaysLastMoodEntry();return e=e.replace(" ","_"),l.instant("MOOD_"+e)},i.getTodaysMoodClass=function(){return S.getTodaysMoodClass()},i.getTodaysLastMoodEntryClass=function(){return S.getTodaysLastMoodEntryClass()}}])}();