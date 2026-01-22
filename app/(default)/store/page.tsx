import Image from "next/image";
import Link from "next/link";
import { products } from "@/data/products";
import PageIllustration from "@/components/page-illustration";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function StorePage() {
  return (
    <>
      <PageIllustration />
      <section className="relative">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="py-12 md:py-20">
            {/* Section header */}
            <div className="pb-12 text-center md:pb-20">
              <h1 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,var(--color-gray-200),var(--color-indigo-200),var(--color-gray-50),var(--color-indigo-300),var(--color-gray-200))] bg-[length:200%_auto] bg-clip-text pb-5 font-nacelle text-4xl font-semibold text-transparent md:text-5xl">
                Nuestros Kits Solares
              </h1>
              <p className="mx-auto max-w-3xl text-xl text-indigo-200/65">
                Soluciones completas para tu independencia energética.
              </p>
            </div>

            {/* Products grid */}
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {products.map((product) => (
                <Card
                  key={product.id}
                  className="bg-gray-800/50 border-gray-700/50 overflow-hidden flex flex-col"
                >
                  <div className="relative aspect-square overflow-hidden">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover transition-transform duration-300 hover:scale-105"
                    />
                  </div>
                  <CardHeader className="flex-grow">
                    <CardTitle className="text-gray-100 text-xl mb-2">
                      {product.name}
                    </CardTitle>
                    <CardDescription className="text-indigo-200/65">
                      Kit solar de alta eficiencia para sistemas off-grid.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <Link
                        href={`/store/${product.id}`}
                        className="block pt-2 text-xs text-indigo-400 cursor-pointer hover:underline"
                      >
                        Ver todas las especificaciones
                      </Link>
                    </div>
                  </CardContent>
                  <CardFooter className="flex flex-col items-stretch gap-4 border-t border-gray-700/50 pt-6">
                    <div className="text-2xl font-bold text-gray-100 text-center">
                      {product.priceFormatted}
                    </div>
                    <Link
                      href="https://wa.me/573239398511"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn w-full bg-linear-to-t from-indigo-600 to-indigo-500 text-white shadow-[inset_0px_1px_0px_0px_--theme(--color-white/.16)] hover:bg-[length:100%_150%] flex items-center justify-center"
                    >
                      Contactar un asesor
                    </Link>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
