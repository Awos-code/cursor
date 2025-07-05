import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  ru: {
    translation: {
      nav: {
        home: 'Главная',
        features: 'Особенности',
        allCommands: 'Команды',
        faq: 'FAQ',
        contacts: 'Контакты',
        invite: 'Пригласить бота',
      },
      hero: {
        title: 'Музыка. Эффекты. Эмоции.',
        invite: 'Пригласить бота',
        features: 'Особенности',
        support: 'Сервер Поддержки',
      },
      features: {
        f1: 'Spotify, YouTube, SoundCloud и пр.',
        f2: 'Автодисцилы автоматически',
        f3: 'Авто DJ и автоматический лист',
        f4: 'Mood-настройки и выходы',
      },
      allCommands: {
        title: 'Команды',
        all: 'Все',
        music: 'Музыка',
        info: 'Инфо',
      },
      faq: {
        title: 'FAQ',
        q1: 'Как добавить бота на сервер?',
        a1: "Нажмите кнопку 'Пригласить бота' вверху сайта и выберите нужный сервер Discord.",
        q2: 'Какие музыкальные сервисы поддерживаются?',
        a2: 'NeuroTune поддерживает YouTube, Spotify, SoundCloud, Apple Music и другие популярные платформы.',
        q3: 'Как использовать команды?',
        a3: 'Все команды доступны через слэш-команды Discord. Просто введите / и выберите нужную команду из списка.',
        q4: 'Бот бесплатный?',
        a4: 'Да, NeuroTune бесплатен для всех пользователей. Мы постоянно добавляем новые функции!'
      },
      discord: {
        loading: 'Загрузка...',
        online: 'Бот онлайн',
        offline: 'Бот оффлайн',
        servers: 'серверов',
        users: 'пользователей'
      },
      footer: {
        copyright: '© 2025 NeuroTune. Все права защищены.'
      },
      commands: {
        play: 'Воспроизведение трека или плейлиста по ссылке или названию.',
        skip: 'Пропустить текущий трек и начать следующий.',
        stop: 'Остановить воспроизведение и очистить очередь.',
        pause: 'Приостановить текущий трек.',
        queue: 'Показать список ожидающих в очереди треков.',
        shuffle: 'Перемешать порядок треков в очереди.',
        repeat: 'Включить цикличное повторение текущего трека или всей очереди.',
        clear: 'Полностью очистить очередь воспроизведения.',
        autoplay: 'Автоматически подбирать похожие треки после окончания очереди.',
        profile: 'Вывести вашу статистику и настройки музыкального профиля.',
        help: 'Показать все доступные команды и их синтаксис.',
        ping: 'Проверить задержку бота и соединения с сервером.'
      }
    }
  },
  en: {
    translation: {
      nav: {
        home: 'Home',
        features: 'Features',
        allCommands: 'Commands',
        faq: 'FAQ',
        contacts: 'Contacts',
        invite: 'Invite Bot',
      },
      hero: {
        title: 'Music. Effects. Emotions.',
        invite: 'Invite Bot',
        features: 'Features',
        support: 'Support Server',
      },
      features: {
        f1: 'Spotify, YouTube, SoundCloud and more',
        f2: 'Auto equalizers automatically',
        f3: 'Auto DJ and automatic playlist',
        f4: 'Mood settings and outputs',
      },
      allCommands: {
        title: 'Commands',
        all: 'All',
        music: 'Music',
        info: 'Info',
      },
      faq: {
        title: 'FAQ',
        q1: 'How to add the bot to a server?',
        a1: "Click the 'Invite Bot' button at the top of the site and select the desired Discord server.",
        q2: 'What music services are supported?',
        a2: 'NeuroTune supports YouTube, Spotify, SoundCloud, Apple Music and other popular platforms.',
        q3: 'How to use commands?',
        a3: 'All commands are available through Discord slash commands. Just type / and select the desired command from the list.',
        q4: 'Is the bot free?',
        a4: 'Yes, NeuroTune is free for all users. We constantly add new features!'
      },
      discord: {
        loading: 'Loading...',
        online: 'Bot online',
        offline: 'Bot offline',
        servers: 'servers',
        users: 'users'
      },
      footer: {
        copyright: '© 2025 NeuroTune. All rights reserved.'
      },
      commands: {
        play: 'Play a track or playlist by link or name.',
        skip: 'Skip the current track and start the next one.',
        stop: 'Stop playback and clear the queue.',
        pause: 'Pause the current track.',
        queue: 'Show the list of tracks waiting in the queue.',
        shuffle: 'Shuffle the order of tracks in the queue.',
        repeat: 'Enable repeat for the current track or the whole queue.',
        clear: 'Completely clear the playback queue.',
        autoplay: 'Automatically pick similar tracks after the queue ends.',
        profile: 'Show your music profile stats and settings.',
        help: 'Show all available commands and their syntax.',
        ping: 'Check the bot and server latency.'
      }
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'ru',
    fallbackLng: 'ru',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n; 