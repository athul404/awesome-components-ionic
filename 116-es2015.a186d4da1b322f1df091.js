(window.webpackJsonp=window.webpackJsonp||[]).push([[116],{y6SE:function(e,i,t){"use strict";t.r(i),t.d(i,"SlidesPageModule",(function(){return h}));var l=t("ofXK"),n=t("3Pt+"),o=t("tyNb"),d=t("TEn/"),a=t("fXoL");function s(e,i){if(1&e&&(a.Wb(0,"ion-item",3),a.Mc(1),a.Vb()),2&e){const e=i.$implicit;a.oc("routerLink",e.page),a.Cb(1),a.Oc(" ",e.title," ")}}const r=[{path:"",component:(()=>{class e{constructor(e){this.navCtrl=e,this.items=[{title:"Carousel",page:"slide-carousel"},{title:"Color changing sliders",page:"slide-color-changing"},{title:"Custom pagination",page:"slide-custom-pagination"},{title:"Free mode slide (no fixed positions)",page:"slide-free-mode"},{title:"List of Sliders",page:"slide-list"},{title:"Nested slides",page:"slide-nested"},{title:"Slide transitions",page:"slide-transitions"},{title:"Slide right to left",page:"slide-rtl"},{title:"Slide with pagination arrows",page:"slide-with-arrows"},{title:"Slide Walkthrough",page:"slide-walkthrough"},{title:"Photo Gallery (not working)",page:"slide-photo-gallery"},{title:"Slide Pagination",page:"slide-pagination"}]}ngOnInit(){}itemTapped(e,i){this.navCtrl.navigateForward(i.page)}}return e.\u0275fac=function(i){return new(i||e)(a.Qb(d.sb))},e.\u0275cmp=a.Kb({type:e,selectors:[["app-slides"]],decls:9,vars:1,consts:[["slot","start"],["defaultHref","/"],["details","",3,"routerLink",4,"ngFor","ngForOf"],["details","",3,"routerLink"]],template:function(e,i){1&e&&(a.Wb(0,"ion-header"),a.Wb(1,"ion-toolbar"),a.Wb(2,"ion-buttons",0),a.Rb(3,"ion-back-button",1),a.Vb(),a.Wb(4,"ion-title"),a.Mc(5,"Slides"),a.Vb(),a.Vb(),a.Vb(),a.Wb(6,"ion-content"),a.Wb(7,"ion-list"),a.Kc(8,s,2,2,"ion-item",2),a.Vb(),a.Vb()),2&e&&(a.Cb(8),a.oc("ngForOf",i.items))},directives:[d.z,d.mb,d.l,d.h,d.i,d.kb,d.u,d.K,l.n,d.D,d.wb,o.i],styles:[""]}),e})()},{path:"slide-color-changing",loadChildren:()=>t.e(10).then(t.bind(null,"onO+")).then(e=>e.SlideColorChangingPageModule)},{path:"slide-color-changing",loadChildren:()=>t.e(10).then(t.bind(null,"onO+")).then(e=>e.SlideColorChangingPageModule)},{path:"slide-custom-pagination",loadChildren:()=>t.e(106).then(t.bind(null,"8VuJ")).then(e=>e.SlideCustomPaginationPageModule)},{path:"slide-nested",loadChildren:()=>t.e(109).then(t.bind(null,"LVgk")).then(e=>e.SlideNestedPageModule)},{path:"slide-free-mode",loadChildren:()=>t.e(107).then(t.bind(null,"apiX")).then(e=>e.SlideFreeModePageModule)},{path:"slide-photo-gallery",loadChildren:()=>t.e(111).then(t.bind(null,"1BfN")).then(e=>e.SlidePhotoGalleryPageModule)},{path:"slide-rtl",loadChildren:()=>t.e(112).then(t.bind(null,"4eVO")).then(e=>e.SlideRtlPageModule)},{path:"slide-transitions",loadChildren:()=>t.e(113).then(t.bind(null,"pTpb")).then(e=>e.SlideTransitionsPageModule)},{path:"slide-walkthrough",loadChildren:()=>t.e(114).then(t.bind(null,"frUI")).then(e=>e.SlideWalkthroughPageModule)},{path:"slide-list",loadChildren:()=>t.e(108).then(t.bind(null,"tlxJ")).then(e=>e.SlideListPageModule)},{path:"slide-with-arrows",loadChildren:()=>t.e(115).then(t.bind(null,"g0m8")).then(e=>e.SlideWithArrowsPageModule)},{path:"slide-carousel",loadChildren:()=>t.e(105).then(t.bind(null,"r66F")).then(e=>e.SlideCarouselPageModule)},{path:"slide-pagination",loadChildren:()=>t.e(110).then(t.bind(null,"+9aX")).then(e=>e.SlidePaginationPageModule)}];let h=(()=>{class e{}return e.\u0275mod=a.Ob({type:e}),e.\u0275inj=a.Nb({factory:function(i){return new(i||e)},imports:[[l.c,n.g,d.nb,o.j.forChild(r)]]}),e})()}}]);