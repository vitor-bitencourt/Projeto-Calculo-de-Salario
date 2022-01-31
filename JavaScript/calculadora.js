function calculate() {

//variaveis
var horas =  document.getElementById("HT").value;
var valor_horas = document.getElementById("VH").value;
var dependentes = document.getElementById("ND").value;
var inss = 0;
var irrf = 0;
var salario = horas * valor_horas;
document.getElementById("SB").value = +salario;

//  CALCULO INSS

if (salario <= 1751.81){
	salario_1 = salario * 8 / 100;
	document.getElementById("VIS").value = +salario_1;
} else {
	if (salario > 1751.81 && salario <= 2919.72) {
		salario_1 = salario * 9 / 100;
		document.getElementById("VIS").value = +salario_1;
	} else {
		if(salario > 2919.72){
			salario_1 = salario * 11 / 100;
			document.getElementById("VIS").value = +salario_1;
			if (salario_1 > 642.34) {
				salario_1 = 642.34;
			}
		}
	}
}

//  CALCULO DE DEPENDENTES

dependentes_value = dependentes * 189,59;

//  CALCULO DO IRRF

salario_2 = salario - salario_1 - dependentes_value;

if (salario_2 >= 4664.68){
    var salario_2 = salario_2 - 4664.68;
  	var irrf = salario_2 * 27.5 / 100 - 205.57 - 138.66 - 69.20;
		document.getElementById("VIR").value = +irrf;
  }else{
  	if (salario_2 >= 3751.06){
      var salario_2 = salario_2 - 3751.05;
  			var irrf = salario_2 * 22.5 / 100 - 138.66 - 69.20 ;
				document.getElementById("VIR").value = +irrf;
  	}else{
  		if (salario_2 >= 2826.66){
        var salario_2 = salario_2 - 2826.66;
  			var irrf = salario_2 * 15 / 100 - 69.20;
				document.getElementById("VIR").value = +irrf;
  		}else{
  			if (salario_2 >= 1903.99){
          var salario_2 = salario_2 - 1903.99;
  				var irrf = salario_2 * 7.5 / 100;
					document.getElementById("VIR").value = +irrf;
  			}else{
  					var irrf = 0;
						document.getElementById("VIR").value = +irrf;
        }
      }
    }
  }
	salario_liquido = (salario - irrf - salario_1) ;
	document.getElementById("SL").value = +salario_liquido;
}
//PORCENTAGEM IRRF

if(salario_2 >= 4664.68){
	var irrf_p = 27.5;
	document.getElementById("PIR").value = +irrf_p;
}else{
	if (salario_2 >= 3751.06){
		var irrf_p = 22.5;
		document.getElementById("PIR").value = +irrf_p;
	}else{
		if (salario_2 >= 2826.66){
			var irrf_p = 15;
			document.getElementById("PIR").value = +irrf_p;
		}else{
			if (salario_2 >= 1903.99){
				var irrf_p = 7.5;
				document.getElementById("PIR").value = +irrf_p;
			}else{
				var irrf_p = 0;
				document.getElementById("PIR").value = +irrf_p;
			}
		}
	}
}

//PORCENTAGEM INSS

if (salario <= 1751.81){
	var inss_p = 8;
	document.getElementById("PIS").value = +inss_p;
}else{
	if (salario > 1751.81 && salario <= 2919.72){
		var inss_p = 9;
		document.getElementById("PIS").value = +inss_p;
	}else{
		if (salario > 2919.72){
			var inss_p = 11;
			document.getElementById("PIS").value = +inss_p;
		}

		}
	}