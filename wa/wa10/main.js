const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('.dark');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */
const Array1 = ['pic1.jpg', 'pic2.jpg', 'pic3.jpg', 'pic4.jpg', 'pic5.jpg']


/* Declaring the alternative text for each image file */
const altTexts = {
    'pic1.jpg': 'Eyeball',
    'pic2.jpg': 'Patterm',
    'pic3.jpg': 'Flowers',
    'pic4.jpg': 'Art',
    'pic5.jpg': 'Butterfly'
  };


/* Looping through images */
Array1.forEach(filename => {
    // Create the <img> element
    const imgElement = document.createElement('img');
    imgElement.src = `images/${filename}`;
    imgElement.alt = altTexts[filename];

    imgElement.addEventListener('click', () => {
        displayedImage.src = `images/${filename}`;
        displayedImage.alt = altTexts[filename];
      });
      thumbBar.appendChild(imgElement);
    });

/* Wiring up the Darken/Lighten button */
btn.addEventListener('click', function() {
  // get the current class name of the button
  const currentClass = btn.getAttribute('class');

 
  if (currentClass === 'dark') {
    btn.setAttribute('class', 'light');
    btn.textContent = 'Lighten';
    document.querySelector('.overlay').style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
  } else {
    btn.setAttribute('class', 'dark');
    btn.textContent = 'Darken';
    document.querySelector('.overlay').style.backgroundColor = 'rgba(0, 0, 0, 0)';
  }
}
);
