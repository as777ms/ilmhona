import {Route, Routes, BrowserRouter as Router} from 'react-router-dom'
import Main from './pages/main/main'
import Digitalfreelance from './pages/digitalfreelance/digitalfreelance'
import Androiddev from './pages/androiddev/androiddev'
import Iosdeveloper from './pages/iosdeveloper/iosdeveloper'
import Projectmanager from './pages/projectmanager/projectmanager'
import Pythonbeckend from './pages/pythonbeckend/pythonbeckend'
import Graphicdesign from './pages/graphicdesign/graphicdesign'
import Frontenddev from './pages/frontenddev/frontenddev'
import Jsbackenddev from './pages/jsbackenddev/jsbackenddev'
import Coursepythonlvl1 from './pages/coursepythonlvl1/coursepythonlvl1'
import Coursewebdesign from './pages/coursewebdesign/coursewebdesign'
import Coursewebdesignzero from './pages/coursewebdesignzero/coursewebdesignzero'
import Coursejslvl1 from './pages/coursejslvl1/coursejslvl1'
import Coursesmm from './pages/coursesmm/coursesmm'
import Courseandroidzero from './pages/courseandroidzero/courseandroidzero'
import Courseandroidlvl1 from './pages/courseandroidlvl1/courseandroidlvl1'
import Courseioszero from './pages/courseioszero/courseioszero'
import Courseioslvl1 from './pages/courseioslvl1/courseioslvl1'
import Coursepythonzero from './pages/coursepythonzero/coursepythonzero'
import Coursepythonlvl2 from './pages/coursepythonlvl2/coursepythonlvl2'
import Coursewebzero from './pages/coursewebzero/coursewebzero'
import Coursejslvl2frontend from './pages/coursejslvl2frontend/coursejslvl2frontend'
import Coursejslvl2beckend from './pages/coursejslvl2beckend/coursejslvl2beckend'
import Courseprojectmanagmentintro from './pages/courseprojectmanagmentintro/courseprojectmanagmentintro'
import Courseprojectmanagmentlvl1 from './pages/courseprojectmanagmentlvl1/courseprojectmanagmentlvl1'
import Courseprojectmanagmentlvl2 from './pages/courseprojectmanagmentlvl2/courseprojectmanagmentlvl2'
import Coursegraphicdesignpro from './pages/coursegraphicdesignpro/coursegraphicdesignpro'
import Coursegraphicdesignzero from './pages/coursegraphicdesignzero/coursegraphicdesignzero'
import Coursegraphicdesignlvl1 from './pages/coursegraphicdesignlvl1/coursegraphicdesignlvl1'
import Courseenglishelementary from './pages/courseenglishelementary/courseenglishelementary'
import Courseenglishfortech from './pages/courseenglishfortech/courseenglishfortech'
import Courseintrotodata from './pages/courseintrotodata/courseintrotodata'
import Courseproductmanagment from './pages/courseproductmanagment/courseproductmanagment'
import Courseuxui from './pages/courseuxui/courseuxui'
import Courseilmhonastroytellingwithscretch from './pages/courseilmhonastroytellingwithscretch/courseilmhonastroytellingwithscretch'
import Courseilmhonakidscsgo from './pages/courseilmhonakidscsgo/courseilmhonakidscsgo'
import Professionandroiddev from './pages/professionandroiddev/professionandroiddev'
import Professioniosdev from './pages/professioniosdev/professioniosdev'
import Professionfrontenddev from './pages/professionfrontenddev/professionfrontenddev'
import Prfjsbeckenddev from './pages/prfjsbeckenddev/prfjsbeckenddev'
import Prfpythonbackenddev from './pages/prfpythonbackenddev/prfpythonbackenddev'
import Prfgraphicdesigner from './pages/prfgraphicdesigner/prfgraphicdesigner'
import Prfprojectmanager from './pages/prfprojectmanager/prfprojectmanager'
import Donishgo from './pages/donishgo/donishgo'
import Blogall from './pages/blogall/blogall'
import Techjam from './pages/techjam/techjam'
import Faqs from './pages/faqs/faqs'
import Location from './pages/location/location'
import About from './pages/about/about'
import Support from './pages/support/support'
import Coursedigitalfreelance from './pages/coursedigitalfreelance/coursedigitalfreelance'
import Layout from './components/layout/layout'

// img
import ilmhona from './assets/img/no_ilmhona_colored_logo_small_new.svg'  

const App = () => {
  return (
   <Router>
    <Routes>
      <Route element={<Layout />}>
      <Route path='/' element={<Main ilmhona={ilmhona}/>}/>

      {/* header  */}
      <Route path='/profession-android-dev' element={<Androiddev />}/>
      <Route path='/profession-ios-dev' element={<Iosdeveloper />}/>
      <Route path='/profession-project-manager' element={<Projectmanager />}/>
      <Route path='/profession-python-beckend-dev' element={<Pythonbeckend />}/>
      <Route path='/profession-graphic-design' element={<Graphicdesign />}/>
      <Route path='/profession-front-end-dev' element={<Frontenddev />}/>
      <Route path='/profession-js-backend-dev' element={<Jsbackenddev />}/>
      {/* //header */}

      {/* courses dates */}
      <Route path='/course-digital-freelance' element={<Digitalfreelance />}/>
      <Route path='/course-python-lvl-1' element={<Coursepythonlvl1 />}/>
      <Route path='/course-webdesign' element={<Coursewebdesign />}/>
      <Route path='/course-web-zero' element={<Coursewebdesignzero />}/>
      <Route path='/course-js-lvl-1' element={<Coursejslvl1 />}/>
      <Route path='/course-smm' element={<Coursesmm />}/>
      {/* //courses dates */}

      {/* footer  */}
      <Route path='/course-android-zero' element={<Courseandroidzero />}/>
      <Route path='/course-android-lvl-1' element={<Courseandroidlvl1 />}/>
      <Route path='/course-ios-zero' element={<Courseioszero />}/>
      <Route path='/course-ios-lvl-1' element={<Courseioslvl1 />}/>
      <Route path='/course-python-zero' element={<Coursepythonzero />}/>
      {/* Reapet */}
      {/* <Route path='/course-python-lvl-1' element={<Coursepythonlvl1 />}/> */}
      <Route path='/course-python-lvl-2' element={< Coursepythonlvl2/>}/>
      <Route path='/course-web-zero' element={<Coursewebzero />}/>
      {/* Repeat */}
      {/* <Route path='/course-js-lvl-1' element={<Coursejslvl1 />}/> */}
      <Route path='/course-js-lvl-2-frontend' element={<Coursejslvl2frontend />} />
      <Route path='/course-js-lvl-2-beckend' element={<Coursejslvl2beckend />} />
      <Route path='/course-project-managment-intro' element={<Courseprojectmanagmentintro />}/>
      <Route path='/course-project-managment-lvl-1' element={<Courseprojectmanagmentlvl1 />}/>
      <Route path='/course-project-managment-lvl-2' element={<Courseprojectmanagmentlvl2 />}/>
      <Route path='/course-graphic-design-zero' element={<Coursegraphicdesignzero />}/>
      <Route path='/course-graphic-design-lvl-1' element={<Coursegraphicdesignlvl1 />}/>
      <Route path='/course-graphic-designer-pro' element={<Coursegraphicdesignpro />}/>
      <Route path='/course-english-elementary' element={<Courseenglishelementary />}/>
      <Route path='/course-english-for-tech' element={<Courseenglishfortech />}/>
      {/* Repeat */}
      {/* <Route path='/course-smm' element={<Coursesmm/>}/> */}
      <Route path='/course-intro-to-data' element={<Courseintrotodata />}/>
      <Route path='/course-product-management' element={<Courseproductmanagment />}/>
      <Route path='/course-ux-ui' element={<Courseuxui />}/>
      <Route path='/course-ilmhonakids-storytelling-with-scatch' element={<Courseilmhonastroytellingwithscretch />}/>
      <Route path='/course-ilmhonakids-cs50' element={<Courseilmhonakidscsgo />}/>
      {/* Profesions */}
      <Route path='/profession-android-dev' element={<Professionandroiddev />}/>
      <Route path='/profession-ios-dev' element={<Professioniosdev />}/>
      <Route path='/profession-frontend-dev' element={<Professionfrontenddev />}/>
      <Route path='/profession-js-backend-dev' element={<Prfjsbeckenddev />}/>
      <Route path='/profession-python-backend-dev' element={<Prfpythonbackenddev />}/>
      <Route path='/profession-graphic-design' element={<Prfgraphicdesigner />}/>
      <Route path='/profession-project-manager' element={<Prfprojectmanager />}/>
      <Route path='/donishgo' element={<Donishgo />}/>
      <Route path='/blog/all' element={<Blogall />}/>
      <Route path='tech-jam' element={<Techjam />}/>
      <Route path='faqs' element={<Faqs />}/>
      


      <Route path='/location' element={<Location />}/>
      <Route path='/about' element={<About />}/>
      <Route path='/support-us' element={<Support />}/>
      

      <Route path='/course-digital-freelance' element={<Coursedigitalfreelance />}/>
      </Route>
    </Routes>
   </Router>
  )
}

export default App

