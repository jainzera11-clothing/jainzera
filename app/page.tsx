export default function Home() {
  const products = [
    {
      id: 1,
      name: "Oversized Black Tee",
      price: "₹799",
      image:
        "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab",
    },
    {
      id: 2,
      name: "Streetwear Cargo",
      price: "₹1299",
      image:
        "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f",
    },
    {
      id: 3,
      name: "Premium Hoodie",
      price: "₹1599",
      image:
        "https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb",
    },
  ];

  return (
    <main className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="text-center py-20 px-6">
        <h1 className="text-5xl md:text-7xl font-bold tracking-widest">
          JainZEra
        </h1>

        <p className="mt-6 text-gray-400 text-lg">
          Premium Streetwear Fashion
        </p>

        <a
          href="https://ig.me/m/jainzera"
          target="_blank"
          className="inline-block mt-8 bg-white text-black px-8 py-3 rounded-full font-semibold hover:bg-gray-300 transition"
        >
          Order on Instagram
        </a>
      </section>

      {/* Products */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-8 px-6 pb-20">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-zinc-900 rounded-2xl overflow-hidden shadow-lg"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-[400px] object-cover"
            />

            <div className="p-5">
              <h2 className="text-2xl font-semibold">{product.name}</h2>

              <p className="text-gray-400 mt-2">{product.price}</p>

              <a
                href="https://ig.me/m/jainzera"
                target="_blank"
                className="inline-block mt-4 w-full text-center bg-white text-black py-3 rounded-xl font-medium hover:bg-gray-300 transition"
              >
                Order Now
              </a>
            </div>
          </div>
        ))}
      </section>
    </main>
  );
}