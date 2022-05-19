<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal.mb-5.color-acento-contenido(data-aos="fade")
      .titulo-principal__numero
        span.text-white 3
      h1 Controles <i>Cloud Security Alliance - Security Guidance for Critical Areas of Focus in Cloud Computing v4.0.</i>
    .row.correr-ambos.my-5.fondo31
      .col-xl-12.px-5
        .row.justify-content-center.mb-5
          .col-xl-7.col-md-11(data-aos="flip-up")
            p Las buenas prácticas que generan seguridad en el escenario de la computación en la nube son uno de los propósitos de <i>cloud</i> Security Alliance (CSA), por esta razón, han elaborado una hoja de ruta práctica y ejecutable, con el fin de que las organizaciones puedan afrontar el reto que significa el almacenaje en la nube.
            p Esto no quiere decir que esta organización (CSA) desee crear una nueva clasificación de referencia, por el contrario, se trata de un modelo en armonía con los ya existentes, especialmente el modelo de trabajo #[b NIST] <i>Special Publication </i>800-145, #[b ISO/IEC] 17788 e #[b ISO/IEC] 17789, solo que hay mayor concentración en aspectos de seguridad requeridos por profesionales en el ramo.
          .col-xl-5.col-md-6.col-10(data-aos="zoom-in")
            img(src="@/assets/curso/tema3/figura1.svg")
        .row.justify-content-center.mb-4
          .col-xl-6.col-md-8.col-10(data-aos="zoom-in")
            img(src="@/assets/curso/tema3/figura2.svg")
          .col-xl-6.col-md-11(data-aos="flip-up")
            p En esta versión 4.0, hay una serie de dominios que deben tenerse en cuenta, estos s            
            ul.lista-ul--color(data-aos="slide-left")
              li 
                i.fas.fa-caret-right
                span Dominio 1 - Conceptos y arquitecturas de la computación en la nube
              li
                i.fas.fa-caret-right
                span Dominio 2 - Gobierno y gestión del riesgo corporativo
              li 
                i.fas.fa-caret-right
                span Dominio 3 - Cuestiones legales, contratos y descubrimiento electrónico
              li 
                i.fas.fa-caret-right
                span Dominio 4 - Cumplimiento y gestión de auditoría  
              li 
                i.fas.fa-caret-right
                span Dominio 5 - Gobierno de la información
              li 
                i.fas.fa-caret-right
                span Dominio 6 - Plano de gestión y continuidad del negocio
              li 
                i.fas.fa-caret-right
                span Dominio 7 - Seguridad de la infraestructura
              li
                i.fas.fa-caret-right
                span Dominio 8 - Virtualización y contenedores
              li 
                i.fas.fa-caret-right
                span Dominio 9 - Respuesta ante incidentes
              li 
                i.fas.fa-caret-right
                span Dominio 10 - Seguridad de aplicaciones
              li 
                i.fas.fa-caret-right
                span Dominio 11 - Seguridad y cifrado de datos
              li 
                i.fas.fa-caret-right
                span Dominio 12 - Gestión de identidades, derechos y accesos
              li 
                i.fas.fa-caret-right
                span Dominio 13 - Seguridad como servicio
    p.my-5(data-aos="flip-up") De manera general, se abordará cada uno de los dominios antes mencionados:
    .row.my-5
      .col-xxl-5.col-xl-6.col-lg-7.col-md-10.fondo18(data-aos="slide-right")
        p.mb-0.text-center.text-white.py-3.text-bold Dominio 1. Conceptos y arquitecturas de la computación en la nube.

    p.mb-5(data-aos="flip-up") En este dominio, se describe y define la computación en la nube, se referencia una terminología básica, y se detalla la lógica general y el marco arquitectónico utilizados en el resto del documento. (ISMS <i>Forum </i>, 2021)
    
    SlyderA.cambio-estilo.fondo32(tipo="b")
      .row.justify-content-center
        .col-xl-7(data-aos="flip-up")
          .h5.mb-5 Definición y computación en la nube.
          p NIST especifica que “la computación en la nube, es un modelo para permitir el acceso de red generalizado, útil y por solicitud de un grupo compartido de recursos informáticos configurables (es decir, redes, servidores, almacenamiento, aplicaciones y servicios), que pueden aprovisionarse y liberarse rápidamente, con un mínimo esfuerzo o interacción del proveedor de servicio”.
          p Para ISO/IEC, es equivalente, pues es un prototipo que permite el acceso de red a un grupo de recursos compartidos, escalables, y elásticos, físicos o virtuales, con suministro de autoservicio y administración bajo demanda.
        .col-xl-5(data-aos="zoom-in")
          figure
            img(src='@/assets/curso/tema3/grafica1.svg')
      .row.justify-content-center
        .col-xl-4
          .h5.mb-5 El modelo lógico de la nube.
          p Para esta sesión NIST -que es el marco utilizado por el CSA-, la computación en la nube se define enmarcada dentro de 5 tipos fundamentales, 3 modelos de servicio y 4 modelos de implementación, los cuales se resumen en la siguiente gráfica: 
        .col-xl-7(data-aos="zoom-in")
          img(src='@/assets/curso/tema3/grafica2.svg')
      .row.justify-content-center
        .col-xl-7(data-aos="flip-up")
          .h5.mb-5 Modelo conceptual, arquitectónico y de referencia de la nube.
          p Las tecnologías actuales y su constante cambio y evolución hacen casi imposible poder definir un modelo arquitectónico y de referencia de la computación en la nube, porque constantemente debería estar siendo actualizado. Sin embargo, podemos puntualizar un modelo simple, donde el <i>software</i> como servicio es soportado por la plataforma como servicio, y esta a su vez es soportada por la infraestructura como servicio, como se explica en la siguiente gráfica
        .col-xl-5
          img(src='@/assets/curso/tema3/grafica3.svg')
      .row.justify-content-center
        .col-xl-7(data-aos="flip-up")
          .h5.mb-5 Alcance, responsabilidades y modelos de seguridad y cumplimiento de la nube.
          p La seguridad en <i>cloud</i> y el cumplimiento incluyen todo lo que un equipo de seguridad es responsable actualmente en los servicios on-premise, solo que para este caso aplica para servicios en la nube. Todos los dominios y controles, según el marco utilizado, son los mismos a los utilizados en los servicios tradicionales, solamente cambia la naturaleza de los riesgos, roles y responsabilidades, así como cambia la implementación de los controles, a menudo dramáticamente. A continuación, se muestra un modelo de proceso de seguridad en la nube simple:
        .col-xl-5(data-aos="zoom-in")
          img(src='@/assets/curso/tema3/grafica4.svg')
    .row.my-5
      .col-xxl-4.col-xl-5.col-lg-6.col-md-8.col-10.fondo18(data-aos="slide-right")
        p.mb-0.text-center.text-white.py-3.text-bold Dominio 2. Gobierno y gestión del riesgo corporativo.
    p.mb-5(data-aos="flip-up") La gobernanza o el gobierno de la gestión del riesgo es un tema muy extenso, por lo que este recurso se centrará en cómo afecta o se focaliza desde la nube, y esto se ve en 4 aspectos fundamentales, así:

    SlyderA.cambio-estilo.fondo32(tipo="b")
      .row.justify-content-center
        .col-xl-4(data-aos="flip-up")
          .h5.mb-5 El gobierno incluye
          p Corresponde con la políticas, procesos y controles internos que determinan cómo funciona la organización. Regula todo lo misional, es decir, la estructura y las políticas internas, hasta el liderazgo de procesos y personas, y cada uno de los mecanismos de gestión para conseguirlo.
        .col-xl-7
          figure
            img(src='@/assets/curso/tema3/imagen1.png')
      .row.justify-content-center
        .col-xl-4(data-aos="flip-up")
          .h5.mb-5 Gestión del riesgo empresarial
          p En este, se tiene en cuenta la gestión respecto al riesgo global que tiene una organización, en concordancia con el gobierno administrativo de esta y su tolerancia al riesgo. Cuando hablamos de riesgo empresarial, se tienen presentes todas las áreas de riesgo (incluidas las relacionadas con la tecnología). 
        .col-xl-7(data-aos="zoom-in")
          img(src='@/assets/curso/tema3/imagen2.png')
      .row.justify-content-center
        .col-xl-4
          .h5.mb-5 Gestión del riesgo de la información
          p Incluye el riesgo presentado en la tecnología de la información. Las organizaciones deben afrontar varios riesgos, como los financieros y físicos, y la información solamente es uno de los múltiples activos que una organización necesita gestionar.
        .col-xl-7
          img(src='@/assets/curso/tema3/imagen3.png')
      .row.justify-content-center
        .col-xl-4(data-aos="flip-up")
          .h5.mb-5 Seguridad de la información
          p Es el conjunto de instrumentos y prácticas para atender la gestión del riesgo de la información. Es importante tener presente que, cuando hablamos de seguridad de la información, no es solamente lo relacionado con la gestión del proceso, pues hay otros actores participantes, como las políticas, los contratos, los seguros, y otros mecanismos que también tienen un rol (incluyendo la seguridad física para la información no digital).
        .col-xl-7(data-aos="zoom-in")
          img(src='@/assets/curso/tema3/imagen4.png')
    .row.correr-ambos.my-5.fondo47
      .col-xl-12.px-5
        .bloque-texto-g.fondo18.p-3.p-sm-4.p-md-5.mt-4(data-aos="slide-right")
          .bloque-texto-g__img1(
            :style="{'background-image': `url(${require('@/assets/curso/tema3/imagen20.png')})`}"
          )
          .bloque-texto-g__texto1.p-4
            p.mb-0 Recuerde que la tarea principal de la seguridad de la información es la de proveer de procesos y controles para proteger la información electrónica y los sistemas que se usan para acceder a ella. Es decir, en una estructura jerárquica simple, la seguridad de la información es una herramienta para la gestión del riesgo de la información, que a su vez es un instrumento para la gestión del riesgo empresarial, y éste se convierte en una herramienta de gobernanza. Los cuatro conceptos están estrechamente relacionados, pero requieren de un enfoque, de procesos, y de herramientas individuales.
        .row.my-5
          .col-xl-6.col-lg-8.col-sm-10.fondo18(data-aos="slide-right")
            p.mb-0.text-center.text-white.py-3.text-bold Dominio 3. Cuestiones legales, contratos y descubrimiento electrónico.
        p.mb-5 En este dominio, se hace referencia a algunas de las dificultades legales más comunes que pueden surgir al mover datos o servicios a la nube y al operar las solicitudes de descubrimiento electrónico emanadas de los procesos judiciales. Este dominio cubre los siguientes aspectos, como puede observarse en el siguiente recurso didáctico:

    .row.mb-5.mt-5
      .col-md-7.mb-5.mb-md-0
        LineaTiempoD.color-secundario
          p.text-small(numero="1" titulo="Auditoría y certificaciones") Las auditorías y certificaciones del proveedor, su rol y afectación en el alcance de auditoría (o evaluación) del cliente.
          
          p.text-small(numero="2" titulo="Característica del servicio") Comprender qué características y servicios de un proveedor de nube están dentro del alcance de qué auditorías y evaluaciones.
          
          p.text-small(numero="3" titulo="Cumplimiento legal") Gestionar el cumplimiento legal y las auditorías a lo largo del tiempo.
          p.text-small(numero="4" titulo="Trabajo con reguladores") Trabajar con reguladores y auditores que pueden carecer de experiencia con la tecnología de computación en la nube.

          p.text-small(numero="5" titulo="Trabajo con proveedores") Trabajar con proveedores que pueden carecer de experiencia en auditoría y cumplimiento legal normativo.
      .col-md-5.mb-md-0(data-aos="zoom-in")
        img(src='@/assets/curso/tema3/imagen5.svg')
    .row.mb-5
      .col-xl-5.col-lg-6.col-md-7.col-11.fondo18(data-aos="slide-right")
        p.mb-0.text-center.text-white.py-3.text-bold Dominio 4. Cumplimiento y gestión de auditoría.
    .row.justify-content-center.mt-4
      .col-xl-7.col-md-11.col-sm-11(data-aos="flip-up")
        p.mb-4 Migrar servicios tradicionales a la nube requiere que las organizaciones estén al tanto legal sobre la entrega, medición y comunicación del cumplimiento legislativo de varias regulaciones en cada jurisdicción (país), este es uno de los muchos desafíos que se debe afrontar, y tanto cliente como proveedores deben entender y valorar las diferencias territoriales y las implicaciones que acarrea su no cumplimiento, entre las que se encuentran:     
        AcordionA(tipo="b" clase-tarjeta="tarjeta fondo26")
          .row(titulo="Implicaciones de uso")
            .col-md-12.mb-4.mb-md-0(data-aos="flip-up")
              p Implicaciones que regulan el uso de un servicio o del proveedor en la nube en particular, en especial, problemas que haya a nivel de fronteras o multi-jurisdiccional, cuando corresponda.

          .row(titulo="Asignación de responsabilidades")
            .col-md-12.mb-4.mb-md-0(data-aos="flip-up")
              p Capacidades del proveedor para demostrar el cumplimiento legal, incluidas la generación de documentos, la producción de evidencias y la obediencia legal de manera oportuna del proceso.

          .row(titulo="Capacidades del proveedor")
            .col-md-12.mb-4.mb-md-0(data-aos="flip-up")
              p Asignación de responsabilidades legales (cumplimiento estricto) entre el proveedor y el cliente; se incluyen los proveedores indirectos (es decir, el proveedor de la nube de tu proveedor de la nube).  Sin olvidar el concepto de herencia de cumplimiento legal, donde un proveedor puede tener partes de su servicio certificadas, posibilitando de esta forma no tenerlas en cuenta en la auditoría del cliente, sin embargo, el cliente sigue siendo responsable del cumplimiento legal de todo lo que se construye sobre el proveedor.

      .col-xl-5.col-md-4.col-sm-5(data-aos="zoom-in")
        img(src='@/assets/curso/tema3/imagen6.jpg')
    p.my-5(data-aos="flip-up") Algunos temas adicionales, específicos de la nube, a los se debe prestar especial atención, se pueden ver a continuación:

    TabsB.color-acento-botones.mb-5(data-aos="zoom-in")
      .py-4.py-md-5(titulo="Asuntos legales" :icono="require('@/assets/curso/tema3/icono1.svg')")
        .row
          .col-md-6.mb-4.mb-md-0(data-aos="flip-up")
            h4 Asuntos legales
            p Ligados al cumplimiento en cuanto a la legislación en cada país, específicamente sobre la protección de datos personales, se refiere; cumplimiento de políticas de seguridad y privacidad de la información.
        
          .col-md-6(data-aos="zoom-in")
            figure
              img(src='@/assets/curso/tema3/imagen7.jpg')
      .py-4.py-md-5(titulo="Acuerdos de servicios en la nube (contratos)" :icono="require('@/assets/curso/tema3/icono2.svg')")
        .row
          .col-md-6(data-aos="flip-up")
            h4 Acuerdos de servicios en la nube (contratos)
            p Corresponde a la obligación que tienen las empresas que adquieren servicios en la nube y ofrecen servicios como <i>PaaS</i> a sus clientes, donde se firman acuerdos de protección de los datos, y también en los contratos de soporte y acuerdos de niveles de servicios SLA firmados entre el proveedor de servicios y el cliente de servicios en la nube.
          .col-md-6.mb-4.mb-md-0(data-aos="zoom-in")
            figure
              img(src='@/assets/curso/tema3/imagen8.jpg')        
      .py-4.py-md-5(titulo="Acceso a documentos electrónicos almacenados en la nube por parte de terceros" :icono="require('@/assets/curso/tema3/icono3.svg')")
        .row
          .col-md-6.mb-4.mb-md-0(data-aos="flip-up")
            h4 Acceso a documentos electrónicos almacenados en la nube por parte de terceros
            p Se debe garantizar que solo las organizaciones permitidas dentro de la legislación de cada país puedan acceder a los datos almacenados en la nube, siempre y cuando, estos datos estén catalogados como permitidos y no restringidos como datos personales, donde las normas y legislación de cada país deben prevalecer.
        
          .col-md-6(data-aos="zoom-in")
            figure
              img(src='@/assets/curso/tema3/imagen9.jpg')
    .row.my-5
      .col-xxl-3.col-xl-4.col-lg-5.col-md-6.col-10.fondo18(data-aos="slide-right")
        p.mb-0.text-center.text-white.py-3.text-bold Dominio 5. Gobierno de la información.

    .row.mb-5.justify-content-center
      .col-xl-5.col-lg-6.col-md-6.col-sm-8.col-10(data-aos="zoom-in")
        img.mb-3.ajustarImg(src='@/assets/curso/tema3/imagen10.jpg')
      .col-xl-7.col-lg-6.col-md-10.col-sm-10.col-12(data-aos="flip-up")
        p La seguridad de la información tiene por objetivo principal la protección de los datos que son utilizados en las aplicaciones y sistemas informáticos de las organizaciones. Al migrar servicios a la nube, se vienen nuevos desafíos debido a la elasticidad y entornos multipropietarios, ya que estos datos pueden ser transferidos a entornos externos o públicos.
        p El gobierno de la información/gobierno del dato se define como la garantía ofrecida respecto al uso adecuado de los datos e información, de acuerdo con las políticas, estándares y estrategias organizacionales, donde también se tienen en cuenta los objetivos de regulación (hasta dónde va el alcance de dicha regulación), los objetivos contractuales (cuál es la meta del contrato establecido) y los de negocio (qué y cómo se permite la transacción entre las partes).
        p En cuanto al gobierno de la información y de los datos, hay una serie de características del uso de la nube y de almacenamiento de información que pueden afectar (ISMS <i>Forum </i>, 2021), entre los cuales están:

    SlyderA.cambio-estilo.fondo32(tipo="b")
      .row.justify-content-center
        .col-xl-4(data-aos="flip-up")
          .h5.mb-5 Multi-propiedad
          p Implica cuidadosamente la seguridad delicada. Cuando se guarda información en nubes públicas, esta se almacena en infraestructuras compartidas con otros propietarios (“<i>tenants</i>”), sobre los que no se puede establecer confianza por completo.
        .col-xl-7(data-aos="zoom-in")
          figure
            img(src='@/assets/curso/tema3/imagen11.png')
      .row.justify-content-center
        .col-xl-4(data-aos="flip-up")
          .h5.mb-5 Responsabilidad compartida de seguridad
          p Al compartir más los entornos, más se comparte la responsabilidad en materia de seguridad. Cada vez es más común que la información pertenezca y sea gestionada por diferentes equipos, incluso de diferentes organizaciones, esto trae consigo una dificultad para diferenciar entre el responsable de los datos y el encargado del tratamiento de los datos.
        .col-xl-7(data-aos="zoom-in")
          img(src='@/assets/curso/tema3/imagen12.png')
      .row.justify-content-center
        .col-xl-4(data-aos="flip-up")
          .h5.mb-5 Propietario (responsable de datos)
          p Es decir, el dueño de la información, no siempre su identidad es clara.   Si un cliente comparte algún dato, podría ocurrir que nos convirtamos en propietarios de esos datos, o que el cliente conserve la propiedad, en función de los requisitos legales o contractuales aplicables, o de las políticas del cliente.  Si se almacena la información de un proveedor de nube pública, se “debería” seguir siendo el propietario de la misma, pero podría variar en función de los contratos con el proveedor.
        .col-xl-7
          img(src='@/assets/curso/tema3/imagen13.png')
      .row.justify-content-center
        .col-xl-4(data-aos="flip-up")
          .h5.mb-5 Custodio (encargado de tratamiento)
          p Se refiere al encargado de gestionar los datos.  Si un cliente facilita sus datos personales y no se tiene el derecho para ser el titular, entonces se es simplemente el custodio.  Esto significa que solo puede utilizarlos en las maneras que se haya autorizado.  Si se utiliza un proveedor de nube pública, este será, del mismo modo, custodio de la información, aunque puede que también el cliente siga ejerciendo ciertas responsabilidades, dependiendo de qué controles implemente o gestione directamente.
        .col-xl-7(data-aos="zoom-in")
          img(src='@/assets/curso/tema3/imagen14.png')
      .row.justify-content-center
        .col-xl-4(data-aos="flip-up")
          .h5.mb-5 Límites jurisdiccionales y soberanía de datos
          p La nube, por definición, permite el acceso generalizado y hace que aumenten las posibilidades de almacenar información en más ubicaciones (jurisdicciones), reduciendo las dificultades para la migración de datos. Algunos proveedores puede que no sean tan transparentes con la ubicación de los datos, mientras en otras situaciones puede que se necesiten controles adicionales para restringir la información a determinadas ubicaciones.
        .col-xl-7
          img(src='@/assets/curso/tema3/imagen15.png')
      .row.justify-content-center
        .col-xl-4(data-aos="flip-up")
          .h5.mb-5 Cumplimiento, regulación y políticas de privacidad
          p Estos aspectos pudieran verse impactados por el uso de la computación en la nube, debido a la combinación de proveedores y jurisdicciones.  Por ejemplo, el contrato con un cliente pudiera no permitir compartir o usar información en un proveedor en la nube, o pudiera exigir la aplicación de ciertos requisitos de seguridad (por ejemplo, el cifrado).
        .col-xl-7(data-aos="zoom-in")
          img(src='@/assets/curso/tema3/imagen16.png')
      .row.justify-content-center
        .col-xl-4(data-aos="flip-up")
          .h5.mb-5 Destrucción y eliminación de datos
          p Se relaciona con las características técnicas de la plataforma en la nube. Surge una pregunta importante: ¿es posible garantizar la destrucción y eliminación de datos de acuerdo con las políticas aplicables?
        .col-xl-7(data-aos="zoom-in")
          img(src='@/assets/curso/tema3/imagen17.png')

    .row.mt-5
      .col-xxl-5.col-xl-5.col-lg-6.col-sm-10.col-11.fondo18(data-aos="slide-right")
        p.mb-0.text-center.text-white.py-3.text-bold Dominio 6. Plano de gestión y continuidad del negocio.

    .row.correr-ambos.fondo39
      .col-xl-12.p-5
        .row.justify-content-center
          .col-xl-7.col-md-10.col-sm12(data-aos="flip-up")
            p El plano de gestión está compuesto por herramientas e interfaces que permiten la administración de la infraestructura, las plataformas y las aplicaciones. Sin embargo, la nube permite desglosar y centralizar la administración de estos recursos. La tecnología ha permitido que en el presente se haga control mediante API y consolas web, lo que antes se llevaba a cabo mediante la configuración del centro de datos con servidores y cables.
            p Es así que el acceso al plano de gestión equivale al acceso sin restricciones al centro de datos, si no hay aplicación de otros controles de seguridad que limiten dicho acceso o trabajen dentro de este.
            p En este dominio, se deben tener en cuenta, entre otras, las siguientes recomendaciones:
          .col-xl-5.col-md-6.col-sm-8(data-aos="zoom-in")
            img(src='@/assets/curso/tema3/imagen18.jpg')
        .titulo-sexto.color-acento-contenido.my-5(data-aos="flip-right")
          h5 Figura 8
          span <i>Recomendaciones de seguridad del plano de gestión</i> 
        .row.justify-content-center
          .col-xl-10
            img(data-aos="zoom-in")(src='@/assets/curso/tema3/grafica5.svg')
            p.my-5.text-center Nota. Adaptada de la Guía de seguridad de áreas críticas para la computación en la nube V4.0
        .row
          .col-xl-4.col-lg-5.col-md-6.col-9.fondo18(data-aos="slide-right")
            p.mb-0.text-center.text-white.py-3.text-bold Dominio 7. Seguridad de la infraestructura 
        .row.justify-content-center.my-5
          .col-xl-6.col-md-6.col-sm-8
            img.mb-3(src='@/assets/curso/tema3/imagen19.jpg')
          .col-xl-6.col-md-10.col-sm-12
            p.mb-3 La seguridad en la nube es un factor diferencial y clave, este involucra las redes de datos, de telecomunicaciones y de servidores sobre las cuales se construyen las nubes.
            p.fondo35.p-5 Comprende las capas más inferiores de la seguridad, incluyendo desde las instalaciones físicas hasta la configuración e implementación de los componentes de la infraestructura sobre la cual está construida la nube; además de tener presente la seguridad de computación (carga de trabajo), las artes y el almacenamiento.
        p.my-5.text-center Para este dominio, se deben tener en cuenta las siguientes recomendaciones:
        .titulo-sexto.color-acento-contenido.mb-5(data-aos="flip-right")
          h5 Figura 9
          span <i>Seguridad de la infraestructura</i> 
        .row.justify-content-center
          .col-xl-10.col-sm-12(data-aos="zoom-in")
            img(src='@/assets/curso/tema3/grafica6.svg')
        p.my-5.text-center Nota. Adaptada de la Guía de seguridad de áreas críticas para la computación en la nube V4.0
        .row.mt-5
          .col-xl-4.col-lg-5.col-md-6.col-9.fondo18(data-aos="slide-right")
            p.mb-0.text-center.text-white.py-3.text-bold Dominio 8. Virtualización y contenedores
    .row.justify-content-center
      .col-xl-8.col-md-10.col-sm-12(data-aos="zoom-in")
        p La virtualización es la tecnología fundamental que permite la computación en la nube; no es solo una herramienta para crear máquinas virtuales, siendo la computación en la nube una tecnología que agrupa una gran cantidad de recursos; es ahí donde la virtualización permite el agrupamiento de estos recursos, que posteriormente serán administrados a través de la orquestación.
        p Los recursos que esencialmente son utilizados para grupos virtualizados son:
        .row.justify-content-start.my-5
          .col-xl-3.boton10.ms-2
            img.organizar-ico(src='@/assets/curso/tema3/computacion.svg')
            p.text-center.text-bold.mt-3.organizar-texto Computación
          .col-xl-3.boton10
            img.organizar-ico(src='@/assets/curso/tema3/red.svg')
            p.text-center.text-bold.organizar-texto.mt-3 Red
          .col-xl-3.boton10
            img.organizar-ico(src='@/assets/curso/tema3/almacenamiento.svg')
            p.text-center.text-bold.organizar-texto.mt-3 Almacenamiento
          .col-xl-3.boton10
            img.organizar-ico(src='@/assets/curso/tema3/contenedores.svg')
            p.text-center.text-bold.organizar-texto.mt-3 Contenedores
      .col-xl-4.col-md-6.col-sm-8(data-aos="zoom-in")
        img(src='@/assets/curso/tema3/figura3.svg')
      p.mt-5 La virtualización agrega dos nuevas capas a los controles de seguridad:
    .row.correr-ambos.fondo39
      .col-xl-12.p-5
        .titulo-sexto.color-acento-contenido.mb-5(data-aos="flip-right")
          h5 Figura 10
          span <i>Capas de control en la virtualización</i>
        .row.justify-content-center
          .col-xl-9.col-md-10.col-sm-10(data-aos="zoom-in")
            img(src='@/assets/curso/tema3/grafica7.svg')
        p.my-5.text-center Nota. Adaptada de la Guía de seguridad de áreas críticas para la computación en la nube V4.0
        p.mb-5 Las siguientes son algunas de las recomendaciones a tener en cuenta para este dominio.
        .titulo-sexto.color-acento-contenido.mb-5(data-aos="flip-right")
          h5 Figura 11
          span <i>Recomendaciones de seguridad en las capas de control</i>
        .row.justify-content-center
          .col-xl-9.col-md-10.col-sm-10(data-aos="zoom-in")
            img(src='@/assets/curso/tema3/grafica8.svg')
        p.my-5.text-center Nota. Adaptada de la Guía de seguridad de áreas críticas para la computación en la nube V4.0  
        .row.mt-5
          .col-xxl-3.col-xl-4.col-lg-5.col-md-6.col-sm-7.col-8.fondo18(data-aos="slide-right")
            p.mb-0.text-center.text-white.py-3.text-bold Dominio 9. Respuesta ante incidentes
    p.mb-5(data-aos="slide-left") Este es un aspecto fundamental en cualquier programa de seguridad. Si bien los controles preventivos ayudan a mitigar en gran parte los riesgos, no siempre son efectivos, por lo que las organizaciones deben contar con un plan de respuesta a incidentes, que les permita establecer cómo actuar frente a un ataque, toda vez que los procesos de la nube son distintos, así que se deben adaptar a esta nueva realidad.
    p.mb-5(data-aos="slide-left")  A continuación, se muestra cómo es el ciclo de vida de respuestas a incidentes, según la recomendación de la norma NIST 800-61 rev2.
    .titulo-sexto.color-acento-contenido.mb-5(data-aos="flip-right")
      h5 Figura 12
      span <i>Ciclo de vida de una respuesta a incidentes</i> 
    .row.justify-content-center
      .col-xl-10.col-sm-12(data-aos="zoom-in")
         img(src='@/assets/curso/tema3/botones2.svg')
    p.my-5 A continuación, encontrará algunas recomendaciones del dominio:
    .row.justify-content-center
      .col-xl-10
        PasosA.color-acento-botones(tipo="n")
          div(data-aos="flip-up")
            p Los SLA (<i>Service Level Agreements</i>) son los aspectos más significativos de la respuesta ante incidentes en entornos en la nube, además de responder a las dudas del cliente frente a lo que tiene que hacer vs. lo que tiene que hacer el proveedor. Situación que puede ser mitigada mediante una clara identificación de roles y responsabilidades de uno y otro.

          div(data-aos="flip-up")
            p Debe haber un canal de comunicación claro entre el cliente y su proveedor, que tenga una atención oportuna en el caso de presentarse un incidente.

          div(data-aos="flip-up")
            p Los estándares abiertos existentes pueden facilitar la comunicación del incidente. 

          div(data-aos="flip-up")
            p El contenido y el formato de datos debe ser claro y comprensible, mismo que el proveedor puede proporcionar para su análisis; así, los datos forenses pueden evaluar la satisfacción de los requisitos legales de la cadena de custodia. 

          div(data-aos="flip-up")
            p Los clientes en la nube deberían adoptar esquemas de monitorización continua y de recursos en la nube, de esta forma, se pueden detectar tempranamente los problemas, sin esperar a la notificación de los centros de datos tradicionales.

          div(data-aos="flip-up")
            p Las aplicaciones basadas en la nube deberían aprovecharse de la automatización y la orquestación para optimizar y acelerar la respuesta, incluyendo la contención y la recuperación. Para cada proveedor de servicios utilizado, la aproximación para detectar y gestionar incidentes que afecten los recursos alojados en dicho proveedor debe ser planificada y descrita en el plan corporativo de respuesta ante incidentes.

          div(data-aos="flip-up")
            p Las salas de cada proveedor de servicios en la nube deben garantizar el soporte de las tareas de gestión de incidentes requeridas para una ejecución efectiva del plan de respuesta ante incidentes corporativos.

          div(data-aos="flip-up")
            p Cada etapa del proceso de gestión del incidente debe estar cubierta, estas son: detección, análisis, contención, erradicación y recuperación.

          div(data-aos="flip-up")
            p Anualmente, deben hacerse pruebas, o cada vez que se produzcan cambios significativos en la arquitectura de la aplicación.

          div(data-aos="flip-up")
            p Los clientes deberán integrar sus procedimientos de prueba con los de sus proveedores (y otros asociados) en la medida de lo posible.
    .row.correr-ambos.fondo31
      .col-xl-12.p-5
        .row
          .col-xxl-3.col-xl-4.col-lg-5.col-md-6.col-sm-8.col-9.fondo18(data-aos="slide-right")
            p.mb-0.text-center.text-white.py-3.text-bold Dominio 10. Seguridad de aplicaciones
        .row.justify-content-center.my-5
          .col-xl-8.col-md-10.col-sm-12(data-aos="flip-up")
            p El dominio correspondiente a la seguridad de la aplicación está destinado a los equipos de desarrollo de <i>software</i> y TI que busquen el desarrollo de aplicaciones seguras en entornos de computación en la nube, en especial, <i>PaaS</i> e <i>PaaS</i> (varias de las técnicas en esta sección son usadas para respaldar aplicaciones de <i>SaaS</i> seguras). (CSA, 2018).
            p En este dominio, usted se centrará en:    
            ul.lista-ul--color(data-aos="slide-left")
              li 
                i.fas.fa-caret-right
                span Cómo difiere la seguridad de la aplicación en la nube.
              li
                i.fas.fa-caret-right
                span Revisar los aspectos básicos de desarrollo de <i>software</i> seguro y cómo estos cambian en la nube. 
              li 
                i.fas.fa-caret-right
                span Aprovechar las capacidades de la nube para desarrollar aplicaciones en la nube más seguras.
          .col-xl-4.col-md-6.col-sm-8.col-8(data-aos="zoom-in")
            img(src='@/assets/curso/tema3/figura4.svg')
        p.mt-5 Las siguientes son algunas de las recomendaciones que propone el dominio:
    AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")
      .row(titulo="Capacidades de seguridad")
        .col-md-7.mb-4.mb-md-0
          p.mt-5.ms-5 Comprender las capacidades de seguridad de sus proveedores de la nube; no solo su línea base, sino las diversas plataformas y servicios.
      
        .col-md-3.col-6
          figure
            img.mb-5.ms-5(src='@/assets/curso/tema3/figura5.svg')
      .row(titulo="Construir la seguridad")
        .col-md-7.mb-4.mb-md-0
          p.mt-5.ms-5 Construir la seguridad desde el proceso de diseño inicial. Las implementaciones en la nube se diseñan muy a menudo desde cero, creando nuevas oportunidades para involucrar la seguridad desde el inicio.
      
        .col-md-3.col-6
          figure
            img.mb-5.ms-5(src='@/assets/curso/tema3/figura6.svg')

      .row(titulo="Automatizar la seguridad")
        .col-md-7.mb-4.mb-md-0
          p.mt-5.ms-5 Incluso si no tiene un SDLC formal, considere pasar a la implantación continua y automatizar la seguridad en el proceso de implantación. 
      
        .col-md-3.col-6
          figure
            img.mb-5.ms-5(src='@/assets/curso/tema3/figura7.svg')

      .row(titulo="Modelos de amenazas")
        .col-md-7.mb-4.mb-md-0
          p.mt-5.ms-5 Los modelos de amenazas, SAST y DAST (con <i>Fuzzing</i>), deberían estar todos integrados. Las pruebas deben ser configuradas para trabajar en el entorno de la nube y también para revisar las preocupaciones específicas de las plataformas de nube, como las credenciales almacenadas en las API. Comprender las nuevas opciones y requisitos de arquitectura en la nube. Actualizar las políticas y estándares de seguridad para soportarlos, y no simplemente intentar forzar los estándares existentes en un modelo informático completamente diferente.
      
        .col-md-3.col-6
          figure
            img.mb-5.ms-5(src='@/assets/curso/tema3/figura8.svg')

      .row(titulo="Integrar pruebas")
        .col-md-7.mb-4.mb-md-0
          p.mt-5.ms-5 Integrar las pruebas de seguridad en el proceso de implementación.
      
        .col-md-3.col-6
          figure
            img.mb-5.ms-5(src='@/assets/curso/tema3/figura9.svg')

      .row(titulo="Automatizar controles")
        .col-md-7.mb-4.mb-md-0
          p.mt-5.ms-5 Utilizar seguridad definida por <i>software</i> para automatizar los controles de seguridad.
      
        .col-md-3.col-6
          figure
            img.mb-5.ms-5(src='@/assets/curso/tema3/figura10.svg')

      .row(titulo="Seguridad basada en eventos")
        .col-md-7.mb-4.mb-md-0
          p.mt-5.ms-5 Utilizar seguridad basada en eventos, cuando esté disponible, para automatizar la detección y solución de problemas de seguridad. Usar diferentes entornos de nube para segregar mejor el acceso al nivel de administración y proporcionar a los desarrolladores la libertad que necesitan para configurar los entornos de desarrollo, mientras que también se bloquean los entornos de producción.
      
        .col-md-3.col-6
          figure
            img.mb-5.ms-5(src='@/assets/curso/tema3/figura11.svg')
    .row.mt-5
      .col-xl-4.col-lg-5.col-md-6.col-sm-8.col-11.fondo18(data-aos="slide-right")
        p.mb-0.text-center.text-white.py-3.text-bold Dominio 11. Seguridad y cifrado de datos
    .row.correr-ambos.fondo40
      .col-xl-12.p-5
        .row.justify-content-center.mb-5
          .col-xl-6.col-md-8.col-sm-10.col-12(data-aos="flip-up")
            p En relación al gobierno de la información, ya se ha visto que lo más importante es la seguridad de los datos, por esta razón, las organizaciones no confían gran volumen de datos y optan por el cifrado, con lo que la seguridad de la información se equipara a la seguridad de los datos; sin embargo, se debe focalizar en los controles relacionados con la protección de los propios datos, donde el cifrado es uno de los controles más importantes, entre otros.
            p Para garantizar el cumplimiento de este dominio, las siguientes son las recomendaciones:
          .col-xl-6.col-md-4.col-sm-8.col-8(data-aos="zoom-in")
            img.ms-5(src='@/assets/curso/tema3/figura12.png')
        .titulo-sexto.color-acento-contenido.mb-5(data-aos="flip-right")
          h5 Figura 13
          span <i>Recomendaciones para el cumplimiento de seguridad y cifrado de datos.</i> 
        .row.justify-content-center
          .col-xl-10.col-11(data-aos="zoom-in")
            img.mb-5(src='@/assets/curso/tema3/grafica9.svg')
        .row.justify-content-end
          .col-xxl-8.col-xl-9.col-lg-10.col-md-11
            p.texto-end Nota. Adaptada de la Guía de seguridad de áreas críticas para la computación en la nube V4.0
    
        .row.mt-5
          .col-xl-5.col-lg-6.col-md-8.col-sm-11.col-11.fondo18(data-aos="slide-right")
            p.mb-0.text-center.text-white.py-3.text-bold Dominio 12. Gestión de identidades, derechos y accesos.
    .row.correr-ambos.fondo40
      .col-xl-12.p-5.pt-0          
        .row.justify-content-center.my-5
          .col-xl-7.col-md-8.col-sm-10.col-12(data-aos="flip-up")
            p Este dominio se centra principalmente en la gestión de identidades y el control de acceso entre una organización y los proveedores de servicio, o bien entre los proveedores y los servicios ofrecidos. 
            p La diferencia principal es la relación entre el proveedor de servicio de nube y el usuario de la nube, incluso si se trata de nubes privadas. La gestión de identidades y el control de acceso no pueden ser gestionados por uno de los actores de manera individual, sino que se requieren relaciones de confianza y delegación de responsabilidades, que son implementadas por diferentes mecanismos técnicos. Normalmente, estos mecanismos técnicos se implementan como una federación de identidades. Esto se complica por el hecho de que muchas organizaciones tienen diferentes (a veces cientos) proveedores de nube, para los que es necesario extender dicha gestión.
            p Gartner define la Gestión de Identidades y Control de Accesos como “la disciplina en seguridad que habilita a las diferentes identidades para acceder a los recursos adecuados, en el momento oportuno y por la razón necesaria”.
            p Las siguientes son las recomendaciones para este dominio:
          .col-xl-5.col-md-6.col-sm-6.col-6(data-aos="zoom-in")
            img(src='@/assets/curso/tema3/figura13.svg')
          
        .titulo-sexto.color-acento-contenido.mb-5(data-aos="flip-right")
          h5 Figura 14
          span <i>Recomendaciones para la gestión de identidades, derechos y accesos</i>
        .row.justify-content-center
          .col-xl-10.col-12(data-aos="zoom-in")
            img(src='@/assets/curso/tema3/grafica10.svg')
        .row.justify-content-end
          .col-xxl-8.col-xl-9.col-lg-10.col-md-11
            p.my-5 Nota. Adaptada de la Guía de seguridad de áreas críticas para la computación en la nube V4.0
        .row.mb-5
          .col-xxl-3.col-xl-4.col-lg-4.col-md-6.col-sm-7.col-12.fondo18(data-aos="slide-right")
            p.mb-0.text-center.text-white.py-3.text-bold Dominio 13. Seguridad como servicio

        .row.justify-content-center.mt-5
          .col-xl-7.mb-5(data-aos="slide-right")
            p Si bien el guía de seguridad de áreas críticas para la computación en la nube v4.0 se centra en la protección de los servicios, plataformas y despliegues hechos en la nube, los proveedores de servicios <i>cloud</i> han desarrollado el servicio SecaaS (Seguridad como servicio), ofreciendo a través de este nuevo modelo capacidades de seguridad como servicio.
            p La seguridad como servicio se corresponde con un abanico amplio de tecnologías, que de forma general deben cumplir con los siguientes criterios: 
            ul.lista-ul--color(data-aos="slide-right")
              li 
                i.fas.fa-caret-right
                span SecaaS incluye seguridad de productos o servicios que se entregan como un servicio en la nube.
              li
                i.fas.fa-caret-right
                span Para ser considerado SecaaS, los servicios deben cumplir con las características esenciales de NIST para la computación en la nube, tal como se definen en el Dominio 1. 
          .col-xl-5.col-10(data-aos="zoom-in")
            img.mb-3(src='@/assets/curso/tema3/figura14.png')
        .row.justify-content-center
          .col-xl-5.col-10(data-aos="zoom-in")
            img.mb-3(src='@/assets/curso/tema3/figura15.png')
          .col-xl-7(data-aos="flip-up")
            p Entre otras, las siguientes son las categorías que incluyen este tipo de servicio:
            ul.lista-ul--color(data-aos="slide-left")
              li 
                i.fas.fa-caret-right
                span Gestión de identidades, derechos y accesos
              li
                i.fas.fa-caret-right
                span Agentes de acceso y seguridad a la nube - <i>cloud</i> Security Gateway
              li
                i.fas.fa-caret-right
                span Seguridad de correo electrónico
              li
                i.fas.fa-caret-right
                span Evaluación de seguridad
              li
                i.fas.fa-caret-right
                span Cortafuegos de aplicaciones web
              li
                i.fas.fa-caret-right
                span Detección y prevención de intrusiones (IDS/IPS)
              li
                i.fas.fa-caret-right
                span Gestión de eventos y seguridad SIEM
              li
                i.fas.fa-caret-right
                span Cifrado y gestión de claves  
              li
                i.fas.fa-caret-right
                span Planes de recuperación de desastres y continuidad del negocio
              li
                i.fas.fa-caret-right
                span Administración de la seguridad
        p.mb-5 Las siguientes son las recomendaciones a tener en cuenta para este dominio.
        .titulo-sexto.color-acento-contenido.mb-5(data-aos="flip-right")
          h5 Figura 15
          span <i>Recomendaciones para la seguridad como servicio</i>
        .row.justify-content-center
          .col-xl-8(data-aos="zoom-in")
            img(src='@/assets/curso/tema3/grafica11.svg')
        p.mt-5.text-center Nota. Adaptada de la Guía de seguridad de áreas críticas para la computación en la nube V4.0





</template>
<script>
import BannerInterno from '../components/BannerInterno.vue'
export default {
  name: 'Tema3',
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
