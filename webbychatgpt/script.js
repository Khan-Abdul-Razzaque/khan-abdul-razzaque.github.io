document.addEventListener("DOMContentLoaded", function() {
    var button = document.getElementById('colorButton');
    var paragraphs = document.querySelectorAll('.container p');
  
    button.addEventListener('click', function() {
      // Change text color of paragraphs
      paragraphs.forEach(function(paragraph) {
        paragraph.style.color = getRandomColor();
      });
    });
  
    // Function to generate random color
    function getRandomColor() {
      var letters = '0123456789ABCDEF';
      var color = '#';
      for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
      }
      return color;
    }
  });
  