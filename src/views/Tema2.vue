<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal
      .titulo-principal__numero
        span 2
      h1 Planeación estratégica
    .row.align-items-center
      .col-lg-8.mb-4.mb-lg-0
        p.mb-0 Con el concepto de cliente y proveedor, de la mano de la empresa en necesario hacer un plan de trabajo que los una a todos en el mismo objetivo, es por eso que se crea la planeación estratégica que #[span(style="background-color: #FFEAE7; padding: 2px;") David (2008) expresa como el “arte y la ciencia de formular, implementar y evaluar decisiones multifuncionales que le permiten a una organización lograr sus objetivos apoyados en el cliente y sus proveedores” (p.5)], debe estar entonces, enfocada a la administración, el marketing, las finanzas y la contabilidad, la producción y las operaciones, las actividades de investigación y desarrollo, así como los sistemas de información, para de esa forma lograr el éxito de la organización.
      .col-lg-4
        figure
          img(src='@/assets/curso/img15.svg', style="width: 450px; margin: auto;")
    .separador-custom
    #t_2_1
    .titulo-segundo
      h2 2.1	Etapas de la planeación estratégica
    p.mb-5 Este proceso consta de 3 etapas:
    .row.justify-content-center
      .col-lg-10
        LineaTiempoD
          .row(numero="1" titulo="Formulación de la estrategia")
            .col-12
              p Incluye desarrollar la misión y la visión, identificar las oportunidades y amenazas externas para la organización, determinar las fortalezas y debilidades internas, establecer los objetivos a largo plazo, generar estrategias alternativas y elegir las estrategias particulares que se habrán de seguir.
              p Entre los temas de la formulación de la estrategia están decidir qué nuevos proyectos emprender, cuales abandonar, la asignación de los recursos, si es recomendable entrar en mercados internacionales, etc.
          .row(numero="2" titulo="Implementación de la estrategia")
            .col-12
              p Requiere que la empresa establezca objetivos anuales, formule políticas, motive a los empleados y destine recursos para llevar a la práctica la estrategia. La implementación de la estrategia implica desarrollar una cultura que la apoye, crear una estructura organizacional eficaz, elaborar presupuestos y utilizar sistemas de información.
          .row(numero="3" titulo="Evaluación de la estrategia")
            .col-12
              p Es la etapa final de la planeación estratégica. Se necesita determinar si las estrategias implementadas están o no funcionando. Todas las estrategias son susceptibles a futuras modificaciones, ya que los factores externos e internos cambian de manera constante.
              p.mb-4 Para determinar la evaluación de la estrategia se deben fundamentar 3 actividades:
              ul.lista-ul--color
                li 
                  i.fas.fa-atom(style="color: #FE7062")
                  | Revizar los factores externos e internos que son la base de las estrategias actuales.
                li 
                  i.fas.fa-atom(style="color: #FE7062")
                  | Medir el desempeño.
                li 
                  i.fas.fa-atom(style="color: #FE7062")
                  | Realizar acciones correctivas.
    .separador-custom
    #t_2_2
    .titulo-segundo
      h2 2.2	Filosofía corporativa estratégica
    p.mb-4 Cada empresa intenta dejar un legado que se articula por su programa de calidad y servicio gracias a su propuesta de valor, estos son los valores corporativos que integran la filosofía de la empresa, esta filosofía marca el camino para no dejar de lado el objetivo de servicio y crecimiento constante. A continuación, se describen los valores corporativos básicos con los que cada empresa debe izar su estandarte:
    TabsA.color-acento-botones.mb-5
      .tarjeta.color-acento-botones--borde.p-4(titulo="Misión empresarial")
        p La misión habla sobre declaraciones perdurables del propósito que distingue a una compañía de otras similares. Es una proclama que describe el motivo o la razón de ser de una organización. También ayuda a identificar el alcance que tienen las operaciones de una empresa en términos del producto y del mercado. Debe estar definida de manera precisa y concreta para guiar al grupo de trabajo en el día a día.
        p.mb-4 Preguntas orientadoras para redactar una misión que deben ser resueltas por los directivos de la empresa:
        .row
          .col-11
            ul.lista-ul--separador
              li 
                i.fas.fa-angle-right(style="color: #FE7062")
                | ¿Por qué hacen lo que hacen?
              li 
                i.fas.fa-angle-right(style="color: #FE7062")
                | ¿Por qué motivo crearon la empresa?
              li 
                i.fas.fa-angle-right(style="color: #FE7062")
                | ¿Qué hace la compañía? (qué venden, producen, etc…)
              li 
                i.fas.fa-angle-right(style="color: #FE7062")
                | ¿Cuál es el perfil de su cliente ideal?
              li 
                i.fas.fa-angle-right(style="color: #FE7062")
                | ¿Qué le diferencia de la competencia?
              li 
                i.fas.fa-angle-right(style="color: #FE7062")
                | ¿Cuál es el propósito social de la empresa?
      .tarjeta.color-acento-botones--borde.p-4(titulo="Visión empresarial")
        p La visión describe una expectativa ideal sobre lo que se espera que la organización sea o alcance en un futuro, debe ser realista, pero puede ser ambiciosa; su función es guiar y motivar al grupo para continuar con el trabajo.
        p Preguntas orientadoras para redactar una visión que deben ser resueltas por los directivos de la empresa:
        .row
          .col-11
            ul.lista-ul--separador
              li 
                i.fas.fa-angle-right(style="color: #FE7062")
                | ¿Cómo ven la empresa en 3 o 5 años?
              li 
                i.fas.fa-angle-right(style="color: #FE7062")
                | ¿Cuáles son los objetivos a corto, mediano y largo plazo?
              li 
                i.fas.fa-angle-right(style="color: #FE7062")
                | ¿Cómo la empresa se adaptará a los desafíos del mercado?
              li 
                i.fas.fa-angle-right(style="color: #FE7062")
                | ¿Cómo se espera que la empresa sea conocida / percibida en el mercado?
              li 
                i.fas.fa-angle-right(style="color: #FE7062")
                | ¿Qué cualidades tendrán los colaboradores que trabajarán en la empresa?
              li 
                i.fas.fa-angle-right(style="color: #FE7062")
                | ¿Qué se desea aportar a la sociedad a futuro?
      .tarjeta.color-acento-botones--borde.p-4(titulo="Principios y valores empresariales")
        p.mb-4 Constituyen un elemento trascendental en la organización que junto a las declaraciones de Misión y Visión forman el marco de dirección.
        .row.justify-content-center.mb-4
          .col-lg-12
            .cajon.color-primario.p-4
              p.mb-0 Los principios y valores se refieren a las creencias y convicciones que influyen decisivamente en el comportamiento de los miembros de una organización. Estos principios orientan y determinan cómo los miembros de una organización perciben e interpretan los problemas y toman decisiones.
        p Los principios y valores se refieren a creencias que tienen una influencia decisiva en el comportamiento de los miembros de una organización; estos principios guían y determinan, cómo los miembros de la organización perciben e interpretan los problemas y toman decisiones.
      .tarjeta.color-acento-botones--borde.p-4(titulo="Políticas empresariales")
        .row.align-items-center
          .col-lg-6
            p Son los medios que permiten alcanzar los objetivos anuales. Las políticas son las guías para la toma de decisiones y para manejar situaciones repetitivas o recurrentes, incluyen directrices, reglas y procedimientos establecidos para apoyar los esfuerzos dirigidos al logro de los objetivos enunciados.  
            p Las políticas se establecen a nivel corporativo para aplicarse a toda la organización. Estas no sólo incluyen normas, conciernen a ella también las responsabilidades que a cada área y miembro le corresponden en el organigrama, así como relaciona la filosofía corporativa, la identidad empresarial y, claro, los valores y procedimientos que orienten la acción de una empresa, tanto de cara al exterior como a nivel interno.
            p Por tanto, no existe un tipo único de política empresarial, se puede decir que el número de organizaciones o entidades activas es grande, aunque siempre apuntan al mismo propósito: consolidar negocios en un mercado específico, dar visibilidad a los clientes y diferenciarse de las marcas competidoras.
          .col-lg-6
            figure
              img(src='@/assets/curso/img16.svg', style="width: 320px; margin: auto;")
      .tarjeta.color-acento-botones--borde.p-4(titulo="Propuesta o promesa de valor")
        .bloque-texto-d.color-secundario.p-4.mb-4
          .bloque-texto-d__texto.mb-2
            i.fas.fa-quote-left
            span.p.text-regular La propuesta de valor es esa mezcla única de productos, servicios, beneficios y valores agregados que la institución le ofrece a sus clientes, los cuales la hacen una oferta diferente en el mercado; además, los estudios de mercado enseñan que el posicionamiento estratégico obliga a tomar una opción frente al mercado potencial (clientes) y la competencia por anticipado, y definir cómo se espera ser y cómo se desea ser percibido por un mercado y algo muy importante es fijar la meta en ¿qué no se quiere ser?
            i.fas.fa-quote-right
          .bloque-texto-d__autor 
            .h5.mb-0 Mejía (2003)
        p Una definición dentro de la propuesta de valor es la muestra de acción de la empresa frente a las demás ofertas del mercado, las cuales pueden ser referentes para elementos positivos o no tan positivos que hagan del comportamiento de la empresa una propuesta favorable para el cliente y para eso se requiere revisar los siguientes elementos desde cada departamento de la empresa.
      .tarjeta.color-acento-botones--borde.p-4(titulo="Elementos a validar")
        .titulo-quinto.color-acento-contenido
          h4 Elementos a validar en una propuesta de valor
        figure
          img(src='@/assets/curso/img17.svg', style="width: 700px; margin: auto;")
    .separador-custom
    #t_2_3
    .titulo-segundo
      h2 2.3	Estrategias organizacionales
    p.mb-4 La estrategia descansa sobre la noción de competitividad, abordar el tema de la estrategia en el campo organizacional se transforma en un asunto longitudinal, en la medida en que se asocia con la vida de la organización, se requiere preparar lo inesperado, la continua revisión de las condiciones iniciales de la organización y la toma de decisiones requieren la observación y la configuración de la realidad desde diferentes ópticas y departamentos de la empresa.
    .row.justify-content-center
      .col-10
        .bloque-texto-d.color-secundario.p-4.mb-4
          .bloque-texto-d__texto.mb-2
            i.fas.fa-quote-left
            span.p.text-regular Las estrategias organizacionales ponen en evidencia la inclinación hacia lograr los objetivos de la organización con los mejores costos y, en la misma dirección, plantea que el éxito de dicha estrategia se asocia al cambio de la situación de la organización respecto a su realidad antes de la puesta en marcha para la determinación de la estrategia (p.155), se requiere identificar los objetivos de acción de la organización pensando en sus potencialidades y cumplimientos.
            i.fas.fa-quote-right
          .bloque-texto-d__autor 
            .h5.mb-0 Noguera (2014)
    p.mb-5 En una misma organización pueden llevarse a cabo estrategias de forma paralela en los diversos niveles y alcances del proyecto; las estrategias organizacionales son:
    AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")
      .row(titulo="Estrategia de nivel corporativo")
        .col-12
          p.mb-4 La estrategia más amplia, se enfoca en decidir el rumbo que debe seguir toda una organización para desarrollar los negocios y las metas que se determinan. Esta estrategia se sub-divide en tres apartados:
          .row.justify-content-center
            .col-11
              ul.lista-ul--color
                li 
                  i.fas.fa-atom(style="color: #FE7062")
                  span #[b Crecimiento: ]
                    |está centrada en multiplicar ampliamente las operaciones por el número de productos o la cantidad de mercados en los que incursiona. Su meta es posicionar a la empresa como una organización con capacidades de venta y distribución mayores.
                li 
                  i.fas.fa-atom(style="color: #FE7062")
                  span #[b Estabilidad: ]
                    |busca mantener de manera constante el mismo número de operaciones, ventas y clientes, pero asegurarlos por medio de un constante control de calidad y cumplimiento de objetivos, logrando así sostener su rendimiento.
                li 
                  i.fas.fa-atom(style="color: #FE7062")
                  span #[b Renovación: ] 
                    |a nivel gerencial, esta estrategia examina todos los procesos que requieran mejoras debido a deficiencias de producción o ventas. Su objetivo es aprender de los errores cometidos para mejorar su desempeño general.
      div(titulo="Estrategia de nivel empresarial")
        .row.align-items-start
          .col-3.col-lg-2
            figure
              img(src='@/assets/curso/img18.svg', style="width: 200px; margin: auto;")
          .col-9.col-lg-10
            p Hablando sobre la competencia en los negocios, este tipo de estrategia ve por la forma en cómo se elegirá manejar a nuestro favor las ventajas competitivas de la empresa. Las estrategias se encaminan a determinar la función como ventaja competitiva, si de alguna forma se destaca o se es diferente; o la calidad como ventaja competitiva, preguntándose si realmente el producto resalta por sus sostenidos estándares.
      div(titulo="Estrategias a nivel funcional")
        .row.align-items-start
          .col-3.col-lg-2
            figure
              img(src='@/assets/curso/img19.svg', style="width: 200px; margin: auto;")
          .col-9.col-lg-10
            p Por último, se ubican las estrategias arraigadas en cada nivel estructural de una empresa para alinearlas en un mismo objetivo, estas se conocen como estrategia de nivel funcional. Estas son las estrategias de producción, marketing, financiera, recursos humanos e investigación y desarrollo; qué se va a producir, en qué medida y a qué tiempos; cómo se va a comercializar nuestro producto, qué determinará los costos y nuestros proyectos de financiamiento, cómo se manejará, capacitará y seleccionará a nuestro personal y por último, cuáles son las nuevas técnicas de desarrollo y el uso de tecnologías que podemos implementar en nuestra organización.

</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    mostrarIndicador: true,
  }),
}
</script>

<style lang="sass" scoped></style>
