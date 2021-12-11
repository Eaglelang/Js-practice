var numnames=0;
var names= ["Darasimi", "Idimosigwe", "Olawunmi", "Taye", "Tunde"]
function SortName(){
thename=document.theform.newname.value;
names[numnames]=thename;
names.sort();
document.theform.sorted.value=names.join()
