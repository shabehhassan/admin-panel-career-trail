'use strict';

var icon = document.getElementById("light")
icon.onclick = function(){
    document.body.classList.toggle("light-theme");
    if(document.body.classList.contains("light-theme")){
        icon.src="light.png";
    }
    else{
        icon.src="dark.png";
    }
}


// select
let date = document.querySelector('#date');
let time = document.querySelector('#time');
let video = document.querySelector('#video');
let heading = document.querySelector('#heading');
let details = document.querySelector('#details');
let Done = document.querySelector('.done')

// UI selector
let UIVideo = document.querySelector('.h1')
let UIDate = document.querySelector('.UIDate')
let UITime = document.querySelector('.UITime')
let UIHead = document.querySelector('.UIHead')
let UIDeatils = document.querySelector('.UIDetails')
let  box = document.querySelectorAll('.box')

let add = document.querySelector('.add-course')
let update = document.querySelector('.delete-course')
let grid = document.querySelector('.grid1')
let view = document.querySelector('.view')
let view2 = document.querySelector('.view2')
let finalInterfaceHeading = document.querySelector('.UI-head')

let deleteBtn = document.querySelectorAll('.delete-btn')
let updateBtn = document.querySelectorAll('.update-btn')



// add button click function
const addClick = add.addEventListener('click', function(){
    view2.style.display = 'none'
    grid.style.display = 'block'
    view.style.display = 'block'
    finalInterfaceHeading.style.display = 'block'
    add.style.background = '#4FC2D9'
    add.style.color = 'white'
    add.style.border = '1px solid green'

    update.style.color = 'black';
    update.style.background = 'white';
    update.style.border = '1px solid green'

})

// update button click funcion
const updateClick = update.addEventListener('click', function(e){
    e.preventDefault();
    grid.style.display = 'none'
    view2.style.display = 'block';
    view.style.display = 'none'
    finalInterfaceHeading.style.display = 'none'
    update.style.background = '#4FC2D9'
    update.style.color = 'white'
    update.style.border = '1px solid green'

    add.style.color = 'black';
    add.style.background = 'white';
    add.style.border = '1px solid green'

})

// done button click function
Done.addEventListener('click', function(){

    UITime.textContent = `${time.value} AM`;
    UIHead.textContent = heading.value;
    UIDeatils.textContent = details.value;
    UIVideo.src = video.value;
})


video.onchange = ({target}) => {
    let file = target.files[0]
    if(file){
        let fileName = file.name;
        console.log(file)
    }
}


