$(document).ready(function() {
    $('div>div.azul').fadeTo('slow',100);
    var json=$.getJSON('js/menu.json',function(data) {
    for(var i=0;i<data.length;i++)
        {
        console.log(data[i]);
    }});
});
