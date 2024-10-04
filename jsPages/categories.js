let filteredArray = [];

let Books = [
    {
        id: 1,
        name: "chemistry",
        image: "../images/image1.png",
        category: "Science"
    },
    {
        id: 2,
        name: "diary of a wimpy kid",
        image: "../images/image2.png",
        category: "Fantasy"
    },
    {
        id: 3,
        name: "i don't love you any more",
        image: "../images/image3.png",
        category: "Novels"
    },
    {
        id: 4,
        name: "alter happily ever after",
        image: "../images/image4.png",
        category: "Fantasy"
    },
    {
        id: 5,
        name: "read people like a book",
        image: "../images/image12.png",
        category: "Self-help"
    },
    {
        id: 6,
        name: "twisted games",
        image: "../images/image5.png",
        category: "History"
    },
    {
        id: 7,
        name: "the norton introduction to literature",
        image: "../images/image6.png",
        category: "Literary"
    },
    {
        id: 8,
        name: "creepy riddles",
        image: "../images/image7.png",
        category: "Fantasy"
    },
    {
        id: 9,
        name: "sofia mertinez",
        image: "../images/image8.png",
        category: "Kids"
    },
    {
        id: 10,
        name: "lakeside",
        image: "../images/image11.png",
        category: "Romance"
    },
    {
        id: 11,
        name: "the sherwood ring",
        image: "../images/image10.png",
        category: "History"
    },
    {
        id: 12,
        name: "stephen king",
        image: "../images/image9.png",
        category: "Thrillers"
    }
]


let mainBooks = document.querySelector(".main__books");


function displayBooks(arr){
    mainBooks.innerText = "";
    for(let i=0; i<arr.length; i++){
        let imgContainer = document.createElement("div");
        imgContainer.classList.add("main__book");
    
        let image = document.createElement("img");
        image.classList.add("main__book__img");
        image.setAttribute("src", arr[i].image);
    
        imgContainer.appendChild(image);
        mainBooks.appendChild(imgContainer);
    }
}
displayBooks(Books);


for(let i of Books){
    let imgContainer = document.createElement("div");
    imgContainer.classList.add("main__book", i.category, "hide");

    let image = document.createElement("img");
    image.classList.add("main__book__img");
    image.setAttribute("src", i.image);

    imgContainer.appendChild(image);
    mainBooks.appendChild(imgContainer);
}



function filterProduct(value){
    let buttons = document.querySelectorAll(".aside__ul__categories");
    buttons.forEach((button)=>{
        if(value == button.innerText){
            button.classList.add("active");
        }else{
            button.classList.remove("active");
        }
    });


    let items = document.querySelectorAll(".main__book");
    items.forEach((item)=>{
        if(value == "All"){
            item.classList.remove("hide");
        }else{
            if(item.classList.contains(value)){
                item.classList.remove("hide");
            }else{
                item.classList.add("hide");
            }
        }
    });
}



let searchInput = document.querySelector(".aside__search__input");

searchInput.addEventListener("keyup", ()=>{
    let searchValue = searchInput.value;

    filteredArray = Books.filter((ele)=>{
        if(ele.name.includes(searchValue)){
            return ele.name;
        }
    });
    if(this.value == ""){
        displayBooks(Books);
    }else{
        if(filteredArray == ""){
            mainBooks.innerHTML = "";
        }else{
            displayBooks(filteredArray);
            mainBooks.computedStyleMap.display = 'none';
        }
    }
})



window.onload = ()=>{
    filterProduct("All");
}


