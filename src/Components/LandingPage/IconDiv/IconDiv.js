import './IconDiv.css';
import Python from './Icon/icons8-python.svg';
import Swift from './Icon/icons8-swift-144.png';
import JS from './Icon/icons8-javascript-144.png';
import Java from './Icon/icons8-java.svg'



function IconDiv(){
    return <div className='IconDivPage1'>
        <img src={Python} alt="PythonLogo"/>
        <img src={Swift} alt="PythonLogo"/>
        <img src={JS} alt="PythonLogo"/>
        <img src={Java} alt="PythonLogo"/>
    </div>
}

export default IconDiv;