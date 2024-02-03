import logo from './logo.svg';
import './App.css';
import './styletwo.css';
import './stylethree.css';
import Author from './pages/authanticationpages/author';
import Dashboard from './pages/dashboardpages/dashboard';
import Addmoney from './pages/dashboardpages/addmoney';
import Wallet from './pages/dashboardpages/wallet';
import Wallettwo from './pages/dashboardpages/wallettwo';
import Marketplace from './pages/dashboardpages/marketplace';
import Marketplacetwo from './pages/dashboardpages/marketplacetwo';
import Purchaseconfirm from './pages/dashboardpages/purchaseconfirm';
import Services from './pages/landingpages/services';
import Blog from './pages/landingpages/blog';
import Faq from './pages/landingpages/faq';
import Singup from './pages/authanticationpages/signup';
import Verify from './pages/authanticationpages/verify';
import Claim from './pages/authanticationpages/claim';
import Claimed from './pages/authanticationpages/claimed';
import Success from './pages/authanticationpages/success';
import Propertydetail from './pages/dashboardpages/propertydetail';
import Myinvestment from './pages/dashboardpages/myinvestment';
import Propertycompare from './pages/dashboardpages/propertycompare';
import Properties from './pages/dashboardpages/properties';
import Emailpage from './pages/dashboardpages/emailpage';
import Sellingshare from './pages/dashboardpages/sellingshare';
import Profile from './pages/dashboardpages/profile';
import Home from './pages/landingpages/home';
import Header from './component/header';
import Autanticationheader from './component/authanticationheader';
import DashHeader from './component/dashheader';
import Footer from './component/footer';
import Donecard from './component/donecard';


function App() {
  return (
    <div className="App">
      <h1>key</h1>
      <h2>world</h2>
      <h3>mobile</h3>
        <Header /> 
        {/* <Autanticationheader />  */}
        <DashHeader /> 
        {/* <Donecard />  */}
        {/* <Author /> */}
        {/* <Dashboard /> */}
        {/* < Home /> */}
        {/* <Services /> */}
        {/* <Blog /> */}
        {/* <Faq /> */}
        {/* <Singup />  */}
        <Profile /> 
        {/* <Verify />   */}
        {/* <Claim />  */}
        {/* <Claimed />   */}
        {/* <Success />   */}
        {/* <Propertydetail/> */}
        {/* <Purchaseconfirm/> */}
        {/* <Propertycompare/> */}
        {/* <Properties/> */}
        {/* <Sellingshare/> */}
        {/* <Emailpage/> */}
        {/* <Addmoney/> */}
        {/* <Wallet/> */}
        {/* <Wallettwo/> */}
        {/* <Myinvestment/> */}
        {/* <Marketplace/> */}
        {/* <Marketplacetwo/> */}
        {/* <Footer /> */}
        
    </div>
  );
}

export default App;
