import React from "react";
import Intro from "./Intro.js";
import Skill from "./Skill.js";
import Social from "./Social.js";
function Home() {
    return (
        <div>
            <Intro></Intro>
            <Social></Social>
            <Skill></Skill>
        </div>
    );
}

export default Home;