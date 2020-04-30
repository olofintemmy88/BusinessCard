//Create a variable for each DOM element we want to target
const testimonialsContainer = document.querySelectorALL('.testimonials-container');
const testimonial = testimonialsContainer.querySelectorALL('.testimonial');
const logo = testimonialsContainer.querySelectorALL('.logo');
const username = testimonialsContainer.querySelectorALL('.username');
const role = testimonialsContainer.querySelectorALL('.role');

const testimonial =[{
    "name":"Temmy Olofin",
    "position": "Graphics Expert",
    "photo":"olofin1.jpg",
    "text":"Testimonial Tex"

},
{
    "name":"Alowo  John",
    "position": "Graphics Expert",
    "photo":"olofin1.jpg",
    "text":"Testimonial Tex"

},
{
    "name":"GraphixJohnteey",
    "position": "Graphics Expert",
    "photo":"olofin1.jpg",
    "text":"Testimonial Tex"

},
{
    "name":"Adebanwo Moses",
    "position": "Graphics Expert",
    "photo":"olofin1.jpg",
    "text":"Testimonial Tex"

},
{
    "name":"Omotosho Abiola",
    "position": "Graphics Expert",
    "photo":"olofin1.jpg",
    "text":"Testimonial Tex"

},
{
    "name":"Ayeni Samuel",
    "position": "Graphics Expert",
    "photo":"olofin1.jpg",
    "text":"Testimonial Tex"

},
{
    "name":"Demola Isaac",
    "position": "Graphics Expert",
    "photo":"olofin1.jpg",
    "text":"Testimonial Tex"

},
{
    "name":"Gbadebo Toni",
    "position": "Graphics Expert",
    "photo":"olofin1.jpg",
    "text":"Testimonial Tex"

},
{
"name":"Opeyemi Teniola",
"position": "Graphics Expert",
"photo":"olofin1.jpg",
"text":"Testimonial Text"

}
]

//This idx act as a counter
let idx = 1;
function updatetestimonial() {
    // A little bit of destrcturing <img class="emoji-icon" alt="emoji-wink" data-icon="emoji-wink" style="display: inline; margin:0; margin-top:1px; psoition: relative; top:5px"
let { name, position, photo, text} = testimonial[idx];

// Upate the DOM elements

testimonial.innerHTML = text;
username.innerHTML = name;
role.innerHTML= position;
logo.src = photo;

//Increment the counter
idx++;

//Reset the idx when it reaches the end of the array

if (idx > testimonial.length-1){
    idx = 0;
}
}

// call the updateTimonial funtions each 10000ms/10s
setInterval(updatetestimonial,10000);