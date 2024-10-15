import { Fragment } from "react";
import Navbar from "../../Components/Navbar/Navbar";
import Sidebar from "../../Components/sidebar/Sidebar";
import { IoMdAdd } from "react-icons/io";
import { useNotes } from "../../context/notes-context";

import NotesCard from "../../Components/NotesCard/Index";

export const Home = () => {

    const { title, text, notes, notesDispatch } = useNotes();

    const onTitleChange = (e) => {
        notesDispatch({
            type: "TITLE",
            payload: e.target.value
        });
    };

    const onTextChange = (e) => {
        notesDispatch({
            type: "TEXT",
            payload: e.target.value
        });
    };

    const onAddClick = () => {
        notesDispatch({
            type: 'ADD_NOTE'
        });
        notesDispatch({
            type: "CLEAR_INPUT"
        });
    };

    // Corrected filtering logic
    const pinnedNotes = notes?.filter(({ isPinned }) => isPinned);
    const otherNotes = notes?.filter(({ isPinned }) => !isPinned);

    return (
        <Fragment>
            <Navbar />
            <main className="flex gap-3 ">
                <Sidebar />
                <div className="flex flex-col w-screen mt-7  " >
                    <div className="flex flex-col w-[450px] relative mt-6 self-center ">
                        <input
                            value={title}
                            onChange={onTitleChange}
                            className="border border-neutral-200 rounded-t-md focus:outline-none border-b-0 p-1"
                            type="text"
                            placeholder="Enter title"
                        />
                        <textarea
                            value={text}
                            onChange={onTextChange}
                            className="border border-neutral-200 rounded-b-md h-[100px] focus:outline-none border-t-0 p-1"
                            placeholder="Enter text"
                        />
                        <button
                            disabled={title.length === 0}
                            onClick={onAddClick}
                            className="w-7 h-7 absolute bottom-0 right-0 border bg-indigo-900 text-slate-50 rounded-full cursor-pointer"
                        >
                            <IoMdAdd className="w-7 h-7" />
                        </button>
                    </div>

                    <div className="mt-14 ml-10 flex flex-col">

                        {pinnedNotes.length > 0 && (
                            <div className=" border-b pb-10 " >
                                <h3>Pinned Notes</h3>
                                <div className="flex p-2 flex-wrap gap-4 ">
                                    {pinnedNotes.map(({ id, title, text, isPinned }) => (
                                        <NotesCard key={id} id={id} title={title} text={text} isPinned={isPinned} />
                                    ))}
                                </div>
                            </div>
                        )}

                        <div>
                            {
                                pinnedNotes?.length > 0 && (<h3 className="mt-14">Other Notes</h3>)
                            }

                            <div className="flex p-2 flex-wrap gap-4">
                                {otherNotes.map(({ id, title, text, isPinned }) => (
                                    <NotesCard key={id} id={id} title={title} text={text} isPinned={isPinned} />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </Fragment>
    );
};
