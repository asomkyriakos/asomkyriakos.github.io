import { useState, useEffect } from "react";
import "./styles/App.css";
import FadeContent from "./ReactBitComponents/FadeContent/FadeContent"
import DecryptedText from './ReactBitComponents/DecryptedText/DecryptedText';

function App() {

    const [tasks, setTasks] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [darkMode, setDarkMode] = useState(false);

    function toggleDarkMode() {
        setDarkMode(!darkMode);
        document.body.classList.toggle("dark-mode");
    }

    function openPopup() {
        window.open(
            "/popup",
            "popupWindow",
            "width=400,height=200,scrollbars=yes"
        );
    }

    function addTask(task) {
        setTasks((prev) => [...prev, { text: task, completed: false }]);
    }

    function toggleComplete(index) {
        const updated = [...tasks];
        updated[index].completed = !updated[index].completed;
        setTasks(updated);
    }

    // ✅ Listen for messages from Popup
    useEffect(() => {
        function handleMessage(event) {
            if (event.data?.type === "new-task") {
                addTask(event.data.task);
            }
        }
        window.addEventListener("message", handleMessage);
        return () => window.removeEventListener("message", handleMessage);
    }, []);

    const filteredTasks = tasks.filter((t) =>
        t.text.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
            <div className={darkMode ? "dark-mode" : ""}>
                    <div className="fade-style">
                    <DecryptedText
                        speed={75}
                        className={darkMode ? "dark-mode" : ""}
                        text="TODO LIST for React Bits Showcase"
                        animateOn="view"
                        maxIterations={20}
                        revealDirection="left"
                        sequential={true}
                    />
                    </div>
                <FadeContent blur={true} duration={1000} easing="ease-out" initialOpacity={0}>
                <div className="top-bar">
                    <div className="search-container">
                        <input
                            id="searchBar"
                            type="text"
                            className="search-Bar"
                            placeholder="Search note..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                        <button
                            type="button"
                            className="search-button"
                            onClick={() => {}}
                        >
                            🔍
                        </button>
                    </div>

                    <div className="filter-section">
                        <select id="filter" className="filter-class">
                            <option value="all">All</option>
                            <option value="some">Some</option>
                        </select>
                        <button
                            id="darkModeButton"
                            className="moon-button"
                            onClick={toggleDarkMode}
                        >
                            🌙
                        </button>
                    </div>
                </div>
                </FadeContent>
            <FadeContent blur={true} duration={1000} easing="ease-out" initialOpacity={0}>
                <div id="tableBack">
                    <table id="toDoList">
                        <tbody>
                        {filteredTasks.map((task, index) => (
                            <tr key={index}>
                                <td>
                                    <input
                                        type="checkbox"
                                        checked={task.completed}
                                        onChange={() => toggleComplete(index)}
                                    />
                                    <span
                                        className="tableText"
                                        style={{
                                            textDecoration: task.completed
                                                ? "line-through"
                                                : "none",
                                        }}
                                    >
                        {task.text}
                      </span>
                                </td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>
        </FadeContent>
                <button
                    className="purple-button"
                    onClick={openPopup}
                >
                    +
                </button>
                <div className= "chroma-grid-style">

                </div>

            </div>
    );
}

export default App;
