function changeMode(){
    var bodyClass = document.body.classList;
    document.body.className = bodyClass == 'light' ? 'dark' : 'light';
}