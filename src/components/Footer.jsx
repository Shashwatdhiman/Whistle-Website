import "../styles/Footer.css";
import instaIcon from "../assets/instagramIcon.png";
import twitterIcon from "../assets/vector.png";
import facebookIcon from "../assets/facebookIcon.png";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-top">
                <div className="footer-links">
                    <h2>Quick Links</h2>
                    <a href="#">Home</a>
                    <a href="#">Book a Free Scan</a>
                    <a href="#">How it Works</a>
                    <a href="#">Range of Aligners</a>
                    <a href="#">FAQs</a>
                </div>
                <div className="footer-contact">
                    <h3>Get in Touch Now!</h3>

                    <div className="contact-item">
                        {/* <FiPhone /> */}
                        <span>011-6932-8350</span>
                    </div>

                    <div className="contact-item">
                        {/* <FiMail /> */}
                        <span>support@whistle.in</span>
                    </div>
                </div>
                <div className="footer-social">
                    <h3>Follow us on</h3>

                    <div className="social-icons">
                        <img src={instaIcon} alt="instagramIcon" />
                        <img src={facebookIcon} alt="facebookIcon" />
                        <img src={twitterIcon} alt="twitterIcon" />
                    </div>
                </div>
                <div className="footer-policy">
                    <a href="#">Privacy Policy</a>
                    <a href="#">Terms of Service</a>
                </div>
            </div>
        </footer>
    );
}

export default Footer