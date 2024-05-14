import "./ajax-utils.js";
(function (global) {
    let contentAjax = {};
    let isLoading = true; 

    const snippetHomeHTML = "./snippets/home-snippet.html";
    const containerAjaxSelector = ".conteiner-ajax";

    const allCategoriesUrl = "json/categories.json";
    const categoriesTitleHtml = "snippets/categories-title-snippet.html";
    const categoryHtml = "snippets/category-snippet.html";

    const insertHTML = (selector, html) => {
        document.querySelector(selector).innerHTML = html;
    };

    const showLoading = (selector) => {
        document.querySelector(selector).innerHTML = `
        <div class="insert-loader">
            <span class="loader"></span>
        </div>`;
    };

    const loadCatalogCategories = () 
        if (!isLoading) {
            isLoading = true;
            showLoading(containerAjaxSelector);
            ajaxUtils.sendGetRequest(allCategoriesUrl, (response) => {
                buildAndShowCategoriesHTML(response);
                isLoading = false;
            });
        }
    };

    const buildAndShowCategoriesHTML = (categories) 
        ajaxUtils.sendGetRequest(
            categoriesTitleHtml,
            (categoriesTitleHtml) => {
                ajaxUtils.sendGetRequest(
                    categoryHtml,
                    (categoryHtmlTemplate) => {
                        const { html, categoriesTitle } = buildCategoriesViewHtml(
                            categories,
                            categoriesTitleHtml,
                            categoryHtmlTemplate
                        );
                        insertHTML(containerAjaxSelector, html);
                    },
                    false
                );
            },
            false
        );
    };

    const buildCategoriesViewHtml = (categories, categoriesTitle, categoryHtmlTemplate) 
        let html = "<div class='main-catalog__container'>";
        for (const category of categories) {
            console.log(category);
            let categoryHtml = categoryHtmlTemplate;
            categoryHtml = insertProperty(categoryHtml, "short_name", category["img-url"]);
            categoryHtml = insertProperty(categoryHtml, "name", category.title);
            html += categoryHtml;
        }
        html += "</div>";
        return { html, categoriesTitle };
    };

    document.addEventListener("DOMContentLoaded", (event) => {
        showLoading(containerAjaxSelector);
        setTimeout(() => {
            ajaxUtils.sendGetRequest(
                snippetHomeHTML,
                (response) => {
                    insertHTML(containerAjaxSelector, response);
                    showSlides(slideIndex);
                },
                false
            );
            isLoading = false; 
        }, 1000);
    });

    global.contentAjax = contentAjax;
    global.loadCatalogCategories = loadCatalogCategories; 
})(window);


// BURGER

function toggleMenu() {
    var menuIcon = document.querySelector('.menu-icon');
    menuIcon.classList.toggle('active');

    var burgerMenu = document.querySelector('.burger');
    burgerMenu.classList.toggle('active');
}
document.querySelector('.menu-icon').addEventListener('click', toggleMenu);


// SLIDER 

const slider = document.querySelector('.slider-wrapper');
const prevButton = document.querySelector('.prev-btn');
const nextButton = document.querySelector('.next-btn');
let slideIndex = 0;

function showSlides(index) {
    const slides = document.querySelectorAll('.slide-card');
    if (index >= slides.length) {
        slideIndex = 0;
    } else if (index < 0) {
        slideIndex = slides.length - 1;
    }
    slides.forEach((slide, i) => {
        if (i === slideIndex) {
            slide.style.display = "block";
        } else {
            slide.style.display = "none";
        }
    });
}

prevButton.addEventListener('click', () => {
    slideIndex--;
    showSlides(slideIndex);
});

nextButton.addEventListener('click', () => {
    slideIndex++;
    showSlides(slideIndex);
});

showSlides(slideIndex);

setInterval(() => {
    slideIndex++;
    showSlides(slideIndex);
}, 3000);
