import Topbar from "../topbar/Topbar";

const Layout = ({ children }) => {
    return (
        <>
            <Topbar />
            { children }
        </>
    );
}
 
export default Layout;