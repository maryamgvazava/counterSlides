const reviews = [

    {
        id:1,
        name: 'Susan Smith',
        job: 'Web Developer',
        img: './images/susan.avif',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem voluptatum praesentium ipsum molestiae asperiores eligendi aliquam placeat eveniet illum aspernatur est quo mollitia quis, quae qui deleniti hic at! Est!',

    },

    {
        id:2,
        name: 'Dave Johnson',
        job: 'Web Designer',
        img: './images/dave.jpg',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem voluptatum praesentium ipsum molestiae asperiores eligendi aliquam placeat eveniet illum aspernatur est quo mollitia quis, quae qui deleniti hic at! Est!',

    },

    {
        id:3,
        name: 'Jake Mandelson',
        job: 'Web Designer',
        img: './images/jake.jpg',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem voluptatum praesentium ipsum molestiae asperiores eligendi aliquam placeat eveniet illum aspernatur est quo mollitia quis, quae qui deleniti hic at! Est!',
    },

    {
        id:4,
        name: 'Sarah Johnson',
        job: 'UX Designer',
        img: './images/sarah.jfif',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem voluptatum praesentium ipsum molestiae asperiores eligendi aliquam placeat eveniet illum aspernatur est quo mollitia quis, quae qui deleniti hic at! Est!',
    },

    {
        id:5,
        name: 'Luke Ibarra',
        job: 'UX Designer',
        img: './images/luke.avif',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem voluptatum praesentium ipsum molestiae asperiores eligendi aliquam placeat eveniet illum aspernatur est quo mollitia quis, quae qui deleniti hic at! Est!',
    }

]


const img = document.getElementById('person-img');
const author = document.getElementById('author');
const job = document.getElementById('job');
const info = document.getElementById('info');


const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn')
const randomBtn = document.querySelector('.random-btn');


let currentElement = 0;

window.addEventListener('DOMContentLoaded', function(){
    showPerson(currentElement)
});


nextBtn.addEventListener('click', function(){
    currentElement++

    if(currentElement > reviews.length-1){
        currentElement = 0;
    }
    showPerson(currentElement)
});

prevBtn.addEventListener('click', function(){
    currentElement--;

    if(currentElement < 0){
        currentElement = reviews.length-1;
    }
    showPerson(currentElement)
});

randomBtn.addEventListener('click', function(){
    let random = Math.floor(Math.random()*reviews.length);
console.log(random)
     showPerson(random)
});


function showPerson(person){
    const item = reviews[person];
    img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text;
};
