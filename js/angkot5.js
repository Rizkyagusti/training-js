var jmlAngkot=10;
angkotBeroperasi=8;
noAngkot=1;

for(noAngkot;noAngkot<=jmlAngkot;noAngkot++){

	if(noAngkot <= 6){
		console.log("angkot No. " + noAngkot + " beroperasi dengan baik");
	}

	else if(noAngkot === 8 || noAngkot === 10){
		console.log("angkot No. " + noAngkot + " sedang lembur");
	}


	else {
		console.log("angkot No. " + noAngkot + " sedang tidak beroperasi");
	}


}