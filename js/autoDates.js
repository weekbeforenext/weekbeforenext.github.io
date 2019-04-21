function copyYear() {
  var cDate = new Date();
  document.write("Copyright &copy; 2005-" + cDate.getFullYear() + ". April Sides, Designer/Developer.");
  }
  
function lastMod() {
var modDate = new Date(document.lastModified);
  var modYear = modDate.getYear();
  if(modYear<1000){
  modYear+=1900;
  }
  document.write("Last Modified: " + (modDate.getMonth()+1) + "." + modDate.getDate() + "." + (modYear+"").substring(2,4));
  }