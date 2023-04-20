import data from './data.js';
import dom from './dom.js';

const stays = await data.getData();

// Barra de navegación de inicio
const $location_search_bar = document.getElementById("location");
const $guest_search_bar = document.getElementById("guests");
const $modal_search =document.getElementById("modal_search");

// Modal container para vista phone
const $locationInputPhone = document.getElementById("LocationfloatingInput");
const $guestInputPhone = document.getElementById("GuestfloatingInput");
const $search_buttonPhone  = document.getElementById("phone-search-button");

//Modal container para vista Desktop
const $locationInput = document.getElementById("locationInput");
const $guestInput = document.getElementById("guestInput");
const $search_button  = document.getElementById("search-button");

console.log($search_button)
console.log($search_buttonPhone)
// Valores para las busquedas
let location_text = "";
let number_guest = 0;


//Activar el menu de busqueda al enfocar en cualquiera de estos elementos. Esto según la documentacion
//de Boostrap
$modal_search.addEventListener('shown.bs.modal',e=>{
    $location_search_bar.focus()
    $guest_search_bar.focus()
    
})
//Eventos para barra Phone
$guestInputPhone.addEventListener('focusin', e=>{
    $guestInputPhone.value = "";
    dom.showGuestOptions("options-xs");
});
$locationInputPhone.addEventListener('focusin', e=>{
    $locationInputPhone.value = "";
    dom.showLocations("options-xs",data.getDataLocations(stays));
});
$guestInputPhone.addEventListener('keyup', e=>{
    try {
        let guest = $guestInputPhone.value;
        guest = guest.split(" ");
        number_guest = parseInt(guest[0]);
        $guest_search_bar.value = $guestInputPhone.value;
    } catch (error) {
        alert("Introduzca un valor valido")
    }
});
$locationInputPhone.addEventListener('keyup', e=>{
    location_text = $locationInputPhone.value;
    $location_search_bar.value = $locationInputPhone.value;
});

//Eventos para barra Desktop
$locationInput.addEventListener('focusin', e=>{
    $locationInput.value = "";
    dom.showLocations("options-xl",data.getDataLocations(stays));
});
$locationInput.addEventListener('keyup',e=>{
    location_text = $locationInput.value;
    $location_search_bar.value = $locationInput.value;
});
$guestInput.addEventListener('focusin', e=>{
    $guestInput.value = ""
    dom.showGuestOptions("options-xl");
});
$guestInput.addEventListener('keyup', e=>{
    try {
        let guest = $guestInput.value;
        guest = guest.split(" ");
        number_guest = parseInt(guest[0]);
        $guest_search_bar.value = $guestInput.value;
        console.log(number_guest)
    } catch (error) {
        alert("Introduzca un valor valido")
    }
     
});
$search_buttonPhone.addEventListener('click',e=>{
    console.log(location_text, number_guest);
    let valores_filtrados = stays.filter(stay =>{
        return (stay.city.toLowerCase().includes(location_text.toLowerCase()) && location_text != "") || (number_guest <= stay.maxGuests && number_guest !== 0);
    })
    dom.showCards(valores_filtrados);
})
$search_button.addEventListener('click',e=>{
    console.log(location_text, number_guest);
    let valores_filtrados = stays.filter(stay =>{
        return (stay.city.toLowerCase().includes(location_text.toLowerCase()) && location_text != "") || (number_guest <= stay.maxGuests && number_guest !== 0);
    })
    console.log(valores_filtrados);
    dom.showCards(valores_filtrados);
});
dom.showCards(stays);
