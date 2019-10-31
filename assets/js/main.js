$(document).ready(function(){ 
    $('.container.grid-col li a').click(function(e){ 
        console.log(e.target) 
        let href= e.target.parentElement.getAttribute("href"); 

        $(href).toggleClass("active");
    })
})