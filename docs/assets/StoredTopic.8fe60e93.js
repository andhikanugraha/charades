let e=document.createElement("style");e.innerHTML="",document.head.appendChild(e);import{d as t,f as o,w as i,u as r,a as d,o as s,c as a}from"./index.2f0b3734.js";import"./VIcon.fa74bdb1.js";import{f as n,s as c}from"./TopicStore.951b2fc6.js";import{s as p}from"./TheGame.f771f7c8.js";import{decodeTopic as l}from"./TopicEncoding.de7adf33.js";var m=t({name:"Game",components:{TheGame:p},props:{id:String,encodedTopic:String,storedTopics:Array},setup(e){const t=r(),d=o((e.storedTopics&&e.id?null==(s=e.storedTopics.find(t=>t.id===e.id))?void 0:s.title:"")||" ");var s;const a=o([]),p=o(e.id),m=()=>{t.replace({name:"home"})};return i(async()=>{if(!e.encodedTopic)return m();try{const t=await l(e.encodedTopic);if(!t)return m();if(d.value=t.title,a.value=t.words,!e.id){let e=await n(t);e||(e=await c(t)),p.value=e}}catch(e){return m()}}),{title:d,words:a,topicId:p}}});m.render=function(e,t,o,i,r,n){const c=d("the-game");return s(),a(c,{title:e.title,words:e.words,id:e.topicId},null,8,["title","words","id"])},m.__file="src/views/StoredTopic.vue";export default m;
