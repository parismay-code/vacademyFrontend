import {memo} from "react";
import Header from "../Header/index.jsx";
import Footer from "../Footer/index.jsx";

const Layout = ({children}) => {
    return <>
        <Header />
        {children}
        <Footer />
    </>
};

export default memo(Layout);