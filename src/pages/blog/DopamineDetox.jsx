import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

export default function DopamineDetox() {
  return (
    <>
      <Helmet>
        <title>Dopamine Detox Notes | Blog de Sergio Morales</title>
        <meta
          name="description"
          content="Notas del libro Dopamine Detox por Thibaut Meurisse: foco, consistencia e impacto para productividad."
        />
      </Helmet>

      <main className="max-w-3xl mx-auto px-6 pt-6 md:pt-10 pb-20">
        {/* Breadcrumbs */}
        <nav className="mb-6 text-sm text-gray-500 dark:text-gray-400">
          <Link to="/blog" className="hover:underline">← Volver al Blog</Link>
        </nav>

        {/* Encabezado */}
        <header className="mb-10 text-center">
          <h1 className="text-4xl font-bold mb-4">Dopamine Detox Notes</h1>
          <p className="text-gray-500 dark:text-gray-400">
            Publicado el{' '}
            <time dateTime="2025-09-01">
              01 Sep 2025
            </time>
          </p>
        </header>

        {/* Artículo */}
        <article className="prose prose-lg dark:prose-invert max-w-none">
          {/* Mueve tu imagen a /public/images/blog/dopamine-detox/detox.jpg */}
          <img
            src="/images/blog/dopamine-detox/detox.jpg"
            alt="Dopamine Detox cover/illustration"
            className="w-[200px] h-[300px] object-cover mx-auto rounded-xl"
            width="200"
            height="300"
            loading="lazy"
            decoding="async"
          />

          <p>
            Este es el primer libro que leí de principio a fin por mi propia voluntad. Me parece muy buen libro y
            siempre lo recomendaré. A partir de este libro entré en bucle con este autor, Thibaut Meurisse.
          </p>

          <h2 className="text-2xl font-bold mb-4">Notes:</h2>

          <ol>
            <li>We must rewire our brain to focus on the long term by removing highly stimulating apps that “wire your brain for super-fast feedback”.</li>
            <li>Staying away from highly stimulating activities.</li>
            <li>Build habits strong enough not to collapse at the first obstacle.</li>
            <li>Today’s society is designed to hijack your dopamine neurotransmitters.</li>
            <li>It is designed to empty your wallet as effectively and thoroughly as possible.</li>
            <li>You run like a hamster in a wheel; interruptions kill your focus (email, socials, “educational” videos…).</li>
            <li>Highly stimulating activities make your brain demand even more stimulation.</li>
            <li>Tricks your mind plays: (1) “Going back to work is easy”. (2) “I can do it later”. (3) “Excitement ≈ fulfillment”. (4) “Opportunities are limited”.</li>
            <li>Dopamine detox = reduce stimulation to prevent overstimulation and get in the right state to tackle major tasks.</li>
            <li>Detox modes: 48 h completo, 24 h, parcial.</li>
            <li>48 h detox: elimina drogas/alcohol, ejercicio, internet, pelis, música (excepto relax), móvil, redes, azúcar/ultraprocesados y videojuegos.</li>
            <li>Ejemplo Vipassana 10 días: silencio total, sin contacto, sin ejercicio, sin drogas, sin móvil/internet, sin música/lectura/escritura, sin fotos.</li>
            <li>Pregunta clave: si dejara una sola cosa, ¿cuál aumentaría más mi foco y productividad? ¿Qué otra debería evitar?</li>
            <li>Añadir fricción funciona porque somos perezosos por diseño: dejar el móvil en otra habitación ya reduce su uso.</li>
            <li>Paso 1: identifica tus mayores distracciones.</li>
            <li>Paso 2: añade fricción.</li>
            <li>Paso 3: empieza a primera hora.</li>
            <li>Una rutina matinal simple, mantenida en el tiempo, cambia tu vida.</li>
            <li>Reflexiona sobre tus metas: ¿son las correctas? ¿avanzas a diario? ¿seguir así te llevará a ellas?</li>
            <li>Evalúa tu tiempo: ¿de verdad produces? ¿qué deberías dejar? ¿qué priorizar?</li>
            <li>Planifica tu día: claridad, menos distracciones, menos estrés, más control.</li>
            <li>Si hoy solo pudieras completar una tarea, ¿cuál tendría el mayor impacto?</li>
            <li>Si hoy hicieras solo una tarea antes de irte un mes, ¿cuál sería?</li>
            <li>Las tareas más importantes suelen ser las que menos apetece hacer.</li>
            <li>Crea visión a 5–10 años; no será perfecta, pero te orienta.</li>
            <li>Agenda una tarea clave cada mañana.</li>
            <li>Clave de productividad: Focus, Consistency, Impact.</li>
            <li>Evita distracciones y la procrastinación mientras trabajas.</li>
            <li>Focus = mantener concentración sin interrupciones.</li>
            <li>Consistency = trabajar en lo clave cada día/semana/mes/año.</li>
            <li>Impact = identificar tareas de mayor impacto y hacerlas a menudo.</li>
            <li>Productividad = foco consistente en tareas de mayor impacto.</li>
            <li>45 minutos diarios de trabajo intenso superan casi cualquier otra cosa.</li>
            <li>Estar en el mismo sitio a la misma hora cada día ayuda a entrar en flow.</li>
            <li>La inspiración llega al empezar; empieza.</li>
            <li>Flow: hiper-foco con disfrute subyacente.</li>
            <li>Cuanto más relajado, más fácil concentrarse.</li>
            <li>La práctica de trabajar sin distracciones fortalece el foco.</li>
            <li>Bloques de 45 min, descansos de 5–10 min entre bloques.</li>
            <li>Elimina distracciones.</li>
            <li>Trabaja sin interrupciones.</li>
            <li>“Powerful Focus”.</li>
            <li>Decide hora y lugar; usa un disparador para iniciar tu rutina; empieza unos minutos; elimina distracciones; 45 min sin interrupción.</li>
            <li>Lo primero de la mañana importa mucho: una decisión cambia tu día.</li>
            <li>Si no eres cuidadoso, recaerás.</li>
            <li>Recuperar tu foco para tus grandes metas transforma tu vida.</li>
            <li>Protege tu foco con hábitos y sistemas o vivirás a merced de interrupciones.</li>
            <li>Acción inmediata, foco potente, mentalidad estratégica.</li>
            <li>La clave de una vida sana y productiva.</li>
            <li>Libro recomendado: <em>Success is Inevitable</em> (Thibaut Meurisse).</li>
          </ol>
        </article>
      </main>
    </>
  );
}
