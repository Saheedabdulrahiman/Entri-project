
document.addEventListener('DOMContentLoaded', function() {
   
    var heading = document.getElementById('heading');
  
   
    var changeTextBtn = document.getElementById('changeTextBtn');
  
    
    var paragraph = document.createElement('p');
    paragraph.textContent = 'This is a new paragraph.';
  

    document.body.appendChild(paragraph);
  
 
    changeTextBtn.addEventListener('click', function() {
      
      heading.textContent = 'Text Changed!';
  
      heading.classList.add('new-class');
  
      paragraph.style.backgroundColor = 'lightblue';
    });
  });
  