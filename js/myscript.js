function toggleMenu() {
    var menuItems = document.querySelector('.menu-items');
    menuItems.classList.toggle('hidden');
    menuItems.classList.toggle('text-center');
    
    var xmark = document.querySelector('.fa-solid.fa-xmark');
    xmark.classList.toggle('hidden');

    var hamburguer = document.querySelector('.fa-solid.fa-bars');           
    hamburguer.classList.toggle('hidden');

}

function redirectReserva2() {

window.location.href = "reserva2.html";

}

function redirectReserva3() {
   
window.location.href = "reserva3.html";
 
}


function toggleAccordion(accordionNumber) {
    var accordionBody = document.getElementById('accordion-collapse-body-' + accordionNumber);
    accordionBody.classList.toggle('hidden');
}

var currentAccordion = null;

function closeCurrentAccordion() {
    if (currentAccordion !== null) {
        var currentAccordionBody = document.getElementById('accordion-collapse-body-' + currentAccordion);
        currentAccordionBody.classList.add('hidden');
    }
}

for (var i = 1; i <= 5; i++) {
    (function (index) {
        var accordionButton = document.querySelector('[data-accordion-target="#accordion-collapse-body-' + index + '"]');
        accordionButton.addEventListener('click', function () {
            // Cierra el acordeón actual antes de abrir el nuevo
            closeCurrentAccordion();

            // Si el mismo acordeón está abierto, establece currentAccordion a null
            if (currentAccordion === index) {
                currentAccordion = null;
            } else {
                // Abre el nuevo acordeón
                toggleAccordion(index);
                currentAccordion = index;
            }
        });
    })(i);
}