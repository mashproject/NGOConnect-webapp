
/*var location=document.getElementId('location');
var loc1=document.getElementId('loc1');
var loc2=document.getElementId('loc2');
loc1.onclick=function () {
	location.value=this.value;
	};
loc2.onclick=function () {
	location.value=this.value;
	};	*/
$("#loc1").click(function(){
    $("#location").prop('value', 'Save');
 });