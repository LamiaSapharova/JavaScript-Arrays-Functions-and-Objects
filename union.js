function union(a,b){
	let result = [];
	for(let i=0; i<a.length;i++){
		result.push(a[i]);
	}
	for(let i=0; i<b.length;i++){
		result.push(b[i]);
	}
	return result;
}