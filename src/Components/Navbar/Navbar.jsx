import logo from '../../assets/Noteapp.png'


export default function Navbar() {
  return (
    <header className=" flex flex-row py-4 px-3 gap-3 border-b-2 border-gray-400 ">
    <div className='w-12 h-10'>
        <img className='w-full h-full' src={logo} alt="Note-Img" />
    </div>
      <h1 className=' text-purple-600 text-4xl font-bold '>NoteIt</h1>
    </header>
  )
}
