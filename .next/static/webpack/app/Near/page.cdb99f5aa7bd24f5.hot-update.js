"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/Near/page",{

/***/ "(app-pages-browser)/./app/Near/page.tsx":
/*!***************************!*\
  !*** ./app/Near/page.tsx ***!
  \***************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ HomeAndNearLayout; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/dist/api/link.js\");\n/* harmony import */ var _barrel_optimize_names_Home_SendHorizonal_Trash2_lucide_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! __barrel_optimize__?names=Home,SendHorizonal,Trash2!=!lucide-react */ \"(app-pages-browser)/./node_modules/lucide-react/dist/esm/icons/house.js\");\n/* harmony import */ var _barrel_optimize_names_Home_SendHorizonal_Trash2_lucide_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! __barrel_optimize__?names=Home,SendHorizonal,Trash2!=!lucide-react */ \"(app-pages-browser)/./node_modules/lucide-react/dist/esm/icons/send-horizontal.js\");\n/* harmony import */ var _barrel_optimize_names_Home_SendHorizonal_Trash2_lucide_react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! __barrel_optimize__?names=Home,SendHorizonal,Trash2!=!lucide-react */ \"(app-pages-browser)/./node_modules/lucide-react/dist/esm/icons/trash-2.js\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-auth/react */ \"(app-pages-browser)/./node_modules/next-auth/react/index.js\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! axios */ \"(app-pages-browser)/./node_modules/axios/lib/axios.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/dist/api/navigation.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\nfunction HomeAndNearLayout() {\n    _s();\n    const user = (0,next_auth_react__WEBPACK_IMPORTED_MODULE_2__.useSession)();\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_4__.useRouter)();\n    const postRef = (0,react__WEBPACK_IMPORTED_MODULE_3__.useRef)(null);\n    const [posts, setPosts] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)([]);\n    const getCurLocation = ()=>{\n        return new Promise((resolve, reject)=>{\n            if (navigator.geolocation) {\n                navigator.geolocation.getCurrentPosition((position)=>{\n                    resolve(position); // Resolve the promise with the position\n                }, (error)=>{\n                    console.error(\"Error getting location:\", error);\n                    reject(error); // Reject the promise if there's an error\n                });\n            } else {\n                reject(new Error(\"Browser doesnt support GPS\"));\n            }\n        });\n    };\n    const submitPost = async ()=>{\n        var _postRef_current;\n        const message = (_postRef_current = postRef.current) === null || _postRef_current === void 0 ? void 0 : _postRef_current.value;\n        console.log(\"message :\", message);\n        try {\n            var _authorIdResponse_data_data, _authorIdResponse_data;\n            const location = await getCurLocation();\n            const authorIdResponse = await axios__WEBPACK_IMPORTED_MODULE_5__[\"default\"].get(\"/api/users/new\");\n            const authorId = (_authorIdResponse_data = authorIdResponse.data) === null || _authorIdResponse_data === void 0 ? void 0 : (_authorIdResponse_data_data = _authorIdResponse_data.data) === null || _authorIdResponse_data_data === void 0 ? void 0 : _authorIdResponse_data_data.id;\n            const result = await axios__WEBPACK_IMPORTED_MODULE_5__[\"default\"].post(\"/api/post/new\", {\n                authorId,\n                message,\n                location\n            });\n            if (postRef.current) {\n                postRef.current.value = \"\";\n            }\n            console.log(\"Post submitted successfully:\", result.data);\n        } catch (error) {\n            alert(\"An error occurred: \" + error);\n        }\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        const fetchUserAndPosts = async ()=>{\n            if (user.status === \"authenticated\") {\n                try {\n                    await axios__WEBPACK_IMPORTED_MODULE_5__[\"default\"].get(\"./api/users/new\");\n                } catch (error) {\n                    console.error(\"Error fetching user info:\", error);\n                }\n            } else {\n                alert(\"Login first\");\n                router.push(\"/\");\n            }\n            try {\n                const location = await getCurLocation();\n                console.log(location);\n                const response = await axios__WEBPACK_IMPORTED_MODULE_5__[\"default\"].post(\"./api/post/all\", {\n                    location\n                });\n                console.log(response.data.data);\n                setPosts(response.data.data);\n            } catch (error) {\n                console.error(\"Error fetching posts:\", error);\n            }\n        };\n        fetchUserAndPosts();\n    }, [\n        user.status,\n        router\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"h-screen w-full grid grid-cols-12 bg-zinc-800 grid-rows-12\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"header\", {\n                className: \"row-start-1 row-end-2 col-start-1 col-end-13 m-4 flex justify-between items-center space-x-2\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                    href: \"/\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Home_SendHorizonal_Trash2_lucide_react__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                        className: \"w-8 h-8 text-white\"\n                    }, void 0, false, {\n                        fileName: \"/home/pramodma/workspace/locial_2/app/Near/page.tsx\",\n                        lineNumber: 93,\n                        columnNumber: 24\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/home/pramodma/workspace/locial_2/app/Near/page.tsx\",\n                    lineNumber: 93,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/home/pramodma/workspace/locial_2/app/Near/page.tsx\",\n                lineNumber: 92,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex row-start-12 row-end-13 col-start-1 m-3 col-end-13 justify-between items-center\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        placeholder: \"Enter a post\",\n                        ref: postRef,\n                        className: \"p-2 w-5/6 bg-white border text-black border-black rounded-md\"\n                    }, void 0, false, {\n                        fileName: \"/home/pramodma/workspace/locial_2/app/Near/page.tsx\",\n                        lineNumber: 98,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Home_SendHorizonal_Trash2_lucide_react__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                        onClick: submitPost,\n                        className: \"text-white w-8 h-8\"\n                    }, void 0, false, {\n                        fileName: \"/home/pramodma/workspace/locial_2/app/Near/page.tsx\",\n                        lineNumber: 103,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/pramodma/workspace/locial_2/app/Near/page.tsx\",\n                lineNumber: 97,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"col-start-1 overflow-x-auto text-wrap col-end-13 row-start-2 row-end-12 flex flex-col m-3 text-black rounded-md\",\n                children: posts.map((data)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"text-xs w-fit flex flex-col bg-white m-2 rounded-md\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: \"bg-lime-200 p-1 font-bold w-fit rounded-lg border border-black m-1\",\n                                children: data.author.email.split(\"@\")[0]\n                            }, void 0, false, {\n                                fileName: \"/home/pramodma/workspace/locial_2/app/Near/page.tsx\",\n                                lineNumber: 109,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex justify-between p-1 items-center\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: \"text-sm\",\n                                    children: data.content\n                                }, void 0, false, {\n                                    fileName: \"/home/pramodma/workspace/locial_2/app/Near/page.tsx\",\n                                    lineNumber: 113,\n                                    columnNumber: 15\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/home/pramodma/workspace/locial_2/app/Near/page.tsx\",\n                                lineNumber: 112,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex justify-between\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                        className: \"text-xs p-2 text-zinc-500\",\n                                        children: data.time.slice(4, 15)\n                                    }, void 0, false, {\n                                        fileName: \"/home/pramodma/workspace/locial_2/app/Near/page.tsx\",\n                                        lineNumber: 116,\n                                        columnNumber: 15\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Home_SendHorizonal_Trash2_lucide_react__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n                                        className: \"text-base pt-2 text-red-600 cursor-pointer\"\n                                    }, void 0, false, {\n                                        fileName: \"/home/pramodma/workspace/locial_2/app/Near/page.tsx\",\n                                        lineNumber: 117,\n                                        columnNumber: 15\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/home/pramodma/workspace/locial_2/app/Near/page.tsx\",\n                                lineNumber: 115,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, data.id, true, {\n                        fileName: \"/home/pramodma/workspace/locial_2/app/Near/page.tsx\",\n                        lineNumber: 108,\n                        columnNumber: 11\n                    }, this))\n            }, void 0, false, {\n                fileName: \"/home/pramodma/workspace/locial_2/app/Near/page.tsx\",\n                lineNumber: 106,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/pramodma/workspace/locial_2/app/Near/page.tsx\",\n        lineNumber: 91,\n        columnNumber: 5\n    }, this);\n}\n_s(HomeAndNearLayout, \"ICqrwZU2QanNg3eX45/VPXy7ehU=\", false, function() {\n    return [\n        next_auth_react__WEBPACK_IMPORTED_MODULE_2__.useSession,\n        next_navigation__WEBPACK_IMPORTED_MODULE_4__.useRouter\n    ];\n});\n_c = HomeAndNearLayout;\nvar _c;\n$RefreshReg$(_c, \"HomeAndNearLayout\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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V0FBVTs7Ozs7Ozs7Ozs7Ozs7OzswQkFJakMsOERBQUNEO2dCQUFJQyxXQUFVOztrQ0FDYiw4REFBQ0c7d0JBQ0NDLGFBQVk7d0JBQ1pDLEtBQUt0Qzt3QkFDTGlDLFdBQVU7Ozs7OztrQ0FFWiw4REFBQzdDLHFHQUFhQTt3QkFBQ21ELFNBQVN6Qjt3QkFBWW1CLFdBQVU7Ozs7Ozs7Ozs7OzswQkFHaEQsOERBQUNEO2dCQUFJQyxXQUFVOzBCQUNaaEMsTUFBTXVDLEdBQUcsQ0FBQyxDQUFDakIscUJBQ1YsOERBQUNTO3dCQUFrQkMsV0FBVTs7MENBQzNCLDhEQUFDUTtnQ0FBS1IsV0FBVTswQ0FDYlYsS0FBS21CLE1BQU0sQ0FBQ0MsS0FBSyxDQUFDQyxLQUFLLENBQUMsSUFBSSxDQUFDLEVBQUU7Ozs7OzswQ0FFbEMsOERBQUNaO2dDQUFJQyxXQUFVOzBDQUNiLDRFQUFDWTtvQ0FBRVosV0FBVTs4Q0FBV1YsS0FBS3VCLE9BQU87Ozs7Ozs7Ozs7OzBDQUV0Qyw4REFBQ2Q7Z0NBQUlDLFdBQVU7O2tEQUNiLDhEQUFDYzt3Q0FBR2QsV0FBVTtrREFBNkJWLEtBQUt5QixJQUFJLENBQUNDLEtBQUssQ0FBQyxHQUFHOzs7Ozs7a0RBQzlELDhEQUFDNUQscUdBQU1BO3dDQUFDNEMsV0FBVTs7Ozs7Ozs7Ozs7Ozt1QkFUWlYsS0FBS0MsRUFBRTs7Ozs7Ozs7Ozs7Ozs7OztBQWdCM0I7R0FsSHdCM0I7O1FBUVRQLHVEQUFVQTtRQUNSTSxzREFBU0E7OztLQVRGQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvTmVhci9wYWdlLnRzeD9kZGQzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5pbXBvcnQgeyBBbGVydCB9IGZyb20gXCJAbXVpL21hdGVyaWFsXCI7XG5pbXBvcnQgeyBNYXBQaW4sIFBsdXMsIEhvbWUsIFNlbmRIb3Jpem9uYWwsIEVkaXQzLCBUcmFzaDIgfSBmcm9tICdsdWNpZGUtcmVhY3QnO1xuaW1wb3J0IHsgdXNlU2Vzc2lvbiB9IGZyb20gXCJuZXh0LWF1dGgvcmVhY3RcIjtcbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvbmF2aWdhdGlvbic7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWVBbmROZWFyTGF5b3V0KCl7XG4gIHR5cGUgTG9jYXRpb24gPSB7XG4gICAgY29vcmRzOiB7XG4gICAgICBsYXRpdHVkZTogbnVtYmVyLFxuICAgICAgbG9uZ2l0dWRlOiBudW1iZXJcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgdXNlciA9IHVzZVNlc3Npb24oKTtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG4gIGNvbnN0IHBvc3RSZWYgPSB1c2VSZWY8SFRNTElucHV0RWxlbWVudD4obnVsbCk7XG4gIGNvbnN0IFtwb3N0cywgc2V0UG9zdHNdID0gdXNlU3RhdGU8YW55W10+KFtdKTtcblxuICBjb25zdCBnZXRDdXJMb2NhdGlvbj0oKSA9PiB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLHJlamVjdCk9PntcbiAgICAgICBpZihuYXZpZ2F0b3IuZ2VvbG9jYXRpb24pe1xuICAgICAgICBuYXZpZ2F0b3IuZ2VvbG9jYXRpb24uZ2V0Q3VycmVudFBvc2l0aW9uKFxuICAgICAgICAgIChwb3NpdGlvbikgPT4ge1xuICAgICAgICAgICAgcmVzb2x2ZShwb3NpdGlvbik7ICAgICAgIC8vIFJlc29sdmUgdGhlIHByb21pc2Ugd2l0aCB0aGUgcG9zaXRpb25cbiAgICAgICAgICB9LFxuICAgICAgICAgIChlcnJvcikgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgZ2V0dGluZyBsb2NhdGlvbjonLCBlcnJvcik7XG4gICAgICAgICAgICByZWplY3QoZXJyb3IpOyAgICAgICAgICAgLy8gUmVqZWN0IHRoZSBwcm9taXNlIGlmIHRoZXJlJ3MgYW4gZXJyb3JcbiAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICAgfWVsc2V7XG4gICAgICAgICAgcmVqZWN0KG5ldyBFcnJvcihcIkJyb3dzZXIgZG9lc250IHN1cHBvcnQgR1BTXCIpKVxuICAgICAgIH1cbiAgICB9KVxuICB9O1xuXG4gIGNvbnN0IHN1Ym1pdFBvc3QgPSBhc3luYyAoKSA9PiB7XG4gICAgXG4gICAgY29uc3QgbWVzc2FnZSA9IHBvc3RSZWYuY3VycmVudD8udmFsdWU7XG4gICAgY29uc29sZS5sb2coJ21lc3NhZ2UgOicsIG1lc3NhZ2UpO1xuXG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IGxvY2F0aW9uPWF3YWl0IGdldEN1ckxvY2F0aW9uKCk7XG4gICAgICBjb25zdCBhdXRob3JJZFJlc3BvbnNlID0gYXdhaXQgYXhpb3MuZ2V0KCcvYXBpL3VzZXJzL25ldycpO1xuICAgICAgY29uc3QgYXV0aG9ySWQgPSBhdXRob3JJZFJlc3BvbnNlLmRhdGE/LmRhdGE/LmlkO1xuXG4gICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBheGlvcy5wb3N0KCcvYXBpL3Bvc3QvbmV3JywgeyBhdXRob3JJZCwgbWVzc2FnZSwgbG9jYXRpb24gfSk7XG4gICAgICBpZiAocG9zdFJlZi5jdXJyZW50KSB7XG4gICAgICAgIHBvc3RSZWYuY3VycmVudC52YWx1ZSA9ICcnO1xuICAgICAgfVxuICAgICAgY29uc29sZS5sb2coJ1Bvc3Qgc3VibWl0dGVkIHN1Y2Nlc3NmdWxseTonLCByZXN1bHQuZGF0YSk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgYWxlcnQoJ0FuIGVycm9yIG9jY3VycmVkOiAnICsgKGVycm9yKSk7XG4gICAgICAgXG4gICAgfVxuICB9O1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgZmV0Y2hVc2VyQW5kUG9zdHMgPSBhc3luYyAoKSA9PiB7XG4gICAgICBpZiAodXNlci5zdGF0dXMgPT09ICdhdXRoZW50aWNhdGVkJykge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIGF3YWl0IGF4aW9zLmdldCgnLi9hcGkvdXNlcnMvbmV3Jyk7XG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgZmV0Y2hpbmcgdXNlciBpbmZvOicsIGVycm9yKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgYWxlcnQoJ0xvZ2luIGZpcnN0Jyk7XG4gICAgICAgIHJvdXRlci5wdXNoKCcvJyk7XG4gICAgICB9XG5cbiAgICAgIFxuICAgICAgdHJ5IHtcbiAgICAgICAgY29uc3QgbG9jYXRpb249YXdhaXQgZ2V0Q3VyTG9jYXRpb24oKTtcbiAgICAgICAgY29uc29sZS5sb2cobG9jYXRpb24pXG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MucG9zdCgnLi9hcGkvcG9zdC9hbGwnLCB7IGxvY2F0aW9uIH0pO1xuICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZS5kYXRhLmRhdGEpXG4gICAgICAgIHNldFBvc3RzKHJlc3BvbnNlLmRhdGEuZGF0YSk7XG4gICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBmZXRjaGluZyBwb3N0czonLCBlcnJvcik7XG4gICAgICB9XG4gICAgfTtcblxuICAgIGZldGNoVXNlckFuZFBvc3RzKCk7XG4gIH0sIFt1c2VyLnN0YXR1cyxyb3V0ZXJdKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPSdoLXNjcmVlbiB3LWZ1bGwgZ3JpZCBncmlkLWNvbHMtMTIgYmctemluYy04MDAgZ3JpZC1yb3dzLTEyJz5cbiAgICAgIDxoZWFkZXIgY2xhc3NOYW1lPVwicm93LXN0YXJ0LTEgcm93LWVuZC0yIGNvbC1zdGFydC0xIGNvbC1lbmQtMTMgbS00IGZsZXgganVzdGlmeS1iZXR3ZWVuIGl0ZW1zLWNlbnRlciBzcGFjZS14LTJcIj5cbiAgICAgICAgPExpbmsgaHJlZj0nLyc+PEhvbWUgY2xhc3NOYW1lPVwidy04IGgtOCB0ZXh0LXdoaXRlXCIgLz48L0xpbms+XG4gICAgICA8L2hlYWRlcj5cblxuXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggcm93LXN0YXJ0LTEyIHJvdy1lbmQtMTMgY29sLXN0YXJ0LTEgbS0zIGNvbC1lbmQtMTMganVzdGlmeS1iZXR3ZWVuIGl0ZW1zLWNlbnRlclwiPlxuICAgICAgICA8aW5wdXQgXG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbnRlciBhIHBvc3RcIiBcbiAgICAgICAgICByZWY9e3Bvc3RSZWZ9IFxuICAgICAgICAgIGNsYXNzTmFtZT1cInAtMiB3LTUvNiBiZy13aGl0ZSBib3JkZXIgdGV4dC1ibGFjayBib3JkZXItYmxhY2sgcm91bmRlZC1tZFwiXG4gICAgICAgIC8+XG4gICAgICAgIDxTZW5kSG9yaXpvbmFsIG9uQ2xpY2s9e3N1Ym1pdFBvc3R9IGNsYXNzTmFtZT1cInRleHQtd2hpdGUgdy04IGgtOFwiIC8+XG4gICAgICA8L2Rpdj5cblxuICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbC1zdGFydC0xIG92ZXJmbG93LXgtYXV0byB0ZXh0LXdyYXAgY29sLWVuZC0xMyByb3ctc3RhcnQtMiByb3ctZW5kLTEyIGZsZXggZmxleC1jb2wgbS0zIHRleHQtYmxhY2sgcm91bmRlZC1tZCc+XG4gICAgICAgIHtwb3N0cy5tYXAoKGRhdGEpID0+IChcbiAgICAgICAgICA8ZGl2IGtleT17ZGF0YS5pZH0gY2xhc3NOYW1lPSd0ZXh0LXhzIHctZml0IGZsZXggZmxleC1jb2wgYmctd2hpdGUgbS0yIHJvdW5kZWQtbWQnPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSdiZy1saW1lLTIwMCBwLTEgZm9udC1ib2xkIHctZml0IHJvdW5kZWQtbGcgYm9yZGVyIGJvcmRlci1ibGFjayBtLTEnPiBcbiAgICAgICAgICAgICAge2RhdGEuYXV0aG9yLmVtYWlsLnNwbGl0KCdAJylbMF19XG4gICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZmxleCBqdXN0aWZ5LWJldHdlZW4gcC0xIGl0ZW1zLWNlbnRlcic+XG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT0ndGV4dC1zbSc+e2RhdGEuY29udGVudH08L3A+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmbGV4IGp1c3RpZnktYmV0d2Vlbic+XG4gICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9J3RleHQteHMgcC0yIHRleHQtemluYy01MDAnPntkYXRhLnRpbWUuc2xpY2UoNCwgMTUpfTwvaDE+XG4gICAgICAgICAgICAgIDxUcmFzaDIgY2xhc3NOYW1lPSd0ZXh0LWJhc2UgcHQtMiB0ZXh0LXJlZC02MDAgY3Vyc29yLXBvaW50ZXInIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKSl9XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJMaW5rIiwiSG9tZSIsIlNlbmRIb3Jpem9uYWwiLCJUcmFzaDIiLCJ1c2VTZXNzaW9uIiwiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VSZWYiLCJ1c2VTdGF0ZSIsImF4aW9zIiwidXNlUm91dGVyIiwiSG9tZUFuZE5lYXJMYXlvdXQiLCJ1c2VyIiwicm91dGVyIiwicG9zdFJlZiIsInBvc3RzIiwic2V0UG9zdHMiLCJnZXRDdXJMb2NhdGlvbiIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0IiwibmF2aWdhdG9yIiwiZ2VvbG9jYXRpb24iLCJnZXRDdXJyZW50UG9zaXRpb24iLCJwb3NpdGlvbiIsImVycm9yIiwiY29uc29sZSIsIkVycm9yIiwic3VibWl0UG9zdCIsIm1lc3NhZ2UiLCJjdXJyZW50IiwidmFsdWUiLCJsb2ciLCJhdXRob3JJZFJlc3BvbnNlIiwibG9jYXRpb24iLCJnZXQiLCJhdXRob3JJZCIsImRhdGEiLCJpZCIsInJlc3VsdCIsInBvc3QiLCJhbGVydCIsImZldGNoVXNlckFuZFBvc3RzIiwic3RhdHVzIiwicHVzaCIsInJlc3BvbnNlIiwiZGl2IiwiY2xhc3NOYW1lIiwiaGVhZGVyIiwiaHJlZiIsImlucHV0IiwicGxhY2Vob2xkZXIiLCJyZWYiLCJvbkNsaWNrIiwibWFwIiwic3BhbiIsImF1dGhvciIsImVtYWlsIiwic3BsaXQiLCJwIiwiY29udGVudCIsImgxIiwidGltZSIsInNsaWNlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/Near/page.tsx\n"));

/***/ })

});