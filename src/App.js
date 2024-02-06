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
import Completeprofile from './component/complete-profile';
import Donecard from './component/donecard';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";


function App() {
  return (
    <div className="App">
      {/* <Header /> */}
      <Router>
        <Routes>
          <Route path="/faq" element={<Faq />} />
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/author" element={<Author />} />
          <Route path="/claim" element={<Claim />} />
          <Route path="/claimed" element={<Claimed />} />
          <Route path="/signup" element={<Singup />} />
          <Route path="/success" element={<Success />} />
          <Route path="/verify" element={<Verify />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/property-detail" element={<Propertydetail />} />
          <Route path="/property-compare" element={<Propertycompare />} />
          <Route path="/properties" element={<Properties />} />
          <Route path="/email-page" element={<Emailpage />} />
          <Route path="/marketplace" element={<Marketplace />} />
          <Route path="/marketplace-two" element={<Marketplacetwo />} />
          <Route path="/wallet" element={<Wallet />} />
          <Route path="/wallet-two" element={<Wallettwo />} />
          <Route path="/purchase-confirm" element={<Purchaseconfirm />} />
          <Route path="/my-investment" element={<Myinvestment />} />
          <Route path="/complete-profile" element={<Completeprofile />} />
        {/* <Header /> */}
        {/* <Autanticationheader />  */}
        {/* <DashHeader />  */}
        {/* <Donecard />  */}
        {/* <Sellingshare/> */}
        {/* <Addmoney/> */}
        {/* <Footer /> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
