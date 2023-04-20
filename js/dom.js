/* 
Aqui van todas las funciones o variables relacionadas 
con la manipulación del DOM en la aplicación
*/
const $cards_container = document.getElementById("cards-container");
const $option_modal_by_input = null;
const createNewCard = (stay)=>{
    let $card = document.createElement("div");
    $card.className = "card d-flex flex-column col-12 col-md-4 border-0 pb-5"
    $card.innerHTML = `
    <div class="col pt-4" style="width: 25rem; padding-left: 0;">
        <div class="col w-100 rounded-5 pb-3">
            <img class="object-fit-cover rounded-4  w-100 h-100" src="${stay.photo}">
        </div>
        <div class="border border-dark rounded-pill px-2 py-1">
            ${stay.superHost ? '<p class="text-uppercase border py-2 px-3 rounded-pill fs-5">super host</p>':''}
            <div class="py-2">
                <p class="text-secondary-emphasis fs-5 text-opacity-75 fw-semibold">${stay.type} ${stay.beds !=null ? `, ${stay.beds} beds` : ""}</p>
            </div>
            <div class="d-flex flex-row">
                <span class=" material-symbols-outlined text-danger">star</span> 
                <p class="py-2 fs-5">${stay.rating}</p>
            </div>
        </div>
        <h2 class="fw-semibold text-start fs-4">${stay.title}</h2>
    </div>
    `
    return $card
}
const showLocations = (container,locations)=>{
    const $option_modal_by_input = document.getElementById(container);
    $option_modal_by_input.innerHTML = ""
    const $fragment = document.createDocumentFragment();
    locations.forEach(location =>{
        let list_item = document.createElement("li");
        list_item.className = "list-group-item border-0 mb-3"
        list_item.innerHTML = `
        <span class="material-symbols-outlined location-pin text-gray-secondary">location_on</span>
        <span class="text-gray-secondary location-text">${location}, Finland</span>`
        $fragment.appendChild(list_item);
    })
    $option_modal_by_input.appendChild($fragment);
}
const showCards= (stays)=>{
    $cards_container.innerHTML = "";
    if (stays.length == 0) {
        $cards_container.innerHTML = "<h1>Sin resultados para la busqueda</h1>"
        return;
    }
    stays.forEach(stay=>{
        $cards_container.appendChild(createNewCard(stay))
    })
}
const showGuestOptions = (container)=>{
    const $option_modal_by_input = document.getElementById(container);
    $option_modal_by_input.innerHTML ="";
    let $container_options_guest_control = document.createElement("div");
    $container_options_guest_control.className = "container col-4";
    $container_options_guest_control.innerHTML = 
    `<ul class="list-group" id="options-guests-xl">
        <div class="list-group-item border-0 mb-5">
            <p class="gray-lighter-text"><span class="fw-bold gray-darker-text">Adults</span>
            <br>Ages 13 or above
            </p>
            <div class="input-group control-guest">
                <input class="form-control input-group-item w-5" type="button" value="-">
                <span class="input-group-text">0</span>
                <input class="form-control input-group-item w-5" type="button" value="+">
            </div>
        </div>
        <div class="list-group-item border-0">
            <p class="gray-lighter-text"><span class="fw-bold gray-darker-text">Children</span>
            <br>Ages 2-12
            </p>
            <div class="input-group control-guest">
                <input class="form-control input-group-item w-5" type="button" value="-">
                <span class="input-group-text">0</span>
                <input class="form-control input-group-item w-5" type="button" value="+">
            </div>
        </div>
    </ul>`;
    $option_modal_by_input.appendChild($container_options_guest_control);
}
export default{
    showCards,showLocations,showGuestOptions
}