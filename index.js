const colors = ['green', 'lightblue', 'rgba(225,220,500)', '#b25487', 'darkcyan','blue','yellow', 'red', 'white', '#b88887', 'rgba(0,0,0)']

const button = document.querySelector('button')

const color = document.querySelector('.span-color') 

button = addEventListener('click', function() {
   
    const randomNumber = getRandomNumber()

    const mainColor = document.querySelector('main')
    mainColor.style.backgroundColor = colors[randomNumber]

    color.textContent = colors[randomNumber]
})
   
function getRandomNumber() {
    return Math.floor(Math.random() * colors.length)
    
}