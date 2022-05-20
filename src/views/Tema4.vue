<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal.mb-5.color-acento-contenido(data-aos="fade")
      .titulo-principal__numero
        span.text-white 4
      h1 Controles NIST Marco del Instituto Nacional de Estándares y Tecnología
    .row.correr-ambos.my-5.fondo44
      .col-xl-12.px-5
        .row.justify-content-center
          .col-xl-6.col-md-8.col-12(data-aos="flip-up") 
            p Si bien el marco 
              span.text-bold NIST 
              span es un estándar que hace parte del Departamento de Comercio de los Estados Unidos y que, por supuesto, es ampliamente utilizado en este país, también es un buen referente a nivel internacional como un marco muy popular para la <i>ciberseguridad</i>.
            span.text-bold NIST 
            span es exhaustivo y está basado en el riesgo, lo que lo hace conveniente para organizaciones en una amplia variedad de industrias; dispone de equivalencias con otros marcos internacionales, como la norma 
            span.text-bold ISO/IEC 27001: 2013 
            span , para orientarse en su aplicación.
            br
            br
            p El marco (<i>framework</i>) 
              span.text-bold NIST 
              span está enfocado en la gestión de la <i>ciberseguridad</i> y está compuesto por tres partes: el núcleo del marco, los niveles de implementación del marco y los perfiles del mismo, donde cada componente está conectado e impulsa el desarrollo de actividades de <i>ciberseguridad</i> en cada uno de ellos.
            p A continuación, se hace una descripción general de cada uno de estos componentes:
          .col-xl-4.col-md-4.col-6(data-aos="zoom-in") 
            img(src="@/assets/curso/tema4/figura1.svg")

        separador
        #nucleo.titulo-segundo.color-acento-contenido(data-aos="fade")
          h2 4.1 Núcleo
        .row.correr-ambos.mb-5
          .col-xl-12.fondo42
            .row.justify-content-center.align-items-center
              .col-xl-8.pb-5.pt-5.ps-5.col-sm-6.col-md-8.col-6(data-aos="flip-up") 
                p.text-white.margen1 Para el CTRL-IT (2015), grupo de expertos dedicados a las tecnologías de la información, el núcleo presenta estándares, directrices y prácticas de la industria de una manera que permite la comunicación de las actividades y los resultados de <i>ciberseguridad</i> a toda la organización, desde el nivel ejecutivo hasta el nivel de implementación/operaciones. 

              .col-xl-4.col-md-4.col-sm-7.col-8.pe-5(data-aos="zoom-in")
                img.mover-arribaAbajo(src="@/assets/curso/tema4/figura2.png")
        p.mb-5(data-aos="flip-up")  El núcleo consta de cinco funciones simultáneas y continuas: 
        .titulo-sexto.color-acento-contenido.mb-5(data-aos="flip-right")
          h5 Figura 16
          span <i>Funciones del CSF</i> 
        .row.justify-content-center
          .col-xl-6.col-sm-10-col-12(data-aos="zoom-in") 
            img(src="@/assets/curso/tema4/figura3.svg")
    p.my-5(data-aos="flip-up")  A continuación, se presentan las funciones que tiene el núcleo en los controles 
      span.text-bold NIST:
    .row.mb-5.my-5.justify-content-center
      .col-md-7.mb-5.mb-md-0(data-aos="slide-right")
        LineaTiempoD.color-secundario
          p.text-small(numero="1" titulo="Identificar") Desarrollar la comprensión organizacional y así administrar el riesgo de <i>ciberseguridad</i> para sistemas, activos, datos y capacidades; esto permite reconocer cuáles son los recursos que soportan los procesos críticos de la organización, junto con sus posibles riesgos, para poder enfocar y priorizar los esfuerzos en la gestión de dichos riesgos y, de esta manera, no fallar o cesar las actividades comerciales de la organización. <br><br> Dentro de esta función, se desarrollan las siguientes actividades: <br><br>- Gestión de activos (6 subcategorías) <br>- Ambiente de negocios (5 subcategorías) <br>- Gobernanza (4 subcategorías) <br>- Evaluación de riesgos (6 subcategorías) <br>- Estrategia de gestión de riesgos (3 subcategorías) <br>- Gestión de los riesgos en la cadena de suministro (5 subcategorías)

          p.text-small(numero="2" titulo="Proteger") Esta actividad permite diseñar e implementar los controles y salvaguardas a fin de garantizar el correcto funcionamiento de los servicios y de la infraestructura crítica. Las siguientes son las categorías que hacen parte de esta función:<br><br>- Gestión de identidad, autenticación y control de acceso (7 subcategorías)<br>- Concienciación y formación (5 subcategorías)<br>- Seguridad de datos (8 subcategorías)<br>- Procesos y procedimientos de protección de la información (12 subcategorías)<br>- Mantenimiento (2 subcategorías)<br>- Tecnología de protección (5 subcategorías)
        
          p.text-small(numero="3" titulo="Detectar") El objetivo de esta función es diseñar e implementar las actividades adecuadas que permitan detectar y prever la ocurrencia de eventos de <i>ciberseguridad</i>. Esta función incluye las siguientes categorías:<br><br>- Detectar: anomalías y eventos (5 subcategorías)<br>- Monitorización continua de la seguridad (8 subcategorías)<br>- Procesos de detección (5 subcategorías)

          p.text-small(numero="4" titulo="Responder") Esta función permite diseñar e implementar las medidas adecuadas de respuesta a un incidente de <i>ciberseguridad</i> detectado en la función anterior. Tiene por objetivo contener, disminuir o controlar el impacto que podría generarse por un incidente de <i>ciberseguridad</i>. Las categorías presentes para esta función son:<br><br>- Planificación de la respuesta (1 subcategoría)<br>- Comunicaciones (5 subcategorías)<br>- Análisis (5 subcategorías)<br>- Mitigación (3 subcategorías)<br>- Mejoras (2 subcategorías)

          p.text-small(numero="5" titulo="Recuperar") Esta función permite diseñar e implementar las actividades y procesos tendientes a mantener o recuperar los servicios que pudieran ser afectados por un incidente de <i>ciberseguridad</i>. Esta función admite la recuperación eficaz y oportuna de las operaciones normales de una organización, en busca de reducir el impacto ocasionado por el incidente. Incluye las siguientes categorías.<br><br>- Plan de recuperación (1 subcategoría)<br>- Mejoras (2 subcategorías)<br>- Comunicaciones (3 subcategorías)

      .col-md-5.mb-5.mb-md-0.col-8(data-aos="zoom-in") 
        img(src='@/assets/curso/tema4/imagen1.jpg')
    .row.correr-ambos.my-5.fondo41
      .col-xl-12.px-5
        .cajon.color-acento-contenido.p-4.mb-4(data-aos="flip-up") 
          p Estas funciones, al ser consideradas en conjunto, ofrecen una visión estratégica respecto al ciclo de vida de la administración de los riesgos en <i>ciberseguridad</i> en una organización. El núcleo del marco identifica los tipos y subtipos que son claves en cada función, a la vez que los compara con ejemplos de referencias informativas, como son los estándares, las directrices y las prácticas que ya existen en cada subtipo. A su vez, el núcleo suministra una serie de actividades que posibilitan el alcance de resultados específicos a nivel de <i>ciberseguridad</i>, así como ejemplos orientadores para alcanzar los resultados propuestos.
        separador
        #tiers.titulo-segundo.color-acento-contenido(data-aos="fade")
          h2 4.2 Niveles de implementación (<i>"TIERs"</i>)
        .row.justify-content-center.my-5
          .col-xl-8.col-sm-10.col-12(data-aos="flip-up") 
            p Para la revista UCESIM (2021), de México, los niveles detallan el grado en que las prácticas de gestión de riesgos de <i>ciberseguridad</i> de una organización exhiben las características definidas en el marco. Estos niveles se presentan desde el nivel 1, correspondiente a Parcial, hasta el nivel 4, que es el Adaptativo, describiendo de forma ascendente el grado de rigurosidad, qué tan bien integradas están las decisiones de riesgo de <i>ciberseguridad</i> en decisiones de riesgo más amplias, y el grado en que la organización comparte y recibe información de <i>ciberseguridad</i> de fuentes externas.
            p El nivel de implementación permite que las organizaciones determinen qué nivel de implementación o 
              span.text-bold TIER 
              span desean lograr, el cual debe ser seleccionado a partir de la gestión de riesgos, amenazas, los requisitos legales y reglamentarios, los objetivos de negocio/misión y las limitaciones organizacionales, con el objetivo de mitigar o reducir el riesgo de <i>ciberseguridad</i> de los activos y recursos críticos a niveles aceptables para la organización.
          .col-xl-4.col-sm-6.col-8(data-aos="zoom-in") 
            img(src='@/assets/curso/tema4/figura4.png')
        p.mb-5(data-aos="flip-up")  En la Figura 17, podrá observar la distribución de los <i>Tiers</i>, de manera general:
        .titulo-sexto.color-acento-contenido.mb-5(data-aos="flip-right")
          h5 Figura 17 
          span <i>Niveles de implementación </i> 
          span.text-bold <i>NIST</i>  
          span (<i>Tiers</i>)         
        .row.justify-content-center.mt-5
          .col-xl-8.col-sm-10.col-12(data-aos="zoom-in") 
            img(src='@/assets/curso/tema4/grafica1.svg')
        p.text-center.my-5 Nota. Adaptada de la Guía de seguridad de áreas críticas para la computación en la nube V4.0
        .cajon.color-acento-contenido.mb-5.pt-4
          .row.justify-content-center
            .col-xl-8.col-lg-7.col-md-6.col-11.ps-5(data-aos="flip-up") 
              p.margen4 A continuación, se entrega una descripción un poco más detallada de los diferentes <i>Tiers</i>, los cuales se miden en tres aspectos fundamentales:
            .col-xl-4.col-lg-5.col-md-6.col-11(data-aos="slide-right")      
              ul.lista-ul--color.ms-3.mt-1(data-aos="slide-left")
                li 
                  i.fas.fa-caret-right
                  span Proceso de gestión de riesgos
                li
                  i.fas.fa-caret-right
                  span Programa integrado de gestión de riesgos
                li 
                  i.fas.fa-caret-right
                  span Participación externa

    AcordionA(data-aos="zoom-in")(tipo="b" clase-tarjeta="tarjeta tarjeta--gris")
      .row(titulo="TIER Uno (1): Parcial.")
        .col-md-12.mb-4.mb-md-0
          ul.lista-ul--color(data-aos="slide-left")
            li 
              i.fas.fa-caret-right
              span Proceso de gestión de riesgos: en este nivel, generalmente, las organizaciones no tienen formalizados los procesos de gestión de riesgo, lo que indica que la <i>ciberseguridad</i> y la gestión de riesgo no están asociados de manera directa con los requisitos de negocio o misión.
            li
              i.fas.fa-caret-right
              span Programa integrado de gestión de riesgos: No existe una conciencia frente a la necesidad de proteger los activos o servicios, de manera general, dentro de la organización; se hacen implementaciones de <i>ciberseguridad</i> de manera individual y no coordinada, para toda la organización.
            li 
              i.fas.fa-caret-right
              span Participación externa: Generalmente, las organizaciones con este nivel de madurez no están preparadas para participar de manera coordinada con otras organizaciones.

      .row(titulo="TIER Dos (2): Riesgos de información.")
        .col-md-12.mb-4.mb-md-0
          ul.lista-ul--color(data-aos="slide-left")
            li 
              i.fas.fa-caret-right
              span Proceso de gestión de riesgos: Existen algunos procesos formales en cuanto a implementar actividades de gestión de riesgos de <i>ciberseguridad</i> aprobadas por la administración, pero no establecidos como una política institucional.
            li
              i.fas.fa-caret-right
              span Programa integrado de gestión de riesgos: si bien en este nivel existe un nivel de conciencia en cuanto a la necesidad de establecer estrategias y mecanismos de gestión de riesgo en <i>ciberseguridad</i>, no se ha establecido de manera formal un enfoque para toda la organización.
            li 
              i.fas.fa-caret-right
              span Participación externa: las organizaciones con este nivel de madurez conocen su rol y sus responsabilidades dentro de la gestión del riesgo en <i>ciberseguridad</i>, sin embargo, no han formalizado sus capacidades para compartir e interactuar con agentes externos o terceros.

      .row(titulo="TIER Tres (3): Repetible")
        .col-md-12.mb-4.mb-md-0
          ul.lista-ul--color(data-aos="slide-left")
            li 
              i.fas.fa-caret-right
              span Proceso de gestión de riesgos: Se diseñan y establecen las actividades propias de la gestión del riesgo dentro de la organización y, a su vez, se formalizan como políticas institucionales, actualizando periódicamente a los cambios y nuevas necesidades empresariales.
            li
              i.fas.fa-caret-right
              span Programa integrado de gestión de riesgos: existen políticas y procedimientos formales, lo que permite establecer un enfoque para la gestión del riesgo en toda la organización, definiendo claramente los roles y sus responsabilidades en la gestión del riesgo en <i>ciberseguridad</i>.
            li 
              i.fas.fa-caret-right
              span Participación externa: La organización está preparada para compartir e interactuar con terceros o externos, permitiendo la colaboración y el intercambio de información, lo que facilita la toma de decisiones y la respuesta oportuna a los eventos o incidentes de <i>ciberseguridad</i>.

      .row(titulo="TIER Cuatro (4): Adaptable")
        .col-md-12.mb-4.mb-md-0
          ul.lista-ul--color(data-aos="slide-left")
            li 
              i.fas.fa-caret-right
              span Proceso de gestión de riesgos: Las organizaciones en este nivel de madurez normalmente diseñan sus estrategias de gestión del riesgo en <i>ciberseguridad</i> a partir de las lecciones aprendidas y los indicadores predictivos, como resultado de las actividades en materia de <i>ciberseguridad</i> adoptadas por las organizaciones.
            li
              i.fas.fa-caret-right
              span Programa integrado de gestión de riesgos: Toda la organización tiene el mismo enfoque para gestionar el riesgo de <i>ciberseguridad</i>, utilizando políticas, procesos y procedimientos informados sobre riesgos para abordar posibles eventos de <i>ciberseguridad</i>.
            li 
              i.fas.fa-caret-right
              span Participación externa: Las organizaciones gestionan los riesgos en su totalidad y de manera adecuada, lo que les permite compartir de manera precisa y actualizada la información con los terceros o externos. 
    separador
    #marco.titulo-segundo.color-acento-contenido(data-aos="fade")
      h2 4.3 Perfil del marco
    .row.justify-content-center.align-items-center
      .col-xl-4.col-md-6.col-6(data-aos="zoom-in") 
        img(src='@/assets/curso/tema4/figura5.svg')
      .col-xl-8.col-md-10.col-12(data-aos="flip-up") 
        p.mt-3 Los perfiles son la única formación de una organización, a nivel de sus requisitos y objetivos organizacionales, la tolerancia al riesgo y los recursos, con respecto a los resultados deseados del <i>Framework Core</i>. Pueden utilizarse para identificar las oportunidades de mejora frente a la <i>ciberseguridad</i>, mediante una comparación entre el perfil “actual” y el perfil “objetivo”.
        p En relación con el perfil actual, este permite a las organizaciones hacer una revisión objetiva-real (sin que implique auditorías formales u otras evaluaciones técnicas) del programa de <i>ciberseguridad</i> que se sigue, en relación con el CFS, y de esta forma, enterarse de cuál es la situación que se vive. De acuerdo con el riesgo organizacional, los requisitos de cumplimiento y los objetivos organizacionales, se puede generar el perfil objetivo, que, al ser comparado con el perfil actual, ofrecerá la estrategia de liderazgo y las prioridades para: contratación, capacitación, cambio o actualización de políticas, cambios en los procedimientos y adquisición de tecnología.
    separador
    #framework.titulo-segundo.color-acento-contenido(data-aos="fade")
      h2 4.4  Cómo utilizar el <em>framework CSF</em> 
    .row.correr-ambos.mb-5
      .col-xl-12.fondo42
        .row.justify-content-center.align-items-center
          .col-xl-8.p-5.col-sm-7.col-8.col-md-8(data-aos="fade-down-right")
            p.text-white.margen1 El <i>framework</i> está diseñado para complementar las operaciones <i>core</i> del negocio y de las actividades de <i>ciberseguridad</i> existentes; este permite ser utilizado en la creación de una nueva estrategia o plan de seguridad, o la mejora de uno ya existente.
          .col-xl-4.col-md-4.col-sm-6.col-8.pe-5(data-aos="zoom-in")
            img.mover-arribaAbajo(src="@/assets/curso/tema4/figura6.png")
    p.mb-5 A continuación, se ofrecen siete (7) pasos que ilustran la manera en que se puede utilizar el <i>framework</i>: 
    .row.justify-content-center
      .col-xl-10
        PasosA.color-acento-botones.mb-5(data-aos="slide-left")(tipo="n")
          div
            p Determinar el alcance. Este dependerá de los objetivos de alto nivel de negocio de la organización, para lo cual deberá identificar servicios críticos que estén relacionados con la visión, y con base en esta información, poder definir el alcance.

          div
            p Orientación. En este paso, se debe poner especial atención a todo el tema regulatorio, requisitos legales y el enfoque que se dará a la gestión del riesgo a partir de la identificación y caracterización de los activos. 

          div
            p Crear un perfil actual. En este paso, se debe hacer una evaluación completa de las estrategias y actividades que en materia de <i>ciberseguridad</i> tiene la organización, a fin de poder determinar qué categorías y subcategorías están implementadas y, cumpliendo con el marco, con esta información se crea un perfil actual, que determine en qué nivel de implementación se encuentra la organización. 

          div
            p Realizar una evaluación de riesgos. Para esta actividad, la organización se puede apoyar en cualquiera de las metodologías de análisis y evaluación de riesgos, a fin de poder determinar un plan de tratamiento de riesgos.

          div
            p Crear un perfil de destino. A partir de la aplicación de los pasos anteriores, se debe definir un perfil de destino, a qué nivel de madurez se pretende llegar, teniendo en cuenta los recursos, servicios críticos, intereses corporativos, relacionamiento con terceros, entre otras variables.

          div
            p Determinar, analizar y priorizar brechas. La organización compara el perfil actual y el perfil objetivo, para determinar las brechas. A continuación, crea un plan de acción priorizado para abordar esas brechas, un análisis de costo/beneficio y la comprensión del riesgo, para lograr los resultados en el perfil objetivo.

          div
            p Implementar un plan de acción. La organización determina qué acciones tomar con respecto a las brechas identificadas en el paso anterior, si las hay. A continuación, supervisa sus prácticas actuales de <i>ciberseguridad</i> contra el perfil objetivo. 




</template>

<script>
import BannerInterno from '../components/BannerInterno.vue'
export default {
  name: 'Tema4',
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
