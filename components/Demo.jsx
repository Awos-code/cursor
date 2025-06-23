export default function Demo() {
  return (
    <section id="demo" className="py-16 bg-black text-white text-center">
      <h2 className="text-3xl font-bold mb-6">Смотрите в действии</h2>
      <div className="max-w-3xl mx-auto">
        <iframe
          className="w-full h-64 md:h-96 rounded-xl shadow-lg"
          src="https://www.youtube.com/embed/YOUR_VIDEO_ID"
          title="Neuro•Tune Demo"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </section>
  );
}