(function (window, $) {
    $(function () {
        $('#search-result-photostream').lightGallery({
            thumbnail: true,
            selector: 'a'
        }).justifiedGallery({
            "rowHeight": 180,
        });

        $('#album-photostream').lightGallery({
            thumbnail: true,
            selector: 'a'
        }).justifiedGallery({
            "rowHeight": 150,
        });

        $('#justifiied-photostream').lightGallery({
            thumbnail: true,
            selector: 'a'
        }).justifiedGallery({
            "rowHeight": 150,
        });
      
        
        
        $('#byuser-photostream').lightGallery({
            thumbnail: true,
            selector: 'a'
        }).justifiedGallery({
            "rowHeight": 150,
        });

        
        $(window).scroll(function() {
            if($(window).scrollTop() + $(window).height() == $(document).height()) {
                var current =  parseInt($('#currently-loaded').val());
              for (var i = current; i< current + 50; i++) {
                
                $('#justifiied-photostream').append(
                '<div><a data-pinterest-text="Pin it'+$("#field_photoid-" + i).val()+'" data-tweet-text="share on twitter 1" data-facebook-share-url="'
                    + $("#field_photopage_url-" + i).val() +
                    '"  data-twitter-share-url="'
                    + $("#field_photopage_url-" + i).val() +
                    '" data-googleplus-share-url="'
                    + $("#field_photopage_url-" + i).val() +
                    '" data-pinterest-share-url="{{' +
                    $("#field_photopage_url-" + i).val() +
                    '" data-download-url="'
                    + $("#field_photo_org_url-" + i).val() +
                    '" data-sub-html="#caption-'
                    + $("#field_photoid-" + i).val() + '" href="'
                    + $("#field_photo_big_url-" + i).val() +
                    '"><img class="img-responsive thumbnail animated-image" src="'
                    + $("#field_photo_thumb_url-" + i).val() + '"></a><div id="caption-'
                    + $("#field_photoid-" + i).val() + '" style="display:none"><h4>'
                    + $("#field_phototitle-" + i).val() + '</h4><p>'
                    + $("#field_photo_description-" + i).val() + '</p></div></div>'
                    );
              }
              $('#currently-loaded').val(current + 50);
              $('#justifiied-photostream').justifiedGallery('norewind');
            }
          });
        

        // Set a variable for our button element.
        const scrollToTopButton = document.getElementById('js-top');
        
        // Let's set up a function that shows our scroll-to-top button if we scroll beyond the height of the initial window.
        const scrollFunc = () => {
          // Get the current scroll value
          let y = window.scrollY;
          
          // If the scroll value is greater than the window height, let's add a class to the scroll-to-top button to show it!
          if (y > 0) {
            scrollToTopButton.className = "top-link show";
          } else {
            scrollToTopButton.className = "top-link hide";
          }
        };
        
        window.addEventListener("scroll", scrollFunc);
        
        const scrollToTop = () => {
          // Let's set a variable for the number of pixels we are from the top of the document.
          const c = document.documentElement.scrollTop || document.body.scrollTop;
          
          // If that number is greater than 0, we'll scroll back to 0, or the top of the document.
          // We'll also animate that scroll with requestAnimationFrame:
          // https://developer.mozilla.org/en-US/docs/Web/API/window/requestAnimationFrame
          if (c > 0) {
            window.requestAnimationFrame(scrollToTop);
            // ScrollTo takes an x and a y coordinate.
            // Increase the '10' value to get a smoother/slower scroll!
            window.scrollTo(0, c - c / 10);
          }
        };
        
        // When the button is clicked, run our ScrolltoTop function above!
        scrollToTopButton.onclick = function(e) {
          e.preventDefault();
          scrollToTop();
        }



    });
}(window, jQuery));