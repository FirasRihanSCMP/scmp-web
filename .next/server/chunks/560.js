exports.id = 560;
exports.ids = [560];
exports.modules = {

/***/ 9298:
/***/ ((module) => {

// Exports
module.exports = {
	"spinnerdiv": "spinner_spinnerdiv__UmvZj"
};


/***/ }),

/***/ 4386:
/***/ ((module) => {

// Exports
module.exports = {
	"departmentsTitle": "Departments_departmentsTitle__80rog",
	"root": "Departments_root__8bfdS",
	"card-img-top": "Departments_card-img-top__rvFLa",
	"cardsbody": "Departments_cardsbody__Ute3x",
	"Col": "Departments_Col__RBPyl"
};


/***/ }),

/***/ 5197:
/***/ ((module) => {

// Exports
module.exports = {
	"root": "events_root__x6MyJ"
};


/***/ }),

/***/ 3295:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Spinner)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _spinner_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9298);
/* harmony import */ var _spinner_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_spinner_module_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_spinners_ClipLoader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3278);
/* harmony import */ var react_spinners_ClipLoader__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_spinners_ClipLoader__WEBPACK_IMPORTED_MODULE_2__);




function Spinner() {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: (_spinner_module_css__WEBPACK_IMPORTED_MODULE_3___default().spinnerdiv),
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_spinners_ClipLoader__WEBPACK_IMPORTED_MODULE_2___default()), {
                color: "#ffc41d",
                size: 150,
                css: " "
            }),
            " "
        ]
    });
};


/***/ }),

/***/ 2560:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Events)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_events_module_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(5197);
/* harmony import */ var _styles_events_module_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_styles_events_module_css__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2167);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Departments_Departments_module_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(4386);
/* harmony import */ var _Departments_Departments_module_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_Departments_Departments_module_css__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _EventsCard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2530);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6405);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(358);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_ClipLoader_Spinner__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(3295);
/* harmony import */ var next_seo__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(6641);
/* harmony import */ var next_seo__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_seo__WEBPACK_IMPORTED_MODULE_7__);










function Events(props) {
    const { 0: EventsLists , 1: setEventsList  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();
    const { 0: Loaded , 1: setLoaded  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        async function fetchData() {
            await axios__WEBPACK_IMPORTED_MODULE_2___default().get("https://www.scmp-lb.com/api/Events").then((response)=>{
                if (response.data) {
                    setEventsList(response.data);
                    setLoaded(true);
                }
            }).catch((err)=>{});
        }
        fetchData();
    }, []);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: (_styles_events_module_css__WEBPACK_IMPORTED_MODULE_8___default().root),
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_seo__WEBPACK_IMPORTED_MODULE_7__.NextSeo, {
                title: "Events - Scientific Center For Manufacturing And Production",
                description: "Events - Scientific Center For Manufacturing And Production"
            }),
            Loaded === true ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__.Row, {
                    className: `g-4 ${(_Departments_Departments_module_css__WEBPACK_IMPORTED_MODULE_9___default().root)}`,
                    children: EventsLists.length > 0 ? EventsLists.map((val)=>{
                        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__.Col, {
                            xs: 12,
                            sm: 6,
                            md: 6,
                            lg: 4,
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_EventsCard__WEBPACK_IMPORTED_MODULE_3__["default"], {
                                className: (_Departments_Departments_module_css__WEBPACK_IMPORTED_MODULE_9___default().Col),
                                link: val.ELink,
                                date: val.EDate,
                                Photos: val.EPhotos,
                                paragraph: val.EParagraph,
                                title: val.ETitle,
                                text2: val.EBrief,
                                src: val.EID,
                                img: `/events/${val.ECover} `
                            })
                        }, val.EID);
                    }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {})
                })
            }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ClipLoader_Spinner__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {})
        ]
    });
};


/***/ })

};
;