function unique(){
	let result =[];
	for(i=0; i < arguments.length; i++){ 
            if(result.indexOf(arguments[i]) === -1) { 
                result.push(arguments[i]); 
            } 
        }
        return result;
    }
 

