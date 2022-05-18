function fatSquirrel(){

    let happySquirrel = prompt('Do you like to feed squirrels? (yes or no) ');

    let picUrl = "https://i.pinimg.com/originals/56/49/f7/5649f7e51f1e15b9e40597df8e5e2394.jpg"
    
    if (happySquirrel.toLowerCase() == 'yes'){
        //<img id="fatty" src="https://i.pinimg.com/originals/56/49/f7/5649f7e51f1e15b9e40597df8e5e2394.jpg">
    
        document.write('<img src ="' + picUrl + '">')
    }

}
