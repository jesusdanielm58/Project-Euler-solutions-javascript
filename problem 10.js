
function problem10(){
	var total=0;
	var primeList=prime(10)
	for (var i=0;i<primeList.length;i++){
		total+=primeList[i]
	}
	console.log(primeList)
	return total
}
//sieve of Eratosthenes algorithm
function prime(n){
	var arr=[];arr2=[];
	for (var i=0;i<n;i++){
		arr.push(1)
	}
	for (var i=2;i<n;i++){
		if(arr[i]){
			for (var j=i*i;j<n;j+=i){
				arr[j]=0;
			}
		}
	}
	for (var i=2;i<n;i++){
		if (arr[i]){arr2.push(i)}
	}
	return arr2
}
problem10()
