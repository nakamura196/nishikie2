(window.webpackJsonp=window.webpackJsonp||[]).push([[119],{516:function(e,l,t){"use strict";t.r(l);t(76);var o=t(17),r=t(27),n=t(40),c=t(41),v=t(22),d=t(5),m=(t(37),t(7),t(23),t(11));function y(e){var l=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var t,o=Object(v.a)(e);if(l){var r=Object(v.a)(this).constructor;t=Reflect.construct(o,arguments,r)}else t=o.apply(this,arguments);return Object(c.a)(this,t)}}var f=function(e,l,t,desc){var o,r=arguments.length,n=r<3?l:null===desc?desc=Object.getOwnPropertyDescriptor(l,t):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(d.a)(Reflect))&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,l,t,desc);else for(var i=e.length-1;i>=0;i--)(o=e[i])&&(n=(r<3?o(n):r>3?o(l,t,n):o(l,t))||n);return r>3&&n&&Object.defineProperty(l,t,n),n},h=function(e){Object(n.a)(t,e);var l=y(t);function t(){var e;return Object(o.a)(this,t),(e=l.apply(this,arguments)).baseUrl="https://nakamura196.github.io/nishikie2",e}return Object(r.a)(t,[{key:"name",get:function(){return{default:{label:"item",index:"data/index.json",aggs:{"書名":{key:"書名",sort:"",label:"書名",value:{},more:!1,open:!0},"画工名":{key:"画工名",sort:"",label:"画工名",value:{},more:!1,open:!0},"和暦年月日":{key:"和暦年月日",sort:"",label:"和暦年月日",value:{},more:!1,open:!0},"判":{key:"判",sort:"",label:"判",value:{},more:!1,open:!0},"形態":{key:"形態",sort:"",label:"形態",value:{},more:!1,open:!0},"彩色":{key:"彩色",sort:"",label:"彩色",value:{},more:!1,open:!0},"検印状況":{key:"検印状況",sort:"",label:"検印状況",value:{},more:!1,open:!0},"主題":{key:"主題",sort:"",label:"主題",value:{},more:!1,open:!0},"細目":{key:"細目",sort:"",label:"細目",value:{},more:!1,open:!0},agential:{key:"agential",sort:"",label:"agential",value:{},more:!1,open:!0},place:{key:"place",sort:"",label:"place",value:{},more:!1,open:!0},org:{key:"org",sort:"",label:"org",value:{},more:!1,open:!0},keyword:{key:"keyword",sort:"",label:"keyword",value:{},more:!1,open:!0},event:{key:"event",sort:"",label:"event",value:{},more:!1,open:!0},time:{key:"time",sort:"",label:"time",value:{},more:!1,open:!0},color:{key:"color",sort:"",label:"color",value:{},more:!1,open:!0},mtag:{key:"mtag",sort:"",label:"mtag",value:{},more:!1,open:!0}},sort:[{label:"適合度",value:"_score"}],defaultSort:"_score:desc",defaultLayout:"grid",name:"item-id",detail:[{label:"題名",value:"題名",type:"text"},{label:"書名",value:"書名"},{label:"所蔵機関",value:"所蔵機関",type:"text"},{label:"請求記号",value:"請求記号",type:"text"},{label:"画工名",value:"画工名"},{label:"和暦年月日",value:"和暦年月日"},{label:"版元名",value:"版元名",type:"text"},{label:"版元住所",value:"版元住所",type:"text"},{label:"判",value:"判"},{label:"形態",value:"形態"},{label:"彩色",value:"彩色"},{label:"検印状況",value:"検印状況"},{label:"主題",value:"主題"},{label:"細目",value:"細目"},{label:"その他書誌事項",value:"その他書誌事項",type:"text"},{label:"人名",value:"人名",type:"text"},{label:"検印",value:"検印",type:"text"},{label:"その他固有件名",value:"その他固有件名",type:"text"},{label:"彫師",value:"彫師",type:"text"},{label:"地名",value:"地名",type:"text"},{label:"agential",value:"agential"},{label:"org",value:"org"},{label:"place",value:"place"},{label:"keyword",value:"keyword"},{label:"event",value:"event"},{label:"time",value:"time"},{label:"color",value:"color"},{label:"mtag",value:"mtag"}],advanced:[],layout:[{label:"list",value:"list",icon:"mdi-view-list",component:"search-layout-list"},{label:"grid",value:"grid",icon:"mdi-view-grid",component:"search-layout-grid"},{label:"graph",value:"graph",icon:"mdi-chart-bar",component:"search-layout-graph"}],list:[{label:"画工名",value:"画工名"},{label:"和暦年月日",value:"和暦年月日"},{label:"版元名",value:"版元名"},{label:"形態",value:"形態"}]},entity:{label:"entity",index:"data/entity.json",aggs:{"タイプ":{key:"タイプ",sort:"",label:"タイプ",value:{},more:!1,open:!0}},sort:[{label:"適合度",value:"_score"},{label:"出現頻度",value:"count"}],defaultSort:"count:desc",defaultLayout:"grid",name:"entity-id",detail:[{label:"タイプ",value:"タイプ"}],advanced:[],layout:[{label:"list",value:"list",icon:"mdi-view-list",component:"search-layout-list"},{label:"grid",value:"grid",icon:"mdi-view-grid",component:"search-layout-grid"},{label:"graph",value:"graph",icon:"mdi-chart-bar",component:"search-layout-graph"}],list:[{label:"タイプ",value:"タイプ"},{label:"description",value:"description"}]},object:{label:"object",index:"data/gcv.json",aggs:{mtag:{key:"mtag",sort:"",label:"mtag",value:{},more:!1,open:!0}},sort:[{label:"適合度",value:"_score"},{label:"score",value:"score"}],defaultSort:"_score:desc",defaultLayout:"grid",name:"object-id",detail:[{label:"mtag",value:"mtag"},{label:"color",value:"color"},{label:"score",value:"score",type:"text"}],advanced:[],layout:[{label:"list",value:"list",icon:"mdi-view-list",component:"search-layout-list"},{label:"grid",value:"grid",icon:"mdi-view-grid",component:"search-layout-grid"},{label:"graph",value:"graph",icon:"mdi-chart-bar",component:"search-layout-graph"}],list:[{label:"score",value:"score"}]}}[this.$route.params.slug||"default"].name}}]),t}(m.Vue);f([Object(m.Prop)({})],h.prototype,"items",void 0);var k=h=f([Object(m.Component)({})],h),x=t(26),component=Object(x.a)(k,(function(){var e=this,l=e.$createElement,t=e._self._c||l;return t("div",{staticClass:"mt-5"},[t("v-row",e._l(e.items.hits,(function(l,o){return t("v-col",{key:o,attrs:{cols:"6",md:"3"}},[t("v-card",{staticClass:"mb-4",attrs:{flat:"","no-body":""}},[t("nuxt-link",{attrs:{to:e.localePath({name:e.name,params:{id:l._id},query:e.$route.query})}},[t("v-img",{staticClass:"grey lighten-2",staticStyle:{height:"150px"},attrs:{contain:"","max-height":"150",width:"100%",src:l._source.thumbnail||e.baseUrl+"/img/icons/no-image.webp"}})],1),e._v(" "),t("div",{staticClass:"pa-4"},[t("nuxt-link",{attrs:{to:e.localePath({query:e.$route.query,name:e.name,params:{id:l._id}})}},[t("h4",[e._v(e._s(l._source.label))])])],1)],1)],1)})),1)],1)}),[],!1,null,null,null);l.default=component.exports}}]);