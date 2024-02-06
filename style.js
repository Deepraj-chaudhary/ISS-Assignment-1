
var icon = document.getElementById("icon");
icon.onclick = function () {
    document.body.classList.toggle("light-theme");
    if (document.body.classList.contains("light-theme")) {
        icon.src = "images/sun.png";
    } else {
        icon.src = "images/moon.png";
    }
}

window.addEventListener('scroll', function() {
    const image = document.querySelector('.about-col-1 img');
    const imagePosition = image.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 1.3;

    if (imagePosition < screenPosition) {
        image.classList.add('image-in-view');
    } else {
        image.classList.remove('image-in-view');
    }
});

window.addEventListener('scroll', function() {
    const skillsSection = document.getElementById('skills');
    const skillsPosition = skillsSection.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 1.3;

    if (skillsPosition < screenPosition) {
        skillsSection.classList.add('skills-in-view');
    } else {
        skillsSection.classList.remove('skills-in-view');
    }
});




