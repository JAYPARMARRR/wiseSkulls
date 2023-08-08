import "./TableNavbar.css"
import RisetImg from "./grds.png"
import ExpartImg from "./Group 1259.png"
import setingImg from "./setingimg.png"


const TableNavbar = () => {
  return (
    <>
         <div className="TableNavbar">
      <div className="TableNavbar-left-side">
        <input type="text" placeholder="Search" className="TableNavbar-search-box" />
      </div>
      <div>
        <div>
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

    </>
  )
}

export default TableNavbar