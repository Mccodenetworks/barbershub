const pageDarkMode = document.getElementById("page");
const ktu = document.getElementById("ktu");
const ktu2 = document.getElementById("ktu2");
const ktu3 = document.getElementById("ktu3");
const apenkwa1 = document.getElementById("apenkwa1");
const apenkwa2 = document.getElementById("apenkwa2");
const apenkwa3 = document.getElementById("apenkwa3");
const adweso = document.getElementById("adweso");
const adweso2 = document.getElementById("adweso2");
const searchInput = document.getElementById("search");
const card = document.querySelector(".card");
const cardGrid = document.getElementById("car-grid");



function showCard(){

    if(searchInput.value == "ktu"){
        ktu.style.display = "flex";
        ktu2.style.display = "flex";
        ktu3.style.display = "flex";
        cardGrid.style.display = "grid";
    }

    else if(searchInput.value == "KTU"){
        cardGrid.style.display = "grid";
        ktu.style.display = "flex";
        ktu2.style.display = "flex";
        ktu3.style.display = "flex";
    }

    else if(searchInput.value == "Apenkwa"){
        cardGrid.style.display = "grid";
        apenkwa1.style.display = "flex";
        apenkwa2.style.display = "flex";
        apenkwa3.style.display = "flex";
    }

    else if(searchInput.value == "apenkwa"){
        cardGrid.style.display = "grid";
        apenkwa1.style.display = "flex";
        apenkwa2.style.display = "flex";
        apenkwa3.style.display = "flex";
    }

    else if(searchInput.value == "Adweso"){
        cardGrid.style.display = "grid";
        adweso.style.display = "flex";
        adweso2.style.display = "flex";
    }

    else if(searchInput.value == "adweso"){
        cardGrid.style.display = "grid";
        adweso.style.display = "flex";
        adweso2.style.display = "flex";
    }


    else{
        alert("not found")
    }

}

function darkMode(){
    if(pageDarkMode.backgroundColor  = "white"){
        pageDarkMode.classList.toggle("dark")
    }

    else{
        pageDarkMode.style.backgroundColor = "white";
    }

}