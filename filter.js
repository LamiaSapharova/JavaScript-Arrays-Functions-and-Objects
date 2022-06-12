const l= function (x){
	return x>3;
}
function filter (l,a){
	let j=0;
	let result = [];  
  for (let i = 0; i!=a.length; i++){
    if(l(a[i])){
    	result[j] = a[i];
    	j=j+1;
    }
}
  return result;
}