const iconAvatarHeader = document.querySelector('.header__icon-avatar')
const labelSearched = document.querySelector('.header__search-label')
const inputSearch = document.querySelector('.header__search-input')
const miniMenu = document.querySelector('.minimenu__avatar')

var miniMenuState = false;
iconAvatarHeader.onclick = (event) => {
    miniMenu.classList.remove('close')
    miniMenuState = true;
    event.stopPropagation();
}

document.onclick = () => {
    if (miniMenuState === true) {
        miniMenu.classList.add('close')
        miniMenuState = false;
    }
}
labelSearched.onclick = () => {
    labelSearched.classList.add('close');
    inputSearch.focus();
}
inputSearch.onblur = () => {
    labelSearched.classList.remove('close');

}