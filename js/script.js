jQuery(document).ready(function(){
		
	jQuery('#top_link').click(function () { 
	  $("html, body").animate({ scrollTop: 0 }, 600);
	  return false;
	});
	
	jQuery('#print').click(function(){
          window.print()
		  return false;
      });
	
	jQuery('.target').attr('target','_blank');
	
	jQuery('a[rel$=\'external\']').attr("target","_blank");
	
	jQuery('nav ul > li').hover(function(){
	  jQuery(this).find('div').show();
	  jQuery(this).find('.nav_img').addClass('over');
	},function(){
	  jQuery(this).find('div').hide();
	  jQuery(this).find('.nav_img').removeClass('over');
	});
	
	jQuery('nav p').hover(function(){
	  jQuery(this).find('span').show();
	  jQuery(this).find('.nav_img').addClass('over');
	},function(){
	  jQuery(this).find('span').hide();
	  jQuery(this).find('.nav_img').removeClass('over');
	});
	
	if (jQuery.browser.safari) {
		jQuery('textarea').css('resize', 'none');
		jQuery('input.text').css('resize', 'none');
	}
	
	$.fn.populate = function ( user_options ) {
		var defaults = {}, settings = $.extend({}, defaults, user_options);
		this.each(function(){
			var $this = $(this);
			var title = this.title;
			var color = $this.css('color');
			if ( $this.val() == '' || $this.val() == title ) {
				$this.val(title);
				if ( settings.color != '' ) {
					$this.css('color', settings.color);
				}
			}
			$this.blur(function(){
				if ( $this.val() == '' ) {
					$this.val(title);
					if ( settings.color != '' ) {
						$this.css('color', settings.color);
					}
				}
			});
			$this.focus(function(){
				if ( $this.val() == title ) {
					$this.val('');
					$this.css('color', color);
				}
			});
				
		});
		return this;
	}
	
	jQuery(".populate").populate();
	
});

