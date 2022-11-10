
function openTAB(evt, tablik_1_2_3_4){
    let i, 
    tabcontent, 
    tablinks;

    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = " none";
    }

    tablinks = document.getElementsByClassName("tablinks");
    
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    document.getElementById(tablik_1_2_3_4).style.display = "block";
    evt.currentTarget.className += "active";
}








