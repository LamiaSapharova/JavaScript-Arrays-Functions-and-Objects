function reverse(x){
	let end = new Array;
	for(let i = x.length - 1; i>=0;i--){
	 end.push(x[i]);
	}
	return end;
}