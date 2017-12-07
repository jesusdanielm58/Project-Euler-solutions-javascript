function problem6(top){
	var sqr1=0;sqr2=0;sum=0;
	for (var i=top;i>0;i--){
		sqr1+=i*i;
		sum+=i;
	}
	sqr2=sum*sum
	return sqr2-sqr1
}
problem6(100)
