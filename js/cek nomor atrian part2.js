// bismillah 
// say hello
let welcome=alert("Selamat datang di Toko kami");
welcome2=parseInt(prompt("Ada yang bisa kami bantu,kami meyediakan beberapa fasilitas \n1.Service Komputer \n2.Perlengkapan komputer \n3.Cd Player berbagai mancam pembelajaran seputar teknologi \nPilih sesuai daftar nomor\n4.Batal "));



// Rules
kondisi1=true;

// penentuan awal
switch(welcome2){
	case 1:
	case 2:
	alert("Silahkan klik ok untuk mengisi nama dan mengambil nomor antrian");
	break;

	case 3:
	while(kondisi1===true){
		pilihan=prompt("1.Cd Programming \n2.Cd Editing foto \n3.Cd Editing Video");
	
		if(pilihan==1){
			alert("Silahkan klik ok untuk mengisi nama dan mengambil nomor antrian");
				break;
		}else if(pilihan==2){
			alert("Silahkan klik ok untuk mengisi nama dan mengambil nomor antrian");
				break;
		}else if(pilihan==3){
				alert("Silahkan klik ok untuk mengisi nama dan mengambil nomor antrian");
				break;
		}else{
			alert("Ups !, nampaknya anda memasukan kata kunci yang salah");
			kondisi1=confirm("Ingin mencoba lagi ?");
		}

	}
	break;

	case 4:
	alert("Terimakasih telah berkunjung,semoga harimu menyenangkan ^_^");break;
}


// input
nama=prompt("Silahkan Isi nama anda");