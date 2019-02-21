// function that is enabled on scrolling
window.onscroll = function () {
    console.log(window.scrollY);
    
//    var audAlbum = document.getElementById("audAlbum");
//    if (audioArea.getBoundingClientRect().top > 585 || audioArea.getBoundingClientRect().bottom < 58) {
//        audAlbum.pause();
//    } else {
//        audAlbum.play();
//    }

    var videoIntr = document.getElementById("vidIntro");
    var offsetTop = videoIntr.getBoundingClientRect().top;
    var offsetBottom = videoIntr.getBoundingClientRect().bottom;

    if (offsetTop <= 300 && offsetTop > 700) {
        videoIntr.play();
    } else if (offsetBottom < 1200 || offsetBottom > 1280) {
        videoIntr.pause();
    }

    var videoInf = document.getElementById("vidInf");
    var offsetTop = videoInf.getBoundingClientRect().top;
    var offsetBottom = videoInf.getBoundingClientRect().bottom;
    
    if (offsetTop <= 1424 && offsetTop > 1480) {
        videoInf.play();
    } else if (offsetBottom < 1612 || offsetBottom > 1650) {
        videoInf.pause();
    }
    
    var videoInsp = document.getElementById("vidInsp");
    var offsetTop = videoInsp.getBoundingClientRect().top;
    var offsetBottom = videoInsp.getBoundingClientRect().bottom;
    
    if (offsetTop <= 840 && offsetTop > -240) {
        videoInsp.play();
    } else if (offsetBottom < 250 || offsetBottom > 1390) {
        videoInsp.pause();
    }

    var videoAl = document.getElementById("vidAlbum");
    var offsetTop = videoAl.getBoundingClientRect().top;
    var offsetBottom = videoAl.getBoundingClientRect().bottom;

if (offsetTop <= 840 && offsetTop > -240) {
        videoAl.play();
    } else if (offsetBottom < 250 || offsetBottom > 1390) {
        videoAl.pause();
    }

}


/* GALLERY */
jQuery(document).ready(function ($) {

    var jssor_1_options = {
        $AutoPlay: 1,
        $AutoPlaySteps: 5,
        $SlideDuration: 160,
        $SlideWidth: 200,
        $SlideSpacing: 3,
        $ArrowNavigatorOptions: {
            $Class: $JssorArrowNavigator$,
            $Steps: 5
        },
        $BulletNavigatorOptions: {
            $Class: $JssorBulletNavigator$
        }
    };

    var jssor_1_slider = new $JssorSlider$("jssor_1", jssor_1_options);

    /*#region responsive code begin*/

    var MAX_WIDTH = 980;

    function ScaleSlider() {
        var containerElement = jssor_1_slider.$Elmt.parentNode;
        var containerWidth = containerElement.clientWidth;

        if (containerWidth) {

            var expectedWidth = Math.min(MAX_WIDTH || containerWidth, containerWidth);

            jssor_1_slider.$ScaleWidth(expectedWidth);
        } else {
            window.setTimeout(ScaleSlider, 30);
        }
    }

    ScaleSlider();

    $(window).bind("load", ScaleSlider);
    $(window).bind("resize", ScaleSlider);
    $(window).bind("orientationchange", ScaleSlider);
    /*#endregion responsive code end*/
});




/* When the user clicks on the button, scroll to the top of the document
 *  This code snippet was inspired by W3Schools https://www.w3schools.com/howto/howto_js_scroll_to_top.asp
 */
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}
