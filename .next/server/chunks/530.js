exports.id = 530;
exports.ids = [530];
exports.modules = {

/***/ 2562:
/***/ ((module) => {

// Exports
module.exports = {
	"cardsContainer": "EventsCard_cardsContainer__uUTNf",
	"buttonRow": "EventsCard_buttonRow__fKFhA",
	"departmentsTitle": "EventsCard_departmentsTitle__iQDR9",
	"cardCol": "EventsCard_cardCol__zw1Wu",
	"cardImage": "EventsCard_cardImage__M3GyL",
	"cardBody": "EventsCard_cardBody__srdVd",
	"card-text": "EventsCard_card-text__SgJnk",
	"cardtext1": "EventsCard_cardtext1__RiAiD",
	"cardtitle": "EventsCard_cardtitle__8mumu",
	"cardLinks": "EventsCard_cardLinks__P_5l8",
	"buttonCol": "EventsCard_buttonCol__DxLBP",
	"bodyWidth": "EventsCard_bodyWidth__9z9Mz",
	"card-title": "EventsCard_card-title__KuJq2",
	"cardsbody": "EventsCard_cardsbody__nBQuK",
	"card-body": "EventsCard_card-body__hRfV_",
	"rowup": "EventsCard_rowup__YOalB",
	"cardsMiddleContainer": "EventsCard_cardsMiddleContainer__GxgS4"
};


/***/ }),

/***/ 2530:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ EventsCard)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(358);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_lazy_load_image_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9252);
/* harmony import */ var react_lazy_load_image_component__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_lazy_load_image_component__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _EventsCard_module_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2562);
/* harmony import */ var _EventsCard_module_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_EventsCard_module_css__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _components_FirstCards_firstcards_module_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(581);
/* harmony import */ var _components_FirstCards_firstcards_module_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_components_FirstCards_firstcards_module_css__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_5__);








function EventsCard(props) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Card, {
            className: (_components_FirstCards_firstcards_module_css__WEBPACK_IMPORTED_MODULE_6___default().cardsbody),
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: (_components_FirstCards_firstcards_module_css__WEBPACK_IMPORTED_MODULE_6___default().ImageCont),
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {
                        href: `/Events/${props.src}`,
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_5___default()), {
                            placeholder: "blur",
                            blurDataURL: "/imgs" + props.img,
                            loading: "eager",
                            className: (_components_FirstCards_firstcards_module_css__WEBPACK_IMPORTED_MODULE_6___default().cardImage),
                            alt: "",
                            layout: "fill",
                            src: "/imgs" + props.img
                        })
                    })
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Card.Body, {
                    className: (_EventsCard_module_css__WEBPACK_IMPORTED_MODULE_7___default().cardBody),
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Card.Title, {
                            className: (_EventsCard_module_css__WEBPACK_IMPORTED_MODULE_7___default().cardtitle),
                            children: props.title
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h6", {
                            children: props.date
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Card.Text, {
                            className: (_EventsCard_module_css__WEBPACK_IMPORTED_MODULE_7___default().cardstexts),
                            children: props.text2
                        })
                    ]
                })
            ]
        })
    }, props.key);
};


/***/ })

};
;