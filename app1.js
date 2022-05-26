
function welcomeHomePage(){
    let userName = prompt('Please Enter your Name');

    if (userName == 'Christopher') {
        document.write ('All hail King of the squirrels, ' + userName);
    }  else {
    document.write ("The Squirrels Welcome you, " + userName);
    }

}
function feedDoug(){
console.log('test');
    let question ="Do you want to pet Dougie? (yes or no) See how he feels about this";
    let answer2question = prompt(question);
    let rightAnswer = 'yes';

    while (answer2question !== rightAnswer){
        answer2question = prompt('Think again hotshot');
    }
    alert("correct answer");

    return 
}

function fatSquirrel(){

    let happySquirrel = prompt('Do you like to feed squirrels? (yes or no) ');

    let picUrl = "https://i.pinimg.com/originals/56/49/f7/5649f7e51f1e15b9e40597df8e5e2394.jpg"
    
    if (happySquirrel.toLowerCase () == 'yes'){
        //<img id="fatty" src="https://i.pinimg.com/originals/56/49/f7/5649f7e51f1e15b9e40597df8e5e2394.jpg">
    
        document.write('<img src ="' + picUrl + '">')
        console.log(happySquirrel)
    }
    else{
        alert('youre dumb, you must feed ther squirrels!')
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

    for(let i = 0; i < attempts; i++){

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
    // alert("The squirrels stole your children");
}
function acornRating(){
    let acorn = "https://i.pinimg.com/originals/c2/0a/eb/c20aeb70fb75e4433f04e383a1bd8c00.png";
    let rating = prompt ("how would you rate a squirrel as a best bud? '1-5' ");
    for(let i = 0; i < rating; i++){
        //if rating is +1 then +1 walnut
        document.write(`<li><img src=${acorn} width="50" height="50"></li>`)
    }
}
function whoIsTheQueen(){
    let question = "Who is the queen baby? hint: its a squirrel";
    let answerToQuestion = prompt(question);
    let onlyAnswer = 'momma squirrel';
    while (answerToQuestion !== onlyAnswer){
        answerToQuestion = prompt('You fool! There can only be one!')
    }
    alert("Youre Damn Right!")
}
function whosBirthday(){
    let question = "whos Birthday is it tomorrow?";
    let bDayQuestion = prompt(question); 
    let bDayRightAnswer = "erin";

    while (bDayQuestion !== bDayRightAnswer){
        bDayQuestion = prompt("You have got to be kidding me")       
        }
        alert ("You bet your bippy its the babys Bday!")
}
function forLoops(){
for(let cds = 0; cds< 12; cds ++){
    console.log('this is how many cds i have');
}

}

