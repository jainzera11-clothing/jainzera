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
    <main className="bg-black text-white min-h-screen">

      {/* HERO SECTION */}
      <section className="relative h-[85vh] flex items-center justify-center overflow-hidden">

        {/* BACKGROUND IMAGE */}
        <img
          src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1600"
          alt=""
          className="absolute inset-0 w-full h-full object-cover opacity-30"
        />

        {/* DARK OVERLAY */}
        <div className="absolute inset-0 bg-black/60" />

        {/* HERO CONTENT */}
        <div className="relative z-10 text-center px-6 max-w-3xl">

          {/* LOGO */}
          <img
            src="/logo.png"
            alt="JainZEra"
            className="w-40 md:w-56 mx-auto mb-6"
          />

          {/* SMALL TEXT */}
          <p className="uppercase tracking-[6px] text-gray-300 text-xs md:text-sm mb-5">
            STREETWEAR • GEN-Z • PREMIUM
          </p>

          {/* HEADING */}
          <h1 className="text-4xl md:text-7xl font-black uppercase leading-tight">
            DRIP THAT
            <br />
            SPEAKS LOUDER
          </h1>

          {/* DESCRIPTION */}
          <p className="mt-6 text-gray-300 text-base md:text-lg leading-relaxed">
            Premium streetwear for the generation
            that refuses to look basic.
          </p>

          {/* BUTTONS */}
          <div className="flex flex-col md:flex-row gap-4 justify-center mt-8">

            {/* INSTAGRAM BUTTON */}
            <a
              href="https://www.instagram.com/jainzera?igsh=d3g0OWs5ZDV1b2di"
              target="_blank"
              className="border border-white px-8 py-4 uppercase text-sm tracking-widest hover:bg-white hover:text-black transition"
            >
              Shop On Instagram
            </a>

            {/* WHATSAPP BUTTON */}
            <a
              href="https://wa.me/917746947374"
              target="_blank"
              className="bg-white text-black px-8 py-4 uppercase text-sm tracking-widest hover:bg-gray-300 transition"
            >
              WhatsApp Order
            </a>

          </div>

          {/* CONTACT INFO */}
          <div className="mt-8 text-gray-400 text-sm space-y-2">
            <p>📦 Free Pan India Delivery</p>
            <p>📲 7746947374 | 8358025165</p>
          </div>

        </div>
      </section>

      {/* FUNNY BANNER */}
      <section className="px-6 py-10">

        <div className="max-w-5xl mx-auto bg-zinc-900 border border-white/10 rounded-3xl p-8 text-center">

          <h2 className="text-2xl md:text-4xl font-black uppercase">
            Kab Tak Sarojini Jaoge? 😭
          </h2>

          <p className="mt-5 text-gray-300 text-base md:text-lg leading-relaxed">
            Ab lo online Sarojini wali maze ghar se 😎
            <br />
            AC me baith ke shopping kro.
            <br />
            Free Pan India Delivery 🚚
          </p>

        </div>
      </section>

      {/* PRODUCTS SECTION */}
      <section className="px-6 md:px-14 py-16">

        <div className="flex items-center justify-between mb-10">

          <h2 className="text-3xl md:text-5xl font-black uppercase">
            Latest Drop
          </h2>

          <p className="text-gray-500 uppercase text-xs tracking-[4px]">
            JainZEra
          </p>

        </div>

        {/* PRODUCT GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          {products.map((product) => (

            <div
              key={product.id}
              className="group"
            >

              {/* IMAGE */}
              <div className="overflow-hidden rounded-3xl bg-zinc-900">

                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-[380px] object-cover group-hover:scale-105 transition duration-500"
                />

              </div>

              {/* PRODUCT DETAILS */}
              <div className="mt-4 flex items-center justify-between">

                <div>
                  <h3 className="text-xl font-semibold uppercase">
                    {product.name}
                  </h3>

                  <p className="text-gray-400 mt-1">
                    {product.price}
                  </p>
                </div>

                {/* BUY BUTTON */}
                <a
                  href="https://wa.me/917746947374"
                  target="_blank"
                  className="border border-white px-4 py-2 text-xs uppercase hover:bg-white hover:text-black transition"
                >
                  Buy
                </a>

              </div>

            </div>

          ))}

        </div>

      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/10 py-8 text-center text-gray-500 text-sm">
        © 2026 JainZEra — Built For The Culture
      </footer>

    </main>
  );
}