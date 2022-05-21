// how many walnuts max
// user input "rating"
// variables 
// 



// declaring variables we are working with
function acornRating(){
    let acorn = "https://i.pinimg.com/originals/c2/0a/eb/c20aeb70fb75e4433f04e383a1bd8c00.png";
    let rating = prompt ("how would you rate a squirrel as a best bud? '1-5' ");
    for(let i = 0; i < rating; i++){
        //if rating is +1 then +1 walnut
        document.write(`<li><img src=${acorn} width="50" height="50"></li>`)
    }
}