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
                            I was born and raised in Shenzhen, China, and am currently based in Houston, Texas. My main expertise lies in multi-platform mobile application development. I also do web applications and backend API developments. If you are impressed by what I showcase here, don't hesitate to contact me!
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
                            I am currently working as a Software Engineer, and responsible for developing and maintaining a public facing website as well as the backend data services.
                        </p>
                        <h4>
                            Calpine
                            <span>(2013 January - 2022 April)</span>
                        </h4>
                        <p>
                            I worked as IT Analyst, and was mainly developing and maintaining several mobile applications using Microsoft technologies such as <em>Xamarin.Forms, .NET MAUI, and Azure Cloud Services (including App Services, KeyVault, Cosmos Database, Azure SQL, Azure Functions</em>, etc.). <br/>
                            Besides mobile applications, I also developed integration services with Enterprise Assets Management system (IBM Maximo), as well as designed/developed SQL Server Reporting Services (SSRS) reports.
                        </p>
                    </div>
                </li>
            </ul>
        </div>
    );
}

export default About;