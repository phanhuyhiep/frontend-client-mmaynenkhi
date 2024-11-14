import { Outlet } from "react-router-dom"
import HeaderPage from "../../components/header/header"
import FooterPage from "../../components/footer/footer"

const DefaultClient = () => {
  return (
    <div>
        <div>
            <HeaderPage/>
        </div>

        <div>
            <Outlet/>
        </div>

        <div>
            <FooterPage/>
        </div>
    </div>
  )
}

export default DefaultClient