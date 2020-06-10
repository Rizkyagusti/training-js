var welcome=alert("Yuk kita cek ,termasuk bilangan apa angka yang anda masukan")
tanya=prompt("Masukan Nomor yang anda inginkan...")



if(tanya % 2 === 0){
	alert(tanya +" adalah bilangan genap");
}


else if(tanya % 2 === 1){
	alert(tanya + ' adalah bilangan ganjil')
}

else{
	alert('maaf :( kami belum bisa mengetahuinya')
}