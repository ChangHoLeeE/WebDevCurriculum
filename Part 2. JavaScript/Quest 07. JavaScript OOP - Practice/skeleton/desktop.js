var Desktop = function(iconNum, folderNum) {
	/* TODO: Desktop 클래스는 어떤 멤버함수와 멤버변수를 가져야 할까요? */
	this.icons = new Array();
	this.folders = new Array();

	for (i = 0; i < iconNum; i++)
	    this.icons.push(Icon("icon" + i, i, 0 ));
	for ( i = 0; i <folderNum; i++)
		this.folders.push(Folder("folder" + i, i, 1));
};

var Icon = function(name, Top, left) {
	/* TODO: Icon 클래스는 어떤 멤버함수와 멤버변수를 가져야 할까요? */
	this.name = name;
	this.DOM = $('<div class = "icon"><img src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTzOT4uekAcWnhWFJ691CSzeyaw81YVHWYXTes30KLNGqqeGag_Xw"><p>' + name + '</p></div>');
	
	this.DOM.css("top", Top * 80);
	this.DOM.css("left", left * 60);
	this.DOM.on("drag", moveIcon);
	this.DOM.on("dragend", moveIcon);
	$('section.desktop').append(this.DOM)
	

};

var moveIcon = function(e) {
	Top = parseInt(e.pageY / 80);
	left = parseInt(e.pageX/ 60);
	$(this).css("top", Top * 80);
	$(this).css("left", left * 60);
};

var Folder = function(name, Top, left) {
	Icon.call(this, name, Top, left);
	this.DOM.children().first().attr("src", "http://www.iconarchive.com/download/i7764/hopstarter/sleek-xp-basic/Folder.ico" );
	this.DOM.on("dblclick", function(e) { Window(name)});
};

var Window = function(name) {
	this.name = name;
	this.DOM = $('<div class="window"><p>' + name + '</p><button id="' + name +'"></button></div>');
	this.DOM.css("top", 200);
	this.DOM.css("left", 300);
	this.DOM.attr("draggable", true);
	this.DOM.on("drag", moveWindow);
	this.DOM.on("dragend", moveWindow);
	$('section.desktop').append(this.DOM);
	$('button#' + name).on("click", function(e) {
	$(this).parent().remove();
});
};

var moveWindow = function(e) {
	$(this).css("top", e.pageY);
	$(this).css("left", e.pageX);
};
