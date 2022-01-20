var images = ["images/Banner/1.jpg","images/Banner/2.jpg", "images/Banner/3.jpg","images/Banner/4.jpg",
"images/Banner/5.jpg","images/Banner/6.jpg", "images/Banner/7.jpg", "images/Banner/8.jpg", 
"images/Banner/11.jpg", "images/Banner/12.jpg", "images/Banner/13.jpg"];
var banner, i=0;
var next, prev;
var index=0;
var loop = setInterval(Slide(),2200);
function Slide()
{
    banner = document.getElementById("banner");
    //index = i;
    //next = document.getElementsByClassName("next");
    //prev = document.getElementsByClassName("prev");
    banner.src = images[i];
    i++;
    /*if (next.onClick())
    {
        i++;
        banner.src = images[i];
    }
    if (prev.onClick())
    {
        i--;
        banner.src = images[i];
    }*/
    if(i==images.length)
        i=0;
}
function Next(n)
{
    Slide(index+=n)
}
function Over()
{
    clearInterval(loop);
}
function Out()
{
    loop = setInterval(Slide(),2200);
}

function ScrollTop()
{
    $('html,body').animate({ scrollTop: 0 });
}


