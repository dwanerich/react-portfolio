import Work from './Projects';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Form from './Form'
import Details from './Details';
import NotFound from './NotFound';
import Tools from './Tools';
import About from './About';
import AnimatedNav from './AnimatedNav';
import Services from './Services';
import Library from './Library';
import Resume from './Resume';


function App() {
  return (
    <Router>
    <div className="App">
      <AnimatedNav />
     <div className="content">
      <Routes>
      <Route exact path="/" element={<Work/>}></Route>
      <Route exact path="/about" element={<About/>}></Route>
      <Route exact path="/resume" element={<Resume/>}></Route>

        <Route exact path="/tools" element={<Tools/>}></Route>
        <Route exact path="/services" element={<Services/>}></Route>
        <Route exact path="/library" element={<Library/>}></Route>


        <Route path="/create" element={<Form/>}></Route>
        <Route path="/blogs/:id" element={<Details/>}></Route>
        <Route path='*' element={<NotFound />}>
        </Route>
      </Routes>
     </div>
    </div>
    </Router>
  );
}

export default App;
