(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["by-id"],{"59d6":function(n,e,i){"use strict";i.r(e);var t=i("5c40"),r=i("8c4f"),c=i("2357"),o=i("7914");function u(n,e,i,t,r,c,o){try{var u=n[c](o),a=u.value}catch(d){return void i(d)}u.done?e(a):Promise.resolve(a).then(t,r)}function a(n){return function(){var e=this,i=arguments;return new Promise((function(t,r){var c=n.apply(e,i);function o(n){u(c,t,r,o,a,"next",n)}function a(n){u(c,t,r,o,a,"throw",n)}o(void 0)}))}}e["default"]=Object(t["k"])({name:"Game",props:{id:String,encodedTopic:String,builtInTopicTitle:String,storedTopics:Array},setup:function(n){var e=Object(r["c"])(),i=function(){e.replace({name:"home"})};return Object(t["B"])(a((function*(){if(!n.id)return i();var t=yield Object(c["loadTopic"])(n.id);if(!t)return i();var r=yield Object(o["encodeTopic"])(t);e.replace({name:"game",params:{encodedTopic:r,id:n.id}})}))),function(){return null}}})}}]);