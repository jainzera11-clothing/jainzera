export default function ProductPage() {

  const images = [
    "/products/tees/flower1.jpg",
    "/products/tees/flower2.jpg",
    "/products/tees/flower3.jpg",
    "/products/tees/flower4.jpg",
    "/products/tees/flower5.jpg",
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
              alt="Aesthetic Flower Tee"
              className="w-full h-[300px] object-contain bg-white rounded-3xl hover:scale-105 transition duration-500"
            />

          ))}

        </div>

        {/* DETAILS */}
        <div className="flex flex-col justify-center">

          <p className="uppercase tracking-[5px] text-[#8d7768] text-sm">
            JainZEra Collection
          </p>

          <h1 className="text-5xl md:text-7xl font-serif italic mt-4 text-[#4d3b31]">
            Aesthetic Flower Tees
          </h1>

          <p className="text-4xl mt-6 font-bold text-[#7c685b]">
            ₹399
          </p>

          <div className="mt-8 text-[#5e4a3e] text-xl leading-relaxed space-y-4">

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
              Limited pieces available 🌸
            </p>

          </div>

          {/* BUTTONS */}
          <div className="flex flex-col md:flex-row gap-4 mt-10">

            <a
              href="https://wa.me/918358025165?text=Hey%20JainZEra%20✨%20I%20want%20to%20order%20the%20Aesthetic%20Flower%20Tees.%20Please%20share%20more%20details%20💖"
              target="_blank"
              className="flex-1 bg-[#4d3b31] text-white text-center py-5 uppercase text-lg tracking-widest hover:bg-[#2f241e] transition rounded-full font-semibold"
            >
              Order On WhatsApp
            </a>

            <a
              href="https://www.instagram.com/reel/DYmRAx0xd5k/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
              target="_blank"
              className="flex-1 border border-[#4d3b31] text-[#4d3b31] text-center py-5 uppercase text-lg tracking-widest hover:bg-[#4d3b31] hover:text-white transition rounded-full font-semibold"
            >
              Watch Reel
            </a>

          </div>

        </div>

      </section>

    </main>
  );
}