var abtns=[null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,"<a class='uk-close floatd' id='cls73' onclick='f_a(73)'></a></div>Logaritmo natural <span class=\"subtit\">ln x</span> <br><table class='mtab'><tr> <td>x:</td><td style='width:100%'><input type='text' class='cemp' title='' id='cx73_0' onblur=\"ultimofield('cx73_0')\" onkeyup='replexp(this)' onkeypress=\"calc_en(event,'c_ln')\"></td> </tr></table><button type='button' class='uk-button uk-button-default' onclick='c_ln()'>Calcular</button>","<a class='uk-close floatd' id='cls74' onclick='f_a(74)'></a></div><span class=\"subtit\">e<sup>x</sup></span> <br><table class='mtab'><tr> <td>x:</td><td style='width:100%'><input type='text' class='cemp' title='Valor de x' id='cx74_0' onblur=\"ultimofield('cx74_0')\" onkeyup='replexp(this)' onkeypress=\"calc_en(event,'c_ex')\"></td> </tr></table><button type='button' class='uk-button uk-button-default' onclick='c_ex()'>Calcular</button>","<a class='uk-close floatd' id='cls75' onclick='f_a(75)'></a></div>Descobrir porcentagem<br><span class=\"subtit\">% de i = f</span> <br><table class='mtab'><tr> <td>i:</td><td style='width:100%'><input type='text' class='cemp' title='Valor inicial (antes da porcentagem)' id='cx75_0' onblur=\"ultimofield('cx75_0')\" onkeyup='replexp(this)' ></td> </tr><tr> <td>f:</td><td style='width:100%'><input type='text' class='cemp' title='Valor final (após porcentagem)' id='cx75_1' onblur=\"ultimofield('cx75_1')\" onkeyup='replexp(this)' onkeypress=\"calc_en(event,'c_por')\"></td> </tr></table><button type='button' class='uk-button uk-button-default' onclick='c_por()'>Calcular</button>","<a class='uk-close floatd' id='cls76' onclick='f_a(76)'></a></div>Regra de trÃªs simples<br>Inversamente proporcional<br><table style=\"margin-left:50%;margin-bottom:0px;position:relative;left:-25%\"><tr><td style=\"border-bottom:1px solid #666\">a</td><td>&#8594;</td><td style=\"border-bottom:1px solid #666\">b</td></tr> <tr><td>c</td><td>&#8594;</td><td>x</td></tr></table> <table class='mtab'><tr> <td>a:</td><td style='width:100%'><input type='text' class='cemp' title='A estÃ¡ para B, assim como C estÃ¡ para X' id='cx76_0' onblur=\"ultimofield('cx76_0')\" onkeyup='replexp(this)' ></td> </tr><tr> <td>b:</td><td style='width:100%'><input type='text' class='cemp' title='A estÃ¡ para B, assim como C estÃ¡ para X' id='cx76_1' onblur=\"ultimofield('cx76_1')\" onkeyup='replexp(this)' ></td> </tr><tr> <td>c:</td><td style='width:100%'><input type='text' class='cemp' title='A estÃ¡ para B, assim como C estÃ¡ para X' id='cx76_2' onblur=\"ultimofield('cx76_2')\" onkeyup='replexp(this)' onkeypress=\"calc_en(event,'c_r3i')\"></td> </tr></table><button type='button' class='uk-button uk-button-default' onclick='c_r3i()'>Calcular</button>"];
var assprf="<div class='botslin'><a class='uk-icon-justify uk-icon-edit' title='Inserir valor do visor' onclick='ivisor(_n_)'></a> <a class='uk-icon-justify uk-icon-hdd-o' title='Inserir valor da memória' onclick='immra(_n_)'></a> ";function f_a(i){if(jQuery("#painelcalcdesk").is(":visible")==false){jQuery("#mb"+i).click();}else{jQuery("#b"+i).click();}}function dafoc(){if(jQuery("#painelcalcdesk").is(":visible")==true){jQuery("#TIExp").focus();}}
function c_ln(){var v0=jQuery("#cx73_0").val();calc("ln("+v0+")","Logaritmo natural de "+v0+"");jQuery("#cx73_0").val("");f_a(73);dafoc();}
function c_ex(){var v0=jQuery("#cx74_0").val();calc("ex("+v0+")","Antilogaritmo natural de "+v0+"");jQuery("#cx74_0").val("");f_a(74);dafoc();}
function c_por(){var v0=jQuery("#cx75_0").val();var v1=jQuery("#cx75_1").val();calc("por("+v0+";"+v1+")","Porcentagem sobre "+v0+" que resulta em "+v1+"");jQuery("#cx75_0").val("");jQuery("#cx75_1").val("");f_a(75);dafoc();}
function c_r3i(){var v0=jQuery("#cx76_0").val();var v1=jQuery("#cx76_1").val();var v2=jQuery("#cx76_2").val();calc("r3i("+v0+";"+v1+";"+v2+")","Regra de trÃªs simples (proporÃ§Ã£o inversa): "+v0+" estÃ¡ para "+v1+", assim como "+v2+" estÃ¡ para:");jQuery("#cx76_0").val("");jQuery("#cx76_1").val("");jQuery("#cx76_2").val("");f_a(76);dafoc();}