const hexa = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F']

const button = document.querySelector('button')

const color = document.querySelector('.span-color') 

button = addEventListener('click', function() {
    
   let hexColor = '#'

   for (let i = 0; i < 6; i++) {
        hexColor += hexa[getRandomNumber()];
   }

    const mainColor = document.querySelector('main')
    mainColor.style.backgroundColor = hexColor
    
   color.textContent = hexColor
})
   
function getRandomNumber() {
    return Math.floor(Math.random() * hexa.length)
    
}