let darkModeBtn = document.getElementById("dark-mode-btn");
let darkModeIcon = document.querySelector(".dark-mode-icon");
darkModeBtn.addEventListener("click", toggleTheme);

function toggleTheme() {
  const darkMode = document.body.classList.toggle("dark-mode");
  if (document.body.classList.contains("dark-mode")) {
    darkModeIcon.src = "./assets/img/light.svg";
  } else {
    darkModeIcon.src = "./assets/img/dark.svg";
  }
}

// Menu Hamburger
const menuModal = document.querySelector(".navbar-modal__content");
const menuHamburgerIcon = document.querySelector(".navbar-icon__menu");
const menuCloseIcon = document.querySelector(".navbar-modal__menuClose");
const linkSection1 = document.querySelector(".goSection1");
const linkSection2 = document.querySelector(".goSection2");
const linkSection3 = document.querySelector(".goSection3");
const linkSection4 = document.querySelector(".goSection4");
const linkSection5 = document.querySelector(".goSection5");

menuHamburgerIcon.addEventListener("click", toogleMenu);
menuCloseIcon.addEventListener("click", hiddenMenu);
linkSection1.addEventListener("click", hiddenMenu);
linkSection2.addEventListener("click", hiddenMenu);
linkSection3.addEventListener("click", hiddenMenu);
linkSection4.addEventListener("click", hiddenMenu);
linkSection5.addEventListener("click", hiddenMenu);

function toogleMenu() {
  menuModal.classList.remove("inactive");
}

function hiddenMenu() {
  menuModal.classList.add("inactive");
}

window.addEventListener("resize", toggleDesktopMenu);
function toggleDesktopMenu() {
  if (window.innerWidth >= 1100) {
    menuModal.classList.add("inactive"); /* oculta la barra de navegación en pantallas mayores a 768px */
  } else if (window.innerWidth < 1100) {
    menuModal.classList.add("inactive");
  } else {
    menuModal.classList.remove("inactive"); /* muestra la barra de navegación en pantallas menores a 768px */
  }
}


// Scroll up button
const containerGoTop = document.querySelector('.go-top-container');
function scrollUp() {
  let currentScroll = document.documentElement.scrollTop || document.body.scrollTop;
  if(currentScroll > 0) {
    window.requestAnimationFrame(scrollUp);
    window.scrollTo(0, currentScroll - (currentScroll / 10));
    containerGoTop.classList.remove('show-top-container');
  }
}

containerGoTop.addEventListener('click', scrollUp);
window.onscroll = function() {
  let scroll = document.documentElement.scrollTop;
  if(scroll >= 100) {
    containerGoTop.classList.add('show-top-container');
  } else {
    containerGoTop.classList.remove('show-top-container');
  }
};

window.addEventListener('touchmove', function() {
  let scroll = document.documentElement.scrollTop;

  if (scroll >= 100) {
    containerGoTop.classList.add('show-top-container');
  } else {
    containerGoTop.classList.remove('show-top-container');
  }
});

// Form
const form = document.getElementById('form')

if(form instanceof HTMLFormElement) {
  const handleSubmit = async (event) => {
    event.preventDefault();
    const newForm = new FormData(form);
  
    const response = await fetch(form.action, {
      method: form.method,
      body: newForm,
      headers: {
        'Accept': 'application/json'
      }
    }); 
  
    if(response.ok) {
      form.reset();
      alert('Gracias por escribirme')
    }
  };
  
  form.addEventListener('submit', handleSubmit)
} else {
  console.log('El objeto seleccionado no es elemento htmlformelement');
}
