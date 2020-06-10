var jumlahAngkotSaya=12;
noAngkot=1;

alert('halo selamat datang,saya gusbot akan menemani anda');


juragan=prompt("silahkan masukan nama anda");
alert("selamat datang juragan " + juragan);

 
nanyaAngkot=confirm('mau cek angkot anda hari ini ?');




if (nanyaAngkot === true) {
	alert("silahkan cek console untuk mengetahuinya")

while(noAngkot <= jumlahAngkotSaya){
		console.log("Angkot No."+' '+noAngkot+' '+"beroperasi dengan baik")

	noAngkot++;
}

console.log('alhamdulillah angkot beroperasi dengan baik hari ini :D')

}


else{
	alert('oke juragan,semoga semua angkot beroperasi dengan baik')

while(noAngkot <= jumlahAngkotSaya){
		console.log("Angkot No."+' '+noAngkot+' '+"gagal beroperasi")

	noAngkot++;


}

console.log('ngeyel sih ngk mau ngecek kondisi angkot')

}