"use strict";
function substrings (str1){
    let arr1 =[];
    for(let x = 0,y=1;x < str1.length;x++,y++){
    arr1[x]=str1.substring(x,y)
    }
    
    let combi= []
    let temp = ""
    let slent = Math.pow(2,arr1.length);
    for (let i = 0;i<slent;i++){
    temp = "";
    for(let j =0;j<arr1.length;j++){
    if((i &Math.pow(2,j))){
    temp +=arr1[j]
    }
    }
    if (temp !== ""){
    combi.push(temp)
    }
    }
    console.log(combi.join("\n"))
   }
    
   substrings("dog")