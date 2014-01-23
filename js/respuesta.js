function createMenuItem(parentSelector,menuData){
    var menuListItem=document.createElement('li');
    $(menuListItem).addClass(menuData.class).appendTo(parentSelector);
    var menuLink=document.createElement('a');
    $(menuLink).attr({"href":menuData.link}).html(menuData.name);
    $(menuLink).appendTo(menuListItem);
}
function generateJSONMenu(url,menuListSelector) {
    $.getJSON(url,function(data) {
    for(var dataI=0;dataI<data.length;dataI++) {
            createMenuItem(menuListSelector,data[dataI]);
    }});
}
function init() {
    generateJSONMenu('js/menu.json',".main-list");
}
