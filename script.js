//Header. Переключение табов
document.addEventListener('scroll', onScroll);

function onScroll(event){
    const curPos = window.scrollY;
    const divs = document.querySelectorAll('#wrapper > div');
    const links = document.querySelectorAll('#menu a');
    //console.log(curPos)

    divs.forEach((el) => {
        if(el.offsetTop <= curPos && (el.offsetTop + el.offsetHeight) > curPos){
            links.forEach((a) => {
                a.classList.remove('active-link');
                if(el.getAttribute('id') === a.getAttribute('href').substring(1)){
                    a.classList.add('active-link');
                }
            })
        }
    });
}

//Portfolio. Рандомная перестановка картинок при переключении вкладок
const portfolioTabs = document.querySelector('#tabs');
const gallery = document.querySelector('#gallery');
const galleryImage = document.querySelectorAll('#gallery img');

let arr = [...galleryImage]

portfolioTabs.addEventListener('click', (event) => {
    portfolioTabs.querySelectorAll('button').forEach(el => el.classList.remove('active-tab'));
    event.target.classList.add('active-tab');
    gallery.querySelectorAll('img').forEach(el => el.classList.remove('active-image'));
    
    function shuffle(arr){
        var j, temp;
        for(var i = arr.length - 1; i > 0; i--){
            j = Math.floor(Math.random()*(i + 1));
            temp = arr[j];
            arr[j] = arr[i];
            arr[i] = temp;
        }
        return arr;
    }

    gallery.innerHTML = '';

    for(let img of shuffle(arr)){
        gallery.appendChild(img);
    }

});

//Portfolio.Рамка при нажатии на картинку

galleryImage.forEach(el => el.addEventListener('click', () => {
    gallery.querySelectorAll('img').forEach(el => el.classList.remove('active-image'));
    event.target.classList.add('active-image');
}));

// Get a quote. Модальное окно формы
function form(e){
    
    const field = document.querySelectorAll('.form-field');
    const modal = document.querySelector('.form-submited');

    if(!modal.style.display.length || modal.style.display === 'none'){
        e.preventDefault();
        modal.style.display = 'block';
        document.querySelector('.name span').innerText = document.querySelector('.form-field[name="name"]').value;
        document.querySelector('.email span').innerText = document.querySelector('.form-field[name="email"]').value;
        document.querySelector('.theme span').innerText = document.querySelector('.form-field[name="theme"]').value.length ? document.querySelector('.form-field[name="theme"]').value : 'no theme';
        document.querySelector('.desc span').innerText = document.querySelector('.form-field[name="description"]').value.length ? document.querySelector('.form-field[name="description"]').value : 'no description';
        field.forEach(item => {
            item.value = '';
        })
    } else {
        modal.style.display = 'none';
    }

}
    document.querySelector('.form').addEventListener('submit', form);
    document.querySelector('.modal-close').addEventListener('click', form);
    document.addEventListener('click', e => {
        if(e.target.classList.contains('form-submited')) {
            form(e);
    }
});


//Header. Burger menu
document.querySelector('.burger-menu').addEventListener('click', (e) => {
    e.currentTarget.classList.toggle('active-burger-menu');
    document.getElementById('navigation-block').classList.toggle('active-navigation-bar');
  });
  
  