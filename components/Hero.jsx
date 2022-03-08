export default function Hero() {
  return (
    <section className="bg-white relative flex justify-center">
      <img
        className="object-cover bg-local w-full max-h-[88vh] opacity-90"
        src="/images/w2560-mtl-stj-53.33e0c4d3.webp"
        alt="background image"
      />
      <h1 className="heroText">
        Escape <br /> the ordinary
      </h1>
      <div className="mx-auto absolute z-10 -bottom-10 shadow-xl bg-white p-2 rounded-2xl h-24 flex max-w-5xl">
        <input placeholder="City"></input>
        <input placeholder="City"></input>
        <input placeholder="City"></input>
        <input placeholder="City"></input>
      </div>
    </section>
  );
}
