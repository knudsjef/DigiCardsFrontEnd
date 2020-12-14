(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\OneDrive - University of Wisconsin-Stout\Fall 2020\CS-458\DigiCardsFrontEnd\src\main.ts */"zUnb");


/***/ }),

/***/ "4fXm":
/*!**************************************************!*\
  !*** ./src/app/component/card/card.component.ts ***!
  \**************************************************/
/*! exports provided: CardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardComponent", function() { return CardComponent; });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ "R0Ic");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _sandbox_sandbox_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../sandbox/sandbox.component */ "62PW");
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "5+WD");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");






const _c0 = function (a0, a1) { return { "card": a0, "lastClickedCard": a1 }; };
class CardComponent {
    constructor(element) {
        this.element = element;
        this.xPos = 200;
        this.flipping = false;
        this.isFlipped = false;
        this.lastClickedCard = false;
        this.initialPosition = this.element.nativeElement.getBoundingClientRect();
    }
    ngOnInit() {
        this.GetImageSource();
        CardComponent.numOfCards++;
        this.xPos += 200 * this.cardInstanceNumber;
    }
    //Changes the scss classes
    ChangeClass() {
        _sandbox_sandbox_component__WEBPACK_IMPORTED_MODULE_2__["SandboxComponent"].GetInstance().ClearCardsClasses(this);
    }
    //Will get the current position in x and y coordinates of the card
    GetPosition(event) {
        //this.xPos = event.source._dragRef.getFreeDragPosition().x;
        //this.yPos = event.source._dragRef.getFreeDragPosition().y;
        //console.log(this.xPos, this.yPos);
    }
    //Flips the card when double clicked
    FlipCardOnDoubleClick() {
        this.isFlipped = !this.isFlipped;
        //this.flipping = true;
        //setTimeout(() => 
        //{
        this.GetImageSource();
        //this.flipping = false;
        //}, 250);
    }
    //Determines the image source
    GetImageSource() {
        if (!this.isFlipped) {
            this.source = '../../../assets/Cards/' + this.type + '/' + (this.number == "-1" ? "CardBack" : this.number) + '.jpg';
        }
        else {
            this.source = '../../../assets/Cards/CardBack.jpg';
        }
    }
}
CardComponent.numOfCards = 0;
CardComponent.ɵfac = function CardComponent_Factory(t) { return new (t || CardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])); };
CardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: CardComponent, selectors: [["app-card"]], inputs: { type: "type", number: "number", disabled: "disabled", cardInstanceNumber: "cardInstanceNumber" }, decls: 2, vars: 11, consts: [["width", "200px", "height", "300px", "cdkDrag", "", 3, "ngClass", "src", "cdkDragDisabled", "mousedown", "cdkDragEnded", "dblclick"]], template: function CardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "img", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("mousedown", function CardComponent_Template_img_mousedown_1_listener() { return ctx.ChangeClass(); })("cdkDragEnded", function CardComponent_Template_img_cdkDragEnded_1_listener($event) { return ctx.GetPosition($event); })("dblclick", function CardComponent_Template_img_dblclick_1_listener() { return ctx.FlipCardOnDoubleClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("top", ctx.yPos)("left", ctx.xPos, "px");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](8, _c0, !ctx.lastClickedCard, ctx.lastClickedCard))("src", ctx.source, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"])("@FlipCard", ctx.flipping ? "NotFlipped" : "Flipped")("cdkDragDisabled", ctx.disabled);
    } }, directives: [_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_3__["CdkDrag"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgClass"]], styles: [".card[_ngcontent-%COMP%] {\n  z-index: 0;\n  position: absolute;\n}\n\n.lastClickedCard[_ngcontent-%COMP%] {\n  z-index: 10;\n  position: absolute;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50L2NhcmQvY2FyZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFVBQUE7RUFDQSxrQkFBQTtBQUNKOztBQUVBO0VBQ0ksV0FBQTtFQUNBLGtCQUFBO0FBQ0oiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnQvY2FyZC9jYXJkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNhcmR7XHJcbiAgICB6LWluZGV4OiAwO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG59XHJcblxyXG4ubGFzdENsaWNrZWRDYXJke1xyXG4gICAgei1pbmRleDogMTA7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbn0iXX0= */"], data: { animation: [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('FlipCard', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('NotFlipped', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
                    transform: 'rotateY(90deg)',
                    position: 'absolute'
                })),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('Flipped', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
                    transform: 'rotateY(0deg)',
                    position: 'absolute'
                })),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('NotFlipped <=> Flipped', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('0.25s')
                ])
            ])
        ] } });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](CardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-card',
                templateUrl: './card.component.html',
                styleUrls: ['./card.component.scss'],
                animations: [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('FlipCard', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('NotFlipped', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
                            transform: 'rotateY(90deg)',
                            position: 'absolute'
                        })),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('Flipped', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
                            transform: 'rotateY(0deg)',
                            position: 'absolute'
                        })),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('NotFlipped <=> Flipped', [
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('0.25s')
                        ])
                    ])
                ]
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }]; }, { type: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], number: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], disabled: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], cardInstanceNumber: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }] }); })();


/***/ }),

/***/ "62PW":
/*!********************************************************!*\
  !*** ./src/app/component/sandbox/sandbox.component.ts ***!
  \********************************************************/
/*! exports provided: SandboxComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SandboxComponent", function() { return SandboxComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _card_card_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../card/card.component */ "4fXm");
/* harmony import */ var src_app_models_cardContainer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/models/cardContainer */ "e5p2");
/* harmony import */ var src_app_models_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/models/card */ "yx/k");





function SandboxComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-card", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const card_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("type", card_r1.type)("number", card_r1.value)("disabled", false);
} }
class SandboxComponent {
    constructor() {
        this.cardComponents = [];
        this.cards = new src_app_models_cardContainer__WEBPACK_IMPORTED_MODULE_2__["cardContainer"];
        //sets the singleton
        if (SandboxComponent.instance == null) {
            SandboxComponent.instance = this;
        }
    }
    ngOnInit() {
        _card_card_component__WEBPACK_IMPORTED_MODULE_1__["CardComponent"].numOfCards = 0;
        this.cards.cards = [Object(src_app_models_card__WEBPACK_IMPORTED_MODULE_3__["makeCard"])(1), Object(src_app_models_card__WEBPACK_IMPORTED_MODULE_3__["makeCard"])(2), Object(src_app_models_card__WEBPACK_IMPORTED_MODULE_3__["makeCard"])(3)];
        _card_card_component__WEBPACK_IMPORTED_MODULE_1__["CardComponent"].numOfCards = 0;
    }
    //Places card in front
    ClearCardsClasses(cardToSetTrue) {
        for (var i = 0; i < this.cardComponents.length; i++) {
            this.cardComponents[i].lastClickedCard = false;
        }
        cardToSetTrue.lastClickedCard = true;
    }
    //gets the singleton
    static GetInstance() {
        return SandboxComponent.instance;
    }
    //Adds a card to the cards
    AddCard(cardType, cardValue, cardFileName) {
        this.cards.cards.push(Object(src_app_models_card__WEBPACK_IMPORTED_MODULE_3__["makeCardFromVals"])(cardType, cardValue));
    }
}
SandboxComponent.ɵfac = function SandboxComponent_Factory(t) { return new (t || SandboxComponent)(); };
SandboxComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SandboxComponent, selectors: [["app-sandbox"]], decls: 3, vars: 1, consts: [[1, "list"], [4, "ngFor", "ngForOf"], [3, "type", "number", "disabled"]], template: function SandboxComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, SandboxComponent_div_2_Template, 3, 3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.cards.cards);
    } }, styles: ["body[_ngcontent-%COMP%] {\n  background-color: black;\n  color: rebeccapurple;\n  width: 100%;\n  height: 100%;\n  margin: 0;\n  min-height: 1000px;\n}\n\nli[_ngcontent-%COMP%] {\n  list-style-type: none;\n}\n\n.card[_ngcontent-%COMP%] {\n  margin: 0px;\n  padding: 0px;\n}\n\n.card[_ngcontent-%COMP%]:hover {\n  z-index: 1;\n}\n\n.cdk-drag-preview[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n  border-radius: 4px;\n  box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2), 0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12);\n}\n\n.cdk-drag-placeholder[_ngcontent-%COMP%] {\n  opacity: 0;\n}\n\n.cdk-drag-animating[_ngcontent-%COMP%] {\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\n}\n\n.movie-block[_ngcontent-%COMP%]:last-child {\n  border: none;\n}\n\n.movie-list.cdk-drop-list-dragging[_ngcontent-%COMP%]   .movie-block[_ngcontent-%COMP%]:not(.cdk-drag-placeholder) {\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50L3NhbmRib3gvc2FuZGJveC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNJLHVCQUFBO0VBQ0Esb0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFNBQUE7RUFDQSxrQkFBQTtBQUFKOztBQUdBO0VBQ0kscUJBQUE7QUFBSjs7QUFHQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0FBQUo7O0FBR0E7RUFDRSxVQUFBO0FBQUY7O0FBR0E7RUFDRSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EscUhBQUE7QUFBRjs7QUFLQTtFQUNFLFVBQUE7QUFGRjs7QUFLQTtFQUNFLHNEQUFBO0FBRkY7O0FBS0E7RUFDRSxZQUFBO0FBRkY7O0FBS0E7RUFDRSxzREFBQTtBQUZGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50L3NhbmRib3gvc2FuZGJveC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5ib2R5e1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XHJcbiAgICBjb2xvcjogcmViZWNjYXB1cnBsZTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgbWluLWhlaWdodDogMTAwMHB4O1xyXG59XHJcblxyXG5saXtcclxuICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcclxufVxyXG5cclxuLmNhcmR7XHJcbiAgICBtYXJnaW46IDBweDtcclxuICAgIHBhZGRpbmc6IDBweDtcclxufVxyXG5cclxuLmNhcmQ6aG92ZXJ7XHJcbiAgei1pbmRleDogMTtcclxufVxyXG5cclxuLmNkay1kcmFnLXByZXZpZXcge1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gIGJveC1zaGFkb3c6IDAgNXB4IDVweCAtM3B4IHJnYmEoMCwgMCwgMCwgMC4yKSxcclxuICAgIDAgOHB4IDEwcHggMXB4IHJnYmEoMCwgMCwgMCwgMC4xNCksXHJcbiAgICAwIDNweCAxNHB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xyXG59XHJcblxyXG4uY2RrLWRyYWctcGxhY2Vob2xkZXIge1xyXG4gIG9wYWNpdHk6IDA7XHJcbn1cclxuXHJcbi5jZGstZHJhZy1hbmltYXRpbmcge1xyXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAyNTBtcyBjdWJpYy1iZXppZXIoMCwgMCwgMC4yLCAxKTtcclxufVxyXG5cclxuLm1vdmllLWJsb2NrOmxhc3QtY2hpbGQge1xyXG4gIGJvcmRlcjogbm9uZTtcclxufVxyXG5cclxuLm1vdmllLWxpc3QuY2RrLWRyb3AtbGlzdC1kcmFnZ2luZyAubW92aWUtYmxvY2s6bm90KC5jZGstZHJhZy1wbGFjZWhvbGRlcikge1xyXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAyNTBtcyBjdWJpYy1iZXppZXIoMCwgMCwgMC4yLCAxKTtcclxufVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SandboxComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-sandbox',
                templateUrl: './sandbox.component.html',
                styleUrls: ['./sandbox.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "8qe0":
/*!****************************************************************!*\
  !*** ./src/app/component/create-user/create-user.component.ts ***!
  \****************************************************************/
/*! exports provided: CreateUserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateUserComponent", function() { return CreateUserComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var crypto_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! crypto-js */ "NFKh");
/* harmony import */ var crypto_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(crypto_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var src_app_services_backend_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/backend-api.service */ "lKBK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");






class CreateUserComponent {
    constructor(backendApiService, route, router) {
        this.backendApiService = backendApiService;
        this.route = route;
        this.router = router;
        this.re = new RegExp('[a-zA-Z0-9._%+-^@]+@[a-zA-Z0-9.-]+\.[a-zA-Z]+'); //regex used to check if email is in correct format
    }
    /** Function when the form is submitted, get the values and pass them to the server */
    submitUserFunction() {
        var real_name = "'" + document.getElementById("real_name").value + "'"; //gets real name
        var username = "'" + document.getElementById("username").value + "'"; //get username
        var email = "'" + document.getElementById("email").value + "'"; //get email
        var hash = "'" + crypto_js__WEBPACK_IMPORTED_MODULE_1__["MD5"](document.getElementById("password").value) + "'"; //get password and hash it immediately
        var dict = { "real_name": real_name, "username": username, "hash": hash, "email": email }; //place the variables into the dictionary
        if (document.getElementById("password").value != document.getElementById("confirmpassword").value || document.getElementById("password").value == "") {
            alert("Passwords don't match"); //if password and confirm password don't match, error
        }
        else if (this.re.test(email) == false) {
            alert("Email not valid"); //if email isn't in correct format, error
        }
        else if (username == "''") {
            alert("Invalid name"); //if username is left blank, error
        }
        else {
            this.backendApiService.backendRequest("persistInsertUser", dict).subscribe(obj => {
                if (obj.hasOwnProperty('error')) {
                    var errormsg = obj.error; //if the server has an error, display it
                    alert("Error! " + errormsg);
                }
                else {
                    this.router.navigateByUrl('/login'); //return to homepage after user is created
                }
            });
        }
    }
    /** Event function that looks for the 'Enter' key being pressed */
    keyPress(Event) {
        if (Event.keyCode == 13) {
            this.submitUserFunction(); //submits create user if enter is pressed
        }
    }
    ngOnInit() {
    }
}
CreateUserComponent.ɵfac = function CreateUserComponent_Factory(t) { return new (t || CreateUserComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_backend_api_service__WEBPACK_IMPORTED_MODULE_2__["BackendApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
CreateUserComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CreateUserComponent, selectors: [["app-create-user"]], decls: 31, vars: 0, consts: [[2, "background-color", "honeydew"], [2, "text-align", "center", "margin-top", "100px"], [1, "container"], ["action", "/action_page.php", 2, "text-align", "center", 3, "keydown"], ["for", "name", 2, "font-size", "25px"], ["type", "text", "id", "real_name", "name", "name"], ["for", "username", 2, "font-size", "25px"], ["type", "text", "id", "username", "name", "username"], ["for", "email", 2, "font-size", "25px"], ["type", "text", "id", "email", "name", "email"], ["for", "password", 2, "font-size", "25px"], ["type", "password", "id", "password", "name", "password"], ["type", "password", "id", "confirmpassword", "name", "confirmpassword"], ["type", "button", 2, "width", "100px", 3, "click"]], template: function CreateUserComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Create New Account");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "form", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keydown", function CreateUserComponent_Template_form_keydown_4_listener($event) { return ctx.keyPress($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "label", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Full Name: \u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "UserName: \u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "label", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Email: \u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Password: \u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Confirm Password: \u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CreateUserComponent_Template_button_click_26_listener() { return ctx.submitUserFunction(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, " Submit ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgForm"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudC9jcmVhdGUtdXNlci9jcmVhdGUtdXNlci5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CreateUserComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-create-user',
                templateUrl: './create-user.component.html',
                styleUrls: ['./create-user.component.scss']
            }]
    }], function () { return [{ type: src_app_services_backend_api_service__WEBPACK_IMPORTED_MODULE_2__["BackendApiService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }]; }, null); })();


/***/ }),

/***/ "9Yd6":
/*!****************************************************************!*\
  !*** ./src/app/component/multiplayer/multiplayer.component.ts ***!
  \****************************************************************/
/*! exports provided: MultiplayerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MultiplayerComponent", function() { return MultiplayerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class MultiplayerComponent {
    constructor() { }
    ngOnInit() {
    }
}
MultiplayerComponent.ɵfac = function MultiplayerComponent_Factory(t) { return new (t || MultiplayerComponent)(); };
MultiplayerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MultiplayerComponent, selectors: [["app-multiplayer"]], decls: 0, vars: 0, template: function MultiplayerComponent_Template(rf, ctx) { }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudC9tdWx0aXBsYXllci9tdWx0aXBsYXllci5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MultiplayerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-multiplayer',
                templateUrl: './multiplayer.component.html',
                styleUrls: ['./multiplayer.component.scss']
            }]
    }], function () { return []; }, null); })();


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

/***/ "EFyh":
/*!*******************************************!*\
  !*** ./src/app/services/login.service.ts ***!
  \*******************************************/
/*! exports provided: LoginService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginService", function() { return LoginService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-cookie-service */ "b6Qw");
/* harmony import */ var _backend_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./backend-api.service */ "lKBK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");





class LoginService {
    constructor(cookieService, backendApiService, router) {
        this.cookieService = cookieService;
        this.backendApiService = backendApiService;
        this.router = router;
    }
    login(username, useremail, id, certificate) {
        this.cookieService.set('loggedIn', 'true');
        this.cookieService.set('name', username);
        this.cookieService.set('email', useremail);
        this.cookieService.set('userID', id.toString());
        this.cookieService.set('certificate', certificate);
    }
    isLoggedIn() {
        return this.cookieService.get('loggedIn') == 'true';
    }
    getRole() {
        return this.cookieService.get('role');
    }
    getName() {
        return this.cookieService.get('name');
    }
    getID() {
        return +this.cookieService.get('userID');
    }
    getCertificate() {
        return this.cookieService.get('certificate');
    }
    getEmail() {
        return this.cookieService.get('email');
    }
    logout() {
        this.cookieService.delete('loggedIn');
        this.cookieService.delete('role');
        this.cookieService.delete('name');
        this.cookieService.delete('email');
        this.cookieService.delete('userID');
        this.cookieService.delete('certificate');
    }
    submitLoginFunction(email, hash) {
        var dict = { "hash": hash, "email": email }; //put variables into a dictionary
        dict["certificate"] = this.getCertificate();
        dict["userID"] = this.getID();
        /**
         * Login user query to backend server.
         * The password hash and the email entered by the user are passed in.
         * Returns a named error is credentials are invalid
         * and returns the name, email, user id, and cookie verification certificate if valid
         */
        return this.backendApiService.backendRequest("loginUser", dict);
    }
}
LoginService.ɵfac = function LoginService_Factory(t) { return new (t || LoginService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](ngx_cookie_service__WEBPACK_IMPORTED_MODULE_1__["CookieService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_backend_api_service__WEBPACK_IMPORTED_MODULE_2__["BackendApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
LoginService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: LoginService, factory: LoginService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_1__["CookieService"] }, { type: _backend_api_service__WEBPACK_IMPORTED_MODULE_2__["BackendApiService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }]; }, null); })();


/***/ }),

/***/ "IQ74":
/*!************************************************************!*\
  !*** ./src/app/component/join-game/join-game.component.ts ***!
  \************************************************************/
/*! exports provided: JoinGameComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JoinGameComponent", function() { return JoinGameComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_backend_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/backend-api.service */ "lKBK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");






function JoinGameComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "a", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function JoinGameComponent_div_7_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r4); const i_r2 = ctx.index; const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r3.joinGame(ctx_r3.currentGameIDs[i_r2]); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Join");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r2 = ctx.index;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"]("Game ID: ", ctx_r0.currentGameIDs[i_r2], " Player Count: ", ctx_r0.currentGamePlayerNums[i_r2], " ");
} }
class JoinGameComponent {
    constructor(backendApiService, router) {
        this.backendApiService = backendApiService;
        this.router = router;
    }
    ngOnInit() {
        this.getGames();
    }
    getGames() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            var dict = {};
            dict["gameType"] = "blackjack";
            this.backendApiService.backendRequest("getGames", dict).subscribe(obj => {
                this.currentGameIDs = Object.keys(obj).map(key => Number(key));
                this.currentGamePlayerNums = Object.keys(obj).map(key => Number(obj[key]));
            });
        });
    }
    joinGame(gameID) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            var dict = {};
            dict["gameID"] = gameID;
            this.backendApiService.backendRequest("joinGame", dict).subscribe(obj => {
                console.log("join", obj);
                this.playerID = obj.playerID;
                this.router.navigate(['/blackjack/' + gameID + '/' + this.playerID]);
            });
        });
    }
}
JoinGameComponent.ɵfac = function JoinGameComponent_Factory(t) { return new (t || JoinGameComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_backend_api_service__WEBPACK_IMPORTED_MODULE_2__["BackendApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
JoinGameComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: JoinGameComponent, selectors: [["app-join-game"]], decls: 8, vars: 1, consts: [[1, "card", "text-center", "bg-dark", "text-white", 2, "min-width", "500px", "max-width", "65%", "border-color", "black"], [1, "card-body"], [1, "card-title"], [1, "row", 2, "justify-content", "center", "margin", "10px"], [1, "col-4", 2, "min-width", "400px", "max-width", "max-content"], ["id", "list-tab", "role", "tablist", 1, "list-group"], [4, "ngFor", "ngForOf"], ["id", "list-home-list", "role", "tab", "aria-controls", "home", 1, "list-group-item", "list-group-item-action", "active"], ["type", "button", 1, "btn", "btn-secondary", 2, "margin-left", "15px", 3, "click"]], template: function JoinGameComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "h1", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Join Game");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, JoinGameComponent_div_7_Template, 5, 2, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.currentGameIDs);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"]], styles: [".card[_ngcontent-%COMP%] {\n  margin: 0 auto;\n  float: none;\n  margin-bottom: 10px;\n  border-radius: 8px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50L2pvaW4tZ2FtZS9qb2luLWdhbWUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxjQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUFDSiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudC9qb2luLWdhbWUvam9pbi1nYW1lLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNhcmQge1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICBmbG9hdDogbm9uZTtcclxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](JoinGameComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-join-game',
                templateUrl: './join-game.component.html',
                styleUrls: ['./join-game.component.scss']
            }]
    }], function () { return [{ type: src_app_services_backend_api_service__WEBPACK_IMPORTED_MODULE_2__["BackendApiService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }]; }, null); })();


/***/ }),

/***/ "K/tP":
/*!************************************************************!*\
  !*** ./src/app/component/blackjack/blackjack.component.ts ***!
  \************************************************************/
/*! exports provided: BlackjackComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlackjackComponent", function() { return BlackjackComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var src_app_models_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/models/card */ "yx/k");
/* harmony import */ var src_app_models_cardContainer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/models/cardContainer */ "e5p2");
/* harmony import */ var _card_card_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../card/card.component */ "4fXm");
/* harmony import */ var src_app_services_backend_api_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/backend-api.service */ "lKBK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "tyNb");









function BlackjackComponent_button_1_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function BlackjackComponent_button_1_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r5.deal(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Deal");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx_r0.roundActive);
} }
function BlackjackComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate3"]("", ctx_r1.playerWinOrLose, " ", ctx_r1.finalDealerScore, " ", ctx_r1.finalPlayerScore, "");
} }
function BlackjackComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "app-card", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const card_r7 = ctx.$implicit;
    const i_r8 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("type", card_r7.type)("number", card_r7.value)("disabled", true)("cardInstanceNumber", i_r8);
} }
function BlackjackComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "app-card", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const card_r9 = ctx.$implicit;
    const i_r10 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("type", card_r9.type)("number", card_r9.value)("disabled", true)("cardInstanceNumber", i_r10);
} }
function BlackjackComponent_div_9_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "app-card", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const card_r13 = ctx.$implicit;
    const i_r14 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("type", card_r13.type)("number", card_r13.value)("disabled", true)("cardInstanceNumber", i_r14);
} }
function BlackjackComponent_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, BlackjackComponent_div_9_div_1_Template, 2, 4, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const player_r11 = ctx.$implicit;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r4.gameContainers.get(player_r11).cards);
} }
class BlackjackComponent {
    constructor(backendApiService, route) {
        this.backendApiService = backendApiService;
        this.route = route;
        this.source = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["interval"])(1000);
    }
    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            _card_card_component__WEBPACK_IMPORTED_MODULE_5__["CardComponent"].numOfCards = 0;
            this.gameID = Number(this.route.snapshot.paramMap.get('gameID'));
            this.playerID = this.route.snapshot.paramMap.get('playerID');
            this.isTurn = false;
            this.otherPlayers = [];
            this.gameContainers = new Map();
            this.gameContainers.set(this.playerID, Object(src_app_models_cardContainer__WEBPACK_IMPORTED_MODULE_4__["emptyCardContainer"])());
            this.gameContainers.set("dealer", Object(src_app_models_cardContainer__WEBPACK_IMPORTED_MODULE_4__["emptyCardContainer"])());
            BlackjackComponent.instance = this;
            this.subscription = this.source.subscribe(val => this.checkTurn());
        });
    }
    static GetInstance() {
        return BlackjackComponent.instance;
    }
    getGames() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            var dict = {};
            dict["gameID"] = this.gameID;
            dict["method"] = "getGames";
            this.backendApiService.backendRequest("blackjack", dict).subscribe(obj => {
                _card_card_component__WEBPACK_IMPORTED_MODULE_5__["CardComponent"].numOfCards = 0;
            });
        });
    }
    deal() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            _card_card_component__WEBPACK_IMPORTED_MODULE_5__["CardComponent"].numOfCards = 0;
            var dict = {};
            dict["gameID"] = this.gameID;
            dict["method"] = "deal";
            this.backendApiService.backendRequest("blackjack", dict).subscribe((obj) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                _card_card_component__WEBPACK_IMPORTED_MODULE_5__["CardComponent"].numOfCards = 0;
                yield this.checkTurn();
            }));
        });
    }
    hit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            var dict = {};
            dict["gameID"] = this.gameID;
            dict["method"] = "hit";
            dict["hand"] = this.playerID;
            this.backendApiService.backendRequest("blackjack", dict).subscribe((obj) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                _card_card_component__WEBPACK_IMPORTED_MODULE_5__["CardComponent"].numOfCards = 0;
                yield this.checkTurn();
            }));
        });
    }
    stay() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            console.log(this.gameID);
            console.log(this.gameContainers);
            var dict = {};
            dict["gameID"] = this.gameID;
            dict["method"] = "stay";
            dict["hand"] = this.playerID;
            this.backendApiService.backendRequest("blackjack", dict).subscribe((obj) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                _card_card_component__WEBPACK_IMPORTED_MODULE_5__["CardComponent"].numOfCards = 0;
                yield this.checkTurn();
            }));
        });
    }
    updateHand() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            var dict = {};
            dict["gameID"] = this.gameID;
            dict["method"] = "getHand";
            dict["hand"] = this.playerID;
            this.backendApiService.backendRequest("blackjack", dict).subscribe(obj => {
                _card_card_component__WEBPACK_IMPORTED_MODULE_5__["CardComponent"].numOfCards = 0;
                var temp = Object(src_app_models_cardContainer__WEBPACK_IMPORTED_MODULE_4__["emptyCardContainer"])();
                for (var key in obj) {
                    temp.cards.push(Object(src_app_models_card__WEBPACK_IMPORTED_MODULE_3__["makeCard"])(obj[key].cardNum));
                }
                this.gameContainers.set(this.playerID, temp);
            });
        });
    }
    updateAll() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            var dict = {};
            dict["gameID"] = this.gameID;
            dict["method"] = "showCards";
            this.backendApiService.backendRequest("blackjack", dict).subscribe((obj) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                _card_card_component__WEBPACK_IMPORTED_MODULE_5__["CardComponent"].numOfCards = 0;
                this.otherPlayers = [];
                for (var key in obj) {
                    this.otherPlayers.push(key);
                    var temp = Object(src_app_models_cardContainer__WEBPACK_IMPORTED_MODULE_4__["emptyCardContainer"])();
                    for (var cardKey in obj[key]) {
                        temp.cards.push(Object(src_app_models_card__WEBPACK_IMPORTED_MODULE_3__["makeCard"])(obj[key][cardKey].cardNum));
                    }
                    _card_card_component__WEBPACK_IMPORTED_MODULE_5__["CardComponent"].numOfCards = 0;
                    if (key != this.playerID) {
                        this.gameContainers.set(key, temp);
                    }
                }
                this.otherPlayers.splice(this.otherPlayers.lastIndexOf(this.playerID), 1);
                this.otherPlayers.splice(this.otherPlayers.lastIndexOf("dealer"), 1);
                yield this.updateHand();
            }));
        });
    }
    checkTurn() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            var dict = {};
            dict["gameID"] = this.gameID;
            dict["method"] = "checkIfTurn";
            dict["hand"] = this.playerID;
            this.backendApiService.backendRequest("blackjack", dict).subscribe((obj) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                _card_card_component__WEBPACK_IMPORTED_MODULE_5__["CardComponent"].numOfCards = 0;
                this.roundActive = obj.roundActive == "true" ? true : false;
                this.isTurn = obj.isTurn == "true" ? true : false;
                this.finalPlayerScore = obj.PlayerScore;
                this.finalDealerScore = obj.DealerScore;
                this.playerWinOrLose = obj.WinOrLose;
                yield this.updateAll();
            }));
        });
    }
}
BlackjackComponent.ɵfac = function BlackjackComponent_Factory(t) { return new (t || BlackjackComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_backend_api_service__WEBPACK_IMPORTED_MODULE_6__["BackendApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"])); };
BlackjackComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: BlackjackComponent, selectors: [["app-blackjack"]], inputs: { playerID: "playerID", gameID: "gameID" }, decls: 10, vars: 7, consts: [[2, "width", "1920px", "height", "1080px"], ["type", "button", "class", "btn btn-primary btn-circle btn-xl", 3, "disabled", "click", 4, "ngIf"], ["type", "button", 1, "btn", "btn-success", "btn-circle", "btn-xl", 3, "disabled", "click"], ["type", "button", 1, "btn", "btn-danger", "btn-circle", "btn-xl", 3, "disabled", "click"], ["style", "font-size:36px;color:white", 4, "ngIf"], ["class", "player", 4, "ngFor", "ngForOf"], ["class", "dealer", 4, "ngFor", "ngForOf"], ["class", "otherPlayers", 4, "ngFor", "ngForOf"], ["type", "button", 1, "btn", "btn-primary", "btn-circle", "btn-xl", 3, "disabled", "click"], [2, "font-size", "36px", "color", "white"], [1, "player"], [3, "type", "number", "disabled", "cardInstanceNumber"], [1, "dealer"], [1, "otherPlayers"], [4, "ngFor", "ngForOf"]], template: function BlackjackComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, BlackjackComponent_button_1_Template, 2, 1, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function BlackjackComponent_Template_button_click_2_listener() { return ctx.hit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Hit");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function BlackjackComponent_Template_button_click_4_listener() { return ctx.stay(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Stay");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, BlackjackComponent_div_6_Template, 2, 3, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, BlackjackComponent_div_7_Template, 2, 4, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, BlackjackComponent_div_8_Template, 2, 4, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, BlackjackComponent_div_9_Template, 2, 1, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.playerID == "player1");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", !ctx.isTurn);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", !ctx.isTurn);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.roundActive);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.gameContainers.get(ctx.playerID).cards);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.gameContainers.get("dealer").cards);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.otherPlayers);
    } }, styles: [".btn-circle.btn-xl[_ngcontent-%COMP%] {\n  width: 70px;\n  height: 70px;\n  padding: 10px 16px;\n  border-radius: 35px;\n  font-size: 12px;\n  text-align: center;\n}\n\n.player[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 300px;\n  right: 1250px;\n}\n\n.otherPlayers[_ngcontent-%COMP%] {\n  position: absolute;\n  transform: rotate(90deg) scale(0.25);\n  left: 500px;\n}\n\n.dealer[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 1250px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50L2JsYWNramFjay9ibGFja2phY2suY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7QUFDSjs7QUFFQTtFQUNJLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLGFBQUE7QUFDSjs7QUFFQTtFQUVJLGtCQUFBO0VBQ0Esb0NBQUE7RUFDQSxXQUFBO0FBQUo7O0FBR0E7RUFDSSxrQkFBQTtFQUNBLGFBQUE7QUFBSiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudC9ibGFja2phY2svYmxhY2tqYWNrLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJ0bi1jaXJjbGUuYnRuLXhse1xyXG4gICAgd2lkdGg6IDcwcHg7XHJcbiAgICBoZWlnaHQ6IDcwcHg7XHJcbiAgICBwYWRkaW5nOiAxMHB4IDE2cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAzNXB4O1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4ucGxheWVye1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlOyBcclxuICAgIGJvdHRvbTogMzAwcHg7IFxyXG4gICAgcmlnaHQ6IDEyNTBweDtcclxufVxyXG5cclxuLm90aGVyUGxheWVyc1xyXG57XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZykgc2NhbGUoMC4yNSk7XHJcbiAgICBsZWZ0OiA1MDBweDtcclxufVxyXG5cclxuLmRlYWxlcntcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHJpZ2h0OiAxMjUwcHg7XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](BlackjackComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-blackjack',
                templateUrl: './blackjack.component.html',
                styleUrls: ['./blackjack.component.scss']
            }]
    }], function () { return [{ type: src_app_services_backend_api_service__WEBPACK_IMPORTED_MODULE_6__["BackendApiService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"] }]; }, { playerID: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], gameID: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }] }); })();


/***/ }),

/***/ "PfSQ":
/*!************************************************************!*\
  !*** ./src/app/component/host-game/host-game.component.ts ***!
  \************************************************************/
/*! exports provided: HostGameComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HostGameComponent", function() { return HostGameComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var src_app_services_backend_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/backend-api.service */ "lKBK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");






class HostGameComponent {
    constructor(backendApiService, router) {
        this.backendApiService = backendApiService;
        this.router = router;
        this.source = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["interval"])(1000);
    }
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.hostGame();
            this.subscription = this.source.subscribe(val => this.getGames());
        });
    }
    hostGame() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            var dict = {};
            dict["gameType"] = "blackjack";
            this.backendApiService.backendRequest("hostGame", dict).subscribe((obj) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                console.log(obj);
                this.gameID = obj.blackjack;
                yield this.joinGame();
            }));
        });
    }
    setup() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            var dict = {};
            dict["gameID"] = this.gameID;
            dict["method"] = "setup";
            console.log(dict);
            this.backendApiService.backendRequest("blackjack", dict).subscribe(obj => {
                console.log("setup", obj);
            });
            this.router.navigate(['/blackjack/' + this.gameID + '/' + this.playerID]);
        });
    }
    joinGame() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            var dict = {};
            dict["gameID"] = this.gameID;
            this.backendApiService.backendRequest("joinGame", dict).subscribe(obj => {
                console.log("join", obj);
                this.playerID = obj.playerID;
            });
        });
    }
    getGames() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            var dict = {};
            dict["gameType"] = "blackjack";
            this.backendApiService.backendRequest("getGames", dict).subscribe(obj => {
                this.currentGamePlayerNums = Object.keys(obj).map(key => Number(obj[key]));
            });
        });
    }
}
HostGameComponent.ɵfac = function HostGameComponent_Factory(t) { return new (t || HostGameComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_backend_api_service__WEBPACK_IMPORTED_MODULE_3__["BackendApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"])); };
HostGameComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: HostGameComponent, selectors: [["app-host-game"]], decls: 21, vars: 2, consts: [[1, "card", "text-center", "bg-dark", "text-white", 2, "min-width", "500px", "max-width", "65%", "border-color", "black"], [1, "card-body"], [1, "card-title"], [1, "card-subtitle"], [1, "row", 2, "justify-content", "center", "margin", "10px"], [1, "col-4"], ["id", "list-tab", "role", "tablist", 1, "list-group"], ["id", "list-home-list", "role", "tab", "aria-controls", "home", 1, "list-group-item", "list-group-item-action", "active"], ["id", "list-profile-list", "role", "tab", "aria-controls", "profile", 1, "list-group-item", "list-group-item-action", "disabled"], ["id", "list-messages-list", "role", "tab", "aria-controls", "messages", 1, "list-group-item", "list-group-item-action", "disabled"], ["id", "list-settings-list", "role", "tab", "aria-controls", "settings", 1, "list-group-item", "list-group-item-action", "disabled"], ["type", "button", 1, "btn", "btn-primary", 2, "margin-top", "10px", 3, "click"]], template: function HostGameComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "h1", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Host Game");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "h6", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Blackjack");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Hold'em");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "War");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "Slapjack");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "h6", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HostGameComponent_Template_button_click_19_listener() { return ctx.setup(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "Start Game");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Game ID: ", ctx.gameID, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Players In Lobby: ", ctx.currentGamePlayerNums[ctx.gameID - 1], "");
    } }, styles: [".card[_ngcontent-%COMP%] {\n  margin: 0 auto;\n  float: none;\n  margin-bottom: 10px;\n  border-radius: 8px;\n}\n\n.disabled[_ngcontent-%COMP%] {\n  color: gray;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50L2hvc3QtZ2FtZS9ob3N0LWdhbWUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxjQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUFDSjs7QUFFQTtFQUNJLFdBQUE7QUFDSiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudC9ob3N0LWdhbWUvaG9zdC1nYW1lLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNhcmQge1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICBmbG9hdDogbm9uZTtcclxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbn1cclxuXHJcbi5kaXNhYmxlZHtcclxuICAgIGNvbG9yOiBncmF5O1xyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](HostGameComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-host-game',
                templateUrl: './host-game.component.html',
                styleUrls: ['./host-game.component.scss']
            }]
    }], function () { return [{ type: src_app_services_backend_api_service__WEBPACK_IMPORTED_MODULE_3__["BackendApiService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }]; }, null); })();


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
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jquery */ "EVdn");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-spinner */ "JqCM");
/* harmony import */ var _services_backend_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/backend-api.service */ "lKBK");
/* harmony import */ var _services_login_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./services/login.service */ "EFyh");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-cookie-service */ "b6Qw");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "tyNb");









function AppComponent_p_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Welcome back, ", ctx_r0.loginService.getName(), "!");
} }
const _c0 = function () { return ["/login"]; };
function AppComponent_a_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c0));
} }
const _c1 = function () { return ["/"]; };
function AppComponent_a_12_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "img", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_a_12_Template_img_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.logoutFunction(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c1));
} }
const _c2 = function () { return ["/sandbox"]; };
const _c3 = function () { return ["blackjack"]; };
const _c4 = function () { return ["/join-game"]; };
const _c5 = function () { return ["/host-game"]; };
const _c6 = function () { return ["/leaderboard"]; };
class AppComponent {
    constructor(spinner, backendApiService, loginService, cookieService) {
        this.spinner = spinner;
        this.backendApiService = backendApiService;
        this.loginService = loginService;
        this.cookieService = cookieService;
        this.dropdownOpen = false;
        this.loggedIn = false;
    }
    logoutFunction() {
        this.cookieService.deleteAll();
        this.loginService.logout();
    }
    ngOnInit() {
        //Toggle Click Function
        jquery__WEBPACK_IMPORTED_MODULE_1__("#menu-toggle").click(function (e) {
            e.preventDefault();
            jquery__WEBPACK_IMPORTED_MODULE_1__("#wrapper").toggleClass("toggled");
        });
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_spinner__WEBPACK_IMPORTED_MODULE_2__["NgxSpinnerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_backend_api_service__WEBPACK_IMPORTED_MODULE_3__["BackendApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_login_service__WEBPACK_IMPORTED_MODULE_4__["LoginService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_cookie_service__WEBPACK_IMPORTED_MODULE_5__["CookieService"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 33, vars: 13, consts: [[1, "full"], ["id", "wrapper", 1, "d-flex"], ["id", "sidebar-wrapper", 1, "navbar-custom", "border-right"], [2, "justify-content", "right", "margin-left", "320px"], ["id", "menu-toggle", 1, "navbar-toggler", "collapsed"], ["src", "https://mdbootstrap.com/img/svg/hamburger1.svg?color=287CEB", 2, "display", "inline-block"], [1, "sidebar-heading", 2, "justify-content", "right"], [1, "btn"], ["src", "assets/img/digicard_logo_1.jpg", 2, "display", "inline-block"], [1, "list-group", "list-group-flush"], ["style", "margin-left:20px; margin-right:10px; color:black", 4, "ngIf"], ["class", "btn", 3, "routerLink", 4, "ngIf"], ["data-toggle", "collapse", "href", "#singleplayer", "aria-expanded", "false", "aria-controls", "collapse", 1, "btn"], ["src", "assets/img/singleplayer.png", 1, "navbar-image", "singleplayer-button", 2, "display", "inline-block"], ["id", "singleplayer", 1, "collapse", "multi-collapse"], [1, "btn", "sandbox-button", 3, "routerLink"], ["src", "assets/img/sandbox.png", 1, "navbar-drop-image", 2, "display", "inline-block"], [1, "btn", "blackjack-button-sp", 3, "routerLink"], ["src", "assets/img/Blackjack.png", 1, "navbar-drop-image", 2, "display", "inline-block"], ["data-toggle", "collapse", "href", "#multiplayer", "aria-expanded", "false", "aria-controls", "collapse", 1, "btn"], ["src", "assets/img/multiplayer.png", 1, "navbar-image", 2, "display", "inline-block"], ["id", "multiplayer", 1, "collapse", "multi-collapse"], [1, "btn", "holdem-button", 3, "routerLink"], ["src", "assets/img/JoinGame.png", 1, "navbar-drop-image", 2, "display", "inline-block"], [1, "btn", "blackjack-button-mp", 3, "routerLink"], ["src", "assets/img/HostGame.png", 1, "navbar-drop-image", 2, "display", "inline-block"], [1, "btn", 3, "routerLink"], ["src", "assets/img/leaderboard.png", 1, "navbar-image-leaderboard", 2, "display", "inline-block"], ["id", "page-content-wrapper"], ["id", "component", 2, "margin-top", "106px"], [2, "margin-left", "20px", "margin-right", "10px", "color", "black"], ["src", "assets/img/login.png", 1, "navbar-image-login", 2, "display", "inline-block"], ["src", "assets/img/logout.png", 1, "navbar-image-logout", 2, "display", "inline-block", 3, "click"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, AppComponent_p_10_Template, 2, 1, "p", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, AppComponent_a_11_Template, 2, 2, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, AppComponent_a_12_Template, 2, 2, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "img", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "img", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "img", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "a", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "img", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "a", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "img", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "a", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "img", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "a", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "img", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loginService.isLoggedIn());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.loginService.isLoggedIn());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loginService.isLoggedIn());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](8, _c2));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](9, _c3));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](10, _c4));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](11, _c5));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](12, _c6));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterOutlet"]], styles: ["body[_ngcontent-%COMP%] {\n  overflow-x: hidden;\n}\n\n#sidebar-wrapper[_ngcontent-%COMP%] {\n  min-height: 100vh;\n  margin-left: -15rem;\n  transition: margin 0.25s ease-out;\n}\n\n#sidebar-wrapper[_ngcontent-%COMP%]   .sidebar-heading[_ngcontent-%COMP%] {\n  padding: 0.875rem 1.25rem;\n  font-size: 1.2rem;\n}\n\n#sidebar-wrapper[_ngcontent-%COMP%]   .list-group[_ngcontent-%COMP%] {\n  width: 15rem;\n}\n\n#page-content-wrapper[_ngcontent-%COMP%] {\n  min-width: 100vw;\n}\n\n#wrapper.toggled[_ngcontent-%COMP%]   #sidebar-wrapper[_ngcontent-%COMP%] {\n  margin-left: 0;\n}\n\n@media (min-width: 790px) {\n  #sidebar-wrapper[_ngcontent-%COMP%] {\n    margin-left: 0;\n    width: 390px;\n  }\n\n  #page-content-wrapper[_ngcontent-%COMP%] {\n    min-width: 0;\n    width: 100%;\n  }\n\n  #wrapper.toggled[_ngcontent-%COMP%]   #sidebar-wrapper[_ngcontent-%COMP%] {\n    margin-left: -20rem;\n  }\n}\n\n.navbar-custom[_ngcontent-%COMP%] {\n  background-color: #2AB399;\n}\n\n.navbar-image[_ngcontent-%COMP%] {\n  width: 100%;\n  height: auto;\n}\n\n.navbar-image-login[_ngcontent-%COMP%] {\n  width: 50%;\n  height: auto;\n}\n\n.navbar-image-logout[_ngcontent-%COMP%] {\n  width: 50%;\n  height: auto;\n}\n\n.navbar-image-sandbox[_ngcontent-%COMP%] {\n  width: 70%;\n  height: auto;\n}\n\n.navbar-image-leaderboard[_ngcontent-%COMP%] {\n  width: 100%;\n  height: auto;\n}\n\n.navbar-drop-image[_ngcontent-%COMP%] {\n  margin-left: 10px;\n  height: 40px;\n  width: auto;\n}\n\n.full[_ngcontent-%COMP%] {\n  background-image: url(\"/assets/img/Full_Background.png\");\n  width: 100%;\n  height: 100%;\n}\n\n.navbar-toggler[_ngcontent-%COMP%] {\n  width: auto;\n  height: 40px;\n}\n\n.navbar.navbar-2[_ngcontent-%COMP%]   .navbar-toggler-icon[_ngcontent-%COMP%] {\n  background-image: url(https://mdbootstrap.com/img/svg/hamburger2.svg);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQUE7QUFDSjs7QUFDRTtFQUNFLGlCQUFBO0VBQ0EsbUJBQUE7RUFJQSxpQ0FBQTtBQUVKOztBQUFFO0VBQ0UseUJBQUE7RUFDQSxpQkFBQTtBQUdKOztBQURFO0VBQ0UsWUFBQTtBQUlKOztBQUZFO0VBQ0UsZ0JBQUE7QUFLSjs7QUFIRTtFQUNFLGNBQUE7QUFNSjs7QUFKRTtFQUNFO0lBQ0UsY0FBQTtJQUNBLFlBQUE7RUFPSjs7RUFMRTtJQUNFLFlBQUE7SUFDQSxXQUFBO0VBUUo7O0VBTkU7SUFDRSxtQkFBQTtFQVNKO0FBQ0Y7O0FBUEE7RUFDSSx5QkFBQTtBQVNKOztBQVBBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7QUFVSjs7QUFSQTtFQUNFLFVBQUE7RUFDQSxZQUFBO0FBV0Y7O0FBUkE7RUFDRSxVQUFBO0VBQ0EsWUFBQTtBQVdGOztBQVRBO0VBQ0ksVUFBQTtFQUNBLFlBQUE7QUFZSjs7QUFWQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0FBYUo7O0FBWEE7RUFDSSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FBY0o7O0FBWkE7RUFDSSx3REFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FBZUo7O0FBYkE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtBQWdCRjs7QUFiQTtFQUNFLHFFQUFBO0FBZ0JGIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYm9keSB7XHJcbiAgICBvdmVyZmxvdy14OiBoaWRkZW47XHJcbiAgfVxyXG4gICNzaWRlYmFyLXdyYXBwZXIge1xyXG4gICAgbWluLWhlaWdodDogMTAwdmg7XHJcbiAgICBtYXJnaW4tbGVmdDogLTE1cmVtO1xyXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiBtYXJnaW4gLjI1cyBlYXNlLW91dDtcclxuICAgIC1tb3otdHJhbnNpdGlvbjogbWFyZ2luIC4yNXMgZWFzZS1vdXQ7XHJcbiAgICAtby10cmFuc2l0aW9uOiBtYXJnaW4gLjI1cyBlYXNlLW91dDtcclxuICAgIHRyYW5zaXRpb246IG1hcmdpbiAuMjVzIGVhc2Utb3V0O1xyXG4gIH1cclxuICAjc2lkZWJhci13cmFwcGVyIC5zaWRlYmFyLWhlYWRpbmcge1xyXG4gICAgcGFkZGluZzogMC44NzVyZW0gMS4yNXJlbTtcclxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xyXG4gIH1cclxuICAjc2lkZWJhci13cmFwcGVyIC5saXN0LWdyb3VwIHtcclxuICAgIHdpZHRoOiAxNXJlbTtcclxuICB9XHJcbiAgI3BhZ2UtY29udGVudC13cmFwcGVyIHtcclxuICAgIG1pbi13aWR0aDogMTAwdnc7XHJcbiAgfVxyXG4gICN3cmFwcGVyLnRvZ2dsZWQgI3NpZGViYXItd3JhcHBlciB7XHJcbiAgICBtYXJnaW4tbGVmdDogMDtcclxuICB9XHJcbiAgQG1lZGlhIChtaW4td2lkdGg6IDc5MHB4KSB7XHJcbiAgICAjc2lkZWJhci13cmFwcGVyIHtcclxuICAgICAgbWFyZ2luLWxlZnQ6IDA7XHJcbiAgICAgIHdpZHRoOiAzOTBweDtcclxuICAgIH1cclxuICAgICNwYWdlLWNvbnRlbnQtd3JhcHBlciB7XHJcbiAgICAgIG1pbi13aWR0aDogMDtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICB9XHJcbiAgICAjd3JhcHBlci50b2dnbGVkICNzaWRlYmFyLXdyYXBwZXIge1xyXG4gICAgICBtYXJnaW4tbGVmdDogLTIwcmVtO1xyXG4gICAgfVxyXG59XHJcbi5uYXZiYXItY3VzdG9tIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyQUIzOTlcclxufVxyXG4ubmF2YmFyLWltYWdlIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG59XHJcbi5uYXZiYXItaW1hZ2UtbG9naW4ge1xyXG4gIHdpZHRoOjUwJTtcclxuICBoZWlnaHQ6YXV0bztcclxufVxyXG5cclxuLm5hdmJhci1pbWFnZS1sb2dvdXQge1xyXG4gIHdpZHRoOiA1MCU7XHJcbiAgaGVpZ2h0OiBhdXRvO1xyXG59XHJcbi5uYXZiYXItaW1hZ2Utc2FuZGJveCB7XHJcbiAgICB3aWR0aDogNzAlO1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG59XHJcbi5uYXZiYXItaW1hZ2UtbGVhZGVyYm9hcmQge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbn1cclxuLm5hdmJhci1kcm9wLWltYWdlIHtcclxuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG4gICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgd2lkdGg6IGF1dG87XHJcbn1cclxuLmZ1bGwge1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiL2Fzc2V0cy9pbWcvRnVsbF9CYWNrZ3JvdW5kLnBuZ1wiKTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcbi5uYXZiYXItdG9nZ2xlciB7XHJcbiAgd2lkdGg6YXV0bzsgXHJcbiAgaGVpZ2h0OjQwcHg7XHJcbn1cclxuXHJcbi5uYXZiYXIubmF2YmFyLTIgLm5hdmJhci10b2dnbGVyLWljb24ge1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChodHRwczovL21kYm9vdHN0cmFwLmNvbS9pbWcvc3ZnL2hhbWJ1cmdlcjIuc3ZnKTtcclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss']
            }]
    }], function () { return [{ type: ngx_spinner__WEBPACK_IMPORTED_MODULE_2__["NgxSpinnerService"] }, { type: _services_backend_api_service__WEBPACK_IMPORTED_MODULE_3__["BackendApiService"] }, { type: _services_login_service__WEBPACK_IMPORTED_MODULE_4__["LoginService"] }, { type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_5__["CookieService"] }]; }, null); })();


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-cookie-service */ "b6Qw");
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "5+WD");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var _component_homepage_homepage_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./component/homepage/homepage.component */ "ZnSt");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-bootstrap/tooltip */ "Mfq2");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ngx-spinner */ "JqCM");
/* harmony import */ var _component_host_host_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./component/host/host.component */ "weLA");
/* harmony import */ var _component_singleplayer_singleplayer_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./component/singleplayer/singleplayer.component */ "s3D1");
/* harmony import */ var _component_multiplayer_multiplayer_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./component/multiplayer/multiplayer.component */ "9Yd6");
/* harmony import */ var _component_sandbox_sandbox_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./component/sandbox/sandbox.component */ "62PW");
/* harmony import */ var _component_card_card_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./component/card/card.component */ "4fXm");
/* harmony import */ var _component_leaderboard_leaderboard_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./component/leaderboard/leaderboard.component */ "ugYv");
/* harmony import */ var _component_blackjack_blackjack_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./component/blackjack/blackjack.component */ "K/tP");
/* harmony import */ var _component_login_login_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./component/login/login.component */ "g8H4");
/* harmony import */ var _component_create_user_create_user_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./component/create-user/create-user.component */ "8qe0");
/* harmony import */ var _component_host_game_host_game_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./component/host-game/host-game.component */ "PfSQ");
/* harmony import */ var _component_join_game_join_game_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./component/join-game/join-game.component */ "IQ74");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/cdk/scrolling */ "vxfF");
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/cdk/bidi */ "cH1L");









// remote communication


// bootstrap modules
































class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [ngx_cookie_service__WEBPACK_IMPORTED_MODULE_5__["CookieService"]], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ReactiveFormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormsModule"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_12__["NgxSpinnerModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
            ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_11__["TooltipModule"].forRoot(),
            _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_6__["DragDropModule"],
            _angular_material_table__WEBPACK_IMPORTED_MODULE_7__["MatTableModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _component_blackjack_blackjack_component__WEBPACK_IMPORTED_MODULE_19__["BlackjackComponent"], _component_host_game_host_game_component__WEBPACK_IMPORTED_MODULE_22__["HostGameComponent"], _component_homepage_homepage_component__WEBPACK_IMPORTED_MODULE_8__["HomepageComponent"], _component_blackjack_blackjack_component__WEBPACK_IMPORTED_MODULE_19__["BlackjackComponent"], _component_singleplayer_singleplayer_component__WEBPACK_IMPORTED_MODULE_14__["SingleplayerComponent"], _component_multiplayer_multiplayer_component__WEBPACK_IMPORTED_MODULE_15__["MultiplayerComponent"], _component_sandbox_sandbox_component__WEBPACK_IMPORTED_MODULE_16__["SandboxComponent"], _component_leaderboard_leaderboard_component__WEBPACK_IMPORTED_MODULE_18__["LeaderboardComponent"], _component_login_login_component__WEBPACK_IMPORTED_MODULE_20__["LoginComponent"], _component_create_user_create_user_component__WEBPACK_IMPORTED_MODULE_21__["CreateUserComponent"], _component_homepage_homepage_component__WEBPACK_IMPORTED_MODULE_8__["HomepageComponent"],
        _component_host_host_component__WEBPACK_IMPORTED_MODULE_13__["HostComponent"],
        _component_singleplayer_singleplayer_component__WEBPACK_IMPORTED_MODULE_14__["SingleplayerComponent"],
        _component_multiplayer_multiplayer_component__WEBPACK_IMPORTED_MODULE_15__["MultiplayerComponent"],
        _component_sandbox_sandbox_component__WEBPACK_IMPORTED_MODULE_16__["SandboxComponent"],
        _component_card_card_component__WEBPACK_IMPORTED_MODULE_17__["CardComponent"],
        _component_leaderboard_leaderboard_component__WEBPACK_IMPORTED_MODULE_18__["LeaderboardComponent"],
        _component_login_login_component__WEBPACK_IMPORTED_MODULE_20__["LoginComponent"],
        _component_create_user_create_user_component__WEBPACK_IMPORTED_MODULE_21__["CreateUserComponent"],
        _component_host_game_host_game_component__WEBPACK_IMPORTED_MODULE_22__["HostGameComponent"],
        _component_join_game_join_game_component__WEBPACK_IMPORTED_MODULE_23__["JoinGameComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ReactiveFormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormsModule"],
        ngx_spinner__WEBPACK_IMPORTED_MODULE_12__["NgxSpinnerModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"], ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_11__["TooltipModule"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_6__["DragDropModule"],
        _angular_material_table__WEBPACK_IMPORTED_MODULE_7__["MatTableModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                    _component_blackjack_blackjack_component__WEBPACK_IMPORTED_MODULE_19__["BlackjackComponent"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["RoutingComponents"],
                    _component_homepage_homepage_component__WEBPACK_IMPORTED_MODULE_8__["HomepageComponent"],
                    _component_host_host_component__WEBPACK_IMPORTED_MODULE_13__["HostComponent"],
                    _component_singleplayer_singleplayer_component__WEBPACK_IMPORTED_MODULE_14__["SingleplayerComponent"],
                    _component_multiplayer_multiplayer_component__WEBPACK_IMPORTED_MODULE_15__["MultiplayerComponent"],
                    _component_sandbox_sandbox_component__WEBPACK_IMPORTED_MODULE_16__["SandboxComponent"],
                    _component_card_card_component__WEBPACK_IMPORTED_MODULE_17__["CardComponent"],
                    _component_leaderboard_leaderboard_component__WEBPACK_IMPORTED_MODULE_18__["LeaderboardComponent"],
                    _component_login_login_component__WEBPACK_IMPORTED_MODULE_20__["LoginComponent"],
                    _component_create_user_create_user_component__WEBPACK_IMPORTED_MODULE_21__["CreateUserComponent"],
                    _component_host_game_host_game_component__WEBPACK_IMPORTED_MODULE_22__["HostGameComponent"],
                    _component_join_game_join_game_component__WEBPACK_IMPORTED_MODULE_23__["JoinGameComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ReactiveFormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormsModule"],
                    ngx_spinner__WEBPACK_IMPORTED_MODULE_12__["NgxSpinnerModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
                    ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_11__["TooltipModule"].forRoot(),
                    _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_6__["DragDropModule"],
                    _angular_material_table__WEBPACK_IMPORTED_MODULE_7__["MatTableModule"],
                ],
                providers: [ngx_cookie_service__WEBPACK_IMPORTED_MODULE_5__["CookieService"]],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
            }]
    }], null, null); })();
_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetComponentScope"](_component_blackjack_blackjack_component__WEBPACK_IMPORTED_MODULE_19__["BlackjackComponent"], [_angular_common__WEBPACK_IMPORTED_MODULE_24__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_24__["NgComponentOutlet"], _angular_common__WEBPACK_IMPORTED_MODULE_24__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_24__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_24__["NgTemplateOutlet"], _angular_common__WEBPACK_IMPORTED_MODULE_24__["NgStyle"], _angular_common__WEBPACK_IMPORTED_MODULE_24__["NgSwitch"], _angular_common__WEBPACK_IMPORTED_MODULE_24__["NgSwitchCase"], _angular_common__WEBPACK_IMPORTED_MODULE_24__["NgSwitchDefault"], _angular_common__WEBPACK_IMPORTED_MODULE_24__["NgPlural"], _angular_common__WEBPACK_IMPORTED_MODULE_24__["NgPluralCase"], _angular_router__WEBPACK_IMPORTED_MODULE_25__["RouterOutlet"], _angular_router__WEBPACK_IMPORTED_MODULE_25__["RouterLink"], _angular_router__WEBPACK_IMPORTED_MODULE_25__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_25__["RouterLinkActive"], _angular_router__WEBPACK_IMPORTED_MODULE_25__["ɵangular_packages_router_router_l"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ɵangular_packages_forms_forms_x"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NumberValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["RangeValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["CheckboxControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["SelectMultipleControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["RadioControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["MinLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["MaxLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["PatternValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["CheckboxRequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["EmailValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormControlDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormGroupName"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormArrayName"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgModelGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgForm"], ngx_spinner__WEBPACK_IMPORTED_MODULE_12__["NgxSpinnerComponent"], ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_11__["TooltipDirective"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_26__["CdkScrollable"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_6__["CdkDropList"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_6__["CdkDropListGroup"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_6__["CdkDrag"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_6__["CdkDragHandle"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_6__["CdkDragPreview"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_6__["CdkDragPlaceholder"], _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_27__["Dir"], _angular_material_table__WEBPACK_IMPORTED_MODULE_7__["MatTable"], _angular_material_table__WEBPACK_IMPORTED_MODULE_7__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_7__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_7__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_7__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_7__["MatRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_7__["MatFooterCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_7__["MatFooterRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_7__["MatHeaderCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_7__["MatCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_7__["MatFooterCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_7__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_7__["MatRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_7__["MatFooterRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_7__["MatNoDataRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_7__["MatTextColumn"], _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _component_blackjack_blackjack_component__WEBPACK_IMPORTED_MODULE_19__["BlackjackComponent"], _component_host_game_host_game_component__WEBPACK_IMPORTED_MODULE_22__["HostGameComponent"],
    _component_homepage_homepage_component__WEBPACK_IMPORTED_MODULE_8__["HomepageComponent"],
    _component_singleplayer_singleplayer_component__WEBPACK_IMPORTED_MODULE_14__["SingleplayerComponent"],
    _component_multiplayer_multiplayer_component__WEBPACK_IMPORTED_MODULE_15__["MultiplayerComponent"],
    _component_sandbox_sandbox_component__WEBPACK_IMPORTED_MODULE_16__["SandboxComponent"],
    _component_leaderboard_leaderboard_component__WEBPACK_IMPORTED_MODULE_18__["LeaderboardComponent"],
    _component_login_login_component__WEBPACK_IMPORTED_MODULE_20__["LoginComponent"],
    _component_create_user_create_user_component__WEBPACK_IMPORTED_MODULE_21__["CreateUserComponent"],
    _component_host_host_component__WEBPACK_IMPORTED_MODULE_13__["HostComponent"],
    _component_card_card_component__WEBPACK_IMPORTED_MODULE_17__["CardComponent"],
    _component_join_game_join_game_component__WEBPACK_IMPORTED_MODULE_23__["JoinGameComponent"]], [_angular_common__WEBPACK_IMPORTED_MODULE_24__["AsyncPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_24__["UpperCasePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_24__["LowerCasePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_24__["JsonPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_24__["SlicePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_24__["DecimalPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_24__["PercentPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_24__["TitleCasePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_24__["CurrencyPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_24__["DatePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_24__["I18nPluralPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_24__["I18nSelectPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_24__["KeyValuePipe"]]);
_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetComponentScope"](_component_blackjack_blackjack_component__WEBPACK_IMPORTED_MODULE_19__["BlackjackComponent"], [_angular_common__WEBPACK_IMPORTED_MODULE_24__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_24__["NgComponentOutlet"], _angular_common__WEBPACK_IMPORTED_MODULE_24__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_24__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_24__["NgTemplateOutlet"], _angular_common__WEBPACK_IMPORTED_MODULE_24__["NgStyle"], _angular_common__WEBPACK_IMPORTED_MODULE_24__["NgSwitch"], _angular_common__WEBPACK_IMPORTED_MODULE_24__["NgSwitchCase"], _angular_common__WEBPACK_IMPORTED_MODULE_24__["NgSwitchDefault"], _angular_common__WEBPACK_IMPORTED_MODULE_24__["NgPlural"], _angular_common__WEBPACK_IMPORTED_MODULE_24__["NgPluralCase"], _angular_router__WEBPACK_IMPORTED_MODULE_25__["RouterOutlet"], _angular_router__WEBPACK_IMPORTED_MODULE_25__["RouterLink"], _angular_router__WEBPACK_IMPORTED_MODULE_25__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_25__["RouterLinkActive"], _angular_router__WEBPACK_IMPORTED_MODULE_25__["ɵangular_packages_router_router_l"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ɵangular_packages_forms_forms_x"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NumberValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["RangeValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["CheckboxControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["SelectMultipleControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["RadioControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["MinLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["MaxLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["PatternValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["CheckboxRequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["EmailValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormControlDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormGroupName"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormArrayName"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgModelGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgForm"], ngx_spinner__WEBPACK_IMPORTED_MODULE_12__["NgxSpinnerComponent"], ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_11__["TooltipDirective"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_26__["CdkScrollable"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_6__["CdkDropList"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_6__["CdkDropListGroup"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_6__["CdkDrag"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_6__["CdkDragHandle"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_6__["CdkDragPreview"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_6__["CdkDragPlaceholder"], _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_27__["Dir"], _angular_material_table__WEBPACK_IMPORTED_MODULE_7__["MatTable"], _angular_material_table__WEBPACK_IMPORTED_MODULE_7__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_7__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_7__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_7__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_7__["MatRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_7__["MatFooterCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_7__["MatFooterRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_7__["MatHeaderCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_7__["MatCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_7__["MatFooterCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_7__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_7__["MatRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_7__["MatFooterRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_7__["MatNoDataRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_7__["MatTextColumn"], _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _component_blackjack_blackjack_component__WEBPACK_IMPORTED_MODULE_19__["BlackjackComponent"], _component_host_game_host_game_component__WEBPACK_IMPORTED_MODULE_22__["HostGameComponent"],
    _component_homepage_homepage_component__WEBPACK_IMPORTED_MODULE_8__["HomepageComponent"],
    _component_singleplayer_singleplayer_component__WEBPACK_IMPORTED_MODULE_14__["SingleplayerComponent"],
    _component_multiplayer_multiplayer_component__WEBPACK_IMPORTED_MODULE_15__["MultiplayerComponent"],
    _component_sandbox_sandbox_component__WEBPACK_IMPORTED_MODULE_16__["SandboxComponent"],
    _component_leaderboard_leaderboard_component__WEBPACK_IMPORTED_MODULE_18__["LeaderboardComponent"],
    _component_login_login_component__WEBPACK_IMPORTED_MODULE_20__["LoginComponent"],
    _component_create_user_create_user_component__WEBPACK_IMPORTED_MODULE_21__["CreateUserComponent"],
    _component_host_host_component__WEBPACK_IMPORTED_MODULE_13__["HostComponent"],
    _component_card_card_component__WEBPACK_IMPORTED_MODULE_17__["CardComponent"],
    _component_join_game_join_game_component__WEBPACK_IMPORTED_MODULE_23__["JoinGameComponent"]], [_angular_common__WEBPACK_IMPORTED_MODULE_24__["AsyncPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_24__["UpperCasePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_24__["LowerCasePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_24__["JsonPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_24__["SlicePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_24__["DecimalPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_24__["PercentPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_24__["TitleCasePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_24__["CurrencyPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_24__["DatePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_24__["I18nPluralPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_24__["I18nSelectPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_24__["KeyValuePipe"]]);
_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetComponentScope"](_component_sandbox_sandbox_component__WEBPACK_IMPORTED_MODULE_16__["SandboxComponent"], [_angular_common__WEBPACK_IMPORTED_MODULE_24__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_24__["NgComponentOutlet"], _angular_common__WEBPACK_IMPORTED_MODULE_24__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_24__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_24__["NgTemplateOutlet"], _angular_common__WEBPACK_IMPORTED_MODULE_24__["NgStyle"], _angular_common__WEBPACK_IMPORTED_MODULE_24__["NgSwitch"], _angular_common__WEBPACK_IMPORTED_MODULE_24__["NgSwitchCase"], _angular_common__WEBPACK_IMPORTED_MODULE_24__["NgSwitchDefault"], _angular_common__WEBPACK_IMPORTED_MODULE_24__["NgPlural"], _angular_common__WEBPACK_IMPORTED_MODULE_24__["NgPluralCase"], _angular_router__WEBPACK_IMPORTED_MODULE_25__["RouterOutlet"], _angular_router__WEBPACK_IMPORTED_MODULE_25__["RouterLink"], _angular_router__WEBPACK_IMPORTED_MODULE_25__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_25__["RouterLinkActive"], _angular_router__WEBPACK_IMPORTED_MODULE_25__["ɵangular_packages_router_router_l"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ɵangular_packages_forms_forms_x"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NumberValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["RangeValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["CheckboxControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["SelectMultipleControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["RadioControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["MinLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["MaxLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["PatternValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["CheckboxRequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["EmailValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormControlDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormGroupName"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormArrayName"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgModelGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgForm"], ngx_spinner__WEBPACK_IMPORTED_MODULE_12__["NgxSpinnerComponent"], ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_11__["TooltipDirective"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_26__["CdkScrollable"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_6__["CdkDropList"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_6__["CdkDropListGroup"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_6__["CdkDrag"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_6__["CdkDragHandle"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_6__["CdkDragPreview"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_6__["CdkDragPlaceholder"], _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_27__["Dir"], _angular_material_table__WEBPACK_IMPORTED_MODULE_7__["MatTable"], _angular_material_table__WEBPACK_IMPORTED_MODULE_7__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_7__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_7__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_7__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_7__["MatRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_7__["MatFooterCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_7__["MatFooterRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_7__["MatHeaderCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_7__["MatCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_7__["MatFooterCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_7__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_7__["MatRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_7__["MatFooterRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_7__["MatNoDataRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_7__["MatTextColumn"], _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _component_blackjack_blackjack_component__WEBPACK_IMPORTED_MODULE_19__["BlackjackComponent"], _component_host_game_host_game_component__WEBPACK_IMPORTED_MODULE_22__["HostGameComponent"],
    _component_homepage_homepage_component__WEBPACK_IMPORTED_MODULE_8__["HomepageComponent"],
    _component_singleplayer_singleplayer_component__WEBPACK_IMPORTED_MODULE_14__["SingleplayerComponent"],
    _component_multiplayer_multiplayer_component__WEBPACK_IMPORTED_MODULE_15__["MultiplayerComponent"],
    _component_sandbox_sandbox_component__WEBPACK_IMPORTED_MODULE_16__["SandboxComponent"],
    _component_leaderboard_leaderboard_component__WEBPACK_IMPORTED_MODULE_18__["LeaderboardComponent"],
    _component_login_login_component__WEBPACK_IMPORTED_MODULE_20__["LoginComponent"],
    _component_create_user_create_user_component__WEBPACK_IMPORTED_MODULE_21__["CreateUserComponent"],
    _component_host_host_component__WEBPACK_IMPORTED_MODULE_13__["HostComponent"],
    _component_card_card_component__WEBPACK_IMPORTED_MODULE_17__["CardComponent"],
    _component_join_game_join_game_component__WEBPACK_IMPORTED_MODULE_23__["JoinGameComponent"]], [_angular_common__WEBPACK_IMPORTED_MODULE_24__["AsyncPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_24__["UpperCasePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_24__["LowerCasePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_24__["JsonPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_24__["SlicePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_24__["DecimalPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_24__["PercentPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_24__["TitleCasePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_24__["CurrencyPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_24__["DatePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_24__["I18nPluralPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_24__["I18nSelectPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_24__["KeyValuePipe"]]);
_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetComponentScope"](_component_sandbox_sandbox_component__WEBPACK_IMPORTED_MODULE_16__["SandboxComponent"], [_angular_common__WEBPACK_IMPORTED_MODULE_24__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_24__["NgComponentOutlet"], _angular_common__WEBPACK_IMPORTED_MODULE_24__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_24__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_24__["NgTemplateOutlet"], _angular_common__WEBPACK_IMPORTED_MODULE_24__["NgStyle"], _angular_common__WEBPACK_IMPORTED_MODULE_24__["NgSwitch"], _angular_common__WEBPACK_IMPORTED_MODULE_24__["NgSwitchCase"], _angular_common__WEBPACK_IMPORTED_MODULE_24__["NgSwitchDefault"], _angular_common__WEBPACK_IMPORTED_MODULE_24__["NgPlural"], _angular_common__WEBPACK_IMPORTED_MODULE_24__["NgPluralCase"], _angular_router__WEBPACK_IMPORTED_MODULE_25__["RouterOutlet"], _angular_router__WEBPACK_IMPORTED_MODULE_25__["RouterLink"], _angular_router__WEBPACK_IMPORTED_MODULE_25__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_25__["RouterLinkActive"], _angular_router__WEBPACK_IMPORTED_MODULE_25__["ɵangular_packages_router_router_l"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ɵangular_packages_forms_forms_x"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NumberValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["RangeValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["CheckboxControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["SelectMultipleControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["RadioControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["MinLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["MaxLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["PatternValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["CheckboxRequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["EmailValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormControlDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormGroupName"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormArrayName"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgModelGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgForm"], ngx_spinner__WEBPACK_IMPORTED_MODULE_12__["NgxSpinnerComponent"], ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_11__["TooltipDirective"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_26__["CdkScrollable"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_6__["CdkDropList"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_6__["CdkDropListGroup"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_6__["CdkDrag"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_6__["CdkDragHandle"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_6__["CdkDragPreview"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_6__["CdkDragPlaceholder"], _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_27__["Dir"], _angular_material_table__WEBPACK_IMPORTED_MODULE_7__["MatTable"], _angular_material_table__WEBPACK_IMPORTED_MODULE_7__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_7__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_7__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_7__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_7__["MatRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_7__["MatFooterCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_7__["MatFooterRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_7__["MatHeaderCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_7__["MatCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_7__["MatFooterCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_7__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_7__["MatRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_7__["MatFooterRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_7__["MatNoDataRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_7__["MatTextColumn"], _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _component_blackjack_blackjack_component__WEBPACK_IMPORTED_MODULE_19__["BlackjackComponent"], _component_host_game_host_game_component__WEBPACK_IMPORTED_MODULE_22__["HostGameComponent"],
    _component_homepage_homepage_component__WEBPACK_IMPORTED_MODULE_8__["HomepageComponent"],
    _component_singleplayer_singleplayer_component__WEBPACK_IMPORTED_MODULE_14__["SingleplayerComponent"],
    _component_multiplayer_multiplayer_component__WEBPACK_IMPORTED_MODULE_15__["MultiplayerComponent"],
    _component_sandbox_sandbox_component__WEBPACK_IMPORTED_MODULE_16__["SandboxComponent"],
    _component_leaderboard_leaderboard_component__WEBPACK_IMPORTED_MODULE_18__["LeaderboardComponent"],
    _component_login_login_component__WEBPACK_IMPORTED_MODULE_20__["LoginComponent"],
    _component_create_user_create_user_component__WEBPACK_IMPORTED_MODULE_21__["CreateUserComponent"],
    _component_host_host_component__WEBPACK_IMPORTED_MODULE_13__["HostComponent"],
    _component_card_card_component__WEBPACK_IMPORTED_MODULE_17__["CardComponent"],
    _component_join_game_join_game_component__WEBPACK_IMPORTED_MODULE_23__["JoinGameComponent"]], [_angular_common__WEBPACK_IMPORTED_MODULE_24__["AsyncPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_24__["UpperCasePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_24__["LowerCasePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_24__["JsonPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_24__["SlicePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_24__["DecimalPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_24__["PercentPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_24__["TitleCasePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_24__["CurrencyPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_24__["DatePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_24__["I18nPluralPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_24__["I18nSelectPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_24__["KeyValuePipe"]]);


/***/ }),

/***/ "ZnSt":
/*!**********************************************************!*\
  !*** ./src/app/component/homepage/homepage.component.ts ***!
  \**********************************************************/
/*! exports provided: HomepageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomepageComponent", function() { return HomepageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_backend_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/backend-api.service */ "lKBK");



class HomepageComponent {
    constructor(backendApiService) {
        this.backendApiService = backendApiService;
    }
    ngOnInit() {
    }
}
HomepageComponent.ɵfac = function HomepageComponent_Factory(t) { return new (t || HomepageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_backend_api_service__WEBPACK_IMPORTED_MODULE_1__["BackendApiService"])); };
HomepageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomepageComponent, selectors: [["app-homepage"]], decls: 1, vars: 0, template: function HomepageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div");
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudC9ob21lcGFnZS9ob21lcGFnZS5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomepageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-homepage',
                templateUrl: './homepage.component.html',
                styleUrls: ['./homepage.component.scss']
            }]
    }], function () { return [{ type: src_app_services_backend_api_service__WEBPACK_IMPORTED_MODULE_1__["BackendApiService"] }]; }, null); })();


/***/ }),

/***/ "e5p2":
/*!*****************************************!*\
  !*** ./src/app/models/cardContainer.ts ***!
  \*****************************************/
/*! exports provided: cardContainer, emptyCardContainer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cardContainer", function() { return cardContainer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "emptyCardContainer", function() { return emptyCardContainer; });
class cardContainer {
}
function emptyCardContainer() {
    var newCC = { cards: [] };
    return newCC;
}


/***/ }),

/***/ "g8H4":
/*!****************************************************!*\
  !*** ./src/app/component/login/login.component.ts ***!
  \****************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var crypto_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! crypto-js */ "NFKh");
/* harmony import */ var crypto_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(crypto_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var src_app_services_backend_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/backend-api.service */ "lKBK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_services_login_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/login.service */ "EFyh");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-cookie-service */ "b6Qw");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "3Pt+");








const _c0 = function () { return ["/createUser"]; };
const _c1 = function () { return ["/passwordRecovery"]; };
class LoginComponent {
    constructor(backendApiService, route, router, loginService, cookieService) {
        this.backendApiService = backendApiService;
        this.route = route;
        this.router = router;
        this.loginService = loginService;
        this.cookieService = cookieService;
        this.re = new RegExp('[a-zA-Z0-9._%+-^@]+@[a-zA-Z0-9.-]+\.[a-zA-Z]+'); //regex for checking email format
    }
    submitLoginFunction() {
        var email = document.getElementById("email").value; //store the email
        var hash = crypto_js__WEBPACK_IMPORTED_MODULE_1__["MD5"](document.getElementById("password").value); //hash the password and store the hash
        if (document.getElementById("password").value == "" || document.getElementById("email").value == "") {
            alert("A text field is empty"); //check if the email or password is empty and error if so
        }
        else {
            /**
             * Login user query to backend server.
             * The password hash and the email entered by the user are passed in.
             * Returns a named error if credentials are invalid
             * and returns the name, email, user id, and cookie verification certificate if valid
             */
            this.loginService.submitLoginFunction(email, hash.toString()).subscribe(obj => {
                console.log(obj.results);
                if (obj.results == null) { //If the server returns nothing, the username or password was incorrect, try again
                    alert("Invalid Username Or Password");
                }
                else { //take the role, name, and userid that was returned and store it for use later
                    console.log(obj.results);
                    this.loginService.login(obj.results[0].real_name, email, obj.results[0].user_id, obj.certificate);
                    this.router.navigateByUrl('/'); //return to home page
                }
            });
        }
    }
    /**
     * Function used to provide enter button submit functionality
     */
    keyPress(Event) {
        if (Event.keyCode == 13) {
            this.submitLoginFunction();
        }
    }
    ngOnInit() {
    }
}
LoginComponent.ɵfac = function LoginComponent_Factory(t) { return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_backend_api_service__WEBPACK_IMPORTED_MODULE_2__["BackendApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_login_service__WEBPACK_IMPORTED_MODULE_4__["LoginService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_cookie_service__WEBPACK_IMPORTED_MODULE_5__["CookieService"])); };
LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoginComponent, selectors: [["app-login"]], decls: 29, vars: 4, consts: [[2, "background-color", "honeydew"], [2, "font-size", "75px", "text-align", "center", "margin-top", "100px", "color", "black"], [1, "container"], ["id", "loginForm", "action", "/action_page.php", 2, "text-align", "center", 3, "keydown"], ["for", "username", 2, "font-size", "25px"], ["styletype", "text", "id", "email", "name", "email"], ["for", "password", 2, "font-size", "25px"], ["type", "password", "id", "password", "name", "password"], ["type", "button", 2, "width", "100px", 3, "click"], [2, "text-align", "center"], [3, "routerLink"], [2, "font-size", "15px", "color", "blue"]], template: function LoginComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Login");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "form", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keydown", function LoginComponent_Template_form_keydown_4_listener($event) { return ctx.keyPress($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "label", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Email Address: \u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Password: \u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginComponent_Template_button_click_14_listener() { return ctx.submitLoginFunction(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " Submit ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "nav");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "p", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Create Account");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "nav");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "p", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Forgot Password (coming soon)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](2, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](3, _c1));
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgForm"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudC9sb2dpbi9sb2dpbi5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-login',
                templateUrl: './login.component.html',
                styleUrls: ['./login.component.scss']
            }]
    }], function () { return [{ type: src_app_services_backend_api_service__WEBPACK_IMPORTED_MODULE_2__["BackendApiService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }, { type: src_app_services_login_service__WEBPACK_IMPORTED_MODULE_4__["LoginService"] }, { type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_5__["CookieService"] }]; }, null); })();


/***/ }),

/***/ "lKBK":
/*!*************************************************!*\
  !*** ./src/app/services/backend-api.service.ts ***!
  \*************************************************/
/*! exports provided: BackendApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BackendApiService", function() { return BackendApiService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-cookie-service */ "b6Qw");






class BackendApiService {
    // private baseUrl: string = "http://localhost:8090/";
    constructor(http, cookieService) {
        this.http = http;
        this.cookieService = cookieService;
        this.baseUrl = "https://nimmo.us/";
    }
    // url should be the address to the server API
    // arguments should be a dictionary... example: var dict = {"id":"1","key2":"value2"}
    backendRequest(url, args = {}) {
        args["certificate"] = this.cookieService.get('certificate');
        args["userID"] = this.cookieService.get('userID');
        // create a new multipart-form for every file
        const formData = new FormData();
        for (var key in args) {
            formData.append(key, args[key]);
        }
        // create a http-post request and pass the form
        const req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('POST', this.baseUrl + url, formData, {
            responseType: 'text'
        });
        const response = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        // send the http-request and subscribe for progress-updates
        this.http.request(req).subscribe(event => {
            if (event instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]) {
                response.next(JSON.parse(event.body));
                response.complete();
            }
        }, (error) => {
            response.next({ error: "The server responded with an error" });
            response.complete();
        });
        // return the map of progress.observables
        return response.asObservable();
    }
}
BackendApiService.ɵfac = function BackendApiService_Factory(t) { return new (t || BackendApiService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__["CookieService"])); };
BackendApiService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: BackendApiService, factory: BackendApiService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BackendApiService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }, { type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__["CookieService"] }]; }, null); })();


/***/ }),

/***/ "s3D1":
/*!******************************************************************!*\
  !*** ./src/app/component/singleplayer/singleplayer.component.ts ***!
  \******************************************************************/
/*! exports provided: SingleplayerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SingleplayerComponent", function() { return SingleplayerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class SingleplayerComponent {
    constructor() { }
    ngOnInit() {
    }
}
SingleplayerComponent.ɵfac = function SingleplayerComponent_Factory(t) { return new (t || SingleplayerComponent)(); };
SingleplayerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SingleplayerComponent, selectors: [["app-singleplayer"]], decls: 0, vars: 0, template: function SingleplayerComponent_Template(rf, ctx) { }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudC9zaW5nbGVwbGF5ZXIvc2luZ2xlcGxheWVyLmNvbXBvbmVudC5zY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SingleplayerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-singleplayer',
                templateUrl: './singleplayer.component.html',
                styleUrls: ['./singleplayer.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "ugYv":
/*!****************************************************************!*\
  !*** ./src/app/component/leaderboard/leaderboard.component.ts ***!
  \****************************************************************/
/*! exports provided: LeaderboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LeaderboardComponent", function() { return LeaderboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_backend_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/backend-api.service */ "lKBK");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/table */ "+0xr");




function LeaderboardComponent_th_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function LeaderboardComponent_td_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const scores_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", scores_r6.real_name, " ");
} }
function LeaderboardComponent_th_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Score");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function LeaderboardComponent_td_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const scores_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](scores_r7.score);
} }
function LeaderboardComponent_tr_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 12);
} }
function LeaderboardComponent_tr_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 13);
} }
class LeaderboardComponent {
    constructor(backendApiService) {
        this.backendApiService = backendApiService;
        /** Columns to be displayed in table */
        this.displayedColumns = ['Name', "Score"];
    }
    ngOnInit() {
        /**Make table load black jack leaderboard by default */
        var dict = {};
        dict["gameType"] = "BlackJack";
        this.backendApiService.backendRequest("getLeaderboard", dict).subscribe(obj => { this.dataSource = obj.results; });
    }
    /**@description Makes request from server for specified game leaderboard */
    /**@param String Name of game that leaderboard is requested for */
    getLeaderboard(gameName) {
        var dict = {};
        dict["gameType"] = gameName;
        this.backendApiService.backendRequest("getLeaderboard", dict).subscribe(obj => { this.dataSource = obj.results; });
    }
    /**@description Getter for table Data Source*/
    /**@returns Returns the table data source */
    getDataSource() {
        return this.dataSource;
    }
}
LeaderboardComponent.ɵfac = function LeaderboardComponent_Factory(t) { return new (t || LeaderboardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_backend_api_service__WEBPACK_IMPORTED_MODULE_1__["BackendApiService"])); };
LeaderboardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LeaderboardComponent, selectors: [["app-leaderboard"]], decls: 16, vars: 3, consts: [[1, "Leaderboard-Buttons"], ["type", "button", 1, "btn", "btn-success", 3, "click"], [1, "Leaderboard-Table"], ["mat-table", "", 3, "dataSource"], ["matColumnDef", "Name"], ["mat-header-cell", "", "style", "font-size:36px;color:white", 4, "matHeaderCellDef"], ["mat-cell", "", "style", "font-size:36px;color:white", 4, "matCellDef"], ["matColumnDef", "Score"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["mat-header-cell", "", 2, "font-size", "36px", "color", "white"], ["mat-cell", "", 2, "font-size", "36px", "color", "white"], ["mat-header-row", ""], ["mat-row", ""]], template: function LeaderboardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LeaderboardComponent_Template_button_click_2_listener() { return ctx.getLeaderboard("BlackJack"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Black Jack");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LeaderboardComponent_Template_button_click_4_listener() { return ctx.getLeaderboard("Texas Holdem"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Texas Holdem");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "table", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](8, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, LeaderboardComponent_th_9_Template, 3, 0, "th", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, LeaderboardComponent_td_10_Template, 3, 1, "td", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](11, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, LeaderboardComponent_th_12_Template, 3, 0, "th", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, LeaderboardComponent_td_13_Template, 3, 1, "td", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, LeaderboardComponent_tr_14_Template, 1, 0, "tr", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, LeaderboardComponent_tr_15_Template, 1, 0, "tr", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dataSource", ctx.getDataSource());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);
    } }, directives: [_angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatTable"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatHeaderCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatRow"]], styles: [".Leaderboard-Buttons[_ngcontent-%COMP%] {\n  margin: 0;\n  position: absolute;\n  top: 20%;\n  left: 50%;\n}\n\n.Leaderboard-Table[_ngcontent-%COMP%] {\n  margin: 0;\n  position: absolute;\n  top: 25%;\n  left: 52%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50L2xlYWRlcmJvYXJkL2xlYWRlcmJvYXJkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksU0FBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7QUFDSjs7QUFDQTtFQUNJLFNBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0FBRUoiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnQvbGVhZGVyYm9hcmQvbGVhZGVyYm9hcmQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuTGVhZGVyYm9hcmQtQnV0dG9ucyB7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6MjAlO1xyXG4gICAgbGVmdDo1MCU7XHJcbn1cclxuLkxlYWRlcmJvYXJkLVRhYmxle1xyXG4gICAgbWFyZ2luOjA7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6MjUlO1xyXG4gICAgbGVmdDo1MiU7XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LeaderboardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-leaderboard',
                templateUrl: './leaderboard.component.html',
                styleUrls: ['./leaderboard.component.scss'],
            }]
    }], function () { return [{ type: src_app_services_backend_api_service__WEBPACK_IMPORTED_MODULE_1__["BackendApiService"] }]; }, null); })();


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule, RoutingComponents */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoutingComponents", function() { return RoutingComponents; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _component_blackjack_blackjack_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./component/blackjack/blackjack.component */ "K/tP");
/* harmony import */ var _component_create_user_create_user_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./component/create-user/create-user.component */ "8qe0");
/* harmony import */ var _component_homepage_homepage_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./component/homepage/homepage.component */ "ZnSt");
/* harmony import */ var _component_join_game_join_game_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./component/join-game/join-game.component */ "IQ74");
/* harmony import */ var _component_leaderboard_leaderboard_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./component/leaderboard/leaderboard.component */ "ugYv");
/* harmony import */ var _component_login_login_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./component/login/login.component */ "g8H4");
/* harmony import */ var _component_multiplayer_multiplayer_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./component/multiplayer/multiplayer.component */ "9Yd6");
/* harmony import */ var _component_sandbox_sandbox_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./component/sandbox/sandbox.component */ "62PW");
/* harmony import */ var _component_singleplayer_singleplayer_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./component/singleplayer/singleplayer.component */ "s3D1");
/* harmony import */ var _component_host_game_host_game_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./component/host-game/host-game.component */ "PfSQ");














//import { LoginGuard } from './login.guard';
const routes = [
    { path: '', component: _component_homepage_homepage_component__WEBPACK_IMPORTED_MODULE_4__["HomepageComponent"] },
    { path: 'singleplayer', component: _component_singleplayer_singleplayer_component__WEBPACK_IMPORTED_MODULE_10__["SingleplayerComponent"] },
    { path: 'multiplayer', component: _component_multiplayer_multiplayer_component__WEBPACK_IMPORTED_MODULE_8__["MultiplayerComponent"] },
    { path: 'sandbox', component: _component_sandbox_sandbox_component__WEBPACK_IMPORTED_MODULE_9__["SandboxComponent"] },
    { path: 'leaderboard', component: _component_leaderboard_leaderboard_component__WEBPACK_IMPORTED_MODULE_6__["LeaderboardComponent"] },
    { path: 'host-game', component: _component_host_game_host_game_component__WEBPACK_IMPORTED_MODULE_11__["HostGameComponent"] },
    { path: 'blackjack/:gameID/:playerID', component: _component_blackjack_blackjack_component__WEBPACK_IMPORTED_MODULE_2__["BlackjackComponent"] },
    { path: 'blackjack', component: _component_blackjack_blackjack_component__WEBPACK_IMPORTED_MODULE_2__["BlackjackComponent"] },
    { path: 'join-game', component: _component_join_game_join_game_component__WEBPACK_IMPORTED_MODULE_5__["JoinGameComponent"] },
    { path: 'login', component: _component_login_login_component__WEBPACK_IMPORTED_MODULE_7__["LoginComponent"] },
    { path: 'createUser', component: _component_create_user_create_user_component__WEBPACK_IMPORTED_MODULE_3__["CreateUserComponent"] }
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();
const RoutingComponents = [_component_host_game_host_game_component__WEBPACK_IMPORTED_MODULE_11__["HostGameComponent"], _component_homepage_homepage_component__WEBPACK_IMPORTED_MODULE_4__["HomepageComponent"], _component_blackjack_blackjack_component__WEBPACK_IMPORTED_MODULE_2__["BlackjackComponent"], _component_singleplayer_singleplayer_component__WEBPACK_IMPORTED_MODULE_10__["SingleplayerComponent"], _component_multiplayer_multiplayer_component__WEBPACK_IMPORTED_MODULE_8__["MultiplayerComponent"], _component_sandbox_sandbox_component__WEBPACK_IMPORTED_MODULE_9__["SandboxComponent"], _component_leaderboard_leaderboard_component__WEBPACK_IMPORTED_MODULE_6__["LeaderboardComponent"], _component_login_login_component__WEBPACK_IMPORTED_MODULE_7__["LoginComponent"], _component_create_user_create_user_component__WEBPACK_IMPORTED_MODULE_3__["CreateUserComponent"]];


/***/ }),

/***/ "weLA":
/*!**************************************************!*\
  !*** ./src/app/component/host/host.component.ts ***!
  \**************************************************/
/*! exports provided: HostComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HostComponent", function() { return HostComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


//import { Socket } from 'dgram';
class HostComponent {
    constructor() {
        // const app = require('express')();
        // const http = require('http').Server(app);
        // const io = require('socket.io')(http); 
    }
    ngOnInit() {
    }
}
HostComponent.ɵfac = function HostComponent_Factory(t) { return new (t || HostComponent)(); };
HostComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HostComponent, selectors: [["app-host"]], decls: 2, vars: 0, template: function HostComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "host works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudC9ob3N0L2hvc3QuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HostComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-host',
                templateUrl: './host.component.html',
                styleUrls: ['./host.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "yx/k":
/*!********************************!*\
  !*** ./src/app/models/card.ts ***!
  \********************************/
/*! exports provided: card, makeCard, makeCardFromVals */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "card", function() { return card; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "makeCard", function() { return makeCard; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "makeCardFromVals", function() { return makeCardFromVals; });
class card {
}
function makeCard(cardNum) {
    if (cardNum == -1) {
        var blankCard = { type: "", value: "-1" };
        return blankCard;
    }
    var newCard = { type: cardNum < 13 ? "Hearts" : cardNum < 26 ? "Spades" : cardNum < 39 ? "Diamonds" : "Clubs", value: "" + ((cardNum % 13) + 1) };
    return newCard;
}
function makeCardFromVals(cardType, cardValue) {
    var newCard = { type: cardType, value: cardValue };
    return newCard;
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
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