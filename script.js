const a = document.querySelectorAll(".star")

a.forEach(function(star){
    star.addEventListener("click",function(){
        let rating = Number(star.getAttribute("data-rating"))


        a.forEach(function(s,index){
            if(index < rating){
                s.classList.add("staractive")
                if(index == 4){
                    let g = document.querySelector(".emoji")
                    g.innerHTML = "	&#128512;" 
                }
                else if(index == 3){
                    let g = document.querySelector(".emoji")
                    g.innerHTML = "	&#128513;"
                }
                else if(index == 2){
                    let g = document.querySelector(".emoji")
                    g.innerHTML = "	&#128522;"
                }
                else if(index == 1){
                    let g = document.querySelector(".emoji")
                    g.innerHTML = "	&#128531;"
                }
                else if(index == 0){
                    let g = document.querySelector(".emoji")
                    g.innerHTML = " &#128530;"
                }
            }
            else{
                s.classList.remove("staractive")
                
            }
        })
    })
    
})