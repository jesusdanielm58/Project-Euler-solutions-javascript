function nextPrime (primeList){
	var n=primeList[primeList.length-1]
	while(true){
		encontrado=true;
		n++;
		for (i=0;i<primeList.length;i++){
			if (n%primeList[i]===0){encontrado=false}
		}
		if (encontrado===true){return n}
	}
}
function problem8(){
	primeList=[2]
	for (i=0;i<10001;i++){
		primeList.push(nextPrime(primeList))
	}
	return primeList
}
problem8()
