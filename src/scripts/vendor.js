/*!
 * modernizr.min.js
 */
// =require vendor/modernizr.min.js

/*!
 * jquery-2.2.3.min.js
 */
// =require vendor/jquery-2.2.3.min.js

// Attempts to preserve comments that likely contain licensing information,
// even if the comment does not have directives such as `@license` or `/*!`.
//
// Implemented via the [`uglify-save-license`](https://github.com/shinnn/uglify-save-license)
// module, this option preserves a comment if one of the following is true:
//
// 1. The comment is in the *first* line of a file
// 2. A regular expression matches the string of the comment.
//    For example: `MIT`, `@license`, or `Copyright`.
// 3. There is a comment at the *previous* line, and it matches 1, 2, or 3.


window.slate = window.slate || {};
window.theme = window.theme || {};

/*================ Slate ================*/
// =require slate/a11y.js
// =require slate/cart.js
// =require slate/utils.js
// =require slate/rte.js
// =require slate/sections.js
// =require slate/currency.js
// =require slate/images.js
// =require slate/variants.js

/*================ Sections ================*/
// =require sections/product.js

/*================ Templates ================*/
// =require templates/customers-addresses.js
// =require templates/customers-login.js
//= require turbolinks


$(document).ready(function() {
  var sections = new slate.Sections();
  sections.register('product', theme.Product);

  // Common a11y fixes
  slate.a11y.pageLinkFocus($(window.location.hash));

  $('.in-page-link').on('click', function(evt) {
    slate.a11y.pageLinkFocus($(evt.currentTarget.hash));
  });

  // Target tables to make them scrollable
  var tableSelectors = '.rte table';

  slate.rte.wrapTable({
    $tables: $(tableSelectors),
    tableWrapperClass: 'rte__table-wrapper',
  });

  // Target iframes to make them responsive
  var iframeSelectors =
    '.rte iframe[src*="youtube.com/embed"],' +
    '.rte iframe[src*="player.vimeo"]';

  slate.rte.wrapIframe({
    $iframes: $(iframeSelectors),
    iframeWrapperClass: 'rte__video-wrapper'
  });

  // Apply a specific class to the html element for browser support of cookies.
  if (slate.cart.cookiesEnabled()) {
    document.documentElement.className = document.documentElement.className.replace('supports-no-cookies', 'supports-cookies');
  }
});





$('.site-nav--has-submenu').hover(function() {
    $(this).find('.site-nav__submenu').stop(true, true).delay(100).slideDown(200);
  }, function() {
    $(this).find('.site-nav__submenu').stop(true, true).delay(100).slideUp(200);
  });

$('.mobile-menu').click(function(e) {
      $('.modal-box.mobile').addClass('open');
      $('body').addClass('modal');
      e.preventDefault();
    });

   $('#sizeInit').click(function(e) {
      $('.chart-modal.modal-box').addClass('open');
      $('body').addClass('modal');
      e.preventDefault();
    });

function closeModal() {
        $('.product-modal').removeClass('open');
        $('.modal-box').removeClass('open');
        $('body').removeClass('modal');
    }
  
    $('.close').click(function() {
        closeModal();
    });

$(document).ready(function () {
  $('div.see-more--editorial').click(function() {
  $('html, body').animate({
    scrollTop: $("div.intro-copy").offset().top
  }, 1000)
})
});

function onReady(callback) {
    var intervalID = window.setInterval(checkReady, 1000);
    function checkReady() {
        if (document.getElementsByTagName('body')[0] !== undefined) {
            window.clearInterval(intervalID);
            callback.call(this);
        }
    }
}

function show(id, value) {
    document.getElementById(id).style.display = value ? 'grid' : 'none';
}

onReady(function () {
    show('page', true);
    show('loading', false);
});

$(document).ready(function() {
    $('#page').fadeIn(1500);

    var $currentColor = $('#SingleOptionSelector-1 option:selected').val();
    var $thumbnails = $('.product-single__thumbnails').find('li');
    
  
    
    function showThumbnails() {
      $thumbnails.each(function() {
        if( $(this).data("background-color") != $currentColor) {
          $(this).hide();
        } else {
          $(this).show();
        }
      });
    }
    showThumbnails();

});

$(document).ready(function() {
  if( typeof(productOptions ) != "undefined" ){
    for(i=0;i<productOptions.length;i++) {
      $('.single-option-selector:eq('+ i +')')
      .filter(function() {
        return $(this).find('option').length > 1
      })
      .prepend('<option value="">Pick a ' + productOptions[i][i] + '</option>')
      .val('')
      .trigger('change');
    }
  }
});

$(function() {
      
    
  
    $(document).keydown(function(e) {
        var key = e.which;
        if( key == 27) {
            closeModal();
        }
    });
  
    $('#shareInit').click(function(e) {
        $(this).toggleClass('active');
        e.preventDefault();
        $('.sharing ul').toggleClass('active');
    })

  if( $('.product-02').length ) {

    $('.img-thumb').each(function() { 
      $(this).hover(function() { 
        $('.product-img').attr('src', $(this).data('lrg')) 
      }); 
    });

    $('.img-wrapper').click(function(e) {
      $('.product-modal').addClass('open');
      $('body').addClass('modal');
            e.preventDefault();
    });
    $('.product-modal .close').click(function() {
      closeModal();
    });
  }


  
});

$('.video-container').on('click', function(){
  var video = $(this).find('video')[0];
  if (video.paused) {
    $(this).removeClass('paused');
    video.play();
  } else {
    video.pause();
    $(this).addClass('paused');
  }
});
   
 
     jQuery('<div class="quantity-nav"><div class="quantity-button quantity-up">+</div><div class="quantity-button quantity-down">-</div></div>').insertAfter('.quantity input');
    jQuery('.quantity').each(function() {
      var spinner = jQuery(this),
        input = spinner.find('input[type="number"]'),
        btnUp = spinner.find('.quantity-up'),
        btnDown = spinner.find('.quantity-down'),
        min = input.attr('min'),
        max = input.attr('max');

      btnUp.click(function() {
        var oldValue = parseFloat(input.val());
        if (oldValue >= max) {
          var newVal = oldValue;
        } else {
          var newVal = oldValue + 1;
        }
        spinner.find("input").val(newVal);
        spinner.find("input").trigger("change");
      });

      btnDown.click(function() {
        var oldValue = parseFloat(input.val());
        if (oldValue <= min) {
          var newVal = oldValue;
        } else {
          var newVal = oldValue - 1;
        }
        spinner.find("input").val(newVal);
        spinner.find("input").trigger("change");
      });

    }); 

   


   
 

    


