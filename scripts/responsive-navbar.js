/**
 * Code from W3School for responsive navigation bars.
 * Source: https://www.w3schools.com/howto/howto_js_topnav_responsive.asp
 * The variables were renamed to match the website's local variables.
 *
 * Toggle between adding and removing the "responsive" class to navbar-content when the user clicks on the icon.
 */
function responsiveNavbarEnable() {
    const navbarElement = document.getElementById("navbar");
    if (navbarElement.className === "navbar-content") {
        navbarElement.className += " navbar-responsive";
    } else {
        navbarElement.className = "navbar-content";
    }
}
