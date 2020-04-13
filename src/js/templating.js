import menuTamplates from '../templates/menu-items.hbs';
import menu from '../menu.json';
import refs from './refs'

const markup = menuTamplates(menu)

refs.menuRef.insertAdjacentHTML('beforeend', markup)

