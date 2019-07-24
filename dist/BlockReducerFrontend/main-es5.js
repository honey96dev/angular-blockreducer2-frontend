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

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/auth/auth-layout/auth-layout.component.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/auth/auth-layout/auth-layout.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"app\" id=\"app\">\n  <div class=\"center-block w-xxxl w-auto-xs p-y-md\">\n    <div class=\"navbar\">\n      <div class=\"pull-center\">\n        <!--<div ui-include=\"'../views/blocks/navbar.brand.html'\"></div>-->\n      </div>\n    </div>\n    <!--<auth-root></auth-root>-->\n    <router-outlet></router-outlet>\n  </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/auth/signin/signin.component.html":
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/auth/signin/signin.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"p-a-md box-color r box-shadow-z1 text-color m-a\">\n  <div class=\"m-b text-md\">\n    {{strings.signInWithYourAccount}}\n  </div>\n  <form name=\"form\" [formGroup]=\"form\" (ngSubmit)=\"onSubmit()\">\n    <div *ngIf=\"arrow.show\" class=\"box-color pos-rlt\" [ngClass]=\"arrow.type\">\n      <span class=\"top b-primary\"></span>\n      <div class=\"box-body\">{{arrow.message}}</div>\n    </div>\n    <div class=\"md-form-group float-label\">\n      <input type=\"email\" class=\"md-input\" formControlName=\"email\"\n             [ngClass]=\"{'form-control parsley-error': submitted && f.email.errors }\">\n      <label>{{strings.email}}</label>\n      <div *ngIf=\"submitted && f.email.errors\" class=\"invalid-feedback\">\n        <div *ngIf=\"f.email.errors.required\">{{strings.thisFieldIsRequired}}</div>\n        <div *ngIf=\"f.email.errors.email\">{{strings.yourEmailIsInvalid}}</div>\n      </div>\n    </div>\n    <div class=\"md-form-group float-label\">\n      <input type=\"password\" class=\"md-input\" formControlName=\"password\"\n             [ngClass]=\"{'form-control parsley-error': submitted && f.password.errors }\">\n      <label>{{strings.password}}</label>\n      <div *ngIf=\"submitted && f.password.errors\" class=\"invalid-feedback\">\n        <div *ngIf=\"f.password.errors.required\">{{strings.thisFieldIsRequired}}</div>\n      </div>\n    </div>\n    <!--<div class=\"m-b-md\">-->\n    <!--<label class=\"md-check\">-->\n    <!--<input type=\"checkbox\"><i class=\"primary\"></i> {{strings.keepMeSignedIn}}-->\n    <!--</label>-->\n    <!--</div>-->\n    <button type=\"submit\" class=\"btn primary btn-block p-x-md\" [disabled]=\"loading\">{{strings.signIn}}</button>\n  </form>\n</div>\n\n<div class=\"p-v-lg text-center\">\n  <!--<div class=\"m-b\"><a ui-sref=\"access.forgot-password\" href=\"forgot-password.html\"-->\n  <!--class=\"text-primary _600\">{{strings.forgotPassword}}</a></div>-->\n  <div>{{strings.doNotHaveAnAccount}} <a routerLink=\"/auth/sign-up\" routerLinkActive=\"active\"\n                                         class=\"text-primary _600\">{{strings.signUp}}</a>\n  </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/auth/signup/signup.component.html":
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/auth/signup/signup.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"p-a-md box-color r box-shadow-z1 text-color m-a\">\n  <div class=\"m-b text-md\">\n    {{strings.signUpToYourAccount}}\n  </div>\n  <form name=\"form\" [formGroup]=\"form\" (ngSubmit)=\"onSubmit()\">\n    <div *ngIf=\"arrow.show\" class=\"box-color pos-rlt\" [ngClass]=\"arrow.type\">\n      <span class=\"top b-primary\"></span>\n      <div class=\"box-body\">{{arrow.message}}</div>\n    </div>\n    <div class=\"md-form-group float-label\">\n      <input type=\"text\" class=\"md-input\" formControlName=\"firstName\"\n             [ngClass]=\"{ 'form-control parsley-error': submitted && f.firstName.errors }\">\n      <label>{{strings.firstName}}</label>\n      <div *ngIf=\"submitted && f.firstName.errors\" class=\"invalid-feedback\">\n        <div *ngIf=\"f.firstName.errors.required\">{{strings.thisFieldIsRequired}}</div>\n      </div>\n    </div>\n    <div class=\"md-form-group float-label\">\n      <input type=\"text\" class=\"md-input\" formControlName=\"lastName\"\n             [ngClass]=\"{ 'form-control parsley-error': submitted && f.lastName.errors }\">\n      <label>{{strings.lastName}}</label>\n      <div *ngIf=\"submitted && f.lastName.errors\" class=\"invalid-feedback\">\n        <div *ngIf=\"f.lastName.errors.required\">{{strings.thisFieldIsRequired}}</div>\n      </div>\n    </div>\n    <div class=\"md-form-group float-label\">\n      <input type=\"email\" class=\"md-input\" formControlName=\"email\"\n             [ngClass]=\"{ 'form-control parsley-error': submitted && f.email.errors }\">\n      <label>{{strings.email}}</label>\n      <div *ngIf=\"submitted && f.email.errors\" class=\"invalid-feedback\">\n        <div *ngIf=\"f.email.errors.required\">{{strings.thisFieldIsRequired}}</div>\n      </div>\n    </div>\n    <div class=\"md-form-group float-label\">\n      <input type=\"text\" class=\"md-input\" formControlName=\"username\"\n             [ngClass]=\"{ 'form-control parsley-error': submitted && f.username.errors }\">\n      <label>{{strings.username}}</label>\n      <div *ngIf=\"submitted && f.username.errors\" class=\"invalid-feedback\">\n        <div *ngIf=\"f.username.errors.required\">{{strings.thisFieldIsRequired}}</div>\n      </div>\n    </div>\n    <div class=\"md-form-group float-label\">\n      <input type=\"password\" class=\"md-input\" formControlName=\"password\"\n             [ngClass]=\"{ 'form-control parsley-error': submitted && f.password.errors }\">\n      <label>{{strings.password}}</label>\n      <div *ngIf=\"submitted && f.password.errors\" class=\"invalid-feedback\">\n        <div *ngIf=\"f.password.errors.required\">{{strings.thisFieldIsRequired}}</div>\n      </div>\n    </div>\n    <div class=\"md-form-group float-label\">\n      <input type=\"text\" class=\"md-input\" formControlName=\"invitationCode\"\n             [ngClass]=\"{ 'form-control parsley-error': submitted && f.invitationCode.errors }\">\n      <label>{{strings.invitationCode}}</label>\n      <div *ngIf=\"submitted && f.invitationCode.errors\" class=\"invalid-feedback\">\n        <div *ngIf=\"f.invitationCode.errors.required\">{{strings.thisFieldIsRequired}}</div>\n      </div>\n    </div>\n    <div class=\"m-b-md\">\n      <label class=\"md-check\">\n        <!--<input type=\"checkbox\" class=\"has-value\" formControlName=\"acceptTerm\" ><i class=\"primary\"></i> Agree the <a href=\"\">terms and policy</a>-->\n        <input type=\"checkbox\" class=\"has-value\" formControlName=\"acceptTerm\" ><i class=\"primary\"></i> {{strings.agreeTheTermsAndPolicy}}\n      </label>\n      <div *ngIf=\"submitted && f.acceptTerm.errors\" class=\"invalid-feedback\">\n        <!--<div *ngIf=\"f.acceptTerm.errors.required\">{{strings.thisFieldIsRequired}}</div>-->\n        <div *ngIf=\"f.acceptTerm.errors.checkForce\">{{strings.pleaseAcceptThis}}</div>\n      </div>\n    </div>\n    <button type=\"submit\" class=\"btn primary btn-block p-x-md\" [disabled]=\"loading\">{{strings.signUp}}</button>\n  </form>\n</div>\n\n<div class=\"p-v-lg text-center\">\n  <div>{{strings.alreadyHaveAnAccount}} <a routerLink=\"/auth/sign-in\" routerLinkActive=\"active\"\n                                         class=\"text-primary _600\">{{strings.signIn}}</a>\n  </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/home/dashboard/dashboard.component.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/home/dashboard/dashboard.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"app-header white box-shadow\">\r\n  <div class=\"navbar navbar-toggleable-sm flex-row align-items-center\">\r\n    <div class=\"collapse navbar-collapse\" id=\"collapse\">\r\n      <ul class=\"nav navbar-nav mr-auto\">\r\n        <li class=\"nav-item dropdown\">\r\n          <a id=\"pageTitle\" class=\"nav-link\" data-toggle=\"dropdown\">\r\n            <span>{{pageTitle}}</span>\r\n          </a>\r\n        </li>\r\n      </ul>\r\n    </div>\r\n    <form name=\"form\" [formGroup]=\"form\" (ngSubmit)=\"onSubmit()\">\r\n      <ul class=\"nav navbar-nav ml-auto flex-row\">\r\n        <li class=\"nav-item\">\r\n          <!--<button type=\"submit\" class=\"btn btn-fw primary\" [disabled]=\"loading\">{{strings.refresh}}</button>-->\r\n        </li>\r\n      </ul>\r\n    </form>\r\n\r\n    <!-- / navbar right -->\r\n  </div>\r\n</div>\r\n<div ui-view=\"\" class=\"app-body\" id=\"view\">\r\n  <div class=\"padding\">\r\n\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/home/home-layout/home-layout.component.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/home/home-layout/home-layout.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"aside\" class=\"app-aside modal nav-dropdown\">\n  <!-- fluid app aside -->\n  <div class=\"left navside dark dk\" data-layout=\"column\">\n    <div class=\"navbar no-radius\">\n      <!-- brand -->\n      <a class=\"navbar-brand\">\n        <div ui-include=\"'assets/images/logo.svg'\"></div>\n        <img src=\"assets/images/logo.png\" alt=\".\" class=\"hide\">\n        <span class=\"hidden-folded inline\">Block Reducer</span>\n      </a>\n      <!-- / brand -->\n    </div>\n    <div class=\"hide-scroll\" data-flex>\n      <nav class=\"scroll nav-light\">\n\n        <ul class=\"nav\" ui-nav>\n          <li class=\"nav-header hidden-folded\">\n            <small class=\"text-muted\">Main</small>\n          </li>\n\n          <li>\n            <a routerLink=\"/app\">\n              <span class=\"nav-icon\">\n                <i class=\"material-icons\">&#xe3fc;\n                  <span ui-include=\"'assets/images/i_0.svg'\"></span>\n                </i>\n              </span>\n              <span class=\"nav-text\">Dashboard</span>\n            </a>\n          </li>\n\n          <li>\n            <a>\n              <span class=\"nav-caret\">\n                <i class=\"fa fa-caret-down\"></i>\n              </span>\n              <!--<span class=\"nav-label\">-->\n                <!--<b class=\"label rounded label-sm primary\">5</b>-->\n              <!--</span>-->\n              <span class=\"nav-icon\">\n                <i class=\"material-icons\">&#xe5c3;\n                  <span ui-include=\"'assets/images/i_1.svg'\"></span>\n                </i>\n              </span>\n              <span class=\"nav-text\">General</span>\n            </a>\n            <ul class=\"nav-sub\">\n              <li>\n                <a routerLink=\"/app/general/price-chart\">\n                  <span class=\"nav-text\">Price chart</span>\n                </a>\n              </li>\n              <li>\n                <a routerLink=\"/app/general/volume-chart\">\n                  <span class=\"nav-text\">Volume chart</span>\n                </a>\n              </li>\n              <li>\n                <a routerLink=\"/app/general/vwap-chart\">\n                  <span class=\"nav-text\">VWAP chart</span>\n                </a>\n              </li>\n              <li>\n                <a routerLink=\"/app/general/trades-chart\">\n                  <span class=\"nav-text\">Current trade chart</span>\n                </a>\n              </li>\n            </ul>\n          </li>\n\n          <li>\n            <a>\n              <span class=\"nav-caret\">\n                <i class=\"fa fa-caret-down\"></i>\n              </span>\n              <span class=\"nav-icon\">\n                <i class=\"material-icons\">&#xe8f0;\n                  <span ui-include=\"'assets/images/i_2.svg'\"></span>\n                </i>\n              </span>\n              <span class=\"nav-text\">Layouts</span>\n            </a>\n            <ul class=\"nav-sub\">\n              <li>\n                <a href=\"headers.html\">\n                  <span class=\"nav-text\">Header</span>\n                </a>\n              </li>\n              <li>\n                <a href=\"asides.html\">\n                  <span class=\"nav-text\">Aside</span>\n                </a>\n              </li>\n              <li>\n                <a href=\"footers.html\">\n                  <span class=\"nav-text\">Footer</span>\n                </a>\n              </li>\n            </ul>\n          </li>\n\n          <li>\n            <a routerLink=\"/app\">\n              <span class=\"nav-icon\">\n                <i class=\"material-icons\">&#xe8d2;\n                  <span ui-include=\"'assets/images/i_3.svg'\"></span>\n                </i>\n              </span>\n              <span class=\"nav-text\">Widgets</span>\n            </a>\n          </li>\n\n          <li class=\"nav-header hidden-folded\">\n            <small class=\"text-muted\">Components</small>\n          </li>\n\n          <li>\n            <a>\n              <span class=\"nav-caret\">\n                <i class=\"fa fa-caret-down\"></i>\n              </span>\n              <span class=\"nav-label\">\n                <b class=\"label label-sm accent\">8</b>\n              </span>\n              <span class=\"nav-icon\">\n                <i class=\"material-icons\">&#xe429;\n                  <span ui-include=\"'assets/images/i_4.svg'\"></span>\n                </i>\n              </span>\n              <span class=\"nav-text\">UI kit</span>\n            </a>\n            <ul class=\"nav-sub nav-mega nav-mega-3\">\n              <li>\n                <a href=\"arrow.html\">\n                  <span class=\"nav-text\">Arrow</span>\n                </a>\n              </li>\n              <li>\n                <a href=\"box.html\">\n                  <span class=\"nav-text\">Box</span>\n                </a>\n              </li>\n              <li>\n                <a href=\"button.html\">\n                  <span class=\"nav-text\">Button</span>\n                </a>\n              </li>\n              <li>\n                <a href=\"color.html\">\n                  <span class=\"nav-text\">Color</span>\n                </a>\n              </li>\n              <li>\n                <a href=\"dropdown.html\">\n                  <span class=\"nav-text\">Dropdown</span>\n                </a>\n              </li>\n              <li>\n                <a href=\"grid.html\">\n                  <span class=\"nav-text\">Grid</span>\n                </a>\n              </li>\n              <li>\n                <a href=\"icon.html\">\n                  <span class=\"nav-text\">Icon</span>\n                </a>\n              </li>\n              <li>\n                <a href=\"label.html\">\n                  <span class=\"nav-text\">Label</span>\n                </a>\n              </li>\n              <li>\n                <a href=\"list.html\">\n                  <span class=\"nav-text\">List Group</span>\n                </a>\n              </li>\n              <li>\n                <a href=\"modal.html\">\n                  <span class=\"nav-text\">Modal</span>\n                </a>\n              </li>\n              <li>\n                <a href=\"nav.html\">\n                  <span class=\"nav-text\">Nav</span>\n                </a>\n              </li>\n              <li>\n                <a href=\"progress.html\">\n                  <span class=\"nav-text\">Progress</span>\n                </a>\n              </li>\n              <li>\n                <a href=\"social.html\">\n                  <span class=\"nav-text\">Social</span>\n                </a>\n              </li>\n              <li>\n                <a href=\"sortable.html\">\n                  <span class=\"nav-text\">Sortable</span>\n                </a>\n              </li>\n              <li>\n                <a href=\"streamline.html\">\n                  <span class=\"nav-text\">Streamline</span>\n                </a>\n              </li>\n              <li>\n                <a href=\"timeline.html\">\n                  <span class=\"nav-text\">Timeline</span>\n                </a>\n              </li>\n              <li>\n                <a href=\"map.vector.html\">\n                  <span class=\"nav-text\">Vector Map</span>\n                </a>\n              </li>\n            </ul>\n          </li>\n\n          <li>\n            <a>\n              <span class=\"nav-caret\">\n                <i class=\"fa fa-caret-down\"></i>\n              </span>\n              <span class=\"nav-label\"><b class=\"label no-bg\">9</b></span>\n              <span class=\"nav-icon\">\n                <i class=\"material-icons\">&#xe3e8;\n                  <span ui-include=\"'assets/images/i_5.svg'\"></span>\n                </i>\n              </span>\n              <span class=\"nav-text\">Pages</span>\n            </a>\n            <ul class=\"nav-sub nav-mega\">\n              <li>\n                <a href=\"profile.html\">\n                  <span class=\"nav-text\">Profile</span>\n                </a>\n              </li>\n              <li>\n                <a href=\"setting.html\">\n                  <span class=\"nav-text\">Setting</span>\n                </a>\n              </li>\n              <li>\n                <a href=\"search.html\">\n                  <span class=\"nav-text\">Search</span>\n                </a>\n              </li>\n              <li>\n                <a href=\"faq.html\">\n                  <span class=\"nav-text\">FAQ</span>\n                </a>\n              </li>\n              <li>\n                <a href=\"gallery.html\">\n                  <span class=\"nav-text\">Gallery</span>\n                </a>\n              </li>\n              <li>\n                <a href=\"invoice.html\">\n                  <span class=\"nav-text\">Invoice</span>\n                </a>\n              </li>\n              <li>\n                <a href=\"price.html\">\n                  <span class=\"nav-text\">Price</span>\n                </a>\n              </li>\n              <li>\n                <a href=\"blank.html\">\n                  <span class=\"nav-text\">Blank</span>\n                </a>\n              </li>\n              <li>\n                <a href=\"signin.html\">\n                  <span class=\"nav-text\">Sign In</span>\n                </a>\n              </li>\n              <li>\n                <a href=\"signup.html\">\n                  <span class=\"nav-text\">Sign Up</span>\n                </a>\n              </li>\n              <li>\n                <a href=\"forgot-password.html\">\n                  <span class=\"nav-text\">Forgot Password</span>\n                </a>\n              </li>\n              <li>\n                <a href=\"lockme.html\">\n                  <span class=\"nav-text\">Lockme Screen</span>\n                </a>\n              </li>\n              <li>\n                <a href=\"404.html\">\n                  <span class=\"nav-text\">Error 404</span>\n                </a>\n              </li>\n              <li>\n                <a href=\"505.html\">\n                  <span class=\"nav-text\">Error 505</span>\n                </a>\n              </li>\n            </ul>\n          </li>\n\n          <li>\n            <a>\n              <span class=\"nav-caret\">\n                <i class=\"fa fa-caret-down\"></i>\n              </span>\n              <span class=\"nav-icon\">\n                <i class=\"material-icons\">&#xe39e;\n                  <span ui-include=\"'assets/images/i_6.svg'\"></span>\n                </i>\n              </span>\n              <span class=\"nav-text\">Form</span>\n            </a>\n            <ul class=\"nav-sub\">\n              <li>\n                <a href=\"form.layout.html\">\n                  <span class=\"nav-text\">Form Layout</span>\n                </a>\n              </li>\n              <li>\n                <a href=\"form.element.html\">\n                  <span class=\"nav-text\">Form Element</span>\n                </a>\n              </li>\n              <li>\n                <a href=\"form.validation.html\">\n                  <span class=\"nav-text\">Form Validation</span>\n                </a>\n              </li>\n              <li>\n                <a href=\"form.select.html\">\n                  <span class=\"nav-text\">Select</span>\n                </a>\n              </li>\n              <li>\n                <a href=\"form.editor.html\">\n                  <span class=\"nav-text\">Editor</span>\n                </a>\n              </li>\n              <li>\n                <a href=\"form.picker.html\">\n                  <span class=\"nav-text\">Picker</span>\n                </a>\n              </li>\n              <li>\n                <a href=\"form.wizard.html\">\n                  <span class=\"nav-text\">Wizard</span>\n                </a>\n              </li>\n              <li>\n                <a href=\"form.dropzone.html\" class=\"no-ajax\">\n                  <span class=\"nav-text\">File Upload</span>\n                </a>\n              </li>\n            </ul>\n          </li>\n\n          <li>\n            <a>\n              <span class=\"nav-caret\">\n                <i class=\"fa fa-caret-down\"></i>\n              </span>\n              <span class=\"nav-icon\">\n                <i class=\"material-icons\">&#xe896;\n                  <span ui-include=\"'assets/images/i_7.svg'\"></span>\n                </i>\n              </span>\n              <span class=\"nav-text\">Tables</span>\n            </a>\n            <ul class=\"nav-sub\">\n              <li>\n                <a href=\"static.html\">\n                  <span class=\"nav-text\">Static table</span>\n                </a>\n              </li>\n              <li>\n                <a href=\"datatable.html\">\n                  <span class=\"nav-text\">Datatable</span>\n                </a>\n              </li>\n              <li>\n                <a href=\"footable.html\">\n                  <span class=\"nav-text\">Footable</span>\n                </a>\n              </li>\n            </ul>\n          </li>\n          <li>\n            <a>\n              <span class=\"nav-caret\">\n                <i class=\"fa fa-caret-down\"></i>\n              </span>\n              <span class=\"nav-label hidden-folded\">\n                <b class=\"label label-sm info\">N</b>\n              </span>\n              <span class=\"nav-icon\">\n                <i class=\"material-icons\">&#xe1b8;\n                  <span ui-include=\"'assets/images/i_8.svg'\"></span>\n                </i>\n              </span>\n              <span class=\"nav-text\">Charts</span>\n            </a>\n            <ul class=\"nav-sub\">\n              <li>\n                <a href=\"chart.html\">\n                  <span class=\"nav-text\">Chart</span>\n                </a>\n              </li>\n              <li>\n                <a>\n                  <span class=\"nav-caret\">\n                    <i class=\"fa fa-caret-down\"></i>\n                  </span>\n                  <span class=\"nav-text\">Echarts</span>\n                </a>\n                <ul class=\"nav-sub\">\n                  <li>\n                    <a href=\"echarts-line.html\">\n                      <span class=\"nav-text\">line</span>\n                    </a>\n                  </li>\n                  <li>\n                    <a href=\"echarts-bar.html\">\n                      <span class=\"nav-text\">Bar</span>\n                    </a>\n                  </li>\n                  <li>\n                    <a href=\"echarts-pie.html\">\n                      <span class=\"nav-text\">Pie</span>\n                    </a>\n                  </li>\n                  <li>\n                    <a href=\"echarts-scatter.html\">\n                      <span class=\"nav-text\">Scatter</span>\n                    </a>\n                  </li>\n                  <li>\n                    <a href=\"echarts-radar-chord.html\">\n                      <span class=\"nav-text\">Radar &amp; Chord</span>\n                    </a>\n                  </li>\n                  <li>\n                    <a href=\"echarts-gauge-funnel.html\">\n                      <span class=\"nav-text\">Gauges &amp; Funnel</span>\n                    </a>\n                  </li>\n                  <li>\n                    <a href=\"echarts-map.html\">\n                      <span class=\"nav-text\">Map</span>\n                    </a>\n                  </li>\n                </ul>\n              </li>\n            </ul>\n          </li>\n\n          <li class=\"nav-header hidden-folded\">\n            <small class=\"text-muted\">Help</small>\n          </li>\n\n          <li class=\"hidden-folded\">\n            <a href=\"docs.html\">\n              <span class=\"nav-text\">Documents</span>\n            </a>\n          </li>\n\n        </ul>\n      </nav>\n    </div>\n    <div class=\"b-t\">\n      <div class=\"nav-fold\">\n        <a>\n          <span class=\"pull-left\">\n            <img src=\"assets/images/avatar.jpg\" alt=\"...\" class=\"w-40 img-circle\">\n          </span>\n          <span class=\"clear hidden-folded p-x\">\n            <span class=\"block _500\">{{user.firstName}} {{user.lastName}}</span>\n            <small class=\"block text-muted\"><i class=\"fa fa-circle text-success m-r-sm\"></i>online</small>\n          </span>\n        </a>\n      </div>\n    </div>\n  </div>\n</div>\n<!-- / -->\n\n<!-- content -->\n<div id=\"content\" class=\"app-content box-shadow-z0\" role=\"main\">\n  <router-outlet></router-outlet>\n  <div class=\"app-footer\">\n    <div class=\"p-2 text-xs\">\n      <div class=\"pull-right text-muted py-1\">\n        &copy; Copyright <strong>blockreducer.com</strong> <span\n        class=\"hidden-xs-down\">- Built with Crytocurrency</span>\n        <!--<a ui-scroll-to=\"content\"><i class=\"fa fa-long-arrow-up p-x-sm\"></i></a>-->\n      </div>\n    </div>\n  </div>\n</div>\n\n<!--<div id=\"content\" class=\"app-content box-shadow-z0\" role=\"main\">-->\n  <!--<div class=\"app-header white box-shadow\">-->\n    <!--<div class=\"navbar navbar-toggleable-sm flex-row align-items-center\">-->\n      <!--<div class=\"collapse navbar-collapse\" id=\"collapse\">-->\n        <!--<ul class=\"nav navbar-nav mr-auto\">-->\n          <!--<li class=\"nav-item dropdown\">-->\n            <!--<a id=\"pageTitle\" class=\"nav-link\" data-toggle=\"dropdown\">-->\n              <!--<span>{{pageTitle}}</span>-->\n            <!--</a>-->\n          <!--</li>-->\n        <!--</ul>-->\n      <!--</div>-->\n      <!--<form name=\"form\" [formGroup]=\"form\" (ngSubmit)=\"onSubmit()\">-->\n        <!--<ul class=\"nav navbar-nav ml-auto flex-row\">-->\n          <!--<li class=\"nav-item\">-->\n            <!--<div class=\"form-group\">-->\n              <!--<input type='text' class=\"form-control\" ui-jp=\"datetimepicker\" ui-options=\"{-->\n              <!--icons: {-->\n                <!--time: 'fa fa-clock-o',-->\n                <!--date: 'fa fa-calendar',-->\n                <!--up: 'fa fa-chevron-up',-->\n                <!--down: 'fa fa-chevron-down',-->\n                <!--previous: 'fa fa-chevron-left',-->\n                <!--next: 'fa fa-chevron-right',-->\n                <!--today: 'fa fa-screenshot',-->\n                <!--clear: 'fa fa-trash',-->\n                <!--close: 'fa fa-remove'-->\n              <!--}-->\n            <!--}\">-->\n            <!--</div>-->\n          <!--</li>-->\n          <!--<li class=\"nav-item\">-->\n            <!--<button type=\"submit\" class=\"btn btn-fw primary\" [disabled]=\"loading\">{{strings.refresh}}</button>-->\n          <!--</li>-->\n        <!--</ul>-->\n      <!--</form>-->\n\n      <!--&lt;!&ndash; / navbar right &ndash;&gt;-->\n    <!--</div>-->\n  <!--</div>-->\n  <!--<div class=\"app-footer\">-->\n    <!--<div class=\"p-2 text-xs\">-->\n      <!--<div class=\"pull-right text-muted py-1\">-->\n        <!--&copy; Copyright <strong>blockreducer.com</strong> <span-->\n        <!--class=\"hidden-xs-down\">- Built with Crytocurrency</span>-->\n        <!--&lt;!&ndash;<a ui-scroll-to=\"content\"><i class=\"fa fa-long-arrow-up p-x-sm\"></i></a>&ndash;&gt;-->\n      <!--</div>-->\n    <!--</div>-->\n  <!--</div>-->\n  <!--<div ui-view=\"\" class=\"app-body\" id=\"view\">-->\n    <!--<div class=\"padding\">-->\n\n    <!--</div>-->\n  <!--</div>-->\n  <!--<router-outlet></router-outlet>-->\n<!--</div>-->\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/home/price-chart/price-chart.component.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/home/price-chart/price-chart.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"app-header white box-shadow\">\n  <div class=\"navbar navbar-toggleable-sm flex-row align-items-center\">\n    <a data-toggle=\"modal\" data-target=\"#aside\" class=\"hidden-lg-up mr-3\">\n      <i class=\"material-icons\"></i>\n    </a>\n    <div class=\"collapse navbar-collapse\" id=\"collapse\">\n      <ul class=\"nav navbar-nav mr-auto\">\n        <li class=\"nav-item dropdown\">\n          <a id=\"pageTitle\" class=\"nav-link\" data-toggle=\"dropdown\">\n            <span>{{pageTitle}}</span>\n          </a>\n        </li>\n      </ul>\n    </div>\n    <form name=\"form\" [formGroup]=\"form\" (ngSubmit)=\"onSubmit()\">\n      <ul class=\"nav navbar-nav ml-auto flex-row\">\n        <li class=\"nav-item\">\n          <div class=\"form-group\">\n            <input type='text' class=\"form-control\" ui-jp=\"datetimepicker\" ui-options=\"{\n              icons: {\n                time: 'fa fa-clock-o',\n                date: 'fa fa-calendar',\n                up: 'fa fa-chevron-up',\n                down: 'fa fa-chevron-down',\n                previous: 'fa fa-chevron-left',\n                next: 'fa fa-chevron-right',\n                today: 'fa fa-screenshot',\n                clear: 'fa fa-trash',\n                close: 'fa fa-remove'\n              }\n            }\">\n          </div>\n        </li>\n        <li class=\"nav-item\">\n          <button type=\"submit\" class=\"btn btn-fw primary\" [disabled]=\"loading\">{{strings.refresh}}</button>\n        </li>\n      </ul>\n    </form>\n\n    <!-- / navbar right -->\n  </div>\n</div>\n<div ui-view=\"\" class=\"app-body\" id=\"view\">\n  <div class=\"padding\">\n\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/_helpers/auth.guard.ts":
/*!****************************************!*\
  !*** ./src/app/_helpers/auth.guard.ts ***!
  \****************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/_services */ "./src/app/_services/index.ts");




var AuthGuard = /** @class */ (function () {
    function AuthGuard(router, authenticationService) {
        this.router = router;
        this.authenticationService = authenticationService;
    }
    AuthGuard.prototype.canActivate = function (route, state) {
        var currentUser = this.authenticationService.currentUserValue;
        if (currentUser) {
            // logged in so return true
            return true;
        }
        // not logged in so redirect to login page with the return url
        this.router.navigate(['/auth/sign-in'], { queryParams: { returnUrl: state.url } });
        return false;
    };
    AuthGuard.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _app_services__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"] }
    ]; };
    AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' })
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/_helpers/check-force.validator.ts":
/*!***************************************************!*\
  !*** ./src/app/_helpers/check-force.validator.ts ***!
  \***************************************************/
/*! exports provided: CheckForceValidator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckForceValidator", function() { return CheckForceValidator; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");



var CheckForceValidator = /** @class */ (function () {
    function CheckForceValidator() {
    }
    CheckForceValidator_1 = CheckForceValidator;
    // This method is the one required by the Validator interface
    CheckForceValidator.prototype.validate = function (control) {
        // Here we call our static validator function
        return CheckForceValidator_1.validateCheck(control);
    };
    CheckForceValidator.validateCheck = function (control) {
        if (control.value !== true) {
            return { checkForce: 'This field is required' };
        }
        return null;
    };
    var CheckForceValidator_1;
    CheckForceValidator = CheckForceValidator_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            selector: '[checkForce]',
            // We add our directive to the list of existing validators
            providers: [
                { provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALIDATORS"], useExisting: CheckForceValidator_1, multi: true }
            ]
        })
    ], CheckForceValidator);
    return CheckForceValidator;
}());



/***/ }),

/***/ "./src/app/_helpers/error.interceptor.ts":
/*!***********************************************!*\
  !*** ./src/app/_helpers/error.interceptor.ts ***!
  \***********************************************/
/*! exports provided: ErrorInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorInterceptor", function() { return ErrorInterceptor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _app_services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app/_services */ "./src/app/_services/index.ts");





var ErrorInterceptor = /** @class */ (function () {
    function ErrorInterceptor(authenticationService) {
        this.authenticationService = authenticationService;
    }
    ErrorInterceptor.prototype.intercept = function (request, next) {
        var _this = this;
        return next.handle(request).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (err) {
            if (err.status === 401) {
                // auto logout if 401 response returned from api
                _this.authenticationService.signOut();
                location.reload(true);
            }
            var error = err.error.message || err.statusText;
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(error);
        }));
    };
    ErrorInterceptor.ctorParameters = function () { return [
        { type: _app_services__WEBPACK_IMPORTED_MODULE_4__["AuthenticationService"] }
    ]; };
    ErrorInterceptor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], ErrorInterceptor);
    return ErrorInterceptor;
}());



/***/ }),

/***/ "./src/app/_helpers/index.ts":
/*!***********************************!*\
  !*** ./src/app/_helpers/index.ts ***!
  \***********************************/
/*! exports provided: AuthGuard, ErrorInterceptor, JwtInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _auth_guard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./auth.guard */ "./src/app/_helpers/auth.guard.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return _auth_guard__WEBPACK_IMPORTED_MODULE_0__["AuthGuard"]; });

/* harmony import */ var _error_interceptor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./error.interceptor */ "./src/app/_helpers/error.interceptor.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ErrorInterceptor", function() { return _error_interceptor__WEBPACK_IMPORTED_MODULE_1__["ErrorInterceptor"]; });

/* harmony import */ var _jwt_interceptor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./jwt.interceptor */ "./src/app/_helpers/jwt.interceptor.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "JwtInterceptor", function() { return _jwt_interceptor__WEBPACK_IMPORTED_MODULE_2__["JwtInterceptor"]; });






/***/ }),

/***/ "./src/app/_helpers/jwt.interceptor.ts":
/*!*********************************************!*\
  !*** ./src/app/_helpers/jwt.interceptor.ts ***!
  \*********************************************/
/*! exports provided: JwtInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JwtInterceptor", function() { return JwtInterceptor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/_services */ "./src/app/_services/index.ts");



var JwtInterceptor = /** @class */ (function () {
    function JwtInterceptor(authenticationService) {
        this.authenticationService = authenticationService;
    }
    JwtInterceptor.prototype.intercept = function (request, next) {
        // add authorization header with jwt token if available
        var currentUser = this.authenticationService.currentUserValue;
        if (currentUser && currentUser.token) {
            request = request.clone({
                setHeaders: {
                    Authorization: "Bearer " + currentUser.token
                }
            });
        }
        return next.handle(request);
    };
    JwtInterceptor.ctorParameters = function () { return [
        { type: _app_services__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"] }
    ]; };
    JwtInterceptor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], JwtInterceptor);
    return JwtInterceptor;
}());



/***/ }),

/***/ "./src/app/_services/authentication.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/_services/authentication.service.ts ***!
  \*****************************************************/
/*! exports provided: AuthenticationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticationService", function() { return AuthenticationService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _core_apis__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @core/apis */ "./src/core/apis.ts");







var AuthenticationService = /** @class */ (function () {
    function AuthenticationService(http) {
        this.http = http;
        this.currentUserSubject = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](JSON.parse(localStorage.getItem('currentUser')));
        this.currentUser = this.currentUserSubject.asObservable();
    }
    Object.defineProperty(AuthenticationService.prototype, "currentUserValue", {
        get: function () {
            return this.currentUserSubject.value;
        },
        enumerable: true,
        configurable: true
    });
    AuthenticationService.prototype.signIn = function (email, password) {
        var _this = this;
        return this.http.post("" + _environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiUrl + _core_apis__WEBPACK_IMPORTED_MODULE_6__["apis"].auth.signIn, { email: email, password: password })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (res) {
            if (res.result == 'success') {
                console.log(res.data);
                localStorage.setItem('currentUser', JSON.stringify(res.data));
                _this.currentUserSubject.next(res.data);
            }
            return res;
        }));
    };
    AuthenticationService.prototype.signUp = function (payload) {
        return this.http.post("" + _environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiUrl + _core_apis__WEBPACK_IMPORTED_MODULE_6__["apis"].auth.signUp, payload)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (res) {
            return res;
        }));
    };
    AuthenticationService.prototype.signOut = function () {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
        this.currentUserSubject.next(null);
    };
    AuthenticationService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    AuthenticationService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' })
    ], AuthenticationService);
    return AuthenticationService;
}());



/***/ }),

/***/ "./src/app/_services/index.ts":
/*!************************************!*\
  !*** ./src/app/_services/index.ts ***!
  \************************************/
/*! exports provided: AuthenticationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _authentication_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./authentication.service */ "./src/app/_services/authentication.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AuthenticationService", function() { return _authentication_service__WEBPACK_IMPORTED_MODULE_0__["AuthenticationService"]; });




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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_helpers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/_helpers */ "./src/app/_helpers/index.ts");
/* harmony import */ var _auth_auth_layout_auth_layout_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./auth/auth-layout/auth-layout.component */ "./src/app/auth/auth-layout/auth-layout.component.ts");
/* harmony import */ var _auth_signin_signin_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./auth/signin/signin.component */ "./src/app/auth/signin/signin.component.ts");
/* harmony import */ var _auth_signup_signup_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./auth/signup/signup.component */ "./src/app/auth/signup/signup.component.ts");
/* harmony import */ var _home_home_layout_home_layout_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./home/home-layout/home-layout.component */ "./src/app/home/home-layout/home-layout.component.ts");
/* harmony import */ var _home_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./home/dashboard/dashboard.component */ "./src/app/home/dashboard/dashboard.component.ts");
/* harmony import */ var _home_price_chart_price_chart_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./home/price-chart/price-chart.component */ "./src/app/home/price-chart/price-chart.component.ts");










var routes = [
    {
        path: 'auth',
        component: _auth_auth_layout_auth_layout_component__WEBPACK_IMPORTED_MODULE_4__["AuthLayoutComponent"],
        children: [
            { path: '', component: _auth_signin_signin_component__WEBPACK_IMPORTED_MODULE_5__["SigninComponent"], pathMatch: 'full' },
            { path: 'sign-in', component: _auth_signin_signin_component__WEBPACK_IMPORTED_MODULE_5__["SigninComponent"], pathMatch: 'full' },
            { path: 'sign-up', component: _auth_signup_signup_component__WEBPACK_IMPORTED_MODULE_6__["SignupComponent"], pathMatch: 'full' },
        ],
    },
    {
        path: 'app',
        component: _home_home_layout_home_layout_component__WEBPACK_IMPORTED_MODULE_7__["HomeLayoutComponent"],
        canActivate: [_app_helpers__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]],
        children: [
            { path: '', component: _home_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_8__["DashboardComponent"], pathMatch: 'full' },
            { path: 'dashboard', component: _home_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_8__["DashboardComponent"], pathMatch: 'full' },
            { path: 'general/price-chart', component: _home_price_chart_price_chart_component__WEBPACK_IMPORTED_MODULE_9__["PriceChartComponent"], pathMatch: 'full' },
        ],
    },
    { path: '**', redirectTo: 'app' }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes),
            ],
            exports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"],
            ],
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent.prototype.ngOnInit = function () {
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./_helpers */ "./src/app/_helpers/index.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _auth_auth_layout_auth_layout_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./auth/auth-layout/auth-layout.component */ "./src/app/auth/auth-layout/auth-layout.component.ts");
/* harmony import */ var _auth_signin_signin_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./auth/signin/signin.component */ "./src/app/auth/signin/signin.component.ts");
/* harmony import */ var _auth_signup_signup_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./auth/signup/signup.component */ "./src/app/auth/signup/signup.component.ts");
/* harmony import */ var _home_home_layout_home_layout_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./home/home-layout/home-layout.component */ "./src/app/home/home-layout/home-layout.component.ts");
/* harmony import */ var _home_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./home/dashboard/dashboard.component */ "./src/app/home/dashboard/dashboard.component.ts");
/* harmony import */ var _home_price_chart_price_chart_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./home/price-chart/price-chart.component */ "./src/app/home/price-chart/price-chart.component.ts");














var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
                _auth_auth_layout_auth_layout_component__WEBPACK_IMPORTED_MODULE_8__["AuthLayoutComponent"],
                _auth_signin_signin_component__WEBPACK_IMPORTED_MODULE_9__["SigninComponent"],
                _auth_signup_signup_component__WEBPACK_IMPORTED_MODULE_10__["SignupComponent"],
                _home_home_layout_home_layout_component__WEBPACK_IMPORTED_MODULE_11__["HomeLayoutComponent"],
                _home_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_12__["DashboardComponent"],
                _home_price_chart_price_chart_component__WEBPACK_IMPORTED_MODULE_13__["PriceChartComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
            ],
            providers: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["Title"],
                { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HTTP_INTERCEPTORS"], useClass: _helpers__WEBPACK_IMPORTED_MODULE_6__["JwtInterceptor"], multi: true },
                { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HTTP_INTERCEPTORS"], useClass: _helpers__WEBPACK_IMPORTED_MODULE_6__["ErrorInterceptor"], multi: true },
            ],
            bootstrap: [
                _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
            ],
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/auth/auth-layout/auth-layout.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/auth/auth-layout/auth-layout.component.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2F1dGgvYXV0aC1sYXlvdXQvYXV0aC1sYXlvdXQuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/auth/auth-layout/auth-layout.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/auth/auth-layout/auth-layout.component.ts ***!
  \***********************************************************/
/*! exports provided: AuthLayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthLayoutComponent", function() { return AuthLayoutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AuthLayoutComponent = /** @class */ (function () {
    function AuthLayoutComponent() {
    }
    AuthLayoutComponent.prototype.ngOnInit = function () {
    };
    AuthLayoutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'auth-layout',
            template: __webpack_require__(/*! raw-loader!./auth-layout.component.html */ "./node_modules/raw-loader/index.js!./src/app/auth/auth-layout/auth-layout.component.html"),
            styles: [__webpack_require__(/*! ./auth-layout.component.scss */ "./src/app/auth/auth-layout/auth-layout.component.scss")]
        })
    ], AuthLayoutComponent);
    return AuthLayoutComponent;
}());



/***/ }),

/***/ "./src/app/auth/signin/signin.component.scss":
/*!***************************************************!*\
  !*** ./src/app/auth/signin/signin.component.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2F1dGgvc2lnbmluL3NpZ25pbi5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/auth/signin/signin.component.ts":
/*!*************************************************!*\
  !*** ./src/app/auth/signin/signin.component.ts ***!
  \*************************************************/
/*! exports provided: SigninComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SigninComponent", function() { return SigninComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_services__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @app/_services */ "./src/app/_services/index.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _core_strings__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @core/strings */ "./src/core/strings.ts");








var SigninComponent = /** @class */ (function () {
    function SigninComponent(titleService, formBuilder, route, router, authenticationService) {
        this.titleService = titleService;
        this.formBuilder = formBuilder;
        this.route = route;
        this.router = router;
        this.authenticationService = authenticationService;
        this.strings = _core_strings__WEBPACK_IMPORTED_MODULE_7__["default"];
        this.loading = false;
        this.submitted = false;
        this.error = '';
        this.arrow = {
            show: false,
            type: '',
            message: '',
        };
        if (this.authenticationService.currentUserValue) {
            this.router.navigate(['/']);
        }
        titleService.setTitle(_core_strings__WEBPACK_IMPORTED_MODULE_7__["default"].signIn + "-" + _core_strings__WEBPACK_IMPORTED_MODULE_7__["default"].siteName);
    }
    SigninComponent.prototype.ngOnInit = function () {
        this.form = this.formBuilder.group({
            email: [_core_strings__WEBPACK_IMPORTED_MODULE_7__["default"].email, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].email]],
            password: [_core_strings__WEBPACK_IMPORTED_MODULE_7__["default"].password, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
        });
        // get return url from route parameters or default to '/'
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    };
    Object.defineProperty(SigninComponent.prototype, "f", {
        // convenience getter for easy access to form fields
        get: function () {
            return this.form.controls;
        },
        enumerable: true,
        configurable: true
    });
    SigninComponent.prototype.onSubmit = function () {
        var _this = this;
        this.submitted = true;
        // stop here if form is invalid
        if (this.form.invalid) {
            return;
        }
        var email = this.f.email.value;
        var password = this.f.password.value;
        this.loading = true;
        this.authenticationService.signIn(email, password)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["first"])())
            .subscribe(function (res) {
            _this.loading = false;
            _this.arrow.show = false;
            if (res.result == 'success') {
                _this.router.navigate([_this.returnUrl]);
            }
            else {
                _this.arrow = {
                    show: true,
                    type: 'danger',
                    message: res.message,
                };
            }
        }, function (error) {
            _this.loading = false;
            _this.error = error;
            _this.arrow = {
                show: true,
                type: 'danger',
                message: 'Unknown server error',
            };
        });
    };
    SigninComponent.ctorParameters = function () { return [
        { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["Title"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
        { type: _app_services__WEBPACK_IMPORTED_MODULE_5__["AuthenticationService"] }
    ]; };
    SigninComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'auth-signin',
            template: __webpack_require__(/*! raw-loader!./signin.component.html */ "./node_modules/raw-loader/index.js!./src/app/auth/signin/signin.component.html"),
            styles: [__webpack_require__(/*! ./signin.component.scss */ "./src/app/auth/signin/signin.component.scss")]
        })
    ], SigninComponent);
    return SigninComponent;
}());



/***/ }),

/***/ "./src/app/auth/signup/signup.component.scss":
/*!***************************************************!*\
  !*** ./src/app/auth/signup/signup.component.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2F1dGgvc2lnbnVwL3NpZ251cC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/auth/signup/signup.component.ts":
/*!*************************************************!*\
  !*** ./src/app/auth/signup/signup.component.ts ***!
  \*************************************************/
/*! exports provided: SignupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupComponent", function() { return SignupComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_services__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @app/_services */ "./src/app/_services/index.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _app_helpers_check_force_validator__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @app/_helpers/check-force.validator */ "./src/app/_helpers/check-force.validator.ts");
/* harmony import */ var _core_strings__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @core/strings */ "./src/core/strings.ts");









var SignupComponent = /** @class */ (function () {
    function SignupComponent(titleService, formBuilder, route, router, authenticationService) {
        this.titleService = titleService;
        this.formBuilder = formBuilder;
        this.route = route;
        this.router = router;
        this.authenticationService = authenticationService;
        this.strings = _core_strings__WEBPACK_IMPORTED_MODULE_8__["default"];
        this.loading = false;
        this.submitted = false;
        this.error = '';
        this.arrow = {
            show: false,
            type: '',
            message: '',
        };
        titleService.setTitle(_core_strings__WEBPACK_IMPORTED_MODULE_8__["default"].signUp + "-" + _core_strings__WEBPACK_IMPORTED_MODULE_8__["default"].siteName);
    }
    SignupComponent.prototype.ngOnInit = function () {
        this.form = this.formBuilder.group({
            firstName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            lastName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].email]],
            username: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            invitationCode: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            acceptTerm: ['', _app_helpers_check_force_validator__WEBPACK_IMPORTED_MODULE_7__["CheckForceValidator"].validateCheck],
        });
    };
    Object.defineProperty(SignupComponent.prototype, "f", {
        // convenience getter for easy access to form fields
        get: function () {
            return this.form.controls;
        },
        enumerable: true,
        configurable: true
    });
    SignupComponent.prototype.onSubmit = function () {
        var _this = this;
        this.submitted = true;
        if (this.form.invalid) {
            return;
        }
        var firstName = this.f.firstName.value;
        var lastName = this.f.lastName.value;
        var email = this.f.email.value;
        var username = this.f.username.value;
        var password = this.f.password.value;
        var invitationCode = this.f.invitationCode.value;
        this.loading = true;
        var payload = {
            firstName: firstName,
            lastName: lastName,
            email: email,
            username: username,
            password: password,
            invitationCode: invitationCode,
        };
        this.authenticationService.signUp(payload)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["first"])())
            .subscribe(function (res) {
            _this.loading = false;
            _this.arrow.show = false;
            if (res.result == 'success') {
                _this.arrow = {
                    show: true,
                    type: 'success',
                    message: res.message,
                };
            }
            else {
                _this.arrow = {
                    show: true,
                    type: 'danger',
                    message: res.message,
                };
            }
        }, function (error) {
            _this.loading = false;
            _this.error = error;
            _this.arrow = {
                show: true,
                type: 'danger',
                message: 'Unknown server error',
            };
        });
    };
    SignupComponent.ctorParameters = function () { return [
        { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["Title"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
        { type: _app_services__WEBPACK_IMPORTED_MODULE_5__["AuthenticationService"] }
    ]; };
    SignupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'auth-signup',
            template: __webpack_require__(/*! raw-loader!./signup.component.html */ "./node_modules/raw-loader/index.js!./src/app/auth/signup/signup.component.html"),
            styles: [__webpack_require__(/*! ./signup.component.scss */ "./src/app/auth/signup/signup.component.scss")]
        })
    ], SignupComponent);
    return SignupComponent;
}());



/***/ }),

/***/ "./src/app/home/dashboard/dashboard.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/home/dashboard/dashboard.component.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/home/dashboard/dashboard.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/home/dashboard/dashboard.component.ts ***!
  \*******************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _core_strings__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @core/strings */ "./src/core/strings.ts");






var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(titleService, formBuilder, route) {
        this.titleService = titleService;
        this.formBuilder = formBuilder;
        this.route = route;
        this.pageTitle = _core_strings__WEBPACK_IMPORTED_MODULE_5__["default"].dashboard;
        this.strings = _core_strings__WEBPACK_IMPORTED_MODULE_5__["default"];
        this.loading = false;
        this.submitted = false;
        this.error = '';
        titleService.setTitle(_core_strings__WEBPACK_IMPORTED_MODULE_5__["default"].dashboard + "-" + _core_strings__WEBPACK_IMPORTED_MODULE_5__["default"].siteName);
    }
    DashboardComponent.prototype.ngOnInit = function () {
        this.form = this.formBuilder.group({});
        // get return url from route parameters or default to '/'
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    };
    Object.defineProperty(DashboardComponent.prototype, "f", {
        // convenience getter for easy access to form fields
        get: function () {
            return this.form.controls;
        },
        enumerable: true,
        configurable: true
    });
    DashboardComponent.prototype.onSubmit = function () {
        var self = this;
        this.submitted = true;
        this.loading = true;
        setTimeout(function () {
            self.loading = false;
        }, 2000);
    };
    DashboardComponent.ctorParameters = function () { return [
        { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["Title"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] }
    ]; };
    DashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'home-dashboard',
            template: __webpack_require__(/*! raw-loader!./dashboard.component.html */ "./node_modules/raw-loader/index.js!./src/app/home/dashboard/dashboard.component.html"),
            styles: [__webpack_require__(/*! ./dashboard.component.scss */ "./src/app/home/dashboard/dashboard.component.scss")]
        })
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/home/home-layout/home-layout.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/home/home-layout/home-layout.component.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS1sYXlvdXQvaG9tZS1sYXlvdXQuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/home/home-layout/home-layout.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/home/home-layout/home-layout.component.ts ***!
  \***********************************************************/
/*! exports provided: HomeLayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeLayoutComponent", function() { return HomeLayoutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/_services */ "./src/app/_services/index.ts");



var HomeLayoutComponent = /** @class */ (function () {
    function HomeLayoutComponent(authenticationService) {
        this.authenticationService = authenticationService;
        this.user = this.authenticationService.currentUserValue;
    }
    HomeLayoutComponent.prototype.ngOnInit = function () {
    };
    HomeLayoutComponent.ctorParameters = function () { return [
        { type: _app_services__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"] }
    ]; };
    HomeLayoutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'home-layout',
            template: __webpack_require__(/*! raw-loader!./home-layout.component.html */ "./node_modules/raw-loader/index.js!./src/app/home/home-layout/home-layout.component.html"),
            styles: [__webpack_require__(/*! ./home-layout.component.scss */ "./src/app/home/home-layout/home-layout.component.scss")]
        })
    ], HomeLayoutComponent);
    return HomeLayoutComponent;
}());



/***/ }),

/***/ "./src/app/home/price-chart/price-chart.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/home/price-chart/price-chart.component.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvcHJpY2UtY2hhcnQvcHJpY2UtY2hhcnQuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/home/price-chart/price-chart.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/home/price-chart/price-chart.component.ts ***!
  \***********************************************************/
/*! exports provided: PriceChartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PriceChartComponent", function() { return PriceChartComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _core_strings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core/strings */ "./src/core/strings.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");






var PriceChartComponent = /** @class */ (function () {
    function PriceChartComponent(titleService, formBuilder, route) {
        this.titleService = titleService;
        this.formBuilder = formBuilder;
        this.route = route;
        this.pageTitle = _core_strings__WEBPACK_IMPORTED_MODULE_2__["default"].priceChart;
        this.strings = _core_strings__WEBPACK_IMPORTED_MODULE_2__["default"];
        this.loading = false;
        this.submitted = false;
        this.error = '';
        titleService.setTitle(_core_strings__WEBPACK_IMPORTED_MODULE_2__["default"].dashboard + "-" + _core_strings__WEBPACK_IMPORTED_MODULE_2__["default"].siteName);
    }
    PriceChartComponent.prototype.ngOnInit = function () {
        this.form = this.formBuilder.group({});
        // get return url from route parameters or default to '/'
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    };
    Object.defineProperty(PriceChartComponent.prototype, "f", {
        // convenience getter for easy access to form fields
        get: function () {
            return this.form.controls;
        },
        enumerable: true,
        configurable: true
    });
    PriceChartComponent.prototype.onSubmit = function () {
        var self = this;
        this.submitted = true;
        this.loading = true;
        setTimeout(function () {
            self.loading = false;
        }, 2000);
    };
    PriceChartComponent.ctorParameters = function () { return [
        { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["Title"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] }
    ]; };
    PriceChartComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'home-price-chart',
            template: __webpack_require__(/*! raw-loader!./price-chart.component.html */ "./node_modules/raw-loader/index.js!./src/app/home/price-chart/price-chart.component.html"),
            styles: [__webpack_require__(/*! ./price-chart.component.scss */ "./src/app/home/price-chart/price-chart.component.scss")]
        })
    ], PriceChartComponent);
    return PriceChartComponent;
}());



/***/ }),

/***/ "./src/core/apis.ts":
/*!**************************!*\
  !*** ./src/core/apis.ts ***!
  \**************************/
/*! exports provided: apis */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "apis", function() { return apis; });
var apis = {
    auth: {
        signIn: 'auth/sign-in',
        signUp: 'auth/sign-up',
    },
};



/***/ }),

/***/ "./src/core/strings.ts":
/*!*****************************!*\
  !*** ./src/core/strings.ts ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
    siteName: 'BlockReducer',
    signIn: 'Sign in',
    signUp: 'Sign up',
    signOut: 'Sign out',
    home: 'Home',
    signInWithYourAccount: 'Sign in with your account',
    signUpToYourAccount: 'Sign up to your Account',
    firstName: 'First Name',
    lastName: 'Last Name',
    email: 'Email',
    username: 'Username',
    password: 'Password',
    invitationCode: 'Invitation Code',
    keepMeSignedIn: 'Keep me signed in',
    forgotPassword: 'Forgot password?',
    doNotHaveAnAccount: 'Do not have an account?',
    alreadyHaveAnAccount: 'Already have an account?',
    thisFieldIsRequired: 'This field is required',
    yourEmailIsInvalid: 'Your Email is invalid',
    agreeTheTermsAndPolicy: 'Agree the terms and policy',
    pleaseAcceptThis: 'Please accept this',
    refresh: 'Refresh',
    dashboard: 'Dashboard',
    priceChart: 'Price chart',
});


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
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
    // apiUrl: 'http://localhost:8080/api/',
    apiUrl: 'http://139.180.195.22/api/',
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! G:\1_Work\Angular_Work\BlockReducer2\BlockReducerFrontend\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es5.js.map