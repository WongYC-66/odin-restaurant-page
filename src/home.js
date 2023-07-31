import './style.css'
import littlePrince1 from './little-prince.png'
import littlePrince2 from './little-prince2.png'
import littlePrince3 from './little-prince3.png'

// home

function home(){

    const container = document.querySelector('#content')

    let shopName = document.createElement('div')
    let infoArea = document.createElement('div')
    container.appendChild(shopName)
    container.appendChild(infoArea)

    //
    infoArea.classList.add('info-area')
    shopName.classList.add('shop-name')

    let shopString = document.createElement('h1')
    shopString.textContent = `Little Prince's Restaurant`
    let img1 = document.createElement('img')
    img1.src = littlePrince1
    let img2 = document.createElement('img')
    img2.src = littlePrince2

    shopName.append(img1, shopString, img2)

    // Info-area 1 : shop description
    let subArea1 = document.createElement('div')
    subArea1.classList.add('sub-area')
    subArea1.textContent = `The story of The Little Prince is recalled in a sombre, measured tone by the pilot-narrator, in memory of his small friend, "a memorial to the prince—not just to the prince, but also to the time the prince and the narrator had together." The Little Prince was created when Saint-Exupéry was "an ex-patriate and distraught about what was going on in his country and in the world." According to one analysis, "the story of the Little Prince features a lot of fantastical, unrealistic elements.... You can't ride a flock of birds to another planet... The fantasy of the Little Prince works because the logic of the story is based on the imagination of children, rather than the strict realism of adults."`
    infoArea.appendChild(subArea1)

    let img3 = document.createElement('img')
    img3.src = littlePrince3
    subArea1.appendChild(img3)

    // Info-area 2 : Operating hours
    let subArea2 = document.createElement('div')
    subArea2.classList.add('sub-area')
    let subTitle = document.createElement('h3')
    subTitle.textContent = 'Hours'
    let subText1 = document.createElement('p')
    subText1.textContent = 'Sunday: 8am - 8pm'
    let subText2 = document.createElement('p')
    subText2.textContent = 'Monday: 6am - 6pm'
    let subText3 = document.createElement('p')
    subText3.textContent = 'Tuesday: 6am - 6pm  '
    let subText4 = document.createElement('p')
    subText4.textContent = 'Wednesday: 6am - 6pm '
    let subText5 = document.createElement('p')
    subText5.textContent = 'Thursday: 6am - 10pm'
    let subText6 = document.createElement('p')
    subText6.textContent = 'Friday: 6am - 10pm'
    let subText7 = document.createElement('p')
    subText7.textContent = 'Saturday: 8am - 10pm '

    subArea2.append(subTitle, subText1, subText2, subText3, subText4, subText5, subText6, subText7)
    infoArea.appendChild(subArea2)

    // Info-area 3 : Location
    let subArea3 = document.createElement('div')
    subArea3.classList.add('sub-area')
    subTitle = document.createElement('h3')
    subTitle.textContent = 'Location'
    subText1 = document.createElement('p')
    subText1.textContent = `123 Island, Floating Continent, Mars `

    subArea3.appendChild(subTitle)
    subArea3.appendChild(subText1)
    infoArea.appendChild(subArea3)
    //
}


export {home}

