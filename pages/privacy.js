import Navbar from '../components/Navbar';

export default function Privacy() {
  return (
    <div className="bg-[#0a0a13] min-h-screen flex flex-col items-center justify-center py-0">
      <Navbar minimal className="fixed top-0 left-0 w-full z-50 h-16" />
      <div className="w-full max-w-3xl px-4 py-10 bg-[#181826] rounded-2xl shadow-xl border border-fuchsia-700 mt-16">
        <h1 className="text-5xl font-extrabold text-[#f5f5dc] mb-4">Privacy Policy</h1>
        <p className="italic text-gray-400 mb-8">Last updated: June 7, 2025</p>
        <h2 className="text-2xl font-bold mb-2 mt-8">1. Data We Collect</h2>
        <p className="mb-6 text-white">
          Discord ID and username — to manage the music queue.<br/>
          No personal data (such as email or IP address) is stored or shared.
        </p>
        <h2 className="text-2xl font-bold mb-2 mt-8">2. How We Use Your Data</h2>
        <p className="mb-6 text-white">
          To operate bot commands (e.g., /play, /queue).<br/>
          To gather non-personalized usage statistics.
        </p>
        <h2 className="text-2xl font-bold mb-2 mt-8">3. Data Sharing</h2>
        <p className="mb-6 text-white">
          We do not share your data with any third parties.
        </p>
        <h2 className="text-2xl font-bold mb-2 mt-8">4. Changes to This Policy</h2>
        <p className="mb-6 text-white">
          Any updates to this privacy policy will be posted here and take effect immediately.
        </p>
      </div>
    </div>
  );
} 