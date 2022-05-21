
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

        if (userAnswer.toLowerCase == 'Yes'){
            document.write("Dougie does not like to be pet and said 'squeak!'");
        }
        else{
            document.write("Doug is not happy either way");
            console.log(userAnswer)
        }
}
function fatSquirrel(){

    let happySquirrel = prompt('Do you like to feed squirrels? (yes or no) ');

    let picUrl = "https://i.pinimg.com/originals/56/49/f7/5649f7e51f1e15b9e40597df8e5e2394.jpg"
    
    if (happySquirrel.toLowerCase () == 'yes'){
        //<img id="fatty" src="https://i.pinimg.com/originals/56/49/f7/5649f7e51f1e15b9e40597df8e5e2394.jpg">
    
        document.write('<img src ="' + picUrl + '">')
        console.log(happySquirrel)
    }

}
function seeSquirrels(){
    let result = confirm('Do you want to see some adorable squirrels?');

    if (result == true){
        alert("You chose correct!");
    }
    else {
        alert("You chose wrong!");
        console.log(result)
    }
    

}
function guessingGame(){
    let userquestion ="how many squirrels have you fed today? 1-5"
    let userAnswer = prompt(userquestion);
    let correctAnswer = 5;
    let attempts = 5;

    while (userAnswer < 1 || userAnswer > 5){
        userAnswer = prompt('WRONG! they are plotting your demise try between 1-5');
        console.log(userAnswer);
    }

    for(let i = 1; i < attempts; i++){

        if (userAnswer == correctAnswer){
            alert("Correct answer! " + correctAnswer);
            // document.write("Get out of here! go feed the chipmunks!");  
            break; 
        }else if (userAnswer > correctAnswer){
            userAnswer = prompt('Sorry to high.. you started a squirrel riot');  
        }else {
            userAnswer = prompt('Sorry. Not enough... ATTACK!');
        }
        
    }
         alert("The squirrels stole your children");
}
function acornRating(){
    let acorn = "https://i.pinimg.com/originals/c2/0a/eb/c20aeb70fb75e4433f04e383a1bd8c00.png";
    let rating = prompt ("how would you rate a squirrel as a best bud? '1-5' ");
    for(let i = 0; i < rating; i++){
        //if rating is +1 then +1 walnut
        document.write(`<li><img src=${acorn} width="50" height="50"></li>`)
    }
}