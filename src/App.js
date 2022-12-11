import React from "react";
import './styles/main.css';
import './styles/responsive.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import { getUserLogged, putAccessToken } from "./utils/api";
import HomePage from './pages/HomePage';
import AboutUsPage from './pages/AboutUsPage';
import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage';
import DasboardPage from "./pages/DasboardPage";
import ModulesPage from "./pages/ModuleSdPage";
import ProfilePage from './pages/ProfilePage';
import ForumPage from "./pages/ForumPage";


class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      authedUser: null,
      initializing: true,
    }
  }

  async onLoginSuccess({ accessToken }) {
    putAccessToken(accessToken);
    const { data } = await getUserLogged();

    this.setState(() => {
      return {
        authedUser: data,
      };
    });
  }

  async componentDidMount() {
    document.documentElement.setAttribute('data-theme', this.state.theme);
    const { data } = await getUserLogged();
    this.setState(() => {
      return {
        authedUser: data,
        initializing: false
      };
    });
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.theme !== this.state.theme) {
      document.documentElement.setAttribute('data-theme', this.state.theme);
    }
  }

  onLogout() {
    this.setState(() => {
      return {
        authedUser: null
      }
    });

    putAccessToken('');
  }

  render() {
    return (
      <div className="App">
        <main>
          <Routes>
            <Route path="/" exact element={<HomePage />} />
            <Route path="/about" exact element={<AboutUsPage />} />
            <Route path="/forum" element={<ForumPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/dasboard" element={<DasboardPage />} />
            <Route path="/modules" element={<ModulesPage />} />
            <Route path="/profile" element={<ProfilePage />} />
          </Routes>
        </main>
      </div>
    )

  }

}

export default App;
