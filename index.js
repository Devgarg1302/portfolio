function redirectToPage1() {
    window.location.href = '/portfolio/blog.html';
}

function redirectToPage2() {
    window.location.href = '/portfolio/about.html';
}

function github() {
    window.open('https://github.com/Devgarg1302');
}

function linkdin() {
    window.open('https://www.linkedin.com/in/devgarg13/');
}

function leetcode() {
    window.open('https://leetcode.com/devindergarg1302/');
}

function instagram() {
    window.open('https://www.instagram.com/devgarg13/');
}

function resume(){
    document.open("https://drive.google.com/file/d/16W5zPq5OIxxOePy6AicF5Vg-bbKNyikp/view?usp=sharing" ,width="640" ,height="480" ,allow="autoplay")
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

function shareContent() {
    if (navigator.share) {
      navigator.share({
        title: 'Mixing Css colors',
        text: 'Check out this awesome content!',
        url: 'http://127.0.0.1:5500/articles/mixcss.html',
      })
        .then(() => console.log('Successful share'))
        .catch((error) => console.log('Error sharing:', error));
    } else {
      alert('Web Share API not supported on this device.');
    }
  }

  function shareContent1() {
    if (navigator.share) {
      navigator.share({
        title: 'Cascading in CSS',
        text: 'Check out this awesome content!',
        url: 'http://127.0.0.1:5500/articles/cascade.html',
      })
        .then(() => console.log('Successful share'))
        .catch((error) => console.log('Error sharing:', error));
    } else {
      alert('Web Share API not supported on this device.');
    }
  }

