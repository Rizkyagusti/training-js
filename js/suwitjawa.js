// yang di pilih player
var i=true


while(i==true){
var player=prompt("pilih salah satu :gajah,semut,orang")

// yang dipilih bot
var bot=Math.random();

if(bot<0.30){
	bot="gajah";
}else if(bot>0.30 && bot< 0.67){
	bot="semut";
}else{
	bot="orang";
}



// penentuan

var hasil=''
// menentukan rules
if(player==bot){
	hasil="Seri !";
}
else if(player!==bot){

if(player=='gajah'){
	hasil=(bot=='orang')?"Menang !":"kalah !";
}else if(player=='semut'){
	hasil=(bot=='gajah')?'Menang !':'kalah !';
}else if(player=="orang"){
	hasil=(bot=="gajah")?"kalah !":"Menang !";
}else{
	hasil="anda memasukan pilihan yang salah !"
}

}

alert("player memilih "+player+" dan Bot memilih "+bot +" maka hasilnya.."+"\n"+"Klik oke untuk lanjut");
alert(hasil);

i=confirm("mau mengulanginya ?");

}

alert("terimakasih telah bermain !")