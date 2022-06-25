import './App.css';
import MainPageClass from "./pages/mainPageClass/MainPageClass";
import MainPageFunc from "./pages/mainPageFunc/MainPageFunc";
import UsersPage from "./pages/usersPage/UsersPage";

function App() {
    return (
        <div className="App">
            <MainPageClass/>
            ---------------------------------------
            <MainPageFunc/>
            ---------------------------------------
            <UsersPage/>
        </div>
    );
}

export default App;
