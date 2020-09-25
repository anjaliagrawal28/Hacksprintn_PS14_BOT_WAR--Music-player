import React, { useEffect } from "react";
import axios from "axios";
import SpotifyPlayer from "react-spotify-player";

const ids = [
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
const songs = [
    "4YIhJmihoXwjtbY4vsV9Nh",
    "66Nmp3ztIMqX1j8yYtWl1X",
    "16lH4jJGDJmPe0p0EcmxnP",
    "5gN3uHEvCU4Ui6RBCN1lEA",
    "2aUZaQ3ZFxh63KpSBfHNnZ",
    "6shPaz0rzOAGatiY6X6zLQ",
    "0QqmbaEYVb99lPCxPRWkD4",
    "23no8LYw3OBwIOQsqiLUra",
    "0WdbnNKO0Jt4BZACSDQh44",
    "28veUNu4veN0LOBVa0nFw8",
    "4XeiaqgffFCVCnRykaTuPg",

    "0LtuveFgRP4lkksywmCtxV",
    "10Hks1iBOnKIIhouOI4rrk",
    "7Jo4yv6Iiwxla5z10lE1L9",
    "3Eb4VbsbXMpS5Mk9HWTDia",
    "0WdbnNKO0Jt4BZACSDQh44",
    "5fXslGZPI5Cco6PKHzlSL3",
    "6q9XTgfWilsnyiFofvYrIF",
    "1SepR8i0IEemgIwcPzyQru",
    "28veUNu4veN0LOBVa0nFw8",
    "3WXvr6rwl4I8U3ancJ08Yy",
    "7mF1xdQYo6y5789cfAuk7X",
    "6zyozkRLgDlqZIUJzCwkgP",
    "4xmkpE1Si5JL7NFxWrhV0S",
    "6ibFjwPeSfMdZGYv8lMuHD",
    "4eArIrMsptXvjYgSKf6Nz4",
    "25MPTnqXQB1H6OkwSYUXWx",
    "2aUZaQ3ZFxh63KpSBfHNnZ",
    "0WdbnNKO0Jt4BZACSDQh44",
    "65QRFvzB2ZLJ1BygWPxxVj",
    "5w0Xpt2YHT2Y3z3e4UUJP7",
    "5X5db3FrBOHbibrFKA02MQ",
    "5MnAi6ZF7cE8pAz7wYr9Ta",
    "2tjWCe2W7sgvS3C8NHcdtI",
    "1UWacd8x8tPPwmrPB1MoBI",
    "7fyiYhn7STpHvT5g0lbncC",
    "6TFESXMfJJWwccviaxGAMa",
    "1O3WfEwaSpsgZ6tw8jNT8I",
    "7tl1En7BCSnD6Qb5OGlEIE",
    "6mTvwBzWTGDOVeCNQEqtOE",
    "5LSlpm6IaU7Hyqfs8szLGc",
    "6vktNM5djY5fjz9nzSjQZ7",
    "3vj9ElJMp4q6liyPNMn8ki",
    "3nO36g0IGLx6HipK45ExAo",
    "7F8RNvTQlvbeBLeenycvN6",
    "32JRVwx9Supn0wXkbVobrN",
    "4sNiMTu47WkUgW87qeUlWF",
    "3kuxr8U3QynLzyW82p5hYR",
    "6lHBOxVVbjkmByOjHRC2bA",
    "5upmbnXemLfPvs3d2eyHml",
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
    "3P167vmmGRGKHoy7uDugvy",
    "0ZNg3I2kga2XnqKp1Y9PeZ",
    "0zQa7QXLpUZfrrsWbgDZll",
    "0G5tgEYkfBj9pREQWHYCq3",
    "4rSmmC6OYmjVOYxr8ruVWN",
    "2tva3nN2kQhBjHMC7Zlty6",
    "1QufGJee7k9v4Cfp2NxXbv",
    "2b2HutIDmoeBnnKRWDLAtV",
    "6eO9LvEiMqh1CAsa6y3wXP",
    "3FS3ItpUATpALLi90uvkde",
    "7k3jpyYPnVnbO0p7iejWxL",
    "46elU7IBKWf55D5sjHGqO7",
    "7IjnfuMNfdrAXbefurdIIR",
    "2xYbk2WDq38a0wuRyjT1mE",
    "1sxh0eqIb8ulYypPuq6ZRu",
    "0Bz7dfqPY4JOGZO3O1j8Wh",
    "1QQqHS80CpR8tA2lR8O65y",
    "3Ba743TbPb6CGdIIMJuFHj",
    "1d11xbMYeK2ldGOl5QiV2e",
    "6wpYq1QPzd5a3TTQIdPzt7",
    "1fAcwdvJs9WqzimQR6wOJ7",
    "1kcV2LJxt5v0s2cEGtEJ5i",
    "2imIlESSbvYWZL6kDuog9Y",
    "5qtEWwRUX3GKgpWwDQf9SA",
    "1dxbiVeiV7nQ2V9qXnhJiB",
    "00juIvfvPtZ0CfAMwEkHaV",
    "1sbW5E7w8tnqpYk0Frx8QG",
    "4ViufFTGJb3TByFwUnOXhE",
    "14eotumM24MhIgzidgN3Jx",
    "723xQva0yBF7M6K3nDAG8R",
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
    //                         // console.log(songs);
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
