$(document).ready(function(){
var razmer=1, garant=10, lakirov=0; 
gorod=0, check=0, kyp = '2301', skidka = 0;	
	
$('.id').on('change', function(){
	check = 0;
	$('input:checkbox:checked').each(function(){
		if($(this).prop("checked")){
		check = Number(check) + Number( $(this).data('check') );
		}
	});
	summ();
});


$('input.razmer').on('input keyup', function(e) {
    razmer = 1;
	$('input.razmer').each(function(){
		num = Number($(this).val());
		if(num == 0){
			num = 1;
		}
		razmer = Number(razmer) * num;
	});
	summ();
});

$('input.razmer').on('keyup keypress', function(e) {
    var letters=' 1234567890';
	return (letters.indexOf(String.fromCharCode(e.which))!=-1);
});


$("#gorod").change(function(){
	gorod = $('#gorod').val();
	summ();
});

$('input.kypon').on('input keyup', function(e) {   
	key = $('input.kypon').val();
		if(key == kyp){
			skidka = 20;
		}else{
			skidka = 0;
		}
	summ();
});


$("input[name='garant']").change(function() {
    if ($("input[name='garant']").prop("checked")) {
        garant = $(this).data('check');
    } else {
        garant = $(this).data('check');
    }
    summ();
});


function summ(){
	razmer = Number(razmer);
	garant = Number(garant);
	lakirov = Number(check);
	gorod = Number(gorod);
	skidka = Number(skidka);
	$("#summ").text(gorod+garant+lakirov*razmer - (skidka / 100 * (gorod+garant+lakirov*razmer))+ ' руб.' );
};
summ();
});


