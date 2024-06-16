import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Aboutus from './components/Aboutus';
import Contactus from './components/Contactus';
import Feedback from './components/Feedback';
import Layout from './components/Layout';
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import AdminLogin from './components/admin/AdminLogin';
import AdminHome from "./components/admin/AdminHome"
import DonorHome from './components/donor/DonorHome';
import Donor from './components/donor/Donor';
import DonorLogin from './components/donor/DonorLogin';
import Receiver from './components/receiver/Receiver';
import AllFeedback from './components/admin/AllFeedback';
import AllContact from './components/admin/AllContact';
import HomePage from './components/HomePage';
import ReceiverLogin from './components/receiver/ReceiverLogin';
import CampDetail from './components/admin/CampDetail';
import ReceiverHome from './components/receiver/ReceiverHome';
import UserEditProfile from './components/receiver/UserEditProfile';
import EditUserProfile from './components/donor/EditUserProfile'
import UpcomingEvents from './components/UpcomingEvents';
import BloodDonationtype from './components/BloodDonationType';
import Commondisease from './components/Commondisease';
import VeiwDonors from './components/admin/VeiwDonors';
import VeiwReceivers from './components/admin/VeiwReceivers';
import DonorCompose from './components/donor/DonorCompose';
import ReceiverCompose from './components/receiver/ReceiverCompose';
import Compatibility from './components/Compatibility';
import SearchDonors from './components/SearchDonors';
import BloodSearch from './components/receiver/BloodSearch';
import ReceiverInbox from './components/receiver/ReceiverInbox';
import Story from './components/donor/Story';
import ShowStory from './components/ShowStory';
import Appointments from './components/donor/Appointments';
import DonationAppointments from './components/admin/DonationAppointments';
import DonationRegister from './components/donor/DonationRegister';
import DonorInbox from './components/donor/DonorInbox';
import AdminCompose from './components/admin/AdminCompose';
import AdminInbox from './components/admin/AdminInbox';
import Appoint_DonorDetails from './components/admin/Appoint_DonorDetails';
import DonationHistory from './components/donor/DonationHistory';

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
    <Route path='/' element={<Layout/>}>
    <Route path=""  element={<App/>}/>
    <Route path="/homepage"  element={<HomePage/>}/>
    <Route path="/aboutus" element={<Aboutus/>}/>
    <Route path="/contactus" element={<Contactus/>}/>
    <Route path="/events" element={<UpcomingEvents/>}/>
    <Route path="/blooddonationtype" element={<BloodDonationtype/>}/>
    <Route path="/commondisease" element={<Commondisease/>}/>
    <Route path="/compatible" element={<Compatibility/>}/>
    <Route path="/searchdonors" element={<SearchDonors/>} />
    <Route path="/showstory" element={<ShowStory/>}/>


    </Route>

    <Route>
      <Route path="/admin_home" element={<AdminHome/>}/>
      <Route path="/adminhomepage" element={<AdminHome/>}/>
      <Route path="/allfeedback" element={<AllFeedback/>}/>
      <Route path="/allcontact" element={<AllContact/>}/>
      <Route path="/admin_login" element={<AdminLogin/>}/>
      <Route path="/addcamp" element={<CampDetail/>}/>
      <Route path="/veiwdonor" element={<VeiwDonors/>}/>
      <Route path="/veiwreceiver" element={<VeiwReceivers/>}/>
      <Route path="/bloodappointments" element={<DonationAppointments/>}/>
      <Route path="/admincompose" element={<AdminCompose/>}/>
      <Route path="/admininbox" element={<AdminInbox/>}/>
      <Route path="/viewappointments" element={<Appoint_DonorDetails/>}/>
    </Route>

    <Route>
      <Route path="/Donor_home" element={<DonorHome/>}/>
      <Route path="/donorhome" element={<DonorHome/>}/>
      <Route path="/donor" element={<Donor/>}/>   
      <Route path="/donor_login" element={<DonorLogin/>}/>
      <Route path="/edituser" element={<EditUserProfile/>}/>
      <Route path="/chat" element={<DonorCompose/>}/>
      <Route path="/donorinbox" element={<DonorInbox/>}/>
      <Route path="/sharestory" element={<Story/>}/>
      <Route path="/donationappointments" element={<Appointments/>}/>
      <Route path="/donationregistration" element={<DonationRegister/>}/>
      <Route path="/history" element={<DonationHistory/>}/>
    </Route>

    <Route>
      <Route path="/receiver_home" element={<ReceiverHome/>}/>
      <Route path="/receiverhomepage" element={<ReceiverHome/>}/>
      <Route path="/feedback" element={<Feedback/>}/>
      <Route path="/receiver" element={<Receiver/>}/>
      <Route path="/receiver_login" element={<ReceiverLogin/>}/>
      <Route path="/editprofile" element={<UserEditProfile/>}/>
      <Route path="/msg" element={<ReceiverCompose/>}/>
      <Route path="/receiverinbox" element={<ReceiverInbox/>}/>
      <Route path="/searchblood" element={<BloodSearch/>}/>
      
    </Route>
    </>

  )
)


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);
