import { Metadata } from "next";
import PageIllustration from "@/components/page-illustration";

export const metadata: Metadata = {
  title: "Contacto - Eficiencia Solar",
  description: "Ponte en contacto con Eficiencia Solar del Caribe. Estamos aquí para ayudarte con tus proyectos de energía solar.",
};

export default function Contacto() {
  return (
    <>
      <PageIllustration />
      <section className="relative">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="pb-12 pt-32 md:pb-20 md:pt-40">
            {/* Section header */}
            <div className="mx-auto max-w-3xl pb-12 text-center md:pb-16">
              <h1 className="animate-gradient bg-[linear-gradient(to_right,var(--color-gray-200),var(--color-yellow-200),var(--color-gray-50),var(--color-yellow-300),var(--color-gray-200))] bg-size-[200%_auto] bg-clip-text pb-5 font-nacelle text-4xl font-semibold text-transparent md:text-5xl">
                Contáctanos
              </h1>
              <p className="text-xl text-yellow-200/65">
                ¿Tienes alguna pregunta o estás interesado en iniciar un proyecto solar? Nuestro equipo está listo para asesorarte.
              </p>
            </div>

            {/* Contact information */}
            <div className="mx-auto max-w-sm grid gap-8 sm:max-w-none sm:grid-cols-2">
              {/* Email */}
              <div className="flex flex-col items-center p-6 rounded-2xl bg-gray-900/50 border border-gray-800 shadow-lg" data-aos="fade-up">
                <div className="mb-4 flex items-center justify-center w-12 h-12 rounded-full bg-yellow-500/10 text-yellow-500">
                  <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-200 mb-1">Correo Electrónico</h3>
                <a href="mailto:contacto@eficienciasolar.com" className="text-yellow-200/65 hover:text-yellow-500 transition-colors">
                  contacto@eficienciasolar.com
                </a>
              </div>

              {/* Phone */}
              <div className="flex flex-col items-center p-6 rounded-2xl bg-gray-900/50 border border-gray-800 shadow-lg" data-aos="fade-up" data-aos-delay="100">
                <div className="mb-4 flex items-center justify-center w-12 h-12 rounded-full bg-yellow-500/10 text-yellow-500">
                  <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                    <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-200 mb-1">Teléfono / WhatsApp</h3>
                <a href="tel:+573126728516" className="text-yellow-200/65 hover:text-yellow-500 transition-colors">
                  +57 312 672 8516
                </a>
              </div>
            </div>

            {/* Simple Contact Form */}
            <div className="mt-16 mx-auto max-w-3xl" data-aos="fade-up" data-aos-delay="200">
              <div className="p-8 rounded-2xl bg-gray-900/50 border border-gray-800 backdrop-blur-sm">
                <form>
                  <div className="grid gap-6 mb-6 md:grid-cols-2">
                    <div>
                      <label htmlFor="first_name" className="block mb-2 text-sm font-medium text-gray-300">Nombre</label>
                      <input type="text" id="first_name" className="form-input w-full" placeholder="Tu nombre" required />
                    </div>
                    <div>
                      <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-300">Email</label>
                      <input type="email" id="email" className="form-input w-full" placeholder="tu@email.com" required />
                    </div>
                  </div>
                  <div className="mb-6">
                    <label htmlFor="subject" className="block mb-2 text-sm font-medium text-gray-300">Asunto</label>
                    <input type="text" id="subject" className="form-input w-full" placeholder="¿En qué podemos ayudarte?" required />
                  </div>
                  <div className="mb-6">
                    <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-300">Mensaje</label>
                    <textarea id="message" rows={4} className="form-textarea w-full" placeholder="Escribe tu mensaje aquí..." required></textarea>
                  </div>
                  <button type="submit" className="btn w-full bg-linear-to-t from-yellow-600 to-yellow-500 bg-size-[100%_100%] bg-bottom text-white shadow-[inset_0px_1px_0px_0px_--theme(--color-white/.16)] hover:bg-size-[100%_150%]">
                    Enviar Mensaje
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
