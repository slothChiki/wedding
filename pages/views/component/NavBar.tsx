import { NextPage } from 'next';

interface Props {
    aaa: string;
}
const NavBar: NextPage<any> = () => {
    return (
        <>
            <div className="ww-nav-bar sticky-top bg-light">
                <nav className="navbar navbar-expand-lg navbar-light">
                    <div className="container">
                        <a href="#">
                            <svg className="heart" viewBox="0 0 32 29.6">
                                <path d="M23.6,0c-3.4,0-6.3,2.7-7.6,5.6C14.7,2.7,11.8,0,8.4,0C3.8,0,0,3.8,0,8.4c0,9.4,9.5,11.9,16,21.2c6.1-9.3,16-12.1,16-21.2C32,3.8,28.2,0,23.6,0z" />
                            </svg>
                        </a>
                        <h1 className="h2">
                            <a className="pl-4 navbar-brand" href="#">
                                우리 결혼합니다!
                            </a>
                        </h1>
                        <button
                            className="navbar-toggler"
                            type="button"
                            data-toggle="collapse"
                            data-target="#ww-navbarNav"
                            aria-controls="ww-navbarNav"
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                        >
                            <span className="navbar-toggler-icon" />
                        </button>
                        <div
                            className="collapse navbar-collapse text-uppercase"
                            id="ww-navbarNav"
                        >
                            <ul className="navbar-nav ml-auto">
                                <li className="nav-item">
                                    <a
                                        className="nav-link smooth-scroll"
                                        href="#home"
                                    >
                                        Home
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a
                                        className="nav-link smooth-scroll"
                                        href="#couple"
                                    >
                                        Couple
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a
                                        className="nav-link smooth-scroll"
                                        href="#events"
                                    >
                                        Events
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a
                                        className="nav-link smooth-scroll"
                                        href="#people"
                                    >
                                        People
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a
                                        className="nav-link smooth-scroll"
                                        href="#gallery"
                                    >
                                        Gallery
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a
                                        className="nav-link smooth-scroll"
                                        href="#rsvp"
                                    >
                                        RSVP
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        </>
    );
};
export default NavBar;
