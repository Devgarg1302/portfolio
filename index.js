function redirectToPage1() {
    window.location.href = 'blog.html';
}

function redirectToPage2() {
    window.location.href = 'about.html';
}

function scrollToSection1() {
    const targetSection = document.getElementById('projects');

    if (targetSection) {
        window.scrollTo({
            top: targetSection.offsetTop,
            behavior: 'smooth'
        });
    }
}

function scrollToSection2() {
    const targetSection = document.getElementById('contact');

    if (targetSection) {
        window.scrollTo({
            top: targetSection.offsetTop,
            behavior: 'smooth'
        });
    }
}

function redirectToPage3() {
    window.location.href = '/index.html#projects'; 
}

function redirectToPage4() {
    window.location.href = '/index.html#contact';
}