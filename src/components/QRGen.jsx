import { useState, useRef, useEffect } from 'react';
import { QRCode } from 'react-qrcode-logo';

export default function QRGen(props) {
  const [url, setUrl] = useState('');
  const qrRef = useRef(null);

  const submit = (formData) => {
    const link = formData.get('link');
    setUrl(link);
  };

  const handleDownload = () => {
    qrRef.current.download();
  };

  useEffect(() => {
    chrome.tabs.query({ active: true, currentWindow: true }, async (tabs) => {
      if (tabs.length > 0 && tabs[0].url.startsWith('http')) {
        const currentUrl = tabs[0].url;
        setUrl(currentUrl);
      }
    });
  }, []);

  return (
    <section id='qr-generator'>
      <section className={url && 'qr-code'}>
        <div className='frame'>
          {url ? (
            <QRCode
              ref={qrRef}
              value={url}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'contain',
              }}
              fgColor={props.settings?.fgColor || '#000000'}
              bgColor={props.settings?.bgColor || '#ffffff'}
              size={parseInt(props.settings?.size) || 150}
              quietZone={parseInt(props.settings?.quietZone) || 10}
              qrStyle={props.settings?.qrStyle || 'squares'}
              ecLevel={props.settings?.ecLevel || 'M'}
            />
          ) : (
            <img className='placeholder' src='./assets/cat.png' alt='cat' />
          )}
        </div>
      </section>

      <form action={submit}>
        <input id='url-input' name='link' placeholder={url} />
        <button className='btn-generate' type='submit'>
          Generate
        </button>
        <button className='btn-download' onClick={handleDownload}>
          Download
        </button>
      </form>
    </section>
  );
}
