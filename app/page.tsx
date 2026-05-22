export default function Home() {

  return (
    <main className="bg-black text-white min-h-screen overflow-x-hidden">

      {/* HERO SECTION */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">

        {/* BACKGROUND */}
        <img
          src="/products/tees/flower1.jpg"
          alt=""
          className="absolute inset-0 w-full h-full object-cover opacity-30"
        />

        {/* OVERLAY */}
        <div className="absolute inset-0 bg-black/70" />

        {/* CONTENT */}
        <div className="relative z-10 text-center px-6 max-w-5xl">

          {/* LOGO */}
          <img
            src="/logo.png"
            alt="JainZEra"
            className="w-32 sm:w-40 md:w-72 mx-auto mb-8 object-contain"
          />

          {/* TOP TEXT */}
          <p className="uppercase tracking-[8px] text-gray-300 text-sm md:text-lg mb-8 font-semibold">
            STREETWEAR • GEN-Z • PREMIUM
          </p>

          {/* BRAND NAME */}
          <h1 className="text-6xl md:text-[120px] font-black uppercase leading-tight">

            <span className="text-white">
              Jain
            </span>

            <span className="text-yellow-400 drop-shadow-[0_0_25px_rgba(250,204,21,0.8)]">
              ZEra
            </span>

          </h1>

          {/* TAGLINE */}
          <p className="mt-6 text-3xl md:text-5xl font-bold uppercase tracking-wide leading-snug">
            DRIP THAT SPEAKS LOUDER 🔥
          </p>

          {/* DESCRIPTION */}
          <p className="mt-8 text-gray-200 text-xl md:text-2xl leading-relaxed font-medium">
            Kab tak Sarojini jaoge? 😭
            <br />
            Ab ghar baithe hype bano 😎
          </p>

          {/* BUTTONS */}
          <div className="flex flex-col md:flex-row gap-5 justify-center mt-12">

            {/* INSTAGRAM */}
            <a
              href="https://www.instagram.com/jainzera?igsh=d3g0OWs5ZDV1b2di"
              target="_blank"
              className="border border-white px-10 py-5 uppercase text-lg tracking-widest hover:bg-white hover:text-black transition rounded-2xl font-semibold"
            >
              Shop On Instagram
            </a>

            {/* WHATSAPP */}
            <a
              href="https://wa.me/918358025165?text=Yo%20JainZEra%20🔥%20I%20want%20to%20order%20from%20your%20store.%20Please%20share%20more%20details%20😎"
              target="_blank"
              className="bg-white text-black px-10 py-5 uppercase text-lg tracking-widest hover:bg-gray-300 transition rounded-2xl font-semibold"
            >
              WhatsApp Order
            </a>

          </div>

          {/* CONTACT */}
          <div className="mt-10 text-gray-300 text-lg md:text-xl space-y-3 font-medium">
            <p>📦 Free Pan India Delivery</p>
            <p>📲 7746947374 | 8358025165</p>
          </div>

        </div>
      </section>

      {/* FUNNY SECTION */}
      <section className="px-6 py-14">

        <div className="max-w-6xl mx-auto bg-zinc-900 border border-white/10 rounded-3xl p-10 text-center">

          <h2 className="text-4xl md:text-6xl font-black uppercase leading-tight">
            AC Me Baith Ke Shopping Karo 😎
          </h2>

          <p className="mt-6 text-gray-200 text-xl md:text-2xl leading-relaxed font-medium">

            Kab tak Sarojini ki bheed me dhakke khaoge? 😭
            <br />
            Ab AC me baith ke drip order karo 😎
            <br />
            JainZEra la raha hai streetwear vibes
            directly tumhare ghar 🚚🔥

          </p>

        </div>
      </section>

      {/* PRODUCTS SECTION */}
      <section className="px-6 md:px-16 py-20">

        <div className="flex items-center justify-between mb-12">

          <h2 className="text-4xl md:text-6xl font-black uppercase">
            Latest Drop
          </h2>

          <p className="text-gray-500 uppercase text-sm tracking-[5px] font-semibold">
            JainZEra
          </p>

        </div>

        {/* PRODUCT GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

          {/* PRODUCT CARD */}
          <a
            href="/products/aesthetic-flower-tees"
            className="block group bg-zinc-900 rounded-3xl overflow-hidden border border-white/10 p-6 hover:border-yellow-400 transition duration-500"
          >

            {/* IMAGE */}
            <img
              src="/products/tees/flower1.jpg"
              alt="Aesthetic Flower Tees"
              className="w-full h-[500px] object-contain bg-black rounded-2xl group-hover:scale-105 transition duration-500"
            />

            {/* DETAILS */}
            <div className="mt-8">

              <h2 className="text-4xl md:text-5xl font-black uppercase leading-tight">
                Aesthetic Flower Tees
              </h2>

              <p className="text-gray-300 mt-3 text-2xl font-semibold">
                ₹399
              </p>

              <p className="mt-5 text-gray-300 text-lg">
                Click to view full product →
              </p>

            </div>

          </a>

        </div>

      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/10 py-10 text-center text-gray-500 text-base">
        © 2026 JainZEra — Built For The Culture 🔥
      </footer>

    </main>
  );
}