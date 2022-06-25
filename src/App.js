import './App.css';
import MainPageClass from "./pages/mainPageClass/MainPageClass";
import MainPageFunc from "./pages/mainPageFunc/MainPageFunc";
import UsersPage from "./pages/usersPage/UsersPage";
import ContactsPage from "./pages/ContactsPage/ContactsPage";

function App() {
    return (
        <div className="App">
            {/*<MainPageClass/>*/}
            {/*---------------------------------------*/}
            {/*<MainPageFunc/>*/}
            {/*---------------------------------------*/}
            {/*<UsersPage/>*/}

            <ContactsPage/>
        </div>
    );
}

export default App;
