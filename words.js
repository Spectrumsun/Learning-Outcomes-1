const words = (input) => {

	if(input ===  'string'){
		return  "it should be string";
	}



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



	


export default words;