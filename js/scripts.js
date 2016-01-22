/**
 * Created by ajuchem on 8/15/15.
 */
$(document).ready(function(){
    var scroll_start = 0;
    var startchange = $('#startchange');
    var offset = startchange.offset();
    if (startchange.length){
        $(document).scroll(function() {
            scroll_start = $(this).scrollTop();
            if(scroll_start > offset.top) {
                $(".navbar").css('background-color', '#f7f7f7');
            } else {
                $('.navbar').css('background-color', 'transparent');
            }
        });
    }
});