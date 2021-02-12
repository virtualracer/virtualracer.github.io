let timeTable = {
  1: {
    9: "PMT",
    10: "GSYT",
    11: "AKHT",
    12: "SYT",
    14: "SYL",
    15: "SYL",
  },
  2: {
    9: "SYT",
    10: "SSCT",
    11: "PMT",
    12: "AKHT",
    14: "JCL",
    15: "JCL",
  },
  3: {
    9: "N/A",
    10: "SSCT",
    11: "GSYT",
    12: "AKHT",
    14: "JCL",
    15: "JCL",
  },
  4: {
    9: "GSYT",
    10: "PMT",
    11: "N/A",
    12: "SSCT",
    14: "N/A",
    15: "N/A",
    16: "JCT",
  },
  5: {
    9: "GSYL",
    10: "GSYL",
    11: "SYT",
    12: "N/A",
    14: "CSL",
    15: "CSL",
  },
  6: {
    9: "N/A",
    10: "N/A",
    11: "N/A",
    12: "N/A",
    14: "N/A",
    15: "N/A",
  },
  0: {
    9: "N/A",
    10: "N/A",
    11: "N/A",
    12: "N/A",
    14: "N/A",
    15: "N/A",
  },
};

let details = {
  PMT:
    "CST202 Software Engineering - Priyanka Mishra <br><br> <a href='https://meet.google.com/lookup/ggyhq6ur3h'> <img src='./assets/meet.png' height='40'> </a>",
  GSYT:
    "CST206 Design & Analysis of Algorithms - Gyan Singh <br><br> <a href='https://meet.google.com/lookup/ccgtozezbe'> <img src='./assets/meet.png' height='40'> </a>",
  AKHT:
    "CST204 Computer Architecture & Organization - AKH <br><br> <a href='https://meet.google.com/lookup/hsa44zmgw6'> <img src='./assets/meet.png' height='40'> </a>",
  SYT:
    "CST208 Operating Systems - Sonal Yadav <br><br> <a href='https://meet.google.com/lookup/axkb53ehqy'> <img src='./assets/meet.png' height='40'> </a>",
  SYL:
    "CSP208 Operating Systems Lab - Sonal Yadav <br><br> <a href='https://meet.google.com/lookup/axkb53ehqy'> <img src='./assets/meet.png' height='40'> </a>",
  SSCT:
    "CST210 Introduction To Logic & Formal Methods - SSC <br><br> <a href='https://meet.google.com/lookup/bgvhf6jojv'> <img src='./assets/meet.png' height='40'> </a>",
  JCL:
    "HSP202 Professional Communication Lab - JC <br><br> <a href='https://meet.google.com/lookup/guhdax7nq7'> <img src='./assets/meet.png' height='40'> </a>",
  GSYL:
    "CSP206 Design & Analysis of Algorithms Lab - GSY <br><br> <a href='https://meet.google.com/lookup/ccgtozezbe'> <img src='./assets/meet.png' height='40'> </a>",
  CSL:
    "CSP204 Computer Architecture & Organization Lab - CS <br><br> <a href='https://meet.google.com/lookup/hsa44zmgw6'> <img src='./assets/meet.png' height='40'> </a>",
  JCT:
    "HST202 Technical Writing & Professional Communication - JC <br><br> <a href='https://meet.google.com/lookup/guhdax7nq7'> <img src='./assets/meet.png' height='40'> </a>",

  "N/A": "No Lectures",
};

// let date = new Date();

let previousClass = details[timeTable[date.getDay()][(date.getHours()-1)]];
let currentClass = details[timeTable[date.getDay()][date.getHours()]];
let nextClass = details[timeTable[date.getDay()][(date.getHours()+1)]];
let nextnextClass = details[timeTable[date.getDay()][(date.getHours()+2)]];


if(previousClass == undefined){
  previousClass = 'No Lectures'
}
if(currentClass == undefined){
  currentClass = 'No Lectures'
}
if(nextClass == undefined){
  nextClass = 'No Lectures'
}
if(nextnextClass == undefined){
  nextClass = 'No Lectures'
}

let currentHour = date.getHours();
// currentHour = currentHour > 12 ? currentHour % 12 : currentHour; 

document.getElementById("previous").innerHTML += `<i>${currentHour - 1} - ${currentHour} : </i> ${previousClass}`;
document.getElementById("current").innerHTML += `<i>${currentHour} - ${currentHour + 1} : </i> ${currentClass}`;
document.getElementById("next").innerHTML += `<i>${currentHour + 1} - ${currentHour + 2} : </i> ${nextClass}`;
document.getElementById("nextnext").innerHTML += `<i>${currentHour + 2} - ${currentHour + 3} : </i> ${nextnextClass}`;

setInterval(() => {
  location.reload()
}, 60000)

let darkMode = false;

$(document).ready(function (){
  darkMode = localStorage.getItem('darkMode') == 'true' ? true : false;
  if (darkMode == true) {
    localStorage.setItem('darkMode', 'true')
    $('body').css('background-image', 'url(./darkbg.jpg)');
    $('body').css('color', 'grey');
    $('hr').css('border', '1px solid grey');
    $('#modeChanger').removeClass("fa-moon");
    $('#modeChanger').addClass("fa-sun");
  }
})

$('#modeChanger').click(function(){
  if(darkMode == false){
    darkMode = true;
    localStorage.setItem('darkMode', 'true')
    $('body').css('background-image', 'url(./darkbg.jpg)');
    $('body').css('color', 'grey');
    $('hr').css('border', '1px solid grey');
    $('#modeChanger').removeClass("fa-moon");
    $('#modeChanger').addClass("fa-sun");
  } else {
    darkMode = false;
    localStorage.setItem('darkMode', 'false')
    $('body').css('background-image', 'url(./bg.jpg)');
    $('body').css('color', 'black');
    $('hr').css('border', '');
    $('#modeChanger').addClass("fa-moon");
    $('#modeChanger').removeClass("fa-sun");
  }
})
