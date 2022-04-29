<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal.mb-5.color-acento-contenido(data-aos="fade")
      .titulo-principal__numero
        span.text-white 2
      h1 Controles de seguridad y marcos de referencia para servicios <i>cloud</i>
    img(src="@/assets/curso/tema2/imagen1.png")
    .row.justify-content-center.align-items-center.mover-arriba.mb-3
      .col-xl-11.fondo1
        p.mb-0.p-5 Implantar medidas de seguridad y protección de los servicios ofertados y contratados en la nube requiere la utilización de lo que se denomina controles, que son una lista de buenas prácticas y recomendaciones dadas por diferentes organizaciones internacionales. A continuación, se presentan los controles de la norma ISO 27002 - 27017, que es la que cuenta con mayor reconocimiento y adopción en la industria.
    .cajon.p-4.mb-4.color-acento-contenido(data-aos="slide-right")
      p ISO/IEC 27002 es el complemento de la norma ISO 27001, la cual se encarga de la definición de los Sistemas de Gestión de Seguridad de la Información (SGSI), proporcionando una serie de buenas prácticas donde se establecen los dominios, objetivos de control y controles recomendados para un adecuado sistema de gestión de seguridad de la información. Esta norma no se certifica por las entidades que hacen dicha labor y sirve de apoyo en la elección de controles para los planes de tratamiento de los riesgos que se determinan como necesarios en relación al proceso de gestión de riesgos indicado como requisito en ISO/IEC 27001 para los sistemas de gestión de seguridad de la información.

    .row.correr-ambos.my-5
      .col-xl-12.fondo13
        .row.justify-content-center.align-items-center
          .col-xl-5.col-md-4(data-aos="slide-right")
            img.mover-arriba2(src="@/assets/curso/tema2/figura1.svg")
          .col-xl-7.p-5.col-sm-12.col-md-8(data-aos="slide-left")
            p.text-white Por su parte, la ISO 27017 establece los controles de seguridad para servicios en la nube; está formada por 37 controles de seguridad en la nube que complementan la ISO 27002, y de igual manera, contiene 7 controles nuevos específicos para cloud que, al ser utilizados en conjunto con la norma ISO 27001, establecen controles específicos tanto para el proveedor de servicios cloud como para el cliente de servicios cloud; en ella se aclara cuáles son las responsabilidades y funciones tanto del proveedor como del cliente, a fin de lograr que los servicios ofrecidos y consumidos estén protegidos y se puedan incluir en un proceso de certificación ISO 27001.

    .row.correr-ambos.my-5
      .col-xl-12.fondo14
        .row.justify-content-center
          .col-xl-7.col-md-12
            p.text-bold.my-5 Temáticas de control de la norma
            ul.lista-ul--color(data-aos="slide-left")
              li 
                i.fas.fa-caret-right
                span Determinar el responsable de lo que ocurre entre el proveedor y el cliente del servicio <i>cloud</i>. Qué sucede cuando se finaliza un contrato y cómo afecta en la eliminación/devolución de activos.
              li
                i.fas.fa-caret-right
                span Separación y protección del entorno virtual del cliente.
              li 
                i.fas.fa-caret-right
                span Configuración de contenedores o máquinas virtuales (virtualización).
              li 
                i.fas.fa-caret-right
                span Procesos administrativos y de operación en los entornos <i>cloud</i>.      
              li 
                i.fas.fa-caret-right
                span Seguimiento a las actividades realizadas por el cliente <i>cloud</i>.
              li 
                i.fas.fa-caret-right
                span Alineación de las comunicaciones con la nube (redes virtuales).
          .col-xl-5.col-md-4
            img(src="@/assets/curso/tema2/figura2.svg")
        .row.justify-content-center
          .col-xl-3.col-md-4
            img(src="@/assets/curso/tema2/figura3.svg")
          .col-xl-9.col-md-12
            p.mt-5 De manera general, se clasifican los controles ISO 27002 en 114 controles y 14 dominios globales, con 35 objetivos de control asociados, para que cada organización determine la cantidad y robustez de controles según las necesidades que se determinen. Es importante aclarar que para un proceso de certificación no se debe cumplir con la totalidad de estos, pues se utilizarán solo los que apliquen al ámbito de la organización.

            p A continuación, se aborda de manera muy general la estructura y cómo está diseñada la norma ISO 27002:2013, la cual en la actualidad se encuentra estandarizada, sin embargo, es importante mencionar que se encuentra en fase de revisión la nueva versión denominada ISO/IEC 27.002:2021, la cual se espera esté disponible a finales del año 2021 o principios del año 2022.

            p La implementación de una norma como ISO 27017 trae múltiples beneficios tanto para el proveedor como para el cliente, los cuales se mencionan a continuación:
</template>

<script>
import BannerInterno from '../components/BannerInterno.vue'
export default {
  name: 'Tema2',
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
