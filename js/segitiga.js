var s="";

for(i =10;i>0;i--){
	for(j=1;j<=i;j++){
		s+=" ";
	}

	for(k=10;k>i;k--){
		s+="x";
	}
	for(l=11;l>i;l--){
		s+="x";
	}

	s+="\n";
}


console.log(s);
