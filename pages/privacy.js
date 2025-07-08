import Navbar from '../components/Navbar';
import MusicNotesBackground from '../components/MusicNotesBackground';
import LocaleToggle from '../components/LocaleToggle';
import { useTranslation } from 'react-i18next';
// import '../styles/privacy-custom.css'; // Удалено, чтобы не было ошибки Next.js

export default function Privacy() {
  const { t } = useTranslation();
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center py-0 bg-[#0a0a13]">
      <MusicNotesBackground />
      <header className="header w-full z-10" style={{position: 'relative', padding: '20px 0', background: '#10101a', borderBottom: '1px solid rgba(139, 92, 246, 0.2)'}}>
        <div className="nav-container max-w-5xl mx-auto flex justify-between items-center px-5">
          <a href="/" className="logo flex items-center gap-3 text-3xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent" style={{textDecoration: 'none'}}>
            NeuroTune
          </a>
          <div className="flex items-center gap-2">
            <LocaleToggle />
            <a href="/" className="home-btn inline-flex items-center gap-2 bg-[#6366f1] text-white px-5 py-3 rounded-lg font-semibold shadow transition hover:-translate-y-0.5 hover:shadow-lg" style={{textDecoration: 'none'}}>
              {t('nav.home')}
            </a>
          </div>
        </div>
      </header>
      <main className="main-container w-full max-w-4xl mx-auto px-4 py-12 relative z-10">
        <div className="document-card fade-in bg-[#181826] border border-fuchsia-700 rounded-2xl shadow-xl p-8 md:p-12 mb-8 relative overflow-hidden">
          <h1 className="document-title">{t('privacy.title')}</h1>
          <p className="last-updated">{t('privacy.updated')}</p>

          <div className="section-header">📋 1. {t('privacy.categories')}</div>
          <div className="section-content">
            <div className="data-categories">
              <div className="category-card">
                <h4>🎶 {t('privacy.music')}</h4>
                <ul className="music-data-list">
                  {t('privacy.musicList', { returnObjects: true }).map((item, i) => <li key={i}>{item}</li>)}
                </ul>
              </div>
              <div className="category-card">
                <h4>⚙️ {t('privacy.tech')}</h4>
                <ul className="tech-data-list">
                  {t('privacy.techList', { returnObjects: true }).map((item, i) => <li key={i}>{item}</li>)}
                </ul>
              </div>
              <div className="category-card">
                <h4>📊 {t('privacy.stats')}</h4>
                <ul className="stats-data-list">
                  {t('privacy.statsList', { returnObjects: true }).map((item, i) => <li key={i}>{item}</li>)}
                </ul>
              </div>
            </div>
          </div>

          <div className="section-header">🎯 2. {t('privacy.purposes')}</div>
          <div className="section-content">
            <ul className="purposes-list">
              <li><strong>{t('privacy.purpose1')}:</strong> {t('privacy.purpose1Desc')}</li>
              <li><strong>{t('privacy.purpose2')}:</strong> {t('privacy.purpose2Desc')}</li>
              <li><strong>{t('privacy.purpose3')}:</strong> {t('privacy.purpose3Desc')}</li>
              <li><strong>{t('privacy.purpose4')}:</strong> {t('privacy.purpose4Desc')}</li>
            </ul>
          </div>

          <div className="section-header">🔄 3. {t('privacy.autoProcesses')}</div>
          <div className="section-content">
            <ul className="auto-process-list">
              <li><strong>{t('privacy.autoProcess1')}:</strong> {t('privacy.autoProcess1Desc')}</li>
              <li><strong>{t('privacy.autoProcess2')}:</strong> {t('privacy.autoProcess2Desc')}</li>
              <li><strong>{t('privacy.autoProcess3')}:</strong> {t('privacy.autoProcess3Desc')}</li>
            </ul>
          </div>

          <div className="section-header">⏱️ 4. {t('privacy.storage')}</div>
          <div className="section-content">
            <div className="storage-timeline">
              <h4>{t('privacy.personalData')}:</h4>
              <p>{t('privacy.personalDataDesc')}</p>
            </div>
            <div className="storage-timeline">
              <h4>{t('privacy.statsData')}:</h4>
              <p>{t('privacy.statsDataDesc')}</p>
            </div>
            <div className="storage-timeline">
              <h4>{t('privacy.cache')}:</h4>
              <p>{t('privacy.cacheDesc')}</p>
            </div>
            <div className="storage-timeline">
              <h4>{t('privacy.history')}:</h4>
              <p>{t('privacy.historyDesc')}</p>
            </div>
          </div>

          <div className="section-header">🔒 5. {t('privacy.security')}</div>
          <div className="section-content">
            <ul className="security-list">
              <li><strong>{t('privacy.security1')}:</strong> {t('privacy.security1Desc')}</li>
              <li><strong>{t('privacy.security2')}:</strong> {t('privacy.security2Desc')}</li>
              <li><strong>{t('privacy.security3')}:</strong> {t('privacy.security3Desc')}</li>
              <li><strong>{t('privacy.security4')}:</strong> {t('privacy.security4Desc')}</li>
            </ul>
          </div>

          <div className="contact-info">
            <h3>{t('privacy.contactTitle', 'Вопросы о конфиденциальности?')}</h3>
            <p>
              <span className="inline-flex items-center gap-2">
                <span className="discord-ico" role="img" aria-label="discord"><svg width="20" height="20" viewBox="0 0 24 24" fill="#5865F2" xmlns="http://www.w3.org/2000/svg" style={{display:'inline',verticalAlign:'middle'}}><path d="M20.317 4.369a19.791 19.791 0 0 0-4.885-1.515.07.07 0 0 0-.073.035c-.211.375-.444.864-.608 1.249a18.524 18.524 0 0 0-5.487 0 12.583 12.583 0 0 0-.617-1.249.07.07 0 0 0-.073-.035A19.736 19.736 0 0 0 3.677 4.369a.064.064 0 0 0-.03.027C.533 8.159-.32 11.81.099 15.404a.08.08 0 0 0 .028.056c2.052 1.507 4.042 2.422 5.992 3.029a.077.077 0 0 0 .084-.027c.461-.63.873-1.295 1.226-1.994a.076.076 0 0 0-.041-.104c-.652-.247-1.27-.549-1.872-.892a.077.077 0 0 1-.008-.127c.126-.094.252-.192.371-.291a.07.07 0 0 1 .073-.01c3.927 1.793 8.18 1.793 12.061 0a.07.07 0 0 1 .073.009c.12.099.245.197.372.291a.077.077 0 0 1-.006.127 12.298 12.298 0 0 1-1.873.892.076.076 0 0 0-.04.105c.36.699.772 1.364 1.225 1.993a.076.076 0 0 0 .084.028c1.961-.607 3.951-1.522 6.003-3.029a.077.077 0 0 0 .028-.055c.5-4.09-.838-7.713-3.548-10.998a.061.061 0 0 0-.03-.028zM8.02 15.331c-1.183 0-2.156-1.085-2.156-2.419 0-1.333.955-2.418 2.156-2.418 1.21 0 2.175 1.095 2.156 2.418 0 1.334-.955 2.419-2.156 2.419zm7.974 0c-1.183 0-2.156-1.085-2.156-2.419 0-1.333.955-2.418 2.156-2.418 1.21 0 2.175 1.095 2.156 2.418 0 1.334-.946 2.419-2.156 2.419z"/></svg></span>
                <a href="https://discord.com/users/240534195368230912" target="_blank" rel="noopener noreferrer" style={{color:'#5865F2',fontWeight:'bold',textDecoration:'none'}}>
                  {t('privacy.owner', 'Владелец бота')}
                </a>
              </span>
            </p>
            <a href="https://discord.gg/GeyhxkME7e" className="discord-link">{t('privacy.support', 'Сервер поддержки')}</a>
          </div>
        </div>
      </main>
    </div>
  );
} 