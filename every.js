const e= function (x){
	return x>0;
}
function every(e,a){  
  for (let i = 0; i!=a.length; i++){
    if(!e(a[i])){	
    	return false ;
    }
}
 return true ;
} 