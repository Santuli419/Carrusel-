let nextBtn = document.querySelector('.next');
let prevBtn = document.querySelector('.prev');
let slide = document.querySelector('.slide');  // class cont carrusel d imagenes
let slideLista = slide.querySelector('.lista'); // class cont img grandes
let thumbnail = document.querySelector('.thumbnail'); // class cont carrusel pequeño

nextBtn.addEventListener('click', function(){
    moverSlide('next');
});

prevBtn.addEventListener('click', function(){
    moverSlide('prev');
});

function moverSlide(direccion){
    // Actualizar la lista de elementos después de cada movimiento
    let slideItems = Array.from(slideLista.querySelectorAll('.item'));
    let thumbnailItems = Array.from(thumbnail.querySelectorAll('.item')); 

    if(direccion === 'next'){
        slideLista.appendChild(slideItems[0]);
        thumbnail.appendChild(thumbnailItems[0]);
        slide.classList.remove('next');
        slide.classList.add('prev');
    } else{  
        slideLista.insertBefore(slideItems[slideItems.length - 1], slideItems[0]);
        thumbnail.insertBefore(thumbnailItems[thumbnailItems.length - 1], thumbnailItems[0]);
        slide.classList.add('prev');
        slide.classList.remove('next');
    }
}


