
//Immediately Invoke function expression(IIFE)
//(function Here (){
  //  let x= 20;
   // let y= 23;

    //let result= x+y
    //console.log(result);
//})()

//The functions returns a new function everytime you call it
function autoIncrement(){
    let number= 13;
   return number++
console.log(number++)
   //line+= 1 or line++ 
   //line-= or line--
}

//let autoIncrement= (function(){
  //   let number = 0
//number ++
//return function(){ number
//}
//})()