/* в этот файл добавляет скрипты*/

// Burger Menu

const BurgerHeader = document.querySelector('.page-header__toggle');
const HeaderMenu = document.querySelector('.page-header__mobile-menu');

if (BurgerHeader) {
  BurgerHeader.addEventListener('click', () => {
    BurgerHeader.classList.toggle('page-header__toggle--close');
    BurgerHeader.classList.toggle('page-header__toggle--open');
    HeaderMenu.classList.toggle('open');
  });
}

//  API Карта
const YandexMap = window.ymaps;
const shopData = {
  CatEnergy: [{
    lat: 55.75222,
    lon: 37.61556,
    name: 'Кэт Энерджи',
    iconDefault: 'default#image',
    iconHref: 'images/map@1x.png',
    iconSize: [113, 106],
    iconOffset: [-5, -38]
  }],
};

const init = () => {
  const map = new YandexMap.Map('map', {
    center: [55.753215, 37.622504],
    zoom: 14
  });

  let activeShop = 'CatEnergy';

  const showShop = (shop) => {
    map.geoObjects.removeAll();

    shopData[shop].forEach((item) => {
      const placemark = new YandexMap.Placemark([item.lat, item.lon], {
        hintContent: item.name,
        balloonContent: item.name,
      }, {
        iconLayout: item.iconDefault,
        iconImageHref: item.iconHref,
        iconImageSize: item.iconSize,
        iconImageOffset: item.iconOffset
      });

      map.geoObjects.add(placemark);


    });

    activeShop = shop;
  };

  showShop(activeShop);
};

YandexMap.ready(init);

// Slider

const swiper = new Swiper(".slider-conditions", {
  loop: true,
  slidesPerView: 1,
  spaceBetween: 15,
  navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
  },
  pagination: {
      el: ".swiper-pagination",
  },
});

const mySwiper = new Swiper(".ceilings", {
  loop: true,
  slidesPerView: "auto",
  spaceBetween: 30,
});
