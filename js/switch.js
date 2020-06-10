alert('selamat datang di restoran kami :)');
var tanya=prompt("silahkan pilih pesanan yang sesuai di menu: \nmakanan:(Nasi jagal,Mie ayam banyuwangi,Bakso,ayam geprek)\nminuman:(softdrink,coca-cola ,sprite,air putih,teh)")


switch(tanya){
	case "Nasi jagal":
	case "Mie ayam":
	case "Bakso":
	case "ayam geprek":
		alert("anda memesan " + tanya);
		alert("silahkan selesaikan pembayaran ke kasir ,untuk mengambil makanan");
		console.log(tanya + " sedang di buat untuk anda,silahkan tunggu :)")
	break;

	case "softdrink":
	case "coca-cola":
	case "sprite":
		tanya2=confirm(tanya + " yang anda pesan adalah minuman yang kurang sehat,ingin melanjutkan ?");
		if(tanya2===false){
		alert("Bagus ! semoga anda diberi kesehatan");
			}
		else{
			alert("silahkan selesaikan pembayaran ke kasir ,untuk mengambil makanan");
			console.log(tanya + " sedang di buat untuk anda,silahkan tunggu :)")
		}
	break;


	case "air putih":
	case "teh":
		alert("anda memesan " + tanya);
		alert("silahkan selesaikan pembayaran ke kasir ,untuk mengambil makanan");
		console.log(tanya + " sedang di buat untuk anda,silahkan tunggu :)")
	break;

	default:
	alert("makanan / minuman yang anda pilih tidak tersedia :(");
	break;
}




