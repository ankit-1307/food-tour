import "/index.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Regions from "./components/Regions";
import Footer from "./components/Footer";
import { BookList } from "./components/Test";
function App() {
    return (
        <>
            <Navbar />
            <Hero />
            <About />
            <Regions />
            <Footer />
            <BookList />
        </>
    );
}

export default App;
