function add(a,b,display) // here display will act as callback
{
 	var sum = a +b ;
	console.log("The value of adding a & b is:",sum);
	display();
}
function display()
{
	console.log("The Callback function is invoked now !!");
}
add(2,23,display);