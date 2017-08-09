$(document).ready(function(){
    
    generateQuote();
    
    $("#generate").on("click", function(){
        generateQuote();
    })


    $(window).keypress(function (e) {
      if (e.keyCode === 0 || e.keyCode === 32) {
        e.preventDefault();
        
        generateQuote();
      }
    })
})

function generateQuote()
{
    $("#quote .text").html('<p class="spinner"><i class="fa fa-spinner fa-pulse fa-3x fa-fw"></i></p>');
    var url = "https://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1&callback=";
    
    $.ajax({
        url: url,
        success: function(q) {
            var quote = q[0].content;
            var author = q[0].title;
            var quote_in_text = $.parseHTML( quote )[0].innerHTML;

            $("#quote .text").hide().html("<p>" + quote + "</p>").fadeIn('slow');
            $("#quote .author").hide().html("&mdash; " + author + "").fadeIn('2000');
            
            $("a#btn-twitter").attr("href", "https://twitter.com/intent/tweet?text=" + quote_in_text);
        },
        cache: false
    });

    /**
     * Works on HTTP
     */
    // var url = "http://quotes.stormconsultancy.co.uk/random.json";
    // $.getJSON(url, function(q) {
    
        // var quote = q.quote;
        // var author = q.author;
        
        // $("#quote .text").hide().html("<p>" + quote + "</p>").fadeIn('slow');
        // $("#quote .author").hide().html("&mdash; " + author + "").fadeIn('2000');
        
        // $("a#btn-twitter").attr("href", "https://twitter.com/intent/tweet?text=" + quote);
    
    // });
}