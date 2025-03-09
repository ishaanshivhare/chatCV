import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate,
    Outlet,
} from "react-router-dom";
import { AuthProvider, useAuth } from "./context/AuthContext";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Landing from "./pages/Landing";
import Chat from "./pages/Chat";
import Templates from "./pages/Templates";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";

// Main layout for authenticated routes
const MainLayout = () => {
    return (
        <div className='min-h-screen flex flex-col'>
            <NavBar />
            <div className='flex-1'>
                <Outlet />
            </div>
            <Footer />
        </div>
    );
};

// Authentication layout (no navbar/footer)
const AuthLayout = () => {
    return (
        <div className='min-h-screen'>
            <Outlet />
        </div>
    );
};

// Private route wrapper
const PrivateRoute = () => {
    const { user } = useAuth();
    return user ? <MainLayout /> : <Navigate to='/signin' replace />;
};

// Public route wrapper for auth pages
const AuthRoute = () => {
    const { user } = useAuth();
    return user ? <Navigate to='/' replace /> : <AuthLayout />;
};

function App() {
    return (
        <AuthProvider>
            <Router>
                <Routes>
                    {/* Authentication routes */}
                    <Route element={<AuthRoute />}>
                        <Route path='/signin' element={<SignIn />} />
                        <Route path='/signup' element={<SignUp />} />
                    </Route>

                    {/* Protected routes */}
                    <Route element={<PrivateRoute />}>
                        <Route path='/' element={<Landing />} />
                        <Route path='/chat' element={<Chat />} />
                        <Route path='/templates' element={<Templates />} />
                    </Route>

                    {/* Catch-all route */}
                    <Route path='*' element={<Navigate to='/' replace />} />
                </Routes>
            </Router>
        </AuthProvider>
    );
}

export default App;
