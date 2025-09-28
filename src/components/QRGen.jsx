import { useState, useRef, useEffect } from 'react';
import { ScanQrCode, Download } from 'lucide-react';
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
        {url ? (
          <QRCode 
            ref={qrRef} 
            value={url}
            fgColor={props.settings?.fgColor || '#000000'}
            bgColor={props.settings?.bgColor || '#ffffff'}
          />
        ) : (
          <img className='placeholder' src='./assets/cat.png' alt='cat' />
        )}
      </section>

      <form action={submit}>
        <input id='url-input' name='link' placeholder={url}/>
        <button className='btn-generate' type='submit'>
          <ScanQrCode />
          Generate
        </button>
        <button className='btn-download' onClick={handleDownload}>
          <Download />
          Download
        </button>
      </form>
    </section>
  );
}
