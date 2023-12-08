function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function scrollToBottom() {
    window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
}

function footerHide() {
    var footer = document.getElementById("mainFooter");
    if (footer.style.display === "none") {
        footer.style.display = "block";
    } else {
        footer.style.display = "none";
    }
}
function footerShow() {
    var footer = document.getElementById("mainFooter");
    footer.style.display = "block";
}

function spin() {
    const images = document.getElementsByClassName('spin');
    // Loop through the collection of elements with the 'spin' class
    for (let i = 0; i < images.length; i++) {
        // Apply the rotation to each image
        images[i].style.transform = 'rotate(360deg)';
    }
}