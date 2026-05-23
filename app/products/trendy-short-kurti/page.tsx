export default function KurtiPage() {

  const images = [
    "/products/kurti/kurti1.jpg",
    "/products/kurti/kurti2.jpg",
    "/products/kurti/kurti3.jpg",
    "/products/kurti/kurti4.jpg",
    "/products/kurti/kurti5.jpg",
  ];

  return (
    <main className="bg-[#f7f1eb] text-[#3f3128] min-h-screen px-6 md:px-16 py-10">

      {/* BACK BUTTON */}
      <a
        href="/"
        className="text-[#7c685b] hover:text-[#4d3b31] uppercase text-sm tracking-widest"
      >
        ← Back To Home
      </a>

      {/* PRODUCT SECTION */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-10">

        {/* LEFT SIDE IMAGES */}
        <div className="space-y-10">

          {images.map((img, index) => (

            <div
              key={index}
              className="relative bg-white rounded-[30px] overflow-hidden shadow-lg"
            >

              {/* SOLD OUT TAG */}
              {(index === 0 || index === 2 || index === 4) && (

                <div className="absolute top-4 left-4 z-10 bg-[#4d3b31] text-white px-5 py-2 rounded-full text-sm uppercase tracking-widest font-semibold shadow-lg">

                  Sold Out

                </div>

              )}

              {/* IMAGE */}
              <img
                src={img}
                alt="Trendy Short Kurti"
                className="w-full object-cover"
              />

              {/* IMAGE ACTIONS */}
              <div className="p-6 flex flex-col md:flex-row gap-4">

                {/* WHATSAPP */}
                <a
                  href="https://wa.me/918358025165?text=Hey%20JainZEra%20✨%20I%20want%20to%20order%20this%20kurti.%20Please%20share%20more%20details%20💖"
                  target="_blank"
                  className="flex-1 bg-[#4d3b31] text-white text-center py-4 uppercase text-sm tracking-widest hover:bg-[#2f241e] transition rounded-full font-semibold"
                >
                  Order On WhatsApp
                </a>

                {/* INSTAGRAM */}
                <a
                  href="https://www.instagram.com/jainzera?igsh=d3g0OWs5ZDV1b2di"
                  target="_blank"
                  className="flex-1 border border-[#4d3b31] text-[#4d3b31] text-center py-4 uppercase text-sm tracking-widest hover:bg-[#4d3b31] hover:text-white transition rounded-full font-semibold"
                >
                  DM On Instagram
                </a>

              </div>

            </div>

          ))}

        </div>

        {/* RIGHT SIDE DETAILS */}
        <div className="flex flex-col justify-start sticky top-10 h-fit">

          <p className="uppercase tracking-[5px] text-[#8d7768] text-sm">
            JainZEra Collection
          </p>

          <h1 className="text-5xl md:text-7xl font-serif italic mt-4 text-[#4d3b31] leading-tight">
            Trendy Short Kurtis
          </h1>

          <p className="text-4xl mt-6 font-bold text-[#7c685b]">
            ₹199
          </p>

          {/* DESCRIPTION */}
          <div className="mt-8 text-[#5e4a3e] text-xl leading-relaxed space-y-5">

            <p>
              ✨ Trendy Short Kurtis at just ₹199
              Only at your doorstep ✨
            </p>

            <p>
              🚚 Free Delivery PAN India
            </p>

            <p>
              Cute, comfy & perfect for your
              everyday summer look 💖
            </p>

            <p>
              ⚡ Only one piece available in each design
              so hurry — first come, first serve 🛍️
            </p>

            <p>
              Follow @jainzera for more classy
              and affordable fashion finds 🌸
            </p>

          </div>

          {/* EXTRA MESSAGE */}
          <div className="mt-10 bg-white rounded-[30px] p-8 border border-[#eadfd5] shadow-md">

            <h2 className="text-3xl font-serif italic text-[#4d3b31] leading-snug">
              Not just fashion —
              a whole mood ✨
            </h2>

            <p className="mt-4 text-[#6d5747] text-lg leading-relaxed">
              Soft fits.
              Pretty vibes.
              JainZEra made for your era 🤍
            </p>

          </div>

        </div>

      </section>

    </main>
  );
}