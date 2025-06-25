import Search from "./components/Search.jsx";
import {useState} from "react";

const App = () => {
    const [searchTerm, setSearchTerm] = useState("")
    return <main>
        <div className="pattern"></div>

        <div className="wrapper">
            <img src="./hero.png" alt="Hero Banner" />
            <header>
                <h1>Find <span className="text-gradient">Movies</span> You'll Enjoy Without the Hassle</h1>
            </header>

            <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        </div>
    </main>
}

export default App;