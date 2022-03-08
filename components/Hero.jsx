export default function Hero() {
  return (
    <section className="bg-white relative flex justify-center h-full">
      <img
        className="object-contain bg-local w-full h-full"
        src="/images/w2560-mtl-stj-53.33e0c4d3.webp"
        alt="background image"
      />
      <h1 className="heroText">Escape the ordinary</h1>
      <div className="mx-auto absolute z-10 -bottom-10 bg-black p-2 rounded-md h-24 flex max-w-5xl">
        <input placeholder="City"></input>
        <input placeholder="City"></input>
        <input placeholder="City"></input>
        <input placeholder="City"></input>
      </div>
    </section>
  );
}
