(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-589e12c2"],{"536d":function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.isFinished?n("div",{staticClass:"root",attrs:{id:"finished"}},[n("header",[n("div",{staticClass:"close-button",on:{click:e.reset}},[n("font-awesome-icon",{attrs:{icon:"times","fixed-width":""}})],1),n("h3",[e._v("Score: "+e._s(e.score))])]),n("main",[n("div",[n("ol",e._l(e.results,(function(t,r){return n("li",{key:r,class:{correct:t.isCorrect}},[n("font-awesome-icon",{attrs:{icon:t.isCorrect?"check":"times"}}),e._v(" "+e._s(t.word)+" ")],1)})),0)])]),n("nav",[n("p",[n("button",{on:{click:function(t){e.bumper()&&e.goHome()}}},[n("font-awesome-icon",{attrs:{icon:"home"}}),e._v(" Home ")],1)]),n("p",[n("button",{attrs:{id:"reset"},on:{click:function(t){e.bumper()&&e.reset()}}},[n("font-awesome-icon",{attrs:{icon:"undo"}}),e._v(" Play again ")],1)])])]):e.isStarted?n("div",{staticClass:"root",attrs:{id:"active"}},[n("header",[n("div",{staticClass:"close-button",on:{click:e.reset}},[n("font-awesome-icon",{attrs:{icon:"times","fixed-width":""}})],1),n("h3",{attrs:{id:"timer"}},[e._v(e._s(e.remainingSeconds))])]),n("main",[n("div",{staticClass:"overlay"},[n("div",{staticClass:"half",on:{click:e.correctWord}}),n("div",{staticClass:"half",on:{click:e.skipWord}})]),n("v-fit",{attrs:{text:e.currentWord}})],1),n("nav",[n("p",{on:{click:e.correctWord}},[n("button",{attrs:{id:"correct"}},[n("font-awesome-icon",{attrs:{icon:"check"}}),e._v(" Correct")],1)]),n("p",{on:{click:e.skipWord}},[n("button",{attrs:{id:"skip"}},[n("font-awesome-icon",{attrs:{icon:"step-forward"}}),e._v(" Skip ")],1)])])]):n("div",{staticClass:"root",attrs:{id:"initial"}},[n("header",[n("div",{staticClass:"close-button",on:{click:e.goHome}},[n("font-awesome-icon",{attrs:{icon:"home"}})],1),n("div",{staticClass:"pull-right"},[e.isEditable?n("font-awesome-icon",{attrs:{icon:"edit"},on:{click:e.edit}}):e._e(),n("font-awesome-icon",{attrs:{icon:"share"},on:{click:e.share}})],1),n("h3",[e._v("Sharades")])]),n("main",[n("div",[n("div",{staticClass:"info"},[n("div",{staticClass:"label"},[e._v("Category:")]),n("div",{staticClass:"value"},[e._v(e._s(e.category.title))])]),n("div",{staticClass:"info"},[n("div",{staticClass:"label"},[e._v("Time limit:")]),n("div",{staticClass:"value"},[n("span",{class:{option:!0,selected:30===e.timeLimit},on:{click:function(t){return e.setTimeLimit(30)}}},[e._v("30")]),n("span",{class:{option:!0,selected:60===e.timeLimit},on:{click:function(t){return e.setTimeLimit(60)}}},[e._v("60")]),n("span",{class:{option:!0,selected:90===e.timeLimit},on:{click:function(t){return e.setTimeLimit(90)}}},[e._v("90")]),n("span",{class:{option:!0,selected:120===e.timeLimit},on:{click:function(t){return e.setTimeLimit(120)}}},[e._v("120")])])])])]),n("nav",[n("p",[n("button",{attrs:{id:"start"},on:{click:e.start}},[n("font-awesome-icon",{attrs:{icon:"play"}}),e._v(" Play ")],1)])])])},i=[],o=(n("99af"),n("a630"),n("d3b7"),n("6062"),n("3ca3"),n("ddb0"),n("6b75"));function a(e){if(Array.isArray(e))return Object(o["a"])(e)}n("a4d3"),n("e01a"),n("d28b");function c(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}var s=n("06c5");function u(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function f(e){return a(e)||c(e)||Object(s["a"])(e)||u()}var d=n("b85c"),l=(n("96cf"),n("1da1")),h=n("2b0e"),v=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("h1",{style:{fontSize:e.fontSize}},[e._v(e._s(e.text))])},m=[],p=h["a"].extend({props:["text","width"],computed:{fontSize:function(){var e=1.3*(this.width||100),t=this.text.length,n=Math.min(Math.max(e/t,8),22);return"".concat(n,"vw")}}}),b=p,w=n("2877"),g=Object(w["a"])(b,v,m,!1,null,null,null),y=g.exports,x=n("c074"),I=n("af1b"),S=n("e13a"),j=n("e0d5"),k=h["a"].extend({components:{VFit:y,FontAwesomeIcon:function(){var e=Object(l["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Promise.all([n.e("chunk-2d230ab4"),n.e("chunk-2d2136ea")]).then(n.bind(null,"ad3d"));case 2:return e.abrupt("return",e.sent.FontAwesomeIcon);case 3:case"end":return e.stop()}}),e)})));function t(){return e.apply(this,arguments)}return t}()},props:["encodedCategory","category","isEditable"],data:function(){return{isStarted:!1,endTime:new Date,shuffledWords:[],usedWordIndices:new Set,correctIndices:new Set,maxViewedIndex:0,currentIndex:0,remainingSeconds:0,isFinished:!1,timeLimit:60}},created:function(){return Object(l["a"])(regeneratorRuntime.mark((function e(){var t,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,n.e("chunk-2d230ab4").then(n.bind(null,"ecee"));case 2:t=e.sent,r=t.library,r.add(x["e"],x["f"],x["j"],x["a"],x["n"],x["c"],x["k"],x["i"]);case 5:case"end":return e.stop()}}),e)})))()},computed:{canShare:function(){return!!navigator.share},currentWord:function(){return this.category.words[this.shuffledWords[this.currentIndex]]},results:function(){for(var e=[],t=0;t<=this.maxViewedIndex;++t)e.push({word:this.category.words[this.shuffledWords[t]],isCorrect:!1});var n,r=Object(d["a"])(this.correctIndices);try{for(r.s();!(n=r.n()).done;){var i=n.value;e[i]&&(e[i].isCorrect=!0)}}catch(o){r.e(o)}finally{r.f()}return e},score:function(){return this.correctIndices.size}},methods:{goHome:function(){this.$router.push({name:"home"})},bumper:function(){return S(new Date,this.endTime)>1},setTimeLimit:function(e){this.timeLimit=e},share:function(){var e=navigator.share;e({title:"Sharades: ".concat(this.category.title),url:window.location})},nextWord:function(){this.usedWordIndices.add(this.currentIndex);var e,t=new Set(this.correctIndices);e=this.currentIndex+1>=this.shuffledWords.length?0:this.currentIndex+1;var n=-1;while(e!==this.currentIndex&&-1===n)t.has(e)?e+1>=this.shuffledWords.length?e=0:++e:n=e;-1===n?this.finish():n<this.shuffledWords.length&&(this.currentIndex=n),n>this.maxViewedIndex&&(this.maxViewedIndex=n)},finish:function(){this.isFinished=!0,this.endTime=new Date,this.timer&&clearTimeout(this.timer)},reset:function(){this.isStarted=!1,this.isFinished=!1,this.currentIndex=0,this.correctIndices=new Set,this.maxViewedIndex=0,this.shuffleWords()},shuffleWords:function(){var e=this.category.words,t=[];if(this.usedWordIndices.size<e.length)for(var n=0;n<e.length;++n)this.usedWordIndices.has(n)||t.push(n);else{for(var r=0;r<e.length;++r)t.push(r);this.usedWordIndices.clear()}var i=j(t),o=j(Array.from(this.usedWordIndices.values()));this.shuffledWords=[].concat(f(i),f(o))},start:function(){var e=this;this.isStarted=!0,this.endTime=I(new Date,this.timeLimit);var t=function t(){e.updateRemainingSeconds(),e.remainingSeconds>0?e.timer=setTimeout((function(){return t()}),1e3):e.isFinished=!0};t()},edit:function(){this.$router.push({name:"edit",params:{encodedCategory:this.encodedCategory}})},updateRemainingSeconds:function(){this.remainingSeconds=S(this.endTime,new Date)},skipWord:function(){this.nextWord()},correctWord:function(){this.correctIndices.add(this.currentIndex),this.nextWord()}},mounted:function(){this.reset()}}),C=k,_=(n("9519"),Object(w["a"])(C,r,i,!1,null,null,null));t["default"]=_.exports},5465:function(e,t){var n=6e4;e.exports=function(e){var t=new Date(e.getTime()),r=t.getTimezoneOffset();t.setSeconds(0,0);var i=t.getTime()%n;return r*n+i}},9519:function(e,t,n){"use strict";var r=n("f72d"),i=n.n(r);i.a},"99af":function(e,t,n){"use strict";var r=n("23e7"),i=n("d039"),o=n("e8b5"),a=n("861d"),c=n("7b0b"),s=n("50c4"),u=n("8418"),f=n("65f0"),d=n("1dde"),l=n("b622"),h=n("2d00"),v=l("isConcatSpreadable"),m=9007199254740991,p="Maximum allowed index exceeded",b=h>=51||!i((function(){var e=[];return e[v]=!1,e.concat()[0]!==e})),w=d("concat"),g=function(e){if(!a(e))return!1;var t=e[v];return void 0!==t?!!t:o(e)},y=!b||!w;r({target:"Array",proto:!0,forced:y},{concat:function(e){var t,n,r,i,o,a=c(this),d=f(a,0),l=0;for(t=-1,r=arguments.length;t<r;t++)if(o=-1===t?a:arguments[t],g(o)){if(i=s(o.length),l+i>m)throw TypeError(p);for(n=0;n<i;n++,l++)n in o&&u(d,l,o[n])}else{if(l>=m)throw TypeError(p);u(d,l++,o)}return d.length=l,d}})},a735:function(e,t){function n(e){return e instanceof Date}e.exports=n},af1b:function(e,t,n){var r=n("ec1f");function i(e,t){var n=Number(t);return r(e,1e3*n)}e.exports=i},c8d5:function(e,t,n){var r=n("5465"),i=n("a735"),o=36e5,a=6e4,c=2,s=/[T ]/,u=/:/,f=/^(\d{2})$/,d=[/^([+-]\d{2})$/,/^([+-]\d{3})$/,/^([+-]\d{4})$/],l=/^(\d{4})/,h=[/^([+-]\d{4})/,/^([+-]\d{5})/,/^([+-]\d{6})/],v=/^-(\d{2})$/,m=/^-?(\d{3})$/,p=/^-?(\d{2})-?(\d{2})$/,b=/^-?W(\d{2})$/,w=/^-?W(\d{2})-?(\d{1})$/,g=/^(\d{2}([.,]\d*)?)$/,y=/^(\d{2}):?(\d{2}([.,]\d*)?)$/,x=/^(\d{2}):?(\d{2}):?(\d{2}([.,]\d*)?)$/,I=/([Z+-].*)$/,S=/^(Z)$/,j=/^([+-])(\d{2})$/,k=/^([+-])(\d{2}):?(\d{2})$/;function C(e,t){if(i(e))return new Date(e.getTime());if("string"!==typeof e)return new Date(e);var n=t||{},o=n.additionalDigits;o=null==o?c:Number(o);var s=_(e),u=T(s.date,o),f=u.year,d=u.restDateString,l=$(d,f);if(l){var h,v=l.getTime(),m=0;if(s.time&&(m=D(s.time)),s.timezone)h=W(s.timezone)*a;else{var p=v+m,b=new Date(p);h=r(b);var w=new Date(p);w.setDate(b.getDate()+1);var g=r(w)-r(b);g>0&&(h+=g)}return new Date(v+m+h)}return new Date(e)}function _(e){var t,n={},r=e.split(s);if(u.test(r[0])?(n.date=null,t=r[0]):(n.date=r[0],t=r[1]),t){var i=I.exec(t);i?(n.time=t.replace(i[1],""),n.timezone=i[1]):n.time=t}return n}function T(e,t){var n,r=d[t],i=h[t];if(n=l.exec(e)||i.exec(e),n){var o=n[1];return{year:parseInt(o,10),restDateString:e.slice(o.length)}}if(n=f.exec(e)||r.exec(e),n){var a=n[1];return{year:100*parseInt(a,10),restDateString:e.slice(a.length)}}return{year:null}}function $(e,t){if(null===t)return null;var n,r,i,o;if(0===e.length)return r=new Date(0),r.setUTCFullYear(t),r;if(n=v.exec(e),n)return r=new Date(0),i=parseInt(n[1],10)-1,r.setUTCFullYear(t,i),r;if(n=m.exec(e),n){r=new Date(0);var a=parseInt(n[1],10);return r.setUTCFullYear(t,0,a),r}if(n=p.exec(e),n){r=new Date(0),i=parseInt(n[1],10)-1;var c=parseInt(n[2],10);return r.setUTCFullYear(t,i,c),r}if(n=b.exec(e),n)return o=parseInt(n[1],10)-1,O(t,o);if(n=w.exec(e),n){o=parseInt(n[1],10)-1;var s=parseInt(n[2],10)-1;return O(t,o,s)}return null}function D(e){var t,n,r;if(t=g.exec(e),t)return n=parseFloat(t[1].replace(",",".")),n%24*o;if(t=y.exec(e),t)return n=parseInt(t[1],10),r=parseFloat(t[2].replace(",",".")),n%24*o+r*a;if(t=x.exec(e),t){n=parseInt(t[1],10),r=parseInt(t[2],10);var i=parseFloat(t[3].replace(",","."));return n%24*o+r*a+1e3*i}return null}function W(e){var t,n;return t=S.exec(e),t?0:(t=j.exec(e),t?(n=60*parseInt(t[2],10),"+"===t[1]?-n:n):(t=k.exec(e),t?(n=60*parseInt(t[2],10)+parseInt(t[3],10),"+"===t[1]?-n:n):0))}function O(e,t,n){t=t||0,n=n||0;var r=new Date(0);r.setUTCFullYear(e,0,4);var i=r.getUTCDay()||7,o=7*t+n+1-i;return r.setUTCDate(r.getUTCDate()+o),r}e.exports=C},e0d5:function(e,t,n){(function(t){var n=1/0,r=9007199254740991,i=17976931348623157e292,o=NaN,a=4294967295,c="[object Arguments]",s="[object Function]",u="[object GeneratorFunction]",f="[object Map]",d="[object Object]",l="[object Promise]",h="[object Set]",v="[object String]",m="[object Symbol]",p="[object WeakMap]",b="[object DataView]",w=/[\\^$.*+?()[\]{}|]/g,g=/^\s+|\s+$/g,y=/^[-+]0x[0-9a-f]+$/i,x=/^0b[01]+$/i,I=/^\[object .+?Constructor\]$/,S=/^0o[0-7]+$/i,j=/^(?:0|[1-9]\d*)$/,k="\\ud800-\\udfff",C="\\u0300-\\u036f\\ufe20-\\ufe23",_="\\u20d0-\\u20f0",T="\\ufe0e\\ufe0f",$="["+k+"]",D="["+C+_+"]",W="\\ud83c[\\udffb-\\udfff]",O="(?:"+D+"|"+W+")",F="[^"+k+"]",A="(?:\\ud83c[\\udde6-\\uddff]){2}",E="[\\ud800-\\udbff][\\udc00-\\udfff]",L="\\u200d",z=O+"?",M="["+T+"]?",R="(?:"+L+"(?:"+[F,A,E].join("|")+")"+M+z+")*",P=M+z+R,U="(?:"+[F+D+"?",D,A,E,$].join("|")+")",V=RegExp(W+"(?="+W+")|"+U+P,"g"),N=RegExp("["+L+k+C+_+T+"]"),Y=parseInt,H="object"==typeof t&&t&&t.Object===Object&&t,J="object"==typeof self&&self&&self.Object===Object&&self,Z=H||J||Function("return this")();function B(e,t){var n=-1,r=e?e.length:0,i=Array(r);while(++n<r)i[n]=t(e[n],n,e);return i}function G(e){return e.split("")}function q(e,t){var n=-1,r=Array(e);while(++n<e)r[n]=t(n);return r}function K(e,t){return B(t,(function(t){return e[t]}))}function Q(e,t){return null==e?void 0:e[t]}function X(e){return N.test(e)}function ee(e){var t=!1;if(null!=e&&"function"!=typeof e.toString)try{t=!!(e+"")}catch(n){}return t}function te(e){var t,n=[];while(!(t=e.next()).done)n.push(t.value);return n}function ne(e){var t=-1,n=Array(e.size);return e.forEach((function(e,r){n[++t]=[r,e]})),n}function re(e,t){return function(n){return e(t(n))}}function ie(e){var t=-1,n=Array(e.size);return e.forEach((function(e){n[++t]=e})),n}function oe(e){return X(e)?ae(e):G(e)}function ae(e){return e.match(V)||[]}var ce=Function.prototype,se=Object.prototype,ue=Z["__core-js_shared__"],fe=function(){var e=/[^.]+$/.exec(ue&&ue.keys&&ue.keys.IE_PROTO||"");return e?"Symbol(src)_1."+e:""}(),de=ce.toString,le=se.hasOwnProperty,he=se.toString,ve=RegExp("^"+de.call(le).replace(w,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),me=Z.Symbol,pe=me?me.iterator:void 0,be=se.propertyIsEnumerable,we=Math.floor,ge=re(Object.keys,Object),ye=Math.random,xe=Me(Z,"DataView"),Ie=Me(Z,"Map"),Se=Me(Z,"Promise"),je=Me(Z,"Set"),ke=Me(Z,"WeakMap"),Ce=Ye(xe),_e=Ye(Ie),Te=Ye(Se),$e=Ye(je),De=Ye(ke);function We(e,t){var n=Ge(e)||Be(e)?q(e.length,String):[],r=n.length,i=!!r;for(var o in e)!t&&!le.call(e,o)||i&&("length"==o||Pe(o,r))||n.push(o);return n}function Oe(e,t,n){return e===e&&(void 0!==n&&(e=e<=n?e:n),void 0!==t&&(e=e>=t?e:t)),e}function Fe(e){return he.call(e)}function Ae(e){if(!et(e)||Ve(e))return!1;var t=Qe(e)||ee(e)?ve:I;return t.test(Ye(e))}function Ee(e){if(!Ne(e))return ge(e);var t=[];for(var n in Object(e))le.call(e,n)&&"constructor"!=n&&t.push(n);return t}function Le(e,t){return e+we(ye()*(t-e+1))}function ze(e,t){var n=-1,r=e.length;t||(t=Array(r));while(++n<r)t[n]=e[n];return t}function Me(e,t){var n=Q(e,t);return Ae(n)?n:void 0}var Re=Fe;function Pe(e,t){return t=null==t?r:t,!!t&&("number"==typeof e||j.test(e))&&e>-1&&e%1==0&&e<t}function Ue(e,t,n){if(!et(n))return!1;var r=typeof t;return!!("number"==r?qe(n)&&Pe(t,n.length):"string"==r&&t in n)&&Ze(n[t],e)}function Ve(e){return!!fe&&fe in e}function Ne(e){var t=e&&e.constructor,n="function"==typeof t&&t.prototype||se;return e===n}function Ye(e){if(null!=e){try{return de.call(e)}catch(t){}try{return e+""}catch(t){}}return""}function He(e,t,n){var r=-1,i=it(e),o=i.length,a=o-1;t=(n?Ue(e,t,n):void 0===t)?1:Oe(at(t),0,o);while(++r<t){var c=Le(r,a),s=i[c];i[c]=i[r],i[r]=s}return i.length=t,i}function Je(e){return He(e,a)}function Ze(e,t){return e===t||e!==e&&t!==t}function Be(e){return Ke(e)&&le.call(e,"callee")&&(!be.call(e,"callee")||he.call(e)==c)}(xe&&Re(new xe(new ArrayBuffer(1)))!=b||Ie&&Re(new Ie)!=f||Se&&Re(Se.resolve())!=l||je&&Re(new je)!=h||ke&&Re(new ke)!=p)&&(Re=function(e){var t=he.call(e),n=t==d?e.constructor:void 0,r=n?Ye(n):void 0;if(r)switch(r){case Ce:return b;case _e:return f;case Te:return l;case $e:return h;case De:return p}return t});var Ge=Array.isArray;function qe(e){return null!=e&&Xe(e.length)&&!Qe(e)}function Ke(e){return tt(e)&&qe(e)}function Qe(e){var t=et(e)?he.call(e):"";return t==s||t==u}function Xe(e){return"number"==typeof e&&e>-1&&e%1==0&&e<=r}function et(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function tt(e){return!!e&&"object"==typeof e}function nt(e){return"string"==typeof e||!Ge(e)&&tt(e)&&he.call(e)==v}function rt(e){return"symbol"==typeof e||tt(e)&&he.call(e)==m}function it(e){if(!e)return[];if(qe(e))return nt(e)?oe(e):ze(e);if(pe&&e[pe])return te(e[pe]());var t=Re(e),n=t==f?ne:t==h?ie:ut;return n(e)}function ot(e){if(!e)return 0===e?e:0;if(e=ct(e),e===n||e===-n){var t=e<0?-1:1;return t*i}return e===e?e:0}function at(e){var t=ot(e),n=t%1;return t===t?n?t-n:t:0}function ct(e){if("number"==typeof e)return e;if(rt(e))return o;if(et(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=et(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(g,"");var n=x.test(e);return n||S.test(e)?Y(e.slice(2),n?2:8):y.test(e)?o:+e}function st(e){return qe(e)?We(e):Ee(e)}function ut(e){return e?K(e,st(e)):[]}e.exports=Je}).call(this,n("c8ba"))},e13a:function(e,t,n){var r=n("e785");function i(e,t){var n=r(e,t)/1e3;return n>0?Math.floor(n):Math.ceil(n)}e.exports=i},e785:function(e,t,n){var r=n("c8d5");function i(e,t){var n=r(e),i=r(t);return n.getTime()-i.getTime()}e.exports=i},ec1f:function(e,t,n){var r=n("c8d5");function i(e,t){var n=r(e).getTime(),i=Number(t);return new Date(n+i)}e.exports=i},f72d:function(e,t,n){}}]);