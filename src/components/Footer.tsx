import Icon from '@mdi/react';
import { mdiEmailSendOutline, mdiTwitter, mdiLinkedin, mdiGithub } from '@mdi/js';
import "../styles/Footer.css";

const Footer = () => {
    return (
        <footer>
            <div id="contacts">
                <h1>Socials</h1>
                <div className="contacts">
                    <a className="email left" href="mailto:sterryc1986@gmail.com" title="Email">
                        <Icon path={ mdiEmailSendOutline } size={ 1.6 } />
                    </a>
                    <a className="linkedin right" href="https://www.linkedin.com/in/azthrunzalao0o" target="_blank" rel="noreferrer" title="LinkedIn">
                        <Icon path={ mdiLinkedin } size={ 1.6 } />
                    </a>
                    <a className="twitter left" href="https://twitter.com/azthrunzalao0o" target="_blank" rel="noreferrer" title="t">
                        <Icon path={ mdiTwitter } size={ 1.6 } />
                    </a>
                    <a className="github right" href="https://github.com/azthrun" target="_blank" rel="noreferrer" title="GitHub">
                        <Icon path={ mdiGithub } size={ 1.6 } />
                    </a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;