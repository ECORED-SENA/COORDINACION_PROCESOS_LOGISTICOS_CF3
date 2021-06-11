<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal
      .titulo-principal__numero
        span 4
      h1 Trazabilidad
    p La trazabilidad es el término que define la capacidad de rastrear el movimiento de un determinado ítem o servicio, a través de las diferentes fases de la cadena de suministro, obteniendo y siguiendo la historia de los artículos, identificando sus fases y localizaciones con claridad y precisión.
    p La trazabilidad permite:
    .row.justify-content-center
      .col-lg-5
        ul.lista-ul
          li 
            i.fas.fa-angle-right(style="color: #FE7062")
            | Recopilar, asociar y enlazar información sobre las materias primas, insumos y el registro de procesos de un determinado producto final y sus unidades de despacho.
          li 
            i.fas.fa-angle-right(style="color: #FE7062")
            | Alcanzar mayor confianza en el consumidor al hacer visible los procesos de elaboración, almacenamiento, despacho y distribución.
          li 
            i.fas.fa-angle-right(style="color: #FE7062")
            | Mejorar la planificación de procesos.
          li 
            i.fas.fa-angle-right(style="color: #FE7062")
            | Conocer el rendimiento de los proveedores de materias primas e insumos.
          li 
            i.fas.fa-angle-right(style="color: #FE7062")
            | Se puede realizar en todas las empresas, a todos los niveles de los sectores productivos.
          li 
            i.fas.fa-angle-right(style="color: #FE7062")
            | Promueve la seguridad comercial y la confianza de los consumidores.
          li 
            i.fas.fa-angle-right(style="color: #FE7062")
            | Optimiza la gestión de stock.
          li 
            i.fas.fa-angle-right(style="color: #FE7062")
            | Ayuda para hacer frente a las reclamaciones de los clientes.
          li 
            i.fas.fa-angle-right(style="color: #FE7062")
            | Facilita la localización, inmovilización y retirada efectiva de los productos.
      .col-lg-5
        figure
          img(src='@/assets/curso/img39.svg', style="width: 450px; margin: auto;")
    .separador-custom
    #t_4_1
    .titulo-segundo
      h2 4.1 Elementos de la trazabilidad
    p.mb-5 La implementación de sistemas de trazabilidad requiere de cuatro principios básicos:
    AcordionA.mb-5(tipo="b" clase-tarjeta="tarjeta tarjeta--azul")
      .row(titulo="Identificación")
        .col-12
          p Para realizar el seguimiento y el rastreo de una entidad, a ella se la debe identificar de manera inequívoca. El identificador es la clave para seguir su camino a fin de acceder a toda la información disponible y relacionada. Casi siempre, a los artículos comerciales, los cuales han sufrido la misma transformación, es decir, lotes (que pasaron por el mismo proceso de producción) o unidades logísticas (que experimentaron las mismas condiciones de transporte) se les sigue y/o rastrea para verificación en procesos de calidad.
          p Esto puede incluir lotes de materias primas, envoltorios, unidades comerciales y logísticas, etc.
      div(titulo="Captura y registro de datos")
        p La administración de la trazabilidad incluye la predefinición de información para poder registrarla a lo largo de toda la cadena de abastecimiento.
        p Los datos rastreados abarcan elementos variables en el proceso de transformación (dependiendo de la línea de producción, el tiempo de manufactura, etc.). Esta información puede estar directamente relacionada con los identificadores del grupo de producto o lote o conectada con el número de pedido de fabricación, el tiempo o cualquier otra información que permita crear una conexión con los lotes de productos correspondientes.
        p Debe guardarse y archivarse de manera tal que siempre esté disponible si se la solicita. Los datos pertinentes pueden estar representados por los portadores de datos, tales como los símbolos de códigos de barras. Ellos permiten que cada parte de la cadena de abastecimiento recoja los datos de manera simultánea, precisa y eficiente en cualquier punto y momento de la cadena de abastecimiento. A través de las bases de datos, la información capturada requerida puede ser registrada y archivada.
      div(titulo="Administración de conexiones")
        p La trazabilidad incluye la administración de las sucesivas conexiones entre los lotes de manufactura y las unidades logísticas a lo largo de toda la cadena de abastecimiento.
        p Dentro de una compañía, el control de todas estas conexiones y una adecuada contabilidad del local hacen posible que se produzcan conexiones entre lo que se ha recibido y lo que se ha producido y/o embarcado (y viceversa).
        p Si uno de los socios comerciales de la cadena no administra estas conexiones en ambos sentidos, hacia adelante o hacia atrás, se produce una ruptura (pérdida) de la trazabilidad.
      div(titulo="Comunicación")
        p La administración de la trazabilidad incluye la asociación de un flujo de información con el flujo físico de mercaderías.
        p Para asegurar la continuidad del flujo de información, se deberán identificar las unidades logísticas o lotes rastreados de la cadena de producción, permitiendo que se aplique a la trazabilidad. La conexión entre el flujo de información y el flujo físico de mercaderías queda asegurada al referirse a los identificadores de ambos tipos de flujos: el número de aviso de despacho, el código seriado de contenedor, el número de embarque, etc.
    .separador-custom
    #t_4_2
    .titulo-segundo
      h2 4.2 Trazabilidad en el servicio al cliente
    p Son aquellos procedimientos establecidos y autosuficientes que permiten conocer el histórico, la ubicación y la trayectoria de un producto o lote de productos a lo largo de la cadena de suministros en un momento dado, a través de herramientas determinadas.
    p.mb-5 Para determinar el proceso, se determinan unos tipos de trazabilidad:
    .row
      .col-md-6.col-lg.mb-5.mb-lg-0
        .tarjeta-avatar
          img(src='@/assets/curso/img40.svg' alt='AvatarTop')
          .tarjeta.color-primario1
            .p-4
              .h2.text-center Trazabilidad ascendente (hacia atrás)
              p Saber cuáles son los productos que son recibidos en la empresa, acotados con alguna información de trazabilidad (lote, fecha de caducidad/consumo preferente) y quienes son los proveedores de esos productos.
      .col-md-6.col-lg.mb-5.mb-lg-0
        .tarjeta-avatar
          img(src='@/assets/curso/img41.svg' alt='AvatarTop')
          .tarjeta.color-primario1
            .p-4
              .h2.text-center Trazabilidad interna o trazabilidad de procesos
              p Trazabilidad dentro de la propia empresa.
      .col-md-6.col-lg.mb-5.mb-lg-0
        .tarjeta-avatar
          img(src='@/assets/curso/img42.svg' alt='AvatarTop')
          .tarjeta.color-primario1
            .p-4
              .h2.text-center Trazabilidad descendente (hacia delante) 
              p Cuáles son los productos expedidos por la empresa, acotados con alguna información de trazabilidad (lote, fecha de caducidad/consumo preferente) y saber sus destinos y clientes.

</template>

<script>
export default {
  name: 'Tema4',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass" scoped></style>
