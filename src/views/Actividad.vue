<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-tasks" titulo="Actividad didáctica")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .row.mb-5.justify-content-center.align-items-center.align-items-lg-stretch
      .col-6.col-md-4.col-lg-3.mb-4.mb-md-0
        .tarjeta.tarjeta--blanca.h-100.d-flex.align-items-center
          figure
            img(src="@/assets/curso/actividad/seleccion-multiple.svg", alt="Selección múltiple")
      .col-12.col-md-8.col-lg-9
        .titulo-segundo
          h2 Conceptos de marcos de seguridad en la auditoría técnica en <i>cloud</i>
        p.mb-4 Afianzar algunos de los conceptos más importantes de la ciberseguridad en <i>cloud</i>
        .tarjeta.tarjeta--azul.p-3
          .row.justify-content-around.align-items-center            
            .col-sm.mb-3.mb-sm-0
              p.fw-bold.mb-0 Selección múltiple.
            .col-auto
              a.boton.boton--b(:href="obtenerLink('actividades/actividad.html')" target="_blank")
                span Realizar
                i.fas.fa-puzzle-piece



</template>

<script>
import BannerInterno from '../components/BannerInterno.vue'
export default {
  name: 'Actividad',
  components: {
    BannerInterno,
  },
}
</script>

<style lang="sass"></style>
