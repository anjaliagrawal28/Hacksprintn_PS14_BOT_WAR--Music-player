import React, { useState, useEffect } from "react";

export default function Feedback(props) {
    const [sourcemood, setsourcemood] = useState("");
    const [destinationmood, setdestinationmood] = useState("");
    const [trackid, settrackid] = useState("");

    useEffect(() => {
        if (sourcemood === "sad") {
            props.sad("hello");
        }
    }, [sourcemood, destinationmood, trackid]);

    return (
        <div>
            <input
                placeholder="source"
                onChange={(e) => setsourcemood(e.target.value)}
            />
            <input
                placeholder="destination"
                onChange={(e) => setdestinationmood(e.target.value)}
            />
            <input
                placeholder="trackID"
                onChange={(e) => settrackid(e.target.value)}
            />
        </div>
    );
}
