import './App.css';
import Banner from './Main/content';
import Contact from './Main/Contact';
import Filters from './Main/Filters';
import Jobs from './Main/Jobs';
import Navbar from './Main/Navbar';
import { JobsContext } from './Main/JobsContext';
import useCustomHook from './Main/useCustomHook';

function App() {

  const { position, setPosition, location, setLocation,posts,handleSearch,setWorkExperience,workExperience,setDateFilter,setSalaryFilter,jobs,setPosts } = useCustomHook();


  const data = {position, setPosition, location, setLocation,posts,handleSearch,setWorkExperience,workExperience,setDateFilter,setSalaryFilter,jobs,setPosts}

  return (
    <JobsContext.Provider value={data}>

      <Navbar />
      <Banner />
      <div className="container d-flex flex-lg-row flex-column column-gap-lg-4 row-gap-4 my-5 ">
        <Filters />
        <Jobs />
        <Contact />
      </div>
      

      <div className='text-center'>by remotive.com</div>


    </JobsContext.Provider>

  );
}

export default App;
