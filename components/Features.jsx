import { FaSpotify, FaYoutube, FaSoundcloud } from 'react-icons/fa';

const features = [
  { icon: <FaSpotify size={32} />, title: 'Spotify, YouTube, SoundCloud', text: 'Поддержка всех популярных платформ.' },
  { icon: <FaSoundcloud size={32} />, title: 'Музыкальные фильтры', text: 'Bassboost, nightcore, karaoke и др.' },
  { icon: <FaYoutube size={32} />, title: 'Автодиджей', text: 'Непрерывный плейлист без усилий.' },
  { icon: <FaSpotify size={32} />, title: 'Mood-настройки', text: 'Расслабляйся или качай.' },
];

export default function Features() {
  return (
    <section id="features" className="py-16 bg-gray-900 text-white">
      <div className="max-w-4xl mx-auto text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">Особенности</h2>
        <p className="text-gray-400">Все, что нужно для идеального саундтрека вашего сервера.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {features.map((f, i) => (
          <div key={i} className="p-6 bg-gray-800 rounded-2xl shadow-lg hover:scale-105 transition">
            <div className="mb-4 text-purple-400">{f.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{f.title}</h3>
            <p className="text-gray-300">{f.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}