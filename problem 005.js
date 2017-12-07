function problem5(top){
	var num=top
	while (true){
		var find=true;
		for (var i=top;i>1;i--){
			if (num%i!==0){
				find=false
				break
			}
		}
	if (find===true){return num}
	num+=top;
	}
}
problem5(20)
