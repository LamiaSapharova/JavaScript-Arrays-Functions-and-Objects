function ceaserChipher(string,num){
	let arr=new Array ;
	for(let i=0; i<string.length;i++){
		let code =string.charCodeAt(i)+num;
		while(code>122){
			code=(code-122)+96;
		}
		arr.push(String.fromCharCode(code));
	}
	return arr.join('');
}