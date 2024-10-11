import { NavLink } from 'react-router-dom'
import { IoMdHome } from 'react-icons/io'
import { IoMdArchive} from 'react-icons/io'
import { IoMdTrash} from 'react-icons/io'
import { MdLabelImportant } from 'react-icons/io'

function Sidebar() {
  const styles = ' flex items-center gap-2 px-2 py-1 rounded-tr-full rounded-br-full '
  const getStyle = ({isActive})=>{
    return isActive ?  ` bg-indigo-900 text-slate-50 ${styles} `: ` hover:bg-indigo-900 hover:text-slate-50 ${styles} `
  }


  return (
    <aside className='flex flex-col gap-3 border-r-2 border-gray-100 w-[150px] h-screen p-4 '>
      <NavLink className={getStyle} to={'/'}><IoMdHome/>Home</NavLink>
      <NavLink className={getStyle} to={'/archive'}><IoMdArchive/>Archive</NavLink>
      <NavLink className={getStyle} to={'/important'}><MdLabelImportant/>Important</NavLink>
      <NavLink className={getStyle} to={'/bin'}><IoMdTrash/>Bin</NavLink>
    </aside>
  )
}

export default Sidebar
