import{H as e,M as t,o,c as a,w as s,k as i,j as l,r as n,A as d}from"./index.c750a711.js";import{r as c,_ as r}from"./uni-app.es.87349d3f.js";import{_ as p}from"./_plugin-vue_export-helper.cdc0426e.js";const f=p({data:()=>({id:"",videoPlayUrl:"http://43.139.139.17:777/mp4/2.mp4"}),onLoad(t){t.id?(this.id=t.id,this.getVideoInfo()):e({icon:"none",title:"视频不存在"})},methods:{goBack(){t()},getVideoInfo(){uni.$u.http.get("api.php/jmys/Detail?vod_id="+this.id).then((t=>{"200"==t.data.code||e({icon:"none",title:"请求失败"})})).catch((t=>{e({icon:"error",title:"请求失败"})}))}}},[["render",function(e,t,p,f,u,h){const m=i,_=c(n("u-icon"),r),g=d;return o(),a(m,null,{default:s((()=>[l(m,{class:"header"},{default:s((()=>[l(m,{class:"videoMain",style:{"background-color":"#000",padding:"10rpx 0",position:"relative"}},{default:s((()=>[l(m,{class:"head",style:{}}),l(_,{onClick:h.goBack,name:"arrow-left",color:"#fff",style:{position:"absolute",left:"10rpx","z-index":"999"}},null,8,["onClick"]),l(g,{src:u.videoPlayUrl,style:{width:"100%"}},null,8,["src"])])),_:1})])),_:1}),l(m,{class:"center"}),l(m,{class:"bottom"})])),_:1})}],["__scopeId","data-v-0ceca6fb"]]);export{f as default};
