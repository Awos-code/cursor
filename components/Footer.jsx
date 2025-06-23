export default function Footer() {
  return (
    <footer className="py-8 bg-black text-gray-500 text-center">
      <p>© 2025 Neuro•Tune. Все права защищены.</p>
      <div className="flex justify-center space-x-4 mt-4">
        <a href="https://top.gg/bot/YOUR_BOT_ID" className="hover:underline">Top.gg</a>
        <a href="https://discordbotlist.com/bots/YOUR_BOT_ID" className="hover:underline">Discord Bot List</a>
        <a href="https://github.com/YOUR_REPO" className="hover:underline">GitHub</a>
      </div>
    </footer>
  );
}
