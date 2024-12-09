
const bloque = document.querySelectorAll('.bloque')
const h2 = document.querySelectorAll('.h2')

h2.forEach((cadaH2, i)=> {
    cadaH2.addEventListener('click', () => {

        bloque.forEach((cadaBloque) => {
            cadaBloque.classList.remove('activo');
            cadaBloque.querySelector('.contenido').style.height = '0px';
        });
        const contenido = bloque[i].querySelector('.contenido');
        bloque[i].classList.add('activo');
        contenido.style.height = contenido.scrollHeight + 'px';
    });
});
