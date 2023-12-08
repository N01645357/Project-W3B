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
