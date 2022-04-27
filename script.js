var txt1;
var txt2;
var listOfNums1 = [];
var listOfNums2 = [];
var output;
var tmp;
var txt1arr;
var txt2arr;
var mArr;
var xmlhttp = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject("Microsoft.XMLHTTP");



function loadStuff() {
  output = document.getElementById("output");
}
function doTxt1() {
  xmlhttp.onreadystatechange = function () {
  if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
    
      txt1 = xmlhttp.responseText
      //sort(txt1);
      output.innerHTML += "<br>Txt1<br><br>" + txt1 + "<br>---------------------------------------------------------------------------------------------<br>";
    }
  }
  
  xmlhttp.open("GET", "unsorted_file1.txt", true);
  xmlhttp.send()
}

function doTxt2() {
  xmlhttp.onreadystatechange = function () {
  if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
    
      txt2 = xmlhttp.responseText
      output.innerHTML += "<br>Txt2<br><br>" + txt2 + "<br>---------------------------------------------------------------------------------------------<br>";
    }
  }
  
  xmlhttp.open("GET", "unsorted_file2.txt", true);
  xmlhttp.send();
}


function bubbleSort(txt1arr) {
  xmlhttp.onreadystatechange = function () {
    if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
      txt1 = xmlhttp.responseText
      txt1arr = txt1.split(",")
      for (let i = 0; i < txt1arr.length; i++) {
        for (let j = 0; j < txt1arr.length - i; j++) {
          if (parseInt(txt1arr[j]) > parseInt(txt1arr[j + 1])) {
            tmp = txt1arr[j];
            txt1arr[j] = txt1arr[j + 1];
            txt1arr[j + 1] = tmp;
          }
        }
        output.innerHTML += "<br>Txt2 Bubble Sort<br><br>" + txt1arr + "<br>---------------------------------------------------------------------------------------------<br>";
      }
    }
  };
  xmlhttp.open("GET", "unsorted_file1.txt", true);
  xmlhttp.send();
}

function doInsertions(txt2arr) {
  xmlhttp.onreadystatechange = function () {
    if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
      txt2 = xmlhttp.responseText
      txt2arr = txt2.split(",")
      for (let i = 1; i < txt2arr.length; i++) {
        let current = txt2arr[i];
        let j;
    
        for (j = i - 1; j >= 0 && parseInt(txt2arr[j]) > current; j--) {
          
          txt2arr[j + 1] = txt2arr[j];
        }
        txt2arr[j + 1] = current;
      }
      output.innerHTML += "<br>Txt2 Insertions Sort<br><br>" + txt2arr + "<br>---------------------------------------------------------------------------------------------<br>";
    }
  }
  xmlhttp.open("GET", "unsorted_file2.txt", true);
  xmlhttp.send();
}


function doMerge() {
  xmlhttp.open("GET", "unsorted_file1.txt", true );
  xmlhttp.open("GET", "unsorted_file2.txt", true );
  xmlhttp.onreadystatechange = function () {
    if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
      mArr = xmlhttp.responseText
    }
    output.innerHTML += mArr;
  }
  xmlhttp.send();
  
}