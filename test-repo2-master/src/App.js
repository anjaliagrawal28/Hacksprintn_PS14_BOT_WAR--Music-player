import React, { useState } from "react";
import "./App.css";
import Home from "./Components/Home/Home";
import DarkHome from "./Components/DarkHome/DarkHome";
import Playlist from "./Playlist/Playlist";
import DarkModeToggle from "react-dark-mode-toggle";
import { BrowserRouter as Router, Route } from "react-router-dom";
import SpotifyPlayer from "react-spotify-player";
import Testingapi from "./Components/RomancePlaylist/RomancePlaylist";
import Feedback from "./Components/Feedback/Feedback";
const size = {
    width: "100%",
    height: 300,
};
const view = "coverart";
const theme = "white";
export default function App() {
    const [isDarkMode, setIsDarkMode] = useState(false);
    const [happy, sethappy] = useState([]);
    const [sad, setsad] = useState(["hello", "hi"]);
    const [romance, setromance] = useState([]);
    let url;

    function removePeople(e) {
        var array = [...sad]; // make a separate copy of the array
        var index = array.indexOf(e.target.value);
        if (index !== -1) {
            array.splice(index, 1);
            setsad({ array });
        }
    }

    return (
        <div className="app">
            <Router>
                <Route path="/" exact>
                    <div className="header">
                        <div className="toggle">
                            {" "}
                            <DarkModeToggle
                                onChange={setIsDarkMode}
                                checked={isDarkMode}
                                size={80}
                            />
                        </div>{" "}
                    </div>

                    {isDarkMode ? <DarkHome /> : <Home />}
                    <div className="footer">
                        <footer class="page-footer">
                            <div class="container">
                                <div class="row">
                                    <div class="col l6 s12">
                                        <h5 class="white-text">
                                            Footer Content
                                        </h5>
                                        <p class="grey-text text-lighten-4">
                                            You can use rows and columns here to
                                            organize your footer content.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div class="footer-copyright">
                                <div class="container">
                                    © 2014 Copyright Text
                                    <a
                                        class="grey-text text-lighten-4 right"
                                        href="#!"
                                    >
                                        More Links
                                    </a>
                                </div>
                            </div>
                        </footer>
                    </div>
                </Route>
                <Route path="/playlists/gymming" exact>
                    <Playlist title="gym" />
                </Route>
                <Route path="/playlists/romance" exact>
                    <Playlist title="romance" />
                </Route>
                <Route path="/playlists/sad" exact>
                    <Playlist title="sad" />
                </Route>
                <Route path="/playlists/happy" exact>
                    <Playlist title="happy" />
                </Route>
                <Route path="/test" exact>
                    <SpotifyPlayer
                        uri="spotify:track:3kuxr8U3QynLzyW82p5hYR"
                        size={size}
                        view={view}
                        theme={theme}
                    />{" "}
                </Route>
                <Route path="/api" exact>
                    <Testingapi />
                </Route>
                <Route path="/feedback" sad={removePeople} exact>
                    <Feedback />
                </Route>
            </Router>
        </div>
    );
}
