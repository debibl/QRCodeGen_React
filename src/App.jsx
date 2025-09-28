import HomePage from './pages/HomePage';
import SettingsPage from './pages/SettingsPage';
import { useState, useEffect } from 'react';
import './styles/App.css';

function App() {
  const [pageClicked, setPageClicked] = useState(false);
  const [layout, setLayout] = useState(<HomePage />);

  const [settings, setSettings] = useState({
    fgColor: '',
    bgColor: '',
  });

  const submit = (formData) => {
    const fgColor = formData.get('fgColor');
    setSettings((prevSettings) => {
      setSettings({
        ...prevSettings,
        fgColor: fgColor,
      });
    });
  };

  useEffect(() => {
    const handleClick = () => {
      setPageClicked(!pageClicked);
    };

    if (pageClicked) {
      setLayout(<SettingsPage handleClick={handleClick} submit={submit} />);
    } else {
      setLayout(<HomePage handleClick={handleClick} settings={settings} />);
    }
  }, [pageClicked, settings]);

  return <main>{layout}</main>;
}

export default App;
