import Link from "next/link";
import Image from "next/image";

export default function NosotrosPage() {
    return (
        <div className="min-h-screen bg-[rgb(31,31,31)] text-zinc-900 pt-32 px-6">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div>
                        <h1 className="text-5xl font-extrabold mb-8 italic text-white">
                            Sobre <span className="text-[rgb(217,61,47)]">Nosotros</span>
                        </h1>
                        <div className="h-1 w-20 bg-[rgb(217,61,47)] mb-8"></div>
                        <p className="text-zinc-300 text-xl leading-relaxed mb-12">
                            En un mundo donde la tecnología abre puertas a nuevas oportunidades, muchas personas aún encuentran barreras para acceder a ella. Fue a partir de esta realidad que en 2022 nació <span className="text-white font-bold text-2xl">P<span className="text-[rgb(217,61,47)]">A</span>Y&PL<span className="text-[rgb(217,61,47)]">A</span>Y</span>, una empresa ecuatoriana con una misión clara: hacer que la tecnología y el financiamiento sean accesibles para todos.
                            <br /><br />
                            Después de la pandemia, entendimos que estar conectado ya no es un lujo, sino una necesidad. Sin embargo, muchas personas no cuentan con historial crediticio o acceso a la banca tradicional. Por eso creamos modelos de financiamiento flexibles e innovadores, pensados para adaptarse a la realidad de cada cliente.
                            <br /><br />
                            En <span className="text-white font-bold text-2xl">P<span className="text-[rgb(217,61,47)]">A</span>Y&PL<span className="text-[rgb(217,61,47)]">A</span>Y</span> creemos que un teléfono inteligente puede ser más que un dispositivo: puede ser una herramienta para estudiar, trabajar, emprender y mantenerse conectado con el mundo.
                            <br /><br />
                            Nuestro compromiso es seguir desarrollando soluciones tecnológicas que reduzcan las brechas de acceso y generen nuevas oportunidades, impulsando la inclusión financiera y el crecimiento de nuestras comunidades.
                        </p>
                        <Link
                            href="/servicios"
                            className="bg-[rgb(217,61,47)] hover:opacity-90 text-white px-10 py-4 rounded-full font-bold text-lg transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5 inline-block"
                        >
                            Nuestros Servicios
                        </Link>
                    </div>
                    <div className="relative flex justify-center lg:justify-end">
                        <div className="relative w-full max-w-lg aspect-square">
                            <Image
                                src="/image/PayPlaysito.png"
                                alt="Nosotros"
                                fill
                                className="object-contain drop-shadow-2xl transition hover:scale-105 duration-500"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
