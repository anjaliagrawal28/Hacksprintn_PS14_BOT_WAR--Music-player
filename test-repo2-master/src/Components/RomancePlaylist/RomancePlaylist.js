import React, { useEffect } from "react";
import axios from "axios";
import SpotifyPlayer from "react-spotify-player";

const ids = [
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
const songs = [
    ,
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
    "4ZffnUdAzNy5HvcO3rphIP",
    "2RktkeigsgvhuRNQl0ioGS",
    "6bzSij587sWRb0KtBrtgId",
    "1U5ZT7c7Sw84xDcoEt0Zaq",
    "6udC4b4jOSnHb9ItnXgKLR",
    "7fpWJr5shT90KiCHXKHxch",
    "0F2JKW9PYQgqSmyNM3IV2W",
    "7eQl3Yqv35ioqUfveKHitE",
    "61IEe4ujPKOU7OIyubydfz",
    "6K0Ea7pq2trf6SwsfEKkOp",
    "3ohntZcBS0TNS8iXQG92qx",
    "5YG3JN18pDZGnbSVyWrYqe",
    "5eVJGlvPAtaCqGE3NsOPno",
    "3DC6ach1pIdhse50r21QYu",
    "2DxsGXCFkJvTz7Dv8lgOhd",
    "67p0C6R48gWLkpHPpBkhtG",
    "0CYPWCzses6SznboW6cxbM",
    "7znlcK7p0afWYaJeIOg8Pe",
    "2zdWSvk7ymOqlTA5j0fpJf",
    "13uRpHN3vdbt3B6xUyQEXu",
    "7FOTN3rhNJ98H6SPr7TFtr",
    "6WrHpDuPG7yMRDxFvNpxC1",
    "6BirLItaTffBCKTAeWi3gT",
    "6xCnMMPkIIhn3QyGJgd5xd",
    "2pOk3ktgKol86qvTESSkzl",
    "0es02Rp0p0WpC4WRBDtM8P",
    "4FUBt7iMdDLL4ytVAyT4T7",
    "6Rl4eDKFpvntiRKtPn8d5V",
    "7GVjyt8McqI8jVeezBTmYP",
    "5ZMuv6ESQmOHfXrm8FFncr",
    "4RixtPhUXlci9ad4qIMj23",
    "3rLSVdt9C2Pg2jo90oltnU",
    "6dFQ3W3xuG4ll7cNjIsN2Q",
    "6LVYBlYJ4pezcfk7V8Tttk",
    "6nwRC0UkS1MdOOMjcJsrbX",
    "3xGwSN1dDdpN2s8oP8DRrC",
    "5KikkBMpRSMB4PnroLf5hZ",
    "56Ne0akGQ4GHPxS9MOL57G",
    "66uqHk6VzHAn74ULlsp1t2",
    "64bX3WWzjUomaRfPcQvCNn",
    "3dPSsYIGyxWRzHhvTZPvh0",
    "3Y4NOBkUJcw7aKN4HqPn4q",
    "3oVqDQPihkxRCp4rwJttTf",
    "3tyhf1qZvDARu7mc8LFjBk",
    "6WSCLk5PeIzG3N4AN18XQD",
    "6L4QbsQrP9ZiZdz9SfOSGV",
    "7heMX7gyHP0mhTlNgd7Lxd",
    "7oRWvQZBAYkxxRvQ2nAACP",
    "1mjWhM7GQTTxJxg2F0iCRS",
    "6HlKDKcgvwjvWPrYIqMSaK",
    "1r6sFC5J0p9r3jcfIoSGDM",
    "4GY5NfxXMIODtyNT45sgBh",
    "7v8UGeXCHGfx4MKW2fm3ko",
    "2iLm4lsq4WOXwe6ywPmJfQ",
    "7CwXJRlbOeSGvOSNuhnQB5",
    "3dmIafqhl7ru91EUwnTVMz",
    "47JLXIMp9hZCgPjCsm1QXe",
    "1IXLFDFg4NPcHm6q3JRpS3",
    "6z7Q8IqdR5j69qCtVFOeaw",
    "1qrtCkNns4i13zmkeC2DXD",
    "02zPo0Dt0R4TTFY5zLJZnK",
    "4EWCkL6rAYxOUvXLtcWfKI",
    "04Erz9shwLnOL55apcDEAG",
    "5ScwkEhOM8yIAywjqgBF43",
    "1QAMsB1m8eWXWQbVsj9ZJE",
    "0JBsCyFPceebQtDXQUx4Uw",
    "3YOWyqQrUPaVn0jxUFqYZb",
    "4TimJMbd97nFu5wW9DJXQ9",
    "1vppbacJniMi2UlctC547i",
    "7nuUMsmN9dYAztgze03ZOt",
    "3hkC9EHFZNQPXrtl8WPHnX",
    "0GQngE2rOYvlKwEQjTAsP8",
    "5QtEFRYavs5S3GHtFEq7A4",
    "1veNS1osFHTWf2G6q5AbuQ",
    "0xkGTPTijMU84dtHr3KQQi",
    "57TekJn37PJuZyHoVP1bgM",
    "4ZffnUdAzNy5HvcO3rphIP",
    "5MnAi6ZF7cE8pAz7wYr9Ta",
    "6YRbDkyTzsizAWFz8kwiI7",
    "0iXLwnLmLwn9y54JtBTNxY",
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
