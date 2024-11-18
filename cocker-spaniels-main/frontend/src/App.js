import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import PrivateRoute from './components/Routing/PrivateRoute';
import './App.css';
import AddStory from './components/StoryScreens/AddStory';
import DetailStory from './components/StoryScreens/DetailStory';
import Header from './components/GeneralScreens/Header';
import Footer from './components/GeneralScreens/Footer';
import NotFound from './components/GeneralScreens/NotFound';
import EditStory from './components/StoryScreens/EditStory';
import Sc1 from './components/GeneralScreens/sc1';
import AllDogs from './components/GeneralScreens/AllDogs';
import Login from './components/GeneralScreens/Login';
import GunDetails from './components/GeneralScreens/GunDetails';
import PrivacyPolicy from './components/GeneralScreens/Privacy';
import About from './components/GeneralScreens/About';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Home from './components/GeneralScreens/Home';
import Health from './components/GeneralScreens/Health';
import Delivery from './components/GeneralScreens/Delivery';
import FAQ from './components/GeneralScreens/FAQ';
import Contact from './components/GeneralScreens/Contact';

const App = () => {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<LayoutsWithHeader />}>
            <Route index element={<Home />} />
            <Route path="story/:slug" element={<DetailStory />} />
            <Route path="create-post" element={<PrivateRoute><AddStory /></PrivateRoute>} />
            <Route path="story/:slug/like" element={<PrivateRoute><DetailStory /></PrivateRoute>} />
            <Route path="story/:slug/edit" element={<PrivateRoute><EditStory /></PrivateRoute>} />
            <Route path="story/:slug/delete" element={<PrivateRoute><DetailStory /></PrivateRoute>} />
            <Route path="story/:slug/addComment" element={<PrivateRoute><DetailStory /></PrivateRoute>} />
            <Route path="/available-puppies/shelter" element={<AllDogs />} />
            <Route path="gun/:name" element={<GunDetails />} />
            <Route path="privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/about" element={<About />} />
            <Route path='/health-guarantee' element={<Health />} />
            <Route path='/delivery-options' element={<Delivery />} />
            <Route path='/purchase-process' element={<FAQ />} />
            <Route path='/contact-us' element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Route>
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </Router>
  );
}

const LayoutsWithHeader = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
