// AutoBlink Plus
// Puts Google's Autolink on the Blink :)
// (c) 2005 Chris Ridings   http://www.searchguild.com
// Redistribute at will but leave this message intact
// -
// This version cripples the drop down list and stops the
// Show Book Info button from working for quite a few clicks

var linkcount;
function checklinks() {
	if (!(linkcount==document.links.length)) {
		// Something changed the links!
		// Iterate for an id of _goog
		for (i=0; i < document.links.length; i++) {
			if (document.links[i].id.substring(0,5)=="_goog") {
				// If we find an id of _goog then remove the link!
				var tr = document.links[i].parentTextEdit.createTextRange();
				tr.moveToElementText(document.links[i]);
				tr.execCommand("Unlink",false);
				tr.execCommand("Unselect",false);
			}
		}
	}
		setTimeout("checklinks()",500);
}
function ISBNCD(S) {
    var F = 10, T = 0, J, C;
    for (J = 0; J < S.length; J++) {
        C = S.charCodeAt(J);
        if (C > 47 && C < 58) {
            T += (C - 48) * F--;
        }
    }
    T = (9999 - T) % 11;
    return T == 10 ? "X" : T + "";
}
function createISBN() {
	var isbn="04";
	for (var i=0; i < 7; i++) {
		isbn=isbn+(Math.round(Math.random()*9));
	}
	isbn = isbn + ISBNCD(isbn);
	return isbn;
}
if (document.getElementById && document.createElement) {
	linkcount=document.links.length;
	var instr="<div style='visibility:hidden; position:absolute; top:-5000; left:-5000;'>";
	for (var x=0; x<25; x++) {
		instr=instr+(createISBN() + "<br>");
	}
	instr=instr+"</div>";
	document.body.innerHTML=instr+document.body.innerHTML;
	setTimeout("checklinks()",500);
}

