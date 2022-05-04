<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    .titulo-principal
      .titulo-principal__numero
        span 1
      h1 El cliente y la planeación estratégica
    p Para iniciar se dará una vista grande de lo que significa el cliente en el proceso de la planeación estratégica tal como se relaciona en el siguiente video:
    figure.my-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/mXn7u_sUp-0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    p.mb-5 Para entender estos conceptos con claridad se debe ajustar el concepto de cliente y proveedor como ejes del funcionamiento del proceso, se evidencia a continuación el cliente como centro y algunas formas de tratarlo:
    TabsB.color-acento-contenido.mb-5
      .py-4.py-md-5(titulo="Definición" :icono="require('@/assets/curso/img1.svg')")
        .row.align-items-center
          .col-lg-6.mb-4.mb-lg-0
            p El cliente constituye el eje principal de cualquier empresa. Un cliente es quien accede a un producto o servicio por medio de una transacción financiera (dinero) u otro medio de pago, habitualmente se determina que la persona que compra o que consume es un cliente desde la logística, sin embargo en temas de mercadotecnia no funciona igual porque el mensaje se diferencia entre el consumidor y el comprador en caso de no ser la misma persona; por ejemplo, un papá compra el juguete que el niño quiere sin tener opción a elección, el cliente es el papá y el niño el consumidor; para los procesos logísticos ambos son clientes, pero en mercadotecnia el papá sería el usuario y el niño el consumidor y según esa distinción se enfocan los esfuerzos comerciales.
            p Entonces la definición de cliente queda abierta para toda aquella persona que compra, adquiere o usa los productos o servicios de una empresa, inclusive si no llega a ser el consumidor final.
          .col-lg-6
            figure
              img(src='@/assets/curso/img5.svg', style="width: 450px; margin: auto;")
      .py-4.py-md-5(titulo="Piense" :icono="require('@/assets/curso/img2.svg')")
        .row.align-items-center
          .col-lg-6.mb-4.mb-lg-0
            figure
              img(src='@/assets/curso/img6.svg', style="width: 450px; margin: auto;")
          .col-lg-6
            p.mb-5 Entendiendo la definición de cliente piense por un momento como ejercicio de análisis y pausa activa lo siguiente:
            p.mb-5 ¿Quién es el cliente de los pañales de bebé? 
            p.mb-5 ¿Ese producto tiene un solo clientes?
            p Luego de eso continúe con los principios para definir un cliente. 
      .py-4.py-md-5(titulo="Principios para definir un cliente" :icono="require('@/assets/curso/img3.svg')")
        .row.align-items-start
          .col-lg-6.mb-4.mb-lg-0
            p.mb-5 Dentro de este gran contexto y para entender mejor uno de los activos más importantes de las empresas se tienen por parte de Albrecht & Beadford (2001) 7 principios que ayudan a definir al cliente:
            ol.lista-ol--cuadro.lista-ol--separador
              li 
                .lista-ol--cuadro__vineta
                  span 1
                | Un cliente es la persona más importante en cualquier negocio.
              li 
                .lista-ol--cuadro__vineta
                  span 2
                | Un cliente no depende de nosotros. Nosotros dependemos de él.
              li 
                .lista-ol--cuadro__vineta
                  span 3
                | Un cliente no es una interrupción de nuestro trabajo. Es un objetivo.
              li 
                .lista-ol--cuadro__vineta
                  span 4
                | Un cliente nos hace un favor cuando llega. No le estamos haciendo un favor atendiéndolo.
              li 
                .lista-ol--cuadro__vineta
                  span 5
                | Un cliente es una parte esencial de nuestro negocio; no es ningún extraño.
              li 
                .lista-ol--cuadro__vineta
                  span 6
                | Un cliente no es sólo dinero en la registradora. Es un ser humano con sentimientos y merece un tratamiento respetuoso.
              li 
                .lista-ol--cuadro__vineta
                  span 7
                | Un cliente merece la atención más comedida que podamos darle. Es el alma de todo negocio.
          .col-lg-6
            figure
              img(src='@/assets/curso/img7.svg', style="width: 400px; margin: auto;")
      .py-4.py-md-5(titulo="Tipos de clientes" :icono="require('@/assets/curso/img4.svg')")
        .row.align-items-center
          .col-lg-6.mb-4.mb-lg-0
            figure
              img(src='@/assets/curso/img8.svg', style="width: 450px; margin: auto;")
          .col-lg-6
            p.mb-5 Dada la importancia del entendimiento del cliente se hace necesario conocerlo y casi que descubrir ¿qué va a querer?, esas proyecciones se hacen con la experiencia y varios años de estudio de las personalidades como lo puedes ver en la siguiente tabla.
            a.anexo.mb-4(:href="obtenerLink('downloads/Anexo1.pdf')" target="_blank")
              .anexo__icono
                img(src="@/assets/template/icono-pdf.svg")
              .anexo__texto
                p #[b Anexo.] Tipos de clientes
    .row.justify-content-center.mb-5
      .col-lg-10
        .cajon.color-primario.p-4.mb-4
          p.mb-0 Por el lado del proveedor se recomienda tener en cuenta lo siguiente:
    TabsB.color-acento-contenido.mb-5
      .py-4.py-md-5(titulo="Tipos de proveedores" :icono="require('@/assets/curso/img9.svg')")
        .row.align-items-center
          .col-lg-4.mb-4.mb-lg-0
            figure
              img(src='@/assets/curso/img13.svg', style="width: 350px; margin: auto;")
          .col-lg-8
            p Los tipos de proveedores dependen mucho del tipo de empresa, pero por lo general son los siguientes dos tipos:
            p #[b Proveedor de bienes:] empresa o persona que se dedica a la elaboración de algún producto, lo cual tiene un coste económico en el mercado. Los proveedores de bienes tienen como característica principal satisfacer una necesidad real del mercado.
            p #[b Proveedor de servicios:] empresa o persona, cuya actividad busca responder las necesidades del cliente, que por su característica principal de servicio es intangible, es decir que no se puede tocar, pero ese servicio está apoyado por bienes tangibles para lograr dicha actividad.
      .py-4.py-md-5(titulo="Selección de proveedores" :icono="require('@/assets/curso/img10.svg')")
        .row.align-items-center
          .col-lg-6.mb-4.mb-lg-0
            p El tema de selección de proveedores es un proceso que está presente en toda organización, debido a que es necesaria la adquisición de bienes y servicios tales como maquinaria, materia prima, servicios de limpieza, etc.; por lo que este proceso debe ser enfocado a la búsqueda de calidad.
            p La clave en la selección de los proveedores de un producto o servicio recae en la importancia de saber qué criterios utilizar para seleccionarlos, ya que se debe tomar en cuenta qué tipo de impacto tendrán los productos o servicios que ofrecen y si este será un impacto positivo con la productividad, calidad y competitividad de la organización misma.
            p En la figura se muestran los criterios recomendados por Castellanos (2015) para la selección de un proveedor.
          .col-lg-6
            figure
              img(src='@/assets/curso/img12.svg', style="width: 600px; margin: auto;")
      .py-4.py-md-5(titulo="Recuerde" :icono="require('@/assets/curso/img11.svg')")
        .row.align-items-center
          .col-lg-4.mb-4.mb-lg-0
            figure
              img(src='@/assets/curso/img14.svg', style="width: 350px; margin: auto;")
          .col-lg-8
            ul.lista-ul--color
              li 
                i.fas.fa-atom
                | Todo tipo de organización requiere de aprovisionarse, y las empresas o personas que suministran los productos o servicios se denominan proveedores.
              li 
                i.fas.fa-atom
                | Se debe realizar un proceso de búsqueda y selección de proveedores de bienes y servicios más adecuados a sus necesidades empresariales.
              li 
                i.fas.fa-atom
                | El propósito es establecer una lista de las empresas que fabrican los productos que se requieren para solicitar la información y luego seleccionar la más adecuada a las necesidades de la empresa.
              li 
                i.fas.fa-atom
                | No es muy recomendable tener a un solo proveedor y hacerle todo el pedido que se necesita.
</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass" scoped></style>
