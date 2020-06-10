var s="";

for(a=1;a<=10;a++){
	for(b=10;b>=a;b--){
		s+=" ";
	}

	for(c=1;c<=a;c++){
		s+="*";
	}

	for(d=2;d<=a;d++){
		s+="*";
	}


 	s+="\n";
}




for(i=1;i<=10;i++){

	for(j=1;j<=i;j++){
		s+=" ";
	}

	for(k=10;k>=i;k--){
		s+="*";
	}

	for(l=9;l>=i;l--){
		s+="*";
	}

	s+="\n";
}

console.log(s);