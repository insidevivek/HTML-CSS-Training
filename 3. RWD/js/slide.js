$('.nav a').click(function(e){
//alert("hii");
	var targetid = $(this).attr('href');
	
	var targetPos = $(targetid).offset().top;
	//alert(targetPos);
	$('body,html').animate({scrollTop:targetPos-70},1000,'easeOutExpo');
	e.preventDefault();
	
	
	if(targetPos=753 ){
//alert("grt");
	
    $("#about .box_sq").slideDown(3000);  
  
}
	
	
});
$('.gotoTop').click(function(e){
	$('body,html').animate({scrollTop:0},1000,'easeOutExpo');
	e.preventDefault();
});

$(".navigation ul li a").hover(function(){
//alert("1");
//$(this).animate({borderWidth,"10px"},1000);
$( this ).css("border","1px solid #fece1a").fadeIn(1000);},
function(){
//alert("2");
$( this ).css("border","none").fadeIn(1000);
});

$("#clients .box_sq").hover(function(){
alert("1");

},function(){
alert("2");
}
)


