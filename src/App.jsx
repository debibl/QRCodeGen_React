import HomePage from './pages/HomePage';
import SettingsPage from './pages/SettingsPage';
import { useState, useEffect } from 'react';
import './styles/App.css';

function App() {
  const [pageClicked, setPageClicked] = useState(false);
  const [layout, setLayout] = useState(<HomePage />);

  const [settings, setSettings] = useState({
    fgColor: '#000000',
    bgColor: '#ffffff',
  });

  const submit = (formData) => {
    const fgColor = formData.get('fgColor');
    const bgColor = formData.get('bgColor');
    setSettings((prevSettings) => {
      setSettings({
        ...prevSettings,
        fgColor: fgColor,
        bgColor: bgColor,
      });
    });
  };

  useEffect(() => {
    const handleClick = () => {
      setPageClicked(!pageClicked);
    };

    if (pageClicked) {
      setLayout(
        <SettingsPage
          handleClick={handleClick}
          submit={submit}
          settings={settings}
        />
      );
    } else {
      setLayout(<HomePage handleClick={handleClick} settings={settings} />);
    }
  }, [pageClicked, settings]);

  return <main>{layout}</main>;
}

export default App;
