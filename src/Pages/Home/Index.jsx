import { Fragment } from "react";
import Navbar from "../../Components/Navbar/Navbar";
import Sidebar from "../../Components/sidebar/Sidebar";

export const Home = () => {

    return (

        <Fragment>
            <Navbar />
            <main>
                <Sidebar/>
            </main>
        </Fragment>

    )
}