import "../styles/Footer.css";

const Footer = () => {
    return (
        <footer>
            <div id="contacts">
                <h1>Find Me</h1>
                <div className="contacts">
                    <a className="email left" href="mailto:sterryc1986@gmail.com">Email</a>
                    <a className="linkedin right" href="https://www.linkedin.com/in/azthrunzalao0o" target="_blank" rel="noreferrer">LinkedIn</a>
                    <a className="twitter left" href="https://twitter.com/azthrunzalao0o" target="_blank" rel="noreferrer">Twitter</a>
                    <a className="github right" href="https://github.com/azthrun" target="_blank" rel="noreferrer">GitHub</a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;