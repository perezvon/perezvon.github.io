/* Set the width of the side navigation to 250px */
function openNav() {
    let w = window.innerWidth;
    document.getElementById('nav').style.width =   w > 501 ? '250px' : '100vw';
    document.getElementById('nav-menu-button').style.opacity = 0;
}

/* Set the width of the side navigation to 0 */
function closeNav() {
    document.getElementById('nav').style.width = '0';
    document.getElementById('nav-menu-button').style.opacity = 1;
}
