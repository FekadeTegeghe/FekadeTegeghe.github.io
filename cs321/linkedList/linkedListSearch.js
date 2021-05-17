"use strict";
function search(element){
    let current = header.next;
    while(current !== trailor){
        if(current.element().equals(element)){
            return true;
        }else{
            current = current.next;
        }
    }
}