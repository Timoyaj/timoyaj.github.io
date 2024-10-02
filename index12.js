// index.js

const hamburger = document.getElementById('hamburger'); 
const menu = document.querySelector('.menu'); 

hamburger.addEventListener('click', function () { 
    const hamIcon = this.querySelector('.hamburger-icon'); 
    const crossIcon = this.querySelector('.cross-icon'); 
    if (hamIcon.style.display === "none") { 
        hamIcon.style.display = "inline-block";
        menu.style.display = "none";
        crossIcon.style.display = "none";
    } else { 
        crossIcon.style.display = "inline-block";
        hamIcon.style.display = "none";
        menu.style.display = "block";
    } 
});

// Hire Me button
document.getElementById('hire-me').addEventListener('click', function() {
    window.location.href = 'mailto:tertimothy@gmail.com';
});

// Get Resume button
document.getElementById('get-resume').addEventListener('click', function() {
    window.location.href = './Yaji_CV_EDUCATION 2024.pdf'; // Update with the actual path to your resume PDF
});

// Contact Form
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const formData = new FormData(this);
    const formResponse = document.getElementById('form-response');

    fetch(this.action, {
        method: this.method,
        body: formData,
        headers: {
            'Accept': 'application/json'
        }
    })
    .then(response => {
        if (response.ok) {
            formResponse.innerHTML = '<p class="success">Thanks for your message! I will get back to you soon.</p>';
            this.reset();  // Reset the form fields
        } else {
            formResponse.innerHTML = '<p class="error">Oops! There was a problem with your submission. Please try again.</p>';
        }
    })
    .catch(error => {
        console.error('Error:', error);
        formResponse.innerHTML = '<p class="error">Oops! There was a problem with your submission. Please try again.</p>';
    });
});
