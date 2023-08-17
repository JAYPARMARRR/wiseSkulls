import "./Footer.css"
import { Pagination } from 'antd';

const Footer = () => {
  return (
    <>
        
         <Pagination defaultCurrent={6} total={500} />;

    </>
  )
}

export default Footer