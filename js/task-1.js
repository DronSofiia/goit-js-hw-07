const categoriesList = document.querySelectorAll('#categories .item');
console.log('Number of categories:', categoriesList.length);


categoriesList.forEach(category => {
    const title = category.querySelector("h2");
    title.classList.add("item-headline");

    const elementsCount = category.querySelectorAll("ul li");
    elementsCount.forEach(element => {
        element.classList.add("item-li");
    });

    console.log('Category:', title.textContent);
    console.log('Elements:', elementsCount.length);
})

