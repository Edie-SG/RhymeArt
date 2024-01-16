window.onload = () => {
    loadPreviousTheme();
    transitionEffect();
    themeSwitch();
    iconSwitch()
    horizonVertical();
    selectThemes();

    if (window.location.href.indexOf("galleryEntrance.html") > -1) {
		inputName();
	}

    if (window.location.href.indexOf("galleryContent.html") > -1) {
        navToggler();
        cardToggler();
        toggleCardCarousel();
        fullViewToggle();
        offcanvasListsToggle();
        wishAndShopping();
        switchTab();
	}
}

function transitionEffect() {

    const transition_el = document.querySelector(".transition");
	const entrances = document.querySelectorAll(".internal");

	setTimeout(() => {
		transition_el.classList.remove("is-active");
	}, 500);

	for (let i = 0; i < entrances.length; i++) {
		const entrance = entrances[i];

		entrance.addEventListener("click", e => {
			e.preventDefault();
			let target = e.target.href;
			transition_el.classList.add("is-active");

			setTimeout(() => {
				window.location.href = target;
			}, 500);


		});
	}
}

function saveCurrentTheme() {
    var currentTheme = document.getElementById("theme").getAttribute("href");
    // var currentTransition = document.getElementById("transitionEffect").getAttribute("href");
    var regex = /-(.*)(\.css)/;

    var currentThemeName = regex.exec(currentTheme);
    // var currentTransitionName = regex.exec(currentTransition);
    localStorage.setItem("previousTheme", currentThemeName[1]);
    // localStorage.setItem("previousTransition", currentTransitionName[1]);
}

function loadPreviousTheme() {
    var previousThemeName = localStorage.getItem("previousTheme");
    // var previousTransitionName = localStorage.getItem("previousTransition");

    if (previousThemeName !== null) {
        var originalTheme = document.getElementById("theme").getAttribute("href")
        // var originalTransition = document.getElementById("transitionEffect").getAttribute("href");
        var regex = /-(.*)(\.css)/;

        var newTheme = originalTheme.replace(regex, "-" + previousThemeName + "$2");
        document.getElementById("theme").href = newTheme;
        // var newTransition = originalTransition.replace(regex, "-" + previousTransitionName + "$2");
        // document.getElementById("transitionEffect").href = newTransition;
    }

    if (previousThemeName === "frame") {
        document.querySelector("footer .firstGroup .btn.is-active").classList.remove("is-active");
        document.getElementById("frame").classList.add("is-active");
    }

    if (previousThemeName === "bright") {
        document.querySelector("footer .firstGroup .btn.is-active").classList.remove("is-active");
        document.getElementById("bright").classList.add("is-active");
    }

    if (previousThemeName === "dark") {
        document.querySelector("footer .firstGroup .btn.is-active").classList.remove("is-active");
        document.getElementById("dark").classList.add("is-active");
    }
}

// function randomInt(min, max) {
//     return Math.floor(Math.random() * (max - min + 1)) + min;
// }

// function uniqueBgNumber(min, max) {
//     const randomInt1 = randomInt(min, max);

//     const adjustMax = max - 1;
//     const randomInt2 = randomInt(min, adjustMax);
//     const finalRandomInt2 = randomInt2 >= randomInt1 ? randomInt2 + 1 : randomInt2;

//     const lazyBgPart1 = document.querySelector(".part1 .inner");
//     const lazyBgPart2 = document.querySelector(".part2 .inner");

//     lazyBgPart1.setAttribute("data-bg", "../imgs/transition/transitionPic" + randomInt1 + ".jpg");
//     lazyBgPart2.setAttribute("data-bg", "../imgs/transition/transitionPic" + finalRandomInt2 + ".jpg");
// }

// function lazyLoadBg() {
//     uniqueBgNumber(1, 5);

//     var lazyBgElements = document.querySelectorAll(".lazy-bg");

//     var observer = new IntersectionObserver(function (entries, observer) {
//         entries.forEach(function (entry) {
//           if (entry.isIntersecting) {
//             var imageUrl = entry.target.getAttribute("data-bg");
//             entry.target.style.backgroundImage = "url(" + imageUrl + ")";
//             observer.unobserve(entry.target);
//           }
//         });
//       });
    
//     lazyBgElements.forEach(function (element) {
//         observer.observe(element);

//         element.style.opacity = "1";

//         window.onunload = () => {
//             element.style.opacity = "0";
//         }
//     });
// }

function themeSwitch() {
    const themeLink = document.getElementById("theme");
    // const transitionE = document.getElementById("transitionEffect");
    cssSwitch(themeLink);
    // cssSwitch(transitionE);
}

function cssSwitch(cssDoc) {
    var original = cssDoc.getAttribute("href");
    var regex = /-(.*)(\.css)/;
    document.getElementById("frame").addEventListener("click", () => {
        var newCss = original.replace(regex, "-frame$2");
        cssDoc.href = newCss;
        saveCurrentTheme();
    });
    document.getElementById("frame").addEventListener("keypress", function(event) {
        if (event.key === "Enter") {
            document.getElementById("frame").click();
        }
    });

    document.getElementById("bright").addEventListener("click", () => {
        var newCss = original.replace(regex, "-bright$2");
        cssDoc.href = newCss;
        saveCurrentTheme();
    });
    document.getElementById("bright").addEventListener("keypress", function(event) {
        if (event.key === "Enter") {
            document.getElementById("bright").click();
        }
    });

    document.getElementById("dark").addEventListener("click", () => {
        var newCss = original.replace(regex, "-dark$2");
        cssDoc.href = newCss;
        saveCurrentTheme();
    });
    document.getElementById("dark").addEventListener("keypress", function(event) {
        if (event.key === "Enter") {
            document.getElementById("dark").click();
        }
    });
}

function iconSwitch() {
    const themeIcons = document.querySelectorAll("footer .firstGroup .btn");
    for(i = 0; i < themeIcons.length; i++) {
        const themeIcon = themeIcons[i];
        themeIcon.addEventListener("click", () => {
            document.querySelector("footer .firstGroup .btn.is-active").classList.remove("is-active");
            themeIcon.classList.add("is-active");
        });
    }

    const viewIcons = document.querySelectorAll("footer .secondGroup .btn");
    for(i = 0; i < viewIcons.length; i++) {
        const viewIcon = viewIcons[i];
        viewIcon.addEventListener("click", () => {
            document.querySelector("footer .secondGroup .btn.is-active").classList.remove("is-active");
            viewIcon.classList.add("is-active");
        });
    }
}

function inputName() {
    document.getElementById("nameIn").addEventListener("click", () => {
        var name = document.getElementById("name").value;
        document.getElementById("iName").innerHTML = name;

        const selection = document.querySelector(".selection");
        selection.style.setProperty("display", "block");
        selection.scrollIntoView({behavior: "smooth"});
    });

    document.getElementById("name").addEventListener("keypress", function(event) {
        if (event.key === "Enter") {
            document.getElementById("nameIn").click();
        }
    });
}

function navToggler() {
    const divButton = document.getElementById("toggleIcon");
    const navButton = document.querySelector("button.navbar-toggler");

    navButton.addEventListener("click", () => {
        const navBar = document.querySelectorAll("button.navbar-toggler.collapsed");
        if (navBar.length > 0) {
            divButton.classList.remove("open");
        }
        else {
            divButton.classList.add("open");
        }
    });
}

function selectThemes() {
    if (window.location.hash === "#landscapeFilter") {
        filterLandscapeTheme();
    }

    if (window.location.hash === "#FandBFilter") {
        filterFandBTheme();
    }

    if (window.location.hash === "#allFilter") {
        filterAllThemes();
    }
}


function filterLandscapeTheme() {
    const allThemes = document.querySelectorAll(".imgItem");
    var landscapeTheme = [];

    allThemes.forEach(function (item) {
        if (item.querySelector(".landscape")) {
            landscapeTheme.push(item);
        }

        item.style.setProperty("display", "none");
    });

    landscapeTheme.forEach(function (item) {
        item.style.setProperty("display", "");

        if (item.parentNode.classList.contains("carousel-inner")) {
            carouselThemeToggle(allThemes);
        }
    });
}

function filterFandBTheme() {
    const allThemes = document.querySelectorAll(".imgItem");
    var FandBTheme = [];

    allThemes.forEach(function (item) {
        if (item.querySelector(".FandB")) {
            FandBTheme.push(item);
        }

        item.style.setProperty("display", "none");
    });

    FandBTheme.forEach(function (item) {
        item.style.setProperty("display", "");

        if (item.parentNode.classList.contains("carousel-inner")) {
            carouselThemeToggle(allThemes);
        }
    });
}

function filterAllThemes() {
    const allThemes = document.querySelectorAll(".imgItem");

    allThemes.forEach(function (item) {
        item.style.setProperty("display", "");

        if (item.parentNode.classList.contains("carousel-inner")) {
            carouselThemeToggle(allThemes);
        }
    });
}

function cardToggler() {
    const cardButtons = document.querySelectorAll(".card-title.btn");
    for(let c = 0; c < cardButtons.length; c++) {
        const cardButton = cardButtons[c];
        const cardCollapse = cardButton.nextElementSibling;
        cardCollapse.setAttribute("id", "collapsing" + c);
        cardButton.setAttribute("href", "#collapsing" + c);
    }
}

function horizonVertical() {
    const footerGroups = document.querySelectorAll("footer ul");
    for(let f = 0; f < footerGroups.length; f++) {
        const footerGroup = footerGroups[f];
        var vertical = window.matchMedia("(aspect-ratio > 1.4)");
        changeMedia(vertical, footerGroup);
        vertical.addEventListener("change", () => {
            changeMedia(vertical, footerGroup);
        });
    }
}

function changeMedia(vertical, footerGroup) {  
    if (vertical.matches) {
        footerGroup.classList.replace("btn-group", "btn-group-vertical");
    }
    else {
        footerGroup.classList.replace("btn-group-vertical", "btn-group");
    }
}

function toggleCardCarousel() {
    const outBox = document.querySelector("#galleryThemes .containerBox");
    const innerBox = document.querySelector("#galleryThemes .innerBox");
    const items = document.querySelectorAll("#galleryThemes .imgItem");
    const cards = document.querySelectorAll("#galleryThemes .imgItem > div");
    const imgBoxes = document.querySelectorAll("#galleryThemes .imgItem .imgBox");
    const bodies = document.querySelectorAll("#galleryThemes .imgItem .captionContent");
    const titles = document.querySelectorAll("#galleryThemes .imgItem .captionContent a");
    const collapses = document.querySelectorAll("#galleryThemes .imgItem .captionContent .collapse")
    const preNextButton = document.querySelectorAll("#galleryThemes .containerBox > button");

    const cardButton = document.getElementById("cardView");
    const carouselButton = document.getElementById("carouselView");

    imgInfo();

    carouselButton.addEventListener("click", () => {
        outBox.classList.add("carousel", "slide");

        innerBox.classList.add("carousel-inner");
        innerBox.classList.remove("row");
        innerBox.classList.remove("g-3");
        

        items.forEach(function(node) {
            node.classList.remove("col-12");
            node.classList.remove("col-md-6");
            node.classList.remove("col-xl-4");
        });

        carouselThemeToggle(items);

        cards.forEach(function(node) {
            node.classList.remove("card");
            const fullBack = node.querySelector("#galleryThemes .fullView");
            fullBack.style.setProperty("transition", "");
        });

        imgBoxes.forEach(function(node) {
            node.classList.remove("card-img-top");
        });

        carouselBackground(imgBoxes);

        bodies.forEach(function(node) {
            node.classList.replace("card-body", "carousel-caption");
        });

        titles.forEach(function(node) {
            node.classList.remove("card-title", "btn");
            node.style.setProperty("pointer-event", "none");
        });

        collapses.forEach(function(node) {
            node.classList.add("show");
        });

        preNextButton.forEach(function(node) {
            node.style.setProperty("display", "block");
        });

        controlImgSize();
    });

    carouselButton.addEventListener("keypress", function(event) {
        if (event.key === "Enter") {
            carouselButton.click();
        }
    });

    cardButton.addEventListener("click", () => {
        outBox.classList.remove("carousel", "slide");

        innerBox.classList.remove("carousel-inner");
        innerBox.classList.add("row");
        innerBox.classList.add("g-3");

        items.forEach(function(node) {
            node.classList.remove("carousel-item");
            node.classList.add("col-12");
            node.classList.add("col-md-6");
            node.classList.add("col-xl-4");
            node.classList.remove("active");
        });

        cards.forEach(function(node) {
            node.classList.add("card");
        });

        imgBoxes.forEach(function(node) {
            node.classList.add("card-img-top");
            node.style.setProperty("background-image", "");
        });

        bodies.forEach(function(node) {
            node.classList.replace("carousel-caption", "card-body");
        });

        titles.forEach(function(node) {
            node.classList.add("card-title", "btn");
            node.style.setProperty("pointer-event", "all");
        });

        collapses.forEach(function(node) {
            node.classList.remove("show");
        });

        preNextButton.forEach(function(node) {
            node.style.setProperty("display", "none");
        });

        const infoCaptions = document.querySelectorAll("#galleryThemes .imgItem .captionContent");
        infoCaptions.forEach(function(node) {
            node.style.setProperty("transition", "");
        });
        const infoActives = document.querySelectorAll("#galleryThemes .captionContent.is-active");
        if (infoActives.length > 0) {
            infoActives.forEach(function(node) {
                node.classList.remove("is-active");
            });
        }
    });

    cardButton.addEventListener("keypress", function(event) {
        if (event.key === "Enter") {
            cardButton.click();
        }
    });
}

function carouselThemeToggle(itemsX) {
    var carouselItems = [];
    itemsX.forEach(function(node) {
        if (node.classList.contains("carousel-item")) {
            node.classList.remove("carousel-item");
        }

        if (node.classList.contains("active")) {
            node.classList.remove("active");
        }

        if (node.style.display !== "none") {
            carouselItems.push(node);
            node.classList.add("carousel-item");
            carouselItems[0].classList.add("active");
        }
    });
}

function carouselBackground(imgBoxes) {
    imgBoxes.forEach(function(node) {
        const img = node.querySelector("img");
        var srcAd = img.getAttribute("src");
        var address = "url('" + srcAd + "')";
        node.style.setProperty("background-image", address);
    });
}

function imgInfo() {
    const imgs = document.querySelectorAll(".imgItem .imgBox img");
    for (let x = 0; x < imgs.length; x++) {
        const img = imgs[x];
        img.addEventListener("click", () => {
            if (document.querySelectorAll(".carousel-item").length > 0) {
                const info = document.querySelector(".carousel-item.active .carousel-caption");
                info.style.setProperty("transition", "0.5s ease");
                info.classList.toggle("is-active");
            }
        });

        img.addEventListener("keypress", function(event) {
            if (event.key === "Enter") {
                img.click();
            }
        });
    }
}

function fullViewToggle() {
    const cardBoxes = document.querySelectorAll(".imgItem .card");
    for (let f = 0; f < cardBoxes.length; f++) {
        const cardBox = cardBoxes[f];
        const img = cardBox.querySelector("img");
        var src = img.getAttribute("src");
        var url = "url('" + src + "')";
        const fullBack = cardBox.querySelector(".fullView");
        fullBack.style.setProperty("background-image", url);

        const fullButton = cardBox.querySelector(".funcs button");
        fullButton.addEventListener("click", () => {
            fullBack.style.setProperty("transition", "0.5s ease");
            fullBack.classList.toggle("is-active");
        });

        fullBack.addEventListener("click", () => {
            fullBack.classList.remove("is-active");
        });
    }
}

function offcanvasListsToggle() {
    const list = document.querySelector(".offcanvasLists");
    const wishButton = document.getElementById("wishButton");
    const shopButton = document.getElementById("shopButton");
    const wishSection = document.getElementById("wishList");
    const shopSection = document.getElementById("shoppingList");
    const backgroundClick = document.querySelector(".listsBack");

    wishButton.addEventListener("click", () => {
        wishSection.style.setProperty("display", "block");
        shopSection.style.setProperty("display", "none");

        if (document.querySelectorAll(".offcanvasLists.is-active").length > 0 && document.querySelectorAll("#shopButton.is-active").length > 0) {
            shopButton.classList.remove("is-active");
            wishButton.classList.add("is-active");
        }
        else {
            list.classList.toggle("is-active");
            wishButton.classList.toggle("is-active");
            backgroundClick.classList.toggle("is-active");
        }
    });
    wishButton.addEventListener("keypress", function (event) {
        if (event.key === "Enter") {
            wishSection.style.setProperty("display", "block");
            shopSection.style.setProperty("display", "none");

            if (document.querySelectorAll(".offcanvasLists.is-active").length > 0 && document.querySelectorAll("#shopButton.is-active").length > 0) {
                shopButton.classList.remove("is-active");
                wishButton.classList.add("is-active");
            }
            else {
                list.classList.toggle("is-active");
                wishButton.classList.toggle("is-active");
                backgroundClick.classList.toggle("is-active");
            }
        }
    });

    shopButton.addEventListener("click", () => {
        shopSection.style.setProperty("display", "block");
        wishSection.style.setProperty("display", "none");

        if (document.querySelectorAll(".offcanvasLists.is-active").length > 0 && document.querySelectorAll("#wishButton.is-active").length > 0) {
            wishButton.classList.remove("is-active");
            shopButton.classList.add("is-active");
        }
        else {
            list.classList.toggle("is-active");
            shopButton.classList.toggle("is-active");
            backgroundClick.classList.toggle("is-active");
        }
    });
    shopButton.addEventListener("keypress", function (event) {
        if (event.key === "Enter") {
            shopSection.style.setProperty("display", "block");
            wishSection.style.setProperty("display", "none");

            if (document.querySelectorAll(".offcanvasLists.is-active").length > 0 && document.querySelectorAll("#wishButton.is-active").length > 0) {
                wishButton.classList.remove("is-active");
                shopButton.classList.add("is-active");
            }
            else {
                list.classList.toggle("is-active");
                shopButton.classList.toggle("is-active");
                backgroundClick.classList.toggle("is-active");
            }
        }
    });

    backgroundClick.addEventListener("click", () => {
        list.classList.remove("is-active");

        if (wishButton.classList.contains("is-active")) {
            wishButton.classList.remove("is-active");
        }

        if (shopButton.classList.contains("is-active")) {
            shopButton.classList.remove("is-active");
        }

        backgroundClick.classList.remove("is-active");
    });
}

function wishAndShopping() {
    var wishList = [];
    var shoppingList = [];
    const items = document.querySelectorAll("#galleryThemes .imgItem");

    items.forEach(function (item) {
        const wish = item.querySelector(".wishB");
        const shop = item.querySelector(".shoppingB");
        const itemDiv = item.firstElementChild;
        var randomClass = "class_" + Math.random().toString(36).substring(2, 10);
        itemDiv.classList.add(randomClass);
        wish.classList.add(randomClass);
        shop.classList.add(randomClass);

        wish.addEventListener("click", () => {
            if (item.querySelectorAll("#galleryThemes .wishB.added").length <= 0) {
                pushWishList(wish, wishList, randomClass);
            }
            else {
                removeWishList(wish, wishList, randomClass);
            }
            WishDeleteButton(wishList);
        });
        wish.addEventListener("keypress", function(event) {
            if (event.key === "Enter") {
                if (item.querySelectorAll("#galleryThemes .wishB.added").length <= 0) {
                    pushWishList(wish, wishList, randomClass);
                }
                else {
                    removeWishList(wish, wishList, randomClass);
                }
                WishDeleteButton(wishList);
            }
        });

        shop.addEventListener("click", () => {
            if (item.querySelectorAll("#galleryThemes .shoppingB.added").length <= 0) {
                pushShopList(shop, shoppingList, randomClass);
            }
            else {
                removeShopList(shop, shoppingList, randomClass);
            }
            ShopDeleteButton(shoppingList);
        });
        shop.addEventListener("keypress", function(event) {
            if (event.key === "Enter") {
                if (item.querySelectorAll("#galleryThemes .shoppingB.added").length <= 0) {
                    pushShopList(shop, shoppingList, randomClass);
                }
                else {
                    removeShopList(shop, shoppingList, randomClass);
                }
                ShopDeleteButton(shoppingList);
            }
        });
    });
}

function pushWishList(wish, wishList, randomClass) {
    wish.classList.add("added");
    const specialDiv = document.querySelector(":is(div)." + randomClass);
    wishList.push(specialDiv.outerHTML);
    const newWishList = wishList.join("<hr>");
    document.getElementById("wishList").innerHTML = newWishList;
}

function removeWishList(wish, wishList, randomClass) {
    const pushedDiv = document.getElementById("wishList").querySelector(":is(div)." + randomClass);
    const index = wishList.indexOf(pushedDiv.outerHTML);
    wish.classList.remove("added");
    wishList.splice(index, 1);
    const newWishList = wishList.join("<hr>");
    document.getElementById("wishList").innerHTML = newWishList;
}

function pushShopList(shop, shoppingList, randomClass) {
    shop.classList.add("added");
    const specialDiv = document.querySelector(":is(div)." + randomClass);
    shoppingList.push(specialDiv.outerHTML);
    const newShoppingList = shoppingList.join("<hr>");
    document.getElementById("shoppingList").innerHTML = newShoppingList;   
}

function removeShopList(shop, shoppingList, randomClass) {
    const pushedDiv = document.getElementById("shoppingList").querySelector(":is(div)." + randomClass);
    const index = shoppingList.indexOf(pushedDiv.outerHTML);
    shop.classList.remove("added");
    shoppingList.splice(index, 1);
    const newShoppingList = shoppingList.join("<hr>");
    document.getElementById("shoppingList").innerHTML = newShoppingList;
}

function WishDeleteButton(wishList) {
    const buttons = document.querySelectorAll("#wishList button.delete");

    buttons.forEach(function (button) {
        button.addEventListener("click", () => {
            var listDiv = button.parentElement.parentElement.parentElement;
            const index = wishList.indexOf(listDiv.outerHTML);
            wishList.splice(index, 1);
            const newWishList = wishList.join("<hr>");
            document.getElementById("wishList").innerHTML = newWishList;

            var wishButtonClass = Array.from(listDiv.classList).find(className => className.startsWith("class_"));
            const wishButton = document.getElementById("galleryThemes").querySelector(":is(svg).wishB." + wishButtonClass);
            wishButton.classList.remove("added");

            WishDeleteButton(wishList);
        });
    });
}

function ShopDeleteButton(shoppingList) {
    const buttons = document.querySelectorAll("#shoppingList button.delete");

    buttons.forEach(function (button) {
        button.addEventListener("click", () => {
            var listDiv = button.parentElement.parentElement.parentElement;
            const index = shoppingList.indexOf(listDiv.outerHTML);
            shoppingList.splice(index, 1);
            const newShoppingList = shoppingList.join("<hr>");
            document.getElementById("shoppingList").innerHTML = newShoppingList;

            var shopButtonClass = Array.from(listDiv.classList).find(className => className.startsWith("class_"));
            const shopButton = document.getElementById("galleryThemes").querySelector(":is(svg).shoppingB." + shopButtonClass);
            shopButton.classList.remove("added");

            ShopDeleteButton(shoppingList);
        });
    });
}

function switchContentPage(page_id) {
	// console.log(page_id);
	const current_page = document.querySelector("section.page.Active");
    current_page.classList.remove("Active");

	const next_page = document.querySelector(`section.page[data-page = "${page_id}"]`);

	next_page.classList.add("Active");
}

function switchTab() {
    const tab_switchers = document.querySelectorAll("[data-switcher]");
    for (let x = 0; x < tab_switchers.length; x++) {
		const tab_switcher = tab_switchers[x];
		const page_id = tab_switcher.dataset.tab;

		tab_switcher.addEventListener("click", () => {
			document.querySelector(".nav-item.active").classList.remove("active");
			tab_switcher.parentNode.classList.add("active");
			
			switchContentPage(page_id);
		});
	}
}

function controlImgSize() {
    const paintingImgs = document.querySelectorAll(".carousel-item .imgBox img");
    paintingImgs.forEach(function (paintingImg) {
        let h = paintingImg.naturalHeight;
        let w = paintingImg.naturalWidth;
        let aspectR = h / w;

        if (aspectR > 1.4) {
            paintingImg.style.setProperty("height", "90%");
        }

        else {
            paintingImg.style.setProperty("width", "85%");
        }
    });
}