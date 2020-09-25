import React, { useEffect } from "react";
import axios from "axios";
import SpotifyPlayer from "react-spotify-player";

const ids = [
    "37i9dQZF1DWY1kDGbdPb81",
    "37i9dQZF1DWWiO1wG95aPP",
    "37i9dQZF1DXdFesNN9TzXT",
    "37i9dQZF1DWXXY3B0lMVvj",
];
const songs = [
    "6UeEm5XPsleVD85kNHCu1n",
    "5XDngPrHgHqf7eWBxe2D5L",
    "0HI3O9uCBWtu7B3boRpCaL",
    "53keqrDTkt1GE9hJgUoql4",
    "3JlCtKzdOP25gelnwMI9RF",
    "1mPNK9DQVA7gJNtJ20PZu3",
    "36EQ4an9jT5ltIW6ICbJv1",
    "2kVKDFmDFuKNR4tuDgZqWM",
    "0k7vYrY0RQq0q0aCg5t0X9",
    "2hWUcbgPqVsvsgHMWEvSUe",
    "5we8idYGViC40kjeHejRog",
    "018eOid2aGaPdxon7T6GsC",
    "3Frn3MJRQFvjCIbTbBUZCS",
    "6QPFWNUw9iGFZAXgqecunp",
    "57jOEZtoLQK4zF2x55bdkp",
    "5JOsGkhl49EoiBQpZLL1SC",
    "1enJYkwGKshAe4TAGXYd1V",
    "4GagsETs7qfR3cwQkRcXgb",
    "14eotumM24MhIgzidgN3Jx",
    "29ZOsiLkEf9vNyG51FEjtH",
    "2nLjOby9RX2bktaHhXvYwt",
    "2qlOW8NtPlGOxosRVEC4Tr",
    "6boY1a6BLjsuL7wQ1JFgi5",
    "47r6o4Yv3nXAsWjVp7TK4z",
    "7EFJqjBmqinK6Eyj3rW4ne",
    "2XXea7eZyOyQWHHs4s7yI2",
    "5KmSke7RYfo2v1swpB37R8",
    "3UDP2XJeUCeYurVcjn7fGg",
    "4z2ZcW2uzBufnF2BHZs2YW",
    "1a84KIendwJaL5wjdaVL8e",
    "3tzNahvEgF6D5BgARz8rzS",
    "6axlpXHDbImU5sT0n77HsF",
    "2G1OmcDGXu2sFfBjgw9IsL",
    "4Qnhgqm32HUt8rIOqURZ1w",
    "1wbeFD7ZPdXPw6HHnCVRyZ",
    "5L7AEtny2lz75LeJLoEKuF",
    "5lKKrQhrYs72txxYerjiSJ",
    "3Vp2ThwP6W4rxyIb4c9LzO",
    "7EGomqj4dZN9vUzLsXbNrv",
    "1vSBUqCgTFYKkiaLAZUPGX",
];
let result;
const size = {
    width: "100%",
    height: 300,
};
const view = "coverart";
const theme = "white";

export default function Testingapi() {
    // useEffect(() => {
    //     ids.map((uri) => {
    //         let i = 0;

    //         axios
    //             .get(
    //                 `https://api.spotify.com/v1/playlists/${uri}/tracks?market=IN&fields=fields%3Dtracks&limit=10&offset=1`,
    //                 {
    //                     headers: {
    //                         "Content-Type": "application/json",

    //                         Authorization:
    //                             "Bearer BQATH_l__z4PLPAXDct5fOe-2dqvzZphyNBMwQ5r1JrkFMMfuW6wsHHjyja1VJBnei-zMLPyesGVejDKvIGwrzWXGplm1XXuWxgCn4I93qcZrg8XWWPCiy1O20KxOyOn77gPOKrC-QajHOo97S9EDBy3xjVKyBeozPtDNZU",
    //                     },
    //                 }
    //             )
    //             .then((res) => {
    //                 while (i < 9) {
    //                     result = res.data.items.map((item) => {
    //                         // console.log(item.track.uri.substring(14));

    //                         songs.push(item.track.uri.substring(14));
    //                         console.log(songs);
    //                         i++;
    //                     });
    //                 }
    //             });
    //     });
    // }, []);
    return (
        <div>
            {songs.map((song) => {
                return (
                    <div className="space">
                        <SpotifyPlayer
                            uri={`spotify:track:${song}`}
                            size={size}
                            view={view}
                            theme={theme}
                        />
                    </div>
                );
            })}
        </div>
    );
}
