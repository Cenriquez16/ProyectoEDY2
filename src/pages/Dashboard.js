import { Fragment, useEffect, useRef } from "react";
import Header from "../components/Header";
import Action from "../components/Action";
import Contain from "../components/cards/Contain";



const Dasboard = (props) => {
    return(
        <Fragment>
            <Header/>
            <Contain />
        </Fragment>
    )
}
export default Dasboard