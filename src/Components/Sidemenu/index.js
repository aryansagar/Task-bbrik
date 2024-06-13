import React from 'react'
import { Menu } from "antd";
import { AppstoreOutlined,SolutionOutlined } from "@ant-design/icons";
import { useNavigate } from 'react-router-dom';
function Sidemenu() {
    const navigate = useNavigate();

  return (
   
    <div className="SideMenu">
        <Menu
        onClick={(item) =>{
        navigate(item.key)
        }}
        items={[{
            label:"BoardTracker",
            icon:<SolutionOutlined />,
            key:"baord"

        },
        {
            label:"DashBoard",
            icon: <AppstoreOutlined />,
            key:"/"
        },
       
            
        ]}
        >

        </Menu>
    </div>
  )
}

export default Sidemenu;