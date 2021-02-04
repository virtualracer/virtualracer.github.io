let timeTable = {
  1: {
    9: "PMT",
    10: "GSYT",
    11: "AKHT",
    12: "SYT",
    2: "SYL",
    3: "SYL",
  },
  2: {
    9: "SYT",
    10: "SSCT",
    11: "PMT",
    12: "AKHT",
    2: "JCL",
    3: "JCL",
  },
  3: {
    9: "N/A",
    10: "SSCT",
    11: "GSYT",
    12: "AKHT",
    2: "JCL",
    3: "JCL",
  },
  4: {
    9: "GSYT",
    10: "PMT",
    11: "N/A",
    12: "SSCT",
    2: "N/A",
    3: "N/A",
    4: "JCT",
  },
  5: {
    9: "GSYL",
    10: "GSYL",
    11: "SYT",
    12: "N/A",
    2: "CSL",
    3: "CSL",
  },
};

let details = {
  PMT:
    "CST202 Software Engineering - Priyanka Mishra <br><br> <a href='https://meet.google.com/lookup/ggyhq6ur3h'> Meet Link </a>",
  GSYT:
    "CST206 Design & Analysis of Algorithms - Gyan Singh <br><br> <a href='https://meet.google.com/lookup/ccgtozezbe'> Meet Link </a>",
  AKHT:
    "CST204 Computer Architecture & Organization - AKH <br><br> <a href='https://meet.google.com/lookup/hsa44zmgw6'> Meet Link </a>",
  SYT:
    "CST208 Operating Systems - Sonal Yadav <br><br> <a href='https://meet.google.com/lookup/axkb53ehqy'> Meet Link </a>",
  SYL:
    "CSP208 Operating Systems Lab - Sonal Yadav <br><br> <a href='https://meet.google.com/lookup/axkb53ehqy'> Meet Link </a>",
  SSCT:
    "CST210 Introduction To Logic & Formal Methods - SSC <br><br>",
  JCL:
    "HSP202 Professional Communication Lab - JC <br><br>",
  GSYL:
    "CSP206 Design & Analysis of Algorithms Lab - GSY <br><br> <a href='https://meet.google.com/lookup/ccgtozezbe'> Meet Link </a>",
  CSL:
    "CSP204 Computer Architecture & Organization Lab - CS <br><br> <a href='https://meet.google.com/lookup/hsa44zmgw6'> Meet Link </a>",
  JCT:
    "HST202 Technical Writing & Professional Communication - JC <br><br> ",

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

let currentHour = date.getHours()%12;

document.getElementById("previous").innerHTML += `<i>${currentHour - 1} - ${currentHour} : </i> ${previousClass}`;
document.getElementById("current").innerHTML += `<i>${currentHour} - ${currentHour + 1} : </i> ${currentClass}`;
document.getElementById("next").innerHTML += `<i>${currentHour + 1} - ${currentHour + 2} : </i> ${nextClass}`;

setInterval(() => {
  location.reload()
}, 60000)