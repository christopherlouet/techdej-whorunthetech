const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/slidev/DrawingControls-CH1e5GTa.js","assets/slidev/DrawingControls.vue_vue_type_style_index_0_lang-Q-w1SH6d.js","assets/modules/unplugin-icons-VPGyLFj4.js","assets/modules/vue-BkbYFELX.js","assets/modules/shiki-Dg-yjfWZ.js","assets/modules/shiki-Bxv373Z5.css","assets/slidev/SlideWrapper-CehYylVJ.js","assets/index-Bp80x-st.js","assets/index-Bqi2_iba.css","assets/SlideWrapper-B_KtKA9k.css","assets/slidev/IconButton.vue_vue_type_script_setup_true_lang-DFPM9GVS.js","assets/slidev/shortcuts-OGG4o3vV.js","assets/slidev/title-renderer.md_vue_type_script_setup_true_lang-HQyf-7Fp.js","assets/slidev/context-m6b3Wotc.js","assets/shortcuts-DZ7PW3PW.css","assets/DrawingControls-Cxk9a9ub.css"])))=>i.map(i=>d[i]);
import{d as v,ab as z,b as u,o,ai as N,f,i as l,C as e,g as n,j as R,n as C,z as E,aj as $,w as k,aa as M,O as h,F as P,e as p,k as W,t as D,h as j,r as A}from"../modules/vue-BkbYFELX.js";import{c as H,a as I}from"./SlideWrapper-CehYylVJ.js";import{v as b,a as B,w as L,x as w,y as x,d as V,z as O,A as T,B as U,k as S,D as F,E as G}from"../index-Bp80x-st.js";import{b as K,G as X,c as Y,u as q,r as J,a as Q,o as Z,_ as ee,S as te}from"./shortcuts-OGG4o3vV.js";import{n as oe}from"../modules/unplugin-icons-VPGyLFj4.js";import"../modules/shiki-Dg-yjfWZ.js";import"./title-renderer.md_vue_type_script_setup_true_lang-HQyf-7Fp.js";import"./context-m6b3Wotc.js";import"./IconButton.vue_vue_type_script_setup_true_lang-DFPM9GVS.js";const se="/techdej-whorunthetech/assets/logo-BYkHSa_O.png",ae={key:0,class:"fixed top-0 bottom-0 left-0 right-0 grid z-20"},ne=v({__name:"Modal",props:{modelValue:{default:!1},class:{default:""}},emits:["update:modelValue"],setup(m,{emit:r}){const i=m,a=z(i,"modelValue",r);function d(){a.value=!1}return(_,s)=>(o(),u(N,null,[e(a)?(o(),f("div",ae,[n("div",{bg:"black opacity-80",class:"absolute top-0 bottom-0 left-0 right-0 -z-1",onClick:s[0]||(s[0]=c=>d())}),n("div",{class:C(["m-auto rounded-md bg-main shadow",i.class]),"dark:border":"~ main"},[R(_.$slots,"default")],2)])):l("",!0)],1024))}}),le={class:"slidev-info-dialog slidev-layout flex flex-col gap-4 text-base"},re=["innerHTML"],ie=v({__name:"InfoDialog",props:{modelValue:{default:!1}},emits:["update:modelValue"],setup(m,{emit:r}){const a=z(m,"modelValue",r),d=E(()=>typeof b.info=="string");return(_,s)=>(o(),u(ne,{modelValue:e(a),"onUpdate:modelValue":s[0]||(s[0]=c=>$(a)?a.value=c:null),class:"px-6 py-4"},{default:k(()=>[n("div",le,[d.value?(o(),f("div",{key:0,class:"mb-4",innerHTML:e(b).info},null,8,re)):l("",!0),s[1]||(s[1]=n("a",{href:"https://github.com/slidevjs/slidev",target:"_blank",class:"!opacity-100 !border-none !text-current"},[n("div",{class:"flex gap-1 children:my-auto"},[n("div",{class:"opacity-50 text-sm mr-2"},"Powered by"),n("img",{class:"w-5 h-5",src:se,alt:"Slidev logo"}),n("div",{style:{color:"#2082A6"}},[n("b",null,"Sli"),M("dev ")])])],-1))])]),_:1},8,["modelValue"]))}}),ue=v({__name:"Controls",setup(m){const{isEmbedded:r}=B(),i=!b.drawings.presenterOnly&&!r.value,t=h();i&&L(()=>import("./DrawingControls-CH1e5GTa.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15])).then(_=>t.value=_.default);const a=h(),d=h();return(_,s)=>(o(),f(P,null,[t.value?(o(),u(e(t),{key:0})):l("",!0),p(K),p(X),a.value?(o(),u(e(a),{key:1})):l("",!0),d.value?(o(),u(e(d),{key:2,modelValue:e(w),"onUpdate:modelValue":s[0]||(s[0]=c=>$(w)?w.value=c:null)},null,8,["modelValue"])):l("",!0),e(b).info?(o(),u(ie,{key:3,modelValue:e(x),"onUpdate:modelValue":s[1]||(s[1]=c=>$(x)?x.value=c:null)},null,8,["modelValue"])):l("",!0),p(Y)],64))}}),de={key:0,class:"absolute top-0 left-0 right-0 bottom-0 pointer-events-none text-xl"},ce=v({__name:"PresenterMouse",setup(m){return(r,i)=>{const t=oe;return e(V).cursor?(o(),f("div",de,[p(t,{class:"absolute stroke-white dark:stroke-black",style:W({left:`${e(V).cursor.x}%`,top:`${e(V).cursor.y}%`,strokeWidth:16})},null,8,["style"])])):l("",!0)}}}),pe=v({__name:"PrintStyle",setup(m){function r(i,{slots:t}){if(t.default)return j("style",t.default())}return(i,t)=>(o(),u(r,null,{default:k(()=>[M(" @page { size: "+D(e(O))+"px "+D(e(T))+"px; margin: 0px; } ",1)]),_:1}))}}),we=v({__name:"play",setup(m){const{next:r,prev:i,isPrintMode:t}=B(),{isDrawing:a}=H(),d=A();function _(y){var g;S.value||y.button===0&&((g=y.target)==null?void 0:g.id)==="slide-container"&&(y.pageX/window.innerWidth>.5?r():i())}q(d),J(),Q();const s=E(()=>U.value||S.value),c=h();return(y,g)=>(o(),f(P,null,[e(t)?(o(),u(pe,{key:0})):l("",!0),n("div",{id:"page-root",ref_key:"root",ref:d,class:C(["grid",e(G)?"grid-rows-[1fr_max-content]":"grid-cols-[1fr_max-content]"])},[p(I,{style:{background:"var(--slidev-slide-container-background, black)"},width:e(t)?e(F).width.value:void 0,"is-main":"",onPointerdown:_,onContextmenu:e(Z)},{default:k(()=>[p(te,{"render-context":"slide"}),p(ce)]),controls:k(()=>[e(t)?l("",!0):(o(),f("div",{key:0,class:C(["absolute bottom-0 left-0 transition duration-300 opacity-0 hover:opacity-100 focus-within:opacity-100 focus-visible:opacity-100",[s.value?"!opacity-100 right-0":"opacity-0 p-2",e(a)?"pointer-events-none":""]])},[p(ee,{persist:s.value},null,8,["persist"])],2))]),_:1},8,["width","onContextmenu"]),c.value&&e(S)?(o(),u(e(c),{key:0,resize:!0})):l("",!0)],2),e(t)?l("",!0):(o(),u(ue,{key:1})),g[0]||(g[0]=n("div",{id:"twoslash-container"},null,-1))],64))}});export{we as default};
