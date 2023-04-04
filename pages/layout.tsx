import Footer from "./footer"
import Navbar from "./navbar"

const AppLayout=({children}:any)=>{
return(<>
<Navbar/>
{children}
<Footer/>
</>
);
}

export default AppLayout;