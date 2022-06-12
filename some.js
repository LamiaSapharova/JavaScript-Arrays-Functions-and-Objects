const s= function (x){
	return x>0;
}
function some (s,a){  
  for (let i = 0; i!=a.length; i++){
    if(s(a[i])){	
    	return true ;
    }
}
 return false ;
} 