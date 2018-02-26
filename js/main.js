(function ($) {
     "use strict";
    // Convert All Image to SVG
    $('img.svg').each(function() {
         var $img = $(this),
             imgID = $img.attr('id'),
             imgClass = $img.attr('class'),
             imgURL = $img.attr('src');
         $.get(imgURL, function(data) {
             // Get the SVG tag, ignore the rest
             var $svg = $(data).find('svg');

             // Add replaced image's ID to the new SVG
             if (typeof imgID !== 'undefined') {
                 $svg = $svg.attr('id', imgID);
             }
             // Add replaced image's classes to the new SVG
             if (typeof imgClass !== 'undefined') {
                 $svg = $svg.attr('class', imgClass);
             }

             // Remove any invalid XML tags as per http://validator.w3.org
             $svg = $svg.removeAttr('xmlns:a');

             // Replace image with new SVG
             $img.replaceWith($svg);
         }, 'xml');
    });    

    // Show current page
    if(location.href.split("/").slice(-1) == ""){
        $(".mainmenu>ul>li:first-child>a").addClass('current_page');
    }else{
        $('.mainmenu>ul>li>a').each(function() {
          if ($(this).attr('href') == location.href.split("/").slice(-1)){ 
            $(this).addClass('current_page'); }
        });    
      }

    // Types of support svg
     setTimeout(function(){
        var arrow = $('.support_image'),
            arrow_animate = function(){
                arrow.find(".circle").css("animation","dash 5s linear both");
                arrow.find('.icon_draw').css("animation","dash 8s ease-in both");
             };
        arrow.waypoint(arrow_animate, { offset: 'bottom-in-view' });
    }, 500);

     // Wow 
     new WOW().init();

     // Tilt JS
     $('.camera_content').tilt();

     // CameraSLider
    var camera=$('.camera_wrap');
    if(camera.length){
    camera.camera({
        loader:false,
        height:'700px',
        time:3000,
        hover:false,
        autoAdvance:false,
        transPeriod: 2000,
        navigation:true,
        pagination: false,
        playPause: false            
        });
    }

     // Mean Menu
    $(".mobile_menu").meanmenu({
      meanScreenWidth: "767"     
    }); 
    
     //Our Causes Slider
     $(".causes_slider").owlCarousel({
        loop:true,
        items:3,
        margin:30,
        autoplay:true,
        autoplayHoverPause:true,
        autoplaySpeed:2000,
        smartSpeed:1000,
        nav:true,
        navText:['<i class="ion-chevron-left"></i>','<i class="ion-chevron-right"></i>'],
        mouseDrag:false,
        responsive:{
            300:{
                items:1
            },
            768:{
              items:2
            },
            992:{
              items:3
            }
        }
     }); 

     // Accordion
      $("#accordion dd").filter(':nth-child(n+4)').hide();
      $("#accordion").on('mouseenter','dt', function() {
        $(this)
              .next()
                    .slideDown(300)
                     .siblings('dd')
                         .slideUp(300);     
      }); 
     
     // Donar Slider
     $(".donar_slider").owlCarousel({
        loop:true,
        items:4,
        margin:30,
        autoplay:true,
        autoplayHoverPause:true,
        autoplaySpeed:2000,
        smartSpeed:1000,
        nav:true,
        navText:['',''],
         responsive:{
            300:{
                items:1
            },
            480:{
                items:2
            }, 
            768:{
                items:3
            },           
            992:{
                items:4
            }
        }
     });
     
     //News Slider 
     $(".news_slider").owlCarousel({
        items:2,
        margin:30,
        loop:true,
        autoplay:true,
        autoplayHoverPause:true,
        autoplaySpeed:2000,
        smartSpeed:1000,
        responsive:{
            300:{
                items:1
            },
            768:{
                items:2
            }
        }
     }); 

     // Events Slider
      $(".events_slider").owlCarousel({
        items:2,
        margin:30,
        loop:true,
        autoplay:true,
        autoplayHoverPause:true,
        autoplaySpeed:2000,
        smartSpeed:1000,
        nav:true,
        navText:['<i class="ion-chevron-left"></i>','<i class="ion-chevron-right"></i>'],
        loop: true,
        responsive:{
            300:{
                items:1
            },
            992:{
                items:2
            }
        }
     }); 

     // InstaFeed
        var userFeed = new Instafeed({
        get: 'user',
        userId: '6838379635',
        clientId: '01e898ac77eb4fe7a032e545423bf6a8',
        accessToken: '6838379635.1677ed0.042e036b746f4f2fbcfc247aa3a270f2',
        resolution: 'standard_resolution',
        template: '<a href="{{link}}" target="_blank" id="{{id}}"><img src="{{image}}" /></a>',
        sortBy: 'most-recent',
        limit: 30,
        links: false
      });
      userFeed.run();

    // Progress Bar
    function progressLine(progressClass) {
       var progressClass = $(progressClass);
       progressClass.each(function () {
            var $this = $(this),
                progressAnimate = function () {
                    $this.toggleClass('slideInLeft');
                };
            $this.waypoint(progressAnimate, { offset: 'bottom-in-view'});
        });
    }
    progressLine('.progress-bar');    

    $(".single_cause").on('mouseover',function(){  
        $('.progress-bar').removeClass('nomove');
    }).on('mouseleave', function(){
        $('.progress-bar').addClass('nomove');
    });       

     // Comment -submit button
     $(".comment-reply-link").on('click', function(){  
       $(this).parents(".comment-body").after($("#respond"));
     });     
         
    // Blog Slider 
	 $(".blog_slider").owlCarousel({
     	loop:true,
        items:1,
        autoplay:true,
        autoplayHoverPause:true,
        autoplaySpeed:2000,
        smartSpeed:1000,
        nav:true,
        navText:['',''],
        animateIn:"slideInUp",
        animateOut:"slideOutDown",
        mouseDrag:false
      }); 

      // Testimonial slider
     $(".testimonial").owlCarousel({
        items:1,
        margin:30,
        loop:true,
        autoplay:true,
        autoplayHoverPause:true,
        autoplaySpeed:2000,
        smartSpeed:1000,
        nav:true,
        navText:['<i class="ion-ios-arrow-left"></i>','<i class="ion-ios-arrow-right"></i>'],
        loop: true
     }); 
     
     // Counter up
    $(".counter").counterUp({
      time: 3000
     });

    // Calendar JS
    var eventData = [
      {"date":"2018-02-01","badge":false,"title":"Event1"},
      {"date":"2018-02-28","badge":false,"title":"Event 2"},
      {"date":"2017-12-01","badge":false,"title":"Event1"},
      {"date":"2017-12-12","badge":false,"title":"Event 2"}

    ];
     $("#my-calendar").zabuto_calendar({
        language: "en",
        data: eventData,
        today:true
    });
 
    function times() {
    var d = new Date(),
        minutes = d.getMinutes().toString().length == 1 ? '0'+d.getMinutes() : d.getMinutes(),
        hours = d.getHours().toString().length == 1 ? '0'+d.getHours() : d.getHours(),
        sec = d.getSeconds().toString().length == 1 ? '0'+d.getSeconds() : d.getSeconds(),    
        ampm = d.getHours() >= 12 ? 'pm' : 'am',
        months = ['January','February','March','April','May','June','July','August','September','October','November','December'],
        days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'],
        day= days[d.getDay()]+', '+months[d.getMonth()]+' '+d.getDate()+', '+d.getFullYear() ,
        p=hours+':'+minutes+':<div class="secnds">'+sec+' '+ampm+'</div>';
        document.getElementById("time").innerHTML = day;
        document.getElementById("date").innerHTML = p;
        setTimeout(function() {
        times();
      }, 500);
    }
    if($("#time").length && $("#date").length){
        times();
    }

    // Trusted partners
    $(".brand_veno").venobox({
       framewidth:"270px"
    });    
    $(".veno").venobox();
    $(".venobox").venobox({
         framewidth: '500px',       
        frameheight: '400px',
        titleattr: 'data-title'
    });
    $(".veno_gallery").venobox({  
        frameheight: '400px',
        titleattr: 'data-title'
    });
    $(".upcoming_veno").venobox({
         framewidth: '300px',       
        frameheight: '250px',
        titleattr: 'data-title'
    })

    // Animate the scroll to top
    $('.scroll_up').on('click', function() {
        $('html, body').animate({scrollTop: 0}, 2000);
    });

     //Isotope & Packery
     $('.grid').isotope({
        layoutMode: 'masonry',
        itemSelector: '.grid-item'
    });

    $('.filter_list').on( 'click',"li",function() {
        var $this=$(this),
            filterValue = $this.attr('data-filter');
        $('.grid').isotope({ filter: filterValue });
        $('.filter_list li').removeClass('active');
        $this.addClass('active');        
    });    
   
    // Volunteer Carousel   
    var $owl = $('.volunteer_slider');
    $owl.on('initialized.owl.carousel', function(e){
        addToOwl(e);
        console.log(addToOwl,e);
      });
      $owl.on('translate.owl.carousel', function(e){
        addToOwl(e);
      });
      function addToOwl(e){
        var idx = e.item.index; 
        console.log(e.target,e.type,e.item,idx);
        $('.owl-item').removeClass('big small medium')
        .eq(idx).addClass('big')
        .end()  
        .eq(idx-1).addClass('medium')
        .end()
        .eq(idx+1).addClass('medium')
        .end()
        .eq(idx-2).addClass('small')
        .end()
        .eq(idx+2).addClass('small');
    }
   
    // providing index to data position of respective owl items
    $owl.children().each(function( index ) {
      $(this).attr( 'data-position', index ); 
    });

    $owl.owlCarousel({
      center: true,
      loop: true,
      items: 3,
      responsive:{
            300:{
                items:1
            },
            480:{
                items:2
            },
            768:{
                items:2
            }
        }     
    });

    // Click on slider makes it active
    var $team_li= $(".team_members li");
    $('.volunteer_info').on('click',function() {
      var $this=$(this),
          slider_index=$this.data("position");
          // $this.parent().addClass('center');
     $owl.trigger('to.owl.carousel', $this.data('position') );
     $team_li.removeClass('active');
     $team_li.eq(slider_index).addClass('active');
    });

    $('.owl-item.center').on('click',function(e) {
        e.preventDefault();
    });

    // Click of list items changes sliders
    $team_li.on('click',function() {
         var $this=$(this),
             indexx=$this.attr("data-pos");
             console.log(indexx);  
       $team_li.removeClass('active');
       $this.addClass('active');     
       $owl.trigger('to.owl.carousel', indexx);                
    });

    // Click of owl-dots makes the list item active
    $(".volunteer_slider .owl-dot").on('click',function() {
        var dot_index=$(this).index();
        console.log(dot_index);
        $team_li.removeClass('active');
        $team_li.eq(dot_index).addClass('active');
    });

     // Input click increment & decrement
    $('.input_value').on('change', function(){
        var $this = $(this);
        if($this.val() < 0){
            $this.val(0);
        }
    });
    
    function increaseDecrease($this, command){
        var input_value = $this,
            val = parseInt(input_value.val(), 10);       

        if(!val){
            val = 0;
        }
        if(command == '+'){
            val++;
        }else if(command == '-'){
            val--;
        }
        if(val >= 0){
            input_value.val(val);
        }
    }
    
    $('.increase').on('click', function(){
        var input_value = $(this).siblings('.input_value');
        increaseDecrease(input_value, '+');
    });
    $('.decrease').on('click', function(){
        var input_value = $(this).siblings('.input_value');        
        increaseDecrease(input_value, '-');
    });

    // Ogranizer Location
    var googleMapSelector = $('#event_loc'),
        myCenter = new google.maps.LatLng(40.7179835,-74.1373195);
    function initialize() {
        var mapProp = {
            center: myCenter,
            zoom: 10,
            scrollwheel: false,
            mapTypeId: google.maps.MapTypeId.ROADMAP,
            styles: 
            [
                {
                    "featureType": "administrative.country",
                    "elementType": "geometry",
                    "stylers": [
                        {
                            "visibility": "simplified"
                        },
                        {
                            "hue": "#ff0000"
                        }
                    ]
                }
            ]        
        };
        var map = new google.maps.Map(document.getElementById("event_loc"), mapProp);
        var marker = new google.maps.Marker({
            position: myCenter,
            animation: google.maps.Animation.BOUNCE,
            icon: 'images/marker.png'
        });
        
        marker.setMap(map);
    }
    if (googleMapSelector.length) {
        google.maps.event.addDomListener(window, 'load', initialize);
    }
    // preloader
    $(window).on('load',function () {      
       $("#preloader").delay(200).fadeOut("slow");
    }); 
})(jQuery);