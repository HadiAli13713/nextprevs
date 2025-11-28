let image =['images (1).JFIF' , 'images (2).JFIF' , 'images (3).JFIF' , 'images.JFIF']
let img =document.getElementById('img')

let index = 0
function next(){
    index++
    if(index >= image.length){
        index = 0
        }
        
        img.src = `./public/images/${image[index]}`
    
}

function prev(){
    index--
    if(index < 0){
        index = 3
        }
        
        img.src = `./public/images/${image[index]}`
    
}

