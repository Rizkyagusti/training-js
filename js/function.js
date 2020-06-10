// bismillah
function kaliDuaBilangan(a,b) {
	
	var kali
	kali=a+b;

	return kali;
}


function bagiDuaBilangan(a,b){
	
	var bagi;
	bagi=a/b;

	return bagi;
}



var jumlahDuaBilangan=function (a,b) {
	// body...
	var jumlah;
	jumlah=a+b;

	return jumlah;
}



var kurangDuaBilangan=function (a,b) {
	// body...
	var kurang;
	kurang=a-b;

	return kurang;
}



var ulang=true;
while(ulang==true){
tanya=parseInt(prompt("operator apa yang anda inginkan ?\n1.Penjumlahan\n2.Pengurangan\n3.Perkalian\n4.Pembagian\nMasukan input nomernya saja ^_^"));




if (tanya===1){
	
	console.log(jumlahDuaBilangan(parseInt(prompt("masukan bilangan pertama")),parseInt(prompt("masukan bilangan kedua"))));
	break;
}else if(tanya===2){
	console.log(kurangDuaBilangan(parseInt(prompt("masukan bilangan pertama")),parseInt(prompt("masukan bilangan kedua"))));
	break;
}else if(tanya===3){
	console.log(kaliDuaBilangan(parseInt(prompt("masukan bilangan pertama")),parseInt(prompt("masukan bilangan kedua"))));
	break;
}else if(tanya===4){
	console.log(bagiDuaBilangan(parseInt(prompt("masukan bilangan pertama")),parseInt(prompt("masukan bilangan kedua"))));
	break;
}else{
	alert("anda menginput data yang salah");
	console.log("Wrong Input");
	break;
}



ulang=confirm("ingin mengulanginya ?");
}









