(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\jkkru\Documents\Projects\DuckHunt\duck-hunt\src\main.ts */"zUnb");


/***/ }),

/***/ "0YYV":
/*!**********************************************************!*\
  !*** ./src/app/components/info/panel/panel.component.ts ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return PanelComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _timer_timer_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../timer/timer.component */ "5MqW");
/* harmony import */ var _hit_hit_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../hit/hit.component */ "rhrC");
/* harmony import */ var _round_round_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../round/round.component */ "CAhB");
/* harmony import */ var _shots_shots_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shots/shots.component */ "oIQJ");
/* harmony import */ var _score_score_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../score/score.component */ "PFKI");







function PanelComponent_timer_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "timer", 7);
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("timer", ctx_r0.timer);
} }
function PanelComponent_hit_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "hit", 8);
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ducks", ctx_r1.ducks);
} }
function PanelComponent_round_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "round", 9);
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("round", ctx_r2.round);
} }
function PanelComponent_shots_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "shots", 10);
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("shots", ctx_r3.bullets);
} }
function PanelComponent_score_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "score", 11);
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("score", ctx_r4.score);
} }
class PanelComponent {
}
PanelComponent.ɵfac = function PanelComponent_Factory(t) { return new (t || PanelComponent)(); };
PanelComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PanelComponent, selectors: [["panel"]], inputs: { bullets: "bullets", ducks: "ducks", score: "score", round: "round", timer: "timer", show: "show" }, decls: 7, vars: 5, consts: [[1, "panel"], [1, "panel-info"], [3, "timer", 4, "ngIf"], [3, "ducks", 4, "ngIf"], [3, "round", 4, "ngIf"], [3, "shots", 4, "ngIf"], [3, "score", 4, "ngIf"], [3, "timer"], [3, "ducks"], [3, "round"], [3, "shots"], [3, "score"]], template: function PanelComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, PanelComponent_timer_2_Template, 1, 1, "timer", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, PanelComponent_hit_3_Template, 1, 1, "hit", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, PanelComponent_round_4_Template, 1, 1, "round", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, PanelComponent_shots_5_Template, 1, 1, "shots", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, PanelComponent_score_6_Template, 1, 1, "score", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.show);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.show);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.show);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.show);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.show);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _timer_timer_component__WEBPACK_IMPORTED_MODULE_2__["default"], _hit_hit_component__WEBPACK_IMPORTED_MODULE_3__["default"], _round_round_component__WEBPACK_IMPORTED_MODULE_4__["default"], _shots_shots_component__WEBPACK_IMPORTED_MODULE_5__["default"], _score_score_component__WEBPACK_IMPORTED_MODULE_6__["default"]], styles: [".panel[_ngcontent-%COMP%] {\n  width: 100vw;\n  height: 30vh;\n  background-image: url('grass.png');\n  background-position-x: 200px;\n  background-size: auto 100%;\n  background-repeat: repeat;\n  position: absolute;\n  bottom: 0;\n}\n\n.panel-info[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 2fr 3fr 2fr;\n  grid-template-rows: 1fr 1fr;\n  justify-items: center;\n  align-items: end;\n  position: absolute;\n  bottom: 10px;\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxccGFuZWwuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGtDQUFBO0VBQ0EsNEJBQUE7RUFDQSwwQkFBQTtFQUNBLHlCQUFBO0VBRUEsa0JBQUE7RUFDQSxTQUFBO0FBQUY7O0FBR0E7RUFDRSxhQUFBO0VBQ0Esa0NBQUE7RUFDQSwyQkFBQTtFQUVBLHFCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FBREYiLCJmaWxlIjoicGFuZWwuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucGFuZWwge1xyXG4gIHdpZHRoOiAxMDB2dztcclxuICBoZWlnaHQ6IDMwdmg7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uLy4uLy4uLy4uL2Fzc2V0cy9ncmFzcy9ncmFzcy5wbmcpO1xyXG4gIGJhY2tncm91bmQtcG9zaXRpb24teDogMjAwcHg7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBhdXRvIDEwMCU7XHJcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IHJlcGVhdDtcclxuXHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGJvdHRvbTogMDtcclxufVxyXG5cclxuLnBhbmVsLWluZm8ge1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyZnIgM2ZyIDJmcjtcclxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAxZnI7XHJcblxyXG4gIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogZW5kO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBib3R0b206IDEwcHg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn0iXX0= */"] });


/***/ }),

/***/ "15x1":
/*!******************************************!*\
  !*** ./src/app/shared/pipes/pad.pipe.ts ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return PadPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class PadPipe {
    transform(value, length = 6) {
        const valueStr = value > 0 ? String(value) : "";
        return valueStr.padStart(length, "0");
    }
}
PadPipe.ɵfac = function PadPipe_Factory(t) { return new (t || PadPipe)(); };
PadPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "pad", type: PadPipe, pure: true });


/***/ }),

/***/ "3Rhj":
/*!************************************************!*\
  !*** ./src/app/components/game/game.module.ts ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return GameModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _info_info_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../info/info.module */ "Htfa");
/* harmony import */ var _target_target_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../target/target.module */ "aXXB");
/* harmony import */ var _game_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./game.component */ "opiA");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");





class GameModule {
}
GameModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: GameModule });
GameModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ factory: function GameModule_Factory(t) { return new (t || GameModule)(); }, imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _info_info_module__WEBPACK_IMPORTED_MODULE_1__["default"],
            _target_target_module__WEBPACK_IMPORTED_MODULE_2__["default"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](GameModule, { declarations: [_game_component__WEBPACK_IMPORTED_MODULE_3__["default"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _info_info_module__WEBPACK_IMPORTED_MODULE_1__["default"],
        _target_target_module__WEBPACK_IMPORTED_MODULE_2__["default"]], exports: [_game_component__WEBPACK_IMPORTED_MODULE_3__["default"]] }); })();


/***/ }),

/***/ "4dOs":
/*!********************************************************!*\
  !*** ./src/app/components/info/menu/menu.component.ts ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MenuComponent; });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ "R0Ic");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");



const _c0 = function (a0) { return { value: a0 }; };
class MenuComponent {
    constructor() {
        this.selected = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    setLevel(l) {
        this.level = l;
    }
    emitLevel() {
        this.selected.emit(this.level);
    }
}
MenuComponent.ɵfac = function MenuComponent_Factory(t) { return new (t || MenuComponent)(); };
MenuComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: MenuComponent, selectors: [["menu"]], outputs: { selected: "selected" }, decls: 12, vars: 3, consts: [[1, "menu"], [1, "title"], [1, "subtitle"], [1, "levels"], [1, "option", 3, "click"]], template: function MenuComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("@level.done", function MenuComponent_Template_div_animation_level_done_0_listener() { return ctx.emitLevel(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "DUCK HUNT");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "ANGULAR");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "ul", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "li", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MenuComponent_Template_li_click_6_listener() { return ctx.setLevel(0); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "EASY");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "li", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MenuComponent_Template_li_click_8_listener() { return ctx.setLevel(1); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "MEDIUM");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "li", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MenuComponent_Template_li_click_10_listener() { return ctx.setLevel(2); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "HARD");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("@level", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](1, _c0, ctx.level));
    } }, styles: ["@import url(\"https://fonts.googleapis.com/css2?family=Chango&family=Press+Start+2P&display=swap\");\n@import url(\"https://fonts.googleapis.com/css2?family=Chango&family=Press+Start+2P&display=swap\");\n[_nghost-%COMP%] {\n  margin-block-start: 0;\n  margin-block-end: 0;\n  margin-inline-start: 0;\n  margin-inline-end: 0;\n  padding-inline-start: 0;\n}\n.menu[_ngcontent-%COMP%] {\n  width: 60%;\n  padding: 2% 5%;\n  margin: 30px 15% 0;\n  background-color: rgba(0, 142, 255, 0.4);\n  color: white;\n  border: 3px solid white;\n  border-radius: 30px;\n  font-family: \"Chango\", cursive;\n  color: white;\n  text-align: center;\n  -webkit-user-select: none;\n          user-select: none;\n}\n.title[_ngcontent-%COMP%] {\n  font-size: 100px;\n}\n.subtitle[_ngcontent-%COMP%] {\n  font-size: 60px;\n}\n.levels[_ngcontent-%COMP%] {\n  font-size: 30px;\n  list-style-type: none;\n  padding: 0;\n  margin: 20px 0 0 0;\n}\n@media (max-width: 640px) {\n  .title[_ngcontent-%COMP%] {\n    font-size: 60px;\n  }\n\n  .subtitle[_ngcontent-%COMP%] {\n    font-size: 30px;\n  }\n\n  .levels[_ngcontent-%COMP%] {\n    font-size: 20px;\n  }\n}\n.option[_ngcontent-%COMP%]:hover::before {\n  content: \">> \";\n}\n.option[_ngcontent-%COMP%]:hover::after {\n  content: \" <<\";\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcc3R5bGVzXFxmb250cy5zY3NzIiwiLi5cXC4uXFwuLlxcLi5cXC4uXFxtZW51LmNvbXBvbmVudC5zY3NzIiwiLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxzdHlsZXNcXG1peGlucy5zY3NzIiwiLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxzdHlsZXNcXGNvbG9ycy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFRLGlHQUFBO0FBQUEsaUdBQUE7QUNJUjtFQUNFLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtFQUNBLG9CQUFBO0VBQ0EsdUJBQUE7QUFERjtBQUlBO0VBQ0UsVUFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQ1hBLHdDQUFBO0VBQ0EsWUNMTTtFRE1OLHVCQUFBO0VBQ0EsbUJEVW1DO0VBRW5DLDhCRGhCVTtFQ2lCVixZRXBCTTtFRnFCTixrQkFBQTtFQUVBLHlCQUFBO1VBQUEsaUJBQUE7QUFERjtBQUlBO0VBQ0UsZ0JBQUE7QUFERjtBQUlBO0VBQ0UsZUFBQTtBQURGO0FBSUE7RUFDRSxlQUFBO0VBQ0EscUJBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7QUFERjtBQUlBO0VBQ0U7SUFDRSxlQUFBO0VBREY7O0VBSUE7SUFDRSxlQUFBO0VBREY7O0VBSUE7SUFDRSxlQUFBO0VBREY7QUFDRjtBQUlBO0VBQ0UsY0FBQTtBQUZGO0FBS0E7RUFDRSxjQUFBO0FBRkYiLCJmaWxlIjoibWVudS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUNoYW5nbyZmYW1pbHk9UHJlc3MrU3RhcnQrMlAmZGlzcGxheT1zd2FwJyk7XHJcblxyXG4kaW5mby1mb250OiAnUHJlc3MgU3RhcnQgMlAnLCBjdXJzaXZlO1xyXG4kbWVudS1mb250OiAnQ2hhbmdvJywgY3Vyc2l2ZTsiLCJAaW1wb3J0ICcuLi8uLi8uLi9zdHlsZXMvZm9udHMuc2Nzcyc7XHJcbkBpbXBvcnQgJy4uLy4uLy4uL3N0eWxlcy9jb2xvcnMuc2Nzcyc7XHJcbkBpbXBvcnQgJy4uLy4uLy4uL3N0eWxlcy9taXhpbnMuc2Nzcyc7XHJcblxyXG46aG9zdCB7XHJcbiAgbWFyZ2luLWJsb2NrLXN0YXJ0OiAwO1xyXG4gIG1hcmdpbi1ibG9jay1lbmQ6IDA7XHJcbiAgbWFyZ2luLWlubGluZS1zdGFydDogMDtcclxuICBtYXJnaW4taW5saW5lLWVuZDogMDtcclxuICBwYWRkaW5nLWlubGluZS1zdGFydDogMDtcclxufVxyXG5cclxuLm1lbnUge1xyXG4gIHdpZHRoOiA2MCU7XHJcbiAgcGFkZGluZzogMiUgNSU7XHJcbiAgbWFyZ2luOiAzMHB4IDE1JSAwO1xyXG4gIFxyXG4gIEBpbmNsdWRlIGJveCgkYmx1ZS1kYXJrZW4sICR3aGl0ZSwgMzBweCk7XHJcblxyXG4gIGZvbnQtZmFtaWx5OiAkbWVudS1mb250O1xyXG4gIGNvbG9yOiAkd2hpdGU7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG5cclxuICB1c2VyLXNlbGVjdDogbm9uZTtcclxufVxyXG5cclxuLnRpdGxlIHtcclxuICBmb250LXNpemU6IDEwMHB4O1xyXG59XHJcblxyXG4uc3VidGl0bGUge1xyXG4gIGZvbnQtc2l6ZTogNjBweDtcclxufVxyXG5cclxuLmxldmVscyB7XHJcbiAgZm9udC1zaXplOiAzMHB4O1xyXG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcclxuICBwYWRkaW5nOiAwO1xyXG4gIG1hcmdpbjogMjBweCAwIDAgMDtcclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDY0MHB4KSB7XHJcbiAgLnRpdGxlIHtcclxuICAgIGZvbnQtc2l6ZTogNjBweDtcclxuICB9IFxyXG4gIFxyXG4gIC5zdWJ0aXRsZSB7XHJcbiAgICBmb250LXNpemU6IDMwcHg7XHJcbiAgfVxyXG5cclxuICAubGV2ZWxzIHtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICB9XHJcbn1cclxuXHJcbi5vcHRpb246aG92ZXI6OmJlZm9yZSB7XHJcbiAgY29udGVudDogJz4+ICc7XHJcbn1cclxuXHJcbi5vcHRpb246aG92ZXI6OmFmdGVyIHtcclxuICBjb250ZW50OiAnIDw8JztcclxufSIsIkBpbXBvcnQgXCIuL2NvbG9ycy5zY3NzXCI7XHJcbkBpbXBvcnQgXCIuL2ZvbnRzLnNjc3NcIjtcclxuXHJcbkBtaXhpbiBib3goJGJhY2tncm91bmQtY29sb3IsICRib3JkZXItY29sb3IsICRyYWRpdXMpIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkYmFja2dyb3VuZC1jb2xvcjtcclxuICBjb2xvcjogJHdoaXRlO1xyXG4gIGJvcmRlcjogM3B4IHNvbGlkICRib3JkZXItY29sb3I7XHJcbiAgYm9yZGVyLXJhZGl1czogJHJhZGl1cztcclxufVxyXG5cclxuQG1peGluIGluZm8oKSB7XHJcbiAgZm9udC1zaXplOiAxOHB4O1xyXG4gIHBhZGRpbmc6IDVweDtcclxuICBtYXJnaW46IDNweDtcclxuXHJcbiAgZm9udC1mYW1pbHk6ICRpbmZvLWZvbnQ7XHJcblxyXG4gIHVzZXItc2VsZWN0OiBub25lO1xyXG4gIFxyXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA2MDBweCkge1xyXG4gICAgZm9udC1zaXplOiAxMnB4OyAgICBcclxuICB9XHJcbn1cclxuXHJcbkBtaXhpbiBsZWZ0LWFsaWduIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XHJcbiAgZ2FwOiAycHg7XHJcbn1cclxuXHJcbkBtaXhpbiByaWdodC1hbGlnbiB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcclxuICBnYXA6IDJweDtcclxufVxyXG5cclxuQG1peGluIGltYWdlIHtcclxuICBoZWlnaHQ6IDE4cHg7XHJcbiAgbWFyZ2luOiAwIDJweDtcclxuXHJcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDYwMHB4KSB7XHJcbiAgICBoZWlnaHQ6IDEycHg7ICAgIFxyXG4gIH1cclxufSIsIiR3aGl0ZTogd2hpdGU7XHJcbiRibGFjazogYmxhY2s7XHJcbiRncmVlbjogIzg5YWMyNTtcclxuJGJsdWU6ICMyZWIyZmU7XHJcbiRibHVlLWRhcmtlbjogcmdiKDAsIDE0MiwgMjU1LCAwLjQpO1xyXG4kc2t5Ymx1ZTogIzk2ZDlmZjtcclxuJHNreXBpbms6ICNmZmJlYjU7Il19 */"], data: { animation: [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('level', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('0,1,2', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 0 })),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(`* => *`, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('1s')),
            ])] } });


/***/ }),

/***/ "5MqW":
/*!**********************************************************!*\
  !*** ./src/app/components/info/timer/timer.component.ts ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return TimerComponent; });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ "R0Ic");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _shared_pipes_pad_pipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/pipes/pad.pipe */ "15x1");



const _c0 = function () { return {}; };
class TimerComponent {
}
TimerComponent.ɵfac = function TimerComponent_Factory(t) { return new (t || TimerComponent)(); };
TimerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: TimerComponent, selectors: [["timer"]], inputs: { timer: "timer" }, decls: 3, vars: 6, consts: [[1, "info"]], template: function TimerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "pad");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("@show", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](5, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" T=", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](2, 2, ctx.timer, 2), "\n");
    } }, pipes: [_shared_pipes_pad_pipe__WEBPACK_IMPORTED_MODULE_2__["default"]], styles: ["@import url(\"https://fonts.googleapis.com/css2?family=Chango&family=Press+Start+2P&display=swap\");\n.info[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  gap: 2px;\n  background-color: black;\n  color: white;\n  border: 3px solid #89ac25;\n  border-radius: 8px;\n  font-size: 18px;\n  padding: 5px;\n  margin: 3px;\n  font-family: \"Press Start 2P\", cursive;\n  -webkit-user-select: none;\n          user-select: none;\n}\n@media (max-width: 600px) {\n  .info[_ngcontent-%COMP%] {\n    font-size: 12px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcc3R5bGVzXFxmb250cy5zY3NzIiwiLi5cXC4uXFwuLlxcLi5cXC4uXFx0aW1lci5jb21wb25lbnQuc2NzcyIsIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcc3R5bGVzXFxtaXhpbnMuc2NzcyIsIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcc3R5bGVzXFxjb2xvcnMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBUSxpR0FBQTtBQ0dSO0VDc0JFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EsUUFBQTtFQXhCQSx1QkNITTtFRElOLFlDTE07RURNTix5QkFBQTtFQUNBLGtCREY2QjtFQ003QixlQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFFQSxzQ0ZiVTtFRWVWLHlCQUFBO1VBQUEsaUJBQUE7QURGRjtBQ0lFO0VEaEJGO0lDaUJJLGVBQUE7RURERjtBQUNGIiwiZmlsZSI6InRpbWVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9Q2hhbmdvJmZhbWlseT1QcmVzcytTdGFydCsyUCZkaXNwbGF5PXN3YXAnKTtcclxuXHJcbiRpbmZvLWZvbnQ6ICdQcmVzcyBTdGFydCAyUCcsIGN1cnNpdmU7XHJcbiRtZW51LWZvbnQ6ICdDaGFuZ28nLCBjdXJzaXZlOyIsIkBpbXBvcnQgJy4uLy4uLy4uL3N0eWxlcy9taXhpbnMuc2Nzcyc7XHJcbkBpbXBvcnQgJy4uLy4uLy4uL3N0eWxlcy9jb2xvcnMuc2Nzcyc7XHJcblxyXG4uaW5mbyB7XHJcbiAgQGluY2x1ZGUgbGVmdC1hbGlnbigpO1xyXG4gIEBpbmNsdWRlIGJveCgkYmxhY2ssICRncmVlbiwgOHB4KTtcclxuICBAaW5jbHVkZSBpbmZvKCk7XHJcbn0iLCJAaW1wb3J0IFwiLi9jb2xvcnMuc2Nzc1wiO1xyXG5AaW1wb3J0IFwiLi9mb250cy5zY3NzXCI7XHJcblxyXG5AbWl4aW4gYm94KCRiYWNrZ3JvdW5kLWNvbG9yLCAkYm9yZGVyLWNvbG9yLCAkcmFkaXVzKSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJGJhY2tncm91bmQtY29sb3I7XHJcbiAgY29sb3I6ICR3aGl0ZTtcclxuICBib3JkZXI6IDNweCBzb2xpZCAkYm9yZGVyLWNvbG9yO1xyXG4gIGJvcmRlci1yYWRpdXM6ICRyYWRpdXM7XHJcbn1cclxuXHJcbkBtaXhpbiBpbmZvKCkge1xyXG4gIGZvbnQtc2l6ZTogMThweDtcclxuICBwYWRkaW5nOiA1cHg7XHJcbiAgbWFyZ2luOiAzcHg7XHJcblxyXG4gIGZvbnQtZmFtaWx5OiAkaW5mby1mb250O1xyXG5cclxuICB1c2VyLXNlbGVjdDogbm9uZTtcclxuICBcclxuICBAbWVkaWEgKG1heC13aWR0aDogNjAwcHgpIHtcclxuICAgIGZvbnQtc2l6ZTogMTJweDsgICAgXHJcbiAgfVxyXG59XHJcblxyXG5AbWl4aW4gbGVmdC1hbGlnbiB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xyXG4gIGdhcDogMnB4O1xyXG59XHJcblxyXG5AbWl4aW4gcmlnaHQtYWxpZ24ge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XHJcbiAgZ2FwOiAycHg7XHJcbn1cclxuXHJcbkBtaXhpbiBpbWFnZSB7XHJcbiAgaGVpZ2h0OiAxOHB4O1xyXG4gIG1hcmdpbjogMCAycHg7XHJcblxyXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA2MDBweCkge1xyXG4gICAgaGVpZ2h0OiAxMnB4OyAgICBcclxuICB9XHJcbn0iLCIkd2hpdGU6IHdoaXRlO1xyXG4kYmxhY2s6IGJsYWNrO1xyXG4kZ3JlZW46ICM4OWFjMjU7XHJcbiRibHVlOiAjMmViMmZlO1xyXG4kYmx1ZS1kYXJrZW46IHJnYigwLCAxNDIsIDI1NSwgMC40KTtcclxuJHNreWJsdWU6ICM5NmQ5ZmY7XHJcbiRza3lwaW5rOiAjZmZiZWI1OyJdfQ== */"], data: { animation: [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('show', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('void', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 0 })),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(`* => *`, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('1s')),
            ])] } });


/***/ }),

/***/ "5uB6":
/*!***************************************!*\
  !*** ./src/app/utils/communicator.ts ***!
  \***************************************/
/*! exports provided: Communicator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Communicator", function() { return Communicator; });
class Communicator {
    constructor(_subject) {
        this._subject = _subject;
    }
    get messanger() {
        return this._subject;
    }
    disconnect() {
        this._subscription.unsubscribe();
    }
}


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "CAhB":
/*!**********************************************************!*\
  !*** ./src/app/components/info/round/round.component.ts ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return RoundComponent; });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ "R0Ic");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _shared_pipes_pad_pipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/pipes/pad.pipe */ "15x1");



const _c0 = function () { return {}; };
class RoundComponent {
}
RoundComponent.ɵfac = function RoundComponent_Factory(t) { return new (t || RoundComponent)(); };
RoundComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: RoundComponent, selectors: [["round"]], inputs: { round: "round" }, decls: 3, vars: 6, consts: [[1, "info"]], template: function RoundComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "pad");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("@show", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](5, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" R=", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](2, 2, ctx.round, 2), "\n");
    } }, pipes: [_shared_pipes_pad_pipe__WEBPACK_IMPORTED_MODULE_2__["default"]], styles: ["@import url(\"https://fonts.googleapis.com/css2?family=Chango&family=Press+Start+2P&display=swap\");\n.info[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-end;\n  gap: 2px;\n  background-color: black;\n  color: white;\n  border: 3px solid #89ac25;\n  border-radius: 8px;\n  font-size: 18px;\n  padding: 5px;\n  margin: 3px;\n  font-family: \"Press Start 2P\", cursive;\n  -webkit-user-select: none;\n          user-select: none;\n}\n@media (max-width: 600px) {\n  .info[_ngcontent-%COMP%] {\n    font-size: 12px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcc3R5bGVzXFxmb250cy5zY3NzIiwiLi5cXC4uXFwuLlxcLi5cXC4uXFxyb3VuZC5jb21wb25lbnQuc2NzcyIsIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcc3R5bGVzXFxtaXhpbnMuc2NzcyIsIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcc3R5bGVzXFxjb2xvcnMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBUSxpR0FBQTtBQ0dSO0VDNkJFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHFCQUFBO0VBQ0EsUUFBQTtFQS9CQSx1QkNITTtFRElOLFlDTE07RURNTix5QkFBQTtFQUNBLGtCREY2QjtFQ003QixlQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFFQSxzQ0ZiVTtFRWVWLHlCQUFBO1VBQUEsaUJBQUE7QURGRjtBQ0lFO0VEaEJGO0lDaUJJLGVBQUE7RURERjtBQUNGIiwiZmlsZSI6InJvdW5kLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9Q2hhbmdvJmZhbWlseT1QcmVzcytTdGFydCsyUCZkaXNwbGF5PXN3YXAnKTtcclxuXHJcbiRpbmZvLWZvbnQ6ICdQcmVzcyBTdGFydCAyUCcsIGN1cnNpdmU7XHJcbiRtZW51LWZvbnQ6ICdDaGFuZ28nLCBjdXJzaXZlOyIsIkBpbXBvcnQgJy4uLy4uLy4uL3N0eWxlcy9taXhpbnMuc2Nzcyc7XHJcbkBpbXBvcnQgJy4uLy4uLy4uL3N0eWxlcy9jb2xvcnMuc2Nzcyc7XHJcblxyXG4uaW5mbyB7XHJcbiAgQGluY2x1ZGUgcmlnaHQtYWxpZ24oKTtcclxuICBAaW5jbHVkZSBib3goJGJsYWNrLCAkZ3JlZW4sIDhweCk7XHJcbiAgQGluY2x1ZGUgaW5mbygpO1xyXG59IiwiQGltcG9ydCBcIi4vY29sb3JzLnNjc3NcIjtcclxuQGltcG9ydCBcIi4vZm9udHMuc2Nzc1wiO1xyXG5cclxuQG1peGluIGJveCgkYmFja2dyb3VuZC1jb2xvciwgJGJvcmRlci1jb2xvciwgJHJhZGl1cykge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICRiYWNrZ3JvdW5kLWNvbG9yO1xyXG4gIGNvbG9yOiAkd2hpdGU7XHJcbiAgYm9yZGVyOiAzcHggc29saWQgJGJvcmRlci1jb2xvcjtcclxuICBib3JkZXItcmFkaXVzOiAkcmFkaXVzO1xyXG59XHJcblxyXG5AbWl4aW4gaW5mbygpIHtcclxuICBmb250LXNpemU6IDE4cHg7XHJcbiAgcGFkZGluZzogNXB4O1xyXG4gIG1hcmdpbjogM3B4O1xyXG5cclxuICBmb250LWZhbWlseTogJGluZm8tZm9udDtcclxuXHJcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgXHJcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDYwMHB4KSB7XHJcbiAgICBmb250LXNpemU6IDEycHg7ICAgIFxyXG4gIH1cclxufVxyXG5cclxuQG1peGluIGxlZnQtYWxpZ24ge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcclxuICBnYXA6IDJweDtcclxufVxyXG5cclxuQG1peGluIHJpZ2h0LWFsaWduIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xyXG4gIGdhcDogMnB4O1xyXG59XHJcblxyXG5AbWl4aW4gaW1hZ2Uge1xyXG4gIGhlaWdodDogMThweDtcclxuICBtYXJnaW46IDAgMnB4O1xyXG5cclxuICBAbWVkaWEgKG1heC13aWR0aDogNjAwcHgpIHtcclxuICAgIGhlaWdodDogMTJweDsgICAgXHJcbiAgfVxyXG59IiwiJHdoaXRlOiB3aGl0ZTtcclxuJGJsYWNrOiBibGFjaztcclxuJGdyZWVuOiAjODlhYzI1O1xyXG4kYmx1ZTogIzJlYjJmZTtcclxuJGJsdWUtZGFya2VuOiByZ2IoMCwgMTQyLCAyNTUsIDAuNCk7XHJcbiRza3libHVlOiAjOTZkOWZmO1xyXG4kc2t5cGluazogI2ZmYmViNTsiXX0= */"], data: { animation: [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('show', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('void', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 0 })),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(`* => *`, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('1s')),
            ])] } });


/***/ }),

/***/ "EFpa":
/*!**********************************************************!*\
  !*** ./src/app/components/target/duck/duck.component.ts ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return DuckComponent; });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ "R0Ic");
/* harmony import */ var _target_target_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../target/target.component */ "STTt");
/* harmony import */ var _duck_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./duck.config */ "qgLc");
/* harmony import */ var _shared_models_message__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/models/message */ "S7Lt");
/* harmony import */ var _duck_communicator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./duck.communicator */ "wfIu");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");







function DuckComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r0.config.points);
} }
const _c0 = function (a0, a1, a2) { return { X: a0, Y: a1, time: a2 }; };
const _c1 = function (a0, a1) { return { value: a0, params: a1 }; };
class DuckComponent extends _target_target_component__WEBPACK_IMPORTED_MODULE_1__["default"] {
    constructor() {
        super(...arguments);
        this.duckState = "DUCK_FlyHorizontally" /* FlyHorizontally */;
        this.config = _duck_config__WEBPACK_IMPORTED_MODULE_2__["default"];
    }
    ngOnInit() {
        super.ngOnInit();
        [this.nextPoint] = this.calculateWallPosition();
        this.communicator = new _duck_communicator__WEBPACK_IMPORTED_MODULE_4__["DuckCommunicator"](this.messanger, this.id);
        this.communicator.handleMessanger(this._messangerHandler.bind(this));
    }
    ngOnDestroy() {
        this.communicator.disconnect();
    }
    getDuckState(param) {
        switch (this.duckState) {
            case "DUCK_FlyHorizontally" /* FlyHorizontally */:
                this.setDuckState("DUCK_FlyVertically" /* FlyVertically */);
                break;
            case "DUCK_FlyVertically" /* FlyVertically */:
                this.setDuckState("DUCK_FlyHorizontally" /* FlyHorizontally */);
                break;
            case "DUCK_Shot" /* Shot */:
                setTimeout(() => this.setDuckState("DUCK_Fall" /* Fall */), 1000);
                this.communicator.killMe({ points: this.config.points });
                break;
            case "DUCK_Fall" /* Fall */:
                setTimeout(() => this.setDuckState("DUCK_Dead" /* Dead */));
                break;
            case "DUCK_Dead" /* Dead */:
                if ("DUCK_Dead" /* Dead */ !== param.toState)
                    break;
                this.communicator.deleteMe({});
                break;
            case "DUCK_Flee" /* Flee */:
                if (param.toState === 'void')
                    break;
                if ("DUCK_Flee" /* Flee */ !== param.toState)
                    this.communicator.loseMe({});
                else
                    this.communicator.forgetMe({});
                break;
        }
    }
    setDuckState(state) {
        switch (state) {
            case "DUCK_FlyVertically" /* FlyVertically */:
                this.duckState = state;
                [this.nextPoint, this.prevPoint] = this.calculateBasePosition(this.nextPoint);
                this.time = this.calculateTime(this.config.speed);
                this.image = this.setImage(this.prevPoint, this.nextPoint, state);
                break;
            case "DUCK_FlyHorizontally" /* FlyHorizontally */:
                this.duckState = state;
                [this.nextPoint, this.prevPoint] = this.calculateWallPosition(this.nextPoint);
                this.time = this.calculateTime(this.config.speed);
                this.image = this.setImage(this.prevPoint, this.nextPoint, state);
                break;
            case "DUCK_Shot" /* Shot */:
                this.duckState = state;
                this.image = this.setImage(this.prevPoint, this.nextPoint, state);
                break;
            case "DUCK_Fall" /* Fall */:
                this.duckState = state;
                this.image = this.setImage(this.prevPoint, this.nextPoint, state);
                break;
            case "DUCK_Dead" /* Dead */:
                this.duckState = state;
                this.nextPoint = { X: 50, Y: 100 };
                this.image = this.setImage(this.prevPoint, this.nextPoint, state);
                break;
            case "DUCK_Flee" /* Flee */:
                this.duckState = state;
                this.nextPoint = { X: 50, Y: -50 };
                this.image = this.setImage(this.prevPoint, this.nextPoint, state);
        }
    }
    setImage(prevPoint, nextPoint, state) {
        let image;
        switch (state) {
            case "DUCK_FlyHorizontally" /* FlyHorizontally */:
            case "DUCK_FlyVertically" /* FlyVertically */:
            case "DUCK_Flee" /* Flee */: {
                const x = nextPoint.X - prevPoint.X;
                const y = nextPoint.Y - prevPoint.Y;
                const w = x / y;
                if (Math.abs(w) > 4 && x > 0)
                    image = { src1: 'duck_fly_e_1.svg', src2: 'duck_fly_e_2.svg' };
                else if (Math.abs(w) > 4)
                    image = { src1: 'duck_fly_w_1.svg', src2: 'duck_fly_w_2.svg' };
                else if (Math.abs(w) < 0.25 && y > 0)
                    image = { src1: 'duck_fly_s_1.svg', src2: 'duck_fly_s_2.svg' };
                else if (Math.abs(w) < 0.25)
                    image = { src1: 'duck_fly_n_1.svg', src2: 'duck_fly_n_2.svg' };
                else if (x > 0 && y > 0)
                    image = { src1: 'duck_fly_se_1.svg', src2: 'duck_fly_se_2.svg' };
                else if (x > 0)
                    image = { src1: 'duck_fly_ne_1.svg', src2: 'duck_fly_ne_2.svg' };
                else if (y > 0)
                    image = { src1: 'duck_fly_sw_1.svg', src2: 'duck_fly_sw_2.svg' };
                else
                    image = { src1: 'duck_fly_nw_1.svg', src2: 'duck_fly_nw_2.svg' };
                break;
            }
            case "DUCK_Shot" /* Shot */:
                image = { src1: 'duck_shot.svg', src2: 'duck_shot.svg' };
                break;
            case "DUCK_Fall" /* Fall */:
            case "DUCK_Dead" /* Dead */:
                image = { src1: 'duck_dead_1.svg', src2: 'duck_dead_2.svg' };
        }
        return {
            src1: `url(assets/duck/${image.src1})`,
            src2: `url(assets/duck/${image.src2})`,
        };
    }
    _messangerHandler({ payload: { action } }) {
        if (!["DUCK_FlyHorizontally" /* FlyHorizontally */, "DUCK_FlyVertically" /* FlyVertically */].includes(this.duckState))
            return;
        switch (action) {
            case _shared_models_message__WEBPACK_IMPORTED_MODULE_3__["MessageAction"].KillDuck:
                this.setDuckState("DUCK_Shot" /* Shot */);
                break;
            case _shared_models_message__WEBPACK_IMPORTED_MODULE_3__["MessageAction"].LoseDuck:
                this.setDuckState("DUCK_Flee" /* Flee */);
                break;
        }
    }
    get pointsVisible() {
        return this.duckState === "DUCK_Shot" /* Shot */;
    }
}
DuckComponent.ɵfac = function DuckComponent_Factory(t) { return ɵDuckComponent_BaseFactory(t || DuckComponent); };
DuckComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: DuckComponent, selectors: [["duck"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵInheritDefinitionFeature"]], decls: 2, vars: 14, consts: [[1, "duck", 3, "id"], ["class", "points", 4, "ngIf"], [1, "points"]], template: function DuckComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("@fly.done", function DuckComponent_Template_div_animation_fly_done_0_listener($event) { return ctx.getDuckState($event); })("@changeImage.done", function DuckComponent_Template_div_animation_changeImage_done_0_listener() { return ctx.getTargetState(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, DuckComponent_div_1_Template, 2, 1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("id", ctx.id)("@fly", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction2"](8, _c1, ctx.duckState, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction3"](4, _c0, ctx.nextPoint.X, ctx.nextPoint.Y, ctx.time)))("@changeImage", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction2"](11, _c1, ctx.targetState, ctx.image));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.pointsVisible);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"]], styles: ["@import url(\"https://fonts.googleapis.com/css2?family=Chango&family=Press+Start+2P&display=swap\");\n.duck[_ngcontent-%COMP%] {\n  width: 12vw;\n  height: 15vh;\n  position: absolute;\n  background-repeat: no-repeat;\n  background-size: 12vw 15vh;\n}\n.duck[_ngcontent-%COMP%]   .points[_ngcontent-%COMP%] {\n  font-family: \"Press Start 2P\", cursive;\n  color: white;\n  font-size: 2vw;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcc3R5bGVzXFxmb250cy5zY3NzIiwiLi5cXC4uXFwuLlxcLi5cXC4uXFxkdWNrLmNvbXBvbmVudC5zY3NzIiwiLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxzdHlsZXNcXGNvbG9ycy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFRLGlHQUFBO0FDR1I7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsNEJBQUE7RUFDQSwwQkFBQTtBQURGO0FBR0U7RUFDRSxzQ0RUUTtFQ1VSLFlDWkk7RURhSixjQUFBO0FBREoiLCJmaWxlIjoiZHVjay5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUNoYW5nbyZmYW1pbHk9UHJlc3MrU3RhcnQrMlAmZGlzcGxheT1zd2FwJyk7XHJcblxyXG4kaW5mby1mb250OiAnUHJlc3MgU3RhcnQgMlAnLCBjdXJzaXZlO1xyXG4kbWVudS1mb250OiAnQ2hhbmdvJywgY3Vyc2l2ZTsiLCJAaW1wb3J0IFwiLi4vLi4vLi4vc3R5bGVzL2NvbG9ycy5zY3NzXCI7XHJcbkBpbXBvcnQgXCIuLi8uLi8uLi9zdHlsZXMvZm9udHMuc2Nzc1wiO1xyXG5cclxuLmR1Y2sge1xyXG4gIHdpZHRoOiAxMnZ3O1xyXG4gIGhlaWdodDogMTV2aDtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICBiYWNrZ3JvdW5kLXNpemU6IDEydncgMTV2aDtcclxuXHJcbiAgLnBvaW50cyB7XHJcbiAgICBmb250LWZhbWlseTogJGluZm8tZm9udDtcclxuICAgIGNvbG9yOiAkd2hpdGU7XHJcbiAgICBmb250LXNpemU6IDJ2dztcclxuICB9XHJcbn1cclxuIiwiJHdoaXRlOiB3aGl0ZTtcclxuJGJsYWNrOiBibGFjaztcclxuJGdyZWVuOiAjODlhYzI1O1xyXG4kYmx1ZTogIzJlYjJmZTtcclxuJGJsdWUtZGFya2VuOiByZ2IoMCwgMTQyLCAyNTUsIDAuNCk7XHJcbiRza3libHVlOiAjOTZkOWZmO1xyXG4kc2t5cGluazogI2ZmYmViNTsiXX0= */"], data: { animation: [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('fly', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('*', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
                    transform: 'translateX({{ X }}vw) translateY({{ Y }}vh)',
                }), { params: { X: 0, Y: 0 } }),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(`${"DUCK_FlyHorizontally" /* FlyHorizontally */} <=> ${"DUCK_FlyVertically" /* FlyVertically */}`, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('{{ time }}s'), { params: { time: '1s' } }),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(`${"DUCK_FlyHorizontally" /* FlyHorizontally */} => ${"DUCK_Shot" /* Shot */}`, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('{{ time }}s'), { params: { time: '1s' } }),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(`${"DUCK_FlyVertically" /* FlyVertically */} => ${"DUCK_Shot" /* Shot */}`, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('{{ time }}s'), { params: { time: '1s' } }),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(`${"DUCK_Shot" /* Shot */} => ${"DUCK_Fall" /* Fall */}`, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('500s')),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(`${"DUCK_Fall" /* Fall */} => ${"DUCK_Dead" /* Dead */}`, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('2s')),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(`${"DUCK_FlyHorizontally" /* FlyHorizontally */} => ${"DUCK_Flee" /* Flee */}`, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('5s')),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(`${"DUCK_FlyVertically" /* FlyVertically */} => ${"DUCK_Flee" /* Flee */}`, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('5s')),
            ]),
        ] } });
const ɵDuckComponent_BaseFactory = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetInheritedFactory"](DuckComponent);


/***/ }),

/***/ "Htfa":
/*!************************************************!*\
  !*** ./src/app/components/info/info.module.ts ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return InfoModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _hit_hit_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./hit/hit.component */ "rhrC");
/* harmony import */ var _menu_menu_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu/menu.component */ "4dOs");
/* harmony import */ var _panel_panel_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./panel/panel.component */ "0YYV");
/* harmony import */ var _round_round_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./round/round.component */ "CAhB");
/* harmony import */ var _score_score_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./score/score.component */ "PFKI");
/* harmony import */ var _shots_shots_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./shots/shots.component */ "oIQJ");
/* harmony import */ var _timer_timer_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./timer/timer.component */ "5MqW");
/* harmony import */ var _shared_pipes_pad_pipe__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../shared/pipes/pad.pipe */ "15x1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ "fXoL");










class InfoModule {
}
InfoModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineNgModule"]({ type: InfoModule });
InfoModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineInjector"]({ factory: function InfoModule_Factory(t) { return new (t || InfoModule)(); }, imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsetNgModuleScope"](InfoModule, { declarations: [_hit_hit_component__WEBPACK_IMPORTED_MODULE_1__["default"],
        _menu_menu_component__WEBPACK_IMPORTED_MODULE_2__["default"],
        _panel_panel_component__WEBPACK_IMPORTED_MODULE_3__["default"],
        _round_round_component__WEBPACK_IMPORTED_MODULE_4__["default"],
        _score_score_component__WEBPACK_IMPORTED_MODULE_5__["default"],
        _shots_shots_component__WEBPACK_IMPORTED_MODULE_6__["default"],
        _timer_timer_component__WEBPACK_IMPORTED_MODULE_7__["default"],
        _shared_pipes_pad_pipe__WEBPACK_IMPORTED_MODULE_8__["default"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"]], exports: [_menu_menu_component__WEBPACK_IMPORTED_MODULE_2__["default"],
        _panel_panel_component__WEBPACK_IMPORTED_MODULE_3__["default"]] }); })();


/***/ }),

/***/ "K8Uh":
/*!***********************************************************!*\
  !*** ./src/app/components/target/dog/dog.communicator.ts ***!
  \***********************************************************/
/*! exports provided: DogCommunicator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DogCommunicator", function() { return DogCommunicator; });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _shared_models_message__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/models/message */ "S7Lt");
/* harmony import */ var _utils_communicator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../utils/communicator */ "5uB6");



class DogCommunicator extends _utils_communicator__WEBPACK_IMPORTED_MODULE_2__["Communicator"] {
    constructor(_subject, _id) {
        super(_subject);
        this._id = _id;
    }
    handleMessanger(_messageHandler) {
        this._subscription = this._subject.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["filter"])(message => message.sender === _shared_models_message__WEBPACK_IMPORTED_MODULE_1__["MessageSender"].Game), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["filter"])(message => message.payload.state.includes(this._id))).subscribe(_messageHandler);
    }
    reload() {
        this.send(_shared_models_message__WEBPACK_IMPORTED_MODULE_1__["MessageAction"].Reload);
    }
    send(action, state = {}) {
        this._subject.next({
            sender: _shared_models_message__WEBPACK_IMPORTED_MODULE_1__["MessageSender"].Target,
            payload: {
                action, state: Object.assign({}, { id: this._id }, state)
            }
        });
    }
}


/***/ }),

/***/ "LGKQ":
/*!********************************!*\
  !*** ./src/app/utils/timer.ts ***!
  \********************************/
/*! exports provided: TimerClock */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimerClock", function() { return TimerClock; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");


class TimerClock {
    constructor(interval, timeout) {
        this.interval = interval;
        this.timeout = timeout;
        this._timer = timeout;
        this._observableInterval = Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["interval"])(interval);
    }
    get timer() {
        return this._timer;
    }
    resetTimerClock(final, condition) {
        this._timer = this.timeout;
        this._observableInterval.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["takeWhile"])(condition), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["finalize"])(final))
            .subscribe(() => this._timer--);
    }
}


/***/ }),

/***/ "LLYL":
/*!*****************************************************!*\
  !*** ./src/app/components/target/dog/dog.config.ts ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const DogConfig = {
    points: 0,
    speed: 10
};
/* harmony default export */ __webpack_exports__["default"] = (DogConfig);


/***/ }),

/***/ "MqMj":
/*!******************************!*\
  !*** ./src/app/utils/gun.ts ***!
  \******************************/
/*! exports provided: Gun */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Gun", function() { return Gun; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");


class Gun {
    constructor(_bullets) {
        this._bullets = _bullets;
        this.clickObserver = Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["fromEvent"])(document, 'click');
    }
    get bullets() {
        return this._bullets;
    }
    handleGun(onShot, onNoBullets) {
        this.clickObserver.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["filter"])(() => this.bullets > 0))
            .subscribe(clickEvent => {
            this._bullets--;
            const id = this.getIdFromEvent(clickEvent);
            if (typeof id === "number") {
                onShot(id);
            }
            if (this._bullets <= 0) {
                onNoBullets();
            }
        });
    }
    resetBullets(bullets) {
        this._bullets = bullets;
    }
    getIdFromEvent(event) {
        const eventTarget = event.target;
        if (eventTarget.classList.contains('duck') || eventTarget.classList.contains('dog')) {
            return +eventTarget.id;
        }
    }
}


/***/ }),

/***/ "PFKI":
/*!**********************************************************!*\
  !*** ./src/app/components/info/score/score.component.ts ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ScoreComponent; });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ "R0Ic");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _shared_pipes_pad_pipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/pipes/pad.pipe */ "15x1");



const _c0 = function () { return {}; };
class ScoreComponent {
}
ScoreComponent.ɵfac = function ScoreComponent_Factory(t) { return new (t || ScoreComponent)(); };
ScoreComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ScoreComponent, selectors: [["score"]], inputs: { score: "score" }, decls: 6, vars: 5, consts: [[1, "info"]], template: function ScoreComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "pad");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "SCORE");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("@show", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](4, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](3, 2, ctx.score));
    } }, pipes: [_shared_pipes_pad_pipe__WEBPACK_IMPORTED_MODULE_2__["default"]], styles: ["@import url(\"https://fonts.googleapis.com/css2?family=Chango&family=Press+Start+2P&display=swap\");\n.info[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-end;\n  gap: 2px;\n  background-color: black;\n  color: white;\n  border: 3px solid #89ac25;\n  border-radius: 8px;\n  font-size: 18px;\n  padding: 5px;\n  margin: 3px;\n  font-family: \"Press Start 2P\", cursive;\n  -webkit-user-select: none;\n          user-select: none;\n}\n@media (max-width: 600px) {\n  .info[_ngcontent-%COMP%] {\n    font-size: 12px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcc3R5bGVzXFxmb250cy5zY3NzIiwiLi5cXC4uXFwuLlxcLi5cXC4uXFxzY29yZS5jb21wb25lbnQuc2NzcyIsIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcc3R5bGVzXFxtaXhpbnMuc2NzcyIsIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcc3R5bGVzXFxjb2xvcnMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBUSxpR0FBQTtBQ0dSO0VDNkJFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHFCQUFBO0VBQ0EsUUFBQTtFQS9CQSx1QkNITTtFRElOLFlDTE07RURNTix5QkFBQTtFQUNBLGtCREY2QjtFQ003QixlQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFFQSxzQ0ZiVTtFRWVWLHlCQUFBO1VBQUEsaUJBQUE7QURGRjtBQ0lFO0VEaEJGO0lDaUJJLGVBQUE7RURERjtBQUNGIiwiZmlsZSI6InNjb3JlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9Q2hhbmdvJmZhbWlseT1QcmVzcytTdGFydCsyUCZkaXNwbGF5PXN3YXAnKTtcclxuXHJcbiRpbmZvLWZvbnQ6ICdQcmVzcyBTdGFydCAyUCcsIGN1cnNpdmU7XHJcbiRtZW51LWZvbnQ6ICdDaGFuZ28nLCBjdXJzaXZlOyIsIkBpbXBvcnQgJy4uLy4uLy4uL3N0eWxlcy9taXhpbnMuc2Nzcyc7XHJcbkBpbXBvcnQgJy4uLy4uLy4uL3N0eWxlcy9jb2xvcnMuc2Nzcyc7XHJcblxyXG4uaW5mbyB7XHJcbiAgQGluY2x1ZGUgcmlnaHQtYWxpZ24oKTtcclxuICBAaW5jbHVkZSBib3goJGJsYWNrLCAkZ3JlZW4sIDhweCk7XHJcbiAgQGluY2x1ZGUgaW5mbygpO1xyXG59IiwiQGltcG9ydCBcIi4vY29sb3JzLnNjc3NcIjtcclxuQGltcG9ydCBcIi4vZm9udHMuc2Nzc1wiO1xyXG5cclxuQG1peGluIGJveCgkYmFja2dyb3VuZC1jb2xvciwgJGJvcmRlci1jb2xvciwgJHJhZGl1cykge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICRiYWNrZ3JvdW5kLWNvbG9yO1xyXG4gIGNvbG9yOiAkd2hpdGU7XHJcbiAgYm9yZGVyOiAzcHggc29saWQgJGJvcmRlci1jb2xvcjtcclxuICBib3JkZXItcmFkaXVzOiAkcmFkaXVzO1xyXG59XHJcblxyXG5AbWl4aW4gaW5mbygpIHtcclxuICBmb250LXNpemU6IDE4cHg7XHJcbiAgcGFkZGluZzogNXB4O1xyXG4gIG1hcmdpbjogM3B4O1xyXG5cclxuICBmb250LWZhbWlseTogJGluZm8tZm9udDtcclxuXHJcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgXHJcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDYwMHB4KSB7XHJcbiAgICBmb250LXNpemU6IDEycHg7ICAgIFxyXG4gIH1cclxufVxyXG5cclxuQG1peGluIGxlZnQtYWxpZ24ge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcclxuICBnYXA6IDJweDtcclxufVxyXG5cclxuQG1peGluIHJpZ2h0LWFsaWduIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xyXG4gIGdhcDogMnB4O1xyXG59XHJcblxyXG5AbWl4aW4gaW1hZ2Uge1xyXG4gIGhlaWdodDogMThweDtcclxuICBtYXJnaW46IDAgMnB4O1xyXG5cclxuICBAbWVkaWEgKG1heC13aWR0aDogNjAwcHgpIHtcclxuICAgIGhlaWdodDogMTJweDsgICAgXHJcbiAgfVxyXG59IiwiJHdoaXRlOiB3aGl0ZTtcclxuJGJsYWNrOiBibGFjaztcclxuJGdyZWVuOiAjODlhYzI1O1xyXG4kYmx1ZTogIzJlYjJmZTtcclxuJGJsdWUtZGFya2VuOiByZ2IoMCwgMTQyLCAyNTUsIDAuNCk7XHJcbiRza3libHVlOiAjOTZkOWZmO1xyXG4kc2t5cGluazogI2ZmYmViNTsiXX0= */"], data: { animation: [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('show', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('void', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 0 })),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(`* => *`, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('1s')),
            ])] } });


/***/ }),

/***/ "Pii7":
/*!********************************!*\
  !*** ./src/app/store/store.ts ***!
  \********************************/
/*! exports provided: GameStore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GameStore", function() { return GameStore; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _shared_models_target__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/models/target */ "gnV2");



class GameStore {
    constructor(_level) {
        this._level = _level;
        this._currentBatch = [];
        this.resetAll();
        this._firstDuck = -this._level.batch;
        this._round = 1;
        this._score = 0;
    }
    get currentBatch() {
        return this._currentBatch;
    }
    get allTargets() {
        return this._targetSubject;
    }
    get round() {
        return this._round;
    }
    get score() {
        return this._score;
    }
    get shouldReloadBatch() {
        return !this._currentBatch.length;
    }
    get active() {
        return this._active;
    }
    set active(value) {
        this._active = value;
    }
    get playing() {
        return this._killed !== this._level.batch && this._playing;
    }
    set playing(value) {
        this._playing = value;
    }
    get losing() {
        return this._losing;
    }
    resetBatch() {
        this._firstDuck += this._level.batch;
        this._killed = 0;
        this._active = true;
        this._playing = true;
        this._losing = false;
        if (this._firstDuck >= this._level.all) {
            this.resetAll();
            this._firstDuck = 0;
            this._round++;
        }
        this._currentBatch = [
            ...Array(this._level.all).keys()
        ].filter(num => num >= this._firstDuck && num < this._firstDuck + this._level.batch);
        this.setTargetsState(_shared_models_target__WEBPACK_IMPORTED_MODULE_2__["TargetState"].Active, this._currentBatch);
    }
    removeDuck({ id }) {
        this._currentBatch = this._currentBatch.filter(idx => idx !== id);
    }
    killDuck({ id, points }) {
        this._score += points;
        this._killed++;
        this.setTargetsState(_shared_models_target__WEBPACK_IMPORTED_MODULE_2__["TargetState"].Killed, [id]);
    }
    loseDuck({ id }) {
        this._losing = true;
        this.setTargetsState(_shared_models_target__WEBPACK_IMPORTED_MODULE_2__["TargetState"].Default, [id]);
    }
    resetAll() {
        const allDucks = [...Array(this._level.all).keys()].map(num => {
            return {
                id: num,
                state: _shared_models_target__WEBPACK_IMPORTED_MODULE_2__["TargetState"].Default
            };
        });
        this._targetSubject = Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["of"])(allDucks);
    }
    setTargetsState(state, batch) {
        this._targetSubject = this._targetSubject.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(targets => {
            return targets.map(target => {
                if (batch.includes(target.id)) {
                    return Object.assign(Object.assign({}, target), { state });
                }
                return target;
            });
        }));
    }
}


/***/ }),

/***/ "S7Lt":
/*!******************************************!*\
  !*** ./src/app/shared/models/message.ts ***!
  \******************************************/
/*! exports provided: MessageSender, MessageAction */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessageSender", function() { return MessageSender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessageAction", function() { return MessageAction; });
var MessageSender;
(function (MessageSender) {
    MessageSender["Target"] = "Sender_Target";
    MessageSender["Game"] = "Sender_Game";
})(MessageSender || (MessageSender = {}));
var MessageAction;
(function (MessageAction) {
    MessageAction["KillDuck"] = "Action_KillDuck";
    MessageAction["LoseDuck"] = "Action_LoseDuck";
    MessageAction["RemoveDuck"] = "Action_RemoveDuck";
    MessageAction["ForgetDuck"] = "Action_ForgetDuck";
    MessageAction["PickDuck"] = "Action_PickDuck";
    MessageAction["Laugh"] = "Action_Laugh";
    MessageAction["Reload"] = "Action_Reload";
})(MessageAction || (MessageAction = {}));


/***/ }),

/***/ "STTt":
/*!**************************************************************!*\
  !*** ./src/app/components/target/target/target.component.ts ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return TargetComponent; });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ "R0Ic");
/* harmony import */ var _game_game_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../game/game.config */ "qfDn");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");



class TargetComponent {
    constructor() {
        this.targetState = "TARGET_State1" /* State1 */;
        this.image = { src1: '', src2: '' };
        this._gh = _game_game_config__WEBPACK_IMPORTED_MODULE_1__["default"].height;
        this._gw = _game_game_config__WEBPACK_IMPORTED_MODULE_1__["default"].width - 12;
    }
    ngOnInit() {
        this.time = 0;
    }
    getTargetState() {
        switch (this.targetState) {
            case "TARGET_State1" /* State1 */:
                this.setTargetState("TARGET_State2" /* State2 */);
                break;
            case "TARGET_State2" /* State2 */:
                this.setTargetState("TARGET_State1" /* State1 */);
                break;
        }
    }
    setTargetState(state) {
        this.targetState = state;
    }
    calculateBasePosition(currPoint) {
        const nextPoint = {
            X: Math.random() * this._gw,
            Y: Math.random() > 0.5 ? 0 : this._gh,
        };
        return [nextPoint, currPoint];
    }
    calculateWallPosition(currPoint) {
        const nextPoint = {
            X: Math.random() > 0.5 ? 0 : this._gw,
            Y: Math.random() * this._gh,
        };
        return [nextPoint, currPoint];
    }
    calculateTime(speed) {
        return (Math.random() * 100) / speed + 0.5;
    }
}
TargetComponent.ɵfac = function TargetComponent_Factory(t) { return new (t || TargetComponent)(); };
TargetComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: TargetComponent, selectors: [["ng-component"]], inputs: { id: "id", messanger: "messanger" }, decls: 0, vars: 0, template: function TargetComponent_Template(rf, ctx) { }, encapsulation: 2, data: { animation: [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('changeImage', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])("TARGET_State1" /* State1 */, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
                    backgroundImage: '{{ src1 }}',
                }), { params: { src1: '#', src2: '#' } }),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])("TARGET_State2" /* State2 */, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
                    backgroundImage: '{{ src2 }}',
                }), { params: { src1: '#', src2: '#' } }),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('* => *', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('0.1s')),
            ]),
        ] } });


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _components_game_game_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/game/game.component */ "opiA");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");



class AppComponent {
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 2, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "game");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "router-outlet");
    } }, directives: [_components_game_game_component__WEBPACK_IMPORTED_MODULE_1__["default"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]], encapsulation: 2 });


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _components_game_game_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/game/game.module */ "3Rhj");
/* harmony import */ var _components_info_info_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/info/info.module */ "Htfa");
/* harmony import */ var _components_target_target_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/target/target.module */ "aXXB");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ "fXoL");








class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"],
            _components_game_game_module__WEBPACK_IMPORTED_MODULE_4__["default"],
            _components_info_info_module__WEBPACK_IMPORTED_MODULE_5__["default"],
            _components_target_target_module__WEBPACK_IMPORTED_MODULE_6__["default"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"],
        _components_game_game_module__WEBPACK_IMPORTED_MODULE_4__["default"],
        _components_info_info_module__WEBPACK_IMPORTED_MODULE_5__["default"],
        _components_target_target_module__WEBPACK_IMPORTED_MODULE_6__["default"]] }); })();


/***/ }),

/***/ "aXXB":
/*!****************************************************!*\
  !*** ./src/app/components/target/target.module.ts ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return TargetModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _dog_dog_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dog/dog.component */ "b9r+");
/* harmony import */ var _duck_duck_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./duck/duck.component */ "EFpa");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




class TargetModule {
}
TargetModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: TargetModule });
TargetModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ factory: function TargetModule_Factory(t) { return new (t || TargetModule)(); }, imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](TargetModule, { declarations: [_duck_duck_component__WEBPACK_IMPORTED_MODULE_2__["default"],
        _dog_dog_component__WEBPACK_IMPORTED_MODULE_1__["default"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"]], exports: [_duck_duck_component__WEBPACK_IMPORTED_MODULE_2__["default"],
        _dog_dog_component__WEBPACK_IMPORTED_MODULE_1__["default"]] }); })();


/***/ }),

/***/ "b9r+":
/*!********************************************************!*\
  !*** ./src/app/components/target/dog/dog.component.ts ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return DogComponent; });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ "R0Ic");
/* harmony import */ var _target_target_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../target/target.component */ "STTt");
/* harmony import */ var _shared_models_message__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/models/message */ "S7Lt");
/* harmony import */ var _dog_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dog.config */ "LLYL");
/* harmony import */ var _dog_communicator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dog.communicator */ "K8Uh");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");







const _c0 = function (a0, a1, a2) { return { X: a0, Y: a1, time: a2 }; };
const _c1 = function (a0, a1) { return { value: a0, params: a1 }; };
class DogComponent extends _target_target_component__WEBPACK_IMPORTED_MODULE_1__["default"] {
    constructor() {
        super(...arguments);
        this.dogState = "DOG_Default" /* Default */;
        this.config = _dog_config__WEBPACK_IMPORTED_MODULE_3__["default"];
        this._front = true;
    }
    ngOnInit() {
        super.ngOnInit();
        this.nextPoint = { X: 0, Y: 65 };
        this.communicator = new _dog_communicator__WEBPACK_IMPORTED_MODULE_4__["DogCommunicator"](this.messanger, this.id);
        this.communicator.handleMessanger(this._messangerHandler.bind(this));
    }
    ngOnDestroy() {
        this.communicator.disconnect();
    }
    getDogState(param) {
        switch (this.dogState) {
            case "DOG_Default" /* Default */:
                this.setDogState("DOG_Walk" /* Walk */);
                break;
            case "DOG_Walk" /* Walk */:
                this.setDogState("DOG_Found" /* Found */);
                break;
            case "DOG_Found" /* Found */:
                this.setDogState("DOG_JumpUp" /* JumpUp */);
                break;
            case "DOG_JumpUp" /* JumpUp */:
                this.setDogState("DOG_JumpDown" /* JumpDown */);
                break;
            case "DOG_DuckUp" /* DuckUp */:
                this.setDogState("DOG_DuckDown" /* DuckDown */);
                break;
            case "DOG_DucksUp" /* DucksUp */:
                this.setDogState("DOG_DucksDown" /* DucksDown */);
                break;
            case "Dog_LaughUp" /* LaughUp */:
                this.setDogState("Dog_LaughDown" /* LaughDown */);
                break;
            case "DOG_ShotUp" /* ShotUp */:
                this.setDogState("DOG_ShotDown" /* ShotDown */);
                break;
            case "DOG_JumpDown" /* JumpDown */:
            case "DOG_DuckDown" /* DuckDown */:
            case "DOG_DucksDown" /* DucksDown */:
            case "Dog_LaughDown" /* LaughDown */:
            case "DOG_ShotDown" /* ShotDown */:
                this.communicator.reload();
                break;
        }
    }
    setDogState(state) {
        switch (state) {
            case "DOG_Walk" /* Walk */:
                this.dogState = state;
                [this.nextPoint, this.prevPoint] = [{ X: 29.9, Y: 65 }, this.nextPoint];
                this.image = this.setImage(this.prevPoint, this.nextPoint, state);
                this.time = 3;
                break;
            case "DOG_Found" /* Found */:
                this.dogState = state;
                [this.nextPoint, this.prevPoint] = [{ X: 30, Y: 65 }, this.nextPoint];
                this.image = this.setImage(this.prevPoint, this.nextPoint, state);
                this.time = 0.5;
                break;
            case "DOG_JumpUp" /* JumpUp */:
                this.dogState = state;
                [this.nextPoint, this.prevPoint] = [{ X: 30, Y: 40 }, this.nextPoint];
                this.image = this.setImage(this.prevPoint, this.nextPoint, state);
                this.time = 0.7;
                break;
            case "DOG_JumpDown" /* JumpDown */:
                this.dogState = state;
                [this.nextPoint, this.prevPoint] = [{ X: 30, Y: 75 }, this.nextPoint];
                this.image = this.setImage(this.prevPoint, this.nextPoint, state);
                this.time = 0.7;
                this._front = false;
                break;
            case "DOG_DuckUp" /* DuckUp */:
            case "DOG_DucksUp" /* DucksUp */:
            case "Dog_LaughUp" /* LaughUp */:
            case "DOG_ShotUp" /* ShotUp */:
                this.dogState = state;
                [this.nextPoint, this.prevPoint] = [{ X: 30, Y: 50 }, this.nextPoint];
                this.image = this.setImage(this.prevPoint, this.nextPoint, state);
                this.time = 1;
                break;
            case "DOG_DuckDown" /* DuckDown */:
            case "DOG_DucksDown" /* DucksDown */:
            case "Dog_LaughDown" /* LaughDown */:
            case "DOG_ShotDown" /* ShotDown */:
                this.dogState = state;
                [this.nextPoint, this.prevPoint] = [{ X: 30, Y: 75 }, this.nextPoint];
                this.image = this.setImage(this.prevPoint, this.nextPoint, state);
                this.time = 1;
                break;
        }
    }
    setImage(prevPoint, nextPoint, state) {
        let image;
        switch (state) {
            case "DOG_Walk" /* Walk */:
                image = { src1: "dog_walk_1.svg", src2: "dog_walk_2.svg" };
                break;
            case "DOG_Found" /* Found */:
                image = { src1: "dog_found.svg", src2: "dog_found.svg" };
                break;
            case "DOG_JumpUp" /* JumpUp */:
            case "DOG_JumpDown" /* JumpDown */:
                image = { src1: "dog_jump.svg", src2: "dog_jump.svg" };
                break;
            case "DOG_DuckUp" /* DuckUp */:
            case "DOG_DuckDown" /* DuckDown */:
                image = { src1: "dog_duck.svg", src2: "dog_duck.svg" };
                break;
            case "DOG_DucksUp" /* DucksUp */:
            case "DOG_DucksDown" /* DucksDown */:
                image = { src1: "dog_ducks.svg", src2: "dog_ducks.svg" };
                break;
            case "Dog_LaughUp" /* LaughUp */:
            case "Dog_LaughDown" /* LaughDown */:
                image = { src1: "dog_laugh_1.svg", src2: "dog_laugh_2.svg" };
                break;
            case "DOG_ShotUp" /* ShotUp */:
            case "DOG_ShotDown" /* ShotDown */:
                image = { src1: "dog_shot.svg", src2: "dog_shot.svg" };
                break;
        }
        return {
            src1: `url(assets/dog/${image.src1})`,
            src2: `url(assets/dog/${image.src2})`
        };
    }
    _messangerHandler({ payload: { action } }) {
        switch (action) {
            case _shared_models_message__WEBPACK_IMPORTED_MODULE_2__["MessageAction"].PickDuck:
                this.setDogState("DOG_DuckUp" /* DuckUp */);
                break;
            case _shared_models_message__WEBPACK_IMPORTED_MODULE_2__["MessageAction"].Laugh:
                this.setDogState("Dog_LaughUp" /* LaughUp */);
                break;
            case _shared_models_message__WEBPACK_IMPORTED_MODULE_2__["MessageAction"].KillDuck:
                this.setDogState("DOG_ShotUp" /* ShotUp */);
                break;
        }
    }
    get dogClasses() {
        return {
            dog: true,
            'dog-front': this._front,
            'dog-back': !this._front
        };
    }
}
DogComponent.ɵfac = function DogComponent_Factory(t) { return ɵDogComponent_BaseFactory(t || DogComponent); };
DogComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: DogComponent, selectors: [["dog"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵInheritDefinitionFeature"]], decls: 1, vars: 14, consts: [[3, "id", "ngClass"]], template: function DogComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("@moveDog.done", function DogComponent_Template_div_animation_moveDog_done_0_listener($event) { return ctx.getDogState($event); })("@changeImage.done", function DogComponent_Template_div_animation_changeImage_done_0_listener() { return ctx.getTargetState(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("id", -1)("ngClass", ctx.dogClasses)("@moveDog", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction2"](8, _c1, ctx.dogState, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction3"](4, _c0, ctx.nextPoint.X, ctx.nextPoint.Y, ctx.time)))("@changeImage", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction2"](11, _c1, ctx.targetState, ctx.image));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgClass"]], styles: ["@import url(\"https://fonts.googleapis.com/css2?family=Chango&family=Press+Start+2P&display=swap\");\n.dog[_ngcontent-%COMP%] {\n  width: 35vw;\n  height: 35vh;\n  position: absolute;\n  background-repeat: no-repeat;\n  background-size: 35vw 35vh;\n}\n.dog-front[_ngcontent-%COMP%] {\n  z-index: 1;\n}\n.dog-back[_ngcontent-%COMP%] {\n  z-index: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcc3R5bGVzXFxmb250cy5zY3NzIiwiLi5cXC4uXFwuLlxcLi5cXC4uXFxkb2cuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQVEsaUdBQUE7QUNHUjtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSw0QkFBQTtFQUNBLDBCQUFBO0FBREY7QUFJQTtFQUNFLFVBQUE7QUFERjtBQUlBO0VBQ0UsVUFBQTtBQURGIiwiZmlsZSI6ImRvZy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUNoYW5nbyZmYW1pbHk9UHJlc3MrU3RhcnQrMlAmZGlzcGxheT1zd2FwJyk7XHJcblxyXG4kaW5mby1mb250OiAnUHJlc3MgU3RhcnQgMlAnLCBjdXJzaXZlO1xyXG4kbWVudS1mb250OiAnQ2hhbmdvJywgY3Vyc2l2ZTsiLCJAaW1wb3J0IFwiLi4vLi4vLi4vc3R5bGVzL2NvbG9ycy5zY3NzXCI7XHJcbkBpbXBvcnQgXCIuLi8uLi8uLi9zdHlsZXMvZm9udHMuc2Nzc1wiO1xyXG5cclxuLmRvZyB7XHJcbiAgd2lkdGg6IDM1dnc7XHJcbiAgaGVpZ2h0OiAzNXZoO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gIGJhY2tncm91bmQtc2l6ZTogMzV2dyAzNXZoO1xyXG59XHJcblxyXG4uZG9nLWZyb250IHtcclxuICB6LWluZGV4OiAxO1xyXG59XHJcblxyXG4uZG9nLWJhY2sge1xyXG4gIHotaW5kZXg6IDA7XHJcbn0iXX0= */"], data: { animation: [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('moveDog', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('*', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
                    transform: 'translateX({{ X }}vw) translateY({{ Y }}vh)',
                }), { params: { X: 0, Y: 0 } }),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])("* => *", Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('{{ time }}s'), { params: { time: 1 } })
            ])
        ] } });
const ɵDogComponent_BaseFactory = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetInheritedFactory"](DogComponent);


/***/ }),

/***/ "gnV2":
/*!*****************************************!*\
  !*** ./src/app/shared/models/target.ts ***!
  \*****************************************/
/*! exports provided: TargetState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TargetState", function() { return TargetState; });
var TargetState;
(function (TargetState) {
    TargetState[TargetState["Default"] = 0] = "Default";
    TargetState[TargetState["Active"] = 1] = "Active";
    TargetState[TargetState["Killed"] = 2] = "Killed";
})(TargetState || (TargetState = {}));


/***/ }),

/***/ "kUZu":
/*!******************************************************!*\
  !*** ./src/app/components/game/game.communicator.ts ***!
  \******************************************************/
/*! exports provided: GameCommunicator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GameCommunicator", function() { return GameCommunicator; });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _shared_models_message__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/models/message */ "S7Lt");
/* harmony import */ var _utils_communicator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/communicator */ "5uB6");



class GameCommunicator extends _utils_communicator__WEBPACK_IMPORTED_MODULE_2__["Communicator"] {
    constructor(_subject) {
        super(_subject);
    }
    handleMessanger(_messageHandler) {
        this._subscription = this._subject.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["filter"])(message => message.sender === _shared_models_message__WEBPACK_IMPORTED_MODULE_1__["MessageSender"].Target)).subscribe(_messageHandler);
    }
    killDuck(state) {
        this.send(_shared_models_message__WEBPACK_IMPORTED_MODULE_1__["MessageAction"].KillDuck, state);
    }
    loseDuck(state) {
        this.send(_shared_models_message__WEBPACK_IMPORTED_MODULE_1__["MessageAction"].LoseDuck, state);
    }
    pickDuck() {
        this.send(_shared_models_message__WEBPACK_IMPORTED_MODULE_1__["MessageAction"].PickDuck, [-1]);
    }
    laugh() {
        this.send(_shared_models_message__WEBPACK_IMPORTED_MODULE_1__["MessageAction"].Laugh, [-1]);
    }
    send(action, state) {
        this._subject.next({
            sender: _shared_models_message__WEBPACK_IMPORTED_MODULE_1__["MessageSender"].Game,
            payload: { action, state }
        });
    }
}


/***/ }),

/***/ "oIQJ":
/*!**********************************************************!*\
  !*** ./src/app/components/info/shots/shots.component.ts ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ShotsComponent; });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ "R0Ic");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");



function ShotsComponent_img_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "img", 3);
} }
const _c0 = function () { return {}; };
class ShotsComponent {
    get bullets() {
        return new Array(this.shots).fill(0);
    }
}
ShotsComponent.ɵfac = function ShotsComponent_Factory(t) { return new (t || ShotsComponent)(); };
ShotsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ShotsComponent, selectors: [["shots"]], inputs: { shots: "shots" }, decls: 5, vars: 3, consts: [[1, "info"], [1, "bullets"], ["class", "bullet", "src", "../../../assets/info/bullet.svg", "alt", "bullet", 4, "ngFor", "ngForOf"], ["src", "../../../assets/info/bullet.svg", "alt", "bullet", 1, "bullet"]], template: function ShotsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, ShotsComponent_img_2_Template, 1, 0, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "SHOT");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("@show", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](2, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.bullets);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]], styles: ["@import url(\"https://fonts.googleapis.com/css2?family=Chango&family=Press+Start+2P&display=swap\");\n.info[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  gap: 2px;\n  background-color: black;\n  color: white;\n  border: 3px solid #89ac25;\n  border-radius: 8px;\n  font-size: 18px;\n  padding: 5px;\n  margin: 3px;\n  font-family: \"Press Start 2P\", cursive;\n  -webkit-user-select: none;\n          user-select: none;\n}\n@media (max-width: 600px) {\n  .info[_ngcontent-%COMP%] {\n    font-size: 12px;\n  }\n}\n.bullets[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr;\n  width: 100%;\n  justify-items: center;\n}\n.bullet[_ngcontent-%COMP%] {\n  height: 18px;\n  margin: 0 2px;\n}\n@media (max-width: 600px) {\n  .bullet[_ngcontent-%COMP%] {\n    height: 12px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcc3R5bGVzXFxmb250cy5zY3NzIiwiLi5cXC4uXFwuLlxcLi5cXC4uXFxzaG90cy5jb21wb25lbnQuc2NzcyIsIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcc3R5bGVzXFxtaXhpbnMuc2NzcyIsIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcc3R5bGVzXFxjb2xvcnMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBUSxpR0FBQTtBQ0dSO0VDc0JFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EsUUFBQTtFQXhCQSx1QkNITTtFRElOLFlDTE07RURNTix5QkFBQTtFQUNBLGtCREY2QjtFQ003QixlQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFFQSxzQ0ZiVTtFRWVWLHlCQUFBO1VBQUEsaUJBQUE7QURGRjtBQ0lFO0VEaEJGO0lDaUJJLGVBQUE7RURERjtBQUNGO0FBWEE7RUFDRSxhQUFBO0VBQ0Esa0NBQUE7RUFDQSxXQUFBO0VBQ0EscUJBQUE7QUFjRjtBQVhBO0VDdUJFLFlBQUE7RUFDQSxhQUFBO0FEUkY7QUNVRTtFRDFCRjtJQzJCSSxZQUFBO0VEUEY7QUFDRiIsImZpbGUiOiJzaG90cy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUNoYW5nbyZmYW1pbHk9UHJlc3MrU3RhcnQrMlAmZGlzcGxheT1zd2FwJyk7XHJcblxyXG4kaW5mby1mb250OiAnUHJlc3MgU3RhcnQgMlAnLCBjdXJzaXZlO1xyXG4kbWVudS1mb250OiAnQ2hhbmdvJywgY3Vyc2l2ZTsiLCJAaW1wb3J0ICcuLi8uLi8uLi9zdHlsZXMvbWl4aW5zLnNjc3MnO1xyXG5AaW1wb3J0ICcuLi8uLi8uLi9zdHlsZXMvY29sb3JzLnNjc3MnO1xyXG5cclxuLmluZm8ge1xyXG4gIEBpbmNsdWRlIGxlZnQtYWxpZ24oKTtcclxuICBAaW5jbHVkZSBib3goJGJsYWNrLCAkZ3JlZW4sIDhweCk7XHJcbiAgQGluY2x1ZGUgaW5mbygpO1xyXG59XHJcblxyXG4uYnVsbGV0cyB7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnIgMWZyO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGp1c3RpZnktaXRlbXM6IGNlbnRlclxyXG59XHJcblxyXG4uYnVsbGV0IHtcclxuICBAaW5jbHVkZSBpbWFnZSgpO1xyXG59IiwiQGltcG9ydCBcIi4vY29sb3JzLnNjc3NcIjtcclxuQGltcG9ydCBcIi4vZm9udHMuc2Nzc1wiO1xyXG5cclxuQG1peGluIGJveCgkYmFja2dyb3VuZC1jb2xvciwgJGJvcmRlci1jb2xvciwgJHJhZGl1cykge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICRiYWNrZ3JvdW5kLWNvbG9yO1xyXG4gIGNvbG9yOiAkd2hpdGU7XHJcbiAgYm9yZGVyOiAzcHggc29saWQgJGJvcmRlci1jb2xvcjtcclxuICBib3JkZXItcmFkaXVzOiAkcmFkaXVzO1xyXG59XHJcblxyXG5AbWl4aW4gaW5mbygpIHtcclxuICBmb250LXNpemU6IDE4cHg7XHJcbiAgcGFkZGluZzogNXB4O1xyXG4gIG1hcmdpbjogM3B4O1xyXG5cclxuICBmb250LWZhbWlseTogJGluZm8tZm9udDtcclxuXHJcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgXHJcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDYwMHB4KSB7XHJcbiAgICBmb250LXNpemU6IDEycHg7ICAgIFxyXG4gIH1cclxufVxyXG5cclxuQG1peGluIGxlZnQtYWxpZ24ge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcclxuICBnYXA6IDJweDtcclxufVxyXG5cclxuQG1peGluIHJpZ2h0LWFsaWduIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xyXG4gIGdhcDogMnB4O1xyXG59XHJcblxyXG5AbWl4aW4gaW1hZ2Uge1xyXG4gIGhlaWdodDogMThweDtcclxuICBtYXJnaW46IDAgMnB4O1xyXG5cclxuICBAbWVkaWEgKG1heC13aWR0aDogNjAwcHgpIHtcclxuICAgIGhlaWdodDogMTJweDsgICAgXHJcbiAgfVxyXG59IiwiJHdoaXRlOiB3aGl0ZTtcclxuJGJsYWNrOiBibGFjaztcclxuJGdyZWVuOiAjODlhYzI1O1xyXG4kYmx1ZTogIzJlYjJmZTtcclxuJGJsdWUtZGFya2VuOiByZ2IoMCwgMTQyLCAyNTUsIDAuNCk7XHJcbiRza3libHVlOiAjOTZkOWZmO1xyXG4kc2t5cGluazogI2ZmYmViNTsiXX0= */"], data: { animation: [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('show', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('void', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 0 })),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(`* => *`, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('1s')),
            ])] } });


/***/ }),

/***/ "opiA":
/*!***************************************************!*\
  !*** ./src/app/components/game/game.component.ts ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return GameComponent; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var src_app_store_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/store/store */ "Pii7");
/* harmony import */ var _shared_models_message__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/models/message */ "S7Lt");
/* harmony import */ var _utils_gun__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/gun */ "MqMj");
/* harmony import */ var _utils_timer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils/timer */ "LGKQ");
/* harmony import */ var _game_communicator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./game.communicator */ "kUZu");
/* harmony import */ var _game_config__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./game.config */ "qfDn");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _info_panel_panel_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../info/panel/panel.component */ "0YYV");
/* harmony import */ var _target_dog_dog_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../target/dog/dog.component */ "b9r+");
/* harmony import */ var _target_duck_duck_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../target/duck/duck.component */ "EFpa");
/* harmony import */ var _info_menu_menu_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../info/menu/menu.component */ "4dOs");













function GameComponent_dog_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "dog", 5);
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("id", -1)("messanger", ctx_r0.communicator.messanger);
} }
function GameComponent_duck_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "duck", 5);
} if (rf & 2) {
    const duck_r3 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("id", duck_r3)("messanger", ctx_r1.communicator.messanger);
} }
function GameComponent_menu_3_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "menu", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("selected", function GameComponent_menu_3_Template_menu_selected_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return ctx_r4.startGame($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
class GameComponent {
    constructor() {
        this.gameConfig = _game_config__WEBPACK_IMPORTED_MODULE_6__["default"];
        this.gameState = "GAME_Unstarted" /* Unstarted */;
    }
    ngOnDestroy() {
        this.communicator.disconnect();
    }
    startGame(level) {
        if (!Number.isInteger(level))
            return;
        this.gameState = "GAME_Started" /* Started */;
        this.level = _game_config__WEBPACK_IMPORTED_MODULE_6__["default"].levels[level];
        this.store = new src_app_store_store__WEBPACK_IMPORTED_MODULE_1__["GameStore"](this.level);
        this.communicator = new _game_communicator__WEBPACK_IMPORTED_MODULE_5__["GameCommunicator"](new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]());
        this.communicator.handleMessanger(this._messangerHandler.bind(this));
        this.timerClock = new _utils_timer__WEBPACK_IMPORTED_MODULE_4__["TimerClock"](1000, this.level.timeout);
        this.gun = new _utils_gun__WEBPACK_IMPORTED_MODULE_3__["Gun"](this.level.bullets);
        this.gun.handleGun(id => this.communicator.killDuck([id]), () => this.communicator.loseDuck(this.store.currentBatch));
    }
    getNewBatch() {
        this.store.resetBatch();
        this.gun.resetBullets(this.level.bullets);
        this.timerClock.resetTimerClock(() => this.communicator.loseDuck(this.store.currentBatch), timer => timer !== this.level.timeout && this.store.playing);
    }
    _messangerHandler({ payload: { action, state } }) {
        switch (action) {
            case _shared_models_message__WEBPACK_IMPORTED_MODULE_2__["MessageAction"].RemoveDuck:
                this.store.removeDuck(state);
                this.communicator.pickDuck();
                break;
            case _shared_models_message__WEBPACK_IMPORTED_MODULE_2__["MessageAction"].ForgetDuck:
                this.store.removeDuck(state);
                this.communicator.laugh();
                break;
            case _shared_models_message__WEBPACK_IMPORTED_MODULE_2__["MessageAction"].KillDuck:
                this.store.killDuck(state);
                break;
            case _shared_models_message__WEBPACK_IMPORTED_MODULE_2__["MessageAction"].LoseDuck:
                this.store.loseDuck(state);
                this.store.playing = false;
                break;
            case _shared_models_message__WEBPACK_IMPORTED_MODULE_2__["MessageAction"].Reload:
                this.gameState = "GAME_Active" /* Active */;
                if (this.store.shouldReloadBatch) {
                    this.getNewBatch();
                }
                break;
        }
    }
    get gameClasses() {
        var _a, _b;
        return {
            game: true,
            'game-lose': (_a = this.store) === null || _a === void 0 ? void 0 : _a.losing,
            'game-play': !((_b = this.store) === null || _b === void 0 ? void 0 : _b.losing)
        };
    }
    get isGameUnstarted() { return this.gameState === "GAME_Unstarted" /* Unstarted */; }
    get isGameStarted() { return this.gameState === "GAME_Started" /* Started */; }
    get isGameActive() { return this.gameState === "GAME_Active" /* Active */; }
}
GameComponent.ɵfac = function GameComponent_Factory(t) { return new (t || GameComponent)(); };
GameComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({ type: GameComponent, selectors: [["game"]], decls: 6, vars: 12, consts: [[3, "ngClass"], [3, "id", "messanger", 4, "ngIf"], [3, "id", "messanger", 4, "ngFor", "ngForOf"], [3, "selected", 4, "ngIf"], [3, "show", "bullets", "ducks", "round", "score", "timer"], [3, "id", "messanger"], [3, "selected"]], template: function GameComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, GameComponent_dog_1_Template, 1, 2, "dog", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](2, GameComponent_duck_2_Template, 1, 2, "duck", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](3, GameComponent_menu_3_Template, 1, 0, "menu", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](4, "panel", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](5, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngClass", ctx.gameClasses);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !ctx.isGameUnstarted);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx.store == null ? null : ctx.store.currentBatch);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.isGameUnstarted);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("show", ctx.isGameActive)("bullets", ctx.gun == null ? null : ctx.gun.bullets)("ducks", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](5, 10, ctx.store == null ? null : ctx.store.allTargets))("round", ctx.store == null ? null : ctx.store.round)("score", ctx.store == null ? null : ctx.store.score)("timer", ctx.timerClock == null ? null : ctx.timerClock.timer);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgForOf"], _info_panel_panel_component__WEBPACK_IMPORTED_MODULE_9__["default"], _target_dog_dog_component__WEBPACK_IMPORTED_MODULE_10__["default"], _target_duck_duck_component__WEBPACK_IMPORTED_MODULE_11__["default"], _info_menu_menu_component__WEBPACK_IMPORTED_MODULE_12__["default"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["AsyncPipe"]], styles: [".game[_ngcontent-%COMP%] {\n  width: 100vw;\n  height: 100vh;\n  position: absolute;\n  overflow: hidden;\n  cursor: url('crosshair.cur') 30 30, default;\n}\n\n.game-play[_ngcontent-%COMP%] {\n  background-color: #96d9ff;\n}\n\n.game-lose[_ngcontent-%COMP%] {\n  background-color: #ffbeb5;\n}\n\n.game[_ngcontent-%COMP%]:active {\n  background-color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxnYW1lLmNvbXBvbmVudC5zY3NzIiwiLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcc3R5bGVzXFxjb2xvcnMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLFlBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLDJDQUFBO0FBREY7O0FBSUE7RUFDRSx5QkNOUTtBREtWOztBQUlBO0VBQ0UseUJDVFE7QURRVjs7QUFJQTtFQUNFLHVCQ25CTTtBRGtCUiIsImZpbGUiOiJnYW1lLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcIi4uLy4uL3N0eWxlcy9jb2xvcnMuc2Nzc1wiO1xyXG5cclxuLmdhbWUge1xyXG4gIHdpZHRoOiAxMDB2dztcclxuICBoZWlnaHQ6IDEwMHZoO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIGN1cnNvcjogdXJsKC4uLy4uLy4uL2Fzc2V0cy9jcm9zc2hhaXIvY3Jvc3NoYWlyLmN1cikgMzAgMzAsIGRlZmF1bHQ7XHJcbn1cclxuXHJcbi5nYW1lLXBsYXkge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICRza3libHVlO1xyXG59XHJcblxyXG4uZ2FtZS1sb3NlIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkc2t5cGluaztcclxufVxyXG5cclxuLmdhbWU6YWN0aXZlIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkd2hpdGU7XHJcbn1cclxuIiwiJHdoaXRlOiB3aGl0ZTtcclxuJGJsYWNrOiBibGFjaztcclxuJGdyZWVuOiAjODlhYzI1O1xyXG4kYmx1ZTogIzJlYjJmZTtcclxuJGJsdWUtZGFya2VuOiByZ2IoMCwgMTQyLCAyNTUsIDAuNCk7XHJcbiRza3libHVlOiAjOTZkOWZmO1xyXG4kc2t5cGluazogI2ZmYmViNTsiXX0= */"] });


/***/ }),

/***/ "qfDn":
/*!************************************************!*\
  !*** ./src/app/components/game/game.config.ts ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
class GameConfig {
    constructor() {
        this.levels = [
            {
                all: 10,
                batch: 1,
                bullets: 3,
                timeout: 10,
            },
            {
                all: 10,
                batch: 2,
                bullets: 3,
                timeout: 10,
            },
            {
                all: 15,
                batch: 3,
                bullets: 3,
                timeout: 10,
            },
        ];
        this.height = 65;
        this.width = 100;
    }
}
/* harmony default export */ __webpack_exports__["default"] = (new GameConfig());


/***/ }),

/***/ "qgLc":
/*!*******************************************************!*\
  !*** ./src/app/components/target/duck/duck.config.ts ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const DuckConfig = {
    points: 200,
    speed: 10
};
/* harmony default export */ __webpack_exports__["default"] = (DuckConfig);


/***/ }),

/***/ "rhrC":
/*!******************************************************!*\
  !*** ./src/app/components/info/hit/hit.component.ts ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return HitComponent; });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ "R0Ic");
/* harmony import */ var src_app_shared_models_target__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/models/target */ "gnV2");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");




function HitComponent_img_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "img", 3);
} if (rf & 2) {
    const id_r2 = ctx.index;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", ctx_r0.classes[id_r2])("src", ctx_r0.srcs[id_r2], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
} }
const _c0 = function () { return {}; };
class HitComponent {
    constructor() {
        this.classes = [];
        this.srcs = [];
    }
    ngOnChanges() {
        this.classes = this.ducks.map(duck => this.class(duck));
        this.srcs = this.ducks.map(duck => this.src(duck));
    }
    class(target) {
        return {
            hit: true,
            active: target.state === src_app_shared_models_target__WEBPACK_IMPORTED_MODULE_1__["TargetState"].Active
        };
    }
    src(target) {
        let fileName;
        if (target.state === src_app_shared_models_target__WEBPACK_IMPORTED_MODULE_1__["TargetState"].Killed) {
            fileName = "red-hit";
        }
        else {
            fileName = "white-hit";
        }
        return `../../../assets/info/${fileName}.svg`;
    }
}
HitComponent.ɵfac = function HitComponent_Factory(t) { return new (t || HitComponent)(); };
HitComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: HitComponent, selectors: [["hit"]], inputs: { ducks: "ducks" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵNgOnChangesFeature"]], decls: 5, vars: 3, consts: [[1, "info"], [1, "hits"], ["alt", "hit", 3, "ngClass", "src", 4, "ngFor", "ngForOf"], ["alt", "hit", 3, "ngClass", "src"]], template: function HitComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "HIT");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, HitComponent_img_4_Template, 1, 2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("@show", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](2, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.ducks);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgClass"]], styles: ["@import url(\"https://fonts.googleapis.com/css2?family=Chango&family=Press+Start+2P&display=swap\");\n[_nghost-%COMP%] {\n  grid-row-start: span 2;\n}\n.info[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  gap: 2px;\n  background-color: black;\n  color: white;\n  border: 3px solid #89ac25;\n  border-radius: 8px;\n  font-size: 18px;\n  padding: 5px;\n  margin: 3px;\n  font-family: \"Press Start 2P\", cursive;\n  -webkit-user-select: none;\n          user-select: none;\n}\n@media (max-width: 600px) {\n  .info[_ngcontent-%COMP%] {\n    font-size: 12px;\n  }\n}\n.hits[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n}\n.hit[_ngcontent-%COMP%] {\n  height: 18px;\n  margin: 0 2px;\n}\n@media (max-width: 600px) {\n  .hit[_ngcontent-%COMP%] {\n    height: 12px;\n  }\n}\n.active[_ngcontent-%COMP%] {\n  animation: blink 0.5s infinite;\n}\n@keyframes blink {\n  0% {\n    opacity: 0;\n  }\n  50% {\n    opacity: 1;\n  }\n  100% {\n    opacity: 0;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcc3R5bGVzXFxmb250cy5zY3NzIiwiLi5cXC4uXFwuLlxcLi5cXC4uXFxoaXQuY29tcG9uZW50LnNjc3MiLCIuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXHN0eWxlc1xcbWl4aW5zLnNjc3MiLCIuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXHN0eWxlc1xcY29sb3JzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQVEsaUdBQUE7QUNHUjtFQUNFLHNCQUFBO0FBREY7QUFJQTtFQ2tCRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLFFBQUE7RUF4QkEsdUJDSE07RURJTixZQ0xNO0VETU4seUJBQUE7RUFDQSxrQkRFNkI7RUNFN0IsZUFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBRUEsc0NGYlU7RUVlVix5QkFBQTtVQUFBLGlCQUFBO0FERUY7QUNBRTtFRFpGO0lDYUksZUFBQTtFREdGO0FBQ0Y7QUFYQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtBQWNGO0FBWEE7RUNxQkUsWUFBQTtFQUNBLGFBQUE7QURORjtBQ1FFO0VEeEJGO0lDeUJJLFlBQUE7RURMRjtBQUNGO0FBakJBO0VBQ0UsOEJBQUE7QUFvQkY7QUFqQkE7RUFDRTtJQUNFLFVBQUE7RUFvQkY7RUFsQkE7SUFDRSxVQUFBO0VBb0JGO0VBbEJBO0lBQ0UsVUFBQTtFQW9CRjtBQUNGIiwiZmlsZSI6ImhpdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUNoYW5nbyZmYW1pbHk9UHJlc3MrU3RhcnQrMlAmZGlzcGxheT1zd2FwJyk7XHJcblxyXG4kaW5mby1mb250OiAnUHJlc3MgU3RhcnQgMlAnLCBjdXJzaXZlO1xyXG4kbWVudS1mb250OiAnQ2hhbmdvJywgY3Vyc2l2ZTsiLCJAaW1wb3J0ICcuLi8uLi8uLi9zdHlsZXMvbWl4aW5zLnNjc3MnO1xyXG5AaW1wb3J0ICcuLi8uLi8uLi9zdHlsZXMvY29sb3JzLnNjc3MnO1xyXG5cclxuOmhvc3Qge1xyXG4gIGdyaWQtcm93LXN0YXJ0OiBzcGFuIDI7XHJcbn1cclxuXHJcbi5pbmZvIHtcclxuICBAaW5jbHVkZSBsZWZ0LWFsaWduKCk7XHJcbiAgQGluY2x1ZGUgYm94KCRibGFjaywgJGdyZWVuLCA4cHgpO1xyXG4gIEBpbmNsdWRlIGluZm8oKTtcclxufVxyXG5cclxuLmhpdHMge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxufVxyXG5cclxuLmhpdCB7XHJcbiAgQGluY2x1ZGUgaW1hZ2UoKTtcclxufVxyXG5cclxuLmFjdGl2ZSB7XHJcbiAgYW5pbWF0aW9uOiBibGluayAwLjVzIGluZmluaXRlO1xyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIGJsaW5rIHtcclxuICAwJSB7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gIH1cclxuICA1MCUge1xyXG4gICAgb3BhY2l0eTogMTtcclxuICB9XHJcbiAgMTAwJSB7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gIH1cclxufSIsIkBpbXBvcnQgXCIuL2NvbG9ycy5zY3NzXCI7XHJcbkBpbXBvcnQgXCIuL2ZvbnRzLnNjc3NcIjtcclxuXHJcbkBtaXhpbiBib3goJGJhY2tncm91bmQtY29sb3IsICRib3JkZXItY29sb3IsICRyYWRpdXMpIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkYmFja2dyb3VuZC1jb2xvcjtcclxuICBjb2xvcjogJHdoaXRlO1xyXG4gIGJvcmRlcjogM3B4IHNvbGlkICRib3JkZXItY29sb3I7XHJcbiAgYm9yZGVyLXJhZGl1czogJHJhZGl1cztcclxufVxyXG5cclxuQG1peGluIGluZm8oKSB7XHJcbiAgZm9udC1zaXplOiAxOHB4O1xyXG4gIHBhZGRpbmc6IDVweDtcclxuICBtYXJnaW46IDNweDtcclxuXHJcbiAgZm9udC1mYW1pbHk6ICRpbmZvLWZvbnQ7XHJcblxyXG4gIHVzZXItc2VsZWN0OiBub25lO1xyXG4gIFxyXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA2MDBweCkge1xyXG4gICAgZm9udC1zaXplOiAxMnB4OyAgICBcclxuICB9XHJcbn1cclxuXHJcbkBtaXhpbiBsZWZ0LWFsaWduIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XHJcbiAgZ2FwOiAycHg7XHJcbn1cclxuXHJcbkBtaXhpbiByaWdodC1hbGlnbiB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcclxuICBnYXA6IDJweDtcclxufVxyXG5cclxuQG1peGluIGltYWdlIHtcclxuICBoZWlnaHQ6IDE4cHg7XHJcbiAgbWFyZ2luOiAwIDJweDtcclxuXHJcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDYwMHB4KSB7XHJcbiAgICBoZWlnaHQ6IDEycHg7ICAgIFxyXG4gIH1cclxufSIsIiR3aGl0ZTogd2hpdGU7XHJcbiRibGFjazogYmxhY2s7XHJcbiRncmVlbjogIzg5YWMyNTtcclxuJGJsdWU6ICMyZWIyZmU7XHJcbiRibHVlLWRhcmtlbjogcmdiKDAsIDE0MiwgMjU1LCAwLjQpO1xyXG4kc2t5Ymx1ZTogIzk2ZDlmZjtcclxuJHNreXBpbms6ICNmZmJlYjU7Il19 */"], data: { animation: [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('show', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('void', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 0 })),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(`* => *`, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('1s')),
            ])] } });


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");



const routes = [];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "wfIu":
/*!*************************************************************!*\
  !*** ./src/app/components/target/duck/duck.communicator.ts ***!
  \*************************************************************/
/*! exports provided: DuckCommunicator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DuckCommunicator", function() { return DuckCommunicator; });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _shared_models_message__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/models/message */ "S7Lt");
/* harmony import */ var _utils_communicator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../utils/communicator */ "5uB6");



class DuckCommunicator extends _utils_communicator__WEBPACK_IMPORTED_MODULE_2__["Communicator"] {
    constructor(_subject, _id) {
        super(_subject);
        this._id = _id;
    }
    handleMessanger(_messageHandler) {
        this._subscription = this._subject.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["filter"])(message => message.sender === _shared_models_message__WEBPACK_IMPORTED_MODULE_1__["MessageSender"].Game), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["filter"])(message => message.payload.state.includes(this._id))).subscribe(_messageHandler);
    }
    killMe(state) {
        this.send(_shared_models_message__WEBPACK_IMPORTED_MODULE_1__["MessageAction"].KillDuck, state);
    }
    deleteMe(state) {
        this.send(_shared_models_message__WEBPACK_IMPORTED_MODULE_1__["MessageAction"].RemoveDuck, state);
    }
    forgetMe(state) {
        this.send(_shared_models_message__WEBPACK_IMPORTED_MODULE_1__["MessageAction"].ForgetDuck, state);
    }
    loseMe(state) {
        this.send(_shared_models_message__WEBPACK_IMPORTED_MODULE_1__["MessageAction"].LoseDuck, state);
    }
    reload() {
        this.send(_shared_models_message__WEBPACK_IMPORTED_MODULE_1__["MessageAction"].Reload);
    }
    send(action, state = {}) {
        this._subject.next({
            sender: _shared_models_message__WEBPACK_IMPORTED_MODULE_1__["MessageSender"].Target,
            payload: {
                action, state: Object.assign({}, { id: this._id }, state)
            }
        });
    }
}


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map