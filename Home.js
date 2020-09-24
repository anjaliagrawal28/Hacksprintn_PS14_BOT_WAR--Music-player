import React from "react";
import svg from "../../Assets/happy.svg";
import svg1 from "../../Assets/gym.svg";
import svg2 from "../../Assets/bored.svg";
import svg3 from "../../Assets/angry.svg";
import svg4 from "../../Assets/love.svg";
import svg5 from "../../Assets/sad.svg";
import svg6 from "../../Assets/confident.svg";
import svg7 from "../../Assets/braekup.svg";
import "./home.css";

export default function Home() {
    return (
        <div className="home">
            <div class="row">
                <div class="col s12 m7">
                    <div class="card">
                        <div class="card-image">
                            <img src={svg} />
                            <span class="card-title">Happy</span>
                        </div>
                        <div class="card-content">
                            <p>
                                I am a very simple card. I am good at containing
                                small bits of information. I am convenient
                                because I require little markup to use
                                effectively.
                            </p>
                        </div>
                        <div class="card-action">
                            <a
                                class="waves-effect waves-light btn"
                                href="/playlists/happy"
                            >
                                Select
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col s12 m7">
                    <div class="card">
                        <div class="card-image">
                            <img src={svg1} />
                            <span class="card-title">Gyming</span>
                        </div>
                        <div class="card-content">
                            <p>
                                I am a very simple card. I am good at containing
                                small bits of information. I am convenient
                                because I require little markup to use
                                effectively.
                            </p>
                        </div>
                        <div class="card-action">
                            <a
                                class="waves-effect waves-light btn"
                                href="/playlists/gymming"
                            >
                                Select
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col s12 m7">
                    <div class="card">
                        <div class="card-image">
                            <img src={svg2} />
                            <span class="card-title">Bored</span>
                        </div>
                        <div class="card-content">
                            <p>
                                I am a very simple card. I am good at containing
                                small bits of information. I am convenient
                                because I require little markup to use
                                effectively.
                            </p>
                        </div>
                        <div class="card-action">
                            <a
                                class="waves-effect waves-light btn"
                                href="/playlists/bored"
                            >
                                Select
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col s12 m7">
                    <div class="card">
                        <div class="card-image">
                            <img src={svg3} />
                            <span class="card-title">Angry</span>
                        </div>
                        <div class="card-content">
                            <p>
                                I am a very simple card. I am good at containing
                                small bits of information. I am convenient
                                because I require little markup to use
                                effectively.
                            </p>
                        </div>
                        <div class="card-action">
                            <a class="waves-effect waves-light btn">Select</a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col s12 m7">
                    <div class="card">
                        <div class="card-image">
                            <img src={svg4} />
                            <span class="card-title">Romance</span>
                        </div>
                        <div class="card-content">
                            <p>
                                I am a very simple card. I am good at containing
                                small bits of information. I am convenient
                                because I require little markup to use
                                effectively.
                            </p>
                        </div>
                        <div class="card-action">
                            <a
                                class="waves-effect waves-light btn"
                                href="/playlists/romance"
                            >
                                Select
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col s12 m7">
                    <div class="card">
                        <div class="card-image">
                            <img src={svg5} />
                            <span class="card-title">Sad</span>
                        </div>
                        <div class="card-content">
                            <p>
                                I am a very simple card. I am good at containing
                                small bits of information. I am convenient
                                because I require little markup to use
                                effectively.
                            </p>
                        </div>
                        <div class="card-action">
                            <a
                                class="waves-effect waves-light btn"
                                href="/playlists/sad"
                            >
                                Select
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col s12 m7">
                    <div class="card">
                        <div class="card-image">
                            <img src={svg6} />
                            <span class="card-title">Confident</span>
                        </div>
                        <div class="card-content">
                            <p>
                                I am a very simple card. I am good at containing
                                small bits of information. I am convenient
                                because I require little markup to use
                                effectively.
                            </p>
                        </div>
                        <div class="card-action">
                            <a class="waves-effect waves-light btn">Select</a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col s12 m7">
                    <div class="card">
                        <div class="card-image">
                            <img src={svg7} />
                            <span class="card-title">Broke up</span>
                        </div>
                        <div class="card-content">
                            <p>
                                I am a very simple card. I am good at containing
                                small bits of information. I am convenient
                                because I require little markup to use
                                effectively.
                            </p>
                        </div>
                        <div class="card-action">
                            <a class="waves-effect waves-light btn">Select</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
