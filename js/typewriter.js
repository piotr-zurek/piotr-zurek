var _____WB$wombat$assign$function_____ = function(name) {return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name)) || self[name]; };
if (!self.__WB_pmw) { self.__WB_pmw = function(obj) { this.__WB_source = obj; return this; } }
{
  let window = _____WB$wombat$assign$function_____("window");
  let self = _____WB$wombat$assign$function_____("self");
  let document = _____WB$wombat$assign$function_____("document");
  let location = _____WB$wombat$assign$function_____("location");
  let top = _____WB$wombat$assign$function_____("top");
  let parent = _____WB$wombat$assign$function_____("parent");
  let frames = _____WB$wombat$assign$function_____("frames");
  let opener = _____WB$wombat$assign$function_____("opener");

// typewriter

// 3215287
// bertaec32@gmail.com
(function($, w, d, undefined) {

  function typewriter() {

    // Globals 
    var self = this, speed;

    function init(element, options) {
            // Set Globals
      var str;
      var indice = 0;

      self.options = $.extend( {}, $.fn.typewriter.options, options );
      $currentElement = $(element);
      elementStr = $currentElement.text().replace(/\s+/g, ' ');
      dataSpeed  = $currentElement.data("speed") || self.options.speed;
      $currentElement.empty();
      var showText = setInterval(
				function(){
					if (indice++ < elementStr.length) {
			      $currentElement.append(elementStr[indice - 1]);
			    }else{
			    	clearInterval(showText);
			    }
				}, dataSpeed);
      // self.animation = setInterval(function(){animate_calification()}, 20);
    }

    
    
    // Metodos publicos
    return {
      init: init
    }
  }

  // Plugin jQuery
  $.fn.typewriter = function(options) {
    return this.each(function () {
    	var writer =  new typewriter();
      writer.init(this, options);
      $.data( this, 'typewriter', writer);
    });
  };

  $.fn.typewriter.options = {
    'speed' : 300
  };

})(jQuery, window, document);

}
/*
     FILE ARCHIVED ON 10:49:59 Sep 03, 2018 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 15:22:42 Mar 15, 2021.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  exclusion.robots.policy: 0.163
  captures_list: 195.762
  exclusion.robots: 0.179
  RedisCDXSource: 1.852
  PetaboxLoader3.resolve: 70.789
  esindex: 0.017
  CDXLines.iter: 22.926 (3)
  LoadShardBlock: 166.246 (3)
  PetaboxLoader3.datanode: 180.72 (4)
  load_resource: 143.655
*/