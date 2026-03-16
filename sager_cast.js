/************************************************************************************
* 			eltiempo.selfip.com - Sager Weathercaster Algorhithm 					*
*   																				*
*				Copyright © 2008 Naish666 (eltiempo.selfip.com)						*
* 							October 2008 - v1.0										*
*************************************************************************************  										
*  		This program is free software: you can redistribute it and/or modify		*
*    it under the terms of the GNU General Public License as published by			*
*    the Free Software Foundation, either version 3 of the License, or				*
*    (at your option) any later version.											*
*																					*
*    This program is distributed in the hope that it will be useful,				*				
*    but WITHOUT ANY WARRANTY; without even the implied warranty of					*
*    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the					*
*    GNU General Public License for more details.									*
*																					*
*    You should have received a copy of the GNU General Public License              *
*    along with this program.  If not, see <http://www.gnu.org/licenses/>.          *
*																					*
*************************************************************************************/


// ----  variables ------------

// Usage:   forecast = sager_cast( z_wind, z_rumbo, z_hpa, z_trend, z_nubes);

// z_wind is English windrose cardinal eg. N, NNW, NW etc.
// z_rumbo is the whether the wind during the last 6 hours has changed its direction by approximately 45 degrees or more
// z_hpa is Sea Level Adjusted (Relative) barometer in hPa or mB
// z_trend There are five points for registering the behavior of your barometer for a period of about 6 hours prior to the forecast.


// You can translate the following Arrays to get the prediction on your languaje.

//Weather expected. First word of the code
var z_forecast = new Array("Fair. ", "Fair and warmer. ", "Fair and cooler. ", "Unsettled. ", "Unsettled and warmer. ", "Unsettled and cooler. ", "Increasing cloudiness or overcast followed by rain or showers. ", "Increasing cloudiness or overcast followed by rain or showers and warmer. ", "Showers. ", "Showers and warmer. ", "Showers and cooler. ", "Rain. ", "Rain and warmer. ", "Rain and turning cooler; then improvement likely in 24 hours. ", "Rain or showers followed by improvement (within 12 hours). ", "Rain or showers followed by improvement (within 12 hours) and becoming cooler. ", " Rain or showers followed by improvement early in period (within 6 hours). ", "Rain or showers followed by improvement early in period (within 6 hours) and becoming cooler. ", "Rain or showers followed by fair early in period (within 6 hours) and becoming cooler. ", "Unsettled followed by fair. ", "Unsettled followed by fair early in period (within 6 hours) and becoming cooler. "); 

//Wind Velocities. Second word of the code
var z_wind_velocities = new Array("Probably increasing.","Moderate to fresh (13-24 mph)","Strong (25-38 mph) (Strong winds may precede gales over open water)","Gale (39-54 mph)"," Dangerous gale (whole gale) (55-73 mph)","Hurricane (74 mph and above)"," Diminishing, or moderating somewhat if current winds are of fresh to strong velocity. ","No important change. Some tendency for slight increase in winds during day, diminishing in evening.");

//Wind Direction. The number of the code
var z_wind_direction = new Array("North or Northeast winds, ","Northeast or East winds,  ","East or Southeast winds, ","Southeast or South winds, ","South or Southwest winds, ","Southwest or West winds, ","West or Northwest winds, ","Northwest or North winds, ","Shifting (or variable) winds, ");




// ---- FUNCION PRINCIPAL --------------------------------------------------
function sager_cast( z_wind, z_rumbo, z_hpa, z_trend,  z_nubes) {
	
	z_output="Tiempo excepcional, "
	//Primera rueda: Direccion y rumbo del viento.
	//NORTE
	if(z_wind == "N" && z_rumbo =="BACKING"){
		z_output ="A";
	}else if(z_wind == "N" && z_rumbo =="STEADY"){
		z_output ="B";
	}else if(z_wind == "N" && z_rumbo =="VEERING"){
		z_output ="C";
	}
	//NORESTE
	if(z_wind == "NE" && z_rumbo =="BACKING"){
		z_output ="D";
	}else if(z_wind == "NE" && z_rumbo =="STEADY"){
		z_output ="E";
	}else if(z_wind == "NE" && z_rumbo =="VEERING"){
		z_output ="F";
	}
	//ESTE
	if(z_wind == "E" && z_rumbo =="BACKING"){
		z_output ="G";
	}else if(z_wind == "E" && z_rumbo =="STEADY"){
		z_output ="H";
	}else if(z_wind == "E" && z_rumbo =="VEERING"){
		z_output ="J";
	}
	//SURESTE
	if(z_wind == "SE" && z_rumbo =="BACKING"){
		z_output ="K";
	}else if(z_wind == "SE" && z_rumbo =="STEADY"){
		z_output ="L";
	}else if(z_wind == "SE" && z_rumbo =="VEERING"){
		z_output ="M";
	}
	//SUR
	if(z_wind == "S" && z_rumbo =="BACKING"){
		z_output ="N";
	}else if(z_wind == "S" && z_rumbo =="STEADY"){
		z_output ="O";
	}else if(z_wind == "S" && z_rumbo =="VEERING"){
		z_output ="P";
	}
	//SUROESTE
	if(z_wind == "SW" && z_rumbo =="BACKING"){
		z_output ="Q";
	}else if(z_wind == "SW" && z_rumbo =="STEADY"){
		z_output ="R";
	}else if(z_wind == "SW" && z_rumbo =="VEERING"){
		z_output ="S";
	}
	//OESTE
	if(z_wind == "W" && z_rumbo =="BACKING"){
		z_output ="T";
	}else if(z_wind == "W" && z_rumbo =="STEADY"){
		z_output ="U";
	}else if(z_wind == "W" && z_rumbo =="VEERING"){
		z_output ="V";
	}
	//NOROESTE
	if(z_wind == "NW" && z_rumbo =="BACKING"){
		z_output ="W";
	}else if(z_wind == "NW" && z_rumbo =="STEADY"){
		z_output ="X";
	}else if(z_wind == "NW" && z_rumbo =="VEERING"){
		z_output ="Y";
	}
	
	//VIENTO EN CALMA
	
	if(z_wind == "calm"){
		z_output ="Z";
	}
	
	
	//2ª Rueda: Presion. La tenemos en la variable z_hpa del archivo HTML.
	
	//3ª Rueda: tendencia de la presion. Lo tenemos en la variable z_trend del archivo HTML.
	
	//4ª Rueda: Estado del cielo: Lo tenemos en la variable z_nubes del archivo HTML.
	
	
	//Ahora viene lo gordo, las equivalencias
	/////////////////////////////////////////////
	//Intento de simplificacion
	//////////////////////////////////

	//Prediccion del Tiempo
	// (Primera letra)
	A = z_forecast[0];
	B = z_forecast[1];
	C = z_forecast[2];
	D = z_forecast[3];
	E = z_forecast[4];
	F = z_forecast[5];
	G = z_forecast[6];
	H = z_forecast[7];
	J = z_forecast[8];
	K = z_forecast[9];
	L = z_forecast[10];
	M = z_forecast[11];
	N = z_forecast[12];
	P = z_forecast[13];
	R = z_forecast[14];
	S = z_forecast[15];
	T = z_forecast[16];
	U = z_forecast[17];
	W = z_forecast[18];
	X = z_forecast[19];
	Y = z_forecast[20];

	//Velocidad del Viento
	// (segunda letra)
	NN = z_wind_velocities[0];
	FF = z_wind_velocities[1];
	SS = z_wind_velocities[2];
	GG = z_wind_velocities[3];
	WW = z_wind_velocities[4];
	HH = z_wind_velocities[5];
	DD = z_wind_velocities[6];
	UU = z_wind_velocities[7];
	
		
	// Direccion del Viento
	// (Numeros)
	// No hace falta, se corresponden con los indices del array z_wind_direction
	
	
	//Aqui viene el tocho...
	
	//LETRA A
	if(z_output == "A"){
		if(z_hpa == 1){//A1xx Primer numero, presion atmosferica
			if(z_trend == 1){//A11x Segundo numero, tendencia de la presion
				if(z_nubes == 1){//A111
				z_output = C + z_wind_direction[8-1] + UU;
				}else if(z_nubes == 2){//A112
					z_output = C + z_wind_direction[8-1] + UU;
				}else if(z_nubes == 3){//A113
					z_output = C + z_wind_direction[8-1] + UU;
				}else if(z_nubes == 4){//A114
					z_output = C + z_wind_direction[8-1] + UU;
				}else if(z_nubes == 5){//A115
					z_output = W + z_wind_direction[8-1] + UU;
				}
			}else if(z_trend == 2){//A12x
				if(z_nubes == 1){//A121
					z_output = A + z_wind_direction[8-1] + UU;
				}else if(z_nubes == 2){//A122
					z_output = A + z_wind_direction[8-1] + UU;
				}else if(z_nubes == 3){//A123
					z_output = A + z_wind_direction[8-1] + UU;
				}else if(z_nubes == 4){//A124
					z_output = A + z_wind_direction[8-1] + UU;
				}else if(z_nubes == 5){//A125
					z_output = T + z_wind_direction[8-1] + UU;
				}
			}else if(z_trend == 3){//A13x
				if(z_nubes == 1){//A131
					z_output = A + z_wind_direction[8-1] + DD;
				}else if(z_nubes == 2){//A132
					z_output = A + z_wind_direction[8-1] + DD;
				}else if(z_nubes == 3){//A133
					z_output = A + z_wind_direction[8-1] + DD;
				}else if(z_nubes == 4){//A134
					z_output = X + z_wind_direction[8-1] + DD;
				}else if(z_nubes == 5){//A135
					z_output = R + z_wind_direction[8-1] + DD;
				}
			}else if(z_trend == 4){//14x
				if(z_nubes == 1){//141
					z_output = A + z_wind_direction[8-1] + UU;
				}else if(z_nubes == 2){//A142
					z_output = A + z_wind_direction[8-1] + UU;
				}else if(z_nubes == 3){//A143
					z_output = X + z_wind_direction[8-1] + UU;
				}else if(z_nubes == 4){//A144
					z_output = D + z_wind_direction[8-1] + UU;
				}else if(z_nubes == 5){//A145
					z_output = R + z_wind_direction[8-1] + UU;
				}
			}else if(z_trend == 5){//15x
				if(z_nubes == 1){//151
					z_output = G + z_wind_direction[8-1] + NN;
				}else if(z_nubes == 2){//A152
					z_output = G + z_wind_direction[8-1] + NN;
				}else if(z_nubes == 3){//A153
					z_output = G + z_wind_direction[8-1] + NN;
				}else if(z_nubes == 4){//A154
					z_output = G + z_wind_direction[8-1] + NN;
				}else if(z_nubes == 5){//A155
					z_output = J + z_wind_direction[8-1] + NN;
				}
		
				
			}//Fin segundo numero
		}else if(z_hpa == 2){//A2xx
			if(z_trend == 1){//A21x Segundo numero, tendencia de la presion
				if(z_nubes == 1){//A211
					z_output = C + z_wind_direction[8-1] + UU;
				}else if(z_nubes == 2){//A212
					z_output = C + z_wind_direction[8-1] + UU;
				}else if(z_nubes == 3){//A213
					z_output = C + z_wind_direction[8-1] + UU;
				}else if(z_nubes == 4){//A214
					z_output = C + z_wind_direction[8-1] + UU;
				}else if(z_nubes == 5){//A215
					z_output = W + z_wind_direction[8-1] + UU;
				}
			}else if(z_trend == 2){//A22x
				if(z_nubes == 1){//A221
					z_output = A + z_wind_direction[8-1] + UU;
				}else if(z_nubes == 2){//A222
					z_output = A + z_wind_direction[8-1] + UU;
				}else if(z_nubes == 3){//A223
					z_output = A + z_wind_direction[8-1] + UU;
				}else if(z_nubes == 4){//A224
					z_output = A + z_wind_direction[8-1] + UU;
				}else if(z_nubes == 5){//A225
					z_output = T + z_wind_direction[8-1] + UU;
				}
			}else if(z_trend == 3){//A23x
				if(z_nubes == 1){//A231
					z_output = A + z_wind_direction[8-1] + UU;
				}else if(z_nubes == 2){//A232
					z_output = A + z_wind_direction[8-1] + UU;
				}else if(z_nubes == 3){//A233
					z_output = A + z_wind_direction[8-1] + UU;
				}else if(z_nubes == 4){//A234
					z_output = X + z_wind_direction[8-1] + UU;
				}else if(z_nubes == 5){//A235
					z_output = R + z_wind_direction[8-1] + UU;
				}
			}else if(z_trend == 4){//A24x
				if(z_nubes == 1){//A241
					z_output = A + z_wind_direction[8-1] + UU;
				}else if(z_nubes == 2){//A242
					z_output = A + z_wind_direction[8-1] + UU;
				}else if(z_nubes == 3){//A243
					z_output = X + z_wind_direction[8-1] + UU;
				}else if(z_nubes == 4){//A244
					z_output = D + z_wind_direction[8-1] + UU;
				}else if(z_nubes == 5){//A245
					z_output = R + z_wind_direction[8-1] + UU;
				}
			}else if(z_trend == 5){//A25x
				if(z_nubes == 1){//A251
					z_output = G + z_wind_direction[8-1] + NN;
				}else if(z_nubes == 2){//A252
					z_output = G + z_wind_direction[8-1] + NN;
				}else if(z_nubes == 3){//A253
					z_output = G + z_wind_direction[8-1] + NN;
				}else if(z_nubes == 4){//A254
					z_output = G + z_wind_direction[8-1] + NN;
				}else if(z_nubes == 5){//A255
					z_output = J + z_wind_direction[8-1] + NN;
				}
			}//Fin segundo numero
			
		}else if(z_hpa == 3){//A3xx
			if(z_trend == 1){//A31x Segundo numero, tendencia de la presion
				if(z_nubes == 1){//A311
					z_output = C + z_wind_direction[8-1] + FF;
				}else if(z_nubes == 2){//A312
					z_output = C + z_wind_direction[8-1] + FF;
				}else if(z_nubes == 3){//A313
					z_output = C + z_wind_direction[8-1] + FF;
				}else if(z_nubes == 4){//A314
					z_output = C + z_wind_direction[8-1] + FF;
				}else if(z_nubes == 5){//A315
					z_output = W + z_wind_direction[8-1] + FF;
				}
			}else if(z_trend == 2){//A32x
				if(z_nubes == 1){//A321
					z_output = C + z_wind_direction[8-1] + UU;
				}else if(z_nubes == 2){//A322
					z_output = C + z_wind_direction[8-1] + UU;
				}else if(z_nubes == 3){//A323
					z_output = C + z_wind_direction[8-1] + UU;
				}else if(z_nubes == 4){//A324
					z_output = C + z_wind_direction[8-1] + UU;
				}else if(z_nubes == 5){//A325
					z_output = U + z_wind_direction[8-1] + UU;
				}
			}else if(z_trend == 3){//A33x
				if(z_nubes == 1){//A331
					z_output = A + z_wind_direction[8-1] + UU;
				}else if(z_nubes == 2){//A332
					z_output = A + z_wind_direction[8-1] + UU;
				}else if(z_nubes == 3){//A333
					z_output = A + z_wind_direction[8-1] + UU;
				}else if(z_nubes == 4){//A334
					z_output = X + z_wind_direction[8-1] + UU;
				}else if(z_nubes == 5){//A335
					z_output = R + z_wind_direction[8-1] + UU;
				}
			}else if(z_trend == 4){//A34x
				if(z_nubes == 1){//A341
					z_output = A + z_wind_direction[8-1] + UU;
				}else if(z_nubes == 2){//A342
					z_output = A + z_wind_direction[8-1] + UU;
				}else if(z_nubes == 3){//A343
					z_output = X + z_wind_direction[8-1] + UU;
				}else if(z_nubes == 4){//A344
					z_output = D + z_wind_direction[8-1] + UU;
				}else if(z_nubes == 5){//A345
					z_output = R + z_wind_direction[8-1] + UU;
				}
			}else if(z_trend == 5){//A35x
				if(z_nubes == 1){//A351
					z_output = G + z_wind_direction[8-1] + NN;
				}else if(z_nubes == 2){//A352
					z_output = G + z_wind_direction[8-1] + NN;
				}else if(z_nubes == 3){//A353
					z_output = G + z_wind_direction[8-1] + NN;
				}else if(z_nubes == 4){//A354
					z_output = G + z_wind_direction[8-1] + NN;
				}else if(z_nubes == 5){//A355
					z_output = J + z_wind_direction[8-1] + NN;
				}
			}//Fin segundo numero
		}else if(z_hpa == 4){//A4xx
			if(z_trend == 1){//A41x Segundo numero, tendencia de la presion
				if(z_nubes == 1){//A411
					z_output = C + z_wind_direction[8-1] + FF;
				}else if(z_nubes == 2){//A412
					z_output = C + z_wind_direction[8-1] + FF;
				}else if(z_nubes == 3){//A413
					z_output = C + z_wind_direction[8-1] + FF;
				}else if(z_nubes == 4){//A414
					z_output = C + z_wind_direction[8-1] + FF;
				}else if(z_nubes == 5){//A415
					z_output = U + z_wind_direction[8-1] + FF;
				}
			}else if(z_trend == 2){//A42x
				if(z_nubes == 1){//A421
					z_output = C + z_wind_direction[8-1] + UU;
				}else if(z_nubes == 2){//A422
					z_output = C + z_wind_direction[8-1] + UU;
				}else if(z_nubes == 3){//A423
					z_output = C + z_wind_direction[8-1] + UU;
				}else if(z_nubes == 4){//A424
					z_output = C + z_wind_direction[8-1] + UU;
				}else if(z_nubes == 5){//A425
					z_output = U + z_wind_direction[8-1] + UU;
				}
			}else if(z_trend == 3){//A43x
				if(z_nubes == 1){//A431
					z_output = A + z_wind_direction[8-1] + FF;
				}else if(z_nubes == 2){//A432
					z_output = A + z_wind_direction[8-1] + FF;
				}else if(z_nubes == 3){//A433
					z_output = A + z_wind_direction[8-1] + FF;
				}else if(z_nubes == 4){//A434
					z_output = X + z_wind_direction[8-1] + FF;
				}else if(z_nubes == 5){//A435
					z_output = R + z_wind_direction[8-1] + FF;
				}
			}else if(z_trend == 4){//A44x
				if(z_nubes == 1){//A441
					z_output = A + z_wind_direction[8-1] + FF;
				}else if(z_nubes == 2){//A442
					z_output = X + z_wind_direction[8-1] + FF;
				}else if(z_nubes == 3){//A443
					z_output = X + z_wind_direction[8-1] + FF;
				}else if(z_nubes == 4){//A444
					z_output = D + z_wind_direction[8-1] + FF;
				}else if(z_nubes == 5){//A445
					z_output = R + z_wind_direction[8-1] + FF;
				}
			}else if(z_trend == 5){//A45x
				if(z_nubes == 1){//A451
					z_output = J + z_wind_direction[8-1] + NN;
				}else if(z_nubes == 2){//A452
					z_output = J + z_wind_direction[8-1] + NN;
				}else if(z_nubes == 3){//A453
					z_output = L + z_wind_direction[8-1] + NN;
				}else if(z_nubes == 4){//A454
					z_output = L + z_wind_direction[8-1] + NN;
				}else if(z_nubes == 5){//A455
					z_output = L + z_wind_direction[8-1] + NN;
				}
			}//Fin segundo numero
		}else if(z_hpa == 5){//A5xx
			if(z_trend == 1){//A51x Segundo numero, tendencia de la presion
				if(z_nubes == 1){//A511
					z_output = C + z_wind_direction[8-1] + SS;
				}else if(z_nubes == 2){//A512
					z_output = C + z_wind_direction[8-1] + SS;
				}else if(z_nubes == 3){//A513
					z_output = C + z_wind_direction[8-1] + SS;
				}else if(z_nubes == 4){//A514
					z_output = Y + z_wind_direction[8-1] + SS;
				}else if(z_nubes == 5){//A515
					z_output = U + z_wind_direction[8-1] + SS;
				}
			}else if(z_trend == 2){//A52x
				if(z_nubes == 1){//A521
					z_output = C + z_wind_direction[8-1] + FF;
				}else if(z_nubes == 2){//A522
					z_output = C + z_wind_direction[8-1] + FF;
				}else if(z_nubes == 3){//A523
					z_output = C + z_wind_direction[8-1] + FF;
				}else if(z_nubes == 4){//A524
					z_output = F + z_wind_direction[8-1] + FF;
				}else if(z_nubes == 5){//A525
					z_output = S + z_wind_direction[8-1] + FF;
				}
			}else if(z_trend == 3){//A53x
				if(z_nubes == 1){//A531
					z_output = C + z_wind_direction[8-1] + FF;
				}else if(z_nubes == 2){//A532
					z_output = C + z_wind_direction[8-1] + FF;
				}else if(z_nubes == 3){//A533
					z_output = Y + z_wind_direction[8-1] + FF;
				}else if(z_nubes == 4){//A534
					z_output = F + z_wind_direction[8-1] + FF;
				}else if(z_nubes == 5){//A535
					z_output = S + z_wind_direction[8-1] + FF;
				}
			}else if(z_trend == 4){//A54x
				if(z_nubes == 1){//A541
					z_output = F + z_wind_direction[8-1] + SS;
				}else if(z_nubes == 2){//A542
					z_output = F + z_wind_direction[8-1] + SS;
				}else if(z_nubes == 3){//A543
					z_output = F + z_wind_direction[8-1] + SS;
				}else if(z_nubes == 4){//A544
					z_output = S + z_wind_direction[8-1] + SS;
				}else if(z_nubes == 5){//A545
					z_output = S + z_wind_direction[8-1] + SS;
				}
			}else if(z_trend == 5){//A55x
				if(z_nubes == 1){//A551
					z_output = L + z_wind_direction[8-1] + SS;
				}else if(z_nubes == 2){//A552
					z_output = L + z_wind_direction[8-1] + SS;
				}else if(z_nubes == 3){//A553
					z_output = L + z_wind_direction[8-1] + SS;
				}else if(z_nubes == 4){//A554
					z_output = L + z_wind_direction[8-1] + SS;
				}else if(z_nubes == 5){//A555
					z_output = L + z_wind_direction[8-1] + SS;
				}
			}//Fin segundo numero
		}else if(z_hpa == 6){//A6xx
			if(z_trend == 1){//A61x Segundo numero, tendencia de la presion
				if(z_nubes == 1){//A611
					z_output = C + z_wind_direction[8-1] + SS;
				}else if(z_nubes == 2){//A612
					z_output = C + z_wind_direction[8-1] + SS;
				}else if(z_nubes == 3){//A613
					z_output = C + z_wind_direction[8-1] + SS;
				}else if(z_nubes == 4){//A614
					z_output = F + z_wind_direction[8-1] + SS;
				}else if(z_nubes == 5){//A615
					z_output = S + z_wind_direction[8-1] + SS;
				}
			}else if(z_trend == 2){//A62x
				if(z_nubes == 1){//A621
					z_output = C + z_wind_direction[8-1] + SS;
				}else if(z_nubes == 2){//A622
					z_output = C + z_wind_direction[8-1] + SS;
				}else if(z_nubes == 3){//A623
					z_output = F + z_wind_direction[8-1] + SS;
				}else if(z_nubes == 4){//A624
					z_output = F + z_wind_direction[8-1] + SS;
				}else if(z_nubes == 5){//A625
					z_output = S + z_wind_direction[8-1] + SS;
				}
			}else if(z_trend == 3){//A63x
				if(z_nubes == 1){//A631
					z_output = C + z_wind_direction[8-1] + SS;
				}else if(z_nubes == 2){//A632
					z_output = F + z_wind_direction[8-1] + SS;
				}else if(z_nubes == 3){//A633
					z_output = F + z_wind_direction[8-1] + SS;
				}else if(z_nubes == 4){//A634
					z_output = F + z_wind_direction[8-1] + SS;
				}else if(z_nubes == 5){//A635
					z_output = S + z_wind_direction[8-1] + FF;
				}
			}else if(z_trend == 4){//A64x
				if(z_nubes == 1){//A641
					z_output = F + z_wind_direction[8-1] + SS;
				}else if(z_nubes == 2){//A642
					z_output = S + z_wind_direction[8-1] + SS;
				}else if(z_nubes == 3){//A643
					z_output = S + z_wind_direction[8-1] + SS;
				}else if(z_nubes == 4){//A644
					z_output = S + z_wind_direction[8-1] + SS;
				}else if(z_nubes == 5){//A645
					z_output = S + z_wind_direction[8-1] + SS;
				}
			}else if(z_trend == 5){//A65x
				if(z_nubes == 1){//A651
					z_output = L + z_wind_direction[8-1] + SS;
				}else if(z_nubes == 2){//A652
					z_output = L + z_wind_direction[8-1] + SS;
				}else if(z_nubes == 3){//A653
					z_output = L + z_wind_direction[8-1] + SS;
				}else if(z_nubes == 4){//A654
					z_output = L + z_wind_direction[8-1] + SS;
				}else if(z_nubes == 5){//A655
					z_output = L + z_wind_direction[8-1] + SS;
				}
			}//Fin segundo numero
		}else if(z_hpa == 7){//A7xx
			if(z_trend == 1){//A71x Segundo numero, tendencia de la presion
				if(z_nubes == 1){//A711
					z_output = C + z_wind_direction[8-1] + GG;
				}else if(z_nubes == 2){//A712
					z_output = C + z_wind_direction[8-1] + GG;
				}else if(z_nubes == 3){//A713
					z_output = F + z_wind_direction[8-1] + GG;
				}else if(z_nubes == 4){//A714
					z_output = F + z_wind_direction[8-1] + GG;
				}else if(z_nubes == 5){//A715
					z_output = S + z_wind_direction[8-1] + GG;
				}
			}else if(z_trend == 2){//A72x
				if(z_nubes == 1){//A721
					z_output = C + z_wind_direction[8-1] + GG;
				}else if(z_nubes == 2){//A722
					z_output = F + z_wind_direction[8-1] + GG;
				}else if(z_nubes == 3){//A723
					z_output = F + z_wind_direction[8-1] + GG;
				}else if(z_nubes == 4){//A724
					z_output = S + z_wind_direction[8-1] + GG;
				}else if(z_nubes == 5){//A725
					z_output = S + z_wind_direction[8-1] + GG;
				}
			}else if(z_trend == 3){//A73x
			if(z_nubes == 1){//A731
					z_output = F + z_wind_direction[8-1] + GG;
				}else if(z_nubes == 2){//A732
					z_output = F + z_wind_direction[8-1] + GG;
				}else if(z_nubes == 3){//A733
					z_output = S + z_wind_direction[8-1] + GG;
				}else if(z_nubes == 4){//A734
					z_output = S + z_wind_direction[8-1] + GG;
				}else if(z_nubes == 5){//A735
					z_output = S + z_wind_direction[8-1] + GG;
				}
			}else if(z_trend == 4){//A74x
				if(z_nubes == 1){//A741
					z_output = S + z_wind_direction[8-1] + GG;
				}else if(z_nubes == 2){//A742
					z_output = S + z_wind_direction[8-1] + GG;
				}else if(z_nubes == 3){//A743
					z_output = S + z_wind_direction[8-1] + GG;
				}else if(z_nubes == 4){//A744
					z_output = S + z_wind_direction[8-1] + GG;
				}else if(z_nubes == 5){//A745
					z_output = S + z_wind_direction[8-1] + GG;
				}
			}else if(z_trend == 5){//A75x
				if(z_nubes == 1){//A751
					z_output = S + z_wind_direction[8-1] + GG;
				}else if(z_nubes == 2){//A752
					z_output = S + z_wind_direction[8-1] + GG;
				}else if(z_nubes == 3){//A753
					z_output = S + z_wind_direction[8-1] + GG;
				}else if(z_nubes == 4){//A754
					z_output = S + z_wind_direction[8-1] + GG;
				}else if(z_nubes == 5){//A755
					z_output = S + z_wind_direction[8-1] + GG;
				}
			}//Fin segundo numero
		}else if (z_hpa == 8) {//A8xx
			if(z_trend == 1){//A81x Segundo numero, tendencia de la presion
				if(z_nubes == 1){//A811
					z_output = F + z_wind_direction[8-1] + WW;
				}else if(z_nubes == 2){//A812
					z_output = F + z_wind_direction[8-1] + WW;
				}else if(z_nubes == 3){//A813
					z_output = F + z_wind_direction[8-1] + WW;
				}else if(z_nubes == 4){//A814
					z_output = S + z_wind_direction[8-1] + WW;
				}else if(z_nubes == 5){//A815
					z_output = S + z_wind_direction[8-1] + WW;
				}
			}else if(z_trend == 2){//A82x
				if(z_nubes == 1){//A821
					z_output = F + z_wind_direction[8-1] + WW;
				}else if(z_nubes == 2){//A822
					z_output = F + z_wind_direction[8-1] + WW;
				}else if(z_nubes == 3){//A823
					z_output = S + z_wind_direction[8-1] + WW;
				}else if(z_nubes == 4){//A824
					z_output = S + z_wind_direction[8-1] + WW;
				}else if(z_nubes == 5){//A825
					z_output = S + z_wind_direction[8-1] + WW;
				}
			}else if(z_trend == 3){//A83x
			if(z_nubes == 1){//A831
					z_output = S + z_wind_direction[8-1] + WW;
				}else if(z_nubes == 2){//A832
					z_output = S + z_wind_direction[8-1] + WW;
				}else if(z_nubes == 3){//A833
					z_output = S + z_wind_direction[8-1] + WW;
				}else if(z_nubes == 4){//A834
					z_output = S + z_wind_direction[8-1] + WW;
				}else if(z_nubes == 5){//A835
					z_output = S + z_wind_direction[8-1] + WW;
				}
			}else if(z_trend == 4){//A84x
				if(z_nubes == 1){//A841
					z_output = S + z_wind_direction[8-1] + WW;
				}else if(z_nubes == 2){//A842
					z_output = S + z_wind_direction[8-1] + WW;
				}else if(z_nubes == 3){//A843
					z_output = S + z_wind_direction[8-1] + WW;
				}else if(z_nubes == 4){//A844
					z_output = S + z_wind_direction[8-1] + WW;
				}else if(z_nubes == 5){//A845
					z_output = S + z_wind_direction[8-1] + WW;
				}
			}else if(z_trend == 5){//A85x
				if(z_nubes == 1){//A851
					z_output = S + z_wind_direction[8-1] + WW;
				}else if(z_nubes == 2){//A852
					z_output = S + z_wind_direction[8-1] + WW;
				}else if(z_nubes == 3){//A853
					z_output = S + z_wind_direction[8-1] + WW;
				}else if(z_nubes == 4){//A854
					z_output = S + z_wind_direction[8-1] + WW;
				}else if(z_nubes == 5){//A855
					z_output = S + z_wind_direction[8-1] + WW;
				}
			}//Fin segundo numero
		}//Fin primer numero
			
	}//Fin letra A
	
	////////////////////////////////////////////////////////////////////////////////////
	
	//LETRA B
	if(z_output == "B"){
		if(z_hpa == 1){//B1xx Primer numero, presion atmosferica
			if(z_trend == 1){//B11x Segundo numero, tendencia de la presion
				if(z_nubes == 1){//B111
				z_output = C + z_wind_direction[8-1] + DD;
				}else if(z_nubes == 2){//B112
					z_output = A + z_wind_direction[8-1] + DD;
				}else if(z_nubes == 3){//B113
					z_output = A + z_wind_direction[8-1] + DD;
				}else if(z_nubes == 4){//B114
					z_output = A + z_wind_direction[8-1] + DD;
				}else if(z_nubes == 5){//B115
					z_output = W + z_wind_direction[8-1] + DD;
				}
			}else if(z_trend == 2){//B12x
				if(z_nubes == 1){//B121
					z_output = A + z_wind_direction[8-1] + DD;
				}else if(z_nubes == 2){//B122
					z_output = A + z_wind_direction[8-1] + DD;
				}else if(z_nubes == 3){//B123
					z_output = A + z_wind_direction[8-1] + DD;
				}else if(z_nubes == 4){//B124
					z_output = A + z_wind_direction[8-1] + DD;
				}else if(z_nubes == 5){//B125
					z_output = T + z_wind_direction[8-1] + DD;
				}
			}else if(z_trend == 3){//B13x
				if(z_nubes == 1){//B131
					z_output = A + z_wind_direction[1-1] + DD;
				}else if(z_nubes == 2){//B132
					z_output = A + z_wind_direction[1-1] + DD;
				}else if(z_nubes == 3){//B133
					z_output = A + z_wind_direction[1-1] + DD;
				}else if(z_nubes == 4){//B134
					z_output = X + z_wind_direction[1-1] + DD;
				}else if(z_nubes == 5){//B135
					z_output = R + z_wind_direction[1-1] + DD;
				}
			}else if(z_trend == 4){//14x
				if(z_nubes == 1){//141
					z_output = A + z_wind_direction[1-1] + UU;
				}else if(z_nubes == 2){//B142
					z_output = D + z_wind_direction[1-1] + UU;
				}else if(z_nubes == 3){//B143
					z_output = G + z_wind_direction[1-1] + UU;
				}else if(z_nubes == 4){//B144
					z_output = G + z_wind_direction[1-1] + UU;
				}else if(z_nubes == 5){//B145
					z_output = J + z_wind_direction[1-1] + UU;
				}
			}else if(z_trend == 5){//15x
				if(z_nubes == 1){//151
					z_output = G + z_wind_direction[1-1] + NN;
				}else if(z_nubes == 2){//B152
					z_output = G + z_wind_direction[1-1] + NN;
				}else if(z_nubes == 3){//B153
					z_output = G + z_wind_direction[1-1] + NN;
				}else if(z_nubes == 4){//B154
					z_output = G + z_wind_direction[1-1] + NN;
				}else if(z_nubes == 5){//B155
					z_output = M + z_wind_direction[1-1] + NN;
				}
		
				
			}//Fin segundo numero
		}else if(z_hpa == 2){//B2xx
			if(z_trend == 1){//B21x Segundo numero, tendencia de la presion
				if(z_nubes == 1){//B211
					z_output = C + z_wind_direction[8-1] + UU;
				}else if(z_nubes == 2){//B212
					z_output = C + z_wind_direction[8-1] + UU;
				}else if(z_nubes == 3){//B213
					z_output = C + z_wind_direction[8-1] + UU;
				}else if(z_nubes == 4){//B214
					z_output = C + z_wind_direction[8-1] + UU;
				}else if(z_nubes == 5){//B215
					z_output = W + z_wind_direction[8-1] + UU;
				}
			}else if(z_trend == 2){//B22x
				if(z_nubes == 1){//B221
					z_output = C + z_wind_direction[8-1] + DD;
				}else if(z_nubes == 2){//B222
					z_output = C + z_wind_direction[8-1] + DD;
				}else if(z_nubes == 3){//B223
					z_output = C + z_wind_direction[8-1] + DD;
				}else if(z_nubes == 4){//B224
					z_output = C + z_wind_direction[8-1] + DD;
				}else if(z_nubes == 5){//B225
					z_output = U + z_wind_direction[8-1] + DD;
				}
			}else if(z_trend == 3){//B23x
				if(z_nubes == 1){//B231
					z_output = A + z_wind_direction[1-1] + DD;
				}else if(z_nubes == 2){//B232
					z_output = A + z_wind_direction[1-1] + DD;
				}else if(z_nubes == 3){//B233
					z_output = A + z_wind_direction[1-1] + DD;
				}else if(z_nubes == 4){//B234
					z_output = X + z_wind_direction[1-1] + DD;
				}else if(z_nubes == 5){//B235
					z_output = R + z_wind_direction[1-1] + DD;
				}
			}else if(z_trend == 4){//B24x
				if(z_nubes == 1){//B241
					z_output = A + z_wind_direction[1-1] + UU;
				}else if(z_nubes == 2){//B242
					z_output = D + z_wind_direction[1-1] + UU;
				}else if(z_nubes == 3){//B243
					z_output = G + z_wind_direction[1-1] + UU;
				}else if(z_nubes == 4){//B244
					z_output = G + z_wind_direction[1-1] + UU;
				}else if(z_nubes == 5){//B245
					z_output = J + z_wind_direction[1-1] + UU;
				}
			}else if(z_trend == 5){//B25x
				if(z_nubes == 1){//B251
					z_output = G + z_wind_direction[1-1] + NN;
				}else if(z_nubes == 2){//B252
					z_output = G + z_wind_direction[1-1] + NN;
				}else if(z_nubes == 3){//B253
					z_output = G + z_wind_direction[1-1] + NN;
				}else if(z_nubes == 4){//B254
					z_output = G + z_wind_direction[1-1] + NN;
				}else if(z_nubes == 5){//B255
					z_output = M + z_wind_direction[1-1] + NN;
				}
			}//Fin segundo numero
			
		}else if(z_hpa == 3){//B3xx
			if(z_trend == 1){//B31x Segundo numero, tendencia de la presion
				if(z_nubes == 1){//B311
					z_output = C + z_wind_direction[8-1] + FF;
				}else if(z_nubes == 2){//B312
					z_output = C + z_wind_direction[8-1] + FF;
				}else if(z_nubes == 3){//B313
					z_output = C + z_wind_direction[8-1] + FF;
				}else if(z_nubes == 4){//B314
					z_output = C + z_wind_direction[8-1] + FF;
				}else if(z_nubes == 5){//B315
					z_output = W + z_wind_direction[8-1] + FF;
				}
			}else if(z_trend == 2){//B32x
				if(z_nubes == 1){//B321
					z_output = C + z_wind_direction[8-1] + UU;
				}else if(z_nubes == 2){//B322
					z_output = C + z_wind_direction[8-1] + UU;
				}else if(z_nubes == 3){//B323
					z_output = C + z_wind_direction[8-1] + UU;
				}else if(z_nubes == 4){//B324
					z_output = C + z_wind_direction[8-1] + UU;
				}else if(z_nubes == 5){//B325
					z_output = U + z_wind_direction[8-1] + UU;
				}
			}else if(z_trend == 3){//B33x
				if(z_nubes == 1){//B331
					z_output = A + z_wind_direction[1-1] + UU;
				}else if(z_nubes == 2){//B332
					z_output = A + z_wind_direction[1-1] + UU;
				}else if(z_nubes == 3){//B333
					z_output = A + z_wind_direction[1-1] + UU;
				}else if(z_nubes == 4){//B334
					z_output = X + z_wind_direction[1-1] + UU;
				}else if(z_nubes == 5){//B335
					z_output = R + z_wind_direction[1-1] + UU;
				}
			}else if(z_trend == 4){//B34x
				if(z_nubes == 1){//B341
					z_output = D + z_wind_direction[1-1] + UU;
				}else if(z_nubes == 2){//B342
					z_output = D + z_wind_direction[1-1] + UU;
				}else if(z_nubes == 3){//B343
					z_output = G + z_wind_direction[1-1] + UU;
				}else if(z_nubes == 4){//B344
					z_output = G + z_wind_direction[1-1] + UU;
				}else if(z_nubes == 5){//B345
					z_output = J + z_wind_direction[1-1] + UU;
				}
			}else if(z_trend == 5){//B35x
				if(z_nubes == 1){//B351
					z_output = G + z_wind_direction[1-1] + NN;
				}else if(z_nubes == 2){//B352
					z_output = G + z_wind_direction[1-1] + NN;
				}else if(z_nubes == 3){//B353
					z_output = G + z_wind_direction[1-1] + NN;
				}else if(z_nubes == 4){//B354
					z_output = G + z_wind_direction[1-1] + NN;
				}else if(z_nubes == 5){//B355
					z_output = M + z_wind_direction[1-1] + NN;
				}
			}//Fin segundo numero
		}else if(z_hpa == 4){//B4xx
			if(z_trend == 1){//B41x Segundo numero, tendencia de la presion
				if(z_nubes == 1){//B411
					z_output = C + z_wind_direction[8-1] + FF;
				}else if(z_nubes == 2){//B412
					z_output = C + z_wind_direction[8-1] + FF;
				}else if(z_nubes == 3){//B413
					z_output = C + z_wind_direction[8-1] + FF;
				}else if(z_nubes == 4){//B414
					z_output = C + z_wind_direction[8-1] + FF;
				}else if(z_nubes == 5){//B415
					z_output = U + z_wind_direction[8-1] + FF;
				}
			}else if(z_trend == 2){//B42x
				if(z_nubes == 1){//B421
					z_output = C + z_wind_direction[8-1] + FF;
				}else if(z_nubes == 2){//B422
					z_output = C + z_wind_direction[8-1] + FF;
				}else if(z_nubes == 3){//B423
					z_output = C + z_wind_direction[8-1] + FF;
				}else if(z_nubes == 4){//B424
					z_output = C + z_wind_direction[8-1] + FF;
				}else if(z_nubes == 5){//B425
					z_output = U + z_wind_direction[8-1] + FF;
				}
			}else if(z_trend == 3){//B43x
				if(z_nubes == 1){//B431
					z_output = A + z_wind_direction[8-1] + UU;
				}else if(z_nubes == 2){//B432
					z_output = A + z_wind_direction[8-1] + UU;
				}else if(z_nubes == 3){//B433
					z_output = A + z_wind_direction[8-1] + FF;
				}else if(z_nubes == 4){//B434
					z_output = X + z_wind_direction[8-1] + FF;
				}else if(z_nubes == 5){//B435
					z_output = R + z_wind_direction[8-1] + FF;
				}
			}else if(z_trend == 4){//B44x
				if(z_nubes == 1){//B441
					z_output = D + z_wind_direction[1-1] + FF;
				}else if(z_nubes == 2){//B442
					z_output = D + z_wind_direction[1-1] + FF;
				}else if(z_nubes == 3){//B443
					z_output = G + z_wind_direction[1-1] + FF;
				}else if(z_nubes == 4){//B444
					z_output = J + z_wind_direction[1-1] + FF;
				}else if(z_nubes == 5){//B445
					z_output = J + z_wind_direction[1-1] + FF;
				}
			}else if(z_trend == 5){//B45x
				if(z_nubes == 1){//B451
					z_output = J + z_wind_direction[1-1] + NN;
				}else if(z_nubes == 2){//B452
					z_output = J + z_wind_direction[1-1] + NN;
				}else if(z_nubes == 3){//B453
					z_output = L + z_wind_direction[1-1] + NN;
				}else if(z_nubes == 4){//B454
					z_output = P + z_wind_direction[1-1] + NN;
				}else if(z_nubes == 5){//B455
					z_output = P + z_wind_direction[1-1] + NN;
				}
			}//Fin segundo numero
		}else if(z_hpa == 5){//B5xx
			if(z_trend == 1){//B51x Segundo numero, tendencia de la presion
				if(z_nubes == 1){//B511
					z_output = C + z_wind_direction[8-1] + SS;
				}else if(z_nubes == 2){//B512
					z_output = C + z_wind_direction[8-1] + SS;
				}else if(z_nubes == 3){//B513
					z_output = C + z_wind_direction[8-1] + SS;
				}else if(z_nubes == 4){//B514
					z_output = Y + z_wind_direction[8-1] + SS;
				}else if(z_nubes == 5){//B515
					z_output = U + z_wind_direction[8-1] + SS;
				}
			}else if(z_trend == 2){//B52x
				if(z_nubes == 1){//B521
					z_output = C + z_wind_direction[8-1] + FF;
				}else if(z_nubes == 2){//B522
					z_output = C + z_wind_direction[8-1] + FF;
				}else if(z_nubes == 3){//B523
					z_output = C + z_wind_direction[8-1] + FF;
				}else if(z_nubes == 4){//B524
					z_output = F + z_wind_direction[8-1] + FF;
				}else if(z_nubes == 5){//B525
					z_output = S + z_wind_direction[8-1] + FF;
				}
			}else if(z_trend == 3){//B53x
				if(z_nubes == 1){//B531
					z_output = C + z_wind_direction[8-1] + FF;
				}else if(z_nubes == 2){//B532
					z_output = C + z_wind_direction[8-1] + FF;
				}else if(z_nubes == 3){//B533
					z_output = Y + z_wind_direction[8-1] + FF;
				}else if(z_nubes == 4){//B534
					z_output = F + z_wind_direction[8-1] + FF;
				}else if(z_nubes == 5){//B535
					z_output = S + z_wind_direction[8-1] + FF;
				}
			}else if(z_trend == 4){//B54x
				if(z_nubes == 1){//B541
					z_output = F + z_wind_direction[8-1] + SS;
				}else if(z_nubes == 2){//B542
					z_output = L + z_wind_direction[8-1] + SS;
				}else if(z_nubes == 3){//B543
					z_output = L + z_wind_direction[8-1] + SS;
				}else if(z_nubes == 4){//B544
					z_output = L + z_wind_direction[8-1] + SS;
				}else if(z_nubes == 5){//B545
					z_output = L + z_wind_direction[8-1] + SS;
				}
			}else if(z_trend == 5){//B55x
				if(z_nubes == 1){//B551
					z_output = L + z_wind_direction[8-1] + SS;
				}else if(z_nubes == 2){//B552
					z_output = L + z_wind_direction[8-1] + SS;
				}else if(z_nubes == 3){//B553
					z_output = L + z_wind_direction[8-1] + SS;
				}else if(z_nubes == 4){//B554
					z_output = P + z_wind_direction[8-1] + SS;
				}else if(z_nubes == 5){//B555
					z_output = P + z_wind_direction[8-1] + SS;
				}
			}//Fin segundo numero
		}else if(z_hpa == 6){//B6xx
			if(z_trend == 1){//B61x Segundo numero, tendencia de la presion
				if(z_nubes == 1){//B611
					z_output = C + z_wind_direction[8-1] + SS;
				}else if(z_nubes == 2){//B612
					z_output = C + z_wind_direction[8-1] + SS;
				}else if(z_nubes == 3){//B613
					z_output = C + z_wind_direction[8-1] + SS;
				}else if(z_nubes == 4){//B614
					z_output = F + z_wind_direction[8-1] + SS;
				}else if(z_nubes == 5){//B615
					z_output = S + z_wind_direction[8-1] + SS;
				}
			}else if(z_trend == 2){//B62x
				if(z_nubes == 1){//B621
					z_output = C + z_wind_direction[8-1] + SS;
				}else if(z_nubes == 2){//B622
					z_output = C + z_wind_direction[8-1] + SS;
				}else if(z_nubes == 3){//B623
					z_output = F + z_wind_direction[8-1] + SS;
				}else if(z_nubes == 4){//B624
					z_output = F + z_wind_direction[8-1] + SS;
				}else if(z_nubes == 5){//B625
					z_output = S + z_wind_direction[8-1] + SS;
				}
			}else if(z_trend == 3){//B63x
				if(z_nubes == 1){//B631
					z_output = C + z_wind_direction[8-1] + SS;
				}else if(z_nubes == 2){//B632
					z_output = F + z_wind_direction[8-1] + SS;
				}else if(z_nubes == 3){//B633
					z_output = F + z_wind_direction[8-1] + SS;
				}else if(z_nubes == 4){//B634
					z_output = F + z_wind_direction[8-1] + SS;
				}else if(z_nubes == 5){//B635
					z_output = S + z_wind_direction[8-1] + FF;
				}
			}else if(z_trend == 4){//B64x
				if(z_nubes == 1){//B641
					z_output = S + z_wind_direction[8-1] + SS;
				}else if(z_nubes == 2){//B642
					z_output = S + z_wind_direction[8-1] + SS;
				}else if(z_nubes == 3){//B643
					z_output = S + z_wind_direction[8-1] + SS;
				}else if(z_nubes == 4){//B644
					z_output = S + z_wind_direction[8-1] + SS;
				}else if(z_nubes == 5){//B645
					z_output = S + z_wind_direction[8-1] + SS;
				}
			}else if(z_trend == 5){//B65x
				if(z_nubes == 1){//B651
					z_output = L + z_wind_direction[8-1] + SS;
				}else if(z_nubes == 2){//B652
					z_output = L + z_wind_direction[8-1] + SS;
				}else if(z_nubes == 3){//B653
					z_output = P + z_wind_direction[8-1] + SS;
				}else if(z_nubes == 4){//B654
					z_output = P + z_wind_direction[8-1] + SS;
				}else if(z_nubes == 5){//B655
					z_output = P + z_wind_direction[8-1] + SS;
				}
			}//Fin segundo numero
		}else if(z_hpa == 7){//B7xx
			if(z_trend == 1){//B71x Segundo numero, tendencia de la presion
				if(z_nubes == 1){//B711
					z_output = C + z_wind_direction[8-1] + GG;
				}else if(z_nubes == 2){//B712
					z_output = C + z_wind_direction[8-1] + GG;
				}else if(z_nubes == 3){//B713
					z_output = F + z_wind_direction[8-1] + GG;
				}else if(z_nubes == 4){//B714
					z_output = F + z_wind_direction[8-1] + GG;
				}else if(z_nubes == 5){//B715
					z_output = S + z_wind_direction[8-1] + GG;
				}
			}else if(z_trend == 2){//B72x
				if(z_nubes == 1){//B721
					z_output = C + z_wind_direction[8-1] + GG;
				}else if(z_nubes == 2){//B722
					z_output = F + z_wind_direction[8-1] + GG;
				}else if(z_nubes == 3){//B723
					z_output = F + z_wind_direction[8-1] + GG;
				}else if(z_nubes == 4){//B724
					z_output = S + z_wind_direction[8-1] + GG;
				}else if(z_nubes == 5){//B725
					z_output = S + z_wind_direction[8-1] + GG;
				}
			}else if(z_trend == 3){//B73x
			if(z_nubes == 1){//B731
					z_output = F + z_wind_direction[8-1] + GG;
				}else if(z_nubes == 2){//B732
					z_output = S + z_wind_direction[8-1] + GG;
				}else if(z_nubes == 3){//B733
					z_output = S + z_wind_direction[8-1] + GG;
				}else if(z_nubes == 4){//B734
					z_output = S + z_wind_direction[8-1] + GG;
				}else if(z_nubes == 5){//B735
					z_output = S + z_wind_direction[8-1] + GG;
				}
			}else if(z_trend == 4){//B74x
				if(z_nubes == 1){//B741
					z_output = S + z_wind_direction[8-1] + GG;
				}else if(z_nubes == 2){//B742
					z_output = S + z_wind_direction[8-1] + GG;
				}else if(z_nubes == 3){//B743
					z_output = S + z_wind_direction[8-1] + GG;
				}else if(z_nubes == 4){//B744
					z_output = S + z_wind_direction[8-1] + GG;
				}else if(z_nubes == 5){//B745
					z_output = S + z_wind_direction[8-1] + GG;
				}
			}else if(z_trend == 5){//B75x
				if(z_nubes == 1){//B751
					z_output = L + z_wind_direction[8-1] + GG;
				}else if(z_nubes == 2){//B752
					z_output = L + z_wind_direction[8-1] + GG;
				}else if(z_nubes == 3){//B753
					z_output = P + z_wind_direction[8-1] + GG;
				}else if(z_nubes == 4){//B754
					z_output = P + z_wind_direction[8-1] + GG;
				}else if(z_nubes == 5){//B755
					z_output = P + z_wind_direction[8-1] + GG;
				}
			}//Fin segundo numero
		}else if (z_hpa == 8) {//B8xx
			if(z_trend == 1){//B81x Segundo numero, tendencia de la presion
				if(z_nubes == 1){//B811
					z_output = F + z_wind_direction[8-1] + WW;
				}else if(z_nubes == 2){//B812
					z_output = F + z_wind_direction[8-1] + WW;
				}else if(z_nubes == 3){//B813
					z_output = F + z_wind_direction[8-1] + WW;
				}else if(z_nubes == 4){//B814
					z_output = S + z_wind_direction[8-1] + WW;
				}else if(z_nubes == 5){//B815
					z_output = S + z_wind_direction[8-1] + WW;
				}
			}else if(z_trend == 2){//B82x
				if(z_nubes == 1){//B821
					z_output = F + z_wind_direction[8-1] + WW;
				}else if(z_nubes == 2){//B822
					z_output = F + z_wind_direction[8-1] + WW;
				}else if(z_nubes == 3){//B823
					z_output = S + z_wind_direction[8-1] + WW;
				}else if(z_nubes == 4){//B824
					z_output = S + z_wind_direction[8-1] + WW;
				}else if(z_nubes == 5){//B825
					z_output = S + z_wind_direction[8-1] + WW;
				}
			}else if(z_trend == 3){//B83x
			if(z_nubes == 1){//B831
					z_output = S + z_wind_direction[8-1] + WW;
				}else if(z_nubes == 2){//B832
					z_output = S + z_wind_direction[8-1] + WW;
				}else if(z_nubes == 3){//B833
					z_output = S + z_wind_direction[8-1] + WW;
				}else if(z_nubes == 4){//B834
					z_output = S + z_wind_direction[8-1] + WW;
				}else if(z_nubes == 5){//B835
					z_output = S + z_wind_direction[8-1] + WW;
				}
			}else if(z_trend == 4){//B84x
				if(z_nubes == 1){//B841
					z_output = S + z_wind_direction[8-1] + WW;
				}else if(z_nubes == 2){//B842
					z_output = S + z_wind_direction[8-1] + WW;
				}else if(z_nubes == 3){//B843
					z_output = S + z_wind_direction[8-1] + WW;
				}else if(z_nubes == 4){//B844
					z_output = S + z_wind_direction[8-1] + WW;
				}else if(z_nubes == 5){//B845
					z_output = S + z_wind_direction[8-1] + WW;
				}
			}else if(z_trend == 5){//B85x
				if(z_nubes == 1){//B851
					z_output = L + z_wind_direction[8-1] + WW;
				}else if(z_nubes == 2){//B852
					z_output = L + z_wind_direction[8-1] + WW;
				}else if(z_nubes == 3){//B853
					z_output = P + z_wind_direction[8-1] + WW;
				}else if(z_nubes == 4){//B854
					z_output = P + z_wind_direction[8-1] + WW;
				}else if(z_nubes == 5){//B855
					z_output = P + z_wind_direction[8-1] + WW;
				}
			}//Fin segundo numero
		}//Fin primer numero
			
	}//Fin letra B
	/////////////////////////////////////////////////////////////////////
	
	//LETRA C
	
	if(z_output == "C"){
		if(z_hpa == 1){//C1xx Primer numero, presion atmosferica
			if(z_trend == 1){//C11x Segundo numero, tendencia de la presion
				if(z_nubes == 1){//C111
				z_output = C + z_wind_direction[1-1] + UU;
				}else if(z_nubes == 2){//C112
					z_output = C + z_wind_direction[1-1] + UU;
				}else if(z_nubes == 3){//C113
					z_output = C + z_wind_direction[1-1] + UU;
				}else if(z_nubes == 4){//C114
					z_output = C + z_wind_direction[1-1] + UU;
				}else if(z_nubes == 5){//C115
					z_output = U + z_wind_direction[1-1] + UU;
				}
			}else if(z_trend == 2){//C12x
				if(z_nubes == 1){//C121
					z_output = A + z_wind_direction[1-1] + UU;
				}else if(z_nubes == 2){//C122
					z_output = A + z_wind_direction[1-1] + UU;
				}else if(z_nubes == 3){//C123
					z_output = A + z_wind_direction[1-1] + UU;
				}else if(z_nubes == 4){//C124
					z_output = X + z_wind_direction[1-1] + UU;
				}else if(z_nubes == 5){//C125
					z_output = R + z_wind_direction[1-1] + UU;
				}
			}else if(z_trend == 3){//C13x
				if(z_nubes == 1){//C131
					z_output = A + z_wind_direction[1-1] + DD;
				}else if(z_nubes == 2){//C132
					z_output = A + z_wind_direction[1-1] + DD;
				}else if(z_nubes == 3){//C133
					z_output = A + z_wind_direction[1-1] + DD;
				}else if(z_nubes == 4){//C134
					z_output = D + z_wind_direction[1-1] + DD;
				}else if(z_nubes == 5){//C135
					z_output = J + z_wind_direction[1-1] + DD;
				}
			}else if(z_trend == 4){//14x
				if(z_nubes == 1){//141
					z_output = A + z_wind_direction[1-1] + UU;
				}else if(z_nubes == 2){//C142
					z_output = D + z_wind_direction[1-1] + UU;
				}else if(z_nubes == 3){//C143
					z_output = G + z_wind_direction[1-1] + UU;
				}else if(z_nubes == 4){//C144
					z_output = G + z_wind_direction[1-1] + UU;
				}else if(z_nubes == 5){//C145
					z_output = J + z_wind_direction[1-1] + UU;
				}
			}else if(z_trend == 5){//15x
				if(z_nubes == 1){//151
					z_output = G + z_wind_direction[1-1] + NN;
				}else if(z_nubes == 2){//C152
					z_output = G + z_wind_direction[1-1] + NN;
				}else if(z_nubes == 3){//C153
					z_output = G + z_wind_direction[1-1] + NN;
				}else if(z_nubes == 4){//C154
					z_output = G + z_wind_direction[1-1] + NN;
				}else if(z_nubes == 5){//C155
					z_output = M + z_wind_direction[1-1] + NN;
				}
		
				
			}//Fin segundo numero
		}else if(z_hpa == 2){//C2xx
			if(z_trend == 1){//C21x Segundo numero, tendencia de la presion
				if(z_nubes == 1){//C211
					z_output = C + z_wind_direction[1-1] + UU;
				}else if(z_nubes == 2){//C212
					z_output = C + z_wind_direction[1-1] + UU;
				}else if(z_nubes == 3){//C213
					z_output = C + z_wind_direction[1-1] + UU;
				}else if(z_nubes == 4){//C214
					z_output = C + z_wind_direction[1-1] + UU;
				}else if(z_nubes == 5){//C215
					z_output = U + z_wind_direction[1-1] + UU;
				}
			}else if(z_trend == 2){//C22x
				if(z_nubes == 1){//C221
					z_output = C + z_wind_direction[1-1] + UU;
				}else if(z_nubes == 2){//C222
					z_output = C + z_wind_direction[1-1] + UU;
				}else if(z_nubes == 3){//C223
					z_output = C + z_wind_direction[1-1] + UU;
				}else if(z_nubes == 4){//C224
					z_output = Y + z_wind_direction[1-1] + UU;
				}else if(z_nubes == 5){//C225
					z_output = S + z_wind_direction[1-1] + UU;
				}
			}else if(z_trend == 3){//C23x
				if(z_nubes == 1){//C231
					z_output = A + z_wind_direction[1-1] + UU;
				}else if(z_nubes == 2){//C232
					z_output = A + z_wind_direction[1-1] + UU;
				}else if(z_nubes == 3){//C233
					z_output = A + z_wind_direction[1-1] + UU;
				}else if(z_nubes == 4){//C234
					z_output = D + z_wind_direction[1-1] + UU;
				}else if(z_nubes == 5){//C235
					z_output = J + z_wind_direction[1-1] + UU;
				}
			}else if(z_trend == 4){//C24x
				if(z_nubes == 1){//C241
					z_output = A + z_wind_direction[1-1] + UU;
				}else if(z_nubes == 2){//C242
					z_output = D + z_wind_direction[1-1] + UU;
				}else if(z_nubes == 3){//C243
					z_output = G + z_wind_direction[1-1] + UU;
				}else if(z_nubes == 4){//C244
					z_output = G + z_wind_direction[1-1] + UU;
				}else if(z_nubes == 5){//C245
					z_output = J + z_wind_direction[1-1] + UU;
				}
			}else if(z_trend == 5){//C25x
				if(z_nubes == 1){//C251
					z_output = G + z_wind_direction[1-1] + NN;
				}else if(z_nubes == 2){//C252
					z_output = G + z_wind_direction[1-1] + NN;
				}else if(z_nubes == 3){//C253
					z_output = G + z_wind_direction[1-1] + NN;
				}else if(z_nubes == 4){//C254
					z_output = G + z_wind_direction[1-1] + NN;
				}else if(z_nubes == 5){//C255
					z_output = M + z_wind_direction[1-1] + NN;
				}
			}//Fin segundo numero
			
		}else if(z_hpa == 3){//C3xx
			if(z_trend == 1){//C31x Segundo numero, tendencia de la presion
				if(z_nubes == 1){//C311
					z_output = C + z_wind_direction[1-1] + FF;
				}else if(z_nubes == 2){//C312
					z_output = C + z_wind_direction[1-1] + FF;
				}else if(z_nubes == 3){//C313
					z_output = C + z_wind_direction[1-1] + FF;
				}else if(z_nubes == 4){//C314
					z_output = Y + z_wind_direction[1-1] + FF;
				}else if(z_nubes == 5){//C315
					z_output = U + z_wind_direction[1-1] + FF;
				}
			}else if(z_trend == 2){//C32x
				if(z_nubes == 1){//C321
					z_output = C + z_wind_direction[1-1] + UU;
				}else if(z_nubes == 2){//C322
					z_output = C + z_wind_direction[1-1] + UU;
				}else if(z_nubes == 3){//C323
					z_output = C + z_wind_direction[1-1] + UU;
				}else if(z_nubes == 4){//C324
					z_output = Y + z_wind_direction[1-1] + UU;
				}else if(z_nubes == 5){//C325
					z_output = S + z_wind_direction[1-1] + UU;
				}
			}else if(z_trend == 3){//C33x
				if(z_nubes == 1){//C331
					z_output = A + z_wind_direction[1-1] + UU;
				}else if(z_nubes == 2){//C332
					z_output = A + z_wind_direction[1-1] + UU;
				}else if(z_nubes == 3){//C333
					z_output = A + z_wind_direction[1-1] + UU;
				}else if(z_nubes == 4){//C334
					z_output = D + z_wind_direction[1-1] + UU;
				}else if(z_nubes == 5){//C335
					z_output = J + z_wind_direction[1-1] + UU;
				}
			}else if(z_trend == 4){//C34x
				if(z_nubes == 1){//C341
					z_output = A + z_wind_direction[1-1] + UU;
				}else if(z_nubes == 2){//C342
					z_output = D + z_wind_direction[1-1] + UU;
				}else if(z_nubes == 3){//C343
					z_output = G + z_wind_direction[1-1] + UU;
				}else if(z_nubes == 4){//C344
					z_output = G + z_wind_direction[1-1] + UU;
				}else if(z_nubes == 5){//C345
					z_output = J + z_wind_direction[1-1] + UU;
				}
			}else if(z_trend == 5){//C35x
				if(z_nubes == 1){//C351
					z_output = G + z_wind_direction[1-1] + NN;
				}else if(z_nubes == 2){//C352
					z_output = G + z_wind_direction[1-1] + NN;
				}else if(z_nubes == 3){//C353
					z_output = G + z_wind_direction[1-1] + NN;
				}else if(z_nubes == 4){//C354
					z_output = G + z_wind_direction[1-1] + NN;
				}else if(z_nubes == 5){//C355
					z_output = M + z_wind_direction[1-1] + NN;
				}
			}//Fin segundo numero
		}else if(z_hpa == 4){//C4xx
			if(z_trend == 1){//C41x Segundo numero, tendencia de la presion
				if(z_nubes == 1){//C411
					z_output = C + z_wind_direction[1-1] + FF;
				}else if(z_nubes == 2){//C412
					z_output = C + z_wind_direction[1-1] + FF;
				}else if(z_nubes == 3){//C413
					z_output = C + z_wind_direction[1-1] + FF;
				}else if(z_nubes == 4){//C414
					z_output = Y + z_wind_direction[1-1] + FF;
				}else if(z_nubes == 5){//C415
					z_output = S + z_wind_direction[1-1] + FF;
				}
			}else if(z_trend == 2){//C42x
				if(z_nubes == 1){//C421
					z_output = C + z_wind_direction[1-1] + FF;
				}else if(z_nubes == 2){//C422
					z_output = C + z_wind_direction[1-1] + FF;
				}else if(z_nubes == 3){//C423
					z_output = C + z_wind_direction[1-1] + FF;
				}else if(z_nubes == 4){//C424
					z_output = Y + z_wind_direction[1-1] + FF;
				}else if(z_nubes == 5){//C425
					z_output = S + z_wind_direction[1-1] + FF;
				}
			}else if(z_trend == 3){//C43x
				if(z_nubes == 1){//C431
					z_output = A + z_wind_direction[1-1] + FF;
				}else if(z_nubes == 2){//C432
					z_output = A + z_wind_direction[1-1] + FF;
				}else if(z_nubes == 3){//C433
					z_output = Y + z_wind_direction[1-1] + FF;
				}else if(z_nubes == 4){//C434
					z_output = F + z_wind_direction[1-1] + FF;
				}else if(z_nubes == 5){//C435
					z_output = L + z_wind_direction[1-1] + FF;
				}
			}else if(z_trend == 4){//C44x
				if(z_nubes == 1){//C441
					z_output = D + z_wind_direction[1-1] + FF;
				}else if(z_nubes == 2){//C442
					z_output = D + z_wind_direction[1-1] + FF;
				}else if(z_nubes == 3){//C443
					z_output = G + z_wind_direction[1-1] + FF;
				}else if(z_nubes == 4){//C444
					z_output = L + z_wind_direction[1-1] + FF;
				}else if(z_nubes == 5){//C445
					z_output = L + z_wind_direction[1-1] + FF;
				}
			}else if(z_trend == 5){//C45x
				if(z_nubes == 1){//C451
					z_output = J + z_wind_direction[1-1] + NN;
				}else if(z_nubes == 2){//C452
					z_output = J + z_wind_direction[1-1] + NN;
				}else if(z_nubes == 3){//C453
					z_output = L + z_wind_direction[1-1] + NN;
				}else if(z_nubes == 4){//C454
					z_output = P + z_wind_direction[1-1] + NN;
				}else if(z_nubes == 5){//C455
					z_output = P + z_wind_direction[1-1] + NN;
				}
			}//Fin segundo numero
		}else if(z_hpa == 5){//C5xx
			if(z_trend == 1){//C51x Segundo numero, tendencia de la presion
				if(z_nubes == 1){//C511
					z_output = C + z_wind_direction[1-1] + SS;
				}else if(z_nubes == 2){//C512
					z_output = C + z_wind_direction[1-1] + SS;
				}else if(z_nubes == 3){//C513
					z_output = C + z_wind_direction[1-1] + SS;
				}else if(z_nubes == 4){//C514
					z_output = F + z_wind_direction[1-1] + SS;
				}else if(z_nubes == 5){//C515
					z_output = S + z_wind_direction[1-1] + SS;
				}
			}else if(z_trend == 2){//C52x
				if(z_nubes == 1){//C521
					z_output = C + z_wind_direction[1-1] + FF;
				}else if(z_nubes == 2){//C522
					z_output = C + z_wind_direction[1-1] + FF;
				}else if(z_nubes == 3){//C523
					z_output = Y + z_wind_direction[1-1] + FF;
				}else if(z_nubes == 4){//C524
					z_output = F + z_wind_direction[1-1] + FF;
				}else if(z_nubes == 5){//C525
					z_output = S + z_wind_direction[1-1] + FF;
				}
			}else if(z_trend == 3){//C53x
				if(z_nubes == 1){//C531
					z_output = C + z_wind_direction[1-1] + FF;
				}else if(z_nubes == 2){//C532
					z_output = Y + z_wind_direction[1-1] + FF;
				}else if(z_nubes == 3){//C533
					z_output = F + z_wind_direction[1-1] + FF;
				}else if(z_nubes == 4){//C534
					z_output = F + z_wind_direction[1-1] + FF;
				}else if(z_nubes == 5){//C535
					z_output = S + z_wind_direction[1-1] + FF;
				}
			}else if(z_trend == 4){//C54x
				if(z_nubes == 1){//C541
					z_output = F + z_wind_direction[1-1] + SS;
				}else if(z_nubes == 2){//C542
					z_output = L + z_wind_direction[1-1] + SS;
				}else if(z_nubes == 3){//C543
					z_output = L + z_wind_direction[1-1] + SS;
				}else if(z_nubes == 4){//C544
					z_output = L + z_wind_direction[1-1] + SS;
				}else if(z_nubes == 5){//C545
					z_output = L + z_wind_direction[1-1] + SS;
				}
			}else if(z_trend == 5){//C55x
				if(z_nubes == 1){//C551
					z_output = L + z_wind_direction[1-1] + SS;
				}else if(z_nubes == 2){//C552
					z_output = L + z_wind_direction[1-1] + SS;
				}else if(z_nubes == 3){//C553
					z_output = L + z_wind_direction[1-1] + SS;
				}else if(z_nubes == 4){//C554
					z_output = P + z_wind_direction[1-1] + SS;
				}else if(z_nubes == 5){//C555
					z_output = P + z_wind_direction[1-1] + SS;
				}
			}//Fin segundo numero
		}else if(z_hpa == 6){//C6xx
			if(z_trend == 1){//C61x Segundo numero, tendencia de la presion
				if(z_nubes == 1){//C611
					z_output = C + z_wind_direction[8-1] + SS;
				}else if(z_nubes == 2){//C612
					z_output = C + z_wind_direction[8-1] + SS;
				}else if(z_nubes == 3){//C613
					z_output = F + z_wind_direction[8-1] + SS;
				}else if(z_nubes == 4){//C614
					z_output = F + z_wind_direction[8-1] + SS;
				}else if(z_nubes == 5){//C615
					z_output = S + z_wind_direction[8-1] + SS;
				}
			}else if(z_trend == 2){//C62x
				if(z_nubes == 1){//C621
					z_output = C + z_wind_direction[8-1] + SS;
				}else if(z_nubes == 2){//C622
					z_output = F + z_wind_direction[8-1] + SS;
				}else if(z_nubes == 3){//C623
					z_output = S + z_wind_direction[8-1] + SS;
				}else if(z_nubes == 4){//C624
					z_output = S + z_wind_direction[8-1] + SS;
				}else if(z_nubes == 5){//C625
					z_output = S + z_wind_direction[8-1] + SS;
				}
			}else if(z_trend == 3){//C63x
				if(z_nubes == 1){//C631
					z_output = F + z_wind_direction[8-1] + SS;
				}else if(z_nubes == 2){//C632
					z_output = F + z_wind_direction[8-1] + SS;
				}else if(z_nubes == 3){//C633
					z_output = S + z_wind_direction[8-1] + SS;
				}else if(z_nubes == 4){//C634
					z_output = S + z_wind_direction[8-1] + SS;
				}else if(z_nubes == 5){//C635
					z_output = S + z_wind_direction[8-1] + SS;
				}
			}else if(z_trend == 4){//C64x
				if(z_nubes == 1){//C641
					z_output = S + z_wind_direction[8-1] + SS;
				}else if(z_nubes == 2){//C642
					z_output = S + z_wind_direction[8-1] + SS;
				}else if(z_nubes == 3){//C643
					z_output = S + z_wind_direction[8-1] + SS;
				}else if(z_nubes == 4){//C644
					z_output = S + z_wind_direction[8-1] + SS;
				}else if(z_nubes == 5){//C645
					z_output = S + z_wind_direction[8-1] + SS;
				}
			}else if(z_trend == 5){//C65x
				if(z_nubes == 1){//C651
					z_output = L + z_wind_direction[1-1] + SS;
				}else if(z_nubes == 2){//C652
					z_output = L + z_wind_direction[1-1] + SS;
				}else if(z_nubes == 3){//C653
					z_output = L + z_wind_direction[1-1] + SS;
				}else if(z_nubes == 4){//C654
					z_output = P + z_wind_direction[1-1] + SS;
				}else if(z_nubes == 5){//C655
					z_output = P + z_wind_direction[1-1] + SS;
				}
			}//Fin segundo numero
		}else if(z_hpa == 7){//C7xx
			if(z_trend == 1){//C71x Segundo numero, tendencia de la presion
				if(z_nubes == 1){//C711
					z_output = F + z_wind_direction[8-1] + GG;
				}else if(z_nubes == 2){//C712
					z_output = F + z_wind_direction[8-1] + GG;
				}else if(z_nubes == 3){//C713
					z_output = S + z_wind_direction[8-1] + GG;
				}else if(z_nubes == 4){//C714
					z_output = S + z_wind_direction[8-1] + GG;
				}else if(z_nubes == 5){//C715
					z_output = S + z_wind_direction[8-1] + GG;
				}
			}else if(z_trend == 2){//C72x
				if(z_nubes == 1){//C721
					z_output = F + z_wind_direction[8-1] + GG;
				}else if(z_nubes == 2){//C722
					z_output = F + z_wind_direction[8-1] + GG;
				}else if(z_nubes == 3){//C723
					z_output = S + z_wind_direction[8-1] + GG;
				}else if(z_nubes == 4){//C724
					z_output = S + z_wind_direction[8-1] + GG;
				}else if(z_nubes == 5){//C725
					z_output = S + z_wind_direction[8-1] + GG;
				}
			}else if(z_trend == 3){//C73x
			if(z_nubes == 1){//C731
					z_output = F + z_wind_direction[8-1] + GG;
				}else if(z_nubes == 2){//C732
					z_output = S + z_wind_direction[8-1] + GG;
				}else if(z_nubes == 3){//C733
					z_output = S + z_wind_direction[8-1] + GG;
				}else if(z_nubes == 4){//C734
					z_output = S + z_wind_direction[8-1] + GG;
				}else if(z_nubes == 5){//C735
					z_output = S + z_wind_direction[8-1] + GG;
				}
			}else if(z_trend == 4){//C74x
				if(z_nubes == 1){//C741
					z_output = S + z_wind_direction[8-1] + GG;
				}else if(z_nubes == 2){//C742
					z_output = S + z_wind_direction[8-1] + GG;
				}else if(z_nubes == 3){//C743
					z_output = S + z_wind_direction[8-1] + GG;
				}else if(z_nubes == 4){//C744
					z_output = S + z_wind_direction[8-1] + GG;
				}else if(z_nubes == 5){//C745
					z_output = S + z_wind_direction[8-1] + GG;
				}
			}else if(z_trend == 5){//C75x
				if(z_nubes == 1){//C751
					z_output = L + z_wind_direction[1-1] + GG;
				}else if(z_nubes == 2){//C752
					z_output = L + z_wind_direction[1-1] + GG;
				}else if(z_nubes == 3){//C753
					z_output = L + z_wind_direction[1-1] + GG;
				}else if(z_nubes == 4){//C754
					z_output = P + z_wind_direction[1-1] + GG;
				}else if(z_nubes == 5){//C755
					z_output = P + z_wind_direction[1-1] + GG;
				}
			}//Fin segundo numero
		}else if (z_hpa == 8) {//C8xx
			if(z_trend == 1){//C81x Segundo numero, tendencia de la presion
				if(z_nubes == 1){//C811
					z_output = F + z_wind_direction[8-1] + WW;
				}else if(z_nubes == 2){//C812
					z_output = F + z_wind_direction[8-1] + WW;
				}else if(z_nubes == 3){//C813
					z_output = S + z_wind_direction[8-1] + WW;
				}else if(z_nubes == 4){//C814
					z_output = S + z_wind_direction[8-1] + WW;
				}else if(z_nubes == 5){//C815
					z_output = S + z_wind_direction[8-1] + WW;
				}
			}else if(z_trend == 2){//C82x
				if(z_nubes == 1){//C821
					z_output = F + z_wind_direction[8-1] + WW;
				}else if(z_nubes == 2){//C822
					z_output = F + z_wind_direction[8-1] + WW;
				}else if(z_nubes == 3){//C823
					z_output = S + z_wind_direction[8-1] + WW;
				}else if(z_nubes == 4){//C824
					z_output = S + z_wind_direction[8-1] + WW;
				}else if(z_nubes == 5){//C825
					z_output = S + z_wind_direction[8-1] + WW;
				}
			}else if(z_trend == 3){//C83x
			if(z_nubes == 1){//C831
					z_output = S + z_wind_direction[8-1] + WW;
				}else if(z_nubes == 2){//C832
					z_output = S + z_wind_direction[8-1] + WW;
				}else if(z_nubes == 3){//C833
					z_output = S + z_wind_direction[8-1] + WW;
				}else if(z_nubes == 4){//C834
					z_output = S + z_wind_direction[8-1] + WW;
				}else if(z_nubes == 5){//C835
					z_output = S + z_wind_direction[8-1] + WW;
				}
			}else if(z_trend == 4){//C84x
				if(z_nubes == 1){//C841
					z_output = S + z_wind_direction[8-1] + WW;
				}else if(z_nubes == 2){//C842
					z_output = S + z_wind_direction[8-1] + WW;
				}else if(z_nubes == 3){//C843
					z_output = S + z_wind_direction[8-1] + WW;
				}else if(z_nubes == 4){//C844
					z_output = S + z_wind_direction[8-1] + WW;
				}else if(z_nubes == 5){//C845
					z_output = S + z_wind_direction[8-1] + WW;
				}
			}else if(z_trend == 5){//C85x
				if(z_nubes == 1){//C851
					z_output = L + z_wind_direction[8-1] + WW;
				}else if(z_nubes == 2){//C852
					z_output = L + z_wind_direction[8-1] + WW;
				}else if(z_nubes == 3){//C853
					z_output = L + z_wind_direction[8-1] + WW;
				}else if(z_nubes == 4){//C854
					z_output = P + z_wind_direction[8-1] + WW;
				}else if(z_nubes == 5){//C855
					z_output = P + z_wind_direction[8-1] + WW;
				}
			}//Fin segundo numero
		}//Fin primer numero
			
	}//Fin letra C
	
	/////////////////////////////////////////////////////////////////////
	
	//LETRA D
	
if(z_output == "D"){
		if(z_hpa == 1){//D1xx Primer numero, presion atmosferica
			if(z_trend == 1){//D11x Segundo numero, tendencia de la presion
				if(z_nubes == 1){//D111
					z_output = A + z_wind_direction[1-1] + UU;
				}else if(z_nubes == 2){//D112
					z_output = A + z_wind_direction[1-1] + UU;
				}else if(z_nubes == 3){//D113
					z_output = A + z_wind_direction[1-1] + UU;
				}else if(z_nubes == 4){//D114
					z_output = A + z_wind_direction[1-1] + UU;
				}else if(z_nubes == 5){//D115
					z_output = T + z_wind_direction[1-1] + UU;
				}
			}else if(z_trend == 2){//D12x
				if(z_nubes == 1){//D121
					z_output = A + z_wind_direction[1-1] + UU;
				}else if(z_nubes == 2){//D122
					z_output = A + z_wind_direction[1-1] + UU;
				}else if(z_nubes == 3){//D123
					z_output = A + z_wind_direction[1-1] + UU;
				}else if(z_nubes == 4){//D124
					z_output = D + z_wind_direction[1-1] + UU;
				}else if(z_nubes == 5){//D125
					z_output = R + z_wind_direction[1-1] + UU;
				}
			}else if(z_trend == 3){//D13x
				if(z_nubes == 1){//D131
					z_output = A + z_wind_direction[1-1] + UU;
				}else if(z_nubes == 2){//D132
					z_output = A + z_wind_direction[1-1] + UU;
				}else if(z_nubes == 3){//D133
					z_output = A + z_wind_direction[1-1] + UU;
				}else if(z_nubes == 4){//D134
					z_output = G + z_wind_direction[1-1] + UU;
				}else if(z_nubes == 5){//D135
					z_output = J + z_wind_direction[1-1] + UU;
				}
			}else if(z_trend == 4){//14x
				if(z_nubes == 1){//141
					z_output = D + z_wind_direction[1-1] + NN;
				}else if(z_nubes == 2){//D142
					z_output = G + z_wind_direction[1-1] + NN;
				}else if(z_nubes == 3){//D143
					z_output = G + z_wind_direction[1-1] + NN;
				}else if(z_nubes == 4){//D144
					z_output = G + z_wind_direction[1-1] + NN;
				}else if(z_nubes == 5){//D145
					z_output = M + z_wind_direction[1-1] + NN;
				}
			}else if(z_trend == 5){//15x
				if(z_nubes == 1){//151
					z_output = G + z_wind_direction[1-1] + NN;
				}else if(z_nubes == 2){//D152
					z_output = G + z_wind_direction[1-1] + NN;
				}else if(z_nubes == 3){//D153
					z_output = G + z_wind_direction[1-1] + NN;
				}else if(z_nubes == 4){//D154
					z_output = G + z_wind_direction[1-1] + NN;
				}else if(z_nubes == 5){//D155
					z_output = M + z_wind_direction[1-1] + NN;
				}
		
				
			}//Fin segundo numero
		}else if(z_hpa == 2){//D2xx
			if(z_trend == 1){//D21x Segundo numero, tendencia de la presion
				if(z_nubes == 1){//D211
					z_output = C + z_wind_direction[1-1] + UU;
				}else if(z_nubes == 2){//D212
					z_output = C + z_wind_direction[1-1] + UU;
				}else if(z_nubes == 3){//D213
					z_output = C + z_wind_direction[1-1] + UU;
				}else if(z_nubes == 4){//D214
					z_output = C + z_wind_direction[1-1] + UU;
				}else if(z_nubes == 5){//D215
					z_output = U + z_wind_direction[1-1] + UU;
				}
			}else if(z_trend == 2){//D22x
				if(z_nubes == 1){//D221
					z_output = A + z_wind_direction[1-1] + UU;
				}else if(z_nubes == 2){//D222
					z_output = A + z_wind_direction[1-1] + UU;
				}else if(z_nubes == 3){//D223
					z_output = A + z_wind_direction[1-1] + UU;
				}else if(z_nubes == 4){//D224
					z_output = D + z_wind_direction[1-1] + UU;
				}else if(z_nubes == 5){//D225
					z_output = R + z_wind_direction[1-1] + UU;
				}
			}else if(z_trend == 3){//D23x
				if(z_nubes == 1){//D231
					z_output = A + z_wind_direction[1-1] + UU;
				}else if(z_nubes == 2){//D232
					z_output = A + z_wind_direction[1-1] + UU;
				}else if(z_nubes == 3){//D233
					z_output = A + z_wind_direction[1-1] + UU;
				}else if(z_nubes == 4){//D234
					z_output = G + z_wind_direction[1-1] + UU;
				}else if(z_nubes == 5){//D235
					z_output = J + z_wind_direction[1-1] + UU;
				}
			}else if(z_trend == 4){//D24x
				if(z_nubes == 1){//D241
					z_output = D + z_wind_direction[1-1] + NN;
				}else if(z_nubes == 2){//D242
					z_output = G + z_wind_direction[1-1] + NN;
				}else if(z_nubes == 3){//D243
					z_output = G + z_wind_direction[1-1] + NN;
				}else if(z_nubes == 4){//D244
					z_output = G + z_wind_direction[1-1] + NN;
				}else if(z_nubes == 5){//D245
					z_output = M + z_wind_direction[1-1] + NN;
				}
			}else if(z_trend == 5){//D25x
				if(z_nubes == 1){//D251
					z_output = G + z_wind_direction[1-1] + NN;
				}else if(z_nubes == 2){//D252
					z_output = G + z_wind_direction[1-1] + NN;
				}else if(z_nubes == 3){//D253
					z_output = G + z_wind_direction[1-1] + NN;
				}else if(z_nubes == 4){//D254
					z_output = G + z_wind_direction[1-1] + NN;
				}else if(z_nubes == 5){//D255
					z_output = M + z_wind_direction[1-1] + NN;
				}
			}//Fin segundo numero
			
		}else if(z_hpa == 3){//D3xx
			if(z_trend == 1){//D31x Segundo numero, tendencia de la presion
				if(z_nubes == 1){//D311
					z_output = C + z_wind_direction[1-1] + FF;
				}else if(z_nubes == 2){//D312
					z_output = C + z_wind_direction[1-1] + FF;
				}else if(z_nubes == 3){//D313
					z_output = C + z_wind_direction[1-1] + FF;
				}else if(z_nubes == 4){//D314
					z_output = C + z_wind_direction[1-1] + FF;
				}else if(z_nubes == 5){//D315
					z_output = U + z_wind_direction[1-1] + FF;
				}
			}else if(z_trend == 2){//D32x
				if(z_nubes == 1){//D321
					z_output = A + z_wind_direction[1-1] + UU;
				}else if(z_nubes == 2){//D322
					z_output = A + z_wind_direction[1-1] + UU;
				}else if(z_nubes == 3){//D323
					z_output = A + z_wind_direction[1-1] + UU;
				}else if(z_nubes == 4){//D324
					z_output = D + z_wind_direction[1-1] + UU;
				}else if(z_nubes == 5){//D325
					z_output = R + z_wind_direction[1-1] + UU;
				}
			}else if(z_trend == 3){//D33x
				if(z_nubes == 1){//D331
					z_output = A + z_wind_direction[1-1] + UU;
				}else if(z_nubes == 2){//D332
					z_output = A + z_wind_direction[1-1] + UU;
				}else if(z_nubes == 3){//D333
					z_output = A + z_wind_direction[1-1] + UU;
				}else if(z_nubes == 4){//D334
					z_output = G + z_wind_direction[1-1] + UU;
				}else if(z_nubes == 5){//D335
					z_output = J + z_wind_direction[1-1] + UU;
				}
			}else if(z_trend == 4){//D34x
				if(z_nubes == 1){//D341
					z_output = G + z_wind_direction[1-1] + NN;
				}else if(z_nubes == 2){//D342
					z_output = G + z_wind_direction[1-1] + NN;
				}else if(z_nubes == 3){//D343
					z_output = G + z_wind_direction[1-1] + NN;
				}else if(z_nubes == 4){//D344
					z_output = G + z_wind_direction[1-1] + NN;
				}else if(z_nubes == 5){//D345
					z_output = M + z_wind_direction[1-1] + NN;
				}
			}else if(z_trend == 5){//D35x
				if(z_nubes == 1){//D351
					z_output = G + z_wind_direction[1-1] + NN;
				}else if(z_nubes == 2){//D352
					z_output = G + z_wind_direction[1-1] + NN;
				}else if(z_nubes == 3){//D353
					z_output = G + z_wind_direction[1-1] + NN;
				}else if(z_nubes == 4){//D354
					z_output = G + z_wind_direction[1-1] + NN;
				}else if(z_nubes == 5){//D355
					z_output = M + z_wind_direction[1-1] + NN;
				}
			}//Fin segundo numero
		}else if(z_hpa == 4){//D4xx
			if(z_trend == 1){//D41x Segundo numero, tendencia de la presion
				if(z_nubes == 1){//D411
					z_output = C + z_wind_direction[1-1] + FF;
				}else if(z_nubes == 2){//D412
					z_output = C + z_wind_direction[1-1] + FF;
				}else if(z_nubes == 3){//D413
					z_output = C + z_wind_direction[1-1] + FF;
				}else if(z_nubes == 4){//D414
					z_output = Y + z_wind_direction[1-1] + FF;
				}else if(z_nubes == 5){//D415
					z_output = S + z_wind_direction[1-1] + FF;
				}
			}else if(z_trend == 2){//D42x
				if(z_nubes == 1){//D421
					z_output = C + z_wind_direction[1-1] + FF;
				}else if(z_nubes == 2){//D422
					z_output = C + z_wind_direction[1-1] + FF;
				}else if(z_nubes == 3){//D423
					z_output = C + z_wind_direction[1-1] + FF;
				}else if(z_nubes == 4){//D424
					z_output = F + z_wind_direction[1-1] + FF;
				}else if(z_nubes == 5){//D425
					z_output = S + z_wind_direction[1-1] + FF;
				}
			}else if(z_trend == 3){//D43x
				if(z_nubes == 1){//D431
					z_output = A + z_wind_direction[1-1] + FF;
				}else if(z_nubes == 2){//D432
					z_output = A + z_wind_direction[1-1] + FF;
				}else if(z_nubes == 3){//D433
					z_output = A + z_wind_direction[1-1] + FF;
				}else if(z_nubes == 4){//D434
					z_output = G + z_wind_direction[1-1] + FF;
				}else if(z_nubes == 5){//D435
					z_output = J + z_wind_direction[1-1] + FF;
				}
			}else if(z_trend == 4){//D44x
				if(z_nubes == 1){//D441
					z_output = G + z_wind_direction[1-1] + NN;
				}else if(z_nubes == 2){//D442
					z_output = G + z_wind_direction[1-1] + NN;
				}else if(z_nubes == 3){//D443
					z_output = G + z_wind_direction[1-1] + NN;
				}else if(z_nubes == 4){//D444
					z_output = M + z_wind_direction[1-1] + NN;
				}else if(z_nubes == 5){//D445
					z_output = M + z_wind_direction[1-1] + NN;
				}
			}else if(z_trend == 5){//D45x
				if(z_nubes == 1){//D451
					z_output = G + z_wind_direction[1-1] + SS;
				}else if(z_nubes == 2){//D452
					z_output = M + z_wind_direction[1-1] + SS;
				}else if(z_nubes == 3){//D453
					z_output = M + z_wind_direction[1-1] + SS;
				}else if(z_nubes == 4){//D454
					z_output = M + z_wind_direction[1-1] + SS;
				}else if(z_nubes == 5){//D455
					z_output = M + z_wind_direction[1-1] + SS;
				}
			}//Fin segundo numero
		}else if(z_hpa == 5){//D5xx
			if(z_trend == 1){//D51x Segundo numero, tendencia de la presion
				if(z_nubes == 1){//D511
					z_output = C + z_wind_direction[1-1] + SS;
				}else if(z_nubes == 2){//D512
					z_output = C + z_wind_direction[1-1] + SS;
				}else if(z_nubes == 3){//D513
					z_output = C + z_wind_direction[1-1] + SS;
				}else if(z_nubes == 4){//D514
					z_output = F + z_wind_direction[1-1] + SS;
				}else if(z_nubes == 5){//D515
					z_output = S + z_wind_direction[1-1] + SS;
				}
			}else if(z_trend == 2){//D52x
				if(z_nubes == 1){//D521
					z_output = C + z_wind_direction[1-1] + SS;
				}else if(z_nubes == 2){//D522
					z_output = C + z_wind_direction[1-1] + SS;
				}else if(z_nubes == 3){//D523
					z_output = C + z_wind_direction[1-1] + SS;
				}else if(z_nubes == 4){//D524
					z_output = F + z_wind_direction[1-1] + SS;
				}else if(z_nubes == 5){//D525
					z_output = S + z_wind_direction[1-1] + SS;
				}
			}else if(z_trend == 3){//D53x
				if(z_nubes == 1){//D531
					z_output = A + z_wind_direction[1-1] + SS;
				}else if(z_nubes == 2){//D532
					z_output = X + z_wind_direction[1-1] + SS;
				}else if(z_nubes == 3){//D533
					z_output = J + z_wind_direction[1-1] + SS;
				}else if(z_nubes == 4){//D534
					z_output = J + z_wind_direction[1-1] + SS;
				}else if(z_nubes == 5){//D535
					z_output = J + z_wind_direction[1-1] + SS;
				}
			}else if(z_trend == 4){//D54x
				if(z_nubes == 1){//D541
					z_output = J + z_wind_direction[1-1] + SS;
				}else if(z_nubes == 2){//D542
					z_output = J + z_wind_direction[1-1] + SS;
				}else if(z_nubes == 3){//D543
					z_output = M + z_wind_direction[1-1] + SS;
				}else if(z_nubes == 4){//D544
					z_output = M + z_wind_direction[1-1] + SS;
				}else if(z_nubes == 5){//D545
					z_output = M + z_wind_direction[1-1] + SS;
				}
			}else if(z_trend == 5){//D55x
				if(z_nubes == 1){//D551
					z_output = M + z_wind_direction[1-1] + SS;
				}else if(z_nubes == 2){//D552
					z_output = M + z_wind_direction[1-1] + SS;
				}else if(z_nubes == 3){//D553
					z_output = M + z_wind_direction[1-1] + SS;
				}else if(z_nubes == 4){//D554
					z_output = M + z_wind_direction[1-1] + SS;
				}else if(z_nubes == 5){//D555
					z_output = M + z_wind_direction[1-1] + SS;
				}
			}//Fin segundo numero
		}else if(z_hpa == 6){//D6xx
			if(z_trend == 1){//D61x Segundo numero, tendencia de la presion
				if(z_nubes == 1){//D611
					z_output = Y + z_wind_direction[1-1] + "early, changing to  " + z_wind_direction[8-1] + SS;
				}else if(z_nubes == 2){//D612
					z_output = Y + z_wind_direction[1-1] + "early, changing to  " + z_wind_direction[8-1] + SS;
				}else if(z_nubes == 3){//D613
					z_output = F + z_wind_direction[1-1] + "early, changing to  " + z_wind_direction[8-1] + SS;
				}else if(z_nubes == 4){//D614
					z_output = S + z_wind_direction[1-1] + "early, changing to  " + z_wind_direction[8-1] + SS;
				}else if(z_nubes == 5){//D615
					z_output = S + z_wind_direction[1-1] + "early, changing to  " + z_wind_direction[8-1] + SS;
				}
			}else if(z_trend == 2){//D62x
				if(z_nubes == 1){//D621
					z_output = F + z_wind_direction[1-1] + "early, changing to  " + z_wind_direction[8-1] + SS;
				}else if(z_nubes == 2){//D622
					z_output = F + z_wind_direction[1-1] + "early, changing to  " + z_wind_direction[8-1] + SS;
				}else if(z_nubes == 3){//D623
					z_output = F + z_wind_direction[1-1] + "early, changing to  " + z_wind_direction[8-1] + SS;
				}else if(z_nubes == 4){//D624
					z_output = S + z_wind_direction[1-1] + "early, changing to  " + z_wind_direction[8-1] + SS;
				}else if(z_nubes == 5){//D625
					z_output = S + z_wind_direction[1-1] + "early, changing to  " + z_wind_direction[8-1] + SS;
				}
			}else if(z_trend == 3){//D63x
				if(z_nubes == 1){//D631
					z_output = L + z_wind_direction[1-1] + "early, changing to  " + z_wind_direction[8-1] + SS;
				}else if(z_nubes == 2){//D632
					z_output = L + z_wind_direction[1-1] + "early, changing to  " + z_wind_direction[8-1] + SS;
				}else if(z_nubes == 3){//D633
					z_output = L + z_wind_direction[1-1] + "early, changing to  " + z_wind_direction[8-1] + SS;
				}else if(z_nubes == 4){//D634
					z_output = L + z_wind_direction[1-1] + "early, changing to  " + z_wind_direction[8-1] + SS;
				}else if(z_nubes == 5){//D635
					z_output = L + z_wind_direction[1-1] + "early, changing to  " + z_wind_direction[8-1] + FF;
				}
			}else if(z_trend == 4){//D64x
				if(z_nubes == 1){//D641
					z_output = L + z_wind_direction[1-1] + "early, changing to  " + z_wind_direction[8-1] + GG;
				}else if(z_nubes == 2){//D642
					z_output = P + z_wind_direction[1-1] + "early, changing to  " + z_wind_direction[8-1] + GG;
				}else if(z_nubes == 3){//D643
					z_output = P + z_wind_direction[1-1] + "early, changing to  " + z_wind_direction[8-1] + GG;
				}else if(z_nubes == 4){//D644
					z_output = P + z_wind_direction[1-1] + "early, changing to  " + z_wind_direction[8-1] + GG;
				}else if(z_nubes == 5){//D645
					z_output = P + z_wind_direction[1-1] + "early, changing to  " + z_wind_direction[8-1] + GG;
				}
			}else if(z_trend == 5){//D65x
				if(z_nubes == 1){//D651
					z_output = P + z_wind_direction[1-1] + "early, changing to  " + z_wind_direction[8-1] + GG;
				}else if(z_nubes == 2){//D652
					z_output = P + z_wind_direction[1-1] + "early, changing to  " + z_wind_direction[8-1] + GG;
				}else if(z_nubes == 3){//D653
					z_output = P + z_wind_direction[1-1] + "early, changing to  " + z_wind_direction[8-1] + GG;
				}else if(z_nubes == 4){//D654
					z_output = P + z_wind_direction[1-1] + "early, changing to  " + z_wind_direction[8-1] + GG;
				}else if(z_nubes == 5){//D655
					z_output = P + z_wind_direction[1-1] + "early, changing to  " + z_wind_direction[8-1] + GG;
				}
			}//Fin segundo numero
		}else if(z_hpa == 7){//D7xx
			if(z_trend == 1){//D71x Segundo numero, tendencia de la presion
				if(z_nubes == 1){//D711
					z_output = S + z_wind_direction[1-1] + "early, changing to  " + z_wind_direction[8-1] + GG;
				}else if(z_nubes == 2){//D712
					z_output = S + z_wind_direction[1-1] + "early, changing to  " + z_wind_direction[8-1] + GG;
				}else if(z_nubes == 3){//D713
					z_output = S + z_wind_direction[1-1] + "early, changing to  " + z_wind_direction[8-1] + GG;
				}else if(z_nubes == 4){//D714
					z_output = S + z_wind_direction[1-1] + "early, changing to  " + z_wind_direction[8-1] + GG;
				}else if(z_nubes == 5){//D715
					z_output = S + z_wind_direction[1-1] + "early, changing to  " + z_wind_direction[8-1] + GG;
				}
			}else if(z_trend == 2){//D72x
				if(z_nubes == 1){//D721
					z_output = S + z_wind_direction[1-1] + "early, changing to  " + z_wind_direction[8-1] + GG;
				}else if(z_nubes == 2){//D722
					z_output = S + z_wind_direction[1-1] + "early, changing to  " + z_wind_direction[8-1] + GG;
				}else if(z_nubes == 3){//D723
					z_output = S + z_wind_direction[1-1] + "early, changing to  " + z_wind_direction[8-1] + GG;
				}else if(z_nubes == 4){//D724
					z_output = S + z_wind_direction[1-1] + "early, changing to  " + z_wind_direction[8-1] + GG;
				}else if(z_nubes == 5){//D725
					z_output = S + z_wind_direction[1-1] + "early, changing to  " + z_wind_direction[8-1] + GG;
				}
			}else if(z_trend == 3){//D73x
			if(z_nubes == 1){//D731
					z_output = L + z_wind_direction[1-1] + "early, changing to  " + z_wind_direction[8-1] + GG;
				}else if(z_nubes == 2){//D732
					z_output = L + z_wind_direction[1-1] + "early, changing to  " + z_wind_direction[8-1] + GG;
				}else if(z_nubes == 3){//D733
					z_output = L + z_wind_direction[1-1] + "early, changing to  " + z_wind_direction[8-1] + GG;
				}else if(z_nubes == 4){//D734
					z_output = P + z_wind_direction[1-1] + "early, changing to  " + z_wind_direction[8-1] + GG;
				}else if(z_nubes == 5){//D735
					z_output = P + z_wind_direction[1-1] + "early, changing to  " + z_wind_direction[8-1] + GG;
				}
			}else if(z_trend == 4){//D74x
				if(z_nubes == 1){//D741
					z_output = P + z_wind_direction[1-1] + "early, changing to  " + z_wind_direction[8-1] + WW;
				}else if(z_nubes == 2){//D742
					z_output = P + z_wind_direction[1-1] + "early, changing to  " + z_wind_direction[8-1] + WW;
				}else if(z_nubes == 3){//D743
					z_output = P + z_wind_direction[1-1] + "early, changing to  " + z_wind_direction[8-1] + WW;
				}else if(z_nubes == 4){//D744
					z_output = P + z_wind_direction[1-1] + "early, changing to  " + z_wind_direction[8-1] + WW;
				}else if(z_nubes == 5){//D745
					z_output = P + z_wind_direction[1-1] + "early, changing to  " + z_wind_direction[8-1] + WW;
				}
			}else if(z_trend == 5){//D75x
				if(z_nubes == 1){//D751
					z_output = P + z_wind_direction[1-1] + "early, changing to  " + z_wind_direction[8-1] + WW;
				}else if(z_nubes == 2){//D752
					z_output = P + z_wind_direction[1-1] + "early, changing to  " + z_wind_direction[8-1] + WW;
				}else if(z_nubes == 3){//D753
					z_output = P + z_wind_direction[1-1] + "early, changing to  " + z_wind_direction[8-1] + WW;
				}else if(z_nubes == 4){//D754
					z_output = P + z_wind_direction[1-1] + "early, changing to  " + z_wind_direction[8-1] + WW;
				}else if(z_nubes == 5){//D755
					z_output = P + z_wind_direction[1-1] + "early, changing to  " + z_wind_direction[8-1] + WW;
				}
			}//Fin segundo numero
		}else if (z_hpa == 8) {//D8xx
			if(z_trend == 1){//D81x Segundo numero, tendencia de la presion
				if(z_nubes == 1){//D811
					z_output = L + z_wind_direction[1-1] + "early, changing to  " + z_wind_direction[8-1] + WW;
				}else if(z_nubes == 2){//D812
					z_output = L + z_wind_direction[1-1] + "early, changing to  " + z_wind_direction[8-1] + WW;
				}else if(z_nubes == 3){//D813
					z_output = L + z_wind_direction[1-1] + "early, changing to  " + z_wind_direction[8-1] + WW;
				}else if(z_nubes == 4){//D814
					z_output = L + z_wind_direction[1-1] + "early, changing to  " + z_wind_direction[8-1] + WW;
				}else if(z_nubes == 5){//D815
					z_output = L + z_wind_direction[1-1] + "early, changing to  " + z_wind_direction[8-1] + WW;
				}
			}else if(z_trend == 2){//D82x
				if(z_nubes == 1){//D821
					z_output = L + z_wind_direction[1-1] + "early, changing to  " + z_wind_direction[8-1] + WW;
				}else if(z_nubes == 2){//D822
					z_output = L + z_wind_direction[1-1] + "early, changing to  " + z_wind_direction[8-1] + WW;
				}else if(z_nubes == 3){//D823
					z_output = L + z_wind_direction[1-1] + "early, changing to  " + z_wind_direction[8-1] + WW;
				}else if(z_nubes == 4){//D824
					z_output = L + z_wind_direction[1-1] + "early, changing to  " + z_wind_direction[8-1] + WW;
				}else if(z_nubes == 5){//D825
					z_output = L + z_wind_direction[1-1] + "early, changing to  " + z_wind_direction[8-1] + WW;
				}
			}else if(z_trend == 3){//D83x
			if(z_nubes == 1){//D831
					z_output = P + z_wind_direction[1-1] + "early, changing to  " + z_wind_direction[8-1] + WW;
				}else if(z_nubes == 2){//D832
					z_output = P + z_wind_direction[1-1] + "early, changing to  " + z_wind_direction[8-1] + WW;
				}else if(z_nubes == 3){//D833
					z_output = P + z_wind_direction[1-1] + "early, changing to  " + z_wind_direction[8-1] + WW;
				}else if(z_nubes == 4){//D834
					z_output = P + z_wind_direction[1-1] + "early, changing to  " + z_wind_direction[8-1] + WW;
				}else if(z_nubes == 5){//D835
					z_output = P + z_wind_direction[1-1] + "early, changing to  " + z_wind_direction[8-1] + WW;
				}
			}else if(z_trend == 4){//D84x
				if(z_nubes == 1){//D841
					z_output = P + z_wind_direction[1-1] + "early, changing to  " + z_wind_direction[8-1] + WW;
				}else if(z_nubes == 2){//D842
					z_output = P + z_wind_direction[1-1] + "early, changing to  " + z_wind_direction[8-1] + WW;
				}else if(z_nubes == 3){//D843
					z_output = P + z_wind_direction[1-1] + "early, changing to  " + z_wind_direction[8-1] + WW;
				}else if(z_nubes == 4){//D844
					z_output = P + z_wind_direction[1-1] + "early, changing to  " + z_wind_direction[8-1] + WW;
				}else if(z_nubes == 5){//D845
					z_output = P + z_wind_direction[1-1] + "early, changing to  " + z_wind_direction[8-1] + WW;
				}
			}else if(z_trend == 5){//D85x
				if(z_nubes == 1){//D851
					z_output = P + z_wind_direction[1-1] + "early, changing to  " + z_wind_direction[8-1] + HH;
				}else if(z_nubes == 2){//D852
					z_output = P + z_wind_direction[1-1] + "early, changing to  " + z_wind_direction[8-1] + HH;
				}else if(z_nubes == 3){//D853
					z_output = P + z_wind_direction[1-1] + "early, changing to  " + z_wind_direction[8-1] + HH;
				}else if(z_nubes == 4){//D854
					z_output = P + z_wind_direction[1-1] + "early, changing to  " + z_wind_direction[8-1] + HH;
				}else if(z_nubes == 5){//D855
					z_output = P + z_wind_direction[1-1] + "early, changing to  " + z_wind_direction[8-1] + HH;
				}
			}//Fin segundo numero
		}//Fin primer numero
			
	}//Fin letra D


	////////////////////////////////////////////////////////////////////

	//LETRA E
	
	if(z_output == "E"){
		if(z_hpa == 1){//E1xx Primer numero, presion atmosferica
			if(z_trend == 1){//E11x Segundo numero, tendencia de la presion
				if(z_nubes == 1){//E111
					z_output = A + z_wind_direction[1-1] + UU;
				}else if(z_nubes == 2){//E112
					z_output = A + z_wind_direction[1-1] + UU;
				}else if(z_nubes == 3){//E113
					z_output = A + z_wind_direction[1-1] + UU;
				}else if(z_nubes == 4){//E114
					z_output = A + z_wind_direction[1-1] + UU;
				}else if(z_nubes == 5){//E115
					z_output = T + z_wind_direction[1-1] + UU;
				}
			}else if(z_trend == 2){//E12x
				if(z_nubes == 1){//E121
					z_output = A + z_wind_direction[1-1] + UU;
				}else if(z_nubes == 2){//E122
					z_output = A + z_wind_direction[1-1] + UU;
				}else if(z_nubes == 3){//E123
					z_output = A + z_wind_direction[1-1] + UU;
				}else if(z_nubes == 4){//E124
					z_output = D + z_wind_direction[1-1] + UU;
				}else if(z_nubes == 5){//E125
					z_output = R + z_wind_direction[1-1] + UU;
				}
			}else if(z_trend == 3){//E13x
				if(z_nubes == 1){//E131
					z_output = A + z_wind_direction[1-1] + UU;
				}else if(z_nubes == 2){//E132
					z_output = A + z_wind_direction[1-1] + UU;
				}else if(z_nubes == 3){//E133
					z_output = A + z_wind_direction[1-1] + UU;
				}else if(z_nubes == 4){//E134
					z_output = G + z_wind_direction[1-1] + UU;
				}else if(z_nubes == 5){//E135
					z_output = J + z_wind_direction[1-1] + UU;
				}
			}else if(z_trend == 4){//14x
				if(z_nubes == 1){//141
					z_output = D + z_wind_direction[2-1] + NN;
				}else if(z_nubes == 2){//E142
					z_output = G + z_wind_direction[2-1] + NN;
				}else if(z_nubes == 3){//E143
					z_output = G + z_wind_direction[2-1] + NN;
				}else if(z_nubes == 4){//E144
					z_output = G + z_wind_direction[2-1] + NN;
				}else if(z_nubes == 5){//E145
					z_output = M + z_wind_direction[2-1] + NN;
				}
			}else if(z_trend == 5){//15x
				if(z_nubes == 1){//151
					z_output = G + z_wind_direction[2-1] + NN;
				}else if(z_nubes == 2){//E152
					z_output = G + z_wind_direction[2-1] + NN;
				}else if(z_nubes == 3){//E153
					z_output = G + z_wind_direction[2-1] + NN;
				}else if(z_nubes == 4){//E154
					z_output = G + z_wind_direction[2-1] + NN;
				}else if(z_nubes == 5){//E155
					z_output = M + z_wind_direction[2-1] + NN;
				}
		
				
			}//Fin segundo numero
		}else if(z_hpa == 2){//E2xx
			if(z_trend == 1){//E21x Segundo numero, tendencia de la presion
				if(z_nubes == 1){//E211
					z_output = C + z_wind_direction[1-1] + UU;
				}else if(z_nubes == 2){//E212
					z_output = C + z_wind_direction[1-1] + UU;
				}else if(z_nubes == 3){//E213
					z_output = C + z_wind_direction[1-1] + UU;
				}else if(z_nubes == 4){//E214
					z_output = C + z_wind_direction[1-1] + UU;
				}else if(z_nubes == 5){//E215
					z_output = U + z_wind_direction[1-1] + UU;
				}
			}else if(z_trend == 2){//E22x
				if(z_nubes == 1){//E221
					z_output = A + z_wind_direction[1-1] + UU;
				}else if(z_nubes == 2){//E222
					z_output = A + z_wind_direction[1-1] + UU;
				}else if(z_nubes == 3){//E223
					z_output = A + z_wind_direction[1-1] + UU;
				}else if(z_nubes == 4){//E224
					z_output = D + z_wind_direction[1-1] + UU;
				}else if(z_nubes == 5){//E225
					z_output = R + z_wind_direction[1-1] + UU;
				}
			}else if(z_trend == 3){//E23x
				if(z_nubes == 1){//E231
					z_output = A + z_wind_direction[1-1] + UU;
				}else if(z_nubes == 2){//E232
					z_output = A + z_wind_direction[1-1] + UU;
				}else if(z_nubes == 3){//E233
					z_output = A + z_wind_direction[1-1] + UU;
				}else if(z_nubes == 4){//E234
					z_output = G + z_wind_direction[1-1] + UU;
				}else if(z_nubes == 5){//E235
					z_output = J + z_wind_direction[1-1] + UU;
				}
			}else if(z_trend == 4){//E24x
				if(z_nubes == 1){//E241
					z_output = D + z_wind_direction[2-1] + NN;
				}else if(z_nubes == 2){//E242
					z_output = G + z_wind_direction[2-1] + NN;
				}else if(z_nubes == 3){//E243
					z_output = G + z_wind_direction[2-1] + NN;
				}else if(z_nubes == 4){//E244
					z_output = G + z_wind_direction[2-1] + NN;
				}else if(z_nubes == 5){//E245
					z_output = M + z_wind_direction[2-1] + NN;
				}
			}else if(z_trend == 5){//E25x
				if(z_nubes == 1){//E251
					z_output = G + z_wind_direction[2-1] + NN;
				}else if(z_nubes == 2){//E252
					z_output = G + z_wind_direction[2-1] + NN;
				}else if(z_nubes == 3){//E253
					z_output = G + z_wind_direction[2-1] + NN;
				}else if(z_nubes == 4){//E254
					z_output = G + z_wind_direction[2-1] + NN;
				}else if(z_nubes == 5){//E255
					z_output = M + z_wind_direction[2-1] + NN;
				}
			}//Fin segundo numero
			
		}else if(z_hpa == 3){//E3xx
			if(z_trend == 1){//E31x Segundo numero, tendencia de la presion
				if(z_nubes == 1){//E311
					z_output = C + z_wind_direction[1-1] + FF;
				}else if(z_nubes == 2){//E312
					z_output = C + z_wind_direction[1-1] + FF;
				}else if(z_nubes == 3){//E313
					z_output = C + z_wind_direction[1-1] + FF;
				}else if(z_nubes == 4){//E314
					z_output = C + z_wind_direction[1-1] + FF;
				}else if(z_nubes == 5){//E315
					z_output = U + z_wind_direction[1-1] + FF;
				}
			}else if(z_trend == 2){//E32x
				if(z_nubes == 1){//E321
					z_output = A + z_wind_direction[1-1] + UU;
				}else if(z_nubes == 2){//E322
					z_output = A + z_wind_direction[1-1] + UU;
				}else if(z_nubes == 3){//E323
					z_output = A + z_wind_direction[1-1] + UU;
				}else if(z_nubes == 4){//E324
					z_output = D + z_wind_direction[1-1] + UU;
				}else if(z_nubes == 5){//E325
					z_output = R + z_wind_direction[1-1] + UU;
				}
			}else if(z_trend == 3){//E33x
				if(z_nubes == 1){//E331
					z_output = A + z_wind_direction[1-1] + UU;
				}else if(z_nubes == 2){//E332
					z_output = A + z_wind_direction[1-1] + UU;
				}else if(z_nubes == 3){//E333
					z_output = A + z_wind_direction[1-1] + UU;
				}else if(z_nubes == 4){//E334
					z_output = G + z_wind_direction[1-1] + UU;
				}else if(z_nubes == 5){//E335
					z_output = J + z_wind_direction[1-1] + UU;
				}
			}else if(z_trend == 4){//E34x
				if(z_nubes == 1){//E341
					z_output = G + z_wind_direction[2-1] + NN;
				}else if(z_nubes == 2){//E342
					z_output = G + z_wind_direction[2-1] + NN;
				}else if(z_nubes == 3){//E343
					z_output = G + z_wind_direction[2-1] + NN;
				}else if(z_nubes == 4){//E344
					z_output = G + z_wind_direction[2-1] + NN;
				}else if(z_nubes == 5){//E345
					z_output = M + z_wind_direction[2-1] + NN;
				}
			}else if(z_trend == 5){//E35x
				if(z_nubes == 1){//E351
					z_output = G + z_wind_direction[2-1] + NN;
				}else if(z_nubes == 2){//E352
					z_output = G + z_wind_direction[2-1] + NN;
				}else if(z_nubes == 3){//E353
					z_output = G + z_wind_direction[2-1] + NN;
				}else if(z_nubes == 4){//E354
					z_output = G + z_wind_direction[2-1] + NN;
				}else if(z_nubes == 5){//E355
					z_output = M + z_wind_direction[2-1] + NN;
				}
			}//Fin segundo numero
		}else if(z_hpa == 4){//E4xx
			if(z_trend == 1){//E41x Segundo numero, tendencia de la presion
				if(z_nubes == 1){//E411
					z_output = C + z_wind_direction[1-1] + FF;
				}else if(z_nubes == 2){//E412
					z_output = C + z_wind_direction[1-1] + FF;
				}else if(z_nubes == 3){//E413
					z_output = C + z_wind_direction[1-1] + FF;
				}else if(z_nubes == 4){//E414
					z_output = Y + z_wind_direction[1-1] + FF;
				}else if(z_nubes == 5){//E415
					z_output = S + z_wind_direction[1-1] + FF;
				}
			}else if(z_trend == 2){//E42x
				if(z_nubes == 1){//E421
					z_output = C + z_wind_direction[1-1] + FF;
				}else if(z_nubes == 2){//E422
					z_output = C + z_wind_direction[1-1] + FF;
				}else if(z_nubes == 3){//E423
					z_output = C + z_wind_direction[1-1] + FF;
				}else if(z_nubes == 4){//E424
					z_output = F + z_wind_direction[1-1] + FF;
				}else if(z_nubes == 5){//E425
					z_output = S + z_wind_direction[1-1] + FF;
				}
			}else if(z_trend == 3){//E43x
				if(z_nubes == 1){//E431
					z_output = A + z_wind_direction[1-1] + FF;
				}else if(z_nubes == 2){//E432
					z_output = A + z_wind_direction[1-1] + FF;
				}else if(z_nubes == 3){//E433
					z_output = A + z_wind_direction[1-1] + FF;
				}else if(z_nubes == 4){//E434
					z_output = G + z_wind_direction[1-1] + FF;
				}else if(z_nubes == 5){//E435
					z_output = J + z_wind_direction[1-1] + FF;
				}
			}else if(z_trend == 4){//E44x
				if(z_nubes == 1){//E441
					z_output = G + z_wind_direction[2-1] + NN;
				}else if(z_nubes == 2){//E442
					z_output = G + z_wind_direction[2-1] + NN;
				}else if(z_nubes == 3){//E443
					z_output = G + z_wind_direction[2-1] + NN;
				}else if(z_nubes == 4){//E444
					z_output = M + z_wind_direction[2-1] + NN;
				}else if(z_nubes == 5){//E445
					z_output = M + z_wind_direction[2-1] + NN;
				}
			}else if(z_trend == 5){//E45x
				if(z_nubes == 1){//E451
					z_output = G + z_wind_direction[2-1] + SS;
				}else if(z_nubes == 2){//E452
					z_output = M + z_wind_direction[2-1] + SS;
				}else if(z_nubes == 3){//E453
					z_output = M + z_wind_direction[2-1] + SS;
				}else if(z_nubes == 4){//E454
					z_output = M + z_wind_direction[2-1] + SS;
				}else if(z_nubes == 5){//E455
					z_output = M + z_wind_direction[2-1] + SS;
				}
			}//Fin segundo numero
		}else if(z_hpa == 5){//E5xx
			if(z_trend == 1){//E51x Segundo numero, tendencia de la presion
				if(z_nubes == 1){//E511
					z_output = C + z_wind_direction[1-1] + SS;
				}else if(z_nubes == 2){//E512
					z_output = C + z_wind_direction[1-1] + SS;
				}else if(z_nubes == 3){//E513
					z_output = C + z_wind_direction[1-1] + SS;
				}else if(z_nubes == 4){//E514
					z_output = F + z_wind_direction[1-1] + SS;
				}else if(z_nubes == 5){//E515
					z_output = S + z_wind_direction[1-1] + SS;
				}
			}else if(z_trend == 2){//E52x
				if(z_nubes == 1){//E521
					z_output = C + z_wind_direction[1-1] + SS;
				}else if(z_nubes == 2){//E522
					z_output = C + z_wind_direction[1-1] + SS;
				}else if(z_nubes == 3){//E523
					z_output = C + z_wind_direction[1-1] + SS;
				}else if(z_nubes == 4){//E524
					z_output = F + z_wind_direction[1-1] + SS;
				}else if(z_nubes == 5){//E525
					z_output = S + z_wind_direction[1-1] + SS;
				}
			}else if(z_trend == 3){//E53x
				if(z_nubes == 1){//E531
					z_output = A + z_wind_direction[1-1] + SS;
				}else if(z_nubes == 2){//E532
					z_output = X + z_wind_direction[1-1] + SS;
				}else if(z_nubes == 3){//E533
					z_output = J + z_wind_direction[1-1] + SS;
				}else if(z_nubes == 4){//E534
					z_output = J + z_wind_direction[1-1] + SS;
				}else if(z_nubes == 5){//E535
					z_output = J + z_wind_direction[1-1] + SS;
				}
			}else if(z_trend == 4){//E54x
				if(z_nubes == 1){//E541
					z_output = J + z_wind_direction[1-1] + SS;
				}else if(z_nubes == 2){//E542
					z_output = J + z_wind_direction[1-1] + SS;
				}else if(z_nubes == 3){//E543
					z_output = M + z_wind_direction[1-1] + SS;
				}else if(z_nubes == 4){//E544
					z_output = M + z_wind_direction[1-1] + SS;
				}else if(z_nubes == 5){//E545
					z_output = M + z_wind_direction[1-1] + SS;
				}
			}else if(z_trend == 5){//E55x
				if(z_nubes == 1){//E551
					z_output = M + z_wind_direction[2-1] + SS;
				}else if(z_nubes == 2){//E552
					z_output = M + z_wind_direction[2-1] + SS;
				}else if(z_nubes == 3){//E553
					z_output = M + z_wind_direction[2-1] + SS;
				}else if(z_nubes == 4){//E554
					z_output = M + z_wind_direction[2-1] + SS;
				}else if(z_nubes == 5){//E555
					z_output = M + z_wind_direction[2-1] + SS;
				}
			}//Fin segundo numero
		}else if(z_hpa == 6){//E6xx
			if(z_trend == 1){//E61x Segundo numero, tendencia de la presion
				if(z_nubes == 1){//E611
					z_output = Y + z_wind_direction[1-1] + "early, changing to  " + z_wind_direction[8-1] + SS;
				}else if(z_nubes == 2){//E612
					z_output = Y + z_wind_direction[1-1] + "early, changing to  " + z_wind_direction[8-1] + SS;
				}else if(z_nubes == 3){//E613
					z_output = F + z_wind_direction[1-1] + "early, changing to  " + z_wind_direction[8-1] + SS;
				}else if(z_nubes == 4){//E614
					z_output = S + z_wind_direction[1-1] + "early, changing to  " + z_wind_direction[8-1] + SS;
				}else if(z_nubes == 5){//E615
					z_output = S + z_wind_direction[1-1] + "early, changing to  " + z_wind_direction[8-1] + SS;
				}
			}else if(z_trend == 2){//E62x
				if(z_nubes == 1){//E621
					z_output = F + z_wind_direction[1-1] + "early, changing to  " + z_wind_direction[8-1] + SS;
				}else if(z_nubes == 2){//E622
					z_output = F + z_wind_direction[1-1] + "early, changing to  " + z_wind_direction[8-1] + SS;
				}else if(z_nubes == 3){//E623
					z_output = F + z_wind_direction[1-1] + "early, changing to  " + z_wind_direction[8-1] + SS;
				}else if(z_nubes == 4){//E624
					z_output = S + z_wind_direction[1-1] + "early, changing to  " + z_wind_direction[8-1] + SS;
				}else if(z_nubes == 5){//E625
					z_output = S + z_wind_direction[1-1] + "early, changing to  " + z_wind_direction[8-1] + SS;
				}
			}else if(z_trend == 3){//E63x
				if(z_nubes == 1){//E631
					z_output = L + z_wind_direction[1-1] + "early, changing to  " + z_wind_direction[8-1] + SS;
				}else if(z_nubes == 2){//E632
					z_output = L + z_wind_direction[1-1] + "early, changing to  " + z_wind_direction[8-1] + SS;
				}else if(z_nubes == 3){//E633
					z_output = L + z_wind_direction[1-1] + "early, changing to  " + z_wind_direction[8-1] + SS;
				}else if(z_nubes == 4){//E634
					z_output = L + z_wind_direction[1-1] + "early, changing to  " + z_wind_direction[8-1] + SS;
				}else if(z_nubes == 5){//E635
					z_output = L + z_wind_direction[1-1] + "early, changing to  " + z_wind_direction[8-1] + SS;
				}
			}else if(z_trend == 4){//E64x
				if(z_nubes == 1){//E641
					z_output = L + z_wind_direction[1-1] + "early, changing to  " + z_wind_direction[8-1] + GG;
				}else if(z_nubes == 2){//E642
					z_output = P + z_wind_direction[1-1] + "early, changing to  " + z_wind_direction[8-1] + GG;
				}else if(z_nubes == 3){//E643
					z_output = P + z_wind_direction[1-1] + "early, changing to  " + z_wind_direction[8-1] + GG;
				}else if(z_nubes == 4){//E644
					z_output = P + z_wind_direction[1-1] + "early, changing to  " + z_wind_direction[8-1] + GG;
				}else if(z_nubes == 5){//E645
					z_output = P + z_wind_direction[1-1] + "early, changing to  " + z_wind_direction[8-1] + GG;
				}
			}else if(z_trend == 5){//E65x
				if(z_nubes == 1){//E651
					z_output = P + z_wind_direction[1-1] + "early, changing to  " + z_wind_direction[8-1] + GG;
				}else if(z_nubes == 2){//E652
					z_output = P + z_wind_direction[1-1] + "early, changing to  " + z_wind_direction[8-1] + GG;
				}else if(z_nubes == 3){//E653
					z_output = P + z_wind_direction[1-1] + "early, changing to  " + z_wind_direction[8-1] + GG;
				}else if(z_nubes == 4){//E654
					z_output = P + z_wind_direction[1-1] + "early, changing to  " + z_wind_direction[8-1] + GG;
				}else if(z_nubes == 5){//E655
					z_output = P + z_wind_direction[1-1] + "early, changing to  " + z_wind_direction[8-1] + GG;
				}
			}//Fin segundo numero
		}else if(z_hpa == 7){//E7xx
			if(z_trend == 1){//E71x Segundo numero, tendencia de la presion
				if(z_nubes == 1){//E711
					z_output = S + z_wind_direction[1-1] + "early, changing to  " + z_wind_direction[8-1] + GG;
				}else if(z_nubes == 2){//E712
					z_output = S + z_wind_direction[1-1] + "early, changing to  " + z_wind_direction[8-1] + GG;
				}else if(z_nubes == 3){//E713
					z_output = S + z_wind_direction[1-1] + "early, changing to  " + z_wind_direction[8-1] + GG;
				}else if(z_nubes == 4){//E714
					z_output = S + z_wind_direction[1-1] + "early, changing to  " + z_wind_direction[8-1] + GG;
				}else if(z_nubes == 5){//E715
					z_output = S + z_wind_direction[1-1] + "early, changing to  " + z_wind_direction[8-1] + GG;
				}
			}else if(z_trend == 2){//E72x
				if(z_nubes == 1){//E721
					z_output = S + z_wind_direction[1-1] + "early, changing to  " + z_wind_direction[8-1] + GG;
				}else if(z_nubes == 2){//E722
					z_output = S + z_wind_direction[1-1] + "early, changing to  " + z_wind_direction[8-1] + GG;
				}else if(z_nubes == 3){//E723
					z_output = S + z_wind_direction[1-1] + "early, changing to  " + z_wind_direction[8-1] + GG;
				}else if(z_nubes == 4){//E724
					z_output = S + z_wind_direction[1-1] + "early, changing to  " + z_wind_direction[8-1] + GG;
				}else if(z_nubes == 5){//E725
					z_output = S + z_wind_direction[1-1] + "early, changing to  " + z_wind_direction[8-1] + GG;
				}
			}else if(z_trend == 3){//E73x
			if(z_nubes == 1){//E731
					z_output = L + z_wind_direction[1-1] + "early, changing to  " + z_wind_direction[8-1] + GG;
				}else if(z_nubes == 2){//E732
					z_output = L + z_wind_direction[1-1] + "early, changing to  " + z_wind_direction[8-1] + GG;
				}else if(z_nubes == 3){//E733
					z_output = L + z_wind_direction[1-1] + "early, changing to  " + z_wind_direction[8-1] + GG;
				}else if(z_nubes == 4){//E734
					z_output = P + z_wind_direction[1-1] + "early, changing to  " + z_wind_direction[8-1] + GG;
				}else if(z_nubes == 5){//E735
					z_output = P + z_wind_direction[1-1] + "early, changing to  " + z_wind_direction[8-1] + GG;
				}
			}else if(z_trend == 4){//E74x
				if(z_nubes == 1){//E741
					z_output = P + z_wind_direction[1-1] + "early, changing to  " + z_wind_direction[8-1] + WW;
				}else if(z_nubes == 2){//E742
					z_output = P + z_wind_direction[1-1] + "early, changing to  " + z_wind_direction[8-1] + WW;
				}else if(z_nubes == 3){//E743
					z_output = P + z_wind_direction[1-1] + "early, changing to  " + z_wind_direction[8-1] + WW;
				}else if(z_nubes == 4){//E744
					z_output = P + z_wind_direction[1-1] + "early, changing to  " + z_wind_direction[8-1] + WW;
				}else if(z_nubes == 5){//E745
					z_output = P + z_wind_direction[1-1] + "early, changing to  " + z_wind_direction[8-1] + WW;
				}
			}else if(z_trend == 5){//E75x
				if(z_nubes == 1){//E751
					z_output = P + z_wind_direction[1-1] + "early, changing to  " + z_wind_direction[8-1] + WW;
				}else if(z_nubes == 2){//E752
					z_output = P + z_wind_direction[1-1] + "early, changing to  " + z_wind_direction[8-1] + WW;
				}else if(z_nubes == 3){//E753
					z_output = P + z_wind_direction[1-1] + "early, changing to  " + z_wind_direction[8-1] + WW;
				}else if(z_nubes == 4){//E754
					z_output = P + z_wind_direction[1-1] + "early, changing to  " + z_wind_direction[8-1] + WW;
				}else if(z_nubes == 5){//E755
					z_output = P + z_wind_direction[1-1] + "early, changing to  " + z_wind_direction[8-1] + WW;
				}
			}//Fin segundo numero
		}else if (z_hpa == 8) {//E8xx
			if(z_trend == 1){//E81x Segundo numero, tendencia de la presion
				if(z_nubes == 1){//E811
					z_output = L + z_wind_direction[1-1] + "early, changing to  " + z_wind_direction[8-1] + WW;
				}else if(z_nubes == 2){//E812
					z_output = L + z_wind_direction[1-1] + "early, changing to  " + z_wind_direction[8-1] + WW;
				}else if(z_nubes == 3){//E813
					z_output = L + z_wind_direction[1-1] + "early, changing to  " + z_wind_direction[8-1] + WW;
				}else if(z_nubes == 4){//E814
					z_output = L + z_wind_direction[1-1] + "early, changing to  " + z_wind_direction[8-1] + WW;
				}else if(z_nubes == 5){//E815
					z_output = L + z_wind_direction[1-1] + "early, changing to  " + z_wind_direction[8-1] + WW;
				}
			}else if(z_trend == 2){//E82x
				if(z_nubes == 1){//E821
					z_output = L + z_wind_direction[1-1] + "early, changing to  " + z_wind_direction[8-1] + WW;
				}else if(z_nubes == 2){//E822
					z_output = L + z_wind_direction[1-1] + "early, changing to  " + z_wind_direction[8-1] + WW;
				}else if(z_nubes == 3){//E823
					z_output = L + z_wind_direction[1-1] + "early, changing to  " + z_wind_direction[8-1] + WW;
				}else if(z_nubes == 4){//E824
					z_output = L + z_wind_direction[1-1] + "early, changing to  " + z_wind_direction[8-1] + WW;
				}else if(z_nubes == 5){//E825
					z_output = L + z_wind_direction[1-1] + "early, changing to  " + z_wind_direction[8-1] + WW;
				}
			}else if(z_trend == 3){//E83x
			if(z_nubes == 1){//E831
					z_output = P + z_wind_direction[1-1] + "early, changing to  " + z_wind_direction[8-1] + WW;
				}else if(z_nubes == 2){//E832
					z_output = P + z_wind_direction[1-1] + "early, changing to  " + z_wind_direction[8-1] + WW;
				}else if(z_nubes == 3){//E833
					z_output = P + z_wind_direction[1-1] + "early, changing to  " + z_wind_direction[8-1] + WW;
				}else if(z_nubes == 4){//E834
					z_output = P + z_wind_direction[1-1] + "early, changing to  " + z_wind_direction[8-1] + WW;
				}else if(z_nubes == 5){//E835
					z_output = P + z_wind_direction[1-1] + "early, changing to  " + z_wind_direction[8-1] + WW;
				}
			}else if(z_trend == 4){//E84x
				if(z_nubes == 1){//E841
					z_output = P + z_wind_direction[1-1] + "early, changing to  " + z_wind_direction[8-1] + WW;
				}else if(z_nubes == 2){//E842
					z_output = P + z_wind_direction[1-1] + "early, changing to  " + z_wind_direction[8-1] + WW;
				}else if(z_nubes == 3){//E843
					z_output = P + z_wind_direction[1-1] + "early, changing to  " + z_wind_direction[8-1] + WW;
				}else if(z_nubes == 4){//E844
					z_output = P + z_wind_direction[1-1] + "early, changing to  " + z_wind_direction[8-1] + WW;
				}else if(z_nubes == 5){//E845
					z_output = P + z_wind_direction[1-1] + "early, changing to  " + z_wind_direction[8-1] + WW;
				}
			}else if(z_trend == 5){//E85x
				if(z_nubes == 1){//E851
					z_output = P + z_wind_direction[1-1] + "early, changing to  " + z_wind_direction[8-1] + HH;
				}else if(z_nubes == 2){//E852
					z_output = P + z_wind_direction[1-1] + "early, changing to  " + z_wind_direction[8-1] + HH;
				}else if(z_nubes == 3){//E853
					z_output = P + z_wind_direction[1-1] + "early, changing to  " + z_wind_direction[8-1] + HH;
				}else if(z_nubes == 4){//E854
					z_output = P + z_wind_direction[1-1] + "early, changing to  " + z_wind_direction[8-1] + HH;
				}else if(z_nubes == 5){//E855
					z_output = P + z_wind_direction[1-1] + "early, changing to  " + z_wind_direction[8-1] + HH;
				}
			}//Fin segundo numero
		}//Fin primer numero
			
	}//Fin letra E
	
	////////////////////////////////////////////////////////////////////
	
	//LETRA F
	
	if(z_output == "F"){
		if(z_hpa == 1){//F1xx Primer numero, presion atmosferica
			if(z_trend == 1){//F11x Segundo numero, tendencia de la presion
				if(z_nubes == 1){//F111
					z_output = A + z_wind_direction[1-1] + UU;
				}else if(z_nubes == 2){//F112
					z_output = A + z_wind_direction[1-1] + UU;
				}else if(z_nubes == 3){//F113
					z_output = A + z_wind_direction[1-1] + UU;
				}else if(z_nubes == 4){//F114
					z_output = D + z_wind_direction[1-1] + UU;
				}else if(z_nubes == 5){//F115
					z_output = R + z_wind_direction[1-1] + UU;
				}
			}else if(z_trend == 2){//F12x
				if(z_nubes == 1){//F121
					z_output = A + z_wind_direction[2-1] + UU;
				}else if(z_nubes == 2){//F122
					z_output = A + z_wind_direction[2-1] + UU;
				}else if(z_nubes == 3){//F123
					z_output = A + z_wind_direction[2-1] + UU;
				}else if(z_nubes == 4){//F124
					z_output = D + z_wind_direction[2-1] + UU;
				}else if(z_nubes == 5){//F125
					z_output = J + z_wind_direction[2-1] + UU;
				}
			}else if(z_trend == 3){//F13x
				if(z_nubes == 1){//F131
					z_output = A + z_wind_direction[2-1] + UU;
				}else if(z_nubes == 2){//F132
					z_output = A + z_wind_direction[2-1] + UU;
				}else if(z_nubes == 3){//F133
					z_output = A + z_wind_direction[2-1] + UU;
				}else if(z_nubes == 4){//F134
					z_output = G + z_wind_direction[2-1] + UU;
				}else if(z_nubes == 5){//F135
					z_output = J + z_wind_direction[2-1] + UU;
				}
			}else if(z_trend == 4){//14x
				if(z_nubes == 1){//141
					z_output = D + z_wind_direction[2-1] + NN;
				}else if(z_nubes == 2){//F142
					z_output = G + z_wind_direction[2-1] + NN;
				}else if(z_nubes == 3){//F143
					z_output = G + z_wind_direction[2-1] + NN;
				}else if(z_nubes == 4){//F144
					z_output = G + z_wind_direction[2-1] + NN;
				}else if(z_nubes == 5){//F145
					z_output = M + z_wind_direction[2-1] + NN;
				}
			}else if(z_trend == 5){//15x
				if(z_nubes == 1){//151
					z_output = G + z_wind_direction[2-1] + NN;
				}else if(z_nubes == 2){//F152
					z_output = G + z_wind_direction[2-1] + NN;
				}else if(z_nubes == 3){//F153
					z_output = G + z_wind_direction[2-1] + NN;
				}else if(z_nubes == 4){//F154
					z_output = G + z_wind_direction[2-1] + NN;
				}else if(z_nubes == 5){//F155
					z_output = M + z_wind_direction[2-1] + NN;
				}
		
				
			}//Fin segundo numero
		}else if(z_hpa == 2){//F2xx
			if(z_trend == 1){//F21x Segundo numero, tendencia de la presion
				if(z_nubes == 1){//F211
					z_output = C + z_wind_direction[1-1] + UU;
				}else if(z_nubes == 2){//F212
					z_output = C + z_wind_direction[1-1] + UU;
				}else if(z_nubes == 3){//F213
					z_output = C + z_wind_direction[1-1] + UU;
				}else if(z_nubes == 4){//F214
					z_output = F + z_wind_direction[1-1] + UU;
				}else if(z_nubes == 5){//F215
					z_output = S + z_wind_direction[1-1] + UU;
				}
			}else if(z_trend == 2){//F22x
				if(z_nubes == 1){//F221
					z_output = A + z_wind_direction[2-1] + UU;
				}else if(z_nubes == 2){//F222
					z_output = A + z_wind_direction[2-1] + UU;
				}else if(z_nubes == 3){//F223
					z_output = A + z_wind_direction[2-1] + UU;
				}else if(z_nubes == 4){//F224
					z_output = D + z_wind_direction[2-1] + UU;
				}else if(z_nubes == 5){//F225
					z_output = J + z_wind_direction[2-1] + UU;
				}
			}else if(z_trend == 3){//F23x
				if(z_nubes == 1){//F231
					z_output = A + z_wind_direction[2-1] + UU;
				}else if(z_nubes == 2){//F232
					z_output = A + z_wind_direction[2-1] + UU;
				}else if(z_nubes == 3){//F233
					z_output = A + z_wind_direction[2-1] + UU;
				}else if(z_nubes == 4){//F234
					z_output = G + z_wind_direction[2-1] + UU;
				}else if(z_nubes == 5){//F235
					z_output = M + z_wind_direction[2-1] + UU;
				}
			}else if(z_trend == 4){//F24x
				if(z_nubes == 1){//F241
					z_output = D + z_wind_direction[2-1] + NN;
				}else if(z_nubes == 2){//F242
					z_output = G + z_wind_direction[2-1] + NN;
				}else if(z_nubes == 3){//F243
					z_output = G + z_wind_direction[2-1] + NN;
				}else if(z_nubes == 4){//F244
					z_output = G + z_wind_direction[2-1] + NN;
				}else if(z_nubes == 5){//F245
					z_output = M + z_wind_direction[2-1] + NN;
				}
			}else if(z_trend == 5){//F25x
				if(z_nubes == 1){//F251
					z_output = G + z_wind_direction[2-1] + NN;
				}else if(z_nubes == 2){//F252
					z_output = G + z_wind_direction[2-1] + NN;
				}else if(z_nubes == 3){//F253
					z_output = G + z_wind_direction[2-1] + NN;
				}else if(z_nubes == 4){//F254
					z_output = G + z_wind_direction[2-1] + NN;
				}else if(z_nubes == 5){//F255
					z_output = M + z_wind_direction[2-1] + NN;
				}
			}//Fin segundo numero
			
		}else if(z_hpa == 3){//F3xx
			if(z_trend == 1){//F31x Segundo numero, tendencia de la presion
				if(z_nubes == 1){//F311
					z_output = C + z_wind_direction[1-1] + FF;
				}else if(z_nubes == 2){//F312
					z_output = C + z_wind_direction[1-1] + FF;
				}else if(z_nubes == 3){//F313
					z_output = C + z_wind_direction[1-1] + FF;
				}else if(z_nubes == 4){//F314
					z_output = F + z_wind_direction[1-1] + FF;
				}else if(z_nubes == 5){//F315
					z_output = S + z_wind_direction[1-1] + FF;
				}
			}else if(z_trend == 2){//F32x
				if(z_nubes == 1){//F321
					z_output = A + z_wind_direction[1-1] + UU;
				}else if(z_nubes == 2){//F322
					z_output = A + z_wind_direction[1-1] + UU;
				}else if(z_nubes == 3){//F323
					z_output = X + z_wind_direction[1-1] + UU;
				}else if(z_nubes == 4){//F324
					z_output = D + z_wind_direction[1-1] + UU;
				}else if(z_nubes == 5){//F325
					z_output = J + z_wind_direction[1-1] + UU;
				}
			}else if(z_trend == 3){//F33x
				if(z_nubes == 1){//F331
					z_output = A + z_wind_direction[2-1] + UU;
				}else if(z_nubes == 2){//F332
					z_output = A + z_wind_direction[2-1] + UU;
				}else if(z_nubes == 3){//F333
					z_output = D + z_wind_direction[2-1] + UU;
				}else if(z_nubes == 4){//F334
					z_output = G + z_wind_direction[2-1] + UU;
				}else if(z_nubes == 5){//F335
					z_output = M + z_wind_direction[2-1] + UU;
				}
			}else if(z_trend == 4){//F34x
				if(z_nubes == 1){//F341
					z_output = G + z_wind_direction[2-1] + NN;
				}else if(z_nubes == 2){//F342
					z_output = G + z_wind_direction[2-1] + NN;
				}else if(z_nubes == 3){//F343
					z_output = G + z_wind_direction[2-1] + NN;
				}else if(z_nubes == 4){//F344
					z_output = G + z_wind_direction[2-1] + NN;
				}else if(z_nubes == 5){//F345
					z_output = M + z_wind_direction[2-1] + NN;
				}
			}else if(z_trend == 5){//F35x
				if(z_nubes == 1){//F351
					z_output = G + z_wind_direction[2-1] + NN;
				}else if(z_nubes == 2){//F352
					z_output = G + z_wind_direction[2-1] + NN;
				}else if(z_nubes == 3){//F353
					z_output = G + z_wind_direction[2-1] + NN;
				}else if(z_nubes == 4){//F354
					z_output = G + z_wind_direction[2-1] + NN;
				}else if(z_nubes == 5){//F355
					z_output = M + z_wind_direction[2-1] + NN;
				}
			}//Fin segundo numero
		}else if(z_hpa == 4){//F4xx
			if(z_trend == 1){//F41x Segundo numero, tendencia de la presion
				if(z_nubes == 1){//F411
					z_output = C + z_wind_direction[1-1] + FF;
				}else if(z_nubes == 2){//F412
					z_output = C + z_wind_direction[1-1] + FF;
				}else if(z_nubes == 3){//F413
					z_output = F + z_wind_direction[1-1] + FF;
				}else if(z_nubes == 4){//F414
					z_output = F + z_wind_direction[1-1] + FF;
				}else if(z_nubes == 5){//F415
					z_output = S + z_wind_direction[1-1] + FF;
				}
			}else if(z_trend == 2){//F42x
				if(z_nubes == 1){//F421
					z_output = C + z_wind_direction[1-1] + FF;
				}else if(z_nubes == 2){//F422
					z_output = C + z_wind_direction[1-1] + FF;
				}else if(z_nubes == 3){//F423
					z_output = Y + z_wind_direction[1-1] + FF;
				}else if(z_nubes == 4){//F424
					z_output = F + z_wind_direction[1-1] + FF;
				}else if(z_nubes == 5){//F425
					z_output = L + z_wind_direction[1-1] + FF;
				}
			}else if(z_trend == 3){//F43x
				if(z_nubes == 1){//F431
					z_output = A + z_wind_direction[2-1] + FF;
				}else if(z_nubes == 2){//F432
					z_output = A + z_wind_direction[2-1] + FF;
				}else if(z_nubes == 3){//F433
					z_output = D + z_wind_direction[2-1] + FF;
				}else if(z_nubes == 4){//F434
					z_output = G + z_wind_direction[2-1] + FF;
				}else if(z_nubes == 5){//F435
					z_output = M + z_wind_direction[2-1] + FF;
				}
			}else if(z_trend == 4){//F44x
				if(z_nubes == 1){//F441
					z_output = G + z_wind_direction[2-1] + NN;
				}else if(z_nubes == 2){//F442
					z_output = G + z_wind_direction[2-1] + NN;
				}else if(z_nubes == 3){//F443
					z_output = G + z_wind_direction[2-1] + NN;
				}else if(z_nubes == 4){//F444
					z_output = M + z_wind_direction[2-1] + NN;
				}else if(z_nubes == 5){//F445
					z_output = M + z_wind_direction[2-1] + NN;
				}
			}else if(z_trend == 5){//F45x
				if(z_nubes == 1){//F451
					z_output = G + z_wind_direction[2-1] + SS;
				}else if(z_nubes == 2){//F452
					z_output = M + z_wind_direction[2-1] + SS;
				}else if(z_nubes == 3){//F453
					z_output = M + z_wind_direction[2-1] + SS;
				}else if(z_nubes == 4){//F454
					z_output = M + z_wind_direction[2-1] + SS;
				}else if(z_nubes == 5){//F455
					z_output = M + z_wind_direction[2-1] + SS;
				}
			}//Fin segundo numero
		}else if(z_hpa == 5){//F5xx
			if(z_trend == 1){//F51x Segundo numero, tendencia de la presion
				if(z_nubes == 1){//F511
					z_output = C + z_wind_direction[1-1] + SS;
				}else if(z_nubes == 2){//F512
					z_output = C + z_wind_direction[1-1] + SS;
				}else if(z_nubes == 3){//F513
					z_output = F + z_wind_direction[1-1] + SS;
				}else if(z_nubes == 4){//F514
					z_output = F + z_wind_direction[1-1] + SS;
				}else if(z_nubes == 5){//F515
					z_output = S + z_wind_direction[1-1] + SS;
				}
			}else if(z_trend == 2){//F52x
				if(z_nubes == 1){//F521
					z_output = C + z_wind_direction[1-1] + SS;
				}else if(z_nubes == 2){//F522
					z_output = C + z_wind_direction[1-1] + SS;
				}else if(z_nubes == 3){//F523
					z_output = F + z_wind_direction[1-1] + SS;
				}else if(z_nubes == 4){//F524
					z_output = F + z_wind_direction[1-1] + SS;
				}else if(z_nubes == 5){//F525
					z_output = L + z_wind_direction[1-1] + SS;
				}
			}else if(z_trend == 3){//F53x
				if(z_nubes == 1){//F531
					z_output = A + z_wind_direction[1-1] + SS;
				}else if(z_nubes == 2){//F532
					z_output = D + z_wind_direction[1-1] + SS;
				}else if(z_nubes == 3){//F533
					z_output = J + z_wind_direction[1-1] + SS;
				}else if(z_nubes == 4){//F534
					z_output = J + z_wind_direction[1-1] + SS;
				}else if(z_nubes == 5){//F535
					z_output = M + z_wind_direction[1-1] + SS;
				}
			}else if(z_trend == 4){//F54x
				if(z_nubes == 1){//F541
					z_output = J + z_wind_direction[2-1] + SS;
				}else if(z_nubes == 2){//F542
					z_output = J + z_wind_direction[2-1] + SS;
				}else if(z_nubes == 3){//F543
					z_output = M + z_wind_direction[2-1] + SS;
				}else if(z_nubes == 4){//F544
					z_output = M + z_wind_direction[2-1] + SS;
				}else if(z_nubes == 5){//F545
					z_output = M + z_wind_direction[2-1] + SS;
				}
			}else if(z_trend == 5){//F55x
				if(z_nubes == 1){//F551
					z_output = M + z_wind_direction[2-1] + SS;
				}else if(z_nubes == 2){//F552
					z_output = M + z_wind_direction[2-1] + SS;
				}else if(z_nubes == 3){//F553
					z_output = M + z_wind_direction[2-1] + SS;
				}else if(z_nubes == 4){//F554
					z_output = M + z_wind_direction[2-1] + SS;
				}else if(z_nubes == 5){//F555
					z_output = M + z_wind_direction[2-1] + SS;
				}
			}//Fin segundo numero
		}else if(z_hpa == 6){//F6xx
			if(z_trend == 1){//F61x Segundo numero, tendencia de la presion
				if(z_nubes == 1){//F611
					z_output = F + z_wind_direction[1-1] + "early, changing to  " + z_wind_direction[8-1] + SS;
				}else if(z_nubes == 2){//F612
					z_output = F + z_wind_direction[1-1] + "early, changing to  " + z_wind_direction[8-1] + SS;
				}else if(z_nubes == 3){//F613
					z_output = F + z_wind_direction[1-1] + "early, changing to  " + z_wind_direction[8-1] + SS;
				}else if(z_nubes == 4){//F614
					z_output = S + z_wind_direction[1-1] + "early, changing to  " + z_wind_direction[8-1] + SS;
				}else if(z_nubes == 5){//F615
					z_output = S + z_wind_direction[1-1] + "early, changing to  " + z_wind_direction[8-1] + SS;
				}
			}else if(z_trend == 2){//F62x
				if(z_nubes == 1){//F621
					z_output = F + z_wind_direction[1-1] + "early, changing to  " + z_wind_direction[8-1] + SS;
				}else if(z_nubes == 2){//F622
					z_output = F + z_wind_direction[1-1] + "early, changing to  " + z_wind_direction[8-1] + SS;
				}else if(z_nubes == 3){//F623
					z_output = L + z_wind_direction[1-1] + "early, changing to  " + z_wind_direction[8-1] + SS;
				}else if(z_nubes == 4){//F624
					z_output = L + z_wind_direction[1-1] + "early, changing to  " + z_wind_direction[8-1] + SS;
				}else if(z_nubes == 5){//F625
					z_output = L + z_wind_direction[1-1] + "early, changing to  " + z_wind_direction[8-1] + SS;
				}
			}else if(z_trend == 3){//F63x
				if(z_nubes == 1){//F631
					z_output = L + z_wind_direction[1-1] + "early, changing to  " + z_wind_direction[8-1] + SS;
				}else if(z_nubes == 2){//F632
					z_output = L + z_wind_direction[1-1] + "early, changing to  " + z_wind_direction[8-1] + SS;
				}else if(z_nubes == 3){//F633
					z_output = L + z_wind_direction[1-1] + "early, changing to  " + z_wind_direction[8-1] + SS;
				}else if(z_nubes == 4){//F634
					z_output = L + z_wind_direction[1-1] + "early, changing to  " + z_wind_direction[8-1] + SS;
				}else if(z_nubes == 5){//F635
					z_output = L + z_wind_direction[1-1] + "early, changing to  " + z_wind_direction[8-1] + SS;
				}
			}else if(z_trend == 4){//F64x
				if(z_nubes == 1){//F641
					z_output = L + z_wind_direction[1-1] + GG;
				}else if(z_nubes == 2){//F642
					z_output = P + z_wind_direction[1-1] + GG;
				}else if(z_nubes == 3){//F643
					z_output = P + z_wind_direction[1-1] + GG;
				}else if(z_nubes == 4){//F644
					z_output = P + z_wind_direction[1-1] + GG;
				}else if(z_nubes == 5){//F645
					z_output = P + z_wind_direction[1-1] + GG;
				}
			}else if(z_trend == 5){//F65x
				if(z_nubes == 1){//F651
					z_output = P + z_wind_direction[1-1] + GG;
				}else if(z_nubes == 2){//F652
					z_output = P + z_wind_direction[1-1] + GG;
				}else if(z_nubes == 3){//F653
					z_output = P + z_wind_direction[1-1] + GG;
				}else if(z_nubes == 4){//F654
					z_output = P + z_wind_direction[1-1] + GG;
				}else if(z_nubes == 5){//F655
					z_output = P + z_wind_direction[1-1] + GG;
				}
			}//Fin segundo numero
		}else if(z_hpa == 7){//F7xx
			if(z_trend == 1){//F71x Segundo numero, tendencia de la presion
				if(z_nubes == 1){//F711
					z_output = S + z_wind_direction[1-1] + "early, changing to  " + z_wind_direction[8-1] + GG;
				}else if(z_nubes == 2){//F712
					z_output = S + z_wind_direction[1-1] + "early, changing to  " + z_wind_direction[8-1] + GG;
				}else if(z_nubes == 3){//F713
					z_output = S + z_wind_direction[1-1] + "early, changing to  " + z_wind_direction[8-1] + GG;
				}else if(z_nubes == 4){//F714
					z_output = S + z_wind_direction[1-1] + "early, changing to  " + z_wind_direction[8-1] + GG;
				}else if(z_nubes == 5){//F715
					z_output = S + z_wind_direction[1-1] + "early, changing to  " + z_wind_direction[8-1] + GG;
				}
			}else if(z_trend == 2){//F72x
				if(z_nubes == 1){//F721
					z_output = L + z_wind_direction[1-1] + "early, changing to  " + z_wind_direction[8-1] + GG;
				}else if(z_nubes == 2){//F722
					z_output = L + z_wind_direction[1-1] + "early, changing to  " + z_wind_direction[8-1] + GG;
				}else if(z_nubes == 3){//F723
					z_output = L + z_wind_direction[1-1] + "early, changing to  " + z_wind_direction[8-1] + GG;
				}else if(z_nubes == 4){//F724
					z_output = L + z_wind_direction[1-1] + "early, changing to  " + z_wind_direction[8-1] + GG;
				}else if(z_nubes == 5){//F725
					z_output = L + z_wind_direction[1-1] + "early, changing to  " + z_wind_direction[8-1] + GG;
				}
			}else if(z_trend == 3){//F73x
			if(z_nubes == 1){//F731
					z_output = L + z_wind_direction[1-1] + "early, changing to  " + z_wind_direction[8-1] + GG;
				}else if(z_nubes == 2){//F732
					z_output = L + z_wind_direction[1-1] + "early, changing to  " + z_wind_direction[8-1] + GG;
				}else if(z_nubes == 3){//F733
					z_output = L + z_wind_direction[1-1] + "early, changing to  " + z_wind_direction[8-1] + GG;
				}else if(z_nubes == 4){//F734
					z_output = P + z_wind_direction[1-1] + "early, changing to  " + z_wind_direction[8-1] + GG;
				}else if(z_nubes == 5){//F735
					z_output = P + z_wind_direction[1-1] + "early, changing to  " + z_wind_direction[8-1] + GG;
				}
			}else if(z_trend == 4){//F74x
				if(z_nubes == 1){//F741
					z_output = P + z_wind_direction[1-1] + "early, changing to  " + z_wind_direction[8-1] + WW;
				}else if(z_nubes == 2){//F742
					z_output = P + z_wind_direction[1-1] + "early, changing to  " + z_wind_direction[8-1] + WW;
				}else if(z_nubes == 3){//F743
					z_output = P + z_wind_direction[1-1] + "early, changing to  " + z_wind_direction[8-1] + WW;
				}else if(z_nubes == 4){//F744
					z_output = P + z_wind_direction[1-1] + "early, changing to  " + z_wind_direction[8-1] + WW;
				}else if(z_nubes == 5){//F745
					z_output = P + z_wind_direction[1-1] + "early, changing to  " + z_wind_direction[8-1] + WW;
				}
			}else if(z_trend == 5){//F75x
				if(z_nubes == 1){//F751
					z_output = P + z_wind_direction[1-1] + WW;
				}else if(z_nubes == 2){//F752
					z_output = P + z_wind_direction[1-1] + WW;
				}else if(z_nubes == 3){//F753
					z_output = P + z_wind_direction[1-1] + WW;
				}else if(z_nubes == 4){//F754
					z_output = P + z_wind_direction[1-1] + WW;
				}else if(z_nubes == 5){//F755
					z_output = P + z_wind_direction[1-1] + WW;
				}
			}//Fin segundo numero
		}else if (z_hpa == 8) {//F8xx
			if(z_trend == 1){//F81x Segundo numero, tendencia de la presion
				if(z_nubes == 1){//F811
					z_output = L + z_wind_direction[1-1] + "early, changing to  " + z_wind_direction[8-1] + WW;
				}else if(z_nubes == 2){//F812
					z_output = L + z_wind_direction[1-1] + "early, changing to  " + z_wind_direction[8-1] + WW;
				}else if(z_nubes == 3){//F813
					z_output = L + z_wind_direction[1-1] + "early, changing to  " + z_wind_direction[8-1] + WW;
				}else if(z_nubes == 4){//F814
					z_output = L + z_wind_direction[1-1] + "early, changing to  " + z_wind_direction[8-1] + WW;
				}else if(z_nubes == 5){//F815
					z_output = L + z_wind_direction[1-1] + "early, changing to  " + z_wind_direction[8-1] + WW;
				}
			}else if(z_trend == 2){//F82x
				if(z_nubes == 1){//F821
					z_output = L + z_wind_direction[1-1] + "early, changing to  " + z_wind_direction[8-1] + WW;
				}else if(z_nubes == 2){//F822
					z_output = L + z_wind_direction[1-1] + "early, changing to  " + z_wind_direction[8-1] + WW;
				}else if(z_nubes == 3){//F823
					z_output = L + z_wind_direction[1-1] + "early, changing to  " + z_wind_direction[8-1] + WW;
				}else if(z_nubes == 4){//F824
					z_output = L + z_wind_direction[1-1] + "early, changing to  " + z_wind_direction[8-1] + WW;
				}else if(z_nubes == 5){//F825
					z_output = L + z_wind_direction[1-1] + "early, changing to  " + z_wind_direction[8-1] + WW;
				}
			}else if(z_trend == 3){//F83x
			if(z_nubes == 1){//F831
					z_output = P + z_wind_direction[1-1] + "early, changing to  " + z_wind_direction[8-1] + WW;
				}else if(z_nubes == 2){//F832
					z_output = P + z_wind_direction[1-1] + "early, changing to  " + z_wind_direction[8-1] + WW;
				}else if(z_nubes == 3){//F833
					z_output = P + z_wind_direction[1-1] + "early, changing to  " + z_wind_direction[8-1] + WW;
				}else if(z_nubes == 4){//F834
					z_output = P + z_wind_direction[1-1] + "early, changing to  " + z_wind_direction[8-1] + WW;
				}else if(z_nubes == 5){//F835
					z_output = P + z_wind_direction[1-1] + "early, changing to  " + z_wind_direction[8-1] + WW;
				}
			}else if(z_trend == 4){//F84x
				if(z_nubes == 1){//F841
					z_output = P + z_wind_direction[1-1] + "early, changing to  " + z_wind_direction[8-1] + WW;
				}else if(z_nubes == 2){//F842
					z_output = P + z_wind_direction[1-1] + "early, changing to  " + z_wind_direction[8-1] + WW;
				}else if(z_nubes == 3){//F843
					z_output = P + z_wind_direction[1-1] + "early, changing to  " + z_wind_direction[8-1] + WW;
				}else if(z_nubes == 4){//F844
					z_output = P + z_wind_direction[1-1] + "early, changing to  " + z_wind_direction[8-1] + WW;
				}else if(z_nubes == 5){//F845
					z_output = P + z_wind_direction[1-1] + "early, changing to  " + z_wind_direction[8-1] + WW;
				}
			}else if(z_trend == 5){//F85x
				if(z_nubes == 1){//F851
					z_output = P + z_wind_direction[1-1] + HH;
				}else if(z_nubes == 2){//F852
					z_output = P + z_wind_direction[1-1] + HH;
				}else if(z_nubes == 3){//F853
					z_output = P + z_wind_direction[1-1] + HH;
				}else if(z_nubes == 4){//F854
					z_output = P + z_wind_direction[1-1] + HH;
				}else if(z_nubes == 5){//F855
					z_output = P + z_wind_direction[1-1] + HH;
				}
			}//Fin segundo numero
		}//Fin primer numero
			
	}//Fin letra F
	
	////////////////////////////////////////////////////////////////////
	
	//LETRA G
	
	if(z_output == "G"){
		if(z_hpa == 1){//G1xx Primer numero, presion atmosferica
			if(z_trend == 1){//G11x Segundo numero, tendencia de la presion
				if(z_nubes == 1){//G111
					z_output = A + z_wind_direction[2-1] + UU;
				}else if(z_nubes == 2){//G112
					z_output = A + z_wind_direction[2-1] + UU;
				}else if(z_nubes == 3){//G113
					z_output = A + z_wind_direction[2-1] + UU;
				}else if(z_nubes == 4){//G114
					z_output = D + z_wind_direction[2-1] + UU;
				}else if(z_nubes == 5){//G115
					z_output = R + z_wind_direction[2-1] + UU;
				}
			}else if(z_trend == 2){//G12x
				if(z_nubes == 1){//G121
					z_output = A + z_wind_direction[2-1] + UU;
				}else if(z_nubes == 2){//G122
					z_output = A + z_wind_direction[2-1] + UU;
				}else if(z_nubes == 3){//G123
					z_output = A + z_wind_direction[2-1] + UU;
				}else if(z_nubes == 4){//G124
					z_output = D + z_wind_direction[2-1] + UU;
				}else if(z_nubes == 5){//G125
					z_output = J + z_wind_direction[2-1] + UU;
				}
			}else if(z_trend == 3){//G13x
				if(z_nubes == 1){//G131
					z_output = A + z_wind_direction[2-1] + UU;
				}else if(z_nubes == 2){//G132
					z_output = A + z_wind_direction[2-1] + UU;
				}else if(z_nubes == 3){//G133
					z_output = D + z_wind_direction[2-1] + UU;
				}else if(z_nubes == 4){//G134
					z_output = G + z_wind_direction[2-1] + UU;
				}else if(z_nubes == 5){//G135
					z_output = J + z_wind_direction[2-1] + UU;
				}
			}else if(z_trend == 4){//14x
				if(z_nubes == 1){//141
					z_output = E + z_wind_direction[2-1] + NN;
				}else if(z_nubes == 2){//G142
					z_output = H + z_wind_direction[2-1] + NN;
				}else if(z_nubes == 3){//G143
					z_output = H + z_wind_direction[2-1] + NN;
				}else if(z_nubes == 4){//G144
					z_output = H + z_wind_direction[2-1] + NN;
				}else if(z_nubes == 5){//G145
					z_output = N + z_wind_direction[2-1] + NN;
				}
			}else if(z_trend == 5){//15x
				if(z_nubes == 1){//151
					z_output = H + z_wind_direction[2-1] + NN;
				}else if(z_nubes == 2){//G152
					z_output = H + z_wind_direction[2-1] + NN;
				}else if(z_nubes == 3){//G153
					z_output = H + z_wind_direction[2-1] + NN;
				}else if(z_nubes == 4){//G154
					z_output = H + z_wind_direction[2-1] + NN;
				}else if(z_nubes == 5){//G155
					z_output = N + z_wind_direction[2-1] + NN;
				}
		
				
			}//Gin segundo numero
		}else if(z_hpa == 2){//G2xx
			if(z_trend == 1){//G21x Segundo numero, tendencia de la presion
				if(z_nubes == 1){//G211
					z_output = A + z_wind_direction[2-1] + UU;
				}else if(z_nubes == 2){//G212
					z_output = A + z_wind_direction[2-1] + UU;
				}else if(z_nubes == 3){//G213
					z_output = A + z_wind_direction[2-1] + UU;
				}else if(z_nubes == 4){//G214
					z_output = D + z_wind_direction[2-1] + UU;
				}else if(z_nubes == 5){//G215
					z_output = R + z_wind_direction[2-1] + UU;
				}
			}else if(z_trend == 2){//G22x
				if(z_nubes == 1){//G221
					z_output = A + z_wind_direction[2-1] + UU;
				}else if(z_nubes == 2){//G222
					z_output = A + z_wind_direction[2-1] + UU;
				}else if(z_nubes == 3){//G223
					z_output = A + z_wind_direction[2-1] + UU;
				}else if(z_nubes == 4){//G224
					z_output = D + z_wind_direction[2-1] + UU;
				}else if(z_nubes == 5){//G225
					z_output = J + z_wind_direction[2-1] + UU;
				}
			}else if(z_trend == 3){//G23x
				if(z_nubes == 1){//G231
					z_output = A + z_wind_direction[2-1] + UU;
				}else if(z_nubes == 2){//G232
					z_output = A + z_wind_direction[2-1] + UU;
				}else if(z_nubes == 3){//G233
					z_output = D + z_wind_direction[2-1] + UU;
				}else if(z_nubes == 4){//G234
					z_output = G + z_wind_direction[2-1] + UU;
				}else if(z_nubes == 5){//G235
					z_output = J + z_wind_direction[2-1] + UU;
				}
			}else if(z_trend == 4){//G24x
				if(z_nubes == 1){//G241
					z_output = D + z_wind_direction[2-1] + NN;
				}else if(z_nubes == 2){//G242
					z_output = G + z_wind_direction[2-1] + NN;
				}else if(z_nubes == 3){//G243
					z_output = G + z_wind_direction[2-1] + NN;
				}else if(z_nubes == 4){//G244
					z_output = G + z_wind_direction[2-1] + NN;
				}else if(z_nubes == 5){//G245
					z_output = M + z_wind_direction[2-1] + NN;
				}
			}else if(z_trend == 5){//G25x
				if(z_nubes == 1){//G251
					z_output = G + z_wind_direction[2-1] + NN;
				}else if(z_nubes == 2){//G252
					z_output = G + z_wind_direction[2-1] + NN;
				}else if(z_nubes == 3){//G253
					z_output = G + z_wind_direction[2-1] + NN;
				}else if(z_nubes == 4){//G254
					z_output = G + z_wind_direction[2-1] + NN;
				}else if(z_nubes == 5){//G255
					z_output = M + z_wind_direction[2-1] + NN;
				}
			}//Gin segundo numero
			
		}else if(z_hpa == 3){//G3xx
			if(z_trend == 1){//G31x Segundo numero, tendencia de la presion
				if(z_nubes == 1){//G311
					z_output = A + z_wind_direction[2-1] + UU;
				}else if(z_nubes == 2){//G312
					z_output = A + z_wind_direction[2-1] + UU;
				}else if(z_nubes == 3){//G313
					z_output = A + z_wind_direction[2-1] + UU;
				}else if(z_nubes == 4){//G314
					z_output = D + z_wind_direction[2-1] + UU;
				}else if(z_nubes == 5){//G315
					z_output = R + z_wind_direction[2-1] + UU;
				}
			}else if(z_trend == 2){//G32x
				if(z_nubes == 1){//G321
					z_output = A + z_wind_direction[2-1] + UU;
				}else if(z_nubes == 2){//G322
					z_output = A + z_wind_direction[2-1] + UU;
				}else if(z_nubes == 3){//G323
					z_output = A + z_wind_direction[2-1] + UU;
				}else if(z_nubes == 4){//G324
					z_output = D + z_wind_direction[2-1] + UU;
				}else if(z_nubes == 5){//G325
					z_output = J + z_wind_direction[2-1] + UU;
				}
			}else if(z_trend == 3){//G33x
				if(z_nubes == 1){//G331
					z_output = A + z_wind_direction[2-1] + UU;
				}else if(z_nubes == 2){//G332
					z_output = A + z_wind_direction[2-1] + UU;
				}else if(z_nubes == 3){//G333
					z_output = D + z_wind_direction[2-1] + UU;
				}else if(z_nubes == 4){//G334
					z_output = G + z_wind_direction[2-1] + UU;
				}else if(z_nubes == 5){//G335
					z_output = J + z_wind_direction[2-1] + UU;
				}
			}else if(z_trend == 4){//G34x
				if(z_nubes == 1){//G341
					z_output = G + z_wind_direction[2-1] + NN;
				}else if(z_nubes == 2){//G342
					z_output = G + z_wind_direction[2-1] + NN;
				}else if(z_nubes == 3){//G343
					z_output = G + z_wind_direction[2-1] + NN;
				}else if(z_nubes == 4){//G344
					z_output = G + z_wind_direction[2-1] + NN;
				}else if(z_nubes == 5){//G345
					z_output = M + z_wind_direction[2-1] + NN;
				}
			}else if(z_trend == 5){//G35x
				if(z_nubes == 1){//G351
					z_output = G + z_wind_direction[2-1] + NN;
				}else if(z_nubes == 2){//G352
					z_output = G + z_wind_direction[2-1] + NN;
				}else if(z_nubes == 3){//G353
					z_output = G + z_wind_direction[2-1] + NN;
				}else if(z_nubes == 4){//G354
					z_output = G + z_wind_direction[2-1] + NN;
				}else if(z_nubes == 5){//G355
					z_output = M + z_wind_direction[2-1] + NN;
				}
			}//Gin segundo numero
		}else if(z_hpa == 4){//G4xx
			if(z_trend == 1){//G41x Segundo numero, tendencia de la presion
				if(z_nubes == 1){//G411
					z_output = A + z_wind_direction[2-1] + FF;
				}else if(z_nubes == 2){//G412
					z_output = A + z_wind_direction[2-1] + FF;
				}else if(z_nubes == 3){//G413
					z_output = A + z_wind_direction[2-1] + FF;
				}else if(z_nubes == 4){//G414
					z_output = D + z_wind_direction[2-1] + FF;
				}else if(z_nubes == 5){//G415
					z_output = J + z_wind_direction[2-1] + FF;
				}
			}else if(z_trend == 2){//G42x
				if(z_nubes == 1){//G421
					z_output = A + z_wind_direction[2-1] + FF;
				}else if(z_nubes == 2){//G422
					z_output = A + z_wind_direction[2-1] + FF;
				}else if(z_nubes == 3){//G423
					z_output = A + z_wind_direction[2-1] + FF;
				}else if(z_nubes == 4){//G424
					z_output = G + z_wind_direction[2-1] + FF;
				}else if(z_nubes == 5){//G425
					z_output = J + z_wind_direction[2-1] + FF;
				}
			}else if(z_trend == 3){//G43x
				if(z_nubes == 1){//G431
					z_output = A + z_wind_direction[2-1] + FF;
				}else if(z_nubes == 2){//G432
					z_output = A + z_wind_direction[2-1] + FF;
				}else if(z_nubes == 3){//G433
					z_output = D + z_wind_direction[2-1] + FF;
				}else if(z_nubes == 4){//G434
					z_output = G + z_wind_direction[2-1] + FF;
				}else if(z_nubes == 5){//G435
					z_output = J + z_wind_direction[2-1] + FF;
				}
			}else if(z_trend == 4){//G44x
				if(z_nubes == 1){//G441
					z_output = G + z_wind_direction[2-1] + NN;
				}else if(z_nubes == 2){//G442
					z_output = G + z_wind_direction[2-1] + NN;
				}else if(z_nubes == 3){//G443
					z_output = G + z_wind_direction[2-1] + NN;
				}else if(z_nubes == 4){//G444
					z_output = M + z_wind_direction[2-1] + NN;
				}else if(z_nubes == 5){//G445
					z_output = M + z_wind_direction[2-1] + NN;
				}
			}else if(z_trend == 5){//G45x
				if(z_nubes == 1){//G451
					z_output = G + z_wind_direction[2-1] + SS;
				}else if(z_nubes == 2){//G452
					z_output = M + z_wind_direction[2-1] + SS;
				}else if(z_nubes == 3){//G453
					z_output = M + z_wind_direction[2-1] + SS;
				}else if(z_nubes == 4){//G454
					z_output = M + z_wind_direction[2-1] + SS;
				}else if(z_nubes == 5){//G455
					z_output = M + z_wind_direction[2-1] + SS;
				}
			}//Gin segundo numero
		}else if(z_hpa == 5){//G5xx
			if(z_trend == 1){//G51x Segundo numero, tendencia de la presion
				if(z_nubes == 1){//G511
					z_output = A + z_wind_direction[2-1] + "early, changing to  " + z_wind_direction[1-1] + SS;
				}else if(z_nubes == 2){//G512
					z_output = D + z_wind_direction[2-1] + "early, changing to  " + z_wind_direction[1-1] + SS;
				}else if(z_nubes == 3){//G513
					z_output = J + z_wind_direction[2-1] + "early, changing to  " + z_wind_direction[1-1] + SS;
				}else if(z_nubes == 4){//G514
					z_output = J + z_wind_direction[2-1] + "early, changing to  " + z_wind_direction[1-1] + SS;
				}else if(z_nubes == 5){//G515
					z_output = J + z_wind_direction[2-1] + "early, changing to  " + z_wind_direction[1-1] + SS;
				}
			}else if(z_trend == 2){//G52x
				if(z_nubes == 1){//G521
					z_output = D + z_wind_direction[2-1] + "early, changing to  " + z_wind_direction[1-1] + SS;
				}else if(z_nubes == 2){//G522
					z_output = J + z_wind_direction[2-1] + "early, changing to  " + z_wind_direction[1-1] + SS;
				}else if(z_nubes == 3){//G523
					z_output = J + z_wind_direction[2-1] + "early, changing to  " + z_wind_direction[1-1] + SS;
				}else if(z_nubes == 4){//G524
					z_output = J + z_wind_direction[2-1] + "early, changing to  " + z_wind_direction[1-1] + SS;
				}else if(z_nubes == 5){//G525
					z_output = J + z_wind_direction[2-1] + "early, changing to  " + z_wind_direction[1-1] + SS;
				}
			}else if(z_trend == 3){//G53x
				if(z_nubes == 1){//G531
					z_output = D + z_wind_direction[2-1] + "early, changing to  " + z_wind_direction[1-1] + SS;
				}else if(z_nubes == 2){//G532
					z_output = J + z_wind_direction[2-1] + "early, changing to  " + z_wind_direction[1-1] + SS;
				}else if(z_nubes == 3){//G533
					z_output = J + z_wind_direction[2-1] + "early, changing to  " + z_wind_direction[1-1] + SS;
				}else if(z_nubes == 4){//G534
					z_output = J + z_wind_direction[2-1] + "early, changing to  " + z_wind_direction[1-1] + SS;
				}else if(z_nubes == 5){//G535
					z_output = J + z_wind_direction[2-1] + "early, changing to  " + z_wind_direction[1-1] + SS;
				}
			}else if(z_trend == 4){//G54x
				if(z_nubes == 1){//G541
					z_output = J + z_wind_direction[2-1] + SS;
				}else if(z_nubes == 2){//G542
					z_output = M + z_wind_direction[2-1] + SS;
				}else if(z_nubes == 3){//G543
					z_output = M + z_wind_direction[2-1] + SS;
				}else if(z_nubes == 4){//G544
					z_output = M + z_wind_direction[2-1] + SS;
				}else if(z_nubes == 5){//G545
					z_output = M + z_wind_direction[2-1] + SS;
				}
			}else if(z_trend == 5){//G55x
				if(z_nubes == 1){//G551
					z_output = M + z_wind_direction[2-1] + SS;
				}else if(z_nubes == 2){//G552
					z_output = M + z_wind_direction[2-1] + SS;
				}else if(z_nubes == 3){//G553
					z_output = M + z_wind_direction[2-1] + SS;
				}else if(z_nubes == 4){//G554
					z_output = M + z_wind_direction[2-1] + SS;
				}else if(z_nubes == 5){//G555
					z_output = M + z_wind_direction[2-1] + SS;
				}
			}//Gin segundo numero
		}else if(z_hpa == 6){//G6xx
			if(z_trend == 1){//G61x Segundo numero, tendencia de la presion
				if(z_nubes == 1){//G611
					z_output = L + z_wind_direction[2-1] + "early, changing to  " + z_wind_direction[1-1] + SS;
				}else if(z_nubes == 2){//G612
					z_output = L + z_wind_direction[2-1] + "early, changing to  " + z_wind_direction[1-1] + SS;
				}else if(z_nubes == 3){//G613
					z_output = L + z_wind_direction[2-1] + "early, changing to  " + z_wind_direction[1-1] + SS;
				}else if(z_nubes == 4){//G614
					z_output = L + z_wind_direction[2-1] + "early, changing to  " + z_wind_direction[1-1] + SS;
				}else if(z_nubes == 5){//G615
					z_output = L + z_wind_direction[2-1] + "early, changing to  " + z_wind_direction[1-1] + SS;
				}
			}else if(z_trend == 2){//G62x
				if(z_nubes == 1){//G621
					z_output = L + z_wind_direction[2-1] + "early, changing to  " + z_wind_direction[1-1] + SS;
				}else if(z_nubes == 2){//G622
					z_output = L + z_wind_direction[2-1] + "early, changing to  " + z_wind_direction[1-1] + SS;
				}else if(z_nubes == 3){//G623
					z_output = L + z_wind_direction[2-1] + "early, changing to  " + z_wind_direction[1-1] + SS;
				}else if(z_nubes == 4){//G624
					z_output = L + z_wind_direction[2-1] + "early, changing to  " + z_wind_direction[1-1] + SS;
				}else if(z_nubes == 5){//G625
					z_output = L + z_wind_direction[2-1] + "early, changing to  " + z_wind_direction[1-1] + SS;
				}
			}else if(z_trend == 3){//G63x
				if(z_nubes == 1){//G631
					z_output = L + z_wind_direction[2-1] + "early, changing to  " + z_wind_direction[1-1] + SS;
				}else if(z_nubes == 2){//G632
					z_output = L + z_wind_direction[2-1] + "early, changing to  " + z_wind_direction[1-1] + SS;
				}else if(z_nubes == 3){//G633
					z_output = L + z_wind_direction[2-1] + "early, changing to  " + z_wind_direction[1-1] + SS;
				}else if(z_nubes == 4){//G634
					z_output = L + z_wind_direction[2-1] + "early, changing to  " + z_wind_direction[1-1] + SS;
				}else if(z_nubes == 5){//G635
					z_output = L + z_wind_direction[2-1] + "early, changing to  " + z_wind_direction[1-1] + GG;
				}
			}else if(z_trend == 4){//G64x
				if(z_nubes == 1){//G641
					z_output = L + z_wind_direction[2-1] + "early, changing to  " + z_wind_direction[1-1] + GG;
				}else if(z_nubes == 2){//G642
					z_output = P + z_wind_direction[2-1] + "early, changing to  " + z_wind_direction[1-1] + GG;
				}else if(z_nubes == 3){//G643
					z_output = P + z_wind_direction[2-1] + "early, changing to  " + z_wind_direction[1-1] + GG;
				}else if(z_nubes == 4){//G644
					z_output = P + z_wind_direction[2-1] + "early, changing to  " + z_wind_direction[1-1] + GG
				}else if(z_nubes == 5){//G645
					z_output = P + z_wind_direction[2-1] + "early, changing to  " + z_wind_direction[1-1] + GG;
				}
			}else if(z_trend == 5){//G65x
				if(z_nubes == 1){//G651
					z_output = P + z_wind_direction[2-1] + GG;
				}else if(z_nubes == 2){//G652
					z_output = P + z_wind_direction[2-1] + GG;
				}else if(z_nubes == 3){//G653
					z_output = P + z_wind_direction[2-1] + GG;
				}else if(z_nubes == 4){//G654
					z_output = P + z_wind_direction[2-1] + GG;
				}else if(z_nubes == 5){//G655
					z_output = P + z_wind_direction[2-1] + GG;
				}
			}//Gin segundo numero
		}else if(z_hpa == 7){//G7xx
			if(z_trend == 1){//G71x Segundo numero, tendencia de la presion
				if(z_nubes == 1){//G711
					z_output = L + z_wind_direction[2-1] + "early, changing to  " + z_wind_direction[8-1] + GG;
				}else if(z_nubes == 2){//G712
					z_output = L + z_wind_direction[2-1] + "early, changing to  " + z_wind_direction[8-1] + GG;
				}else if(z_nubes == 3){//G713
					z_output = L + z_wind_direction[2-1] + "early, changing to  " + z_wind_direction[8-1] + GG;
				}else if(z_nubes == 4){//G714
					z_output = L + z_wind_direction[2-1] + "early, changing to  " + z_wind_direction[8-1] + GG;
				}else if(z_nubes == 5){//G715
					z_output = L + z_wind_direction[2-1] + "early, changing to  " + z_wind_direction[8-1] + GG;
				}
			}else if(z_trend == 2){//G72x
				if(z_nubes == 1){//G721
					z_output = L + z_wind_direction[2-1] + "early, changing to  " + z_wind_direction[8-1] + GG;
				}else if(z_nubes == 2){//G722
					z_output = L + z_wind_direction[2-1] + "early, changing to  " + z_wind_direction[8-1] + GG;
				}else if(z_nubes == 3){//G723
					z_output = L + z_wind_direction[2-1] + "early, changing to  " + z_wind_direction[8-1] + GG;
				}else if(z_nubes == 4){//G724
					z_output = L + z_wind_direction[2-1] + "early, changing to  " + z_wind_direction[8-1] + GG;
				}else if(z_nubes == 5){//G725
					z_output = L + z_wind_direction[2-1] + "early, changing to  " + z_wind_direction[8-1] + GG;
				}
			}else if(z_trend == 3){//G73x
			if(z_nubes == 1){//G731
					z_output = P + z_wind_direction[2-1] + "early, changing to  " + z_wind_direction[8-1] + GG;
				}else if(z_nubes == 2){//G732
					z_output = P + z_wind_direction[2-1] + "early, changing to  " + z_wind_direction[8-1] + GG;
				}else if(z_nubes == 3){//G733
					z_output = P + z_wind_direction[2-1] + "early, changing to  " + z_wind_direction[8-1] + GG;
				}else if(z_nubes == 4){//G734
					z_output = P + z_wind_direction[2-1] + "early, changing to  " + z_wind_direction[8-1] + GG;
				}else if(z_nubes == 5){//G735
					z_output = P + z_wind_direction[2-1] + "early, changing to  " + z_wind_direction[8-1] + GG;
				}
			}else if(z_trend == 4){//G74x
				if(z_nubes == 1){//G741
					z_output = P + z_wind_direction[2-1] + "early, changing to  " + z_wind_direction[1-1] + WW;
				}else if(z_nubes == 2){//G742
					z_output = P + z_wind_direction[2-1] + "early, changing to  " + z_wind_direction[1-1] + WW;
				}else if(z_nubes == 3){//G743
					z_output = P + z_wind_direction[2-1] + "early, changing to  " + z_wind_direction[1-1] + WW;
				}else if(z_nubes == 4){//G744
					z_output = P + z_wind_direction[2-1] + "early, changing to  " + z_wind_direction[1-1] + WW;
				}else if(z_nubes == 5){//G745
					z_output = P + z_wind_direction[2-1] + "early, changing to  " + z_wind_direction[1-1] + WW;
				}
			}else if(z_trend == 5){//G75x
				if(z_nubes == 1){//G751
					z_output = P + z_wind_direction[2-1] + "early, changing to  " + z_wind_direction[1-1] + WW;
				}else if(z_nubes == 2){//G752
					z_output = P + z_wind_direction[2-1] + "early, changing to  " + z_wind_direction[1-1] + WW;
				}else if(z_nubes == 3){//G753
					z_output = P + z_wind_direction[2-1] + "early, changing to  " + z_wind_direction[1-1] + WW;
				}else if(z_nubes == 4){//G754
					z_output = P + z_wind_direction[2-1] + "early, changing to  " + z_wind_direction[1-1] + WW;
				}else if(z_nubes == 5){//G755
					z_output = P + z_wind_direction[2-1] + "early, changing to  " + z_wind_direction[1-1] + WW
				}
			}//Gin segundo numero
		}else if (z_hpa == 8) {//G8xx
			if(z_trend == 1){//G81x Segundo numero, tendencia de la presion
				if(z_nubes == 1){//G811
					z_output = L + z_wind_direction[2-1] + "early, changing to  " + z_wind_direction[8-1] + WW;
				}else if(z_nubes == 2){//G812
					z_output = L + z_wind_direction[2-1] + "early, changing to  " + z_wind_direction[8-1] + WW;
				}else if(z_nubes == 3){//G813
					z_output = L + z_wind_direction[2-1] + "early, changing to  " + z_wind_direction[8-1] + WW;
				}else if(z_nubes == 4){//G814
					z_output = L + z_wind_direction[2-1] + "early, changing to  " + z_wind_direction[8-1] + WW;
				}else if(z_nubes == 5){//G815
					z_output = L + z_wind_direction[2-1] + "early, changing to  " + z_wind_direction[8-1] + WW;
				}
			}else if(z_trend == 2){//G82x
				if(z_nubes == 1){//G821
					z_output = P + z_wind_direction[2-1] + "early, changing to  " + z_wind_direction[8-1] + WW;
				}else if(z_nubes == 2){//G822
					z_output = P + z_wind_direction[2-1] + "early, changing to  " + z_wind_direction[8-1] + WW;
				}else if(z_nubes == 3){//G823
					z_output = P + z_wind_direction[2-1] + "early, changing to  " + z_wind_direction[8-1] + WW;
				}else if(z_nubes == 4){//G824
					z_output = P + z_wind_direction[2-1] + "early, changing to  " + z_wind_direction[8-1] + WW;
				}else if(z_nubes == 5){//G825
					z_output = P + z_wind_direction[2-1] + "early, changing to  " + z_wind_direction[8-1] + WW;
				}
			}else if(z_trend == 3){//G83x
			if(z_nubes == 1){//G831
					z_output = P + z_wind_direction[2-1] + "early, changing to  " + z_wind_direction[8-1] + WW;
				}else if(z_nubes == 2){//G832
					z_output = P + z_wind_direction[2-1] + "early, changing to  " + z_wind_direction[8-1] + WW;
				}else if(z_nubes == 3){//G833
					z_output = P + z_wind_direction[2-1] + "early, changing to  " + z_wind_direction[8-1] + WW;
				}else if(z_nubes == 4){//G834
					z_output = P + z_wind_direction[2-1] + "early, changing to  " + z_wind_direction[8-1] + WW;
				}else if(z_nubes == 5){//G835
					z_output = P + z_wind_direction[2-1] + "early, changing to  " + z_wind_direction[8-1] + WW;
				}
			}else if(z_trend == 4){//G84x
				if(z_nubes == 1){//G841
					z_output = P + z_wind_direction[2-1] + "early, changing to  " + z_wind_direction[8-1] + WW;
				}else if(z_nubes == 2){//G842
					z_output = P + z_wind_direction[2-1] + "early, changing to  " + z_wind_direction[8-1] + WW;
				}else if(z_nubes == 3){//G843
					z_output = P + z_wind_direction[2-1] + "early, changing to  " + z_wind_direction[8-1] + WW;
				}else if(z_nubes == 4){//G844
					z_output = P + z_wind_direction[2-1] + "early, changing to  " + z_wind_direction[8-1] + WW;
				}else if(z_nubes == 5){//G845
					z_output = P + z_wind_direction[2-1] + "early, changing to  " + z_wind_direction[8-1] + WW;
				}
			}else if(z_trend == 5){//G85x
				if(z_nubes == 1){//G851
					z_output = P + z_wind_direction[2-1] + "early, changing to  " + z_wind_direction[1-1] + HH;
				}else if(z_nubes == 2){//G852
					z_output = P + z_wind_direction[2-1] + "early, changing to  " + z_wind_direction[1-1] + HH;
				}else if(z_nubes == 3){//G853
					z_output = P + z_wind_direction[2-1] + "early, changing to  " + z_wind_direction[1-1] + HH;
				}else if(z_nubes == 4){//G854
					z_output = P + z_wind_direction[2-1] + "early, changing to  " + z_wind_direction[1-1] + HH;
				}else if(z_nubes == 5){//G855
					z_output = P + z_wind_direction[2-1] + "early, changing to  " + z_wind_direction[1-1] + HH;
				}
			}//Gin segundo numero
		}//Gin primer numero
			
	}//Gin letra G
	
	///////////////////////////////////////////////////////////////////
	
	//LETRA H
	

	
	if(z_output == "H"){
		if(z_hpa == 1){//H1xx Primer numero, presion atmosferica
			if(z_trend == 1){//H11x Segundo numero, tendencia de la presion
				if(z_nubes == 1){//H111
					z_output = A + z_wind_direction[2-1] + UU;
				}else if(z_nubes == 2){//H112
					z_output = A + z_wind_direction[2-1] + UU;
				}else if(z_nubes == 3){//H113
					z_output = A + z_wind_direction[2-1] + UU;
				}else if(z_nubes == 4){//H114
					z_output = D + z_wind_direction[2-1] + UU;
				}else if(z_nubes == 5){//H115
					z_output = R + z_wind_direction[2-1] + UU;
				}
			}else if(z_trend == 2){//H12x
				if(z_nubes == 1){//H121
					z_output = A + z_wind_direction[2-1] + UU;
				}else if(z_nubes == 2){//H122
					z_output = A + z_wind_direction[2-1] + UU;
				}else if(z_nubes == 3){//H123
					z_output = A + z_wind_direction[2-1] + UU;
				}else if(z_nubes == 4){//H124
					z_output = D + z_wind_direction[2-1] + UU;
				}else if(z_nubes == 5){//H125
					z_output = J + z_wind_direction[2-1] + UU;
				}
			}else if(z_trend == 3){//H13x
				if(z_nubes == 1){//H131
					z_output = A + z_wind_direction[3-1] + UU;
				}else if(z_nubes == 2){//H132
					z_output = A + z_wind_direction[3-1] + UU;
				}else if(z_nubes == 3){//H133
					z_output = D + z_wind_direction[3-1] + UU;
				}else if(z_nubes == 4){//H134
					z_output = G + z_wind_direction[3-1] + UU;
				}else if(z_nubes == 5){//H135
					z_output = J + z_wind_direction[3-1] + UU;
				}
			}else if(z_trend == 4){//14x
				if(z_nubes == 1){//141
					z_output = E + z_wind_direction[3-1] + NN;
				}else if(z_nubes == 2){//H142
					z_output = H + z_wind_direction[3-1] + NN;
				}else if(z_nubes == 3){//H143
					z_output = H + z_wind_direction[3-1] + NN;
				}else if(z_nubes == 4){//H144
					z_output = H + z_wind_direction[3-1] + NN;
				}else if(z_nubes == 5){//H145
					z_output = N + z_wind_direction[3-1] + NN;
				}
			}else if(z_trend == 5){//15x
				if(z_nubes == 1){//151
					z_output = H + z_wind_direction[3-1] + NN;
				}else if(z_nubes == 2){//H152
					z_output = H + z_wind_direction[3-1] + NN;
				}else if(z_nubes == 3){//H153
					z_output = H + z_wind_direction[3-1] + NN;
				}else if(z_nubes == 4){//H154
					z_output = H + z_wind_direction[3-1] + NN;
				}else if(z_nubes == 5){//H155
					z_output = N + z_wind_direction[3-1] + NN;
				}
		
				
			}//Hin segundo numero
		}else if(z_hpa == 2){//H2xx
			if(z_trend == 1){//H21x Segundo numero, tendencia de la presion
				if(z_nubes == 1){//H211
					z_output = A + z_wind_direction[2-1] + UU;
				}else if(z_nubes == 2){//H212
					z_output = A + z_wind_direction[2-1] + UU;
				}else if(z_nubes == 3){//H213
					z_output = A + z_wind_direction[2-1] + UU;
				}else if(z_nubes == 4){//H214
					z_output = D + z_wind_direction[2-1] + UU;
				}else if(z_nubes == 5){//H215
					z_output = R + z_wind_direction[2-1] + UU;
				}
			}else if(z_trend == 2){//H22x
				if(z_nubes == 1){//H221
					z_output = A + z_wind_direction[2-1] + UU;
				}else if(z_nubes == 2){//H222
					z_output = A + z_wind_direction[2-1] + UU;
				}else if(z_nubes == 3){//H223
					z_output = A + z_wind_direction[2-1] + UU;
				}else if(z_nubes == 4){//H224
					z_output = D + z_wind_direction[2-1] + UU;
				}else if(z_nubes == 5){//H225
					z_output = J + z_wind_direction[2-1] + UU;
				}
			}else if(z_trend == 3){//H23x
				if(z_nubes == 1){//H231
					z_output = A + z_wind_direction[3-1] + UU;
				}else if(z_nubes == 2){//H232
					z_output = A + z_wind_direction[3-1] + UU;
				}else if(z_nubes == 3){//H233
					z_output = D + z_wind_direction[3-1] + UU;
				}else if(z_nubes == 4){//H234
					z_output = G + z_wind_direction[3-1] + UU;
				}else if(z_nubes == 5){//H235
					z_output = J + z_wind_direction[3-1] + UU;
				}
			}else if(z_trend == 4){//H24x
				if(z_nubes == 1){//H241
					z_output = E + z_wind_direction[3-1] + NN;
				}else if(z_nubes == 2){//H242
					z_output = H + z_wind_direction[3-1] + NN;
				}else if(z_nubes == 3){//H243
					z_output = H + z_wind_direction[3-1] + NN;
				}else if(z_nubes == 4){//H244
					z_output = H + z_wind_direction[3-1] + NN;
				}else if(z_nubes == 5){//H245
					z_output = N + z_wind_direction[3-1] + NN;
				}
			}else if(z_trend == 5){//H25x
				if(z_nubes == 1){//H251
					z_output = H + z_wind_direction[3-1] + NN;
				}else if(z_nubes == 2){//H252
					z_output = H + z_wind_direction[3-1] + NN;
				}else if(z_nubes == 3){//H253
					z_output = H + z_wind_direction[3-1] + NN;
				}else if(z_nubes == 4){//H254
					z_output = H + z_wind_direction[3-1] + NN;
				}else if(z_nubes == 5){//H255
					z_output = N + z_wind_direction[3-1] + NN;
				}
			}//Hin segundo numero
			
		}else if(z_hpa == 3){//H3xx
			if(z_trend == 1){//H31x Segundo numero, tendencia de la presion
				if(z_nubes == 1){//H311
					z_output = A + z_wind_direction[2-1] + UU;
				}else if(z_nubes == 2){//H312
					z_output = A + z_wind_direction[2-1] + UU;
				}else if(z_nubes == 3){//H313
					z_output = A + z_wind_direction[2-1] + UU;
				}else if(z_nubes == 4){//H314
					z_output = D + z_wind_direction[2-1] + UU;
				}else if(z_nubes == 5){//H315
					z_output = R + z_wind_direction[2-1] + UU;
				}
			}else if(z_trend == 2){//H32x
				if(z_nubes == 1){//H321
					z_output = A + z_wind_direction[2-1] + UU;
				}else if(z_nubes == 2){//H322
					z_output = A + z_wind_direction[2-1] + UU;
				}else if(z_nubes == 3){//H323
					z_output = A + z_wind_direction[2-1] + UU;
				}else if(z_nubes == 4){//H324
					z_output = D + z_wind_direction[2-1] + UU;
				}else if(z_nubes == 5){//H325
					z_output = J + z_wind_direction[2-1] + UU;
				}
			}else if(z_trend == 3){//H33x
				if(z_nubes == 1){//H331
					z_output = A + z_wind_direction[3-1] + UU;
				}else if(z_nubes == 2){//H332
					z_output = A + z_wind_direction[3-1] + UU;
				}else if(z_nubes == 3){//H333
					z_output = D + z_wind_direction[3-1] + UU;
				}else if(z_nubes == 4){//H334
					z_output = G + z_wind_direction[3-1] + UU;
				}else if(z_nubes == 5){//H335
					z_output = J + z_wind_direction[3-1] + UU;
				}
			}else if(z_trend == 4){//H34x
				if(z_nubes == 1){//H341
					z_output = H + z_wind_direction[3-1] + NN;
				}else if(z_nubes == 2){//H342
					z_output = H + z_wind_direction[3-1] + NN;
				}else if(z_nubes == 3){//H343
					z_output = H + z_wind_direction[3-1] + NN;
				}else if(z_nubes == 4){//H344
					z_output = H + z_wind_direction[3-1] + NN;
				}else if(z_nubes == 5){//H345
					z_output = N + z_wind_direction[3-1] + NN;
				}
			}else if(z_trend == 5){//H35x
				if(z_nubes == 1){//H351
					z_output = G + z_wind_direction[3-1] + NN;
				}else if(z_nubes == 2){//H352
					z_output = G + z_wind_direction[3-1] + NN;
				}else if(z_nubes == 3){//H353
					z_output = G + z_wind_direction[3-1] + NN;
				}else if(z_nubes == 4){//H354
					z_output = G + z_wind_direction[3-1] + NN;
				}else if(z_nubes == 5){//H355
					z_output = M + z_wind_direction[3-1] + NN;
				}
			}//Hin segundo numero
		}else if(z_hpa == 4){//H4xx
			if(z_trend == 1){//H41x Segundo numero, tendencia de la presion
				if(z_nubes == 1){//H411
					z_output = A + z_wind_direction[2-1] + FF;
				}else if(z_nubes == 2){//H412
					z_output = A + z_wind_direction[2-1] + FF;
				}else if(z_nubes == 3){//H413
					z_output = A + z_wind_direction[2-1] + FF;
				}else if(z_nubes == 4){//H414
					z_output = D + z_wind_direction[2-1] + FF;
				}else if(z_nubes == 5){//H415
					z_output = J + z_wind_direction[2-1] + FF;
				}
			}else if(z_trend == 2){//H42x
				if(z_nubes == 1){//H421
					z_output = A + z_wind_direction[2-1] + FF;
				}else if(z_nubes == 2){//H422
					z_output = A + z_wind_direction[2-1] + FF;
				}else if(z_nubes == 3){//H423
					z_output = A + z_wind_direction[2-1] + FF;
				}else if(z_nubes == 4){//H424
					z_output = G + z_wind_direction[2-1] + FF;
				}else if(z_nubes == 5){//H425
					z_output = J + z_wind_direction[2-1] + FF;
				}
			}else if(z_trend == 3){//H43x
				if(z_nubes == 1){//H431
					z_output = A + z_wind_direction[2-1] + FF;
				}else if(z_nubes == 2){//H432
					z_output = A + z_wind_direction[2-1] + FF;
				}else if(z_nubes == 3){//H433
					z_output = D + z_wind_direction[2-1] + FF;
				}else if(z_nubes == 4){//H434
					z_output = G + z_wind_direction[2-1] + FF;
				}else if(z_nubes == 5){//H435
					z_output = J + z_wind_direction[2-1] + FF;
				}
			}else if(z_trend == 4){//H44x
				if(z_nubes == 1){//H441
					z_output = G + z_wind_direction[3-1] + NN;
				}else if(z_nubes == 2){//H442
					z_output = G + z_wind_direction[3-1] + NN;
				}else if(z_nubes == 3){//H443
					z_output = G + z_wind_direction[3-1] + NN;
				}else if(z_nubes == 4){//H444
					z_output = M + z_wind_direction[3-1] + NN;
				}else if(z_nubes == 5){//H445
					z_output = M + z_wind_direction[3-1] + NN;
				}
			}else if(z_trend == 5){//H45x
				if(z_nubes == 1){//H451
					z_output = G + z_wind_direction[3-1] + SS;
				}else if(z_nubes == 2){//H452
					z_output = M + z_wind_direction[3-1] + SS;
				}else if(z_nubes == 3){//H453
					z_output = M + z_wind_direction[3-1] + SS;
				}else if(z_nubes == 4){//H454
					z_output = M + z_wind_direction[3-1] + SS;
				}else if(z_nubes == 5){//H455
					z_output = M + z_wind_direction[3-1] + SS;
				}
			}//Hin segundo numero
		}else if(z_hpa == 5){//H5xx
			if(z_trend == 1){//H51x Segundo numero, tendencia de la presion
				if(z_nubes == 1){//H511
					z_output = A + z_wind_direction[2-1] + SS;
				}else if(z_nubes == 2){//H512
					z_output = D + z_wind_direction[2-1] + SS;
				}else if(z_nubes == 3){//H513
					z_output = J + z_wind_direction[2-1] + SS;
				}else if(z_nubes == 4){//H514
					z_output = J + z_wind_direction[2-1] + SS;
				}else if(z_nubes == 5){//H515
					z_output = J + z_wind_direction[2-1] + SS;
				}
			}else if(z_trend == 2){//H52x
				if(z_nubes == 1){//H521
					z_output = D + z_wind_direction[2-1] + SS;
				}else if(z_nubes == 2){//H522
					z_output = J + z_wind_direction[2-1] + SS;
				}else if(z_nubes == 3){//H523
					z_output = J + z_wind_direction[2-1] + SS;
				}else if(z_nubes == 4){//H524
					z_output = J + z_wind_direction[2-1] + SS;
				}else if(z_nubes == 5){//H525
					z_output = J + z_wind_direction[2-1] + SS;
				}
			}else if(z_trend == 3){//H53x
				if(z_nubes == 1){//H531
					z_output = D + z_wind_direction[2-1] + SS;
				}else if(z_nubes == 2){//H532
					z_output = J + z_wind_direction[2-1] + SS;
				}else if(z_nubes == 3){//H533
					z_output = J + z_wind_direction[2-1] + SS;
				}else if(z_nubes == 4){//H534
					z_output = J + z_wind_direction[2-1] + SS;
				}else if(z_nubes == 5){//H535
					z_output = J + z_wind_direction[2-1] + SS;
				}
			}else if(z_trend == 4){//H54x
				if(z_nubes == 1){//H541
					z_output = J + z_wind_direction[3-1] + SS;
				}else if(z_nubes == 2){//H542
					z_output = M + z_wind_direction[3-1] + SS;
				}else if(z_nubes == 3){//H543
					z_output = M + z_wind_direction[3-1] + SS;
				}else if(z_nubes == 4){//H544
					z_output = M + z_wind_direction[3-1] + SS;
				}else if(z_nubes == 5){//H545
					z_output = M + z_wind_direction[3-1] + SS;
				}
			}else if(z_trend == 5){//H55x
				if(z_nubes == 1){//H551
					z_output = M + z_wind_direction[3-1] + SS;
				}else if(z_nubes == 2){//H552
					z_output = M + z_wind_direction[3-1] + SS;
				}else if(z_nubes == 3){//H553
					z_output = M + z_wind_direction[3-1] + SS;
				}else if(z_nubes == 4){//H554
					z_output = M + z_wind_direction[3-1] + SS;
				}else if(z_nubes == 5){//H555
					z_output = M + z_wind_direction[3-1] + SS;
				}
			}//Hin segundo numero
		}else if(z_hpa == 6){//H6xx
			if(z_trend == 1){//H61x Segundo numero, tendencia de la presion
				if(z_nubes == 1){//H611
					z_output = L + z_wind_direction[2-1] + "early, changing to  " + z_wind_direction[1-1] + SS;
				}else if(z_nubes == 2){//H612
					z_output = L + z_wind_direction[2-1] + "early, changing to  " + z_wind_direction[1-1] + SS;
				}else if(z_nubes == 3){//H613
					z_output = L + z_wind_direction[2-1] + "early, changing to  " + z_wind_direction[1-1] + SS;
				}else if(z_nubes == 4){//H614
					z_output = L + z_wind_direction[2-1] + "early, changing to  " + z_wind_direction[1-1] + SS;
				}else if(z_nubes == 5){//H615
					z_output = L + z_wind_direction[2-1] + "early, changing to  " + z_wind_direction[1-1] + SS;
				}
			}else if(z_trend == 2){//H62x
				if(z_nubes == 1){//H621
					z_output = L + z_wind_direction[2-1] + "early, changing to  " + z_wind_direction[1-1] + SS;
				}else if(z_nubes == 2){//H622
					z_output = L + z_wind_direction[2-1] + "early, changing to  " + z_wind_direction[1-1] + SS;
				}else if(z_nubes == 3){//H623
					z_output = L + z_wind_direction[2-1] + "early, changing to  " + z_wind_direction[1-1] + SS;
				}else if(z_nubes == 4){//H624
					z_output = L + z_wind_direction[2-1] + "early, changing to  " + z_wind_direction[1-1] + SS;
				}else if(z_nubes == 5){//H625
					z_output = L + z_wind_direction[2-1] + "early, changing to  " + z_wind_direction[1-1] + SS;
				}
			}else if(z_trend == 3){//H63x
				if(z_nubes == 1){//H631
					z_output = L + z_wind_direction[2-1] + "early, changing to  " + z_wind_direction[1-1] + SS;
				}else if(z_nubes == 2){//H632
					z_output = L + z_wind_direction[2-1] + "early, changing to  " + z_wind_direction[1-1] + SS;
				}else if(z_nubes == 3){//H633
					z_output = L + z_wind_direction[2-1] + "early, changing to  " + z_wind_direction[1-1] + SS;
				}else if(z_nubes == 4){//H634
					z_output = L + z_wind_direction[2-1] + "early, changing to  " + z_wind_direction[1-1] + SS;
				}else if(z_nubes == 5){//H635
					z_output = L + z_wind_direction[2-1] + "early, changing to  " + z_wind_direction[1-1] + SS;
				}
			}else if(z_trend == 4){//H64x
				if(z_nubes == 1){//H641
					z_output = L + z_wind_direction[3-1] + GG;
				}else if(z_nubes == 2){//H642
					z_output = P + z_wind_direction[3-1] + GG;
				}else if(z_nubes == 3){//H643
					z_output = P + z_wind_direction[3-1] + GG;
				}else if(z_nubes == 4){//H644
					z_output = P + z_wind_direction[3-1] + GG;
				}else if(z_nubes == 5){//H645
					z_output = P + z_wind_direction[3-1] + GG;
				}
			}else if(z_trend == 5){//H65x
				if(z_nubes == 1){//H651
					z_output = P + z_wind_direction[3-1] + GG;
				}else if(z_nubes == 2){//H652
					z_output = P + z_wind_direction[3-1] + GG;
				}else if(z_nubes == 3){//H653
					z_output = P + z_wind_direction[3-1] + GG;
				}else if(z_nubes == 4){//H654
					z_output = P + z_wind_direction[3-1] + GG;
				}else if(z_nubes == 5){//H655
					z_output = P + z_wind_direction[3-1] + GG;
				}
			}//Hin segundo numero
		}else if(z_hpa == 7){//H7xx
			if(z_trend == 1){//H71x Segundo numero, tendencia de la presion
				if(z_nubes == 1){//H711
					z_output = L + z_wind_direction[3-1] + GG;
				}else if(z_nubes == 2){//H712
					z_output = L + z_wind_direction[3-1] + GG;
				}else if(z_nubes == 3){//H713
					z_output = L + z_wind_direction[3-1] + GG;
				}else if(z_nubes == 4){//H714
					z_output = L + z_wind_direction[3-1] + GG;
				}else if(z_nubes == 5){//H715
					z_output = L + z_wind_direction[3-1] + GG;
				}
			}else if(z_trend == 2){//H72x
				if(z_nubes == 1){//H721
					z_output = L + z_wind_direction[3-1] + GG;
				}else if(z_nubes == 2){//H722
					z_output = L + z_wind_direction[3-1] + GG;
				}else if(z_nubes == 3){//H723
					z_output = L + z_wind_direction[3-1] + GG;
				}else if(z_nubes == 4){//H724
					z_output = L + z_wind_direction[3-1] + GG;
				}else if(z_nubes == 5){//H725
					z_output = L + z_wind_direction[3-1] + GG;
				}
			}else if(z_trend == 3){//H73x
			if(z_nubes == 1){//H731
					z_output = P + z_wind_direction[3-1] + GG;
				}else if(z_nubes == 2){//H732
					z_output = P + z_wind_direction[3-1] + GG;
				}else if(z_nubes == 3){//H733
					z_output = P + z_wind_direction[3-1] + GG;
				}else if(z_nubes == 4){//H734
					z_output = P + z_wind_direction[3-1] + GG;
				}else if(z_nubes == 5){//H735
					z_output = P + z_wind_direction[3-1] + GG;
				}
			}else if(z_trend == 4){//H74x
				if(z_nubes == 1){//H741
					z_output = P + z_wind_direction[3-1] + WW;
				}else if(z_nubes == 2){//H742
					z_output = P + z_wind_direction[3-1] + WW;
				}else if(z_nubes == 3){//H743
					z_output = P + z_wind_direction[3-1] + WW;
				}else if(z_nubes == 4){//H744
					z_output = P + z_wind_direction[3-1] + WW;
				}else if(z_nubes == 5){//H745
					z_output = P + z_wind_direction[3-1] + WW;
				}
			}else if(z_trend == 5){//H75x
				if(z_nubes == 1){//H751
					z_output = P + z_wind_direction[3-1] + WW;
				}else if(z_nubes == 2){//H752
					z_output = P + z_wind_direction[3-1] + WW;
				}else if(z_nubes == 3){//H753
					z_output = P + z_wind_direction[3-1] + WW;
				}else if(z_nubes == 4){//H754
					z_output = P + z_wind_direction[3-1] + WW;
				}else if(z_nubes == 5){//H755
					z_output = P + z_wind_direction[3-1] + WW
				}
			}//Hin segundo numero
		}else if (z_hpa == 8) {//H8xx
			if(z_trend == 1){//H81x Segundo numero, tendencia de la presion
				if(z_nubes == 1){//H811
					z_output = L + z_wind_direction[3-1] + WW;
				}else if(z_nubes == 2){//H812
					z_output = L + z_wind_direction[3-1] + WW;
				}else if(z_nubes == 3){//H813
					z_output = L + z_wind_direction[3-1] + WW;
				}else if(z_nubes == 4){//H814
					z_output = L + z_wind_direction[3-1] + WW;
				}else if(z_nubes == 5){//H815
					z_output = L + z_wind_direction[3-1] + WW;
				}
			}else if(z_trend == 2){//H82x
				if(z_nubes == 1){//H821
					z_output = P + z_wind_direction[3-1] + WW;
				}else if(z_nubes == 2){//H822
					z_output = P + z_wind_direction[3-1] + WW;
				}else if(z_nubes == 3){//H823
					z_output = P + z_wind_direction[3-1] + WW;
				}else if(z_nubes == 4){//H824
					z_output = P + z_wind_direction[3-1] + WW;
				}else if(z_nubes == 5){//H825
					z_output = P + z_wind_direction[3-1] + WW;
				}
			}else if(z_trend == 3){//H83x
			if(z_nubes == 1){//H831
					z_output = P + z_wind_direction[3-1] + WW;
				}else if(z_nubes == 2){//H832
					z_output = P + z_wind_direction[3-1] + WW;
				}else if(z_nubes == 3){//H833
					z_output = P + z_wind_direction[3-1] + WW;
				}else if(z_nubes == 4){//H834
					z_output = P + z_wind_direction[3-1] + WW;
				}else if(z_nubes == 5){//H835
					z_output = P + z_wind_direction[3-1] + WW;
				}
			}else if(z_trend == 4){//H84x
				if(z_nubes == 1){//H841
					z_output = P + z_wind_direction[3-1] + WW;
				}else if(z_nubes == 2){//H842
					z_output = P + z_wind_direction[3-1] + WW;
				}else if(z_nubes == 3){//H843
					z_output = P + z_wind_direction[3-1] + WW;
				}else if(z_nubes == 4){//H844
					z_output = P + z_wind_direction[3-1] + WW;
				}else if(z_nubes == 5){//H845
					z_output = P + z_wind_direction[3-1] + WW;
				}
			}else if(z_trend == 5){//H85x
				if(z_nubes == 1){//H851
					z_output = P + z_wind_direction[3-1] + HH;
				}else if(z_nubes == 2){//H852
					z_output = P + z_wind_direction[3-1] + HH;
				}else if(z_nubes == 3){//H853
					z_output = P + z_wind_direction[3-1] + HH;
				}else if(z_nubes == 4){//H854
					z_output = P + z_wind_direction[3-1] + HH;
				}else if(z_nubes == 5){//H855
					z_output = P + z_wind_direction[3-1] + HH;
				}
			}//Hin segundo numero
		}//Hin primer numero
			
	}//Hin letra H
	
	//////////////////////////////////////////////////////////////////
	
	//LETRA J
	
	if(z_output == "J"){
		if(z_hpa == 1){//J1xx Primer numero, presion atmosferica
			if(z_trend == 1){//J11x Segundo numero, tendencia de la presion
				if(z_nubes == 1){//J111
					z_output = A + z_wind_direction[3-1] + UU;
				}else if(z_nubes == 2){//J112
					z_output = A + z_wind_direction[3-1] + UU;
				}else if(z_nubes == 3){//J113
					z_output = A + z_wind_direction[3-1] + UU;
				}else if(z_nubes == 4){//J114
					z_output = D + z_wind_direction[3-1] + UU;
				}else if(z_nubes == 5){//J115
					z_output = J + z_wind_direction[3-1] + UU;
				}
			}else if(z_trend == 2){//J12x
				if(z_nubes == 1){//J121
					z_output = A + z_wind_direction[3-1] + UU;
				}else if(z_nubes == 2){//J122
					z_output = A + z_wind_direction[3-1] + UU;
				}else if(z_nubes == 3){//J123
					z_output = A + z_wind_direction[3-1] + UU;
				}else if(z_nubes == 4){//J124
					z_output = D + z_wind_direction[3-1] + UU;
				}else if(z_nubes == 5){//J125
					z_output = J + z_wind_direction[3-1] + UU;
				}
			}else if(z_trend == 3){//J13x
				if(z_nubes == 1){//J131
					z_output = A + z_wind_direction[3-1] + UU;
				}else if(z_nubes == 2){//J132
					z_output = A + z_wind_direction[3-1] + UU;
				}else if(z_nubes == 3){//J133
					z_output = D + z_wind_direction[3-1] + UU;
				}else if(z_nubes == 4){//J134
					z_output = G + z_wind_direction[3-1] + UU;
				}else if(z_nubes == 5){//J135
					z_output = J + z_wind_direction[3-1] + UU;
				}
			}else if(z_trend == 4){//14x
				if(z_nubes == 1){//141
					z_output = E + z_wind_direction[3-1] + NN;
				}else if(z_nubes == 2){//J142
					z_output = H + z_wind_direction[3-1] + NN;
				}else if(z_nubes == 3){//J143
					z_output = H + z_wind_direction[3-1] + NN;
				}else if(z_nubes == 4){//J144
					z_output = H + z_wind_direction[3-1] + NN;
				}else if(z_nubes == 5){//J145
					z_output = N + z_wind_direction[3-1] + NN;
				}
			}else if(z_trend == 5){//15x
				if(z_nubes == 1){//151
					z_output = H + z_wind_direction[3-1] + NN;
				}else if(z_nubes == 2){//J152
					z_output = H + z_wind_direction[3-1] + NN;
				}else if(z_nubes == 3){//J153
					z_output = H + z_wind_direction[3-1] + NN;
				}else if(z_nubes == 4){//J154
					z_output = H + z_wind_direction[3-1] + NN;
				}else if(z_nubes == 5){//J155
					z_output = N + z_wind_direction[3-1] + NN;
				}
		
				
			}//Jin segundo numero
		}else if(z_hpa == 2){//J2xx
			if(z_trend == 1){//J21x Segundo numero, tendencia de la presion
				if(z_nubes == 1){//J211
					z_output = A + z_wind_direction[3-1] + UU;
				}else if(z_nubes == 2){//J212
					z_output = A + z_wind_direction[3-1] + UU;
				}else if(z_nubes == 3){//J213
					z_output = A + z_wind_direction[3-1] + UU;
				}else if(z_nubes == 4){//J214
					z_output = D + z_wind_direction[3-1] + UU;
				}else if(z_nubes == 5){//J215
					z_output = J + z_wind_direction[3-1] + UU;
				}
			}else if(z_trend == 2){//J22x
				if(z_nubes == 1){//J221
					z_output = A + z_wind_direction[3-1] + UU;
				}else if(z_nubes == 2){//J222
					z_output = A + z_wind_direction[3-1] + UU;
				}else if(z_nubes == 3){//J223
					z_output = A + z_wind_direction[3-1] + UU;
				}else if(z_nubes == 4){//J224
					z_output = D + z_wind_direction[3-1] + UU;
				}else if(z_nubes == 5){//J225
					z_output = J + z_wind_direction[3-1] + UU;
				}
			}else if(z_trend == 3){//J23x
				if(z_nubes == 1){//J231
					z_output = A + z_wind_direction[3-1] + UU;
				}else if(z_nubes == 2){//J232
					z_output = A + z_wind_direction[3-1] + UU;
				}else if(z_nubes == 3){//J233
					z_output = D + z_wind_direction[3-1] + UU;
				}else if(z_nubes == 4){//J234
					z_output = G + z_wind_direction[3-1] + UU;
				}else if(z_nubes == 5){//J235
					z_output = M + z_wind_direction[3-1] + UU;
				}
			}else if(z_trend == 4){//J24x
				if(z_nubes == 1){//J241
					z_output = E + z_wind_direction[3-1] + NN;
				}else if(z_nubes == 2){//J242
					z_output = H + z_wind_direction[3-1] + NN;
				}else if(z_nubes == 3){//J243
					z_output = H + z_wind_direction[3-1] + NN;
				}else if(z_nubes == 4){//J244
					z_output = H + z_wind_direction[3-1] + NN;
				}else if(z_nubes == 5){//J245
					z_output = N + z_wind_direction[3-1] + NN;
				}
			}else if(z_trend == 5){//J25x
				if(z_nubes == 1){//J251
					z_output = H + z_wind_direction[3-1] + NN;
				}else if(z_nubes == 2){//J252
					z_output = H + z_wind_direction[3-1] + NN;
				}else if(z_nubes == 3){//J253
					z_output = H + z_wind_direction[3-1] + NN;
				}else if(z_nubes == 4){//J254
					z_output = H + z_wind_direction[3-1] + NN;
				}else if(z_nubes == 5){//J255
					z_output = N + z_wind_direction[3-1] + NN;
				}
			}//Jin segundo numero
			
		}else if(z_hpa == 3){//J3xx
			if(z_trend == 1){//J31x Segundo numero, tendencia de la presion
				if(z_nubes == 1){//J311
					z_output = A + z_wind_direction[3-1] + UU;
				}else if(z_nubes == 2){//J312
					z_output = A + z_wind_direction[3-1] + UU;
				}else if(z_nubes == 3){//J313
					z_output = A + z_wind_direction[3-1] + UU;
				}else if(z_nubes == 4){//J314
					z_output = D + z_wind_direction[3-1] + UU;
				}else if(z_nubes == 5){//J315
					z_output = J + z_wind_direction[3-1] + UU;
				}
			}else if(z_trend == 2){//J32x
				if(z_nubes == 1){//J321
					z_output = A + z_wind_direction[3-1] + UU;
				}else if(z_nubes == 2){//J322
					z_output = A + z_wind_direction[3-1] + UU;
				}else if(z_nubes == 3){//J323
					z_output = A + z_wind_direction[3-1] + UU;
				}else if(z_nubes == 4){//J324
					z_output = D + z_wind_direction[3-1] + UU;
				}else if(z_nubes == 5){//J325
					z_output = J + z_wind_direction[3-1] + UU;
				}
			}else if(z_trend == 3){//J33x
				if(z_nubes == 1){//J331
					z_output = A + z_wind_direction[3-1] + UU;
				}else if(z_nubes == 2){//J332
					z_output = A + z_wind_direction[3-1] + UU;
				}else if(z_nubes == 3){//J333
					z_output = D + z_wind_direction[3-1] + UU;
				}else if(z_nubes == 4){//J334
					z_output = G + z_wind_direction[3-1] + UU;
				}else if(z_nubes == 5){//J335
					z_output = M + z_wind_direction[3-1] + UU;
				}
			}else if(z_trend == 4){//J34x
				if(z_nubes == 1){//J341
					z_output = H + z_wind_direction[3-1] + NN;
				}else if(z_nubes == 2){//J342
					z_output = H + z_wind_direction[3-1] + NN;
				}else if(z_nubes == 3){//J343
					z_output = H + z_wind_direction[3-1] + NN;
				}else if(z_nubes == 4){//J344
					z_output = H + z_wind_direction[3-1] + NN;
				}else if(z_nubes == 5){//J345
					z_output = N + z_wind_direction[3-1] + NN;
				}
			}else if(z_trend == 5){//J35x
				if(z_nubes == 1){//J351
					z_output = G + z_wind_direction[3-1] + NN;
				}else if(z_nubes == 2){//J352
					z_output = G + z_wind_direction[3-1] + NN;
				}else if(z_nubes == 3){//J353
					z_output = G + z_wind_direction[3-1] + NN;
				}else if(z_nubes == 4){//J354
					z_output = G + z_wind_direction[3-1] + NN;
				}else if(z_nubes == 5){//J355
					z_output = M + z_wind_direction[3-1] + NN;
				}
			}//Jin segundo numero
		}else if(z_hpa == 4){//J4xx
			if(z_trend == 1){//J41x Segundo numero, tendencia de la presion
				if(z_nubes == 1){//J411
					z_output = A + z_wind_direction[3-1] + FF;
				}else if(z_nubes == 2){//J412
					z_output = A + z_wind_direction[3-1] + FF;
				}else if(z_nubes == 3){//J413
					z_output = A + z_wind_direction[3-1] + FF;
				}else if(z_nubes == 4){//J414
					z_output = D + z_wind_direction[3-1] + FF;
				}else if(z_nubes == 5){//J415
					z_output = J + z_wind_direction[3-1] + FF;
				}
			}else if(z_trend == 2){//J42x
				if(z_nubes == 1){//J421
					z_output = A + z_wind_direction[3-1] + FF;
				}else if(z_nubes == 2){//J422
					z_output = A + z_wind_direction[3-1] + FF;
				}else if(z_nubes == 3){//J423
					z_output = A + z_wind_direction[3-1] + FF;
				}else if(z_nubes == 4){//J424
					z_output = G + z_wind_direction[3-1] + FF;
				}else if(z_nubes == 5){//J425
					z_output = J + z_wind_direction[3-1] + FF;
				}
			}else if(z_trend == 3){//J43x
				if(z_nubes == 1){//J431
					z_output = A + z_wind_direction[3-1] + FF;
				}else if(z_nubes == 2){//J432
					z_output = A + z_wind_direction[3-1] + FF;
				}else if(z_nubes == 3){//J433
					z_output = D + z_wind_direction[3-1] + FF;
				}else if(z_nubes == 4){//J434
					z_output = G + z_wind_direction[3-1] + FF;
				}else if(z_nubes == 5){//J435
					z_output = M + z_wind_direction[3-1] + FF;
				}
			}else if(z_trend == 4){//J44x
				if(z_nubes == 1){//J441
					z_output = G + z_wind_direction[3-1] + NN;
				}else if(z_nubes == 2){//J442
					z_output = G + z_wind_direction[3-1] + NN;
				}else if(z_nubes == 3){//J443
					z_output = G + z_wind_direction[3-1] + NN;
				}else if(z_nubes == 4){//J444
					z_output = M + z_wind_direction[3-1] + NN;
				}else if(z_nubes == 5){//J445
					z_output = M + z_wind_direction[3-1] + NN;
				}
			}else if(z_trend == 5){//J45x
				if(z_nubes == 1){//J451
					z_output = G + z_wind_direction[3-1] + SS;
				}else if(z_nubes == 2){//J452
					z_output = M + z_wind_direction[3-1] + SS;
				}else if(z_nubes == 3){//J453
					z_output = M + z_wind_direction[3-1] + SS;
				}else if(z_nubes == 4){//J454
					z_output = M + z_wind_direction[3-1] + SS;
				}else if(z_nubes == 5){//J455
					z_output = M + z_wind_direction[3-1] + SS;
				}
			}//Jin segundo numero
		}else if(z_hpa == 5){//J5xx
			if(z_trend == 1){//J51x Segundo numero, tendencia de la presion
				if(z_nubes == 1){//J511
					z_output = A + z_wind_direction[2-1] + SS;
				}else if(z_nubes == 2){//J512
					z_output = D + z_wind_direction[2-1] + SS;
				}else if(z_nubes == 3){//J513
					z_output = J + z_wind_direction[2-1] + SS;
				}else if(z_nubes == 4){//J514
					z_output = J + z_wind_direction[2-1] + SS;
				}else if(z_nubes == 5){//J515
					z_output = J + z_wind_direction[2-1] + SS;
				}
			}else if(z_trend == 2){//J52x
				if(z_nubes == 1){//J521
					z_output = D + z_wind_direction[2-1] + SS;
				}else if(z_nubes == 2){//J522
					z_output = J + z_wind_direction[2-1] + SS;
				}else if(z_nubes == 3){//J523
					z_output = J + z_wind_direction[2-1] + SS;
				}else if(z_nubes == 4){//J524
					z_output = J + z_wind_direction[2-1] + SS;
				}else if(z_nubes == 5){//J525
					z_output = J + z_wind_direction[2-1] + SS;
				}
			}else if(z_trend == 3){//J53x
				if(z_nubes == 1){//J531
					z_output = D + z_wind_direction[3-1] + SS;
				}else if(z_nubes == 2){//J532
					z_output = J + z_wind_direction[3-1] + SS;
				}else if(z_nubes == 3){//J533
					z_output = J + z_wind_direction[3-1] + SS;
				}else if(z_nubes == 4){//J534
					z_output = J + z_wind_direction[3-1] + SS;
				}else if(z_nubes == 5){//J535
					z_output = M + z_wind_direction[3-1] + SS;
				}
			}else if(z_trend == 4){//J54x
				if(z_nubes == 1){//J541
					z_output = J + z_wind_direction[3-1] + SS;
				}else if(z_nubes == 2){//J542
					z_output = M + z_wind_direction[3-1] + SS;
				}else if(z_nubes == 3){//J543
					z_output = M + z_wind_direction[3-1] + SS;
				}else if(z_nubes == 4){//J544
					z_output = M + z_wind_direction[3-1] + SS;
				}else if(z_nubes == 5){//J545
					z_output = M + z_wind_direction[3-1] + SS;
				}
			}else if(z_trend == 5){//J55x
				if(z_nubes == 1){//J551
					z_output = M + z_wind_direction[3-1] + SS;
				}else if(z_nubes == 2){//J552
					z_output = M + z_wind_direction[3-1] + SS;
				}else if(z_nubes == 3){//J553
					z_output = M + z_wind_direction[3-1] + SS;
				}else if(z_nubes == 4){//J554
					z_output = M + z_wind_direction[3-1] + SS;
				}else if(z_nubes == 5){//J555
					z_output = M + z_wind_direction[3-1] + SS;
				}
			}//Jin segundo numero
		}else if(z_hpa == 6){//J6xx
			if(z_trend == 1){//J61x Segundo numero, tendencia de la presion
				if(z_nubes == 1){//J611
					z_output = L + z_wind_direction[2-1] + SS;
				}else if(z_nubes == 2){//J612
					z_output = L + z_wind_direction[2-1] + SS;
				}else if(z_nubes == 3){//J613
					z_output = L + z_wind_direction[2-1] + SS;
				}else if(z_nubes == 4){//J614
					z_output = L + z_wind_direction[2-1] + SS;
				}else if(z_nubes == 5){//J615
					z_output = L + z_wind_direction[2-1] + SS;
				}
			}else if(z_trend == 2){//J62x
				if(z_nubes == 1){//J621
					z_output = L + z_wind_direction[2-1] + SS;
				}else if(z_nubes == 2){//J622
					z_output = L + z_wind_direction[2-1] + SS;
				}else if(z_nubes == 3){//J623
					z_output = L + z_wind_direction[2-1] + SS;
				}else if(z_nubes == 4){//J624
					z_output = L + z_wind_direction[2-1] + SS;
				}else if(z_nubes == 5){//J625
					z_output = L + z_wind_direction[2-1] + SS;
				}
			}else if(z_trend == 3){//J63x
				if(z_nubes == 1){//J631
					z_output = L + z_wind_direction[3-1] + SS;
				}else if(z_nubes == 2){//J632
					z_output = L + z_wind_direction[3-1] + SS;
				}else if(z_nubes == 3){//J633
					z_output = L + z_wind_direction[3-1] + SS;
				}else if(z_nubes == 4){//J634
					z_output = L + z_wind_direction[3-1] + SS;
				}else if(z_nubes == 5){//J635
					z_output = L + z_wind_direction[3-1] + JJ;
				}
			}else if(z_trend == 4){//J64x
				if(z_nubes == 1){//J641
					z_output = L + z_wind_direction[3-1] + GG;
				}else if(z_nubes == 2){//J642
					z_output = L + z_wind_direction[3-1] + GG;
				}else if(z_nubes == 3){//J643
					z_output = P + z_wind_direction[3-1] + GG;
				}else if(z_nubes == 4){//J644
					z_output = P + z_wind_direction[3-1] + GG;
				}else if(z_nubes == 5){//J645
					z_output = P + z_wind_direction[3-1] + GG;
				}
			}else if(z_trend == 5){//J65x
				if(z_nubes == 1){//J651
					z_output = P + z_wind_direction[3-1] + GG;
				}else if(z_nubes == 2){//J652
					z_output = P + z_wind_direction[3-1] + GG;
				}else if(z_nubes == 3){//J653
					z_output = P + z_wind_direction[3-1] + GG;
				}else if(z_nubes == 4){//J654
					z_output = P + z_wind_direction[3-1] + GG;
				}else if(z_nubes == 5){//J655
					z_output = P + z_wind_direction[3-1] + GG;
				}
			}//Jin segundo numero
		}else if(z_hpa == 7){//J7xx
			if(z_trend == 1){//J71x Segundo numero, tendencia de la presion
				if(z_nubes == 1){//J711
					z_output = L + z_wind_direction[3-1] + GG;
				}else if(z_nubes == 2){//J712
					z_output = L + z_wind_direction[3-1] + GG;
				}else if(z_nubes == 3){//J713
					z_output = L + z_wind_direction[3-1] + GG;
				}else if(z_nubes == 4){//J714
					z_output = L + z_wind_direction[3-1] + GG;
				}else if(z_nubes == 5){//J715
					z_output = L + z_wind_direction[3-1] + GG;
				}
			}else if(z_trend == 2){//J72x
				if(z_nubes == 1){//J721
					z_output = L + z_wind_direction[3-1] + GG;
				}else if(z_nubes == 2){//J722
					z_output = L + z_wind_direction[3-1] + GG;
				}else if(z_nubes == 3){//J723
					z_output = L + z_wind_direction[3-1] + GG;
				}else if(z_nubes == 4){//J724
					z_output = L + z_wind_direction[3-1] + GG;
				}else if(z_nubes == 5){//J725
					z_output = L + z_wind_direction[3-1] + GG;
				}
			}else if(z_trend == 3){//J73x
			if(z_nubes == 1){//J731
					z_output = P + z_wind_direction[3-1] + GG;
				}else if(z_nubes == 2){//J732
					z_output = P + z_wind_direction[3-1] + GG;
				}else if(z_nubes == 3){//J733
					z_output = P + z_wind_direction[3-1] + GG;
				}else if(z_nubes == 4){//J734
					z_output = P + z_wind_direction[3-1] + GG;
				}else if(z_nubes == 5){//J735
					z_output = P + z_wind_direction[3-1] + GG;
				}
			}else if(z_trend == 4){//J74x
				if(z_nubes == 1){//J741
					z_output = P + z_wind_direction[3-1] + WW;
				}else if(z_nubes == 2){//J742
					z_output = P + z_wind_direction[3-1] + WW;
				}else if(z_nubes == 3){//J743
					z_output = P + z_wind_direction[3-1] + WW;
				}else if(z_nubes == 4){//J744
					z_output = P + z_wind_direction[3-1] + WW;
				}else if(z_nubes == 5){//J745
					z_output = P + z_wind_direction[3-1] + WW;
				}
			}else if(z_trend == 5){//J75x
				if(z_nubes == 1){//J751
					z_output = P + z_wind_direction[3-1] + WW;
				}else if(z_nubes == 2){//J752
					z_output = P + z_wind_direction[3-1] + WW;
				}else if(z_nubes == 3){//J753
					z_output = P + z_wind_direction[3-1] + WW;
				}else if(z_nubes == 4){//J754
					z_output = P + z_wind_direction[3-1] + WW;
				}else if(z_nubes == 5){//J755
					z_output = P + z_wind_direction[3-1] + WW;
				}
			}//Jin segundo numero
		}else if (z_hpa == 8) {//J8xx
			if(z_trend == 1){//J81x Segundo numero, tendencia de la presion
				if(z_nubes == 1){//J811
					z_output = L + z_wind_direction[3-1] + WW;
				}else if(z_nubes == 2){//J812
					z_output = L + z_wind_direction[3-1] + WW;
				}else if(z_nubes == 3){//J813
					z_output = L + z_wind_direction[3-1] + WW;
				}else if(z_nubes == 4){//J814
					z_output = L + z_wind_direction[3-1] + WW;
				}else if(z_nubes == 5){//J815
					z_output = L + z_wind_direction[3-1] + WW;
				}
			}else if(z_trend == 2){//J82x
				if(z_nubes == 1){//J821
					z_output = P + z_wind_direction[3-1] + WW;
				}else if(z_nubes == 2){//J822
					z_output = P + z_wind_direction[3-1] + WW;
				}else if(z_nubes == 3){//J823
					z_output = P + z_wind_direction[3-1] + WW;
				}else if(z_nubes == 4){//J824
					z_output = P + z_wind_direction[3-1] + WW;
				}else if(z_nubes == 5){//J825
					z_output = P + z_wind_direction[3-1] + WW;
				}
			}else if(z_trend == 3){//J83x
				if(z_nubes == 1){//J831
					z_output = P + z_wind_direction[3-1] + WW;
				}else if(z_nubes == 2){//J832
					z_output = P + z_wind_direction[3-1] + WW;
				}else if(z_nubes == 3){//J833
					z_output = P + z_wind_direction[3-1] + WW;
				}else if(z_nubes == 4){//J834
					z_output = P + z_wind_direction[3-1] + WW;
				}else if(z_nubes == 5){//J835
					z_output = P + z_wind_direction[3-1] + WW;
				}
			}else if(z_trend == 4){//J84x
				if(z_nubes == 1){//J841
					z_output = P + z_wind_direction[3-1] + WW;
				}else if(z_nubes == 2){//J842
					z_output = P + z_wind_direction[3-1] + WW;
				}else if(z_nubes == 3){//J843
					z_output = P + z_wind_direction[3-1] + WW;
				}else if(z_nubes == 4){//J844
					z_output = P + z_wind_direction[3-1] + WW;
				}else if(z_nubes == 5){//J845
					z_output = P + z_wind_direction[3-1] + WW;
				}
			}else if(z_trend == 5){//J85x
				if(z_nubes == 1){//J851
					z_output = P + z_wind_direction[3-1] + HH;
				}else if(z_nubes == 2){//J852
					z_output = P + z_wind_direction[3-1] + HH;
				}else if(z_nubes == 3){//J853
					z_output = P + z_wind_direction[3-1] + HH;
				}else if(z_nubes == 4){//J854
					z_output = P + z_wind_direction[3-1] + HH;
				}else if(z_nubes == 5){//J855
					z_output = P + z_wind_direction[3-1] + HH;
				}
			}//Jin segundo numero
		}//Jin primer numero
			
	}//Jin letra J
	
	/////////////////////////////////////////////////////////////////
	
		
	//LETRA K
	
	if(z_output == "K"){
		if(z_hpa == 1){//K1xx Primer numero, presion atmosferica
			if(z_trend == 1){//K11x Segundo numero, tendencia de la presion
				if(z_nubes == 1){//K111
					z_output = A + z_wind_direction[3-1] + UU;
				}else if(z_nubes == 2){//K112
					z_output = A + z_wind_direction[3-1] + UU;
				}else if(z_nubes == 3){//K113
					z_output = A + z_wind_direction[3-1] + UU;
				}else if(z_nubes == 4){//K114
					z_output = D + z_wind_direction[3-1] + UU;
				}else if(z_nubes == 5){//K115
					z_output = J + z_wind_direction[3-1] + UU;
				}
			}else if(z_trend == 2){//K12x
				if(z_nubes == 1){//K121
					z_output = A + z_wind_direction[3-1] + UU;
				}else if(z_nubes == 2){//K122
					z_output = A + z_wind_direction[3-1] + UU;
				}else if(z_nubes == 3){//K123
					z_output = A + z_wind_direction[3-1] + UU;
				}else if(z_nubes == 4){//K124
					z_output = D + z_wind_direction[3-1] + UU;
				}else if(z_nubes == 5){//K125
					z_output = J + z_wind_direction[3-1] + UU;
				}
			}else if(z_trend == 3){//K13x
				if(z_nubes == 1){//K131
					z_output = A + z_wind_direction[3-1] + UU;
				}else if(z_nubes == 2){//K132
					z_output = A + z_wind_direction[3-1] + UU;
				}else if(z_nubes == 3){//K133
					z_output = D + z_wind_direction[3-1] + UU;
				}else if(z_nubes == 4){//K134
					z_output = G + z_wind_direction[3-1] + UU;
				}else if(z_nubes == 5){//K135
					z_output = J + z_wind_direction[3-1] + UU;
				}
			}else if(z_trend == 4){//14x
				if(z_nubes == 1){//141
					z_output = E + z_wind_direction[3-1] + NN;
				}else if(z_nubes == 2){//K142
					z_output = H + z_wind_direction[3-1] + NN;
				}else if(z_nubes == 3){//K143
					z_output = H + z_wind_direction[3-1] + NN;
				}else if(z_nubes == 4){//K144
					z_output = H + z_wind_direction[3-1] + NN;
				}else if(z_nubes == 5){//K145
					z_output = N + z_wind_direction[3-1] + NN;
				}
			}else if(z_trend == 5){//15x
				if(z_nubes == 1){//151
					z_output = H + z_wind_direction[3-1] + NN;
				}else if(z_nubes == 2){//K152
					z_output = H + z_wind_direction[3-1] + NN;
				}else if(z_nubes == 3){//K153
					z_output = H + z_wind_direction[3-1] + NN;
				}else if(z_nubes == 4){//K154
					z_output = H + z_wind_direction[3-1] + NN;
				}else if(z_nubes == 5){//K155
					z_output = N + z_wind_direction[3-1] + NN;
				}
		
				
			}//Kin segundo numero
		}else if(z_hpa == 2){//K2xx
			if(z_trend == 1){//K21x Segundo numero, tendencia de la presion
				if(z_nubes == 1){//K211
					z_output = A + z_wind_direction[3-1] + UU;
				}else if(z_nubes == 2){//K212
					z_output = A + z_wind_direction[3-1] + UU;
				}else if(z_nubes == 3){//K213
					z_output = A + z_wind_direction[3-1] + UU;
				}else if(z_nubes == 4){//K214
					z_output = D + z_wind_direction[3-1] + UU;
				}else if(z_nubes == 5){//K215
					z_output = J + z_wind_direction[3-1] + UU;
				}
			}else if(z_trend == 2){//K22x
				if(z_nubes == 1){//K221
					z_output = A + z_wind_direction[3-1] + UU;
				}else if(z_nubes == 2){//K222
					z_output = A + z_wind_direction[3-1] + UU;
				}else if(z_nubes == 3){//K223
					z_output = A + z_wind_direction[3-1] + UU;
				}else if(z_nubes == 4){//K224
					z_output = D + z_wind_direction[3-1] + UU;
				}else if(z_nubes == 5){//K225
					z_output = J + z_wind_direction[3-1] + UU;
				}
			}else if(z_trend == 3){//K23x
				if(z_nubes == 1){//K231
					z_output = A + z_wind_direction[3-1] + UU;
				}else if(z_nubes == 2){//K232
					z_output = A + z_wind_direction[3-1] + UU;
				}else if(z_nubes == 3){//K233
					z_output = D + z_wind_direction[3-1] + UU;
				}else if(z_nubes == 4){//K234
					z_output = G + z_wind_direction[3-1] + UU;
				}else if(z_nubes == 5){//K235
					z_output = M + z_wind_direction[3-1] + UU;
				}
			}else if(z_trend == 4){//K24x
				if(z_nubes == 1){//K241
					z_output = H + z_wind_direction[3-1] + NN;
				}else if(z_nubes == 2){//K242
					z_output = H + z_wind_direction[3-1] + NN;
				}else if(z_nubes == 3){//K243
					z_output = H + z_wind_direction[3-1] + NN;
				}else if(z_nubes == 4){//K244
					z_output = H + z_wind_direction[3-1] + NN;
				}else if(z_nubes == 5){//K245
					z_output = N + z_wind_direction[3-1] + NN;
				}
			}else if(z_trend == 5){//K25x
				if(z_nubes == 1){//K251
					z_output = H + z_wind_direction[3-1] + NN;
				}else if(z_nubes == 2){//K252
					z_output = H + z_wind_direction[3-1] + NN;
				}else if(z_nubes == 3){//K253
					z_output = H + z_wind_direction[3-1] + NN;
				}else if(z_nubes == 4){//K254
					z_output = H + z_wind_direction[3-1] + NN;
				}else if(z_nubes == 5){//K255
					z_output = N + z_wind_direction[3-1] + NN;
				}
			}//Kin segundo numero
			
		}else if(z_hpa == 3){//K3xx
			if(z_trend == 1){//K31x Segundo numero, tendencia de la presion
				if(z_nubes == 1){//K311
					z_output = A + z_wind_direction[3-1] + UU;
				}else if(z_nubes == 2){//K312
					z_output = A + z_wind_direction[3-1] + UU;
				}else if(z_nubes == 3){//K313
					z_output = A + z_wind_direction[3-1] + UU;
				}else if(z_nubes == 4){//K314
					z_output = D + z_wind_direction[3-1] + UU;
				}else if(z_nubes == 5){//K315
					z_output = J + z_wind_direction[3-1] + UU;
				}
			}else if(z_trend == 2){//K32x
				if(z_nubes == 1){//K321
					z_output = A + z_wind_direction[3-1] + UU;
				}else if(z_nubes == 2){//K322
					z_output = A + z_wind_direction[3-1] + UU;
				}else if(z_nubes == 3){//K323
					z_output = A + z_wind_direction[3-1] + UU;
				}else if(z_nubes == 4){//K324
					z_output = D + z_wind_direction[3-1] + UU;
				}else if(z_nubes == 5){//K325
					z_output = J + z_wind_direction[3-1] + UU;
				}
			}else if(z_trend == 3){//K33x
				if(z_nubes == 1){//K331
					z_output = A + z_wind_direction[3-1] + UU;
				}else if(z_nubes == 2){//K332
					z_output = A + z_wind_direction[3-1] + UU;
				}else if(z_nubes == 3){//K333
					z_output = D + z_wind_direction[3-1] + UU;
				}else if(z_nubes == 4){//K334
					z_output = G + z_wind_direction[3-1] + UU;
				}else if(z_nubes == 5){//K335
					z_output = M + z_wind_direction[3-1] + UU;
				}
			}else if(z_trend == 4){//K34x
				if(z_nubes == 1){//K341
					z_output = H + z_wind_direction[3-1] + NN;
				}else if(z_nubes == 2){//K342
					z_output = H + z_wind_direction[3-1] + NN;
				}else if(z_nubes == 3){//K343
					z_output = H + z_wind_direction[3-1] + NN;
				}else if(z_nubes == 4){//K344
					z_output = H + z_wind_direction[3-1] + NN;
				}else if(z_nubes == 5){//K345
					z_output = N + z_wind_direction[3-1] + NN;
				}
			}else if(z_trend == 5){//K35x
				if(z_nubes == 1){//K351
					z_output = G + z_wind_direction[3-1] + NN;
				}else if(z_nubes == 2){//K352
					z_output = G + z_wind_direction[3-1] + NN;
				}else if(z_nubes == 3){//K353
					z_output = G + z_wind_direction[3-1] + NN;
				}else if(z_nubes == 4){//K354
					z_output = G + z_wind_direction[3-1] + NN;
				}else if(z_nubes == 5){//K355
					z_output = M + z_wind_direction[3-1] + NN;
				}
			}//Kin segundo numero
		}else if(z_hpa == 4){//K4xx
			if(z_trend == 1){//K41x Segundo numero, tendencia de la presion
				if(z_nubes == 1){//K411
					z_output = A + z_wind_direction[3-1] + FF;
				}else if(z_nubes == 2){//K412
					z_output = A + z_wind_direction[3-1] + FF;
				}else if(z_nubes == 3){//K413
					z_output = A + z_wind_direction[3-1] + FF;
				}else if(z_nubes == 4){//K414
					z_output = D + z_wind_direction[3-1] + FF;
				}else if(z_nubes == 5){//K415
					z_output = J + z_wind_direction[3-1] + FF;
				}
			}else if(z_trend == 2){//K42x
				if(z_nubes == 1){//K421
					z_output = A + z_wind_direction[3-1] + FF;
				}else if(z_nubes == 2){//K422
					z_output = A + z_wind_direction[3-1] + FF;
				}else if(z_nubes == 3){//K423
					z_output = D + z_wind_direction[3-1] + FF;
				}else if(z_nubes == 4){//K424
					z_output = G + z_wind_direction[3-1] + FF;
				}else if(z_nubes == 5){//K425
					z_output = J + z_wind_direction[3-1] + FF;
				}
			}else if(z_trend == 3){//K43x
				if(z_nubes == 1){//K431
					z_output = A + z_wind_direction[3-1] + FF;
				}else if(z_nubes == 2){//K432
					z_output = A + z_wind_direction[3-1] + FF;
				}else if(z_nubes == 3){//K433
					z_output = G + z_wind_direction[3-1] + FF;
				}else if(z_nubes == 4){//K434
					z_output = G + z_wind_direction[3-1] + FF;
				}else if(z_nubes == 5){//K435
					z_output = J + z_wind_direction[3-1] + FF;
				}
			}else if(z_trend == 4){//K44x
				if(z_nubes == 1){//K441
					z_output = G + z_wind_direction[3-1] + NN;
				}else if(z_nubes == 2){//K442
					z_output = G + z_wind_direction[3-1] + NN;
				}else if(z_nubes == 3){//K443
					z_output = G + z_wind_direction[3-1] + NN;
				}else if(z_nubes == 4){//K444
					z_output = M + z_wind_direction[3-1] + NN;
				}else if(z_nubes == 5){//K445
					z_output = M + z_wind_direction[3-1] + NN;
				}
			}else if(z_trend == 5){//K45x
				if(z_nubes == 1){//K451
					z_output = G + z_wind_direction[3-1] + SS;
				}else if(z_nubes == 2){//K452
					z_output = M + z_wind_direction[3-1] + SS;
				}else if(z_nubes == 3){//K453
					z_output = M + z_wind_direction[3-1] + SS;
				}else if(z_nubes == 4){//K454
					z_output = M + z_wind_direction[3-1] + SS;
				}else if(z_nubes == 5){//K455
					z_output = M + z_wind_direction[3-1] + SS;
				}
			}//Kin segundo numero
		}else if(z_hpa == 5){//K5xx
			if(z_trend == 1){//K51x Segundo numero, tendencia de la presion
				if(z_nubes == 1){//K511
					z_output = D + z_wind_direction[3-1] + SS;
				}else if(z_nubes == 2){//K512
					z_output = J + z_wind_direction[3-1] + SS;
				}else if(z_nubes == 3){//K513
					z_output = J + z_wind_direction[3-1] + SS;
				}else if(z_nubes == 4){//K514
					z_output = J + z_wind_direction[3-1] + SS;
				}else if(z_nubes == 5){//K515
					z_output = J + z_wind_direction[3-1] + SS;
				}
			}else if(z_trend == 2){//K52x
				if(z_nubes == 1){//K521
					z_output = J + z_wind_direction[3-1] + SS;
				}else if(z_nubes == 2){//K522
					z_output = J + z_wind_direction[3-1] + SS;
				}else if(z_nubes == 3){//K523
					z_output = J + z_wind_direction[3-1] + SS;
				}else if(z_nubes == 4){//K524
					z_output = J + z_wind_direction[3-1] + SS;
				}else if(z_nubes == 5){//K525
					z_output = J + z_wind_direction[3-1] + SS;
				}
			}else if(z_trend == 3){//K53x
				if(z_nubes == 1){//K531
					z_output = J + z_wind_direction[3-1] + SS;
				}else if(z_nubes == 2){//K532
					z_output = J + z_wind_direction[3-1] + SS;
				}else if(z_nubes == 3){//K533
					z_output = J + z_wind_direction[3-1] + SS;
				}else if(z_nubes == 4){//K534
					z_output = J + z_wind_direction[3-1] + SS;
				}else if(z_nubes == 5){//K535
					z_output = M + z_wind_direction[3-1] + SS;
				}
			}else if(z_trend == 4){//K54x
				if(z_nubes == 1){//K541
					z_output = J + z_wind_direction[3-1] + SS;
				}else if(z_nubes == 2){//K542
					z_output = M + z_wind_direction[3-1] + SS;
				}else if(z_nubes == 3){//K543
					z_output = M + z_wind_direction[3-1] + SS;
				}else if(z_nubes == 4){//K544
					z_output = M + z_wind_direction[3-1] + SS;
				}else if(z_nubes == 5){//K545
					z_output = M + z_wind_direction[3-1] + SS;
				}
			}else if(z_trend == 5){//K55x
				if(z_nubes == 1){//K551
					z_output = M + z_wind_direction[3-1] + SS;
				}else if(z_nubes == 2){//K552
					z_output = M + z_wind_direction[3-1] + SS;
				}else if(z_nubes == 3){//K553
					z_output = M + z_wind_direction[3-1] + SS;
				}else if(z_nubes == 4){//K554
					z_output = M + z_wind_direction[3-1] + SS;
				}else if(z_nubes == 5){//K555
					z_output = M + z_wind_direction[3-1] + SS;
				}
			}//Kin segundo numero
		}else if(z_hpa == 6){//K6xx
			if(z_trend == 1){//K61x Segundo numero, tendencia de la presion
				if(z_nubes == 1){//K611
					z_output = L + z_wind_direction[3-1] + SS;
				}else if(z_nubes == 2){//K612
					z_output = L + z_wind_direction[3-1] + SS;
				}else if(z_nubes == 3){//K613
					z_output = L + z_wind_direction[3-1] + SS;
				}else if(z_nubes == 4){//K614
					z_output = L + z_wind_direction[3-1] + SS;
				}else if(z_nubes == 5){//K615
					z_output = L + z_wind_direction[3-1] + SS;
				}
			}else if(z_trend == 2){//K62x
				if(z_nubes == 1){//K621
					z_output = L + z_wind_direction[3-1] + SS;
				}else if(z_nubes == 2){//K622
					z_output = L + z_wind_direction[3-1] + SS;
				}else if(z_nubes == 3){//K623
					z_output = L + z_wind_direction[3-1] + SS;
				}else if(z_nubes == 4){//K624
					z_output = L + z_wind_direction[3-1] + SS;
				}else if(z_nubes == 5){//K625
					z_output = L + z_wind_direction[3-1] + SS;
				}
			}else if(z_trend == 3){//K63x
				if(z_nubes == 1){//K631
					z_output = L + z_wind_direction[3-1] + SS;
				}else if(z_nubes == 2){//K632
					z_output = L + z_wind_direction[3-1] + SS;
				}else if(z_nubes == 3){//K633
					z_output = L + z_wind_direction[3-1] + SS;
				}else if(z_nubes == 4){//K634
					z_output = L + z_wind_direction[3-1] + SS;
				}else if(z_nubes == 5){//K635
					z_output = L + z_wind_direction[3-1] + KK;
				}
			}else if(z_trend == 4){//K64x
				if(z_nubes == 1){//K641
					z_output = L + z_wind_direction[3-1] + GG;
				}else if(z_nubes == 2){//K642
					z_output = P + z_wind_direction[3-1] + GG;
				}else if(z_nubes == 3){//K643
					z_output = P + z_wind_direction[3-1] + GG;
				}else if(z_nubes == 4){//K644
					z_output = P + z_wind_direction[3-1] + GG;
				}else if(z_nubes == 5){//K645
					z_output = P + z_wind_direction[3-1] + GG;
				}
			}else if(z_trend == 5){//K65x
				if(z_nubes == 1){//K651
					z_output = P + z_wind_direction[3-1] + GG;
				}else if(z_nubes == 2){//K652
					z_output = P + z_wind_direction[3-1] + GG;
				}else if(z_nubes == 3){//K653
					z_output = P + z_wind_direction[3-1] + GG;
				}else if(z_nubes == 4){//K654
					z_output = P + z_wind_direction[3-1] + GG;
				}else if(z_nubes == 5){//K655
					z_output = P + z_wind_direction[3-1] + GG;
				}
			}//Kin segundo numero
		}else if(z_hpa == 7){//K7xx
			if(z_trend == 1){//K71x Segundo numero, tendencia de la presion
				if(z_nubes == 1){//K711
					z_output = L + z_wind_direction[4-1] + "early, changing to  " + z_wind_direction[6-1] + GG;
				}else if(z_nubes == 2){//K712
					z_output = L + z_wind_direction[4-1] + "early, changing to  " + z_wind_direction[6-1] + GG;
				}else if(z_nubes == 3){//K713
					z_output = L + z_wind_direction[4-1] + "early, changing to  " + z_wind_direction[6-1] + GG;
				}else if(z_nubes == 4){//K714
					z_output = L + z_wind_direction[4-1] + "early, changing to  " + z_wind_direction[6-1] + GG;
				}else if(z_nubes == 5){//K715
					z_output = L + z_wind_direction[4-1] + "early, changing to  " + z_wind_direction[6-1] + GG;
				}
			}else if(z_trend == 2){//K72x
				if(z_nubes == 1){//K721
					z_output = L + z_wind_direction[4-1] + "early, changing to  " + z_wind_direction[6-1] + GG;
				}else if(z_nubes == 2){//K722
					z_output = L + z_wind_direction[4-1] + "early, changing to  " + z_wind_direction[6-1] + GG;
				}else if(z_nubes == 3){//K723
					z_output = L + z_wind_direction[4-1] + "early, changing to  " + z_wind_direction[6-1] + GG;
				}else if(z_nubes == 4){//K724
					z_output = L + z_wind_direction[4-1] + "early, changing to  " + z_wind_direction[6-1] + GG;
				}else if(z_nubes == 5){//K725
					z_output = L + z_wind_direction[4-1] + "early, changing to  " + z_wind_direction[6-1] + GG;
				}
			}else if(z_trend == 3){//K73x
			if(z_nubes == 1){//K731
					z_output = P + z_wind_direction[4-1] + "early, changing to  " + z_wind_direction[6-1] + GG;
				}else if(z_nubes == 2){//K732
					z_output = P + z_wind_direction[4-1] + "early, changing to  " + z_wind_direction[6-1] + GG;
				}else if(z_nubes == 3){//K733
					z_output = P + z_wind_direction[4-1] + "early, changing to  " + z_wind_direction[6-1] + GG;
				}else if(z_nubes == 4){//K734
					z_output = P + z_wind_direction[4-1] + "early, changing to  " + z_wind_direction[6-1] + GG;
				}else if(z_nubes == 5){//K735
					z_output = P + z_wind_direction[4-1] + "early, changing to  " + z_wind_direction[6-1] + GG;
				}
			}else if(z_trend == 4){//K74x
				if(z_nubes == 1){//K741
					z_output = P + z_wind_direction[4-1] + "early, changing to  " + z_wind_direction[6-1] + WW;
				}else if(z_nubes == 2){//K742
					z_output = P + z_wind_direction[4-1] + "early, changing to  " + z_wind_direction[6-1] + WW;
				}else if(z_nubes == 3){//K743
					z_output = P + z_wind_direction[4-1] + "early, changing to  " + z_wind_direction[6-1] + WW;
				}else if(z_nubes == 4){//K744
					z_output = P + z_wind_direction[4-1] + "early, changing to  " + z_wind_direction[6-1] + WW;
				}else if(z_nubes == 5){//K745
					z_output = P + z_wind_direction[4-1] + "early, changing to  " + z_wind_direction[6-1] + WW;
				}
			}else if(z_trend == 5){//K75x
				if(z_nubes == 1){//K751
					z_output = P + z_wind_direction[4-1] + "early, changing to  " + z_wind_direction[5-1] + WW;
				}else if(z_nubes == 2){//K752
					z_output = P + z_wind_direction[4-1] + "early, changing to  " + z_wind_direction[5-1] + WW;
				}else if(z_nubes == 3){//K753
					z_output = P + z_wind_direction[4-1] + "early, changing to  " + z_wind_direction[5-1] + WW;
				}else if(z_nubes == 4){//K754
					z_output = P + z_wind_direction[4-1] + "early, changing to  " + z_wind_direction[5-1] + WW;
				}else if(z_nubes == 5){//K755
					z_output = P + z_wind_direction[4-1] + "early, changing to  " + z_wind_direction[5-1] + WW;
				}
			}//Kin segundo numero
		}else if (z_hpa == 8) {//K8xx
			if(z_trend == 1){//K81x Segundo numero, tendencia de la presion
				if(z_nubes == 1){//K811
					z_output = L + z_wind_direction[4-1] + "early, changing to  " + z_wind_direction[6-1] + WW;
				}else if(z_nubes == 2){//K812
					z_output = L + z_wind_direction[4-1] + "early, changing to  " + z_wind_direction[6-1] + WW;
				}else if(z_nubes == 3){//K813
					z_output = L + z_wind_direction[4-1] + "early, changing to  " + z_wind_direction[6-1] + WW;
				}else if(z_nubes == 4){//K814
					z_output = L + z_wind_direction[4-1] + "early, changing to  " + z_wind_direction[6-1] + WW;
				}else if(z_nubes == 5){//K815
					z_output = L + z_wind_direction[4-1] + "early, changing to  " + z_wind_direction[6-1] + WW;
				}
			}else if(z_trend == 2){//K82x
				if(z_nubes == 1){//K821
					z_output = P + z_wind_direction[4-1] + "early, changing to  " + z_wind_direction[6-1] + WW;
				}else if(z_nubes == 2){//K822
					z_output = P + z_wind_direction[4-1] + "early, changing to  " + z_wind_direction[6-1] + WW;
				}else if(z_nubes == 3){//K823
					z_output = P + z_wind_direction[4-1] + "early, changing to  " + z_wind_direction[6-1] + WW;
				}else if(z_nubes == 4){//K824
					z_output = P + z_wind_direction[4-1] + "early, changing to  " + z_wind_direction[6-1] + WW;
				}else if(z_nubes == 5){//K825
					z_output = P + z_wind_direction[4-1] + "early, changing to  " + z_wind_direction[6-1] + WW;
				}
			}else if(z_trend == 3){//K83x
				if(z_nubes == 1){//K831
					z_output = P + z_wind_direction[4-1] + "early, changing to  " + z_wind_direction[6-1] + WW;
				}else if(z_nubes == 2){//K832
					z_output = P + z_wind_direction[4-1] + "early, changing to  " + z_wind_direction[6-1] + WW;
				}else if(z_nubes == 3){//K833
					z_output = P + z_wind_direction[4-1] + "early, changing to  " + z_wind_direction[6-1] + WW;
				}else if(z_nubes == 4){//K834
					z_output = P + z_wind_direction[4-1] + "early, changing to  " + z_wind_direction[6-1] + WW;
				}else if(z_nubes == 5){//K835
					z_output = P + z_wind_direction[4-1] + "early, changing to  " + z_wind_direction[6-1] + WW;
				}
			}else if(z_trend == 4){//K84x
				if(z_nubes == 1){//K841
					z_output = P + z_wind_direction[4-1] + "early, changing to  " + z_wind_direction[6-1] + WW;
				}else if(z_nubes == 2){//K842
					z_output = P + z_wind_direction[4-1] + "early, changing to  " + z_wind_direction[6-1] + WW;
				}else if(z_nubes == 3){//K843
					z_output = P + z_wind_direction[4-1] + "early, changing to  " + z_wind_direction[6-1] + WW;
				}else if(z_nubes == 4){//K844
					z_output = P + z_wind_direction[4-1] + "early, changing to  " + z_wind_direction[6-1] + WW;
				}else if(z_nubes == 5){//K845
					z_output = P + z_wind_direction[4-1] + "early, changing to  " + z_wind_direction[6-1] + WW;
				}
			}else if(z_trend == 5){//K85x
				if(z_nubes == 1){//K851
					z_output = P + z_wind_direction[4-1] + "early, changing to  " + z_wind_direction[6-1] + HH;
				}else if(z_nubes == 2){//K852
					z_output = P + z_wind_direction[4-1] + "early, changing to  " + z_wind_direction[6-1] + HH;
				}else if(z_nubes == 3){//K853
					z_output = P + z_wind_direction[4-1] + "early, changing to  " + z_wind_direction[6-1] + HH;
				}else if(z_nubes == 4){//K854
					z_output = P + z_wind_direction[4-1] + "early, changing to  " + z_wind_direction[6-1] + HH;
				}else if(z_nubes == 5){//K855
					z_output = P + z_wind_direction[4-1] + "early, changing to  " + z_wind_direction[6-1] + HH;
				}
			}//Kin segundo numero
		}//Kin primer numero
			
	}//Kin letra K
	
	/////////////////////////////////////////////////////////////////
	
	//LETRA L
	
		
	if(z_output == "L"){
		if(z_hpa == 1){//L1xx Primer numero, presion atmosferica
			if(z_trend == 1){//L11x Segundo numero, tendencia de la presion
				if(z_nubes == 1){//L111
					z_output = A + z_wind_direction[3-1] + UU;
				}else if(z_nubes == 2){//L112
					z_output = A + z_wind_direction[3-1] + UU;
				}else if(z_nubes == 3){//L113
					z_output = A + z_wind_direction[3-1] + UU;
				}else if(z_nubes == 4){//L114
					z_output = D + z_wind_direction[3-1] + UU;
				}else if(z_nubes == 5){//L115
					z_output = J + z_wind_direction[3-1] + UU;
				}
			}else if(z_trend == 2){//L12x
				if(z_nubes == 1){//L121
					z_output = A + z_wind_direction[4-1] + UU;
				}else if(z_nubes == 2){//L122
					z_output = A + z_wind_direction[4-1] + UU;
				}else if(z_nubes == 3){//L123
					z_output = A + z_wind_direction[4-1] + UU;
				}else if(z_nubes == 4){//L124
					z_output = D + z_wind_direction[4-1] + UU;
				}else if(z_nubes == 5){//L125
					z_output = J + z_wind_direction[4-1] + UU;
				}
			}else if(z_trend == 3){//L13x
				if(z_nubes == 1){//L131
					z_output = B + z_wind_direction[4-1] + UU;
				}else if(z_nubes == 2){//L132
					z_output = B + z_wind_direction[4-1] + UU;
				}else if(z_nubes == 3){//L133
					z_output = E + z_wind_direction[4-1] + UU;
				}else if(z_nubes == 4){//L134
					z_output = H + z_wind_direction[4-1] + UU;
				}else if(z_nubes == 5){//L135
					z_output = L + z_wind_direction[4-1] + UU;
				}
			}else if(z_trend == 4){//14x
				if(z_nubes == 1){//141
					z_output = E + z_wind_direction[4-1] + NN;
				}else if(z_nubes == 2){//L142
					z_output = H + z_wind_direction[4-1] + NN;
				}else if(z_nubes == 3){//L143
					z_output = H + z_wind_direction[4-1] + NN;
				}else if(z_nubes == 4){//L144
					z_output = H + z_wind_direction[4-1] + NN;
				}else if(z_nubes == 5){//L145
					z_output = N + z_wind_direction[4-1] + NN;
				}
			}else if(z_trend == 5){//15x
				if(z_nubes == 1){//151
					z_output = H + z_wind_direction[4-1] + NN;
				}else if(z_nubes == 2){//L152
					z_output = H + z_wind_direction[4-1] + NN;
				}else if(z_nubes == 3){//L153
					z_output = H + z_wind_direction[4-1] + NN;
				}else if(z_nubes == 4){//L154
					z_output = H + z_wind_direction[4-1] + NN;
				}else if(z_nubes == 5){//L155
					z_output = N + z_wind_direction[4-1] + NN;
				}
		
				
			}//Lin segundo numero
		}else if(z_hpa == 2){//L2xx
			if(z_trend == 1){//L21x Segundo numero, tendencia de la presion
				if(z_nubes == 1){//L211
					z_output = A + z_wind_direction[3-1] + UU;
				}else if(z_nubes == 2){//L212
					z_output = A + z_wind_direction[3-1] + UU;
				}else if(z_nubes == 3){//L213
					z_output = A + z_wind_direction[3-1] + UU;
				}else if(z_nubes == 4){//L214
					z_output = D + z_wind_direction[3-1] + UU;
				}else if(z_nubes == 5){//L215
					z_output = J + z_wind_direction[3-1] + UU;
				}
			}else if(z_trend == 2){//L22x
				if(z_nubes == 1){//L221
					z_output = A + z_wind_direction[4-1] + UU;
				}else if(z_nubes == 2){//L222
					z_output = A + z_wind_direction[4-1] + UU;
				}else if(z_nubes == 3){//L223
					z_output = A + z_wind_direction[4-1] + UU;
				}else if(z_nubes == 4){//L224
					z_output = D + z_wind_direction[4-1] + UU;
				}else if(z_nubes == 5){//L225
					z_output = J + z_wind_direction[4-1] + UU;
				}
			}else if(z_trend == 3){//L23x
				if(z_nubes == 1){//L231
					z_output = A + z_wind_direction[4-1] + UU;
				}else if(z_nubes == 2){//L232
					z_output = A + z_wind_direction[4-1] + UU;
				}else if(z_nubes == 3){//L233
					z_output = D + z_wind_direction[4-1] + UU;
				}else if(z_nubes == 4){//L234
					z_output = G + z_wind_direction[4-1] + UU;
				}else if(z_nubes == 5){//L235
					z_output = J + z_wind_direction[4-1] + UU;
				}
			}else if(z_trend == 4){//L24x
				if(z_nubes == 1){//L241
					z_output = H + z_wind_direction[4-1] + NN;
				}else if(z_nubes == 2){//L242
					z_output = H + z_wind_direction[4-1] + NN;
				}else if(z_nubes == 3){//L243
					z_output = H + z_wind_direction[4-1] + NN;
				}else if(z_nubes == 4){//L244
					z_output = H + z_wind_direction[4-1] + NN;
				}else if(z_nubes == 5){//L245
					z_output = N + z_wind_direction[4-1] + NN;
				}
			}else if(z_trend == 5){//L25x
				if(z_nubes == 1){//L251
					z_output = H + z_wind_direction[4-1] + NN;
				}else if(z_nubes == 2){//L252
					z_output = H + z_wind_direction[4-1] + NN;
				}else if(z_nubes == 3){//L253
					z_output = H + z_wind_direction[4-1] + NN;
				}else if(z_nubes == 4){//L254
					z_output = H + z_wind_direction[4-1] + NN;
				}else if(z_nubes == 5){//L255
					z_output = N + z_wind_direction[4-1] + NN;
				}
			}//Lin segundo numero
			
		}else if(z_hpa == 3){//L3xx
			if(z_trend == 1){//L31x Segundo numero, tendencia de la presion
				if(z_nubes == 1){//L311
					z_output = A + z_wind_direction[3-1] + UU;
				}else if(z_nubes == 2){//L312
					z_output = A + z_wind_direction[3-1] + UU;
				}else if(z_nubes == 3){//L313
					z_output = A + z_wind_direction[3-1] + UU;
				}else if(z_nubes == 4){//L314
					z_output = D + z_wind_direction[3-1] + UU;
				}else if(z_nubes == 5){//L315
					z_output = J + z_wind_direction[3-1] + UU;
				}
			}else if(z_trend == 2){//L32x
				if(z_nubes == 1){//L321
					z_output = A + z_wind_direction[4-1] + UU;
				}else if(z_nubes == 2){//L322
					z_output = A + z_wind_direction[4-1] + UU;
				}else if(z_nubes == 3){//L323
					z_output = A + z_wind_direction[4-1] + UU;
				}else if(z_nubes == 4){//L324
					z_output = D + z_wind_direction[4-1] + UU;
				}else if(z_nubes == 5){//L325
					z_output = J + z_wind_direction[4-1] + UU;
				}
			}else if(z_trend == 3){//L33x
				if(z_nubes == 1){//L331
					z_output = A + z_wind_direction[4-1] + UU;
				}else if(z_nubes == 2){//L332
					z_output = A + z_wind_direction[4-1] + UU;
				}else if(z_nubes == 3){//L333
					z_output = D + z_wind_direction[4-1] + UU;
				}else if(z_nubes == 4){//L334
					z_output = G + z_wind_direction[4-1] + UU;
				}else if(z_nubes == 5){//L335
					z_output = J + z_wind_direction[4-1] + UU;
				}
			}else if(z_trend == 4){//L34x
				if(z_nubes == 1){//L341
					z_output = H + z_wind_direction[4-1] + NN;
				}else if(z_nubes == 2){//L342
					z_output = H + z_wind_direction[4-1] + NN;
				}else if(z_nubes == 3){//L343
					z_output = H + z_wind_direction[4-1] + NN;
				}else if(z_nubes == 4){//L344
					z_output = H + z_wind_direction[4-1] + NN;
				}else if(z_nubes == 5){//L345
					z_output = N + z_wind_direction[4-1] + NN;
				}
			}else if(z_trend == 5){//L35x
				if(z_nubes == 1){//L351
					z_output = G + z_wind_direction[4-1] + NN;
				}else if(z_nubes == 2){//L352
					z_output = G + z_wind_direction[4-1] + NN;
				}else if(z_nubes == 3){//L353
					z_output = G + z_wind_direction[4-1] + NN;
				}else if(z_nubes == 4){//L354
					z_output = G + z_wind_direction[4-1] + NN;
				}else if(z_nubes == 5){//L355
					z_output = M + z_wind_direction[4-1] + NN;
				}
			}//Lin segundo numero
		}else if(z_hpa == 4){//L4xx
			if(z_trend == 1){//L41x Segundo numero, tendencia de la presion
				if(z_nubes == 1){//L411
					z_output = A + z_wind_direction[3-1] + FF;
				}else if(z_nubes == 2){//L412
					z_output = A + z_wind_direction[3-1] + FF;
				}else if(z_nubes == 3){//L413
					z_output = A + z_wind_direction[3-1] + FF;
				}else if(z_nubes == 4){//L414
					z_output = D + z_wind_direction[3-1] + FF;
				}else if(z_nubes == 5){//L415
					z_output = J + z_wind_direction[3-1] + FF;
				}
			}else if(z_trend == 2){//L42x
				if(z_nubes == 1){//L421
					z_output = A + z_wind_direction[4-1] + FF;
				}else if(z_nubes == 2){//L422
					z_output = A + z_wind_direction[4-1] + FF;
				}else if(z_nubes == 3){//L423
					z_output = D + z_wind_direction[4-1] + FF;
				}else if(z_nubes == 4){//L424
					z_output = G + z_wind_direction[4-1] + FF;
				}else if(z_nubes == 5){//L425
					z_output = J + z_wind_direction[4-1] + FF;
				}
			}else if(z_trend == 3){//L43x
				if(z_nubes == 1){//L431
					z_output = A + z_wind_direction[4-1] + FF;
				}else if(z_nubes == 2){//L432
					z_output = A + z_wind_direction[4-1] + FF;
				}else if(z_nubes == 3){//L433
					z_output = G + z_wind_direction[4-1] + FF;
				}else if(z_nubes == 4){//L434
					z_output = G + z_wind_direction[4-1] + FF;
				}else if(z_nubes == 5){//L435
					z_output = J + z_wind_direction[4-1] + FF;
				}
			}else if(z_trend == 4){//L44x
				if(z_nubes == 1){//L441
					z_output = G + z_wind_direction[4-1] + NN;
				}else if(z_nubes == 2){//L442
					z_output = G + z_wind_direction[4-1] + NN;
				}else if(z_nubes == 3){//L443
					z_output = G + z_wind_direction[4-1] + NN;
				}else if(z_nubes == 4){//L444
					z_output = M + z_wind_direction[4-1] + NN;
				}else if(z_nubes == 5){//L445
					z_output = M + z_wind_direction[4-1] + NN;
				}
			}else if(z_trend == 5){//L45x
				if(z_nubes == 1){//L451
					z_output = G + z_wind_direction[4-1] + SS;
				}else if(z_nubes == 2){//L452
					z_output = M + z_wind_direction[4-1] + SS;
				}else if(z_nubes == 3){//L453
					z_output = M + z_wind_direction[4-1] + SS;
				}else if(z_nubes == 4){//L454
					z_output = M + z_wind_direction[4-1] + SS;
				}else if(z_nubes == 5){//L455
					z_output = M + z_wind_direction[4-1] + SS;
				}
			}//Lin segundo numero
		}else if(z_hpa == 5){//L5xx
			if(z_trend == 1){//L51x Segundo numero, tendencia de la presion
				if(z_nubes == 1){//L511
					z_output = D + z_wind_direction[3-1] + SS;
				}else if(z_nubes == 2){//L512
					z_output = J + z_wind_direction[3-1] + SS;
				}else if(z_nubes == 3){//L513
					z_output = J + z_wind_direction[3-1] + SS;
				}else if(z_nubes == 4){//L514
					z_output = J + z_wind_direction[3-1] + SS;
				}else if(z_nubes == 5){//L515
					z_output = J + z_wind_direction[3-1] + SS;
				}
			}else if(z_trend == 2){//L52x
				if(z_nubes == 1){//L521
					z_output = J + z_wind_direction[4-1] + SS;
				}else if(z_nubes == 2){//L522
					z_output = J + z_wind_direction[4-1] + SS;
				}else if(z_nubes == 3){//L523
					z_output = J + z_wind_direction[4-1] + SS;
				}else if(z_nubes == 4){//L524
					z_output = J + z_wind_direction[4-1] + SS;
				}else if(z_nubes == 5){//L525
					z_output = J + z_wind_direction[4-1] + SS;
				}
			}else if(z_trend == 3){//L53x
				if(z_nubes == 1){//L531
					z_output = J + z_wind_direction[4-1] + SS;
				}else if(z_nubes == 2){//L532
					z_output = J + z_wind_direction[4-1] + SS;
				}else if(z_nubes == 3){//L533
					z_output = J + z_wind_direction[4-1] + SS;
				}else if(z_nubes == 4){//L534
					z_output = J + z_wind_direction[4-1] + SS;
				}else if(z_nubes == 5){//L535
					z_output = M + z_wind_direction[4-1] + SS;
				}
			}else if(z_trend == 4){//L54x
				if(z_nubes == 1){//L541
					z_output = J + z_wind_direction[4-1] + SS;
				}else if(z_nubes == 2){//L542
					z_output = M + z_wind_direction[4-1] + SS;
				}else if(z_nubes == 3){//L543
					z_output = M + z_wind_direction[4-1] + SS;
				}else if(z_nubes == 4){//L544
					z_output = M + z_wind_direction[4-1] + SS;
				}else if(z_nubes == 5){//L545
					z_output = M + z_wind_direction[4-1] + SS;
				}
			}else if(z_trend == 5){//L55x
				if(z_nubes == 1){//L551
					z_output = M + z_wind_direction[4-1] + SS;
				}else if(z_nubes == 2){//L552
					z_output = M + z_wind_direction[4-1] + SS;
				}else if(z_nubes == 3){//L553
					z_output = M + z_wind_direction[4-1] + SS;
				}else if(z_nubes == 4){//L554
					z_output = M + z_wind_direction[4-1] + SS;
				}else if(z_nubes == 5){//L555
					z_output = M + z_wind_direction[4-1] + SS;
				}
			}//Lin segundo numero
		}else if(z_hpa == 6){//L6xx
			if(z_trend == 1){//L61x Segundo numero, tendencia de la presion
				if(z_nubes == 1){//L611
					z_output = L + z_wind_direction[4-1] + "early, changing to  " + z_wind_direction[5-1] + SS;
				}else if(z_nubes == 2){//L612
					z_output = L + z_wind_direction[4-1] + "early, changing to  " + z_wind_direction[5-1] + SS;
				}else if(z_nubes == 3){//L613
					z_output = L + z_wind_direction[4-1] + "early, changing to  " + z_wind_direction[5-1] + SS;
				}else if(z_nubes == 4){//L614
					z_output = L + z_wind_direction[4-1] + "early, changing to  " + z_wind_direction[5-1] + SS;
				}else if(z_nubes == 5){//L615
					z_output = L + z_wind_direction[4-1] + "early, changing to  " + z_wind_direction[5-1] + SS;
				}
			}else if(z_trend == 2){//L62x
				if(z_nubes == 1){//L621
					z_output = L + z_wind_direction[4-1] + "early, changing to  " + z_wind_direction[5-1] + SS;
				}else if(z_nubes == 2){//L622
					z_output = L + z_wind_direction[4-1] + "early, changing to  " + z_wind_direction[5-1] + SS;
				}else if(z_nubes == 3){//L623
					z_output = L + z_wind_direction[4-1] + "early, changing to  " + z_wind_direction[5-1] + SS;
				}else if(z_nubes == 4){//L624
					z_output = L + z_wind_direction[4-1] + "early, changing to  " + z_wind_direction[5-1] + SS;
				}else if(z_nubes == 5){//L625
					z_output = L + z_wind_direction[4-1] + "early, changing to  " + z_wind_direction[5-1] + SS;
				}
			}else if(z_trend == 3){//L63x
				if(z_nubes == 1){//L631
					z_output = L + z_wind_direction[4-1] + "early, changing to  " + z_wind_direction[5-1] + SS;
				}else if(z_nubes == 2){//L632
					z_output = L + z_wind_direction[4-1] + "early, changing to  " + z_wind_direction[5-1] + SS;
				}else if(z_nubes == 3){//L633
					z_output = L + z_wind_direction[4-1] + "early, changing to  " + z_wind_direction[5-1] + SS;
				}else if(z_nubes == 4){//L634
					z_output = L + z_wind_direction[4-1] + "early, changing to  " + z_wind_direction[5-1] + SS;
				}else if(z_nubes == 5){//L635
					z_output = L + z_wind_direction[4-1] + "early, changing to  " + z_wind_direction[5-1] + SS;
				}
			}else if(z_trend == 4){//L64x
				if(z_nubes == 1){//L641
					z_output = L + z_wind_direction[4-1] + "early, changing to  " + z_wind_direction[5-1] + GG;
				}else if(z_nubes == 2){//L642
					z_output = P + z_wind_direction[4-1] + "early, changing to  " + z_wind_direction[5-1] + GG;
				}else if(z_nubes == 3){//L643
					z_output = P + z_wind_direction[4-1] + "early, changing to  " + z_wind_direction[5-1] + GG;
				}else if(z_nubes == 4){//L644
					z_output = P + z_wind_direction[4-1] + "early, changing to  " + z_wind_direction[5-1] + GG;
				}else if(z_nubes == 5){//L645
					z_output = P + z_wind_direction[4-1] + "early, changing to  " + z_wind_direction[5-1] + GG;
				}
			}else if(z_trend == 5){//L65x
				if(z_nubes == 1){//L651
					z_output = P + z_wind_direction[4-1] + "early, changing to  " + z_wind_direction[5-1] + GG;
				}else if(z_nubes == 2){//L652
					z_output = P + z_wind_direction[4-1] + "early, changing to  " + z_wind_direction[5-1] + GG;
				}else if(z_nubes == 3){//L653
					z_output = P + z_wind_direction[4-1] + "early, changing to  " + z_wind_direction[5-1] + GG;
				}else if(z_nubes == 4){//L654
					z_output = P + z_wind_direction[4-1] + "early, changing to  " + z_wind_direction[5-1] + GG;
				}else if(z_nubes == 5){//L655
					z_output = P + z_wind_direction[4-1] + "early, changing to  " + z_wind_direction[5-1] + GG;
				}
			}//Lin segundo numero
		}else if(z_hpa == 7){//L7xx
			if(z_trend == 1){//L71x Segundo numero, tendencia de la presion
				if(z_nubes == 1){//L711
					z_output = L + z_wind_direction[4-1] + "early, changing to  " + z_wind_direction[6-1] + GG;
				}else if(z_nubes == 2){//L712
					z_output = L + z_wind_direction[4-1] + "early, changing to  " + z_wind_direction[6-1] + GG;
				}else if(z_nubes == 3){//L713
					z_output = L + z_wind_direction[4-1] + "early, changing to  " + z_wind_direction[6-1] + GG;
				}else if(z_nubes == 4){//L714
					z_output = L + z_wind_direction[4-1] + "early, changing to  " + z_wind_direction[6-1] + GG;
				}else if(z_nubes == 5){//L715
					z_output = L + z_wind_direction[4-1] + "early, changing to  " + z_wind_direction[6-1] + GG;
				}
			}else if(z_trend == 2){//L72x
				if(z_nubes == 1){//L721
					z_output = L + z_wind_direction[4-1] + "early, changing to  " + z_wind_direction[6-1] + GG;
				}else if(z_nubes == 2){//L722
					z_output = L + z_wind_direction[4-1] + "early, changing to  " + z_wind_direction[6-1] + GG;
				}else if(z_nubes == 3){//L723
					z_output = L + z_wind_direction[4-1] + "early, changing to  " + z_wind_direction[6-1] + GG;
				}else if(z_nubes == 4){//L724
					z_output = L + z_wind_direction[4-1] + "early, changing to  " + z_wind_direction[6-1] + GG;
				}else if(z_nubes == 5){//L725
					z_output = L + z_wind_direction[4-1] + "early, changing to  " + z_wind_direction[6-1] + GG;
				}
			}else if(z_trend == 3){//L73x
			if(z_nubes == 1){//L731
					z_output = P + z_wind_direction[4-1] + "early, changing to  " + z_wind_direction[6-1] + GG;
				}else if(z_nubes == 2){//L732
					z_output = P + z_wind_direction[4-1] + "early, changing to  " + z_wind_direction[6-1] + GG;
				}else if(z_nubes == 3){//L733
					z_output = P + z_wind_direction[4-1] + "early, changing to  " + z_wind_direction[6-1] + GG;
				}else if(z_nubes == 4){//L734
					z_output = P + z_wind_direction[4-1] + "early, changing to  " + z_wind_direction[6-1] + GG;
				}else if(z_nubes == 5){//L735
					z_output = P + z_wind_direction[4-1] + "early, changing to  " + z_wind_direction[6-1] + GG;
				}
			}else if(z_trend == 4){//L74x
				if(z_nubes == 1){//L741
					z_output = P + z_wind_direction[4-1] + "early, changing to  " + z_wind_direction[6-1] + WW;
				}else if(z_nubes == 2){//L742
					z_output = P + z_wind_direction[4-1] + "early, changing to  " + z_wind_direction[6-1] + WW;
				}else if(z_nubes == 3){//L743
					z_output = P + z_wind_direction[4-1] + "early, changing to  " + z_wind_direction[6-1] + WW;
				}else if(z_nubes == 4){//L744
					z_output = P + z_wind_direction[4-1] + "early, changing to  " + z_wind_direction[6-1] + WW;
				}else if(z_nubes == 5){//L745
					z_output = P + z_wind_direction[4-1] + "early, changing to  " + z_wind_direction[6-1] + WW;
				}
			}else if(z_trend == 5){//L75x
				if(z_nubes == 1){//L751
					z_output = P + z_wind_direction[4-1] + "early, changing to  " + z_wind_direction[5-1] + WW;
				}else if(z_nubes == 2){//L752
					z_output = P + z_wind_direction[4-1] + "early, changing to  " + z_wind_direction[5-1] + WW;
				}else if(z_nubes == 3){//L753
					z_output = P + z_wind_direction[4-1] + "early, changing to  " + z_wind_direction[5-1] + WW;
				}else if(z_nubes == 4){//L754
					z_output = P + z_wind_direction[4-1] + "early, changing to  " + z_wind_direction[5-1] + WW;
				}else if(z_nubes == 5){//L755
					z_output = P + z_wind_direction[4-1] + "early, changing to  " + z_wind_direction[5-1] + WW;
				}
			}//Lin segundo numero
		}else if (z_hpa == 8) {//L8xx
			if(z_trend == 1){//L81x Segundo numero, tendencia de la presion
				if(z_nubes == 1){//L811
					z_output = L + z_wind_direction[4-1] + "early, changing to  " + z_wind_direction[6-1] + WW;
				}else if(z_nubes == 2){//L812
					z_output = L + z_wind_direction[4-1] + "early, changing to  " + z_wind_direction[6-1] + WW;
				}else if(z_nubes == 3){//L813
					z_output = L + z_wind_direction[4-1] + "early, changing to  " + z_wind_direction[6-1] + WW;
				}else if(z_nubes == 4){//L814
					z_output = L + z_wind_direction[4-1] + "early, changing to  " + z_wind_direction[6-1] + WW;
				}else if(z_nubes == 5){//L815
					z_output = L + z_wind_direction[4-1] + "early, changing to  " + z_wind_direction[6-1] + WW;
				}
			}else if(z_trend == 2){//L82x
				if(z_nubes == 1){//L821
					z_output = P + z_wind_direction[4-1] + "early, changing to  " + z_wind_direction[6-1] + WW;
				}else if(z_nubes == 2){//L822
					z_output = P + z_wind_direction[4-1] + "early, changing to  " + z_wind_direction[6-1] + WW;
				}else if(z_nubes == 3){//L823
					z_output = P + z_wind_direction[4-1] + "early, changing to  " + z_wind_direction[6-1] + WW;
				}else if(z_nubes == 4){//L824
					z_output = P + z_wind_direction[4-1] + "early, changing to  " + z_wind_direction[6-1] + WW;
				}else if(z_nubes == 5){//L825
					z_output = P + z_wind_direction[4-1] + "early, changing to  " + z_wind_direction[6-1] + WW;
				}
			}else if(z_trend == 3){//L83x
				if(z_nubes == 1){//L831
					z_output = P + z_wind_direction[4-1] + "early, changing to  " + z_wind_direction[6-1] + WW;
				}else if(z_nubes == 2){//L832
					z_output = P + z_wind_direction[4-1] + "early, changing to  " + z_wind_direction[6-1] + WW;
				}else if(z_nubes == 3){//L833
					z_output = P + z_wind_direction[4-1] + "early, changing to  " + z_wind_direction[6-1] + WW;
				}else if(z_nubes == 4){//L834
					z_output = P + z_wind_direction[4-1] + "early, changing to  " + z_wind_direction[6-1] + WW;
				}else if(z_nubes == 5){//L835
					z_output = P + z_wind_direction[4-1] + "early, changing to  " + z_wind_direction[6-1] + WW;
				}
			}else if(z_trend == 4){//L84x
				if(z_nubes == 1){//L841
					z_output = P + z_wind_direction[4-1] + "early, changing to  " + z_wind_direction[6-1] + WW;
				}else if(z_nubes == 2){//L842
					z_output = P + z_wind_direction[4-1] + "early, changing to  " + z_wind_direction[6-1] + WW;
				}else if(z_nubes == 3){//L843
					z_output = P + z_wind_direction[4-1] + "early, changing to  " + z_wind_direction[6-1] + WW;
				}else if(z_nubes == 4){//L844
					z_output = P + z_wind_direction[4-1] + "early, changing to  " + z_wind_direction[6-1] + WW;
				}else if(z_nubes == 5){//L845
					z_output = P + z_wind_direction[4-1] + "early, changing to  " + z_wind_direction[6-1] + WW;
				}
			}else if(z_trend == 5){//L85x
				if(z_nubes == 1){//L851
					z_output = P + z_wind_direction[4-1] + "early, changing to  " + z_wind_direction[6-1] + HH;
				}else if(z_nubes == 2){//L852
					z_output = P + z_wind_direction[4-1] + "early, changing to  " + z_wind_direction[6-1] + HH;
				}else if(z_nubes == 3){//L853
					z_output = P + z_wind_direction[4-1] + "early, changing to  " + z_wind_direction[6-1] + HH;
				}else if(z_nubes == 4){//L854
					z_output = P + z_wind_direction[4-1] + "early, changing to  " + z_wind_direction[6-1] + HH;
				}else if(z_nubes == 5){//L855
					z_output = P + z_wind_direction[4-1] + "early, changing to  " + z_wind_direction[6-1] + HH;
				}
			}//Lin segundo numero
		}//Lin primer numero
			
	}//Lin letra L
	
	/////////////////////////////////////////////////////////////////
	
	
	//METRA M
	
		
	if(z_output == "M"){
		if(z_hpa == 1){//M1xx Primer numero, presion atmosferica
			if(z_trend == 1){//M11x Segundo numero, tendencia de la presion
				if(z_nubes == 1){//M111
					z_output = A + z_wind_direction[4-1] + UU;
				}else if(z_nubes == 2){//M112
					z_output = A + z_wind_direction[4-1] + UU;
				}else if(z_nubes == 3){//M113
					z_output = A + z_wind_direction[4-1] + UU;
				}else if(z_nubes == 4){//M114
					z_output = D + z_wind_direction[4-1] + UU;
				}else if(z_nubes == 5){//M115
					z_output = J + z_wind_direction[4-1] + UU;
				}
			}else if(z_trend == 2){//M12x
				if(z_nubes == 1){//M121
					z_output = A + z_wind_direction[4-1] + UU;
				}else if(z_nubes == 2){//M122
					z_output = A + z_wind_direction[4-1] + UU;
				}else if(z_nubes == 3){//M123
					z_output = A + z_wind_direction[4-1] + UU;
				}else if(z_nubes == 4){//M124
					z_output = D + z_wind_direction[4-1] + UU;
				}else if(z_nubes == 5){//M125
					z_output = J + z_wind_direction[4-1] + UU;
				}
			}else if(z_trend == 3){//M13x
				if(z_nubes == 1){//M131
					z_output = B + z_wind_direction[4-1] + UU;
				}else if(z_nubes == 2){//M132
					z_output = B + z_wind_direction[4-1] + UU;
				}else if(z_nubes == 3){//M133
					z_output = E + z_wind_direction[4-1] + UU;
				}else if(z_nubes == 4){//M134
					z_output = H + z_wind_direction[4-1] + UU;
				}else if(z_nubes == 5){//M135
					z_output = K + z_wind_direction[4-1] + UU;
				}
			}else if(z_trend == 4){//14x
				if(z_nubes == 1){//141
					z_output = E + z_wind_direction[4-1] + NN;
				}else if(z_nubes == 2){//M142
					z_output = H + z_wind_direction[4-1] + NN;
				}else if(z_nubes == 3){//M143
					z_output = H + z_wind_direction[4-1] + NN;
				}else if(z_nubes == 4){//M144
					z_output = H + z_wind_direction[4-1] + NN;
				}else if(z_nubes == 5){//M145
					z_output = N + z_wind_direction[4-1] + NN;
				}
			}else if(z_trend == 5){//15x
				if(z_nubes == 1){//151
					z_output = H + z_wind_direction[4-1] + NN;
				}else if(z_nubes == 2){//M152
					z_output = H + z_wind_direction[4-1] + NN;
				}else if(z_nubes == 3){//M153
					z_output = H + z_wind_direction[4-1] + NN;
				}else if(z_nubes == 4){//M154
					z_output = H + z_wind_direction[4-1] + NN;
				}else if(z_nubes == 5){//M155
					z_output = N + z_wind_direction[4-1] + NN;
				}
		
				
			}//Min segundo numero
		}else if(z_hpa == 2){//M2xx
			if(z_trend == 1){//M21x Segundo numero, tendencia de la presion
				if(z_nubes == 1){//M211
					z_output = A + z_wind_direction[4-1] + UU;
				}else if(z_nubes == 2){//M212
					z_output = A + z_wind_direction[4-1] + UU;
				}else if(z_nubes == 3){//M213
					z_output = A + z_wind_direction[4-1] + UU;
				}else if(z_nubes == 4){//M214
					z_output = D + z_wind_direction[4-1] + UU;
				}else if(z_nubes == 5){//M215
					z_output = J + z_wind_direction[4-1] + UU;
				}
			}else if(z_trend == 2){//M22x
				if(z_nubes == 1){//M221
					z_output = A + z_wind_direction[4-1] + UU;
				}else if(z_nubes == 2){//M222
					z_output = A + z_wind_direction[4-1] + UU;
				}else if(z_nubes == 3){//M223
					z_output = A + z_wind_direction[4-1] + UU;
				}else if(z_nubes == 4){//M224
					z_output = D + z_wind_direction[4-1] + UU;
				}else if(z_nubes == 5){//M225
					z_output = J + z_wind_direction[4-1] + UU;
				}
			}else if(z_trend == 3){//M23x
				if(z_nubes == 1){//M231
					z_output = A + z_wind_direction[4-1] + UU;
				}else if(z_nubes == 2){//M232
					z_output = A + z_wind_direction[4-1] + UU;
				}else if(z_nubes == 3){//M233
					z_output = D + z_wind_direction[4-1] + UU;
				}else if(z_nubes == 4){//M234
					z_output = G + z_wind_direction[4-1] + UU;
				}else if(z_nubes == 5){//M235
					z_output = J + z_wind_direction[4-1] + UU;
				}
			}else if(z_trend == 4){//M24x
				if(z_nubes == 1){//M241
					z_output = H + z_wind_direction[4-1] + NN;
				}else if(z_nubes == 2){//M242
					z_output = H + z_wind_direction[4-1] + NN;
				}else if(z_nubes == 3){//M243
					z_output = H + z_wind_direction[4-1] + NN;
				}else if(z_nubes == 4){//M244
					z_output = H + z_wind_direction[4-1] + NN;
				}else if(z_nubes == 5){//M245
					z_output = N + z_wind_direction[4-1] + NN;
				}
			}else if(z_trend == 5){//M25x
				if(z_nubes == 1){//M251
					z_output = H + z_wind_direction[4-1] + NN;
				}else if(z_nubes == 2){//M252
					z_output = H + z_wind_direction[4-1] + NN;
				}else if(z_nubes == 3){//M253
					z_output = H + z_wind_direction[4-1] + NN;
				}else if(z_nubes == 4){//M254
					z_output = H + z_wind_direction[4-1] + NN;
				}else if(z_nubes == 5){//M255
					z_output = N + z_wind_direction[4-1] + NN;
				}
			}//Min segundo numero
			
		}else if(z_hpa == 3){//M3xx
			if(z_trend == 1){//M31x Segundo numero, tendencia de la presion
				if(z_nubes == 1){//M311
					z_output = A + z_wind_direction[4-1] + UU;
				}else if(z_nubes == 2){//M312
					z_output = A + z_wind_direction[4-1] + UU;
				}else if(z_nubes == 3){//M313
					z_output = A + z_wind_direction[4-1] + UU;
				}else if(z_nubes == 4){//M314
					z_output = D + z_wind_direction[4-1] + UU;
				}else if(z_nubes == 5){//M315
					z_output = J + z_wind_direction[4-1] + UU;
				}
			}else if(z_trend == 2){//M32x
				if(z_nubes == 1){//M321
					z_output = A + z_wind_direction[4-1] + UU;
				}else if(z_nubes == 2){//M322
					z_output = A + z_wind_direction[4-1] + UU;
				}else if(z_nubes == 3){//M323
					z_output = A + z_wind_direction[4-1] + UU;
				}else if(z_nubes == 4){//M324
					z_output = D + z_wind_direction[4-1] + UU;
				}else if(z_nubes == 5){//M325
					z_output = J + z_wind_direction[4-1] + UU;
				}
			}else if(z_trend == 3){//M33x
				if(z_nubes == 1){//M331
					z_output = A + z_wind_direction[4-1] + UU;
				}else if(z_nubes == 2){//M332
					z_output = A + z_wind_direction[4-1] + UU;
				}else if(z_nubes == 3){//M333
					z_output = D + z_wind_direction[4-1] + UU;
				}else if(z_nubes == 4){//M334
					z_output = G + z_wind_direction[4-1] + UU;
				}else if(z_nubes == 5){//M335
					z_output = J + z_wind_direction[4-1] + UU;
				}
			}else if(z_trend == 4){//M34x
				if(z_nubes == 1){//M341
					z_output = H + z_wind_direction[4-1] + NN;
				}else if(z_nubes == 2){//M342
					z_output = H + z_wind_direction[4-1] + NN;
				}else if(z_nubes == 3){//M343
					z_output = H + z_wind_direction[4-1] + NN;
				}else if(z_nubes == 4){//M344
					z_output = H + z_wind_direction[4-1] + NN;
				}else if(z_nubes == 5){//M345
					z_output = N + z_wind_direction[4-1] + NN;
				}
			}else if(z_trend == 5){//M35x
				if(z_nubes == 1){//M351
					z_output = G + z_wind_direction[4-1] + NN;
				}else if(z_nubes == 2){//M352
					z_output = G + z_wind_direction[4-1] + NN;
				}else if(z_nubes == 3){//M353
					z_output = G + z_wind_direction[4-1] + NN;
				}else if(z_nubes == 4){//M354
					z_output = G + z_wind_direction[4-1] + NN;
				}else if(z_nubes == 5){//M355
					z_output = M + z_wind_direction[4-1] + NN;
				}
			}//Min segundo numero
		}else if(z_hpa == 4){//M4xx
			if(z_trend == 1){//M41x Segundo numero, tendencia de la presion
				if(z_nubes == 1){//M411
					z_output = A + z_wind_direction[4-1] + FF;
				}else if(z_nubes == 2){//M412
					z_output = A + z_wind_direction[4-1] + FF;
				}else if(z_nubes == 3){//M413
					z_output = A + z_wind_direction[4-1] + FF;
				}else if(z_nubes == 4){//M414
					z_output = D + z_wind_direction[4-1] + FF;
				}else if(z_nubes == 5){//M415
					z_output = J + z_wind_direction[4-1] + FF;
				}
			}else if(z_trend == 2){//M42x
				if(z_nubes == 1){//M421
					z_output = A + z_wind_direction[4-1] + FF;
				}else if(z_nubes == 2){//M422
					z_output = A + z_wind_direction[4-1] + FF;
				}else if(z_nubes == 3){//M423
					z_output = D + z_wind_direction[4-1] + FF;
				}else if(z_nubes == 4){//M424
					z_output = G + z_wind_direction[4-1] + FF;
				}else if(z_nubes == 5){//M425
					z_output = J + z_wind_direction[4-1] + FF;
				}
			}else if(z_trend == 3){//M43x
				if(z_nubes == 1){//M431
					z_output = A + z_wind_direction[4-1] + FF;
				}else if(z_nubes == 2){//M432
					z_output = A + z_wind_direction[4-1] + FF;
				}else if(z_nubes == 3){//M433
					z_output = G + z_wind_direction[4-1] + FF;
				}else if(z_nubes == 4){//M434
					z_output = G + z_wind_direction[4-1] + FF;
				}else if(z_nubes == 5){//M435
					z_output = J + z_wind_direction[4-1] + FF;
				}
			}else if(z_trend == 4){//M44x
				if(z_nubes == 1){//M441
					z_output = G + z_wind_direction[4-1] + NN;
				}else if(z_nubes == 2){//M442
					z_output = G + z_wind_direction[4-1] + NN;
				}else if(z_nubes == 3){//M443
					z_output = G + z_wind_direction[4-1] + NN;
				}else if(z_nubes == 4){//M444
					z_output = M + z_wind_direction[4-1] + NN;
				}else if(z_nubes == 5){//M445
					z_output = M + z_wind_direction[4-1] + NN;
				}
			}else if(z_trend == 5){//M45x
				if(z_nubes == 1){//M451
					z_output = G + z_wind_direction[4-1] + SS;
				}else if(z_nubes == 2){//M452
					z_output = M + z_wind_direction[4-1] + SS;
				}else if(z_nubes == 3){//M453
					z_output = M + z_wind_direction[4-1] + SS;
				}else if(z_nubes == 4){//M454
					z_output = M + z_wind_direction[4-1] + SS;
				}else if(z_nubes == 5){//M455
					z_output = M + z_wind_direction[4-1] + SS;
				}
			}//Min segundo numero
		}else if(z_hpa == 5){//M5xx
			if(z_trend == 1){//M51x Segundo numero, tendencia de la presion
				if(z_nubes == 1){//M511
					z_output = D + z_wind_direction[4-1] + SS;
				}else if(z_nubes == 2){//M512
					z_output = J + z_wind_direction[4-1] + SS;
				}else if(z_nubes == 3){//M513
					z_output = J + z_wind_direction[4-1] + SS;
				}else if(z_nubes == 4){//M514
					z_output = J + z_wind_direction[4-1] + SS;
				}else if(z_nubes == 5){//M515
					z_output = J + z_wind_direction[4-1] + SS;
				}
			}else if(z_trend == 2){//M52x
				if(z_nubes == 1){//M521
					z_output = J + z_wind_direction[4-1] + SS;
				}else if(z_nubes == 2){//M522
					z_output = J + z_wind_direction[4-1] + SS;
				}else if(z_nubes == 3){//M523
					z_output = J + z_wind_direction[4-1] + SS;
				}else if(z_nubes == 4){//M524
					z_output = J + z_wind_direction[4-1] + SS;
				}else if(z_nubes == 5){//M525
					z_output = J + z_wind_direction[4-1] + SS;
				}
			}else if(z_trend == 3){//M53x
				if(z_nubes == 1){//M531
					z_output = J + z_wind_direction[4-1] + SS;
				}else if(z_nubes == 2){//M532
					z_output = J + z_wind_direction[4-1] + SS;
				}else if(z_nubes == 3){//M533
					z_output = J + z_wind_direction[4-1] + SS;
				}else if(z_nubes == 4){//M534
					z_output = J + z_wind_direction[4-1] + SS;
				}else if(z_nubes == 5){//M535
					z_output = M + z_wind_direction[4-1] + SS;
				}
			}else if(z_trend == 4){//M54x
				if(z_nubes == 1){//M541
					z_output = J + z_wind_direction[4-1] + SS;
				}else if(z_nubes == 2){//M542
					z_output = M + z_wind_direction[4-1] + SS;
				}else if(z_nubes == 3){//M543
					z_output = M + z_wind_direction[4-1] + SS;
				}else if(z_nubes == 4){//M544
					z_output = M + z_wind_direction[4-1] + SS;
				}else if(z_nubes == 5){//M545
					z_output = M + z_wind_direction[4-1] + SS;
				}
			}else if(z_trend == 5){//M55x
				if(z_nubes == 1){//M551
					z_output = M + z_wind_direction[4-1] + SS;
				}else if(z_nubes == 2){//M552
					z_output = M + z_wind_direction[4-1] + SS;
				}else if(z_nubes == 3){//M553
					z_output = M + z_wind_direction[4-1] + SS;
				}else if(z_nubes == 4){//M554
					z_output = M + z_wind_direction[4-1] + SS;
				}else if(z_nubes == 5){//M555
					z_output = M + z_wind_direction[4-1] + SS;
				}
			}//Min segundo numero
		}else if(z_hpa == 6){//M6xx
			if(z_trend == 1){//M61x Segundo numero, tendencia de la presion
				if(z_nubes == 1){//M611
					z_output = L + z_wind_direction[4-1] + "early, changing to  " + z_wind_direction[5-1] + SS;
				}else if(z_nubes == 2){//M612
					z_output = L + z_wind_direction[4-1] + "early, changing to  " + z_wind_direction[5-1] + SS;
				}else if(z_nubes == 3){//M613
					z_output = L + z_wind_direction[4-1] + "early, changing to  " + z_wind_direction[5-1] + SS;
				}else if(z_nubes == 4){//M614
					z_output = L + z_wind_direction[4-1] + "early, changing to  " + z_wind_direction[5-1] + SS;
				}else if(z_nubes == 5){//M615
					z_output = L + z_wind_direction[4-1] + "early, changing to  " + z_wind_direction[5-1] + SS;
				}
			}else if(z_trend == 2){//M62x
				if(z_nubes == 1){//M621
					z_output = L + z_wind_direction[4-1] + "early, changing to  " + z_wind_direction[5-1] + SS;
				}else if(z_nubes == 2){//M622
					z_output = L + z_wind_direction[4-1] + "early, changing to  " + z_wind_direction[5-1] + SS;
				}else if(z_nubes == 3){//M623
					z_output = L + z_wind_direction[4-1] + "early, changing to  " + z_wind_direction[5-1] + SS;
				}else if(z_nubes == 4){//M624
					z_output = L + z_wind_direction[4-1] + "early, changing to  " + z_wind_direction[5-1] + SS;
				}else if(z_nubes == 5){//M625
					z_output = L + z_wind_direction[4-1] + "early, changing to  " + z_wind_direction[5-1] + SS;
				}
			}else if(z_trend == 3){//M63x
				if(z_nubes == 1){//M631
					z_output = L + z_wind_direction[4-1] + "early, changing to  " + z_wind_direction[5-1] + SS;
				}else if(z_nubes == 2){//M632
					z_output = L + z_wind_direction[4-1] + "early, changing to  " + z_wind_direction[5-1] + SS;
				}else if(z_nubes == 3){//M633
					z_output = L + z_wind_direction[4-1] + "early, changing to  " + z_wind_direction[5-1] + SS;
				}else if(z_nubes == 4){//M634
					z_output = L + z_wind_direction[4-1] + "early, changing to  " + z_wind_direction[5-1] + SS;
				}else if(z_nubes == 5){//M635
					z_output = L + z_wind_direction[4-1] + "early, changing to  " + z_wind_direction[5-1] + SS;
				}
			}else if(z_trend == 4){//M64x
				if(z_nubes == 1){//M641
					z_output = L + z_wind_direction[4-1] + "early, changing to  " + z_wind_direction[5-1] + GG;
				}else if(z_nubes == 2){//M642
					z_output = P + z_wind_direction[4-1] + "early, changing to  " + z_wind_direction[5-1] + GG;
				}else if(z_nubes == 3){//M643
					z_output = P + z_wind_direction[4-1] + "early, changing to  " + z_wind_direction[5-1] + GG;
				}else if(z_nubes == 4){//M644
					z_output = P + z_wind_direction[4-1] + "early, changing to  " + z_wind_direction[5-1] + GG;
				}else if(z_nubes == 5){//M645
					z_output = P + z_wind_direction[4-1] + "early, changing to  " + z_wind_direction[5-1] + GG;
				}
			}else if(z_trend == 5){//M65x
				if(z_nubes == 1){//M651
					z_output = P + z_wind_direction[4-1] + "early, changing to  " + z_wind_direction[5-1] + GG;
				}else if(z_nubes == 2){//M652
					z_output = P + z_wind_direction[4-1] + "early, changing to  " + z_wind_direction[5-1] + GG;
				}else if(z_nubes == 3){//M653
					z_output = P + z_wind_direction[4-1] + "early, changing to  " + z_wind_direction[5-1] + GG;
				}else if(z_nubes == 4){//M654
					z_output = P + z_wind_direction[4-1] + "early, changing to  " + z_wind_direction[5-1] + GG;
				}else if(z_nubes == 5){//M655
					z_output = P + z_wind_direction[4-1] + "early, changing to  " + z_wind_direction[5-1] + GG;
				}
			}//Min segundo numero
		}else if(z_hpa == 7){//M7xx
			if(z_trend == 1){//M71x Segundo numero, tendencia de la presion
				if(z_nubes == 1){//M711
					z_output = L + z_wind_direction[4-1] + "early, changing to  " + z_wind_direction[6-1] + GG;
				}else if(z_nubes == 2){//M712
					z_output = L + z_wind_direction[4-1] + "early, changing to  " + z_wind_direction[6-1] + GG;
				}else if(z_nubes == 3){//M713
					z_output = L + z_wind_direction[4-1] + "early, changing to  " + z_wind_direction[6-1] + GG;
				}else if(z_nubes == 4){//M714
					z_output = L + z_wind_direction[4-1] + "early, changing to  " + z_wind_direction[6-1] + GG;
				}else if(z_nubes == 5){//M715
					z_output = L + z_wind_direction[4-1] + "early, changing to  " + z_wind_direction[6-1] + GG;
				}
			}else if(z_trend == 2){//M72x
				if(z_nubes == 1){//M721
					z_output = L + z_wind_direction[4-1] + "early, changing to  " + z_wind_direction[6-1] + GG;
				}else if(z_nubes == 2){//M722
					z_output = L + z_wind_direction[4-1] + "early, changing to  " + z_wind_direction[6-1] + GG;
				}else if(z_nubes == 3){//M723
					z_output = L + z_wind_direction[4-1] + "early, changing to  " + z_wind_direction[6-1] + GG;
				}else if(z_nubes == 4){//M724
					z_output = L + z_wind_direction[4-1] + "early, changing to  " + z_wind_direction[6-1] + GG;
				}else if(z_nubes == 5){//M725
					z_output = L + z_wind_direction[4-1] + "early, changing to  " + z_wind_direction[6-1] + GG;
				}
			}else if(z_trend == 3){//M73x
			if(z_nubes == 1){//M731
					z_output = P + z_wind_direction[4-1] + "early, changing to  " + z_wind_direction[6-1] + GG;
				}else if(z_nubes == 2){//M732
					z_output = P + z_wind_direction[4-1] + "early, changing to  " + z_wind_direction[6-1] + GG;
				}else if(z_nubes == 3){//M733
					z_output = P + z_wind_direction[4-1] + "early, changing to  " + z_wind_direction[6-1] + GG;
				}else if(z_nubes == 4){//M734
					z_output = P + z_wind_direction[4-1] + "early, changing to  " + z_wind_direction[6-1] + GG;
				}else if(z_nubes == 5){//M735
					z_output = P + z_wind_direction[4-1] + "early, changing to  " + z_wind_direction[6-1] + GG;
				}
			}else if(z_trend == 4){//M74x
				if(z_nubes == 1){//M741
					z_output = P + z_wind_direction[4-1] + "early, changing to  " + z_wind_direction[6-1] + WW;
				}else if(z_nubes == 2){//M742
					z_output = P + z_wind_direction[4-1] + "early, changing to  " + z_wind_direction[6-1] + WW;
				}else if(z_nubes == 3){//M743
					z_output = P + z_wind_direction[4-1] + "early, changing to  " + z_wind_direction[6-1] + WW;
				}else if(z_nubes == 4){//M744
					z_output = P + z_wind_direction[4-1] + "early, changing to  " + z_wind_direction[6-1] + WW;
				}else if(z_nubes == 5){//M745
					z_output = P + z_wind_direction[4-1] + "early, changing to  " + z_wind_direction[6-1] + WW;
				}
			}else if(z_trend == 5){//M75x
				if(z_nubes == 1){//M751
					z_output = P + z_wind_direction[4-1] + "early, changing to  " + z_wind_direction[6-1] + WW;
				}else if(z_nubes == 2){//M752
					z_output = P + z_wind_direction[4-1] + "early, changing to  " + z_wind_direction[6-1] + WW;
				}else if(z_nubes == 3){//M753
					z_output = P + z_wind_direction[4-1] + "early, changing to  " + z_wind_direction[6-1] + WW;
				}else if(z_nubes == 4){//M754
					z_output = P + z_wind_direction[4-1] + "early, changing to  " + z_wind_direction[6-1] + WW;
				}else if(z_nubes == 5){//M755
					z_output = P + z_wind_direction[4-1] + "early, changing to  " + z_wind_direction[6-1] + WW;
				}
			}//Min segundo numero
		}else if (z_hpa == 8) {//M8xx
			if(z_trend == 1){//M81x Segundo numero, tendencia de la presion
				if(z_nubes == 1){//M811
					z_output = L + z_wind_direction[4-1] + "early, changing to  " + z_wind_direction[6-1] + WW;
				}else if(z_nubes == 2){//M812
					z_output = L + z_wind_direction[4-1] + "early, changing to  " + z_wind_direction[6-1] + WW;
				}else if(z_nubes == 3){//M813
					z_output = L + z_wind_direction[4-1] + "early, changing to  " + z_wind_direction[6-1] + WW;
				}else if(z_nubes == 4){//M814
					z_output = L + z_wind_direction[4-1] + "early, changing to  " + z_wind_direction[6-1] + WW;
				}else if(z_nubes == 5){//M815
					z_output = L + z_wind_direction[4-1] + "early, changing to  " + z_wind_direction[6-1] + WW;
				}
			}else if(z_trend == 2){//M82x
				if(z_nubes == 1){//M821
					z_output = P + z_wind_direction[4-1] + "early, changing to  " + z_wind_direction[6-1] + WW;
				}else if(z_nubes == 2){//M822
					z_output = P + z_wind_direction[4-1] + "early, changing to  " + z_wind_direction[6-1] + WW;
				}else if(z_nubes == 3){//M823
					z_output = P + z_wind_direction[4-1] + "early, changing to  " + z_wind_direction[6-1] + WW;
				}else if(z_nubes == 4){//M824
					z_output = P + z_wind_direction[4-1] + "early, changing to  " + z_wind_direction[6-1] + WW;
				}else if(z_nubes == 5){//M825
					z_output = P + z_wind_direction[4-1] + "early, changing to  " + z_wind_direction[6-1] + WW;
				}
			}else if(z_trend == 3){//M83x
				if(z_nubes == 1){//M831
					z_output = P + z_wind_direction[4-1] + "early, changing to  " + z_wind_direction[6-1] + WW;
				}else if(z_nubes == 2){//M832
					z_output = P + z_wind_direction[4-1] + "early, changing to  " + z_wind_direction[6-1] + WW;
				}else if(z_nubes == 3){//M833
					z_output = P + z_wind_direction[4-1] + "early, changing to  " + z_wind_direction[6-1] + WW;
				}else if(z_nubes == 4){//M834
					z_output = P + z_wind_direction[4-1] + "early, changing to  " + z_wind_direction[6-1] + WW;
				}else if(z_nubes == 5){//M835
					z_output = P + z_wind_direction[4-1] + "early, changing to  " + z_wind_direction[6-1] + WW;
				}
			}else if(z_trend == 4){//M84x
				if(z_nubes == 1){//M841
					z_output = P + z_wind_direction[4-1] + "early, changing to  " + z_wind_direction[6-1] + WW;
				}else if(z_nubes == 2){//M842
					z_output = P + z_wind_direction[4-1] + "early, changing to  " + z_wind_direction[6-1] + WW;
				}else if(z_nubes == 3){//M843
					z_output = P + z_wind_direction[4-1] + "early, changing to  " + z_wind_direction[6-1] + WW;
				}else if(z_nubes == 4){//M844
					z_output = P + z_wind_direction[4-1] + "early, changing to  " + z_wind_direction[6-1] + WW;
				}else if(z_nubes == 5){//M845
					z_output = P + z_wind_direction[4-1] + "early, changing to  " + z_wind_direction[6-1] + WW;
				}
			}else if(z_trend == 5){//M85x
				if(z_nubes == 1){//M851
					z_output = P + z_wind_direction[4-1] + "early, changing to  " + z_wind_direction[6-1] + HH;
				}else if(z_nubes == 2){//M852
					z_output = P + z_wind_direction[4-1] + "early, changing to  " + z_wind_direction[6-1] + HH;
				}else if(z_nubes == 3){//M853
					z_output = P + z_wind_direction[4-1] + "early, changing to  " + z_wind_direction[6-1] + HH;
				}else if(z_nubes == 4){//M854
					z_output = P + z_wind_direction[4-1] + "early, changing to  " + z_wind_direction[6-1] + HH;
				}else if(z_nubes == 5){//M855
					z_output = P + z_wind_direction[4-1] + "early, changing to  " + z_wind_direction[6-1] + HH;
				}
			}//Min segundo numero
		}//Min primer numero
			
	}//Min letra M

	//********************   FIN SURESTE   ****************************
	///////////////////////////////////////////////////////////////
	////////////////////////////////////////////////////////////////
	
	//*******************     INICIO SUR   **************************
	//LETRA N
	
			
	if(z_output == "N"){
		if(z_hpa == 1){//N1xx Primer numero, presion atmosferica
			if(z_trend == 1){//N11x Segundo numero, tendencia de la presion
				if(z_nubes == 1){//N111
					z_output = B + z_wind_direction[5-1] + UU;
				}else if(z_nubes == 2){//N112
					z_output = B + z_wind_direction[5-1] + UU;
				}else if(z_nubes == 3){//N113
					z_output = B + z_wind_direction[5-1] + UU;
				}else if(z_nubes == 4){//N114
					z_output = B + z_wind_direction[5-1] + UU;
				}else if(z_nubes == 5){//N115
					z_output = E + z_wind_direction[5-1] + UU;
				}
			}else if(z_trend == 2){//N12x
				if(z_nubes == 1){//N121
					z_output = B + z_wind_direction[5-1] + UU;
				}else if(z_nubes == 2){//N122
					z_output = B + z_wind_direction[5-1] + UU;
				}else if(z_nubes == 3){//N123
					z_output = B + z_wind_direction[5-1] + UU;
				}else if(z_nubes == 4){//N124
					z_output = B + z_wind_direction[5-1] + UU;
				}else if(z_nubes == 5){//N125
					z_output = E + z_wind_direction[5-1] + UU;
				}
			}else if(z_trend == 3){//N13x
				if(z_nubes == 1){//N131
					z_output = B + z_wind_direction[5-1] + UU;
				}else if(z_nubes == 2){//N132
					z_output = B + z_wind_direction[5-1] + UU;
				}else if(z_nubes == 3){//N133
					z_output = B + z_wind_direction[5-1] + UU;
				}else if(z_nubes == 4){//N134
					z_output = E + z_wind_direction[5-1] + UU;
				}else if(z_nubes == 5){//N135
					z_output = K + z_wind_direction[5-1] + UU;
				}
			}else if(z_trend == 4){//14x
				if(z_nubes == 1){//141
					z_output = E + z_wind_direction[4-1] + NN;
				}else if(z_nubes == 2){//N142
					z_output = H + z_wind_direction[4-1] + NN;
				}else if(z_nubes == 3){//N143
					z_output = H + z_wind_direction[4-1] + NN;
				}else if(z_nubes == 4){//N144
					z_output = H + z_wind_direction[4-1] + NN;
				}else if(z_nubes == 5){//N145
					z_output = N + z_wind_direction[4-1] + NN;
				}
			}else if(z_trend == 5){//15x
				if(z_nubes == 1){//151
					z_output = H + z_wind_direction[4-1] + NN;
				}else if(z_nubes == 2){//N152
					z_output = H + z_wind_direction[4-1] + NN;
				}else if(z_nubes == 3){//N153
					z_output = H + z_wind_direction[4-1] + NN;
				}else if(z_nubes == 4){//N154
					z_output = H + z_wind_direction[4-1] + NN;
				}else if(z_nubes == 5){//N155
					z_output = N + z_wind_direction[4-1] + NN;
				}
		
				
			}//Nin segundo numero
		}else if(z_hpa == 2){//N2xx
			if(z_trend == 1){//N21x Segundo numero, tendencia de la presion
				if(z_nubes == 1){//N211
					z_output = A + z_wind_direction[5-1] + UU;
				}else if(z_nubes == 2){//N212
					z_output = A + z_wind_direction[5-1] + UU;
				}else if(z_nubes == 3){//N213
					z_output = A + z_wind_direction[5-1] + UU;
				}else if(z_nubes == 4){//N214
					z_output = A + z_wind_direction[5-1] + UU;
				}else if(z_nubes == 5){//N215
					z_output = D + z_wind_direction[5-1] + UU;
				}
			}else if(z_trend == 2){//N22x
				if(z_nubes == 1){//N221
					z_output = B + z_wind_direction[5-1] + UU;
				}else if(z_nubes == 2){//N222
					z_output = B + z_wind_direction[5-1] + UU;
				}else if(z_nubes == 3){//N223
					z_output = B + z_wind_direction[5-1] + UU;
				}else if(z_nubes == 4){//N224
					z_output = E + z_wind_direction[5-1] + UU;
				}else if(z_nubes == 5){//N225
					z_output = E + z_wind_direction[5-1] + UU;
				}
			}else if(z_trend == 3){//N23x
				if(z_nubes == 1){//N231
					z_output = B + z_wind_direction[5-1] + UU;
				}else if(z_nubes == 2){//N232
					z_output = B + z_wind_direction[5-1] + UU;
				}else if(z_nubes == 3){//N233
					z_output = B + z_wind_direction[5-1] + UU;
				}else if(z_nubes == 4){//N234
					z_output = E + z_wind_direction[5-1] + UU;
				}else if(z_nubes == 5){//N235
					z_output = K + z_wind_direction[5-1] + UU;
				}
			}else if(z_trend == 4){//N24x
				if(z_nubes == 1){//N241
					z_output = E + z_wind_direction[4-1] + NN;
				}else if(z_nubes == 2){//N242
					z_output = H + z_wind_direction[4-1] + NN;
				}else if(z_nubes == 3){//N243
					z_output = H + z_wind_direction[4-1] + NN;
				}else if(z_nubes == 4){//N244
					z_output = H + z_wind_direction[4-1] + NN;
				}else if(z_nubes == 5){//N245
					z_output = K + z_wind_direction[4-1] + NN;
				}
			}else if(z_trend == 5){//N25x
				if(z_nubes == 1){//N251
					z_output = H + z_wind_direction[4-1] + NN;
				}else if(z_nubes == 2){//N252
					z_output = H + z_wind_direction[4-1] + NN;
				}else if(z_nubes == 3){//N253
					z_output = H + z_wind_direction[4-1] + NN;
				}else if(z_nubes == 4){//N254
					z_output = H + z_wind_direction[4-1] + NN;
				}else if(z_nubes == 5){//N255
					z_output = N + z_wind_direction[4-1] + NN;
				}
			}//Nin segundo numero
			
		}else if(z_hpa == 3){//N3xx
			if(z_trend == 1){//N31x Segundo numero, tendencia de la presion
				if(z_nubes == 1){//N311
					z_output = A + z_wind_direction[5-1] + UU;
				}else if(z_nubes == 2){//N312
					z_output = A + z_wind_direction[5-1] + UU;
				}else if(z_nubes == 3){//N313
					z_output = A + z_wind_direction[5-1] + UU;
				}else if(z_nubes == 4){//N314
					z_output = A + z_wind_direction[5-1] + UU;
				}else if(z_nubes == 5){//N315
					z_output = D + z_wind_direction[5-1] + UU;
				}
			}else if(z_trend == 2){//N32x
				if(z_nubes == 1){//N321
					z_output = A + z_wind_direction[5-1] + UU;
				}else if(z_nubes == 2){//N322
					z_output = A + z_wind_direction[5-1] + UU;
				}else if(z_nubes == 3){//N323
					z_output = A + z_wind_direction[5-1] + UU;
				}else if(z_nubes == 4){//N324
					z_output = D + z_wind_direction[5-1] + UU;
				}else if(z_nubes == 5){//N325
					z_output = J + z_wind_direction[5-1] + UU;
				}
			}else if(z_trend == 3){//N33x
				if(z_nubes == 1){//N331
					z_output = B + z_wind_direction[5-1] + UU;
				}else if(z_nubes == 2){//N332
					z_output = B + z_wind_direction[5-1] + UU;
				}else if(z_nubes == 3){//N333
					z_output = B + z_wind_direction[5-1] + UU;
				}else if(z_nubes == 4){//N334
					z_output = E + z_wind_direction[5-1] + UU;
				}else if(z_nubes == 5){//N335
					z_output = K + z_wind_direction[5-1] + UU;
				}
			}else if(z_trend == 4){//N34x
				if(z_nubes == 1){//N341
					z_output = H + z_wind_direction[4-1] + NN;
				}else if(z_nubes == 2){//N342
					z_output = H + z_wind_direction[4-1] + NN;
				}else if(z_nubes == 3){//N343
					z_output = H + z_wind_direction[4-1] + NN;
				}else if(z_nubes == 4){//N344
					z_output = H + z_wind_direction[4-1] + NN;
				}else if(z_nubes == 5){//N345
					z_output = K + z_wind_direction[4-1] + NN;
				}
			}else if(z_trend == 5){//N35x
				if(z_nubes == 1){//N351
					z_output = H + z_wind_direction[4-1] + NN;
				}else if(z_nubes == 2){//N352
					z_output = H + z_wind_direction[4-1] + NN;
				}else if(z_nubes == 3){//N353
					z_output = H + z_wind_direction[4-1] + NN;
				}else if(z_nubes == 4){//N354
					z_output = H + z_wind_direction[4-1] + NN;
				}else if(z_nubes == 5){//N355
					z_output = N + z_wind_direction[4-1] + NN;
				}
			}//Nin segundo numero
		}else if(z_hpa == 4){//N4xx
			if(z_trend == 1){//N41x Segundo numero, tendencia de la presion
				if(z_nubes == 1){//N411
					z_output = A + z_wind_direction[5-1] + FF;
				}else if(z_nubes == 2){//N412
					z_output = A + z_wind_direction[5-1] + FF;
				}else if(z_nubes == 3){//N413
					z_output = A + z_wind_direction[5-1] + FF;
				}else if(z_nubes == 4){//N414
					z_output = D + z_wind_direction[5-1] + FF;
				}else if(z_nubes == 5){//N415
					z_output = J + z_wind_direction[5-1] + FF;
				}
			}else if(z_trend == 2){//N42x
				if(z_nubes == 1){//N421
					z_output = A + z_wind_direction[5-1] + FF;
				}else if(z_nubes == 2){//N422
					z_output = A + z_wind_direction[5-1] + FF;
				}else if(z_nubes == 3){//N423
					z_output = A + z_wind_direction[5-1] + FF;
				}else if(z_nubes == 4){//N424
					z_output = D + z_wind_direction[5-1] + FF;
				}else if(z_nubes == 5){//N425
					z_output = J + z_wind_direction[5-1] + FF;
				}
			}else if(z_trend == 3){//N43x
				if(z_nubes == 1){//N431
					z_output = A + z_wind_direction[5-1] + FF;
				}else if(z_nubes == 2){//N432
					z_output = A + z_wind_direction[5-1] + FF;
				}else if(z_nubes == 3){//N433
					z_output = D + z_wind_direction[5-1] + FF;
				}else if(z_nubes == 4){//N434
					z_output = G + z_wind_direction[5-1] + FF;
				}else if(z_nubes == 5){//N435
					z_output = J + z_wind_direction[5-1] + FF;
				}
			}else if(z_trend == 4){//N44x
				if(z_nubes == 1){//N441
					z_output = G + z_wind_direction[4-1] + NN;
				}else if(z_nubes == 2){//N442
					z_output = G + z_wind_direction[4-1] + NN;
				}else if(z_nubes == 3){//N443
					z_output = G + z_wind_direction[4-1] + NN;
				}else if(z_nubes == 4){//N444
					z_output = J + z_wind_direction[4-1] + NN;
				}else if(z_nubes == 5){//N445
					z_output = M + z_wind_direction[4-1] + NN;
				}
			}else if(z_trend == 5){//N45x
				if(z_nubes == 1){//N451
					z_output = G + z_wind_direction[4-1] + NN;
				}else if(z_nubes == 2){//N452
					z_output = G + z_wind_direction[4-1] + NN;
				}else if(z_nubes == 3){//N453
					z_output = G + z_wind_direction[4-1] + NN;
				}else if(z_nubes == 4){//N454
					z_output = M + z_wind_direction[4-1] + NN;
				}else if(z_nubes == 5){//N455
					z_output = M + z_wind_direction[4-1] + NN;
				}
			}//Nin segundo numero
		}else if(z_hpa == 5){//N5xx
			if(z_trend == 1){//N51x Segundo numero, tendencia de la presion
				if(z_nubes == 1){//N511
					z_output = D + z_wind_direction[5-1] + "early, changing to  " + z_wind_direction[6-1] + SS;
				}else if(z_nubes == 2){//N512
					z_output = J + z_wind_direction[5-1] + "early, changing to  " + z_wind_direction[6-1] + SS;
				}else if(z_nubes == 3){//N513
					z_output = J + z_wind_direction[5-1] + "early, changing to  " + z_wind_direction[6-1] + SS;
				}else if(z_nubes == 4){//N514
					z_output = J + z_wind_direction[5-1] + "early, changing to  " + z_wind_direction[6-1] + SS;
				}else if(z_nubes == 5){//N515
					z_output = J + z_wind_direction[5-1] + "early, changing to  " + z_wind_direction[6-1] + SS;
				}
			}else if(z_trend == 2){//N52x
				if(z_nubes == 1){//N521
					z_output = D + z_wind_direction[5-1] + FF;
				}else if(z_nubes == 2){//N522
					z_output = J + z_wind_direction[5-1] + FF;
				}else if(z_nubes == 3){//N523
					z_output = J + z_wind_direction[5-1] + FF;
				}else if(z_nubes == 4){//N524
					z_output = J + z_wind_direction[5-1] + FF;
				}else if(z_nubes == 5){//N525
					z_output = J + z_wind_direction[5-1] + FF;
				}
			}else if(z_trend == 3){//N53x
				if(z_nubes == 1){//N531
					z_output = J + z_wind_direction[5-1] + FF;
				}else if(z_nubes == 2){//N532
					z_output = J + z_wind_direction[5-1] + FF;
				}else if(z_nubes == 3){//N533
					z_output = J + z_wind_direction[5-1] + FF;
				}else if(z_nubes == 4){//N534
					z_output = J + z_wind_direction[5-1] + FF;
				}else if(z_nubes == 5){//N535
					z_output = J + z_wind_direction[5-1] + FF;
				}
			}else if(z_trend == 4){//N54x
				if(z_nubes == 1){//N541
					z_output = J + z_wind_direction[5-1] + SS;
				}else if(z_nubes == 2){//N542
					z_output = J + z_wind_direction[5-1] + SS;
				}else if(z_nubes == 3){//N543
					z_output = J + z_wind_direction[5-1] + SS;
				}else if(z_nubes == 4){//N544
					z_output = M + z_wind_direction[5-1] + SS;
				}else if(z_nubes == 5){//N545
					z_output = M + z_wind_direction[5-1] + SS;
				}
			}else if(z_trend == 5){//N55x
				if(z_nubes == 1){//N551
					z_output = J + z_wind_direction[5-1] + SS;
				}else if(z_nubes == 2){//N552
					z_output = J + z_wind_direction[5-1] + SS;
				}else if(z_nubes == 3){//N553
					z_output = M + z_wind_direction[5-1] + SS;
				}else if(z_nubes == 4){//N554
					z_output = M + z_wind_direction[5-1] + SS;
				}else if(z_nubes == 5){//N555
					z_output = M + z_wind_direction[5-1] + SS;
				}
			}//Nin segundo numero
		}else if(z_hpa == 6){//N6xx
			if(z_trend == 1){//N61x Segundo numero, tendencia de la presion
				if(z_nubes == 1){//N611
					z_output = S + z_wind_direction[5-1] + "early, changing to  " + z_wind_direction[6-1] + SS;
				}else if(z_nubes == 2){//N612
					z_output = S + z_wind_direction[5-1] + "early, changing to  " + z_wind_direction[6-1] + SS;
				}else if(z_nubes == 3){//N613
					z_output = S + z_wind_direction[5-1] + "early, changing to  " + z_wind_direction[6-1] + SS;
				}else if(z_nubes == 4){//N614
					z_output = S + z_wind_direction[5-1] + "early, changing to  " + z_wind_direction[6-1] + SS;
				}else if(z_nubes == 5){//N615
					z_output = S + z_wind_direction[5-1] + "early, changing to  " + z_wind_direction[6-1] + SS;
				}
			}else if(z_trend == 2){//N62x
				if(z_nubes == 1){//N621
					z_output = S + z_wind_direction[5-1] + "early, changing to  " + z_wind_direction[6-1] + SS;
				}else if(z_nubes == 2){//N622
					z_output = S + z_wind_direction[5-1] + "early, changing to  " + z_wind_direction[6-1] + SS;
				}else if(z_nubes == 3){//N623
					z_output = S + z_wind_direction[5-1] + "early, changing to  " + z_wind_direction[6-1] + SS;
				}else if(z_nubes == 4){//N624
					z_output = S + z_wind_direction[5-1] + "early, changing to  " + z_wind_direction[6-1] + SS;
				}else if(z_nubes == 5){//N625
					z_output = S + z_wind_direction[5-1] + "early, changing to  " + z_wind_direction[6-1] + SS;
				}
			}else if(z_trend == 3){//N63x
				if(z_nubes == 1){//N631
					z_output = S + z_wind_direction[5-1] + "early, changing to  " + z_wind_direction[6-1] + SS;
				}else if(z_nubes == 2){//N632
					z_output = S + z_wind_direction[5-1] + "early, changing to  " + z_wind_direction[6-1] + SS;
				}else if(z_nubes == 3){//N633
					z_output = S + z_wind_direction[5-1] + "early, changing to  " + z_wind_direction[6-1] + SS;
				}else if(z_nubes == 4){//N634
					z_output = S + z_wind_direction[5-1] + "early, changing to  " + z_wind_direction[6-1] + SS;
				}else if(z_nubes == 5){//N635
					z_output = S + z_wind_direction[5-1] + "early, changing to  " + z_wind_direction[6-1] + SS;
				}
			}else if(z_trend == 4){//N64x
				if(z_nubes == 1){//N641
					z_output = S + z_wind_direction[5-1] + "early, changing to  " + z_wind_direction[6-1] + SS;
				}else if(z_nubes == 2){//N642
					z_output = S + z_wind_direction[5-1] + "early, changing to  " + z_wind_direction[6-1] + SS;
				}else if(z_nubes == 3){//N643
					z_output = S + z_wind_direction[5-1] + "early, changing to  " + z_wind_direction[6-1] + SS
				}else if(z_nubes == 4){//N644
					z_output = S + z_wind_direction[5-1] + "early, changing to  " + z_wind_direction[6-1] + SS;
				}else if(z_nubes == 5){//N645
					z_output = S + z_wind_direction[5-1] + "early, changing to  " + z_wind_direction[6-1] + SS;
				}
			}else if(z_trend == 5){//N65x
				if(z_nubes == 1){//N651
					z_output = L + z_wind_direction[5-1] + "early, changing to  " + z_wind_direction[6-1] + SS;
				}else if(z_nubes == 2){//N652
					z_output = L + z_wind_direction[5-1] + "early, changing to  " + z_wind_direction[6-1] + SS;
				}else if(z_nubes == 3){//N653
					z_output = P + z_wind_direction[5-1] + "early, changing to  " + z_wind_direction[6-1] + SS;
				}else if(z_nubes == 4){//N654
					z_output = P + z_wind_direction[5-1] + "early, changing to  " + z_wind_direction[6-1] + SS;
				}else if(z_nubes == 5){//N655
					z_output = P + z_wind_direction[5-1] + "early, changing to  " + z_wind_direction[6-1] + SS;
				}
			}//Nin segundo numero
		}else if(z_hpa == 7){//N7xx
			if(z_trend == 1){//N71x Segundo numero, tendencia de la presion
				if(z_nubes == 1){//N711
					z_output = S + z_wind_direction[5-1] + "early, changing to  " + z_wind_direction[7-1] + GG;
				}else if(z_nubes == 2){//N712
					z_output = S + z_wind_direction[5-1] + "early, changing to  " + z_wind_direction[7-1] + GG;
				}else if(z_nubes == 3){//N713
					z_output = S + z_wind_direction[5-1] + "early, changing to  " + z_wind_direction[7-1] + GG;
				}else if(z_nubes == 4){//N714
					z_output = S + z_wind_direction[5-1] + "early, changing to  " + z_wind_direction[7-1] + GG;
				}else if(z_nubes == 5){//N715
					z_output = S + z_wind_direction[5-1] + "early, changing to  " + z_wind_direction[7-1] + GG;
				}
			}else if(z_trend == 2){//N72x
				if(z_nubes == 1){//N721
					z_output = S + z_wind_direction[5-1] + "early, changing to  " + z_wind_direction[7-1] + GG;
				}else if(z_nubes == 2){//N722
					z_output = S + z_wind_direction[5-1] + "early, changing to  " + z_wind_direction[7-1] + GG;
				}else if(z_nubes == 3){//N723
					z_output = S + z_wind_direction[5-1] + "early, changing to  " + z_wind_direction[7-1] + GG;
				}else if(z_nubes == 4){//N724
					z_output = S + z_wind_direction[5-1] + "early, changing to  " + z_wind_direction[7-1] + GG;
				}else if(z_nubes == 5){//N725
					z_output = S + z_wind_direction[5-1] + "early, changing to  " + z_wind_direction[7-1] + GG;
				}
			}else if(z_trend == 3){//N73x
			if(z_nubes == 1){//N731
					z_output = S + z_wind_direction[5-1] + "early, changing to  " + z_wind_direction[7-1] + GG;
				}else if(z_nubes == 2){//N732
					z_output = S + z_wind_direction[5-1] + "early, changing to  " + z_wind_direction[7-1] + GG;
				}else if(z_nubes == 3){//N733
					z_output = S + z_wind_direction[5-1] + "early, changing to  " + z_wind_direction[7-1] + GG;
				}else if(z_nubes == 4){//N734
					z_output = S + z_wind_direction[5-1] + "early, changing to  " + z_wind_direction[7-1] + GG;
				}else if(z_nubes == 5){//N735
					z_output = S + z_wind_direction[5-1] + "early, changing to  " + z_wind_direction[7-1] + GG;
				}
			}else if(z_trend == 4){//N74x
				if(z_nubes == 1){//N741
					z_output = S + z_wind_direction[5-1] + "early, changing to  " + z_wind_direction[7-1] + GG;
				}else if(z_nubes == 2){//N742
					z_output = S + z_wind_direction[5-1] + "early, changing to  " + z_wind_direction[7-1] + GG;
				}else if(z_nubes == 3){//N743
					z_output = S + z_wind_direction[5-1] + "early, changing to  " + z_wind_direction[7-1] + GG;
				}else if(z_nubes == 4){//N744
					z_output = S + z_wind_direction[5-1] + "early, changing to  " + z_wind_direction[7-1] + GG;
				}else if(z_nubes == 5){//N745
					z_output = S + z_wind_direction[5-1] + "early, changing to  " + z_wind_direction[7-1] + GG;
				}
			}else if(z_trend == 5){//N75x
				if(z_nubes == 1){//N751
					z_output = L + z_wind_direction[5-1] + "early, changing to  " + z_wind_direction[7-1] + GG;
				}else if(z_nubes == 2){//N752
					z_output = L + z_wind_direction[5-1] + "early, changing to  " + z_wind_direction[7-1] + GG;
				}else if(z_nubes == 3){//N753
					z_output = P + z_wind_direction[5-1] + "early, changing to  " + z_wind_direction[7-1] + GG;
				}else if(z_nubes == 4){//N754
					z_output = P + z_wind_direction[5-1] + "early, changing to  " + z_wind_direction[7-1] + GG;
				}else if(z_nubes == 5){//N755
					z_output = P + z_wind_direction[5-1] + "early, changing to  " + z_wind_direction[7-1] + GG;
				}
			}//Nin segundo numero
		}else if (z_hpa == 8) {//N8xx
			if(z_trend == 1){//N81x Segundo numero, tendencia de la presion
				if(z_nubes == 1){//N811
					z_output = S + z_wind_direction[5-1] + "early, changing to  " + z_wind_direction[7-1] + WW;
				}else if(z_nubes == 2){//N812
					z_output = S + z_wind_direction[5-1] + "early, changing to  " + z_wind_direction[7-1] + WW;
				}else if(z_nubes == 3){//N813
					z_output = S + z_wind_direction[5-1] + "early, changing to  " + z_wind_direction[7-1] + WW;
				}else if(z_nubes == 4){//N814
					z_output = S + z_wind_direction[5-1] + "early, changing to  " + z_wind_direction[7-1] + WW;
				}else if(z_nubes == 5){//N815
					z_output = S + z_wind_direction[5-1] + "early, changing to  " + z_wind_direction[7-1] + WW;
				}
			}else if(z_trend == 2){//N82x
				if(z_nubes == 1){//N821
					z_output = S + z_wind_direction[5-1] + "early, changing to  " + z_wind_direction[7-1] + WW;
				}else if(z_nubes == 2){//N822
					z_output = S + z_wind_direction[5-1] + "early, changing to  " + z_wind_direction[7-1] + WW;
				}else if(z_nubes == 3){//N823
					z_output = S + z_wind_direction[5-1] + "early, changing to  " + z_wind_direction[7-1] + WW;
				}else if(z_nubes == 4){//N824
					z_output = S + z_wind_direction[5-1] + "early, changing to  " + z_wind_direction[7-1] + WW;
				}else if(z_nubes == 5){//N825
					z_output = S + z_wind_direction[5-1] + "early, changing to  " + z_wind_direction[7-1] + WW;
				}
			}else if(z_trend == 3){//N83x
				if(z_nubes == 1){//N831
					z_output = S + z_wind_direction[5-1] + "early, changing to  " + z_wind_direction[7-1] + WW;
				}else if(z_nubes == 2){//N832
					z_output = S + z_wind_direction[5-1] + "early, changing to  " + z_wind_direction[7-1] + WW;
				}else if(z_nubes == 3){//N833
					z_output = S + z_wind_direction[5-1] + "early, changing to  " + z_wind_direction[7-1] + WW;
				}else if(z_nubes == 4){//N834
					z_output = S + z_wind_direction[5-1] + "early, changing to  " + z_wind_direction[7-1] + WW;
				}else if(z_nubes == 5){//N835
					z_output = S + z_wind_direction[5-1] + "early, changing to  " + z_wind_direction[7-1] + WW;
				}
			}else if(z_trend == 4){//N84x
				if(z_nubes == 1){//N841
					z_output = S + z_wind_direction[5-1] + "early, changing to  " + z_wind_direction[7-1] + WW;
				}else if(z_nubes == 2){//N842
					z_output = S + z_wind_direction[5-1] + "early, changing to  " + z_wind_direction[7-1] + WW;
				}else if(z_nubes == 3){//N843
					z_output = S + z_wind_direction[5-1] + "early, changing to  " + z_wind_direction[7-1] + WW;
				}else if(z_nubes == 4){//N844
					z_output = S + z_wind_direction[5-1] + "early, changing to  " + z_wind_direction[7-1] + WW;
				}else if(z_nubes == 5){//N845
					z_output = S + z_wind_direction[5-1] + "early, changing to  " + z_wind_direction[7-1] + WW;
				}
			}else if(z_trend == 5){//N85x
				if(z_nubes == 1){//N851
					z_output = L + z_wind_direction[5-1] + "early, changing to  " + z_wind_direction[7-1] + WW;
				}else if(z_nubes == 2){//N852
					z_output = L + z_wind_direction[5-1] + "early, changing to  " + z_wind_direction[7-1] + WW;
				}else if(z_nubes == 3){//N853
					z_output = P + z_wind_direction[5-1] + "early, changing to  " + z_wind_direction[7-1] + WW;
				}else if(z_nubes == 4){//N854
					z_output = P + z_wind_direction[5-1] + "early, changing to  " + z_wind_direction[7-1] + WW;
				}else if(z_nubes == 5){//N855
					z_output = P + z_wind_direction[5-1] + "early, changing to  " + z_wind_direction[7-1] + WW;
				}
			}//Nin segundo numero
		}//Nin primer numero
			
	}//Nin letra N
	
	////////////////////////////////////////////////////////////////
	
	//LETRA O
	
		if(z_output == "O"){
		if(z_hpa == 1){//O1xx Primer numero, presion atmosferica
			if(z_trend == 1){//O11x Segundo numero, tendencia de la presion
				if(z_nubes == 1){//O111
					z_output = A + z_wind_direction[5-1] + UU;
				}else if(z_nubes == 2){//O112
					z_output = A + z_wind_direction[5-1] + UU;
				}else if(z_nubes == 3){//O113
					z_output = A + z_wind_direction[5-1] + UU;
				}else if(z_nubes == 4){//O114
					z_output = A + z_wind_direction[5-1] + UU;
				}else if(z_nubes == 5){//O115
					z_output = D + z_wind_direction[5-1] + UU;
				}
			}else if(z_trend == 2){//O12x
				if(z_nubes == 1){//O121
					z_output = B + z_wind_direction[5-1] + UU;
				}else if(z_nubes == 2){//O122
					z_output = B + z_wind_direction[5-1] + UU;
				}else if(z_nubes == 3){//O123
					z_output = B + z_wind_direction[5-1] + UU;
				}else if(z_nubes == 4){//O124
					z_output = B + z_wind_direction[5-1] + UU;
				}else if(z_nubes == 5){//O125
					z_output = E + z_wind_direction[5-1] + UU;
				}
			}else if(z_trend == 3){//O13x
				if(z_nubes == 1){//O131
					z_output = B + z_wind_direction[5-1] + UU;
				}else if(z_nubes == 2){//O132
					z_output = B + z_wind_direction[5-1] + UU;
				}else if(z_nubes == 3){//O133
					z_output = B + z_wind_direction[5-1] + UU;
				}else if(z_nubes == 4){//O134
					z_output = E + z_wind_direction[5-1] + UU;
				}else if(z_nubes == 5){//O135
					z_output = K + z_wind_direction[5-1] + UU;
				}
			}else if(z_trend == 4){//14x
				if(z_nubes == 1){//141
					z_output = B + z_wind_direction[4-1] + NN;
				}else if(z_nubes == 2){//O142
					z_output = H + z_wind_direction[4-1] + NN;
				}else if(z_nubes == 3){//O143
					z_output = H + z_wind_direction[4-1] + NN;
				}else if(z_nubes == 4){//O144
					z_output = H + z_wind_direction[4-1] + NN;
				}else if(z_nubes == 5){//O145
					z_output = N + z_wind_direction[4-1] + NN;
				}
			}else if(z_trend == 5){//15x
				if(z_nubes == 1){//151
					z_output = H + z_wind_direction[4-1] + NN;
				}else if(z_nubes == 2){//O152
					z_output = H + z_wind_direction[4-1] + NN;
				}else if(z_nubes == 3){//O153
					z_output = H + z_wind_direction[4-1] + NN;
				}else if(z_nubes == 4){//O154
					z_output = H + z_wind_direction[4-1] + NN;
				}else if(z_nubes == 5){//O155
					z_output = N + z_wind_direction[4-1] + NN;
				}
		
				
			}//Oin segundo numero
		}else if(z_hpa == 2){//O2xx
			if(z_trend == 1){//O21x Segundo numero, tendencia de la presion
				if(z_nubes == 1){//O211
					z_output = A + z_wind_direction[5-1] + UU;
				}else if(z_nubes == 2){//O212
					z_output = A + z_wind_direction[5-1] + UU;
				}else if(z_nubes == 3){//O213
					z_output = A + z_wind_direction[5-1] + UU;
				}else if(z_nubes == 4){//O214
					z_output = A + z_wind_direction[5-1] + UU;
				}else if(z_nubes == 5){//O215
					z_output = D + z_wind_direction[5-1] + UU;
				}
			}else if(z_trend == 2){//O22x
				if(z_nubes == 1){//O221
					z_output = B + z_wind_direction[5-1] + UU;
				}else if(z_nubes == 2){//O222
					z_output = B + z_wind_direction[5-1] + UU;
				}else if(z_nubes == 3){//O223
					z_output = B + z_wind_direction[5-1] + UU;
				}else if(z_nubes == 4){//O224
					z_output = B + z_wind_direction[5-1] + UU;
				}else if(z_nubes == 5){//O225
					z_output = E + z_wind_direction[5-1] + UU;
				}
			}else if(z_trend == 3){//O23x
				if(z_nubes == 1){//O231
					z_output = B + z_wind_direction[5-1] + UU;
				}else if(z_nubes == 2){//O232
					z_output = B + z_wind_direction[5-1] + UU;
				}else if(z_nubes == 3){//O233
					z_output = B + z_wind_direction[5-1] + UU;
				}else if(z_nubes == 4){//O234
					z_output = E + z_wind_direction[5-1] + UU;
				}else if(z_nubes == 5){//O235
					z_output = K + z_wind_direction[5-1] + UU;
				}
			}else if(z_trend == 4){//O24x
				if(z_nubes == 1){//O241
					z_output = E + z_wind_direction[4-1] + NN;
				}else if(z_nubes == 2){//O242
					z_output = H + z_wind_direction[4-1] + NN;
				}else if(z_nubes == 3){//O243
					z_output = H + z_wind_direction[4-1] + NN;
				}else if(z_nubes == 4){//O244
					z_output = H + z_wind_direction[4-1] + NN;
				}else if(z_nubes == 5){//O245
					z_output = K + z_wind_direction[4-1] + NN;
				}
			}else if(z_trend == 5){//O25x
				if(z_nubes == 1){//O251
					z_output = H + z_wind_direction[4-1] + NN;
				}else if(z_nubes == 2){//O252
					z_output = H + z_wind_direction[4-1] + NN;
				}else if(z_nubes == 3){//O253
					z_output = H + z_wind_direction[4-1] + NN;
				}else if(z_nubes == 4){//O254
					z_output = H + z_wind_direction[4-1] + NN;
				}else if(z_nubes == 5){//O255
					z_output = N + z_wind_direction[4-1] + NN;
				}
			}//Oin segundo numero
			
		}else if(z_hpa == 3){//O3xx
			if(z_trend == 1){//O31x Segundo numero, tendencia de la presion
				if(z_nubes == 1){//O311
					z_output = A + z_wind_direction[5-1] + UU;
				}else if(z_nubes == 2){//O312
					z_output = A + z_wind_direction[5-1] + UU;
				}else if(z_nubes == 3){//O313
					z_output = A + z_wind_direction[5-1] + UU;
				}else if(z_nubes == 4){//O314
					z_output = A + z_wind_direction[5-1] + UU;
				}else if(z_nubes == 5){//O315
					z_output = D + z_wind_direction[5-1] + UU;
				}
			}else if(z_trend == 2){//O32x
				if(z_nubes == 1){//O321
					z_output = A + z_wind_direction[5-1] + UU;
				}else if(z_nubes == 2){//O322
					z_output = A + z_wind_direction[5-1] + UU;
				}else if(z_nubes == 3){//O323
					z_output = A + z_wind_direction[5-1] + UU;
				}else if(z_nubes == 4){//O324
					z_output = D + z_wind_direction[5-1] + UU;
				}else if(z_nubes == 5){//O325
					z_output = J + z_wind_direction[5-1] + UU;
				}
			}else if(z_trend == 3){//O33x
				if(z_nubes == 1){//O331
					z_output = B + z_wind_direction[5-1] + UU;
				}else if(z_nubes == 2){//O332
					z_output = B + z_wind_direction[5-1] + UU;
				}else if(z_nubes == 3){//O333
					z_output = B + z_wind_direction[5-1] + UU;
				}else if(z_nubes == 4){//O334
					z_output = E + z_wind_direction[5-1] + UU;
				}else if(z_nubes == 5){//O335
					z_output = K + z_wind_direction[5-1] + UU;
				}
			}else if(z_trend == 4){//O34x
				if(z_nubes == 1){//O341
					z_output = H + z_wind_direction[5-1] + NN;
				}else if(z_nubes == 2){//O342
					z_output = H + z_wind_direction[5-1] + NN;
				}else if(z_nubes == 3){//O343
					z_output = H + z_wind_direction[5-1] + NN;
				}else if(z_nubes == 4){//O344
					z_output = H + z_wind_direction[5-1] + NN;
				}else if(z_nubes == 5){//O345
					z_output = K + z_wind_direction[5-1] + NN;
				}
			}else if(z_trend == 5){//O35x
				if(z_nubes == 1){//O351
					z_output = G + z_wind_direction[5-1] + NN;
				}else if(z_nubes == 2){//O352
					z_output = G + z_wind_direction[5-1] + NN;
				}else if(z_nubes == 3){//O353
					z_output = G + z_wind_direction[5-1] + NN;
				}else if(z_nubes == 4){//O354
					z_output = G + z_wind_direction[5-1] + NN;
				}else if(z_nubes == 5){//O355
					z_output = M + z_wind_direction[5-1] + NN;
				}
			}//Oin segundo numero
		}else if(z_hpa == 4){//O4xx
			if(z_trend == 1){//O41x Segundo numero, tendencia de la presion
				if(z_nubes == 1){//O411
					z_output = A + z_wind_direction[5-1] + FF;
				}else if(z_nubes == 2){//O412
					z_output = A + z_wind_direction[5-1] + FF;
				}else if(z_nubes == 3){//O413
					z_output = A + z_wind_direction[5-1] + FF;
				}else if(z_nubes == 4){//O414
					z_output = D + z_wind_direction[5-1] + FF;
				}else if(z_nubes == 5){//O415
					z_output = J + z_wind_direction[5-1] + FF;
				}
			}else if(z_trend == 2){//O42x
				if(z_nubes == 1){//O421
					z_output = A + z_wind_direction[5-1] + FF;
				}else if(z_nubes == 2){//O422
					z_output = A + z_wind_direction[5-1] + FF;
				}else if(z_nubes == 3){//O423
					z_output = A + z_wind_direction[5-1] + FF;
				}else if(z_nubes == 4){//O424
					z_output = D + z_wind_direction[5-1] + FF;
				}else if(z_nubes == 5){//O425
					z_output = J + z_wind_direction[5-1] + FF;
				}
			}else if(z_trend == 3){//O43x
				if(z_nubes == 1){//O431
					z_output = A + z_wind_direction[5-1] + FF;
				}else if(z_nubes == 2){//O432
					z_output = A + z_wind_direction[5-1] + FF;
				}else if(z_nubes == 3){//O433
					z_output = D + z_wind_direction[5-1] + FF;
				}else if(z_nubes == 4){//O434
					z_output = G + z_wind_direction[5-1] + FF;
				}else if(z_nubes == 5){//O435
					z_output = J + z_wind_direction[5-1] + FF;
				}
			}else if(z_trend == 4){//O44x
				if(z_nubes == 1){//O441
					z_output = G + z_wind_direction[5-1] + NN;
				}else if(z_nubes == 2){//O442
					z_output = G + z_wind_direction[5-1] + NN;
				}else if(z_nubes == 3){//O443
					z_output = G + z_wind_direction[5-1] + NN
				}else if(z_nubes == 4){//O444
					z_output = J + z_wind_direction[5-1] + NN;
				}else if(z_nubes == 5){//O445
					z_output = M + z_wind_direction[5-1] + NN;
				}
			}else if(z_trend == 5){//O45x
				if(z_nubes == 1){//O451
					z_output = G + z_wind_direction[5-1] + NN;
				}else if(z_nubes == 2){//O452
					z_output = G + z_wind_direction[5-1] + NN;
				}else if(z_nubes == 3){//O453
					z_output = G + z_wind_direction[5-1] + NN;
				}else if(z_nubes == 4){//O454
					z_output = M + z_wind_direction[5-1] + NN;
				}else if(z_nubes == 5){//O455
					z_output = M + z_wind_direction[5-1] + NN;
				}
			}//Oin segundo numero
		}else if(z_hpa == 5){//O5xx
			if(z_trend == 1){//O51x Segundo numero, tendencia de la presion
				if(z_nubes == 1){//O511
					z_output = D + z_wind_direction[5-1] + "early, changing to  " + z_wind_direction[6-1] + SS;
				}else if(z_nubes == 2){//O512
					z_output = J + z_wind_direction[5-1] + "early, changing to  " + z_wind_direction[6-1] + SS;
				}else if(z_nubes == 3){//O513
					z_output = J + z_wind_direction[5-1] + "early, changing to  " + z_wind_direction[6-1] + SS;
				}else if(z_nubes == 4){//O514
					z_output = S + z_wind_direction[5-1] + "early, changing to  " + z_wind_direction[6-1] + SS;
				}else if(z_nubes == 5){//O515
					z_output = S + z_wind_direction[5-1] + "early, changing to  " + z_wind_direction[6-1] + SS;
				}
			}else if(z_trend == 2){//O52x
				if(z_nubes == 1){//O521
					z_output = D + z_wind_direction[5-1] + "early, changing to  " + z_wind_direction[6-1] + FF;
				}else if(z_nubes == 2){//O522
					z_output = J + z_wind_direction[5-1] + "early, changing to  " + z_wind_direction[6-1] + FF;
				}else if(z_nubes == 3){//O523
					z_output = J + z_wind_direction[5-1] + "early, changing to  " + z_wind_direction[6-1] + FF;
				}else if(z_nubes == 4){//O524
					z_output = S + z_wind_direction[5-1] + "early, changing to  " + z_wind_direction[6-1] + FF;
				}else if(z_nubes == 5){//O525
					z_output = S + z_wind_direction[5-1] + "early, changing to  " + z_wind_direction[6-1] + FF;
				}
			}else if(z_trend == 3){//O53x
				if(z_nubes == 1){//O531
					z_output = J + z_wind_direction[5-1] + "early, changing to  " + z_wind_direction[6-1] + FF;
				}else if(z_nubes == 2){//O532
					z_output = J + z_wind_direction[5-1] + "early, changing to  " + z_wind_direction[6-1] + FF;
				}else if(z_nubes == 3){//O533
					z_output = J + z_wind_direction[5-1] + "early, changing to  " + z_wind_direction[6-1] + FF;
				}else if(z_nubes == 4){//O534
					z_output = J + z_wind_direction[5-1] + "early, changing to  " + z_wind_direction[6-1] + FF;
				}else if(z_nubes == 5){//O535
					z_output = J + z_wind_direction[5-1] + "early, changing to  " + z_wind_direction[6-1] + FF;
				}
			}else if(z_trend == 4){//O54x
				if(z_nubes == 1){//O541
					z_output = J + z_wind_direction[5-1] + "early, changing to  " + z_wind_direction[6-1] + SS;
				}else if(z_nubes == 2){//O542
					z_output = J + z_wind_direction[5-1] + "early, changing to  " + z_wind_direction[6-1] + SS;
				}else if(z_nubes == 3){//O543
					z_output = J + z_wind_direction[5-1] + "early, changing to  " + z_wind_direction[6-1] + SS;
				}else if(z_nubes == 4){//O544
					z_output = M + z_wind_direction[5-1] + "early, changing to  " + z_wind_direction[6-1] + SS;
				}else if(z_nubes == 5){//O545
					z_output = M + z_wind_direction[5-1] + "early, changing to  " + z_wind_direction[6-1] + SS;
				}
			}else if(z_trend == 5){//O55x
				if(z_nubes == 1){//O551
					z_output = L + z_wind_direction[5-1] + "early, changing to  " + z_wind_direction[6-1] + SS;
				}else if(z_nubes == 2){//O552
					z_output = L + z_wind_direction[5-1] + "early, changing to  " + z_wind_direction[6-1] + SS;
				}else if(z_nubes == 3){//O553
					z_output = P + z_wind_direction[5-1] + "early, changing to  " + z_wind_direction[6-1] + SS;
				}else if(z_nubes == 4){//O554
					z_output = P + z_wind_direction[5-1] + "early, changing to  " + z_wind_direction[6-1] + SS;
				}else if(z_nubes == 5){//O555
					z_output = P + z_wind_direction[5-1] + "early, changing to  " + z_wind_direction[6-1] + SS;
				}
			}//Oin segundo numero
		}else if(z_hpa == 6){//O6xx
			if(z_trend == 1){//O61x Segundo numero, tendencia de la presion
				if(z_nubes == 1){//O611
					z_output = S + z_wind_direction[5-1] + "early, changing to  " + z_wind_direction[7-1] + SS;
				}else if(z_nubes == 2){//O612
					z_output = S + z_wind_direction[5-1] + "early, changing to  " + z_wind_direction[7-1] + SS;
				}else if(z_nubes == 3){//O613
					z_output = S + z_wind_direction[5-1] + "early, changing to  " + z_wind_direction[7-1] + SS;
				}else if(z_nubes == 4){//O614
					z_output = S + z_wind_direction[5-1] + "early, changing to  " + z_wind_direction[7-1] + SS;
				}else if(z_nubes == 5){//O615
					z_output = S + z_wind_direction[5-1] + "early, changing to  " + z_wind_direction[7-1] + SS;
				}
			}else if(z_trend == 2){//O62x
				if(z_nubes == 1){//O621
					z_output = S + z_wind_direction[5-1] + "early, changing to  " + z_wind_direction[7-1] + SS;
				}else if(z_nubes == 2){//O622
					z_output = S + z_wind_direction[5-1] + "early, changing to  " + z_wind_direction[7-1] + SS;
				}else if(z_nubes == 3){//O623
					z_output = S + z_wind_direction[5-1] + "early, changing to  " + z_wind_direction[7-1] + SS;
				}else if(z_nubes == 4){//O624
					z_output = S + z_wind_direction[5-1] + "early, changing to  " + z_wind_direction[7-1] + SS;
				}else if(z_nubes == 5){//O625
					z_output = S + z_wind_direction[5-1] + "early, changing to  " + z_wind_direction[7-1] + SS;
				}
			}else if(z_trend == 3){//O63x
				if(z_nubes == 1){//O631
					z_output = S + z_wind_direction[5-1] + "early, changing to  " + z_wind_direction[7-1] + SS;
				}else if(z_nubes == 2){//O632
					z_output = S + z_wind_direction[5-1] + "early, changing to  " + z_wind_direction[7-1] + SS;
				}else if(z_nubes == 3){//O633
					z_output = S + z_wind_direction[5-1] + "early, changing to  " + z_wind_direction[7-1] + SS;
				}else if(z_nubes == 4){//O634
					z_output = S + z_wind_direction[5-1] + "early, changing to  " + z_wind_direction[7-1] + SS;
				}else if(z_nubes == 5){//O635
					z_output = S + z_wind_direction[5-1] + "early, changing to  " + z_wind_direction[7-1] + SS;
				}
			}else if(z_trend == 4){//O64x
				if(z_nubes == 1){//O641
					z_output = S + z_wind_direction[5-1] + "early, changing to  " + z_wind_direction[7-1] + SS;
				}else if(z_nubes == 2){//O642
					z_output = S + z_wind_direction[5-1] + "early, changing to  " + z_wind_direction[7-1] + SS;
				}else if(z_nubes == 3){//O643
					z_output = S + z_wind_direction[5-1] + "early, changing to  " + z_wind_direction[7-1] + SS;
				}else if(z_nubes == 4){//O644
					z_output = S + z_wind_direction[5-1] + "early, changing to  " + z_wind_direction[7-1] + SS;
				}else if(z_nubes == 5){//O645
					z_output = S + z_wind_direction[5-1] + "early, changing to  " + z_wind_direction[7-1] + SS;
				}
			}else if(z_trend == 5){//O65x
				if(z_nubes == 1){//O651
					z_output = L + z_wind_direction[5-1] + "early, changing to  " + z_wind_direction[7-1] + SS;
				}else if(z_nubes == 2){//O652
					z_output = L + z_wind_direction[5-1] + "early, changing to  " + z_wind_direction[7-1] + SS;
				}else if(z_nubes == 3){//O653
					z_output = P + z_wind_direction[5-1] + "early, changing to  " + z_wind_direction[7-1] + SS;
				}else if(z_nubes == 4){//O654
					z_output = P + z_wind_direction[5-1] + "early, changing to  " + z_wind_direction[7-1] + SS;
				}else if(z_nubes == 5){//O655
					z_output = P + z_wind_direction[5-1] + "early, changing to  " + z_wind_direction[7-1] + SS;
				}
			}//Oin segundo numero
		}else if(z_hpa == 7){//O7xx
			if(z_trend == 1){//O71x Segundo numero, tendencia de la presion
				if(z_nubes == 1){//O711
					z_output = S + z_wind_direction[5-1] + "early, changing to  " + z_wind_direction[7-1] + GG;
				}else if(z_nubes == 2){//O712
					z_output = S + z_wind_direction[5-1] + "early, changing to  " + z_wind_direction[7-1] + GG;
				}else if(z_nubes == 3){//O713
					z_output = S + z_wind_direction[5-1] + "early, changing to  " + z_wind_direction[7-1] + GG;
				}else if(z_nubes == 4){//O714
					z_output = S + z_wind_direction[5-1] + "early, changing to  " + z_wind_direction[7-1] + GG;
				}else if(z_nubes == 5){//O715
					z_output = S + z_wind_direction[5-1] + "early, changing to  " + z_wind_direction[7-1] + GG;
				}
			}else if(z_trend == 2){//O72x
				if(z_nubes == 1){//O721
					z_output = S + z_wind_direction[5-1] + "early, changing to  " + z_wind_direction[7-1] + GG;
				}else if(z_nubes == 2){//O722
					z_output = S + z_wind_direction[5-1] + "early, changing to  " + z_wind_direction[7-1] + GG;
				}else if(z_nubes == 3){//O723
					z_output = S + z_wind_direction[5-1] + "early, changing to  " + z_wind_direction[7-1] + GG;
				}else if(z_nubes == 4){//O724
					z_output = S + z_wind_direction[5-1] + "early, changing to  " + z_wind_direction[7-1] + GG;
				}else if(z_nubes == 5){//O725
					z_output = S + z_wind_direction[5-1] + "early, changing to  " + z_wind_direction[7-1] + GG;
				}
			}else if(z_trend == 3){//O73x
			if(z_nubes == 1){//O731
					z_output = S + z_wind_direction[5-1] + "early, changing to  " + z_wind_direction[7-1] + GG;
				}else if(z_nubes == 2){//O732
					z_output = S + z_wind_direction[5-1] + "early, changing to  " + z_wind_direction[7-1] + GG;
				}else if(z_nubes == 3){//O733
					z_output = S + z_wind_direction[5-1] + "early, changing to  " + z_wind_direction[7-1] + GG;
				}else if(z_nubes == 4){//O734
					z_output = S + z_wind_direction[5-1] + "early, changing to  " + z_wind_direction[7-1] + GG;
				}else if(z_nubes == 5){//O735
					z_output = S + z_wind_direction[5-1] + "early, changing to  " + z_wind_direction[7-1] + GG;
				}
			}else if(z_trend == 4){//O74x
				if(z_nubes == 1){//O741
					z_output = S + z_wind_direction[5-1] + "early, changing to  " + z_wind_direction[7-1] + GG;
				}else if(z_nubes == 2){//O742
					z_output = S + z_wind_direction[5-1] + "early, changing to  " + z_wind_direction[7-1] + GG;
				}else if(z_nubes == 3){//O743
					z_output = S + z_wind_direction[5-1] + "early, changing to  " + z_wind_direction[7-1] + GG;
				}else if(z_nubes == 4){//O744
					z_output = S + z_wind_direction[5-1] + "early, changing to  " + z_wind_direction[7-1] + GG;
				}else if(z_nubes == 5){//O745
					z_output = S + z_wind_direction[5-1] + "early, changing to  " + z_wind_direction[7-1] + GG;
				}
			}else if(z_trend == 5){//O75x
				if(z_nubes == 1){//O751
					z_output = L + z_wind_direction[5-1] + "early, changing to  " + z_wind_direction[7-1] + GG;
				}else if(z_nubes == 2){//O752
					z_output = L + z_wind_direction[5-1] + "early, changing to  " + z_wind_direction[7-1] + GG;
				}else if(z_nubes == 3){//O753
					z_output = P + z_wind_direction[5-1] + "early, changing to  " + z_wind_direction[7-1] + GG;
				}else if(z_nubes == 4){//O754
					z_output = P + z_wind_direction[5-1] + "early, changing to  " + z_wind_direction[7-1] + GG;
				}else if(z_nubes == 5){//O755
					z_output = P + z_wind_direction[5-1] + "early, changing to  " + z_wind_direction[7-1] + GG;
				}
			}//Oin segundo numero
		}else if (z_hpa == 8) {//O8xx
			if(z_trend == 1){//O81x Segundo numero, tendencia de la presion
				if(z_nubes == 1){//O811
					z_output = S + z_wind_direction[5-1] + "early, changing to  " + z_wind_direction[7-1] + WW;
				}else if(z_nubes == 2){//O812
					z_output = S + z_wind_direction[5-1] + "early, changing to  " + z_wind_direction[7-1] + WW;
				}else if(z_nubes == 3){//O813
					z_output = S + z_wind_direction[5-1] + "early, changing to  " + z_wind_direction[7-1] + WW;
				}else if(z_nubes == 4){//O814
					z_output = S + z_wind_direction[5-1] + "early, changing to  " + z_wind_direction[7-1] + WW;
				}else if(z_nubes == 5){//O815
					z_output = S + z_wind_direction[5-1] + "early, changing to  " + z_wind_direction[7-1] + WW;
				}
			}else if(z_trend == 2){//O82x
				if(z_nubes == 1){//O821
					z_output = S + z_wind_direction[5-1] + "early, changing to  " + z_wind_direction[7-1] + WW;
				}else if(z_nubes == 2){//O822
					z_output = S + z_wind_direction[5-1] + "early, changing to  " + z_wind_direction[7-1] + WW;
				}else if(z_nubes == 3){//O823
					z_output = S + z_wind_direction[5-1] + "early, changing to  " + z_wind_direction[7-1] + WW;
				}else if(z_nubes == 4){//O824
					z_output = S + z_wind_direction[5-1] + "early, changing to  " + z_wind_direction[7-1] + WW;
				}else if(z_nubes == 5){//O825
					z_output = S + z_wind_direction[5-1] + "early, changing to  " + z_wind_direction[7-1] + WW;
				}
			}else if(z_trend == 3){//O83x
				if(z_nubes == 1){//O831
					z_output = S + z_wind_direction[5-1] + "early, changing to  " + z_wind_direction[7-1] + WW;
				}else if(z_nubes == 2){//O832
					z_output = S + z_wind_direction[5-1] + "early, changing to  " + z_wind_direction[7-1] + WW;
				}else if(z_nubes == 3){//O833
					z_output = S + z_wind_direction[5-1] + "early, changing to  " + z_wind_direction[7-1] + WW;
				}else if(z_nubes == 4){//O834
					z_output = S + z_wind_direction[5-1] + "early, changing to  " + z_wind_direction[7-1] + WW;
				}else if(z_nubes == 5){//O835
					z_output = S + z_wind_direction[5-1] + "early, changing to  " + z_wind_direction[7-1] + WW;
				}
			}else if(z_trend == 4){//O84x
				if(z_nubes == 1){//O841
					z_output = S + z_wind_direction[5-1] + "early, changing to  " + z_wind_direction[7-1] + WW;
				}else if(z_nubes == 2){//O842
					z_output = S + z_wind_direction[5-1] + "early, changing to  " + z_wind_direction[7-1] + WW;
				}else if(z_nubes == 3){//O843
					z_output = S + z_wind_direction[5-1] + "early, changing to  " + z_wind_direction[7-1] + WW;
				}else if(z_nubes == 4){//O844
					z_output = S + z_wind_direction[5-1] + "early, changing to  " + z_wind_direction[7-1] + WW;
				}else if(z_nubes == 5){//O845
					z_output = S + z_wind_direction[5-1] + "early, changing to  " + z_wind_direction[7-1] + WW;
				}
			}else if(z_trend == 5){//O85x
				if(z_nubes == 1){//O851
					z_output = L + z_wind_direction[5-1] + "early, changing to  " + z_wind_direction[7-1] + WW;
				}else if(z_nubes == 2){//O852
					z_output = L + z_wind_direction[5-1] + "early, changing to  " + z_wind_direction[7-1] + WW;
				}else if(z_nubes == 3){//O853
					z_output = P + z_wind_direction[5-1] + "early, changing to  " + z_wind_direction[7-1] + WW;
				}else if(z_nubes == 4){//O854
					z_output = P + z_wind_direction[5-1] + "early, changing to  " + z_wind_direction[7-1] + WW;
				}else if(z_nubes == 5){//O855
					z_output = P + z_wind_direction[5-1] + "early, changing to  " + z_wind_direction[7-1] + WW;
				}
			}//Oin segundo numero
		}//Oin primer numero
			
	}//Oin letra O
	
	
	////////////////////////////////////////////////////////////////
	
	//LETRA P
	
	if(z_output == "P"){
		if(z_hpa == 1){//P1xx Primer numero, presion atmosferica
			if(z_trend == 1){//P11x Segundo numero, tendencia de la presion
				if(z_nubes == 1){//P111
					z_output = A + z_wind_direction[5-1] + UU;
				}else if(z_nubes == 2){//P112
					z_output = A + z_wind_direction[5-1] + UU;
				}else if(z_nubes == 3){//P113
					z_output = A + z_wind_direction[5-1] + UU;
				}else if(z_nubes == 4){//P114
					z_output = A + z_wind_direction[5-1] + UU;
				}else if(z_nubes == 5){//P115
					z_output = D + z_wind_direction[5-1] + UU;
				}
			}else if(z_trend == 2){//P12x
				if(z_nubes == 1){//P121
					z_output = B + z_wind_direction[5-1] + UU;
				}else if(z_nubes == 2){//P122
					z_output = B + z_wind_direction[5-1] + UU;
				}else if(z_nubes == 3){//P123
					z_output = B + z_wind_direction[5-1] + UU;
				}else if(z_nubes == 4){//P124
					z_output = B + z_wind_direction[5-1] + UU;
				}else if(z_nubes == 5){//P125
					z_output = E + z_wind_direction[5-1] + UU;
				}
			}else if(z_trend == 3){//P13x
				if(z_nubes == 1){//P131
					z_output = B + z_wind_direction[5-1] + UU;
				}else if(z_nubes == 2){//P132
					z_output = B + z_wind_direction[5-1] + UU;
				}else if(z_nubes == 3){//P133
					z_output = B + z_wind_direction[5-1] + UU;
				}else if(z_nubes == 4){//P134
					z_output = E + z_wind_direction[5-1] + UU;
				}else if(z_nubes == 5){//P135
					z_output = K + z_wind_direction[5-1] + UU;
				}
			}else if(z_trend == 4){//14x
				if(z_nubes == 1){//141
					z_output = B + z_wind_direction[5-1] + NN;
				}else if(z_nubes == 2){//P142
					z_output = H + z_wind_direction[5-1] + NN;
				}else if(z_nubes == 3){//P143
					z_output = H + z_wind_direction[5-1] + NN;
				}else if(z_nubes == 4){//P144
					z_output = H + z_wind_direction[5-1] + NN;
				}else if(z_nubes == 5){//P145
					z_output = K + z_wind_direction[5-1] + NN;
				}
			}else if(z_trend == 5){//15x
				if(z_nubes == 1){//151
					z_output = H + z_wind_direction[5-1] + NN;
				}else if(z_nubes == 2){//P152
					z_output = H + z_wind_direction[5-1] + NN;
				}else if(z_nubes == 3){//P153
					z_output = H + z_wind_direction[5-1] + NN;
				}else if(z_nubes == 4){//P154
					z_output = H + z_wind_direction[5-1] + NN;
				}else if(z_nubes == 5){//P155
					z_output = N + z_wind_direction[5-1] + NN;
				}
		
				
			}//Pin segundo numero
		}else if(z_hpa == 2){//P2xx
			if(z_trend == 1){//P21x Segundo numero, tendencia de la presion
				if(z_nubes == 1){//P211
					z_output = A + z_wind_direction[5-1] + UU;
				}else if(z_nubes == 2){//P212
					z_output = A + z_wind_direction[5-1] + UU;
				}else if(z_nubes == 3){//P213
					z_output = A + z_wind_direction[5-1] + UU;
				}else if(z_nubes == 4){//P214
					z_output = A + z_wind_direction[5-1] + UU;
				}else if(z_nubes == 5){//P215
					z_output = D + z_wind_direction[5-1] + UU;
				}
			}else if(z_trend == 2){//P22x
				if(z_nubes == 1){//P221
					z_output = B + z_wind_direction[5-1] + UU;
				}else if(z_nubes == 2){//P222
					z_output = B + z_wind_direction[5-1] + UU;
				}else if(z_nubes == 3){//P223
					z_output = B + z_wind_direction[5-1] + UU;
				}else if(z_nubes == 4){//P224
					z_output = B + z_wind_direction[5-1] + UU;
				}else if(z_nubes == 5){//P225
					z_output = E + z_wind_direction[5-1] + UU;
				}
			}else if(z_trend == 3){//P23x
				if(z_nubes == 1){//P231
					z_output = B + z_wind_direction[5-1] + UU;
				}else if(z_nubes == 2){//P232
					z_output = B + z_wind_direction[5-1] + UU;
				}else if(z_nubes == 3){//P233
					z_output = B + z_wind_direction[5-1] + UU;
				}else if(z_nubes == 4){//P234
					z_output = E + z_wind_direction[5-1] + UU;
				}else if(z_nubes == 5){//P235
					z_output = K + z_wind_direction[5-1] + UU;
				}
			}else if(z_trend == 4){//P24x
				if(z_nubes == 1){//P241
					z_output = E + z_wind_direction[5-1] + NN;
				}else if(z_nubes == 2){//P242
					z_output = H + z_wind_direction[5-1] + NN;
				}else if(z_nubes == 3){//P243
					z_output = H + z_wind_direction[5-1] + NN;
				}else if(z_nubes == 4){//P244
					z_output = H + z_wind_direction[5-1] + NN;
				}else if(z_nubes == 5){//P245
					z_output = K + z_wind_direction[5-1] + NN;
				}
			}else if(z_trend == 5){//P25x
				if(z_nubes == 1){//P251
					z_output = H + z_wind_direction[5-1] + NN;
				}else if(z_nubes == 2){//P252
					z_output = H + z_wind_direction[5-1] + NN;
				}else if(z_nubes == 3){//P253
					z_output = H + z_wind_direction[5-1] + NN;
				}else if(z_nubes == 4){//P254
					z_output = H + z_wind_direction[5-1] + NN;
				}else if(z_nubes == 5){//P255
					z_output = N + z_wind_direction[5-1] + NN;
				}
			}//Pin segundo numero
			
		}else if(z_hpa == 3){//P3xx
			if(z_trend == 1){//P31x Segundo numero, tendencia de la presion
				if(z_nubes == 1){//P311
					z_output = A + z_wind_direction[5-1] + UU;
				}else if(z_nubes == 2){//P312
					z_output = A + z_wind_direction[5-1] + UU;
				}else if(z_nubes == 3){//P313
					z_output = A + z_wind_direction[5-1] + UU;
				}else if(z_nubes == 4){//P314
					z_output = A + z_wind_direction[5-1] + UU;
				}else if(z_nubes == 5){//P315
					z_output = D + z_wind_direction[5-1] + UU;
				}
			}else if(z_trend == 2){//P32x
				if(z_nubes == 1){//P321
					z_output = A + z_wind_direction[5-1] + UU;
				}else if(z_nubes == 2){//P322
					z_output = A + z_wind_direction[5-1] + UU;
				}else if(z_nubes == 3){//P323
					z_output = A + z_wind_direction[5-1] + UU;
				}else if(z_nubes == 4){//P324
					z_output = D + z_wind_direction[5-1] + UU;
				}else if(z_nubes == 5){//P325
					z_output = J + z_wind_direction[5-1] + UU;
				}
			}else if(z_trend == 3){//P33x
				if(z_nubes == 1){//P331
					z_output = B + z_wind_direction[5-1] + UU;
				}else if(z_nubes == 2){//P332
					z_output = B + z_wind_direction[5-1] + UU;
				}else if(z_nubes == 3){//P333
					z_output = B + z_wind_direction[5-1] + UU;
				}else if(z_nubes == 4){//P334
					z_output = E + z_wind_direction[5-1] + UU;
				}else if(z_nubes == 5){//P335
					z_output = K + z_wind_direction[5-1] + UU;
				}
			}else if(z_trend == 4){//P34x
				if(z_nubes == 1){//P341
					z_output = H + z_wind_direction[5-1] + NN;
				}else if(z_nubes == 2){//P342
					z_output = H + z_wind_direction[5-1] + NN;
				}else if(z_nubes == 3){//P343
					z_output = H + z_wind_direction[5-1] + NN;
				}else if(z_nubes == 4){//P344
					z_output = H + z_wind_direction[5-1] + NN;
				}else if(z_nubes == 5){//P345
					z_output = K + z_wind_direction[5-1] + NN;
				}
			}else if(z_trend == 5){//P35x
				if(z_nubes == 1){//P351
					z_output = G + z_wind_direction[5-1] + NN;
				}else if(z_nubes == 2){//P352
					z_output = G + z_wind_direction[5-1] + NN;
				}else if(z_nubes == 3){//P353
					z_output = G + z_wind_direction[5-1] + NN;
				}else if(z_nubes == 4){//P354
					z_output = G + z_wind_direction[5-1] + NN;
				}else if(z_nubes == 5){//P355
					z_output = M + z_wind_direction[5-1] + NN;
				}
			}//Pin segundo numero
		}else if(z_hpa == 4){//P4xx
			if(z_trend == 1){//P41x Segundo numero, tendencia de la presion
				if(z_nubes == 1){//P411
					z_output = A + z_wind_direction[5-1] + FF;
				}else if(z_nubes == 2){//P412
					z_output = A + z_wind_direction[5-1] + FF;
				}else if(z_nubes == 3){//P413
					z_output = A + z_wind_direction[5-1] + FF;
				}else if(z_nubes == 4){//P414
					z_output = D + z_wind_direction[5-1] + FF;
				}else if(z_nubes == 5){//P415
					z_output = J + z_wind_direction[5-1] + FF;
				}
			}else if(z_trend == 2){//P42x
				if(z_nubes == 1){//P421
					z_output = A + z_wind_direction[5-1] + FF;
				}else if(z_nubes == 2){//P422
					z_output = A + z_wind_direction[5-1] + FF;
				}else if(z_nubes == 3){//P423
					z_output = A + z_wind_direction[5-1] + FF;
				}else if(z_nubes == 4){//P424
					z_output = D + z_wind_direction[5-1] + FF;
				}else if(z_nubes == 5){//P425
					z_output = J + z_wind_direction[5-1] + FF;
				}
			}else if(z_trend == 3){//P43x
				if(z_nubes == 1){//P431
					z_output = A + z_wind_direction[5-1] + FF;
				}else if(z_nubes == 2){//P432
					z_output = A + z_wind_direction[5-1] + FF;
				}else if(z_nubes == 3){//P433
					z_output = D + z_wind_direction[5-1] + FF;
				}else if(z_nubes == 4){//P434
					z_output = G + z_wind_direction[5-1] + FF;
				}else if(z_nubes == 5){//P435
					z_output = J + z_wind_direction[5-1] + FF;
				}
			}else if(z_trend == 4){//P44x
				if(z_nubes == 1){//P441
					z_output = G + z_wind_direction[5-1] + NN;
				}else if(z_nubes == 2){//P442
					z_output = G + z_wind_direction[5-1] + NN;
				}else if(z_nubes == 3){//P443
					z_output = G + z_wind_direction[5-1] + NN
				}else if(z_nubes == 4){//P444
					z_output = J + z_wind_direction[5-1] + NN;
				}else if(z_nubes == 5){//P445
					z_output = M + z_wind_direction[5-1] + NN;
				}
			}else if(z_trend == 5){//P45x
				if(z_nubes == 1){//P451
					z_output = G + z_wind_direction[5-1] + NN;
				}else if(z_nubes == 2){//P452
					z_output = G + z_wind_direction[5-1] + NN;
				}else if(z_nubes == 3){//P453
					z_output = G + z_wind_direction[5-1] + NN;
				}else if(z_nubes == 4){//P454
					z_output = M + z_wind_direction[5-1] + NN;
				}else if(z_nubes == 5){//P455
					z_output = M + z_wind_direction[5-1] + NN;
				}
			}//Pin segundo numero
		}else if(z_hpa == 5){//P5xx
			if(z_trend == 1){//P51x Segundo numero, tendencia de la presion
				if(z_nubes == 1){//P511
					z_output = D + z_wind_direction[5-1] + "early, changing to  " + z_wind_direction[6-1] + SS;
				}else if(z_nubes == 2){//P512
					z_output = J + z_wind_direction[5-1] + "early, changing to  " + z_wind_direction[6-1] + SS;
				}else if(z_nubes == 3){//P513
					z_output = J + z_wind_direction[5-1] + "early, changing to  " + z_wind_direction[6-1] + SS;
				}else if(z_nubes == 4){//P514
					z_output = S + z_wind_direction[5-1] + "early, changing to  " + z_wind_direction[6-1] + SS;
				}else if(z_nubes == 5){//P515
					z_output = S + z_wind_direction[5-1] + "early, changing to  " + z_wind_direction[6-1] + SS;
				}
			}else if(z_trend == 2){//P52x
				if(z_nubes == 1){//P521
					z_output = D + z_wind_direction[5-1] + "early, changing to  " + z_wind_direction[6-1] + FF;
				}else if(z_nubes == 2){//P522
					z_output = J + z_wind_direction[5-1] + "early, changing to  " + z_wind_direction[6-1] + FF;
				}else if(z_nubes == 3){//P523
					z_output = J + z_wind_direction[5-1] + "early, changing to  " + z_wind_direction[6-1] + FF;
				}else if(z_nubes == 4){//P524
					z_output = S + z_wind_direction[5-1] + "early, changing to  " + z_wind_direction[6-1] + FF;
				}else if(z_nubes == 5){//P525
					z_output = S + z_wind_direction[5-1] + "early, changing to  " + z_wind_direction[6-1] + FF;
				}
			}else if(z_trend == 3){//P53x
				if(z_nubes == 1){//P531
					z_output = J + z_wind_direction[5-1] + "early, changing to  " + z_wind_direction[6-1] + FF;
				}else if(z_nubes == 2){//P532
					z_output = J + z_wind_direction[5-1] + "early, changing to  " + z_wind_direction[6-1] + FF;
				}else if(z_nubes == 3){//P533
					z_output = J + z_wind_direction[5-1] + "early, changing to  " + z_wind_direction[6-1] + FF;
				}else if(z_nubes == 4){//P534
					z_output = J + z_wind_direction[5-1] + "early, changing to  " + z_wind_direction[6-1] + FF;
				}else if(z_nubes == 5){//P535
					z_output = J + z_wind_direction[5-1] + "early, changing to  " + z_wind_direction[6-1] + FF;
				}
			}else if(z_trend == 4){//P54x
				if(z_nubes == 1){//P541
					z_output = J + z_wind_direction[5-1] + "early, changing to  " + z_wind_direction[6-1] + SS;
				}else if(z_nubes == 2){//P542
					z_output = J + z_wind_direction[5-1] + "early, changing to  " + z_wind_direction[6-1] + SS;
				}else if(z_nubes == 3){//P543
					z_output = J + z_wind_direction[5-1] + "early, changing to  " + z_wind_direction[6-1] + SS;
				}else if(z_nubes == 4){//P544
					z_output = M + z_wind_direction[5-1] + "early, changing to  " + z_wind_direction[6-1] + SS;
				}else if(z_nubes == 5){//P545
					z_output = M + z_wind_direction[5-1] + "early, changing to  " + z_wind_direction[6-1] + SS;
				}
			}else if(z_trend == 5){//P55x
				if(z_nubes == 1){//P551
					z_output = L + z_wind_direction[5-1] + "early, changing to  " + z_wind_direction[6-1] + SS;
				}else if(z_nubes == 2){//P552
					z_output = L + z_wind_direction[5-1] + "early, changing to  " + z_wind_direction[6-1] + SS;
				}else if(z_nubes == 3){//P553
					z_output = P + z_wind_direction[5-1] + "early, changing to  " + z_wind_direction[6-1] + SS;
				}else if(z_nubes == 4){//P554
					z_output = P + z_wind_direction[5-1] + "early, changing to  " + z_wind_direction[6-1] + SS;
				}else if(z_nubes == 5){//P555
					z_output = P + z_wind_direction[5-1] + "early, changing to  " + z_wind_direction[6-1] + SS;
				}
			}//Pin segundo numero
		}else if(z_hpa == 6){//P6xx
			if(z_trend == 1){//P61x Segundo numero, tendencia de la presion
				if(z_nubes == 1){//P611
					z_output = S + z_wind_direction[5-1] + "early, changing to  " + z_wind_direction[7-1] + SS;
				}else if(z_nubes == 2){//P612
					z_output = S + z_wind_direction[5-1] + "early, changing to  " + z_wind_direction[7-1] + SS;
				}else if(z_nubes == 3){//P613
					z_output = S + z_wind_direction[5-1] + "early, changing to  " + z_wind_direction[7-1] + SS;
				}else if(z_nubes == 4){//P614
					z_output = S + z_wind_direction[5-1] + "early, changing to  " + z_wind_direction[7-1] + SS;
				}else if(z_nubes == 5){//P615
					z_output = S + z_wind_direction[5-1] + "early, changing to  " + z_wind_direction[7-1] + SS;
				}
			}else if(z_trend == 2){//P62x
				if(z_nubes == 1){//P621
					z_output = S + z_wind_direction[5-1] + "early, changing to  " + z_wind_direction[7-1] + SS;
				}else if(z_nubes == 2){//P622
					z_output = S + z_wind_direction[5-1] + "early, changing to  " + z_wind_direction[7-1] + SS;
				}else if(z_nubes == 3){//P623
					z_output = S + z_wind_direction[5-1] + "early, changing to  " + z_wind_direction[7-1] + SS;
				}else if(z_nubes == 4){//P624
					z_output = S + z_wind_direction[5-1] + "early, changing to  " + z_wind_direction[7-1] + SS;
				}else if(z_nubes == 5){//P625
					z_output = S + z_wind_direction[5-1] + "early, changing to  " + z_wind_direction[7-1] + SS;
				}
			}else if(z_trend == 3){//P63x
				if(z_nubes == 1){//P631
					z_output = S + z_wind_direction[5-1] + "early, changing to  " + z_wind_direction[7-1] + SS;
				}else if(z_nubes == 2){//P632
					z_output = S + z_wind_direction[5-1] + "early, changing to  " + z_wind_direction[7-1] + SS;
				}else if(z_nubes == 3){//P633
					z_output = S + z_wind_direction[5-1] + "early, changing to  " + z_wind_direction[7-1] + SS;
				}else if(z_nubes == 4){//P634
					z_output = S + z_wind_direction[5-1] + "early, changing to  " + z_wind_direction[7-1] + SS;
				}else if(z_nubes == 5){//P635
					z_output = S + z_wind_direction[5-1] + "early, changing to  " + z_wind_direction[7-1] + SS;
				}
			}else if(z_trend == 4){//P64x
				if(z_nubes == 1){//P641
					z_output = S + z_wind_direction[5-1] + "early, changing to  " + z_wind_direction[7-1] + SS;
				}else if(z_nubes == 2){//P642
					z_output = S + z_wind_direction[5-1] + "early, changing to  " + z_wind_direction[7-1] + SS;
				}else if(z_nubes == 3){//P643
					z_output = S + z_wind_direction[5-1] + "early, changing to  " + z_wind_direction[7-1] + SS;
				}else if(z_nubes == 4){//P644
					z_output = S + z_wind_direction[5-1] + "early, changing to  " + z_wind_direction[7-1] + SS;
				}else if(z_nubes == 5){//P645
					z_output = S + z_wind_direction[5-1] + "early, changing to  " + z_wind_direction[7-1] + SS;
				}
			}else if(z_trend == 5){//P65x
				if(z_nubes == 1){//P651
					z_output = L + z_wind_direction[5-1] + "early, changing to  " + z_wind_direction[7-1] + SS;
				}else if(z_nubes == 2){//P652
					z_output = L + z_wind_direction[5-1] + "early, changing to  " + z_wind_direction[7-1] + SS;
				}else if(z_nubes == 3){//P653
					z_output = P + z_wind_direction[5-1] + "early, changing to  " + z_wind_direction[7-1] + SS;
				}else if(z_nubes == 4){//P654
					z_output = P + z_wind_direction[5-1] + "early, changing to  " + z_wind_direction[7-1] + SS;
				}else if(z_nubes == 5){//P655
					z_output = P + z_wind_direction[5-1] + "early, changing to  " + z_wind_direction[7-1] + SS;
				}
			}//Pin segundo numero
		}else if(z_hpa == 7){//P7xx
			if(z_trend == 1){//P71x Segundo numero, tendencia de la presion
				if(z_nubes == 1){//P711
					z_output = S + z_wind_direction[5-1] + "early, changing to  " + z_wind_direction[7-1] + GG;
				}else if(z_nubes == 2){//P712
					z_output = S + z_wind_direction[5-1] + "early, changing to  " + z_wind_direction[7-1] + GG;
				}else if(z_nubes == 3){//P713
					z_output = S + z_wind_direction[5-1] + "early, changing to  " + z_wind_direction[7-1] + GG;
				}else if(z_nubes == 4){//P714
					z_output = S + z_wind_direction[5-1] + "early, changing to  " + z_wind_direction[7-1] + GG;
				}else if(z_nubes == 5){//P715
					z_output = S + z_wind_direction[5-1] + "early, changing to  " + z_wind_direction[7-1] + GG;
				}
			}else if(z_trend == 2){//P72x
				if(z_nubes == 1){//P721
					z_output = S + z_wind_direction[5-1] + "early, changing to  " + z_wind_direction[7-1] + GG;
				}else if(z_nubes == 2){//P722
					z_output = S + z_wind_direction[5-1] + "early, changing to  " + z_wind_direction[7-1] + GG;
				}else if(z_nubes == 3){//P723
					z_output = S + z_wind_direction[5-1] + "early, changing to  " + z_wind_direction[7-1] + GG;
				}else if(z_nubes == 4){//P724
					z_output = S + z_wind_direction[5-1] + "early, changing to  " + z_wind_direction[7-1] + GG;
				}else if(z_nubes == 5){//P725
					z_output = S + z_wind_direction[5-1] + "early, changing to  " + z_wind_direction[7-1] + GG;
				}
			}else if(z_trend == 3){//P73x
			if(z_nubes == 1){//P731
					z_output = S + z_wind_direction[5-1] + "early, changing to  " + z_wind_direction[7-1] + GG;
				}else if(z_nubes == 2){//P732
					z_output = S + z_wind_direction[5-1] + "early, changing to  " + z_wind_direction[7-1] + GG;
				}else if(z_nubes == 3){//P733
					z_output = S + z_wind_direction[5-1] + "early, changing to  " + z_wind_direction[7-1] + GG;
				}else if(z_nubes == 4){//P734
					z_output = S + z_wind_direction[5-1] + "early, changing to  " + z_wind_direction[7-1] + GG;
				}else if(z_nubes == 5){//P735
					z_output = S + z_wind_direction[5-1] + "early, changing to  " + z_wind_direction[7-1] + GG;
				}
			}else if(z_trend == 4){//P74x
				if(z_nubes == 1){//P741
					z_output = S + z_wind_direction[5-1] + "early, changing to  " + z_wind_direction[7-1] + GG;
				}else if(z_nubes == 2){//P742
					z_output = S + z_wind_direction[5-1] + "early, changing to  " + z_wind_direction[7-1] + GG;
				}else if(z_nubes == 3){//P743
					z_output = S + z_wind_direction[5-1] + "early, changing to  " + z_wind_direction[7-1] + GG;
				}else if(z_nubes == 4){//P744
					z_output = S + z_wind_direction[5-1] + "early, changing to  " + z_wind_direction[7-1] + GG;
				}else if(z_nubes == 5){//P745
					z_output = S + z_wind_direction[5-1] + "early, changing to  " + z_wind_direction[7-1] + GG;
				}
			}else if(z_trend == 5){//P75x
				if(z_nubes == 1){//P751
					z_output = L + z_wind_direction[5-1] + "early, changing to  " + z_wind_direction[7-1] + GG;
				}else if(z_nubes == 2){//P752
					z_output = L + z_wind_direction[5-1] + "early, changing to  " + z_wind_direction[7-1] + GG;
				}else if(z_nubes == 3){//P753
					z_output = P + z_wind_direction[5-1] + "early, changing to  " + z_wind_direction[7-1] + GG;
				}else if(z_nubes == 4){//P754
					z_output = P + z_wind_direction[5-1] + "early, changing to  " + z_wind_direction[7-1] + GG;
				}else if(z_nubes == 5){//P755
					z_output = P + z_wind_direction[5-1] + "early, changing to  " + z_wind_direction[7-1] + GG;
				}
			}//Pin segundo numero
		}else if (z_hpa == 8) {//P8xx
			if(z_trend == 1){//P81x Segundo numero, tendencia de la presion
				if(z_nubes == 1){//P811
					z_output = S + z_wind_direction[5-1] + "early, changing to  " + z_wind_direction[7-1] + WW;
				}else if(z_nubes == 2){//P812
					z_output = S + z_wind_direction[5-1] + "early, changing to  " + z_wind_direction[7-1] + WW;
				}else if(z_nubes == 3){//P813
					z_output = S + z_wind_direction[5-1] + "early, changing to  " + z_wind_direction[7-1] + WW;
				}else if(z_nubes == 4){//P814
					z_output = S + z_wind_direction[5-1] + "early, changing to  " + z_wind_direction[7-1] + WW;
				}else if(z_nubes == 5){//P815
					z_output = S + z_wind_direction[5-1] + "early, changing to  " + z_wind_direction[7-1] + WW;
				}
			}else if(z_trend == 2){//P82x
				if(z_nubes == 1){//P821
					z_output = S + z_wind_direction[5-1] + "early, changing to  " + z_wind_direction[7-1] + WW;
				}else if(z_nubes == 2){//P822
					z_output = S + z_wind_direction[5-1] + "early, changing to  " + z_wind_direction[7-1] + WW;
				}else if(z_nubes == 3){//P823
					z_output = S + z_wind_direction[5-1] + "early, changing to  " + z_wind_direction[7-1] + WW;
				}else if(z_nubes == 4){//P824
					z_output = S + z_wind_direction[5-1] + "early, changing to  " + z_wind_direction[7-1] + WW;
				}else if(z_nubes == 5){//P825
					z_output = S + z_wind_direction[5-1] + "early, changing to  " + z_wind_direction[7-1] + WW;
				}
			}else if(z_trend == 3){//P83x
				if(z_nubes == 1){//P831
					z_output = S + z_wind_direction[5-1] + "early, changing to  " + z_wind_direction[7-1] + WW;
				}else if(z_nubes == 2){//P832
					z_output = S + z_wind_direction[5-1] + "early, changing to  " + z_wind_direction[7-1] + WW;
				}else if(z_nubes == 3){//P833
					z_output = S + z_wind_direction[5-1] + "early, changing to  " + z_wind_direction[7-1] + WW;
				}else if(z_nubes == 4){//P834
					z_output = S + z_wind_direction[5-1] + "early, changing to  " + z_wind_direction[7-1] + WW;
				}else if(z_nubes == 5){//P835
					z_output = S + z_wind_direction[5-1] + "early, changing to  " + z_wind_direction[7-1] + WW;
				}
			}else if(z_trend == 4){//P84x
				if(z_nubes == 1){//P841
					z_output = S + z_wind_direction[5-1] + "early, changing to  " + z_wind_direction[7-1] + WW;
				}else if(z_nubes == 2){//P842
					z_output = S + z_wind_direction[5-1] + "early, changing to  " + z_wind_direction[7-1] + WW;
				}else if(z_nubes == 3){//P843
					z_output = S + z_wind_direction[5-1] + "early, changing to  " + z_wind_direction[7-1] + WW;
				}else if(z_nubes == 4){//P844
					z_output = S + z_wind_direction[5-1] + "early, changing to  " + z_wind_direction[7-1] + WW;
				}else if(z_nubes == 5){//P845
					z_output = S + z_wind_direction[5-1] + "early, changing to  " + z_wind_direction[7-1] + WW;
				}
			}else if(z_trend == 5){//P85x
				if(z_nubes == 1){//P851
					z_output = L + z_wind_direction[5-1] + "early, changing to  " + z_wind_direction[7-1] + WW;
				}else if(z_nubes == 2){//P852
					z_output = L + z_wind_direction[5-1] + "early, changing to  " + z_wind_direction[7-1] + WW;
				}else if(z_nubes == 3){//P853
					z_output = P + z_wind_direction[5-1] + "early, changing to  " + z_wind_direction[7-1] + WW;
				}else if(z_nubes == 4){//P854
					z_output = P + z_wind_direction[5-1] + "early, changing to  " + z_wind_direction[7-1] + WW;
				}else if(z_nubes == 5){//P855
					z_output = P + z_wind_direction[5-1] + "early, changing to  " + z_wind_direction[7-1] + WW;
				}
			}//Pin segundo numero
		}//Pin primer numero
			
	}//Pin letra P
	
	
	//********************   FIN SUR   ****************************
	///////////////////////////////////////////////////////////////
	////////////////////////////////////////////////////////////////
	
	//*******************     INICIO SUROESTE   **************************
	//LETRA Q
	
	if(z_output == "Q"){
		if(z_hpa == 1){//Q1xx Qrimer numero, presion atmosferica
			if(z_trend == 1){//Q11x Segundo numero, tendencia de la presion
				if(z_nubes == 1){//Q111
					z_output = B + z_wind_direction[5-1] + UU;
				}else if(z_nubes == 2){//Q112
					z_output = B + z_wind_direction[5-1] + UU;
				}else if(z_nubes == 3){//Q113
					z_output = B + z_wind_direction[5-1] + UU;
				}else if(z_nubes == 4){//Q114
					z_output = B + z_wind_direction[5-1] + UU;
				}else if(z_nubes == 5){//Q115
					z_output = E + z_wind_direction[5-1] + UU;
				}
			}else if(z_trend == 2){//Q12x
				if(z_nubes == 1){//Q121
					z_output = B + z_wind_direction[5-1] + UU;
				}else if(z_nubes == 2){//Q122
					z_output = B + z_wind_direction[5-1] + UU;
				}else if(z_nubes == 3){//Q123
					z_output = B + z_wind_direction[5-1] + UU;
				}else if(z_nubes == 4){//Q124
					z_output = B + z_wind_direction[5-1] + UU;
				}else if(z_nubes == 5){//Q125
					z_output = E + z_wind_direction[5-1] + UU;
				}
			}else if(z_trend == 3){//Q13x
				if(z_nubes == 1){//Q131
					z_output = B + z_wind_direction[5-1] + UU;
				}else if(z_nubes == 2){//Q132
					z_output = B + z_wind_direction[5-1] + UU;
				}else if(z_nubes == 3){//Q133
					z_output = B + z_wind_direction[5-1] + UU;
				}else if(z_nubes == 4){//Q134
					z_output = B + z_wind_direction[5-1] + UU;
				}else if(z_nubes == 5){//Q135
					z_output = K + z_wind_direction[5-1] + UU;
				}
			}else if(z_trend == 4){//14x
				if(z_nubes == 1){//141
					z_output = B + z_wind_direction[5-1] + NN;
				}else if(z_nubes == 2){//Q142
					z_output = E + z_wind_direction[5-1] + NN;
				}else if(z_nubes == 3){//Q143
					z_output = H + z_wind_direction[5-1] + NN;
				}else if(z_nubes == 4){//Q144
					z_output = H + z_wind_direction[5-1] + NN;
				}else if(z_nubes == 5){//Q145
					z_output = K + z_wind_direction[5-1] + NN;
				}
			}else if(z_trend == 5){//15x
				if(z_nubes == 1){//151
					z_output = E + z_wind_direction[5-1] + NN;
				}else if(z_nubes == 2){//Q152
					z_output = H + z_wind_direction[5-1] + NN;
				}else if(z_nubes == 3){//Q153
					z_output = H + z_wind_direction[5-1] + NN;
				}else if(z_nubes == 4){//Q154
					z_output = H + z_wind_direction[5-1] + NN;
				}else if(z_nubes == 5){//Q155
					z_output = K + z_wind_direction[5-1] + NN;
				}
		
				
			}//Qin segundo numero
		}else if(z_hpa == 2){//Q2xx
			if(z_trend == 1){//Q21x Segundo numero, tendencia de la presion
				if(z_nubes == 1){//Q211
					z_output = A + z_wind_direction[5-1] + UU;
				}else if(z_nubes == 2){//Q212
					z_output = A + z_wind_direction[5-1] + UU;
				}else if(z_nubes == 3){//Q213
					z_output = A + z_wind_direction[5-1] + UU;
				}else if(z_nubes == 4){//Q214
					z_output = A + z_wind_direction[5-1] + UU;
				}else if(z_nubes == 5){//Q215
					z_output = D + z_wind_direction[5-1] + UU;
				}
			}else if(z_trend == 2){//Q22x
				if(z_nubes == 1){//Q221
					z_output = B + z_wind_direction[5-1] + UU;
				}else if(z_nubes == 2){//Q222
					z_output = B + z_wind_direction[5-1] + UU;
				}else if(z_nubes == 3){//Q223
					z_output = B + z_wind_direction[5-1] + UU;
				}else if(z_nubes == 4){//Q224
					z_output = B + z_wind_direction[5-1] + UU;
				}else if(z_nubes == 5){//Q225
					z_output = E + z_wind_direction[5-1] + UU;
				}
			}else if(z_trend == 3){//Q23x
				if(z_nubes == 1){//Q231
					z_output = B + z_wind_direction[5-1] + UU;
				}else if(z_nubes == 2){//Q232
					z_output = B + z_wind_direction[5-1] + UU;
				}else if(z_nubes == 3){//Q233
					z_output = B + z_wind_direction[5-1] + UU;
				}else if(z_nubes == 4){//Q234
					z_output = E + z_wind_direction[5-1] + UU;
				}else if(z_nubes == 5){//Q235
					z_output = K + z_wind_direction[5-1] + UU;
				}
			}else if(z_trend == 4){//Q24x
				if(z_nubes == 1){//Q241
					z_output = B + z_wind_direction[5-1] + NN;
				}else if(z_nubes == 2){//Q242
					z_output = E + z_wind_direction[5-1] + NN;
				}else if(z_nubes == 3){//Q243
					z_output = H + z_wind_direction[5-1] + NN;
				}else if(z_nubes == 4){//Q244
					z_output = H + z_wind_direction[5-1] + NN;
				}else if(z_nubes == 5){//Q245
					z_output = K + z_wind_direction[5-1] + NN;
				}
			}else if(z_trend == 5){//Q25x
				if(z_nubes == 1){//Q251
					z_output = H + z_wind_direction[5-1] + NN;
				}else if(z_nubes == 2){//Q252
					z_output = H + z_wind_direction[5-1] + NN;
				}else if(z_nubes == 3){//Q253
					z_output = H + z_wind_direction[5-1] + NN;
				}else if(z_nubes == 4){//Q254
					z_output = H + z_wind_direction[5-1] + NN;
				}else if(z_nubes == 5){//Q255
					z_output = K + z_wind_direction[5-1] + NN;
				}
			}//Qin segundo numero
			
		}else if(z_hpa == 3){//Q3xx
			if(z_trend == 1){//Q31x Segundo numero, tendencia de la presion
				if(z_nubes == 1){//Q311
					z_output = A + z_wind_direction[5-1] + FF;
				}else if(z_nubes == 2){//Q312
					z_output = A + z_wind_direction[5-1] + FF;
				}else if(z_nubes == 3){//Q313
					z_output = A + z_wind_direction[5-1] + FF;
				}else if(z_nubes == 4){//Q314
					z_output = A + z_wind_direction[5-1] + FF;
				}else if(z_nubes == 5){//Q315
					z_output = D + z_wind_direction[5-1] + FF;
				}
			}else if(z_trend == 2){//Q32x
				if(z_nubes == 1){//Q321
					z_output = A + z_wind_direction[5-1] + UU;
				}else if(z_nubes == 2){//Q322
					z_output = A + z_wind_direction[5-1] + UU;
				}else if(z_nubes == 3){//Q323
					z_output = A + z_wind_direction[5-1] + UU;
				}else if(z_nubes == 4){//Q324
					z_output = D + z_wind_direction[5-1] + UU;
				}else if(z_nubes == 5){//Q325
					z_output = R + z_wind_direction[5-1] + UU;
				}
			}else if(z_trend == 3){//Q33x
				if(z_nubes == 1){//Q331
					z_output = B + z_wind_direction[5-1] + UU;
				}else if(z_nubes == 2){//Q332
					z_output = B + z_wind_direction[5-1] + UU;
				}else if(z_nubes == 3){//Q333
					z_output = B + z_wind_direction[5-1] + UU;
				}else if(z_nubes == 4){//Q334
					z_output = E + z_wind_direction[5-1] + UU;
				}else if(z_nubes == 5){//Q335
					z_output = K + z_wind_direction[5-1] + UU;
				}
			}else if(z_trend == 4){//Q34x
				if(z_nubes == 1){//Q341
					z_output = E + z_wind_direction[5-1] + NN;
				}else if(z_nubes == 2){//Q342
					z_output = H + z_wind_direction[5-1] + NN;
				}else if(z_nubes == 3){//Q343
					z_output = H + z_wind_direction[5-1] + NN;
				}else if(z_nubes == 4){//Q344
					z_output = H + z_wind_direction[5-1] + NN;
				}else if(z_nubes == 5){//Q345
					z_output = K + z_wind_direction[5-1] + NN;
				}
			}else if(z_trend == 5){//Q35x
				if(z_nubes == 1){//Q351
					z_output = H + z_wind_direction[5-1] + NN;
				}else if(z_nubes == 2){//Q352
					z_output = H + z_wind_direction[5-1] + NN;
				}else if(z_nubes == 3){//Q353
					z_output = H + z_wind_direction[5-1] + NN;
				}else if(z_nubes == 4){//Q354
					z_output = H + z_wind_direction[5-1] + NN;
				}else if(z_nubes == 5){//Q355
					z_output = K + z_wind_direction[5-1] + NN;
				}
			}//Qin segundo numero
		}else if(z_hpa == 4){//Q4xx
			if(z_trend == 1){//Q41x Segundo numero, tendencia de la presion
				if(z_nubes == 1){//Q411
					z_output = C + z_wind_direction[6-1] + FF;
				}else if(z_nubes == 2){//Q412
					z_output = C + z_wind_direction[6-1] + FF;
				}else if(z_nubes == 3){//Q413
					z_output = C + z_wind_direction[6-1] + FF;
				}else if(z_nubes == 4){//Q414
					z_output = Y + z_wind_direction[6-1] + FF;
				}else if(z_nubes == 5){//Q415
					z_output = U + z_wind_direction[6-1] + FF;
				}
			}else if(z_trend == 2){//Q42x
				if(z_nubes == 1){//Q421
					z_output = A + z_wind_direction[6-1] + FF;
				}else if(z_nubes == 2){//Q422
					z_output = A + z_wind_direction[6-1] + FF;
				}else if(z_nubes == 3){//Q423
					z_output = A + z_wind_direction[6-1] + FF;
				}else if(z_nubes == 4){//Q424
					z_output = D + z_wind_direction[6-1] + FF;
				}else if(z_nubes == 5){//Q425
					z_output = J + z_wind_direction[6-1] + FF;
				}
			}else if(z_trend == 3){//Q43x
				if(z_nubes == 1){//Q431
					z_output = A + z_wind_direction[6-1] + FF;
				}else if(z_nubes == 2){//Q432
					z_output = A + z_wind_direction[6-1] + FF;
				}else if(z_nubes == 3){//Q433
					z_output = D + z_wind_direction[6-1] + FF;
				}else if(z_nubes == 4){//Q434
					z_output = D + z_wind_direction[6-1] + FF;
				}else if(z_nubes == 5){//Q435
					z_output = J + z_wind_direction[6-1] + FF;
				}
			}else if(z_trend == 4){//Q44x
				if(z_nubes == 1){//Q441
					z_output = G + z_wind_direction[5-1] + NN;
				}else if(z_nubes == 2){//Q442
					z_output = G + z_wind_direction[5-1] + NN;
				}else if(z_nubes == 3){//Q443
					z_output = G + z_wind_direction[5-1] + NN
				}else if(z_nubes == 4){//Q444
					z_output = J + z_wind_direction[5-1] + NN;
				}else if(z_nubes == 5){//Q445
					z_output = J + z_wind_direction[5-1] + NN;
				}
			}else if(z_trend == 5){//Q45x
				if(z_nubes == 1){//Q451
					z_output = G + z_wind_direction[5-1] + NN;
				}else if(z_nubes == 2){//Q452
					z_output = G + z_wind_direction[5-1] + NN;
				}else if(z_nubes == 3){//Q453
					z_output = G + z_wind_direction[5-1] + NN;
				}else if(z_nubes == 4){//Q454
					z_output = J + z_wind_direction[5-1] + NN;
				}else if(z_nubes == 5){//Q455
					z_output = J + z_wind_direction[5-1] + NN;
				}
			}//Qin segundo numero
		}else if(z_hpa == 5){//Q5xx
			if(z_trend == 1){//Q51x Segundo numero, tendencia de la presion
				if(z_nubes == 1){//Q511
					z_output = C + z_wind_direction[6-1] + SS;
				}else if(z_nubes == 2){//Q512
					z_output = C + z_wind_direction[6-1] + SS;
				}else if(z_nubes == 3){//Q513
					z_output = F + z_wind_direction[6-1] + SS;
				}else if(z_nubes == 4){//Q514
					z_output = F + z_wind_direction[6-1] + SS;
				}else if(z_nubes == 5){//Q515
					z_output = S + z_wind_direction[6-1] + SS;
				}
			}else if(z_trend == 2){//Q52x
				if(z_nubes == 1){//Q521
					z_output = F + z_wind_direction[6-1] + FF;
				}else if(z_nubes == 2){//Q522
					z_output = F + z_wind_direction[6-1] + FF;
				}else if(z_nubes == 3){//Q523
					z_output = F + z_wind_direction[6-1] + FF;
				}else if(z_nubes == 4){//Q524
					z_output = F + z_wind_direction[6-1] + FF;
				}else if(z_nubes == 5){//Q525
					z_output = S + z_wind_direction[6-1] + FF;
				}
			}else if(z_trend == 3){//Q53x
				if(z_nubes == 1){//Q531
					z_output = J + z_wind_direction[6-1] + FF;
				}else if(z_nubes == 2){//Q532
					z_output = J + z_wind_direction[6-1] + FF;
				}else if(z_nubes == 3){//Q533
					z_output = J + z_wind_direction[6-1] + FF;
				}else if(z_nubes == 4){//Q534
					z_output = J + z_wind_direction[6-1] + FF;
				}else if(z_nubes == 5){//Q535
					z_output = J + z_wind_direction[6-1] + FF;
				}
			}else if(z_trend == 4){//Q54x
				if(z_nubes == 1){//Q541
					z_output = J + z_wind_direction[6-1] + SS;
				}else if(z_nubes == 2){//Q542
					z_output = J + z_wind_direction[6-1] + SS;
				}else if(z_nubes == 3){//Q543
					z_output = J + z_wind_direction[6-1] + SS;
				}else if(z_nubes == 4){//Q544
					z_output = J + z_wind_direction[6-1] + SS;
				}else if(z_nubes == 5){//Q545
					z_output = J + z_wind_direction[6-1] + SS;
				}
			}else if(z_trend == 5){//Q55x
				if(z_nubes == 1){//Q551
					z_output = J + z_wind_direction[6-1] + SS;
				}else if(z_nubes == 2){//Q552
					z_output = J + z_wind_direction[6-1] + SS;
				}else if(z_nubes == 3){//Q553
					z_output = J + z_wind_direction[6-1] + SS;
				}else if(z_nubes == 4){//Q554
					z_output = J + z_wind_direction[6-1] + SS;
				}else if(z_nubes == 5){//Q555
					z_output = J + z_wind_direction[6-1] + SS;
				}
			}//Qin segundo numero
		}else if(z_hpa == 6){//Q6xx
			if(z_trend == 1){//Q61x Segundo numero, tendencia de la presion
				if(z_nubes == 1){//Q611
					z_output = F + z_wind_direction[6-1] + SS;
				}else if(z_nubes == 2){//Q612
					z_output = F + z_wind_direction[6-1] + SS;
				}else if(z_nubes == 3){//Q613
					z_output = F + z_wind_direction[6-1] + SS;
				}else if(z_nubes == 4){//Q614
					z_output = S + z_wind_direction[6-1] + SS;
				}else if(z_nubes == 5){//Q615
					z_output = S + z_wind_direction[6-1] + SS;
				}
			}else if(z_trend == 2){//Q62x
				if(z_nubes == 1){//Q621
					z_output = F + z_wind_direction[6-1] + SS;
				}else if(z_nubes == 2){//Q622
					z_output = F + z_wind_direction[6-1] + SS;
				}else if(z_nubes == 3){//Q623
					z_output = F + z_wind_direction[6-1] + SS;
				}else if(z_nubes == 4){//Q624
					z_output = S + z_wind_direction[6-1] + SS;
				}else if(z_nubes == 5){//Q625
					z_output = S + z_wind_direction[6-1] + SS;
				}
			}else if(z_trend == 3){//Q63x
				if(z_nubes == 1){//Q631
					z_output = S + z_wind_direction[6-1] + SS;
				}else if(z_nubes == 2){//Q632
					z_output = S + z_wind_direction[6-1] + SS;
				}else if(z_nubes == 3){//Q633
					z_output = S + z_wind_direction[6-1] + SS;
				}else if(z_nubes == 4){//Q634
					z_output = S + z_wind_direction[6-1] + SS;
				}else if(z_nubes == 5){//Q635
					z_output = S + z_wind_direction[6-1] + SS;
				}
			}else if(z_trend == 4){//Q64x
				if(z_nubes == 1){//Q641
					z_output = S + z_wind_direction[6-1] + SS;
				}else if(z_nubes == 2){//Q642
					z_output = S + z_wind_direction[6-1] + SS;
				}else if(z_nubes == 3){//Q643
					z_output = S + z_wind_direction[6-1] + SS;
				}else if(z_nubes == 4){//Q644
					z_output = S + z_wind_direction[6-1] + SS;
				}else if(z_nubes == 5){//Q645
					z_output = S + z_wind_direction[6-1] + SS;
				}
			}else if(z_trend == 5){//Q65x
				if(z_nubes == 1){//Q651
					z_output = S + z_wind_direction[6-1] + SS;
				}else if(z_nubes == 2){//Q652
					z_output = S + z_wind_direction[6-1] + SS;
				}else if(z_nubes == 3){//Q653
					z_output = S + z_wind_direction[6-1] + SS;
				}else if(z_nubes == 4){//Q654
					z_output = S + z_wind_direction[6-1] + SS;
				}else if(z_nubes == 5){//Q655
					z_output = S + z_wind_direction[6-1] + SS;
				}
			}//Qin segundo numero
		}else if(z_hpa == 7){//Q7xx
			if(z_trend == 1){//Q71x Segundo numero, tendencia de la presion
				if(z_nubes == 1){//Q711
					z_output = F + z_wind_direction[6-1] + "early, changing to  " + z_wind_direction[7-1] + GG;
				}else if(z_nubes == 2){//Q712
					z_output = S + z_wind_direction[6-1] + "early, changing to  " + z_wind_direction[7-1] + GG;
				}else if(z_nubes == 3){//Q713
					z_output = S + z_wind_direction[6-1] + "early, changing to  " + z_wind_direction[7-1] + GG;
				}else if(z_nubes == 4){//Q714
					z_output = S + z_wind_direction[6-1] + "early, changing to  " + z_wind_direction[7-1] + GG;
				}else if(z_nubes == 5){//Q715
					z_output = S + z_wind_direction[6-1] + "early, changing to  " + z_wind_direction[7-1] + GG;
				}
			}else if(z_trend == 2){//Q72x
				if(z_nubes == 1){//Q721
					z_output = S + z_wind_direction[6-1] + "early, changing to  " + z_wind_direction[7-1] + GG;
				}else if(z_nubes == 2){//Q722
					z_output = S + z_wind_direction[6-1] + "early, changing to  " + z_wind_direction[7-1] + GG;
				}else if(z_nubes == 3){//Q723
					z_output = S + z_wind_direction[6-1] + "early, changing to  " + z_wind_direction[7-1] + GG;
				}else if(z_nubes == 4){//Q724
					z_output = S + z_wind_direction[6-1] + "early, changing to  " + z_wind_direction[7-1] + GG;
				}else if(z_nubes == 5){//Q725
					z_output = S + z_wind_direction[6-1] + "early, changing to  " + z_wind_direction[7-1] + GG;
				}
			}else if(z_trend == 3){//Q73x
			if(z_nubes == 1){//Q731
					z_output = S + z_wind_direction[6-1] + "early, changing to  " + z_wind_direction[7-1] + GG;
				}else if(z_nubes == 2){//Q732
					z_output = S + z_wind_direction[6-1] + "early, changing to  " + z_wind_direction[7-1] + GG;
				}else if(z_nubes == 3){//Q733
					z_output = S + z_wind_direction[6-1] + "early, changing to  " + z_wind_direction[7-1] + GG;
				}else if(z_nubes == 4){//Q734
					z_output = S + z_wind_direction[6-1] + "early, changing to  " + z_wind_direction[7-1] + GG;
				}else if(z_nubes == 5){//Q735
					z_output = S + z_wind_direction[6-1] + "early, changing to  " + z_wind_direction[7-1] + GG;
				}
			}else if(z_trend == 4){//Q74x
				if(z_nubes == 1){//Q741
					z_output = S + z_wind_direction[6-1] + "early, changing to  " + z_wind_direction[7-1] + GG;
				}else if(z_nubes == 2){//Q742
					z_output = S + z_wind_direction[6-1] + "early, changing to  " + z_wind_direction[7-1] + GG;
				}else if(z_nubes == 3){//Q743
					z_output = S + z_wind_direction[6-1] + "early, changing to  " + z_wind_direction[7-1] + GG;
				}else if(z_nubes == 4){//Q744
					z_output = S + z_wind_direction[6-1] + "early, changing to  " + z_wind_direction[7-1] + GG;
				}else if(z_nubes == 5){//Q745
					z_output = S + z_wind_direction[6-1] + "early, changing to  " + z_wind_direction[7-1] + GG;
				}
			}else if(z_trend == 5){//Q75x
				if(z_nubes == 1){//Q751
					z_output = S + z_wind_direction[6-1] + "early, changing to  " + z_wind_direction[7-1] + GG;
				}else if(z_nubes == 2){//Q752
					z_output = S + z_wind_direction[6-1] + "early, changing to  " + z_wind_direction[7-1] + GG;
				}else if(z_nubes == 3){//Q753
					z_output = S + z_wind_direction[6-1] + "early, changing to  " + z_wind_direction[7-1] + GG;
				}else if(z_nubes == 4){//Q754
					z_output = S + z_wind_direction[6-1] + "early, changing to  " + z_wind_direction[7-1] + GG;
				}else if(z_nubes == 5){//Q755
					z_output = S + z_wind_direction[6-1] + "early, changing to  " + z_wind_direction[7-1] + GG;
				}
			}//Qin segundo numero
		}else if (z_hpa == 8) {//Q8xx
			if(z_trend == 1){//Q81x Segundo numero, tendencia de la presion
				if(z_nubes == 1){//Q811
					z_output = S + z_wind_direction[6-1] + "early, changing to  " + z_wind_direction[7-1] + WW;
				}else if(z_nubes == 2){//Q812
					z_output = S + z_wind_direction[6-1] + "early, changing to  " + z_wind_direction[7-1] + WW;
				}else if(z_nubes == 3){//Q813
					z_output = S + z_wind_direction[6-1] + "early, changing to  " + z_wind_direction[7-1] + WW;
				}else if(z_nubes == 4){//Q814
					z_output = S + z_wind_direction[6-1] + "early, changing to  " + z_wind_direction[7-1] + WW;
				}else if(z_nubes == 5){//Q815
					z_output = S + z_wind_direction[6-1] + "early, changing to  " + z_wind_direction[7-1] + WW;
				}
			}else if(z_trend == 2){//Q82x
				if(z_nubes == 1){//Q821
					z_output = S + z_wind_direction[6-1] + "early, changing to  " + z_wind_direction[7-1] + WW;
				}else if(z_nubes == 2){//Q822
					z_output = S + z_wind_direction[6-1] + "early, changing to  " + z_wind_direction[7-1] + WW;
				}else if(z_nubes == 3){//Q823
					z_output = S + z_wind_direction[6-1] + "early, changing to  " + z_wind_direction[7-1] + WW;
				}else if(z_nubes == 4){//Q824
					z_output = S + z_wind_direction[6-1] + "early, changing to  " + z_wind_direction[7-1] + WW;
				}else if(z_nubes == 5){//Q825
					z_output = S + z_wind_direction[6-1] + "early, changing to  " + z_wind_direction[7-1] + WW;
				}
			}else if(z_trend == 3){//Q83x
				if(z_nubes == 1){//Q831
					z_output = S + z_wind_direction[6-1] + "early, changing to  " + z_wind_direction[7-1] + WW;
				}else if(z_nubes == 2){//Q832
					z_output = S + z_wind_direction[6-1] + "early, changing to  " + z_wind_direction[7-1] + WW;
				}else if(z_nubes == 3){//Q833
					z_output = S + z_wind_direction[6-1] + "early, changing to  " + z_wind_direction[7-1] + WW;
				}else if(z_nubes == 4){//Q834
					z_output = S + z_wind_direction[6-1] + "early, changing to  " + z_wind_direction[7-1] + WW;
				}else if(z_nubes == 5){//Q835
					z_output = S + z_wind_direction[6-1] + "early, changing to  " + z_wind_direction[7-1] + WW;
				}
			}else if(z_trend == 4){//Q84x
				if(z_nubes == 1){//Q841
					z_output = S + z_wind_direction[6-1] + "early, changing to  " + z_wind_direction[7-1] + WW;
				}else if(z_nubes == 2){//Q842
					z_output = S + z_wind_direction[6-1] + "early, changing to  " + z_wind_direction[7-1] + WW;
				}else if(z_nubes == 3){//Q843
					z_output = S + z_wind_direction[6-1] + "early, changing to  " + z_wind_direction[7-1] + WW;
				}else if(z_nubes == 4){//Q844
					z_output = S + z_wind_direction[6-1] + "early, changing to  " + z_wind_direction[7-1] + WW;
				}else if(z_nubes == 5){//Q845
					z_output = S + z_wind_direction[6-1] + "early, changing to  " + z_wind_direction[7-1] + WW;
				}
			}else if(z_trend == 5){//Q85x
				if(z_nubes == 1){//Q851
					z_output = S + z_wind_direction[6-1] + "early, changing to  " + z_wind_direction[7-1] + WW;
				}else if(z_nubes == 2){//Q852
					z_output = S + z_wind_direction[6-1] + "early, changing to  " + z_wind_direction[7-1] + WW;
				}else if(z_nubes == 3){//Q853
					z_output = S + z_wind_direction[6-1] + "early, changing to  " + z_wind_direction[7-1] + WW;
				}else if(z_nubes == 4){//Q854
					z_output = S + z_wind_direction[6-1] + "early, changing to  " + z_wind_direction[7-1] + WW;
				}else if(z_nubes == 5){//Q855
					z_output = S + z_wind_direction[6-1] + "early, changing to  " + z_wind_direction[7-1] + WW;
				}
			}//Qin segundo numero
		}//Qin primer numero
			
	}//Qin letra Q
	
	
	////////////////////////////////////////////////////////////////
	
	//LETRA R
	
	if(z_output == "R"){
		if(z_hpa == 1){//R1xx Rrimer numero, presion atmosferica
			if(z_trend == 1){//R11x Segundo numero, tendencia de la presion
				if(z_nubes == 1){//R111
					z_output = A + z_wind_direction[6-1] + UU;
				}else if(z_nubes == 2){//R112
					z_output = A + z_wind_direction[6-1] + UU;
				}else if(z_nubes == 3){//R113
					z_output = A + z_wind_direction[6-1] + UU;
				}else if(z_nubes == 4){//R114
					z_output = A + z_wind_direction[6-1] + UU;
				}else if(z_nubes == 5){//R115
					z_output = D + z_wind_direction[6-1] + UU;
				}
			}else if(z_trend == 2){//R12x
				if(z_nubes == 1){//R121
					z_output = B + z_wind_direction[6-1] + UU;
				}else if(z_nubes == 2){//R122
					z_output = B + z_wind_direction[6-1] + UU;
				}else if(z_nubes == 3){//R123
					z_output = B + z_wind_direction[6-1] + UU;
				}else if(z_nubes == 4){//R124
					z_output = B + z_wind_direction[6-1] + UU;
				}else if(z_nubes == 5){//R125
					z_output = E + z_wind_direction[6-1] + UU;
				}
			}else if(z_trend == 3){//R13x
				if(z_nubes == 1){//R131
					z_output = B + z_wind_direction[6-1] + UU;
				}else if(z_nubes == 2){//R132
					z_output = B + z_wind_direction[6-1] + UU;
				}else if(z_nubes == 3){//R133
					z_output = B + z_wind_direction[6-1] + UU;
				}else if(z_nubes == 4){//R134
					z_output = B + z_wind_direction[6-1] + UU;
				}else if(z_nubes == 5){//R135
					z_output = E + z_wind_direction[6-1] + UU;
				}
			}else if(z_trend == 4){//14x
				if(z_nubes == 1){//141
					z_output = B + z_wind_direction[5-1] + NN;
				}else if(z_nubes == 2){//R142
					z_output = E + z_wind_direction[5-1] + NN;
				}else if(z_nubes == 3){//R143
					z_output = H + z_wind_direction[5-1] + NN;
				}else if(z_nubes == 4){//R144
					z_output = H + z_wind_direction[5-1] + NN;
				}else if(z_nubes == 5){//R145
					z_output = K + z_wind_direction[5-1] + NN;
				}
			}else if(z_trend == 5){//15x
				if(z_nubes == 1){//151
					z_output = E + z_wind_direction[5-1] + NN;
				}else if(z_nubes == 2){//R152
					z_output = H + z_wind_direction[5-1] + NN;
				}else if(z_nubes == 3){//R153
					z_output = H + z_wind_direction[5-1] + NN;
				}else if(z_nubes == 4){//R154
					z_output = H + z_wind_direction[5-1] + NN;
				}else if(z_nubes == 5){//R155
					z_output = K + z_wind_direction[5-1] + NN;
				}
		
				
			}//Rin segundo numero
		}else if(z_hpa == 2){//R2xx
			if(z_trend == 1){//R21x Segundo numero, tendencia de la presion
				if(z_nubes == 1){//R211
					z_output = A + z_wind_direction[6-1] + UU;
				}else if(z_nubes == 2){//R212
					z_output = A + z_wind_direction[6-1] + UU;
				}else if(z_nubes == 3){//R213
					z_output = A + z_wind_direction[6-1] + UU;
				}else if(z_nubes == 4){//R214
					z_output = A + z_wind_direction[6-1] + UU;
				}else if(z_nubes == 5){//R215
					z_output = D + z_wind_direction[6-1] + UU;
				}
			}else if(z_trend == 2){//R22x
				if(z_nubes == 1){//R221
					z_output = A + z_wind_direction[6-1] + UU;
				}else if(z_nubes == 2){//R222
					z_output = A + z_wind_direction[6-1] + UU;
				}else if(z_nubes == 3){//R223
					z_output = A + z_wind_direction[6-1] + UU;
				}else if(z_nubes == 4){//R224
					z_output = A + z_wind_direction[6-1] + UU;
				}else if(z_nubes == 5){//R225
					z_output = D + z_wind_direction[6-1] + UU;
				}
			}else if(z_trend == 3){//R23x
				if(z_nubes == 1){//R231
					z_output = B + z_wind_direction[6-1] + UU;
				}else if(z_nubes == 2){//R232
					z_output = B + z_wind_direction[6-1] + UU;
				}else if(z_nubes == 3){//R233
					z_output = B + z_wind_direction[6-1] + UU;
				}else if(z_nubes == 4){//R234
					z_output = E + z_wind_direction[6-1] + UU;
				}else if(z_nubes == 5){//R235
					z_output = R + z_wind_direction[6-1] + UU;
				}
			}else if(z_trend == 4){//R24x
				if(z_nubes == 1){//R241
					z_output = B + z_wind_direction[5-1] + NN;
				}else if(z_nubes == 2){//R242
					z_output = E + z_wind_direction[5-1] + NN;
				}else if(z_nubes == 3){//R243
					z_output = H + z_wind_direction[5-1] + NN;
				}else if(z_nubes == 4){//R244
					z_output = H + z_wind_direction[5-1] + NN;
				}else if(z_nubes == 5){//R245
					z_output = K + z_wind_direction[5-1] + NN;
				}
			}else if(z_trend == 5){//R25x
				if(z_nubes == 1){//R251
					z_output = H + z_wind_direction[5-1] + NN;
				}else if(z_nubes == 2){//R252
					z_output = H + z_wind_direction[5-1] + NN;
				}else if(z_nubes == 3){//R253
					z_output = H + z_wind_direction[5-1] + NN;
				}else if(z_nubes == 4){//R254
					z_output = H + z_wind_direction[5-1] + NN;
				}else if(z_nubes == 5){//R255
					z_output = K + z_wind_direction[5-1] + NN;
				}
			}//Rin segundo numero
			
		}else if(z_hpa == 3){//R3xx
			if(z_trend == 1){//R31x Segundo numero, tendencia de la presion
				if(z_nubes == 1){//R311
					z_output = C + z_wind_direction[6-1] + FF;
				}else if(z_nubes == 2){//R312
					z_output = C + z_wind_direction[6-1] + FF;
				}else if(z_nubes == 3){//R313
					z_output = C + z_wind_direction[6-1] + FF;
				}else if(z_nubes == 4){//R314
					z_output = C + z_wind_direction[6-1] + FF;
				}else if(z_nubes == 5){//R315
					z_output = F + z_wind_direction[6-1] + FF;
				}
			}else if(z_trend == 2){//R32x
				if(z_nubes == 1){//R321
					z_output = A + z_wind_direction[6-1] + UU;
				}else if(z_nubes == 2){//R322
					z_output = A + z_wind_direction[6-1] + UU;
				}else if(z_nubes == 3){//R323
					z_output = A + z_wind_direction[6-1] + UU;
				}else if(z_nubes == 4){//R324
					z_output = D + z_wind_direction[6-1] + UU;
				}else if(z_nubes == 5){//R325
					z_output = T + z_wind_direction[6-1] + UU;
				}
			}else if(z_trend == 3){//R33x
				if(z_nubes == 1){//R331
					z_output = B + z_wind_direction[6-1] + UU;
				}else if(z_nubes == 2){//R332
					z_output = B + z_wind_direction[6-1] + UU;
				}else if(z_nubes == 3){//R333
					z_output = B + z_wind_direction[6-1] + UU;
				}else if(z_nubes == 4){//R334
					z_output = X + z_wind_direction[6-1] + UU;
				}else if(z_nubes == 5){//R335
					z_output = R + z_wind_direction[6-1] + UU;
				}
			}else if(z_trend == 4){//R34x
				if(z_nubes == 1){//R341
					z_output = E + z_wind_direction[5-1] + NN;
				}else if(z_nubes == 2){//R342
					z_output = H + z_wind_direction[5-1] + NN;
				}else if(z_nubes == 3){//R343
					z_output = H + z_wind_direction[5-1] + NN;
				}else if(z_nubes == 4){//R344
					z_output = H + z_wind_direction[5-1] + NN;
				}else if(z_nubes == 5){//R345
					z_output = K + z_wind_direction[5-1] + NN;
				}
			}else if(z_trend == 5){//R35x
				if(z_nubes == 1){//R351
					z_output = H + z_wind_direction[5-1] + NN;
				}else if(z_nubes == 2){//R352
					z_output = H + z_wind_direction[5-1] + NN;
				}else if(z_nubes == 3){//R353
					z_output = H + z_wind_direction[5-1] + NN;
				}else if(z_nubes == 4){//R354
					z_output = G + z_wind_direction[5-1] + NN;
				}else if(z_nubes == 5){//R355
					z_output = J + z_wind_direction[5-1] + NN;
				}
			}//Rin segundo numero
		}else if(z_hpa == 4){//R4xx
			if(z_trend == 1){//R41x Segundo numero, tendencia de la presion
				if(z_nubes == 1){//R411
					z_output = C + z_wind_direction[6-1] + FF;
				}else if(z_nubes == 2){//R412
					z_output = C + z_wind_direction[6-1] + FF;
				}else if(z_nubes == 3){//R413
					z_output = C + z_wind_direction[6-1] + FF;
				}else if(z_nubes == 4){//R414
					z_output = Y + z_wind_direction[6-1] + FF;
				}else if(z_nubes == 5){//R415
					z_output = U + z_wind_direction[6-1] + FF;
				}
			}else if(z_trend == 2){//R42x
				if(z_nubes == 1){//R421
					z_output = A + z_wind_direction[6-1] + FF;
				}else if(z_nubes == 2){//R422
					z_output = A + z_wind_direction[6-1] + FF;
				}else if(z_nubes == 3){//R423
					z_output = A + z_wind_direction[6-1] + FF;
				}else if(z_nubes == 4){//R424
					z_output = X + z_wind_direction[6-1] + FF;
				}else if(z_nubes == 5){//R425
					z_output = R + z_wind_direction[6-1] + FF;
				}
			}else if(z_trend == 3){//R43x
				if(z_nubes == 1){//R431
					z_output = A + z_wind_direction[6-1] + FF;
				}else if(z_nubes == 2){//R432
					z_output = A + z_wind_direction[6-1] + FF;
				}else if(z_nubes == 3){//R433
					z_output = X + z_wind_direction[6-1] + FF;
				}else if(z_nubes == 4){//R434
					z_output = D + z_wind_direction[6-1] + FF;
				}else if(z_nubes == 5){//R435
					z_output = R + z_wind_direction[6-1] + FF;
				}
			}else if(z_trend == 4){//R44x
				if(z_nubes == 1){//R441
					z_output = G + z_wind_direction[6-1] + NN;
				}else if(z_nubes == 2){//R442
					z_output = G + z_wind_direction[6-1] + NN;
				}else if(z_nubes == 3){//R443
					z_output = G + z_wind_direction[6-1] + NN
				}else if(z_nubes == 4){//R444
					z_output = J + z_wind_direction[6-1] + NN;
				}else if(z_nubes == 5){//R445
					z_output = J + z_wind_direction[6-1] + NN;
				}
			}else if(z_trend == 5){//R45x
				if(z_nubes == 1){//R451
					z_output = G + z_wind_direction[6-1] + NN;
				}else if(z_nubes == 2){//R452
					z_output = G + z_wind_direction[6-1] + NN;
				}else if(z_nubes == 3){//R453
					z_output = G + z_wind_direction[6-1] + NN;
				}else if(z_nubes == 4){//R454
					z_output = J + z_wind_direction[6-1] + NN;
				}else if(z_nubes == 5){//R455
					z_output = J + z_wind_direction[6-1] + NN;
				}
			}//Rin segundo numero
		}else if(z_hpa == 5){//R5xx
			if(z_trend == 1){//R51x Segundo numero, tendencia de la presion
				if(z_nubes == 1){//R511
					z_output = C + z_wind_direction[6-1] + SS;
				}else if(z_nubes == 2){//R512
					z_output = C + z_wind_direction[6-1] + SS;
				}else if(z_nubes == 3){//R513
					z_output = Y + z_wind_direction[6-1] + SS;
				}else if(z_nubes == 4){//R514
					z_output = F + z_wind_direction[6-1] + SS;
				}else if(z_nubes == 5){//R515
					z_output = U + z_wind_direction[6-1] + SS;
				}
			}else if(z_trend == 2){//R52x
				if(z_nubes == 1){//R521
					z_output = C + z_wind_direction[6-1] + FF;
				}else if(z_nubes == 2){//R522
					z_output = C + z_wind_direction[6-1] + FF;
				}else if(z_nubes == 3){//R523
					z_output = F + z_wind_direction[6-1] + FF;
				}else if(z_nubes == 4){//R524
					z_output = F + z_wind_direction[6-1] + FF;
				}else if(z_nubes == 5){//R525
					z_output = S + z_wind_direction[6-1] + FF;
				}
			}else if(z_trend == 3){//R53x
				if(z_nubes == 1){//R531
					z_output = D + z_wind_direction[6-1] + FF;
				}else if(z_nubes == 2){//R532
					z_output = F + z_wind_direction[6-1] + FF;
				}else if(z_nubes == 3){//R533
					z_output = L + z_wind_direction[6-1] + FF;
				}else if(z_nubes == 4){//R534
					z_output = S + z_wind_direction[6-1] + FF;
				}else if(z_nubes == 5){//R535
					z_output = S + z_wind_direction[6-1] + FF;
				}
			}else if(z_trend == 4){//R54x
				if(z_nubes == 1){//R541
					z_output = J + z_wind_direction[6-1] + SS;
				}else if(z_nubes == 2){//R542
					z_output = L + z_wind_direction[6-1] + SS;
				}else if(z_nubes == 3){//R543
					z_output = L + z_wind_direction[6-1] + SS;
				}else if(z_nubes == 4){//R544
					z_output = S + z_wind_direction[6-1] + SS;
				}else if(z_nubes == 5){//R545
					z_output = S + z_wind_direction[6-1] + SS;
				}
			}else if(z_trend == 5){//R55x
				if(z_nubes == 1){//R551
					z_output = S + z_wind_direction[6-1] + SS;
				}else if(z_nubes == 2){//R552
					z_output = S + z_wind_direction[6-1] + SS;
				}else if(z_nubes == 3){//R553
					z_output = S + z_wind_direction[6-1] + SS;
				}else if(z_nubes == 4){//R554
					z_output = S + z_wind_direction[6-1] + SS;
				}else if(z_nubes == 5){//R555
					z_output = S + z_wind_direction[6-1] + SS;
				}
			}//Rin segundo numero
		}else if(z_hpa == 6){//R6xx
			if(z_trend == 1){//R61x Segundo numero, tendencia de la presion
				if(z_nubes == 1){//R611
					z_output = C + z_wind_direction[6-1] + "early, changing to  " + z_wind_direction[7-1] + SS;
				}else if(z_nubes == 2){//R612
					z_output = F + z_wind_direction[6-1] + "early, changing to  " + z_wind_direction[7-1] + SS;
				}else if(z_nubes == 3){//R613
					z_output = F + z_wind_direction[6-1] + "early, changing to  " + z_wind_direction[7-1] + SS;
				}else if(z_nubes == 4){//R614
					z_output = S + z_wind_direction[6-1] + "early, changing to  " + z_wind_direction[7-1] + SS;
				}else if(z_nubes == 5){//R615
					z_output = S + z_wind_direction[6-1] + "early, changing to  " + z_wind_direction[7-1] + SS;
				}
			}else if(z_trend == 2){//R62x
				if(z_nubes == 1){//R621
					z_output = F + z_wind_direction[6-1] + "early, changing to  " + z_wind_direction[7-1] + SS;
				}else if(z_nubes == 2){//R622
					z_output = F + z_wind_direction[6-1] + "early, changing to  " + z_wind_direction[7-1] + SS;
				}else if(z_nubes == 3){//R623
					z_output = F + z_wind_direction[6-1] + "early, changing to  " + z_wind_direction[7-1] + SS;
				}else if(z_nubes == 4){//R624
					z_output = S + z_wind_direction[6-1] + "early, changing to  " + z_wind_direction[7-1] + SS;
				}else if(z_nubes == 5){//R625
					z_output = S + z_wind_direction[6-1] + "early, changing to  " + z_wind_direction[7-1] + SS;
				}
			}else if(z_trend == 3){//R63x
				if(z_nubes == 1){//R631
					z_output = S + z_wind_direction[6-1] + "early, changing to  " + z_wind_direction[7-1] + SS;
				}else if(z_nubes == 2){//R632
					z_output = S + z_wind_direction[6-1] + "early, changing to  " + z_wind_direction[7-1] + SS;
				}else if(z_nubes == 3){//R633
					z_output = S + z_wind_direction[6-1] + "early, changing to  " + z_wind_direction[7-1] + SS;
				}else if(z_nubes == 4){//R634
					z_output = S + z_wind_direction[6-1] + "early, changing to  " + z_wind_direction[7-1] + SS;
				}else if(z_nubes == 5){//R635
					z_output = S + z_wind_direction[6-1] + "early, changing to  " + z_wind_direction[7-1] + SS;
				}
			}else if(z_trend == 4){//R64x
				if(z_nubes == 1){//R641
					z_output = S + z_wind_direction[6-1] + "early, changing to  " + z_wind_direction[7-1] + SS;
				}else if(z_nubes == 2){//R642
					z_output = S + z_wind_direction[6-1] + "early, changing to  " + z_wind_direction[7-1] + SS;
				}else if(z_nubes == 3){//R643
					z_output = S + z_wind_direction[6-1] + "early, changing to  " + z_wind_direction[7-1] + SS;
				}else if(z_nubes == 4){//R644
					z_output = S + z_wind_direction[6-1] + "early, changing to  " + z_wind_direction[7-1] + SS;
				}else if(z_nubes == 5){//R645
					z_output = S + z_wind_direction[6-1] + "early, changing to  " + z_wind_direction[7-1] + SS;
				}
			}else if(z_trend == 5){//R65x
				if(z_nubes == 1){//R651
					z_output = S + z_wind_direction[6-1] + "early, changing to  " + z_wind_direction[7-1] + SS;
				}else if(z_nubes == 2){//R652
					z_output = S + z_wind_direction[6-1] + "early, changing to  " + z_wind_direction[7-1] + SS;
				}else if(z_nubes == 3){//R653
					z_output = S + z_wind_direction[6-1] + "early, changing to  " + z_wind_direction[7-1] + SS;
				}else if(z_nubes == 4){//R654
					z_output = S + z_wind_direction[6-1] + "early, changing to  " + z_wind_direction[7-1] + SS;
				}else if(z_nubes == 5){//R655
					z_output = S + z_wind_direction[6-1] + "early, changing to  " + z_wind_direction[7-1] + SS;
				}
			}//Rin segundo numero
		}else if(z_hpa == 7){//R7xx
			if(z_trend == 1){//R71x Segundo numero, tendencia de la presion
				if(z_nubes == 1){//R711
					z_output = F + z_wind_direction[6-1] + "early, changing to  " + z_wind_direction[7-1] + GG;
				}else if(z_nubes == 2){//R712
					z_output = F + z_wind_direction[6-1] + "early, changing to  " + z_wind_direction[7-1] + GG;
				}else if(z_nubes == 3){//R713
					z_output = S + z_wind_direction[6-1] + "early, changing to  " + z_wind_direction[7-1] + GG;
				}else if(z_nubes == 4){//R714
					z_output = S + z_wind_direction[6-1] + "early, changing to  " + z_wind_direction[7-1] + GG;
				}else if(z_nubes == 5){//R715
					z_output = S + z_wind_direction[6-1] + "early, changing to  " + z_wind_direction[7-1] + GG;
				}
			}else if(z_trend == 2){//R72x
				if(z_nubes == 1){//R721
					z_output = S + z_wind_direction[6-1] + "early, changing to  " + z_wind_direction[7-1] + GG;
				}else if(z_nubes == 2){//R722
					z_output = S + z_wind_direction[6-1] + "early, changing to  " + z_wind_direction[7-1] + GG;
				}else if(z_nubes == 3){//R723
					z_output = S + z_wind_direction[6-1] + "early, changing to  " + z_wind_direction[7-1] + GG;
				}else if(z_nubes == 4){//R724
					z_output = S + z_wind_direction[6-1] + "early, changing to  " + z_wind_direction[7-1] + GG;
				}else if(z_nubes == 5){//R725
					z_output = S + z_wind_direction[6-1] + "early, changing to  " + z_wind_direction[7-1] + GG;
				}
			}else if(z_trend == 3){//R73x
			if(z_nubes == 1){//R731
					z_output = S + z_wind_direction[6-1] + "early, changing to  " + z_wind_direction[7-1] + GG;
				}else if(z_nubes == 2){//R732
					z_output = S + z_wind_direction[6-1] + "early, changing to  " + z_wind_direction[7-1] + GG;
				}else if(z_nubes == 3){//R733
					z_output = S + z_wind_direction[6-1] + "early, changing to  " + z_wind_direction[7-1] + GG;
				}else if(z_nubes == 4){//R734
					z_output = S + z_wind_direction[6-1] + "early, changing to  " + z_wind_direction[7-1] + GG;
				}else if(z_nubes == 5){//R735
					z_output = S + z_wind_direction[6-1] + "early, changing to  " + z_wind_direction[7-1] + GG;
				}
			}else if(z_trend == 4){//R74x
				if(z_nubes == 1){//R741
					z_output = S + z_wind_direction[6-1] + "early, changing to  " + z_wind_direction[7-1] + GG;
				}else if(z_nubes == 2){//R742
					z_output = S + z_wind_direction[6-1] + "early, changing to  " + z_wind_direction[7-1] + GG;
				}else if(z_nubes == 3){//R743
					z_output = S + z_wind_direction[6-1] + "early, changing to  " + z_wind_direction[7-1] + GG;
				}else if(z_nubes == 4){//R744
					z_output = S + z_wind_direction[6-1] + "early, changing to  " + z_wind_direction[7-1] + GG;
				}else if(z_nubes == 5){//R745
					z_output = S + z_wind_direction[6-1] + "early, changing to  " + z_wind_direction[7-1] + GG;
				}
			}else if(z_trend == 5){//R75x
				if(z_nubes == 1){//R751
					z_output = S + z_wind_direction[6-1] + "early, changing to  " + z_wind_direction[7-1] + GG;
				}else if(z_nubes == 2){//R752
					z_output = S + z_wind_direction[6-1] + "early, changing to  " + z_wind_direction[7-1] + GG;
				}else if(z_nubes == 3){//R753
					z_output = S + z_wind_direction[6-1] + "early, changing to  " + z_wind_direction[7-1] + GG;
				}else if(z_nubes == 4){//R754
					z_output = S + z_wind_direction[6-1] + "early, changing to  " + z_wind_direction[7-1] + GG;
				}else if(z_nubes == 5){//R755
					z_output = S + z_wind_direction[6-1] + "early, changing to  " + z_wind_direction[7-1] + GG;
				}
			}//Rin segundo numero
		}else if (z_hpa == 8) {//R8xx
			if(z_trend == 1){//R81x Segundo numero, tendencia de la presion
				if(z_nubes == 1){//R811
					z_output = S + z_wind_direction[6-1] + "early, changing to  " + z_wind_direction[7-1] + WW;
				}else if(z_nubes == 2){//R812
					z_output = S + z_wind_direction[6-1] + "early, changing to  " + z_wind_direction[7-1] + WW;
				}else if(z_nubes == 3){//R813
					z_output = S + z_wind_direction[6-1] + "early, changing to  " + z_wind_direction[7-1] + WW;
				}else if(z_nubes == 4){//R814
					z_output = S + z_wind_direction[6-1] + "early, changing to  " + z_wind_direction[7-1] + WW;
				}else if(z_nubes == 5){//R815
					z_output = S + z_wind_direction[6-1] + "early, changing to  " + z_wind_direction[7-1] + WW;
				}
			}else if(z_trend == 2){//R82x
				if(z_nubes == 1){//R821
					z_output = S + z_wind_direction[6-1] + "early, changing to  " + z_wind_direction[7-1] + WW;
				}else if(z_nubes == 2){//R822
					z_output = S + z_wind_direction[6-1] + "early, changing to  " + z_wind_direction[7-1] + WW;
				}else if(z_nubes == 3){//R823
					z_output = S + z_wind_direction[6-1] + "early, changing to  " + z_wind_direction[7-1] + WW;
				}else if(z_nubes == 4){//R824
					z_output = S + z_wind_direction[6-1] + "early, changing to  " + z_wind_direction[7-1] + WW;
				}else if(z_nubes == 5){//R825
					z_output = S + z_wind_direction[6-1] + "early, changing to  " + z_wind_direction[7-1] + WW;
				}
			}else if(z_trend == 3){//R83x
				if(z_nubes == 1){//R831
					z_output = S + z_wind_direction[6-1] + "early, changing to  " + z_wind_direction[7-1] + WW;
				}else if(z_nubes == 2){//R832
					z_output = S + z_wind_direction[6-1] + "early, changing to  " + z_wind_direction[7-1] + WW;
				}else if(z_nubes == 3){//R833
					z_output = S + z_wind_direction[6-1] + "early, changing to  " + z_wind_direction[7-1] + WW;
				}else if(z_nubes == 4){//R834
					z_output = S + z_wind_direction[6-1] + "early, changing to  " + z_wind_direction[7-1] + WW;
				}else if(z_nubes == 5){//R835
					z_output = S + z_wind_direction[6-1] + "early, changing to  " + z_wind_direction[7-1] + WW;
				}
			}else if(z_trend == 4){//R84x
				if(z_nubes == 1){//R841
					z_output = S + z_wind_direction[6-1] + "early, changing to  " + z_wind_direction[7-1] + WW;
				}else if(z_nubes == 2){//R842
					z_output = S + z_wind_direction[6-1] + "early, changing to  " + z_wind_direction[7-1] + WW;
				}else if(z_nubes == 3){//R843
					z_output = S + z_wind_direction[6-1] + "early, changing to  " + z_wind_direction[7-1] + WW;
				}else if(z_nubes == 4){//R844
					z_output = S + z_wind_direction[6-1] + "early, changing to  " + z_wind_direction[7-1] + WW;
				}else if(z_nubes == 5){//R845
					z_output = S + z_wind_direction[6-1] + "early, changing to  " + z_wind_direction[7-1] + WW;
				}
			}else if(z_trend == 5){//R85x
				if(z_nubes == 1){//R851
					z_output = S + z_wind_direction[6-1] + "early, changing to  " + z_wind_direction[7-1] + WW;
				}else if(z_nubes == 2){//R852
					z_output = S + z_wind_direction[6-1] + "early, changing to  " + z_wind_direction[7-1] + WW;
				}else if(z_nubes == 3){//R853
					z_output = S + z_wind_direction[6-1] + "early, changing to  " + z_wind_direction[7-1] + WW;
				}else if(z_nubes == 4){//R854
					z_output = S + z_wind_direction[6-1] + "early, changing to  " + z_wind_direction[7-1] + WW;
				}else if(z_nubes == 5){//R855
					z_output = S + z_wind_direction[6-1] + "early, changing to  " + z_wind_direction[7-1] + WW;
				}
			}//Rin segundo numero
		}//Rin primer numero
			
	}//Rin letra R
	
	
	////////////////////////////////////////////////////////////////
	
	//LETRA S
	
	if(z_output == "S"){
		if(z_hpa == 1){//S1xx Srimer numero, presion atmosferica
			if(z_trend == 1){//S11x Segundo numero, tendencia de la presion
				if(z_nubes == 1){//S111
					z_output = A + z_wind_direction[6-1] + UU;
				}else if(z_nubes == 2){//S112
					z_output = A + z_wind_direction[6-1] + UU;
				}else if(z_nubes == 3){//S113
					z_output = A + z_wind_direction[6-1] + UU;
				}else if(z_nubes == 4){//S114
					z_output = A + z_wind_direction[6-1] + UU;
				}else if(z_nubes == 5){//S115
					z_output = D + z_wind_direction[6-1] + UU;
				}
			}else if(z_trend == 2){//S12x
				if(z_nubes == 1){//S121
					z_output = A + z_wind_direction[6-1] + UU;
				}else if(z_nubes == 2){//S122
					z_output = A + z_wind_direction[6-1] + UU;
				}else if(z_nubes == 3){//S123
					z_output = A + z_wind_direction[6-1] + UU;
				}else if(z_nubes == 4){//S124
					z_output = A + z_wind_direction[6-1] + UU;
				}else if(z_nubes == 5){//S125
					z_output = D + z_wind_direction[6-1] + UU;
				}
			}else if(z_trend == 3){//S13x
				if(z_nubes == 1){//S131
					z_output = B + z_wind_direction[6-1] + UU;
				}else if(z_nubes == 2){//S132
					z_output = B + z_wind_direction[6-1] + UU;
				}else if(z_nubes == 3){//S133
					z_output = B + z_wind_direction[6-1] + UU;
				}else if(z_nubes == 4){//S134
					z_output = B + z_wind_direction[6-1] + UU;
				}else if(z_nubes == 5){//S135
					z_output = E + z_wind_direction[6-1] + UU;
				}
			}else if(z_trend == 4){//14x
				if(z_nubes == 1){//141
					z_output = B + z_wind_direction[5-1] + NN;
				}else if(z_nubes == 2){//S142
					z_output = E + z_wind_direction[5-1] + NN;
				}else if(z_nubes == 3){//S143
					z_output = E + z_wind_direction[5-1] + NN;
				}else if(z_nubes == 4){//S144
					z_output = E + z_wind_direction[5-1] + NN;
				}else if(z_nubes == 5){//S145
					z_output = K + z_wind_direction[5-1] + NN;
				}
			}else if(z_trend == 5){//15x
				if(z_nubes == 1){//151
					z_output = E + z_wind_direction[5-1] + NN;
				}else if(z_nubes == 2){//S152
					z_output = H + z_wind_direction[5-1] + NN;
				}else if(z_nubes == 3){//S153
					z_output = H + z_wind_direction[5-1] + NN;
				}else if(z_nubes == 4){//S154
					z_output = H + z_wind_direction[5-1] + NN;
				}else if(z_nubes == 5){//S155
					z_output = K + z_wind_direction[5-1] + NN;
				}
		
				
			}//Sin segundo numero
		}else if(z_hpa == 2){//S2xx
			if(z_trend == 1){//S21x Segundo numero, tendencia de la presion
				if(z_nubes == 1){//S211
					z_output = A + z_wind_direction[6-1] + UU;
				}else if(z_nubes == 2){//S212
					z_output = A + z_wind_direction[6-1] + UU;
				}else if(z_nubes == 3){//S213
					z_output = A + z_wind_direction[6-1] + UU;
				}else if(z_nubes == 4){//S214
					z_output = A + z_wind_direction[6-1] + UU;
				}else if(z_nubes == 5){//S215
					z_output = D + z_wind_direction[6-1] + UU;
				}
			}else if(z_trend == 2){//S22x
				if(z_nubes == 1){//S221
					z_output = A + z_wind_direction[6-1] + UU;
				}else if(z_nubes == 2){//S222
					z_output = A + z_wind_direction[6-1] + UU;
				}else if(z_nubes == 3){//S223
					z_output = A + z_wind_direction[6-1] + UU;
				}else if(z_nubes == 4){//S224
					z_output = A + z_wind_direction[6-1] + UU;
				}else if(z_nubes == 5){//S225
					z_output = D + z_wind_direction[6-1] + UU;
				}
			}else if(z_trend == 3){//S23x
				if(z_nubes == 1){//S231
					z_output = B + z_wind_direction[6-1] + UU;
				}else if(z_nubes == 2){//S232
					z_output = B + z_wind_direction[6-1] + UU;
				}else if(z_nubes == 3){//S233
					z_output = B + z_wind_direction[6-1] + UU;
				}else if(z_nubes == 4){//S234
					z_output = X + z_wind_direction[6-1] + UU;
				}else if(z_nubes == 5){//S235
					z_output = R + z_wind_direction[6-1] + UU;
				}
			}else if(z_trend == 4){//S24x
				if(z_nubes == 1){//S241
					z_output = B + z_wind_direction[5-1] + NN;
				}else if(z_nubes == 2){//S242
					z_output = E + z_wind_direction[5-1] + NN;
				}else if(z_nubes == 3){//S243
					z_output = E + z_wind_direction[5-1] + NN;
				}else if(z_nubes == 4){//S244
					z_output = E + z_wind_direction[5-1] + NN;
				}else if(z_nubes == 5){//S245
					z_output = K + z_wind_direction[5-1] + NN;
				}
			}else if(z_trend == 5){//S25x
				if(z_nubes == 1){//S251
					z_output = H + z_wind_direction[5-1] + NN;
				}else if(z_nubes == 2){//S252
					z_output = H + z_wind_direction[5-1] + NN;
				}else if(z_nubes == 3){//S253
					z_output = H + z_wind_direction[5-1] + NN;
				}else if(z_nubes == 4){//S254
					z_output = H + z_wind_direction[5-1] + NN;
				}else if(z_nubes == 5){//S255
					z_output = K + z_wind_direction[5-1] + NN;
				}
			}//Sin segundo numero
			
		}else if(z_hpa == 3){//S3xx
			if(z_trend == 1){//S31x Segundo numero, tendencia de la presion
				if(z_nubes == 1){//S311
					z_output = C + z_wind_direction[6-1] + FF;
				}else if(z_nubes == 2){//S312
					z_output = C + z_wind_direction[6-1] + FF;
				}else if(z_nubes == 3){//S313
					z_output = C + z_wind_direction[6-1] + FF;
				}else if(z_nubes == 4){//S314
					z_output = C + z_wind_direction[6-1] + FF;
				}else if(z_nubes == 5){//S315
					z_output = F + z_wind_direction[6-1] + FF;
				}
			}else if(z_trend == 2){//S32x
				if(z_nubes == 1){//S321
					z_output = A + z_wind_direction[6-1] + UU;
				}else if(z_nubes == 2){//S322
					z_output = A + z_wind_direction[6-1] + UU;
				}else if(z_nubes == 3){//S323
					z_output = A + z_wind_direction[6-1] + UU;
				}else if(z_nubes == 4){//S324
					z_output = A + z_wind_direction[6-1] + UU;
				}else if(z_nubes == 5){//S325
					z_output = T + z_wind_direction[6-1] + UU;
				}
			}else if(z_trend == 3){//S33x
				if(z_nubes == 1){//S331
					z_output = A + z_wind_direction[6-1] + UU;
				}else if(z_nubes == 2){//S332
					z_output = A + z_wind_direction[6-1] + UU;
				}else if(z_nubes == 3){//S333
					z_output = A + z_wind_direction[6-1] + UU;
				}else if(z_nubes == 4){//S334
					z_output = X + z_wind_direction[6-1] + UU;
				}else if(z_nubes == 5){//S335
					z_output = R + z_wind_direction[6-1] + UU;
				}
			}else if(z_trend == 4){//S34x
				if(z_nubes == 1){//S341
					z_output = E + z_wind_direction[5-1] + NN;
				}else if(z_nubes == 2){//S342
					z_output = E + z_wind_direction[5-1] + NN;
				}else if(z_nubes == 3){//S343
					z_output = G + z_wind_direction[5-1] + NN;
				}else if(z_nubes == 4){//S344
					z_output = G + z_wind_direction[5-1] + NN;
				}else if(z_nubes == 5){//S345
					z_output = J + z_wind_direction[5-1] + NN;
				}
			}else if(z_trend == 5){//S35x
				if(z_nubes == 1){//S351
					z_output = G + z_wind_direction[5-1] + NN;
				}else if(z_nubes == 2){//S352
					z_output = G + z_wind_direction[5-1] + NN;
				}else if(z_nubes == 3){//S353
					z_output = G + z_wind_direction[5-1] + NN;
				}else if(z_nubes == 4){//S354
					z_output = G + z_wind_direction[5-1] + NN;
				}else if(z_nubes == 5){//S355
					z_output = J + z_wind_direction[5-1] + NN;
				}
			}//Sin segundo numero
		}else if(z_hpa == 4){//S4xx
			if(z_trend == 1){//S41x Segundo numero, tendencia de la presion
				if(z_nubes == 1){//S411
					z_output = C + z_wind_direction[6-1] + FF;
				}else if(z_nubes == 2){//S412
					z_output = C + z_wind_direction[6-1] + FF;
				}else if(z_nubes == 3){//S413
					z_output = C + z_wind_direction[6-1] + FF;
				}else if(z_nubes == 4){//S414
					z_output = Y + z_wind_direction[6-1] + FF;
				}else if(z_nubes == 5){//S415
					z_output = U + z_wind_direction[6-1] + FF;
				}
			}else if(z_trend == 2){//S42x
				if(z_nubes == 1){//S421
					z_output = A + z_wind_direction[6-1] + FF;
				}else if(z_nubes == 2){//S422
					z_output = A + z_wind_direction[6-1] + FF;
				}else if(z_nubes == 3){//S423
					z_output = A + z_wind_direction[6-1] + FF;
				}else if(z_nubes == 4){//S424
					z_output = X + z_wind_direction[6-1] + FF;
				}else if(z_nubes == 5){//S425
					z_output = R + z_wind_direction[6-1] + FF;
				}
			}else if(z_trend == 3){//S43x
				if(z_nubes == 1){//S431
					z_output = A + z_wind_direction[6-1] + FF;
				}else if(z_nubes == 2){//S432
					z_output = A + z_wind_direction[6-1] + FF;
				}else if(z_nubes == 3){//S433
					z_output = X + z_wind_direction[6-1] + FF;
				}else if(z_nubes == 4){//S434
					z_output = D + z_wind_direction[6-1] + FF;
				}else if(z_nubes == 5){//S435
					z_output = R + z_wind_direction[6-1] + FF;
				}
			}else if(z_trend == 4){//S44x
				if(z_nubes == 1){//S441
					z_output = G + z_wind_direction[6-1] + NN;
				}else if(z_nubes == 2){//S442
					z_output = G + z_wind_direction[6-1] + NN;
				}else if(z_nubes == 3){//S443
					z_output = G + z_wind_direction[6-1] + NN
				}else if(z_nubes == 4){//S444
					z_output = J + z_wind_direction[6-1] + NN;
				}else if(z_nubes == 5){//S445
					z_output = J + z_wind_direction[6-1] + NN;
				}
			}else if(z_trend == 5){//S45x
				if(z_nubes == 1){//S451
					z_output = G + z_wind_direction[6-1] + NN;
				}else if(z_nubes == 2){//S452
					z_output = G + z_wind_direction[6-1] + NN;
				}else if(z_nubes == 3){//S453
					z_output = G + z_wind_direction[6-1] + NN;
				}else if(z_nubes == 4){//S454
					z_output = J + z_wind_direction[6-1] + NN;
				}else if(z_nubes == 5){//S455
					z_output = J + z_wind_direction[6-1] + NN;
				}
			}//Sin segundo numero
		}else if(z_hpa == 5){//S5xx
			if(z_trend == 1){//S51x Segundo numero, tendencia de la presion
				if(z_nubes == 1){//S511
					z_output = C + z_wind_direction[6-1] + SS;
				}else if(z_nubes == 2){//S512
					z_output = C + z_wind_direction[6-1] + SS;
				}else if(z_nubes == 3){//S513
					z_output = Y + z_wind_direction[6-1] + SS;
				}else if(z_nubes == 4){//S514
					z_output = F + z_wind_direction[6-1] + SS;
				}else if(z_nubes == 5){//S515
					z_output = U + z_wind_direction[6-1] + SS;
				}
			}else if(z_trend == 2){//S52x
				if(z_nubes == 1){//S521
					z_output = C + z_wind_direction[6-1] + FF;
				}else if(z_nubes == 2){//S522
					z_output = C + z_wind_direction[6-1] + FF;
				}else if(z_nubes == 3){//S523
					z_output = F + z_wind_direction[6-1] + FF;
				}else if(z_nubes == 4){//S524
					z_output = F + z_wind_direction[6-1] + FF;
				}else if(z_nubes == 5){//S525
					z_output = S + z_wind_direction[6-1] + FF;
				}
			}else if(z_trend == 3){//S53x
				if(z_nubes == 1){//S531
					z_output = F + z_wind_direction[6-1] + FF;
				}else if(z_nubes == 2){//S532
					z_output = F + z_wind_direction[6-1] + FF;
				}else if(z_nubes == 3){//S533
					z_output = L + z_wind_direction[6-1] + FF;
				}else if(z_nubes == 4){//S534
					z_output = S + z_wind_direction[6-1] + FF;
				}else if(z_nubes == 5){//S535
					z_output = S + z_wind_direction[6-1] + FF;
				}
			}else if(z_trend == 4){//S54x
				if(z_nubes == 1){//S541
					z_output = L + z_wind_direction[6-1] + SS;
				}else if(z_nubes == 2){//S542
					z_output = L + z_wind_direction[6-1] + SS;
				}else if(z_nubes == 3){//S543
					z_output = L + z_wind_direction[6-1] + SS;
				}else if(z_nubes == 4){//S544
					z_output = S + z_wind_direction[6-1] + SS;
				}else if(z_nubes == 5){//S545
					z_output = S + z_wind_direction[6-1] + SS;
				}
			}else if(z_trend == 5){//S55x
				if(z_nubes == 1){//S551
					z_output = S + z_wind_direction[6-1] + SS;
				}else if(z_nubes == 2){//S552
					z_output = S + z_wind_direction[6-1] + SS;
				}else if(z_nubes == 3){//S553
					z_output = S + z_wind_direction[6-1] + SS;
				}else if(z_nubes == 4){//S554
					z_output = S + z_wind_direction[6-1] + SS;
				}else if(z_nubes == 5){//S555
					z_output = S + z_wind_direction[6-1] + SS;
				}
			}//Sin segundo numero
		}else if(z_hpa == 6){//S6xx
			if(z_trend == 1){//S61x Segundo numero, tendencia de la presion
				if(z_nubes == 1){//S611
					z_output = C + z_wind_direction[6-1] + "early, changing to  " + z_wind_direction[7-1] + SS;
				}else if(z_nubes == 2){//S612
					z_output = F + z_wind_direction[6-1] + "early, changing to  " + z_wind_direction[7-1] + SS;
				}else if(z_nubes == 3){//S613
					z_output = F + z_wind_direction[6-1] + "early, changing to  " + z_wind_direction[7-1] + SS;
				}else if(z_nubes == 4){//S614
					z_output = S + z_wind_direction[6-1] + "early, changing to  " + z_wind_direction[7-1] + SS;
				}else if(z_nubes == 5){//S615
					z_output = S + z_wind_direction[6-1] + "early, changing to  " + z_wind_direction[7-1] + SS;
				}
			}else if(z_trend == 2){//S62x
				if(z_nubes == 1){//S621
					z_output = F + z_wind_direction[6-1] + "early, changing to  " + z_wind_direction[7-1] + SS;
				}else if(z_nubes == 2){//S622
					z_output = F + z_wind_direction[6-1] + "early, changing to  " + z_wind_direction[7-1] + SS;
				}else if(z_nubes == 3){//S623
					z_output = F + z_wind_direction[6-1] + "early, changing to  " + z_wind_direction[7-1] + SS;
				}else if(z_nubes == 4){//S624
					z_output = S + z_wind_direction[6-1] + "early, changing to  " + z_wind_direction[7-1] + SS;
				}else if(z_nubes == 5){//S625
					z_output = S + z_wind_direction[6-1] + "early, changing to  " + z_wind_direction[7-1] + SS;
				}
			}else if(z_trend == 3){//S63x
				if(z_nubes == 1){//S631
					z_output = S + z_wind_direction[6-1] + "early, changing to  " + z_wind_direction[7-1] + SS;
				}else if(z_nubes == 2){//S632
					z_output = S + z_wind_direction[6-1] + "early, changing to  " + z_wind_direction[7-1] + SS;
				}else if(z_nubes == 3){//S633
					z_output = S + z_wind_direction[6-1] + "early, changing to  " + z_wind_direction[7-1] + SS;
				}else if(z_nubes == 4){//S634
					z_output = S + z_wind_direction[6-1] + "early, changing to  " + z_wind_direction[7-1] + SS;
				}else if(z_nubes == 5){//S635
					z_output = S + z_wind_direction[6-1] + "early, changing to  " + z_wind_direction[7-1] + SS;
				}
			}else if(z_trend == 4){//S64x
				if(z_nubes == 1){//S641
					z_output = S + z_wind_direction[6-1] + "early, changing to  " + z_wind_direction[7-1] + SS;
				}else if(z_nubes == 2){//S642
					z_output = S + z_wind_direction[6-1] + "early, changing to  " + z_wind_direction[7-1] + SS;
				}else if(z_nubes == 3){//S643
					z_output = S + z_wind_direction[6-1] + "early, changing to  " + z_wind_direction[7-1] + SS;
				}else if(z_nubes == 4){//S644
					z_output = S + z_wind_direction[6-1] + "early, changing to  " + z_wind_direction[7-1] + SS;
				}else if(z_nubes == 5){//S645
					z_output = S + z_wind_direction[6-1] + "early, changing to  " + z_wind_direction[7-1] + SS;
				}
			}else if(z_trend == 5){//S65x
				if(z_nubes == 1){//S651
					z_output = S + z_wind_direction[6-1] + "early, changing to  " + z_wind_direction[7-1] + SS;
				}else if(z_nubes == 2){//S652
					z_output = S + z_wind_direction[6-1] + "early, changing to  " + z_wind_direction[7-1] + SS;
				}else if(z_nubes == 3){//S653
					z_output = S + z_wind_direction[6-1] + "early, changing to  " + z_wind_direction[7-1] + SS;
				}else if(z_nubes == 4){//S654
					z_output = S + z_wind_direction[6-1] + "early, changing to  " + z_wind_direction[7-1] + SS;
				}else if(z_nubes == 5){//S655
					z_output = S + z_wind_direction[6-1] + "early, changing to  " + z_wind_direction[7-1] + SS;
				}
			}//Sin segundo numero
		}else if(z_hpa == 7){//S7xx
			if(z_trend == 1){//S71x Segundo numero, tendencia de la presion
				if(z_nubes == 1){//S711
					z_output = F + z_wind_direction[6-1] + "early, changing to  " + z_wind_direction[7-1] + GG;
				}else if(z_nubes == 2){//S712
					z_output = F + z_wind_direction[6-1] + "early, changing to  " + z_wind_direction[7-1] + GG;
				}else if(z_nubes == 3){//S713
					z_output = S + z_wind_direction[6-1] + "early, changing to  " + z_wind_direction[7-1] + GG;
				}else if(z_nubes == 4){//S714
					z_output = S + z_wind_direction[6-1] + "early, changing to  " + z_wind_direction[7-1] + GG;
				}else if(z_nubes == 5){//S715
					z_output = S + z_wind_direction[6-1] + "early, changing to  " + z_wind_direction[7-1] + GG;
				}
			}else if(z_trend == 2){//S72x
				if(z_nubes == 1){//S721
					z_output = S + z_wind_direction[6-1] + "early, changing to  " + z_wind_direction[7-1] + GG;
				}else if(z_nubes == 2){//S722
					z_output = S + z_wind_direction[6-1] + "early, changing to  " + z_wind_direction[7-1] + GG;
				}else if(z_nubes == 3){//S723
					z_output = S + z_wind_direction[6-1] + "early, changing to  " + z_wind_direction[7-1] + GG;
				}else if(z_nubes == 4){//S724
					z_output = S + z_wind_direction[6-1] + "early, changing to  " + z_wind_direction[7-1] + GG;
				}else if(z_nubes == 5){//S725
					z_output = S + z_wind_direction[6-1] + "early, changing to  " + z_wind_direction[7-1] + GG;
				}
			}else if(z_trend == 3){//S73x
			if(z_nubes == 1){//S731
					z_output = S + z_wind_direction[6-1] + "early, changing to  " + z_wind_direction[7-1] + GG;
				}else if(z_nubes == 2){//S732
					z_output = S + z_wind_direction[6-1] + "early, changing to  " + z_wind_direction[7-1] + GG;
				}else if(z_nubes == 3){//S733
					z_output = S + z_wind_direction[6-1] + "early, changing to  " + z_wind_direction[7-1] + GG;
				}else if(z_nubes == 4){//S734
					z_output = S + z_wind_direction[6-1] + "early, changing to  " + z_wind_direction[7-1] + GG;
				}else if(z_nubes == 5){//S735
					z_output = S + z_wind_direction[6-1] + "early, changing to  " + z_wind_direction[7-1] + GG;
				}
			}else if(z_trend == 4){//S74x
				if(z_nubes == 1){//S741
					z_output = S + z_wind_direction[6-1] + "early, changing to  " + z_wind_direction[7-1] + GG;
				}else if(z_nubes == 2){//S742
					z_output = S + z_wind_direction[6-1] + "early, changing to  " + z_wind_direction[7-1] + GG;
				}else if(z_nubes == 3){//S743
					z_output = S + z_wind_direction[6-1] + "early, changing to  " + z_wind_direction[7-1] + GG;
				}else if(z_nubes == 4){//S744
					z_output = S + z_wind_direction[6-1] + "early, changing to  " + z_wind_direction[7-1] + GG;
				}else if(z_nubes == 5){//S745
					z_output = S + z_wind_direction[6-1] + "early, changing to  " + z_wind_direction[7-1] + GG;
				}
			}else if(z_trend == 5){//S75x
				if(z_nubes == 1){//S751
					z_output = S + z_wind_direction[6-1] + "early, changing to  " + z_wind_direction[7-1] + GG;
				}else if(z_nubes == 2){//S752
					z_output = S + z_wind_direction[6-1] + "early, changing to  " + z_wind_direction[7-1] + GG;
				}else if(z_nubes == 3){//S753
					z_output = S + z_wind_direction[6-1] + "early, changing to  " + z_wind_direction[7-1] + GG;
				}else if(z_nubes == 4){//S754
					z_output = S + z_wind_direction[6-1] + "early, changing to  " + z_wind_direction[7-1] + GG;
				}else if(z_nubes == 5){//S755
					z_output = S + z_wind_direction[6-1] + "early, changing to  " + z_wind_direction[7-1] + GG;
				}
			}//Sin segundo numero
		}else if (z_hpa == 8) {//S8xx
			if(z_trend == 1){//S81x Segundo numero, tendencia de la presion
				if(z_nubes == 1){//S811
					z_output = S + z_wind_direction[6-1] + "early, changing to  " + z_wind_direction[7-1] + WW;
				}else if(z_nubes == 2){//S812
					z_output = S + z_wind_direction[6-1] + "early, changing to  " + z_wind_direction[7-1] + WW;
				}else if(z_nubes == 3){//S813
					z_output = S + z_wind_direction[6-1] + "early, changing to  " + z_wind_direction[7-1] + WW;
				}else if(z_nubes == 4){//S814
					z_output = S + z_wind_direction[6-1] + "early, changing to  " + z_wind_direction[7-1] + WW;
				}else if(z_nubes == 5){//S815
					z_output = S + z_wind_direction[6-1] + "early, changing to  " + z_wind_direction[7-1] + WW;
				}
			}else if(z_trend == 2){//S82x
				if(z_nubes == 1){//S821
					z_output = S + z_wind_direction[6-1] + "early, changing to  " + z_wind_direction[7-1] + WW;
				}else if(z_nubes == 2){//S822
					z_output = S + z_wind_direction[6-1] + "early, changing to  " + z_wind_direction[7-1] + WW;
				}else if(z_nubes == 3){//S823
					z_output = S + z_wind_direction[6-1] + "early, changing to  " + z_wind_direction[7-1] + WW;
				}else if(z_nubes == 4){//S824
					z_output = S + z_wind_direction[6-1] + "early, changing to  " + z_wind_direction[7-1] + WW;
				}else if(z_nubes == 5){//S825
					z_output = S + z_wind_direction[6-1] + "early, changing to  " + z_wind_direction[7-1] + WW;
				}
			}else if(z_trend == 3){//S83x
				if(z_nubes == 1){//S831
					z_output = S + z_wind_direction[6-1] + "early, changing to  " + z_wind_direction[7-1] + WW;
				}else if(z_nubes == 2){//S832
					z_output = S + z_wind_direction[6-1] + "early, changing to  " + z_wind_direction[7-1] + WW;
				}else if(z_nubes == 3){//S833
					z_output = S + z_wind_direction[6-1] + "early, changing to  " + z_wind_direction[7-1] + WW;
				}else if(z_nubes == 4){//S834
					z_output = S + z_wind_direction[6-1] + "early, changing to  " + z_wind_direction[7-1] + WW;
				}else if(z_nubes == 5){//S835
					z_output = S + z_wind_direction[6-1] + "early, changing to  " + z_wind_direction[7-1] + WW;
				}
			}else if(z_trend == 4){//S84x
				if(z_nubes == 1){//S841
					z_output = S + z_wind_direction[6-1] + "early, changing to  " + z_wind_direction[7-1] + WW;
				}else if(z_nubes == 2){//S842
					z_output = S + z_wind_direction[6-1] + "early, changing to  " + z_wind_direction[7-1] + WW;
				}else if(z_nubes == 3){//S843
					z_output = S + z_wind_direction[6-1] + "early, changing to  " + z_wind_direction[7-1] + WW;
				}else if(z_nubes == 4){//S844
					z_output = S + z_wind_direction[6-1] + "early, changing to  " + z_wind_direction[7-1] + WW;
				}else if(z_nubes == 5){//S845
					z_output = S + z_wind_direction[6-1] + "early, changing to  " + z_wind_direction[7-1] + WW;
				}
			}else if(z_trend == 5){//S85x
				if(z_nubes == 1){//S851
					z_output = S + z_wind_direction[6-1] + "early, changing to  " + z_wind_direction[7-1] + WW;
				}else if(z_nubes == 2){//S852
					z_output = S + z_wind_direction[6-1] + "early, changing to  " + z_wind_direction[7-1] + WW;
				}else if(z_nubes == 3){//S853
					z_output = S + z_wind_direction[6-1] + "early, changing to  " + z_wind_direction[7-1] + WW;
				}else if(z_nubes == 4){//S854
					z_output = S + z_wind_direction[6-1] + "early, changing to  " + z_wind_direction[7-1] + WW;
				}else if(z_nubes == 5){//S855
					z_output = S + z_wind_direction[6-1] + "early, changing to  " + z_wind_direction[7-1] + WW;
				}
			}//Sin segundo numero
		}//Sin primer numero
			
	}//Sin letra S
	
	//********************   FIN SUROESTE   ****************************
	///////////////////////////////////////////////////////////////
	////////////////////////////////////////////////////////////////
	
	//*******************     INICIO OESTE   **************************
	//LETRA T
	
	if(z_output == "T"){
		if(z_hpa == 1){//T1xx Trimer numero, presion atmosferica
			if(z_trend == 1){//T11x Tegundo numero, tendencia de la presion
				if(z_nubes == 1){//T111
					z_output = A + z_wind_direction[6-1] + UU;
				}else if(z_nubes == 2){//T112
					z_output = A + z_wind_direction[6-1] + UU;
				}else if(z_nubes == 3){//T113
					z_output = A + z_wind_direction[6-1] + UU;
				}else if(z_nubes == 4){//T114
					z_output = A + z_wind_direction[6-1] + UU;
				}else if(z_nubes == 5){//T115
					z_output = X + z_wind_direction[6-1] + UU;
				}
			}else if(z_trend == 2){//T12x
				if(z_nubes == 1){//T121
					z_output = B + z_wind_direction[6-1] + UU;
				}else if(z_nubes == 2){//T122
					z_output = B + z_wind_direction[6-1] + UU;
				}else if(z_nubes == 3){//T123
					z_output = B + z_wind_direction[6-1] + UU;
				}else if(z_nubes == 4){//T124
					z_output = B + z_wind_direction[6-1] + UU;
				}else if(z_nubes == 5){//T125
					z_output = E + z_wind_direction[6-1] + UU;
				}
			}else if(z_trend == 3){//T13x
				if(z_nubes == 1){//T131
					z_output = B + z_wind_direction[6-1] + UU;
				}else if(z_nubes == 2){//T132
					z_output = B + z_wind_direction[6-1] + UU;
				}else if(z_nubes == 3){//T133
					z_output = B + z_wind_direction[6-1] + UU;
				}else if(z_nubes == 4){//T134
					z_output = B + z_wind_direction[6-1] + UU;
				}else if(z_nubes == 5){//T135
					z_output = E + z_wind_direction[6-1] + UU;
				}
			}else if(z_trend == 4){//14x
				if(z_nubes == 1){//141
					z_output = B + z_wind_direction[6-1] + NN;
				}else if(z_nubes == 2){//T142
					z_output = B + z_wind_direction[6-1] + NN;
				}else if(z_nubes == 3){//T143
					z_output = E + z_wind_direction[6-1] + NN;
				}else if(z_nubes == 4){//T144
					z_output = E + z_wind_direction[6-1] + NN;
				}else if(z_nubes == 5){//T145
					z_output = K + z_wind_direction[6-1] + NN;
				}
			}else if(z_trend == 5){//15x
				if(z_nubes == 1){//151
					z_output = B + z_wind_direction[6-1] + NN;
				}else if(z_nubes == 2){//T152
					z_output = B + z_wind_direction[6-1] + NN;
				}else if(z_nubes == 3){//T153
					z_output = E + z_wind_direction[6-1] + NN;
				}else if(z_nubes == 4){//T154
					z_output = H + z_wind_direction[6-1] + NN;
				}else if(z_nubes == 5){//T155
					z_output = K + z_wind_direction[6-1] + NN;
				}
		
				
			}//Tin segundo numero
		}else if(z_hpa == 2){//T2xx
			if(z_trend == 1){//T21x Tegundo numero, tendencia de la presion
				if(z_nubes == 1){//T211
					z_output = A + z_wind_direction[6-1] + UU;
				}else if(z_nubes == 2){//T212
					z_output = A + z_wind_direction[6-1] + UU;
				}else if(z_nubes == 3){//T213
					z_output = A + z_wind_direction[6-1] + UU;
				}else if(z_nubes == 4){//T214
					z_output = A + z_wind_direction[6-1] + UU;
				}else if(z_nubes == 5){//T215
					z_output = X + z_wind_direction[6-1] + UU;
				}
			}else if(z_trend == 2){//T22x
				if(z_nubes == 1){//T221
					z_output = A + z_wind_direction[6-1] + UU;
				}else if(z_nubes == 2){//T222
					z_output = A + z_wind_direction[6-1] + UU;
				}else if(z_nubes == 3){//T223
					z_output = A + z_wind_direction[6-1] + UU;
				}else if(z_nubes == 4){//T224
					z_output = A + z_wind_direction[6-1] + UU;
				}else if(z_nubes == 5){//T225
					z_output = D + z_wind_direction[6-1] + UU;
				}
			}else if(z_trend == 3){//T23x
				if(z_nubes == 1){//T231
					z_output = B + z_wind_direction[6-1] + UU;
				}else if(z_nubes == 2){//T232
					z_output = B + z_wind_direction[6-1] + UU;
				}else if(z_nubes == 3){//T233
					z_output = B + z_wind_direction[6-1] + UU;
				}else if(z_nubes == 4){//T234
					z_output = B + z_wind_direction[6-1] + UU;
				}else if(z_nubes == 5){//T235
					z_output = E + z_wind_direction[6-1] + UU;
				}
			}else if(z_trend == 4){//T24x
				if(z_nubes == 1){//T241
					z_output = B + z_wind_direction[6-1] + NN;
				}else if(z_nubes == 2){//T242
					z_output = B + z_wind_direction[6-1] + NN;
				}else if(z_nubes == 3){//T243
					z_output = E + z_wind_direction[6-1] + NN;
				}else if(z_nubes == 4){//T244
					z_output = E + z_wind_direction[6-1] + NN;
				}else if(z_nubes == 5){//T245
					z_output = K + z_wind_direction[6-1] + NN;
				}
			}else if(z_trend == 5){//T25x
				if(z_nubes == 1){//T251
					z_output = B + z_wind_direction[6-1] + NN;
				}else if(z_nubes == 2){//T252
					z_output = E + z_wind_direction[6-1] + NN;
				}else if(z_nubes == 3){//T253
					z_output = H + z_wind_direction[6-1] + NN;
				}else if(z_nubes == 4){//T254
					z_output = H + z_wind_direction[6-1] + NN;
				}else if(z_nubes == 5){//T255
					z_output = K + z_wind_direction[6-1] + NN;
				}
			}//Tin segundo numero
			
		}else if(z_hpa == 3){//T3xx
			if(z_trend == 1){//T31x Tegundo numero, tendencia de la presion
				if(z_nubes == 1){//T311
					z_output = A + z_wind_direction[6-1] + FF;
				}else if(z_nubes == 2){//T312
					z_output = A + z_wind_direction[6-1] + FF;
				}else if(z_nubes == 3){//T313
					z_output = A + z_wind_direction[6-1] + FF;
				}else if(z_nubes == 4){//T314
					z_output = A + z_wind_direction[6-1] + FF;
				}else if(z_nubes == 5){//T315
					z_output = X + z_wind_direction[6-1] + FF;
				}
			}else if(z_trend == 2){//T32x
				if(z_nubes == 1){//T321
					z_output = A + z_wind_direction[6-1] + UU;
				}else if(z_nubes == 2){//T322
					z_output = A + z_wind_direction[6-1] + UU;
				}else if(z_nubes == 3){//T323
					z_output = A + z_wind_direction[6-1] + UU;
				}else if(z_nubes == 4){//T324
					z_output = A + z_wind_direction[6-1] + UU;
				}else if(z_nubes == 5){//T325
					z_output = D + z_wind_direction[6-1] + UU;
				}
			}else if(z_trend == 3){//T33x
				if(z_nubes == 1){//T331
					z_output = B + z_wind_direction[6-1] + UU;
				}else if(z_nubes == 2){//T332
					z_output = B + z_wind_direction[6-1] + UU;
				}else if(z_nubes == 3){//T333
					z_output = B + z_wind_direction[6-1] + UU;
				}else if(z_nubes == 4){//T334
					z_output = B + z_wind_direction[6-1] + UU;
				}else if(z_nubes == 5){//T335
					z_output = T + z_wind_direction[6-1] + UU;
				}
			}else if(z_trend == 4){//T34x
				if(z_nubes == 1){//T341
					z_output = B + z_wind_direction[6-1] + UU;
				}else if(z_nubes == 2){//T342
					z_output = B + z_wind_direction[6-1] + UU;
				}else if(z_nubes == 3){//T343
					z_output = E + z_wind_direction[6-1] + UU;
				}else if(z_nubes == 4){//T344
					z_output = E + z_wind_direction[6-1] + UU;
				}else if(z_nubes == 5){//T345
					z_output = K + z_wind_direction[6-1] + UU;
				}
			}else if(z_trend == 5){//T35x
				if(z_nubes == 1){//T351
					z_output = E + z_wind_direction[6-1] + NN;
				}else if(z_nubes == 2){//T352
					z_output = E + z_wind_direction[6-1] + NN;
				}else if(z_nubes == 3){//T353
					z_output = H + z_wind_direction[6-1] + NN;
				}else if(z_nubes == 4){//T354
					z_output = H + z_wind_direction[6-1] + NN;
				}else if(z_nubes == 5){//T355
					z_output = K + z_wind_direction[6-1] + NN;
				}
			}//Tin segundo numero
		}else if(z_hpa == 4){//T4xx
			if(z_trend == 1){//T41x Tegundo numero, tendencia de la presion
				if(z_nubes == 1){//T411
					z_output = C + z_wind_direction[7-1] + FF;
				}else if(z_nubes == 2){//T412
					z_output = C + z_wind_direction[7-1] + FF;
				}else if(z_nubes == 3){//T413
					z_output = C + z_wind_direction[7-1] + FF;
				}else if(z_nubes == 4){//T414
					z_output = C + z_wind_direction[7-1] + FF;
				}else if(z_nubes == 5){//T415
					z_output = W + z_wind_direction[7-1] + FF;
				}
			}else if(z_trend == 2){//T42x
				if(z_nubes == 1){//T421
					z_output = A + z_wind_direction[7-1] + FF;
				}else if(z_nubes == 2){//T422
					z_output = A + z_wind_direction[7-1] + FF;
				}else if(z_nubes == 3){//T423
					z_output = A + z_wind_direction[7-1] + FF;
				}else if(z_nubes == 4){//T424
					z_output = A + z_wind_direction[7-1] + FF;
				}else if(z_nubes == 5){//T425
					z_output = W + z_wind_direction[7-1] + FF;
				}
			}else if(z_trend == 3){//T43x
				if(z_nubes == 1){//T431
					z_output = A + z_wind_direction[6-1] + FF;
				}else if(z_nubes == 2){//T432
					z_output = A + z_wind_direction[6-1] + FF;
				}else if(z_nubes == 3){//T433
					z_output = A + z_wind_direction[6-1] + FF;
				}else if(z_nubes == 4){//T434
					z_output = A + z_wind_direction[6-1] + FF;
				}else if(z_nubes == 5){//T435
					z_output = T + z_wind_direction[6-1] + FF;
				}
			}else if(z_trend == 4){//T44x
				if(z_nubes == 1){//T441
					z_output = A + z_wind_direction[6-1] + FF;
				}else if(z_nubes == 2){//T442
					z_output = D + z_wind_direction[6-1] + FF;
				}else if(z_nubes == 3){//T443
					z_output = G + z_wind_direction[6-1] + FF;
				}else if(z_nubes == 4){//T444
					z_output = J + z_wind_direction[6-1] + FF;
				}else if(z_nubes == 5){//T445
					z_output = J + z_wind_direction[6-1] + FF;
				}
			}else if(z_trend == 5){//T45x
				if(z_nubes == 1){//T451
					z_output = D + z_wind_direction[6-1] + NN;
				}else if(z_nubes == 2){//T452
					z_output = G + z_wind_direction[6-1] + NN;
				}else if(z_nubes == 3){//T453
					z_output = G + z_wind_direction[6-1] + NN;
				}else if(z_nubes == 4){//T454
					z_output = J + z_wind_direction[6-1] + NN;
				}else if(z_nubes == 5){//T455
					z_output = J + z_wind_direction[6-1] + NN;
				}
			}//Tin segundo numero
		}else if(z_hpa == 5){//T5xx
			if(z_trend == 1){//T51x Tegundo numero, tendencia de la presion
				if(z_nubes == 1){//T511
					z_output = C + z_wind_direction[7-1] + SS;
				}else if(z_nubes == 2){//T512
					z_output = C + z_wind_direction[7-1] + SS;
				}else if(z_nubes == 3){//T513
					z_output = C + z_wind_direction[7-1] + SS;
				}else if(z_nubes == 4){//T514
					z_output = C + z_wind_direction[7-1] + SS;
				}else if(z_nubes == 5){//T515
					z_output = W + z_wind_direction[7-1] + SS;
				}
			}else if(z_trend == 2){//T52x
				if(z_nubes == 1){//T521
					z_output = C + z_wind_direction[7-1] + FF;
				}else if(z_nubes == 2){//T522
					z_output = C + z_wind_direction[7-1] + FF;
				}else if(z_nubes == 3){//T523
					z_output = C + z_wind_direction[7-1] + FF;
				}else if(z_nubes == 4){//T524
					z_output = C + z_wind_direction[7-1] + FF;
				}else if(z_nubes == 5){//T525
					z_output = U + z_wind_direction[7-1] + FF;
				}
			}else if(z_trend == 3){//T53x
				if(z_nubes == 1){//T531
					z_output = A + z_wind_direction[7-1] + FF;
				}else if(z_nubes == 2){//T532
					z_output = A + z_wind_direction[7-1] + FF;
				}else if(z_nubes == 3){//T533
					z_output = A + z_wind_direction[7-1] + FF;
				}else if(z_nubes == 4){//T534
					z_output = D + z_wind_direction[7-1] + FF;
				}else if(z_nubes == 5){//T535
					z_output = S + z_wind_direction[7-1] + FF;
				}
			}else if(z_trend == 4){//T54x
				if(z_nubes == 1){//T541
					z_output = D + z_wind_direction[6-1] + FF;
				}else if(z_nubes == 2){//T542
					z_output = D + z_wind_direction[6-1] + FF;
				}else if(z_nubes == 3){//T543
					z_output = J + z_wind_direction[6-1] + FF;
				}else if(z_nubes == 4){//T544
					z_output = R + z_wind_direction[6-1] + FF;
				}else if(z_nubes == 5){//T545
					z_output = R + z_wind_direction[6-1] + FF;
				}
			}else if(z_trend == 5){//T55x
				if(z_nubes == 1){//T551
					z_output = J + z_wind_direction[6-1] + SS;
				}else if(z_nubes == 2){//T552
					z_output = J + z_wind_direction[6-1] + SS;
				}else if(z_nubes == 3){//T553
					z_output = J + z_wind_direction[6-1] + SS;
				}else if(z_nubes == 4){//T554
					z_output = J + z_wind_direction[6-1] + SS;
				}else if(z_nubes == 5){//T555
					z_output = S + z_wind_direction[6-1] + SS;
				}
			}//Tin segundo numero
		}else if(z_hpa == 6){//T6xx
			if(z_trend == 1){//T61x Tegundo numero, tendencia de la presion
				if(z_nubes == 1){//T611
					z_output = C + z_wind_direction[7-1] + SS;
				}else if(z_nubes == 2){//T612
					z_output = C + z_wind_direction[7-1] + SS;
				}else if(z_nubes == 3){//T613
					z_output = C + z_wind_direction[7-1] + SS;
				}else if(z_nubes == 4){//T614
					z_output = C + z_wind_direction[7-1] + SS;
				}else if(z_nubes == 5){//T615
					z_output = U + z_wind_direction[7-1] + SS;
				}
			}else if(z_trend == 2){//T62x
				if(z_nubes == 1){//T621
					z_output = C + z_wind_direction[7-1] + SS;
				}else if(z_nubes == 2){//T622
					z_output = C + z_wind_direction[7-1] + SS;
				}else if(z_nubes == 3){//T623
					z_output = C + z_wind_direction[7-1] + SS;
				}else if(z_nubes == 4){//T624
					z_output = F + z_wind_direction[7-1] + SS;
				}else if(z_nubes == 5){//T625
					z_output = U + z_wind_direction[7-1] + SS;
				}
			}else if(z_trend == 3){//T63x
				if(z_nubes == 1){//T631
					z_output = C + z_wind_direction[7-1] + SS;
				}else if(z_nubes == 2){//T632
					z_output = C + z_wind_direction[7-1] + SS;
				}else if(z_nubes == 3){//T633
					z_output = F + z_wind_direction[7-1] + SS;
				}else if(z_nubes == 4){//T634
					z_output = F + z_wind_direction[7-1] + SS;
				}else if(z_nubes == 5){//T635
					z_output = S + z_wind_direction[7-1] + SS;
				}
			}else if(z_trend == 4){//T64x
				if(z_nubes == 1){//T641
					z_output = F + z_wind_direction[7-1] + SS;
				}else if(z_nubes == 2){//T642
					z_output = L + z_wind_direction[7-1] + SS;
				}else if(z_nubes == 3){//T643
					z_output = S + z_wind_direction[7-1] + SS;
				}else if(z_nubes == 4){//T644
					z_output = S + z_wind_direction[7-1] + SS;
				}else if(z_nubes == 5){//T645
					z_output = S + z_wind_direction[7-1] + SS;
				}
			}else if(z_trend == 5){//T65x
				if(z_nubes == 1){//T651
					z_output = S + z_wind_direction[7-1] + SS;
				}else if(z_nubes == 2){//T652
					z_output = S + z_wind_direction[7-1] + SS;
				}else if(z_nubes == 3){//T653
					z_output = S + z_wind_direction[7-1] + SS;
				}else if(z_nubes == 4){//T654
					z_output = S + z_wind_direction[7-1] + SS;
				}else if(z_nubes == 5){//T655
					z_output = S + z_wind_direction[7-1] + SS;
				}
			}//Tin segundo numero
		}else if(z_hpa == 7){//T7xx
			if(z_trend == 1){//T71x Tegundo numero, tendencia de la presion
				if(z_nubes == 1){//T711
					z_output = C + z_wind_direction[7-1] + GG;
				}else if(z_nubes == 2){//T712
					z_output = C + z_wind_direction[7-1] + GG;
				}else if(z_nubes == 3){//T713
					z_output = Y + z_wind_direction[7-1] + GG;
				}else if(z_nubes == 4){//T714
					z_output = F + z_wind_direction[7-1] + GG;
				}else if(z_nubes == 5){//T715
					z_output = U + z_wind_direction[7-1] + GG;
				}
			}else if(z_trend == 2){//T72x
				if(z_nubes == 1){//T721
					z_output = F + z_wind_direction[7-1] + GG;
				}else if(z_nubes == 2){//T722
					z_output = F + z_wind_direction[7-1] + GG;
				}else if(z_nubes == 3){//T723
					z_output = F + z_wind_direction[7-1] + GG;
				}else if(z_nubes == 4){//T724
					z_output = U + z_wind_direction[7-1] + GG;
				}else if(z_nubes == 5){//T725
					z_output = S + z_wind_direction[7-1] + GG;
				}
			}else if(z_trend == 3){//T73x
			if(z_nubes == 1){//T731
					z_output = F + z_wind_direction[7-1] + GG;
				}else if(z_nubes == 2){//T732
					z_output = F + z_wind_direction[7-1] + GG;
				}else if(z_nubes == 3){//T733
					z_output = S + z_wind_direction[7-1] + GG;
				}else if(z_nubes == 4){//T734
					z_output = S + z_wind_direction[7-1] + GG;
				}else if(z_nubes == 5){//T735
					z_output = S + z_wind_direction[7-1] + GG;
				}
			}else if(z_trend == 4){//T74x
				if(z_nubes == 1){//T741
					z_output = S + z_wind_direction[7-1] + GG;
				}else if(z_nubes == 2){//T742
					z_output = S + z_wind_direction[7-1] + GG;
				}else if(z_nubes == 3){//T743
					z_output = S + z_wind_direction[7-1] + GG;
				}else if(z_nubes == 4){//T744
					z_output = S + z_wind_direction[7-1] + GG;
				}else if(z_nubes == 5){//T745
					z_output = S + z_wind_direction[7-1] + GG;
				}
			}else if(z_trend == 5){//T75x
				if(z_nubes == 1){//T751
					z_output = S + z_wind_direction[7-1] + GG;
				}else if(z_nubes == 2){//T752
					z_output = S + z_wind_direction[7-1] + GG;
				}else if(z_nubes == 3){//T753
					z_output = S + z_wind_direction[7-1] + GG;
				}else if(z_nubes == 4){//T754
					z_output = S + z_wind_direction[7-1] + GG;
				}else if(z_nubes == 5){//T755
					z_output = S + z_wind_direction[7-1] + GG;
				}
			}//Tin segundo numero
		}else if (z_hpa == 8) {//T8xx
			if(z_trend == 1){//T81x Tegundo numero, tendencia de la presion
				if(z_nubes == 1){//T811
					z_output = F + z_wind_direction[7-1] + WW;
				}else if(z_nubes == 2){//T812
					z_output = F + z_wind_direction[7-1] + WW;
				}else if(z_nubes == 3){//T813
					z_output = F + z_wind_direction[7-1] + WW;
				}else if(z_nubes == 4){//T814
					z_output = S + z_wind_direction[7-1] + WW;
				}else if(z_nubes == 5){//T815
					z_output = S + z_wind_direction[7-1] + WW;
				}
			}else if(z_trend == 2){//T82x
				if(z_nubes == 1){//T821
					z_output = S + z_wind_direction[7-1] + WW;
				}else if(z_nubes == 2){//T822
					z_output = S + z_wind_direction[7-1] + WW;
				}else if(z_nubes == 3){//T823
					z_output = S + z_wind_direction[7-1] + WW;
				}else if(z_nubes == 4){//T824
					z_output = S + z_wind_direction[7-1] + WW;
				}else if(z_nubes == 5){//T825
					z_output = S + z_wind_direction[7-1] + WW;
				}
			}else if(z_trend == 3){//T83x
				if(z_nubes == 1){//T831
					z_output = S + z_wind_direction[7-1] + WW;
				}else if(z_nubes == 2){//T832
					z_output = S + z_wind_direction[7-1] + WW;
				}else if(z_nubes == 3){//T833
					z_output = S + z_wind_direction[7-1] + WW;
				}else if(z_nubes == 4){//T834
					z_output = S + z_wind_direction[7-1] + WW;
				}else if(z_nubes == 5){//T835
					z_output = S + z_wind_direction[7-1] + WW;
				}
			}else if(z_trend == 4){//T84x
				if(z_nubes == 1){//T841
					z_output = S + z_wind_direction[7-1] + WW;
				}else if(z_nubes == 2){//T842
					z_output = S + z_wind_direction[7-1] + WW;
				}else if(z_nubes == 3){//T843
					z_output = S + z_wind_direction[7-1] + WW;
				}else if(z_nubes == 4){//T844
					z_output = S + z_wind_direction[7-1] + WW;
				}else if(z_nubes == 5){//T845
					z_output = S + z_wind_direction[7-1] + WW;
				}
			}else if(z_trend == 5){//T85x
				if(z_nubes == 1){//T851
					z_output = S + z_wind_direction[7-1] + WW;
				}else if(z_nubes == 2){//T852
					z_output = S + z_wind_direction[7-1] + WW;
				}else if(z_nubes == 3){//T853
					z_output = S + z_wind_direction[7-1] + WW;
				}else if(z_nubes == 4){//T854
					z_output = S + z_wind_direction[7-1] + WW;
				}else if(z_nubes == 5){//T855
					z_output = S + z_wind_direction[7-1] + WW;
				}
			}//Tin segundo numero
		}//Tin primer numero
			
	}//Tin letra T
	
	
	////////////////////////////////////////////////////////////////
	
	//LETRA U
	
	
	if(z_output == "U"){
		if(z_hpa == 1){//U1xx Urimer numero, presion atmosferica
			if(z_trend == 1){//U11x Uegundo numero, tendencia de la presion
				if(z_nubes == 1){//U111
					z_output = A + z_wind_direction[7-1] + DD;
				}else if(z_nubes == 2){//U112
					z_output = A + z_wind_direction[7-1] + DD;
				}else if(z_nubes == 3){//U113
					z_output = A + z_wind_direction[7-1] + DD;
				}else if(z_nubes == 4){//U114
					z_output = A + z_wind_direction[7-1] + DD;
				}else if(z_nubes == 5){//U115
					z_output = X + z_wind_direction[7-1] + DD;
				}
			}else if(z_trend == 2){//U12x
				if(z_nubes == 1){//U121
					z_output = B + z_wind_direction[7-1] + DD;
				}else if(z_nubes == 2){//U122
					z_output = B + z_wind_direction[7-1] + DD;
				}else if(z_nubes == 3){//U123
					z_output = B + z_wind_direction[7-1] + DD;
				}else if(z_nubes == 4){//U124
					z_output = B + z_wind_direction[7-1] + DD;
				}else if(z_nubes == 5){//U125
					z_output = X + z_wind_direction[7-1] + DD;
				}
			}else if(z_trend == 3){//U13x
				if(z_nubes == 1){//U131
					z_output = B + z_wind_direction[6-1] + DD;
				}else if(z_nubes == 2){//U132
					z_output = B + z_wind_direction[6-1] + DD;
				}else if(z_nubes == 3){//U133
					z_output = B + z_wind_direction[6-1] + DD;
				}else if(z_nubes == 4){//U134
					z_output = B + z_wind_direction[6-1] + DD;
				}else if(z_nubes == 5){//U135
					z_output = E + z_wind_direction[6-1] + DD;
				}
			}else if(z_trend == 4){//14x
				if(z_nubes == 1){//141
					z_output = B + z_wind_direction[6-1] + NN;
				}else if(z_nubes == 2){//U142
					z_output = B + z_wind_direction[6-1] + UU;
				}else if(z_nubes == 3){//U143
					z_output = E + z_wind_direction[6-1] + UU;
				}else if(z_nubes == 4){//U144
					z_output = E + z_wind_direction[6-1] + UU;
				}else if(z_nubes == 5){//U145
					z_output = K + z_wind_direction[6-1] + UU;
				}
			}else if(z_trend == 5){//15x
				if(z_nubes == 1){//151
					z_output = B + z_wind_direction[6-1] + NN;
				}else if(z_nubes == 2){//U152
					z_output = B + z_wind_direction[6-1] + NN;
				}else if(z_nubes == 3){//U153
					z_output = E + z_wind_direction[6-1] + NN;
				}else if(z_nubes == 4){//U154
					z_output = H + z_wind_direction[6-1] + NN;
				}else if(z_nubes == 5){//U155
					z_output = K + z_wind_direction[6-1] + NN;
				}
		
				
			}//Uin segundo numero
		}else if(z_hpa == 2){//U2xx
			if(z_trend == 1){//U21x Uegundo numero, tendencia de la presion
				if(z_nubes == 1){//U211
					z_output = A + z_wind_direction[7-1] + UU;
				}else if(z_nubes == 2){//U212
					z_output = A + z_wind_direction[7-1] + UU;
				}else if(z_nubes == 3){//U213
					z_output = A + z_wind_direction[7-1] + UU;
				}else if(z_nubes == 4){//U214
					z_output = A + z_wind_direction[7-1] + UU;
				}else if(z_nubes == 5){//U215
					z_output = X + z_wind_direction[7-1] + UU;
				}
			}else if(z_trend == 2){//U22x
				if(z_nubes == 1){//U221
					z_output = A + z_wind_direction[7-1] + DD;
				}else if(z_nubes == 2){//U222
					z_output = A + z_wind_direction[7-1] + DD;
				}else if(z_nubes == 3){//U223
					z_output = A + z_wind_direction[7-1] + DD;
				}else if(z_nubes == 4){//U224
					z_output = A + z_wind_direction[7-1] + DD;
				}else if(z_nubes == 5){//U225
					z_output = X + z_wind_direction[7-1] + DD;
				}
			}else if(z_trend == 3){//U23x
				if(z_nubes == 1){//U231
					z_output = A + z_wind_direction[6-1] + DD;
				}else if(z_nubes == 2){//U232
					z_output = A + z_wind_direction[6-1] + DD;
				}else if(z_nubes == 3){//U233
					z_output = A + z_wind_direction[6-1] + DD;
				}else if(z_nubes == 4){//U234
					z_output = A + z_wind_direction[6-1] + DD;
				}else if(z_nubes == 5){//U235
					z_output = S + z_wind_direction[6-1] + DD;
				}
			}else if(z_trend == 4){//U24x
				if(z_nubes == 1){//U241
					z_output = B + z_wind_direction[6-1] + UU;
				}else if(z_nubes == 2){//U242
					z_output = B + z_wind_direction[6-1] + UU;
				}else if(z_nubes == 3){//U243
					z_output = E + z_wind_direction[6-1] + UU;
				}else if(z_nubes == 4){//U244
					z_output = E + z_wind_direction[6-1] + UU;
				}else if(z_nubes == 5){//U245
					z_output = K + z_wind_direction[6-1] + UU;
				}
			}else if(z_trend == 5){//U25x
				if(z_nubes == 1){//U251
					z_output = B + z_wind_direction[6-1] + NN;
				}else if(z_nubes == 2){//U252
					z_output = E + z_wind_direction[6-1] + NN;
				}else if(z_nubes == 3){//U253
					z_output = H + z_wind_direction[6-1] + NN;
				}else if(z_nubes == 4){//U254
					z_output = H + z_wind_direction[6-1] + NN;
				}else if(z_nubes == 5){//U255
					z_output = K + z_wind_direction[6-1] + NN;
				}
			}//Uin segundo numero
			
		}else if(z_hpa == 3){//U3xx
			if(z_trend == 1){//U31x Uegundo numero, tendencia de la presion
				if(z_nubes == 1){//U311
					z_output = C + z_wind_direction[7-1] + FF;
				}else if(z_nubes == 2){//U312
					z_output = C + z_wind_direction[7-1] + FF;
				}else if(z_nubes == 3){//U313
					z_output = C + z_wind_direction[7-1] + FF;
				}else if(z_nubes == 4){//U314
					z_output = C + z_wind_direction[7-1] + FF;
				}else if(z_nubes == 5){//U315
					z_output = X + z_wind_direction[7-1] + FF;
				}
			}else if(z_trend == 2){//U32x
				if(z_nubes == 1){//U321
					z_output = A + z_wind_direction[7-1] + UU;
				}else if(z_nubes == 2){//U322
					z_output = A + z_wind_direction[7-1] + UU;
				}else if(z_nubes == 3){//U323
					z_output = A + z_wind_direction[7-1] + UU;
				}else if(z_nubes == 4){//U324
					z_output = A + z_wind_direction[7-1] + UU;
				}else if(z_nubes == 5){//U325
					z_output = X + z_wind_direction[7-1] + UU;
				}
			}else if(z_trend == 3){//U33x
				if(z_nubes == 1){//U331
					z_output = A + z_wind_direction[6-1] + UU;
				}else if(z_nubes == 2){//U332
					z_output = A + z_wind_direction[6-1] + UU;
				}else if(z_nubes == 3){//U333
					z_output = A + z_wind_direction[6-1] + UU;
				}else if(z_nubes == 4){//U334
					z_output = A + z_wind_direction[6-1] + UU;
				}else if(z_nubes == 5){//U335
					z_output = T + z_wind_direction[6-1] + UU;
				}
			}else if(z_trend == 4){//U34x
				if(z_nubes == 1){//U341
					z_output = B + z_wind_direction[6-1] + UU;
				}else if(z_nubes == 2){//U342
					z_output = B + z_wind_direction[6-1] + UU;
				}else if(z_nubes == 3){//U343
					z_output = E + z_wind_direction[6-1] + UU;
				}else if(z_nubes == 4){//U344
					z_output = D + z_wind_direction[6-1] + UU;
				}else if(z_nubes == 5){//U345
					z_output = J + z_wind_direction[6-1] + UU;
				}
			}else if(z_trend == 5){//U35x
				if(z_nubes == 1){//U351
					z_output = E + z_wind_direction[6-1] + NN;
				}else if(z_nubes == 2){//U352
					z_output = E + z_wind_direction[6-1] + NN;
				}else if(z_nubes == 3){//U353
					z_output = H + z_wind_direction[6-1] + NN;
				}else if(z_nubes == 4){//U354
					z_output = H + z_wind_direction[6-1] + NN;
				}else if(z_nubes == 5){//U355
					z_output = J + z_wind_direction[6-1] + NN;
				}
			}//Uin segundo numero
		}else if(z_hpa == 4){//U4xx
			if(z_trend == 1){//U41x Uegundo numero, tendencia de la presion
				if(z_nubes == 1){//U411
					z_output = C + z_wind_direction[7-1] + FF;
				}else if(z_nubes == 2){//U412
					z_output = C + z_wind_direction[7-1] + FF;
				}else if(z_nubes == 3){//U413
					z_output = C + z_wind_direction[7-1] + FF;
				}else if(z_nubes == 4){//U414
					z_output = C + z_wind_direction[7-1] + FF;
				}else if(z_nubes == 5){//U415
					z_output = W + z_wind_direction[7-1] + FF;
				}
			}else if(z_trend == 2){//U42x
				if(z_nubes == 1){//U421
					z_output = C + z_wind_direction[7-1] + FF;
				}else if(z_nubes == 2){//U422
					z_output = C + z_wind_direction[7-1] + FF;
				}else if(z_nubes == 3){//U423
					z_output = C + z_wind_direction[7-1] + FF;
				}else if(z_nubes == 4){//U424
					z_output = C + z_wind_direction[7-1] + FF;
				}else if(z_nubes == 5){//U425
					z_output = W + z_wind_direction[7-1] + FF;
				}
			}else if(z_trend == 3){//U43x
				if(z_nubes == 1){//U431
					z_output = A + z_wind_direction[7-1] + UU;
				}else if(z_nubes == 2){//U432
					z_output = A + z_wind_direction[7-1] + UU;
				}else if(z_nubes == 3){//U433
					z_output = A + z_wind_direction[7-1] + FF;
				}else if(z_nubes == 4){//U434
					z_output = A + z_wind_direction[7-1] + FF;
				}else if(z_nubes == 5){//U435
					z_output = T + z_wind_direction[7-1] + FF;
				}
			}else if(z_trend == 4){//U44x
				if(z_nubes == 1){//U441
					z_output = A + z_wind_direction[6-1] + FF;
				}else if(z_nubes == 2){//U442
					z_output = D + z_wind_direction[6-1] + FF;
				}else if(z_nubes == 3){//U443
					z_output = G + z_wind_direction[6-1] + FF;
				}else if(z_nubes == 4){//U444
					z_output = J + z_wind_direction[6-1] + FF;
				}else if(z_nubes == 5){//U445
					z_output = J + z_wind_direction[6-1] + FF;
				}
			}else if(z_trend == 5){//U45x
				if(z_nubes == 1){//U451
					z_output = D + z_wind_direction[6-1] + NN;
				}else if(z_nubes == 2){//U452
					z_output = G + z_wind_direction[6-1] + NN;
				}else if(z_nubes == 3){//U453
					z_output = G + z_wind_direction[6-1] + NN;
				}else if(z_nubes == 4){//U454
					z_output = J + z_wind_direction[6-1] + NN;
				}else if(z_nubes == 5){//U455
					z_output = J + z_wind_direction[6-1] + NN;
				}
			}//Uin segundo numero
		}else if(z_hpa == 5){//U5xx
			if(z_trend == 1){//U51x Uegundo numero, tendencia de la presion
				if(z_nubes == 1){//U511
					z_output = C + z_wind_direction[7-1] + SS;
				}else if(z_nubes == 2){//U512
					z_output = C + z_wind_direction[7-1] + SS;
				}else if(z_nubes == 3){//U513
					z_output = C + z_wind_direction[7-1] + SS;
				}else if(z_nubes == 4){//U514
					z_output = C + z_wind_direction[7-1] + SS;
				}else if(z_nubes == 5){//U515
					z_output = W + z_wind_direction[7-1] + SS;
				}
			}else if(z_trend == 2){//U52x
				if(z_nubes == 1){//U521
					z_output = C + z_wind_direction[7-1] + FF;
				}else if(z_nubes == 2){//U522
					z_output = C + z_wind_direction[7-1] + FF;
				}else if(z_nubes == 3){//U523
					z_output = C + z_wind_direction[7-1] + FF;
				}else if(z_nubes == 4){//U524
					z_output = C + z_wind_direction[7-1] + FF;
				}else if(z_nubes == 5){//U525
					z_output = U + z_wind_direction[7-1] + FF;
				}
			}else if(z_trend == 3){//U53x
				if(z_nubes == 1){//U531
					z_output = A + z_wind_direction[7-1] + FF;
				}else if(z_nubes == 2){//U532
					z_output = C + z_wind_direction[7-1] + FF;
				}else if(z_nubes == 3){//U533
					z_output = C + z_wind_direction[7-1] + FF;
				}else if(z_nubes == 4){//U534
					z_output = Y + z_wind_direction[7-1] + FF;
				}else if(z_nubes == 5){//U535
					z_output = U + z_wind_direction[7-1] + FF;
				}
			}else if(z_trend == 4){//U54x
				if(z_nubes == 1){//U541
					z_output = D + z_wind_direction[7-1] + FF;
				}else if(z_nubes == 2){//U542
					z_output = D + z_wind_direction[7-1] + FF;
				}else if(z_nubes == 3){//U543
					z_output = J + z_wind_direction[7-1] + FF;
				}else if(z_nubes == 4){//U544
					z_output = S + z_wind_direction[7-1] + FF;
				}else if(z_nubes == 5){//U545
					z_output = S + z_wind_direction[7-1] + FF;
				}
			}else if(z_trend == 5){//U55x
				if(z_nubes == 1){//U551
					z_output = L + z_wind_direction[7-1] + SS;
				}else if(z_nubes == 2){//U552
					z_output = S + z_wind_direction[7-1] + SS;
				}else if(z_nubes == 3){//U553
					z_output = S + z_wind_direction[7-1] + SS;
				}else if(z_nubes == 4){//U554
					z_output = S + z_wind_direction[7-1] + SS;
				}else if(z_nubes == 5){//U555
					z_output = S + z_wind_direction[7-1] + SS;
				}
			}//Uin segundo numero
		}else if(z_hpa == 6){//U6xx
			if(z_trend == 1){//U61x Uegundo numero, tendencia de la presion
				if(z_nubes == 1){//U611
					z_output = C + z_wind_direction[7-1] + SS;
				}else if(z_nubes == 2){//U612
					z_output = C + z_wind_direction[7-1] + SS;
				}else if(z_nubes == 3){//U613
					z_output = C + z_wind_direction[7-1] + SS;
				}else if(z_nubes == 4){//U614
					z_output = C + z_wind_direction[7-1] + SS;
				}else if(z_nubes == 5){//U615
					z_output = U + z_wind_direction[7-1] + SS;
				}
			}else if(z_trend == 2){//U62x
				if(z_nubes == 1){//U621
					z_output = C + z_wind_direction[7-1] + SS;
				}else if(z_nubes == 2){//U622
					z_output = C + z_wind_direction[7-1] + SS;
				}else if(z_nubes == 3){//U623
					z_output = C + z_wind_direction[7-1] + SS;
				}else if(z_nubes == 4){//U624
					z_output = F + z_wind_direction[7-1] + SS;
				}else if(z_nubes == 5){//U625
					z_output = U + z_wind_direction[7-1] + SS;
				}
			}else if(z_trend == 3){//U63x
				if(z_nubes == 1){//U631
					z_output = C + z_wind_direction[7-1] + SS;
				}else if(z_nubes == 2){//U632
					z_output = C + z_wind_direction[7-1] + SS;
				}else if(z_nubes == 3){//U633
					z_output = F + z_wind_direction[7-1] + SS;
				}else if(z_nubes == 4){//U634
					z_output = F + z_wind_direction[7-1] + SS;
				}else if(z_nubes == 5){//U635
					z_output = S + z_wind_direction[7-1] + SS;
				}
			}else if(z_trend == 4){//U64x
				if(z_nubes == 1){//U641
					z_output = F + z_wind_direction[7-1] + SS;
				}else if(z_nubes == 2){//U642
					z_output = L + z_wind_direction[7-1] + SS;
				}else if(z_nubes == 3){//U643
					z_output = S + z_wind_direction[7-1] + SS;
				}else if(z_nubes == 4){//U644
					z_output = S + z_wind_direction[7-1] + SS;
				}else if(z_nubes == 5){//U645
					z_output = S + z_wind_direction[7-1] + SS;
				}
			}else if(z_trend == 5){//U65x
				if(z_nubes == 1){//U651
					z_output = S + z_wind_direction[7-1] + SS;
				}else if(z_nubes == 2){//U652
					z_output = S + z_wind_direction[7-1] + SS;
				}else if(z_nubes == 3){//U653
					z_output = S + z_wind_direction[7-1] + SS;
				}else if(z_nubes == 4){//U654
					z_output = S + z_wind_direction[7-1] + SS;
				}else if(z_nubes == 5){//U655
					z_output = S + z_wind_direction[7-1] + SS;
				}
			}//Uin segundo numero
		}else if(z_hpa == 7){//U7xx
			if(z_trend == 1){//U71x Uegundo numero, tendencia de la presion
				if(z_nubes == 1){//U711
					z_output = C + z_wind_direction[7-1] + GG;
				}else if(z_nubes == 2){//U712
					z_output = C + z_wind_direction[7-1] + GG;
				}else if(z_nubes == 3){//U713
					z_output = Y + z_wind_direction[7-1] + GG;
				}else if(z_nubes == 4){//U714
					z_output = F + z_wind_direction[7-1] + GG;
				}else if(z_nubes == 5){//U715
					z_output = U + z_wind_direction[7-1] + GG;
				}
			}else if(z_trend == 2){//U72x
				if(z_nubes == 1){//U721
					z_output = F + z_wind_direction[7-1] + GG;
				}else if(z_nubes == 2){//U722
					z_output = F + z_wind_direction[7-1] + GG;
				}else if(z_nubes == 3){//U723
					z_output = F + z_wind_direction[7-1] + GG;
				}else if(z_nubes == 4){//U724
					z_output = U + z_wind_direction[7-1] + GG;
				}else if(z_nubes == 5){//U725
					z_output = U + z_wind_direction[7-1] + GG;
				}
			}else if(z_trend == 3){//U73x
			if(z_nubes == 1){//U731
					z_output = F + z_wind_direction[7-1] + GG;
				}else if(z_nubes == 2){//U732
					z_output = F + z_wind_direction[7-1] + GG;
				}else if(z_nubes == 3){//U733
					z_output = S + z_wind_direction[7-1] + GG;
				}else if(z_nubes == 4){//U734
					z_output = S + z_wind_direction[7-1] + GG;
				}else if(z_nubes == 5){//U735
					z_output = S + z_wind_direction[7-1] + GG;
				}
			}else if(z_trend == 4){//U74x
				if(z_nubes == 1){//U741
					z_output = S + z_wind_direction[7-1] + GG;
				}else if(z_nubes == 2){//U742
					z_output = S + z_wind_direction[7-1] + GG;
				}else if(z_nubes == 3){//U743
					z_output = S + z_wind_direction[7-1] + GG;
				}else if(z_nubes == 4){//U744
					z_output = S + z_wind_direction[7-1] + GG;
				}else if(z_nubes == 5){//U745
					z_output = S + z_wind_direction[7-1] + GG;
				}
			}else if(z_trend == 5){//U75x
				if(z_nubes == 1){//U751
					z_output = S + z_wind_direction[7-1] + GG;
				}else if(z_nubes == 2){//U752
					z_output = S + z_wind_direction[7-1] + GG;
				}else if(z_nubes == 3){//U753
					z_output = S + z_wind_direction[7-1] + GG;
				}else if(z_nubes == 4){//U754
					z_output = S + z_wind_direction[7-1] + GG;
				}else if(z_nubes == 5){//U755
					z_output = S + z_wind_direction[7-1] + GG;
				}
			}//Uin segundo numero
		}else if (z_hpa == 8) {//U8xx
			if(z_trend == 1){//U81x Uegundo numero, tendencia de la presion
				if(z_nubes == 1){//U811
					z_output = F + z_wind_direction[7-1] + WW;
				}else if(z_nubes == 2){//U812
					z_output = F + z_wind_direction[7-1] + WW;
				}else if(z_nubes == 3){//U813
					z_output = F + z_wind_direction[7-1] + WW;
				}else if(z_nubes == 4){//U814
					z_output = S + z_wind_direction[7-1] + WW;
				}else if(z_nubes == 5){//U815
					z_output = S + z_wind_direction[7-1] + WW;
				}
			}else if(z_trend == 2){//U82x
				if(z_nubes == 1){//U821
					z_output = F + z_wind_direction[7-1] + WW;
				}else if(z_nubes == 2){//U822
					z_output = F + z_wind_direction[7-1] + WW;
				}else if(z_nubes == 3){//U823
					z_output = S + z_wind_direction[7-1] + WW;
				}else if(z_nubes == 4){//U824
					z_output = S + z_wind_direction[7-1] + WW;
				}else if(z_nubes == 5){//U825
					z_output = S + z_wind_direction[7-1] + WW;
				}
			}else if(z_trend == 3){//U83x
				if(z_nubes == 1){//U831
					z_output = S + z_wind_direction[7-1] + WW;
				}else if(z_nubes == 2){//U832
					z_output = S + z_wind_direction[7-1] + WW;
				}else if(z_nubes == 3){//U833
					z_output = S + z_wind_direction[7-1] + WW;
				}else if(z_nubes == 4){//U834
					z_output = S + z_wind_direction[7-1] + WW;
				}else if(z_nubes == 5){//U835
					z_output = S + z_wind_direction[7-1] + WW;
				}
			}else if(z_trend == 4){//U84x
				if(z_nubes == 1){//U841
					z_output = S + z_wind_direction[7-1] + WW;
				}else if(z_nubes == 2){//U842
					z_output = S + z_wind_direction[7-1] + WW;
				}else if(z_nubes == 3){//U843
					z_output = S + z_wind_direction[7-1] + WW;
				}else if(z_nubes == 4){//U844
					z_output = S + z_wind_direction[7-1] + WW;
				}else if(z_nubes == 5){//U845
					z_output = S + z_wind_direction[7-1] + WW;
				}
			}else if(z_trend == 5){//U85x
				if(z_nubes == 1){//U851
					z_output = S + z_wind_direction[7-1] + WW;
				}else if(z_nubes == 2){//U852
					z_output = S + z_wind_direction[7-1] + WW;
				}else if(z_nubes == 3){//U853
					z_output = S + z_wind_direction[7-1] + WW;
				}else if(z_nubes == 4){//U854
					z_output = S + z_wind_direction[7-1] + WW;
				}else if(z_nubes == 5){//U855
					z_output = S + z_wind_direction[7-1] + WW;
				}
			}//Uin segundo numero
		}//Uin primer numero
			
	}//Uin letra U
	
	
	////////////////////////////////////////////////////////////////
	
	//LETRA V
	
	if(z_output == "V"){
		if(z_hpa == 1){//V1xx Vrimer numero, presion atmosferica
			if(z_trend == 1){//V11x Vegundo numero, tendencia de la presion
				if(z_nubes == 1){//V111
					z_output = A + z_wind_direction[7-1] + UU;
				}else if(z_nubes == 2){//V112
					z_output = A + z_wind_direction[7-1] + UU;
				}else if(z_nubes == 3){//V113
					z_output = A + z_wind_direction[7-1] + UU;
				}else if(z_nubes == 4){//V114
					z_output = A + z_wind_direction[7-1] + UU;
				}else if(z_nubes == 5){//V115
					z_output = X + z_wind_direction[7-1] + UU;
				}
			}else if(z_trend == 2){//V12x
				if(z_nubes == 1){//V121
					z_output = A + z_wind_direction[7-1] + UU;
				}else if(z_nubes == 2){//V122
					z_output = A + z_wind_direction[7-1] + UU;
				}else if(z_nubes == 3){//V123
					z_output = A + z_wind_direction[7-1] + UU;
				}else if(z_nubes == 4){//V124
					z_output = A + z_wind_direction[7-1] + UU;
				}else if(z_nubes == 5){//V125
					z_output = D + z_wind_direction[7-1] + UU;
				}
			}else if(z_trend == 3){//V13x
				if(z_nubes == 1){//V131
					z_output = B + z_wind_direction[7-1] + DD;
				}else if(z_nubes == 2){//V132
					z_output = B + z_wind_direction[7-1] + DD;
				}else if(z_nubes == 3){//V133
					z_output = B + z_wind_direction[7-1] + DD;
				}else if(z_nubes == 4){//V134
					z_output = B + z_wind_direction[7-1] + DD;
				}else if(z_nubes == 5){//V135
					z_output = E + z_wind_direction[7-1] + DD;
				}
			}else if(z_trend == 4){//14x
				if(z_nubes == 1){//141
					z_output = B + z_wind_direction[6-1] + UU;
				}else if(z_nubes == 2){//V142
					z_output = B + z_wind_direction[6-1] + UU;
				}else if(z_nubes == 3){//V143
					z_output = X + z_wind_direction[6-1] + UU;
				}else if(z_nubes == 4){//V144
					z_output = E + z_wind_direction[6-1] + UU;
				}else if(z_nubes == 5){//V145
					z_output = E + z_wind_direction[6-1] + UU;
				}
			}else if(z_trend == 5){//15x
				if(z_nubes == 1){//151
					z_output = B + z_wind_direction[6-1] + NN;
				}else if(z_nubes == 2){//V152
					z_output = B + z_wind_direction[6-1] + NN;
				}else if(z_nubes == 3){//V153
					z_output = E + z_wind_direction[6-1] + NN;
				}else if(z_nubes == 4){//V154
					z_output = H + z_wind_direction[6-1] + NN;
				}else if(z_nubes == 5){//V155
					z_output = K + z_wind_direction[6-1] + NN;
				}
		
				
			}//Vin segundo numero
		}else if(z_hpa == 2){//V2xx
			if(z_trend == 1){//V21x Vegundo numero, tendencia de la presion
				if(z_nubes == 1){//V211
					z_output = A + z_wind_direction[7-1] + UU;
				}else if(z_nubes == 2){//V212
					z_output = A + z_wind_direction[7-1] + UU;
				}else if(z_nubes == 3){//V213
					z_output = A + z_wind_direction[7-1] + UU;
				}else if(z_nubes == 4){//V214
					z_output = A + z_wind_direction[7-1] + UU;
				}else if(z_nubes == 5){//V215
					z_output = X + z_wind_direction[7-1] + UU;
				}
			}else if(z_trend == 2){//V22x
				if(z_nubes == 1){//V221
					z_output = A + z_wind_direction[7-1] + UU;
				}else if(z_nubes == 2){//V222
					z_output = A + z_wind_direction[7-1] + UU;
				}else if(z_nubes == 3){//V223
					z_output = A + z_wind_direction[7-1] + UU;
				}else if(z_nubes == 4){//V224
					z_output = A + z_wind_direction[7-1] + UU;
				}else if(z_nubes == 5){//V225
					z_output = D + z_wind_direction[7-1] + UU;
				}
			}else if(z_trend == 3){//V23x
				if(z_nubes == 1){//V231
					z_output = A + z_wind_direction[7-1] + UU;
				}else if(z_nubes == 2){//V232
					z_output = A + z_wind_direction[7-1] + UU;
				}else if(z_nubes == 3){//V233
					z_output = A + z_wind_direction[7-1] + UU;
				}else if(z_nubes == 4){//V234
					z_output = A + z_wind_direction[7-1] + UU;
				}else if(z_nubes == 5){//V235
					z_output = D + z_wind_direction[7-1] + UU;
				}
			}else if(z_trend == 4){//V24x
				if(z_nubes == 1){//V241
					z_output = A + z_wind_direction[6-1] + UU;
				}else if(z_nubes == 2){//V242
					z_output = A + z_wind_direction[6-1] + UU;
				}else if(z_nubes == 3){//V243
					z_output = X + z_wind_direction[6-1] + UU;
				}else if(z_nubes == 4){//V244
					z_output = D + z_wind_direction[6-1] + UU;
				}else if(z_nubes == 5){//V245
					z_output = R + z_wind_direction[6-1] + UU;
				}
			}else if(z_trend == 5){//V25x
				if(z_nubes == 1){//V251
					z_output = A + z_wind_direction[6-1] + NN;
				}else if(z_nubes == 2){//V252
					z_output = D + z_wind_direction[6-1] + NN;
				}else if(z_nubes == 3){//V253
					z_output = D + z_wind_direction[6-1] + NN;
				}else if(z_nubes == 4){//V254
					z_output = H + z_wind_direction[6-1] + NN;
				}else if(z_nubes == 5){//V255
					z_output = J + z_wind_direction[6-1] + NN;
				}
			}//Vin segundo numero
			
		}else if(z_hpa == 3){//V3xx
			if(z_trend == 1){//V31x Vegundo numero, tendencia de la presion
				if(z_nubes == 1){//V311
					z_output = C + z_wind_direction[7-1] + FF;
				}else if(z_nubes == 2){//V312
					z_output = C + z_wind_direction[7-1] + FF;
				}else if(z_nubes == 3){//V313
					z_output = C + z_wind_direction[7-1] + FF;
				}else if(z_nubes == 4){//V314
					z_output = C + z_wind_direction[7-1] + FF;
				}else if(z_nubes == 5){//V315
					z_output = X + z_wind_direction[7-1] + FF;
				}
			}else if(z_trend == 2){//V32x
				if(z_nubes == 1){//V321
					z_output = C + z_wind_direction[7-1] + UU;
				}else if(z_nubes == 2){//V322
					z_output = C + z_wind_direction[7-1] + UU;
				}else if(z_nubes == 3){//V323
					z_output = C + z_wind_direction[7-1] + UU;
				}else if(z_nubes == 4){//V324
					z_output = A + z_wind_direction[7-1] + UU;
				}else if(z_nubes == 5){//V325
					z_output = F + z_wind_direction[7-1] + UU;
				}
			}else if(z_trend == 3){//V33x
				if(z_nubes == 1){//V331
					z_output = A + z_wind_direction[7-1] + UU;
				}else if(z_nubes == 2){//V332
					z_output = A + z_wind_direction[7-1] + UU;
				}else if(z_nubes == 3){//V333
					z_output = A + z_wind_direction[7-1] + UU;
				}else if(z_nubes == 4){//V334
					z_output = X + z_wind_direction[7-1] + UU;
				}else if(z_nubes == 5){//V335
					z_output = T + z_wind_direction[7-1] + UU;
				}
			}else if(z_trend == 4){//V34x
				if(z_nubes == 1){//V341
					z_output = A + z_wind_direction[7-1] + UU;
				}else if(z_nubes == 2){//V342
					z_output = A + z_wind_direction[7-1] + UU;
				}else if(z_nubes == 3){//V343
					z_output = X + z_wind_direction[7-1] + UU;
				}else if(z_nubes == 4){//V344
					z_output = D + z_wind_direction[7-1] + UU;
				}else if(z_nubes == 5){//V345
					z_output = R + z_wind_direction[7-1] + UU;
				}
			}else if(z_trend == 5){//V35x
				if(z_nubes == 1){//V351
					z_output = D + z_wind_direction[7-1] + NN;
				}else if(z_nubes == 2){//V352
					z_output = D + z_wind_direction[7-1] + NN;
				}else if(z_nubes == 3){//V353
					z_output = D + z_wind_direction[7-1] + NN;
				}else if(z_nubes == 4){//V354
					z_output = H + z_wind_direction[7-1] + NN;
				}else if(z_nubes == 5){//V355
					z_output = J + z_wind_direction[7-1] + NN;
				}
			}//Vin segundo numero
		}else if(z_hpa == 4){//V4xx
			if(z_trend == 1){//V41x Vegundo numero, tendencia de la presion
				if(z_nubes == 1){//V411
					z_output = C + z_wind_direction[7-1] + FF;
				}else if(z_nubes == 2){//V412
					z_output = C + z_wind_direction[7-1] + FF;
				}else if(z_nubes == 3){//V413
					z_output = C + z_wind_direction[7-1] + FF;
				}else if(z_nubes == 4){//V414
					z_output = C + z_wind_direction[7-1] + FF;
				}else if(z_nubes == 5){//V415
					z_output = W + z_wind_direction[7-1] + FF;
				}
			}else if(z_trend == 2){//V42x
				if(z_nubes == 1){//V421
					z_output = C + z_wind_direction[7-1] + FF;
				}else if(z_nubes == 2){//V422
					z_output = C + z_wind_direction[7-1] + FF;
				}else if(z_nubes == 3){//V423
					z_output = C + z_wind_direction[7-1] + FF;
				}else if(z_nubes == 4){//V424
					z_output = Y + z_wind_direction[7-1] + FF;
				}else if(z_nubes == 5){//V425
					z_output = U + z_wind_direction[7-1] + FF;
				}
			}else if(z_trend == 3){//V43x
				if(z_nubes == 1){//V431
					z_output = A + z_wind_direction[7-1] + FF;
				}else if(z_nubes == 2){//V432
					z_output = A + z_wind_direction[7-1] + FF;
				}else if(z_nubes == 3){//V433
					z_output = A + z_wind_direction[7-1] + FF;
				}else if(z_nubes == 4){//V434
					z_output = Y + z_wind_direction[7-1] + FF;
				}else if(z_nubes == 5){//V435
					z_output = U + z_wind_direction[7-1] + FF;
				}
			}else if(z_trend == 4){//V44x
				if(z_nubes == 1){//V441
					z_output = A + z_wind_direction[7-1] + FF;
				}else if(z_nubes == 2){//V442
					z_output = X + z_wind_direction[7-1] + FF;
				}else if(z_nubes == 3){//V443
					z_output = D + z_wind_direction[7-1] + FF;
				}else if(z_nubes == 4){//V444
					z_output = D + z_wind_direction[7-1] + FF;
				}else if(z_nubes == 5){//V445
					z_output = R + z_wind_direction[7-1] + FF;
				}
			}else if(z_trend == 5){//V45x
				if(z_nubes == 1){//V451
					z_output = D + z_wind_direction[7-1] + NN;
				}else if(z_nubes == 2){//V452
					z_output = D + z_wind_direction[7-1] + NN;
				}else if(z_nubes == 3){//V453
					z_output = D + z_wind_direction[7-1] + NN;
				}else if(z_nubes == 4){//V454
					z_output = J + z_wind_direction[7-1] + NN;
				}else if(z_nubes == 5){//V455
					z_output = R + z_wind_direction[7-1] + NN;
				}
			}//Vin segundo numero
		}else if(z_hpa == 5){//V5xx
			if(z_trend == 1){//V51x Vegundo numero, tendencia de la presion
				if(z_nubes == 1){//V511
					z_output = C + z_wind_direction[7-1] + SS;
				}else if(z_nubes == 2){//V512
					z_output = C + z_wind_direction[7-1] + SS;
				}else if(z_nubes == 3){//V513
					z_output = C + z_wind_direction[7-1] + SS;
				}else if(z_nubes == 4){//V514
					z_output = Y + z_wind_direction[7-1] + SS;
				}else if(z_nubes == 5){//V515
					z_output = U + z_wind_direction[7-1] + SS;
				}
			}else if(z_trend == 2){//V52x
				if(z_nubes == 1){//V521
					z_output = C + z_wind_direction[7-1] + FF;
				}else if(z_nubes == 2){//V522
					z_output = C + z_wind_direction[7-1] + FF;
				}else if(z_nubes == 3){//V523
					z_output = Y + z_wind_direction[7-1] + FF;
				}else if(z_nubes == 4){//V524
					z_output = Y + z_wind_direction[7-1] + FF;
				}else if(z_nubes == 5){//V525
					z_output = U + z_wind_direction[7-1] + FF;
				}
			}else if(z_trend == 3){//V53x
				if(z_nubes == 1){//V531
					z_output = C + z_wind_direction[7-1] + FF;
				}else if(z_nubes == 2){//V532
					z_output = C + z_wind_direction[7-1] + FF;
				}else if(z_nubes == 3){//V533
					z_output = Y + z_wind_direction[7-1] + FF;
				}else if(z_nubes == 4){//V534
					z_output = Y + z_wind_direction[7-1] + FF;
				}else if(z_nubes == 5){//V535
					z_output = S + z_wind_direction[7-1] + FF;
				}
			}else if(z_trend == 4){//V54x
				if(z_nubes == 1){//V541
					z_output = F + z_wind_direction[7-1] + FF;
				}else if(z_nubes == 2){//V542
					z_output = F + z_wind_direction[7-1] + FF;
				}else if(z_nubes == 3){//V543
					z_output = S + z_wind_direction[7-1] + FF;
				}else if(z_nubes == 4){//V544
					z_output = S + z_wind_direction[7-1] + FF;
				}else if(z_nubes == 5){//V545
					z_output = S + z_wind_direction[7-1] + FF;
				}
			}else if(z_trend == 5){//V55x
				if(z_nubes == 1){//V551
					z_output = F + z_wind_direction[7-1] + SS;
				}else if(z_nubes == 2){//V552
					z_output = F + z_wind_direction[7-1] + SS;
				}else if(z_nubes == 3){//V553
					z_output = S + z_wind_direction[7-1] + SS;
				}else if(z_nubes == 4){//V554
					z_output = S + z_wind_direction[7-1] + SS;
				}else if(z_nubes == 5){//V555
					z_output = S + z_wind_direction[7-1] + SS;
				}
			}//Vin segundo numero
		}else if(z_hpa == 6){//V6xx
			if(z_trend == 1){//V61x Vegundo numero, tendencia de la presion
				if(z_nubes == 1){//V611
					z_output = C + z_wind_direction[7-1] + SS;
				}else if(z_nubes == 2){//V612
					z_output = C + z_wind_direction[7-1] + SS;
				}else if(z_nubes == 3){//V613
					z_output = Y + z_wind_direction[7-1] + SS;
				}else if(z_nubes == 4){//V614
					z_output = Y + z_wind_direction[7-1] + SS;
				}else if(z_nubes == 5){//V615
					z_output = U + z_wind_direction[7-1] + SS;
				}
			}else if(z_trend == 2){//V62x
				if(z_nubes == 1){//V621
					z_output = C + z_wind_direction[7-1] + SS;
				}else if(z_nubes == 2){//V622
					z_output = Y + z_wind_direction[7-1] + SS;
				}else if(z_nubes == 3){//V623
					z_output = Y + z_wind_direction[7-1] + SS;
				}else if(z_nubes == 4){//V624
					z_output = F + z_wind_direction[7-1] + SS;
				}else if(z_nubes == 5){//V625
					z_output = U + z_wind_direction[7-1] + SS;
				}
			}else if(z_trend == 3){//V63x
				if(z_nubes == 1){//V631
					z_output = C + z_wind_direction[7-1] + SS;
				}else if(z_nubes == 2){//V632
					z_output = Y + z_wind_direction[7-1] + SS;
				}else if(z_nubes == 3){//V633
					z_output = F + z_wind_direction[7-1] + SS;
				}else if(z_nubes == 4){//V634
					z_output = F + z_wind_direction[7-1] + SS;
				}else if(z_nubes == 5){//V635
					z_output = S + z_wind_direction[7-1] + SS;
				}
			}else if(z_trend == 4){//V64x
				if(z_nubes == 1){//V641
					z_output = F + z_wind_direction[7-1] + SS;
				}else if(z_nubes == 2){//V642
					z_output = S + z_wind_direction[7-1] + SS;
				}else if(z_nubes == 3){//V643
					z_output = S + z_wind_direction[7-1] + SS;
				}else if(z_nubes == 4){//V644
					z_output = S + z_wind_direction[7-1] + SS;
				}else if(z_nubes == 5){//V645
					z_output = S + z_wind_direction[7-1] + SS;
				}
			}else if(z_trend == 5){//V65x
				if(z_nubes == 1){//V651
					z_output = S + z_wind_direction[7-1] + SS;
				}else if(z_nubes == 2){//V652
					z_output = S + z_wind_direction[7-1] + SS;
				}else if(z_nubes == 3){//V653
					z_output = S + z_wind_direction[7-1] + SS;
				}else if(z_nubes == 4){//V654
					z_output = S + z_wind_direction[7-1] + SS;
				}else if(z_nubes == 5){//V655
					z_output = S + z_wind_direction[7-1] + SS;
				}
			}//Vin segundo numero
		}else if(z_hpa == 7){//V7xx
			if(z_trend == 1){//V71x Vegundo numero, tendencia de la presion
				if(z_nubes == 1){//V711
					z_output = C + z_wind_direction[7-1] + GG;
				}else if(z_nubes == 2){//V712
					z_output = Y + z_wind_direction[7-1] + GG;
				}else if(z_nubes == 3){//V713
					z_output = F + z_wind_direction[7-1] + GG;
				}else if(z_nubes == 4){//V714
					z_output = F + z_wind_direction[7-1] + GG;
				}else if(z_nubes == 5){//V715
					z_output = U + z_wind_direction[7-1] + GG;
				}
			}else if(z_trend == 2){//V72x
				if(z_nubes == 1){//V721
					z_output = F + z_wind_direction[7-1] + GG;
				}else if(z_nubes == 2){//V722
					z_output = F + z_wind_direction[7-1] + GG;
				}else if(z_nubes == 3){//V723
					z_output = F + z_wind_direction[7-1] + GG;
				}else if(z_nubes == 4){//V724
					z_output = U + z_wind_direction[7-1] + GG;
				}else if(z_nubes == 5){//V725
					z_output = S + z_wind_direction[7-1] + GG;
				}
			}else if(z_trend == 3){//V73x
			if(z_nubes == 1){//V731
					z_output = F + z_wind_direction[7-1] + GG;
				}else if(z_nubes == 2){//V732
					z_output = F + z_wind_direction[7-1] + GG;
				}else if(z_nubes == 3){//V733
					z_output = S + z_wind_direction[7-1] + GG;
				}else if(z_nubes == 4){//V734
					z_output = S + z_wind_direction[7-1] + GG;
				}else if(z_nubes == 5){//V735
					z_output = S + z_wind_direction[7-1] + GG;
				}
			}else if(z_trend == 4){//V74x
				if(z_nubes == 1){//V741
					z_output = S + z_wind_direction[7-1] + GG;
				}else if(z_nubes == 2){//V742
					z_output = S + z_wind_direction[7-1] + GG;
				}else if(z_nubes == 3){//V743
					z_output = S + z_wind_direction[7-1] + GG;
				}else if(z_nubes == 4){//V744
					z_output = S + z_wind_direction[7-1] + GG;
				}else if(z_nubes == 5){//V745
					z_output = S + z_wind_direction[7-1] + GG;
				}
			}else if(z_trend == 5){//V75x
				if(z_nubes == 1){//V751
					z_output = S + z_wind_direction[7-1] + GG;
				}else if(z_nubes == 2){//V752
					z_output = S + z_wind_direction[7-1] + GG;
				}else if(z_nubes == 3){//V753
					z_output = S + z_wind_direction[7-1] + GG;
				}else if(z_nubes == 4){//V754
					z_output = S + z_wind_direction[7-1] + GG;
				}else if(z_nubes == 5){//V755
					z_output = S + z_wind_direction[7-1] + GG;
				}
			}//Vin segundo numero
		}else if (z_hpa == 8) {//V8xx
			if(z_trend == 1){//V81x Vegundo numero, tendencia de la presion
				if(z_nubes == 1){//V811
					z_output = F + z_wind_direction[7-1] + WW;
				}else if(z_nubes == 2){//V812
					z_output = F + z_wind_direction[7-1] + WW;
				}else if(z_nubes == 3){//V813
					z_output = F + z_wind_direction[7-1] + WW;
				}else if(z_nubes == 4){//V814
					z_output = S + z_wind_direction[7-1] + WW;
				}else if(z_nubes == 5){//V815
					z_output = S + z_wind_direction[7-1] + WW;
				}
			}else if(z_trend == 2){//V82x
				if(z_nubes == 1){//V821
					z_output = F + z_wind_direction[7-1] + WW;
				}else if(z_nubes == 2){//V822
					z_output = F + z_wind_direction[7-1] + WW;
				}else if(z_nubes == 3){//V823
					z_output = S + z_wind_direction[7-1] + WW;
				}else if(z_nubes == 4){//V824
					z_output = S + z_wind_direction[7-1] + WW;
				}else if(z_nubes == 5){//V825
					z_output = S + z_wind_direction[7-1] + WW;
				}
			}else if(z_trend == 3){//V83x
				if(z_nubes == 1){//V831
					z_output = S + z_wind_direction[7-1] + WW;
				}else if(z_nubes == 2){//V832
					z_output = S + z_wind_direction[7-1] + WW;
				}else if(z_nubes == 3){//V833
					z_output = S + z_wind_direction[7-1] + WW;
				}else if(z_nubes == 4){//V834
					z_output = S + z_wind_direction[7-1] + WW;
				}else if(z_nubes == 5){//V835
					z_output = S + z_wind_direction[7-1] + WW;
				}
			}else if(z_trend == 4){//V84x
				if(z_nubes == 1){//V841
					z_output = S + z_wind_direction[7-1] + WW;
				}else if(z_nubes == 2){//V842
					z_output = S + z_wind_direction[7-1] + WW;
				}else if(z_nubes == 3){//V843
					z_output = S + z_wind_direction[7-1] + WW;
				}else if(z_nubes == 4){//V844
					z_output = S + z_wind_direction[7-1] + WW;
				}else if(z_nubes == 5){//V845
					z_output = S + z_wind_direction[7-1] + WW;
				}
			}else if(z_trend == 5){//V85x
				if(z_nubes == 1){//V851
					z_output = S + z_wind_direction[7-1] + WW;
				}else if(z_nubes == 2){//V852
					z_output = S + z_wind_direction[7-1] + WW;
				}else if(z_nubes == 3){//V853
					z_output = S + z_wind_direction[7-1] + WW;
				}else if(z_nubes == 4){//V854
					z_output = S + z_wind_direction[7-1] + WW;
				}else if(z_nubes == 5){//V855
					z_output = S + z_wind_direction[7-1] + WW;
				}
			}//Vin segundo numero
		}//Vin primer numero
			
	}//Vin letra V
	
	
	//********************   FIN OESTE   ****************************
	///////////////////////////////////////////////////////////////
	////////////////////////////////////////////////////////////////
	
	//*******************     INICIO NOROESTE   **************************
	//LETRA W
	
	
		if(z_output == "W"){
		if(z_hpa == 1){//W1xx Wrimer numero, presion atmosferica
			if(z_trend == 1){//W11x Wegundo numero, tendencia de la presion
				if(z_nubes == 1){//W111
					z_output = A + z_wind_direction[7-1] + UU;
				}else if(z_nubes == 2){//W112
					z_output = A + z_wind_direction[7-1] + UU;
				}else if(z_nubes == 3){//W113
					z_output = A + z_wind_direction[7-1] + UU;
				}else if(z_nubes == 4){//W114
					z_output = A + z_wind_direction[7-1] + UU;
				}else if(z_nubes == 5){//W115
					z_output = X + z_wind_direction[7-1] + UU;
				}
			}else if(z_trend == 2){//W12x
				if(z_nubes == 1){//W121
					z_output = A + z_wind_direction[7-1] + UU;
				}else if(z_nubes == 2){//W122
					z_output = A + z_wind_direction[7-1] + UU;
				}else if(z_nubes == 3){//W123
					z_output = A + z_wind_direction[7-1] + UU;
				}else if(z_nubes == 4){//W124
					z_output = A + z_wind_direction[7-1] + UU;
				}else if(z_nubes == 5){//W125
					z_output = X + z_wind_direction[7-1] + UU;
				}
			}else if(z_trend == 3){//W13x
				if(z_nubes == 1){//W131
					z_output = A + z_wind_direction[7-1] + DD;
				}else if(z_nubes == 2){//W132
					z_output = A + z_wind_direction[7-1] + DD;
				}else if(z_nubes == 3){//W133
					z_output = A + z_wind_direction[7-1] + DD;
				}else if(z_nubes == 4){//W134
					z_output = A + z_wind_direction[7-1] + DD;
				}else if(z_nubes == 5){//W135
					z_output = X + z_wind_direction[7-1] + DD;
				}
			}else if(z_trend == 4){//14x
				if(z_nubes == 1){//141
					z_output = B + z_wind_direction[7-1] + UU;
				}else if(z_nubes == 2){//W142
					z_output = A + z_wind_direction[7-1] + UU;
				}else if(z_nubes == 3){//W143
					z_output = A + z_wind_direction[7-1] + UU;
				}else if(z_nubes == 4){//W144
					z_output = X + z_wind_direction[7-1] + UU;
				}else if(z_nubes == 5){//W145
					z_output = R + z_wind_direction[7-1] + UU;
				}
			}else if(z_trend == 5){//15x
				if(z_nubes == 1){//151
					z_output = B + z_wind_direction[7-1] + NN;
				}else if(z_nubes == 2){//W152
					z_output = B + z_wind_direction[7-1] + NN;
				}else if(z_nubes == 3){//W153
					z_output = D + z_wind_direction[7-1] + NN;
				}else if(z_nubes == 4){//W154
					z_output = D + z_wind_direction[7-1] + NN;
				}else if(z_nubes == 5){//W155
					z_output = R + z_wind_direction[7-1] + NN;
				}
		
				
			}//Win segundo numero
		}else if(z_hpa == 2){//W2xx
			if(z_trend == 1){//W21x Wegundo numero, tendencia de la presion
				if(z_nubes == 1){//W211
					z_output = C + z_wind_direction[7-1] + UU;
				}else if(z_nubes == 2){//W212
					z_output = C + z_wind_direction[7-1] + UU;
				}else if(z_nubes == 3){//W213
					z_output = C + z_wind_direction[7-1] + UU;
				}else if(z_nubes == 4){//W214
					z_output = C + z_wind_direction[7-1] + UU;
				}else if(z_nubes == 5){//W215
					z_output = Y + z_wind_direction[7-1] + UU;
				}
			}else if(z_trend == 2){//W22x
				if(z_nubes == 1){//W221
					z_output = A + z_wind_direction[7-1] + UU;
				}else if(z_nubes == 2){//W222
					z_output = A + z_wind_direction[7-1] + UU;
				}else if(z_nubes == 3){//W223
					z_output = A + z_wind_direction[7-1] + UU;
				}else if(z_nubes == 4){//W224
					z_output = A + z_wind_direction[7-1] + UU;
				}else if(z_nubes == 5){//W225
					z_output = X + z_wind_direction[7-1] + UU;
				}
			}else if(z_trend == 3){//W23x
				if(z_nubes == 1){//W231
					z_output = A + z_wind_direction[7-1] + UU;
				}else if(z_nubes == 2){//W232
					z_output = A + z_wind_direction[7-1] + UU;
				}else if(z_nubes == 3){//W233
					z_output = A + z_wind_direction[7-1] + UU;
				}else if(z_nubes == 4){//W234
					z_output = A + z_wind_direction[7-1] + UU;
				}else if(z_nubes == 5){//W235
					z_output = X + z_wind_direction[7-1] + UU;
				}
			}else if(z_trend == 4){//W24x
				if(z_nubes == 1){//W241
					z_output = A + z_wind_direction[7-1] + UU;
				}else if(z_nubes == 2){//W242
					z_output = A + z_wind_direction[7-1] + UU;
				}else if(z_nubes == 3){//W243
					z_output = A + z_wind_direction[7-1] + UU;
				}else if(z_nubes == 4){//W244
					z_output = X + z_wind_direction[7-1] + UU;
				}else if(z_nubes == 5){//W245
					z_output = R + z_wind_direction[7-1] + UU;
				}
			}else if(z_trend == 5){//W25x
				if(z_nubes == 1){//W251
					z_output = A + z_wind_direction[7-1] + NN;
				}else if(z_nubes == 2){//W252
					z_output = A + z_wind_direction[7-1] + NN;
				}else if(z_nubes == 3){//W253
					z_output = D + z_wind_direction[7-1] + NN;
				}else if(z_nubes == 4){//W254
					z_output = D + z_wind_direction[7-1] + NN;
				}else if(z_nubes == 5){//W255
					z_output = R + z_wind_direction[7-1] + NN;
				}
			}//Win segundo numero
			
		}else if(z_hpa == 3){//W3xx
			if(z_trend == 1){//W31x Wegundo numero, tendencia de la presion
				if(z_nubes == 1){//W311
					z_output = C + z_wind_direction[7-1] + FF;
				}else if(z_nubes == 2){//W312
					z_output = C + z_wind_direction[7-1] + FF;
				}else if(z_nubes == 3){//W313
					z_output = C + z_wind_direction[7-1] + FF;
				}else if(z_nubes == 4){//W314
					z_output = C + z_wind_direction[7-1] + FF;
				}else if(z_nubes == 5){//W315
					z_output = Y + z_wind_direction[7-1] + FF;
				}
			}else if(z_trend == 2){//W32x
				if(z_nubes == 1){//W321
					z_output = A + z_wind_direction[7-1] + UU;
				}else if(z_nubes == 2){//W322
					z_output = A + z_wind_direction[7-1] + UU;
				}else if(z_nubes == 3){//W323
					z_output = A + z_wind_direction[7-1] + UU;
				}else if(z_nubes == 4){//W324
					z_output = A + z_wind_direction[7-1] + UU;
				}else if(z_nubes == 5){//W325
					z_output = X + z_wind_direction[7-1] + UU;
				}
			}else if(z_trend == 3){//W33x
				if(z_nubes == 1){//W331
					z_output = A + z_wind_direction[7-1] + UU;
				}else if(z_nubes == 2){//W332
					z_output = A + z_wind_direction[7-1] + UU;
				}else if(z_nubes == 3){//W333
					z_output = A + z_wind_direction[7-1] + UU;
				}else if(z_nubes == 4){//W334
					z_output = A + z_wind_direction[7-1] + UU;
				}else if(z_nubes == 5){//W335
					z_output = T + z_wind_direction[7-1] + UU;
				}
			}else if(z_trend == 4){//W34x
				if(z_nubes == 1){//W341
					z_output = A + z_wind_direction[7-1] + UU;
				}else if(z_nubes == 2){//W342
					z_output = A + z_wind_direction[7-1] + UU;
				}else if(z_nubes == 3){//W343
					z_output = A + z_wind_direction[7-1] + UU;
				}else if(z_nubes == 4){//W344
					z_output = X + z_wind_direction[7-1] + UU;
				}else if(z_nubes == 5){//W345
					z_output = R + z_wind_direction[7-1] + UU;
				}
			}else if(z_trend == 5){//W35x
				if(z_nubes == 1){//W351
					z_output = A + z_wind_direction[7-1] + NN;
				}else if(z_nubes == 2){//W352
					z_output = A + z_wind_direction[7-1] + NN;
				}else if(z_nubes == 3){//W353
					z_output = D + z_wind_direction[7-1] + NN;
				}else if(z_nubes == 4){//W354
					z_output = D + z_wind_direction[7-1] + NN;
				}else if(z_nubes == 5){//W355
					z_output = R + z_wind_direction[7-1] + NN;
				}
			}//Win segundo numero
		}else if(z_hpa == 4){//W4xx
			if(z_trend == 1){//W41x Wegundo numero, tendencia de la presion
				if(z_nubes == 1){//W411
					z_output = C + z_wind_direction[7-1] + FF;
				}else if(z_nubes == 2){//W412
					z_output = C + z_wind_direction[7-1] + FF;
				}else if(z_nubes == 3){//W413
					z_output = C + z_wind_direction[7-1] + FF;
				}else if(z_nubes == 4){//W414
					z_output = C + z_wind_direction[7-1] + FF;
				}else if(z_nubes == 5){//W415
					z_output = W + z_wind_direction[7-1] + FF;
				}
			}else if(z_trend == 2){//W42x
				if(z_nubes == 1){//W421
					z_output = C + z_wind_direction[7-1] + FF;
				}else if(z_nubes == 2){//W422
					z_output = C + z_wind_direction[7-1] + FF;
				}else if(z_nubes == 3){//W423
					z_output = C + z_wind_direction[7-1] + FF;
				}else if(z_nubes == 4){//W424
					z_output = C + z_wind_direction[7-1] + FF;
				}else if(z_nubes == 5){//W425
					z_output = W + z_wind_direction[7-1] + FF;
				}
			}else if(z_trend == 3){//W43x
				if(z_nubes == 1){//W431
					z_output = A + z_wind_direction[7-1] + FF;
				}else if(z_nubes == 2){//W432
					z_output = A + z_wind_direction[7-1] + FF;
				}else if(z_nubes == 3){//W433
					z_output = A + z_wind_direction[7-1] + FF;
				}else if(z_nubes == 4){//W434
					z_output = A + z_wind_direction[7-1] + FF;
				}else if(z_nubes == 5){//W435
					z_output = T + z_wind_direction[7-1] + FF;
				}
			}else if(z_trend == 4){//W44x
				if(z_nubes == 1){//W441
					z_output = A + z_wind_direction[7-1] + FF;
				}else if(z_nubes == 2){//W442
					z_output = A + z_wind_direction[7-1] + FF;
				}else if(z_nubes == 3){//W443
					z_output = X + z_wind_direction[7-1] + FF;
				}else if(z_nubes == 4){//W444
					z_output = D + z_wind_direction[7-1] + FF;
				}else if(z_nubes == 5){//W445
					z_output = R + z_wind_direction[7-1] + FF;
				}
			}else if(z_trend == 5){//W45x
				if(z_nubes == 1){//W451
					z_output = X + z_wind_direction[7-1] + NN;
				}else if(z_nubes == 2){//W452
					z_output = X + z_wind_direction[7-1] + NN;
				}else if(z_nubes == 3){//W453
					z_output = D + z_wind_direction[7-1] + NN;
				}else if(z_nubes == 4){//W454
					z_output = R + z_wind_direction[7-1] + NN;
				}else if(z_nubes == 5){//W455
					z_output = R + z_wind_direction[7-1] + NN;
				}
			}//Win segundo numero
		}else if(z_hpa == 5){//W5xx
			if(z_trend == 1){//W51x Wegundo numero, tendencia de la presion
				if(z_nubes == 1){//W511
					z_output = C + z_wind_direction[8-1] + SS;
				}else if(z_nubes == 2){//W512
					z_output = C + z_wind_direction[8-1] + SS;
				}else if(z_nubes == 3){//W513
					z_output = C + z_wind_direction[8-1] + SS;
				}else if(z_nubes == 4){//W514
					z_output = C + z_wind_direction[8-1] + SS;
				}else if(z_nubes == 5){//W515
					z_output = W + z_wind_direction[8-1] + SS;
				}
			}else if(z_trend == 2){//W52x
				if(z_nubes == 1){//W521
					z_output = C + z_wind_direction[7-1] + FF;
				}else if(z_nubes == 2){//W522
					z_output = C + z_wind_direction[7-1] + FF;
				}else if(z_nubes == 3){//W523
					z_output = C + z_wind_direction[7-1] + FF;
				}else if(z_nubes == 4){//W524
					z_output = C + z_wind_direction[7-1] + FF;
				}else if(z_nubes == 5){//W525
					z_output = U + z_wind_direction[7-1] + FF;
				}
			}else if(z_trend == 3){//W53x
				if(z_nubes == 1){//W531
					z_output = A + z_wind_direction[7-1] + FF;
				}else if(z_nubes == 2){//W532
					z_output = C + z_wind_direction[7-1] + FF;
				}else if(z_nubes == 3){//W533
					z_output = C + z_wind_direction[7-1] + FF;
				}else if(z_nubes == 4){//W534
					z_output = Y + z_wind_direction[7-1] + FF;
				}else if(z_nubes == 5){//W535
					z_output = U + z_wind_direction[7-1] + FF;
				}
			}else if(z_trend == 4){//W54x
				if(z_nubes == 1){//W541
					z_output = C + z_wind_direction[7-1] + FF;
				}else if(z_nubes == 2){//W542
					z_output = Y + z_wind_direction[7-1] + FF;
				}else if(z_nubes == 3){//W543
					z_output = F + z_wind_direction[7-1] + FF;
				}else if(z_nubes == 4){//W544
					z_output = F + z_wind_direction[7-1] + FF;
				}else if(z_nubes == 5){//W545
					z_output = S + z_wind_direction[7-1] + FF;
				}
			}else if(z_trend == 5){//W55x
				if(z_nubes == 1){//W551
					z_output = F + z_wind_direction[7-1] + SS;
				}else if(z_nubes == 2){//W552
					z_output = F + z_wind_direction[7-1] + SS;
				}else if(z_nubes == 3){//W553
					z_output = F + z_wind_direction[7-1] + SS;
				}else if(z_nubes == 4){//W554
					z_output = S + z_wind_direction[7-1] + SS;
				}else if(z_nubes == 5){//W555
					z_output = S + z_wind_direction[7-1] + SS;
				}
			}//Win segundo numero
		}else if(z_hpa == 6){//W6xx
			if(z_trend == 1){//W61x Wegundo numero, tendencia de la presion
				if(z_nubes == 1){//W611
					z_output = C + z_wind_direction[8-1] + SS;
				}else if(z_nubes == 2){//W612
					z_output = C + z_wind_direction[8-1] + SS;
				}else if(z_nubes == 3){//W613
					z_output = C + z_wind_direction[8-1] + SS;
				}else if(z_nubes == 4){//W614
					z_output = Y + z_wind_direction[8-1] + SS;
				}else if(z_nubes == 5){//W615
					z_output = W + z_wind_direction[8-1] + SS;
				}
			}else if(z_trend == 2){//W62x
				if(z_nubes == 1){//W621
					z_output = C + z_wind_direction[8-1] + SS;
				}else if(z_nubes == 2){//W622
					z_output = C + z_wind_direction[8-1] + SS;
				}else if(z_nubes == 3){//W623
					z_output = C + z_wind_direction[8-1] + SS;
				}else if(z_nubes == 4){//W624
					z_output = Y + z_wind_direction[8-1] + SS;
				}else if(z_nubes == 5){//W625
					z_output = U + z_wind_direction[8-1] + SS;
				}
			}else if(z_trend == 3){//W63x
				if(z_nubes == 1){//W631
					z_output = C + z_wind_direction[8-1] + SS;
				}else if(z_nubes == 2){//W632
					z_output = C + z_wind_direction[8-1] + SS;
				}else if(z_nubes == 3){//W633
					z_output = Y + z_wind_direction[8-1] + SS;
				}else if(z_nubes == 4){//W634
					z_output = F + z_wind_direction[8-1] + SS;
				}else if(z_nubes == 5){//W635
					z_output = U + z_wind_direction[8-1] + SS;
				}
			}else if(z_trend == 4){//W64x
				if(z_nubes == 1){//W641
					z_output = C + z_wind_direction[8-1] + SS;
				}else if(z_nubes == 2){//W642
					z_output = F + z_wind_direction[8-1] + SS;
				}else if(z_nubes == 3){//W643
					z_output = F + z_wind_direction[8-1] + SS;
				}else if(z_nubes == 4){//W644
					z_output = F + z_wind_direction[8-1] + SS;
				}else if(z_nubes == 5){//W645
					z_output = S + z_wind_direction[8-1] + SS;
				}
			}else if(z_trend == 5){//W65x
				if(z_nubes == 1){//W651
					z_output = F + z_wind_direction[8-1] + SS;
				}else if(z_nubes == 2){//W652
					z_output = F + z_wind_direction[8-1] + SS;
				}else if(z_nubes == 3){//W653
					z_output = S + z_wind_direction[8-1] + SS;
				}else if(z_nubes == 4){//W654
					z_output = S + z_wind_direction[8-1] + SS;
				}else if(z_nubes == 5){//W655
					z_output = S + z_wind_direction[8-1] + SS;
				}
			}//Win segundo numero
		}else if(z_hpa == 7){//W7xx
			if(z_trend == 1){//W71x Wegundo numero, tendencia de la presion
				if(z_nubes == 1){//W711
					z_output = C + z_wind_direction[8-1] + GG;
				}else if(z_nubes == 2){//W712
					z_output = C + z_wind_direction[8-1] + GG;
				}else if(z_nubes == 3){//W713
					z_output = Y + z_wind_direction[8-1] + GG;
				}else if(z_nubes == 4){//W714
					z_output = Y + z_wind_direction[8-1] + GG;
				}else if(z_nubes == 5){//W715
					z_output = U + z_wind_direction[8-1] + GG;
				}
			}else if(z_trend == 2){//W72x
				if(z_nubes == 1){//W721
					z_output = C + z_wind_direction[8-1] + GG;
				}else if(z_nubes == 2){//W722
					z_output = C + z_wind_direction[8-1] + GG;
				}else if(z_nubes == 3){//W723
					z_output = Y + z_wind_direction[8-1] + GG;
				}else if(z_nubes == 4){//W724
					z_output = F + z_wind_direction[8-1] + GG;
				}else if(z_nubes == 5){//W725
					z_output = S + z_wind_direction[8-1] + GG;
				}
			}else if(z_trend == 3){//W73x
			if(z_nubes == 1){//W731
					z_output = F + z_wind_direction[8-1] + GG;
				}else if(z_nubes == 2){//W732
					z_output = F + z_wind_direction[8-1] + GG;
				}else if(z_nubes == 3){//W733
					z_output = F + z_wind_direction[8-1] + GG;
				}else if(z_nubes == 4){//W734
					z_output = S + z_wind_direction[8-1] + GG;
				}else if(z_nubes == 5){//W735
					z_output = S + z_wind_direction[8-1] + GG;
				}
			}else if(z_trend == 4){//W74x
				if(z_nubes == 1){//W741
					z_output = F + z_wind_direction[8-1] + GG;
				}else if(z_nubes == 2){//W742
					z_output = F + z_wind_direction[8-1] + GG;
				}else if(z_nubes == 3){//W743
					z_output = S + z_wind_direction[8-1] + GG;
				}else if(z_nubes == 4){//W744
					z_output = S + z_wind_direction[8-1] + GG;
				}else if(z_nubes == 5){//W745
					z_output = S + z_wind_direction[8-1] + GG;
				}
			}else if(z_trend == 5){//W75x
				if(z_nubes == 1){//W751
					z_output = S + z_wind_direction[8-1] + GG;
				}else if(z_nubes == 2){//W752
					z_output = S + z_wind_direction[8-1] + GG;
				}else if(z_nubes == 3){//W753
					z_output = S + z_wind_direction[8-1] + GG;
				}else if(z_nubes == 4){//W754
					z_output = S + z_wind_direction[8-1] + GG;
				}else if(z_nubes == 5){//W755
					z_output = S + z_wind_direction[8-1] + GG;
				}
			}//Win segundo numero
		}else if (z_hpa == 8) {//W8xx
			if(z_trend == 1){//W81x Wegundo numero, tendencia de la presion
				if(z_nubes == 1){//W811
					z_output = F + z_wind_direction[8-1] + WW;
				}else if(z_nubes == 2){//W812
					z_output = F + z_wind_direction[8-1] + WW;
				}else if(z_nubes == 3){//W813
					z_output = F + z_wind_direction[8-1] + WW;
				}else if(z_nubes == 4){//W814
					z_output = F + z_wind_direction[8-1] + WW;
				}else if(z_nubes == 5){//W815
					z_output = U + z_wind_direction[8-1] + WW;
				}
			}else if(z_trend == 2){//W82x
				if(z_nubes == 1){//W821
					z_output = F + z_wind_direction[8-1] + WW;
				}else if(z_nubes == 2){//W822
					z_output = F + z_wind_direction[8-1] + WW;
				}else if(z_nubes == 3){//W823
					z_output = F + z_wind_direction[8-1] + WW;
				}else if(z_nubes == 4){//W824
					z_output = S + z_wind_direction[8-1] + WW;
				}else if(z_nubes == 5){//W825
					z_output = S + z_wind_direction[8-1] + WW;
				}
			}else if(z_trend == 3){//W83x
				if(z_nubes == 1){//W831
					z_output = S + z_wind_direction[8-1] + WW;
				}else if(z_nubes == 2){//W832
					z_output = S + z_wind_direction[8-1] + WW;
				}else if(z_nubes == 3){//W833
					z_output = S + z_wind_direction[8-1] + WW;
				}else if(z_nubes == 4){//W834
					z_output = S + z_wind_direction[8-1] + WW;
				}else if(z_nubes == 5){//W835
					z_output = S + z_wind_direction[8-1] + WW;
				}
			}else if(z_trend == 4){//W84x
				if(z_nubes == 1){//W841
					z_output = F + z_wind_direction[8-1] + WW;
				}else if(z_nubes == 2){//W842
					z_output = F + z_wind_direction[8-1] + WW;
				}else if(z_nubes == 3){//W843
					z_output = S + z_wind_direction[8-1] + WW;
				}else if(z_nubes == 4){//W844
					z_output = S + z_wind_direction[8-1] + WW;
				}else if(z_nubes == 5){//W845
					z_output = S + z_wind_direction[8-1] + WW;
				}
			}else if(z_trend == 5){//W85x
				if(z_nubes == 1){//W851
					z_output = S + z_wind_direction[8-1] + WW;
				}else if(z_nubes == 2){//W852
					z_output = S + z_wind_direction[8-1] + WW;
				}else if(z_nubes == 3){//W853
					z_output = S + z_wind_direction[8-1] + WW;
				}else if(z_nubes == 4){//W854
					z_output = S + z_wind_direction[8-1] + WW;
				}else if(z_nubes == 5){//W855
					z_output = S + z_wind_direction[8-1] + WW;
				}
			}//Win segundo numero
		}//Win primer numero
			
	}//Win letra W
	
	
	////////////////////////////////////////////////////////////////
	
	//LETRA X
	
	
	if(z_output == "X"){
		if(z_hpa == 1){//X1xx Xrimer numero, presion atmosferica
			if(z_trend == 1){//X11x Xegundo numero, tendencia de la presion
				if(z_nubes == 1){//X111
					z_output = A + z_wind_direction[8-1] + DD;
				}else if(z_nubes == 2){//X112
					z_output = A + z_wind_direction[8-1] + DD;
				}else if(z_nubes == 3){//X113
					z_output = A + z_wind_direction[8-1] + DD;
				}else if(z_nubes == 4){//X114
					z_output = A + z_wind_direction[8-1] + DD;
				}else if(z_nubes == 5){//X115
					z_output = X + z_wind_direction[8-1] + DD;
				}
			}else if(z_trend == 2){//X12x
				if(z_nubes == 1){//X121
					z_output = A + z_wind_direction[7-1] + DD;
				}else if(z_nubes == 2){//X122
					z_output = A + z_wind_direction[7-1] + DD;
				}else if(z_nubes == 3){//X123
					z_output = A + z_wind_direction[7-1] + DD;
				}else if(z_nubes == 4){//X124
					z_output = A + z_wind_direction[7-1] + DD;
				}else if(z_nubes == 5){//X125
					z_output = X + z_wind_direction[7-1] + DD;
				}
			}else if(z_trend == 3){//X13x
				if(z_nubes == 1){//X131
					z_output = A + z_wind_direction[7-1] + DD;
				}else if(z_nubes == 2){//X132
					z_output = A + z_wind_direction[7-1] + DD;
				}else if(z_nubes == 3){//X133
					z_output = A + z_wind_direction[7-1] + DD;
				}else if(z_nubes == 4){//X134
					z_output = A + z_wind_direction[7-1] + DD;
				}else if(z_nubes == 5){//X135
					z_output = X + z_wind_direction[7-1] + DD;
				}
			}else if(z_trend == 4){//14x
				if(z_nubes == 1){//141
					z_output = B + z_wind_direction[7-1] + UU;
				}else if(z_nubes == 2){//X142
					z_output = B + z_wind_direction[7-1] + UU;
				}else if(z_nubes == 3){//X143
					z_output = E + z_wind_direction[7-1] + UU;
				}else if(z_nubes == 4){//X144
					z_output = E + z_wind_direction[7-1] + UU;
				}else if(z_nubes == 5){//X145
					z_output = K + z_wind_direction[7-1] + UU;
				}
			}else if(z_trend == 5){//15x
				if(z_nubes == 1){//151
					z_output = B + z_wind_direction[7-1] + NN;
				}else if(z_nubes == 2){//X152
					z_output = B + z_wind_direction[7-1] + NN;
				}else if(z_nubes == 3){//X153
					z_output = E + z_wind_direction[7-1] + NN;
				}else if(z_nubes == 4){//X154
					z_output = H + z_wind_direction[7-1] + NN;
				}else if(z_nubes == 5){//X155
					z_output = K + z_wind_direction[7-1] + NN;
				}
		
				
			}//Xin segundo numero
		}else if(z_hpa == 2){//X2xx
			if(z_trend == 1){//X21x Xegundo numero, tendencia de la presion
				if(z_nubes == 1){//X211
					z_output = C + z_wind_direction[8-1] + UU;
				}else if(z_nubes == 2){//X212
					z_output = C + z_wind_direction[8-1] + UU;
				}else if(z_nubes == 3){//X213
					z_output = C + z_wind_direction[8-1] + UU;
				}else if(z_nubes == 4){//X214
					z_output = C + z_wind_direction[8-1] + UU;
				}else if(z_nubes == 5){//X215
					z_output = Y + z_wind_direction[8-1] + UU;
				}
			}else if(z_trend == 2){//X22x
				if(z_nubes == 1){//X221
					z_output = A + z_wind_direction[8-1] + DD;
				}else if(z_nubes == 2){//X222
					z_output = A + z_wind_direction[8-1] + DD;
				}else if(z_nubes == 3){//X223
					z_output = A + z_wind_direction[8-1] + DD;
				}else if(z_nubes == 4){//X224
					z_output = A + z_wind_direction[8-1] + DD;
				}else if(z_nubes == 5){//X225
					z_output = X + z_wind_direction[8-1] + DD;
				}
			}else if(z_trend == 3){//X23x
				if(z_nubes == 1){//X231
					z_output = A + z_wind_direction[7-1] + DD;
				}else if(z_nubes == 2){//X232
					z_output = A + z_wind_direction[7-1] + DD;
				}else if(z_nubes == 3){//X233
					z_output = A + z_wind_direction[7-1] + DD;
				}else if(z_nubes == 4){//X234
					z_output = A + z_wind_direction[7-1] + DD;
				}else if(z_nubes == 5){//X235
					z_output = X + z_wind_direction[7-1] + DD;
				}
			}else if(z_trend == 4){//X24x
				if(z_nubes == 1){//X241
					z_output = B + z_wind_direction[7-1] + UU;
				}else if(z_nubes == 2){//X242
					z_output = B + z_wind_direction[7-1] + UU;
				}else if(z_nubes == 3){//X243
					z_output = E + z_wind_direction[7-1] + UU;
				}else if(z_nubes == 4){//X244
					z_output = E + z_wind_direction[7-1] + UU;
				}else if(z_nubes == 5){//X245
					z_output = K + z_wind_direction[7-1] + UU;
				}
			}else if(z_trend == 5){//X25x
				if(z_nubes == 1){//X251
					z_output = B + z_wind_direction[7-1] + NN;
				}else if(z_nubes == 2){//X252
					z_output = E + z_wind_direction[7-1] + NN;
				}else if(z_nubes == 3){//X253
					z_output = E + z_wind_direction[7-1] + NN;
				}else if(z_nubes == 4){//X254
					z_output = H + z_wind_direction[7-1] + NN;
				}else if(z_nubes == 5){//X255
					z_output = K + z_wind_direction[7-1] + NN;
				}
			}//Xin segundo numero
			
		}else if(z_hpa == 3){//X3xx
			if(z_trend == 1){//X31x Xegundo numero, tendencia de la presion
				if(z_nubes == 1){//X311
					z_output = C + z_wind_direction[8-1] + FF;
				}else if(z_nubes == 2){//X312
					z_output = C + z_wind_direction[8-1] + FF;
				}else if(z_nubes == 3){//X313
					z_output = C + z_wind_direction[8-1] + FF;
				}else if(z_nubes == 4){//X314
					z_output = C + z_wind_direction[8-1] + FF;
				}else if(z_nubes == 5){//X315
					z_output = Y + z_wind_direction[8-1] + FF;
				}
			}else if(z_trend == 2){//X32x
				if(z_nubes == 1){//X321
					z_output = C + z_wind_direction[8-1] + UU;
				}else if(z_nubes == 2){//X322
					z_output = C + z_wind_direction[8-1] + UU;
				}else if(z_nubes == 3){//X323
					z_output = C + z_wind_direction[8-1] + UU;
				}else if(z_nubes == 4){//X324
					z_output = C + z_wind_direction[8-1] + UU;
				}else if(z_nubes == 5){//X325
					z_output = Y + z_wind_direction[8-1] + UU;
				}
			}else if(z_trend == 3){//X33x
				if(z_nubes == 1){//X331
					z_output = A + z_wind_direction[7-1] + UU;
				}else if(z_nubes == 2){//X332
					z_output = A + z_wind_direction[7-1] + UU;
				}else if(z_nubes == 3){//X333
					z_output = A + z_wind_direction[7-1] + UU;
				}else if(z_nubes == 4){//X334
					z_output = A + z_wind_direction[7-1] + UU;
				}else if(z_nubes == 5){//X335
					z_output = T + z_wind_direction[7-1] + UU;
				}
			}else if(z_trend == 4){//X34x
				if(z_nubes == 1){//X341
					z_output = A + z_wind_direction[7-1] + UU;
				}else if(z_nubes == 2){//X342
					z_output = A + z_wind_direction[7-1] + UU;
				}else if(z_nubes == 3){//X343
					z_output = D + z_wind_direction[7-1] + UU;
				}else if(z_nubes == 4){//X344
					z_output = D + z_wind_direction[7-1] + UU;
				}else if(z_nubes == 5){//X345
					z_output = J + z_wind_direction[7-1] + UU;
				}
			}else if(z_trend == 5){//X35x
				if(z_nubes == 1){//X351
					z_output = B + z_wind_direction[7-1] + NN;
				}else if(z_nubes == 2){//X352
					z_output = E + z_wind_direction[7-1] + NN;
				}else if(z_nubes == 3){//X353
					z_output = D + z_wind_direction[7-1] + NN;
				}else if(z_nubes == 4){//X354
					z_output = G + z_wind_direction[7-1] + NN;
				}else if(z_nubes == 5){//X355
					z_output = J + z_wind_direction[7-1] + NN;
				}
			}//Xin segundo numero
		}else if(z_hpa == 4){//X4xx
			if(z_trend == 1){//X41x Xegundo numero, tendencia de la presion
				if(z_nubes == 1){//X411
					z_output = C + z_wind_direction[8-1] + FF;
				}else if(z_nubes == 2){//X412
					z_output = C + z_wind_direction[8-1] + FF;
				}else if(z_nubes == 3){//X413
					z_output = C + z_wind_direction[8-1] + FF;
				}else if(z_nubes == 4){//X414
					z_output = C + z_wind_direction[8-1] + FF;
				}else if(z_nubes == 5){//X415
					z_output = W + z_wind_direction[8-1] + FF;
				}
			}else if(z_trend == 2){//X42x
				if(z_nubes == 1){//X421
					z_output = C + z_wind_direction[8-1] + FF;
				}else if(z_nubes == 2){//X422
					z_output = C + z_wind_direction[8-1] + FF;
				}else if(z_nubes == 3){//X423
					z_output = C + z_wind_direction[8-1] + FF;
				}else if(z_nubes == 4){//X424
					z_output = C + z_wind_direction[8-1] + FF;
				}else if(z_nubes == 5){//X425
					z_output = W + z_wind_direction[8-1] + FF;
				}
			}else if(z_trend == 3){//X43x
				if(z_nubes == 1){//X431
					z_output = A + z_wind_direction[7-1] + UU;
				}else if(z_nubes == 2){//X432
					z_output = A + z_wind_direction[7-1] + UU;
				}else if(z_nubes == 3){//X433
					z_output = A + z_wind_direction[7-1] + FF;
				}else if(z_nubes == 4){//X434
					z_output = A + z_wind_direction[7-1] + FF;
				}else if(z_nubes == 5){//X435
					z_output = T + z_wind_direction[7-1] + FF;
				}
			}else if(z_trend == 4){//X44x
				if(z_nubes == 1){//X441
					z_output = A + z_wind_direction[7-1] + FF;
				}else if(z_nubes == 2){//X442
					z_output = D + z_wind_direction[7-1] + FF;
				}else if(z_nubes == 3){//X443
					z_output = D + z_wind_direction[7-1] + FF;
				}else if(z_nubes == 4){//X444
					z_output = D + z_wind_direction[7-1] + FF;
				}else if(z_nubes == 5){//X445
					z_output = J + z_wind_direction[7-1] + FF;
				}
			}else if(z_trend == 5){//X45x
				if(z_nubes == 1){//X451
					z_output = D + z_wind_direction[7-1] + NN;
				}else if(z_nubes == 2){//X452
					z_output = D + z_wind_direction[7-1] + NN;
				}else if(z_nubes == 3){//X453
					z_output = D + z_wind_direction[7-1] + NN;
				}else if(z_nubes == 4){//X454
					z_output = J + z_wind_direction[7-1] + NN;
				}else if(z_nubes == 5){//X455
					z_output = J + z_wind_direction[7-1] + NN;
				}
			}//Xin segundo numero
		}else if(z_hpa == 5){//X5xx
			if(z_trend == 1){//X51x Xegundo numero, tendencia de la presion
				if(z_nubes == 1){//X511
					z_output = C + z_wind_direction[8-1] + SS;
				}else if(z_nubes == 2){//X512
					z_output = C + z_wind_direction[8-1] + SS;
				}else if(z_nubes == 3){//X513
					z_output = C + z_wind_direction[8-1] + SS;
				}else if(z_nubes == 4){//X514
					z_output = C + z_wind_direction[8-1] + SS;
				}else if(z_nubes == 5){//X515
					z_output = W + z_wind_direction[8-1] + SS;
				}
			}else if(z_trend == 2){//X52x
				if(z_nubes == 1){//X521
					z_output = C + z_wind_direction[8-1] + FF;
				}else if(z_nubes == 2){//X522
					z_output = C + z_wind_direction[8-1] + FF;
				}else if(z_nubes == 3){//X523
					z_output = C + z_wind_direction[8-1] + FF;
				}else if(z_nubes == 4){//X524
					z_output = C + z_wind_direction[8-1] + FF;
				}else if(z_nubes == 5){//X525
					z_output = U + z_wind_direction[8-1] + FF;
				}
			}else if(z_trend == 3){//X53x
				if(z_nubes == 1){//X531
					z_output = A + z_wind_direction[8-1] + FF;
				}else if(z_nubes == 2){//X532
					z_output = C + z_wind_direction[8-1] + FF;
				}else if(z_nubes == 3){//X533
					z_output = C + z_wind_direction[8-1] + FF;
				}else if(z_nubes == 4){//X534
					z_output = Y + z_wind_direction[8-1] + FF;
				}else if(z_nubes == 5){//X535
					z_output = U + z_wind_direction[8-1] + FF;
				}
			}else if(z_trend == 4){//X54x
				if(z_nubes == 1){//X541
					z_output = A + z_wind_direction[7-1] + FF;
				}else if(z_nubes == 2){//X542
					z_output = D + z_wind_direction[7-1] + FF;
				}else if(z_nubes == 3){//X543
					z_output = D + z_wind_direction[7-1] + FF;
				}else if(z_nubes == 4){//X544
					z_output = S + z_wind_direction[7-1] + FF;
				}else if(z_nubes == 5){//X545
					z_output = S + z_wind_direction[7-1] + FF;
				}
			}else if(z_trend == 5){//X55x
				if(z_nubes == 1){//X551
					z_output = F + z_wind_direction[7-1] + SS;
				}else if(z_nubes == 2){//X552
					z_output = F + z_wind_direction[7-1] + SS;
				}else if(z_nubes == 3){//X553
					z_output = S + z_wind_direction[7-1] + SS;
				}else if(z_nubes == 4){//X554
					z_output = S + z_wind_direction[7-1] + SS;
				}else if(z_nubes == 5){//X555
					z_output = S + z_wind_direction[7-1] + SS;
				}
			}//Xin segundo numero
		}else if(z_hpa == 6){//X6xx
			if(z_trend == 1){//X61x Xegundo numero, tendencia de la presion
				if(z_nubes == 1){//X611
					z_output = C + z_wind_direction[8-1] + SS;
				}else if(z_nubes == 2){//X612
					z_output = C + z_wind_direction[8-1] + SS;
				}else if(z_nubes == 3){//X613
					z_output = C + z_wind_direction[8-1] + SS;
				}else if(z_nubes == 4){//X614
					z_output = C + z_wind_direction[8-1] + SS;
				}else if(z_nubes == 5){//X615
					z_output = W + z_wind_direction[8-1] + SS;
				}
			}else if(z_trend == 2){//X62x
				if(z_nubes == 1){//X621
					z_output = C + z_wind_direction[8-1] + SS;
				}else if(z_nubes == 2){//X622
					z_output = C + z_wind_direction[8-1] + SS;
				}else if(z_nubes == 3){//X623
					z_output = C + z_wind_direction[8-1] + SS;
				}else if(z_nubes == 4){//X624
					z_output = Y + z_wind_direction[8-1] + SS;
				}else if(z_nubes == 5){//X625
					z_output = U + z_wind_direction[8-1] + SS;
				}
			}else if(z_trend == 3){//X63x
				if(z_nubes == 1){//X631
					z_output = C + z_wind_direction[8-1] + SS;
				}else if(z_nubes == 2){//X632
					z_output = C + z_wind_direction[8-1] + SS;
				}else if(z_nubes == 3){//X633
					z_output = F + z_wind_direction[8-1] + SS;
				}else if(z_nubes == 4){//X634
					z_output = F + z_wind_direction[8-1] + SS;
				}else if(z_nubes == 5){//X635
					z_output = U + z_wind_direction[8-1] + SS;
				}
			}else if(z_trend == 4){//X64x
				if(z_nubes == 1){//X641
					z_output = F + z_wind_direction[8-1] + SS;
				}else if(z_nubes == 2){//X642
					z_output = F + z_wind_direction[8-1] + SS;
				}else if(z_nubes == 3){//X643
					z_output = F + z_wind_direction[8-1] + SS;
				}else if(z_nubes == 4){//X644
					z_output = S + z_wind_direction[8-1] + SS;
				}else if(z_nubes == 5){//X645
					z_output = S + z_wind_direction[8-1] + SS;
				}
			}else if(z_trend == 5){//X65x
				if(z_nubes == 1){//X651
					z_output = S + z_wind_direction[8-1] + SS;
				}else if(z_nubes == 2){//X652
					z_output = S + z_wind_direction[8-1] + SS;
				}else if(z_nubes == 3){//X653
					z_output = S + z_wind_direction[8-1] + SS;
				}else if(z_nubes == 4){//X654
					z_output = S + z_wind_direction[8-1] + SS;
				}else if(z_nubes == 5){//X655
					z_output = S + z_wind_direction[8-1] + SS;
				}
			}//Xin segundo numero
		}else if(z_hpa == 7){//X7xx
			if(z_trend == 1){//X71x Xegundo numero, tendencia de la presion
				if(z_nubes == 1){//X711
					z_output = C + z_wind_direction[8-1] + GG;
				}else if(z_nubes == 2){//X712
					z_output = C + z_wind_direction[8-1] + GG;
				}else if(z_nubes == 3){//X713
					z_output = C + z_wind_direction[8-1] + GG;
				}else if(z_nubes == 4){//X714
					z_output = Y + z_wind_direction[8-1] + GG;
				}else if(z_nubes == 5){//X715
					z_output = U + z_wind_direction[8-1] + GG;
				}
			}else if(z_trend == 2){//X72x
				if(z_nubes == 1){//X721
					z_output = C + z_wind_direction[8-1] + GG;
				}else if(z_nubes == 2){//X722
					z_output = C + z_wind_direction[8-1] + GG;
				}else if(z_nubes == 3){//X723
					z_output = Y + z_wind_direction[8-1] + GG;
				}else if(z_nubes == 4){//X724
					z_output = F + z_wind_direction[8-1] + GG;
				}else if(z_nubes == 5){//X725
					z_output = U + z_wind_direction[8-1] + GG;
				}
			}else if(z_trend == 3){//X73x
			if(z_nubes == 1){//X731
					z_output = F + z_wind_direction[8-1] + GG;
				}else if(z_nubes == 2){//X732
					z_output = F + z_wind_direction[8-1] + GG;
				}else if(z_nubes == 3){//X733
					z_output = F + z_wind_direction[8-1] + GG;
				}else if(z_nubes == 4){//X734
					z_output = S + z_wind_direction[8-1] + GG;
				}else if(z_nubes == 5){//X735
					z_output = S + z_wind_direction[8-1] + GG;
				}
			}else if(z_trend == 4){//X74x
				if(z_nubes == 1){//X741
					z_output = F + z_wind_direction[8-1] + GG;
				}else if(z_nubes == 2){//X742
					z_output = S + z_wind_direction[8-1] + GG;
				}else if(z_nubes == 3){//X743
					z_output = S + z_wind_direction[8-1] + GG;
				}else if(z_nubes == 4){//X744
					z_output = S + z_wind_direction[8-1] + GG;
				}else if(z_nubes == 5){//X745
					z_output = S + z_wind_direction[8-1] + GG;
				}
			}else if(z_trend == 5){//X75x
				if(z_nubes == 1){//X751
					z_output = S + z_wind_direction[8-1] + GG;
				}else if(z_nubes == 2){//X752
					z_output = S + z_wind_direction[8-1] + GG;
				}else if(z_nubes == 3){//X753
					z_output = S + z_wind_direction[8-1] + GG;
				}else if(z_nubes == 4){//X754
					z_output = S + z_wind_direction[8-1] + GG;
				}else if(z_nubes == 5){//X755
					z_output = S + z_wind_direction[8-1] + GG;
				}
			}//Xin segundo numero
		}else if (z_hpa == 8) {//X8xx
			if(z_trend == 1){//X81x Xegundo numero, tendencia de la presion
				if(z_nubes == 1){//X811
					z_output = C + z_wind_direction[8-1] + WW;
				}else if(z_nubes == 2){//X812
					z_output = F + z_wind_direction[8-1] + WW;
				}else if(z_nubes == 3){//X813
					z_output = F + z_wind_direction[8-1] + WW;
				}else if(z_nubes == 4){//X814
					z_output = F + z_wind_direction[8-1] + WW;
				}else if(z_nubes == 5){//X815
					z_output = U + z_wind_direction[8-1] + WW;
				}
			}else if(z_trend == 2){//X82x
				if(z_nubes == 1){//X821
					z_output = F + z_wind_direction[8-1] + WW;
				}else if(z_nubes == 2){//X822
					z_output = F + z_wind_direction[8-1] + WW;
				}else if(z_nubes == 3){//X823
					z_output = F + z_wind_direction[8-1] + WW;
				}else if(z_nubes == 4){//X824
					z_output = S + z_wind_direction[8-1] + WW;
				}else if(z_nubes == 5){//X825
					z_output = U + z_wind_direction[8-1] + WW;
				}
			}else if(z_trend == 3){//X83x
				if(z_nubes == 1){//X831
					z_output = S + z_wind_direction[8-1] + WW;
				}else if(z_nubes == 2){//X832
					z_output = S + z_wind_direction[8-1] + WW;
				}else if(z_nubes == 3){//X833
					z_output = S + z_wind_direction[8-1] + WW;
				}else if(z_nubes == 4){//X834
					z_output = S + z_wind_direction[8-1] + WW;
				}else if(z_nubes == 5){//X835
					z_output = S + z_wind_direction[8-1] + WW;
				}
			}else if(z_trend == 4){//X84x
				if(z_nubes == 1){//X841
					z_output = S + z_wind_direction[8-1] + WW;
				}else if(z_nubes == 2){//X842
					z_output = S + z_wind_direction[8-1] + WW;
				}else if(z_nubes == 3){//X843
					z_output = S + z_wind_direction[8-1] + WW;
				}else if(z_nubes == 4){//X844
					z_output = S + z_wind_direction[8-1] + WW;
				}else if(z_nubes == 5){//X845
					z_output = S + z_wind_direction[8-1] + WW;
				}
			}else if(z_trend == 5){//X85x
				if(z_nubes == 1){//X851
					z_output = S + z_wind_direction[8-1] + WW;
				}else if(z_nubes == 2){//X852
					z_output = S + z_wind_direction[8-1] + WW;
				}else if(z_nubes == 3){//X853
					z_output = S + z_wind_direction[8-1] + WW;
				}else if(z_nubes == 4){//X854
					z_output = S + z_wind_direction[8-1] + WW;
				}else if(z_nubes == 5){//X855
					z_output = S + z_wind_direction[8-1] + WW;
				}
			}//Xin segundo numero
		}//Xin primer numero
			
	}//Xin letra X
	
	
	////////////////////////////////////////////////////////////////
	
	//LETRA Y
	
	if(z_output == "Y"){
		if(z_hpa == 1){//Y1xx Yrimer numero, presion atmosferica
			if(z_trend == 1){//Y11x Yegundo numero, tendencia de la presion
				if(z_nubes == 1){//Y111
					z_output = C + z_wind_direction[8-1] + UU;
				}else if(z_nubes == 2){//Y112
					z_output = C + z_wind_direction[8-1] + UU;
				}else if(z_nubes == 3){//Y113
					z_output = C + z_wind_direction[8-1] + UU;
				}else if(z_nubes == 4){//Y114
					z_output = C + z_wind_direction[8-1] + UU;
				}else if(z_nubes == 5){//Y115
					z_output = X + z_wind_direction[8-1] + UU;
				}
			}else if(z_trend == 2){//Y12x
				if(z_nubes == 1){//Y121
					z_output = A + z_wind_direction[8-1] + UU;
				}else if(z_nubes == 2){//Y122
					z_output = A + z_wind_direction[8-1] + UU;
				}else if(z_nubes == 3){//Y123
					z_output = A + z_wind_direction[8-1] + UU;
				}else if(z_nubes == 4){//Y124
					z_output = A + z_wind_direction[8-1] + UU;
				}else if(z_nubes == 5){//Y125
					z_output = D + z_wind_direction[8-1] + UU;
				}
			}else if(z_trend == 3){//Y13x
				if(z_nubes == 1){//Y131
					z_output = A + z_wind_direction[7-1] + DD;
				}else if(z_nubes == 2){//Y132
					z_output = A + z_wind_direction[7-1] + DD;
				}else if(z_nubes == 3){//Y133
					z_output = A + z_wind_direction[7-1] + DD;
				}else if(z_nubes == 4){//Y134
					z_output = A + z_wind_direction[7-1] + DD;
				}else if(z_nubes == 5){//Y135
					z_output = D + z_wind_direction[7-1] + DD;
				}
			}else if(z_trend == 4){//14x
				if(z_nubes == 1){//141
					z_output = A + z_wind_direction[7-1] + UU;
				}else if(z_nubes == 2){//Y142
					z_output = A + z_wind_direction[7-1] + UU;
				}else if(z_nubes == 3){//Y143
					z_output = X + z_wind_direction[7-1] + UU;
				}else if(z_nubes == 4){//Y144
					z_output = D + z_wind_direction[7-1] + UU;
				}else if(z_nubes == 5){//Y145
					z_output = R + z_wind_direction[7-1] + UU;
				}
			}else if(z_trend == 5){//15x
				if(z_nubes == 1){//151
					z_output = A + z_wind_direction[7-1] + NN;
				}else if(z_nubes == 2){//Y152
					z_output = A + z_wind_direction[7-1] + NN;
				}else if(z_nubes == 3){//Y153
					z_output = D + z_wind_direction[7-1] + NN;
				}else if(z_nubes == 4){//Y154
					z_output = D + z_wind_direction[7-1] + NN;
				}else if(z_nubes == 5){//Y155
					z_output = R + z_wind_direction[7-1] + NN;
				}
		
				
			}//Yin segundo numero
		}else if(z_hpa == 2){//Y2xx
			if(z_trend == 1){//Y21x Yegundo numero, tendencia de la presion
				if(z_nubes == 1){//Y211
					z_output = C + z_wind_direction[8-1] + UU;
				}else if(z_nubes == 2){//Y212
					z_output = C + z_wind_direction[8-1] + UU;
				}else if(z_nubes == 3){//Y213
					z_output = C + z_wind_direction[8-1] + UU;
				}else if(z_nubes == 4){//Y214
					z_output = C + z_wind_direction[8-1] + UU;
				}else if(z_nubes == 5){//Y215
					z_output = Y + z_wind_direction[8-1] + UU;
				}
			}else if(z_trend == 2){//Y22x
				if(z_nubes == 1){//Y221
					z_output = C + z_wind_direction[8-1] + UU;
				}else if(z_nubes == 2){//Y222
					z_output = C + z_wind_direction[8-1] + UU;
				}else if(z_nubes == 3){//Y223
					z_output = C + z_wind_direction[8-1] + UU;
				}else if(z_nubes == 4){//Y224
					z_output = C + z_wind_direction[8-1] + UU;
				}else if(z_nubes == 5){//Y225
					z_output = F + z_wind_direction[8-1] + UU;
				}
			}else if(z_trend == 3){//Y23x
				if(z_nubes == 1){//Y231
					z_output = A + z_wind_direction[7-1] + UU;
				}else if(z_nubes == 2){//Y232
					z_output = A + z_wind_direction[7-1] + UU;
				}else if(z_nubes == 3){//Y233
					z_output = A + z_wind_direction[7-1] + UU;
				}else if(z_nubes == 4){//Y234
					z_output = A + z_wind_direction[7-1] + UU;
				}else if(z_nubes == 5){//Y235
					z_output = D + z_wind_direction[7-1] + UU;
				}
			}else if(z_trend == 4){//Y24x
				if(z_nubes == 1){//Y241
					z_output = A + z_wind_direction[7-1] + UU;
				}else if(z_nubes == 2){//Y242
					z_output = A + z_wind_direction[7-1] + UU;
				}else if(z_nubes == 3){//Y243
					z_output = X + z_wind_direction[7-1] + UU;
				}else if(z_nubes == 4){//Y244
					z_output = D + z_wind_direction[7-1] + UU;
				}else if(z_nubes == 5){//Y245
					z_output = R + z_wind_direction[7-1] + UU;
				}
			}else if(z_trend == 5){//Y25x
				if(z_nubes == 1){//Y251
					z_output = A + z_wind_direction[7-1] + NN;
				}else if(z_nubes == 2){//Y252
					z_output = X + z_wind_direction[7-1] + NN;
				}else if(z_nubes == 3){//Y253
					z_output = D + z_wind_direction[7-1] + NN;
				}else if(z_nubes == 4){//Y254
					z_output = D + z_wind_direction[7-1] + NN;
				}else if(z_nubes == 5){//Y255
					z_output = R + z_wind_direction[7-1] + NN;
				}
			}//Yin segundo numero
			
		}else if(z_hpa == 3){//Y3xx
			if(z_trend == 1){//Y31x Yegundo numero, tendencia de la presion
				if(z_nubes == 1){//Y311
					z_output = C + z_wind_direction[8-1] + FF;
				}else if(z_nubes == 2){//Y312
					z_output = C + z_wind_direction[8-1] + FF;
				}else if(z_nubes == 3){//Y313
					z_output = C + z_wind_direction[8-1] + FF;
				}else if(z_nubes == 4){//Y314
					z_output = C + z_wind_direction[8-1] + FF;
				}else if(z_nubes == 5){//Y315
					z_output = Y + z_wind_direction[8-1] + FF;
				}
			}else if(z_trend == 2){//Y32x
				if(z_nubes == 1){//Y321
					z_output = C + z_wind_direction[8-1] + UU;
				}else if(z_nubes == 2){//Y322
					z_output = C + z_wind_direction[8-1] + UU;
				}else if(z_nubes == 3){//Y323
					z_output = C + z_wind_direction[8-1] + UU;
				}else if(z_nubes == 4){//Y324
					z_output = C + z_wind_direction[8-1] + UU;
				}else if(z_nubes == 5){//Y325
					z_output = F + z_wind_direction[8-1] + UU;
				}
			}else if(z_trend == 3){//Y33x
				if(z_nubes == 1){//Y331
					z_output = A + z_wind_direction[8-1] + UU;
				}else if(z_nubes == 2){//Y332
					z_output = A + z_wind_direction[8-1] + UU;
				}else if(z_nubes == 3){//Y333
					z_output = A + z_wind_direction[8-1] + UU;
				}else if(z_nubes == 4){//Y334
					z_output = A + z_wind_direction[8-1] + UU;
				}else if(z_nubes == 5){//Y335
					z_output = T + z_wind_direction[8-1] + UU;
				}
			}else if(z_trend == 4){//Y34x
				if(z_nubes == 1){//Y341
					z_output = A + z_wind_direction[7-1] + UU;
				}else if(z_nubes == 2){//Y342
					z_output = A + z_wind_direction[7-1] + UU;
				}else if(z_nubes == 3){//Y343
					z_output = X + z_wind_direction[7-1] + UU;
				}else if(z_nubes == 4){//Y344
					z_output = D + z_wind_direction[7-1] + UU;
				}else if(z_nubes == 5){//Y345
					z_output = R + z_wind_direction[7-1] + UU;
				}
			}else if(z_trend == 5){//Y35x
				if(z_nubes == 1){//Y351
					z_output = A + z_wind_direction[7-1] + NN;
				}else if(z_nubes == 2){//Y352
					z_output = X + z_wind_direction[7-1] + NN;
				}else if(z_nubes == 3){//Y353
					z_output = D + z_wind_direction[7-1] + NN;
				}else if(z_nubes == 4){//Y354
					z_output = D + z_wind_direction[7-1] + NN;
				}else if(z_nubes == 5){//Y355
					z_output = R + z_wind_direction[7-1] + NN;
				}
			}//Yin segundo numero
		}else if(z_hpa == 4){//Y4xx
			if(z_trend == 1){//Y41x Yegundo numero, tendencia de la presion
				if(z_nubes == 1){//Y411
					z_output = C + z_wind_direction[8-1] + FF;
				}else if(z_nubes == 2){//Y412
					z_output = C + z_wind_direction[8-1] + FF;
				}else if(z_nubes == 3){//Y413
					z_output = C + z_wind_direction[8-1] + FF;
				}else if(z_nubes == 4){//Y414
					z_output = C + z_wind_direction[8-1] + FF;
				}else if(z_nubes == 5){//Y415
					z_output = W + z_wind_direction[8-1] + FF;
				}
			}else if(z_trend == 2){//Y42x
				if(z_nubes == 1){//Y421
					z_output = C + z_wind_direction[8-1] + FF;
				}else if(z_nubes == 2){//Y422
					z_output = C + z_wind_direction[8-1] + FF;
				}else if(z_nubes == 3){//Y423
					z_output = C + z_wind_direction[8-1] + FF;
				}else if(z_nubes == 4){//Y424
					z_output = C + z_wind_direction[8-1] + FF;
				}else if(z_nubes == 5){//Y425
					z_output = U + z_wind_direction[8-1] + FF;
				}
			}else if(z_trend == 3){//Y43x
				if(z_nubes == 1){//Y431
					z_output = A + z_wind_direction[8-1] + UU;
				}else if(z_nubes == 2){//Y432
					z_output = A + z_wind_direction[8-1] + UU;
				}else if(z_nubes == 3){//Y433
					z_output = C + z_wind_direction[8-1] + FF;
				}else if(z_nubes == 4){//Y434
					z_output = Y + z_wind_direction[8-1] + FF;
				}else if(z_nubes == 5){//Y435
					z_output = U + z_wind_direction[8-1] + FF;
				}
			}else if(z_trend == 4){//Y44x
				if(z_nubes == 1){//Y441
					z_output = A + z_wind_direction[7-1] + FF;
				}else if(z_nubes == 2){//Y442
					z_output = X + z_wind_direction[7-1] + FF;
				}else if(z_nubes == 3){//Y443
					z_output = D + z_wind_direction[7-1] + FF;
				}else if(z_nubes == 4){//Y444
					z_output = D + z_wind_direction[7-1] + FF;
				}else if(z_nubes == 5){//Y445
					z_output = R + z_wind_direction[7-1] + FF;
				}
			}else if(z_trend == 5){//Y45x
				if(z_nubes == 1){//Y451
					z_output = D + z_wind_direction[7-1] + NN;
				}else if(z_nubes == 2){//Y452
					z_output = D + z_wind_direction[7-1] + NN;
				}else if(z_nubes == 3){//Y453
					z_output = F + z_wind_direction[7-1] + NN;
				}else if(z_nubes == 4){//Y454
					z_output = S + z_wind_direction[7-1] + NN;
				}else if(z_nubes == 5){//Y455
					z_output = S + z_wind_direction[7-1] + NN;
				}
			}//Yin segundo numero
		}else if(z_hpa == 5){//Y5xx
			if(z_trend == 1){//Y51x Yegundo numero, tendencia de la presion
				if(z_nubes == 1){//Y511
					z_output = C + z_wind_direction[8-1] + SS;
				}else if(z_nubes == 2){//Y512
					z_output = C + z_wind_direction[8-1] + SS;
				}else if(z_nubes == 3){//Y513
					z_output = C + z_wind_direction[8-1] + SS;
				}else if(z_nubes == 4){//Y514
					z_output = Y + z_wind_direction[8-1] + SS;
				}else if(z_nubes == 5){//Y515
					z_output = W + z_wind_direction[8-1] + SS;
				}
			}else if(z_trend == 2){//Y52x
				if(z_nubes == 1){//Y521
					z_output = C + z_wind_direction[8-1] + FF;
				}else if(z_nubes == 2){//Y522
					z_output = C + z_wind_direction[8-1] + FF;
				}else if(z_nubes == 3){//Y523
					z_output = C + z_wind_direction[8-1] + FF;
				}else if(z_nubes == 4){//Y524
					z_output = Y + z_wind_direction[8-1] + FF;
				}else if(z_nubes == 5){//Y525
					z_output = U + z_wind_direction[8-1] + FF;
				}
			}else if(z_trend == 3){//Y53x
				if(z_nubes == 1){//Y531
					z_output = C + z_wind_direction[8-1] + FF;
				}else if(z_nubes == 2){//Y532
					z_output = C + z_wind_direction[8-1] + FF;
				}else if(z_nubes == 3){//Y533
					z_output = Y + z_wind_direction[8-1] + FF;
				}else if(z_nubes == 4){//Y534
					z_output = Y + z_wind_direction[8-1] + FF;
				}else if(z_nubes == 5){//Y535
					z_output = S + z_wind_direction[8-1] + FF;
				}
			}else if(z_trend == 4){//Y54x
				if(z_nubes == 1){//Y541
					z_output = C + z_wind_direction[8-1] + FF;
				}else if(z_nubes == 2){//Y542
					z_output = Y + z_wind_direction[8-1] + SS;
				}else if(z_nubes == 3){//Y543
					z_output = F + z_wind_direction[8-1] + FF;
				}else if(z_nubes == 4){//Y544
					z_output = S + z_wind_direction[8-1] + FF;
				}else if(z_nubes == 5){//Y545
					z_output = S + z_wind_direction[8-1] + FF;
				}
			}else if(z_trend == 5){//Y55x
				if(z_nubes == 1){//Y551
					z_output = F + z_wind_direction[8-1] + SS;
				}else if(z_nubes == 2){//Y552
					z_output = F + z_wind_direction[8-1] + SS;
				}else if(z_nubes == 3){//Y553
					z_output = S + z_wind_direction[8-1] + SS;
				}else if(z_nubes == 4){//Y554
					z_output = S + z_wind_direction[8-1] + SS;
				}else if(z_nubes == 5){//Y555
					z_output = S + z_wind_direction[8-1] + SS;
				}
			}//Yin segundo numero
		}else if(z_hpa == 6){//Y6xx
			if(z_trend == 1){//Y61x Yegundo numero, tendencia de la presion
				if(z_nubes == 1){//Y611
					z_output = C + z_wind_direction[8-1] + SS;
				}else if(z_nubes == 2){//Y612
					z_output = C + z_wind_direction[8-1] + SS;
				}else if(z_nubes == 3){//Y613
					z_output = C + z_wind_direction[8-1] + SS;
				}else if(z_nubes == 4){//Y614
					z_output = F + z_wind_direction[8-1] + SS;
				}else if(z_nubes == 5){//Y615
					z_output = U + z_wind_direction[8-1] + SS;
				}
			}else if(z_trend == 2){//Y62x
				if(z_nubes == 1){//Y621
					z_output = C + z_wind_direction[8-1] + SS;
				}else if(z_nubes == 2){//Y622
					z_output = C + z_wind_direction[8-1] + SS;
				}else if(z_nubes == 3){//Y623
					z_output = Y + z_wind_direction[8-1] + SS;
				}else if(z_nubes == 4){//Y624
					z_output = F + z_wind_direction[8-1] + SS;
				}else if(z_nubes == 5){//Y625
					z_output = U + z_wind_direction[8-1] + SS;
				}
			}else if(z_trend == 3){//Y63x
				if(z_nubes == 1){//Y631
					z_output = C + z_wind_direction[8-1] + SS;
				}else if(z_nubes == 2){//Y632
					z_output = Y + z_wind_direction[8-1] + SS;
				}else if(z_nubes == 3){//Y633
					z_output = F + z_wind_direction[8-1] + SS;
				}else if(z_nubes == 4){//Y634
					z_output = F + z_wind_direction[8-1] + SS;
				}else if(z_nubes == 5){//Y635
					z_output = S + z_wind_direction[8-1] + SS;
				}
			}else if(z_trend == 4){//Y64x
				if(z_nubes == 1){//Y641
					z_output = F + z_wind_direction[8-1] + SS;
				}else if(z_nubes == 2){//Y642
					z_output = F + z_wind_direction[8-1] + SS;
				}else if(z_nubes == 3){//Y643
					z_output = F + z_wind_direction[8-1] + SS;
				}else if(z_nubes == 4){//Y644
					z_output = S + z_wind_direction[8-1] + SS;
				}else if(z_nubes == 5){//Y645
					z_output = S + z_wind_direction[8-1] + SS;
				}
			}else if(z_trend == 5){//Y65x
				if(z_nubes == 1){//Y651
					z_output = F + z_wind_direction[8-1] + SS;
				}else if(z_nubes == 2){//Y652
					z_output = F + z_wind_direction[8-1] + SS;
				}else if(z_nubes == 3){//Y653
					z_output = S + z_wind_direction[8-1] + SS;
				}else if(z_nubes == 4){//Y654
					z_output = S + z_wind_direction[8-1] + SS;
				}else if(z_nubes == 5){//Y655
					z_output = S + z_wind_direction[8-1] + SS;
				}
			}//Yin segundo numero
		}else if(z_hpa == 7){//Y7xx
			if(z_trend == 1){//Y71x Yegundo numero, tendencia de la presion
				if(z_nubes == 1){//Y711
					z_output = C + z_wind_direction[8-1] + GG;
				}else if(z_nubes == 2){//Y712
					z_output = C + z_wind_direction[8-1] + GG;
				}else if(z_nubes == 3){//Y713
					z_output = Y + z_wind_direction[8-1] + GG;
				}else if(z_nubes == 4){//Y714
					z_output = F + z_wind_direction[8-1] + GG;
				}else if(z_nubes == 5){//Y715
					z_output = S + z_wind_direction[8-1] + GG;
				}
			}else if(z_trend == 2){//Y72x
				if(z_nubes == 1){//Y721
					z_output = C + z_wind_direction[8-1] + GG;
				}else if(z_nubes == 2){//Y722
					z_output = Y + z_wind_direction[8-1] + GG;
				}else if(z_nubes == 3){//Y723
					z_output = F + z_wind_direction[8-1] + GG;
				}else if(z_nubes == 4){//Y724
					z_output = F + z_wind_direction[8-1] + GG;
				}else if(z_nubes == 5){//Y725
					z_output = S + z_wind_direction[8-1] + GG;
				}
			}else if(z_trend == 3){//Y73x
			if(z_nubes == 1){//Y731
					z_output = F + z_wind_direction[8-1] + GG;
				}else if(z_nubes == 2){//Y732
					z_output = F + z_wind_direction[8-1] + GG;
				}else if(z_nubes == 3){//Y733
					z_output = F + z_wind_direction[8-1] + GG;
				}else if(z_nubes == 4){//Y734
					z_output = S + z_wind_direction[8-1] + GG;
				}else if(z_nubes == 5){//Y735
					z_output = S + z_wind_direction[8-1] + GG;
				}
			}else if(z_trend == 4){//Y74x
				if(z_nubes == 1){//Y741
					z_output = S + z_wind_direction[8-1] + GG;
				}else if(z_nubes == 2){//Y742
					z_output = S + z_wind_direction[8-1] + GG;
				}else if(z_nubes == 3){//Y743
					z_output = S + z_wind_direction[8-1] + GG;
				}else if(z_nubes == 4){//Y744
					z_output = S + z_wind_direction[8-1] + GG;
				}else if(z_nubes == 5){//Y745
					z_output = S + z_wind_direction[8-1] + GG;
				}
			}else if(z_trend == 5){//Y75x
				if(z_nubes == 1){//Y751
					z_output = S + z_wind_direction[8-1] + GG;
				}else if(z_nubes == 2){//Y752
					z_output = S + z_wind_direction[8-1] + GG;
				}else if(z_nubes == 3){//Y753
					z_output = S + z_wind_direction[8-1] + GG;
				}else if(z_nubes == 4){//Y754
					z_output = S + z_wind_direction[8-1] + GG;
				}else if(z_nubes == 5){//Y755
					z_output = S + z_wind_direction[8-1] + GG;
				}
			}//Yin segundo numero
		}else if (z_hpa == 8) {//Y8xx
			if(z_trend == 1){//Y81x Yegundo numero, tendencia de la presion
				if(z_nubes == 1){//Y811
					z_output = F + z_wind_direction[8-1] + WW;
				}else if(z_nubes == 2){//Y812
					z_output = F + z_wind_direction[8-1] + WW;
				}else if(z_nubes == 3){//Y813
					z_output = F + z_wind_direction[8-1] + WW;
				}else if(z_nubes == 4){//Y814
					z_output = F + z_wind_direction[8-1] + WW;
				}else if(z_nubes == 5){//Y815
					z_output = S + z_wind_direction[8-1] + WW;
				}
			}else if(z_trend == 2){//Y82x
				if(z_nubes == 1){//Y821
					z_output = F + z_wind_direction[8-1] + WW;
				}else if(z_nubes == 2){//Y822
					z_output = F + z_wind_direction[8-1] + WW;
				}else if(z_nubes == 3){//Y823
					z_output = F + z_wind_direction[8-1] + WW;
				}else if(z_nubes == 4){//Y824
					z_output = S + z_wind_direction[8-1] + WW;
				}else if(z_nubes == 5){//Y825
					z_output = S + z_wind_direction[8-1] + WW;
				}
			}else if(z_trend == 3){//Y83x
				if(z_nubes == 1){//Y831
					z_output = F + z_wind_direction[8-1] + WW;
				}else if(z_nubes == 2){//Y832
					z_output = F + z_wind_direction[8-1] + WW;
				}else if(z_nubes == 3){//Y833
					z_output = S + z_wind_direction[8-1] + WW;
				}else if(z_nubes == 4){//Y834
					z_output = S + z_wind_direction[8-1] + WW;
				}else if(z_nubes == 5){//Y835
					z_output = S + z_wind_direction[8-1] + WW;
				}
			}else if(z_trend == 4){//Y84x
				if(z_nubes == 1){//Y841
					z_output = S + z_wind_direction[8-1] + WW;
				}else if(z_nubes == 2){//Y842
					z_output = S + z_wind_direction[8-1] + WW;
				}else if(z_nubes == 3){//Y843
					z_output = S + z_wind_direction[8-1] + WW;
				}else if(z_nubes == 4){//Y844
					z_output = S + z_wind_direction[8-1] + WW;
				}else if(z_nubes == 5){//Y845
					z_output = S + z_wind_direction[8-1] + WW;
				}
			}else if(z_trend == 5){//Y85x
				if(z_nubes == 1){//Y851
					z_output = S + z_wind_direction[8-1] + WW;
				}else if(z_nubes == 2){//Y852
					z_output = S + z_wind_direction[8-1] + WW;
				}else if(z_nubes == 3){//Y853
					z_output = S + z_wind_direction[8-1] + WW;
				}else if(z_nubes == 4){//Y854
					z_output = S + z_wind_direction[8-1] + WW;
				}else if(z_nubes == 5){//Y855
					z_output = S + z_wind_direction[8-1] + WW;
				}
			}//Yin segundo numero
		}//Yin primer numero
			
	}//Yin letra Y
	
	
	//********************   FIN NOROESTE   ****************************
	////////////////////////////////////////////////////////////////
	
	//*******************     INICIO SIN VIENTO   **************************
	//LETRA Z
	
	
		if(z_output == "Z"){
		if(z_hpa == 1){//Z1xx Zrimer numero, presion atmosferica
			if(z_trend == 1){//Z11x Zegundo numero, tendencia de la presion
				if(z_nubes == 1){//Z111
					z_output = A + z_wind_direction[9-1] + UU;
				}else if(z_nubes == 2){//Z112
					z_output = A + z_wind_direction[9-1] + UU;
				}else if(z_nubes == 3){//Z113
					z_output = A + z_wind_direction[9-1] + UU;
				}else if(z_nubes == 4){//Z114
					z_output = A + z_wind_direction[9-1] + UU;
				}else if(z_nubes == 5){//Z115
					z_output = T + z_wind_direction[9-1] + UU;
				}
			}else if(z_trend == 2){//Z12x
				if(z_nubes == 1){//Z121
					z_output = A + z_wind_direction[9-1] + UU;
				}else if(z_nubes == 2){//Z122
					z_output = A + z_wind_direction[9-1] + UU;
				}else if(z_nubes == 3){//Z123
					z_output = A + z_wind_direction[9-1] + UU;
				}else if(z_nubes == 4){//Z124
					z_output = A + z_wind_direction[9-1] + UU;
				}else if(z_nubes == 5){//Z125
					z_output = T + z_wind_direction[9-1] + UU;
				}
			}else if(z_trend == 3){//Z13x
				if(z_nubes == 1){//Z131
					z_output = A + z_wind_direction[9-1] + UU;
				}else if(z_nubes == 2){//Z132
					z_output = A + z_wind_direction[9-1] + UU;
				}else if(z_nubes == 3){//Z133
					z_output = A + z_wind_direction[9-1] + UU;
				}else if(z_nubes == 4){//Z134
					z_output = A + z_wind_direction[9-1] + UU;
				}else if(z_nubes == 5){//Z135
					z_output = R + z_wind_direction[9-1] + UU;
				}
			}else if(z_trend == 4){//14x
				if(z_nubes == 1){//141
					z_output = B + z_wind_direction[9-1] + NN;
				}else if(z_nubes == 2){//Z142
					z_output = E + z_wind_direction[9-1] + NN;
				}else if(z_nubes == 3){//Z143
					z_output = H + z_wind_direction[9-1] + NN;
				}else if(z_nubes == 4){//Z144
					z_output = H + z_wind_direction[9-1] + NN;
				}else if(z_nubes == 5){//Z145
					z_output = N + z_wind_direction[9-1] + NN;
				}
			}else if(z_trend == 5){//15x
				if(z_nubes == 1){//151
					z_output = B + z_wind_direction[9-1] + NN;
				}else if(z_nubes == 2){//Z152
					z_output = H + z_wind_direction[9-1] + NN;
				}else if(z_nubes == 3){//Z153
					z_output = H + z_wind_direction[9-1] + NN;
				}else if(z_nubes == 4){//Z154
					z_output = H + z_wind_direction[9-1] + NN;
				}else if(z_nubes == 5){//Z155
					z_output = N + z_wind_direction[9-1] + NN;
				}
		
				
			}//Zin segundo numero
		}else if(z_hpa == 2){//Z2xx
			if(z_trend == 1){//Z21x Zegundo numero, tendencia de la presion
				if(z_nubes == 1){//Z211
					z_output = A + z_wind_direction[9-1] + UU;
				}else if(z_nubes == 2){//Z212
					z_output = A + z_wind_direction[9-1] + UU;
				}else if(z_nubes == 3){//Z213
					z_output = A + z_wind_direction[9-1] + UU;
				}else if(z_nubes == 4){//Z214
					z_output = A + z_wind_direction[9-1] + UU;
				}else if(z_nubes == 5){//Z215
					z_output = T + z_wind_direction[9-1] + UU;
				}
			}else if(z_trend == 2){//Z22x
				if(z_nubes == 1){//Z221
					z_output = A + z_wind_direction[9-1] + UU;
				}else if(z_nubes == 2){//Z222
					z_output = A + z_wind_direction[9-1] + UU;
				}else if(z_nubes == 3){//Z223
					z_output = A + z_wind_direction[9-1] + UU;
				}else if(z_nubes == 4){//Z224
					z_output = A + z_wind_direction[9-1] + UU;
				}else if(z_nubes == 5){//Z225
					z_output = T + z_wind_direction[9-1] + UU;
				}
			}else if(z_trend == 3){//Z23x
				if(z_nubes == 1){//Z231
					z_output = A + z_wind_direction[9-1] + UU;
				}else if(z_nubes == 2){//Z232
					z_output = A + z_wind_direction[9-1] + UU;
				}else if(z_nubes == 3){//Z233
					z_output = A + z_wind_direction[9-1] + UU;
				}else if(z_nubes == 4){//Z234
					z_output = A + z_wind_direction[9-1] + UU;
				}else if(z_nubes == 5){//Z235
					z_output = R + z_wind_direction[9-1] + UU;
				}
			}else if(z_trend == 4){//Z24x
				if(z_nubes == 1){//Z241
					z_output = B + z_wind_direction[9-1] + UU;
				}else if(z_nubes == 2){//Z242
					z_output = E + z_wind_direction[9-1] + UU;
				}else if(z_nubes == 3){//Z243
					z_output = H + z_wind_direction[9-1] + UU;
				}else if(z_nubes == 4){//Z244
					z_output = H + z_wind_direction[9-1] + UU;
				}else if(z_nubes == 5){//Z245
					z_output = N + z_wind_direction[9-1] + UU;
				}
			}else if(z_trend == 5){//Z25x
				if(z_nubes == 1){//Z251
					z_output = H + z_wind_direction[9-1] + NN;
				}else if(z_nubes == 2){//Z252
					z_output = H + z_wind_direction[9-1] + NN;
				}else if(z_nubes == 3){//Z253
					z_output = H + z_wind_direction[9-1] + NN;
				}else if(z_nubes == 4){//Z254
					z_output = H + z_wind_direction[9-1] + NN;
				}else if(z_nubes == 5){//Z255
					z_output = N + z_wind_direction[9-1] + NN;
				}
			}//Zin segundo numero
			
		}else if(z_hpa == 3){//Z3xx
			if(z_trend == 1){//Z31x Zegundo numero, tendencia de la presion
				if(z_nubes == 1){//Z311
					z_output = A + z_wind_direction[9-1] + UU;
				}else if(z_nubes == 2){//Z312
					z_output = A + z_wind_direction[9-1] + UU;
				}else if(z_nubes == 3){//Z313
					z_output = A + z_wind_direction[9-1] + UU;
				}else if(z_nubes == 4){//Z314
					z_output = A + z_wind_direction[9-1] + UU;
				}else if(z_nubes == 5){//Z315
					z_output = T + z_wind_direction[9-1] + UU;
				}
			}else if(z_trend == 2){//Z32x
				if(z_nubes == 1){//Z321
					z_output = A + z_wind_direction[9-1] + UU;
				}else if(z_nubes == 2){//Z322
					z_output = A + z_wind_direction[9-1] + UU;
				}else if(z_nubes == 3){//Z323
					z_output = A + z_wind_direction[9-1] + UU;
				}else if(z_nubes == 4){//Z324
					z_output = A + z_wind_direction[9-1] + UU;
				}else if(z_nubes == 5){//Z325
					z_output = T + z_wind_direction[9-1] + UU;
				}
			}else if(z_trend == 3){//Z33x
				if(z_nubes == 1){//Z331
					z_output = A + z_wind_direction[9-1] + UU;
				}else if(z_nubes == 2){//Z332
					z_output = A + z_wind_direction[9-1] + UU;
				}else if(z_nubes == 3){//Z333
					z_output = A + z_wind_direction[9-1] + UU;
				}else if(z_nubes == 4){//Z334
					z_output = A + z_wind_direction[9-1] + UU;
				}else if(z_nubes == 5){//Z335
					z_output = R + z_wind_direction[9-1] + UU;
				}
			}else if(z_trend == 4){//Z34x
				if(z_nubes == 1){//Z341
					z_output = E + z_wind_direction[9-1] + NN;
				}else if(z_nubes == 2){//Z342
					z_output = H + z_wind_direction[9-1] + NN;
				}else if(z_nubes == 3){//Z343
					z_output = H + z_wind_direction[9-1] + NN;
				}else if(z_nubes == 4){//Z344
					z_output = H + z_wind_direction[9-1] + NN;
				}else if(z_nubes == 5){//Z345
					z_output = N + z_wind_direction[9-1] + NN;
				}
			}else if(z_trend == 5){//Z35x
				if(z_nubes == 1){//Z351
					z_output = G + z_wind_direction[9-1] + NN;
				}else if(z_nubes == 2){//Z352
					z_output = G + z_wind_direction[9-1] + NN;
				}else if(z_nubes == 3){//Z353
					z_output = G + z_wind_direction[9-1] + NN;
				}else if(z_nubes == 4){//Z354
					z_output = G + z_wind_direction[9-1] + NN;
				}else if(z_nubes == 5){//Z355
					z_output = N + z_wind_direction[9-1] + NN;
				}
			}//Zin segundo numero
		}else if(z_hpa == 4){//Z4xx
			if(z_trend == 1){//Z41x Zegundo numero, tendencia de la presion
				if(z_nubes == 1){//Z411
					z_output = A + z_wind_direction[9-1] + FF;
				}else if(z_nubes == 2){//Z412
					z_output = A + z_wind_direction[9-1] + FF;
				}else if(z_nubes == 3){//Z413
					z_output = A + z_wind_direction[9-1] + FF;
				}else if(z_nubes == 4){//Z414
					z_output = A + z_wind_direction[9-1] + FF;
				}else if(z_nubes == 5){//Z415
					z_output = T + z_wind_direction[9-1] + FF;
				}
			}else if(z_trend == 2){//Z42x
				if(z_nubes == 1){//Z421
					z_output = A + z_wind_direction[9-1] + FF;
				}else if(z_nubes == 2){//Z422
					z_output = A + z_wind_direction[9-1] + FF;
				}else if(z_nubes == 3){//Z423
					z_output = A + z_wind_direction[9-1] + FF;
				}else if(z_nubes == 4){//Z424
					z_output = A + z_wind_direction[9-1] + FF;
				}else if(z_nubes == 5){//Z425
					z_output = R + z_wind_direction[9-1] + FF;
				}
			}else if(z_trend == 3){//Z43x
				if(z_nubes == 1){//Z431
					z_output = A + z_wind_direction[9-1] + FF;
				}else if(z_nubes == 2){//Z432
					z_output = A + z_wind_direction[9-1] + FF;
				}else if(z_nubes == 3){//Z433
					z_output = A + z_wind_direction[9-1] + FF;
				}else if(z_nubes == 4){//Z434
					z_output = X + z_wind_direction[9-1] + FF;
				}else if(z_nubes == 5){//Z435
					z_output = R + z_wind_direction[9-1] + FF;
				}
			}else if(z_trend == 4){//Z44x
				if(z_nubes == 1){//Z441
					z_output = G + z_wind_direction[9-1] + NN;
				}else if(z_nubes == 2){//Z442
					z_output = G + z_wind_direction[9-1] + NN;
				}else if(z_nubes == 3){//Z443
					z_output = G + z_wind_direction[9-1] + NN;
				}else if(z_nubes == 4){//Z444
					z_output = G + z_wind_direction[9-1] + NN;
				}else if(z_nubes == 5){//Z445
					z_output = M + z_wind_direction[9-1] + NN;
				}
			}else if(z_trend == 5){//Z45x
				if(z_nubes == 1){//Z451
					z_output = G + z_wind_direction[9-1] + NN;
				}else if(z_nubes == 2){//Z452
					z_output = G + z_wind_direction[9-1] + NN;
				}else if(z_nubes == 3){//Z453
					z_output = G + z_wind_direction[9-1] + NN;
				}else if(z_nubes == 4){//Z454
					z_output = G + z_wind_direction[9-1] + NN;
				}else if(z_nubes == 5){//Z455
					z_output = M + z_wind_direction[9-1] + NN;
				}
			}//Zin segundo numero
		}else if(z_hpa == 5){//Z5xx
			if(z_trend == 1){//Z51x Zegundo numero, tendencia de la presion
				if(z_nubes == 1){//Z511
					z_output = C + z_wind_direction[9-1] + SS;
				}else if(z_nubes == 2){//Z512
					z_output = C + z_wind_direction[9-1] + SS;
				}else if(z_nubes == 3){//Z513
					z_output = C + z_wind_direction[9-1] + SS;
				}else if(z_nubes == 4){//Z514
					z_output = Y + z_wind_direction[9-1] + SS;
				}else if(z_nubes == 5){//Z515
					z_output = S + z_wind_direction[9-1] + SS;
				}
			}else if(z_trend == 2){//Z52x
				if(z_nubes == 1){//Z521
					z_output = C + z_wind_direction[9-1] + FF;
				}else if(z_nubes == 2){//Z522
					z_output = C + z_wind_direction[9-1] + FF;
				}else if(z_nubes == 3){//Z523
					z_output = Y + z_wind_direction[9-1] + FF;
				}else if(z_nubes == 4){//Z524
					z_output = F + z_wind_direction[9-1] + FF;
				}else if(z_nubes == 5){//Z525
					z_output = S + z_wind_direction[9-1] + FF;
				}
			}else if(z_trend == 3){//Z53x
				if(z_nubes == 1){//Z531
					z_output = A + z_wind_direction[9-1] + FF;
				}else if(z_nubes == 2){//Z532
					z_output = A + z_wind_direction[9-1] + FF;
				}else if(z_nubes == 3){//Z533
					z_output = D + z_wind_direction[9-1] + FF;
				}else if(z_nubes == 4){//Z534
					z_output = F + z_wind_direction[9-1] + FF;
				}else if(z_nubes == 5){//Z535
					z_output = S + z_wind_direction[9-1] + FF;
				}
			}else if(z_trend == 4){//Z54x
				if(z_nubes == 1){//Z541
					z_output = G + z_wind_direction[9-1] + NN;
				}else if(z_nubes == 2){//Z542
					z_output = G + z_wind_direction[9-1] + NN;
				}else if(z_nubes == 3){//Z543
					z_output = G + z_wind_direction[9-1] + NN;
				}else if(z_nubes == 4){//Z544
					z_output = M + z_wind_direction[9-1] + NN;
				}else if(z_nubes == 5){//Z545
					z_output = M + z_wind_direction[9-1] + NN;
				}
			}else if(z_trend == 5){//Z55x
				if(z_nubes == 1){//Z551
					z_output = J + z_wind_direction[9-1] + SS;
				}else if(z_nubes == 2){//Z552
					z_output = J + z_wind_direction[9-1] + SS;
				}else if(z_nubes == 3){//Z553
					z_output = M + z_wind_direction[9-1] + SS;
				}else if(z_nubes == 4){//Z554
					z_output = M + z_wind_direction[9-1] + SS;
				}else if(z_nubes == 5){//Z555
					z_output = M + z_wind_direction[9-1] + SS;
				}
			}//Zin segundo numero
		}else if(z_hpa == 6){//Z6xx
			if(z_trend == 1){//Z61x Zegundo numero, tendencia de la presion
				if(z_nubes == 1){//Z611
					z_output = C + z_wind_direction[9-1] + SS;
				}else if(z_nubes == 2){//Z612
					z_output = C + z_wind_direction[9-1] + SS;
				}else if(z_nubes == 3){//Z613
					z_output = F + z_wind_direction[9-1] + SS;
				}else if(z_nubes == 4){//Z614
					z_output = F + z_wind_direction[9-1] + SS;
				}else if(z_nubes == 5){//Z615
					z_output = S + z_wind_direction[9-1] + SS;
				}
			}else if(z_trend == 2){//Z62x
				if(z_nubes == 1){//Z621
					z_output = C + z_wind_direction[9-1] + SS;
				}else if(z_nubes == 2){//Z622
					z_output = Y + z_wind_direction[9-1] + SS;
				}else if(z_nubes == 3){//Z623
					z_output = F + z_wind_direction[9-1] + SS;
				}else if(z_nubes == 4){//Z624
					z_output = S + z_wind_direction[9-1] + SS;
				}else if(z_nubes == 5){//Z625
					z_output = S + z_wind_direction[9-1] + SS;
				}
			}else if(z_trend == 3){//Z63x
				if(z_nubes == 1){//Z631
					z_output = F + z_wind_direction[9-1] + SS;
				}else if(z_nubes == 2){//Z632
					z_output = F + z_wind_direction[9-1] + SS;
				}else if(z_nubes == 3){//Z633
					z_output = F + z_wind_direction[9-1] + SS;
				}else if(z_nubes == 4){//Z634
					z_output = S + z_wind_direction[9-1] + SS;
				}else if(z_nubes == 5){//Z635
					z_output = S + z_wind_direction[9-1] + SS;
				}
			}else if(z_trend == 4){//Z64x
				if(z_nubes == 1){//Z641
					z_output = L + z_wind_direction[9-1] + SS;
				}else if(z_nubes == 2){//Z642
					z_output = L + z_wind_direction[9-1] + SS;
				}else if(z_nubes == 3){//Z643
					z_output = L + z_wind_direction[9-1] + SS;
				}else if(z_nubes == 4){//Z644
					z_output = P + z_wind_direction[9-1] + SS;
				}else if(z_nubes == 5){//Z645
					z_output = P + z_wind_direction[9-1] + SS;
				}
			}else if(z_trend == 5){//Z65x
				if(z_nubes == 1){//Z651
					z_output = L + z_wind_direction[9-1] + SS;
				}else if(z_nubes == 2){//Z652
					z_output = L + z_wind_direction[9-1] + SS;
				}else if(z_nubes == 3){//Z653
					z_output = P + z_wind_direction[9-1] + SS;
				}else if(z_nubes == 4){//Z654
					z_output = P + z_wind_direction[9-1] + SS;
				}else if(z_nubes == 5){//Z655
					z_output = P + z_wind_direction[9-1] + SS;
				}
			}//Zin segundo numero
		}else if(z_hpa == 7){//Z7xx
			if(z_trend == 1){//Z71x Zegundo numero, tendencia de la presion
				if(z_nubes == 1){//Z711
					z_output = F + z_wind_direction[9-1] + "early, changing to  " + z_wind_direction[7-1] + WW;
				}else if(z_nubes == 2){//Z712
					z_output = F + z_wind_direction[9-1] + "early, changing to  " + z_wind_direction[7-1] + WW;
				}else if(z_nubes == 3){//Z713
					z_output = S + z_wind_direction[9-1] + "early, changing to  " + z_wind_direction[7-1] + WW;
				}else if(z_nubes == 4){//Z714
					z_output = S + z_wind_direction[9-1] + "early, changing to  " + z_wind_direction[7-1] + WW;
				}else if(z_nubes == 5){//Z715
					z_output = S + z_wind_direction[9-1] + "early, changing to  " + z_wind_direction[7-1] + WW;
				}
			}else if(z_trend == 2){//Z72x
				if(z_nubes == 1){//Z721
					z_output = F + z_wind_direction[9-1] + "early, changing to  " + z_wind_direction[7-1] + GG;
				}else if(z_nubes == 2){//Z722
					z_output = F + z_wind_direction[9-1] + "early, changing to  " + z_wind_direction[7-1] + GG;
				}else if(z_nubes == 3){//Z723
					z_output = S + z_wind_direction[9-1] + "early, changing to  " + z_wind_direction[7-1] + GG;
				}else if(z_nubes == 4){//Z724
					z_output = S + z_wind_direction[9-1] + "early, changing to  " + z_wind_direction[7-1] + GG;
				}else if(z_nubes == 5){//Z725
					z_output = S + z_wind_direction[9-1] + "early, changing to  " + z_wind_direction[7-1] + GG;
				}
			}else if(z_trend == 3){//Z73x
			if(z_nubes == 1){//Z731
					z_output = F + z_wind_direction[9-1] + "early, changing to  " + z_wind_direction[7-1] + GG;
				}else if(z_nubes == 2){//Z732
					z_output = F + z_wind_direction[9-1] + "early, changing to  " + z_wind_direction[7-1] + GG;
				}else if(z_nubes == 3){//Z733
					z_output = S + z_wind_direction[9-1] + "early, changing to  " + z_wind_direction[7-1] + GG;
				}else if(z_nubes == 4){//Z734
					z_output = S + z_wind_direction[9-1] + "early, changing to  " + z_wind_direction[7-1] + GG;
				}else if(z_nubes == 5){//Z735
					z_output = S + z_wind_direction[9-1] + "early, changing to  " + z_wind_direction[7-1] + GG;
				}
			}else if(z_trend == 4){//Z74x
				if(z_nubes == 1){//Z741
					z_output = L + z_wind_direction[9-1] + "early, changing to  " + z_wind_direction[7-1] + GG;
				}else if(z_nubes == 2){//Z742
					z_output = L + z_wind_direction[9-1] + "early, changing to  " + z_wind_direction[7-1] + GG;
				}else if(z_nubes == 3){//Z743
					z_output = L + z_wind_direction[9-1] + "early, changing to  " + z_wind_direction[7-1] + GG;
				}else if(z_nubes == 4){//Z744
					z_output = P + z_wind_direction[9-1] + "early, changing to  " + z_wind_direction[7-1] + GG;
				}else if(z_nubes == 5){//Z745
					z_output = P + z_wind_direction[9-1] + "early, changing to  " + z_wind_direction[7-1] + GG;
				}
			}else if(z_trend == 5){//Z75x
				if(z_nubes == 1){//Z751
					z_output = L + z_wind_direction[9-1] + "early, changing to  " + z_wind_direction[7-1] + GG;
				}else if(z_nubes == 2){//Z752
					z_output = L + z_wind_direction[9-1] + "early, changing to  " + z_wind_direction[7-1] + GG;
				}else if(z_nubes == 3){//Z753
					z_output = P + z_wind_direction[9-1] + "early, changing to  " + z_wind_direction[7-1] + GG;
				}else if(z_nubes == 4){//Z754
					z_output = P + z_wind_direction[9-1] + "early, changing to  " + z_wind_direction[7-1] + GG;
				}else if(z_nubes == 5){//Z755
					z_output = P + z_wind_direction[9-1] + "early, changing to  " + z_wind_direction[7-1] + GG;
				}
			}//Zin segundo numero
		}else if (z_hpa == 8) {//Z8xx
			if(z_trend == 1){//Z81x Zegundo numero, tendencia de la presion
				if(z_nubes == 1){//Z811
					z_output = S + z_wind_direction[9-1] + "early, changing to  " + z_wind_direction[7-1] + WW;
				}else if(z_nubes == 2){//Z812
					z_output = S + z_wind_direction[9-1] + "early, changing to  " + z_wind_direction[7-1] + WW;
				}else if(z_nubes == 3){//Z813
					z_output = S + z_wind_direction[9-1] + "early, changing to  " + z_wind_direction[7-1] + WW;
				}else if(z_nubes == 4){//Z814
					z_output = S + z_wind_direction[9-1] + "early, changing to  " + z_wind_direction[7-1] + WW;
				}else if(z_nubes == 5){//Z815

				}
			}else if(z_trend == 2){//Z82x
				if(z_nubes == 1){//Z821
					z_output = S + z_wind_direction[9-1] + "early, changing to  " + z_wind_direction[7-1] + WW;
				}else if(z_nubes == 2){//Z822
					z_output = S + z_wind_direction[9-1] + "early, changing to  " + z_wind_direction[7-1] + WW;
				}else if(z_nubes == 3){//Z823
					z_output = S + z_wind_direction[9-1] + "early, changing to  " + z_wind_direction[7-1] + WW;
				}else if(z_nubes == 4){//Z824
					z_output = S + z_wind_direction[9-1] + "early, changing to  " + z_wind_direction[7-1] + WW;
				}else if(z_nubes == 5){//Z825
					z_output = S + z_wind_direction[9-1] + "early, changing to  " + z_wind_direction[7-1] + WW;
				}
			}else if(z_trend == 3){//Z83x
				if(z_nubes == 1){//Z831
					z_output = S + z_wind_direction[9-1] + "early, changing to  " + z_wind_direction[7-1] + WW;
				}else if(z_nubes == 2){//Z832
					z_output = S + z_wind_direction[9-1] + "early, changing to  " + z_wind_direction[7-1] + WW;
				}else if(z_nubes == 3){//Z833
					z_output = S + z_wind_direction[9-1] + "early, changing to  " + z_wind_direction[7-1] + WW;
				}else if(z_nubes == 4){//Z834
					z_output = S + z_wind_direction[9-1] + "early, changing to  " + z_wind_direction[7-1] + WW;
				}else if(z_nubes == 5){//Z835
					z_output = S + z_wind_direction[9-1] + "early, changing to  " + z_wind_direction[7-1] + WW;
				}
			}else if(z_trend == 4){//Z84x
				if(z_nubes == 1){//Z841
					z_output = L + z_wind_direction[9-1] + "early, changing to  " + z_wind_direction[7-1] + WW;
				}else if(z_nubes == 2){//Z842
					z_output = L + z_wind_direction[9-1] + "early, changing to  " + z_wind_direction[7-1] + WW;
				}else if(z_nubes == 3){//Z843
					z_output = L + z_wind_direction[9-1] + "early, changing to  " + z_wind_direction[7-1] + WW;
				}else if(z_nubes == 4){//Z844
					z_output = P + z_wind_direction[9-1] + "early, changing to  " + z_wind_direction[7-1] + WW;
				}else if(z_nubes == 5){//Z845
					z_output = P + z_wind_direction[9-1] + "early, changing to  " + z_wind_direction[7-1] + WW;
				}
			}else if(z_trend == 5){//Z85x
				if(z_nubes == 1){//Z851
					z_output = L + z_wind_direction[9-1] + "early, changing to  " + z_wind_direction[7-1] + WW;
				}else if(z_nubes == 2){//Z852
					z_output = L + z_wind_direction[9-1] + "early, changing to  " + z_wind_direction[7-1] + WW;
				}else if(z_nubes == 3){//Z853
					z_output = P + z_wind_direction[9-1] + "early, changing to  " + z_wind_direction[7-1] + WW;
				}else if(z_nubes == 4){//Z854
					z_output = P + z_wind_direction[9-1] + "early, changing to  " + z_wind_direction[7-1] + WW;
				}else if(z_nubes == 5){//Z855
					z_output = P + z_wind_direction[9-1] + "early, changing to  " + z_wind_direction[7-1] + WW;
				}
			}//Zin segundo numero
		}//Zin primer numero
			
	}//Zin letra Z
	
	
	//********************   FIN SIN VIENTO   ****************************
	///////////////////////////////////////////////////////////////
	
	
	
	return z_output;  // SALIDA DEL ALGORITMO

}	// FIN DE LA FUNCION   		
		
