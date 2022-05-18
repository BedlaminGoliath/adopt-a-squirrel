
function welcomeHomePage(){
    let userName = prompt('Please Enter your Name');

    if (userName == 'Christopher') {
        document.write ('All hail King of the squirrels, ' + userName);
    }  else {
    document.write ("The Squirrels Welcome you, " + userName);
    }

}
function feedDoug(){

    let userAnswer = prompt ('Do you want to pet Dougie? (yes or no) See how he feels about this');

        if (userAnswer.toLowerCase() == "yes"){
            document.write("Dougie does not like to be pet and said 'squeak!'");
        }
        else{
            document.write("Doug is not happy either way");
            //console.log(userAnswer)
        }
}
function fatSquirrel(){

    let happySquirrel = prompt('Do you like to feed squirrels? (yes or no) ');

    let picUrl = "https://i.pinimg.com/originals/56/49/f7/5649f7e51f1e15b9e40597df8e5e2394.jpg"
    
    if (happySquirrel.toLowerCase() == 'yes'){
        //<img id="fatty" src="https://i.pinimg.com/originals/56/49/f7/5649f7e51f1e15b9e40597df8e5e2394.jpg">
    
        document.write('<img src ="' + picUrl + '">')
    }

}
function seeSquirrels(){
    let result = confirm('Do you want to see some adorable squirrels?');

    if (result == true){
        alert("You chose correct!")
    }
    else {
        alert("You chose wrong!")
    }
    
    console.log(result);

}