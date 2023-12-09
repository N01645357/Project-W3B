// Button to quick scroll to the top of the page
function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}
// Button to quick scroll to the bottom of the page
function scrollToBottom() {
    window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
}

// Button to hide the footer
function footerHide() {
    var footer = document.getElementById("mainFooter");
    footer.style.display = "none";
}
// Button to show the footer when hidden
function footerShow() {
    var footer = document.getElementById("mainFooter");
    footer.style.display = "block";
}