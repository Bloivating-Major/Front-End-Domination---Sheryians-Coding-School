var arr = [
    {name: "Gojo Satoru" , image : "https://i.pinimg.com/564x/f8/33/b6/f833b635ec1317062fc9c408b7504557.jpg"},
    {name: "Itadori Yuji" , image : "https://i.pinimg.com/564x/f5/14/36/f51436953be995afc6cb6f35fec266d7.jpg"},
    {name: "Luffy" , image : "https://i.pinimg.com/564x/ed/44/56/ed4456591e059bb702420ff5b308405b.jpg"},
    {name: "Shanks" , image : "https://i.pinimg.com/564x/0f/b5/a9/0fb5a9d44c89a7eca479bf0157d3c643.jpg"}
]

function showTheCards (){
    var clutter = ""
    arr.forEach(function(obj){
        clutter += `<div class="box"> 
        
        <img class="cursor-pointer" src="${obj.image}" alt="image">
        <div class="caption">Lorem Ipsum</div>
        </div>`

        document.querySelector(".container")
        .innerHTML = clutter
    })

    console.log(clutter);
}

function searchDisplay(){
    document.querySelector("#searchinput").addEventListener("focus" , function(){
        document.querySelector(".overlay").style.display = "block"
    })
    document.querySelector("#searchinput").addEventListener("blur" , function(){
        document.querySelector(".overlay").style.display = "none"
    })
}

searchDisplay()
showTheCards()