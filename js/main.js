window.addEventListener('load', () => {
    var loader = document.querySelector(".loader"); //on class 'loader'
    loader.classList.add('load-finish');  
});

var typed = new Typed('#typed', {
    strings: ["Web Developer", "Competitive Programmer", "Open Source Enthusiast"],
    backSpeed: 70,
    typeSpeed: 120,
    loop: true,
    backDelay: 500
});

/*Firebase*/
// Reference messages collection
var messagesRef = firebase.database().ref('messages');

// Listen for form submit
document.querySelector('form').addEventListener('submit', submitForm);

// Submit form
function submitForm(e) {
    e.preventDefault();

    // Get values
    var name = getInputVal('form-name');
    var email = getInputVal('form-email');
    var sub = getInputVal('form-sub');
    var message = getInputVal('form-msg');

    // Save message
    saveMessage(name, email, sub, message);

    // Clear form
    document.querySelector('form').reset();
}

// Function to get get form values
function getInputVal(id) {
    return document.getElementById(id).value;
}

// Save message to firebase
function saveMessage(name, email, sub, message) {
    var newMessageRef = messagesRef.push();
    newMessageRef.set({
        name: name,
        email: email,
        sub: sub,
        message: message
    });
}