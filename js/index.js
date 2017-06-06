$(function () {
	$.getJSON("db/notes.json", function (data) {
       	console.log(data);	
    });
});