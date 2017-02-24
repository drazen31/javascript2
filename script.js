
function sum (mojBroj) {
	
	var rezultat = 0;  
  for(var i = 1; i <= mojBroj; i++) {
  	rezultat = rezultat + i;
  }
  return rezultat;
}

function faktorijel (unesiBroj) {
	
	var rezultat = 1;  
  for(var i = 1; i <= unesiBroj; i++) {
  	rezultat = rezultat * i;
  }
  return rezultat;
}







var mojBroj = prompt("Unesite neki broj da biste dobili njegovu sumu i faktorijel?");
if (isNaN(mojBroj) == false) {
	var rezultat = sum(mojBroj);
	document.write("Suma broja " + mojBroj + " je broj " + rezultat + "<br>");

	var rezultat2 = faktorijel(mojBroj);
	document.write("Faktorijel broja " + mojBroj + " je broj " + rezultat2 + "<br>");
} 
else {
	alert("Molim vas ispravno unesite broj. Rifresujte stranicu!");
}














