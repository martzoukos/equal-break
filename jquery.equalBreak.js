/*
 * jQuery Equal Line Breaking v1.0
 * A jQuery plugin that breaks a long string into multiple equal lines of text
 * Copyright (c) 2013 Spiros Martzoukos
 *
 * https://github.com/martzoukos/equal-break
 *
 * Depends:
 *   - jQuery 1.3+

 * Licensed under the MIT license:
 *   http://www.opensource.org/licenses/mit-license.php
 *
*/
(function( $ ) {

	$.fn.equalBreak = function( options ) {

		var settings = $.extend({
			lines: 2
		}, options);

		return this.each(function(){

			var $el 				= $(this),
					text 				= $el.html(),
					words 			= text.split(" "),
					breakPoints = parseInt( (text.length / settings.lines), 10),
					breakIncr		= breakPoints,
					letterCount = 0,
					result			= "";

    	for (i=0; i<words.length; i++) {
    		if ( letterCount >= breakPoints ) {
    			result 			+= "<br>";
    			breakPoints += breakIncr;
    		}
    		result 			+= " " + words[i];
    		letterCount += words[i].length + 1;
    	}

    	$el.html( result );

		});

	};

}( jQuery ));