const usuarioActivo = "usuarioActivo";

function guardarU(usuario){
    localStorage.setItem(usuarioActivo,JSON.stringify(usuario));
}

function quitarU(){
    localStorage.setItem(usuarioActivo,null);
}

function leerU(){
    let user = JSON.parse(localStorage.getItem(usuarioActivo));
    return user;
}