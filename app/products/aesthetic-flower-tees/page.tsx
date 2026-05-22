export default function ProductPage() {

  const images = [
    "/products/tees/flower1.jpg",
    "/products/tees/flower2.jpg",
    "/products/tees/flower3.jpg",
    "/products/tees/flower4.jpg",
    "/products/tees/flower5.jpg",
  ];

  return (
    <main className="bg-black text-white min-h-screen px-6 md:px-16 py-10">

      {/* BACK BUTTON */}
      <a
        href="/"
        className="text-gray-400 hover:text-white uppercase text-sm tracking-widest"
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
              className="w-full h-[300px] object-contain bg-zinc-900 rounded-2xl hover:scale-105 transition duration-500"
            />

          ))}

        </div>

        {/* PRODUCT DETAILS */}
        <div className="flex flex-col justify-center">

          <p className="uppercase tracking-[5px] text-gray-400 text-sm">
            JainZEra Streetwear
          </p>

          <h1 className="text-4xl md:text-6xl font-black uppercase mt-4">
            Aesthetic Flower Tees
          </h1>

          <p className="text-3xl mt-6 font-semibold">
            ₹399
          </p>

          <p className="mt-6 text-gray-300 text-lg leading-relaxed">
            For the people who think basic is boring 🌸
            <br />
            Designed for daily drip.
            <br />
            Soft feel. Heavy vibe 😎
          </p>

          {/* SIZE */}
          <div className="mt-8">

            <h2 className="uppercase text-sm tracking-widest text-gray-400 mb-4">
              Available Sizes
            </h2>

            <div className="flex gap-4">

              <div className="border border-white px-5 py-3 rounded-xl">
                M
              </div>

              <div className="border border-white px-5 py-3 rounded-xl">
                L
              </div>

            </div>

          </div>

          {/* BUTTONS */}
          <div className="flex flex-col md:flex-row gap-4 mt-10">

            <a
              href="https://wa.me/917746947374"
              target="_blank"
              className="flex-1 bg-white text-black text-center py-4 uppercase text-sm tracking-widest hover:bg-gray-300 transition rounded-xl"
            >
              Order On WhatsApp
            </a>

            <a
              href="https://www.instagram.com/reel/DYmRAx0xd5k/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
              target="_blank"
              className="flex-1 border border-white text-center py-4 uppercase text-sm tracking-widest hover:bg-white hover:text-black transition rounded-xl"
            >
              Watch Reel
            </a>

          </div>

          {/* FUNNY MESSAGE */}
          <div className="mt-10 bg-zinc-900 border border-white/10 rounded-2xl p-6">

            <h2 className="text-2xl font-black uppercase">
              Kab Tak Sarojini Jaoge? 😭
            </h2>

            <p className="mt-4 text-gray-300 leading-relaxed">
              Ab AC me baith ke shopping karo 😎
              <br />
              JainZEra la raha hai streetwear vibes
              directly tumhare ghar 🚚
            </p>

          </div>

        </div>

      </section>

    </main>
  );
}