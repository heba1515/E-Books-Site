let filteredArray = [];

let Books = [
    {
        id: 1,
        name: "chemistry",
        image: "../images/book1.png",
        category: "Science"
    },
    {
        id: 2,
        name: "diary of a wimpy kid",
        image: "../images/book2.png",
        category: "Fantasy"
    },
    {
        id: 3,
        name: "i don't love you any more",
        image: "../images/book3.png",
        category: "Novels"
    },
    {
        id: 4,
        name: "alter happily ever after",
        image: "../images/book4.png",
        category: "Fantasy"
    },
    {
        id: 5,
        name: "read people like a book",
        image: "../images/book12.png",
        category: "Self-help"
    },
    {
        id: 6,
        name: "twisted games",
        image: "../images/book5.png",
        category: "History"
    },
    {
        id: 7,
        name: "the norton introduction to literature",
        image: "../images/book6.png",
        category: "Literary"
    },
    {
        id: 8,
        name: "creepy riddles",
        image: "../images/book7.png",
        category: "Fantasy"
    },
    {
        id: 9,
        name: "sofia mertinez",
        image: "../images/book8.png",
        category: "Kids"
    },
    {
        id: 10,
        name: "lakeside",
        image: "../images/book11.png",
        category: "Romance"
    },
    {
        id: 11,
        name: "the sherwood ring",
        image: "../images/book10.png",
        category: "History"
    },
    {
        id: 12,
        name: "stephen king",
        image: "../images/book9.png",
        category: "Thrillers"
    }
];

let mainBooks = document.querySelector(".main__books");

function displayBooks(arr) {
    mainBooks.innerHTML = ""; 
    for (let book of arr) {
        let imgContainer = document.createElement("div");
        imgContainer.classList.add("main__book", book.category);

        imgContainer.innerHTML = `
            <img class="main__book__img" src="${book.image}" alt="${book.name}">
            <div class="book-favorite">
                <i class="fa-regular fa-heart"></i>
            </div>
        `;
        mainBooks.appendChild(imgContainer);
    }

    // Add Wishlist 
    addWishlistFunctionality();
}

function addWishlistFunctionality() {
    const wishlistIcons = document.querySelectorAll('.book-favorite');

    wishlistIcons.forEach((wishlistIcon) => {
        const wishlistText = wishlistIcon.querySelector('i');

        wishlistIcon.addEventListener('click', () => {
            if (wishlistText.classList.contains('fa-regular')) {
                wishlistText.classList.remove('fa-regular');
                wishlistText.classList.add('fa-solid');
                wishlistText.style.color = "red"; 
            } else {
                wishlistText.classList.remove('fa-solid');
                wishlistText.classList.add('fa-regular');
                wishlistText.style.color = ""; 
            }
        });
    });
}

displayBooks(Books);

function filterProduct(value) {
    let buttons = document.querySelectorAll(".aside__ul__categories");
    buttons.forEach((button) => {
        if (value === button.innerText) {
            button.classList.add("active");
        } else {
            button.classList.remove("active");
        }
    });

    let items = document.querySelectorAll(".main__book");
    items.forEach((item) => {
        if (value === "All") {
            item.classList.remove("hide");
        } else {
            if (item.classList.contains(value)) {
                item.classList.remove("hide");
            } else {
                item.classList.add("hide");
            }
        }
    });
}

let searchInput = document.querySelector(".aside__search__input");

searchInput.addEventListener("keyup", () => {
    let searchValue = searchInput.value.toLowerCase(); 

    filteredArray = Books.filter((book) => book.name.toLowerCase().includes(searchValue));

    if (searchValue === "") {
        displayBooks(Books);
    } else {
        if (filteredArray.length === 0) {
            mainBooks.innerHTML = "<p>No books found.</p>";
        } else {
            displayBooks(filteredArray);
        }
    }
});

// // Hamburger Menu 
// const hamburger = document.querySelector(".header__hamburger");
// hamburger.onclick = function () {
//     const navBar = document.querySelector(".header__nav");
//     navBar.classList.toggle("active");
// };

// Search Button =
const searchButton = document.getElementById('search-button');
const searchContent = document.getElementById('search-content');
const searchClose = document.getElementById('search-close');

if (searchButton) {
    searchButton.addEventListener('click', () => {
        searchContent.classList.add('show-search');
    });
}

if (searchClose) {
    searchClose.addEventListener('click', () => {
        searchContent.classList.remove('show-search');
    });
}

// Login Button 
document.getElementById('login-button').addEventListener('click', () => {
    document.location = '../html/login.html';
});

window.onload = () => {
    filterProduct("All");
};
