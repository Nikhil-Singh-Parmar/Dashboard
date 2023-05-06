import Chart from "./Chart";
import Progressbar from "./Progressbar";
import BsFillXSquareFill from "react-icons/bs";
import './Model.css'

function Model(props){
    return(
        <> <div className='app'>
       <div className="container">
        <div className="close">Close &times;
</div>
       <div className='title'>Apocalypse</div>
        <div className='body'>
            <img className='imgh' alt="Title" src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTzIr8tWdLpzTdpesvtDjn8FoSrXtD76-GFQ&usqp=CAU' style={{height:"225px"}}/>
            <Chart/>
        <Progressbar percentage="40"/>
        <div className="content">Completion Rate</div>
        </div>
       </div>
        </div>
        </>
    )
}
export default Model;