import Logo from "./logo";
import Image from "next/image";

export default function Footer() {
  return (
    <footer>
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        {/* Footer illustration */}
        <div
          className="pointer-events-none absolute bottom-0 left-1/2 -z-10 -translate-x-1/2"
          aria-hidden="true"
        >
          <Image
            className="max-w-none"
            src="/images/footer-illustration.svg"
            width={1076}
            height={378}
            alt="Footer illustration"
          />
        </div>
        <div className="grid grid-cols-2 justify-between gap-12 py-8 sm:grid-rows-[auto_auto] md:grid-cols-2 md:grid-rows-[auto_auto] md:py-12 lg:grid-cols-[repeat(2,minmax(0,140px))_1fr] lg:grid-rows-1 xl:gap-20">
          {/* 1st block */}
          <div className="space-y-2">
            <h3 className="text-sm font-medium text-gray-200">Servicios</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  className="text-indigo-200/65 transition hover:text-indigo-500"
                  href="#0"
                >
                  Diseño e Ingeniería
                </a>
              </li>
              <li>
                <a
                  className="text-indigo-200/65 transition hover:text-indigo-500"
                  href="#0"
                >
                  Instalación Fotovoltaica
                </a>
              </li>
              <li>
                <a
                  className="text-indigo-200/65 transition hover:text-indigo-500"
                  href="#0"
                >
                  Mantenimiento
                </a>
              </li>
              <li>
                <a
                  className="text-indigo-200/65 transition hover:text-indigo-500"
                  href="#0"
                >
                  Consultoría
                </a>
              </li>
            </ul>
          </div>
          {/* 2nd block */}
          <div className="space-y-2">
            <h3 className="text-sm font-medium text-gray-200">Empresa</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  className="text-indigo-200/65 transition hover:text-indigo-500"
                  href="#0"
                >
                  Quiénes Somos
                </a>
              </li>
              <li>
                <a
                  className="text-indigo-200/65 transition hover:text-indigo-500"
                  href="#0"
                >
                  Proyectos
                </a>
              </li>
              <li>
                <a
                  className="text-indigo-200/65 transition hover:text-indigo-500"
                  href="#0"
                >
                  Contacto
                </a>
              </li>
              <li>
                <a
                  className="text-indigo-200/65 transition hover:text-indigo-500"
                  href="#0"
                >
                  Política de Privacidad
                </a>
              </li>
            </ul>
          </div>
          {/* 3rd block (Social & Branding) */}
          <div className="col-span-2 md:col-span-2 lg:col-span-1 lg:text-right">
            <div className="mb-3">
              <Logo />
            </div>
            <div className="text-sm">
              <p className="mb-3 text-indigo-200/65">
                © Eficiencia Solar del Caribe SAS
                <span className="text-gray-700"> · </span>
                <a
                  className="text-indigo-200/65 transition hover:text-indigo-500"
                  href="#0"
                >
                  Todos los derechos reservados
                </a>
              </p>
              {/*social media links */}
              <ul className="inline-flex gap-1">
                <li>
                  <a
                    className="text-indigo-200/65 transition hover:text-indigo-500"
                    href="https://www.facebook.com/Efisolarcaribe/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Facebook"
                  >
                    <Image
                      src="/svgs/icons8-facebook-nuevo.svg"
                      alt="Facebook"
                      width={48}
                      height={48}
                      className="invert"
                    />
                  </a>
                </li>
                <li>
                  <a
                    className="text-indigo-200/65 transition hover:text-indigo-500"
                    href="https://www.instagram.com/eficienciasolarcaribe/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram"
                  >
                    <Image
                      src="/svgs/icons8-instagram.svg"
                      alt="Instagram"
                      width={48}
                      height={48}
                      className="invert"
                    />
                  </a>
                </li>
                <li>
                  <a
                    className="text-indigo-200/65 transition hover:text-indigo-500"
                    href="https://www.youtube.com/channel/UCRxsaTiBFHrxYfBhHxtKoCA"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="YouTube"
                  >
                    <Image
                      src="/svgs/icons8-youtube.svg"
                      alt="YouTube"
                      width={48}
                      height={48}
                      className="invert"
                    />
                  </a>
                </li>
                <li>
                  <a
                    className="text-indigo-200/65 transition hover:text-indigo-500"
                    href="https://www.tiktok.com/@eficienciasolarcaribe"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="TikTok"
                  >
                    <Image
                      src="/svgs/icons8-tik-tok.svg"
                      alt="TikTok"
                      width={48}
                      height={48}
                      className="invert"
                    />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
