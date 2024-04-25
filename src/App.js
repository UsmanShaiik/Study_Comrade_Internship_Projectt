import './App.css';
import Banner from './all/content';
import Contact from './all/Contact';
import Filters from './all/Filters';
import Jobs from './all/Jobs';
import Navbar from './all/Navbar';
import { JobsContext } from './all/JobsContext';
import useCustomHook from './all/useCustomHook';

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
