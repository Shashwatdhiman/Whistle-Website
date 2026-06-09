import "../styles/Header.css";

import hero from "../assets/Hero.png";
import mobileHero from "../assets/mobile-hero.png";
import cloveLogo from "../assets/clove-logo.png";

const Header = () => {
    return (
        <section className="header">

            <picture>
                <source
                    media="(max-width: 768px)"
                    srcSet={mobileHero}
                />

                <img
                    src={hero}
                    alt="Invisible Aligners"
                    className="hero-img"
                />
            </picture>

            <div className="lead-form">

                <h2>
                    Do you have Teeth Gaps or Crooked Teeth?
                </h2>

                <div className="radio-group">
                    <label>
                        <input
                            type="radio"
                            name="teeth"
                        />
                        Yes
                    </label>

                    <label>
                        <input
                            type="radio"
                            name="teeth"
                        />
                        No
                    </label>
                </div>

                <div className="form-row">

                    <div className="input-wrapper">
                        <span className="floating-label">
                            Full Name*
                        </span>

                        <input
                            type="text"
                            placeholder="Ajay Kumar"
                        />
                    </div>

                    <div className="input-wrapper">
                        <span className="floating-label">
                            Mobile Number*
                        </span>

                        <input
                            type="tel"
                            placeholder="+91 Mobile number*"
                        />
                    </div>

                    <button>
                        Book a Free Scan
                    </button>

                    <div className="consent-row">
                        <input
                            type="checkbox"
                            id="consent"
                        />

                        <label htmlFor="consent">
                            I hereby consent to receive calls /
                            messages from Whistle and its partners
                            and override DND settings.
                        </label>
                    </div>

                </div>

            </div>

            <div className="clinic-card">

                <div className="clinic-left">
                    <h3>
                        Book a Free 3D Teeth Scan and
                        Orthodontist Consult in a Clove Dental
                        Clinic near you.
                    </h3>
                </div>

                <div className="clinic-right">

                    <img
                        src={cloveLogo}
                        alt="Clove Dental"
                    />

                    <button>
                        Find Clinic ▼
                    </button>

                </div>

            </div>

            <div className="benefits-strip">
                <p>Our inaugural launch benefit</p>

                <p>
                    Free teeth scan worth ₹500
                </p>

                <p>
                    Free orthodontic consultation worth ₹1500
                </p>
            </div>

        </section>
    );
};

export default Header;