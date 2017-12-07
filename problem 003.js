/*Largest prime factor
The prime factors of 13195 are 5, 7, 13 and 29.

What is the largest prime factor of the number 600851475143 ?
*/
function prime (primo){
	var n=primo[primo.length-1]
	while(true){
		encontrado=true;
		n++;
		for (i=0;i<primo.length;i++){
			if (n%primo[i]===0){encontrado=false}
		}
		if (encontrado===true){return n}
	}
}
function lagestPrimeFactor(n) {
	var primo=[2]
	while(true){
		if (n%primo[primo.length-1]===0){
			n=n/primo[primo.length-1]
		}else{
			primo.push(prime(primo));
		}
		if (n<=primo[primo.length-1]){
			break 
		}
	}
	return n
}
lagestPrimeFactor(600851475143)
