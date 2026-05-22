export default function Home() {

  return (
    <main className="bg-black text-white min-h-screen overflow-x-hidden">

      {/* HERO SECTION */}
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">

        {/* BACKGROUND */}
        <img
          src="/products/tees/flower1.jpg"
          alt=""
          className="absolute inset-0 w-full h-full object-cover opacity-30"
        />

        {/* OVERLAY */}
        <div className="absolute inset-0 bg-black/70" />

        {/* CONTENT */}
        <div className="relative z-10 text-center px-6 max-w-3xl">

          {/* LOGO */}
          <img
            src="/logo.png"
            alt="JainZEra"
            className="w-44 md:w-60 mx-auto mb-8"
          />

          {/* TOP TEXT */}
          <p className="uppercase tracking-[6px] text-gray-300 text-xs md:text-sm mb-6">
            STREETWEAR • GEN-Z • PREMIUM
          </p>

          {/* MAIN HEADING */}
          <h1 className="text-4xl md:text-7xl font-black uppercase leading-tight">
            DRIP THAT
            <br />
            SPEAKS LOUDER
          </h1>

          {/* DESCRIPTION */}
          <p className="mt-6 text-gray-300 text-base md:text-lg leading-relaxed">
            Kab tak Sarojini jaoge? 😭
            <br />
            Ab ghar baithe hype bano 😎
          </p>

          {/* BUTTONS */}
          <div className="flex flex-col md:flex-row gap-4 justify-center mt-8">

            <a
              href="https://www.instagram.com/jainzera?igsh=d3g0OWs5ZDV1b2di"
              target="_blank"
              className="border border-white px-8 py-4 uppercase text-sm tracking-widest hover:bg-white hover:text-black transition rounded-xl"
            >
              Shop On Instagram
            </a>

            <a
              href="https://wa.me/917746947374"
              target="_blank"
              className="bg-white text-black px-8 py-4 uppercase text-sm tracking-widest hover:bg-gray-300 transition rounded-xl"
            >
              WhatsApp Order
            </a>

          </div>

          {/* CONTACT */}
          <div className="mt-8 text-gray-400 text-sm space-y-2">
            <p>📦 Free Pan India Delivery</p>
            <p>📲 7746947374 | 8358025165</p>
          </div>

        </div>
      </section>

      {/* FUNNY SECTION */}
      <section className="px-6 py-10">

        <div className="max-w-5xl mx-auto bg-zinc-900 border border-white/10 rounded-3xl p-8 text-center">

          <h2 className="text-2xl md:text-5xl font-black uppercase">
            AC Me Baith Ke Shopping Karo 😎
          </h2>

          <p className="mt-5 text-gray-300 text-base md:text-lg leading-relaxed">
            Sarojini wali vibe.
            <br />
            Online wali convenience.
            <br />
            JainZEra wali drip 🔥
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

        {/* PRODUCT CARD */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

          <a
            href="/products/aesthetic-flower-tees"
            className="block group bg-zinc-900 rounded-3xl overflow-hidden border border-white/10 p-6 hover:border-white transition"
          >

            {/* IMAGE */}
            <img
              src="/products/tees/flower1.jpg"
              alt="Aesthetic Flower Tees"
              className="w-full h-[420px] object-contain bg-black rounded-2xl"
            />

            {/* DETAILS */}
            <div className="mt-6">

              <h2 className="text-3xl font-black uppercase">
                Aesthetic Flower Tees
              </h2>

              <p className="text-gray-400 mt-2 text-lg">
                ₹399
              </p>

              <p className="mt-4 text-gray-300">
                Click to view full product →
              </p>

            </div>

          </a>

        </div>

      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/10 py-8 text-center text-gray-500 text-sm">
        © 2026 JainZEra — Built For The Culture
      </footer>

    </main>
  );
}