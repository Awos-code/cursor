import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';

const codeString = "/neuro play YOUR_TRACK_URL\n" +
  "/neuro filters bassboost 5\n" +
  "/neuro mood chill";

export default function Commands() {
  return (
    <section id="commands" className="py-16 bg-gray-900 text-white">
      <div className="max-w-2xl mx-auto text-center mb-6">
        <h2 className="text-3xl font-bold">Примеры команд</h2>
      </div>
      <div className="max-w-2xl mx-auto">
        <SyntaxHighlighter language="bash">
          {codeString}
        </SyntaxHighlighter>
      </div>
    </section>
  );
}