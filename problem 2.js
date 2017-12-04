function problem2(){
	var total=0; a=0;b=1;c=0;
	while (true) {
		c=b+a;
		a=b;
		b=c;
		if (c>4000000) {
			break
		}
		else{
			if (c%2===0){total+=c}
		}	
	}
	return total
}
problem2();
