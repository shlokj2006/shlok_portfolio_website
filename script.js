
document.querySelectorAll('a.nav-link').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const sectionId = this.getAttribute('onclick').replace("scrollTo('", "").replace("')", "");
        const target = document.getElementById(sectionId);
        if (target) {
            e.preventDefault();
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});
