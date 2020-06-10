var welcome = alert('halo! silahkan login untuk mengecek status karyawan');
tanya1=true;

while(tanya1 === true){

tanya2 = prompt("Masukan nama anda");

if(tanya2 === 'rizky agusti' || tanya2==="rani dwi setiani"){
	alert("selamat datang " + tanya2)
	tanya3=confirm("silahkan cek konsole untuk mengetahui status Karyawan")
	tanya1=false;
}


else{

	alert("nama yang anda masukan salah !")
	tanya1=confirm("silahkan klik oke ,untuk mengisi nama yang benar")

}

}



if (tanya3 === true) {

jmlKaryawan=50;


for(Karyawan=1;Karyawan<=jmlKaryawan;Karyawan++){

	if(Karyawan<=35 && Karyawan!== 5){
		console.log("Karyawan No. " + Karyawan + " Sudah absen")
	}

	else if(Karyawan === 36 || Karyawan === 47 || Karyawan=== 41 || Karyawan===5){
		console.log("Karyawan No. " + Karyawan +" Hari ini lembur")
	}

	else{
		console.log("Karyawan No. " + Karyawan +" Alpa")
	}


}
}

else {
	alert("oke deh,semoga karyawan anda bekerja keras hari ini")
}



