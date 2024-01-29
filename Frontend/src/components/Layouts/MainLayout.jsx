import { useEffect, useState } from "react";
import Footer from "../Layout/Footer/Footer";
import Header from "../Layout/Header/Header";
import Policy from "../Layout/Policy/Policy";
import Proptypes from "prop-types";
import Seacrch from "../Modals/Search/Seacrch";
import Dialog from "../Modals/Dialog/Dialog";


const MainLayout = (props) => {
  const [isSearch, setIsSearch] = useState(false);
  const [isDialog, SetIsDialog] = useState(false);



  //  Modal dialog bir kere gelmesi için useffect kullandık
  useEffect( ()=>{

    const dialogStatus = localStorage.getItem("dialog") 
    ? JSON.parse(localStorage.getItem("dialog")) 
    :localStorage.setItem("dialog", JSON.stringify(true)) ;

    // Modal dialog 3 saniyede gelmesi için setTimeOut kullandık 
    setTimeout(() =>{
      SetIsDialog(dialogStatus)
    }, 3000)
  
  }, [])


  return (
    <>
      <div style={{ marginBottom: "9%" }}>
        <Header setIsSearch={setIsSearch} />
      </div>
      <Dialog isDialog={isDialog} SetIsDialog={SetIsDialog}/>
      <Seacrch isSearch={isSearch} setIsSearch={setIsSearch} />
      {props.children}
      <Policy />
      <Footer />
    </>
  );
};

export default MainLayout;

MainLayout.propTypes = {
  children: Proptypes.node,

};
