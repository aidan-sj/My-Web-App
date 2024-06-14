
function showmaxdiv() {
    var x = document.getElementById("floater-min");
    var k = document.getElementById("floater-max");
    var h = document.getElementById("floater-min-button");
if (x.style.display === "none") {
    x.style.display = "block";
	k.style.display = "none";
	h.style.display = "none";
} else {
    x.style.display = "none";
	k.style.display = "block";
	h.style.display = "block";
}
}