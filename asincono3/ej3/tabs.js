

const li = document.querySelectorAll('.li');
const bloque = document.querySelectorAll('.bloque');







li.forEach( (cadaLi, i)=> {
    li[i].addEventListener('click', () => {

        li.forEach((cadaLi) => cadaLi.classList.remove('activo'));
            bloque.forEach((cadaBloque) => cadaBloque.classList.remove('activo'));
      
        li[i].classList.add('activo');
        bloque[i].classList.add('activo');
    });
});