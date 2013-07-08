$(function(){
  //Scroll to #ID based on anchor
  var baseSpeed=3000;
  
  function getSpeed(t){
    var offset=($(t).offset());
    var ratio=offset.top/$(document).height();
    var ratioRounded=ratio.toFixed(2)
    var speed=ratioRounded*baseSpeed;
    return(speed);
  }
  
  function scrollToSection(t, s){
    y=$(t).offset().top;
    $("html,body").animate({scrollTop:y}, {
      duration: s,
      easing: 'swing',
      queue: false,
      complete: function(){
        window.location.hash = t;
      }
    });
    /*
    $(window).scrollTo(t, s, function(){
      window.location.hash = t;
    });
    */
  }
  
  function showMember(m){
    var activeMember=m;
    
    //Open Stories  
    $(".stories").slideDown(750);
    
    //Highlight Active
    $('a', activeMember).toggleClass('active');
    $(activeMember).siblings('li').find('a').removeClass('active');
    
    //Show Story
    var activeStory=($(activeMember).attr('title'));
    var activeSection=$('#stories .' + activeStory);

    activeSection.siblings().fadeOut('fast', function(){
      activeSection.fadeIn('slow');
    });
    
    //Insert Vimeo Video
    var videoID=activeSection.attr('title');
    if(videoID){
      var vimeo='<iframe src="http://player.vimeo.com/video/'+ videoID +'?title=0&amp;byline=0&amp;portrait=0&amp;color=5EAD11" width="530" height="298" frameborder="0"></iframe>';
    
      activeSection.find('.story-video').html(vimeo);
    }
  }
  
  
  //nav elements  
  var item=$('#nav ul li a');
  item.click(function(){
    var target=this.getAttribute('href');   
    scrollToSection(target, getSpeed(target));
    return false; 
  });
  
  //feature image
  var feature=$('#members .member a');
  feature.click(function(){
    var target=this.getAttribute('href');
    scrollToSection(target, getSpeed(target));
    //showMember();
    return false;
  });
  
  //Show Member Video
  var member=$('#index ul li');
  member.click(function(){
    showMember(this);
    return false;
  })
  
  //Cycle Feauture Images
  $('#members').cycle({
    fx: 'scrollUp',
  	pause: 1,
  	timeout: 8000,
  	delay: -1500,
  	//speed: 1000
  	speedIn:  800,
  	speedOut: 1200
  	//random: 1
  });
});