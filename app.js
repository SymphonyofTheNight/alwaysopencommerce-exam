//get dom elements 
const MobileNavElement = document.getElementById('mobile-dom-element');
const HamburgerToggle = document.getElementById('toggle-hamburger'); // hamburger btn
const ArrowDownCategoryToggle = document.getElementById('toggle-category'); // category btn
const showElementMenu = document.getElementById('show-element-toggle'); // dom element for mobile nav menu
const showCategoryMenu = document.getElementById('show-category-toggle'); // dom element for mobile category

// boolean
let ifHambugerToggle = false;
let ifCategoryToggle = false;


//  get mobile breakpoint
const getMobileMedia = window.matchMedia("(min-width: 320px)");

if (getMobileMedia.matches) {
    MobileNavElement.classList.remove("mobile-dom-element");
} else {
    MobileNavElement.classList.add("mobile-dom-element");
}

HamburgerToggle.addEventListener('click', () => {

    ifHambugerToggle = !ifHambugerToggle

    if (getMobileMedia.matches && ifHambugerToggle) {
        showElementMenu.classList.remove("showElementMenu-none");
        showElementMenu.classList.add("showElementMenu")
    } else {
        showElementMenu.classList.remove("showElementMenu");
        showElementMenu.classList.add("showElementMenu-none")
    }
})

ArrowDownCategoryToggle.addEventListener('click', () => {

    ifCategoryToggle = !ifCategoryToggle

    if (getMobileMedia.matches && ifCategoryToggle) {
        showCategoryMenu.classList.remove("showCategoryElement-none");
        showCategoryMenu.classList.add("showCategoryElement")
    } else {
        showCategoryMenu.classList.remove("showCategoryElement");
        showCategoryMenu.classList.add("showCategoryElement-none")
    }
})











