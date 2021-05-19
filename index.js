

/*
1. Write a function named "convertFahrToCelsius" that takes a single
 parameter and converts it to celsius.
*/
function convertFahrToCelsius(val){
    if(typeof val === "boolean"){
     console.log(`[${val}] is not a valid number but a/an ${typeof(val)}.`);
     return `[${val}] is not a valid number but a/an ${typeof(val)}.`;
   }
   else if(Number(val)){
       var value = claculate(val);
       return value;
   }
   else if(typeof val === "string"){
     var number = parseInt(val);
     if(!isNaN(number) || number == 0){
      var value1 = claculate(number);
      return value1;
     }
     else if( isNaN(number)){
       var value = JSON.stringify(val);
     console.log(`'${value} is not a valid number but a/an ${typeof(val)}.'`);
     return `'${value} is not a valid number but a/an ${typeof(val)}.'`
     }
   }
   else if(Array.isArray(val)){
     console.log(`'[${val}] is not a valid number but a/an array.'`);
     return `'[${val}] is not a valid number but a/an array.'`}
   else{
     var value = JSON.stringify(val);
     console.log(`'${value} is not a valid number but a/an ${typeof(val)}.'`);
     return `'${value} is not a valid number but a/an ${typeof(val)}.'`;
   }
 };
 // function calculate
 function claculate(n){
     //1F = 1.8C + 32 (e.g 0deg C = 32deg F)
  var  answer = ((n - 32) / 1.8);
  var answerDec = parseFloat( answer.toFixed(4));
      console.log(`${answerDec}`);
      return `${answerDec}`
 }
 // testing
 convertFahrToCelsius(37);
 convertFahrToCelsius("");
 convertFahrToCelsius("0");
 convertFahrToCelsius([1,2,3,4]);
 convertFahrToCelsius({obj:1 , name: "sarah"});
 convertFahrToCelsius("bola");
 convertFahrToCelsius([]);
 convertFahrToCelsius(true);
 
 
 /*
 2. Write a function named "checkYuGiOh" that takes a number, n, 
 as an argument, creates an array of numbers from 1 to n and replaces factors 
 of 2, 3, and 5 with "yu", "gi" and "oh", logs the
  resulting array to the console then returns the resulting array.
 */
   
 function checkYuGiOh(n){
 
   if(!Number(n)){
     var content = JSON.stringify(n);
     console.log(`invalid parameter: ${content}`);
     return  `invalid parameter: ${content}`;
   }
   else{
     var arr = [];
     for(var i=1; i<= n; i++) {
     if(i % 2 === 0 && i % 3 === 0 && i % 5 === 0){
       arr.push("yu-gi-oh");
     }
     else if(i % 2 === 0 && i % 3 === 0 ){
       arr.push("yu-gi");
     }
     else if(i % 2 === 0 &&  i % 5 === 0){
       arr.push("yu-oh");
     }
     else if(i % 3 === 0 && i % 5 === 0){
       arr.push("gi-oh");
     }
     else if(i % 2 === 0 ){
       arr.push("yu");
     }
     else if( i % 3 === 0 ){
       arr.push("gi");
     }
     else if( i % 5 === 0){
       arr.push("oh");
     }
     else {arr.push(i)}
 }
   console.log(arr);
   return arr;
   }
 };
 //end of function checkyugioh
 
 checkYuGiOh(29);
 checkYuGiOh("29");
 checkYuGiOh( '/');
 checkYuGiOh("kenny");
 checkYuGiOh([1,2,3,4]);
 checkYuGiOh({name: "kenny", age: 26});