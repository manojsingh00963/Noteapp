import { useNotes } from "../../context/notes-context";
import { LuPin } from "react-icons/lu";
import { IoMdArchive } from "react-icons/io";
import { MdDelete } from "react-icons/md";

// eslint-disable-next-line react/prop-types
function NotesCard({ id, title, text, isPinned }) {

    const { notesDispatch } = useNotes();


    const onPinClick = (id) => {
        !isPinned ? notesDispatch({
            type: 'PIN',
            payload: { id }
        }) : notesDispatch({
            type: 'UNPIN',
            payload: { id }
        })

    }

    return (
        <div className="border border-slate-300 p-2 rounded-sm  w-[250px] bg-neutral-700 text-zinc-100" key={id}>
            <div className="flex justify-between border-b-2 ">
                <p className=" cursor-not-allowed " >{title}</p>
                <button onClick={() => onPinClick(id)}>
                    <LuPin className={` ${isPinned ? ' fill-neutral-100 ' : 'text-zinc-200'} `} />
                </button>
            </div>
            <div className="flex flex-col  ">
                <p className=" overflow-auto" > {text}</p>
                <div className=" ml-auto " >
                    <button className=" pr-2 " >
                        <IoMdArchive />
                    </button>
                    <button className=" pr-0 " >
                        <MdDelete />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default NotesCard
