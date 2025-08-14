// selection

// document.getElementById //selects only id
// document.getElementsByClassName //selects only class
// document.getElementsByTagName// selects only tag

// var btn = document.querySelector('button');

//id
// var idabc = document.querySelector('#abc');

//class
// var classabc = document.querySelector('.abc');

//tag
// var tagabc = document.querySelector('h1');

//create 2 images in html and 2 h3 and select all of them this way:
// give first image some Id
// second image some class 
// give first h3 a class 
// select last h3 with id 

// var img1 = document.querySelector('#img1')
// var img2 =  document.querySelector('.img2')
// var h31 = document.querySelector('.h31')
// var h32 = document.querySelector('#h32')

//if we have too many h3 our query selector will select only 1st h3 and then to select all h3 we will use 
// var h3 = document.querySelectorAll('h3');

//kisiko bhi change karne se pehle usko select karna 

// var btn1 = document.querySelector('button')
// btn1.textContent = "Downloading"

// var h1 = document.querySelector('h1')
// h1.textContent += "Sam!"
// h1.style.color = 'crimson'
// h1.style.fontFamily = 'Gilroy'

// var h3 = document.querySelector('h3')
// h3.classList = "class-red-text"

// var img = document.createElement('img')
// img.src = './Assets/img1.jpg'
// document.querySelector('body').appendChild(img)
// document.querySelector('body').removeChild(img)

var btn = document.querySelector('button')
btn.addEventListener('click', function(){
   btn.textContent = "Clicked";
   btn.style.backgroundColor = "crimson" 
});
