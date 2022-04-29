<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    //- El componente "Muestras" tiene las aplicaciones de todos los componentes de la base
    //- se encuentra en src/components/Muestras.vue
    //- Una vez el componente "Muestras" no se necesite 
    //- Se debe borrar el "import Muestras from '../components/Muestras'" y en "components" en "<script"
    //- esto evitará que se compile en la carpeta final de distribución
    //-Muestras
    .titulo-principal.mb-5.color-acento-contenido(data-aos="fade")
      .titulo-principal__numero
        span.text-white 1
      h1 Características de las metodologías de análisis y evaluación de riesgos

    .row.correr-ambos.my-5
      .col-xl-12.fondo2
        .row.justify-content-center.align-items-center
          .col-xl-4.col-md-4(data-aos="slide-right")
            img.mover-arribaAbajo(src="@/assets/curso/tema1/pcs.png")
          .col-xl-8.p-5.col-sm-12.col-md-8(data-aos="slide-left")
            p.text-white Analizar los riesgos informáticos es un proceso que comprende una serie de actividades que inician con la identificación y caracterización de los activos, la identificación de las amenazas y vulnerabilidades, y finalmente hacer una evaluación que permita determinar el riesgo en cada activo caracterizado. Este proceso permite la construcción de la matriz de riesgo, que es el insumo que nos lleva a definir un plan de tratamiento de riesgos que, de acuerdo a la norma ISO 27001, da la alternativa de poder mitigar o eliminar el riesgo, transferirlo, o aceptarlo, a partir de la implementación de controles de seguridad.

    .bloque-texto-g.fondo3.p-3.p-sm-4.p-md-5.mt-5(data-aos="flip-left")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema1/figura1.svg')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Por esta razón, se hace imprescindible la utilización o adopción de una metodología que le permita al personal de tecnología realizar el proceso de una manera más ordenada, especializada y ajustada a las necesidades propias de cada organización.
    separador
    #objetivos.titulo-segundo.color-acento-contenido(data-aos="fade")
      h2 1.1 Objetivos de las metodologías de análisis y evaluación de activos
    p.my-4 Todas las metodologías de análisis y evaluación de riesgos tienen por objetivo los siguientes puntos:
    .row.align-items-center
      .col-xl-8
        ul.lista-ul--color(data-aos="slide-left")
          li 
            i.fas.fa-caret-right
            | La reducción de riesgos a un nivel aceptable.
          li
            i.fas.fa-caret-right
            | Preparar las estrategias que permitan prevenir incidentes de seguridad.
          li 
            i.fas.fa-caret-right
            | Detectar las posibles debilidades existentes en los sistemas y servicios informáticos. 
          li 
            i.fas.fa-caret-right
            | Potenciar la correcta toma de decisiones en materia de seguridad de la información.
      .col-xl-3(data-aos="flip-left")
        img(src="@/assets/curso/tema1/figura2.png")
    separador
    #riesgos.titulo-segundo.color-acento-contenido(data-aos="fade")
      h2 1.2 Qué es el análisis de riesgos
    .cajon.p-4.mb-4.fondo4(data-aos="slide-right")
      p Es poder determinar la probabilidad de un fallo en la seguridad de los activos caracterizados que pueda afectar cualquiera de los pilares de la seguridad, estos son: la integridad, la disponibilidad y la confidencialidad, afectando el core del negocio; e identificar cuáles serán las consecuencias o impactos producidos en la organización por dichos fallos.
      p Las siguientes son algunas de las metodologías más comunes o de mayor utilización en el mundo para este propósito.
    separador
    #riesgos.titulo-segundo.color-acento-contenido(data-aos="fade")
      h2 1.3 Metodologías utilizadas en el análisis de riesgos
    .row.correr-ambos.fondo5
      .col-xl-12
        .row.justify-content-center.align-items-center
          .col-xl-7.col-md-9(data-aos="zoom-in")
            p Desde el 2008, debido a la crisis financiera que se vivió en ese entonces, el análisis de riesgo ha tomado un papel importante al interior de las organizaciones, pues, antes de la crisis, este aspecto se trabajaba de forma sistemática y aislada de todas las entidades. Sin embargo, a partir de esa fecha, reforzar el control interno de las empresas fue asumido de manera más responsable, mediante el análisis y aplicación de la gestión del riesgo en todos los ámbitos y áreas.
            p.fondo6.p-4 Hoy en día, es posible ver diferentes métodos aplicados al análisis de riesgo y posibilitar su sistematicidad. A continuación, se revisan algunos de estos:
          .col-xl-4.col-md-3(data-aos="flip-left")
            img(src="@/assets/curso/tema1/figura3.svg")

    .titulo-segundo1.color-acento-contenido.my-5(data-aos="fade")
      h3 1.3.1 Metodología
        span <i>Magerit</i>.
    .row.correr-ambos.fondo7
      .col-xl-12
        .row.justify-content-center.align-items-center.py-4
          .col-xl-8.col-md-7(data-aos="slide-left")
            p.ms-5 Esta metodología centra su funcionamiento en el hecho de poder caracterizar los activos en distintos grupos que faciliten la identificación de los riesgos y poder definir los controles o contramedidas necesarias que permitan evitar en un mayor porcentaje los incidentes de seguridad, lo que conlleva a generar un mayor grado de confianza para la organización, sus clientes y usuarios.
            p.ms-5 Desde el año 1997, cuando se publicó la primera versión de la metodología, hasta la actualidad, se ve cómo cada vez se consolida con mayor fuerza el análisis de riesgos como el primer gran proceso que lleva a poder gestionar la seguridad de la información.
            p.ms-5 Identificar los riesgos y evaluarlos es lo que permite definir los planes de tratamiento de riesgos; con la gestión realizada, se puede prevenir o disminuir la probabilidad de que se presenten ataques o incidentes de seguridad que afecten los datos, la información o los servicios que las organizaciones utilizan o prestan a sus clientes para el cumplimiento de su función misional.
          .col-xl-4.col-md-4(data-aos="slide-down")
            img(src="@/assets/curso/tema1/figura4.png")
    p.my-4 En cuanto a los objetivos de Magerit, esta metodología establece unas metas de manera directa e indirecta, de acuerdo con el siguiente esquema:
    .row.correr-ambos.fondo8.my-4
      .col-xl-12
        .row.justify-content-center.align-items-center.py-4
          .col-xl-5(data-aos="flip-up")
            a.boton1.indicador__container(@click="modal1 = true")
              .indicador--click(v-if="mostrarIndicador")
          .col-xl-5(data-aos="flip-down")
            a.boton2.indicador__container(@click="modal2 = true")
              .indicador--click(v-if="mostrarIndicador")

    ModalA(:abrir-modal.sync="modal1")
      .row.align-items-center
        .col-md-6.mb-4.mb-md-0
          h4 Objetivos directos:
          p Concienciar a los responsables de los sistemas de información de la existencia de riesgos y de la necesidad de corregirlos a tiempo.
          span Ofrecer un método sistemático para analizar tales riesgos.
          span Ayudar a descubrir y planificar las medidas oportunas para mantener los riesgos bajo control.
        .col-md-6
          figure
            img(src='@/assets/curso/tema1/figura5.png')

    ModalA(:abrir-modal.sync="modal2")
      .row.align-items-center
        .col-md-6.mb-4.mb-md-0
          h4 Objetivos indirectos:
          p Preparar la organización para procesos de evaluación, auditoría, certificación o acreditación, según corresponda en cada caso.
        .col-md-6
          figure
            img(src='@/assets/curso/tema1/figura6.png')
    separador
    .titulo-segundo2.color-acento-contenido.my-5(data-aos="fade")
      h3 1.3.2 Metodología OCTAVE (Evaluación de Vulnerabilidades y Amenazas en Activos Operacionalmente Críticos).
    p.mt-4 <i>OCTAVE</i> es una metodología que permite la identificación, evaluación y gestión de los riesgos informáticos desarrollada por la norma Internacional ISO 27001, su núcleo principal está determinado por un conjunto de criterios divididos en principios, atributos y resultados de dicha evaluación.
    p Podemos establecer como objetivos de la metodología <i>OCTAVE</i>:
    AcordionA.mb-5(data-aos="slide-left")(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")
      .row.align-items-center(titulo="Manejo de recursos:")
        .col-md-6.mb-4.mb-md-0
          p Facilita la comprensión del manejo de los recursos críticos de la organización, además de desarrollar una “percepción” sobre la seguridad, en todos los niveles, y asegurarse cuáles pueden ser implementados.
        .col-md-6
          figure
            img(src='@/assets/curso/tema1/imagen1.png')
      .row.align-items-center(titulo="Comprensión del manejo de los riesgos")
        .col-md-6.mb-4.mb-md-0
          p Identificar y evaluar los riesgos que afectan la seguridad de los activos dentro de una organización.
        .col-md-6
          figure
            img(src='@/assets/curso/tema1/imagen2.png')
      .row.align-items-center(titulo="Clasifica los componentes de la organización")
        .col-md-6.mb-4.mb-md-0
          p Requiere evaluar la organización y el personal a cargo de las tecnologías de la información y las comunicaciones, y los ordena de acuerdo con su importancia en amenaza y vulnerabilidad.
        .col-md-6
          figure
            img(src='@/assets/curso/tema1/imagen3.png')
    .row.fondo9.correr-ambos.my-5
      .col-xl-12.p-5(data-aos="slide-right")
        p.my-4 Esta metodología, en su proceso de caracterización de los activos, los divide en dos tipos:
        .row.align-items-center
          .col-xl-8(data-aos="flip-left")
            ul.lista-ul--color
              li 
                i.fas.fa-caret-right
                | Sistemas (<i>hardware, software</i> y datos)
              li
                i.fas.fa-caret-right
                | Personal involucrado en los procesos de TI
        .titulo-segundo2.color-acento-contenido.my-5(data-aos="fade")
          h3 1.3.3 Metodología CORAS (Construir una plataforma para el análisis de riesgos del sistema crítico de seguridad).
        p.mb-5 <i>Fue construida en el año 2001 por SINTEF, la cual es una organización de investigación noruega que recibe financiamiento de organizaciones del sector público y privado. Su desarrollo fue financiado por la Unión Europea bajo el Proyecto CORAS (IST-2000-25031).</i>
        .titulo-sexto.color-acento-contenido.mb-5(data-aos="slide-left")
          h5 Figura 1
          span <i>Metodología CORAS</i>
        .row.justify-content-center
          .col-xl-10(data-aos="slide-right")
            img(src='@/assets/curso/tema1/organigrama.svg')

        p.my-5.text-center La metodología 
          span.text-bold CORAS
          span , propone unos pasos para su consecución, estos son:
        PasosA.color-acento-botones.mb-5(data-aos="slide-left")(tipo="n")
          div
            span.text-bold Presentación
            span : se trata de la reunión inicial, donde se hace la presentación del alcance y de los objetivos del análisis de riesgos a efectuar, así como para la recolección inicial de información.
          div
            span.text-bold Análisis de alto nivel
            span : en este paso se realizan las entrevistas que permiten validar la comprensión de la información obtenida y los documentos analizados. También se identifican las amenazas, vulnerabilidades, escenarios y posibles incidentes.
          div
            span.text-bold Aprobación
            span : se hace una presentación y descripción detallada de los objetivos y alcance al destinatario del análisis de riesgos para que este los apruebe.

          div
            span.text-bold Identificación de riesgos
            span : se realiza en mayor profundidad y detalle la Identificación de amenazas, vulnerabilidades, escenarios e incidentes.
          div
            span.text-bold Estimación de riesgo
            span : se realiza la estimación de probabilidad e impacto de los incidentes identificados en el paso anterior.
          div
            span.text-bold Evaluación de riesgo
            span : se construye el informe final de riesgos para su revisión y correcciones.
          div
            span.text-bold Tratamiento del riesgo
            span : se hace la identificación de los controles o salvaguardas requeridos a partir de un análisis de costo/beneficio.
        .titulo-segundo2.color-acento-contenido.mt-5(data-aos="fade")
          h3 1.3.4 Metodología
            span <i>MEHARI</i>.
    .row.correr-ambos.mb-5
      .col-xl-12.fondo10
        .row.justify-content-center.align-items-center
          .col-xl-3.col-md-4(data-aos="zoom-in")
            img.mover-arribaAbajo(src="@/assets/curso/tema1/figura7.svg")
          .col-xl-8.p-5.col-sm-12.col-md-8(data-aos="fade-down-right")
            p.text-white.ms-5 Esta metodología fue desarrollada en el año 1998 por CUSIF (<i>Club de la Sécurité De L’information Français</i>); en el año 2007, pasó a ser <I>Open Source</i>. Tiene por objetivo permitir realizar un análisis individual o directo sobre las situaciones o escenarios de riesgo identificados, proporcionando un grupo de herramientas diseñadas específicamente para la gestión de la seguridad, adaptables a niveles distintos de madurez, que pueden ser a corto, mediano o largo plazo.

            p.text-white.ms-5 Su principal objetivo es la identificación, evaluación y reducción de riesgos. Para ello, se apoya en bases de datos de conocimiento propias, herramientas y mecanismos desarrollados para este propósito.

    TabsB.color-acento-contenido.mb-5(data-aos="fade-down-left")
      .py-4.py-md-5(titulo="Método estructurado" :icono="require('@/assets/curso/tema1/nube1.svg')")
        .row
          .col-md-6.mb-4.mb-md-0
            h4.mb-4 Método estructurado
            p En el diseño de esta metodología, se evidenció la necesidad de crear un método estructurado para el análisis y la reducción del riesgo de acuerdo con la organización, es decir, adaptable al core de negocio donde se aplica, esto supone disponer de un método:
          .col-md-6
            figure
              img(src='@/assets/curso/tema1/imagenPestana1.svg')
      .py-4.py-md-5(titulo="Enfoques y herramientas" :icono="require('@/assets/curso/tema1/nube2.svg')")
        .row
          .col-md-6
            h4.mb-4 Enfoques y herramientas
            p Bajo estos preceptos, la metodología proporciona un conjunto de enfoques y herramientas que facilitan la realización de un análisis de riesgos a corto y mediano plazo.
            p Esta metodología incluye:
          .col-md-6.mb-4.mb-md-0
            figure
              img(src='@/assets/curso/tema1/imagenPestana2.svg')
        .row
          .col-xl-12
            p.mt-3 Que sirven como apoyo para ayudar a los CISO (persona a cargo de la gestión de la seguridad) y a los responsables de riesgos (auditores, CIO) en sus diferentes tareas y actividades.
        
      .py-4.py-md-5(titulo="Funcionalidades " :icono="require('@/assets/curso/tema1/nube3.svg')")
        .row
          .col-md-6.mb-4.mb-md-0
            h4.mb-4 Funcionalidades
            p La metodología propone un conjunto de herramientas y funcionalidades para la gestión de la seguridad y de las salvaguardas necesarias, basado en un análisis de riesgos preciso.  Se fundamenta en que estas herramientas, requeridas en cada fase del desarrollo de la seguridad, deben ser consistentes. Y cada resultado obtenido en una fase debe poder ser reutilizado por otras herramientas o en otro lugar de la organización.
        
          .col-md-6
            figure
              img(src='@/assets/curso/tema1/imagenPestana3.svg')
    .row.correr-ambos.mb-5.fondo12
      .col-xl-12
        .titulo-segundo1.color-acento-contenido.my-5.ms-5(data-aos="fade")
          h3 1.3.5 <i>NIST SP-830 (Instituto Nacional de Estándares y Tecnología).</i>
        .row.correr-ambos.mb-5
          .col-xl-12.fondo11.ms-5
            .row.justify-content-center.align-items-center
              .col-xl-8.p-5.col-sm-12.col-md-8(data-aos="fade-down-right")
                p.text-white NIST SP-830 es desarrollado por el Instituto Nacional de Estándares y Tecnología de los Estados Unidos de Norteamérica y proporciona una guía para la gestión del riesgo de los recursos y tecnologías de la información, entrega una serie de recomendaciones, actividades y procesos que permiten una adecuada gestión del riesgo y de la seguridad de la información.
                p.text-white En la siguiente figura, se pueden apreciar los nueve (9) pasos que sugiere esta metodología.

              .col-xl-3.col-md-4.col-sm-5.col-5.pe-5(data-aos="fade-down-left")
                img.mover-arribaAbajo(src="@/assets/curso/tema1/figura8.svg")
        .titulo-sexto.color-acento-contenido.mb-5(data-aos="flip-right")
          h5 Figura 2
          span <i>Pasos de la metodología NIST SP-830</i>
        img(data-aos="fade-down-right")(src="@/assets/curso/tema1/figura9.png")
    .row.justify-content-center
      .col-xl-7.col-md-12(data-aos="fade-down-right")
        p.my-4 En cuanto a los objetivos de la metodología NIST SP-830, se tienen los siguientes:
        ul.lista-ul--color
          li 
            i.fas.fa-caret-right
            | El objetivo de desempeño de la gestión de riesgos es habilitar la organización para cumplir su misión.
          li
            i.fas.fa-caret-right
            | Mejorar el aseguramiento del sistema TI que almacena, procesa o transmite información organizacional.
          li 
            i.fas.fa-caret-right
            | Permitir la gestión de riesgos para tomar decisiones bien fundamentadas de gestión y justificar los gastos que forman parte de un presupuesto de TI.
          li 
            i.fas.fa-caret-right
            | Asistir a la administración en lo que se autoriza (o acredita) a los sistemas de TI, sobre la base de la documentación de soporte a partir de los resultados de la gestión de riesgos.      
      .col-xl-5.col-md-4
        img(src="@/assets/curso/tema1/figura10.svg")
      separador
</template>

<script>
import BannerInterno from '../components/BannerInterno.vue'
import Muestras from '../components/Muestras' // borrar una vez el componente "Muestras" no se necesite
export default {
  name: 'Tema1',
  components: {
    Muestras, // borrar una vez el componente "Muestras" no se necesite
    BannerInterno,
  },
  data: () => ({
    modal1: false,
    modal2: false,
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
