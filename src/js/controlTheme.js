import theme from './setingsTheme';
import refs from './refs.js';
const body = refs.bodyRef;
const btn = refs.buttonSwitchThemeRef;

const setTheme = () => {
  const defaultTheme = theme.LIGHT;
  const getTheme = localStorage.getItem('theme');
  if (!getTheme) {
    addClass(defaultTheme);
    localStorage.setItem('theme', defaultTheme);
    return;
  }
  if (getTheme === theme.DARK) {
    btn.setAttribute('checked', '');
    addClass(getTheme);
    return;
  }
  if (getTheme === theme.LIGHT) {
    btn.removeAttribute('checked');
    addClass(getTheme);
    return;
  }
};

const switchTheme = () => {
  if (btn.hasAttribute('checked')) {
    btn.removeAttribute('checked');
    changeThemeData(theme.DARK, theme.LIGHT);
  } else {
    btn.setAttribute('checked', '');
    changeThemeData(theme.LIGHT, theme.DARK);
  }
};

function addClass(className) {
  body.classList.add(className)
}

function changeThemeData(oldTheme, newTheme) {
  body.classList.replace(oldTheme, newTheme);
  localStorage.setItem('theme', newTheme);
}

setTheme();

btn.addEventListener('click', switchTheme);
