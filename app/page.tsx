export default function Home() {
  const products = [
    {
      id: 1,
      name: "VOID Oversized Tee",
      price: "₹799",
      image:
        "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=1200",
    },
    {
      id: 2,
      name: "Shadow Cargo",
      price: "₹1499",
      image:
        "https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb?q=80&w=1200",
    },
    {
      id: 3,
      name: "Midnight Hoodie",
      price: "₹1899",
      image:
        "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1200",
    },
  ];

  return (
    <main className="bg-black text-white min-h-screen overflow-x-hidden">
      {/* HERO */}
      <section className="relative h-screen flex items-center justify-center">
        <img
          src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1600"
          className="absolute inset-0 w-full h-full object-cover opacity-40"
          alt=""
        />

        <div className="absolute inset-0 bg-black/60" />

        <div className="relative z-10 text-center px-6">
          {/* LOGO */}
          <img
            src="/logo.png"
            alt="JainZEra Logo"
            className="w-[220px] md:w-[320px] mx-auto"
          />

          <p className="uppercase tracking-[8px] text-sm text-gray-300 mt-6 mb-4">
            Streetwear 2026
          </p>

          <h1 className="text-5xl md:text-7xl font-black uppercase leading-none">
            NOT FOR EVERYONE
          </h1>

          <p className="mt-6 text-gray-300 max-w-xl mx-auto text-lg">
            Premium Quality. Limited Drops.
            <br />
            Built for the new generation.
          </p>

          <a
            href="https://www.instagram.com/jainzera?igsh=d3g0OWs5ZDV1b2di"
            target="_blank"
            className="inline-block mt-8 border border-white px-8 py-4 uppercase tracking-widest text-sm hover:bg-white hover:text-black transition-all duration-300"
          >
            Shop The Drop
          </a>

          {/* CONTACT INFO */}
          <div className="mt-10 space-y-3 text-gray-300">
            <p className="text-lg">
              📦 Free Pan India Delivery
            </p>

            <p>
              📲 WhatsApp Orders:
              <br />
              7746947374
              <br />
              8358025165
            </p>

            <a
              href="https://www.instagram.com/jainzera?igsh=d3g0OWs5ZDV1b2di"
              target="_blank"
              className="inline-block underline hover:text-white"
            >
              @jainzera
            </a>
          </div>
        </div>
      </section>

      {/* FUNNY SECTION */}
      <section className="px-6 md:px-16 py-10">
        <div className="border border-white/10 bg-zinc-900 rounded-3xl p-8 text-center">
          <h2 className="text-3xl md:text-5xl font-black uppercase">
            Kab Tak Sarojini Jaoge? 😭
          </h2>

          <p className="mt-6 text-gray-300 text-lg leading-relaxed">
            Ab lo online Sarojini wali maze ghar se 😎
            <br />
            AC me baith ke shopping kro.
            <br />
            Free Pan India Delivery 🚚
          </p>
        </div>
      </section>

      {/* PRODUCTS */}
      <section className="px-6 md:px-16 py-20">
        <div className="flex items-center justify-between mb-10">
          <h2 className="text-3xl md:text-5xl font-bold uppercase">
            Latest Drop
          </h2>

          <p className="text-gray-400 uppercase text-sm tracking-widest">
            JainZEra
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {products.map((product) => (
            <div
              key={product.id}
              className="group cursor-pointer"
            >
              <div className="overflow-hidden rounded-3xl">
                <img
                  src={product.image}
                  alt={product.name}
                  className="h-[500px] w-full object-cover group-hover:scale-110 transition duration-700"
                />
              </div>

              <div className="mt-5 flex items-center justify-between">
                <div>
                  <h3 className="text-2xl font-semibold uppercase">
                    {product.name}
                  </h3>

                  <p className="text-gray-400 mt-1">
                    {product.price}
                  </p>
                </div>

                <a
                  href="https://wa.me/917746947374"
                  target="_blank"
                  className="border border-white px-5 py-2 text-sm uppercase hover:bg-white hover:text-black transition"
                >
                  Buy
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/10 py-10 text-center text-gray-500 text-sm">
        © 2026 JainZEra — Streetwear Culture
      </footer>
    </main>
  );
}