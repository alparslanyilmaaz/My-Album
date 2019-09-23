//Getting albums with id's from json document.
window.addEventListener("load", function(){
    var XHR = new XMLHttpRequest(); // we define the request we wanted to do.
    XHR.onreadystatechange = function() {
        if (XHR.readyState == 4 && XHR.status == 200) {
            for (var i = 0; i < 10; i++) { // 10 id will be get with this for loop
                document.getElementById("left-albums-list").innerHTML +=    //here we are adding the 10 album id to our list and showing to user
                `<li id="${i+1}" class="general-album" > 
                    <a id="${i+1}" class="album-text" href="#">  List ${i+1}</a>
                </li>`;
            }
        }
    };
    XHR.open("GET", "https://jsonplaceholder.typicode.com/albums", true); //connection to website  
    XHR.send();
});

//Adding click events to left bar items for getting 8 data
document.getElementById("left-albums-list").addEventListener("click",function(e) {
    document.getElementById("first-row").innerHTML = "";
    var XHR = new XMLHttpRequest();
    XHR.onreadystatechange = function(){
        if(XHR.readyState == 4 && XHR.status == 200){
            if(document.getElementById("images-load") != null){
                document.getElementById("images-load").innerHTML = "";
            }
            var photos = JSON.parse(XHR.responseText);
            photos = photos.filter(function(item){
                return item.albumId === parseInt(e.target.id);
            })
            if(window.innerWidth < 960){    //if device width smaller than 960 we will get only 4 data
                for(var i=0; i<4 ; i++){
                    
                    document.getElementById("first-row").innerHTML +=
                    `<div class="card-general"> 
                        <img id="img${i}" class="img" src="${photos[i].thumbnailUrl}" data-full="${photos[i].url}" onclick="bigger(this)"/>
                        <p class="text">${photos[i].title}</p>
                    </div>`;
                }
            }
            else{   //if device width is bigger than 960 we will get 8 data
                for(var i=0; i<8 ; i++){    
                    document.getElementById("first-row").innerHTML +=
                    `<div class="card-general"> 
                        <img id="images123" class="img" src="${photos[i].thumbnailUrl}" data-full = "${photos[i].url}" onclick="bigger(this)"/>
                        <p class="text">${photos[i].title}</p>
                    </div>`;
                }
            }
        }
    }
    XHR.open("GET", `https://jsonplaceholder.typicode.com/albums/${e.target.id}/photos`, true);
    XHR.send();
});

//click event for thumbnails. Image will be get bigger with this.
function bigger(img){
    document.getElementById("images-load").innerHTML = "";
    document.getElementById("images-load").innerHTML +=`<img class="bigger" src=${img.getAttribute("data-full")}/>`;
}