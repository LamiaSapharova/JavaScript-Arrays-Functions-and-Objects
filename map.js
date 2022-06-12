const f= function (x){
	return x*x;
}
function map (f,a){
	let result = [];  
  for (let i = 0; i!=a.length; i++){
    result[i] = f(a[i]);
}
  return result;
}