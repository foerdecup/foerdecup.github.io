const mql = window.matchMedia("(max-width: 900px)");

mql.onchange = (e)=> {
    if (e.matches) {
        document.getElementById("meer_div").innerHTML = '<iframe src="https://docs.google.com/spreadsheets/d/e/2PACX-1vTK2CeRCEr9ET_oKJI2hEdOKfMO9veU_r3T6487NlFXdy_9AWuEVRjphv6qcUpXNMUEFKl6YW6mU3MF/pubhtml?gid=0&amp;widget=false&amp;headers=false&amp;chrome=false&amp;range=A1:M19"></iframe>';   
        document.getElementById("mehr_meer_div").innerHTML = '<iframe id="mehr_meer" src="https://docs.google.com/spreadsheets/d/e/2PACX-1vTK2CeRCEr9ET_oKJI2hEdOKfMO9veU_r3T6487NlFXdy_9AWuEVRjphv6qcUpXNMUEFKl6YW6mU3MF/pubhtml?gid=1625531242&amp;widget=false&amp;headers=false&amp;chrome=false&amp;range=A1:M15"></iframe>';
        document.getElementById("noch_mehr_meer_div").innerHTML = '<iframe id="noch_mehr_meer" src="https://docs.google.com/spreadsheets/d/e/2PACX-1vTK2CeRCEr9ET_oKJI2hEdOKfMO9veU_r3T6487NlFXdy_9AWuEVRjphv6qcUpXNMUEFKl6YW6mU3MF/pubhtml?gid=689496838&amp;widget=false&amp;headers=false&amp;chrome=false&amp;range=A1:M8"></iframe>';
        document.getElementById("spasskuer_div").innerHTML = '<iframe id="spasskuer" src="https://docs.google.com/spreadsheets/d/e/2PACX-1vTK2CeRCEr9ET_oKJI2hEdOKfMO9veU_r3T6487NlFXdy_9AWuEVRjphv6qcUpXNMUEFKl6YW6mU3MF/pubhtml?gid=343195953&amp;widget=false&amp;headers=false&amp;chrome=false&amp;range=A1:I12"></iframe>';
        
    } else {
        document.getElementById("meer_div").innerHTML = '<iframe id="meer" src="https://docs.google.com/spreadsheets/d/1LTK1eKlYYNdy1seCYTpux2zYLHcJIHEYMigkINpZw8E/pubhtml?gid=0&amp;widget=false&amp;headers=false&amp;chrome=false&amp;range=A1:M19"></iframe>';
        document.getElementById("mehr_meer_div").innerHTML = '<iframe id="mehr_meer" src="https://docs.google.com/spreadsheets/d/e/2PACX-1vTK2CeRCEr9ET_oKJI2hEdOKfMO9veU_r3T6487NlFXdy_9AWuEVRjphv6qcUpXNMUEFKl6YW6mU3MF/pubhtml?gid=1625531242&amp;widget=false&amp;headers=false&amp;chrome=false&amp;range=A1:M15"></iframe>';
        document.getElementById("noch_mehr_meer_div").innerHTML = '<iframe id="noch_mehr_meer" src="https://docs.google.com/spreadsheets/d/e/2PACX-1vTK2CeRCEr9ET_oKJI2hEdOKfMO9veU_r3T6487NlFXdy_9AWuEVRjphv6qcUpXNMUEFKl6YW6mU3MF/pubhtml?gid=689496838&amp;;widget=false&amp;headers=false&amp;chrome=false&amp;range=A1:M8"></iframe>';
        document.getElementById("spasskuer_div").innerHTML = '<iframe id="spasskuer" src="https://docs.google.com/spreadsheets/d/e/2PACX-1vTK2CeRCEr9ET_oKJI2hEdOKfMO9veU_r3T6487NlFXdy_9AWuEVRjphv6qcUpXNMUEFKl6YW6mU3MF/pubhtml?gid=343195953&amp;widget=false&amp;headers=false&amp;chrome=false&amp;range=A1:I12"></iframe>';
    }};


if (window.matchMedia("(max-width: 900px)").matches) {
    document.getElementById("meer_div").innerHTML = '<iframe id="meer" src="https://docs.google.com/spreadsheets/d/e/2PACX-1vR74eE1SBzXwbWxHNKMOiYPiI9UKEWgmmfToXp8aWR-tGMFua69ds9hSNtRZV2GpddjU6WkGW4NVeCV/pubhtml?gid=348625053&amp;widget=false&amp;headers=false&amp;chrome=false&amp;range=A1:M19"></iframe>';   
    document.getElementById("mehr_meer_div").innerHTML = '<iframe id="mehr_meer" src="https://docs.google.com/spreadsheets/d/e/2PACX-1vTK2CeRCEr9ET_oKJI2hEdOKfMO9veU_r3T6487NlFXdy_9AWuEVRjphv6qcUpXNMUEFKl6YW6mU3MF/pubhtml?gid=1625531242&amp;widget=false&amp;headers=false&amp;chrome=false&amp;range=A1:M15"></iframe>';
    document.getElementById("noch_mehr_meer_div").innerHTML = '<iframe id="noch_mehr_meer" src="https://docs.google.com/spreadsheets/d/e/2PACX-1vTK2CeRCEr9ET_oKJI2hEdOKfMO9veU_r3T6487NlFXdy_9AWuEVRjphv6qcUpXNMUEFKl6YW6mU3MF/pubhtml?gid=689496838&amp;widget=false&amp;headers=false&amp;chrome=false&amp;range=A1:M8"></iframe>';
    document.getElementById("spasskuer_div").innerHTML = '<iframe id="spasskuer" src="https://docs.google.com/spreadsheets/d/e/2PACX-1vTK2CeRCEr9ET_oKJI2hEdOKfMO9veU_r3T6487NlFXdy_9AWuEVRjphv6qcUpXNMUEFKl6YW6mU3MF/pubhtml?gid=343195953&amp;widget=false&amp;headers=false&amp;chrome=false&amp;range=A1:I12"></iframe>';
    
} else {
    document.getElementById("meer_div").innerHTML = '<iframe id="meer" src="https://docs.google.com/spreadsheets/d/e/2PACX-1vTK2CeRCEr9ET_oKJI2hEdOKfMO9veU_r3T6487NlFXdy_9AWuEVRjphv6qcUpXNMUEFKl6YW6mU3MF/pubhtml?gid=0&amp;widget=false&amp;headers=false&amp;chrome=false&amp;range=A1:M19"></iframe>';
    document.getElementById("mehr_meer_div").innerHTML = '<iframe id="mehr_meer" src="https://docs.google.com/spreadsheets/d/e/2PACX-1vTK2CeRCEr9ET_oKJI2hEdOKfMO9veU_r3T6487NlFXdy_9AWuEVRjphv6qcUpXNMUEFKl6YW6mU3MF/pubhtml?gid=1625531242&amp;widget=false&amp;headers=false&amp;chrome=false&amp;range=A1:M15"></iframe>';
    document.getElementById("noch_mehr_meer_div").innerHTML = '<iframe id="noch_mehr_meer" src="https://docs.google.com/spreadsheets/d/e/2PACX-1vTK2CeRCEr9ET_oKJI2hEdOKfMO9veU_r3T6487NlFXdy_9AWuEVRjphv6qcUpXNMUEFKl6YW6mU3MF/pubhtml?gid=689496838&amp;widget=false&amp;headers=false&amp;chrome=false&amp;range=A1:M8"></iframe>';
    document.getElementById("spasskuer_div").innerHTML = '<iframe id="spasskuer" src="https://docs.google.com/spreadsheets/d/e/2PACX-1vTK2CeRCEr9ET_oKJI2hEdOKfMO9veU_r3T6487NlFXdy_9AWuEVRjphv6qcUpXNMUEFKl6YW6mU3MF/pubhtml?gid=343195953&amp;widget=false&amp;headers=false&amp;chrome=false&amp;range=A1:I12"></iframe>';
}


function clickedcurser() {
    var elementToChange = document.getElementsByTagName("body")[0];
    elementToChange.style.cursor = "url('img/wand-32.png'),url('img/wand_clicked.png'), auto";
  }
  function unclickcurser() {
    var elementToChange = document.getElementsByTagName("body")[0];
    elementToChange.style.cursor = "url('img/un-wand-32.png'),url('img/wand_unclicked.png'), auto";
  }

