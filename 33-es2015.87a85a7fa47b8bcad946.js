(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{"9saT":function(t,e,r){"use strict";r.r(e),r.d(e,"MatSortHeaderPageModule",(function(){return u}));var a=r("ofXK"),n=r("3Pt+"),c=r("tyNb"),o=r("TEn/"),s=r("fXoL"),i=r("Dh3D");function b(t,e){if(1&t&&(s.Wb(0,"tr"),s.Wb(1,"td"),s.Mc(2),s.Vb(),s.Wb(3,"td"),s.Mc(4),s.Vb(),s.Wb(5,"td"),s.Mc(6),s.Vb(),s.Wb(7,"td"),s.Mc(8),s.Vb(),s.Wb(9,"td"),s.Mc(10),s.Vb(),s.Vb()),2&t){const t=e.$implicit;s.Cb(2),s.Nc(t.name),s.Cb(2),s.Nc(t.calories),s.Cb(2),s.Nc(t.fat),s.Cb(2),s.Nc(t.carbs),s.Cb(2),s.Nc(t.protein)}}function d(t,e,r){return(t<e?-1:1)*(r?1:-1)}const l=[{path:"",component:(()=>{class t{constructor(){this.desserts=[{name:"Frozen yogurt",calories:159,fat:6,carbs:24,protein:4},{name:"Ice cream sandwich",calories:237,fat:9,carbs:37,protein:4},{name:"Eclair",calories:262,fat:16,carbs:24,protein:6},{name:"Cupcake",calories:305,fat:4,carbs:67,protein:4},{name:"Gingerbread",calories:356,fat:16,carbs:49,protein:4}],this.sortedData=this.desserts.slice()}ngOnInit(){}sortData(t){const e=this.desserts.slice();this.sortedData=t.active&&""!==t.direction?e.sort((e,r)=>{const a="asc"===t.direction;switch(t.active){case"name":return d(e.name,r.name,a);case"calories":return d(e.calories,r.calories,a);case"fat":return d(e.fat,r.fat,a);case"carbs":return d(e.carbs,r.carbs,a);case"protein":return d(e.protein,r.protein,a);default:return 0}}):e}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=s.Kb({type:t,selectors:[["app-mat-sort-header"]],decls:20,vars:1,consts:[["slot","start"],[1,"ion-padding"],["matSort","",3,"matSortChange"],["mat-sort-header","name"],["mat-sort-header","calories"],["mat-sort-header","fat"],["mat-sort-header","carbs"],["mat-sort-header","protein"],[4,"ngFor","ngForOf"]],template:function(t,e){1&t&&(s.Wb(0,"ion-header"),s.Wb(1,"ion-toolbar"),s.Wb(2,"ion-buttons",0),s.Rb(3,"ion-back-button"),s.Vb(),s.Wb(4,"ion-title"),s.Mc(5,"Sort Header"),s.Vb(),s.Vb(),s.Vb(),s.Wb(6,"ion-content",1),s.Wb(7,"table",2),s.ec("matSortChange",(function(t){return e.sortData(t)})),s.Wb(8,"tr"),s.Wb(9,"th",3),s.Mc(10,"Dessert (100g)"),s.Vb(),s.Wb(11,"th",4),s.Mc(12,"Calories"),s.Vb(),s.Wb(13,"th",5),s.Mc(14,"Fat (g)"),s.Vb(),s.Wb(15,"th",6),s.Mc(16,"Carbs (g)"),s.Vb(),s.Wb(17,"th",7),s.Mc(18,"Protein (g)"),s.Vb(),s.Vb(),s.Kc(19,b,11,5,"tr",8),s.Vb(),s.Vb()),2&t&&(s.Cb(19),s.oc("ngForOf",e.sortedData))},directives:[o.z,o.mb,o.l,o.h,o.i,o.kb,o.u,i.a,i.b,a.n],styles:["table[_ngcontent-%COMP%]{align-items:center;font-size:12px;text-transform:capitalize}"]}),t})()}];let u=(()=>{class t{}return t.\u0275mod=s.Ob({type:t}),t.\u0275inj=s.Nb({factory:function(e){return new(e||t)},imports:[[a.c,n.g,o.nb,c.j.forChild(l),i.c]]}),t})()}}]);