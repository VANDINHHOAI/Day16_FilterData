let list = document.getElementById('list');
let filter = document.querySelector('.filter');
let count = document.getElementById('count');

let listProducts = [
    {
        id: 1,
        name : 'Áo thun nam sám cổ tròn',
        price: 105600,
        quantiy: 15,
        image: 'image/t-shirt1.jpg',
        nature: {
            color: ['Xám'],
            size: ['S', 'M', 'L'],
            type: 'T-shirt'
        }
    },
    {
        id: 2,
        name : 'Áo thun nam sám cổ tròn có hoạ tiết',
        price: 205600,
        quantiy: 20,
        image: 'image/t-shirt2.jpg',
        nature: {
            color: ['Xám'],
            size: ['S', 'M', 'L'],
            type: 'T-shirt'
        }
    },
    {
        id: 3,
        name : 'Áo thun nam black cổ tròn',
        price: 305600,
        quantiy: 17,
        image: 'image/t-shirt3.jpg',
        nature: {
            color: ['Đen'],
            size: ['S', 'M', 'L'],
            type: 'T-shirt'
        }
    },
    {
        id: 4,
        name : 'Áo polo vải Texture',
        price: 405600,
        quantiy: 30,
        image: 'image/polo-1.jpg',
        nature: {
            color: ['Nâu'],
            size: ['S', 'M', 'L'],
            type: 'Polo'
        }
    },
    {
        id: 5,
        name : 'Áo polo tay ngắn kẻ sọc',
        price: 505600,
        quantiy: 40,
        image: 'image/polo-2.jpg',
        nature: {
            color: ['Trắng'],
            size: ['S', 'M', 'L'],
            type: 'Polo'
        }
    },
    {
        id: 6,
        name : 'Áo polo tay ngắn cổ V',
        price: 605600,
        quantiy: 20,
        image: 'image/polo3.jpg',
        nature: {
            color: ['Xanh lục'],
            size: ['S', 'M', 'L'],
            type: 'Polo'
        }
    },
    {
        id: 7,
        name : 'Áo sơ mi tay dài Jean',
        price: 705600,
        quantiy: 10,
        image: 'image/sm1.jpg',
        nature: {
            color: ['Nâu'],
            size: ['S', 'M', 'L'],
            type: 'Sơ mi'
        }
    },
    {
        id: 8,
        name : 'Áo sơ mi tay dài Oxford',
        price: 805600,
        quantiy: 10,
        image: 'image/sm2.jpg',
        nature: {
            color: ['Xanh lục'],
            size: ['S', 'M', 'L'],
            type: 'Sơ mi'
        }
    },
    {
        id: 9,
        name : 'Áo sơ mi tay ngắn',
        price: 905600,
        quantiy: 9,
        image: 'image/sm3.jpg',
        nature: {
            color: ['Đen'],
            size: ['S', 'M', 'L'],
            type: 'Sơ mi'
        }
    },
];

let productFilter = listProducts;

showProduct(productFilter);

filter.addEventListener('submit', function(event){
    event.preventDefault();
    let valueFilter = event.target.elements;
    productFilter = listProducts.filter(item => {
        // check category
        if(valueFilter.category.value != ''){
            if(item.nature.type != valueFilter.category.value){
                return false;
            }
        }
        // check color
        if(valueFilter.color.value != ''){
            if(!item.nature.color.includes(valueFilter.color.value)){
                return false;
            }
        }
        // check name
        if(valueFilter.name.value != ''){
            if(!item.name.includes(valueFilter.name.value)){
                return false;
            }
        }
        // check min price
        if(valueFilter.minPrice.value != ''){
            if(item.price < valueFilter.minPrice.value){
                return false;
            }
        }
        //  check max price
        if(valueFilter.maxPrice.value != ''){
            if(item.price > valueFilter.maxPrice.value){
                return false;
            }
        }


        return true;
    })
    showProduct(productFilter);
})
function showProduct(productFilter){
    count.innerText = productFilter.length;
    list.innerHTML = '';
    productFilter.forEach(item => {
        let newItem = document.createElement('div');
        newItem.classList.add('item');

        // create image
        let newImage = new Image();
        newImage.src = item.image;
        newItem.appendChild(newImage);
        // create name product
        let newTitle = document.createElement('div');
        newTitle.classList.add('title');
        newTitle.innerText = item.name;
        newItem.appendChild(newTitle);
        // create price
        let newPrice = document.createElement('div');
        newPrice.classList.add('price');
        newPrice.innerText = item.price.toLocaleString() + ' đ';
        newItem.appendChild(newPrice);

        list.appendChild(newItem);
    });
}