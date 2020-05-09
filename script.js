function changeMode(){
    var bodyClass = document.body.className;
    document.body.className = bodyClass == 'light' ? 'dark' : 'light';
    var modeChanger = document.getElementById('mode');
    modeChanger.className = modeChanger.className == 'fas fa-moon' ? 'fas fa-sun' : 'fas fa-moon';
}