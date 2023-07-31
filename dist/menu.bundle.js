"use strict";
(self["webpackChunkodin_restaurant_page"] = self["webpackChunkodin_restaurant_page"] || []).push([["menu"],{

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   menu: () => (/* binding */ menu)
/* harmony export */ });
/* harmony import */ var _little_prince_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./little-prince.png */ "./src/little-prince.png");
/* harmony import */ var _little_prince2_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./little-prince2.png */ "./src/little-prince2.png");
/* harmony import */ var _chicken1_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./chicken1.jpg */ "./src/chicken1.jpg");
/* harmony import */ var _chicken2_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./chicken2.jpg */ "./src/chicken2.jpg");
/* harmony import */ var _chicken3_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./chicken3.jpg */ "./src/chicken3.jpg");
/* harmony import */ var _curry_chicken_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./curry-chicken.jpg */ "./src/curry-chicken.jpg");
/* harmony import */ var _burger_jpg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./burger.jpg */ "./src/burger.jpg");
/* harmony import */ var _special_fish_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./special-fish.png */ "./src/special-fish.png");
/* harmony import */ var _salad_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./salad.png */ "./src/salad.png");
/* harmony import */ var _beef_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./beef.png */ "./src/beef.png");
/* harmony import */ var _oreo_milkshake_png__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./oreo-milkshake.png */ "./src/oreo-milkshake.png");
/* harmony import */ var _mango_juice_png__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./mango-juice.png */ "./src/mango-juice.png");
/* harmony import */ var _choco_icecream_png__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./choco-icecream.png */ "./src/choco-icecream.png");
/* harmony import */ var _breakfast_pot_png__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./breakfast-pot.png */ "./src/breakfast-pot.png");















// menu

function menu(){

    const container = document.querySelector('#content')

    let shopName = document.createElement('div')
    let infoArea = document.createElement('div')
    container.appendChild(shopName)
    container.appendChild(infoArea)

    //
    infoArea.classList.add('info-area')
    shopName.classList.add('shop-name')

    let shopString = document.createElement('h1')
    shopString.textContent = `Menu`
    let img1 = document.createElement('img')
    img1.src = _little_prince_png__WEBPACK_IMPORTED_MODULE_0__
    let img2 = document.createElement('img')
    img2.src = _little_prince2_png__WEBPACK_IMPORTED_MODULE_1__

    shopName.append(img1, shopString, img2)

    // Info-area 1 : Main-dishes
    let subGrid1 =  createSubArea('Main Dishes', infoArea)
    let mainDishItem = [
        {title : 'Classic Fried Chicken', 
         imgUrl : _chicken1_jpg__WEBPACK_IMPORTED_MODULE_2__,
         price : '$12',
        },
        {title : 'Sesame Onion Fried Chicken', 
         imgUrl : _chicken2_jpg__WEBPACK_IMPORTED_MODULE_3__,
         price : '$15',
        },
        {title : 'Korean Spicy Fried Chicken', 
         imgUrl : _chicken3_jpg__WEBPACK_IMPORTED_MODULE_4__,
         price : '$17',
        },
        {title : 'Curry Chicken', 
         imgUrl : _curry_chicken_jpg__WEBPACK_IMPORTED_MODULE_5__,
         price : '$14',
        },
        {title : 'Roasted Steak', 
         imgUrl : _beef_png__WEBPACK_IMPORTED_MODULE_9__,
         price : '$14',
        },
        {title : 'Space Burger', 
         imgUrl : _burger_jpg__WEBPACK_IMPORTED_MODULE_6__,
         price : '$10',
        },
        {title : 'Salad', 
         imgUrl : _salad_png__WEBPACK_IMPORTED_MODULE_8__,
         price : '$10',
        },
        {title : 'Grilled Fish', 
         imgUrl : _special_fish_png__WEBPACK_IMPORTED_MODULE_7__,
         price : '$12',
        }
    ]
    addCard(mainDishItem, subGrid1)
    
    // Info-area 2 : Drinks
    let subGrid2 =  createSubArea('Drinks', infoArea)
    let drinksItem = [
        {title : 'Oreo Milk shake', 
         imgUrl : _oreo_milkshake_png__WEBPACK_IMPORTED_MODULE_10__,
         price : '$6',
        },
        {title : 'Mango juice', 
         imgUrl : _mango_juice_png__WEBPACK_IMPORTED_MODULE_11__,
         price : '$5',
        },
    ]
    addCard(drinksItem, subGrid2)

    // Info-area 3 : Side-dish
    let subGrid3 =  createSubArea('Side Dish', infoArea)
    let sideDishItem = [
        {title : 'Ice cream', 
         imgUrl : _choco_icecream_png__WEBPACK_IMPORTED_MODULE_12__,
         price : '$5',
        },
        {title : 'Breakfast Pot', 
         imgUrl : _breakfast_pot_png__WEBPACK_IMPORTED_MODULE_13__,
         price : '$5',
        },
    ]
    addCard(sideDishItem, subGrid3)
}

function createSubArea(name, parent){
    let newSubArea = document.createElement('div')
    newSubArea.classList.add('sub-area')
    let subTitle = document.createElement('h3')
    subTitle.textContent = name
    let subGrid = document.createElement('div')
    subGrid.classList.add('grid-container')
    
    newSubArea.append(subTitle, subGrid)
    parent.appendChild(newSubArea)
    return subGrid
}

function addCard(menuArr, area){
    menuArr.forEach(item => {
        let newCard = document.createElement('div')
        newCard.classList.add('card')

        let cardTitle = document.createElement('h4')
        cardTitle.textContent = item.title
        let cardImage = document.createElement('img')
        cardImage.src = item.imgUrl
        let cardPrice = document.createElement('p')
        cardPrice.textContent = item.price

        newCard.append(cardTitle, cardImage, cardPrice)
        area.append(newCard)
    })
}







/***/ }),

/***/ "./src/beef.png":
/*!**********************!*\
  !*** ./src/beef.png ***!
  \**********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "da0636a430720043b015.png";

/***/ }),

/***/ "./src/breakfast-pot.png":
/*!*******************************!*\
  !*** ./src/breakfast-pot.png ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "b16508b81bb7bc3e4028.png";

/***/ }),

/***/ "./src/burger.jpg":
/*!************************!*\
  !*** ./src/burger.jpg ***!
  \************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "59d496a8c6bed3dbe838.jpg";

/***/ }),

/***/ "./src/chicken1.jpg":
/*!**************************!*\
  !*** ./src/chicken1.jpg ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "5aadc19992d5d6fb22c6.jpg";

/***/ }),

/***/ "./src/chicken2.jpg":
/*!**************************!*\
  !*** ./src/chicken2.jpg ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "f5148f545d6f5a21008c.jpg";

/***/ }),

/***/ "./src/chicken3.jpg":
/*!**************************!*\
  !*** ./src/chicken3.jpg ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "e8a3b48ea87d83715d8d.jpg";

/***/ }),

/***/ "./src/choco-icecream.png":
/*!********************************!*\
  !*** ./src/choco-icecream.png ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "49cf399aafc3a0421f26.png";

/***/ }),

/***/ "./src/curry-chicken.jpg":
/*!*******************************!*\
  !*** ./src/curry-chicken.jpg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "49d82a6edbaa2c9f83a0.jpg";

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

/***/ "./src/mango-juice.png":
/*!*****************************!*\
  !*** ./src/mango-juice.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "47e7844b765d649066ee.png";

/***/ }),

/***/ "./src/oreo-milkshake.png":
/*!********************************!*\
  !*** ./src/oreo-milkshake.png ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "7ed136aa64766104b6bd.png";

/***/ }),

/***/ "./src/salad.png":
/*!***********************!*\
  !*** ./src/salad.png ***!
  \***********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "5238e03247b970784faf.png";

/***/ }),

/***/ "./src/special-fish.png":
/*!******************************!*\
  !*** ./src/special-fish.png ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "8cc47ad69c2e8779e3c5.png";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/menu.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVudS5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQStDO0FBQ0M7QUFDWDtBQUNBO0FBQ0E7QUFDSztBQUNUO0FBQ0k7QUFDTjtBQUNGO0FBQ2U7QUFDRjtBQUNDO0FBQ047O0FBRXJDOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLCtDQUFhO0FBQzVCO0FBQ0EsZUFBZSxnREFBYTs7QUFFNUI7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULGtCQUFrQiwwQ0FBUTtBQUMxQjtBQUNBLFNBQVM7QUFDVCxTQUFTO0FBQ1Qsa0JBQWtCLDBDQUFRO0FBQzFCO0FBQ0EsU0FBUztBQUNULFNBQVM7QUFDVCxrQkFBa0IsMENBQVE7QUFDMUI7QUFDQSxTQUFTO0FBQ1QsU0FBUztBQUNULGtCQUFrQiwrQ0FBUTtBQUMxQjtBQUNBLFNBQVM7QUFDVCxTQUFTO0FBQ1Qsa0JBQWtCLHNDQUFJO0FBQ3RCO0FBQ0EsU0FBUztBQUNULFNBQVM7QUFDVCxrQkFBa0Isd0NBQU07QUFDeEI7QUFDQSxTQUFTO0FBQ1QsU0FBUztBQUNULGtCQUFrQix1Q0FBSztBQUN2QjtBQUNBLFNBQVM7QUFDVCxTQUFTO0FBQ1Qsa0JBQWtCLDhDQUFJO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Qsa0JBQWtCLGlEQUFTO0FBQzNCO0FBQ0EsU0FBUztBQUNULFNBQVM7QUFDVCxrQkFBa0IsOENBQVU7QUFDNUI7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Qsa0JBQWtCLGlEQUFRO0FBQzFCO0FBQ0EsU0FBUztBQUNULFNBQVM7QUFDVCxrQkFBa0IsZ0RBQUc7QUFDckI7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDs7O0FBR2EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQtcGFnZS8uL3NyYy9tZW51LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBsaXR0bGVQcmluY2UxIGZyb20gJy4vbGl0dGxlLXByaW5jZS5wbmcnXG5pbXBvcnQgbGl0dGxlUHJpbmNlMiBmcm9tICcuL2xpdHRsZS1wcmluY2UyLnBuZydcbmltcG9ydCBjaGlja2VuMSBmcm9tICcuL2NoaWNrZW4xLmpwZydcbmltcG9ydCBjaGlja2VuMiBmcm9tICcuL2NoaWNrZW4yLmpwZydcbmltcG9ydCBjaGlja2VuMyBmcm9tICcuL2NoaWNrZW4zLmpwZydcbmltcG9ydCBjaGlja2VuNCBmcm9tICcuL2N1cnJ5LWNoaWNrZW4uanBnJ1xuaW1wb3J0IGJ1cmdlciBmcm9tICcuL2J1cmdlci5qcGcnXG5pbXBvcnQgZmlzaCBmcm9tICcuL3NwZWNpYWwtZmlzaC5wbmcnXG5pbXBvcnQgc2FsYWQgZnJvbSAnLi9zYWxhZC5wbmcnXG5pbXBvcnQgYmVlZiBmcm9tICcuL2JlZWYucG5nJ1xuaW1wb3J0IG1pbGtTaGFrZSBmcm9tICcuL29yZW8tbWlsa3NoYWtlLnBuZydcbmltcG9ydCBmcnVpdEp1aWNlIGZyb20gJy4vbWFuZ28tanVpY2UucG5nJ1xuaW1wb3J0IGljZUNyZWFtIGZyb20gJy4vY2hvY28taWNlY3JlYW0ucG5nJ1xuaW1wb3J0IHBvdCBmcm9tICcuL2JyZWFrZmFzdC1wb3QucG5nJ1xuXG4vLyBtZW51XG5cbmZ1bmN0aW9uIG1lbnUoKXtcblxuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb250ZW50JylcblxuICAgIGxldCBzaG9wTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgbGV0IGluZm9BcmVhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoc2hvcE5hbWUpXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGluZm9BcmVhKVxuXG4gICAgLy9cbiAgICBpbmZvQXJlYS5jbGFzc0xpc3QuYWRkKCdpbmZvLWFyZWEnKVxuICAgIHNob3BOYW1lLmNsYXNzTGlzdC5hZGQoJ3Nob3AtbmFtZScpXG5cbiAgICBsZXQgc2hvcFN0cmluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJylcbiAgICBzaG9wU3RyaW5nLnRleHRDb250ZW50ID0gYE1lbnVgXG4gICAgbGV0IGltZzEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKVxuICAgIGltZzEuc3JjID0gbGl0dGxlUHJpbmNlMVxuICAgIGxldCBpbWcyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJylcbiAgICBpbWcyLnNyYyA9IGxpdHRsZVByaW5jZTJcblxuICAgIHNob3BOYW1lLmFwcGVuZChpbWcxLCBzaG9wU3RyaW5nLCBpbWcyKVxuXG4gICAgLy8gSW5mby1hcmVhIDEgOiBNYWluLWRpc2hlc1xuICAgIGxldCBzdWJHcmlkMSA9ICBjcmVhdGVTdWJBcmVhKCdNYWluIERpc2hlcycsIGluZm9BcmVhKVxuICAgIGxldCBtYWluRGlzaEl0ZW0gPSBbXG4gICAgICAgIHt0aXRsZSA6ICdDbGFzc2ljIEZyaWVkIENoaWNrZW4nLCBcbiAgICAgICAgIGltZ1VybCA6IGNoaWNrZW4xLFxuICAgICAgICAgcHJpY2UgOiAnJDEyJyxcbiAgICAgICAgfSxcbiAgICAgICAge3RpdGxlIDogJ1Nlc2FtZSBPbmlvbiBGcmllZCBDaGlja2VuJywgXG4gICAgICAgICBpbWdVcmwgOiBjaGlja2VuMixcbiAgICAgICAgIHByaWNlIDogJyQxNScsXG4gICAgICAgIH0sXG4gICAgICAgIHt0aXRsZSA6ICdLb3JlYW4gU3BpY3kgRnJpZWQgQ2hpY2tlbicsIFxuICAgICAgICAgaW1nVXJsIDogY2hpY2tlbjMsXG4gICAgICAgICBwcmljZSA6ICckMTcnLFxuICAgICAgICB9LFxuICAgICAgICB7dGl0bGUgOiAnQ3VycnkgQ2hpY2tlbicsIFxuICAgICAgICAgaW1nVXJsIDogY2hpY2tlbjQsXG4gICAgICAgICBwcmljZSA6ICckMTQnLFxuICAgICAgICB9LFxuICAgICAgICB7dGl0bGUgOiAnUm9hc3RlZCBTdGVhaycsIFxuICAgICAgICAgaW1nVXJsIDogYmVlZixcbiAgICAgICAgIHByaWNlIDogJyQxNCcsXG4gICAgICAgIH0sXG4gICAgICAgIHt0aXRsZSA6ICdTcGFjZSBCdXJnZXInLCBcbiAgICAgICAgIGltZ1VybCA6IGJ1cmdlcixcbiAgICAgICAgIHByaWNlIDogJyQxMCcsXG4gICAgICAgIH0sXG4gICAgICAgIHt0aXRsZSA6ICdTYWxhZCcsIFxuICAgICAgICAgaW1nVXJsIDogc2FsYWQsXG4gICAgICAgICBwcmljZSA6ICckMTAnLFxuICAgICAgICB9LFxuICAgICAgICB7dGl0bGUgOiAnR3JpbGxlZCBGaXNoJywgXG4gICAgICAgICBpbWdVcmwgOiBmaXNoLFxuICAgICAgICAgcHJpY2UgOiAnJDEyJyxcbiAgICAgICAgfVxuICAgIF1cbiAgICBhZGRDYXJkKG1haW5EaXNoSXRlbSwgc3ViR3JpZDEpXG4gICAgXG4gICAgLy8gSW5mby1hcmVhIDIgOiBEcmlua3NcbiAgICBsZXQgc3ViR3JpZDIgPSAgY3JlYXRlU3ViQXJlYSgnRHJpbmtzJywgaW5mb0FyZWEpXG4gICAgbGV0IGRyaW5rc0l0ZW0gPSBbXG4gICAgICAgIHt0aXRsZSA6ICdPcmVvIE1pbGsgc2hha2UnLCBcbiAgICAgICAgIGltZ1VybCA6IG1pbGtTaGFrZSxcbiAgICAgICAgIHByaWNlIDogJyQ2JyxcbiAgICAgICAgfSxcbiAgICAgICAge3RpdGxlIDogJ01hbmdvIGp1aWNlJywgXG4gICAgICAgICBpbWdVcmwgOiBmcnVpdEp1aWNlLFxuICAgICAgICAgcHJpY2UgOiAnJDUnLFxuICAgICAgICB9LFxuICAgIF1cbiAgICBhZGRDYXJkKGRyaW5rc0l0ZW0sIHN1YkdyaWQyKVxuXG4gICAgLy8gSW5mby1hcmVhIDMgOiBTaWRlLWRpc2hcbiAgICBsZXQgc3ViR3JpZDMgPSAgY3JlYXRlU3ViQXJlYSgnU2lkZSBEaXNoJywgaW5mb0FyZWEpXG4gICAgbGV0IHNpZGVEaXNoSXRlbSA9IFtcbiAgICAgICAge3RpdGxlIDogJ0ljZSBjcmVhbScsIFxuICAgICAgICAgaW1nVXJsIDogaWNlQ3JlYW0sXG4gICAgICAgICBwcmljZSA6ICckNScsXG4gICAgICAgIH0sXG4gICAgICAgIHt0aXRsZSA6ICdCcmVha2Zhc3QgUG90JywgXG4gICAgICAgICBpbWdVcmwgOiBwb3QsXG4gICAgICAgICBwcmljZSA6ICckNScsXG4gICAgICAgIH0sXG4gICAgXVxuICAgIGFkZENhcmQoc2lkZURpc2hJdGVtLCBzdWJHcmlkMylcbn1cblxuZnVuY3Rpb24gY3JlYXRlU3ViQXJlYShuYW1lLCBwYXJlbnQpe1xuICAgIGxldCBuZXdTdWJBcmVhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBuZXdTdWJBcmVhLmNsYXNzTGlzdC5hZGQoJ3N1Yi1hcmVhJylcbiAgICBsZXQgc3ViVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpXG4gICAgc3ViVGl0bGUudGV4dENvbnRlbnQgPSBuYW1lXG4gICAgbGV0IHN1YkdyaWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIHN1YkdyaWQuY2xhc3NMaXN0LmFkZCgnZ3JpZC1jb250YWluZXInKVxuICAgIFxuICAgIG5ld1N1YkFyZWEuYXBwZW5kKHN1YlRpdGxlLCBzdWJHcmlkKVxuICAgIHBhcmVudC5hcHBlbmRDaGlsZChuZXdTdWJBcmVhKVxuICAgIHJldHVybiBzdWJHcmlkXG59XG5cbmZ1bmN0aW9uIGFkZENhcmQobWVudUFyciwgYXJlYSl7XG4gICAgbWVudUFyci5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgICBsZXQgbmV3Q2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICAgIG5ld0NhcmQuY2xhc3NMaXN0LmFkZCgnY2FyZCcpXG5cbiAgICAgICAgbGV0IGNhcmRUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2g0JylcbiAgICAgICAgY2FyZFRpdGxlLnRleHRDb250ZW50ID0gaXRlbS50aXRsZVxuICAgICAgICBsZXQgY2FyZEltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJylcbiAgICAgICAgY2FyZEltYWdlLnNyYyA9IGl0ZW0uaW1nVXJsXG4gICAgICAgIGxldCBjYXJkUHJpY2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcbiAgICAgICAgY2FyZFByaWNlLnRleHRDb250ZW50ID0gaXRlbS5wcmljZVxuXG4gICAgICAgIG5ld0NhcmQuYXBwZW5kKGNhcmRUaXRsZSwgY2FyZEltYWdlLCBjYXJkUHJpY2UpXG4gICAgICAgIGFyZWEuYXBwZW5kKG5ld0NhcmQpXG4gICAgfSlcbn1cblxuXG5leHBvcnQge21lbnV9XG5cblxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9