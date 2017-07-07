$(document).ready(function(){
    
    generateQuote();
    
    $("#generate").on("click", function(){
        generateQuote();
    })
})

function generateQuote()
{
    $("#quote .col.text").html('<p class="spinner"><i class="fa fa-spinner fa-pulse fa-3x fa-fw"></i></p>');
    // var url = "https://talaikis.com/api/quotes/random/";
    var url = "https://api.adviceslip.com/advice";
    
    $.getJSON(url, function(q) {
        $("#quote .col.text").hide().html("<p>" + q.slip.advice + "</p>").fadeIn('2000');
        $("a#twitter").attr("href", "https://twitter.com/intent/tweet?text=" + q.slip.advice);
        // $("#quote .col.text").hide().html("<p>" + q.quote + "</p><p class=\"author\">&mdash; " + q.author + "</p>").fadeIn('2000');
    });
}