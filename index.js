const menuItems = document.querySelectorAll('.menu-item');

const messagesNotifications = document.querySelector('#messages-notifications');
const messages = document.querySelector('.messages');
const message = messages.querySelectorAll('.message');
const messageSearch = document.querySelector('#message-search');

const theme = document.querySelector('#theme');
const themeModal = document.querySelector('.customize-theme');

const fontSizes = document.querySelectorAll('.choose-size span');
var root = document.querySelector(':root');

const colorPalette = document.querySelectorAll('.choose-color span');

const bg1 = document.querySelector('.bg-1');
const bg2 = document.querySelector('.bg-2');
const bg3 = document.querySelector('.bg-3');

const changeActiveItem = () => {
  menuItems.forEach((item) => {
    item.classList.remove('active');
  });
};

menuItems.forEach((item) => {
  item.addEventListener('click', () => {
    changeActiveItem();
    item.classList.add('active');
    if (item.id == 'notifications' || item.id == 'messages-notifications') {
      if (item.id != 'notifications') {
        document.querySelector(
          '#messages-notifications .notification-count'
        ).style.display = 'none';
        messages.style.boxShadow = '0 0 1rem var(--color-primary)';
        document.querySelector('.notifications-popup').style.display = 'none';
      } else {
        document.querySelector('.notifications-popup').style.display = 'block';
        document.querySelector(
          '#notifications .notification-count'
        ).style.display = 'none';
        messages.style.boxShadow = '0 0 1rem var(--color-light)';
      }
    } else {
      document.querySelector('.notifications-popup').style.display = 'none';
      messages.style.boxShadow = '0 0 1rem var(--color-light)';
    }
  });
});

const searchMessage = () => {
  const val = messageSearch.value.toLowerCase();
  message.forEach((mes) => {
    let name = mes.querySelector('h5').textContent.toLowerCase();
    if (name.indexOf(val) != -1) {
      mes.style.display = 'flex';
    } else {
      mes.style.display = 'none';
    }
  });
};

messageSearch.addEventListener('keyup', searchMessage);

const openThemeModal = () => {
  themeModal.style.display = 'grid';
};

const closeThemeModal = (e) => {
  if (e.target.classList.contains('customize-theme')) {
    themeModal.style.display = 'none';
  }
};

theme.addEventListener('click', openThemeModal);

themeModal.addEventListener('click', closeThemeModal);

const removeSizeSelector = () => {
  fontSizes.forEach((size) => {
    size.classList.remove('active');
  });
};

const removeColorSelector = () => {
  colorPalette.forEach((color) => {
    color.classList.remove('active');
  });
};

fontSizes.forEach((size) => {
  size.addEventListener('click', () => {
    removeSizeSelector();
    let fontSize;
    size.classList.toggle('active');
    if (size.classList.contains('font-size-1')) {
      fontSize = '10px';
      root.style.setProperty('--sticky-top-left', '5.4rem');
      root.style.setProperty('--sticky-top-right', '5.4rem');
    } else if (size.classList.contains('font-size-2')) {
      fontSize = '13px';
      root.style.setProperty('--sticky-top-left', '5.4rem');
      root.style.setProperty('--sticky-top-right', '-7rem');
    } else if (size.classList.contains('font-size-3')) {
      fontSize = '16px';
      root.style.setProperty('--sticky-top-left', '-2rem');
      root.style.setProperty('--sticky-top-right', '-17rem');
    } else if (size.classList.contains('font-size-4')) {
      fontSize = '19px';
      root.style.setProperty('--sticky-top-left', '-5rem');
      root.style.setProperty('--sticky-top-right', '-25rem');
    } else if (size.classList.contains('font-size-5')) {
      fontSize = '22px';
      root.style.setProperty('--sticky-top-left', '-10rem');
      root.style.setProperty('--sticky-top-right', '-33rem');
    }
    document.querySelector('html').style.fontSize = fontSize;
  });
});

colorPalette.forEach((color) => {
  color.addEventListener('click', () => {
    removeColorSelector();
    let primaryHue;
    if (color.classList.contains('color-1')) {
      primaryHue = 252;
    } else if (color.classList.contains('color-2')) {
      primaryHue = 52;
    } else if (color.classList.contains('color-3')) {
      primaryHue = 352;
    } else if (color.classList.contains('color-4')) {
      primaryHue = 152;
    } else if (color.classList.contains('color-5')) {
      primaryHue = 202;
    }
    color.classList.add('active');
    root.style.setProperty('--primary-color-hue', primaryHue);
  });
});

let lightColorLightness;
let whiteColorLightness;
let darkColorLightness;

const changeBg = () => {
  root.style.setProperty('--light-color-lightness', lightColorLightness);
  root.style.setProperty('--white-color-lightness', whiteColorLightness);
  root.style.setProperty('--dark-color-lightness', darkColorLightness);
};

bg1.addEventListener('click', () => {
  bg1.classList.add('active');
  bg2.classList.remove('active');
  bg3.classList.remove('active');

  window.location.reload();
});

bg2.addEventListener('click', () => {
  darkColorLightness = '95%';
  whiteColorLightness = '20%';
  lightColorLightness = '15%';

  bg2.classList.add('active');
  bg1.classList.remove('active');
  bg3.classList.remove('active');

  changeBg();
});

bg3.addEventListener('click', () => {
  darkColorLightness = '95%';
  whiteColorLightness = '10%';
  lightColorLightness = '0%';

  bg3.classList.add('active');
  bg1.classList.remove('active');
  bg2.classList.remove('active');

  changeBg();
});
