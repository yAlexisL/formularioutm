"use strict";(self.webpackChunkapp_sipi=self.webpackChunkapp_sipi||[]).push([[357],{6357:(Yo,_,t)=>{t.r(_),t.d(_,{ObjetivoEstrategicoInstitucionalModule:()=>Do});var m=t(8583),u=t(3423),o=t(7716),Z=t(6080),T=t(3570),d=t(4828),v=t(6704),p=t(269),l=t(665),z=t(7674),h=t(4453),b=t(9374),C=t(4514),j=t(7850),g=t(6795),f=t(464);function O(e,a){if(1&e&&o._UZ(0,"nz-option",26),2&e){const n=a.$implicit;o.s9C("nzValue",n.anio),o.s9C("nzLabel",n.anio)}}function A(e,a){if(1&e&&o._UZ(0,"nz-option",26),2&e){const n=a.$implicit;o.s9C("nzValue",n.idtipo),o.s9C("nzLabel",n.nombre)}}function I(e,a){if(1&e&&o._UZ(0,"nz-option",26),2&e){const n=a.$implicit;o.s9C("nzValue",n.idtipo),o.s9C("nzLabel",n.nombre)}}function M(e,a){if(1&e&&o._UZ(0,"nz-option",27),2&e){const n=a.$implicit;o.s9C("nzLabel",n.nombre),o.Q6J("nzValue",n)}}function E(e,a){1&e&&o._uU(0),2&e&&o.hij("y ",a.$implicit.length," m\xe1s seleccionados ")}function S(e,a){if(1&e&&o._UZ(0,"nz-option",27),2&e){const n=a.$implicit;o.s9C("nzLabel",n.nombre),o.Q6J("nzValue",n)}}function x(e,a){1&e&&o._uU(0),2&e&&o.hij("y ",a.$implicit.length," m\xe1s seleccionados ")}function J(e,a){if(1&e){const n=o.EpF();o.TgZ(0,"tr"),o.TgZ(1,"td",28),o._uU(2),o.qZA(),o.TgZ(3,"td",29),o._uU(4),o.qZA(),o.TgZ(5,"td",28),o._uU(6),o.qZA(),o.TgZ(7,"td",28),o._uU(8),o.qZA(),o.TgZ(9,"td",28),o.TgZ(10,"button",30),o.NdJ("nzOnConfirm",function(){const s=o.CHM(n).$implicit;return o.oxw().cargar_datos_actualizar(s)}),o._UZ(11,"i",24),o.qZA(),o.qZA(),o.qZA()}if(2&e){const n=a.$implicit;o.xp6(2),o.Oqu(n.numero),o.xp6(2),o.Oqu(n.descripcion),o.xp6(2),o.Oqu(n.nombre_programa),o.xp6(2),o.Oqu(n.nombre_responsable_estrategico)}}const c=function(){return{xs:8,sm:16,md:24,lg:32}},P=[{path:"",component:(()=>{class e{constructor(n,i){this.api=n,this.eventos=i,this.configuracion_anios=[],this.tab=0,this.catalogo_programas=[],this.catalogo_responsables=[],this.catalogo_objetivos=[],this.catalogo_politicas=[],this.objetivos_estrategicos=[],this.anios=[],this.objetivo_estrategico={idobjetivo_estrategico:-1,idobjetivo_estrategico_padre:-1,numero:null,descripcion:"",idtipo_programa:-1,idtipo_responsable_estrategico:-1,idescuela:-1,idescuela_anterior:-1,iddepartamento_anterior:-1,iddepartamento_auxiliar:-1,activo:!0,anio_inicio:null,anio_fin:null,json_objetivos:[],json_politicas:[],tipo:"INSTITUCIONAL",anios:[],idpersonal:-1}}ngOnInit(){this.obtener_configuracion_anios()}obtener_configuracion_anios(){this.eventos.loading(!0),this.api.obtener_configuracion({codigo:"SIPI --\x3e A\xd1OS PEDI"}).subscribe(n=>{this.eventos.loading(!1),this.eventos.validar_token(n[0].p_sesion),this.configuracion_anios=n[0].p_datos_configuracion;for(let i=0;i<this.configuracion_anios.length;i++)this.anios.push(this.configuracion_anios[i].anio);this.obtener_objetivos_estrategicos("INSTITUCIONAL")},n=>{this.eventos.loading(!1),this.eventos.mensaje("error","Error en el servidor, intente nuevamente...")})}obtener_objetivos_estrategicos(n){console.log(this.anios),this.eventos.loading(!0),this.api.obtener_objetivos_estrategicos({tipo:n,idescuela:-1,idindice_departamento:-1,anios:this.anios}).subscribe(i=>{this.eventos.loading(!1),this.eventos.validar_token(i[0].p_sesion),this.objetivos_estrategicos=i[0].p_objetivos_estrategicos,this.obtener_catalogo_programas()},i=>{this.eventos.loading(!1),this.eventos.mensaje("error","Error en el servidor, intente nuevamente...")})}obtener_catalogo_programas(){this.eventos.loading(!0),this.api.obtener_catalogo({catalogo:"SIPI --\x3e PROGRAMAS"}).subscribe(n=>{this.eventos.loading(!1),this.eventos.validar_token(n[0].p_sesion),this.catalogo_programas=n[0].p_catalogo,this.obtener_catalogo_responsables_estrategicos()},n=>{this.eventos.loading(!1),this.eventos.mensaje("error","Error en el servidor, intente nuevamente...")})}obtener_catalogo_responsables_estrategicos(){this.eventos.loading(!0),this.api.obtener_catalogo({catalogo:"SIPI --\x3e RESPONSABLES ESTRATEGICOS"}).subscribe(n=>{this.eventos.loading(!1),this.eventos.validar_token(n[0].p_sesion),this.catalogo_responsables=n[0].p_catalogo,this.obtener_catalogo_objetivos()},n=>{this.eventos.loading(!1),this.eventos.mensaje("error","Error en el servidor, intente nuevamente...")})}obtener_catalogo_objetivos(){this.eventos.loading(!0),this.api.obtener_catalogo({catalogo:"SIPI --\x3e OBJETIVOS PCO"}).subscribe(n=>{this.eventos.loading(!1),this.eventos.validar_token(n[0].p_sesion),this.catalogo_objetivos=n[0].p_catalogo,this.obtener_catalogo_politicas()},n=>{this.eventos.loading(!1),this.eventos.mensaje("error","Error en el servidor, intente nuevamente...")})}obtener_catalogo_politicas(){this.eventos.loading(!0),this.api.obtener_catalogo({catalogo:"SIPI --\x3e POLITICAS NACIONALES"}).subscribe(n=>{this.eventos.loading(!1),this.eventos.validar_token(n[0].p_sesion),this.catalogo_politicas=n[0].p_catalogo},n=>{this.eventos.loading(!1),this.eventos.mensaje("error","Error en el servidor, intente nuevamente...")})}guardar_objetivo_estrategico(){this.objetivo_estrategico.anio_fin=this.objetivo_estrategico.anio_inicio,this.objetivo_estrategico.anios=this.anios,this.objetivo_estrategico.idpersonal=this.eventos.usuario.p_idpersonal,this.eventos.loading(!0),this.api.guardar_objetivo_estrategico(this.objetivo_estrategico).subscribe(n=>{this.eventos.loading(!1),this.eventos.validar_token(n[0].p_sesion),"True"==n[0].p_status?(this.eventos.mensaje("success",n[0].p_message),this.limpiar_datos(),this.objetivos_estrategicos=n[0].p_objetivos_estrategicos):this.eventos.mensaje("error",n[0].p_message)},n=>{this.eventos.loading(!1),this.eventos.mensaje("error","Error en el servidor, intente nuevamente...")})}cargar_datos_actualizar(n){this.objetivo_estrategico=n,this.objetivo_estrategico.anio_inicio=this.objetivo_estrategico.anio_inicio.toString(),this.objetivo_estrategico.idtipo_programa=this.objetivo_estrategico.idtipo_programa.toString(),this.objetivo_estrategico.idtipo_responsable_estrategico=this.objetivo_estrategico.idtipo_responsable_estrategico.toString(),this.objetivo_estrategico.idindice_departamento=this.objetivo_estrategico.iddepartamento_auxiliar,this.catalogo_objetivos=this.objetivo_estrategico.json_objetivos,this.catalogo_politicas=this.objetivo_estrategico.json_politicas,this.tab=0}limpiar_datos(){this.objetivo_estrategico={idobjetivo_estrategico:-1,idobjetivo_estrategico_padre:-1,numero:null,descripcion:"",idtipo_programa:-1,idtipo_responsable_estrategico:-1,idescuela:-1,idescuela_anterior:-1,iddepartamento_anterior:-1,iddepartamento_auxiliar:-1,activo:!0,anio_inicio:null,anio_fin:null,json_objetivos:[],json_politicas:[],tipo:"INSTITUCIONAL",anios:[],idpersonal:-1}}}return e.\u0275fac=function(n){return new(n||e)(o.Y36(Z.s),o.Y36(T.S))},e.\u0275cmp=o.Xpm({type:e,selectors:[["app-objetivo-estrategico-institucional"]],decls:65,vars:36,consts:[[1,"contenido_dashboard"],[3,"nzSelectedIndex","nzSelectedIndexChange"],["nzTitle","REGISTRO"],["nz-row","",3,"nzGutter"],["nz-col","",1,"gutter-row",3,"nzSpan"],["nzAllowClear","","nzPlaceHolder","Seleccione a\xf1o...",3,"ngModel","ngModelChange"],[3,"nzValue","nzLabel",4,"ngFor","ngForOf"],["nzAllowClear","","nzPlaceHolder","Seleccione funci\xf3n sustantiva...",3,"ngModel","ngModelChange"],["nzAllowClear","","nzPlaceHolder","Seleccione responsable estrat\xe9gico...",3,"ngModel","ngModelChange"],[3,"nzMaxCharacterCount"],["rows","4","nz-input","",3,"ngModel","ngModelChange"],["nzMode","multiple","nzPlaceHolder","Seleccione objetivos...",3,"nzMaxTagCount","nzMaxTagPlaceholder","ngModel","ngModelChange"],[3,"nzLabel","nzValue",4,"ngFor","ngForOf"],["tagPlaceHolder",""],["nzMode","multiple","nzPlaceHolder","Seleccione pol\xedticas institucionales...",3,"nzMaxTagCount","nzMaxTagPlaceholder","ngModel","ngModelChange"],["nz-col","","nzOffset","4",1,"gutter-row",3,"nzSpan"],["nz-button","","nz-button","","nz-popconfirm","","nzPopconfirmTitle","Est\xe1 seguro de cancelar este registro?","nzType","primary","nzPopconfirmPlacement","bottomRight",1,"boton_cancelar",3,"nzOnConfirm"],["nz-button","","nz-button","","nz-popconfirm","","nzPopconfirmTitle","Est\xe1 seguro de guardar este registro?","nzType","primary","nzPopconfirmPlacement","bottomRight",1,"boton_guardar",3,"disabled","nzOnConfirm"],["nzTitle","HISTORIAL"],["nzTableLayout","fixed",3,"nzData"],["nzTableObjetivosEstrategicos",""],[2,"width","15%","text-align","center"],[2,"width","30%","text-align","justify"],[2,"width","20%","text-align","center"],["nz-icon","","nzType","setting"],[4,"ngFor","ngForOf"],[3,"nzValue","nzLabel"],[3,"nzLabel","nzValue"],[2,"text-align","center"],[2,"text-align","justify"],["nz-button","","nz-popconfirm","","nzPopconfirmTitle","Est\xe1 seguro de modificar este registro?","nzType","primary","nzPopconfirmPlacement","bottomRight","nzType","primary","nzShape","circle",3,"nzOnConfirm"]],template:function(n,i){if(1&n&&(o.TgZ(0,"div",0),o.TgZ(1,"nz-tabset",1),o.NdJ("nzSelectedIndexChange",function(s){return i.tab=s}),o.TgZ(2,"nz-tab",2),o.TgZ(3,"div",3),o.TgZ(4,"div",4),o.TgZ(5,"label"),o._uU(6,"A\xf1o (*):"),o.qZA(),o.TgZ(7,"nz-select",5),o.NdJ("ngModelChange",function(s){return i.objetivo_estrategico.anio_inicio=s}),o.YNc(8,O,1,2,"nz-option",6),o.qZA(),o.qZA(),o.TgZ(9,"div",4),o.TgZ(10,"label"),o._uU(11,"Funciones Sustantivas (*):"),o.qZA(),o.TgZ(12,"nz-select",7),o.NdJ("ngModelChange",function(s){return i.objetivo_estrategico.idtipo_programa=s}),o.YNc(13,A,1,2,"nz-option",6),o.qZA(),o.qZA(),o.TgZ(14,"div",4),o.TgZ(15,"label"),o._uU(16,"Responsable Estrat\xe9gico (*):"),o.qZA(),o.TgZ(17,"nz-select",8),o.NdJ("ngModelChange",function(s){return i.objetivo_estrategico.idtipo_responsable_estrategico=s}),o.YNc(18,I,1,2,"nz-option",6),o.qZA(),o.qZA(),o.qZA(),o.TgZ(19,"div",3),o.TgZ(20,"div",4),o.TgZ(21,"label"),o._uU(22,"Descripci\xf3n (*):"),o.qZA(),o.TgZ(23,"nz-textarea-count",9),o.TgZ(24,"textarea",10),o.NdJ("ngModelChange",function(s){return i.objetivo_estrategico.descripcion=s}),o.qZA(),o.qZA(),o.qZA(),o.qZA(),o.TgZ(25,"div",3),o.TgZ(26,"div",4),o.TgZ(27,"label"),o._uU(28,'Objetivos "Plan Creando Oportunidades"(*):'),o.qZA(),o.TgZ(29,"nz-select",11),o.NdJ("ngModelChange",function(s){return i.objetivo_estrategico.json_objetivos=s}),o.YNc(30,M,1,2,"nz-option",12),o.qZA(),o.YNc(31,E,1,1,"ng-template",null,13,o.W1O),o.qZA(),o.TgZ(33,"div",4),o.TgZ(34,"label"),o._uU(35,"Pol\xedticas Institucionales(*):"),o.qZA(),o.TgZ(36,"nz-select",14),o.NdJ("ngModelChange",function(s){return i.objetivo_estrategico.json_politicas=s}),o.YNc(37,S,1,2,"nz-option",12),o.qZA(),o.YNc(38,x,1,1,"ng-template",null,13,o.W1O),o.qZA(),o.qZA(),o._UZ(40,"br"),o.TgZ(41,"div",3),o.TgZ(42,"div",15),o.TgZ(43,"button",16),o.NdJ("nzOnConfirm",function(){return i.limpiar_datos()}),o._uU(44," CANCELAR "),o.qZA(),o.qZA(),o.TgZ(45,"div",4),o.TgZ(46,"button",17),o.NdJ("nzOnConfirm",function(){return i.guardar_objetivo_estrategico()}),o._uU(47," GUARDAR "),o.qZA(),o.qZA(),o.qZA(),o.qZA(),o.TgZ(48,"nz-tab",18),o.TgZ(49,"nz-table",19,20),o.TgZ(51,"thead"),o.TgZ(52,"tr"),o.TgZ(53,"th",21),o._uU(54,"No."),o.qZA(),o.TgZ(55,"th",22),o._uU(56,"Descripci\xf3n"),o.qZA(),o.TgZ(57,"th",23),o._uU(58,"Programa"),o.qZA(),o.TgZ(59,"th",23),o._uU(60,"Resp. Estrat\xe9gico"),o.qZA(),o.TgZ(61,"th",21),o._UZ(62,"i",24),o.qZA(),o.qZA(),o.qZA(),o.TgZ(63,"tbody"),o.YNc(64,J,12,4,"tr",25),o.qZA(),o.qZA(),o.qZA(),o.qZA(),o.qZA()),2&n){const r=o.MAs(32),s=o.MAs(50);o.xp6(1),o.Q6J("nzSelectedIndex",i.tab),o.xp6(2),o.Q6J("nzGutter",o.DdM(32,c)),o.xp6(1),o.Q6J("nzSpan",4),o.xp6(3),o.Q6J("ngModel",i.objetivo_estrategico.anio_inicio),o.xp6(1),o.Q6J("ngForOf",i.configuracion_anios),o.xp6(1),o.Q6J("nzSpan",10),o.xp6(3),o.Q6J("ngModel",i.objetivo_estrategico.idtipo_programa),o.xp6(1),o.Q6J("ngForOf",i.catalogo_programas),o.xp6(1),o.Q6J("nzSpan",10),o.xp6(3),o.Q6J("ngModel",i.objetivo_estrategico.idtipo_responsable_estrategico),o.xp6(1),o.Q6J("ngForOf",i.catalogo_responsables),o.xp6(1),o.Q6J("nzGutter",o.DdM(33,c)),o.xp6(1),o.Q6J("nzSpan",24),o.xp6(3),o.Q6J("nzMaxCharacterCount",500),o.xp6(1),o.Q6J("ngModel",i.objetivo_estrategico.descripcion),o.xp6(1),o.Q6J("nzGutter",o.DdM(34,c)),o.xp6(1),o.Q6J("nzSpan",12),o.xp6(3),o.Q6J("nzMaxTagCount",3)("nzMaxTagPlaceholder",r)("ngModel",i.objetivo_estrategico.json_objetivos),o.xp6(1),o.Q6J("ngForOf",i.catalogo_objetivos),o.xp6(3),o.Q6J("nzSpan",12),o.xp6(3),o.Q6J("nzMaxTagCount",3)("nzMaxTagPlaceholder",r)("ngModel",i.objetivo_estrategico.json_politicas),o.xp6(1),o.Q6J("ngForOf",i.catalogo_politicas),o.xp6(4),o.Q6J("nzGutter",o.DdM(35,c)),o.xp6(1),o.Q6J("nzSpan",8),o.xp6(3),o.Q6J("nzSpan",8),o.xp6(1),o.Q6J("disabled",!(i.objetivo_estrategico.anio_inicio&&i.objetivo_estrategico.descripcion.length&&"-1"!=i.objetivo_estrategico.idtipo_programa&&i.objetivo_estrategico.idtipo_programa&&"-1"!=i.objetivo_estrategico.idtipo_responsable_estrategico&&i.objetivo_estrategico.idtipo_responsable_estrategico&&i.objetivo_estrategico.anio_inicio&&i.objetivo_estrategico.json_objetivos.length&&i.objetivo_estrategico.json_politicas.length)),o.xp6(3),o.Q6J("nzData",i.objetivos_estrategicos),o.xp6(15),o.Q6J("ngForOf",s.data)}},directives:[d.xH,d.xw,v.SK,v.t3,p.Vq,l.JJ,l.On,m.sg,z.w,z.Zp,l.Fj,h.ix,b.dQ,C.w,j.JW,g.N8,g.Om,g.$Z,g.Uo,g._C,f.Ls,g.p0,p.Ip],styles:[".search-box[_ngcontent-%COMP%]{padding:8px}.search-box[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{width:188px;margin-bottom:8px;display:block}.search-box[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{width:90px}.search-button[_ngcontent-%COMP%]{margin-right:8px}nz-select[_ngcontent-%COMP%]{margin:0 8px 10px 0;width:100%}[nz-row][_ngcontent-%COMP%]{margin-top:10px}"]}),e})()}];let Q=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=o.oAB({type:e}),e.\u0275inj=o.cJS({imports:[[u.Bz.forChild(P)],u.Bz]}),e})();var U=t(2746),N=t(3730),y=t(6175),F=t(480),L=t(8925),R=t(7190),D=t(5329),Y=t(3255),G=t(6442),V=t(5392),H=t(1089),$=t(7018),B=t(8513),W=t(2394),X=t(2079),K=t(4812),q=t(853),w=t(641),k=t(1525),oo=t(324),to=t(3022),no=t(3385),eo=t(3721),io=t(4401),ao=t(2482),so=t(8541),ro=t(2868),go=t(9703),lo=t(343),co=t(3197),vo=t(6799),po=t(8058),zo=t(6214),_o=t(3080),mo=t(6271),uo=t(5428),ho=t(2496),bo=t(2281),jo=t(1398),fo=t(6372),Zo=t(3516),To=t(6790),Co=t(1241),Oo=t(1729),Ao=t(6149),Io=t(4794),Mo=t(8453),Eo=t(3845),So=t(8547),xo=t(3253),Jo=t(7420),Po=t(6716),Qo=t(9628),Uo=t(954),No=t(2995),yo=t(7772),Fo=t(4788),Lo=t(5129),Ro=t(1238);let Do=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=o.oAB({type:e}),e.\u0275inj=o.cJS({imports:[[m.ez,l.u5,Q,y.j,F.L,L.on,R.ic,D.Rt,Y.j,G.mS,h.sL,V.lt,H.RQ,$.vh,B.vB,W.Fs,X.Wr,K.cD,q.YM,oo.Hb,to.q6,no.S,eo.BL,io.b1,ao.Xo,so.U5,v.Jb,ro.YI,f.PV,go.Gb,z.o7,lo.Z,U.wm,co.Ph,vo.Gl,N.ip,po.gR,zo.Qp,w.g,_o.L8,mo.KJ,uo.uK,j._p,ho.$6,bo.W,jo.aF,fo.Ju,Zo.XD,p.LV,To.H0,Co.N3,Oo.j,Ao.A2,Io.N6,Mo.m,g.HQ,d.we,Eo.X,So.wY,xo.FT,Jo.cg,k.R,Po.st,Qo.vO,Uo.zU,No.cq,yo.ZJ,Fo.cS,b.vG,Lo.GS,Ro.YS]]}),e})()}}]);