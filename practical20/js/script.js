import "./ajax-utils.js";
  (function (global) {
            let Content = {};
            let isLoading = true;
            const homeHTML = "./snippets/home-snippet.html";
            const contentContainerSelector = ".content_container";
            const catalogLink = document.querySelector(".catalog__link");
            const catalogHeaderContainer = "#content-header";

            const allCategoriesUrl = "json/categories.json";
            const categoriesTitleHtml = "snippets/categories-title-snippet.html";
            const categoryHtml = "snippets/category-snippet.html";

            catalogLink.addEventListener("click", (event) => {
                Content.loadCatalogCategories();
            });

            const insertProperty = function (string, propName, propValue) {
                const propToReplace = `{{${propName}}}`;
                return string.replace(new RegExp(propToReplace, "g"), propValue);
            };

            Content.loadCatalogCategories = function () {
                if (!isLoading) {
                    isLoading = true;
                    showLoading(contentContainerSelector);
                    ajaxUtils.sendGetRequest(allCategoriesUrl, (response) => {
                        buildAndShowCategoriesHTML(response);
                        isLoading = false;
                    });
                }
            };

            function buildAndShowCategoriesHTML(categories) {
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
                                insertHTML(catalogHeaderContainer, categoriesTitle);
                                insertHTML(contentContainerSelector, html);
                            },
                            false
                        );
                    },
                    false
                );
            }

            function buildCategoriesViewHtml(categories, categoriesTitle, categoryHtmlTemplate) {
                let html = "<div class='main-catalog-container'>";
                for (const category of categories) {
                    console.log(category);
                    let categoryHtml = categoryHtmlTemplate;
                    categoryHtml = insertProperty(categoryHtml, "short_name", category["img-url"]);
                    categoryHtml = insertProperty(categoryHtml, "name", category.title);
                    html += categoryHtml;
                }
                html += "</div>";
                return { html, categoriesTitle };
            }
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
