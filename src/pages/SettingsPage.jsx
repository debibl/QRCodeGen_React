import { ArrowBigLeft } from 'lucide-react';
export default function Settings(props) {


  return (
    <>
      <div className='btn-back'>
        <button onClick={props.handleClick}>
          <ArrowBigLeft />
          Back
        </button>
      </div>

      <h1>Settings page!</h1>
      <form action={props.submit}>
        <input name='fgColor' />
        <button onClick={props.handleClick} type='submit'>Save</button>
      </form>
    </>
  );
}
