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
