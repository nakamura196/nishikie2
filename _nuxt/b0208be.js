(window.webpackJsonp=window.webpackJsonp||[]).push([[138,101,114],{371:function(e,t,r){"use strict";r.r(t);var n=r(17),o=r(40),c=r(41),l=r(22),f=r(5),d=(r(37),r(7),r(76),r(11));function m(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=Object(l.a)(e);if(t){var o=Object(l.a)(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return Object(c.a)(this,r)}}var v=function(e,t,r,desc){var n,o=arguments.length,c=o<3?t:null===desc?desc=Object.getOwnPropertyDescriptor(t,r):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(f.a)(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,t,r,desc);else for(var i=e.length-1;i>=0;i--)(n=e[i])&&(c=(o<3?n(c):o>3?n(t,r,c):n(t,r))||c);return o>3&&c&&Object.defineProperty(t,r,c),c},h=function(e){Object(o.a)(r,e);var t=m(r);function r(){return Object(n.a)(this,r),t.apply(this,arguments)}return r}(d.Vue);v([Object(d.Prop)({required:!0})],h.prototype,"items",void 0);var y=h=v([d.Component],h),k=r(26),component=Object(k.a)(y,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-sheet",{attrs:{color:"grey lighten-2"}},[r("v-container",{staticClass:"py-2 px-0 mx-0",attrs:{fluid:""}},[r("v-breadcrumbs",{staticClass:"py-0",attrs:{items:e.items},scopedSlots:e._u([{key:"divider",fn:function(){return[r("v-icon",[e._v("mdi-chevron-right")])]},proxy:!0}])})],1)],1)}),[],!1,null,null,null);t.default=component.exports},375:function(e,t,r){var content=r(381);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(80).default)("2c6cf8ac",content,!1,{sourceMap:!1})},378:function(e,t,r){"use strict";r.r(t);var n=r(17),o=r(40),c=r(41),l=r(22),f=r(5),d=(r(37),r(7),r(76),r(11));function m(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=Object(l.a)(e);if(t){var o=Object(l.a)(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return Object(c.a)(this,r)}}var v=function(e,t,r,desc){var n,o=arguments.length,c=o<3?t:null===desc?desc=Object.getOwnPropertyDescriptor(t,r):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(f.a)(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,t,r,desc);else for(var i=e.length-1;i>=0;i--)(n=e[i])&&(c=(o<3?n(c):o>3?n(t,r,c):n(t,r))||c);return o>3&&c&&Object.defineProperty(t,r,c),c},h={};h=r(387);var y=function(e){Object(o.a)(r,e);var t=m(r);function r(){var e;return Object(n.a)(this,r),(e=t.apply(this,arguments)).tileProviders=[{name:"地理院タイル",visible:!0,url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",attribution:'&copy; <a target="_blank" href="http://osm.org/copyright">OpenStreetMap</a> contributors'}],e}return r}(d.Vue);v([Object(d.Prop)()],y.prototype,"markers",void 0),v([Object(d.Prop)({default:7})],y.prototype,"zoom",void 0),v([Object(d.Prop)({default:function(){return[33,130]}})],y.prototype,"center",void 0),v([Object(d.Prop)({default:function(){return[]}})],y.prototype,"rectangles",void 0),v([Object(d.Prop)({default:function(){return null}})],y.prototype,"geojson",void 0);var k=y=v([Object(d.Component)({components:{"l-marker-cluster":h}})],y),j=(r(380),r(26)),component=Object(j.a)(k,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("client-only",[r("l-map",{staticStyle:{"z-index":"0"},attrs:{zoom:e.zoom,center:e.center}},[r("l-control-layers",{attrs:{position:"topright"}}),e._v(" "),e._l(e.tileProviders,(function(e){return r("l-tile-layer",{key:e.name,attrs:{name:e.name,visible:e.visible,url:e.url,attribution:e.attribution,"layer-type":"base"}})})),e._v(" "),e._l(e.rectangles,(function(e,t){return r("l-rectangle",{key:t,attrs:{bounds:e.bounds,"l-style":e.style}})})),e._v(" "),e.geojson&&Object.keys(e.geojson).length>0?r("l-geo-json",{attrs:{geojson:e.geojson,options:e.options}}):e._e(),e._v(" "),r("l-marker-cluster",e._l(e.markers,(function(marker,t){return r("l-marker",{key:t,attrs:{"lat-lng":marker.latlng}},[marker.content?r("l-popup",[r("div",{domProps:{innerHTML:e._s(marker.content)}})]):e._e()],1)})),1)],2)],1)}),[],!1,null,null,null);t.default=component.exports},380:function(e,t,r){"use strict";r(375)},381:function(e,t,r){var n=r(79)(!1);n.push([e.i,'.leaflet-cluster-anim .leaflet-marker-icon,.leaflet-cluster-anim .leaflet-marker-shadow{transition:transform .3s ease-out,opacity .3s ease-in}.leaflet-cluster-spider-leg{transition:stroke-dashoffset .3s ease-out,stroke-opacity .3s ease-in}.marker-cluster-small{background-color:rgba(181,226,140,.6)}.marker-cluster-small div{background-color:rgba(110,204,57,.6)}.marker-cluster-medium{background-color:rgba(241,211,87,.6)}.marker-cluster-medium div{background-color:rgba(240,194,12,.6)}.marker-cluster-large{background-color:rgba(253,156,115,.6)}.marker-cluster-large div{background-color:rgba(241,128,23,.6)}.leaflet-oldie .marker-cluster-small{background-color:#b5e28c}.leaflet-oldie .marker-cluster-small div{background-color:#6ecc39}.leaflet-oldie .marker-cluster-medium{background-color:#f1d357}.leaflet-oldie .marker-cluster-medium div{background-color:#f0c20c}.leaflet-oldie .marker-cluster-large{background-color:#fd9c73}.leaflet-oldie .marker-cluster-large div{background-color:#f18017}.marker-cluster{background-clip:padding-box;border-radius:20px}.marker-cluster div{width:30px;height:30px;margin-left:5px;margin-top:5px;text-align:center;border-radius:15px;font:12px "Helvetica Neue",Arial,Helvetica,sans-serif}.marker-cluster span{line-height:30px}',""]),e.exports=n},663:function(e,t,r){"use strict";r.r(t);r(76);var n=r(6),o=r(17),c=r(27),l=r(40),f=r(41),d=r(22),m=r(5),v=(r(51),r(37),r(7),r(19),r(20),r(18),r(58),r(185),r(59),r(11)),h=r(378),y=r(371);function k(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=Object(d.a)(e);if(t){var o=Object(d.a)(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return Object(f.a)(this,r)}}var j=function(e,t,r,desc){var n,o=arguments.length,c=o<3?t:null===desc?desc=Object.getOwnPropertyDescriptor(t,r):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(m.a)(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,t,r,desc);else for(var i=e.length-1;i>=0;i--)(n=e[i])&&(c=(o<3?n(c):o>3?n(t,r,c):n(t,r))||c);return o>3&&c&&Object.defineProperty(t,r,c),c},O=function(e){Object(l.a)(d,e);var t,f=k(d);function d(){var e;return Object(o.a)(this,d),(e=f.apply(this,arguments)).title=e.$t("領域"),e.baseUrl="https://nakamura196.github.io/nishikie2",e}return Object(c.a)(d,[{key:"asyncData",value:(t=Object(n.a)(regeneratorRuntime.mark((function e(t){var n,o,c,l,f,d,m,v,h,y,label,k,j,O,x,R,_,content,P;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=t.payload,t.app,t.$axios,!n){e.next=5;break}return e.abrupt("return",{item:n});case 5:return e.next=7,r.e(2).then(r.t.bind(null,401,3));case 7:o=e.sent,c=[],l={},f=0,d=0,m=0,e.t0=regeneratorRuntime.keys(o);case 14:if((e.t1=e.t0()).done){e.next=31;break}if(v=e.t1.value,(h=o[v]).geo){e.next=19;break}return e.abrupt("continue",14);case 19:y=h.objectID,label=h.label,k=h.geo,j=k.split(" "),O=Number(j[0]),x=Number(j[1]),l[k]||(l[k]={id:y,lat:O,lng:x,label:label}),d+=O,m+=x,f+=1,e.next=14;break;case 31:for(R in l)_=l[R],'\n          <p class="iw">\n            <a href="'.concat("https://nakamura196.github.io/nishikie2/entity/"+_.id,'">').concat(_.label,"</a>\n          </p>\n        "),content='\n          <p class="iw">\n            <a href="'.concat("https://nakamura196.github.io/nishikie2/search?fc-place="+_.id,'">').concat(_.label,"</a>\n          </p>\n        "),c.push({latlng:[_.lat,_.lng],content:content});return P=[d/f,m/f],e.abrupt("return",{markers:c,center:P});case 34:case"end":return e.stop()}}),e)}))),function(e){return t.apply(this,arguments)})},{key:"bh",get:function(){return[{text:this.$t("index"),disabled:!1,to:this.localePath({name:"index"}),exact:!0},{text:this.title}]}}]),d}(v.Vue),x=O=j([Object(v.Component)({components:{Breadcrumbs:y.default,MapMain:h.default}})],O),R=r(26),component=Object(R.a)(x,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("Breadcrumbs",{attrs:{items:e.bh}}),e._v(" "),r("v-container",{staticClass:"my-5"},[r("h2",{staticClass:"mb-5"},[e._v(e._s(e.title))]),e._v(" "),r("client-only",[r("MapMain",{staticClass:"my-10",staticStyle:{width:"100%",height:"600px"},attrs:{zoom:2,markers:e.markers,center:e.center}})],1)],1)],1)}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{MapMain:r(378).default})}}]);