var quotes = [
  '"The past cannot be changed. The future is yet in your power." \- Unknown',
  '"Either I will find a way, or I will make one." \- Philip Sydney',
  '"Failure will never overtake me if my determination to succeed is strong enough." \- Og Mandino',
  '"Don’t watch the clock; do what it does. Keep going." \- Sam Levenson',
  '"Aim for the moon. If you miss, you may hit a star." \- W. Clement Stone.',
  '"It always seems impossible until its done." \- Amelia Earhart',
  '"Look up at the stars and not down at your feet. Try to make sense of what you see, and wonder about what makes the universe exist. Be curious." \- Stephen Hawking',
  '"Believe in yourself! Have faith in your abilities! Without a humble but reasonable confidence in your own powers you cannot be successful or happy." \- Norman Vincent Peale', 
  '"You Learn More From Failure Than From Success. Don’t Let It Stop You. Failure Builds Character." \- Unknown', 
  '"If You Are Working On Something That You Really Care About, You Don’t Have To Be Pushed. The Vision Pulls You." \- Steve Jobs',
  '"We May Encounter Many Defeats But We Must Not Be Defeated." \- Maya Angelou'
];

function newQuote()
{
	var randomNumber = Math.floor(Math.random() * quotes.length);
	document.getElementById('quoteDisplay').innerHTML = quotes[randomNumber];	
}
function pickColor() 
{             
    // Array containing colors 
    var colors = ['#ffff00', '#ff6600','red','blue','yellow','orange','pink','purple','green','cyan']; 
    // selecting random color 
    var random_color = colors[Math.floor(Math.random() * colors.length)]; 
      
    var x = document.getElementById('quoteDisplay'); 
    var y = document.getElementById('quote-btn');
    x.style.color = random_color; 
    y.style.background = random_color;

    document.body.style.background = random_color;    
}  
function timeOfDay(){
  let hour = new Date().getHours();
  if (hour >= 4 && hour <= 11 ) return 'morning';
  if (hour >= 12 && hour <= 16 ) return 'afternoon';
  if (hour >= 17 && hour <= 20 ) return 'evening';
  if (hour >= 21 || hour <= 3 ) return 'night';
}
document.getElementById("daytime").innerHTML = timeOfDay();
