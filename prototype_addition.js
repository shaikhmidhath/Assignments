function add(a,b)
{
	var n=a+b;
	console.log("the addition is:",n.myadd());
}
 Number.prototype.myadd = function(){
 	return this.valueOf( );
 }
 add(4,3);
