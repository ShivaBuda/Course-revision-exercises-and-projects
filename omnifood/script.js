// Updates current year in copyright of footer section
const copyright_year = document.querySelector(".copyright_year");
copyright_year.textContent = new Date().getFullYear();

// To toggle between  open and close nav-menu
const nav_menu_btn = document.querySelector(".btn_nav_menu");
const header = document.querySelector(".header");

nav_menu_btn.addEventListener("click", () => {
    header.classList.toggle("nav_open");
});

// Smooth scrolling

const allLinks = document.querySelectorAll("a:link");
allLinks.forEach((linkEl) => {
    linkEl.addEventListener("click", (event) => {
        event.preventDefault();
        const href = linkEl.getAttribute("href");
        // console.log(href);
        // Scroll to Home page (top)
        if (href === "#")
            window.scrollTo({
                top: 0,
                behavior: "smooth",
            });

        // Scroll to other links
        if (href !== "#" && href.startsWith("#")) {
            const sectionEl = document.querySelector(href);
            sectionEl.scrollIntoView({behavior: "smooth"});
        }
        // Close mobile nav-menu window
        if (linkEl.classList.contains("nav_link")) {
            header.classList.toggle("nav_open");
        }
    });
});

// Sticky navigation
const sectionHeroEl = document.querySelector(".section_hero");
const observer = new IntersectionObserver(
    (entries) => {
        const entry = entries[0];

        if (!entry.isIntersecting) {
            document.body.classList.add("sticky_nav");
        }
        if (entry.isIntersecting) {
            document.body.classList.remove("sticky_nav");
        }
    },
    {
        root: null,
        threshold: 0,
    },
);
observer.observe(sectionHeroEl);
