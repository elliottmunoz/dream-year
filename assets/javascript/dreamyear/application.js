
$(function(){
  //Scroll to #ID based on anchor
  var item=$("#nav ul li a");
  item.click(function(){
    var target=this.getAttribute('href');
    $(window).scrollTo(target, 2000);
    return false; 
  });
  
  //Cycle Feauture Images
  $('#members').cycle({
    fx: 'scrollUp',
  	pause: 1,
  	timeout: 10000,
  	delay: -1000,
  	//speed: 1000
  	speedIn:  800, 
  	speedOut: 1200,
  	random: 1
  });
});