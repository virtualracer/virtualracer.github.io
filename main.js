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
    "CST210 Introduction To Logic & Formal Methods - SSC",
  JCL:
    "HSP202 Professional Communication Lab - JC",
  GSYL:
    "CSP206 Design & Analysis of Algorithms Lab - GSY <br><br> <a href='https://meet.google.com/lookup/ccgtozezbe'> <img src='./assets/meet.png' height='40'> </a>",
  CSL:
    "CSP204 Computer Architecture & Organization Lab - CS <br><br> <a href='https://meet.google.com/lookup/hsa44zmgw6'> <img src='./assets/meet.png' height='40'> </a>",
  JCT:
    "HST202 Technical Writing & Professional Communication - JC",

  "N/A": "No Lectures",
};

// let date = new Date();

let previousClass = details[timeTable[date.getDay()][(date.getHours()-1) % 12]];
let currentClass = details[timeTable[date.getDay()][date.getHours() % 12]];
let nextClass = details[timeTable[date.getDay()][(date.getHours()+1) % 12]];


if(previousClass == undefined){
  previousClass = 'No Lectures'
}
if(currentClass == undefined){
  currentClass = 'No Lectures'
}
if(nextClass == undefined){
  nextClass = 'No Lectures'
}

let currentHour = date.getHours();
// currentHour = currentHour > 12 ? currentHour % 12 : currentHour; 

document.getElementById("previous").innerHTML += `<i>${currentHour - 1} - ${currentHour} : </i> ${previousClass}`;
document.getElementById("current").innerHTML += `<i>${currentHour} - ${currentHour + 1} : </i> ${currentClass}`;
document.getElementById("next").innerHTML += `<i>${currentHour + 1} - ${currentHour + 2} : </i> ${nextClass}`;

setInterval(() => {
  location.reload()
}, 60000)
