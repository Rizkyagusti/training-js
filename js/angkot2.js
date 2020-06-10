var jmlAngkot=10;
angkotBeroperasi=7;
noAngkot=1;


tanya=confirm('hai juragan mau mengecek angkot anda hari ini ?');

if (tanya === true) {
	tanya2=prompt('Siapa nama juragan ?' );
	alert("halo juragan " + tanya2);
	alert("silahkan cek console untuk mengetahui kondisi angkot");


	while(noAngkot <= angkotBeroperasi){
		console.log("angkot no. " + noAngkot +" beroperasi dengan baik")
		noAngkot++;
	}

	for(noAngkot=angkotBeroperasi+1;noAngkot<=jmlAngkot;noAngkot++){

		console.log("angkot no. " + noAngkot + " tidak beroperasi")
	}

}

else{
	alert("oke deh,semoga hari ini berjalan dengan baik")
}