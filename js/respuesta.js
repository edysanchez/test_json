function createMenuItem(parentSelector,menuData){
    var menuListItem=document.createElement('li');
    $(menuListItem).addClass(menuData.class).appendTo(parentSelector);
    var menuLink=document.createElement('a');
    $(menuLink).attr({'href':menuData.link}).html(menuData.name);
    $(menuLink).appendTo(menuListItem);
}
function generateJSONMenu(url,menuListSelector) {
    $.getJSON(url,function(data) {
    for(var dataI=0;dataI<data.length;dataI++) {
            createMenuItem(menuListSelector,data[dataI]);
    }});
}
function addElementShadow(selector){
    $(selector).css({'box-shadow':'-4px 8px 8px'});
}
function initialAnimation() {
    $('div>div').fadeTo(1,1130);
    $('.rojo,.azul,.verde').animate({'border-radius':30},3500);
    addElementShadow('.rojo,.azul,.verde');
    $('.left , .right').animate({'margin-left':0},3000);
}
function initMenuEvents(menuSelector){
    $(menuSelector).on('mouseover','li',function() {
        var destinationSelector='.left>div,.right>div';
        var randomDestination=Math.ceil(Math.random()*10);
        var destinationDivsCount=$(destinationSelector).length;
        var text=document.createElement('h1');
        $(text).html($(this).text());
        $($(destinationSelector)[randomDestination%destinationDivsCount]).html('');
        $($(destinationSelector)[randomDestination%destinationDivsCount]).append(text);
    });
}
function init() {
    generateJSONMenu('js/menu.json','.main-list');
    initialAnimation();
    initMenuEvents('.main-list');
}
