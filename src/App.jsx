import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeLayout from "./layout/HomeLayout";
import MainLayout from "./layout/MainLayout";
import ProjectList from "./components/ProjectList";
import Projects from "./pages/Projects"

function App() {
  return (
    <div className="h-screen">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomeLayout />} />
          <Route element={<MainLayout />}>
            <Route path="/projects" element={<ProjectList />} />
            <Route path="/all-projects" element={<Projects />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}


export default App;
