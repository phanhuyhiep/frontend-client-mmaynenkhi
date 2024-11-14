import { Outlet } from "react-router-dom"
import HeaderPage from "../../components/header/header"
import FooterPage from "../../components/footer/footer"
import "./default-client.css"
const DefaultClient = () => {
  return (
    <div>
        <div className="header-main">
            <HeaderPage/>
        </div>

        <div className="outlet-main">
            <Outlet/>
        </div>

        <div className="footer-main">
            <FooterPage/>
        </div>
    </div>
  )
}

export default DefaultClient