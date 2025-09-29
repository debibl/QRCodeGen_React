export default function Settings(props) {
  return (
    <>
      <div className='btn-back'>
        <button onClick={props.handleClick}>Back</button>
      </div>

      <section id='settings-page'>
        <h1>Settings</h1>
        <form className='settings' action={props.submit}>
          <input
            type='color'
            name='fgColor'
            defaultValue={props.settings.fgColor}
          />
          <input
            type='color'
            name='bgColor'
            defaultValue={props.settings.bgColor}
          />
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
