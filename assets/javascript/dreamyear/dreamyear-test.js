
$(function(){
  //Scroll to #ID based on anchor
  var item=$('#nav ul li a');
  item.click(function(){
    var target=this.getAttribute('href');
    $(window).scrollTo(target, 2000, function(){
      window.location.hash = target;
    });
    return false; 
  });
  
  //
  var feature=$('#members .member a');
  feature.click(function(){
    var target=this.getAttribute('href');
    $(window).scrollTo(target, 2000, function(){
      
    });
    return false; 
  });
  
  
  function showStory(active){
  }
  
  
  //Video Module
  var item=$('#index ul li');
  item.click(function(){
    //Open Stories    
    $(".stories").slideDown(750);
    //Highlight Active
    $('a', this).toggleClass('active');
    $(this).siblings('li').find('a').removeClass('active');
    //Show Story
    var activeStory=($(this).attr('title'));
    var activeSection=$('#stories .' + activeStory);
    
    activeSection.siblings().fadeOut('fast', function(){
      activeSection.fadeIn('slow');
    });
    
    //Insert Vimeo Video
    var videoID=activeSection.attr('id');
    if(videoID){
      var vimeo='<iframe src="http://player.vimeo.com/video/'+ videoID +'?title=0&amp;byline=0&amp;portrait=0&amp;color=5EAD11" width="530" height="298" frameborder="0"></iframe>';
    
      activeSection.find('.story-video').html(vimeo);
    }
    return false;
  })
  
  
  
  //Cycle Feauture Images
  $('#members').cycle({
    fx: 'scrollUp',
  	pause: 1,
  	timeout: 10000,
  	delay: -1000,
  	//speed: 1000
  	speedIn:  800, 
  	speedOut: 1200,
  	//random: 1
  });
  
  
  
  /*
  members[0]=['Aaron'];
  members[1]=['Benjamin'];
  members[2]=['Chris'];
  members[3]=['David'];
  members[4]=['James'];
  members[5]=['Janet'];
  members[6]=['Jason'];
  members[7]=['Kate'];
  members[8]=['Marty'];
  members[9]=['Matt'];
  members[10]=['Paul'];
  members[11]=['Ryan'];
  members[12]=['Sam'];
  */
});