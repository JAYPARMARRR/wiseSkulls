import "./TableNavbar.css"
import RisetImg from "./grds.png"
import ExpartImg from "./Group 1259.png"
import setingImg from "./setingimg.png"
import TablelUser from "../TablelUser/TablelUser"
import { Button, Modal } from 'antd';
import { useState } from "react"

const TableNavbar = () => {

  const [modal1Open, setModal1Open] = useState(false);
  const [modal2Open, setModal2Open] = useState(false);






  return (
    <>
         <div className="TableNavbar">
      <div className="TableNavbar-left-side">
        <input type="text" placeholder="Search" className="TableNavbar-search-box" />
      </div>
      <div className="TableNavbar-navbar-center-box">
        <div className="TableNavbar-navbar-center-wiseskiils">
         Wiseskulls   
        </div>
      </div>
      <div className="TableNavbar-right-side">
        <img src={setingImg} alt="Image 1" className="TableNavbar-nav-image" />
        <img src={RisetImg} alt="Image 2" className="TableNavbar-nav-image" />
        <img src={ExpartImg} alt="Image 3" className="TableNavbar-nav-image" />
        <button className="TableNavbar-nav-Delete-button">Delete</button>
        <button className="TableNavbar-nav-button">Add Hotlist</button>
      </div>
    </div>
<TablelUser/>
{/* //////////////////////////////////////////////////////////////////////////////////////////////////// */}




<Button type="primary" onClick={() => setModal1Open(true)}>
        Display a modal dialog at 20px to Top
      </Button>
      <Modal
        title="20px to Top"
        style={{ top: 20 }}
        open={modal1Open}
        onOk={() => setModal1Open(false)}
        onCancel={() => setModal1Open(false)}
      >
        <p>some contents...</p>
        <p>some contents...</p>
        <p>some contents...</p>
      </Modal>
      <br />
      <br />
      <Button type="primary" onClick={() => setModal2Open(true)}>
        Vertically centered modal dialog
      </Button>
      <Modal
        title="Vertically centered modal dialog"
        centered
        open={modal2Open}
        onOk={() => setModal2Open(false)}
        onCancel={() => setModal2Open(false)}
      >
        <p>some contents...</p>
        <p>some contents...</p>
        <p>some contents...</p>
      </Modal>









    </>
  )
}

export default TableNavbar