<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido(data-aos="fade")
      .titulo-principal__numero
        span
          i.fas.fa-info.text-white
      h1 Introducción
    img(src="@/assets/curso/intro/imagen1.png")
    .row.justify-content-center.align-items-center.mover-arriba.mb-3
      .col-xl-11.fondo1.bordes10
        p.mb-0.p-5 Sea bienvenido al componente formativo “Marcos de seguridad <i>cloud</i>”. Para comenzar el recorrido por el mismo, visualice la información que se muestra a continuación: 
    figure.mb-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      figcaption Video: Leyenda del video
    
    p.mb-5 Para la elaboración de este componente, se abordaron varios autores conocidos en 
      span.text-bold marcos de seguridad <i>cloud</i>
      span , de quienes se han citado y referenciado conceptos y ejemplos para los fines educativos de esta materia, en el entendido de que el conocimiento es social y, por lo tanto, es para ser usado por quienes necesitan adquirirlo. Se espera que este documento sea útil para todos aquellos, aprendices y lectores en general, que estén interesados en acercarse a asuntos básicos de 
      span.text-bold implementación de auditoría técnica plataformas <i>cloud</i>.

</template>

<script>
import BannerInterno from '../components/BannerInterno.vue'
export default {
  name: 'Introduccion',
  components: {
    BannerInterno,
  },
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
