const screenWidth = window.innerWidth;
console.log(`Screen Width ${screenWidth}`)

const productStuff = [
    {
        'name': 'kevin',
        'age': 12
    },
    {
        'name': 'fruit',
        'age': 14
    },    
    {
        'name': 'topaz',
        'age': 16
    }
]
let productsContainer = document.querySelector('.products')
var putIn = document.createElement('div')

putIn.innerHTML = dummyArr.map(fig => {
    return `<div>${fig.name}</div>`
    // console.log(fig.name)
})
productsContainer.append(putIn)


// let he = 'he'
// var realtext = document.createElement('div')
// var text = `<div>I am a text and so is ${he}</div>`
// realtext.innerHTML = text
// productsContainer.append(realtext)