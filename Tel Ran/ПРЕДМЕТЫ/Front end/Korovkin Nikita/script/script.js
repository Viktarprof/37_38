const productContainer = document.getElementById("products");
let allProducts = [];

// cart
let cart = []; // { product: <продукт>, qty: <число> }

// 1. если product есть в cart, то
//    1.1. находим productIndex - позицию этого элемента
//    1.2. увеличиваем cart[productIndex].qty на 1
// 2. если product нет в cart, то
//    2.1. добавляем { product: product, qty: 1 } в конец массива 
//         cart
function addToCart(product) {
    const productIndex = cart.findIndex(function (item) {
        return item.product === product;
    });
    if (productIndex !== -1) {
        cart[productIndex].qty++;
    } else {
        cart.push({ product: product, qty: 1 });
    }
}

// removeFromCart удаляет из массива cart продукт
function removeFromCart(product) {
    cart = cart.filter(function (item) {
        return item.product !== product;
    });
}

// возвращает целое число равное сумме всех стоимостей 
// товаров в корзине с учётом количества
function getCartTotal() {
    return cart.reduce(function (accumulator, value) {
        return accumulator + value.product.price * value.qty;
    }, 0);
}

function drawCart() {

}
drawCart();

function showCart() {

}

function hideCart() {

}

function drawProduct(product) {
    const productWrapper = document.createElement("div");
    productWrapper.classList.add("product");

    const category = document.createElement("div");
    category.classList.add("category", product.category);
    category.innerHTML = product.category;

    const img = document.createElement("img");
    img.classList.add("product_image");
    img.src = product.image;

    const content = document.createElement("div");
    content.classList.add("product_content");

    const title = document.createElement("div");
    title.classList.add("product_title");
    title.innerHTML = product.title;

    const info = document.createElement("div");
    info.classList.add("product_info");

    const price = document.createElement("div");
    price.classList.add("product_price");
    price.innerHTML = `${product.price}$`;

    const btn = document.createElement("div");
    btn.classList.add("btn");
    btn.addEventListener("click", function () {
        addToCart(product);
    });
    btn.innerHTML = "В корзину";

    info.appendChild(price);
    info.appendChild(btn);

    const description = document.createElement("div");
    description.classList.add("product_description");
    description.innerHTML = product.description;

    content.appendChild(title);
    content.appendChild(info);
    content.appendChild(description);

    productWrapper.appendChild(category);
    productWrapper.appendChild(img);
    productWrapper.appendChild(content);

    productContainer.appendChild(productWrapper);
}

const categories = [ "meat", "vegetable", "seasoning" ];
function getRandomNumber(a, b) {
    return Math.floor(Math.random() * (b + 1 - a) + a);
}
function generateRandomProduct() {
    const categoryIndex = getRandomNumber(0, categories.length - 1); // случайное число [0, 2]
    const productIndex = getRandomNumber(1, 1000); // случайное число [1, 1000]
    const price = getRandomNumber(25, 75); // случайное число [25, 75]

    return {
        category: categories[categoryIndex],
        title: `Product ${productIndex}`,
        image: "image.jpg",
        price: price,
        description: `Description of product ${productIndex}`
    };
}

for (let i = 0; i < 500; i++) {
    allProducts.push(generateRandomProduct());
}

const countPerPage = 60;

let selectedCategory = "";
function filterByCategory(product) {
    if (selectedCategory === "") {
        return true;
    }
    return product.category === selectedCategory;
}

/*
    ДЗ: Реализовать аналогичным образом фильтр по цене
        Фильтр применяется по нажатию на кнопку Search
        Валидацию можно не делать
*/
const filters = [
    filterByCategory
]; // функции, принимающие product и возвращающие true / false

function checkProduct(product) {
    return filters.map(function (filter) {
        return filter(product);
    }).every(function (filterResult) {
        return filterResult;
    });
}
/*
    Drawing 30 elements from allProducts array.

    @param page - selected page to draw (starts with 0)
*/
function drawProducts(page) {
    productContainer.innerHTML = "";
    const res = [];
    let foundCount = 0;
    for (let i = 0; i < allProducts.length; i++) {
        const product = allProducts[i];
        let areFiltersPassed = checkProduct(product);
        if (areFiltersPassed) {
            if (foundCount >= page * countPerPage) {
                res.push(product);
            }
            foundCount++;
        }
        if (res.length === countPerPage) {
            break;
        }
    }
    res.forEach(drawProduct);
}

/*
    Drawing pagination items in div id="paginator".

    @param itemsCount - number of pages
*/
const paginatorContainer = document.getElementById("paginator");
function goToPage(e) {
    const target = e.target;
    const pageNum = +target.getAttribute("data-page");

    const activeItems = document
        .getElementsByClassName("paginator_item-active");
    for (let i = 0; i < activeItems.length; i++) {
        activeItems[i].classList.remove("paginator_item-active");
    }
    target.classList.add("paginator_item-active");

    drawProducts(pageNum);
}
function drawPagination(itemsCount) {
    paginatorContainer.innerHTML = "";
    for (let i = 0; i < itemsCount; i++) {
        const item = document.createElement("div");
        item.classList.add("paginator_item");
        item.setAttribute("data-page", i);
        item.addEventListener("click", goToPage);
        item.innerHTML = `${i + 1}`;
        paginatorContainer.appendChild(item);
    }
}

drawPagination(Math.ceil(allProducts.length / countPerPage));

// Если нажали на категорию в шапке
// 1. выставляем соответствующую selectedCategory
// 2. идём на 0 страницу
// 3. обновляем пагинатор
function updateSelectedCategory(category) {
    selectedCategory = category;
    goToPage({ 
        target: document.getElementsByClassName("paginator_item")[0],
    });
    const filteredItemsCount = allProducts
        .filter(checkProduct).length;
    drawPagination(Math.ceil(filteredItemsCount / countPerPage));
}

// 1. вызвать updateSelectedCategory с нужной категорией (data-category)
// 2. убрать класс header_item-active со всех элементов
// 3. поставить класс header_item-active на этот элемент
function onHeaderItemClick(evt) {
    const target = evt.target;
    const category = target.getAttribute("data-category");
    updateSelectedCategory(category);
    const activeItems = document
        .getElementsByClassName("header_item-active");
    for (let i = 0; i < activeItems.length; i++) {
        activeItems[i].classList.remove("header_item-active");
    }
    target.classList.add("header_item-active");
}
const headerItems = document.getElementsByClassName("header_item");
for (let i = 0; i < headerItems.length; i++) {
    headerItems[i].addEventListener("click", onHeaderItemClick);
}

goToPage({ 
    target: document.getElementsByClassName("paginator_item")[0],
});

let activePriceSorting;
function sortByPrice(direction) {
    const sign = direction === "asc" ? 1 : -1;
    allProducts = allProducts.sort(function (a, b) {
        if (a.price > b.price) {
            return sign;
        } else {
            return -sign;
        }
    });

    goToPage({ 
        target: document.getElementsByClassName("paginator_item")[0],
    });

    activePriceSorting = direction;
}

let activeTitleSorting;
function sortByTitle(direction) {
    const sign = direction === "asc" ? 1 : -1;
    allProducts = allProducts.sort(function (a, b) {
        const aTitle = a.title;
        const bTitle = b.title;
        if (aTitle.length === bTitle.length) {
            return sign * aTitle.localeCompare(bTitle);
        }
        if (aTitle.length > bTitle.length) {
            return sign;
        } else {
            return -sign;
        }
    });
    goToPage({ 
        target: document.getElementsByClassName("paginator_item")[0],
    });

    activeTitleSorting = direction;
}

function onSortClick(activeSorting, sort, target) {
    if (activeSorting && activeSorting === "asc") {
        sort("desc");
    } else if (activeSorting && activeSorting === "desc") {
        sort("asc");
    } else if (!activeSorting) {
        sort("asc");
    }
    const activeItems = 
        document.getElementsByClassName("sortings_item-active");
    for (let i = 0; i < activeItems.length; i++) {
        activeItems[i].classList.remove("sortings_item-active");
    }
    target.classList.add("sortings_item-active");
}

document
    .getElementById("title-sorting")
    .addEventListener("click", function (evt) {
        onSortClick(activeTitleSorting, sortByTitle, evt.target);
    });
document
    .getElementById("price-sorting")
    .addEventListener("click", function (evt) {
        onSortClick(activePriceSorting, sortByPrice, evt.target);
    });

/*
    MVC

    M - Model представление данных
    V - View внешний вид
    C - Controller логика
*/