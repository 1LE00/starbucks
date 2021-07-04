
        const alpha = ["a", "b", "c", "d", "e"]

        

        $(".dropbtn").on("click", function (event){
            for( var i = 0; i < alpha.length; i++){
                if (($(event.target).hasClass(alpha[i]))) {
                    $(event.target).toggleClass("hover");
                    $(event.target.parentNode.nextElementSibling).slideToggle(); 
                } 
            }   
             
        });





