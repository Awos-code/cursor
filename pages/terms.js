import Navbar from '../components/Navbar';

export default function Terms() {
  return (
    <div className="bg-[#0a0a13] min-h-screen flex flex-col items-center justify-center py-0">
      <Navbar minimal className="fixed top-0 left-0 w-full z-50 h-16" />
      <div className="w-full max-w-3xl px-4 py-10 bg-[#181826] rounded-2xl shadow-xl border border-fuchsia-700 mt-16">
        <h1 className="text-5xl font-extrabold text-[#f5f5dc] mb-4">Terms of Service</h1>
        <p className="italic text-gray-400 mb-8">Last updated: June 7, 2025</p>
        <h2 className="text-2xl font-bold mb-2 mt-8">1. Use of the Bot</h2>
        <p className="mb-6 text-white">
          This bot is provided solely for playing music within Discord.<br/>
          Users must not use the bot to distribute copyrighted or illegal content.<br/>
          The bot owner reserves the right to restrict access for violations of Discord's Community Guidelines.
        </p>
        <h2 className="text-2xl font-bold mb-2 mt-8">2. Liability</h2>
        <p className="mb-6 text-white">
          The bot owner is not liable for any damages arising from the use or inability to use this service.
        </p>
        <h2 className="text-2xl font-bold mb-2 mt-8">3. Changes to Terms</h2>
        <p className="mb-6 text-white">
          We may update these terms at any time. The revised version will be published on this page.
        </p>
      </div>
    </div>
  );
} 