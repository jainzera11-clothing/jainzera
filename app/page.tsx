export default function Home() {

  return (
    <main className="bg-[#f7f1eb] text-[#3f3128] min-h-screen overflow-x-hidden">

      {/* HERO SECTION */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-6">

        {/* BACKGROUND */}
        <div className="absolute inset-0 bg-[url('/products/tees/flower1.jpg')] bg-cover bg-center opacity-10" />

        {/* CONTENT */}
        <div className="relative z-10 text-center max-w-5xl">

          {/* LOGO */}
          <img
            src="/logo.png"
            alt="JainZEra"
            className="w-40 sm:w-52 md:w-72 mx-auto mb-8 object-contain"
          />

          {/* SMALL TEXT */}
          <p className="uppercase tracking-[8px] text-[#7c685b] text-sm md:text-lg mb-8 font-semibold">
            Premium Boutique Collection
          </p>

          {/* MAIN BRAND NAME */}
          <h1 className="text-6xl md:text-[120px] font-serif italic leading-tight text-[#4d3b31]">

            Jain<span className="text-[#9d7d5f]">ZEra</span>

          </h1>

          {/* TAGLINE */}
          <p className="mt-6 text-2xl md:text-5xl font-bold leading-snug">
            You are not just wearing the outfit,
            <br />
            you are stepping into your own era ✨
          </p>

          {/* FUNNY MESSAGE */}
          <p className="mt-8 text-lg md:text-2xl leading-relaxed text-[#5e4a3e] font-medium">

            Kab tak Sarojini ki bheed me dhakke khaoge? 😭
            <br />
            Ab ghar baithe classy shopping karo 😌
            <br />
            JainZEra la raha hai boutique vibes directly tumhare ghar ✨

          </p>

          {/* BUTTONS */}
          <div className="flex flex-col md:flex-row gap-5 justify-center mt-12">

            {/* INSTAGRAM */}
            <a
              href="https://www.instagram.com/jainzera?igsh=d3g0OWs5ZDV1b2di"
              target="_blank"
              className="border border-[#6d5747] text-[#4d3b31] px-10 py-5 uppercase text-lg tracking-widest hover:bg-[#4d3b31] hover:text-white transition rounded-full font-semibold bg-white/60 backdrop-blur-sm"
            >
              Shop On Instagram
            </a>

            {/* WHATSAPP */}
            <a
              href="https://wa.me/918358025165?text=Hey%20JainZEra%20✨%20I%20want%20to%20shop%20from%20your%20collection.%20Please%20share%20more%20details%20😌"
              target="_blank"
              className="bg-[#4d3b31] text-white px-10 py-5 uppercase text-lg tracking-widest hover:bg-[#2f241e] transition rounded-full font-semibold"
            >
              WhatsApp Order
            </a>

          </div>

          {/* CONTACT */}
          <div className="mt-10 text-[#6d5747] text-lg md:text-xl space-y-3 font-medium">
            <p>📦 Free Pan India Delivery</p>
            <p>📲 7746947374 | 8358025165</p>
          </div>

        </div>

      </section>

      {/* PRODUCTS SECTION */}
      <section className="px-6 md:px-16 py-20">

        <div className="text-center mb-14">

          <p className="uppercase tracking-[6px] text-[#8d7768] text-sm mb-4">
            Latest Collection
          </p>

          <h2 className="text-5xl md:text-7xl font-serif italic text-[#4d3b31]">
            Featured Products
          </h2>

        </div>

        {/* PRODUCT GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

          {/* PRODUCT CARD */}
          <a
            href="/products/aesthetic-flower-tees"
            className="block group bg-white/70 backdrop-blur-sm rounded-[40px] overflow-hidden border border-[#e4d7cb] p-6 hover:shadow-2xl transition duration-500"
          >

            {/* IMAGE */}
            <img
              src="/products/tees/flower1.jpg"
              alt="Aesthetic Flower Tees"
              className="w-full h-[500px] object-contain bg-[#f4ece5] rounded-3xl group-hover:scale-105 transition duration-500"
            />

            {/* DETAILS */}
            <div className="mt-8">

              <h2 className="text-4xl md:text-5xl font-serif italic text-[#4d3b31]">
                Aesthetic Flower Tees
              </h2>

              <p className="text-[#7c685b] mt-4 text-2xl font-semibold">
                ₹399
              </p>

              <p className="mt-5 text-[#5e4a3e] text-lg">
                Click to explore the full collection →
              </p>

            </div>

          </a>

        </div>

      </section>

      {/* LOYALTY SECTION */}
      <section className="px-6 md:px-16 pb-20">

        <div className="bg-white/70 border border-[#eadfd5] rounded-[40px] p-10 text-center max-w-6xl mx-auto">

          <h2 className="text-4xl md:text-6xl font-black uppercase text-[#4d3b31] leading-tight">
            Your Loyalty Deserves
            <br />
            To Be Celebrated ✨
          </h2>

          <p className="mt-6 text-[#6d5747] text-xl leading-relaxed">
            Get one stamp with each order &
            receive a special surprise on your fifth order 💝
          </p>

        </div>

      </section>

      {/* FOOTER */}
      <footer className="border-t border-[#e7d9cd] py-10 text-center text-[#8b7565] text-base bg-[#f4ece5]">
        © 2026 JainZEra — Step Into Your Own Era ✨
      </footer>

    </main>
  );
}