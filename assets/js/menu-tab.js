


$(document).ready(function(){
    
    $('.business-div').hide();
    
     
    
    $("#kind_use").change(function(){
        
        var kind = $('#kind_use').val();
        
        if(kind == "business"){//SI ES NEGOCIO MOSTRAR LLENDAO DE NEGOCIO
            $(".business-div").show(300);
        }
        
        else{
            $(".business-div").hide(300);
        }
        
        
    });
    
    //SIEMPRE AL FINAL XD
    $('#defaultOpen').click();
    
   
    
    
});


function openMenu(evt, menuName) {
    // Declare all variables
    var i, tabcontent, tablinks;

    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    
    document.getElementById(menuName).style.display = "block";
    evt.currentTarget.className += " active";

    
}





 


    

