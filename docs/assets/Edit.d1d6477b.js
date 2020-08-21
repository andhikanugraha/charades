let e=document.createElement("style");e.innerHTML="",document.head.appendChild(e);import{d as l,f as o,w as a,k as n,h as t,l as s,v as i,o as u,c as d,r as c,g as r,a as p,b as v,i as m,m as f,F as w,e as y,u as h}from"./index.2f0b3734.js";import{s as k,k as T,l as V,i as C,m as b,n as S}from"./VIcon.fa74bdb1.js";import{u as E,l as I,s as g,g as x,d as F}from"./TopicStore.951b2fc6.js";var W=l({name:"VEditorInput",props:{modelValue:String,autoFocus:Boolean},setup(e,{emit:l}){const s=o(e.modelValue),i=o();return a(()=>{s.value=e.modelValue,e.autoFocus&&n(()=>{var e;return null==(e=i.value)?void 0:e.focus()})}),t(s,e=>l("update:modelValue",e)),{value:s,input:i,blur:()=>l("blur"),focus:()=>l("focus"),keyup:e=>l("keyup",e),doDelete:()=>l("delete")}}});W.render=function(e,l,o,a,n,t){return s((u(),d("input",{type:"text",ref:"input","onUpdate:modelValue":l[1]||(l[1]=l=>e.value=l),onBlur:l[2]||(l[2]=(...l)=>e.blur(...l)),onFocus:l[3]||(l[3]=(...l)=>e.focus(...l)),onKeyup:l[4]||(l[4]=l=>e.keyup(l))},null,544)),[[i,e.value,void 0,{trim:!0,lazy:!0}]])},W.__file="src/components/VEditorInput.vue";var B=l({name:"TheEditor",props:{title:String,words:Array,id:String},emits:{save:e=>!!e,delete:()=>!0,cancel:()=>!0},components:{VIcon:k,VEditorInput:W},setup(e,{emit:l}){var n,s;const i=o(e.title||""),u=c((null==(n=e.words)?void 0:n.map((e,l)=>({key:l,word:e})))||[]),d=o((null==(s=e.words)?void 0:s.length)||0),p=c(new Set),v=o(e.id||""),m=r(()=>!v.value);a(()=>{i.value=e.title||""}),t(e,e=>{const l=e.words||[];u.splice(0),u.splice(0,0,...l.map((e,l)=>({key:l,word:e}))),d.value=l.length});const f=e=>{u.splice(e,1)};return{viewTitle:i,wordList:u,maxKey:d,emptyIndices:p,isNew:m,cancel:()=>l("cancel"),addWord:()=>{u.push({word:"",key:d.value,focus:!0}),d.value+=1},save:()=>{const e={title:i.value,words:u.map(e=>e.word)};l("save",e)},deleteTopic:()=>{l("delete")},onBlur:e=>{""===u[e].word.trim()&&p.add(e)},onFocus:()=>{p.size>0&&(p.forEach(e=>f(e)),p.clear())},deleteWordAtIndex:f,faSave:T,faPlus:V,faTimes:C,faTimesCircle:b,faTrashAlt:S}}});const K={class:"pull-right"},_={key:0},A={key:1},D={class:"scrollable"},N={class:"info"},U=v("div",{class:"label"},"Title:",-1),j={class:"info"},L=v("div",{class:"label"},"Words:",-1);B.render=function(e,l,o,a,n,t){const s=p("v-icon"),i=p("v-editor-input");return u(),d(w,null,[v("header",null,[v("div",{class:"close-button",onClick:l[1]||(l[1]=(...l)=>e.cancel(...l))},[v(s,{icon:e.faTimes,"fixed-width":""},null,8,["icon"])]),v("div",K,[e.isNew?m("v-if",!0):v(s,{key:0,icon:e.faTrashAlt,class:"delete-button",onClick:e.deleteTopic},null,8,["icon","onClick"]),v(s,{icon:e.faSave,onClick:e.save},null,8,["icon","onClick"])]),e.isNew?(u(),d("h3",_,"New Topic")):(u(),d("h3",A,"Edit Topic"))]),v("main",null,[v("div",D,[v("div",N,[U,v("p",null,[v(i,{type:"text",modelValue:e.viewTitle,"onUpdate:modelValue":l[2]||(l[2]=l=>e.viewTitle=l),"auto-focus":e.isNew,onKeyup:f(e.addWord,["enter"])},null,8,["modelValue","auto-focus","onKeyup"])])]),v("div",j,[L,(u(!0),d(w,null,y(e.wordList,(l,o)=>(u(),d("p",{key:l.key,class:"item"},[v(i,{modelValue:l.word,"onUpdate:modelValue":e=>l.word=e,"auto-focus":l.focus,onBlur:l=>e.onBlur(o),onFocus:l=>e.onFocus(o),onKeyup:f(e.addWord,["enter"])},null,8,["modelValue","onUpdate:modelValue","auto-focus","onBlur","onFocus","onKeyup"]),v("span",{class:"item-delete",onClick:l=>e.deleteWordAtIndex(o)},[v(s,{icon:e.faTimesCircle},null,8,["icon"])],8,["onClick"])]))),128)),v("p",null,[v("button",{onClick:l[3]||(l[3]=(...l)=>e.addWord(...l))},[v(s,{icon:e.faPlus},null,8,["icon"])])])])])])],64)},B.__file="src/components/TheEditor.vue";var z=l({name:"Edit",components:{TheEditor:B},props:{id:{type:String,required:!0}},setup(e){var l;const n=h(),t=E(),s=o((null==(l=t.find(l=>l.id===e.id))?void 0:l.title)||""),i=c([]),u=o(!1),d=o(e.id);return a(async()=>{const l=await I(e.id);l?(s.value=l.title,i.splice(0),i.splice(0,0,...l.words),u.value=!0,d.value=e.id):d.value=""})(),{title:s,words:i,topicId:d,handleSave:async e=>{await g(e,d.value),x(n,d.value)},handleDelete:async()=>{await F(d.value),n.push({name:"home"})},handleCancel:()=>x(n,d.value)}}});z.render=function(e,l,o,a,n,t){const s=p("the-editor");return u(),d(s,{title:e.title,words:e.words,id:e.topicId,onSave:e.handleSave,onDelete:e.handleDelete,onCancel:e.handleCancel},null,8,["title","words","id","onSave","onDelete","onCancel"])},z.__file="src/views/Edit.vue";export default z;
