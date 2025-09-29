import QRGen from '../components/QRGen';

export default function HomePage(props) {
  return (
    <>
      <header>
        <img src='./assets/icons/logo-camera.png' alt='camera logo' />
        <h1>QR Code</h1>
      </header>

      <QRGen settings={props.settings} />

      <div className='btn-settings'>
        <button onClick={props.handleClick}>Settings</button>
      </div>
    </>
  );
}
