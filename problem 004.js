function isPalindrome(product){
	var product=(""+product).split("");
	var reversed=product.slice();
	reversed.reverse();
	product=product.join("");
	reversed=reversed.join("");
	if (product==reversed){
		return product
	}
	return false
}
isPalindrome( 913 * 993)
function problem4(){
	var max=0;
	for (var i=100;i<1000;i++){
		for (var j=100;j<1000;j++){
			if (isPalindrome(i*j) && max<i*j) {
					max=isPalindrome(i*j)
			}
		}
	}
	return max
}
problem4();
