(self.webpackChunkfox_service_ui=self.webpackChunkfox_service_ui||[]).push([[300],{6300:(e,t,i)=>{"use strict";i.r(t),i.d(t,{HomeModule:()=>C});var s=i(8583),n=i(2521),r=i(639),l=i(9075);let o=(()=>{class e{constructor(e,t){this.TitleService=e,this.metaService=t}setPageSEODetails(e,t){this.TitleService.setTitle(e),this.metaService.addTags(t)}}return e.\u0275fac=function(t){return new(t||e)(r.LFG(l.Dx),r.LFG(l.h_))},e.\u0275prov=r.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const d="undefined"!=typeof window&&window||{};let h;class a{constructor(){this.length=0,this.asArray=[]}get(e){if(0===this.length||e<0||e>=this.length)return;let t=this.head;for(let i=0;i<e;i++)t=t.next;return t.value}add(e,t=this.length){if(t<0||t>this.length)throw new Error("Position is out of the list");const i={value:e,next:void 0,previous:void 0};if(0===this.length)this.head=i,this.tail=i,this.current=i;else if(0===t)i.next=this.head,this.head.previous=i,this.head=i;else if(t===this.length)this.tail.next=i,i.previous=this.tail,this.tail=i;else{const e=this.getNode(t-1),s=e.next;e.next=i,s.previous=i,i.previous=e,i.next=s}this.length++,this.createInternalArrayRepresentation()}remove(e=0){if(0===this.length||e<0||e>=this.length)throw new Error("Position is out of the list");if(0===e)this.head=this.head.next,this.head?this.head.previous=void 0:this.tail=void 0;else if(e===this.length-1)this.tail=this.tail.previous,this.tail.next=void 0;else{const t=this.getNode(e);t.next.previous=t.previous,t.previous.next=t.next}this.length--,this.createInternalArrayRepresentation()}set(e,t){if(0===this.length||e<0||e>=this.length)throw new Error("Position is out of the list");this.getNode(e).value=t,this.createInternalArrayRepresentation()}toArray(){return this.asArray}findAll(e){let t=this.head;const i=[];for(let s=0;s<this.length;s++)e(t.value,s)&&i.push({index:s,value:t.value}),t=t.next;return i}push(...e){return e.forEach(e=>{this.add(e)}),this.length}pop(){if(0===this.length)return;const e=this.tail;return this.remove(this.length-1),e.value}unshift(...e){return e.reverse(),e.forEach(e=>{this.add(e,0)}),this.length}shift(){if(0===this.length)return;const e=this.head.value;return this.remove(),e}forEach(e){let t=this.head;for(let i=0;i<this.length;i++)e(t.value,i),t=t.next}indexOf(e){let t=this.head,i=0;for(let s=0;s<this.length;s++){if(t.value===e){i=s;break}t=t.next}return i}some(e){let t=this.head,i=!1;for(;t&&!i;){if(e(t.value)){i=!0;break}t=t.next}return i}every(e){let t=this.head,i=!0;for(;t&&i;)e(t.value)||(i=!1),t=t.next;return i}toString(){return"[Linked List]"}find(e){let t,i=this.head;for(let s=0;s<this.length;s++){if(e(i.value,s)){t=i.value;break}i=i.next}return t}findIndex(e){let t,i=this.head;for(let s=0;s<this.length;s++){if(e(i.value,s)){t=s;break}i=i.next}return t}getNode(e){if(0===this.length||e<0||e>=this.length)throw new Error("Position is out of the list");let t=this.head;for(let i=0;i<e;i++)t=t.next;return t}createInternalArrayRepresentation(){const e=[];let t=this.head;for(;t;)e.push(t.value),t=t.next;this.asArray=e}}function c(e,t){if(1&e){const e=r.EpF();r.TgZ(0,"li",7),r.NdJ("click",function(){const t=r.CHM(e).index;return r.oxw(2).selectSlide(t)}),r.qZA()}2&e&&r.ekj("active",!0===t.$implicit.active)}function u(e,t){if(1&e&&(r.TgZ(0,"ol",5),r.YNc(1,c,1,2,"li",6),r.qZA()),2&e){const e=r.oxw();r.xp6(1),r.Q6J("ngForOf",e.indicatorsSlides())}}function g(e,t){1&e&&(r.TgZ(0,"span",11),r._uU(1,"Previous"),r.qZA())}function m(e,t){if(1&e){const e=r.EpF();r.TgZ(0,"a",8),r.NdJ("click",function(){return r.CHM(e),r.oxw().previousSlide()}),r._UZ(1,"span",9),r.YNc(2,g,2,0,"span",10),r.qZA()}if(2&e){const e=r.oxw();r.ekj("disabled",0===e.activeSlide&&e.noWrap),r.xp6(2),r.Q6J("ngIf",e.isBs4)}}function p(e,t){if(1&e){const e=r.EpF();r.TgZ(0,"a",12),r.NdJ("click",function(){return r.CHM(e),r.oxw().nextSlide()}),r._UZ(1,"span",13),r.TgZ(2,"span",11),r._uU(3,"Next"),r.qZA(),r.qZA()}if(2&e){const e=r.oxw();r.ekj("disabled",e.isLast(e.activeSlide)&&e.noWrap)}}"undefined"==typeof console||console;const v=function(e){return{display:e}},f=["*"];let x=(()=>{class e{constructor(){this.interval=5e3,this.noPause=!1,this.noWrap=!1,this.showIndicators=!0,this.pauseOnFocus=!1,this.indicatorsByChunk=!1,this.itemsPerSlide=1,this.singleSlideOffset=!1}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275prov=(0,r.Yz7)({factory:function(){return new e},token:e,providedIn:"root"}),e})();const S={UNKNOWN:0,NEXT:1,PREV:2};S[S.UNKNOWN]="UNKNOWN",S[S.NEXT]="NEXT",S[S.PREV]="PREV";let _=(()=>{class e{constructor(e,t){this.ngZone=t,this.indicatorsByChunk=!1,this.itemsPerSlide=1,this.singleSlideOffset=!1,this.isAnimated=!1,this.activeSlideChange=new r.vpe(!1),this.slideRangeChange=new r.vpe,this.startFromIndex=0,this._slides=new a,this._currentVisibleSlidesIndex=0,this.destroyed=!1,this.getActive=e=>e.active,this.makeSlidesConsistent=e=>{e.forEach((e,t)=>e.item.order=t)},Object.assign(this,e)}set activeSlide(e){this.multilist||this._slides.length&&e!==this._currentActiveSlide&&this._select(e)}get activeSlide(){return this._currentActiveSlide}get interval(){return this._interval}set interval(e){this._interval=e,this.restartTimer()}get slides(){return this._slides.toArray()}get isBs4(){return!(void 0===d||(void 0===d.__theme?(h||(h=function(){if("undefined"==typeof document)return null;const e=document.createElement("span");e.innerText="test bs version",document.body.appendChild(e),e.classList.add("d-none");const t=e.getBoundingClientRect();return document.body.removeChild(e),t&&0===t.top?"bs4":"bs3"}()),"bs3"===h):"bs4"!==d.__theme))}ngAfterViewInit(){setTimeout(()=>{this.singleSlideOffset&&(this.indicatorsByChunk=!1),this.multilist&&(this._chunkedSlides=function(e,t){const i=[],s=Math.ceil(e.length/t);let n=0;for(;n<s;){const r=e.splice(0,n===s-1&&t<e.length?e.length:t);i.push(r),n++}return i}(this.mapSlidesAndIndexes(),this.itemsPerSlide),this.selectInitialSlides())},0)}ngOnDestroy(){this.destroyed=!0}addSlide(e){this._slides.add(e),this.multilist&&this._slides.length<=this.itemsPerSlide&&(e.active=!0),!this.multilist&&this.isAnimated&&(e.isAnimated=!0),this.multilist||1!==this._slides.length||(this._currentActiveSlide=void 0,this.activeSlide=0,this.play()),this.multilist&&this._slides.length>this.itemsPerSlide&&this.play()}removeSlide(e){const t=this._slides.indexOf(e);if(this._currentActiveSlide===t){let e;this._slides.length>1&&(e=this.isLast(t)?this.noWrap?t-1:0:t),this._slides.remove(t),setTimeout(()=>{this._select(e)},0)}else{this._slides.remove(t);const e=this.getCurrentSlideIndex();setTimeout(()=>{this._currentActiveSlide=e,this.activeSlideChange.emit(this._currentActiveSlide)},0)}}nextSlideFromInterval(e=!1){this.move(S.NEXT,e)}nextSlide(e=!1){this.isPlaying&&this.restartTimer(),this.move(S.NEXT,e)}previousSlide(e=!1){this.isPlaying&&this.restartTimer(),this.move(S.PREV,e)}getFirstVisibleIndex(){return this.slides.findIndex(this.getActive)}getLastVisibleIndex(){return function(e,t){let i=e.length;for(;i--;)if(t(e[i],i,e))return i;return-1}(this.slides,this.getActive)}move(e,t=!1){const i=this.getFirstVisibleIndex(),s=this.getLastVisibleIndex();this.noWrap&&(e===S.NEXT&&this.isLast(s)||e===S.PREV&&0===i)||(this.multilist?this.moveMultilist(e):this.activeSlide=this.findNextSlideIndex(e,t))}keydownPress(e){if(13===e.keyCode||"Enter"===e.key||32===e.keyCode||"Space"===e.key)return this.nextSlide(),void e.preventDefault();37!==e.keyCode&&"LeftArrow"!==e.key?39!==e.keyCode&&"RightArrow"!==e.key||this.nextSlide():this.previousSlide()}onMouseLeave(){this.pauseOnFocus||this.play()}onMouseUp(){this.pauseOnFocus||this.play()}pauseFocusIn(){this.pauseOnFocus&&(this.isPlaying=!1,this.resetTimer())}pauseFocusOut(){this.play()}selectSlide(e){this.isPlaying&&this.restartTimer(),this.multilist?this.selectSlideRange(this.indicatorsByChunk?e*this.itemsPerSlide:e):this.activeSlide=this.indicatorsByChunk?e*this.itemsPerSlide:e}play(){this.isPlaying||(this.isPlaying=!0,this.restartTimer())}pause(){this.noPause||(this.isPlaying=!1,this.resetTimer())}getCurrentSlideIndex(){return this._slides.findIndex(this.getActive)}isLast(e){return e+1>=this._slides.length}isFirst(e){return 0===e}indicatorsSlides(){return this.slides.filter((e,t)=>!this.indicatorsByChunk||t%this.itemsPerSlide==0)}selectInitialSlides(){const e=this.startFromIndex<=this._slides.length?this.startFromIndex:0;if(this.hideSlides(),this.singleSlideOffset){if(this._slidesWithIndexes=this.mapSlidesAndIndexes(),this._slides.length-e<this.itemsPerSlide){const t=this._slidesWithIndexes.slice(0,e);this._slidesWithIndexes=[...this._slidesWithIndexes,...t].slice(t.length).slice(0,this.itemsPerSlide)}else this._slidesWithIndexes=this._slidesWithIndexes.slice(e,e+this.itemsPerSlide);this._slidesWithIndexes.forEach(e=>e.item.active=!0),this.makeSlidesConsistent(this._slidesWithIndexes)}else this.selectRangeByNestedIndex(e);this.slideRangeChange.emit(this.getVisibleIndexes())}findNextSlideIndex(e,t){let i=0;if(t||!this.isLast(this.activeSlide)||e===S.PREV||!this.noWrap){switch(e){case S.NEXT:i=this.isLast(this._currentActiveSlide)?!t&&this.noWrap?this._currentActiveSlide:0:this._currentActiveSlide+1;break;case S.PREV:i=this._currentActiveSlide>0?this._currentActiveSlide-1:!t&&this.noWrap?this._currentActiveSlide:this._slides.length-1;break;default:throw new Error("Unknown direction")}return i}}mapSlidesAndIndexes(){return this.slides.slice().map((e,t)=>({index:t,item:e}))}selectSlideRange(e){if(!this.isIndexInRange(e)){if(this.hideSlides(),this.singleSlideOffset){const t=this.isIndexOnTheEdges(e)?e:e-this.itemsPerSlide+1,i=this.isIndexOnTheEdges(e)?e+this.itemsPerSlide:e+1;this._slidesWithIndexes=this.mapSlidesAndIndexes().slice(t,i),this.makeSlidesConsistent(this._slidesWithIndexes),this._slidesWithIndexes.forEach(e=>e.item.active=!0)}else this.selectRangeByNestedIndex(e);this.slideRangeChange.emit(this.getVisibleIndexes())}}selectRangeByNestedIndex(e){const t=this._chunkedSlides.map((e,t)=>({index:t,list:e})).find(t=>void 0!==t.list.find(t=>t.index===e));this._currentVisibleSlidesIndex=t.index,this._chunkedSlides[t.index].forEach(e=>{e.item.active=!0})}isIndexOnTheEdges(e){return e+1-this.itemsPerSlide<=0||e+this.itemsPerSlide<=this._slides.length}isIndexInRange(e){return this.singleSlideOffset?this._slidesWithIndexes.map(e=>e.index).indexOf(e)>=0:e<=this.getLastVisibleIndex()&&e>=this.getFirstVisibleIndex()}hideSlides(){this.slides.forEach(e=>e.active=!1)}isVisibleSlideListLast(){return this._currentVisibleSlidesIndex===this._chunkedSlides.length-1}isVisibleSlideListFirst(){return 0===this._currentVisibleSlidesIndex}moveSliderByOneItem(e){let t,i,s,n;if(this.noWrap){t=this.getFirstVisibleIndex(),i=this.getLastVisibleIndex(),s=e===S.NEXT?t:i,n=e!==S.NEXT?t-1:this.isLast(i)?0:i+1,this._slides.get(s).active=!1,this._slides.get(n).active=!0;const r=this.mapSlidesAndIndexes().filter(e=>e.item.active);this.makeSlidesConsistent(r),this.slideRangeChange.emit(this.getVisibleIndexes())}else{let s;t=this._slidesWithIndexes[0].index,i=this._slidesWithIndexes[this._slidesWithIndexes.length-1].index,e===S.NEXT?(this._slidesWithIndexes.shift(),s=this.isLast(i)?0:i+1,this._slidesWithIndexes.push({index:s,item:this._slides.get(s)})):(this._slidesWithIndexes.pop(),s=this.isFirst(t)?this._slides.length-1:t-1,this._slidesWithIndexes=[{index:s,item:this._slides.get(s)},...this._slidesWithIndexes]),this.hideSlides(),this._slidesWithIndexes.forEach(e=>e.item.active=!0),this.makeSlidesConsistent(this._slidesWithIndexes),this.slideRangeChange.emit(this._slidesWithIndexes.map(e=>e.index))}}moveMultilist(e){this.singleSlideOffset?this.moveSliderByOneItem(e):(this.hideSlides(),this._currentVisibleSlidesIndex=this.noWrap?e===S.NEXT?this._currentVisibleSlidesIndex+1:this._currentVisibleSlidesIndex-1:e===S.NEXT?this.isVisibleSlideListLast()?0:this._currentVisibleSlidesIndex+1:this.isVisibleSlideListFirst()?this._chunkedSlides.length-1:this._currentVisibleSlidesIndex-1,this._chunkedSlides[this._currentVisibleSlidesIndex].forEach(e=>e.item.active=!0),this.slideRangeChange.emit(this.getVisibleIndexes()))}getVisibleIndexes(){return this.singleSlideOffset?this._slidesWithIndexes.map(e=>e.index):this._chunkedSlides[this._currentVisibleSlidesIndex].map(e=>e.index)}_select(e){if(isNaN(e))return void this.pause();if(!this.multilist){const e=this._slides.get(this._currentActiveSlide);e&&(e.active=!1)}const t=this._slides.get(e);t&&(this._currentActiveSlide=e,t.active=!0,this.activeSlide=e,this.activeSlideChange.emit(e))}restartTimer(){this.resetTimer();const e=+this.interval;!isNaN(e)&&e>0&&(this.currentInterval=this.ngZone.runOutsideAngular(()=>setInterval(()=>{const e=+this.interval;this.ngZone.run(()=>{this.isPlaying&&!isNaN(this.interval)&&e>0&&this.slides.length?this.nextSlideFromInterval():this.pause()})},e)))}get multilist(){return this.itemsPerSlide>1}resetTimer(){this.currentInterval&&(clearInterval(this.currentInterval),this.currentInterval=void 0)}}return e.\u0275fac=function(t){return new(t||e)(r.Y36(x),r.Y36(r.R0b))},e.\u0275cmp=r.Xpm({type:e,selectors:[["carousel"]],inputs:{indicatorsByChunk:"indicatorsByChunk",itemsPerSlide:"itemsPerSlide",singleSlideOffset:"singleSlideOffset",isAnimated:"isAnimated",startFromIndex:"startFromIndex",activeSlide:"activeSlide",interval:"interval",noWrap:"noWrap",noPause:"noPause",showIndicators:"showIndicators",pauseOnFocus:"pauseOnFocus"},outputs:{activeSlideChange:"activeSlideChange",slideRangeChange:"slideRangeChange"},ngContentSelectors:f,decls:6,vars:6,consts:[["tabindex","0",1,"carousel","slide",3,"mouseenter","mouseleave","mouseup","keydown","focusin","focusout"],["class","carousel-indicators",4,"ngIf"],[1,"carousel-inner",3,"ngStyle"],["class","left carousel-control carousel-control-prev","tabindex","0","role","button",3,"disabled","click",4,"ngIf"],["class","right carousel-control carousel-control-next","tabindex","0","role","button",3,"disabled","click",4,"ngIf"],[1,"carousel-indicators"],[3,"active","click",4,"ngFor","ngForOf"],[3,"click"],["tabindex","0","role","button",1,"left","carousel-control","carousel-control-prev",3,"click"],["aria-hidden","true",1,"icon-prev","carousel-control-prev-icon"],["class","sr-only",4,"ngIf"],[1,"sr-only"],["tabindex","0","role","button",1,"right","carousel-control","carousel-control-next",3,"click"],["aria-hidden","true",1,"icon-next","carousel-control-next-icon"]],template:function(e,t){1&e&&(r.F$t(),r.TgZ(0,"div",0),r.NdJ("mouseenter",function(){return t.pause()})("mouseleave",function(){return t.onMouseLeave()})("mouseup",function(){return t.onMouseUp()})("keydown",function(e){return t.keydownPress(e)})("focusin",function(){return t.pauseFocusIn()})("focusout",function(){return t.pauseFocusOut()}),r.YNc(1,u,2,1,"ol",1),r.TgZ(2,"div",2),r.Hsn(3),r.qZA(),r.YNc(4,m,3,3,"a",3),r.YNc(5,p,4,2,"a",4),r.qZA()),2&e&&(r.xp6(1),r.Q6J("ngIf",t.showIndicators&&t.slides.length>1),r.xp6(1),r.Q6J("ngStyle",r.VKq(4,v,t.multilist?"flex":"block")),r.xp6(2),r.Q6J("ngIf",t.slides.length>1),r.xp6(1),r.Q6J("ngIf",t.slides.length>1))},directives:[s.O5,s.PC,s.sg],encapsulation:2}),e})(),A=(()=>{class e{constructor(e){this.itemWidth="100%",this.order=0,this.addClass=!0,this.carousel=e}ngOnInit(){this.carousel.addSlide(this),this.itemWidth=100/this.carousel.itemsPerSlide+"%"}ngOnDestroy(){this.carousel.removeSlide(this)}}return e.\u0275fac=function(t){return new(t||e)(r.Y36(_))},e.\u0275cmp=r.Xpm({type:e,selectors:[["slide"]],hostVars:13,hostBindings:function(e,t){2&e&&(r.uIk("aria-hidden",!t.active),r.Udp("width",t.itemWidth)("order",t.order),r.ekj("item",t.addClass)("carousel-item",t.addClass)("active",t.active)("carousel-animation",t.isAnimated))},inputs:{active:"active"},ngContentSelectors:f,decls:2,vars:2,consts:[[1,"item"]],template:function(e,t){1&e&&(r.F$t(),r.TgZ(0,"div",0),r.Hsn(1),r.qZA()),2&e&&r.ekj("active",t.active)},styles:[".carousel-animation[_nghost-%COMP%] {\n       transition: opacity 0.6s ease, visibility 0.6s ease;\n       float: left;\n    }\n    .carousel-animation.active[_nghost-%COMP%] {\n      opacity: 1;\n      visibility: visible;\n    }\n    .carousel-animation[_nghost-%COMP%]:not(.active) {\n      display: block;\n      position: absolute;\n      opacity: 0;\n      visibility: hidden;\n    }"]}),e})(),Z=(()=>{class e{static forRoot(){return{ngModule:e,providers:[]}}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=r.oAB({type:e}),e.\u0275inj=r.cJS({imports:[[s.ez]]}),e})(),b=(()=>{class e{constructor(){}ngOnInit(){}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=r.Xpm({type:e,selectors:[["search-box"]],decls:65,vars:0,consts:[["id","search-bar",1,"container"],[1,"d-lg-flex","align-items-center"],[1,"d-sm-flex","align-items-center","flex-grow-1"],[1,"mb-3","pb-1","w-100","mb-sm-4","me-sm-3"],["for","from-destination",1,"form-label"],["id","from-destination",1,"form-control"],["value","","disabled","","hidden",""],["value","Abu Dhabi, UAE"],["for","to-destination",1,"form-label"],["id","to-destination",1,"form-control"],["value","","selected","","disabled","","hidden",""],["value","Amsterdam, NL"],["value","Berlin, GER"],["value","Brussels, BE"],["value","Buenos Aires, ARG"],["value","Canberra, AU"],[1,"form-label"],["value","Moscow, RU"],["value","Stockholm, SW"],[1,"text-center","text-sm-start","mt-2","mt-sm-4","mb-4"],["type","submit",1,"btn","btn-primary"]],template:function(e,t){1&e&&(r.TgZ(0,"div",0),r.TgZ(1,"div",1),r.TgZ(2,"div",2),r.TgZ(3,"div",3),r.TgZ(4,"label",4),r._uU(5,"Vehicle Type"),r.qZA(),r.TgZ(6,"select",5),r.TgZ(7,"option",6),r._uU(8,"Bike"),r.qZA(),r.TgZ(9,"option",7),r._uU(10,"Bike"),r.qZA(),r.TgZ(11,"option",7),r._uU(12,"Scooty"),r.qZA(),r.qZA(),r.qZA(),r.TgZ(13,"div",3),r.TgZ(14,"label",8),r._uU(15,"Vehicle Manufacturers"),r.qZA(),r.TgZ(16,"select",9),r.TgZ(17,"option",10),r._uU(18,"Honda"),r.qZA(),r.TgZ(19,"option",7),r._uU(20,"TVS"),r.qZA(),r.TgZ(21,"option",11),r._uU(22,"BAJAJ"),r.qZA(),r.TgZ(23,"option",12),r._uU(24,"HERO"),r.qZA(),r.TgZ(25,"option",13),r._uU(26,"YAMAHA"),r.qZA(),r.TgZ(27,"option",14),r._uU(28,"SUZUKI"),r.qZA(),r.TgZ(29,"option",15),r._uU(30,"KTM"),r.qZA(),r.qZA(),r.qZA(),r.qZA(),r.TgZ(31,"div",2),r.TgZ(32,"div",3),r.TgZ(33,"label",16),r._uU(34,"Modal Number"),r.qZA(),r.TgZ(35,"select",5),r.TgZ(36,"option",6),r._uU(37,"Upto 150cc"),r.qZA(),r.TgZ(38,"option",7),r._uU(39,"Upto 150cc"),r.qZA(),r.TgZ(40,"option",7),r._uU(41,"150cc - 250cc"),r.qZA(),r.TgZ(42,"option",7),r._uU(43,"251cc - 350cc"),r.qZA(),r.TgZ(44,"option",7),r._uU(45,"Above 350cc"),r.qZA(),r.qZA(),r.qZA(),r.TgZ(46,"div",3),r.TgZ(47,"label",16),r._uU(48,"City"),r.qZA(),r.TgZ(49,"select",5),r.TgZ(50,"option",6),r._uU(51,"From where?"),r.qZA(),r.TgZ(52,"option",7),r._uU(53,"Noida"),r.qZA(),r.TgZ(54,"option",11),r._uU(55,"Delhi"),r.qZA(),r.TgZ(56,"option",12),r._uU(57,"Gaziabad"),r.qZA(),r.TgZ(58,"option",17),r._uU(59,"Ranikhet"),r.qZA(),r.TgZ(60,"option",18),r._uU(61,"Almora"),r.qZA(),r.qZA(),r.qZA(),r.TgZ(62,"div",19),r.TgZ(63,"button",20),r._uU(64,"Book"),r.qZA(),r.qZA(),r.qZA(),r.qZA(),r.qZA())},styles:["[_nghost-%COMP%]  #search-bar{padding:1rem;border-radius:1rem;--bs-bg-opacity:1;background-color:#f7f7fc!important;border:1px solid #e9e9f2!important;margin-top:-60px;z-index:5;position:relative}"]}),e})();function I(e,t){if(1&e&&(r.TgZ(0,"slide"),r._UZ(1,"div",2),r._UZ(2,"img",3),r.TgZ(3,"div",4),r.TgZ(4,"h3"),r._uU(5),r.qZA(),r.TgZ(6,"p"),r._uU(7),r.qZA(),r.qZA(),r.qZA()),2&e){const e=t.$implicit;r.xp6(2),r.Q6J("src",e.imageUrl,r.LSH)("alt",e.imageAltText),r.xp6(3),r.Oqu(e.headingText),r.xp6(2),r.Oqu(e.subHeadingText)}}const y=[{path:"",component:(()=>{class e{constructor(e){this.seoService=e,this.slides=[{imageUrl:"assets/img/banner-1.jpg",imageAltText:"first slide",headingText:"Your Doorstep Bike Service Expert",subHeadingText:"Get instant access to reliable and affordable services at your door step."},{imageUrl:"assets/img/banner-2.jpg",imageAltText:"second slide",headingText:"Convenient and hassle-free appointments",subHeadingText:"24 X 7 Convenient Online Booking"},{imageUrl:"assets/img/banner-3.png",imageAltText:"third slide",headingText:"Pick-up & Drop Facility",subHeadingText:"Your convenience is our motto, we will pick your bike and deliver at your doorstep, spend that extra time with your loved ones."}]}ngOnInit(){this.seoService.setPageSEODetails("Doorstep Bike Service Expert in Noida | Scooty bike Mechanic on call near your Sector Noida",[{name:"description",content:"Home page NECA"},{name:"author",content:"yogendra"},{name:"keywords",content:"NECA, Ministry of Power"}])}}return e.\u0275fac=function(t){return new(t||e)(r.Y36(o))},e.\u0275cmp=r.Xpm({type:e,selectors:[["app-home"]],decls:3,vars:2,consts:[[3,"isAnimated"],[4,"ngFor","ngForOf"],[1,"overlay"],[3,"src","alt"],[1,"carousel-caption","d-none","d-md-block"]],template:function(e,t){1&e&&(r.TgZ(0,"carousel",0),r.YNc(1,I,8,4,"slide",1),r.qZA(),r._UZ(2,"search-box")),2&e&&(r.Q6J("isAnimated",!0),r.xp6(1),r.Q6J("ngForOf",t.slides))},directives:[_,s.sg,b,A],styles:["[_nghost-%COMP%]  slide img{display:block;width:100%}[_nghost-%COMP%]  slide .overlay{position:absolute;width:100%;height:100%;z-index:2;background-color:#080d15;opacity:.7}[_nghost-%COMP%]  slide .carousel-caption{bottom:5rem;z-index:5}[_nghost-%COMP%]  slide .carousel-caption h3{font-size:2.5rem}[_nghost-%COMP%]  slide .carousel-caption p{font-size:2rem}[_nghost-%COMP%]  .carousel-control{display:none}"]}),e})()}];let T=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=r.oAB({type:e}),e.\u0275inj=r.cJS({imports:[[n.Bz.forChild(y)],n.Bz]}),e})(),k=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=r.oAB({type:e}),e.\u0275inj=r.cJS({}),e})(),C=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=r.oAB({type:e}),e.\u0275inj=r.cJS({imports:[[s.ez,T,Z.forRoot(),k]]}),e})()}}]);