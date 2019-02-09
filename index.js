
/** --------------

        *
       **
      ***
     ****
    *****
   ******
  *******
 ********
*********


----------------*/

let str = "";

for(let i = 1; i < 10; i++ ){
    for(let j = 1; j < 10; j++){
        if(i + j >= 10){
            str = str.concat("*");
        }else{
            str = str.concat(" ")
        }
    }
    str = str.concat("\n")
}

console.log(str)


/**_______________________



*********
 ********
  *******
   ******
    *****
     ****
      ***
       **
        *


 _______________________*/

let str2 = "";

for(let i = 1; i < 10; i++ ){
    for(let j = 1; j < 10; j++){
        if(i <= j ){
            str2 = str2.concat("*");
        }else{
            str2 = str2.concat(" ")
        }
    }
    str2 = str2.concat("\n")
}

console.log(str2)


/**----------------------


*
**
***
****
*****
******
*******
********


 -------------------------*/


let str3 = "";

for(let i = 1; i < 10; i++ ){
    for(let j = 1; j < 10; j++){
        if(i >= j ){
            str3 = str3.concat("*");
        }
    }
    str3 = str3.concat("\n")
}

console.log(str3)

/**-------------------------


 *********
 ********
 *******
 ******
 *****
 ****
 ***
 **
 *

 ---------------------------*/
let str4 = "";

for(let i = 1; i < 10; i++ ){
    for(let j = 1; j < 10; j++){
        if( j >= i ){
            str4 = str4.concat("*");
        }
    }
    str4 = str4.concat("\n")
}

console.log(str4)
