const mql = window.matchMedia("(max-width: 900px)");

mql.onchange = (e)=> {
    if (e.matches) {
        document.getElementById("meer_div").innerHTML = '<iframe id="meer" src="https://docs.google.com/spreadsheets/d/e/2PACX-1vR74eE1SBzXwbWxHNKMOiYPiI9UKEWgmmfToXp8aWR-tGMFua69ds9hSNtRZV2GpddjU6WkGW4NVeCV/pubhtml?gid=348625053&amp;widget=false&amp;headers=false&amp;chrome=false"></iframe>';   
        document.getElementById("mehr_meer_div").innerHTML = '<iframe id="mehr_meer" src="https://docs.google.com/spreadsheets/d/e/2PACX-1vR74eE1SBzXwbWxHNKMOiYPiI9UKEWgmmfToXp8aWR-tGMFua69ds9hSNtRZV2GpddjU6WkGW4NVeCV/pubhtml?gid=1642360494&amp;widget=false&amp;headers=false&amp;chrome=false"></iframe>';
        document.getElementById("noch_mehr_meer_div").innerHTML = '<iframe id="noch_mehr_meer" src="https://docs.google.com/spreadsheets/d/e/2PACX-1vR74eE1SBzXwbWxHNKMOiYPiI9UKEWgmmfToXp8aWR-tGMFua69ds9hSNtRZV2GpddjU6WkGW4NVeCV/pubhtml?gid=870249187&amp;widget=false&amp;headers=false&amp;chrome=false"></iframe>';
        document.getElementById("spasskuer_div").innerHTML = '<iframe id="spasskuer" src="https://docs.google.com/spreadsheets/d/e/2PACX-1vR74eE1SBzXwbWxHNKMOiYPiI9UKEWgmmfToXp8aWR-tGMFua69ds9hSNtRZV2GpddjU6WkGW4NVeCV/pubhtml?gid=1215158535&amp;widget=false&amp;headers=false&amp;chrome=false"></iframe>';
        
    } else {
        document.getElementById("meer_div").innerHTML = '<iframe id="meer" src="https://docs.google.com/spreadsheets/d/e/2PACX-1vR74eE1SBzXwbWxHNKMOiYPiI9UKEWgmmfToXp8aWR-tGMFua69ds9hSNtRZV2GpddjU6WkGW4NVeCV/pubhtml?gid=0&amp;widget=false&amp;headers=false&amp;chrome=false"></iframe>';
        document.getElementById("mehr_meer_div").innerHTML = '<iframe id="mehr_meer" src="https://docs.google.com/spreadsheets/d/e/2PACX-1vR74eE1SBzXwbWxHNKMOiYPiI9UKEWgmmfToXp8aWR-tGMFua69ds9hSNtRZV2GpddjU6WkGW4NVeCV/pubhtml?gid=2125851103&amp;widget=false&amp;headers=false&amp;chrome=false"></iframe>';
        document.getElementById("noch_mehr_meer_div").innerHTML = '<iframe id="noch_mehr_meer" src="https://docs.google.com/spreadsheets/d/e/2PACX-1vR74eE1SBzXwbWxHNKMOiYPiI9UKEWgmmfToXp8aWR-tGMFua69ds9hSNtRZV2GpddjU6WkGW4NVeCV/pubhtml?gid=1121984255&amp;widget=false&amp;headers=false&amp;chrome=false"></iframe>';
        document.getElementById("spasskuer_div").innerHTML = '<iframe id="spasskuer" src="https://docs.google.com/spreadsheets/d/e/2PACX-1vR74eE1SBzXwbWxHNKMOiYPiI9UKEWgmmfToXp8aWR-tGMFua69ds9hSNtRZV2GpddjU6WkGW4NVeCV/pubhtml?gid=1470531983&amp;widget=false&amp;headers=false&amp;chrome=false"></iframe>';
    }};

  
if (window.matchMedia("(max-width: 900px)").matches) {
    document.getElementById("meer_div").innerHTML = '<iframe id="meer" src="https://docs.google.com/spreadsheets/d/e/2PACX-1vR74eE1SBzXwbWxHNKMOiYPiI9UKEWgmmfToXp8aWR-tGMFua69ds9hSNtRZV2GpddjU6WkGW4NVeCV/pubhtml?gid=348625053&amp;widget=false&amp;headers=false&amp;chrome=false"></iframe>';   
    document.getElementById("mehr_meer_div").innerHTML = '<iframe id="mehr_meer" src="https://docs.google.com/spreadsheets/d/e/2PACX-1vR74eE1SBzXwbWxHNKMOiYPiI9UKEWgmmfToXp8aWR-tGMFua69ds9hSNtRZV2GpddjU6WkGW4NVeCV/pubhtml?gid=1642360494&amp;widget=false&amp;headers=false&amp;chrome=false"></iframe>';
    document.getElementById("noch_mehr_meer_div").innerHTML = '<iframe id="noch_mehr_meer" src="https://docs.google.com/spreadsheets/d/e/2PACX-1vR74eE1SBzXwbWxHNKMOiYPiI9UKEWgmmfToXp8aWR-tGMFua69ds9hSNtRZV2GpddjU6WkGW4NVeCV/pubhtml?gid=870249187&amp;widget=false&amp;headers=false&amp;chrome=false"></iframe>';
    document.getElementById("spasskuer_div").innerHTML = '<iframe id="spasskuer" src="https://docs.google.com/spreadsheets/d/e/2PACX-1vR74eE1SBzXwbWxHNKMOiYPiI9UKEWgmmfToXp8aWR-tGMFua69ds9hSNtRZV2GpddjU6WkGW4NVeCV/pubhtml?gid=1215158535&amp;widget=false&amp;headers=false&amp;chrome=false"></iframe>';
    
} else {
    document.getElementById("meer_div").innerHTML = '<iframe id="meer" src="https://docs.google.com/spreadsheets/d/e/2PACX-1vR74eE1SBzXwbWxHNKMOiYPiI9UKEWgmmfToXp8aWR-tGMFua69ds9hSNtRZV2GpddjU6WkGW4NVeCV/pubhtml?gid=0&amp;widget=false&amp;headers=false&amp;chrome=false"></iframe>';
    document.getElementById("mehr_meer_div").innerHTML = '<iframe id="mehr_meer" src="https://docs.google.com/spreadsheets/d/e/2PACX-1vR74eE1SBzXwbWxHNKMOiYPiI9UKEWgmmfToXp8aWR-tGMFua69ds9hSNtRZV2GpddjU6WkGW4NVeCV/pubhtml?gid=2125851103&amp;widget=false&amp;headers=false&amp;chrome=false"></iframe>';
    document.getElementById("noch_mehr_meer_div").innerHTML = '<iframe id="noch_mehr_meer" src="https://docs.google.com/spreadsheets/d/e/2PACX-1vR74eE1SBzXwbWxHNKMOiYPiI9UKEWgmmfToXp8aWR-tGMFua69ds9hSNtRZV2GpddjU6WkGW4NVeCV/pubhtml?gid=1121984255&amp;widget=false&amp;headers=false&amp;chrome=false"></iframe>';
    document.getElementById("spasskuer_div").innerHTML = '<iframe id="spasskuer" src="https://docs.google.com/spreadsheets/d/e/2PACX-1vR74eE1SBzXwbWxHNKMOiYPiI9UKEWgmmfToXp8aWR-tGMFua69ds9hSNtRZV2GpddjU6WkGW4NVeCV/pubhtml?gid=1470531983&amp;widget=false&amp;headers=false&amp;chrome=false"></iframe>';
}




