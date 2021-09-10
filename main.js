var images = ["images/Banner/1.jpg","images/Banner/2.jpg", "images/Banner/3.jpg","images/Banner/4.jpg","images/Banner/5.jpg",
"images/Banner/6.jpg", "images/Banner/7.jpg", "images/Banner/8.jpg", "images/Banner/11.jpg", "images/Banner/12.jpg", "images/Banner/13.jpg"];
var banner, i=0;
var loop = setInterval(Slide,2200);
function Slide()
{
    banner = document.getElementById("banner");
    banner.src = images[i];
    i++;
    if(i==images.length)
        i=0;
}
function Over()
{
    clearInterval(loop);
}
function Out()
{
    loop = setInterval(Slide,2200);
}

function ScrollTop()
{
    $('html,body').animate({ scrollTop: 0 });
}


