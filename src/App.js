
import { Routes, Route } from 'react-router-dom';
import { BlogProvider } from './BlogContest';
import './App.css';
import CreateBlog from './components/CreateBlog';
import BlogList from './components/BlogList';
import BlogDetails from './components/BlogDetails';

function App() {
  return (
    <div className="App-header">
     <BlogProvider>
      <Routes>
        <Route path="/createblog" element={<CreateBlog />} />
        <Route path="/blogs" element={<BlogList />} />
        <Route path="/blogs/:id" element={<BlogDetails />} />
        <Route path="/" element={<CreateBlog />} />
      </Routes>
    </BlogProvider>
      
    </div>
  );
}

export default App;
