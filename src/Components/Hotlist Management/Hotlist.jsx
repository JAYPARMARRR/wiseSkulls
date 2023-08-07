import Navbarlogo from "./LogoOfHotlist.png";
import Photo from "./jayu.png";
import NavbarLast from "./NavbarLast.png";
import "./Hotlist.css";
import { useState } from "react";

const Hotlist = () => {

    const [Open, setOpen] = useState(false)

    const PopupOpen = () => {
        setOpen(!Open)
    }

    return (
        <div>
            <nav className="navbar">
                <img src={Navbarlogo} className="Navbarlogo" />

                <div>
                    <img src={Photo} className="img-photo" />
                    <img src={NavbarLast} className="NavbarLast" onClick={PopupOpen} />
                </div>
            </nav>
            {Open && (
                <div className="popup" id="popupModal" >
                    <div className="modal-content">
                        <div>
                            <img src={Photo} />
                            <div>
                                <h4>Jay Parmar</h4>
                                <p>Admin</p>
                            </div>
                        </div>
                        <div>
                  <h5>Manage</h5>
                  <h6><span>logo</span> User</h6>
                        </div>
    
                <h4> <span>logo</span>log Out</h4>



                    </div>

                </div>
            )}


        </div>
    );
};

export default Hotlist;
