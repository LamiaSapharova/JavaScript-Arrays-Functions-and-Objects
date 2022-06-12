const func = function (x){
	return x>0;
}
function find(func,a){
	let result=[];
 for(let i=0; i!=a.length;i++){
 	if(func(a[i])){
 		return a[i];
 	}
 }
}
