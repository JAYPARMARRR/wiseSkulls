import "./Navbar.css"
import { Modal } from 'antd';

import Navbarlogo from "./LogoOfHotlist.png";
import Photo from "./jayu.png";
import NavbarLast from "./NavbarLast.png";
import navbarimg1 from "./navbarlogo1.png"


import { useEffect, useRef, useState } from "react";
import { BiSolidUser } from "react-icons/bi";
import { FaPowerOff } from "react-icons/fa";
import { useNavigate } from "react-router-dom";















const Navbar = () => {

     const Navigate =useNavigate()
    const [Open, setOpen] = useState(false);
    const menuRef = useRef(null);



    const [DeleteCon, setDeleteCon] = useState(false);

    const showDeleteCon = () => {
        setDeleteCon(true);
      };
    
      const handleOk = () => {
        setDeleteCon(false);
      };
    
      const CancelDeleteCon = () => {
        setDeleteCon(false);
      };


    const PopupOpen = () => {
        setOpen(!Open);
    };

    useEffect(() => {
        document.addEventListener("click", handleOutsideClick, true);
        return () => {
            document.removeEventListener("click", handleOutsideClick, true);
        };
    }, []);

    const handleOutsideClick = (e) => {
        if (menuRef.current && !menuRef.current.contains(e.target)) {
            if (e.target.className === "NavbarLast") {
                return
            } else {
                setOpen(false);
            }
        }
    };






    return (
        <>
            <div>
                <nav className="navbar">
                    <div className="navbar-2-img-main">
                    <img src={navbarimg1}  className="navbarimg1" />
                    <img src={Navbarlogo} className="Navbarlogo" />
                    </div>


                    <div className="navbar-Admin-main">
                        <img src={Photo} className="img-photo" />
                        <img src={NavbarLast} className="NavbarLast" onClick={PopupOpen} />
                    </div>

                </nav>


                {Open && (
                    <div ref={menuRef} className="popup" id="popupModal">
                        <div className="modal-content">
                            <div className="popupShowMain">
                                <img src={Photo} />
                                <div className="popup-Heding-name">
                                    <h3 className="navbar-popup-name">Jay Parmar</h3>
                                    <span className="adminPopupText">Admin</span>
                                </div>
                            </div>
                            <div>
                                <h5 className="Manage-button-popup">Manage</h5>
                                <h5 className="user-logo">
                                    <span>
                                        <BiSolidUser />
                                    </span>{" "}
                                    User
                                </h5>
                            </div>

                            <h4 className="PowerOff-button">
                              
                                <span className="FaPowerOff"  onClick={showDeleteCon} ><FaPowerOff /></span>

                              <span  onClick={showDeleteCon} className="FaPowerOff-logout">  Log Out </span> 
                            </h4>


                        </div>
                    </div>
                )}

            </div>
     
 <Modal open={DeleteCon} onOk={handleOk} onCancel={CancelDeleteCon} footer={null} className="DeleteCon-modal">
        <h2 className="DeleteCon-modal-heding">Confirm Log Out</h2>
<div className="DeleteCon-modal-button-main">
 <button className="DeleteCon-modal-button1" onClick={()=>{Navigate("/")}} >Log Out</button>
 <button className="DeleteCon-modal-button2"    onClick={()=>{Navigate("/hotlistTabelMine")}}>Cancel</button>

</div>


      </Modal>

        </>

    );
};

export default Navbar;
