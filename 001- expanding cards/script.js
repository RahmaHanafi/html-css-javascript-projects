var div = document.getElementsByTagName("div")[0];

div.addEventListener("click",function(e){
    
    console.log(e.target);
    if(e.target.tagName === "IMG"){
        if(e.target.classList[0] === "prevImage"){
            e.target.classList.remove("prevImage");
        }
        else{
            div.childNodes.forEach(function(element){
                if(element.tagName === "IMG" && element.className === "currentImage"){
                    element.classList.remove("currentImage");
                    element.classList.add("prevImage");
                    console.log(element);
                }
                else if(element.tagName === "IMG" && element.className === "prevImage"){
                    element.classList.remove("prevImage");
                }
            });
            e.target.classList.add("currentImage");   
       }         
    }   
});

