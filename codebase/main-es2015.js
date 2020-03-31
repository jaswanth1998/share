(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/angular/angular.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/angular/angular.component.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<button (click)=\"openDialog()\">Open dialog</button>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/angulardialogue/angulardialogue.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/angulardialogue/angulardialogue.component.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div id = \"setHight\">\n<div id = \"scroll\">\n<div>\n  <div id = \"heading\">\n    {{this.data.getItem.split(\"@\",3)[0]}}\n  </div>\n  <div>\n     <u> {{this.data.getItem.split(\"@\",3)[1]}}</u>\n  </div>\n<div  *ngIf=\"displayDataOnscreen.askprerequests=='yes';else noprerequest\">\n  <div id = \"heading\">\n  Prerequests\n</div>\n  <div id = \"prerequestStyle\"> \n    <div id = \"marginlatout\">\n  <div  *ngFor=\"let item of displayDataOnscreen.prerequestsofcodeBase;let i = index\">\n     <div>   {{i+1}}.{{displayDataOnscreen.prerequestsofcodeBase[i]}}</div>\n      <div  [innerHTML] = \"displayDataOnscreen.prerequestsCodeofcodeBase[i]\"></div>\n      \n  </div>\n</div>\n</div>\n\n    \n\n\n</div>\n\n\n</div>\n<ng-template #noprerequest>\n    No there are no prerequest\n    </ng-template>\n    <div id=\"heading\">\n        steps\n      </div>\n      <div id = \"prerequestStyleforcode\"> \n          <div id = \"marginlatout\">\n      <div *ngFor=\"let item of displayDataOnscreen.stepsofcodeBase;let i = index\">\n       <div> {{i+1}}.{{displayDataOnscreen.stepsofcodeBase[i]}}</div>\n        <span  [innerHTML] = \"displayDataOnscreen.codeForCodeBaseSteps[i]\"></span>\n    </div>\n    </div>\n\n</div>\n\n<br>\n<br>\n\n\n<div id = \"centerit\">\n    <button id = \"styleButton\" (click)=\"onNoClick()\">No Thanks</button>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n\n\n<nav class=\"navbar navbar-expand-lg navbar-dark bg-dark\">\n    <a class=\"navbar-brand\" routerLink=\"\">CodeBase</a>\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarNav\" aria-controls=\"navbarNav\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n      <span class=\"navbar-toggler-icon\"></span>\n    </button>\n    <div class=\"collapse navbar-collapse\" id=\"navbarNav\">\n      <ul class=\"navbar-nav\">\n        <li class=\"nav-item \">\n          <a class=\"nav-link\" routerLink=\"sendit\"><span class=\"sr-only\">(current)</span></a>\n        </li>\n        <li class=\"nav-item \">\n          <a class=\"nav-link\" routerLink=\"sendit\"><span class=\"sr-only\">(current)</span></a>\n        </li>\n        \n        <li class=\"nav-item \">\n          <a class=\"nav-link\" routerLink=\"sendit\">Add Data<span class=\"sr-only\">(current)</span></a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" routerLink=\"Edit\"> Edit Data</a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" routerLink=\"create_sub_topic\">Create Sub topics</a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" routerLink=\"storyBorad\"> Story Borad</a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" routerLink=\"display_graph\"> Architecture</a>\n        </li>\n       \n      </ul>\n    </div>\n  </nav>\n\n\n  <!-- <nav class=\"navbar navbar-expand-lg navbar-light bg-light\">\n    <a class=\"navbar-brand\" href=\"#\">Navbar</a>\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarNav\" aria-controls=\"navbarNav\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n      <span class=\"navbar-toggler-icon\"></span>\n    </button>\n    <div class=\"collapse navbar-collapse\" id=\"navbarNav\">\n      <ul class=\"navbar-nav\">\n        <li class=\"nav-item active\">\n          <a class=\"nav-link\" href=\"#\">Home <span class=\"sr-only\">(current)</span></a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" href=\"#\">Features</a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" href=\"#\">Pricing</a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link disabled\" href=\"#\">Disabled</a>\n        </li>\n      </ul>\n    </div>\n  </nav> -->\n\n\n  <div id = \"\">\n\n  </div>\n\n<router-outlet></router-outlet>\n\n<div class=\"fab\" routerLink=\"create_sub_topic\"> + </div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/edit-data/edit-data.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/edit-data/edit-data.component.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>edit-data works!</p>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/editorconfig/editorconfig.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/editorconfig/editorconfig.component.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- <p>editorconfig works!</p>\n<div class=\"code-editor\"    #codeEditor >\n        \n    \n</div>\n<br>\n<br>\n<br>\n<div class=\"code-editor\"    #codeEditor1 ></div>\n<br><br><br>\n\n\n\n -->\n\n\n\n<form>\n    <quill-editor></quill-editor>\n</form>\n\n\n\n<quill-editor [(ngModel)]=\"binding\"></quill-editor>\n\n\n<div>\n    {{binding}}\n</div>\n\n\n\n\n<p>Iam working</p>\n\n\n<div id=\"editor\" #editor>\n    <p>Hello World!</p>\n    <p>Some initial <strong>bold</strong> text</p>\n    <p><br></p>\n\n\n\n</div>\n<div>\n    <button mat-raised-button (click)=\"getit()\">\n        get It\n    </button>\n</div>\n\n<p [innerHTML]=\"binding\">\n\n</p>\n\n\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/firebasetest/firebasetest.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/firebasetest/firebasetest.component.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div id=\"heading\">\n    Firebase testing\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/getit/getit.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/getit/getit.component.html ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n\n\n<div id=\"heading\">\n    {{sendid}} Tasks\n</div>\n\n<br>\n<br>\n\n<div   class=\"container\">\n<div >\n    <div *ngFor=\"let item of onDisplay\">\n        <button (click) = \"getdataIntoHtml(item)\" >\n                {{item}}\n        </button>\n    </div>\n</div>\n    <br>\n    <br>\n    <div   >\n<div *ngFor=\"let item of displayData\" >\n    <div class=\"card\"  (click)=\"openDialog(item)\" >\n\n        <div id = \"displayFlex\" >\n        {{item.split(\"@\",3)[0]}}\n    </div>\n        <br>\n        <div id = \"displayFlex\">\n        {{item.split(\"@\",3)[1]}}\n    </div>\n        \n        \n    </div>\n<br>\n<br>\n</div> \n</div>\n\n\n</div>\n\n\n\n<!-- use latter -->\n<!-- <div>\n<div>\n    {{item.seletedTopic}}\n\n</div>\n\n<div>\n    {{item.desc}}\n</div>\n<div>\n    {{item.askprerequests}}\n</div>\n\n<span  innerHTML =  \"{{item.codeForCodeBaseSteps[0]}}\">\n   \n</span>\n<div>\n    {{\n    item.openCodeBaseValues\n}}\n</div>\n<style>\n    pre:hover{\n    background: blue;\n    font-size: 24px;\n}\n    </style>\n<div>\n\n</div>\n</div> -->");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div id=\"heading\">\n    CodeBase\n</div>\n<br>\n\n<div class=\"container\">\n    <div id=\"activateGrid\">\n        <div id = \"displayGrid\">\n            <span *ngFor=\"let item of topics\">\n\n                <button class=\"fixedbox\" routerLink=\"/getit/{{item}}\">{{item}}</button>\n                \n            </span>\n        </div>\n    </div>\n\n\n\n\n</div>\n\n<!-- <app-angular></app-angular> -->");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/process/process.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/process/process.component.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div  id = \"headng\">\n    <u>\n    Line Meter\n</u>\n</div>\n\n<div class=\"center\"  >\n        <mat-form-field  id = \"inputtext\">\n                <input    matInput   placeholder=\"Get ready for the action\" >\n              </mat-form-field>\n\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/sendit/sendit.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/sendit/sendit.component.html ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\n    <div class=\"center\">\n        <mat-form-field id=\"inputtext\">\n            <input [(ngModel)]=\"taskName\" matInput placeholder=\"Enter the task name\">\n\n\n        </mat-form-field>\n        <br>\n\n        <mat-form-field id=\"inputtext\">\n            <mat-label>Select Topic</mat-label>\n            <mat-select [(ngModel)]=\"seletedTopic\">\n                <mat-option *ngFor=\"let topic of topics\" [value]=\"topic\"  (click) = \"getSubTopic()\"  >\n                    {{topic}}\n                </mat-option>\n            </mat-select>\n        </mat-form-field>\n\n\n<br>    \n        <mat-form-field id=\"inputtext\">\n                <mat-label>Select Sub Topic</mat-label>\n                <mat-select [(ngModel)]=\"seletedsubTopic\">\n                    <mat-option *ngFor=\"let subtopic of subtopics\" [value]=\"subtopic\">\n                        {{subtopic}}\n                    </mat-option>\n                </mat-select>\n            </mat-form-field>\n\n\n\n        <div>  \n            <textarea [(ngModel)]=\"desc\" name=\"\" id=\"\" cols=\"45\" rows=\"3\"\n                placeholder=\"Enter the Descpriction of the task\"></textarea>\n            <br>\n            <mat-slide-toggle class=\"example-margin\" [(ngModel)]=\"askprerequest\" [color]=\"color\" [checked]=\"checked\"\n                [disabled]=\"disabled\">\n                Is there any Prerequest\n            </mat-slide-toggle>\n        </div>\n        <br>\n\n\n        <div *ngIf=\"!askprerequest\">\n            ****There are no Prerequest for this task****\n        </div>\n\n\n    </div>\n\n    <div *ngIf=\"askprerequest\">\n        <div *ngFor=\"let prerequest of prerequests ; let i = index;\">\n            <mat-form-field id=\"inputtext\">\n                <input [(ngModel)]=\"prerequestsofcodeBase[i]\" matInput\n                    placeholder=\"Enter the prerequest {{prerequest}}\">\n            </mat-form-field>\n            &nbsp;\n            <button class=\"inordes\" type=\"button\" class=\"btn btn-secondary\" (click)=\"subRequest()\">-</button>\n            &nbsp;\n            <button class=\"inordes\" type=\"button\" class=\"btn btn-secondary\" (click)=\"addRequest()\">+</button>\n            &nbsp;&nbsp;\n            <span *ngIf=\"!this.openCodeBaseValuesforPrerequest.includes(prerequest)\">\n                <button mat-raised-button (click)=\"openCodeBaseForPrequest(prerequest)\">\n                    Open Codebase\n                </button>\n            </span>\n\n\n            <span *ngIf=\"this.openCodeBaseValuesforPrerequest.includes(prerequest)\">\n                <button mat-raised-button (click)=\"closeCodeBaseForPrerequest(prerequest)\">\n                    close CodeBase\n                </button>\n\n            </span>\n\n\n\n\n\n\n\n            <div *ngIf=\"this.openCodeBaseValuesforPrerequest.includes(prerequest)\">\n\n                <quill-editor [(ngModel)]=\"prerequestsCodeofcodeBase[i]\"></quill-editor>\n\n\n            </div>\n\n\n\n\n        </div>\n\n    </div>\n\n\n    <hr>\n    <div>\n        <div *ngFor=\"let step of steps; let i = index;\">\n\n\n            <mat-form-field id=\"inputtext\">\n                <input [(ngModel)]=\"stepsofcodeBase[i]\" matInput placeholder=\"Enter the {{step}} step\">\n            </mat-form-field>\n            &nbsp;\n            <button class=\"inordes\" type=\"button\" class=\"btn btn-secondary\" (click)=\"subStep()\">-</button>\n            &nbsp;\n            <button class=\"inordes\" type=\"button\" class=\"btn btn-secondary\" (click)=\"addStep()\">+</button>\n            &nbsp;&nbsp;\n\n\n            <span *ngIf=\"!this.openCodeBaseValues.includes(step)\">\n                <button mat-raised-button (click)=\"openCodeBaseForSteps(step)\">\n                    Open Codebase\n                </button>\n            </span>\n\n\n            <span *ngIf=\"this.openCodeBaseValues.includes(step)\">\n                <button mat-raised-button (click)=\"closeCodeBaseForSteps(step)\">\n                    close CodeBase\n                </button>\n\n            </span>\n\n\n\n\n            <div *ngIf=\"this.openCodeBaseValues.includes(step)\">\n                <quill-editor [(ngModel)]=\"codeForCodeBaseSteps[i]\"></quill-editor>\n            </div>\n        </div>\n    </div>\n\n    <div>\n        <button mat-raised-button (click)=\"consoleitinlog()\">\n            Console It\n        </button>\n\n\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/show-graph/show-graph.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/show-graph/show-graph.component.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\n\n  <br>\n  <br>\n\n<input  [(ngModel)]=\"binding\" type=\"text\" name=\"\" id=\"\"  placeholder=\"Enter node Name\" >\n&nbsp;\n<button (click)= \"addNode(binding)\" class=\"btn btn-primary\">\nAdd node \n\n</button>\n\n<br>\n<br>\n<div>\n  <div *ngFor=\"let item of displaynodes\">\n    <div id = \"makeGrid\">\n      <div>\n    <h5 style=\"color: blue;\">{{item}}    ---------></h5>\n  </div>\n  <div>\n    Link to the \n    <select id=\"cars\" #linknodevalueis >\n      \n      <option  *ngFor=\"let item1 of displaynodes\"  value=\"{{item1}}\" >\n        <!-- <div *ngIf=\"item1!=item\" > -->\n        {{item1}} \n      <!-- </div> -->\n      </option>\n    \n     \n    </select>\n    &nbsp;&nbsp;\n    <input #linkLabeltodisplay type=\"text\" name=\"\" id=\"\" placeholder=\"Enter label to link\">\n    &nbsp;&nbsp;\n    <button (click)= \"linkIt(item,  linknodevalueis.value,linkLabeltodisplay.value)\"  class=\"btn btn-success\">Link It</button>\n  </div>\n  </div>\n  <br>\n\n  </div>\n</div>\n\n<p>{{binding}}</p>\n\n<ngx-graph\n  class=\"chart-container\"\n  [view]=\"[1000, 500]\"\n  [curve]=\"curve\"\n  [links]=links\n  [nodes]=nodes\n  [zoomToFit$]=\"zoomToFit$\"\n>\n\n<ng-template #defsTemplate>\n    <svg:marker id=\"arrow\" viewBox=\"0 -5 10 10\" refX=\"8\" refY=\"0\" markerWidth=\"4\" markerHeight=\"4\" orient=\"auto\">\n      <svg:path d=\"M0,-5L10,0L0,5\" class=\"arrow-head\" />\n    </svg:marker>\n  </ng-template>\n  <ng-template #nodeTemplate let-node>\n    \n    <svg:g class=\"node\" >\n      <svg:rect [attr.width]=\"node.dimension.width\" [attr.height]=\"node.dimension.height\" [attr.fill]=\"node.data.color\" (click)= \"clicked(node.label)\" />\n      <svg:text alignment-baseline=\"central\" [attr.x]=\"10\"   (click)= \"clicked(node.label)\" [attr.y]=\"node.dimension.height / 2\">\n      \n      {{node.label}}\n    \n    </svg:text>\n    </svg:g>\n\n  </ng-template>\n  <ng-template #linkTemplate let-link>\n    <svg:g class=\"edge\">\n      <svg:path class=\"line\" stroke-width=\"2\" marker-end=\"url(#arrow)\">\n      </svg:path>\n      <svg:text class=\"edge-label\" text-anchor=\"middle\">\n        <textPath class=\"text-path\" [attr.href]=\"'#' + link.id\" [style.dominant-baseline]=\"link.dominantBaseline\" startOffset=\"50%\">\n          {{link.label}}\n        </textPath>\n      </svg:text>\n    </svg:g>\n  </ng-template>\n</ngx-graph>\n\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/stepper/stepper.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/stepper/stepper.component.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\n    <!-- <button mat-raised-button (click)=\"isLinear = !isLinear\" id=\"toggle-linear\">\n        {{!isLinear ? 'Enable linear mode' : 'Disable linear mode'}}\n      </button> -->\n      <!-- <mat-horizontal-stepper [linear]=\"isLinear\" #stepper>\n        <mat-step [stepControl]=\"firstFormGroup\">\n          <form [formGroup]=\"firstFormGroup\">\n            <ng-template matStepLabel>Fill out your name</ng-template>\n            <mat-form-field>\n              <mat-label>Name</mat-label>\n              <input matInput placeholder=\"Last name, First name\" formControlName=\"firstCtrl\" required>\n            </mat-form-field>\n            <div>\n              <button mat-button matStepperNext>Push</button>\n              <button mat-button matStepperNext>Next</button>\n            </div>\n          </form>\n        </mat-step>\n        <mat-step [stepControl]=\"secondFormGroup\">\n          <form [formGroup]=\"secondFormGroup\">\n            <ng-template matStepLabel>Fill out your address</ng-template>\n            <mat-form-field>\n              <mat-label>Address</mat-label>\n              <input matInput formControlName=\"secondCtrl\" placeholder=\"Ex. 1 Main St, New York, NY\"\n                     required>\n            </mat-form-field>\n            <div>\n              <button mat-button matStepperPrevious>Back</button>\n              <button mat-button matStepperNext>Next</button>\n            </div>\n          </form>\n        </mat-step>\n        <mat-step>\n          <ng-template matStepLabel>Done</ng-template>\n          <p>You are now done.</p>\n          <div>\n            <button mat-button matStepperPrevious>Back</button>\n            <button mat-button (click)=\"stepper.reset()\">Reset</button>\n          </div>\n        </mat-step>\n        <mat-step>\n            <ng-template matStepLabel>Done</ng-template>\n            <p>You are now done.</p>\n            <div>\n              <button mat-button matStepperPrevious>Back</button>\n              <button mat-button (click)=\"stepper.reset()\">Reset</button>\n            </div>\n          </mat-step>\n          <mat-step>\n            <ng-template matStepLabel>Done</ng-template>\n            <p>You are now done.</p>\n            <div>\n              <button mat-button matStepperPrevious>Back</button>\n              <button mat-button (click)=\"stepper.reset()\">Reset</button>\n            </div>\n          </mat-step>\n          <mat-step>\n            <ng-template matStepLabel>Done</ng-template>\n            <p>You are now done.</p>\n            <div>\n              <button mat-button matStepperPrevious>Back</button>\n              <button mat-button (click)=\"stepper.reset()\">Reset</button>\n            </div>\n          </mat-step>\n          <mat-step>\n            <ng-template matStepLabel>Done</ng-template>\n            <p>You are now done.</p>\n            <div>\n              <button mat-button matStepperPrevious>Back</button>\n              <button mat-button (click)=\"stepper.reset()\">Reset</button>\n            </div>\n          </mat-step>\n      </mat-horizontal-stepper> -->\n\n\n\n      <mat-vertical-stepper [linear]=\"isLinear\" #stepper>\n        <mat-step *ngFor=\"let item of map | keyvalue\">\n          <ng-template matStepLabel>  {{item.key}}</ng-template>\n          <br>\n          \n          <div id = \"valuebtns\"> \n          <button id = \"valuebtn\"  *ngFor=\"let show of item.value\"  (click) = \"addIt(item.key,show)\" matStepperNext  >\n\n            {{show}}\n          </button>\n        </div>\n          \n          <div>\n            <button mat-button matStepperPrevious>Back</button>\n            <button mat-button matStepperNext>Next</button>\n          </div>\n        </mat-step>\n        <mat-step>\n          <ng-template matStepLabel>  Final Step</ng-template>\n          <table class=\"table\">\n            <thead>\n              <tr>\n                <th scope=\"col\">Data</th>\n                <th scope=\"col\">Value</th>\n             \n              </tr>\n            </thead>\n            <tbody>\n              <tr *ngFor=\"let maping of finalMap | keyvalue\">\n                <th scope=\"row\">{{maping.key}}</th>\n                <td>{{maping.value}}</td>\n               \n              </tr>\n              \n            </tbody>\n          </table>\n\n        </mat-step>\n      </mat-vertical-stepper>\n    \n    \n</div>\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/story-borad/story-borad.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/story-borad/story-borad.component.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\n    <br>\n    <br>\n    \n    <div id = \"displayData\">\n    <div *ngFor=\"let data of dispalyData\" >\n        <button id = \"data\">{{data | titlecase}}</button>\n\n    </div>\n</div>\n<br><br><br>\n\n<div>\n    <textarea name=\"\" id=\"areafull\" cols=\"100\" ></textarea>\n</div>\n\n    <button id = \"subbtn\">\n        Submit\n    </button>\n\n\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/sub-topic-create/sub-topic-create.component.html":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/sub-topic-create/sub-topic-create.component.html ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<div class = \"container\">\n\n\n    <mat-form-field id=\"inputtext\">\n        <mat-label>Select Topic</mat-label>\n        <mat-select [(value)]=\"selected\">\n            <mat-option *ngFor=\"let topic of topics\" [value]=\"topic\"  >\n                {{topic}}\n            </mat-option>\n        </mat-select>\n    </mat-form-field>\n    <br>\n\n    <mat-form-field id=\"inputtext\">\n        <input [(ngModel)]=\"subTopicValue\" matInput placeholder=\"Enter Name to create a sub topic\">\n\n\n    </mat-form-field>\n\n<br>\n&nbsp;&nbsp;\n    <button class=\"btn-primary\"  (click)=\"createIt()\">Create It</button>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/write-story/write-story.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/write-story/write-story.component.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\n   <div>\n       <h4>Write the story</h4>\n       <Textarea  #wirteStory ></Textarea>\n       <br>\n       <button type=\"button\" class=\"btn btn-primary\" (click) = \"markIt(wirteStory.value)\">Mark It</button>\n\n   </div>\n\n</div>");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


/***/ }),

/***/ "./src/app/angular/angular.component.css":
/*!***********************************************!*\
  !*** ./src/app/angular/angular.component.css ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FuZ3VsYXIvYW5ndWxhci5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/angular/angular.component.ts":
/*!**********************************************!*\
  !*** ./src/app/angular/angular.component.ts ***!
  \**********************************************/
/*! exports provided: AngularComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AngularComponent", function() { return AngularComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angulardialogue_angulardialogue_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../angulardialogue/angulardialogue.component */ "./src/app/angulardialogue/angulardialogue.component.ts");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm2015/dialog.js");




let AngularComponent = class AngularComponent {
    constructor(dialog) {
        this.dialog = dialog;
    }
    openDialog() {
        this.dialog.open(_angulardialogue_angulardialogue_component__WEBPACK_IMPORTED_MODULE_2__["AngulardialogueComponent"], {
            data: {
                animal: 'panda'
            }
        });
    }
    ngOnInit() {
    }
};
AngularComponent.ctorParameters = () => [
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialog"] }
];
AngularComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-angular',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./angular.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/angular/angular.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./angular.component.css */ "./src/app/angular/angular.component.css")).default]
    })
], AngularComponent);



/***/ }),

/***/ "./src/app/angulardialogue/angulardialogue.component.css":
/*!***************************************************************!*\
  !*** ./src/app/angulardialogue/angulardialogue.component.css ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#scroll{\n    overflow : auto;\n}\n#setHight{\n    height: 70vh;\n}\n#prerequestStyle{\n    width: 100%;\n    border: 2px dotted yellow;\n    border-radius: 25px;\n    \n}\n#marginlatout{\n    margin: 20px;\n}\n#prerequestStyleforcode{\n    width: 100%;\n    border: 2px dotted green;\n    border-radius: 25px;\n\n}\n#centerit{\n    text-align: center;\n}\n#styleButton{\n    background: none;\n    border: 2px solid black;\n    border-radius: 10px;\n    width: 200px;\n    height: 32px;\n    outline: none;\n    \n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYW5ndWxhcmRpYWxvZ3VlL2FuZ3VsYXJkaWFsb2d1ZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZUFBZTtBQUNuQjtBQUNBO0lBQ0ksWUFBWTtBQUNoQjtBQUNBO0lBQ0ksV0FBVztJQUNYLHlCQUF5QjtJQUN6QixtQkFBbUI7O0FBRXZCO0FBQ0E7SUFDSSxZQUFZO0FBQ2hCO0FBQ0E7SUFDSSxXQUFXO0lBQ1gsd0JBQXdCO0lBQ3hCLG1CQUFtQjs7QUFFdkI7QUFDQTtJQUNJLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksZ0JBQWdCO0lBQ2hCLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsWUFBWTtJQUNaLFlBQVk7SUFDWixhQUFhOztBQUVqQiIsImZpbGUiOiJzcmMvYXBwL2FuZ3VsYXJkaWFsb2d1ZS9hbmd1bGFyZGlhbG9ndWUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiNzY3JvbGx7XG4gICAgb3ZlcmZsb3cgOiBhdXRvO1xufVxuI3NldEhpZ2h0e1xuICAgIGhlaWdodDogNzB2aDtcbn1cbiNwcmVyZXF1ZXN0U3R5bGV7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYm9yZGVyOiAycHggZG90dGVkIHllbGxvdztcbiAgICBib3JkZXItcmFkaXVzOiAyNXB4O1xuICAgIFxufVxuI21hcmdpbmxhdG91dHtcbiAgICBtYXJnaW46IDIwcHg7XG59XG4jcHJlcmVxdWVzdFN0eWxlZm9yY29kZXtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBib3JkZXI6IDJweCBkb3R0ZWQgZ3JlZW47XG4gICAgYm9yZGVyLXJhZGl1czogMjVweDtcblxufVxuI2NlbnRlcml0e1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbiNzdHlsZUJ1dHRvbntcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xuICAgIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgd2lkdGg6IDIwMHB4O1xuICAgIGhlaWdodDogMzJweDtcbiAgICBvdXRsaW5lOiBub25lO1xuICAgIFxufSJdfQ== */");

/***/ }),

/***/ "./src/app/angulardialogue/angulardialogue.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/angulardialogue/angulardialogue.component.ts ***!
  \**************************************************************/
/*! exports provided: AngulardialogueComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AngulardialogueComponent", function() { return AngulardialogueComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm2015/dialog.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/es2015/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");





let AngulardialogueComponent = class AngulardialogueComponent {
    constructor(route, router, dialogRef, data, db) {
        this.route = route;
        this.router = router;
        this.dialogRef = dialogRef;
        this.data = data;
        this.db = db;
    }
    onNoClick() {
        this.dialogRef.close();
    }
    ngOnInit() {
        console.log(this.data.getItem.split("@", 3)[2]);
        console.log(this.data.getId);
        this.db.collection(this.data.getId).doc(this.data.getItem.split("@", 3)[2]).get().subscribe((doc) => {
            console.log(doc.data());
            this.displayDataOnscreen = doc.data();
            console.log(this.displayDataOnscreen);
        });
    }
};
AngulardialogueComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"],] }] },
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__["AngularFirestore"] }
];
AngulardialogueComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-angulardialogue',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./angulardialogue.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/angulardialogue/angulardialogue.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./angulardialogue.component.css */ "./src/app/angulardialogue/angulardialogue.component.css")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](3, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]))
], AngulardialogueComponent);



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _process_process_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./process/process.component */ "./src/app/process/process.component.ts");
/* harmony import */ var _sendit_sendit_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./sendit/sendit.component */ "./src/app/sendit/sendit.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _editorconfig_editorconfig_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./editorconfig/editorconfig.component */ "./src/app/editorconfig/editorconfig.component.ts");
/* harmony import */ var _firebasetest_firebasetest_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./firebasetest/firebasetest.component */ "./src/app/firebasetest/firebasetest.component.ts");
/* harmony import */ var _angular_angular_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./angular/angular.component */ "./src/app/angular/angular.component.ts");
/* harmony import */ var _getit_getit_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./getit/getit.component */ "./src/app/getit/getit.component.ts");
/* harmony import */ var _write_story_write_story_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./write-story/write-story.component */ "./src/app/write-story/write-story.component.ts");
/* harmony import */ var _sub_topic_create_sub_topic_create_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./sub-topic-create/sub-topic-create.component */ "./src/app/sub-topic-create/sub-topic-create.component.ts");
/* harmony import */ var _stepper_stepper_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./stepper/stepper.component */ "./src/app/stepper/stepper.component.ts");
/* harmony import */ var _edit_data_edit_data_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./edit-data/edit-data.component */ "./src/app/edit-data/edit-data.component.ts");
/* harmony import */ var _story_borad_story_borad_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./story-borad/story-borad.component */ "./src/app/story-borad/story-borad.component.ts");















const routes = [
    {
        path: "storyBorad",
        component: _story_borad_story_borad_component__WEBPACK_IMPORTED_MODULE_14__["StoryBoradComponent"]
    },
    {
        path: "Edit",
        component: _edit_data_edit_data_component__WEBPACK_IMPORTED_MODULE_13__["EditDataComponent"]
    },
    {
        path: "display_graph",
        component: _stepper_stepper_component__WEBPACK_IMPORTED_MODULE_12__["StepperComponent"]
    },
    {
        path: "create_sub_topic",
        component: _sub_topic_create_sub_topic_create_component__WEBPACK_IMPORTED_MODULE_11__["SubTopicCreateComponent"]
    },
    {
        path: "process",
        component: _process_process_component__WEBPACK_IMPORTED_MODULE_3__["ProcessComponent"]
    },
    {
        path: "getit/:id",
        component: _getit_getit_component__WEBPACK_IMPORTED_MODULE_9__["GetitComponent"]
    },
    {
        path: "firebase",
        component: _firebasetest_firebasetest_component__WEBPACK_IMPORTED_MODULE_7__["FirebasetestComponent"]
    },
    {
        path: "angular",
        component: _angular_angular_component__WEBPACK_IMPORTED_MODULE_8__["AngularComponent"]
    },
    {
        path: "",
        component: _home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"]
    },
    {
        path: "sendit",
        component: _sendit_sendit_component__WEBPACK_IMPORTED_MODULE_4__["SenditComponent"]
    },
    {
        path: "editor",
        component: _editorconfig_editorconfig_component__WEBPACK_IMPORTED_MODULE_6__["EditorconfigComponent"]
    },
    {
        path: "writeStory",
        component: _write_story_write_story_component__WEBPACK_IMPORTED_MODULE_10__["WriteStoryComponent"]
    }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".fab {\n    width: 50px;\n    height: 50px;\n    background-color: blue;\n    border-radius: 50%;\n    box-shadow: 0 6px 10px 0 #666;\n    transition: all 0.1s ease-in-out;\n  \n    font-size: 50px;\n    color: white;\n    text-align: center;\n    line-height: 47px;\n  \n    position: fixed;\n    right: 50px;\n    bottom: 50px;\n    outline: none;\n    \n }\n  \n .fab:hover {\n    box-shadow: 0 6px 14px 0 #666;\n    transform: scale(1.05);\n    cursor: pointer;\n    outline: none;\n\n    \n }\n  \n #addGrid{\n     display: grid;\n     grid-template-columns: auto auto auto auto;\n }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLHNCQUFzQjtJQUN0QixrQkFBa0I7SUFDbEIsNkJBQTZCO0lBQzdCLGdDQUFnQzs7SUFFaEMsZUFBZTtJQUNmLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsaUJBQWlCOztJQUVqQixlQUFlO0lBQ2YsV0FBVztJQUNYLFlBQVk7SUFDWixhQUFhOztDQUVoQjs7Q0FFQTtJQUNHLDZCQUE2QjtJQUM3QixzQkFBc0I7SUFDdEIsZUFBZTtJQUNmLGFBQWE7OztDQUdoQjs7Q0FDQTtLQUNJLGFBQWE7S0FDYiwwQ0FBMEM7Q0FDOUMiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mYWIge1xuICAgIHdpZHRoOiA1MHB4O1xuICAgIGhlaWdodDogNTBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibHVlO1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBib3gtc2hhZG93OiAwIDZweCAxMHB4IDAgIzY2NjtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4xcyBlYXNlLWluLW91dDtcbiAgXG4gICAgZm9udC1zaXplOiA1MHB4O1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbGluZS1oZWlnaHQ6IDQ3cHg7XG4gIFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICByaWdodDogNTBweDtcbiAgICBib3R0b206IDUwcHg7XG4gICAgb3V0bGluZTogbm9uZTtcbiAgICBcbiB9XG4gIFxuIC5mYWI6aG92ZXIge1xuICAgIGJveC1zaGFkb3c6IDAgNnB4IDE0cHggMCAjNjY2O1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wNSk7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIG91dGxpbmU6IG5vbmU7XG5cbiAgICBcbiB9XG4gI2FkZEdyaWR7XG4gICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogYXV0byBhdXRvIGF1dG8gYXV0bztcbiB9Il19 */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


// import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
let AppComponent = class AppComponent {
    // import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
    constructor() {
        this.title = 'codebase';
    }
    routeIt() {
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm2015/dialog.js");
/* harmony import */ var _angular_angular_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./angular/angular.component */ "./src/app/angular/angular.component.ts");
/* harmony import */ var _angulardialogue_angulardialogue_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./angulardialogue/angulardialogue.component */ "./src/app/angulardialogue/angulardialogue.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _process_process_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./process/process.component */ "./src/app/process/process.component.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/esm2015/input.js");
/* harmony import */ var _sendit_sendit_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./sendit/sendit.component */ "./src/app/sendit/sendit.component.ts");
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/slide-toggle */ "./node_modules/@angular/material/esm2015/slide-toggle.js");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/checkbox */ "./node_modules/@angular/material/esm2015/checkbox.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm2015/button.js");
/* harmony import */ var _editorconfig_editorconfig_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./editorconfig/editorconfig.component */ "./src/app/editorconfig/editorconfig.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var ngx_quill__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ngx-quill */ "./node_modules/ngx-quill/fesm2015/ngx-quill.js");
/* harmony import */ var _firebasetest_firebasetest_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./firebasetest/firebasetest.component */ "./src/app/firebasetest/firebasetest.component.ts");
/* harmony import */ var _angular_fire__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/fire */ "./node_modules/@angular/fire/es2015/index.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/es2015/index.js");
/* harmony import */ var _swimlane_ngx_graph__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @swimlane/ngx-graph */ "./node_modules/@swimlane/ngx-graph/fesm2015/swimlane-ngx-graph.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/esm2015/select.js");
/* harmony import */ var _getit_getit_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./getit/getit.component */ "./src/app/getit/getit.component.ts");
/* harmony import */ var _write_story_write_story_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./write-story/write-story.component */ "./src/app/write-story/write-story.component.ts");
/* harmony import */ var _sub_topic_create_sub_topic_create_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./sub-topic-create/sub-topic-create.component */ "./src/app/sub-topic-create/sub-topic-create.component.ts");
/* harmony import */ var _show_graph_show_graph_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./show-graph/show-graph.component */ "./src/app/show-graph/show-graph.component.ts");
/* harmony import */ var _stepper_stepper_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./stepper/stepper.component */ "./src/app/stepper/stepper.component.ts");
/* harmony import */ var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/material/stepper */ "./node_modules/@angular/material/esm2015/stepper.js");
/* harmony import */ var _edit_data_edit_data_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./edit-data/edit-data.component */ "./src/app/edit-data/edit-data.component.ts");
/* harmony import */ var _story_borad_story_borad_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./story-borad/story-borad.component */ "./src/app/story-borad/story-borad.component.ts");



















// import {QuillInitializeService} from "./quill-initialize.service";
















let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
            _angular_angular_component__WEBPACK_IMPORTED_MODULE_7__["AngularComponent"],
            _angulardialogue_angulardialogue_component__WEBPACK_IMPORTED_MODULE_8__["AngulardialogueComponent"],
            _process_process_component__WEBPACK_IMPORTED_MODULE_10__["ProcessComponent"],
            _sendit_sendit_component__WEBPACK_IMPORTED_MODULE_13__["SenditComponent"],
            _editorconfig_editorconfig_component__WEBPACK_IMPORTED_MODULE_17__["EditorconfigComponent"],
            _home_home_component__WEBPACK_IMPORTED_MODULE_18__["HomeComponent"],
            _firebasetest_firebasetest_component__WEBPACK_IMPORTED_MODULE_20__["FirebasetestComponent"],
            _getit_getit_component__WEBPACK_IMPORTED_MODULE_26__["GetitComponent"],
            _write_story_write_story_component__WEBPACK_IMPORTED_MODULE_27__["WriteStoryComponent"],
            _sub_topic_create_sub_topic_create_component__WEBPACK_IMPORTED_MODULE_28__["SubTopicCreateComponent"],
            _show_graph_show_graph_component__WEBPACK_IMPORTED_MODULE_29__["ShowGraphComponent"],
            _stepper_stepper_component__WEBPACK_IMPORTED_MODULE_30__["StepperComponent"],
            _edit_data_edit_data_component__WEBPACK_IMPORTED_MODULE_32__["EditDataComponent"],
            _story_borad_story_borad_component__WEBPACK_IMPORTED_MODULE_33__["StoryBoradComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _swimlane_ngx_graph__WEBPACK_IMPORTED_MODULE_24__["NgxGraphModule"],
            _angular_fire__WEBPACK_IMPORTED_MODULE_21__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_22__["environment"].firebase),
            _angular_material_select__WEBPACK_IMPORTED_MODULE_25__["MatSelectModule"],
            _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_23__["AngularFirestoreModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
            _angular_material_stepper__WEBPACK_IMPORTED_MODULE_31__["MatStepperModule"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialogModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__["NgbModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_12__["MatInputModule"],
            _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_14__["MatSlideToggleModule"],
            _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_15__["MatCheckboxModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_16__["MatButtonModule"],
            ngx_quill__WEBPACK_IMPORTED_MODULE_19__["QuillModule"].forRoot(),
            _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ReactiveFormsModule"]
        ],
        entryComponents: [
            _angulardialogue_angulardialogue_component__WEBPACK_IMPORTED_MODULE_8__["AngulardialogueComponent"]
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/edit-data/edit-data.component.css":
/*!***************************************************!*\
  !*** ./src/app/edit-data/edit-data.component.css ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2VkaXQtZGF0YS9lZGl0LWRhdGEuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/edit-data/edit-data.component.ts":
/*!**************************************************!*\
  !*** ./src/app/edit-data/edit-data.component.ts ***!
  \**************************************************/
/*! exports provided: EditDataComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditDataComponent", function() { return EditDataComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let EditDataComponent = class EditDataComponent {
    constructor() { }
    ngOnInit() {
    }
};
EditDataComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-edit-data',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./edit-data.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/edit-data/edit-data.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./edit-data.component.css */ "./src/app/edit-data/edit-data.component.css")).default]
    })
], EditDataComponent);



/***/ }),

/***/ "./src/app/editorconfig/editorconfig.component.css":
/*!*********************************************************!*\
  !*** ./src/app/editorconfig/editorconfig.component.css ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".ql-syntax{\nbackground: black;\ncolor: blue;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZWRpdG9yY29uZmlnL2VkaXRvcmNvbmZpZy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0EsaUJBQWlCO0FBQ2pCLFdBQVc7QUFDWCIsImZpbGUiOiJzcmMvYXBwL2VkaXRvcmNvbmZpZy9lZGl0b3Jjb25maWcuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5xbC1zeW50YXh7XG5iYWNrZ3JvdW5kOiBibGFjaztcbmNvbG9yOiBibHVlO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/editorconfig/editorconfig.component.ts":
/*!********************************************************!*\
  !*** ./src/app/editorconfig/editorconfig.component.ts ***!
  \********************************************************/
/*! exports provided: EditorconfigComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditorconfigComponent", function() { return EditorconfigComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var quill__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! quill */ "./node_modules/quill/dist/quill.js");
/* harmony import */ var quill__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(quill__WEBPACK_IMPORTED_MODULE_2__);


// import * as ace from 'ace-builds'; // ace module ..
// language package, choose your own 
// import 'ace-builds/src-noconflict/mode-javascript';
// import { NONE_TYPE } from '@angular/compiler/src/output/output_ast';
// ui-theme package
// import 'ace-builds/src-noconflict/theme-github';
// import Quill from 'quill';

console.log(quill__WEBPACK_IMPORTED_MODULE_2__);
const THEME = 'ace/theme/github';
const LANG = 'ace/mode/javascript';
let EditorconfigComponent = class EditorconfigComponent {
    // @ViewChild('codeEditor1',{static:true}) codeEditorElmRef1: ElementRef;
    // private codeEditor: ace.Ace.Editor;
    // private codeEditor1: ace.Ace.Editor;
    constructor() {
    }
    ngOnInit() {
        // const element = this.codeEditorElmRef.nativeElement;
        // const element1 = this.codeEditorElmRef1.nativeElement;
        // const editorOptions: Partial<ace.Ace.EditorOptions> = {
        //     highlightActiveLine: true,
        //     minLines: 10,
        //     maxLines: Infinity,
        // };
        // this.codeEditor = ace.edit(element, editorOptions);
        // this.codeEditor.setTheme(THEME);
        // this.codeEditor.getSession().setMode(LANG);
        // this.codeEditor.setShowFoldWidgets(true); // for the scope fold feature
        // this.codeEditor1 = ace.edit(element1, editorOptions);
        // this.codeEditor1.setTheme(THEME);
        // this.codeEditor1.getSession().setMode(LANG);
        // this.codeEditor1.setShowFoldWidgets(true); // for the scope fold feature
    }
    getit() {
        // const code = this.codeEditor.getValue();
        // this.codeEditor.setValue("var code = \"multiple\"")
        // console.log(code);
        console.log(this.binding);
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('editor', { static: true })
], EditorconfigComponent.prototype, "codeEditorElmRef", void 0);
EditorconfigComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-editorconfig',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./editorconfig.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/editorconfig/editorconfig.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./editorconfig.component.css */ "./src/app/editorconfig/editorconfig.component.css")).default]
    })
], EditorconfigComponent);



/***/ }),

/***/ "./src/app/firebasetest/firebasetest.component.css":
/*!*********************************************************!*\
  !*** ./src/app/firebasetest/firebasetest.component.css ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ZpcmViYXNldGVzdC9maXJlYmFzZXRlc3QuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/firebasetest/firebasetest.component.ts":
/*!********************************************************!*\
  !*** ./src/app/firebasetest/firebasetest.component.ts ***!
  \********************************************************/
/*! exports provided: FirebasetestComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FirebasetestComponent", function() { return FirebasetestComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/es2015/index.js");



let FirebasetestComponent = class FirebasetestComponent {
    constructor(db) {
        this.db = db;
    }
    ngOnInit() {
        this.db.collection("testing").add({
            value: "working"
        });
    }
};
FirebasetestComponent.ctorParameters = () => [
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"] }
];
FirebasetestComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-firebasetest',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./firebasetest.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/firebasetest/firebasetest.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./firebasetest.component.css */ "./src/app/firebasetest/firebasetest.component.css")).default]
    })
], FirebasetestComponent);



/***/ }),

/***/ "./src/app/getit/getit.component.css":
/*!*******************************************!*\
  !*** ./src/app/getit/getit.component.css ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n\n\npre{\n    background: blue;\n    font-size: 24px;\n}\n#displayGrid{\n    display: grid;\n    grid-template-columns: 23% 23% 23% 23%;\n    grid-gap: 2% ;\n\n}\n#displayFlex{\n    display: flex;\n    align-items: center;    \n    justify-content: center;\n    margin-top: 7px;\n  \n\n\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ2V0aXQvZ2V0aXQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFHQTtJQUNJLGdCQUFnQjtJQUNoQixlQUFlO0FBQ25CO0FBQ0E7SUFDSSxhQUFhO0lBQ2Isc0NBQXNDO0lBQ3RDLGFBQWE7O0FBRWpCO0FBQ0E7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2QixlQUFlOzs7O0FBSW5CIiwiZmlsZSI6InNyYy9hcHAvZ2V0aXQvZ2V0aXQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuXG5cbnByZXtcbiAgICBiYWNrZ3JvdW5kOiBibHVlO1xuICAgIGZvbnQtc2l6ZTogMjRweDtcbn1cbiNkaXNwbGF5R3JpZHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMjMlIDIzJSAyMyUgMjMlO1xuICAgIGdyaWQtZ2FwOiAyJSA7XG5cbn0gXG4jZGlzcGxheUZsZXh7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyOyAgICBcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBtYXJnaW4tdG9wOiA3cHg7XG4gIFxuXG5cbn0iXX0= */");

/***/ }),

/***/ "./src/app/getit/getit.component.ts":
/*!******************************************!*\
  !*** ./src/app/getit/getit.component.ts ***!
  \******************************************/
/*! exports provided: GetitComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetitComponent", function() { return GetitComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/es2015/index.js");
/* harmony import */ var _angulardialogue_angulardialogue_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../angulardialogue/angulardialogue.component */ "./src/app/angulardialogue/angulardialogue.component.ts");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm2015/dialog.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");






``;
let GetitComponent = class GetitComponent {
    constructor(afs, dialog, route, router) {
        this.afs = afs;
        this.dialog = dialog;
        this.route = route;
        this.router = router;
        this.displayData = [];
        this.requestThing = this.route.snapshot.paramMap.get('id');
        this.sendid = this.requestThing;
        this.requestThing = this.requestThing + "Array";
        console.log(this.requestThing);
        var count = 0;
        this.reciveSubtopics = this.afs.collection("subTopic").doc(this.sendid);
        this.reciveSubtopic = this.reciveSubtopics.get();
        this.reciveSubtopic.subscribe((doc) => {
            console.log(doc.data().data);
            this.onDisplay = doc.data().data;
            // count = count +1;
        });
        this.angularCollections = this.afs.collection(this.requestThing).doc('data');
        console.log(this.displayData);
    }
    openDialog(sendItem
    // getAskprerequests,getprerequestsofcodeBase,getprerequestsCodeofcodeBase,getstepsofcodeBase,getcodeForCodeBaseSteps
    ) {
        console.log();
        this.dialog.open(_angulardialogue_angulardialogue_component__WEBPACK_IMPORTED_MODULE_3__["AngulardialogueComponent"], {
            data: {
                getItem: sendItem,
                getId: this.sendid
                // sendaskprerequests: getAskprerequests,
                // sendprerequestsofcodeBase:getprerequestsofcodeBase,
                // sendprerequestsCodeofcodeBase:getprerequestsCodeofcodeBase,
                // sendstepsofcodeBase:getstepsofcodeBase,
                // sendcodeForCodeBaseSteps:getcodeForCodeBaseSteps
            },
            width: "100vh",
        });
    }
    ngOnInit() {
        // route: ActivatedRoute;
        // router: Router;
        //   var hero$:Observable<string>
        //  hero$= route.paramMap.pipe(
        //   map((params: ParamMap) =>
        //      (params.get('id')))
        // );
        // console.log(ink,hero$);
    }
    getdataIntoHtml(item) {
        this.angularCollections = this.afs.collection(this.requestThing).doc(item);
        this.angularCollection = this.angularCollections.get();
        this.angularCollection.subscribe((doc) => {
            console.log(doc.data());
            this.displayData = doc.data().value;
            // count = count +1;
        });
    }
};
GetitComponent.ctorParameters = () => [
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"] },
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }
];
GetitComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-getit',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./getit.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/getit/getit.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./getit.component.css */ "./src/app/getit/getit.component.css")).default]
    })
], GetitComponent);



/***/ }),

/***/ "./src/app/give-it.service.ts":
/*!************************************!*\
  !*** ./src/app/give-it.service.ts ***!
  \************************************/
/*! exports provided: GiveItService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GiveItService", function() { return GiveItService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let GiveItService = class GiveItService {
    constructor() {
        this.topics = ["Basics", "Firebase", "Networking", "Python", "Flutter"];
    }
    getTopics() {
        return this.topics;
    }
};
GiveItService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], GiveItService);



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".fixedbox{\n    width: 150px;\n    height: 150px;\nborder:2px solid black;\n    border-radius: 25px;\n    display: grid;\n    justify-content: center;\n    align-items: center;\n}\n.fixedbox:hover{\n    background: black;\n    color: #ffffff;\n    box-shadow: 2px 5px #888888;\n}\n#displayGrid{\n    display: grid;\n    grid-template-columns: 23% 23% 23% 23%;\n    grid-gap: 2% ;\n\n}\na{\n    -webkit-text-emphasis: none;\n            text-emphasis: none;\n    text-decoration: none;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxZQUFZO0lBQ1osYUFBYTtBQUNqQixzQkFBc0I7SUFDbEIsbUJBQW1CO0lBQ25CLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CO0FBQ3ZCO0FBQ0E7SUFDSSxpQkFBaUI7SUFDakIsY0FBYztJQUNkLDJCQUEyQjtBQUMvQjtBQUNBO0lBQ0ksYUFBYTtJQUNiLHNDQUFzQztJQUN0QyxhQUFhOztBQUVqQjtBQUNBO0lBQ0ksMkJBQW1CO1lBQW5CLG1CQUFtQjtJQUNuQixxQkFBcUI7QUFDekIiLCJmaWxlIjoic3JjL2FwcC9ob21lL2hvbWUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5maXhlZGJveHtcbiAgICB3aWR0aDogMTUwcHg7XG4gICAgaGVpZ2h0OiAxNTBweDtcbmJvcmRlcjoycHggc29saWQgYmxhY2s7XG4gICAgYm9yZGVyLXJhZGl1czogMjVweDtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4uZml4ZWRib3g6aG92ZXJ7XG4gICAgYmFja2dyb3VuZDogYmxhY2s7XG4gICAgY29sb3I6ICNmZmZmZmY7XG4gICAgYm94LXNoYWRvdzogMnB4IDVweCAjODg4ODg4O1xufVxuI2Rpc3BsYXlHcmlke1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyMyUgMjMlIDIzJSAyMyU7XG4gICAgZ3JpZC1nYXA6IDIlIDtcblxufSBcbmF7XG4gICAgdGV4dC1lbXBoYXNpczogbm9uZTtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG4iXX0= */");

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _give_it_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../give-it.service */ "./src/app/give-it.service.ts");



let HomeComponent = class HomeComponent {
    constructor(showIt) {
        this.showIt = showIt;
    }
    ngOnInit() {
        this.topics = this.showIt.getTopics();
    }
};
HomeComponent.ctorParameters = () => [
    { type: _give_it_service__WEBPACK_IMPORTED_MODULE_2__["GiveItService"] }
];
HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")).default]
    })
], HomeComponent);



/***/ }),

/***/ "./src/app/process/process.component.css":
/*!***********************************************!*\
  !*** ./src/app/process/process.component.css ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#inputtext{\n    width: 50%;\n    margin-top: 20px;\n\n}\n.center{\n    text-align: center;\n} \n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvY2Vzcy9wcm9jZXNzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxVQUFVO0lBQ1YsZ0JBQWdCOztBQUVwQjtBQUNBO0lBQ0ksa0JBQWtCO0FBQ3RCIiwiZmlsZSI6InNyYy9hcHAvcHJvY2Vzcy9wcm9jZXNzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjaW5wdXR0ZXh0e1xuICAgIHdpZHRoOiA1MCU7XG4gICAgbWFyZ2luLXRvcDogMjBweDtcblxufVxuLmNlbnRlcntcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59ICJdfQ== */");

/***/ }),

/***/ "./src/app/process/process.component.ts":
/*!**********************************************!*\
  !*** ./src/app/process/process.component.ts ***!
  \**********************************************/
/*! exports provided: ProcessComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProcessComponent", function() { return ProcessComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ProcessComponent = class ProcessComponent {
    constructor() {
    }
    ngOnInit() {
    }
};
ProcessComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-process',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./process.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/process/process.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./process.component.css */ "./src/app/process/process.component.css")).default]
    })
], ProcessComponent);



/***/ }),

/***/ "./src/app/sendit/sendit.component.css":
/*!*********************************************!*\
  !*** ./src/app/sendit/sendit.component.css ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#prerequest{\n    color: blue;\n} \n#inputtext{\n    width: 50%;\n    margin-top: 20px;\n\n} \n.center{\n    text-align: center;\n} \n.inordes{\n    width: 30px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2VuZGl0L3NlbmRpdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksV0FBVztBQUNmO0FBQ0E7SUFDSSxVQUFVO0lBQ1YsZ0JBQWdCOztBQUVwQjtBQUNBO0lBQ0ksa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSxXQUFXO0FBQ2YiLCJmaWxlIjoic3JjL2FwcC9zZW5kaXQvc2VuZGl0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjcHJlcmVxdWVzdHtcbiAgICBjb2xvcjogYmx1ZTtcbn0gXG4jaW5wdXR0ZXh0e1xuICAgIHdpZHRoOiA1MCU7XG4gICAgbWFyZ2luLXRvcDogMjBweDtcblxufVxuLmNlbnRlcntcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59IFxuLmlub3JkZXN7XG4gICAgd2lkdGg6IDMwcHg7XG59Il19 */");

/***/ }),

/***/ "./src/app/sendit/sendit.component.ts":
/*!********************************************!*\
  !*** ./src/app/sendit/sendit.component.ts ***!
  \********************************************/
/*! exports provided: SenditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SenditComponent", function() { return SenditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/es2015/index.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebase/app */ "./node_modules/firebase/app/dist/index.cjs.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _give_it_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../give-it.service */ "./src/app/give-it.service.ts");



// import undefined = require('firebase/empty-import');


let SenditComponent = class SenditComponent {
    constructor(db, getittopicsinload) {
        this.db = db;
        this.getittopicsinload = getittopicsinload;
        this.askprerequest = false;
        this.subtopics = ["select"];
        this.seletedsubTopic = "";
        this.color = 'primary';
        this.taskName = "";
        this.desc = "";
        this.seletedTopic = "";
        this.topics = this.getittopicsinload.getTopics();
        this.prerequests = [1];
        this.steps = [1];
        this.openCodeBaseValues = [];
        this.openCodeBaseValuesforPrerequest = [];
        this.stepsofcodeBase = [];
        this.codeForCodeBaseSteps = [];
        this.prerequestsofcodeBase = [];
        this.prerequestsCodeofcodeBase = [];
    }
    ngOnInit() {
    }
    subRequest() {
        if (this.prerequests.length <= 1) {
            alert("There  should be atleast one Prerequest");
        }
        else {
            this.prerequests.pop();
            console.log("i am working");
        }
    }
    addRequest() {
        var invalue = this.prerequests.length + 1;
        this.prerequests.push(invalue);
        console.log("i am working");
    }
    subStep() {
        if (this.steps.length <= 1) {
            alert("There  should be atleast one Step");
        }
        else {
            this.steps.pop();
            console.log("i am working");
        }
    }
    addStep() {
        var invalue = this.steps.length + 1;
        this.steps.push(invalue);
        console.log("i am working");
    }
    openCodeBaseForPrequest(value) {
        this.openCodeBaseValuesforPrerequest.push(value);
    }
    getSubTopic() {
        console.log("i am here ");
        if (this.seletedTopic.length >= 1) {
            console.log(this.seletedTopic);
            this.db.collection('subTopic').doc(this.seletedTopic).get().subscribe((doc) => {
                console.log(doc.data().data);
                this.subtopics = doc.data().data;
            });
        }
        else {
            console.log("it is null");
        }
    }
    closeCodeBaseForPrerequest(values) {
        const index = this.openCodeBaseValuesforPrerequest.indexOf(values, 0);
        if (index > -1) {
            this.openCodeBaseValuesforPrerequest.splice(index, 1);
        }
    }
    openCodeBaseForSteps(value) {
        console.log("i am working", value);
        this.openCodeBaseValues.push(value);
        console.log(this.openCodeBaseValues.includes(1));
    }
    closeCodeBaseForSteps(values) {
        const index = this.openCodeBaseValues.indexOf(values, 0);
        if (index > -1) {
            this.openCodeBaseValues.splice(index, 1);
        }
        console.log(this.openCodeBaseValues);
    }
    consoleitinlog() {
        // console.log(this.prerequests, this.steps, this.openCodeBaseValuesforPrerequest, this.openCodeBaseValues);
        // console.log(this.openCodeBaseValuesforPrerequest)
        // console.log(
        //   this.taskName,
        //   this.stepsofcodeBase ,
        // this.codeForCodeBaseSteps ,
        // this.prerequestsofcodeBase ,
        // this.prerequestsCodeofcodeBase ,
        // )
        // console.log(this.prerequestsofcodeBase,this.prerequestsCodeofcodeBase.length);
        for (var i = 0; i < this.prerequestsofcodeBase.length; i++) {
            if (this.prerequestsCodeofcodeBase[i] == undefined) {
                this.prerequestsCodeofcodeBase[i] = "";
            }
            else {
                console.log("noting to do");
            }
        }
        for (var i = 0; i < this.codeForCodeBaseSteps.length; i++) {
            if (this.codeForCodeBaseSteps[i] == undefined) {
                this.codeForCodeBaseSteps[i] = "";
            }
            else {
                console.log("noting to do");
            }
        }
        if (this.askprerequest == false) {
            this.db.collection(this.seletedTopic).add({
                taskName: this.taskName,
                seletedTopic: this.seletedTopic,
                desc: this.desc,
                askprerequests: "No",
                steps: this.steps,
                openCodeBaseValues: this.openCodeBaseValues,
                stepsofcodeBase: this.stepsofcodeBase,
                codeForCodeBaseSteps: this.codeForCodeBaseSteps,
            }).then((doc) => {
                console.log(doc.id);
                this.db.collection(this.seletedTopic + "Array").doc(this.seletedsubTopic).update({
                    value: firebase_app__WEBPACK_IMPORTED_MODULE_3__["firestore"].FieldValue.arrayUnion(this.taskName + '@' + this.desc + '@' + doc.id + '@' + this.seletedsubTopic + '@'),
                    seleted: this.seletedTopic,
                    subTopic: this.seletedsubTopic
                }).then(() => {
                    this.taskName = "";
                    this.seletedTopic = "";
                    this.desc = "";
                    this.askprerequest = false;
                    this.prerequests = [1];
                    this.steps = [1];
                    this.prerequestsofcodeBase = [];
                    this.prerequestsCodeofcodeBase = [];
                    this.stepsofcodeBase = [];
                    this.codeForCodeBaseSteps = [];
                    alert("sucess");
                }).catch((err) => {
                    alert("some error is ther");
                    console.log(err);
                });
            }).catch((err) => {
                alert("some error is there");
                console.log(err);
            });
        }
        else {
            this.db.collection(this.seletedTopic).add({
                taskName: this.taskName,
                seletedTopic: this.seletedTopic,
                desc: this.desc,
                askprerequests: "yes",
                prerequests: this.prerequests,
                openCodeBaseValuesforPrerequest: this.openCodeBaseValuesforPrerequest,
                prerequestsofcodeBase: this.prerequestsofcodeBase,
                prerequestsCodeofcodeBase: this.prerequestsCodeofcodeBase,
                steps: this.steps,
                openCodeBaseValues: this.openCodeBaseValues,
                stepsofcodeBase: this.stepsofcodeBase,
                codeForCodeBaseSteps: this.codeForCodeBaseSteps,
            }).then((doc) => {
                console.log(doc.id);
                this.db.collection(this.seletedTopic + "Array").doc(this.seletedsubTopic).update({
                    value: firebase_app__WEBPACK_IMPORTED_MODULE_3__["firestore"].FieldValue.arrayUnion(this.taskName + '@' + this.desc + '@' + doc.id + '@' + this.seletedsubTopic + '@'),
                    seleted: this.seletedTopic,
                    subTopic: this.seletedsubTopic
                }).then(() => {
                    this.taskName = "";
                    this.seletedTopic = "";
                    this.desc = "";
                    this.askprerequest = false;
                    this.prerequests = [1];
                    this.steps = [1];
                    this.prerequestsofcodeBase = [];
                    this.prerequestsCodeofcodeBase = [];
                    this.stepsofcodeBase = [];
                    this.codeForCodeBaseSteps = [];
                    alert("sucess");
                }).catch((err) => {
                    alert("some error is ther");
                    console.log(err);
                });
            }).catch((err) => {
                alert("some error is there");
                console.log(err);
            });
        }
    }
};
SenditComponent.ctorParameters = () => [
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"] },
    { type: _give_it_service__WEBPACK_IMPORTED_MODULE_4__["GiveItService"] }
];
SenditComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-sendit',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./sendit.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/sendit/sendit.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./sendit.component.css */ "./src/app/sendit/sendit.component.css")).default]
    })
], SenditComponent);



/***/ }),

/***/ "./src/app/show-graph/show-graph.component.css":
/*!*****************************************************!*\
  !*** ./src/app/show-graph/show-graph.component.css ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#makeGrid{\n    display: grid;\n    grid-template-columns: auto auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hvdy1ncmFwaC9zaG93LWdyYXBoLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxhQUFhO0lBQ2IsZ0NBQWdDO0FBQ3BDIiwiZmlsZSI6InNyYy9hcHAvc2hvdy1ncmFwaC9zaG93LWdyYXBoLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjbWFrZUdyaWR7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGF1dG8gYXV0bztcbn0iXX0= */");

/***/ }),

/***/ "./src/app/show-graph/show-graph.component.ts":
/*!****************************************************!*\
  !*** ./src/app/show-graph/show-graph.component.ts ***!
  \****************************************************/
/*! exports provided: ShowGraphComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShowGraphComponent", function() { return ShowGraphComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var d3_shape__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! d3-shape */ "./node_modules/d3-shape/src/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");




let ShowGraphComponent = class ShowGraphComponent {
    constructor() {
        this.curve = d3_shape__WEBPACK_IMPORTED_MODULE_2__["curveStepAfter"];
        this.displaynodes = [];
        this.zoomToFit$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.nodes = [];
        this.links = [];
    }
    ngOnInit() {
    }
    addNode(value) {
        console.log("i am ok");
        this.displaynodes.push(value);
        this.binding = "";
        this.pushNode = {
            id: value,
            label: value
        };
        this.pushLink = {
            id: value + "s",
            source: 'first',
            target: value,
            label: 'custom label'
        };
        this.nodes.push(this.pushNode);
        this.nodes = [...this.nodes];
    }
    clicked(value) {
        console.log("iamclike" + value);
    }
    linkIt(item, value, linkLabeltodisplay) {
        console.log("iamclike" + value, item);
        if (linkLabeltodisplay.length > 1) {
            this.pushLink = {
                id: value + "s",
                source: item,
                target: value,
                label: linkLabeltodisplay
            };
        }
        else {
            this.pushLink = {
                id: value + "s",
                source: item,
                target: value,
                label: 'custom label'
            };
        }
        this.links.push(this.pushLink);
        this.links = [...this.links];
    }
};
ShowGraphComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-show-graph',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./show-graph.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/show-graph/show-graph.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./show-graph.component.css */ "./src/app/show-graph/show-graph.component.css")).default]
    })
], ShowGraphComponent);



/***/ }),

/***/ "./src/app/stepper/stepper.component.css":
/*!***********************************************!*\
  !*** ./src/app/stepper/stepper.component.css ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".mat-stepper-horizontal {\n    margin-top: 8px;\n  }\n  \n  .mat-form-field {\n    margin-top: 16px;\n  }\n  \n  #valuebtns{\n    display: grid;\n    grid-template-columns: 30% 30% 30%;\n    grid-gap: 3%;\n    grid-row-gap: 20px;\n    \n\n  }\n  \n  #valuebtn{\n\n    border-radius: 15px ;\n\n  }\n  \n  #valuebtn:hover{\n\n    background-color: black;\n    color: white;\n\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3RlcHBlci9zdGVwcGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxlQUFlO0VBQ2pCOztFQUVBO0lBQ0UsZ0JBQWdCO0VBQ2xCOztFQUNBO0lBQ0UsYUFBYTtJQUNiLGtDQUFrQztJQUNsQyxZQUFZO0lBQ1osa0JBQWtCOzs7RUFHcEI7O0VBQ0E7O0lBRUUsb0JBQW9COztFQUV0Qjs7RUFDQTs7SUFFRSx1QkFBdUI7SUFDdkIsWUFBWTs7RUFFZCIsImZpbGUiOiJzcmMvYXBwL3N0ZXBwZXIvc3RlcHBlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1hdC1zdGVwcGVyLWhvcml6b250YWwge1xuICAgIG1hcmdpbi10b3A6IDhweDtcbiAgfVxuICBcbiAgLm1hdC1mb3JtLWZpZWxkIHtcbiAgICBtYXJnaW4tdG9wOiAxNnB4O1xuICB9XG4gICN2YWx1ZWJ0bnN7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDMwJSAzMCUgMzAlO1xuICAgIGdyaWQtZ2FwOiAzJTtcbiAgICBncmlkLXJvdy1nYXA6IDIwcHg7XG4gICAgXG5cbiAgfVxuICAjdmFsdWVidG57XG5cbiAgICBib3JkZXItcmFkaXVzOiAxNXB4IDtcblxuICB9XG4gICN2YWx1ZWJ0bjpob3ZlcntcblxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuICAgIGNvbG9yOiB3aGl0ZTtcblxuICB9Il19 */");

/***/ }),

/***/ "./src/app/stepper/stepper.component.ts":
/*!**********************************************!*\
  !*** ./src/app/stepper/stepper.component.ts ***!
  \**********************************************/
/*! exports provided: StepperComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StepperComponent", function() { return StepperComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");



let StepperComponent = class StepperComponent {
    constructor(_formBuilder) {
        this._formBuilder = _formBuilder;
        this.isLinear = false;
        this.cameraScensor = [
            "SONY IMX178 (Ethernet Camera)",
            "RaspberryPi Camera",
            "Logitech USB  Camera",
        ];
        this.SensorTimeSeries = [
            "KIONX112 (High Sampling)",
            "Temp Sensor:DS18B20",
            "Sensor simulator"
        ];
        this.SensorRadar = [
            "  Radar",
            "PD300 : 80 ft ",
            "XeThru 30ft "
        ];
        this.ActionMsg = [
            " Alert to Mobile User",
            "Alert to Service Engineer",
            "Alert to Inventry Manager",
            "Alert to Site Manager",
        ];
        this.Action = [
            "Motor Cutoff",
            "Audio Alarm",
            "Operate Lock",
            "Boiler CutOff",
        ];
        this.SensorActuator = [
            "MagneticLock",
            "Relay"
        ];
        this.DevicesIntel = [
            "X86 Architecture",
            "UTX3115: Intel® Atom™",
            "ReliaGATE 20-25 ,Intel Atom",
            "HPE Industrial PC-i5 8GB "
        ];
        this.DevicesARM = [
            "Raspberry pi Zero:        ",
            "Raspberry pi 3 b+:       ",
            "Raspberry pi 4 :             ",
            "Jetson Tegra TK2:         ",
            "Jetson Nano:                  ",
            "FATBOX G3 - 3G : ",
        ];
        this.mainArray = [
            "SensorCamera",
            "SensorTimeSeries",
            "SensorRadarz",
            "ActionMsg",
            "Action",
            "SensorActuator",
            "DevicesIntel",
            "DevicesARM",
            "DataStorage",
            "Language",
        ];
        this.map = new Map([
            ["cameraScensor",
                ["SONY IMX178 (Ethernet Camera)",
                    "RaspberryPi Camera",
                    "Logitech USB  Camera",]
            ], ["SensorTimeSeries", [
                    "KIONX112 (High Sampling)",
                    "Temp Sensor:DS18B20",
                    "Sensor simulator"
                ]],
            ["SensorRadar",
                ["  Radar",
                    "PD300 : 80 ft ",
                    "XeThru 30ft "]
            ],
            ["ActionMsg",
                [" Alert to Mobile User",
                    "Alert to Service Engineer",
                    "Alert to Inventry Manager",
                    "Alert to Site Manager",]
            ],
            ["Action",
                ["Motor Cutoff",
                    "Audio Alarm",
                    "Operate Lock",
                    "Boiler CutOff",]
            ],
            ["SensorActuator",
                ["MagneticLock",
                    "Relay"]
            ],
            ["DevicesIntel",
                ["X86 Architecture",
                    "UTX3115: Intel® Atom™",
                    "ReliaGATE 20-25 ,Intel Atom",
                    "HPE Industrial PC-i5 8GB "
                ],
            ]
        ]);
        this.finalMap = new Map();
    }
    ngOnInit() {
        this.firstFormGroup = this._formBuilder.group({
            firstCtrl: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
        this.secondFormGroup = this._formBuilder.group({
            secondCtrl: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
    }
    addIt(key, value) {
        this.finalMap.set(key, value);
    }
    consoleIt() {
        console.log(this.finalMap);
    }
};
StepperComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }
];
StepperComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-stepper',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./stepper.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/stepper/stepper.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./stepper.component.css */ "./src/app/stepper/stepper.component.css")).default]
    })
], StepperComponent);



/***/ }),

/***/ "./src/app/story-borad/story-borad.component.css":
/*!*******************************************************!*\
  !*** ./src/app/story-borad/story-borad.component.css ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#displayData{\n    display: grid;\n    grid-gap: 20px;\n    grid-template-columns: auto auto auto auto;\n    text-align: center;\n}\n#data{\n    width: 100%;\n    border-radius: 15px;\n}\n#data:hover{\n    background-color: black;\n    color: white;\n}\n#areafull{\n    width: 100%;\n    height: 40vh;\n}\n#subbtn{\n    width: 90%;\n    text-align: center;\n    border-radius: 15px;\n    margin-top: 20px;\n    margin-left: 5%;\n    margin-right: 5%;\n    background-color: black;\n    color: white;\n    /* box-shadow: ; */\n    \n\n}\n#subbtn:hover{\n    background-color: white;\n    color: black;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3RvcnktYm9yYWQvc3RvcnktYm9yYWQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGFBQWE7SUFDYixjQUFjO0lBQ2QsMENBQTBDO0lBQzFDLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksV0FBVztJQUNYLG1CQUFtQjtBQUN2QjtBQUVBO0lBQ0ksdUJBQXVCO0lBQ3ZCLFlBQVk7QUFDaEI7QUFDQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0FBQ2hCO0FBQ0E7SUFDSSxVQUFVO0lBQ1Ysa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQixnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQix1QkFBdUI7SUFDdkIsWUFBWTtJQUNaLGtCQUFrQjs7O0FBR3RCO0FBQ0E7SUFDSSx1QkFBdUI7SUFDdkIsWUFBWTtBQUNoQiIsImZpbGUiOiJzcmMvYXBwL3N0b3J5LWJvcmFkL3N0b3J5LWJvcmFkLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjZGlzcGxheURhdGF7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLWdhcDogMjBweDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGF1dG8gYXV0byBhdXRvIGF1dG87XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuI2RhdGF7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcbn1cblxuI2RhdGE6aG92ZXJ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG4gICAgY29sb3I6IHdoaXRlO1xufVxuI2FyZWFmdWxse1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogNDB2aDtcbn1cbiNzdWJidG57XG4gICAgd2lkdGg6IDkwJTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgIG1hcmdpbi1sZWZ0OiA1JTtcbiAgICBtYXJnaW4tcmlnaHQ6IDUlO1xuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAvKiBib3gtc2hhZG93OiA7ICovXG4gICAgXG5cbn1cbiNzdWJidG46aG92ZXJ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgY29sb3I6IGJsYWNrO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/story-borad/story-borad.component.ts":
/*!******************************************************!*\
  !*** ./src/app/story-borad/story-borad.component.ts ***!
  \******************************************************/
/*! exports provided: StoryBoradComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StoryBoradComponent", function() { return StoryBoradComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var random_words__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! random-words */ "./node_modules/random-words/index.js");
/* harmony import */ var random_words__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(random_words__WEBPACK_IMPORTED_MODULE_2__);



let StoryBoradComponent = class StoryBoradComponent {
    constructor() { }
    ngOnInit() {
        console.log("i am condo");
        console.log(random_words__WEBPACK_IMPORTED_MODULE_2__(10));
        this.dispalyData = random_words__WEBPACK_IMPORTED_MODULE_2__(8);
    }
};
StoryBoradComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-story-borad',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./story-borad.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/story-borad/story-borad.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./story-borad.component.css */ "./src/app/story-borad/story-borad.component.css")).default]
    })
], StoryBoradComponent);



/***/ }),

/***/ "./src/app/sub-topic-create/sub-topic-create.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/sub-topic-create/sub-topic-create.component.css ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#inputtext{\n    width: 50%;\n    margin-top: 20px;\n\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3ViLXRvcGljLWNyZWF0ZS9zdWItdG9waWMtY3JlYXRlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxVQUFVO0lBQ1YsZ0JBQWdCOztBQUVwQiIsImZpbGUiOiJzcmMvYXBwL3N1Yi10b3BpYy1jcmVhdGUvc3ViLXRvcGljLWNyZWF0ZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2lucHV0dGV4dHtcbiAgICB3aWR0aDogNTAlO1xuICAgIG1hcmdpbi10b3A6IDIwcHg7XG5cbn0iXX0= */");

/***/ }),

/***/ "./src/app/sub-topic-create/sub-topic-create.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/sub-topic-create/sub-topic-create.component.ts ***!
  \****************************************************************/
/*! exports provided: SubTopicCreateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubTopicCreateComponent", function() { return SubTopicCreateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _give_it_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../give-it.service */ "./src/app/give-it.service.ts");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/es2015/index.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! firebase/app */ "./node_modules/firebase/app/dist/index.cjs.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_4__);





let SubTopicCreateComponent = class SubTopicCreateComponent {
    constructor(showIt, db) {
        this.showIt = showIt;
        this.db = db;
    }
    ngOnInit() {
        this.topics = this.showIt.getTopics();
        console.log(this.topics);
    }
    createIt() {
        console.log(this.selected + "Array"),
            console.log(this.subTopicValue),
            this.db.collection(this.selected + "Array").doc(this.subTopicValue).set({
                Value: []
            }).then((data) => {
                this.selected = "";
                this.subTopicValue = "";
                console.log(data);
            }).catch((e) => {
                console.log(e);
            });
        this.db.collection("subTopic").doc(this.selected).update({
            data: firebase_app__WEBPACK_IMPORTED_MODULE_4__["firestore"].FieldValue.arrayUnion(this.subTopicValue),
        }).then(() => {
            console.log("sucess1");
        }).catch((e) => {
            console.log(e);
        });
    }
};
SubTopicCreateComponent.ctorParameters = () => [
    { type: _give_it_service__WEBPACK_IMPORTED_MODULE_2__["GiveItService"] },
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__["AngularFirestore"] }
];
SubTopicCreateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-sub-topic-create',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./sub-topic-create.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/sub-topic-create/sub-topic-create.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./sub-topic-create.component.css */ "./src/app/sub-topic-create/sub-topic-create.component.css")).default]
    })
], SubTopicCreateComponent);



/***/ }),

/***/ "./src/app/write-story/write-story.component.css":
/*!*******************************************************!*\
  !*** ./src/app/write-story/write-story.component.css ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3dyaXRlLXN0b3J5L3dyaXRlLXN0b3J5LmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/write-story/write-story.component.ts":
/*!******************************************************!*\
  !*** ./src/app/write-story/write-story.component.ts ***!
  \******************************************************/
/*! exports provided: WriteStoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WriteStoryComponent", function() { return WriteStoryComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let WriteStoryComponent = class WriteStoryComponent {
    constructor() { }
    ngOnInit() {
    }
    markIt(value) {
        console.log("i am working ", value);
    }
};
WriteStoryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-write-story',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./write-story.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/write-story/write-story.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./write-story.component.css */ "./src/app/write-story/write-story.component.css")).default]
    })
], WriteStoryComponent);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
    production: false,
    firebase: {
        apiKey: "AIzaSyBt6i1W4QgyChii1it3DnNIjFYmVqauT4s",
        authDomain: "website-a04d0.firebaseapp.com",
        databaseURL: "https://website-a04d0.firebaseio.com",
        projectId: "website-a04d0",
        storageBucket: "website-a04d0.appspot.com",
        messagingSenderId: "500427658001",
        appId: "1:500427658001:web:e845938052713f3ba172b0"
    }
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

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");






if (_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_4__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/apple/Desktop/codebase-opitimise/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map