import "./Footer.css";




import { Pagination } from "antd";

const Footer = () => {
  return (
    <>
    <div className="footer-main"> 
    <div className="showing-footer-text-1">Showing 1 to 10 of 5555 entries</div> 

    {/* <div className="showing-footer-text-2">Candidates per page</div> */}

      <Pagination  defaultCurrent={1} total={5000}  className="pagination-of-footer" />
    </div>
    </>
  );
};

export default Footer;
