import Navbarlogo from "./LogoOfHotlist.png";
import Photo from "./jayu.png";
import NavbarLast from "./NavbarLast.png";
import "./Hotlist.css";
import { useEffect, useRef, useState } from "react";
import { BiSolidUser } from "react-icons/bi";
import { FaPowerOff } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import TableNavbar from "../HotlistTabelMine/TableNavbar/TableNavbar";


const Hotlist = () => {

    const [Open, setOpen] = useState(false);
    const menuRef = useRef(null);

    const Navigate = useNavigate();

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
                    <img src={Navbarlogo} className="Navbarlogo" />

                    <div>
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
                                    <h4>Jay Parmar</h4>
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
                                {" "}
                                <span
                                    className="FaPowerOff"
                                    onClick={() => {
                                        Navigate("/");
                                    }}
                                >
                                    <FaPowerOff />{" "}
                                </span>
                                Log Out
                            </h4>
                        </div>
                    </div>
                )}

            </div>
            <TableNavbar />
        </>

    );
};

export default Hotlist;
