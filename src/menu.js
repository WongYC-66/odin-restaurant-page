import littlePrince1 from './little-prince.png'
import littlePrince2 from './little-prince2.png'
import chicken1 from './chicken1.jpg'
import chicken2 from './chicken2.jpg'
import chicken3 from './chicken3.jpg'
import chicken4 from './curry-chicken.jpg'
import burger from './burger.jpg'
import fish from './special-fish.png'
import salad from './salad.png'
import beef from './beef.png'
import milkShake from './oreo-milkshake.png'
import fruitJuice from './mango-juice.png'
import iceCream from './choco-icecream.png'
import pot from './breakfast-pot.png'

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
    img1.src = littlePrince1
    let img2 = document.createElement('img')
    img2.src = littlePrince2

    shopName.append(img1, shopString, img2)

    // Info-area 1 : Main-dishes
    let subGrid1 =  createSubArea('Main Dishes', infoArea)
    let mainDishItem = [
        {title : 'Classic Fried Chicken', 
         imgUrl : chicken1,
         price : '$12',
        },
        {title : 'Sesame Onion Fried Chicken', 
         imgUrl : chicken2,
         price : '$15',
        },
        {title : 'Korean Spicy Fried Chicken', 
         imgUrl : chicken3,
         price : '$17',
        },
        {title : 'Curry Chicken', 
         imgUrl : chicken4,
         price : '$14',
        },
        {title : 'Roasted Steak', 
         imgUrl : beef,
         price : '$14',
        },
        {title : 'Space Burger', 
         imgUrl : burger,
         price : '$10',
        },
        {title : 'Salad', 
         imgUrl : salad,
         price : '$10',
        },
        {title : 'Grilled Fish', 
         imgUrl : fish,
         price : '$12',
        }
    ]
    addCard(mainDishItem, subGrid1)
    
    // Info-area 2 : Drinks
    let subGrid2 =  createSubArea('Drinks', infoArea)
    let drinksItem = [
        {title : 'Oreo Milk shake', 
         imgUrl : milkShake,
         price : '$6',
        },
        {title : 'Mango juice', 
         imgUrl : fruitJuice,
         price : '$5',
        },
    ]
    addCard(drinksItem, subGrid2)

    // Info-area 3 : Side-dish
    let subGrid3 =  createSubArea('Side Dish', infoArea)
    let sideDishItem = [
        {title : 'Ice cream', 
         imgUrl : iceCream,
         price : '$5',
        },
        {title : 'Breakfast Pot', 
         imgUrl : pot,
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


export {menu}


