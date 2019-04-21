function show(project, selection) {
	hide();
	var id = project;
	var sel = selection;
	document.getElementById(id).style.display = 'block';
	document.getElementById(sel).style.display = 'block';

	var project = document.getElementById(id).getElementsByTagName('div');
	for (var i = 0; i < project.length; i++) {
		project[i].style.display = 'block';
	}
	var selToggle = document.getElementById(sel).getElementsByTagName('p');
	for (var i = 0; i < selToggle.length; i++) {
		selToggle[i].style.display = 'block';
	}
}

function hide() {
	var toggleable = document.getElementById('projectToggle').getElementsByTagName('div');
	for (var i = 0; i < toggleable.length; i++) {
		toggleable[i].style.display = 'none';
	}
	var selToggle = document.getElementById('projectToggle').getElementsByTagName('p');
	for (var i = 0; i < selToggle.length; i++) {
		selToggle[i].style.display = 'none';
	}
}