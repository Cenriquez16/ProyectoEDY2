import axios from "axios";
import { useContext, useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import classes from './Header.module.css'
import AuthContext from "./store/auth-context";
import { CgLogOut } from "react-icons/cg";
import { WiDayCloudyGusts } from "react-icons/wi";

const Header = (props) => {

    const authCtx = useContext(AuthContext);
    const navigate = useNavigate();

    const storedUserList = localStorage.getItem("newUser")
    let userList = JSON.parse(storedUserList) || []
    const city = userList.city;

    const [data, setData] = useState({})

    const apiKey = "6d14aead20d95bbf23cd157ad00615d3"


    const h1 = useRef();
    const timeUpdate = () => {
        const hour = new Date();
        const hourNow = hour.toLocaleTimeString();
        return `${hourNow}`;
      };

      useEffect(() => {
        const cl = setInterval(() => {
          h1.current.innerHTML = `${timeUpdate()}`;
        }, 1000);
        return () => clearInterval(cl);
      }, []);

    const getWhwaterLoc = (city) => {
        if(!city) return
        const apiURL = "https://api.openweathermap.org/data/2.5/weather?q="+ [city] +"&APPID=" + [apiKey]
        axios.get(apiURL).then((res) => {
            // console.log("response", res.data)

            setData(res.data)
        }).catch((err) => {
            // console.log(apiURL
            // console.log("err", err)
        })
    };

    useEffect(() => {
        return getWhwaterLoc(city);
    }, [city] );

    const LogoutHandleClick = () => {
        authCtx.logout()
        localStorage.removeItem('token');
        navigate('/login')
    };

    const d = new Date();
    const weekDay = ['Sun', 'Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat'];
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'may', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];
    const day = weekDay[d.getDay()];
    const month = months[d.getMonth()];
    const date = d.getDate();
    const year = d.getFullYear();

    return(
        <header className={classes.header}>
            <div className={classes.title}>
                <h1>Weekly planner</h1>
                <h5>Use this planner to organize your daily issues</h5>
            </div>
            <nav className={classes.nav}>
                <ul>
                    <li ref={h1} style={{fontSize:'30px', fontWeight:'700'}}>{timeUpdate()}</li>
                    <li>{month} / {date} / {year} {day}</li>
                    
                </ul>

            </nav>
            <div>{
                    Object.keys(data).length > 0 &&
                    <div>
                        <h5>
                            {data?.name}
                        </h5>
                        <h6>
                        {((data?.main?.temp) - 273.15).toFixed(1)}°C
                        </h6>
                        <WiDayCloudyGusts/>
                    </div>
                }</div>
            <div> <button onClick={LogoutHandleClick} className={classes.button}><CgLogOut/>Log Out </button></div>
        </header>
    )
}
export default Header