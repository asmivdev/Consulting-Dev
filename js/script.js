const body = document.body;
const triggerMenu = document.querySelector(".page-header .trigger-menu");
const nav = document.querySelector(".page-header nav");
const menu = document.querySelector(".page-header .menu");
const scrollUp = "scroll-up";
const scrollDown = "scroll-down";
let lastScroll = 0;


window.addEventListener("scroll", () => {
  const currentScroll = window.pageYOffset;
  if (currentScroll <= 0) {
    body.classList.remove(scrollUp);
    return;
  }
  
  if (currentScroll > lastScroll && !body.classList.contains(scrollDown)) {
    // down
    body.classList.remove(scrollUp);
    body.classList.add(scrollDown);
  } else if (currentScroll < lastScroll && body.classList.contains(scrollDown)) {
    // up
    body.classList.remove(scrollDown);
    body.classList.add(scrollUp);
  }
  lastScroll = currentScroll;
});

$(document).ready(function() {
  "use strict";
// work-slider

  $('.work-carusel').owlCarousel({
    items:3,
    margin: 30,
    loop:true,
    dots: true,
    autoplayHoverPause: true,
    smartSpeed:650,         
    autoplay:true,      
        responsive: {
        0: {
            items: 1
        },
        480: {
            items: 1,
        },
        768: {
            items: 2,
        },
        992: {
            items:3
        }
    }
  });
  
  $('.testimonial-carousel').owlCarousel({
    items:1,
    margin: 0,
    loop:true,
    dots: true,
    autoplayHoverPause: true,
    smartSpeed:650,         
    autoplay:true,      
        responsive: {
        0: {
            items: 1
        },
        480: {
            items: 1,
        },
        768: {
            items: 1,
        },
        992: {
            items:1
        }
    }
  });

  // number counter
  
  // $('.counting').each(function() {
  //   var $this = $(this),
  //       countTo = $this.attr('data-count');
    
  //   $({ countNum: $this.text()}).animate({
  //     countNum: countTo
  //   },

  //   {

  //     duration: 3000,
  //     easing:'linear',
  //     step: function() {
  //       $this.text(Math.floor(this.countNum));
  //     },
  //     complete: function() {
  //       $this.text(this.countNum);
  //       //alert('finished');
  //     }

  //   });  
    

  // });``
  (function ($) {
    $.fn.countTo = function (options) {
      options = options || {};
      
      return $(this).each(function () {
        // set options for current element
        var settings = $.extend({}, $.fn.countTo.defaults, {
          from:            $(this).data('from'),
          to:              $(this).data('to'),
          speed:           $(this).data('speed'),
          refreshInterval: $(this).data('refresh-interval'),
          decimals:        $(this).data('decimals')
        }, options);
        
        // how many times to update the value, and how much to increment the value on each update
        var loops = Math.ceil(settings.speed / settings.refreshInterval),
          increment = (settings.to - settings.from) / loops;
        
        // references & variables that will change with each update
        var self = this,
          $self = $(this),
          loopCount = 0,
          value = settings.from,
          data = $self.data('countTo') || {};
        
        $self.data('countTo', data);
        
        // if an existing interval can be found, clear it first
        if (data.interval) {
          clearInterval(data.interval);
        }
        data.interval = setInterval(updateTimer, settings.refreshInterval);
        
        // initialize the element with the starting value
        render(value);
        
        function updateTimer() {
          value += increment;
          loopCount++;
          
          render(value);
          
          if (typeof(settings.onUpdate) == 'function') {
            settings.onUpdate.call(self, value);
          }
          
          if (loopCount >= loops) {
            // remove the interval
            $self.removeData('countTo');
            clearInterval(data.interval);
            value = settings.to;
            
            if (typeof(settings.onComplete) == 'function') {
              settings.onComplete.call(self, value);
            }
          }
        }
        
        function render(value) {
          var formattedValue = settings.formatter.call(self, value, settings);
          $self.html(formattedValue);
        }
      });
    };
    
    $.fn.countTo.defaults = {
      from: 0,               // the number the element should start at
      to: 0,                 // the number the element should end at
      speed: 1000,           // how long it should take to count between the target numbers
      refreshInterval: 100,  // how often the element should be updated
      decimals: 0,           // the number of decimal places to show
      formatter: formatter,  // handler for formatting the value before rendering
      onUpdate: null,        // callback method for every time the element is updated
      onComplete: null       // callback method for when the element finishes updating
    };
    
    function formatter(value, settings) {
      return value.toFixed(settings.decimals);
    }
  }(jQuery));
  
  jQuery(function ($) {
    // custom formatting example
      $('.count-number').data('countToOptions', {
      formatter: function (value, options) {
        return value.toFixed(options.decimals).replace(/\B(?=(?:\d{3})+(?!\d))/g, ',');
      }
      });
      
      // start all the timers
      $('.timer').each(count);  
      
      function count(options) {
      var $this = $(this);
      options = $.extend({}, options || {}, $this.data('countToOptions') || {});
      $this.countTo(options);
      }
    });
    $(window).scroll(function() {    
      var scroll = $(window).scrollTop();
  
       //>=, not <=
      if (scroll >= 200) {
          //clearHeader, not clearheader - caps H
          $(".trigger-menu-wrapper").addClass("darkHeader");
      }
      else{
        $(".trigger-menu-wrapper").removeClass("darkHeader");
      }
  }); 
  AOS.init();
});