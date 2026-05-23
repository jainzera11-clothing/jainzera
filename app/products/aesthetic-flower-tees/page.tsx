export default function ProductPage() {

  const products = [
    {
      image: "/products/tees/flower1.jpeg",
      color: "Mauve",
    },
    {
      image: "/products/tees/flower2.jpeg",
      color: "Vibrant Mustard Yellow",
    },
    {
      image: "/products/tees/flower3.jpeg",
      color: "Light Pink",
    },
    {
      image: "/products/tees/flower4.jpeg",
      color: "Black",
    },
    {
      image: "/products/tees/flower5.jpeg",
      color: "Brown",
    },
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

          {products.map((product, index) => (

            <div
              key={index}
              className="relative bg-white rounded-[30px] overflow-hidden shadow-lg"
            >

              {/* IMAGE */}
              <img
                src={product.image}
                alt={product.color}
                className="w-full object-cover"
              />

              {/* COLOR NAME */}
              <div className="px-6 pt-6">

                <h2 className="text-2xl md:text-3xl font-serif italic text-[#4d3b31]">
                  {product.color}
                </h2>

              </div>

              {/* BUTTONS */}
              <div className="p-6 flex flex-col gap-4">

                {/* WHATSAPP */}
                <a
                  href={`https://wa.me/918358025165?text=Hey%20JainZEra%20✨%20I%20want%20to%20order%20the%20Aesthetic%20Flower%20Tee%20in%20${encodeURIComponent(product.color)}%20color%20💖`}
                  target="_blank"
                  className="bg-[#4d3b31] text-white text-center py-4 uppercase text-sm tracking-widest hover:bg-[#2f241e] transition rounded-full font-semibold"
                >
                  Order On WhatsApp
                </a>

                {/* INSTAGRAM DM */}
                <a
                  href={`https://www.instagram.com/jainzera?igsh=d3g0OWs5ZDV1b2di`}
                  target="_blank"
                  className="border border-[#4d3b31] text-[#4d3b31] text-center py-4 uppercase text-sm tracking-widest hover:bg-[#4d3b31] hover:text-white transition rounded-full font-semibold"
                >
                  DM On Instagram
                </a>

                {/* WATCH REEL */}
                <a
                  href="https://www.instagram.com/reel/DYmRAx0xd5k/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
                  target="_blank"
                  className="bg-[#e8d9cc] text-[#4d3b31] text-center py-4 uppercase text-sm tracking-widest hover:bg-[#d8c2b1] transition rounded-full font-semibold"
                >
                  Watch Reel ✨
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
            Aesthetic Flower Tees
          </h1>

          <p className="text-4xl mt-6 font-bold text-[#7c685b]">
            ₹399
          </p>

          {/* DESCRIPTION */}
          <div className="mt-8 text-[#5e4a3e] text-xl leading-relaxed space-y-5">

            <p>
              Soft aesthetic tees made for your everyday pretty vibes ✨
            </p>

            <p>
              🚚 Free Delivery PAN India
            </p>

            <p>
              Cute, comfy & perfect for your daily outfit mood 💖
            </p>

            <p>
              Pair it with cargos, denims or oversized fits
              for the ultimate Pinterest aesthetic ✨
            </p>

            <p>
              Available Colors:
              Mauve, Mustard Yellow,
              Light Pink, Black & Brown 🤍
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