function londonParagraph(){

    document.getElementById("tab1-content").style.display="block";
    document.getElementById("tab2-content").style.display="none";
    document.getElementById("tab3-content").style.display="none";

    document.getElementById("tab1-button").classList.add("bg_paragraph")
    document.getElementById("tab2-button").classList.remove("bg_paragraph")
    document.getElementById("tab3-button").classList.remove("bg_paragraph")
}

function parisParagraph(){
    document.getElementById("tab1-content").style.display="none";
    document.getElementById("tab2-content").style.display="block";
    document.getElementById("tab3-content").style.display="none";

    document.getElementById("tab1-button").classList.remove("bg_paragraph")
    document.getElementById("tab2-button").classList.add("bg_paragraph")
    document.getElementById("tab3-button").classList.remove("bg_paragraph")
}

function tokyoParagraph(){
    document.getElementById("tab1-content").style.display="none";
    document.getElementById("tab2-content").style.display="none";
    document.getElementById("tab3-content").style.display="block";

    document.getElementById("tab1-button").classList.remove("bg_paragraph")
    document.getElementById("tab2-button").classList.remove("bg_paragraph")
    document.getElementById("tab3-button").classList.add("bg_paragraph")
}
