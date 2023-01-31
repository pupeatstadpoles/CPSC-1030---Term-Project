/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function topnavPain() {
    var x = document.getElementById("topnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}


// toggle dyslexia support
const isPressed = window.localStorage.getItem('dyslexic') === 'true';
if (isPressed) {
    document.body.classList.add('dyslexia-mode');
}

// set the button to pressed if appropriate
const toggle = document.getElementById('dyslexia-toggle');
if (isPressed) {
    toggle.setAttribute('aria-pressed', 'true');
}

// toggle dyslexia support
toggle.addEventListener('click', (e) => {
    let pressed = e.target.getAttribute('aria-pressed') === 'true';
    e.target.setAttribute('aria-pressed', String(!pressed));
    document.body.classList.toggle('dyslexia-mode');
    window.localStorage.setItem('dyslexic', String(!pressed));
});