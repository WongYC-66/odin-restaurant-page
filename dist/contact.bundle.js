"use strict";
(self["webpackChunkodin_restaurant_page"] = self["webpackChunkodin_restaurant_page"] || []).push([["contact"],{

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   contact: () => (/* binding */ contact)
/* harmony export */ });
/* harmony import */ var _little_prince_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./little-prince.png */ "./src/little-prince.png");
/* harmony import */ var _little_prince2_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./little-prince2.png */ "./src/little-prince2.png");
/* harmony import */ var _little_prince3_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./little-prince3.png */ "./src/little-prince3.png");
/* harmony import */ var _fox_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./fox.jpg */ "./src/fox.jpg");
/* harmony import */ var _astronomer_jpeg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./astronomer.jpeg */ "./src/astronomer.jpeg");







// contact

function contact(){

    const container = document.querySelector('#content')

    let shopName = document.createElement('div')
    let infoArea = document.createElement('div')
    container.appendChild(shopName)
    container.appendChild(infoArea)

    //
    infoArea.classList.add('info-area')
    shopName.classList.add('shop-name')

    let shopString = document.createElement('h1')
    shopString.textContent = `Contact`
    let img1 = document.createElement('img')
    img1.src = _little_prince_png__WEBPACK_IMPORTED_MODULE_0__
    let img2 = document.createElement('img')
    img2.src = _little_prince2_png__WEBPACK_IMPORTED_MODULE_1__

    shopName.append(img1, shopString, img2)


    let contactArr = [
        {name : 'The flower',
         position: 'Waitress',
         Tel: '555-555-5550',
         email : 'the_flower@theLittleChef.com',
         imgUrl : _little_prince2_png__WEBPACK_IMPORTED_MODULE_1__,
        },
        {name : 'The astronomer',
         position: 'Waiter',
         Tel: '555-555-5551',
         email : 'waiterObserver@theLittleChef.com',
         imgUrl : _astronomer_jpeg__WEBPACK_IMPORTED_MODULE_4__,
        },
        {name : 'The Fox',
         position: 'Cashier',
         Tel: '555-555-5552',
         email : 'SmartFox@theLittleChef.com',
         imgUrl : _fox_jpg__WEBPACK_IMPORTED_MODULE_3__,
        },
        {name : 'The Little Prince',
         position: 'Owner',
         Tel: '555-555-5553',
         email : 'the_boss@theLittleChef.com',
         imgUrl : _little_prince3_png__WEBPACK_IMPORTED_MODULE_2__,
        },
    ]

    // Info-area 1 : contact description
    createSubArea(contactArr, infoArea)
    
}

function createSubArea(contactArr, infoArea){
    contactArr.forEach(item => {
        // console.log(item)
        let subArea = document.createElement('div')
        subArea.classList.add('sub-area')
        subArea.classList.add('contact-card')

        let leftArea = document.createElement('img')
        leftArea.src = item.imgUrl
        let rightArea = document.createElement('div')
        let h3 = document.createElement('h3')
        let p1 = document.createElement('p')
        let p2 = document.createElement('p')
        let p3 = document.createElement('p')

        h3.textContent = item.name
        p1.textContent = item.position
        p2.textContent = item.Tel
        p3.textContent = item.email

        rightArea.append(h3, p1, p2, p3)
        subArea.append(leftArea, rightArea)
        infoArea.appendChild(subArea)
    })

    

}






/***/ }),

/***/ "./src/astronomer.jpeg":
/*!*****************************!*\
  !*** ./src/astronomer.jpeg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "285fdac92ef6f30456a6.jpeg";

/***/ }),

/***/ "./src/fox.jpg":
/*!*********************!*\
  !*** ./src/fox.jpg ***!
  \*********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "f44c58482f4f790027ae.jpg";

/***/ }),

/***/ "./src/little-prince.png":
/*!*******************************!*\
  !*** ./src/little-prince.png ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "3ae3a508b1ac8b4abeea.png";

/***/ }),

/***/ "./src/little-prince2.png":
/*!********************************!*\
  !*** ./src/little-prince2.png ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "8bb52ccbac3dba99e9ae.png";

/***/ }),

/***/ "./src/little-prince3.png":
/*!********************************!*\
  !*** ./src/little-prince3.png ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "4a830c84672b8611bb30.png";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/contact.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udGFjdC5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQStDO0FBQ0M7QUFDQTtBQUNQO0FBQ2Q7QUFDZTs7QUFFMUM7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsK0NBQWE7QUFDNUI7QUFDQSxlQUFlLGdEQUFhOztBQUU1Qjs7O0FBR0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLGdEQUFNO0FBQ3hCLFNBQVM7QUFDVCxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLDZDQUFVO0FBQzVCLFNBQVM7QUFDVCxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLHFDQUFHO0FBQ3JCLFNBQVM7QUFDVCxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLGdEQUFhO0FBQy9CLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDs7QUFFQTs7QUFFZ0IiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQtcGFnZS8uL3NyYy9jb250YWN0LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBsaXR0bGVQcmluY2UxIGZyb20gJy4vbGl0dGxlLXByaW5jZS5wbmcnXG5pbXBvcnQgbGl0dGxlUHJpbmNlMiBmcm9tICcuL2xpdHRsZS1wcmluY2UyLnBuZydcbmltcG9ydCBsaXR0bGVQcmluY2UzIGZyb20gJy4vbGl0dGxlLXByaW5jZTMucG5nJ1xuaW1wb3J0IGZsb3dlciBmcm9tICcuL2xpdHRsZS1wcmluY2UyLnBuZydcbmltcG9ydCBmb3ggZnJvbSAnLi9mb3guanBnJ1xuaW1wb3J0IGFzdHJvbm9tZXIgZnJvbSAnLi9hc3Ryb25vbWVyLmpwZWcnXG5cbi8vIGNvbnRhY3RcblxuZnVuY3Rpb24gY29udGFjdCgpe1xuXG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRlbnQnKVxuXG4gICAgbGV0IHNob3BOYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBsZXQgaW5mb0FyZWEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChzaG9wTmFtZSlcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoaW5mb0FyZWEpXG5cbiAgICAvL1xuICAgIGluZm9BcmVhLmNsYXNzTGlzdC5hZGQoJ2luZm8tYXJlYScpXG4gICAgc2hvcE5hbWUuY2xhc3NMaXN0LmFkZCgnc2hvcC1uYW1lJylcblxuICAgIGxldCBzaG9wU3RyaW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKVxuICAgIHNob3BTdHJpbmcudGV4dENvbnRlbnQgPSBgQ29udGFjdGBcbiAgICBsZXQgaW1nMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpXG4gICAgaW1nMS5zcmMgPSBsaXR0bGVQcmluY2UxXG4gICAgbGV0IGltZzIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKVxuICAgIGltZzIuc3JjID0gbGl0dGxlUHJpbmNlMlxuXG4gICAgc2hvcE5hbWUuYXBwZW5kKGltZzEsIHNob3BTdHJpbmcsIGltZzIpXG5cblxuICAgIGxldCBjb250YWN0QXJyID0gW1xuICAgICAgICB7bmFtZSA6ICdUaGUgZmxvd2VyJyxcbiAgICAgICAgIHBvc2l0aW9uOiAnV2FpdHJlc3MnLFxuICAgICAgICAgVGVsOiAnNTU1LTU1NS01NTUwJyxcbiAgICAgICAgIGVtYWlsIDogJ3RoZV9mbG93ZXJAdGhlTGl0dGxlQ2hlZi5jb20nLFxuICAgICAgICAgaW1nVXJsIDogZmxvd2VyLFxuICAgICAgICB9LFxuICAgICAgICB7bmFtZSA6ICdUaGUgYXN0cm9ub21lcicsXG4gICAgICAgICBwb3NpdGlvbjogJ1dhaXRlcicsXG4gICAgICAgICBUZWw6ICc1NTUtNTU1LTU1NTEnLFxuICAgICAgICAgZW1haWwgOiAnd2FpdGVyT2JzZXJ2ZXJAdGhlTGl0dGxlQ2hlZi5jb20nLFxuICAgICAgICAgaW1nVXJsIDogYXN0cm9ub21lcixcbiAgICAgICAgfSxcbiAgICAgICAge25hbWUgOiAnVGhlIEZveCcsXG4gICAgICAgICBwb3NpdGlvbjogJ0Nhc2hpZXInLFxuICAgICAgICAgVGVsOiAnNTU1LTU1NS01NTUyJyxcbiAgICAgICAgIGVtYWlsIDogJ1NtYXJ0Rm94QHRoZUxpdHRsZUNoZWYuY29tJyxcbiAgICAgICAgIGltZ1VybCA6IGZveCxcbiAgICAgICAgfSxcbiAgICAgICAge25hbWUgOiAnVGhlIExpdHRsZSBQcmluY2UnLFxuICAgICAgICAgcG9zaXRpb246ICdPd25lcicsXG4gICAgICAgICBUZWw6ICc1NTUtNTU1LTU1NTMnLFxuICAgICAgICAgZW1haWwgOiAndGhlX2Jvc3NAdGhlTGl0dGxlQ2hlZi5jb20nLFxuICAgICAgICAgaW1nVXJsIDogbGl0dGxlUHJpbmNlMyxcbiAgICAgICAgfSxcbiAgICBdXG5cbiAgICAvLyBJbmZvLWFyZWEgMSA6IGNvbnRhY3QgZGVzY3JpcHRpb25cbiAgICBjcmVhdGVTdWJBcmVhKGNvbnRhY3RBcnIsIGluZm9BcmVhKVxuICAgIFxufVxuXG5mdW5jdGlvbiBjcmVhdGVTdWJBcmVhKGNvbnRhY3RBcnIsIGluZm9BcmVhKXtcbiAgICBjb250YWN0QXJyLmZvckVhY2goaXRlbSA9PiB7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGl0ZW0pXG4gICAgICAgIGxldCBzdWJBcmVhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICAgICAgc3ViQXJlYS5jbGFzc0xpc3QuYWRkKCdzdWItYXJlYScpXG4gICAgICAgIHN1YkFyZWEuY2xhc3NMaXN0LmFkZCgnY29udGFjdC1jYXJkJylcblxuICAgICAgICBsZXQgbGVmdEFyZWEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKVxuICAgICAgICBsZWZ0QXJlYS5zcmMgPSBpdGVtLmltZ1VybFxuICAgICAgICBsZXQgcmlnaHRBcmVhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICAgICAgbGV0IGgzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKVxuICAgICAgICBsZXQgcDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcbiAgICAgICAgbGV0IHAyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpXG4gICAgICAgIGxldCBwMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxuXG4gICAgICAgIGgzLnRleHRDb250ZW50ID0gaXRlbS5uYW1lXG4gICAgICAgIHAxLnRleHRDb250ZW50ID0gaXRlbS5wb3NpdGlvblxuICAgICAgICBwMi50ZXh0Q29udGVudCA9IGl0ZW0uVGVsXG4gICAgICAgIHAzLnRleHRDb250ZW50ID0gaXRlbS5lbWFpbFxuXG4gICAgICAgIHJpZ2h0QXJlYS5hcHBlbmQoaDMsIHAxLCBwMiwgcDMpXG4gICAgICAgIHN1YkFyZWEuYXBwZW5kKGxlZnRBcmVhLCByaWdodEFyZWEpXG4gICAgICAgIGluZm9BcmVhLmFwcGVuZENoaWxkKHN1YkFyZWEpXG4gICAgfSlcblxuICAgIFxuXG59XG5cbmV4cG9ydCB7Y29udGFjdH1cblxuXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=