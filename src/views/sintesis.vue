<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    .titulo-principal.mb-5.color-acento-contenido(data-aos="fade")
      .titulo-principal__numero
        span.text-white D
      h1 Síntesis
    .row.correr-ambos.my-5.fondo36.py-5
      .col-xl-12.px-5
        p La seguridad en la nube y los datos de los clientes son una prioridad asumida en los contenidos de este componente, así como la orientación en la implementación de controles y procesos de administración diseñados para mitigar riesgos y mejorar los servicios de sus productos.
        .row.justify-content-center.align-items-center
          .col-xl-8.col-md-10.col-12
            p Estos controles y procesos se crean mediante algunos principios que generan reglas generales y directrices que se relacionan con las organizaciones, sus políticas y procedimientos internos, y que corresponden con:
            ul.lista-ul--color(data-aos="slide-left")
              li 
                i.fas.fa-caret-right
                span Riesgo: entendiendo que la administración de riesgos comprende las posibles amenazas y el cálculo del riesgo, teniendo en cuenta a todos los responsables de la toma de decisiones.
              li
                i.fas.fa-caret-right
                span Control: que establece un equilibrio entre eficacia y eficiencia, implementando los controles adecuados para el riesgo asociado.
              li 
                i.fas.fa-caret-right
                span Seguridad: proporciona funciones preventivas y de protección, para garantizar un servicio seguro.
          .col-xl-4.col-md-6.col-8
            img.mover-arriba2(src='@/assets/curso/sintesis/figura1.svg')
    .row.justify-content-center.align-items-center
      .col-xl-10.col-md-10.col-12.fondo37
        p.text-center Esta responsabilidad compartida para la seguridad se logra cuando son asumidos los roles que desempeñan cada una de las personas o los procesos que hacen parte de la seguridad en la nube. Pues no basta con que el proveedor de servicios en la nube garantice seguridad en su infraestructura física, sino que también corresponde al cliente y al usuario seguir pautas y pasos para responder, de igual forma, a los desafíos generados en el avance que tiene la tecnología en la actualidad.
    .row.justify-content-center
      .col-xl-6
        p.text-center El siguiente mapa ofrece una vista rápida de los contenidos de este componente formativo:
    img(src='@/assets/curso/sintesis/grafica1.svg')    

</template>

<script>
import BannerInterno from '../components/BannerInterno.vue'
export default {
  name: 'Sintesis',
  components: {
    BannerInterno,
  },
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
