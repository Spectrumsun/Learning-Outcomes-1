const words = (inputs) => {
	const input = inputs.toLowerCase();

	if(input.length <= 0){
		return  "empty string not allowed";
	}else {
		const divide = input.split(' ');
	const result = {};
	for(let i = 0; i < divide.length; i++) {
		if(!result[divide[i]]) {
	        result[divide[i]] = 0;
	    }
	    result[divide[i]]++;
	}
	return result;
}


	}


export default words	

/*
console.log(words(""))*/
	


