const mql = window.matchMedia("(max-width: 900px)");

mql.onchange = (e)=> {
    if (e.matches) {
        document.getElementById("meer_div").innerHTML = '<iframe id="meer" src="https://docs.google.com/spreadsheets/d/e/2PACX-1vTRKFbGAz5xxp-spU4F675PcRyCNPPup6atXYYFfahBo01msfNle1QtEuGQ4fC-e6-izIUPzvQR0HCw/pubhtml?gid=0&amp;widget=false&amp;headers=false&amp;chrome=false&amp;range=A1:N10"></iframe>';   
        document.getElementById("mehr_meer_div").innerHTML = '<iframe id="mehr_meer" src="https://docs.google.com/spreadsheets/d/e/2PACX-1vTRKFbGAz5xxp-spU4F675PcRyCNPPup6atXYYFfahBo01msfNle1QtEuGQ4fC-e6-izIUPzvQR0HCw/pubhtml?gid=1625531242&amp;widget=false&amp;headers=false&amp;chrome=false&amp;range=A1:N14"></iframe>';
        document.getElementById("noch_mehr_meer_div").innerHTML = '<iframe id="noch_mehr_meer" src="https://docs.google.com/spreadsheets/d/e/2PACX-1vTRKFbGAz5xxp-spU4F675PcRyCNPPup6atXYYFfahBo01msfNle1QtEuGQ4fC-e6-izIUPzvQR0HCw/pubhtml?gid=689496838&amp;widget=false&amp;headers=false&amp;chrome=false&amp;range=A1:N13"></iframe>';
        document.getElementById("pflicht4_div").innerHTML = '<iframe id="pflicht4" src="https://docs.google.com/spreadsheets/d/e/2PACX-1vTRKFbGAz5xxp-spU4F675PcRyCNPPup6atXYYFfahBo01msfNle1QtEuGQ4fC-e6-izIUPzvQR0HCw/pubhtml?gid=2073616843&amp;widget=false&amp;headers=false&amp;chrome=false&amp;range=A1:N5"></iframe>';
        document.getElementById("spasskuer_div").innerHTML = '<iframe id="spasskuer" src="https://docs.google.com/spreadsheets/d/e/2PACX-1vTRKFbGAz5xxp-spU4F675PcRyCNPPup6atXYYFfahBo01msfNle1QtEuGQ4fC-e6-izIUPzvQR0HCw/pubhtml?gid=343195953&amp;widget=false&amp;headers=false&amp;chrome=false&amp;range=A1:L11"></iframe>';
        
    } else {
        document.getElementById("meer_div").innerHTML = '<iframe id="meer" src="https://docs.google.com/spreadsheets/d/e/2PACX-1vTRKFbGAz5xxp-spU4F675PcRyCNPPup6atXYYFfahBo01msfNle1QtEuGQ4fC-e6-izIUPzvQR0HCw/pubhtml?gid=0&amp;widget=false&amp;headers=false&amp;chrome=false&amp;range=A1:N10"></iframe>';
        document.getElementById("mehr_meer_div").innerHTML = '<iframe id="mehr_meer" src="https://docs.google.com/spreadsheets/d/e/2PACX-1vTRKFbGAz5xxp-spU4F675PcRyCNPPup6atXYYFfahBo01msfNle1QtEuGQ4fC-e6-izIUPzvQR0HCw/pubhtml?gid=1625531242&amp;widget=false&amp;headers=false&amp;chrome=false&amp;range=A1:N14"></iframe>';
        document.getElementById("noch_mehr_meer_div").innerHTML = '<iframe id="noch_mehr_meer" src="https://docs.google.com/spreadsheets/d/e/2PACX-1vTRKFbGAz5xxp-spU4F675PcRyCNPPup6atXYYFfahBo01msfNle1QtEuGQ4fC-e6-izIUPzvQR0HCw/pubhtml?gid=689496838&amp;;widget=false&amp;headers=false&amp;chrome=false&amp;range=A1:N13"></iframe>';
        document.getElementById("pflicht4_div").innerHTML = '<iframe id="pflicht4" src="https://docs.google.com/spreadsheets/d/e/2PACX-1vTRKFbGAz5xxp-spU4F675PcRyCNPPup6atXYYFfahBo01msfNle1QtEuGQ4fC-e6-izIUPzvQR0HCw/pubhtml?gid=2073616843&amp;widget=false&amp;headers=false&amp;chrome=false&amp;range=A1:N5"></iframe>';
        document.getElementById("spasskuer_div").innerHTML = '<iframe id="spasskuer" src="https://docs.google.com/spreadsheets/d/e/2PACX-1vTRKFbGAz5xxp-spU4F675PcRyCNPPup6atXYYFfahBo01msfNle1QtEuGQ4fC-e6-izIUPzvQR0HCw/pubhtml?gid=343195953&amp;widget=false&amp;headers=false&amp;chrome=false&amp;range=A1:L11"></iframe>';
    }};


if (window.matchMedia("(max-width: 900px)").matches) {
    document.getElementById("meer_div").innerHTML = '<iframe id="meer" src="https://docs.google.com/spreadsheets/d/e/2PACX-1vTRKFbGAz5xxp-spU4F675PcRyCNPPup6atXYYFfahBo01msfNle1QtEuGQ4fC-e6-izIUPzvQR0HCw/pubhtml?gid=0&amp;widget=false&amp;headers=false&amp;chrome=false&amp;range=A1:N10"></iframe>';   
    document.getElementById("mehr_meer_div").innerHTML = '<iframe id="mehr_meer" src="https://docs.google.com/spreadsheets/d/e/2PACX-1vTRKFbGAz5xxp-spU4F675PcRyCNPPup6atXYYFfahBo01msfNle1QtEuGQ4fC-e6-izIUPzvQR0HCw/pubhtml?gid=1625531242&amp;widget=false&amp;headers=false&amp;chrome=false&amp;range=A1:N14"></iframe>';
    document.getElementById("noch_mehr_meer_div").innerHTML = '<iframe id="noch_mehr_meer" src="https://docs.google.com/spreadsheets/d/e/2PACX-1vTRKFbGAz5xxp-spU4F675PcRyCNPPup6atXYYFfahBo01msfNle1QtEuGQ4fC-e6-izIUPzvQR0HCw/pubhtml?gid=689496838&amp;widget=false&amp;headers=false&amp;chrome=false&amp;range=A1:N13"></iframe>';
    document.getElementById("pflicht4_div").innerHTML = '<iframe id="pflicht4" src="https://docs.google.com/spreadsheets/d/e/2PACX-1vTRKFbGAz5xxp-spU4F675PcRyCNPPup6atXYYFfahBo01msfNle1QtEuGQ4fC-e6-izIUPzvQR0HCw/pubhtml?gid=2073616843&amp;widget=false&amp;headers=false&amp;chrome=false&amp;range=A1:N5"></iframe>';
    document.getElementById("spasskuer_div").innerHTML = '<iframe id="spasskuer" src="https://docs.google.com/spreadsheets/d/e/2PACX-1vTRKFbGAz5xxp-spU4F675PcRyCNPPup6atXYYFfahBo01msfNle1QtEuGQ4fC-e6-izIUPzvQR0HCw/pubhtml?gid=343195953&amp;widget=false&amp;headers=false&amp;chrome=false&amp;range=A1:L11"></iframe>';
    
} else {
    document.getElementById("meer_div").innerHTML = '<iframe id="meer" src="https://docs.google.com/spreadsheets/d/e/2PACX-1vTRKFbGAz5xxp-spU4F675PcRyCNPPup6atXYYFfahBo01msfNle1QtEuGQ4fC-e6-izIUPzvQR0HCw/pubhtml?gid=0&amp;widget=false&amp;headers=false&amp;chrome=false&amp;range=A1:N10"></iframe>';
    document.getElementById("mehr_meer_div").innerHTML = '<iframe id="mehr_meer" src="https://docs.google.com/spreadsheets/d/e/2PACX-1vTRKFbGAz5xxp-spU4F675PcRyCNPPup6atXYYFfahBo01msfNle1QtEuGQ4fC-e6-izIUPzvQR0HCw/pubhtml?gid=1625531242&amp;widget=false&amp;headers=false&amp;chrome=false&amp;range=A1:N14"></iframe>';
    document.getElementById("noch_mehr_meer_div").innerHTML = '<iframe id="noch_mehr_meer" src="https://docs.google.com/spreadsheets/d/e/2PACX-1vTRKFbGAz5xxp-spU4F675PcRyCNPPup6atXYYFfahBo01msfNle1QtEuGQ4fC-e6-izIUPzvQR0HCw/pubhtml?gid=689496838&amp;widget=false&amp;headers=false&amp;chrome=false&amp;range=A1:N13"></iframe>';
    document.getElementById("pflicht4_div").innerHTML = '<iframe id="pflicht4" src="https://docs.google.com/spreadsheets/d/e/2PACX-1vTRKFbGAz5xxp-spU4F675PcRyCNPPup6atXYYFfahBo01msfNle1QtEuGQ4fC-e6-izIUPzvQR0HCw/pubhtml?gid=2073616843&amp;widget=false&amp;headers=false&amp;chrome=false&amp;range=A1:N5"></iframe>';
    document.getElementById("spasskuer_div").innerHTML = '<iframe id="spasskuer" src="https://docs.google.com/spreadsheets/d/e/2PACX-1vTRKFbGAz5xxp-spU4F675PcRyCNPPup6atXYYFfahBo01msfNle1QtEuGQ4fC-e6-izIUPzvQR0HCw/pubhtml?gid=343195953&amp;widget=false&amp;headers=false&amp;chrome=false&amp;range=A1:L11"></iframe>';
}


function clickedcurser() {
    var elementToChange = document.getElementsByTagName("body")[0];
    elementToChange.style.cursor = "url('img/wand-32.png'),url('img/wand_clicked.png'), auto";
  }
  function unclickcurser() {
    var elementToChange = document.getElementsByTagName("body")[0];
    elementToChange.style.cursor = "url('img/un-wand-32.png'),url('img/wand_unclicked.png'), auto";
  }

