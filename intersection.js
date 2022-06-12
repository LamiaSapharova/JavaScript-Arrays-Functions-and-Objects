function intersection(a,b){
	let result=[];
	for(let i=0 ; i<a.length ; i++){
		for(let j=0 ; j<b.length ; j++){
			if(a[i]===b[j]){
				result.push(b[j]);
			}
		}
	} return result;

} 