import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import Chat from "./pages/Chat";
import Templates from "./pages/Templates";
import Footer from "./components/Footer";
import NavBar from "./components/Navbar";

function App() {
    return (
        <Router>
            <div className='min-h-screen flex flex-col'>
                <NavBar />
                <div className='flex-1'>
                    <Routes>
                        <Route path='/' element={<Landing />} />
                        <Route path='/chat' element={<Chat />} />
                        <Route path='/templates' element={<Templates />} />
                    </Routes>
                </div>
                <Footer />
            </div>
        </Router>
    );
}

export default App;
