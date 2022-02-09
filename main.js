var images = ["images/Banner/1.jpg","images/Banner/2.jpg", "images/Banner/3.jpg","images/Banner/4.jpg",
"images/Banner/5.jpg","images/Banner/6.jpg", "images/Banner/7.jpg", "images/Banner/8.jpg", 
"images/Banner/11.jpg", "images/Banner/12.jpg", "images/Banner/13.jpg"];
var banner, i=0;
var next, prev;
var index=0;
var loop = setInterval(Slide,2200);
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
    loop = setInterval(Slide,2200);
}

function ScrollTop()
{
    $('html,body').animate({ scrollTop: 0 });
}

function LightMode() {
    var element = document.body;
    element.classList.toggle("light-mode");
}

window.onload = function () 
{ 
    const themeBtn = document.getElementById('toggle'); 
    themeBtn.addEventListener('click', function () { document.body.classList.toggle('light-mode'); 
    this.classList.toggle('active'); 
    }); 
};

/*---------Pagination-----------*/
    // (function(name) {
    //   var container = $('#pagination-' + name);
    //   var sources = function () {
    //     var result = [];
  
    //     for (var i = 1; i < 196; i++) {
    //       result.push(i);
    //     }
  
    //     return result;
    //   }();
  
    //   var options = {
    //     dataSource: sources,
    //     callback: function (response, pagination) {
    //       window.console && console.log(response, pagination);
  
    //       var dataHtml = '<ul>';
  
    //       $.each(response, function (index, item) {
    //         dataHtml += '<li>' + item + '</li>';
    //       });
  
    //       dataHtml += '</ul>';
  
    //       container.prev().html(dataHtml);
    //     }
    //   };
  
    //   //$.pagination(container, options);
  
    //   container.addHook('beforeInit', function () {
    //     window.console && console.log('beforeInit...');
    //   });
    //   container.pagination(options);
  
    //   container.addHook('beforePageOnClick', function () {
    //     window.console && console.log('beforePageOnClick...');
    //     //return false
    //   });
    // })('demo1');
/*------------------------------*/
$('#pagination-here').bootpag({
  total: 10,          
  page: 1,            
  maxVisible: 5,     
  leaps: true,
  href: "#result-page-{{number}}",
})

//page click action
$('#pagination-here').on("page", function(event, num){
  //show / hide content or pull via ajax etc
  $("#content").html("Page " + num); 
});
