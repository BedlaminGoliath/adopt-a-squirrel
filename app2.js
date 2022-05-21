// function guessingGame(){
//     let userquestion ="how many squirrels have you fed today? 1-5"
//     let userAnswer = prompt(userquestion);
//     let correctAnswer = 5;
//     let attempts = 3;

//     while (userAnswer < 1 || userAnswer > 5){
//         userAnswer = prompt('WRONG! they are plotting your demise try between 1-5');
//         console.log(userAnswer);
//     }

//     for(let i = 1; i < attempts; i++){

//         if (userAnswer == correctAnswer){
//             alert("Correct answer! " + correctAnswer);
//             document.write("Get out of here! go feed the chipmunks!");  
//             break; 
//         }else if (userAnswer > correctAnswer){
//             userAnswer = prompt('Sorry to high.. you started a squirrel riot');  
//         }else {
//             userAnswer = prompt('Sorry. Not enough... ATTACK!');
//         }
//     }
//     alert("The squirrels stole your children");
// }



// for(let i = 1; i < attempts; i++){

//     while(userAnswer < 1 || userAnswer > 5){
//         userAnswer = prompt('WRONG! they are plotting your demise try between 1-5');
//         console.log(userAnswer);
//     }
//     if(i == correctAnswer) {
//         prompt("the acceptable answer is" + correctAnswer);
//         document.write("Get out of here! go feed the chipmunks!");
//         break;
//         }
//     if(userAnswer == correctAnswer){
//         alert('You did it! they will let you live another day!');
//         document.write("They Are Pleased,for now... but watch your back");
//         break;
//     } else if (userAnswer > correctAnswer){
//         userAnswer = prompt('Sorry to high.. you started a squirrel riot');

//     } else if (userAnswer < correctAnswer){
//         userAnswer = prompt('sorry. Not enough ATTACK!');
//     }


// } 