// show animation of bubble particles
function animateBreathingButton() {
  this.preventDefault;
  this.classList.remove('animate-bb');
  this.classList.add('animate-bb');
  setTimeout(() => {
    this.classList.remove('animate-bb');
  },700);
}

// override css variables
function setButtonParameters(params, button) {
  button.style.setProperty('--bb-size', params.size);
  button.style.setProperty('--bb-shadow-color', params.shadow);
  button.style.setProperty('--bb-first-color', params.firstColor);
  button.style.setProperty('--bb-second-color', params.secondColor);
  button.style.setProperty('--bb-cross-color', params.cross);
  button.style.setProperty('--bb-shadow-color', params.shadow);
  button.style.setProperty('--bb-duration', params.duration);
}

// get data attributes from element and update object values
function getDataAttributes(names, element) {
  const buttonParameters = {
    size: '100px',
    duration: '1.9s',
    firstColor: 'rgb(250, 235, 149)',
    secondColor: 'rgb(179, 214, 138)',
    cross: 'white',
    shadow: 'rgba(121, 138, 64, 0.178)', 
  }

  // get data attributes and update buttonParameters object
  names.forEach(atr => {
    if(atr.startsWith('data-bb-')) {

      if(atr === 'data-bb-background') {
        const value = element.getAttribute(atr),
              index = value.indexOf(';');

        if(index === -1) {
          buttonParameters.firstColor = buttonParameters.secondColor = value.trim();
        } else {
          buttonParameters.firstColor = value.slice(0, index);
          buttonParameters.secondColor = value.slice(index + 1).trim().replace(/;/, '');
        }

      } else {
        buttonParameters[atr.slice(8, atr.length)] = element.getAttribute(atr);
      }

    }
  });

  return buttonParameters;
}

const breathingBtns = document.getElementsByClassName('breathing-button');

// add event listener for each button and set its styles. Insert div inside button
for(let i = 0; i < breathingBtns.length; i++) {
  const attributeNames = breathingBtns[i].getAttributeNames();

  breathingBtns[i].innerHTML = '<div class="breathing-button-cross"></div>';
  breathingBtns[i].addEventListener('click', animateBreathingButton, false);

  setButtonParameters(getDataAttributes(attributeNames,breathingBtns[i]), breathingBtns[i]);
}