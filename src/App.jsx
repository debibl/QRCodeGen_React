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
    size: '150',
    quietZone: '10',
    qrStyle: 'squares',
    ecLevel: 'M',
  });

  const submit = (formData) => {
    const data = {};

    for (const [key, value] of formData) {
      data[key] = value;
    }

    setSettings((prevSettings) => ({ ...prevSettings, ...data }));
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
