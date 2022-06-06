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
      span.text-bold ISO/IEC 27002 
      span es el complemento de la norma 
      span.text-bold ISO 27001
      span , la cual se encarga de la definición de los Sistemas de Gestión de Seguridad de la Información (SGSI), proporcionando una serie de buenas prácticas donde se establecen los dominios, objetivos de control y controles recomendados para un adecuado sistema de gestión de seguridad de la información. Esta norma no se certifica por las entidades que hacen dicha labor y sirve de apoyo en la elección de controles para los planes de tratamiento de los riesgos que se determinan como necesarios en relación al proceso de gestión de riesgos indicado como requisito en 
      span.text-bold ISO/IEC 27001 
      span para los sistemas de gestión de seguridad de la información.

    .row.correr-ambos.my-5.fondo13
      .col-xl-12
        .row.justify-content-center.align-items-center
          .col-xl-5.col-md-4.col-6.col-sm-6(data-aos="slide-right")
            img.mover-arriba2(src="@/assets/curso/tema2/figura1.svg")
          .col-xl-7.col-sm-10.col-md-8.col-8(data-aos="slide-left")
            p.me-5.mt-3.margen2 Por su parte, la 
              span.text-bold ISO 27017 
              span establece los controles de seguridad para servicios en la nube; está formada por 37 controles de seguridad en la nube que complementan la 
              span.text-bold ISO 27002
              span , y de igual manera, contiene 7 controles nuevos específicos para <i>cloud</i> que, al ser utilizados en conjunto con la norma 
              span.text-bold ISO 27001
              span , establecen controles específicos tanto para el proveedor de servicios <i>cloud</i> como para el cliente de servicios <i>cloud</i>; en ella se aclara cuáles son las responsabilidades y funciones tanto del proveedor como del cliente, a fin de lograr que los servicios ofrecidos y consumidos estén protegidos y se puedan incluir en un proceso de certificación 
              span.text-bold ISO 27001.

    .row.correr-ambos.my-5
      .col-xl-12.fondo14
        .row.justify-content-center.align-items-center
          .col-xl-7.col-md-12.px-5
            p.text-bold.mb-5 Temáticas de control de la norma
            ul.lista-ul--color(data-aos="slide-right")
              li 
                i.fas.fa-caret-right
                span Determinar el responsable de lo que ocurre entre el proveedor y el cliente del servicio <i>cloud</i>.
              li 
                i.fas.fa-caret-right
                span Qué sucede cuando se finaliza un contrato y cómo afecta en la eliminación/devolución de activos.
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
          .col-xl-5.col-md-4.col-sm-6.col-10(data-aos="slide-left")
            img.mb-4(src="@/assets/curso/tema2/figura2.svg")
        .row.justify-content-center.align-items-center
          .col-xl-3.col-md-4.col-sm-6.col-10.px-2(data-aos="slide-right")
            img.mt-4.ms-5(src="@/assets/curso/tema2/figura3.svg")
          .col-xl-9.col-md-11.col-11(data-aos="slide-left")
            p.mt-5.ms-5 De manera general, se clasifican los controles 
              span.text-bold ISO 27002 
              span en 114 controles y 14 dominios globales, con 35 objetivos de control asociados, para que cada organización determine la cantidad y robustez de controles según las necesidades que se determinen. Es importante aclarar que para un proceso de certificación no se debe cumplir con la totalidad de estos, pues se utilizarán solo los que apliquen al ámbito de la organización.

            p.ms-5 A continuación, se aborda de manera muy general la estructura y cómo está diseñada la norma 
              span.text-bold ISO 27002:2013
              span , la cual en la actualidad se encuentra estandarizada, sin embargo, es importante mencionar que se encuentra en fase de revisión la nueva versión denominada 
              span.text-bold ISO/IEC 27.002:2021
              span , la cual se espera esté disponible a finales del año 2021 o principios del año 2022.

            p.ms-5 La implementación de una norma como 
              span.text-bold ISO 27017 
              span trae múltiples beneficios tanto para el proveedor como para el cliente, los cuales se mencionan a continuación:

    .row.mb-5.justify-content-between
      .col-sm-12.col-xxl-6.col-xl-6.col-lg-6.col-md-10.mb-4.mb-xl-0(data-aos="slide-right")
        .tarjeta.tarjeta-flip(@mouseover="indicadorTarjetaFlip = false")
          .indicador--hover(v-if="indicadorTarjetaFlip")
          .tarjeta-flip__contenedor
            .tarjeta-flip__img.fondo48(:style="{'background-image': `url(${require('@/assets/curso/tema2/mujer.png')})`}")
              p.ajustar.mb-0.text-center Beneficios para los 
              p.ajustar.mb-0.text-center clientes de servicios <i>cloud</i>
            .tarjeta-flip__contenido.p-4.p-xl-5.fondo16
              .row
                .col-xl-2.col-md-3.col-sm-2.col-2
                  img.my-5(src="@/assets/curso/tema2/nube.svg")
              h4.text-dark.mb-4 Beneficios para los clientes de servicios <i>cloud</i>
              ul.lista-ul--color
                li 
                  i.fas.fa-caret-right
                  span.text-dark Reducción de riesgos y aseguramiento en las responsabilidades, tanto del cliente como del proveedor de servicios <i>cloud</i>, lo que facilita la toma de decisiones a la hora de iniciar un proyecto de migración de los servicios <i>on-premise</i> a la nube.
                li
                  i.fas.fa-caret-right
                  span.text-dark Gestión adecuada de los contratos de prestación de servicios con proveedores <i>cloud</i>, sus adiciones y ampliaciones requeridas por la organización.
              br
              br
              br
              br
      .col-sm-12.col-xxl-6.col-xl-6.col-lg-6.col-md-10.mb-4.mb-xl-0(data-aos="slide-left")
        .tarjeta.tarjeta-flip(@mouseover="indicadorTarjetaFlip = false")
          .indicador--hover(v-if="indicadorTarjetaFlip")
          .tarjeta-flip__contenedor
            .tarjeta-flip__img.fondo48(:style="{'background-image': `url(${require('@/assets/curso/tema2/hombre.png')})`}")
              p.ajustar.mb-0.text-center Beneficios para los 
              p.ajustar.mb-0.text-center proveedores de servicios <i>cloud</i>
            .tarjeta-flip__contenido.p-4.p-xl-5.fondo15
              .row
                .col-xl-2.col-md-3.col-sm-2.col-2(data-aos="zoom-left")
                  img.my-5(src="@/assets/curso/tema2/nube.svg")
              h4.text-dark.mb-4 Beneficios para los proveedores de servicios <i>cloud</i>
              ul.lista-ul--color
                li 
                  i.fas.fa-caret-right
                  span.text-dark Aumento de la confianza por parte de los clientes que utilizan o consumen servicios <i>cloud</i>. 
                p.ms-3.text-dark Ofrecen mayores niveles de seguridad y protección de datos.
                li
                  i.fas.fa-caret-right
                  span.text-dark Generan una ventaja diferenciadora frente a la competencia existente en el mercado <i>cloud</i>.
                p.ms-3.text-dark Mejora de la reputación y posicionamiento de la marca por la adopción e implementación de un estándar como el de ISO para el servicio <i>cloud</i>.
                p.ms-3.text-dark Garantía del cumplimiento con las normas legales locales.
                p.ms-3.mb-5.text-dark Facilidad en la ampliación y accionar en el mercado internacional, ya que estas normas son reconocidas y certificadas a nivel mundial.
    .row.correr-ambos.my-5
      .col-xl-12.fondo17.px-5
        p.mb-5 Como ya se ha indicado, la norma ISO 27017 tiene 114 controles y 14 dominios, los cuales se establecen en la siguiente figura:
        .titulo-sexto.color-acento-contenido.mb-5(data-aos="flip-right")
          h5 Figura 3
          span <i>Dominios de la norma ISO 27017</i>
        .row.justify-content-center.my-5.align-items-center
          .col-xl-10.col-md-12(data-aos="slide-left")
            img(src="@/assets/curso/tema2/figura4.svg")
        p.mt-5 A continuación, se describen cada uno de estos dominios, teniendo en cuenta los objetivos propuestos para cada uno de ellos.
        .row.mt-5
          .col-xl-3.col-lg-4.col-md-5.col-9.fondo18(data-aos="slide-right")
            p.mb-0.text-center.text-white.py-2.text-bold Dominio 1. Políticas de Seguridad
    .row.correr-ambos.mb-5
      .col-xl-12.fondo19.px-5  
        .row.justify-content-center
          .col-xl-5.col-lg-6.col-md-8.col-6(data-aos="slide-right")
            img(src="@/assets/curso/tema2/imagen2.png")
          .col-xl-7.mt-4(data-aos="slide-left")
            p Para este dominio, se establece la necesidad de que la organización cuente con un documento o política donde se exprese de manera general y clara la posición que frente a la seguridad establece la empresa. De igual manera, se crean las políticas complementarias, como una buena práctica de control a los diferentes procesos desarrollados por las organizaciones en la utilización de sistemas de información, plataformas, dispositivos lógicos y distintas ubicaciones de la empresa. 
            p Se parte de la premisa típica en seguridad de la información: "lo que no está permitido está prohibido". Cada organización puede identificar sus propias necesidades específicas y, de esta manera, valorar los controles o salvaguardas necesarios que fundamenten las políticas de seguridad que le aplican, estructurando de esta manera una gestión más adecuada.
        p.my-5.text-center Control: Directrices de la Dirección en seguridad de la información
        .row.justify-content-center
          .col-xl-4.col-lg-4.col-md-4.col-sm-4.col-4(data-aos="flip-left")
            ImagenInfograficaB.imgmodal.ampliar-modal
              template(v-slot:imagen)
                figure
                  img(src='@/assets/curso/tema2/botonesInfo.svg')

              div(x="24.4%" y="87.8%" tooltip="Click para leer...")
                .row
                  .col-xl-5.col-lg-5.col-md-5.col-sm-12
                    h5.color-texto 1. OBJETIVO
                    p.color-texto La dirección en seguridad de la información, regulada mediante la ISO 27001, tiene como objetivo dar soporte y administrar la gestión de la seguridad de la información alineando la seguridad con todas las particularidades del negocio, la legislación y las regulaciones.
                  .col-xl-7.col-lg-7.col-md-7.col-sm-12
                    img(src='@/assets/curso/tema2/imagen3.png')

              div.mx-2(x="77.6%" y="87.8%" tooltip="Click para leer...")
                .row.justify-content-center
                  .col-xxl-5.col-xl-4.col-lg-4.col-md-9.col-sm-10
                    .h5.mb-2.ms-3 2. CONTROLES
                    p.ms-3 La dirección en seguridad de la información, regulada mediante la ISO 27017, tiene dos controles en su direccionamiento.
                  .col-xxl-7.col-xl-8.col-lg-8.col-md-10.col-sm-10
                    .row.justify-content-center
                      .col-xl-11.col-sm-12.mb-2.pad-title
                        p.text-center.mb-0.fondo20.text-bold.p-2 Controles
                    .row.justify-content-center
                      .col-xl-5.bordes.col-md-5.col-sm-11.mb-2.me-1.p-3.fondo38
                        p Políticas para la seguridad de la información: la organización debe de crear las políticas de seguridad de la información, aprobarlas por la alta gerencia o dirección, publicarlas y socializarlas a todos los empleados, así como a todas las partes externas involucradas en los procesos core.
                      .col-xl-5.bordes.col-md-5.col-sm-11.mb-2.ms-1.p-3.fondo38
                        p Revisión de las políticas para la seguridad de la información: el dinamismo de la tecnología, de los procesos y la mejora continua requiere que se hagan revisiones periódicas a las políticas de seguridad de la organización a fin de garantizar sus ajustes, adecuación, efectividad e idoneidad de estas políticas.

        p.mt-5(data-aos="slide-right") En la implementación de estos controles, según ISO 27017, se requiere, por parte del cliente de servicios en la nube, definir una política específica para la computación en nube, cuyo contenido sea consistente con los niveles de riesgo para los activos y la seguridad de la información considerados aceptables por la organización.  
        p-mb-5(data-aos="slide-left") Por su parte, el proveedor de servicios <i>cloud</i> debería incrementar sus políticas de seguridad en relación con las actividades de provisión y uso de sus servicios de nube.
        .row.mt-5
          .col-xl-4.col-xxl-3.col-lg-4.col-md-6.col-9.fondo18(data-aos="slide-left")
            p.mb-0.text-center.text-white.py-2.text-bold Dominio 2. Aspectos organizativos

    .row
      .col-xl-5(data-aos="slide-right")
        img(src='@/assets/curso/tema2/imagen4.png')
      .col-xl-7.mt-3(data-aos="slide-left")   
        p Este dominio centra su acción en establecer las estrategias administrativas de la gestión de la seguridad de la información, como factor fundamental para los objetivos y actividades propias de la organización.
        p.fondo21.p-4 La administración debe generar las condiciones necesarias que permitan la gestión de las actividades propias de la seguridad de la información como aprobación de las políticas de seguridad, la implementación de los controles, la asignación de tareas, segregación de funciones y designación de personas a cargo de la gestión de la seguridad de la información.
    .row.correr-ambos.my-5
      .col-xl-12.fondo19.px-5(data-aos="zoom-in")  
        p.text-center.mb-5 Este dominio cuenta con varios controles, tal como puede ser consultado en la siguiente gráfica:
        .row.justify-content-center
          .col-xl-10
            ImagenInfografica.color-secundario.mb-5
              template(v-slot:imagen)
                figure
                  img(src='@/assets/curso/tema2/controles.svg')

              .tarjeta.fondo22.p-3(x="23%" y="53%" numero="+" tooltip="Click para leer...")
                .h5.mb-2 Asignar responsabilidades
                p Busca que se definan y asignen las tareas y responsabilidades, de una manera clara, en cuanto a la seguridad de  la información.

              .tarjeta.fondo22.p-3(x="23%" y="62.3%" numero="+" tooltip="Click para leer...")
                .h5.mb-2 Segregar tareas
                p Se deben segregar tareas y las áreas responsables a fin de poder identificar, si existiesen, conflictos de interés y evitar cambios o modificaciones no autorizadas, mal intencionadas o un uso inadecuado de los activos.
    
              .tarjeta.fondo22.p-3(x="23%" y="72%" numero="+" tooltip="Click para leer...")
                .h5.mb-2 Contacto con las autoridades
                p Siempre debe existir y mantenerse un contacto directo con las autoridades regulatorias y pertinentes ajustadas al core del negocio.
                p Por su parte, en la implementación de la norma ISO 27017 por el lado del cliente de servicios <i>cloud</i>, debe acordar con el proveedor la designación y descripción de las funciones y responsabilidades que tendrá cada rol, específicamente las funciones o roles de soporte y atención a incidencias.
                p Por su lado, el proveedor de servicios <i>cloud</i> debe acordar y documentar los roles en relación con sus clientes, proveedores y <i>partners</i> o suministradores.

              .tarjeta.fondo22.p-3(x="23%" y="82.5%" numero="+" tooltip="Click para leer...")
                .h5.mb-2 Contacto con grupos de interés
                p Busca que la organización haga parte de grupos o comunidades de interés relacionados con la seguridad de la información, y con grupos o sectores relacionados con la industria de la organización, a fin de garantizar el intercambio y actualización permanente.
                p La seguridad de la información debe hacer parte integral de la gestión de proyectos, sin importar el tipo de proyecto a ser diseñado y desarrollado por la organización.

              .tarjeta.fondo22.p-3(x="23%" y="94%" numero="+" tooltip="Click para leer...")
                .h5.mb-2 Gestión de proyectos y la seguridad de la información
                p La seguridad de la información debe hacer parte integral de la gestión de proyectos, sin importar el tipo de proyecto a ser diseñado y desarrollado por la organización.

              .tarjeta.fondo22.p-3(x="64.5%" y="53.5%" numero="+" tooltip="Click para leer...")
                .h5.mb-2 Política de uso de dispositivos móviles
                p Se debería establecer una política formal y se deberían adoptar las medidas de seguridad adecuadas para la protección contra los riesgos derivados del uso de los recursos de informática móvil y las telecomunicaciones.
    
              .tarjeta.fondo22.p-3(x="64.4%" y="64.3%" numero="+" tooltip="Click para leer...")
                .h5.mb-2 Teletrabajo
                p Se deben diseñar e implementar las estrategias necesarias que involucren políticas y medidas de protección de la información que es recibida, procesada y almacenada a través de las conexiones remotas y a través de estrategias como el teletrabajo. 

              .tarjeta.fondo22.p-3(x="95.1%" y="68%" numero="+" tooltip="Click para leer...")
                .h5.mb-2 Roles y responsabilidades compartidas 
                p En el entorno de nube: se deberían designar las responsabilidades para los roles compartidos en seguridad en el uso de los servicios de nube, para identificar las partes, documentarlas, comunicarlas e implementarlas.
                p Para su implementación, el cliente de servicios en la nube debe definir sus políticas y procedimientos existentes en línea con su uso en los servicios de nube y concientizar a los usuarios de sus roles y responsabilidades. Por otra parte, el proveedor debe documentar y comunicar sus capacidades, roles y responsabilidades en seguridad de la información  para el uso de los servicios de nube, junto con los roles y responsabilidades que el cliente necesitaría implementar y gestionar en el ámbito del uso de los servicios.
        .row.my-5(data-aos="slide-right")
          .col-xl-5.col-lg-6.col-md-8.col-10.fondo18
            p.mb-0.text-center.text-white.py-2.text-bold Dominio 3. Seguridad en cuanto a los recursos humanos
        .row.justify-content-center(data-aos="slide-right")
          .col-xl-1.col-md-2.col-sm-2.col-6
            img(src='@/assets/curso/tema2/escudo.svg')
          .col-xl-11.col-md-10.col-sm-10.mb-5(data-aos="fade-left")
            p Busca educar e informar al personal desde su ingreso y en forma continua, cualquiera sea su situación de actividad, acerca de las medidas de seguridad que afectan el desarrollo de sus funciones y las expectativas depositadas en ellos en materia de seguridad y asuntos de confidencialidad. Este dominio cuenta con tres controles, los cuales se describen a continuación:
        .titulo-sexto.color-acento-contenido.mb-5(data-aos="flip-right")
          h5 Figura 4 
          span <i>Controles de la seguridad en cuanto a los recursos humanos</i>
        .row.justify-content-center
          .col-lg-12(data-aos="slide-left")
            img(src='@/assets/curso/tema2/organigrama.svg')
        .cajon.p-4.mt-5.color-acento-contenido(data-aos="slide-right")
          p Para la implementación de estos controles en ISO 27017, el cliente debe incluir en sus programas de formación y concientización a gerentes de negocio, administradores, integradores y usuarios de los servicios de nube, además de todo el personal que da apoyo en la coordinación de las actividades de seguridad de la información; y por otra parte, el proveedor de servicios <i>cloud</i>, proporcionar programas de formación y concientización a todo el personal interno, reclamándolo de igual modo a sus proveedores, sobre el adecuado uso de los datos de los clientes.
    .row.correr-ambos.mt-5
      .col-xl-12.fondo19.px-5  
        .row
          .col-xl-3.col-lg-4.col-8.fondo18(data-aos="slide-right")
            p.mb-0.text-center.text-white.py-2.text-bold Dominio 4. Gestión de activos 
        p.my-5 Busca garantizar que las organizaciones tengan el conocimiento certero frente a los activos con que cuentan para el desarrollo de su core de negocio, como un factor diferencial y necesario para la gestión y administración del riesgo. Los activos pueden clasificarse y tener los controles correspondientes, como se puede observar en el siguiente recurso didáctico:
        .row.justify-content-center
          .col-xl-12(data-aos="slide-right")
            ImagenInfograficaB.color-acento-botones.mb-5
              template(v-slot:imagen)
                figure
                  img.img-a.img-t(src='@/assets/curso/tema2/figura5.svg')

              .tarjeta.p-3(x="26%" y="78.3%" numero="" tooltip="Click para leer...")
                .h5.mb-4 CLASIFICACIÓN
                p.text-bold Recursos de tipo información:
                p En esta categoría de activos, se incluyen, pero no se limita a: archivos, manuales, bases de datos, documentación de aplicaciones y servicios, políticas y procedimientos de soporte, planes de continuidad del negocio y planes de recuperación de desastres, entre otras.
                p.text-bold Recursos de tipo <i>software</i>: 
                p Esto incluye todos los activos relacionados con herramientas <i>software</i>, como: sistemas operativos, aplicaciones propietarias y de terceros, herramientas de desarrollo y publicación de contenidos, utilitarios, entre otros.
                p.text-bold Recursos de tipo <i>hardware</i>:
                p Hacen parte de esta categoría todo el equipamiento físico, como computadores, servidores, impresoras, procesadores, memorias, monitores; los equipos de comunicación, como <i>switches, routers, PABXs, Access Points, Firewalls</i>, entre otros; los medios de almacenamiento, como discos duros, cintas, dispositivos móviles de almacenamiento de datos, memorias USB, discos externos, entre otros.
                
              .tarjeta.p-3(x="76.9%" y="52%" numero="" tooltip="Click para leer...")
                SlyderA(tipo="b")
                  .row.justify-content-center
                    .col-xl-12
                      .h5.mb-5 CONTROLES
                      figure
                        img(src='@/assets/curso/tema2/figura6.svg')
                  .row.justify-content-center
                    .col-xl-12
                      .h5.mb-5 1. Responsabilidad sobre los activos
                      p Se deben identificar los activos categorizados en cada una de las áreas especificadas con anterioridad, de esta forma, se garantizan las estrategias de protección para cada uno.
                      p Responsabilidad sobre los activos
                      img.mt-5(src='@/assets/curso/tema2/figura7.svg')
                  .row.justify-content-center
                    .col-xl-12
                      .h5.mb-5 2. Clasificación de la información
                      p Este control tiene por objetivo determinar el nivel adecuado de protección de la información y recursos informáticos, según su nivel de criticidad. 
                      p Al hacer la clasificación, deben tenerse en cuenta algunas variables que determinarán su nivel de importancia o criticidad, dentro de las cuales están: sensibilidad, cumplimiento legal o contractual, valor, e importancia para la organización.
                      .row.justify-content-center
                        .col-xl-10
                          img(src='@/assets/curso/tema2/figura8.svg')
                  .row.justify-content-center
                    .col-xl-12
                      .h5.mb-5 3. Manejo de los soportes de almacenamiento
                      p Se deberían establecer todas las acciones necesarias para evitar la pérdida, robo, manipulación o destrucción de información corporativa que se encuentre almacenada en cualquier medio.
                      .row.justify-content-center
                        .col-xl-10
                          img(src='@/assets/curso/tema2/figura9.svg')
        .row
          .col-xl-3.col-lg-4.col-md-5.col-8.fondo18(data-aos="slide-right")
            p.mb-0.text-center.text-white.py-2.text-bold Dominio 5. Control de acceso   
        .row.justify-content-center.mt-5.mb-4.align-items-center
          .col-xl-5.col-md-6.col-sm-8(data-aos="slide-right")
            img(src='@/assets/curso/tema2/imagen5.png')
          .col-xl-7.col-md-8.col-sm-12.mt-3(data-aos="flip-left")
            p Este dominio tiene por objetivo controlar el acceso a los recursos informáticos de la organización a partir de la implementación de restricciones y excepciones sobre quién y en qué nivel puede tener acceso a la información. El usuario es parte fundamental de este dominio, ya que se incluyen los mecanismos de autenticación, como nombres de usuario y contraseñas de acceso.
        p.mb-5(data-aos="flip-right") Para garantizar el cumplimiento de este objetivo, la norma establece los siguientes controles, que puede consultar a continuación:
        
        .row.justify-content-center
          .col-xl-12(data-aos="slide-left")
            ImagenInfograficaB.color-acento-botones.mb-5
              template(v-slot:imagen)
                figure
                  img(src='@/assets/curso/tema2/botonesLinea.svg')

              .tarjeta.p-3(x="8.8%" y="85.8%" numero="" tooltip="Click para leer...")
                .h5.mb-4 1. Requisitos de negocio para controlar el acceso
                img.me-5(src='@/assets/curso/tema2/figura10.png')
              .tarjeta.p-3(x="29.4%" y="86%" numero="" tooltip="Click para leer...")
                SlyderA(tipo="b")
                  .row.justify-content-center
                    .col-xl-11
                      .h5.mb-4 2. Gestión de acceso de usuario
                      p.my-4 Lo que se pretende en este control es garantizar el acceso a los usuarios autorizados expresamente a esos recursos y/o servicios, y evitar a toda costa el acceso por parte de personal no autorizado.
                      .row.justify-content-center.align-items-center
                        .col-xl-10.col-md-10.col-sm-10
                          img.me-5(src='@/assets/curso/tema2/figura11.svg')
                  .row.justify-content-center.align-items-center
                    .col-xl-10.col-md-10.col-sm-10
                      img.me-5(src='@/assets/curso/tema2/figura12.svg')

              .tarjeta.p-3(x="91.2%" y="86.1%" numero="" tooltip="Click para leer...")
                .row.justify-content-center.align-items-center
                  .col-xl-10.col-md-10.col-sm-10
                    .h5.mb-4 5. Control de accesos a los datos del cliente en entornos virtuales compartidos 
                    img.me-5(src='@/assets/curso/tema2/figura20.svg')
              .tarjeta.p-3(x="50%" y="86.1%" numero="" tooltip="Click para leer...")
                .h5.mb-4 3. Responsabilidades del usuario
                p Se debe crear conciencia del rol que tienen los usuarios como responsables de la protección de su información asignada para el acceso a los sistemas.
                .row.justify-content-center.align-items-center
                  .col-xl-10.col-md-10.col-sm-10
                    img.me-5(src='@/assets/curso/tema2/figura13.svg')
              .tarjeta.p-3(x="70.5%" y="86.1%" numero="" tooltip="Click para leer...")

                SlyderA(tipo="b")
                  .row.justify-content-center
                    .col-xl-11
                      .h5.mb-4 4. Control de acceso a sistemas y recursos TI
                      p Busca garantizar que no se presenten accesos no autorizados a la información que es recibida, procesada y almacenada en los sistemas informáticos.
                      .row.justify-content-center.align-items-center
                        .col-xl-10.col-md-10.col-sm-10
                          img.me-5(src='@/assets/curso/tema2/figura14.svg')
                  .row.justify-content-center.align-items-center
                    .col-xl-10.col-md-10.col-sm-10
                      img.me-5(src='@/assets/curso/tema2/figura21.svg')
        p.mb-5(data-aos="fade-left") Para su implementación en ISO 27017 desde el lado del proveedor, se debe garantizar el proporcionar controles de acceso que permitan al cliente restringir el acceso a los servicios de nube contratados. Y por el lado del cliente, debería asegurarse que el acceso a la información de los servicios de nube puede y es restringido tal y como se especifica en su política de control de accesos, incluyendo la restricción de acceso a los servicios, a las funcionalidades de los servicios, además de los datos del cliente que se mantienen en el servicio.
        .row
          .col-xl-3.col-md-5.col-lg-4.col-9.fondo18.mb-5(data-aos="slide-right")
            p.mb-0.text-center.text-white.py-2.text-bold Dominio 6. Cifrado - Criptografía 
        .row.justify-content-center.mb-5.align-items-center
          .col-xl-5.col-md-6.col-sm-8(data-aos="slide-right")
            img(src='@/assets/curso/tema2/imagen6.png')
          .col-xl-7.col-md-8.col-sm-12.mt-3(data-aos="slide-left")
            p Este es un control que busca el uso de herramientas y estándares criptográficos en la protección de la información que es transportada a través de redes, a partir de un análisis de riesgos hecho a los recursos y servicios, en busca de lograr la protección de la integridad, confidencialidad y disponibilidad de la información. Para ello, cuenta con los siguientes controles:
        .titulo-sexto.color-acento-contenido.mb-5.ms-4(data-aos="flip-right")
          h5 Figura 5
          span <i>Controles de cifrado y criptografía</i>
        .row.justify-content-center.align-items-center.mb-5
          .col-xl-8.col-md-10.col-sm-12(data-aos="slide-right")
            img(src='@/assets/curso/tema2/grafica1.svg')
        .row
          .col-xl-3.col-lg-3.col-md-5.col-sm-6.col-9.fondo18.mb-5.ms-4(data-aos="slide-right")
            p.mb-0.text-center.text-white.py-2.text-bold Dominio 7. Seguridad física y ambiental
        p.mb-0 Busca minimizar el riesgo en cuanto a las interferencias y fallas en la prestación de los servicios, mediante la definición de perímetros de seguridad y de áreas a proteger, facilitando la implementación de controles de seguridad y protección de las instalaciones donde se realice procesamiento de información contra accesos físicos no autorizados, tal como se observa en el siguiente recurso didáctico:
            
    .row.correr-ambos.pt-5#menu1
      .col-xl-12.col-12.fondo23.px-5(data-aos="slide-left")
        img(src='@/assets/curso/tema2/imagen7.png')
        a(href="#seguras")
          a.boton3.me-3
        a(href="#equipos")
          a.boton4.me-3
          
        #seguras.pt-5        
        .row.pt-5
          a(href="#menu1")                
            .boton5.me-3
          .col-xl-2.col-lg-2.col-md-3.col-5.fondo24.py-2(data-aos="slide-right")
            p.mb-0.text-center.text-bold 1. Áreas seguras

        .row.correr-ambos.mt-5
          .col-xl-12.fondo25
            .row.justify-content-center.align-items-center
              .col-xl-7.col-11
                p.ms-4.mt-4 El objetivo es definir cuáles son las zonas seguras donde están ubicados los recursos informáticos, para delimitar el acceso físico no autorizado y así lograr disminuir los daños e interferencias a la información en estas zonas.
              .col-xl-4.col-6(data-aos="slide-right")
                img(src='@/assets/curso/tema2/figura15.svg')
        .row.justify-content-center.mt-4
          .col-xl-7.col-md-11.col-sm-11.col-12(data-aos="slide-up")    
            AcordionA(tipo="b" clase-tarjeta="tarjeta fondo26")
              .row(titulo="Perímetro de seguridad física:")
                .col-md-12.mb-4.mb-md-0
                  p Se deberían establecer y utilizar perímetros de seguridad para proteger las áreas que contienen información sensible o crítica.

              .row(titulo="Controles físicos de entrada:")
                .col-md-12.mb-4.mb-md-0
                  p Definidas las áreas seguras, estas deben contar con controles que permitan el acceso solo a las personas autorizadas.

              .row(titulo="Seguridad de oficinas, salas y demás espacios físicos:")
                .col-md-12.mb-4.mb-md-0
                  p Todas las zonas y espacios físicos de la organización deben contar con un sistema de seguridad física.

              .row(titulo="Protección contra las amenazas externas y ambientales: ")
                .col-md-12.mb-4.mb-md-0
                  p Deberían existir controles y políticas que permitan mitigar los daños o riesgos asociados con desastres naturales, accidentes o incidentes que involucren ataques maliciosos.

              .row(titulo="El trabajo en áreas seguras:")
                .col-md-12.mb-4.mb-md-0
                  p Se deberían diseñar y aplicar políticas y procedimientos para el desarrollo de trabajos y actividades en las áreas seguras definidas.

              .row(titulo="Áreas de acceso público para carga y descarga:")
                .col-md-12.mb-4.mb-md-0
                  p Se deberían establecer los controles para los puntos de acceso a la organización, como las áreas de entrega y carga/descarga (entre otros), para evitar el ingreso de personas no autorizadas a las dependencias, aislando estos puntos, en la medida de lo posible, de las instalaciones de procesamiento de información.
          .col-xl-5.col-md-4.col-sm-5.col-8
            img(src='@/assets/curso/tema2/imagen8.jpg')

        #equipos.pt-5 
        .row.pt-5
          .col-xl-12
            a(href="#menu1")                
              .boton6.mt-3.me-3           
            .row
              .col-xl-3.col-lg-4.col-sm-6.col-9.fondo24.py-3.mb-4.col-6(data-aos="slide-right")
                p.mb-0.text-center.text-bold 2. Seguridad de los equipos
            .row.ajustar-izq.fondo46
              .col-xl-12       
                .row.justify-content-center.align-items-center(data-aos="flip-left")
                  .col-xl-7
                    p.ms-5.mt-4 Se deberían establecer las acciones necesarias tendientes a evitar el daño, robo o compromiso de los activos que puedan causar una interrupción o pérdida de servicio.
                  .col-xl-4.col-md-8.col-6
                    img(src='@/assets/curso/tema2/figura16.svg')
    .row.mb-5.my-5
      .col-md-7.mb-5.mb-md-0(data-aos="slide-right")
        LineaTiempoD.color-secundario
          p.text-small.text-maspeq(numero="1" titulo="<p class='text-maspeq' style='font-weight:bold; margin-top: 15px'>Emplazamiento y protección de equipos</p>") Los equipos se deberían emplazar y proteger para reducir los riesgos de las amenazas y peligros ambientales y de oportunidades de acceso no autorizado.
          
          p.text-small.text-maspeq(numero="2" titulo="<p class='text-maspeq' style='font-weight:bold; margin-top: 5px'>Instalaciones de suministro</p>") Deberían establecerse los controles necesarios a fin de garantizar el suministro de energía y servicios requeridos para la operación en caso de que se presenten fallas o cortes en el servicio.
          
          p.text-small.text-maspeq(numero="3" titulo="<p class='text-maspeq' style='font-weight:bold; margin-top: 5px'>Seguridad del cableado</p>") Los cables eléctricos y de telecomunicaciones que transportan datos o apoyan los servicios de información se deberían proteger contra la intercepción, interferencia o posibles daños.

          p.text-small.text-maspeq(numero="4" titulo="<p class='text-maspeq' style='font-weight:bold; margin-top: 5px'>Mantenimiento de los equipos</p>") Los equipos deberían contar con procedimientos y estrategias de mantenimiento adecuado, con el objeto de garantizar su disponibilidad e integridad continua.

          p.text-small.text-maspeq(numero="5" titulo="<p class='text-maspeq' style='font-weight:bold; margin-bottom: 10px; margin-top: 10px'>Salida de activos fuera de las dependencias de la empresa</p>") Deberían existir controles que gestionen la salida de cualquier activo o recurso tecnológico fuera de la organización.
      .col-md-5.mb-5.mb-md-0(data-aos="flip-left")
        img(src='@/assets/curso/tema2/imagen9.jpg')
    .row.justify-content-center.mb-5
      .col-md-5.mb-5.mb-md-0(data-aos="flip-right")
        img(src='@/assets/curso/tema2/imagen10.jpg')
      .col-md-7.mb-5.mb-md-0(data-aos="slide-left")
        LineaTiempoD.color-secundario
          p.text-small.text-maspeq(numero="6" titulo="<p class='text-maspeq' style='font-weight:bold; margin-top: 10px'>Seguridad de los equipos y activos fuera de las instalaciones</p>") Si por requerimientos propios de la organización se requiere el trabajo fuera de la empresa, los equipos y activos utilizados para esta actividad deberían contar con toda la protección.
          
          p.text-small.text-maspeq(numero="7" titulo="<p class='text-maspeq' style='font-weight:bold; margin-top: 10px'>Reutilización o retirada segura de dispositivos de almacenamiento</p>") Si se externaliza el desarrollo de sistemas con terceros, la organización debería contar con las estrategias, políticas y procedimientos para la supervisión y monitoreo de estas actividades en el proveedor.
          
          p.text-small.text-maspeq(numero="8" titulo="<p class='text-maspeq' style='font-weight:bold; margin-top: 12px'>Equipo informático de usuario desatendido</p>") Si en la organización existen empleados, contratistas, proveedores o terceros que utilicen equipos no controlados por la organización, son estos los responsables de garantizar la protección adecuada de dichos recursos.
          
          p.text-small.text-maspeq(numero="9" titulo="<p class='text-maspeq' style='font-weight:bold; margin-top: 12px'>Política de puesto de trabajo despejado y bloqueo de pantalla</p>") Se debería adoptar una política de puesto de trabajo despejado, para documentación en papel y para medios de almacenamiento extraíbles, y una política de monitores sin información, para las instalaciones de procesamiento de información
    .row
      .col-xl-4.col-lg-5.col-11.col-md-7.fondo18.mb-5.ms-4(data-aos="slide-right")
        p.mb-0.text-center.text-white.py-2.text-bold.px-0 Dominio 8. Seguridad en las operaciones
    .row.justify-content-center.mb-5.align-items-center
      .col-xl-5.col-md-6.col-sm-8(data-aos="slide-right")
        img(src='@/assets/curso/tema2/imagen11.png')
      .col-xl-7.col-md-8.col-sm-12(data-aos="fade-left")
        p.mt-3 Se debe controlar la realización, actualización y mantenimiento de los procedimientos de operación de la organización; cuando se presenten cambios o actualizaciones previstos o imprevistos, se debe evaluar cuál es el impacto que esto generará sobre los recursos; de igual manera, se deben asignar los responsables dentro de dichos procesos, a fin de minimizar al máximo su impacto en la operación.
    .titulo-sexto.color-acento-botones.mb-5(data-aos="flip-right")
      h5 Tabla 1.
      span <i>Controles para la seguridad en las operaciones</i>
    .tabla-b.mb-5(data-aos="slide-left")
      table
        tr.fondo27.borde-abajo
          th.borde-tabla 
            h5.mb-0.text-dark.text-center CONTROL DE LA NORMA
          th.borde-tabla
            h5.mb-0.text-dark.text-center OBJETIVO
          th 
            h5.mb-0.text-dark.text-center APLICACIÓN DE CONTROLES
        tr
        tr.borde-abajo.fondo28
          <td rowspan='6' class='borde-tabla fondo28'>Responsabilidades y procedimientos de operación</td>
          <td rowspan='6' class='borde-tabla'> Garantizar siempre la disponibilidad y adecuado funcionamiento de los recursos, evitando el acceso físico no autorizado, las interferencias o daños e interferencias a la información de la organización.</td>
        tr.fondo28.borde-abajo-gris
          td Documentación de procedimientos de operación. Todos los procesos operativos dentro de la organización deben estar debidamente documentados y a disposición cuando sean requeridos.
        tr.fondo28.borde-abajo-gris
          td Gestión de cambios. Cualquier tipo de cambio, actualización o modificación debería contar con una política de control de cambios, para evitar afectaciones en la seguridad o en los procesos de negocio.
        tr.fondo28.borde-abajo-gris
          td Gestión de capacidades. Se debería monitorear el uso de los recursos junto a las proyecciones futuras, en cuanto a requerimientos de capacidad, para garantizar el rendimiento adecuado en los sistemas.
        tr.fondo28.borde-abajo-gris
          td Separación de entornos de desarrollo, prueba y producción. Los tres entornos deberían permanecer separados, para reducir los riesgos de acceso no autorizado o de cambios no autorizados en los sistemas en operación.
        tr.fondo28
          td Seguridad operacional del administrador. Este control extendido en ISO/IEC 27017 indica que se deberían definir, documentar y monitorear procedimientos para las operaciones administrativas de un entorno de computación en la nube.
        tr.borde-abajo.fondo29
          td.borde-tabla Protección contra código malicioso
          td.borde-tabla Proveer de políticas, estrategias y herramientas de protección, a fin de evitar la presencia de <i>malware</i>.
          td Controles contra <i>software</i> malicioso: Deberían de implementarse controles con herramientas que permitan detectar, prevenir y recuperar ante afectaciones ocasionadas por malware y combinar con la concientización adecuada de los usuarios.
        tr.borde-abajo.fondo28
          td.borde-tabla Copias de seguridad
          td.borde-tabla Establecer estrategias que garanticen el respaldo en caso de pérdida o daño de la información.
          td Copias de seguridad de la información. Deberían de establecerse políticas y procedimientos que obliguen a realizar pruebas regulares de las copias de seguridad realizadas al <i>software</i>, los datos y a las imágenes de sistema operativo.
        tr.borde-abajo.fondo29
          <td rowspan='6' class='borde-tabla'>Registro de actividad y supervisión</td>
          <td rowspan='6' class='borde-tabla'>Registrar los eventos provocados por incidentes de seguridad de la información y generar y conservar las evidencias.</td>
        tr.fondo29.borde-abajo-gris
          td Registro y gestión de eventos de actividad: Se deberían revisar periódicamente los registros relacionados con incidentes de seguridad producidos.
        tr.fondo29.borde-abajo-gris
          td Protección de los registros de información. Los registros de incidentes de seguridad deberían ser protegidos contra accesos no autorizados.
        tr.fondo29.borde-abajo-gris
          td Registros de actividad del administrador y los usuarios de los sistemas. Deberían establecerse estrategias y procedimientos que registren las acciones y el resultado de las mismas hechas por todos los usuarios sobre las aplicaciones, para luego revisar y proteger periódicamente.
        tr.fondo29.borde-abajo-gris
          td Sincronización de relojes. Se deberían establecer políticas y procesos de actualización y sincronización única en los relojes de los equipos de la organización.
        tr.fondo29
          td Monitorización de los servicios de nube. Este control extendido en ISO/IEC 27017 indica que el cliente debería disponer de la capacidad de monitorear aspectos específicos de la operación de los servicios de nube que el cliente utiliza.

        tr.borde-abajo.fondo28
          td.borde-tabla Gestión del <i>software</i> que se encuentra en producción
          td.borde-tabla Cuando las aplicaciones y servicios están en producción, se debe garantizar la integridad y disponibilidad de los sistemas operacionales de la organización.
          td Instalación del <i>software</i> en sistemas en producción. Se deberían implementar procedimientos y políticas de control para evitar la instalación de <i>software</i> en aplicaciones y sistemas que se encuentren en producción.
        tr.borde-abajo.fondo29
          <td rowspan='3' class='borde-tabla'>Gestión de la vulnerabilidad técnica</td>
          <td rowspan='3' class='borde-tabla'>Preparar los servicios y activos para evitar la existencia de vulnerabilidades técnicas que puedan ser explotadas, poniendo en riesgo la organización.</td>
        tr.fondo29.borde-abajo-gris
          td Gestión de las vulnerabilidades. Se deberían desarrollar estrategias de análisis de vulnerabilidades sobre los sistemas de información, de manera oportuna y periódica, para evaluar qué tan alta es la exposición y, con este insumo, implementar medidas para mitigar los riesgos.
        tr.fondo29
          td Restricciones en la instalación de <i>software</i>. Se deberían establecer e implementar las políticas y reglas que determinan el proceso de instalación de <i>software</i> por parte de los usuarios.
        tr.borde-abajo.fondo28
          td.borde-tabla Consideraciones de las auditorías a los sistemas informáticos
          td.borde-tabla Disminuir el impacto que podría generar el realizar actividades de auditoría en los sistemas en producción.
          td Controles de auditoría. Se deberían establecer estrategias de coordinación y planificación de las actividades de auditoría cuando estas involucren la verificación de los aplicativos, servicios y sistemas en producción. 
    .row.correr-ambos.my-5
      .col-xl-12.fondo19.px-5  
        .row
          .col-xl-4.col-lg-5.col-md-7.col-sm-8.col-9.fondo18.mb-5.ms-4(data-aos="slide-right")
            p.mb-0.text-center.text-white.py-2.text-bold Dominio 9. Seguridad de las comunicaciones
        .row.justify-content-center.mb-5.align-items-center
          .col-xl-5.col-md-6.col-sm-8(data-aos="slide-right")
            img(src='@/assets/curso/tema2/imagen12.png')
          .col-xl-7.col-md-8.col-sm-12(data-aos="fade-left")
            p.mt-3 Este es un control que busca la protección de la información que es transportada a través de las redes telemáticas, al igual que la infraestructura que la soporta.
            p Cuando existe intercambio con otras organizaciones, deberían establecerse acuerdos y políticas que regulen el intercambio y el cumplimiento de la legislación vigente.
        .titulo-sexto.color-acento-contenido.mb-5.ms-4(data-aos="flip-right")
          h5 Figura 6
          span <i>Controles de la seguridad de las comunicaciones</i>
        .row.justify-content-center
          .col-xl-10.col-md-10(data-aos="slide-left")
            img.mb-5(src='@/assets/curso/tema2/imagen13.svg')
        .row
          .col-xxl-6.col-xl-7.col-lg-5.col-md-7.col-sm-9.col-11.fondo18.mb-3.ms-4(data-aos="zoom-left")
            p.mb-0.text-center.text-white.py-2.text-bold Dominio 10. Adquisición, desarrollo y mantenimiento de sistemas informáticos.
        .row.justify-content-center.align-items-center
          .col-xl-5.col-md-6.col-sm-8(data-aos="slide-right")
            img.mb-3(src='@/assets/curso/tema2/imagen14.png')
          .col-xl-7.col-md-8.col-sm-12(data-aos="slide-left")
            p Este es un dominio que busca el establecimiento de políticas y procesos formales en todas las fases del ciclo de desarrollo de <i>software</i> y en los procesos de adquisición de aplicaciones. Para este objetivo, se requiere:
            ul.lista-ul--color(data-aos="slide-left")
              li 
                i.fas.fa-caret-right
                span Asegurar la inclusión de controles para la validación de datos en los procesos de adquisición y el desarrollo de los sistemas informáticos.
              li
                i.fas.fa-caret-right
                span Definir e implementar las normas y procedimientos que serán aplicados durante el ciclo de vida de los aplicativos informáticos y de la infraestructura de base que los soporta.
              li 
                i.fas.fa-caret-right
                span Definir los métodos para proteger la información sensible o crítica.
              li 
                i.fas.fa-caret-right
                span Deben de establecerse medidas de protección especiales sobre los aplicativos o servicios que soportan la operación de la empresa.    
    p.mb-5 En el siguiente recurso didáctico, se especifican los controles relacionados con el dominio de adquisición, desarrollo y mantenimiento de sistemas informáticos:
    .row.correr-ambos.pt-5#menu2
      .col-xl-12.fondo23.px-5
        .row.fondo30.align-items-center
          .col-xl-3.col-lg-9.col-md-9.col-sm-10.col-10(data-aos="slide-right")
            img.subir(src='@/assets/curso/tema2/imagen15.png')
          .col-xl-3.col-lg-4.col-md-4.col-sm-6.col-6(data-aos="slide-left")
            a(href="#requisitos")
              .boton7.me-3          
          .col-xl-3.col-lg-4.col-md-4.col-sm-6.col-6(data-aos="slide-left")
            a(href="#soporte")
              .boton8.me-3           
          .col-xl-3.col-lg-4.col-md-4.col-sm-6.col-4(data-aos="slide-left")
            a(href="#datos")
              .boton8.me-3         

        #requisitos.pt-5
        .row.pt-5
          a(href="#menu2")         
            .boton6.me-3
          .col-xl-5.col-lg-6.col-10.fondo24.py-2.mt-3(data-aos="slide-left")
            p.mb-0.text-center.text-bold Requisitos de seguridad en los sistemas informáticos

        .row.correr-ambos
          .col-xl-12.fondo25
            .row.justify-content-center.align-items-center
              .col-xl-7.col-11.mt-3(data-aos="flip-left")
                p.ms-4 El objetivo es garantizar que la seguridad de la información sea parte integral de los sistemas de información a través de todo su ciclo de vida, esto también incluye los requisitos para los sistemas de información que proporcionan servicios accesibles mediante redes públicas.
              .col-xl-4.col-6(data-aos="slide-left")
                img(src='@/assets/curso/tema2/figura17.svg')

        .row.justify-content-center.mt-4
          .col-xl-8.col-md-11.col-sm-11(data-aos="slide-right")    
            AcordionA(tipo="b" clase-tarjeta="tarjeta fondo26")
              .row(titulo="Análisis y especificación de los requisitos en materia de seguridad")
                .col-md-12.mb-4.mb-md-0
                  p Al momento de hacer los procesos de especificación de sistemas para la construcción o mantenimiento de las aplicaciones informáticas, se deben incluir los requisitos en materia de seguridad de la información.

              .row(titulo="Seguridad de las comunicaciones en servicios accesibles desde redes públicas")
                .col-md-12.mb-4.mb-md-0
                  p La información que es enviada y recibida a través de redes públicas debería ser protegida, a fin de evitar acciones fraudulentas, daños o modificación no autorizada. 

              .row(titulo="Protección de las transacciones realizadas por redes")
                .col-md-12.mb-4.mb-md-0
                  p La información utilizada en transacciones entre servicios o aplicaciones se debería proteger, para evitar la retransmisión y enrutamiento incorrecto para buscar la alteración, divulgación y/o duplicación no autorizada.
          .col-xl-4.col-md-4.col-sm-5(data-aos="slide-left")
            img(src='@/assets/curso/tema2/imagen16.jpg')

    #soporte.pt-5
    .row.py-5(data-aos="slide-left")
      a(href="#menu2")         
        .boton6.me-3
      .col-xxl-6.col-xl-7.col-lg-8.col-md-11.col-sm-10.col-8.fondo24.py-2(data-aos="slide-right")
        p.mb-0.text-center.text-bold Seguridad en los procesos de desarrollo y soporte de aplicaciones y servicios
    .row.correr-ambos
      .col-xl-12.fondo25
        .row.justify-content-center.align-items-center
          .col-xl-7.col-10(data-aos="zoom-left")
            p.ms-4.text-bold.mt-3 El Objetivo
            p.ms-4 Garantizar la seguridad de la información en los entornos de diseño, desarrollo e implementación de los sistemas de información.
          .col-xl-4.col-6(data-aos="slide-left")
            img(src='@/assets/curso/tema2/figura18.svg')

    .row.mb-5.my-5
      .col-md-7.mb-5.mb-md-0(data-aos="slide-right")
        LineaTiempoD.color-secundario
          p.text-small(numero="1" titulo="Política de desarrollo seguro de <i>software</i>") Deberían adoptarse políticas y estrategias de desarrollo de <i>software</i> seguro.
          
          p.text-small(numero="2" titulo="Procedimientos de control de cambios") En todas las fases del ciclo de vida de desarrollo de <i>software</i>, se deberían implementar procedimientos formales para el control y la gestión de cambios.
          
          p.text-small(numero="3" titulo="Revisión técnica de las aplicaciones") Si se presentan cambios en el sistema operativo de base, las aplicaciones críticas para el negocio se deberían revisar y probar, para garantizar que dichos cambios no hayan producido impactos negativos en la operación o en la seguridad.

          p.text-small(numero="4" titulo="Restricciones a los cambios en los paquetes <i>software</i>") Cuando existan aplicaciones de terceros, se deberían evitar modificaciones, limitándose a cambios estrictamente necesarios. 

          p.text-small(numero="5" titulo="Uso de principios de ingeniería en protección de sistemas") Se deberían aplicar los principios de seguridad en ingeniería a cualquier labor de implementación de sistemas de información.
      .col-md-5.mb-5.mb-md-0(data-aos="slide-left")
        img(src='@/assets/curso/tema2/imagen17.jpg')
    .row.justify-content-center.mb-5
      .col-md-5.mb-5.mb-md-0(data-aos="zoom-right")
        img(src='@/assets/curso/tema2/imagen18.jpg')
      .col-md-7.mb-5.mb-md-0(data-aos="slide-left")
        LineaTiempoD.color-secundario
          p.text-small(numero="6" titulo="Seguridad en entornos de desarrollo") Si en la organización existen áreas de desarrollo, se deberían establecer procesos y políticas tendientes a proteger adecuadamente estas labores e incluir la integración de sistemas en todo el ciclo de vida de desarrollo.
          
          p.text-small(numero="7" titulo="Externalización del desarrollo de <i>software</i>") Todos los equipos que tengan dispositivos de almacenamiento deben ser revisados en busca de información sensible antes de su eliminación o reutilización.
          
          p.text-small(numero="8" titulo="Pruebas de funcionalidad durante el desarrollo") En las etapas de desarrollo y en todo el ciclo de vida, se deben realizar pruebas de funcionalidad en materia de seguridad.
          
          p.text-small(numero="9" titulo="Pruebas de aceptación") Se deberían realizar planes de prueba y criterios de aceptación para la actualización y/o desarrollo de nuevas funcionalidades o sistemas.

    #datos.pt-5
    .row.py-5
      a(href="#menu2")         
        .boton6.me-3
      .col-xl-2.col-lg-3.col-5.fondo24.py-2(data-aos="slide-left")
        p.mb-0.text-center.text-bold Datos de prueba
    img.my-5(data-aos="slide-right")(src='@/assets/curso/tema2/figura19.svg')
    .row
      .col-xl-4.col-lg-5.col-md-7.col-11.fondo18.mb-5.ms-4(data-aos="slide-left")
        p.mb-0.text-center.text-white.py-2.text-bold Dominio 11. Relación con los proveedores
    .row.justify-content-center.mb-5.align-items-center
      .col-xl-5.col-md-6.col-sm-8(data-aos="slide-right")
        img.mb-3(src='@/assets/curso/tema2/imagen19.png')
      .col-xl-7.col-md-8.col-sm-12(data-aos="slide-left")
        p El objetivo es implementar y mantener el nivel apropiado de seguridad de la información y la entrega de los servicios contratados en línea con los acuerdos de entrega de servicios de terceros.
        p La organización debe chequear la implementación de los acuerdos, monitorear su cumplimiento con los estándares y manejar los cambios, para asegurar que los servicios sean entregados para satisfacer todos los requerimientos acordados con terceras personas.
        p Los controles aplicados en el dominio 11, relación con los proveedores, se encuentran descritos en la siguiente tabla:
    .titulo-sexto.color-acento-contenido.mb-5(data-aos="flip-right")
      h5 Tabla 2.
      span <i>Recomendaciones para el cumplimiento de seguridad y cifrado de datos.</i>

    .tabla-b.mb-5(data-aos="slide-left")
      table
        tr.fondo24.borde-abajo
          th.borde-tabla 
            h5.mb-0.text-dark.text-center CONTROL DE LA NORMA
          th.borde-tabla
            h5.mb-0.text-dark.text-center OBJETIVO/CONDICIÓN
          th 
            h5.mb-0.text-dark.text-center APLICACIÓN DE CONTROLES
        tr
        tr.borde-abajo
          <td rowspan='3' class='borde-tabla fondo28'>Seguridad de la información en las relaciones con proveedores</td>
          <td rowspan='3' class='borde-tabla fondo28'>Se deberían proteger los datos e información que por su particularidad requieran ser utilizados por proveedores o terceros con quien se tenga algún tipo de contrato o vínculo.</td>
        tr.fondo28.borde-abajo-gris
          td Política de seguridad de la información para proveedores.<br>Se deberían establecer y firmar acuerdos y políticas de confidencialidad y seguridad que incluyan requisitos de seguridad de la información, con el objetivo de mitigar los riesgos asociados al acceso por parte de proveedores y terceras personas.

        tr.fondo28
          td Tratamiento del riesgo dentro de acuerdos de suministro.<br>Se deberían establecer y acordar los requerimientos de seguridad pertinentes y ajustados a cada proveedor que requiera acceder, procesar, almacenar, comunicar o proporcionar componentes de infraestructura que soportan la información de la organización.

        tr.borde-abajo
          <td rowspan='3' class='borde-tabla fondo29'>Gestión de la prestación del servicio por proveedores</td>
          <td rowspan='3' class='borde-tabla fondo29'>Establecer acuerdos de nivel de seguridad ajustados a cada proveedor que permitan mantener una provisión adecuada y alineada de los servicios con estos acuerdos.</td>
        tr.fondo29.borde-abajo-gris
          td Supervisión y revisión de los servicios prestados por externos. Las organizaciones deberían de establecer rutinas regulares de revisión, monitoreo y auditoría de los servicios ofrecidos por el proveedor.
        tr.fondo29 
          td Gestión de cambios en los servicios prestados por externos. Se deberían establecer las políticas y procedimientos necesarios para la gestión de cambios en los servicios que realizan los proveedores, manteniendo y mejorando las políticas de seguridad de la información, los procedimientos y controles específicos. 
    .row
      .col-xxl-4.col-xl-5.col-lg-5.col-md-7.col-sm-9.col-10.fondo18.mb-5.ms-4(data-aos="slide-left")
        p.mb-0.text-center.text-white.py-2.text-bold Dominio 12. Gestión de incidentes de seguridad
    .row.correr-ambos.mb-5
      .col-xl-12.fondo19.px-5
        .row.justify-content-center.mb-5.align-items-center
          .col-xl-5.col-md-6.col-sm-8(data-aos="slide-right")
            img.mb-3(src='@/assets/curso/tema2/imagen20.png')
          .col-xl-7.col-md-8.col-sm-12(data-aos="zoom-left")
            p Busca garantizar que los incidentes relacionados con la seguridad de la información y las vulnerabilidades que permiten su ejecución sean comunicados de manera oportuna y formal, para que se apliquen las acciones correctivas necesarias y en el tiempo adecuado.
        .titulo-sexto.color-acento-contenido.mb-5.ms-4(data-aos="flip-right")
          h5 Figura 7
          span <i>Controles de la gestión de incidentes de seguridad</i>  
        .row.justify-content-center.mt-5
          .col-xl-10(data-aos="slide-right")
            img(src='@/assets/curso/tema2/grafica2.svg')
    .row.correr-ambos.my-5
      .col-xl-12.fondo19.px-5
        .row
          .col-xxl-6.col-xl-6.col-lg-7.col-md-10.col-sm-12.col-11.fondo18.mb-5.ms-2(data-aos="slide-right")
            p.mb-0.text-center.text-white.py-2.text-bold Dominio 13. Seguridad de la información y la continuidad del negocio
        .row.justify-content-center.mb-5.align-items-center
          .col-xl-5.col-md-6.col-sm-8(data-aos="slide-right")
            img.mb-3(src='@/assets/curso/tema2/imagen21.png')
          .col-xl-7.col-md-8.col-sm-12(data-aos="flip-left")
            p El objetivo es garantizar el cumplimiento de la seguridad de la información durante las fases de activación, desarrollo y puesta en producción o reactivación de un servicio o aplicación posteriormente a una caída o interferencia, para asegurar que los procesos del negocio se pueden restaurar en los plazos requeridos, sin perder la seguridad de la información.
        
        .row.justify-content-center.my-5
          .col-xl-9(data-aos="slide-right")
            img(data-aos="slide-right")(src='@/assets/curso/tema2/grafica3.svg')
        .row.justify-content-center
          .col-lg-6
            ol.lista-ol
              li 
                span.text-bold 1. 
                p.mb-0 La organización debería disponer de las estrategias de seguridad y protección durante situaciones adversas provocadas por una caída, crisis o fallas de los sistemas.

              li 
                span.text-bold 2. 
                p.mb-0 La organización debería establecer, documentar, implementar y mantener los procesos, procedimientos y controles para garantizar el mantenimiento necesario de la seguridad de la información durante situaciones adversas.
          .col-lg-6                
            ol.lista-ol
              li 
                span.text-bold 3. 
                p.mb-0 La organización debería hacer revisiones periódicas a los controles de continuidad de seguridad de la información establecidos, para garantizar su validez y eficacia ante situaciones de desastres.

              li 
                span.text-bold 4. 
                p.mb-0 Se deberían implementar redundancias con tolerancia a fallos, incluyendo otras instalaciones de procesamiento de datos, en correspondencia con los requerimientos y necesidades de disponibilidad.

        .row.mt-5
          .col-xl-3.col-lg-2.col-md-4.col-7.fondo18.ms-4(data-aos="slide-right")
            p.mb-0.text-center.text-white.py-2.text-bold Dominio 14. Cumplimiento
    .row.justify-content-center.mb-5.align-items-center
      .col-xl-5.col-md-6.col-sm-8(data-aos="slide-right")
        img.mb-3(src='@/assets/curso/tema2/imagen22.png')
      .col-xl-7.col-md-8.col-sm-12
        p Las administraciones de los sistemas de información están reguladas por disposiciones legales y contractuales, por lo que cada servicio o recurso debe tener claridad en cuanto a sus requisitos normativos y contractuales a cumplir, a fin de evitar sanciones de cualquier tipo como consecuencia del no cumplimiento.
    p.mb-5 En la siguiente tabla, podrá encontrar, de manera general, los controles aplicados a este dominio.
    .titulo-sexto.color-acento-contenido.mb-5(data-aos="flip-right")
      h5 Tabla 3.
      span <i>Controles de cumplimiento</i>

    .tabla-b.mb-5.situar-tabla
      table
        tr.fondo27.borde-abajo
          th.borde-tabla 
            h5.mb-0.text-dark.text-center CONTROL DE LA NORMA
          th.borde-tabla
            h5.mb-0.text-dark.text-center OBJETIVO/CONDICIÓN
          th 
            h5.mb-0.text-dark.text-center APLICACIÓN DE CONTROLES
        tr
        tr.borde-abajo
          <td rowspan='6' class='borde-tabla fondo28'>Cumplimiento de los requisitos legales y contractuales</td>
          <td rowspan='6' class='borde-tabla fondo28'>No presenta</td>
        tr
          <td class="fondo28 borde-abajo-gris" style="width: 350px;">Identificación de la legislación aplicable. 
            p Se debería identificar, documentar y mantener en constante actualización la información explícita de cada sistema de información, a fin de cumplir con la legislación y normativa de cada servicio o recurso.
          </td>
        tr.fondo28.borde-abajo-gris
          td Derechos de propiedad intelectual.
            p Se deberían establecer políticas de seguridad que obliguen a la utilización de <i>software</i> legal y al respeto por la propiedad intelectual de los fabricantes y proveedores.

        tr.fondo28.borde-abajo-gris
          td Protección de los registros de la organización. 
            p Según los requerimientos legales, contractuales o legislativos, se debe buscar la protección por pérdidas, destrucción, falsificación, accesos y publicaciones no autorizadas de los registros de los sistemas de información.
        tr.fondo28.borde-abajo-gris
          td Protección de datos y privacidad de la información personal. 
            p Según corresponda, se debería garantizar el derecho a la privacidad y protección de los datos personales, de acuerdo con la legislación y el cumplimiento legal requerido.
        tr.fondo28
          td Regulación de los controles criptográficos. 
            p Se deberían utilizar controles de cifrado de datos, en cumplimiento con la legislación, las normativas y los acuerdos establecidos.
        tr.fondo29
          <td rowspan='4' class='borde-tabla'>Revisiones a la seguridad de la información</td>
          <td rowspan='4' class='borde-tabla'>Garantizar que la seguridad de la información se implemente y gestione de acuerdo con las políticas y los procedimientos establecidos por la organización.</td>
        tr.fondo29.borde-abajo-gris
          td Revisión independiente de la seguridad. 
            p Se deberían revisar los objetivos de control, los controles, las políticas, los procesos y procedimientos para la seguridad de la información, de manera regular e independiente, planificada o cuando se presenten cambios significativos en la organización.

        tr.fondo29.borde-abajo-gris
          td Cumplimiento de las políticas y normas establecidas para la seguridad. 
            p Los gerentes deberían revisar periódicamente el cumplimiento de los procedimientos de seguridad dentro de su área de responsabilidad respecto a las políticas, normas y cualquier otro tipo de requisito de seguridad establecido por la organización.

        tr.fondo29
          td Verificación del cumplimiento. 
            p Los sistemas de información se deberían revisar periódicamente para verificar su cumplimiento con las políticas, normas y estrategias de seguridad dispuestas por la organización.

</template>
<script>
import BannerInterno from '../components/BannerInterno.vue'
export default {
  name: 'Tema2',
  components: {
    BannerInterno,
  },
  data: () => ({
    modal1: false,
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
