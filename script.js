$(document).ready(function(){
    
    generateQuote();
    
    $("#generate").on("click", function(){
        $("#quote .text").html('<p class="spinner"><i class="fa fa-spinner fa-pulse fa-3x fa-fw"></i></p>');
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
    var url = "https://quotes.stormconsultancy.co.uk/random.json";
    
    $.getJSON(url, function(q) {
        // q.author, q.id, q.permalink, q.quote
        $("#quote .text").hide().html("<p>" + q.quote + "</p>").fadeIn('slow');
        $("#quote .author").hide().html("&mdash; " + q.author + "").fadeIn('2000');
        
        $("a#btn-twitter").attr("href", "https://twitter.com/intent/tweet?text=" + q.quote);
    
    });
}