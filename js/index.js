$(function () {
	$.getJSON("db/notes.json", function (data) {
		var liNode = document.createElement("li");
		var aNode = document.createElement("a");
		aNode.class = "wrap-img";
		aNode.href = "#";
		liNode.appendChild(aNode);
		console.log(liNode);
		$("#note-list").append(liNode);
       		
    });
});