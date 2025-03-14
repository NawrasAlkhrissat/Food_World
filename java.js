const form = document.querySelector('form');
const select = document.querySelector('#operation');
const btn = document.querySelector('button');
const d1 = document.querySelector('.first');
// let Myfoods = [
//     {
//         name: 'Mediterranean Pasta Salad',
//         cat: 'Seafood',
//         area: 'Italian',
//         image: 'https:\/\/www.themealdb.com\/images\/media\/meals\/wvqpwt1468339226.jpg',
//         youtube: 'https:\/\/www.youtube.com\/watch?v=e52IL8zYmaE'
//     },
//     {
//         name: 'Spicy Arrabiata Penne',
//         cat: '"Indian',
//         area: 'Italian',
//         image: 'https:\/\/www.themealdb.com\/images\/media\/meals\/ustsqw1468250014.jpg',
//         youtube: 'https:\/\/www.youtube.com\/watch?v=1IszT_guI08'
//     },
//     {
//         name: 'Lamb Tzatziki Burgers',
//         cat: 'Lamb',
//         area: 'Greek',
//         image: 'https:\/\/www.themealdb.com\/images\/media\/meals\/k420tj1585565244.jpg',
//         youtube: 'https:\/\/www.youtube.com\/watch?v=s7_TF4ZHjPc'
//     },
//     {
//         name: 'Pizza Margherita',
//         cat: 'Miscellaneous',
//         area: 'Italian',
//         youtube: 'https:\/\/www.youtube.com\/watch?v=Mt5lgUZRoUg',
//         image: 'https:\/\/www.themealdb.com\/images\/media\/meals\/x0lk931587671540.jpg'
//     },
//     {
//         name: 'Pancakes',
//         cat: 'Dessert',
//         area: 'American',
//         youtube: 'https:\/\/www.youtube.com\/watch?v=LWuuCndtJr0',
//         image: 'https:\/\/www.themealdb.com\/images\/media\/meals\/rwuyqx1511383174.jpg'
//     }, {
//         name: 'Chicken Handi',
//         cat: 'Chicken',
//         area: 'Indian',
//         youtube: 'https:\/\/www.youtube.com\/watch?v=IO0issT0Rmc',
//         image: 'https:\/\/www.themealdb.com\/images\/media\/meals\/wyxwsp1486979827.jpg'
//     }];
// localStorage.setItem('myData', JSON.stringify(Myfoods)); 


let storedData = localStorage.getItem('myData');
let foods = JSON.parse(storedData);
creat();

select.addEventListener('change', () => {
    btn.classList.remove('non');
})
select.addEventListener('change', () => {
    if (select.value === 'search') {
        btn.innerText = 'Search';
    }
    else if (select.value === 'delete') {
        btn.innerText = 'Delete';
        let x = document.createElement('select');
        let op = document.createElement('option');
        op.innerText = "Select Food to Delete"
        x.appendChild(op);
        x.classList.add('nana');
        let y = foods;
        for (let j = 0; j <= 9; j++) {
            if (!y[j]) break;
            op = document.createElement('option');
            op.innerText = y[j].name;
            op.value = y[j].name;
            x.appendChild(op);
        }
        d1.insertAdjacentElement("beforebegin", x);
        x.addEventListener('change', () => {
            let z = x.value;
            switch (z) {
                case foods[0].name: {
                    alert(`Delete The Show (${foods[0].name})`);
                    foods.splice(0, 1);
                    break;
                }
                case foods[1].name: {
                    alert(`Delete The Show (${foods[1].name})`);
                    foods.splice(1, 1);
                    break;
                }
                case foods[2].name: {
                    alert(`Delete The Show ${foods[2].name}`);
                    foods.splice(2, 1);
                    break;
                }
                case foods[3].name: {
                    alert(`Delete The Show (${foods[3].name})`);
                    foods.splice(3, 1);
                    break;
                }
                case foods[4].name: {
                    alert(`Delete The Show (${foods[4].name})`);
                    foods.splice(4, 1);
                    break;
                }
                case foods[5].name: {
                    alert(`Delete The Show (${foods[5].name})`);
                    foods.splice(5, 1);
                    break;
                }
                case foods[6].name: {
                    alert(`Delete The Show (${foods[6].name})`);
                    foods.splice(6, 1);
                    break;
                }
                case foods[7].name: {
                    alert(`Delete The Show (${foods[7].name})`);
                    foods.splice(7, 1);
                    break;
                }
                case foods[8].name: {
                    alert(`Delete The Show (${foods[8].name})`);
                    foods.splice(8, 1);
                    break;
                }
            }
        })
    } else if (select.value === 'add') {
        btn.innerText = 'Add';
        addFood();
    }
    else if (select.value === 'edit') {
        btn.innerText = 'Edit';
        editFood(foods);
    }
}
)
form.addEventListener('submit', (e) => {
    e.preventDefault();
    localStorage.setItem('myData', JSON.stringify(foods));
    storedData = localStorage.getItem('myData');
    foods = JSON.parse(storedData);
    location.reload();
})

function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function creat() {
    for (let i = 0; i <= foods.length; i++) {
        if (!foods[i]) break;
        let newImg = document.createElement('img');
        newImg.src = foods[i].image;
        let myDiv = document.querySelector(`#con${i}`);
        newImg.classList.add('fade-in');
        myDiv.appendChild(newImg);


        let p1 = document.createElement('p');
        p1.innerText = `Name:${foods[i].name}`;
        p1.classList.add('fade-in');
        myDiv.appendChild(p1);

        let p2 = document.createElement('p');
        p2.innerText = `Category : ${foods[i].cat}`;
        p2.classList.add('fade-in');
        myDiv.appendChild(p2);

        let p3 = document.createElement('p');
        p3.innerText = `Area : ${foods[i].area}`;
        p3.classList.add('fade-in');
        myDiv.appendChild(p3);

        let link = document.createElement('a');
        link.innerText = 'URL: Click Here';
        link.href = foods[i].youtube;
        link.classList.add('fade-in');
        myDiv.appendChild(link);

        setTimeout(() => {
            newImg.classList.remove('fade-in');
            p1.classList.remove('fade-in');
            p2.classList.remove('fade-in');
            p3.classList.remove('fade-in');
        }, 500);
        await delay(500);

    }

}

function addFood() {
    foods.push(foodInfo());
}
function foodInfo() {
    let addName = prompt("Enter the name of Food");
    let addcat = prompt("Enter the Category of Food");
    let addarea = prompt("Enter the area of Food");
    let addImage = prompt("Enter the Image source of Food");
    let addyoutube = prompt("Enter the youtube URL of Food");
    return {
        name: addName,
        cat: addcat,
        area: addarea,
        youtube: addyoutube,
        image: addImage
    }
}
function editFood(foods) {
    let x = document.createElement('select');
    let op = document.createElement('option');
    op.innerText = "Select Food to Edit"
    x.appendChild(op);
    x.classList.add('nana');
    for (let j = 0; j <= 9; j++) {
        if (!foods[j]) break;
        let y = foods;
        op = document.createElement('option');
        op.innerText = y[j].name;
        op.value = y[j].name;
        x.appendChild(op);
    }
    d1.insertAdjacentElement("beforebegin", x);
    x.addEventListener('change', () => {
        let z = x.value;
        switch (z) {
            case foods[0].name: {
                foods[0] = editFoodInfo(foods[0]);
                break;
            }
            case foods[1].name: {
                foods[1] = editFoodInfo(foods[1]);
                break;
            }
            case foods[2].name: {
                foods[2] = editFoodInfo(foods[2]);
                break;
            }
            case foods[3].name: {
                foods[3] = editFoodInfo(foods[3]);
                break;
            }
            case foods[4].name: {
                foods[4] = editFoodInfo(foods[4]);
                break;
            }
            case foods[5].name: {
                foods[5] = editFoodInfo(foods[5]);
                break;
            }
            case foods[6].name: {
                foods[6] = editFoodInfo(foods[6]);
                break;
            }
            case foods[7].name: {
                foods[7] = editFoodInfo(foods[7]);
                break;
            }
            case foods[8].name: {
                foods[8] = editFoodInfo(foods[8]);
                break;
            }
            case foods[9].name: {
                foods[9] = editFoodInfo(foods[9]);
                break;
            }
        }
    })
}

function editFoodInfo(data) {
    let addName = prompt("Enter the name of Food", data.name);
    let addcat = prompt("Enter the Category of Food", data.cat);
    let addarea = prompt("Enter the area of Food", data.area);
    let addImage = prompt("Enter the Image source of Food", data.image);
    let addyoutube = prompt("Enter the youtube URL of Food", data.youtube);
    return {
        name: addName,
        cat: addcat,
        area: addarea,
        youtube: addyoutube,
        image: addImage
    }
}