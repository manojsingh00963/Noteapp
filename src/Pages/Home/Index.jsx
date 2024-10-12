import {useReducer} from "react";
import { Fragment } from "react";
import Navbar from "../../Components/Navbar/Navbar";
import Sidebar from "../../Components/sidebar/Sidebar";
import { IoMdAdd } from "react-icons/io";
import { notesReducer } from "../../reducers/notesReducers";
import { LuPin } from "react-icons/lu";
import { IoMdArchive } from "react-icons/io";
import { MdDelete } from "react-icons/md";

export const Home = () => {

    const initialState = {
        title:"",
        text:"",
        notes:[]
    }
    
    const[{title,text,notes}, notesDispatch] = useReducer(notesReducer, initialState)

    const onTitleChange = (e)=>{
        notesDispatch({
            type:"TITLE",
            payload:e.target.value
        })
    }
    const onTextChange = (e)=>{
        notesDispatch({
            type:"TEXT",
            payload:e.target.value
        })
    }

    const onAddClick = ()=>{
        notesDispatch({
            type:'ADD_NOTE'
        })
        notesDispatch({
            type:"CLEAR_INPUT"
        })
    }

    return (

        <Fragment>
            <Navbar />
            <main className="flex gap-3 ">
                <Sidebar/>
                <div>
                    <div className="flex flex-col w-[300px] relative mt-6 ">
                        <input value={title} onChange={onTitleChange} className="border" type="text" placeholder="Enter tittle" />
                        <textarea value={text} onChange={onTextChange} className="border" placeholder="Enter text"/>
                        <button disabled={title.length == 0 } onClick={onAddClick} className=" absolute bottom-1 right-1 "  >
                        <IoMdAdd className=" w-8 h-8"/>
                        </button>
                        </div>
                        <div className=" mt-14 flex flex-wrap gap-4 ">
                            {
                                notes?.length > 0 && notes.map(({id,title,text}) =>(
                                    <div className=" w-56 border border-slate-300 p-2 rounded-sm  " key={id}>
                                        <div className="flex justify-between">
                                            <p>{title}</p>
                                            <button><LuPin/></button>
                                        </div>
                                        <div className="flex flex-col  ">
                                            <p>{text}</p>
                                            <div  className=" ml-auto " >
                                            <button className=" pr-2 " >
                                            <IoMdArchive/>
                                            </button>
                                            <button className=" pr-0 " >
                                            <MdDelete/>
                                            </button>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                </div>
            </main>
        </Fragment>

    )
}