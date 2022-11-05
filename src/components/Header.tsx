import edit from '../images/edit_square.svg';
import { Link } from "react-router-dom";


function Header() {
  return (
    <header className='flex justify-center gap-96 py-3 px-5 border-b-2'>
      <h1 className="font-serif text-2xl text-gray-400 font-medium tracking-wide">Blog</h1>
      <div className='flex gap-1.5 border border-gray-500 rounded-lg px-3 py-1 '>
        <img src={edit} alt='icon' width='24' />
        <Link to='/article' className="bg-inherit font-sm">write</Link>
      </div>
    </header>
  )
}

export default Header;
