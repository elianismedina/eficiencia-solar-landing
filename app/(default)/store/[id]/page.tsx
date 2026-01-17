import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { products } from "@/data/products";
import PageIllustration from "@/components/page-illustration";

export function generateStaticParams() {
  return products.map((product) => ({
    id: product.id,
  }));
}

export default async function ProductPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const product = products.find((p) => p.id === id);

  if (!product) {
    notFound();
  }

  return (
    <>
      <PageIllustration />
      <section className="relative">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="pb-12 pt-32 md:pb-20 md:pt-40">
            <div className="mb-8">
              <Link
                href="/store"
                className="text-indigo-400 hover:text-indigo-300 transition-colors inline-flex items-center"
              >
                <svg
                  className="w-4 h-4 mr-2 fill-current"
                  viewBox="0 0 16 16"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M6.7 14.7l1.4-1.4L3.8 8.7 16 8.7 16 6.7 3.8 6.7 8.1 2.1 6.7 0.7 0 7.7z" />
                </svg>
                Volver a la tienda
              </Link>
            </div>

            <div className="grid gap-12 md:grid-cols-2 items-start">
              {/* Product Image */}
              <div className="relative aspect-square w-full overflow-hidden rounded-xl bg-gray-800/50 border border-gray-700/50">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover"
                  priority
                />
              </div>

              {/* Product Details */}
              <div className="space-y-8">
                <div>
                  <div className="mb-2 text-sm font-medium text-indigo-400 uppercase tracking-wider">
                    SKU: {product.sku}
                  </div>
                  <h1 className="text-3xl font-bold text-gray-100 md:text-4xl mb-4">
                    {product.name}
                  </h1>
                  <div className="text-3xl font-bold text-indigo-400">
                    {product.priceFormatted}
                  </div>
                  <div className="mt-2 text-sm text-gray-400">
                    IVA Incluido
                  </div>
                </div>

                <div className="border-t border-gray-700/50 pt-8">
                  <h2 className="text-xl font-semibold text-gray-200 mb-4">
                    Especificaciones del Sistema
                  </h2>
                  <div className="space-y-4">
                    {Object.entries(product.specifications).map(([key, value]) => (
                      <div
                        key={key}
                        className="flex flex-col sm:flex-row sm:justify-between py-2 border-b border-gray-800 last:border-0"
                      >
                        <span className="text-gray-400 font-medium mb-1 sm:mb-0">
                          {key}
                        </span>
                        <span className="text-gray-200 text-right">
                          {value}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-6">
                  <Link
                    href="https://wa.me/573239398511"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn w-full bg-linear-to-t from-indigo-600 to-indigo-500 text-white shadow-[inset_0px_1px_0px_0px_--theme(--color-white/.16)] hover:bg-[length:100%_150%] text-lg py-3 flex items-center justify-center"
                  >
                    Contactar un asesor
                  </Link>
                  <p className="mt-4 text-center text-sm text-gray-400">
                    ¿Tienes dudas sobre este kit? Nuestros expertos te ayudan.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}