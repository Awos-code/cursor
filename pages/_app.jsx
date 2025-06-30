import '../styles/globals.css';
import Navbar from "../components/Navbar";
import MusicNotesBackground from "../components/MusicNotesBackground";
import Preloader from "../components/Preloader";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Preloader />
      <MusicNotesBackground />
      <Navbar />
      <Component {...pageProps} />
    </>
  );
}