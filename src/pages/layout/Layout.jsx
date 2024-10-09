import Sidebar from '../../components/sidebar/Sidebar';
import Topbar from '../../components/topbar/Topbar';
import './Layout.css';
import {Outlet} from 'react-router-dom'
const Layout = ()=>{
    return(
        <div className="layoutContainer">
            <div>
                <Topbar/>
                </div>
            <div className='sidebarAndContentContainer'>
                <div className='sidebarLayout'><Sidebar/></div>
                <div className="layoutContentContainer">
                      <Outlet/>
                </div>
            </div>
        </div>
    )
}

export default Layout;