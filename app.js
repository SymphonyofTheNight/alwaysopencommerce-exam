//get dom elements 
const MobileNavElement = document.getElementById('mobile-dom-element');
const HamburgerToggle = document.getElementById('toggle-hamburger'); // toggle for mobile navigation dropdown
const ArrowDownCategoryToggle = document.getElementById('toggle-category'); // category btn
const showElementMenu = document.getElementById('show-element-toggle'); // dom element for mobile nav menu
const showCategoryMenu = document.getElementById('show-category-toggle'); // dom element of categories for mobile dropdown
const mobileCategories = document.getElementById('mobile-categories'); // dom parent element of categories for mobile
const mobileSearchBar = document.getElementById('mobile-search-bar-element'); // mobile search bar dom element
const DesktopNavElement = document.getElementById('deskop-nav-element'); // desktop nav element
const DesktopSearchNavLogoElement = document.getElementById('desktop-search-bar/logo-element'); // Desktop search and logo dom element
const DesktopCategories = document.getElementById('desktop-categories') // desktop categories dom element

// boolean
let ifHambugerToggle = false;
let ifCategoryToggle = false;

//  get mobile breakpoint
const getMobileMedia = window.matchMedia("(max-width: 820px)"); /// when down to 768 show elements 
const HideMobileNavigations = window.matchMedia("(max-width: 768px)");

if (getMobileMedia.matches) {
    MobileNavElement.style.display = 'grid';
    mobileCategories.style.display = 'grid';
    mobileSearchBar.style.display = 'flex';
} else {
    MobileNavElement.style.display = 'none';
    mobileCategories.style.display = 'none';
    mobileSearchBar.style.display = 'none';
}

if (!getMobileMedia.matches) {
    DesktopNavElement.style.display = 'flex'
    DesktopSearchNavLogoElement.style.display = 'grid'
    DesktopCategories.style.display = 'grid'
} else {
    DesktopNavElement.style.display = 'none'
    DesktopSearchNavLogoElement.style.display = 'none'
    DesktopCategories.style.display = 'none'
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











