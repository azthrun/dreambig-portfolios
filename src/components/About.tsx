import "../styles/About.css";

const About = () => {
    return (
        <div id="about">
            <h1 className="about-header">About Me</h1>
            <ul className="about-list">
                <li>
                    <img src="img/casual.svg" alt="casual" />
                    <div>
                        <h2>
                            Hey there! I'm Terry, a Full-Stack Software Engineer in Texas.
                        </h2>
                        <p style={{ margin: "0, auto" }}>
                            I was born and raised in Shenzhen, China, and am currently based in Houston, Texas. My main tech stack is Microsoft .NET, but I also do web applications using various frameworks/packages such as but not limited to Angular, React, Flutter, etc. <br />
                            If you are impressed by what I showcase here, don't hesitate to contact me!
                        </p>
                    </div>
                </li>
                <li>
                    <img src="img/corporate.svg" alt="professional" />
                    <div>
                        <h2>Professional Experiences</h2>
                        <h4>
                            Optum
                            <span>(2022 April - present)</span>
                        </h4>
                        <p>
                            I am a Fullstack Software Engineer in the team, and responsible for developing and maintaining several business public websites as well as the backend data services. With my expertise in .NET technologies, I develop new tools, implement enhancement requirements, analysis and troubleshoot reported issues, and also migrate legacy projects/solutions to morden frameworks.
                        </p>
                        <h4>
                            Calpine
                            <span>(2013 January - 2022 April)</span>
                        </h4>
                        <p>
                            I worked as IT Analyst, and was mainly developing and maintaining several mobile applications using Microsoft technologies such as <em>Xamarin.Forms, .NET MAUI, and Azure Cloud Services (including App Services, KeyVault, Cosmos Database, Azure SQL, Azure Functions</em>, etc.). Other than that, I implemented integration services with Enterprise Assets Management system (IBM Maximo), as well as designed/developed SQL Server Reporting Services (SSRS) reports.
                        </p>
                    </div>
                </li>
            </ul>
        </div>
    );
}

export default About;