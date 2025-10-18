export default function Settings(props) {
  return (
    <>
      <div className='btn-back'>
        <button onClick={props.handleClick}>Back</button>
      </div>

      <section id='settings-page'>
        <h1>Settings</h1>
        <form className='settings' action={props.submit}>
          {/* Foreground color */}
          <label htmlFor='fgColor'>Foreground color:</label>
          <input
            type='color'
            name='fgColor'
            defaultValue={props.settings.fgColor}
          />

          {/* Background color */}
          <label htmlFor='bgColor'>Background color:</label>
          <input
            type='color'
            name='bgColor'
            defaultValue={props.settings.bgColor}
          />

          {/* Size */}
          <label htmlFor='size'>Size:</label>
          <input type='number' name='size' defaultValue={props.settings.size} />

          {/* Quiet zone */}
          <label htmlFor='quietZone'>Quiet zone:</label>
          <input
            type='number'
            name='quietZone'
            defaultValue={props.settings.quietZone}
          />

          {/* QR Code styles */}
          <label htmlFor='qrStyle'>QR Code style:</label>
          <select name='qrStyle'>
            <option
              value='squares'
              selected={props.settings.qrStyle === 'squares'}
            >
              Squares
            </option>
            <option value='dots' selected={props.settings.qrStyle === 'dots'}>
              Dots
            </option>
            <option value='fluid' selected={props.settings.qrStyle === 'fluid'}>
              Fluid
            </option>
          </select>

          {/* Error correction levels */}
          <label htmlFor='ecLevel'>Error correction level:</label>
          <select name='ecLevel'>
            <option value='L' selected={props.settings.ecLevel === 'L'}>
              Low (7%)
            </option>
            <option value='M' selected={props.settings.ecLevel === 'M'}>
              Medium (15%)
            </option>
            <option value='Q' selected={props.settings.ecLevel === 'Q'}>
              Quality (25%)
            </option>
            <option value='H' selected={props.settings.ecLevel === 'H'}>
              High (30%)
            </option>
          </select>

          <button
            className='btn-save'
            onClick={props.handleClick}
            type='submit'
          >
            Save
          </button>
        </form>
      </section>
    </>
  );
}
