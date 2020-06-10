// bismillah 
// Rules
kondisi1=true;
kondisi2=true;
kondisi3=true;
acakNomor=Math.floor(Math.random()*50)+1;

// say hello
let welcome=alert("Selamat datang di Toko kami");

while(kondisi2==true){

	while(kondisi3==true){
	welcome2=parseInt(prompt("Ada yang bisa kami bantu,kami meyediakan beberapa fasilitas \n1.Service Komputer \n2.Perlengkapan komputer \n3.Cd Player berbagai macam pembelajaran seputar teknologi\nPilih sesuai daftar nomor "));







// penentuan awal

switch(welcome2){
	case 1:
	barang="Service komputer";
	tanya1=confirm("Silahkan klik ok untuk melanjutkan");
	kondisi3=false;
	break;
	case 2:
	barang="Perlengkapan Komputer";
	tanya1=confirm("Silahkan klik ok untuk melanjutkan");
	kondisi3=false;
	break;

	case 3:
	while(kondisi1===true){
		pilihan=prompt("1.Cd Programming \n2.Cd Editing foto \n3.Cd Editing Video");

		if(pilihan==1){
			barang="Cd Programming";
			tanya1=confirm("Silahkan klik ok untuk melanjutkan");
			kondisi3=false;
			break;
		}else if(pilihan==2){
			barang="Cd Editing foto";
			tanya1=confirm("Silahkan klik ok untuk melanjutkan");
			kondisi3=false;
			break;
		}else if(pilihan==3){
			barang="Cd Editing Video";
			tanya1=confirm("Silahkan klik ok untuk melanjutkan");
			kondisi3=false;
			break;
		}else{
			alert("Ups !, nampaknya anda memasukan kata kunci yang salah");
			kondisi1=confirm("Ingin mencoba lagi ?");
		}

	}
	break;
	default:
	kondisi3=confirm("anda memasukan data yang salah")

}

}


// input
switch(tanya1){
	case true:
	nama=prompt("Silahkan masukan nama anda");
	tanya2=confirm("Halo " + nama + " dengan anda menekan tombol oke anda menyetujui barang yang anda pesan dan siap mengambil nomor antrian untuk penerimaan barang.jika kurang setuju anda dapat menekan tombol batal")
	if(tanya2 === true){
		document.getElementById("nama").innerHTML="Halo " + nama + " anda memesan " + barang + " dengan nomor antrian " + acakNomor ;
		document.getElementById("nama2").innerHTML="Silahkan Tunggu ^_^";
		break;	
	}else{
		alert("Sayang sekali padahal tinggal satu langkah,pembelian barang :(")
		break;
	}

	break;
	case false:
	alert("Maaf kalau fasilitas kami kurang memuaskan :(");
	break;
}







kondisi2=false;


}