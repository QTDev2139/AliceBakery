var btnSignup = $('#signUp');
var btnLogin = $('#login');
var tabModals = document.querySelectorAll('.modal-content');

// removes default behavior
btnSignup.click(function(e) {
    e.preventDefault();
})
btnLogin.click(function(e) {
    e.preventDefault();
})

// Tabs
btnSignup.click(function() {
    tabModals[1].classList.remove('active');
    tabModals[0].classList.add('active');
})
btnLogin.click(function() {
    tabModals[0].classList.remove('active');
    tabModals[1].classList.add('active');
})


