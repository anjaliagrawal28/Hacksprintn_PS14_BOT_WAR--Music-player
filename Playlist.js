import React from "react";
import "./playlist.css";

import SpotifyPlayer from "react-spotify-player";
const bollywood_dance = [
    "37i9dQZF1DX8xfQRRX1PDm",
    "37i9dQZF1DX2CqFedmO3RP",
    "37i9dQZF1DX3txqabhtJQF",
    "37i9dQZF1DX9xdJ1j2eMr3",
    "37i9dQZF1DX9xdJ1j2eMr3",
];
const happy = [
    "37i9dQZF1DWTwbZHrJRIgD",
    "37i9dQZF1DX9xdJ1j2eMr3",
    "37i9dQZF1DWWfZHTa5oacf",
    "37i9dQZF1DX14CbVHtvHRB",
    "37i9dQZF1DX2Y6ZOyTJZfp",
    "37i9dQZF1DX2SThom9u2re",
    "37i9dQZF1DWYT14rrjrMpx",
    "37i9dQZF1DWY1kDGbdPb81",
    "37i9dQZF1DWSG3ias7mSRY",
    "37i9dQZF1DWX76Z8XDsZz",
];
const bollywood_party = [
    "37i9dQZF1DX2CqFedmO3RP",
    "37i9dQZF1DX3txqabhtJQF",
    "37i9dQZF1DX9xdJ1j2eMr3",
    "37i9dQZF1DX2ktNbDFDPWZ",
];

const gymming = ["37i9dQZF1DX3wwp27Epwn5", "37i9dQZF1DWUKXFmhEN5MF"];

const old_is_gold = [
    "37i9dQZF1DXa2huSXaKVkW",
    "37i9dQZF1DX3NU3NvyoJU",
    "37i9dQZF1DWY1kDGbdPb81",
    "37i9dQZF1DX57WIZsVQSIn",
    "37i9dQZF1DX6q19gm5UQXx",
    "37i9dQZF1DX5rOEFf3Iycd",
    "37i9dQZF1DX9kVlnA5Si6s",
    "37i9dQZF1DX2XXIQbPhX3y",
    "37i9dQZF1DXcW9e9oxFsr1",
];

const sad = [
    "37i9dQZF1DWY1kDGbdPb81",
    "37i9dQZF1DWWiO1wG95aPP",
    "37i9dQZF1DXdFesNN9TzXT",
    "37i9dQZF1DWXXY3B0lMVvj",
];

const friendship = ["37i9dQZF1DX11HM36ncRBG"];

const travel = [
    "37i9dQZF1DXd05hd2jmMZL",
    "37i9dQZF1DWT0q6Uh59d7v",
    "37i9dQZF1DXcW9e9oxFsr1",
];

const romance = [
    "37i9dQZF1DWVt4lNGonufn",
    "37i9dQZF1DX14CbVHtvHRB",
    "37i9dQZF1DX3NU3NvyoJUz",
    "37i9dQZF1DWSoLBQNkZBKc",
    "37i9dQZF1DXdSavJjIP6Fb",
    "37i9dQZF1DX2Y6ZOyTJZfp",
    "37i9dQZF1DWZZMVXluTJ3U",
    "37i9dQZF1DXa6iPZDThhLh",
    "37i9dQZF1DX57WIZsVQSIn",
    "37i9dQZF1DX6q19gm5UQXx",
];

const punjabi = ["37i9dQZF1DWTwbZHrJRIgD"];

export default function Playlist(props) {
    let res;
    const size = {
        width: "100%",
        height: 300,
    };
    const view = "coverart";
    const theme = "white";

    if (props.title === "happy") {
        res = happy.map((item) => {
            return (
                <div className="space">
                    <SpotifyPlayer
                        uri={`spotify:playlist:${item}`}
                        size={size}
                        view={view}
                        theme={theme}
                    />
                </div>
            );
        });
    } else if (props.title === "sad") {
        res = sad.map((item) => {
            return (
                <div className="space">
                    <SpotifyPlayer
                        uri={`spotify:playlist:${item}`}
                        size={size}
                        view={view}
                        theme={theme}
                    />
                </div>
            );
        });
    } else if (props.title === "romance") {
        res = romance.map((item) => {
            return (
                <div className="space">
                    <SpotifyPlayer
                        uri={`spotify:playlist:${item}`}
                        size={size}
                        view={view}
                        theme={theme}
                    />
                </div>
            );
        });
    }
    if (props.title === "gym") {
        res = gymming.map((item) => {
            return (
                <div className="space">
                    <SpotifyPlayer
                        uri={`spotify:playlist:${item}`}
                        size={size}
                        view={view}
                        theme={theme}
                    />
                </div>
            );
        });
    }
    return (
        <div className="playlist">
            <div className="main">{res}</div>
        </div>
    );
}
