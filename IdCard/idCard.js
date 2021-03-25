
/*const downloadCharacterSheet = () => {
  
  const node = document.getElementById('id-card-image');

  
  html2canvas(node).then(canvas => {
    // document.body.appendChild(canvas)
    // var img    = canvas.toDataURL("image/png");
    // document.write('<img src="'+img+'"/>');
    var link = document.createElement('a');
    link.download = 'filename.png';
    link.href = canvas.toDataURL()
    link.click();
  });
  
};*/

 

  const bindInputToElement = (inputEl, elementEl) => {
  inputEl.addEventListener('change', () => {
    elementEl.textContent = inputEl.value;
  });
}

//document.getElementById('createID').addEventListener('click', downloadCharacterSheet);

//document.querySelector('.subject-id').textContent = md5('something').slice(0, 8);

// Bind name
const nameEl = document.getElementById('name');
bindInputToElement(nameEl,document.getElementById('id-card-name'));

/*nameEl.addEventListener('change', () => {
    document.querySelector('.subject-id').textContent = md5(nameEl.value).slice(0, 8);
  });*/

// Bind college name
bindInputToElement(
  document.getElementById('collegename'),
  document.getElementById('id-card-collegename')
);

// Bind location
bindInputToElement(
  document.getElementById('location'),
  document.getElementById('id-card-location')
);

// Bind image
document.getElementById('image').addEventListener('change', function(){
      if ( this.files && this.files[0] ) {
        var FR = new FileReader();
        FR.onload = function(e) {
           var img = document.getElementById('id-card-image');
           img.src = e.target.result;
        };       
        FR.readAsDataURL( this.files[0] );
      }
    });




   