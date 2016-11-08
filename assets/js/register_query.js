$(document).ready(function(){
    $("#business_info").hide(300);
    //MOSTRAR Y OCULTAR LLENADO DE INFORMACION
    $("select[name=kind_use]").change(function(){
        var kind = $('select[name=kind_use]').val();
        
        alert(kind);
        
        if(kind.equals("Business")){//SI ES NEGOCIO MOSTRAR LLENDAO DE NEGOCIO
            $("#business_info").show(300);
            
        }
        else{
            $("#business_info").hide(300);
        }
        
    })    
    
    
});