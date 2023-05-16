fetch('testimonios.json')
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    const testimoniosContainer = document.getElementById('testimoniosContainer');

    // Iterar sobre cada testimonio en los datos JSON
    data.carousel.forEach(function(testimonio, index) {
      // Crear elementos HTML para mostrar los datos del testimonio
      const carouselItem = document.createElement('div');
      carouselItem.classList.add('carousel-item');
      if (index === 0) {
        carouselItem.classList.add('active');
      }

      const containerTestimonios = document.createElement('div');
      containerTestimonios.classList.add('container_testimonios');

      const imagen = document.createElement('img');
      imagen.classList.add('testimonios');
      imagen.src = testimonio.image;
      imagen.alt = testimonio.name;

      const nombre = document.createElement('h4');
      nombre.classList.add('fonth4');
      nombre.innerHTML = testimonio.name + " <br> " + testimonio.rating;

      const mensaje = document.createElement('p');
      mensaje.classList.add('parrafo-testimonio');
      mensaje.textContent = testimonio.testimonial;

      containerTestimonios.appendChild(imagen);
      containerTestimonios.appendChild(document.createElement('br'));
      containerTestimonios.appendChild(nombre);
      containerTestimonios.appendChild(mensaje);
      containerTestimonios.appendChild(document.createElement('br'));

      carouselItem.appendChild(containerTestimonios);

      testimoniosContainer.appendChild(carouselItem);
    });

    // Agregar div con el ID "bannertestimonio"
    const bannertestimonioDiv = document.createElement('div');
    bannertestimonioDiv.id = 'bannertestimonio';

    // Agregar imagen al div
    const bannertestimonio = document.createElement('img');
    bannertestimonio.src = 'imgbanner.png';
    bannertestimonio.width = '310px';

    bannertestimonioDiv.appendChild(bannertestimonio);

    const bannerContainer = document.querySelector('.bannerimg-testimonios');
    bannerContainer.appendChild(bannertestimonioDiv);
  });
