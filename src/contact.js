import littlePrince1 from './little-prince.png'
import littlePrince2 from './little-prince2.png'
import littlePrince3 from './little-prince3.png'
import flower from './little-prince2.png'
import fox from './fox.jpg'
import astronomer from './astronomer.jpeg'

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
    img1.src = littlePrince1
    let img2 = document.createElement('img')
    img2.src = littlePrince2

    shopName.append(img1, shopString, img2)


    let contactArr = [
        {name : 'The flower',
         position: 'Waitress',
         Tel: '555-555-5550',
         email : 'the_flower@theLittleChef.com',
         imgUrl : flower,
        },
        {name : 'The astronomer',
         position: 'Waiter',
         Tel: '555-555-5551',
         email : 'waiterObserver@theLittleChef.com',
         imgUrl : astronomer,
        },
        {name : 'The Fox',
         position: 'Cashier',
         Tel: '555-555-5552',
         email : 'SmartFox@theLittleChef.com',
         imgUrl : fox,
        },
        {name : 'The Little Prince',
         position: 'Owner',
         Tel: '555-555-5553',
         email : 'the_boss@theLittleChef.com',
         imgUrl : littlePrince3,
        },
    ]

    // Info-area 1 : contact description
    createSubArea(contactArr, infoArea)
    
}

function createSubArea(contactArr, infoArea){
    contactArr.forEach(item => {
        console.log(item)
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

export {contact}


