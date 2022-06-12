function flat2D(arr){
	let result= new Array;
	for(let i=0; i<arr.length;i++){
		for(let j=0; j<arr[i].length;j++){
				result.push(arr[i][j]);
		}
	}
	return result;
}