$(document).ready(function(){
    
    $("#btnguardar").click(function(){
        if($("#Identificacion").val()>0 && $("#Nombres").val()!="" && $("#Apellidos").val()!="" && $("#Fecha_nacimiento").val()!=""&& $("#Genero").val()!=""){
            
            $.post("./php/registrar.php",
            {
                Identificacion: $("#Identificacion").val(),
                Nombres: $("#Nombres").val(),
                Apellidos: $("#Apellidos").val(),
                Fecha_nacimiento: $("#Fecha_nacimiento").val(),
                Genero: $("#Genero").val()
            },
            function(data,status){
                usuarios();
                alert("El usuario se ha registrado de manera correcta");
            });
        }
        else {
            alert("Todos los campos son obligatorios");
        
        }
    });
    usuarios();
 
    
    $(document).on("click", ".eliminar", function() {
        let nombre=$(this).attr("id");
        eliminarusuario($(`.${nombre}`).val());
        console.log($(`.${nombre}`).val());
    });
    $(document).on("click", ".eliminarc", function() {
        let nombre=$(this).attr("id");
        eliminarcontacto($(`.${nombre}`).val());
        console.log($(`.${nombre}`).val());
        
    });
    $(document).on("click", ".actualizar", function() {
        let nombre=$(this).attr("id");
        buscarusuario($(`.${nombre}`).val());
        console.log($(`.${nombre}`).val());
        
    });
    $(document).on("click", ".actualizarc", function() {
        let nombre=$(this).attr("id");
        buscarcontacto($(`.${nombre}`).val());
        console.log($(`.${nombre}`).val());
    });
    $(document).on("click", "#btnguardarc", function() {
        let nombre=$(this).attr("id");
        crearcontacto();
    });
    $(document).on("click", ".agregar", function() {
        let nombre=$(this).attr("id");
        console.log(nombre);
        $("#Idrelacion").val($(`.${nombre}`).val());
        contactos($(`.${nombre}`).val());
        console.log($(`.${nombre}`).val());
    });
    
    $(document).on("click", "#btnactualizar", function(e) {
        
        e.preventDefault();
        if($("#usuariobuscar").val()=="") {
            alert("No se ha seleccionado ningun usuario para actualizar");
        
        }
        else if($("#Identificacion2").val()>0 && $("#Nombres2").val()!="" && $("#Apellidos2").val()!="" && $("#Fecha_nacimiento2").val()!=""&& $("#Genero2").val()!="" &&$("#usuariobuscar").val()!=""){
            actualizarusuario($(`#usuariobuscar`).val());
            console.log($(`#usuariobuscar`).val());
        }
        else {
            alert("Todos los campos son obligatorios");
        
    }
    });
    
    $(document).on("click", "#btnactualizarc", function(e) {
        
        e.preventDefault();
        console.log($("#contactobuscar").val());
        if($("#contactobuscar").val()=="") {
            alert("No se ha seleccionado ningun usuario para actualizar");
        
        }
        else if($("#Ncontactoc2").val()>0 && $("#Nombresc2").val()!="" && $("#Tnumeroc2").val()!="" && $("#Parentescoc2").val()!=""&& $("#contactobuscar").val()!=""){
            actualizarcontacto($(`#contactobuscar`).val());
            console.log($(`#contactobuscar`).val());
        }
        else {
            alert("Todos los campos son obligatorios");
            console.log($(`#contactobuscar`).val());
        
        }
    });
    
    });
    function usuarios(){
        $.get("./php/usuarios.php", function(data, status){
            console.log(jQuery.parseJSON(data));
            let index=0;
            let contenido="";
            $.each(jQuery.parseJSON(data), function (key, elem) { 
            index ++;
            
            contenido +=`<tr>
            <th scope="row">${index}</th>
            <td>${elem.Identificacion}</td>
            <td>${elem.Nombres}</td>
            <td>${elem.Apellidos}</td>
            <td>${elem.Fecha_nacimiento}</td>
            <td>${elem.Genero}</td>
            <td><input class="Actualizar${index}" type="hidden" value="${elem.Id_usuario}"><button type="button" class="btn btn-warning actualizar" id="Actualizar${index}"><i class="icon-pencil"></i></button></td>
            <td><input class="eliminar_u${index}" type="hidden" value="${elem.Id_usuario}"><button type="button" class="btn btn-danger eliminar" id="eliminar_u${index}"><i class="icon-trash"></i></button></td>
            <td><input class="agregar${index}" type="hidden" value="${elem.Id_usuario}"><button type="button" class="btn btn-success agregar" id="agregar${index}"><i class="icon-user"></i></button></td>
            </tr>`
        });
        $("#usuarios").empty();
        console.log (contenido);
        $("#usuarios").append(contenido);
        
    });

    }

function eliminarusuario(id){

    $.post("./php/eliminarusuario.php",
            {
                Id: id
            },
            function(data,status){
                usuarios();
                alert("El usuario fue eliminado");
            });
}
function actualizarusuario(id){
    
    
    $.post("./php/actualizarusuario.php",
            {
                Identificacion: $("#Identificacion2").val(),
                Nombres: $("#Nombres2").val(),
                Apellidos: $("#Apellidos2").val(),
                Fecha_nacimiento: $("#Fecha_nacimiento2").val(),
                Genero: $("#Genero2").val(),
                Id: $("#usuariobuscar").val()
            },
            function(data,status){
                alert("El usuario se ha modificado");
                usuarios();
            
            });
}
function buscarusuario(id){
    $.post("./php/buscarusuario.php",
            {
                Id: id
            },
            function(data,status){
                $.each(jQuery.parseJSON(data), function (key, elem) { 
                    $("#Identificacion2").val(elem.Identificacion);
                    console.log(elem);
                    $("#Nombres2").val(elem.Nombres);
                    $("#Apellidos2").val(elem.Apellidos);
                    $("#Fecha_nacimiento2").val(elem.Fecha_nacimiento);
                    $("#Genero2").val(elem.Genero);
                    $("#usuariobuscar").val(elem.Id_usuario);
                    
            });
            
            });
    
    }
function crearcontacto(){
    if($("#Idrelacion").val()=="") {
        alert("No se ha seleccionado ningun usuario para añadir contacto");
    
    }
    else if($("#Ncontacto").val()>0 && $("#Nombresc").val()!="" && $("#Tnumero").val()!="" && $("#Parentesco").val()!=""&& $("#Idrelacion").val()!=""){
            
        $.post("./php/registrarcontacto.php",
        {
            Numero_contacto: $("#Ncontacto").val(),
            Nombres: $("#Nombresc").val(),
            Tipo_celular: $("#Tnumero").val(),
            Parentesco: $("#Parentesco").val(),
            Id_usuario: $("#Idrelacion").val()
        },
        function(data,status){
            contactos($("#Idrelacion").val());
            alert("Se registro un nuevo contacto a este usuario");
        });
    }
    else {
        alert("Todos los campos son obligatorios");
    
    }
}
   
function contactos(id){
    $.post("./php/contactos.php",
        {
            Id: $("#Idrelacion").val()
        },
        function(data,status){
            console.log(jQuery.parseJSON(data));
        let index=0;
        let contenido="";
        $.each(jQuery.parseJSON(data), function (key, elem) { 
            index ++;
                       
            contenido +=`<tr>
            <th scope="row">${index}</th>
            <td>${elem.Nombres}</td>
            <td>${elem.Numero_contacto}</td>
            <td>${elem.Tipo_celular}</td>
            <td>${elem.Parentesco}</td>
            <td><input class="Actualizarc${index}" type="hidden" value="${elem.Id_contacto}"><button type="button" class="btn btn-warning actualizarc" id="Actualizarc${index}"><i class="icon-pencil"></i></button></td>
            <td><input class="eliminarc_u${index}" type="hidden" value="${elem.Id_contacto}"><button type="button" class="btn btn-danger eliminarc" id="eliminarc_u${index}"><i class="icon-trash"></i></button></td>
            </tr>`
        });
        $("#contactos").empty();
        console.log (contenido);
        $("#contactos").append(contenido);
            
        alert("En la parte inferior encontrara los contactos asociados a este usuario");
        });
    }
function eliminarcontacto(id){

    $.post("./php/eliminarcontacto.php",
            {
                Id: id
            },
            function(data,status){
                contactos($("#Idrelacion").val());
                alert("Se elimino este contacto de marena correcta");
            });
}
function buscarcontacto(id){
    $.post("./php/buscarcontacto.php",
            {
                Id: id
            },
            function(data,status){
                $.each(jQuery.parseJSON(data), function (key, elem) { 
                    $("#Nombresc2").val(elem.Nombres);
                    $("#Ncontactoc2").val(elem.Numero_contacto);
                    $("#Parentescoc2").val(elem.Parentesco);
                    $("#Tnumeroc2").val(elem.Tipo_celular);
                    $("#contactobuscar").val(elem.Id_contacto);
                    
            });
            
            });
    
}
function actualizarcontacto(id){
    console.log()
    
    $.post("./php/actualizarcontacto.php",
            {
                Numero_contacto: $("#Ncontactoc2").val(),
                Nombres: $("#Nombresc2").val(),
                Tipo_celular: $("#Tnumeroc2").val(),
                Parentesco: $("#Parentescoc2").val(),
                Id_contacto: $("#contactobuscar").val()
            },
            function(data,status){
                
                alert("se realizo una modificacion en este contacto");
                contactos($(`#Idrelacion`).val());
            
            });
}
