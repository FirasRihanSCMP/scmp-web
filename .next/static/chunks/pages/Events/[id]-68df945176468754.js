(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[146],{4063:function(e){"use strict";e.exports=function e(t,r){if(t===r)return!0;if(t&&r&&"object"==typeof t&&"object"==typeof r){if(t.constructor!==r.constructor)return!1;var n,a,o;if(Array.isArray(t)){if((n=t.length)!=r.length)return!1;for(a=n;0!==a--;)if(!e(t[a],r[a]))return!1;return!0}if(t.constructor===RegExp)return t.source===r.source&&t.flags===r.flags;if(t.valueOf!==Object.prototype.valueOf)return t.valueOf()===r.valueOf();if(t.toString!==Object.prototype.toString)return t.toString()===r.toString();if((n=(o=Object.keys(t)).length)!==Object.keys(r).length)return!1;for(a=n;0!==a--;)if(!Object.prototype.hasOwnProperty.call(r,o[a]))return!1;for(a=n;0!==a--;){var s=o[a];if(!e(t[s],r[s]))return!1}return!0}return t!==t&&r!==r}},9090:function(e){function t(e,t){e.onload=function(){this.onerror=this.onload=null,t(null,e)},e.onerror=function(){this.onerror=this.onload=null,t(new Error("Failed to load "+this.src),e)}}function r(e,t){e.onreadystatechange=function(){"complete"!=this.readyState&&"loaded"!=this.readyState||(this.onreadystatechange=null,t(null,e))}}e.exports=function(e,n,a){var o=document.head||document.getElementsByTagName("head")[0],s=document.createElement("script");"function"===typeof n&&(a=n,n={}),n=n||{},a=a||function(){},s.type=n.type||"text/javascript",s.charset=n.charset||"utf8",s.async=!("async"in n)||!!n.async,s.src=e,n.attrs&&function(e,t){for(var r in t)e.setAttribute(r,t[r])}(s,n.attrs),n.text&&(s.text=""+n.text),("onload"in s?t:r)(s,a),s.onload||t(s,a),o.appendChild(s)}},441:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/Events/[id]",function(){return r(2358)}])},3295:function(e,t,r){"use strict";r.d(t,{Z:function(){return l}});var n=r(5893),a=(r(7294),r(2488)),o=r.n(a),s=r(3380),i=r.n(s);function l(){return(0,n.jsxs)("div",{className:o().spinnerdiv,children:[(0,n.jsx)(i(),{color:"#ffc41d",size:150,css:" "})," "]})}},2530:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return p}});var n=r(5893),a=(r(7294),r(8182)),o=(r(2679),r(1664)),s=r.n(o),i=r(1219),l=r.n(i),c=r(6351),d=r.n(c),u=r(5675),f=r.n(u);function p(e){return console.log(e),(0,n.jsx)("div",{children:(0,n.jsxs)(a.Z,{className:d().cardsbody,children:[(0,n.jsx)("div",{className:d().ImageCont,children:(0,n.jsx)(s(),{href:"/Events/".concat(e.src),children:(0,n.jsx)(f(),{placeholder:"blur",blurDataURL:"/imgs"+e.img,loading:"eager",className:d().cardImage,alt:"",layout:"fill",src:"/imgs"+e.img})})}),(0,n.jsxs)(a.Z.Body,{className:l().cardBody,children:[(0,n.jsx)(a.Z.Title,{className:l().cardtitle,children:e.title}),(0,n.jsx)("h6",{children:e.date}),(0,n.jsx)(a.Z.Text,{className:l().cardstexts,children:e.text2})]})]})},e.key)}},2358:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return B}});var n=r(4051),a=r.n(n),o=r(5893),s=r(3653),i=r.n(s),l=r(7294),c=r(2560),d=r(130),u=r(9797),f=r.n(u);r(2679),r(6946),r(5675);function p(e){var t=(0,l.useState)(e.img);t[0],t[1];return(0,o.jsx)("div",{className:f().root,children:(0,o.jsx)(d.Z,{touch:!0,fade:!1,indicators:!1,className:f().carouselImages,children:e.img?JSON.parse(e.img).map((function(e){return(0,o.jsx)(d.Z.Item,{interval:5e3,className:f().carouselmain,children:(0,o.jsx)("img",{className:"d-block w-100 ".concat(f().img),src:"/imgs/events/"+e,alt:"First slide"})},e)})):""})})}var h=r(2968),y=r.n(h),m=r(5697),v=r(4063),g=r(1062),_=Object.defineProperty,b=Object.defineProperties,P=Object.getOwnPropertyDescriptors,x=Object.getOwnPropertySymbols,E=Object.prototype.hasOwnProperty,w=Object.prototype.propertyIsEnumerable,C=(e,t,r)=>t in e?_(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,j=(e,t)=>{for(var r in t||(t={}))E.call(t,r)&&C(e,r,t[r]);if(x)for(var r of x(t))w.call(t,r)&&C(e,r,t[r]);return e},N=(e,t)=>b(e,P(t));function S(e={}){return N(j({},e),{height:0,width:0,playerVars:N(j({},e.playerVars),{autoplay:0,start:0,end:0})})}var k={videoId:m.string,id:m.string,className:m.string,iframeClassName:m.string,style:m.object,title:m.string,loading:m.oneOf(["lazy","eager"]),opts:m.objectOf(m.any),onReady:m.func,onError:m.func,onPlay:m.func,onPause:m.func,onEnd:m.func,onStateChange:m.func,onPlaybackRateChange:m.func,onPlaybackQualityChange:m.func},I=class extends l.Component{constructor(e){super(e),this.destroyPlayerPromise=void 0,this.onPlayerReady=e=>{var t,r;return null==(r=(t=this.props).onReady)?void 0:r.call(t,e)},this.onPlayerError=e=>{var t,r;return null==(r=(t=this.props).onError)?void 0:r.call(t,e)},this.onPlayerStateChange=e=>{var t,r,n,a,o,s,i,l;switch(null==(r=(t=this.props).onStateChange)||r.call(t,e),e.data){case I.PlayerState.ENDED:null==(a=(n=this.props).onEnd)||a.call(n,e);break;case I.PlayerState.PLAYING:null==(s=(o=this.props).onPlay)||s.call(o,e);break;case I.PlayerState.PAUSED:null==(l=(i=this.props).onPause)||l.call(i,e)}},this.onPlayerPlaybackRateChange=e=>{var t,r;return null==(r=(t=this.props).onPlaybackRateChange)?void 0:r.call(t,e)},this.onPlayerPlaybackQualityChange=e=>{var t,r;return null==(r=(t=this.props).onPlaybackQualityChange)?void 0:r.call(t,e)},this.destroyPlayer=()=>this.internalPlayer?(this.destroyPlayerPromise=this.internalPlayer.destroy().then((()=>this.destroyPlayerPromise=void 0)),this.destroyPlayerPromise):Promise.resolve(),this.createPlayer=()=>{if("undefined"===typeof document)return;if(this.destroyPlayerPromise)return void this.destroyPlayerPromise.then(this.createPlayer);const e=N(j({},this.props.opts),{videoId:this.props.videoId});this.internalPlayer=g(this.container,e),this.internalPlayer.on("ready",this.onPlayerReady),this.internalPlayer.on("error",this.onPlayerError),this.internalPlayer.on("stateChange",this.onPlayerStateChange),this.internalPlayer.on("playbackRateChange",this.onPlayerPlaybackRateChange),this.internalPlayer.on("playbackQualityChange",this.onPlayerPlaybackQualityChange),(this.props.title||this.props.loading)&&this.internalPlayer.getIframe().then((e=>{this.props.title&&e.setAttribute("title",this.props.title),this.props.loading&&e.setAttribute("loading",this.props.loading)}))},this.resetPlayer=()=>this.destroyPlayer().then(this.createPlayer),this.updatePlayer=()=>{var e;null==(e=this.internalPlayer)||e.getIframe().then((e=>{this.props.id?e.setAttribute("id",this.props.id):e.removeAttribute("id"),this.props.iframeClassName?e.setAttribute("class",this.props.iframeClassName):e.removeAttribute("class"),this.props.opts&&this.props.opts.width?e.setAttribute("width",this.props.opts.width.toString()):e.removeAttribute("width"),this.props.opts&&this.props.opts.height?e.setAttribute("height",this.props.opts.height.toString()):e.removeAttribute("height"),this.props.title?e.setAttribute("title",this.props.title):e.setAttribute("title","YouTube video player"),this.props.loading?e.setAttribute("loading",this.props.loading):e.removeAttribute("loading")}))},this.getInternalPlayer=()=>this.internalPlayer,this.updateVideo=()=>{var e,t,r,n;if("undefined"===typeof this.props.videoId||null===this.props.videoId)return void(null==(e=this.internalPlayer)||e.stopVideo());let a=!1;const o={videoId:this.props.videoId};(null==(t=this.props.opts)?void 0:t.playerVars)&&(a=1===this.props.opts.playerVars.autoplay,"start"in this.props.opts.playerVars&&(o.startSeconds=this.props.opts.playerVars.start),"end"in this.props.opts.playerVars&&(o.endSeconds=this.props.opts.playerVars.end)),a?null==(r=this.internalPlayer)||r.loadVideoById(o):null==(n=this.internalPlayer)||n.cueVideoById(o)},this.refContainer=e=>{this.container=e},this.container=null,this.internalPlayer=null}componentDidMount(){this.createPlayer()}componentDidUpdate(e){(function(e,t){var r,n,a,o;return e.id!==t.id||e.className!==t.className||(null==(r=e.opts)?void 0:r.width)!==(null==(n=t.opts)?void 0:n.width)||(null==(a=e.opts)?void 0:a.height)!==(null==(o=t.opts)?void 0:o.height)||e.iframeClassName!==t.iframeClassName||e.title!==t.title})(e,this.props)&&this.updatePlayer(),function(e,t){return e.videoId!==t.videoId||!v(S(e.opts),S(t.opts))}(e,this.props)&&this.resetPlayer(),function(e,t){var r,n;if(e.videoId!==t.videoId)return!0;const a=(null==(r=e.opts)?void 0:r.playerVars)||{},o=(null==(n=t.opts)?void 0:n.playerVars)||{};return a.start!==o.start||a.end!==o.end}(e,this.props)&&this.updateVideo()}componentWillUnmount(){this.destroyPlayer()}render(){return l.createElement("div",{className:this.props.className,style:this.props.style},l.createElement("div",{id:this.props.id,className:this.props.iframeClassName,ref:this.refContainer}))}},A=I;A.propTypes=k,A.defaultProps={videoId:"",id:"",className:"",iframeClassName:"",style:{},title:"",loading:void 0,opts:{},onReady:()=>{},onError:()=>{},onPlay:()=>{},onPause:()=>{},onEnd:()=>{},onStateChange:()=>{},onPlaybackRateChange:()=>{},onPlaybackQualityChange:()=>{}},A.PlayerState={UNSTARTED:-1,ENDED:0,PLAYING:1,PAUSED:2,BUFFERING:3,CUED:5};var O=A,D=r(3295),R=r(1608),T=r(1555),V=r(1163),L=r(2962);function M(e,t,r,n,a,o,s){try{var i=e[o](s),l=i.value}catch(c){return void r(c)}i.done?t(l):Promise.resolve(l).then(n,a)}function Z(e){return function(){var t=this,r=arguments;return new Promise((function(n,a){var o=e.apply(t,r);function s(e){M(o,n,a,s,i,"next",e)}function i(e){M(o,n,a,s,i,"throw",e)}s(void 0)}))}}function B(e){var t=(0,l.useState)([]),r=t[0],n=t[1],s=(0,l.useState)(!1),d=s[0],u=s[1],h=(0,l.useState)(!1),m=h[0],v=h[1],g=(0,l.useState)(""),_=g[0],b=g[1],P=(0,V.useRouter)(),x=P.query.id;return(0,l.useEffect)((function(){if(x){function t(){return r.apply(this,arguments)}function r(){return(r=Z(a().mark((function t(){return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i().post("https://www.scmp-lb.com/api/SeperateEvent",{EID:x}).then((function(t){console.log("okay"),"not found"===t.data?P.replace("/Events"):t.data.length>0&&"not found"!==t.data&&(b("".concat(e.title||t.data[0].ETitle)),u(!0),n(t.data))})).catch((function(e){v((function(e){return!e}))}));case 2:case"end":return t.stop()}}),t)})))).apply(this,arguments)}m?setTimeout((function(){t()}),[3e3]):t()}}),[m,x,P,e.title]),(0,o.jsxs)("div",{className:y().root,children:[(0,o.jsx)(L.PB,{title:_,description:_}),d?r.length>0?(0,o.jsxs)("div",{children:[" ",(0,o.jsxs)("div",{className:y().titleEng,children:[(0,o.jsx)("p",{className:y().date,children:e.date||r[0].EDate}),(0,o.jsx)("h1",{className:y().title,children:e.title||r[0].ETitle}),(0,o.jsxs)(R.Z,{children:[e.link||r[0].ELink?(0,o.jsxs)(T.Z,{xs:e.link||r[0].ELink?{order:0}:12,md:6,children:[" ",(0,o.jsx)("div",{className:f().root,children:(0,o.jsx)(O,{className:y().YoutubeVid,videoId:function(e){var t=e.match(/^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/);return!(!t||11!=t[7].length)&&t[7]}(e.link||r[0].ELink)})})," "]}):"",(0,o.jsx)(T.Z,{xs:e.link||r[0].ELink?{order:2}:12,md:6,children:(0,o.jsx)(p,{img:e.img||r[0].EPhotos})}),(0,o.jsx)(T.Z,{xs:e.link||r[0].ELink?{order:1}:12,md:e.link||r[0].ELink?{span:12,order:"first"}:6,children:(0,o.jsxs)("div",{className:y().text,children:[(0,o.jsx)("p",{children:e.text2||r[0].EBrief}),(0,o.jsx)("p",{children:e.paragraph||r[0].EParagraph||""})]})})]})]})]}):(0,o.jsx)(c.default,{}):(0,o.jsx)(D.Z,{})]})}},2560:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return b}});var n=r(4051),a=r.n(n),o=r(5893),s=r(7294),i=r(6197),l=r.n(i),c=r(3653),d=r.n(c),u=r(7607),f=r.n(u),p=r(2530),h=(r(3935),r(1608)),y=r(1555),m=r(3295),v=r(2962);function g(e,t,r,n,a,o,s){try{var i=e[o](s),l=i.value}catch(c){return void r(c)}i.done?t(l):Promise.resolve(l).then(n,a)}function _(e){return function(){var t=this,r=arguments;return new Promise((function(n,a){var o=e.apply(t,r);function s(e){g(o,n,a,s,i,"next",e)}function i(e){g(o,n,a,s,i,"throw",e)}s(void 0)}))}}function b(e){var t=(0,s.useState)([{t:1},{t:2}]),r=t[0],n=t[1],i=(0,s.useState)("hi"),c=i[0],u=i[1];return(0,s.useEffect)((function(){function e(){return(e=_(a().mark((function e(){return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d().get("https://www.scmp-lb.com/api/Events").then((function(e){n(e.data),u(!0)})).catch((function(e){}));case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),(0,o.jsxs)("div",{className:l().root,children:[(0,o.jsx)(v.PB,{title:"Events - Scientific Center For Manufacturing And Production",description:"Events - Scientific Center For Manufacturing And Production"}),c?(0,o.jsxs)("div",{children:["  ",(0,o.jsx)(h.Z,{className:"g-4 ".concat(f().root),children:r.length>0?r.map((function(e){return(0,o.jsx)(y.Z,{xs:12,sm:6,md:6,lg:4,children:(0,o.jsx)(p.default,{className:f().Col,link:e.ELink,date:e.EDate,Photos:e.EPhotos,paragraph:e.EParagraph,title:e.ETitle,text2:e.EBrief,src:e.EID,img:"/events/".concat(e.ECover," ")})},e.EID)})):(0,o.jsx)("div",{})})]}):(0,o.jsx)(m.Z,{})]})}},2488:function(e){e.exports={spinnerdiv:"spinner_spinnerdiv__UmvZj"}},9797:function(e){e.exports={root:"eventcarousel_root__90heO",carouselImages:"eventcarousel_carouselImages__eh_Kd",img:"eventcarousel_img__Wy8xa",bodyWidth:"eventcarousel_bodyWidth__I3mSO"}},6351:function(e){e.exports={cardsContainer:"firstcards_cardsContainer__p2oik",cardstexts:"firstcards_cardstexts__P_eDM",ImageCont:"firstcards_ImageCont__x_0Xr",buttonRow:"firstcards_buttonRow__fENL7",departmentsTitle:"firstcards_departmentsTitle__tIzFQ",cardCol:"firstcards_cardCol__un1Ts",cardImage:"firstcards_cardImage__PhdSm","card-text":"firstcards_card-text__DE_SY",cardtext1:"firstcards_cardtext1__jzA9J","card-title":"firstcards_card-title__CL2Pa",cardLinks:"firstcards_cardLinks__CgJNj",buttonCol:"firstcards_buttonCol___yszj",bodyWidth:"firstcards_bodyWidth__ovjIj",cardsbody:"firstcards_cardsbody__W8Y3T",cardImgTop:"firstcards_cardImgTop__Y1Dnu","card-body":"firstcards_card-body__mbG1Q",rowup:"firstcards_rowup__sPGIF",transform:"firstcards_transform__GjAa5","box-shadow":"firstcards_box-shadow__fznce",cardsMiddleContainer:"firstcards_cardsMiddleContainer__388Fy",cardCollapse:"firstcards_cardCollapse__NpJKJ",close:"firstcards_close__IlhsU",open:"firstcards_open__f5_61"}},7607:function(e){e.exports={departmentsTitle:"Departments_departmentsTitle__80rog",root:"Departments_root__8bfdS","card-img-top":"Departments_card-img-top__rvFLa",cardsbody:"Departments_cardsbody__Ute3x",Col:"Departments_Col__RBPyl"}},1219:function(e){e.exports={cardsContainer:"EventsCard_cardsContainer__uUTNf",buttonRow:"EventsCard_buttonRow__fKFhA",departmentsTitle:"EventsCard_departmentsTitle__iQDR9",cardCol:"EventsCard_cardCol__zw1Wu",cardImage:"EventsCard_cardImage__M3GyL",cardBody:"EventsCard_cardBody__srdVd","card-text":"EventsCard_card-text__SgJnk",cardtext1:"EventsCard_cardtext1__RiAiD",cardtitle:"EventsCard_cardtitle__8mumu",cardLinks:"EventsCard_cardLinks__P_5l8",buttonCol:"EventsCard_buttonCol__DxLBP",bodyWidth:"EventsCard_bodyWidth__9z9Mz","card-title":"EventsCard_card-title__KuJq2",cardsbody:"EventsCard_cardsbody__nBQuK","card-body":"EventsCard_card-body__hRfV_",rowup:"EventsCard_rowup__YOalB",cardsMiddleContainer:"EventsCard_cardsMiddleContainer__GxgS4"}},2968:function(e){e.exports={root:"seperateEvent_root__XaiIv",YoutubeVid:"seperateEvent_YoutubeVid__3tNl_",text:"seperateEvent_text__Wf7Qi",date:"seperateEvent_date__MehKS",title:"seperateEvent_title__J1rAA",spinnerdiv:"seperateEvent_spinnerdiv__GKrDq",spinner:"seperateEvent_spinner__eRJGQ"}},6197:function(e){e.exports={root:"events_root__x6MyJ"}},6946:function(){},1163:function(e,t,r){e.exports=r(880)},8182:function(e,t,r){"use strict";r.d(t,{Z:function(){return C}});var n=r(4184),a=r.n(n),o=r(7294),s=r(6792),i=r(6611),l=r(9602),c=r(5893);const d=o.forwardRef((({bsPrefix:e,className:t,variant:r,as:n="img",...o},i)=>{const l=(0,s.vE)(e,"card-img");return(0,c.jsx)(n,{ref:i,className:a()(r?`${l}-${r}`:l,t),...o})}));d.displayName="CardImg";var u=d,f=r(9059);const p=o.forwardRef((({bsPrefix:e,className:t,as:r="div",...n},i)=>{const l=(0,s.vE)(e,"card-header"),d=(0,o.useMemo)((()=>({cardHeaderBsPrefix:l})),[l]);return(0,c.jsx)(f.Z.Provider,{value:d,children:(0,c.jsx)(r,{ref:i,...n,className:a()(t,l)})})}));p.displayName="CardHeader";var h=p;const y=(0,l.Z)("h5"),m=(0,l.Z)("h6"),v=(0,i.Z)("card-body"),g=(0,i.Z)("card-title",{Component:y}),_=(0,i.Z)("card-subtitle",{Component:m}),b=(0,i.Z)("card-link",{Component:"a"}),P=(0,i.Z)("card-text",{Component:"p"}),x=(0,i.Z)("card-footer"),E=(0,i.Z)("card-img-overlay"),w=o.forwardRef((({bsPrefix:e,className:t,bg:r,text:n,border:o,body:i,children:l,as:d="div",...u},f)=>{const p=(0,s.vE)(e,"card");return(0,c.jsx)(d,{ref:f,...u,className:a()(t,p,r&&`bg-${r}`,n&&`text-${n}`,o&&`border-${o}`),children:i?(0,c.jsx)(v,{children:l}):l})}));w.displayName="Card",w.defaultProps={body:!1};var C=Object.assign(w,{Img:u,Title:g,Subtitle:_,Body:v,Link:b,Text:P,Header:h,Footer:x,ImgOverlay:E})},3988:function(e){"use strict";var t;t=function(){var e={},t={};return e.on=function(e,r){var n={name:e,handler:r};return t[e]=t[e]||[],t[e].unshift(n),n},e.off=function(e){var r=t[e.name].indexOf(e);-1!==r&&t[e.name].splice(r,1)},e.trigger=function(e,r){var n,a=t[e];if(a)for(n=a.length;n--;)a[n].handler(r)},e},e.exports=t},6006:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n,a=r(2275),o=(n=a)&&n.__esModule?n:{default:n};t.default={pauseVideo:{acceptableStates:[o.default.ENDED,o.default.PAUSED],stateChangeRequired:!1},playVideo:{acceptableStates:[o.default.ENDED,o.default.PLAYING],stateChangeRequired:!1},seekTo:{acceptableStates:[o.default.ENDED,o.default.PLAYING,o.default.PAUSED],stateChangeRequired:!0,timeout:3e3}},e.exports=t.default},9125:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=i(r(9215)),a=i(r(8255)),o=i(r(5279)),s=i(r(6006));function i(e){return e&&e.__esModule?e:{default:e}}var l=(0,n.default)("youtube-player"),c={proxyEvents:function(e){var t={},r=function(r){var n="on"+r.slice(0,1).toUpperCase()+r.slice(1);t[n]=function(t){l('event "%s"',n,t),e.trigger(r,t)}},n=!0,a=!1,s=void 0;try{for(var i,c=o.default[Symbol.iterator]();!(n=(i=c.next()).done);n=!0){r(i.value)}}catch(d){a=!0,s=d}finally{try{!n&&c.return&&c.return()}finally{if(a)throw s}}return t},promisifyPlayer:function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],r={},n=function(n){t&&s.default[n]?r[n]=function(){for(var t=arguments.length,r=Array(t),a=0;a<t;a++)r[a]=arguments[a];return e.then((function(e){var t=s.default[n],a=e.getPlayerState(),o=e[n].apply(e,r);return t.stateChangeRequired||Array.isArray(t.acceptableStates)&&-1===t.acceptableStates.indexOf(a)?new Promise((function(r){e.addEventListener("onStateChange",(function n(){var a=e.getPlayerState(),o=void 0;"number"===typeof t.timeout&&(o=setTimeout((function(){e.removeEventListener("onStateChange",n),r()}),t.timeout)),Array.isArray(t.acceptableStates)&&-1!==t.acceptableStates.indexOf(a)&&(e.removeEventListener("onStateChange",n),clearTimeout(o),r())}))})).then((function(){return o})):o}))}:r[n]=function(){for(var t=arguments.length,r=Array(t),a=0;a<t;a++)r[a]=arguments[a];return e.then((function(e){return e[n].apply(e,r)}))}},o=!0,i=!1,l=void 0;try{for(var c,d=a.default[Symbol.iterator]();!(o=(c=d.next()).done);o=!0){var u=c.value;n(u)}}catch(f){i=!0,l=f}finally{try{!o&&d.return&&d.return()}finally{if(i)throw l}}return r}};t.default=c,e.exports=t.default},2275:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={BUFFERING:3,ENDED:0,PAUSED:2,PLAYING:1,UNSTARTED:-1,VIDEO_CUED:5},e.exports=t.default},5279:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=["ready","stateChange","playbackQualityChange","playbackRateChange","error","apiChange","volumeChange"],e.exports=t.default},8255:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=["cueVideoById","loadVideoById","cueVideoByUrl","loadVideoByUrl","playVideo","pauseVideo","stopVideo","getVideoLoadedFraction","cuePlaylist","loadPlaylist","nextVideo","previousVideo","playVideoAt","setShuffle","setLoop","getPlaylist","getPlaylistIndex","setOption","mute","unMute","isMuted","setVolume","getVolume","seekTo","getPlayerState","getPlaybackRate","setPlaybackRate","getAvailablePlaybackRates","getPlaybackQuality","setPlaybackQuality","getAvailableQualityLevels","getCurrentTime","getDuration","removeEventListener","getVideoUrl","getVideoEmbedCode","getOptions","getOption","addEventListener","destroy","setSize","getIframe"],e.exports=t.default},1062:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},a=i(r(3988)),o=i(r(5900)),s=i(r(9125));function i(e){return e&&e.__esModule?e:{default:e}}var l=void 0;t.default=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=arguments.length>2&&void 0!==arguments[2]&&arguments[2],i=(0,a.default)();if(l||(l=(0,o.default)(i)),t.events)throw new Error("Event handlers cannot be overwritten.");if("string"===typeof e&&!document.getElementById(e))throw new Error('Element "'+e+'" does not exist.');t.events=s.default.proxyEvents(i);var c=new Promise((function(r){"object"===("undefined"===typeof e?"undefined":n(e))&&e.playVideo instanceof Function?r(e):l.then((function(n){var a=new n.Player(e,t);return i.on("ready",(function(){r(a)})),null}))})),d=s.default.promisifyPlayer(c,r);return d.on=i.on,d.off=i.off,d},e.exports=t.default},5900:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n,a=r(9090),o=(n=a)&&n.__esModule?n:{default:n};t.default=function(e){return new Promise((function(t){if(window.YT&&window.YT.Player&&window.YT.Player instanceof Function)t(window.YT);else{var r="http:"===window.location.protocol?"http:":"https:";(0,o.default)(r+"//www.youtube.com/iframe_api",(function(t){t&&e.trigger("error",t)}));var n=window.onYouTubeIframeAPIReady;window.onYouTubeIframeAPIReady=function(){n&&n(),t(window.YT)}}}))},e.exports=t.default},9215:function(e,t,r){var n=r(3454);function a(){var e;try{e=t.storage.debug}catch(r){}return!e&&"undefined"!==typeof n&&"env"in n&&(e=n.env.DEBUG),e}(t=e.exports=r(5046)).log=function(){return"object"===typeof console&&console.log&&Function.prototype.apply.call(console.log,console,arguments)},t.formatArgs=function(e){var r=this.useColors;if(e[0]=(r?"%c":"")+this.namespace+(r?" %c":" ")+e[0]+(r?"%c ":" ")+"+"+t.humanize(this.diff),!r)return;var n="color: "+this.color;e.splice(1,0,n,"color: inherit");var a=0,o=0;e[0].replace(/%[a-zA-Z%]/g,(function(e){"%%"!==e&&(a++,"%c"===e&&(o=a))})),e.splice(o,0,n)},t.save=function(e){try{null==e?t.storage.removeItem("debug"):t.storage.debug=e}catch(r){}},t.load=a,t.useColors=function(){if("undefined"!==typeof window&&window.process&&"renderer"===window.process.type)return!0;return"undefined"!==typeof document&&document.documentElement&&document.documentElement.style&&document.documentElement.style.WebkitAppearance||"undefined"!==typeof window&&window.console&&(window.console.firebug||window.console.exception&&window.console.table)||"undefined"!==typeof navigator&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/)&&parseInt(RegExp.$1,10)>=31||"undefined"!==typeof navigator&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/)},t.storage="undefined"!=typeof chrome&&"undefined"!=typeof chrome.storage?chrome.storage.local:function(){try{return window.localStorage}catch(e){}}(),t.colors=["lightseagreen","forestgreen","goldenrod","dodgerblue","darkorchid","crimson"],t.formatters.j=function(e){try{return JSON.stringify(e)}catch(t){return"[UnexpectedJSONParseError]: "+t.message}},t.enable(a())},5046:function(e,t,r){var n;function a(e){function r(){if(r.enabled){var e=r,a=+new Date,o=a-(n||a);e.diff=o,e.prev=n,e.curr=a,n=a;for(var s=new Array(arguments.length),i=0;i<s.length;i++)s[i]=arguments[i];s[0]=t.coerce(s[0]),"string"!==typeof s[0]&&s.unshift("%O");var l=0;s[0]=s[0].replace(/%([a-zA-Z%])/g,(function(r,n){if("%%"===r)return r;l++;var a=t.formatters[n];if("function"===typeof a){var o=s[l];r=a.call(e,o),s.splice(l,1),l--}return r})),t.formatArgs.call(e,s);var c=r.log||t.log||console.log.bind(console);c.apply(e,s)}}return r.namespace=e,r.enabled=t.enabled(e),r.useColors=t.useColors(),r.color=function(e){var r,n=0;for(r in e)n=(n<<5)-n+e.charCodeAt(r),n|=0;return t.colors[Math.abs(n)%t.colors.length]}(e),"function"===typeof t.init&&t.init(r),r}(t=e.exports=a.debug=a.default=a).coerce=function(e){return e instanceof Error?e.stack||e.message:e},t.disable=function(){t.enable("")},t.enable=function(e){t.save(e),t.names=[],t.skips=[];for(var r=("string"===typeof e?e:"").split(/[\s,]+/),n=r.length,a=0;a<n;a++)r[a]&&("-"===(e=r[a].replace(/\*/g,".*?"))[0]?t.skips.push(new RegExp("^"+e.substr(1)+"$")):t.names.push(new RegExp("^"+e+"$")))},t.enabled=function(e){var r,n;for(r=0,n=t.skips.length;r<n;r++)if(t.skips[r].test(e))return!1;for(r=0,n=t.names.length;r<n;r++)if(t.names[r].test(e))return!0;return!1},t.humanize=r(4680),t.names=[],t.skips=[],t.formatters={}},4680:function(e){var t=1e3,r=60*t,n=60*r,a=24*n,o=365.25*a;function s(e,t,r){if(!(e<t))return e<1.5*t?Math.floor(e/t)+" "+r:Math.ceil(e/t)+" "+r+"s"}e.exports=function(e,i){i=i||{};var l,c=typeof e;if("string"===c&&e.length>0)return function(e){if((e=String(e)).length>100)return;var s=/^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(e);if(!s)return;var i=parseFloat(s[1]);switch((s[2]||"ms").toLowerCase()){case"years":case"year":case"yrs":case"yr":case"y":return i*o;case"days":case"day":case"d":return i*a;case"hours":case"hour":case"hrs":case"hr":case"h":return i*n;case"minutes":case"minute":case"mins":case"min":case"m":return i*r;case"seconds":case"second":case"secs":case"sec":case"s":return i*t;case"milliseconds":case"millisecond":case"msecs":case"msec":case"ms":return i;default:return}}(e);if("number"===c&&!1===isNaN(e))return i.long?s(l=e,a,"day")||s(l,n,"hour")||s(l,r,"minute")||s(l,t,"second")||l+" ms":function(e){if(e>=a)return Math.round(e/a)+"d";if(e>=n)return Math.round(e/n)+"h";if(e>=r)return Math.round(e/r)+"m";if(e>=t)return Math.round(e/t)+"s";return e+"ms"}(e);throw new Error("val is not a non-empty string or a valid number. val="+JSON.stringify(e))}}},function(e){e.O(0,[675,653,679,244,774,888,179],(function(){return t=441,e(e.s=t);var t}));var t=e.O();_N_E=t}]);