export default function KurtiPage() {

  const images = [
    "/products/kurti/kurti1.jpg",
    "/products/kurti/kurti2.jpg",
    "/products/kurti/kurti3.jpg",
    "/products/kurti/kurti4.jpg",
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
      <section className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-10">

        {/* IMAGES */}
        <div className="grid grid-cols-2 gap-4">

          {images.map((img, index) => (

            <img
              key={index}
              src={img}
              alt="Trendy Short Kurti"
              className="w-full h-[320px] object-contain bg-white rounded-3xl hover:scale-105 transition duration-500"
            />

          ))}

        </div>

        {/* DETAILS */}
        <div className="flex flex-col justify-center">

          <p className="uppercase tracking-[5px] text-[#8d7768] text-sm">
            JainZEra Collection
          </p>

          <h1 className="text-5xl md:text-7xl font-serif italic mt-4 text-[#4d3b31]">
            Trendy Short Kurtis
          </h1>

          <p className="text-4xl mt-6 font-bold text-[#7c685b]">
            ₹199
          </p>

          {/* DESCRIPTION */}
          <div className="mt-8 text-[#5e4a3e] text-xl leading-relaxed space-y-4">

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

          </div>

          {/* BUTTONS */}
          <div className="flex flex-col md:flex-row gap-4 mt-10">

            <a
              href="https://wa.me/918358025165?text=Hey%20JainZEra%20✨%20I%20want%20to%20order%20the%20Trendy%20Short%20Kurti.%20Please%20share%20more%20details%20💖"
              target="_blank"
              className="flex-1 bg-[#4d3b31] text-white text-center py-5 uppercase text-lg tracking-widest hover:bg-[#2f241e] transition rounded-full font-semibold"
            >
              Order On WhatsApp
            </a>

            <a
              href="https://www.instagram.com/jainzera?igsh=d3g0OWs5ZDV1b2di"
              target="_blank"
              className="flex-1 border border-[#4d3b31] text-[#4d3b31] text-center py-5 uppercase text-lg tracking-widest hover:bg-[#4d3b31] hover:text-white transition rounded-full font-semibold"
            >
              DM On Instagram
            </a>

          </div>

          {/* EXTRA MESSAGE */}
          <div className="mt-10 bg-white rounded-[30px] p-8 border border-[#eadfd5]">

            <h2 className="text-3xl font-serif italic text-[#4d3b31]">
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