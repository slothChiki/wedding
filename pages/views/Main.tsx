import { NextPage, NextPageContext } from 'next';
import { useEffect } from 'react';
import Header from './common/Header';
import Footer from './common/Footer';

interface Props {
    aaa: string;
}
const Main: NextPage<any> = ({ aaa }) => {
    useEffect(() => {
        console.log(`hi ${aaa}`);
    }, []);
    return (
        <>
            <div>
                <div className="page-content">
                    <div className="div">
                        <div className="ww-home-page" id="home">
                            <div className="ww-wedding-announcement d-flex align-items-center justify-content-start">
                                <div className="container ww-announcement-container">
                                    <p
                                        className="ww-couple-name ww-title"
                                        data-aos="zoom-in-down"
                                        data-aos-delay={300}
                                        data-aos-duration={1000}
                                    >
                                        Raymond &amp; Susan
                                    </p>
                                    <img
                                        className="img-fluid mt-1"
                                        src={'/images/laurel-1.png'}
                                        alt="Heart"
                                        data-aos="zoom-in-down"
                                        data-aos-delay={300}
                                        data-aos-duration={1000}
                                    />
                                    <p
                                        className="h2 mt-5 ww-title"
                                        data-aos="zoom-in-down"
                                        data-aos-delay={300}
                                        data-aos-duration={1000}
                                        data-aos-offset={10}
                                    >
                                        20<sup>th</sup> December, 2018
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="ww-nav-bar sticky-top bg-light">
                            <nav className="navbar navbar-expand-lg navbar-light">
                                <div className="container">
                                    <a href="#">
                                        <svg
                                            className="heart"
                                            viewBox="0 0 32 29.6"
                                        >
                                            <path d="M23.6,0c-3.4,0-6.3,2.7-7.6,5.6C14.7,2.7,11.8,0,8.4,0C3.8,0,0,3.8,0,8.4c0,9.4,9.5,11.9,16,21.2c6.1-9.3,16-12.1,16-21.2C32,3.8,28.2,0,23.6,0z" />
                                        </svg>
                                    </a>
                                    <h1 className="h2">
                                        <a
                                            className="pl-4 navbar-brand"
                                            href="#"
                                        >
                                            Wonderful Wedding
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
                        <div className="ww-section" id="couple">
                            <div className="container">
                                <h2
                                    className="h1 text-center pb-3 ww-title"
                                    data-aos="zoom-in-down"
                                    data-aos-duration={1000}
                                >
                                    Groom &amp; Bride
                                </h2>
                                <div className="row text-center">
                                    <div className="col-md-6">
                                        <div className="mt-3">
                                            <img
                                                className="img-fluid"
                                                src="/images/groom.jpg"
                                                alt="Groom"
                                                data-aos="flip-left"
                                                data-aos-duration={1000}
                                            />
                                            <p className="pt-3 text-left text-muted">
                                                Hi I am Raymond,Lorem ipsum
                                                dolor sit amet consectetur
                                                adipiscing, elit nulla enim arcu
                                                dictum lobortis, ac congue non
                                                hendrerit accumsan. Ut penatibus
                                                litora platea mi mus tempus eros
                                                proin, maecenas hac eget
                                                hendrerit inceptos per tempor
                                                sodales, id varius nulla commodo
                                                augue lectus pulvinar. Etiam
                                                suscipit leo sollicitudin
                                                vivamus tempor himenaeos vitae
                                                mattis dictum posuere, tincidunt
                                                aenean litora aptent facilisis
                                                eu est gravida.
                                            </p>
                                            <h3 className="h2 ww-title">
                                                Raymond
                                            </h3>
                                            <div className="ww-social-links">
                                                <a
                                                    className="btn btn-link"
                                                    href="#"
                                                >
                                                    <i
                                                        className="fab fa-facebook-f"
                                                        aria-hidden="true"
                                                    />
                                                </a>
                                                <a
                                                    className="btn btn-link"
                                                    href="#"
                                                >
                                                    <i
                                                        className="fab fa-twitter"
                                                        aria-hidden="true"
                                                    />
                                                </a>
                                                <a
                                                    className="btn btn-link"
                                                    href="#"
                                                >
                                                    <i
                                                        className="fab fa-google-plus-g"
                                                        aria-hidden="true"
                                                    />
                                                </a>
                                                <a
                                                    className="btn btn-link"
                                                    href="#"
                                                >
                                                    <i
                                                        className="fab fa-instagram"
                                                        aria-hidden="true"
                                                    />
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="mt-3">
                                            <img
                                                className="img-fluid"
                                                src="/images/bride.jpg"
                                                alt="Bride"
                                                data-aos="flip-right"
                                                data-aos-duration={1000}
                                            />
                                            <p className="pt-3 text-left text-muted">
                                                Hi I am Susan,Lorem ipsum dolor
                                                sit amet consectetur adipiscing,
                                                elit nulla enim arcu dictum
                                                lobortis, ac congue non
                                                hendrerit accumsan. Ut penatibus
                                                litora platea mi mus tempus eros
                                                proin, maecenas hac eget
                                                hendrerit inceptos per tempor
                                                sodales, id varius nulla commodo
                                                augue lectus pulvinar. Etiam
                                                suscipit leo sollicitudin
                                                vivamus tempor himenaeos vitae
                                                mattis dictum posuere, tincidunt
                                                aenean litora aptent facilisis
                                                eu est gravida.
                                            </p>
                                            <h3 className="h2 ww-title">
                                                Susan
                                            </h3>
                                            <div className="ww-social-links">
                                                <a
                                                    className="btn btn-link"
                                                    href="#"
                                                >
                                                    <i
                                                        className="fab fa-facebook-f"
                                                        aria-hidden="true"
                                                    />
                                                </a>
                                                <a
                                                    className="btn btn-link"
                                                    href="#"
                                                >
                                                    <i
                                                        className="fab fa-twitter"
                                                        aria-hidden="true"
                                                    />
                                                </a>
                                                <a
                                                    className="btn btn-link"
                                                    href="#"
                                                >
                                                    <i
                                                        className="fab fa-google-plus-g"
                                                        aria-hidden="true"
                                                    />
                                                </a>
                                                <a
                                                    className="btn btn-link"
                                                    href="#"
                                                >
                                                    <i
                                                        className="fab fa-instagram"
                                                        aria-hidden="true"
                                                    />
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="ww-section bg-light" id="events">
                            <div className="container ww-wedding-event">
                                <h2
                                    className="h1 text-center pb-3 ww-title"
                                    data-aos="zoom-in-down"
                                    data-aos-duration={1000}
                                >
                                    Wedding Events
                                </h2>
                                <div className="row">
                                    <div className="col-md-7 col-sm-12">
                                        <div className="my-3">
                                            <div className="h4">
                                                Wedding Party
                                            </div>
                                            <ul>
                                                <li>
                                                    <i className="text-muted fas fa-map-marker-alt" />
                                                    <span className="pl-2 text-muted">
                                                        Church End, Hendon,
                                                        London, UK
                                                    </span>
                                                </li>
                                                <li className="pt-2">
                                                    <i className="text-muted far fa-calendar-alt" />
                                                    <span className="pl-2 text-muted">
                                                        20 Dec 2018, 9AM - 6PM
                                                    </span>
                                                </li>
                                            </ul>
                                            <p>
                                                Lorem ipsum dolor sit amet
                                                consectetur adipiscing, elit
                                                nulla enim arcu dictum lobortis,
                                                ac congue non hendrerit
                                                accumsan. Ut penatibus litora
                                                platea mi mus tempus eros proin,
                                                maecenas hac eget hendrerit
                                                inceptos per tempor sodales, id
                                                varius nulla commodo augue
                                                lectus pulvinar. Etiam suscipit
                                                leo sollicitudin vivamus tempor
                                                himenaeos vitae mattis dictum
                                                posuere, tincidunt aenean litora
                                                aptent facilisis eu est gravida.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="col-md-5 col-sm-12">
                                        <div className="my-3">
                                            <img
                                                className="img-fluid"
                                                src="/images/wedding-party.jpg"
                                                alt="Wedding Party"
                                                data-aos="fade-down-right"
                                                data-aos-duration={1000}
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-7 col-sm-12">
                                        <div className="my-3">
                                            <div className="h4">Reception</div>
                                            <ul>
                                                <li>
                                                    <i className="text-muted fas fa-map-marker-alt " />
                                                    <span className="pl-2 text-muted">
                                                        City Place, Hendon,
                                                        London, UK
                                                    </span>
                                                </li>
                                                <li className="pt-2">
                                                    <i className="text-muted far fa-calendar-alt " />
                                                    <span className="pl-2 text-muted">
                                                        22 Dec 2018, 11AM - 6PM
                                                    </span>
                                                </li>
                                            </ul>
                                            <p>
                                                Lorem ipsum dolor sit amet
                                                consectetur adipiscing, elit
                                                nulla enim arcu dictum lobortis,
                                                ac congue non hendrerit
                                                accumsan. Ut penatibus litora
                                                platea mi mus tempus eros proin,
                                                maecenas hac eget hendrerit
                                                inceptos per tempor sodales, id
                                                varius nulla commodo augue
                                                lectus pulvinar. Etiam suscipit
                                                leo sollicitudin vivamus tempor
                                                himenaeos vitae mattis dictum
                                                posuere, tincidunt aenean litora
                                                aptent facilisis eu est gravida.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="col-md-5 col-sm-12">
                                        <div className="my-3">
                                            <img
                                                className="img-fluid"
                                                src="/images/reception.jpg"
                                                alt="Reception"
                                                data-aos="fade-up-right"
                                                data-aos-duration={1000}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="ww-section" id="people">
                            <div className="container ww-couple-friends">
                                <h2
                                    className="h1 text-center pt-3 ww-title"
                                    data-aos="zoom-in-down"
                                    data-aos-duration={1000}
                                >
                                    Groomsmen &amp; Bridesmaids
                                </h2>
                                <div
                                    className="carousel slide"
                                    id="ww-carouselIndicator"
                                    data-ride="carousel"
                                    data-aos="zoom-in-up"
                                    data-aos-duration={1000}
                                >
                                    <ol className="carousel-indicators">
                                        <li
                                            className="active"
                                            data-target="#ww-carouselIndicator"
                                            data-slide-to={0}
                                        />
                                        <li
                                            data-target="#ww-carouselIndicator"
                                            data-slide-to={1}
                                        />
                                    </ol>
                                    <div className="carousel-inner">
                                        <div className="carousel-item active">
                                            <div className="row">
                                                <div className="col-md-4">
                                                    <div className="card d-block mb-3">
                                                        <img
                                                            className="card-img-top"
                                                            src="/images/groom-men-1.jpg"
                                                            alt="Groom Men 1"
                                                        />
                                                        <div className="card-body text-center">
                                                            <div className="h5">
                                                                Bryan Berry
                                                            </div>
                                                            <p className="mb-0 text-muted">
                                                                Best Friend
                                                            </p>
                                                            <p className="text-muted">
                                                                Groomsmen
                                                            </p>
                                                            <div className="ww-social-links">
                                                                <a
                                                                    className="btn btn-link"
                                                                    href="#"
                                                                >
                                                                    <i
                                                                        className="fab fa-facebook-f"
                                                                        aria-hidden="true"
                                                                    />
                                                                </a>
                                                                <a
                                                                    className="btn btn-link"
                                                                    href="#"
                                                                >
                                                                    <i
                                                                        className="fab fa-twitter"
                                                                        aria-hidden="true"
                                                                    />
                                                                </a>
                                                                <a
                                                                    className="btn btn-link"
                                                                    href="#"
                                                                >
                                                                    <i
                                                                        className="fab fa-google-plus-g"
                                                                        aria-hidden="true"
                                                                    />
                                                                </a>
                                                                <a
                                                                    className="btn btn-link"
                                                                    href="#"
                                                                >
                                                                    <i
                                                                        className="fab fa-instagram"
                                                                        aria-hidden="true"
                                                                    />
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-md-4">
                                                    <div className="card d-block mb-3">
                                                        <img
                                                            className="card-img-top"
                                                            src="/images/groom-men-2.jpg"
                                                            alt="Groom Men 2"
                                                        />
                                                        <div className="card-body text-center">
                                                            <div className="h5 text-center">
                                                                Kevin Johnston
                                                            </div>
                                                            <p className="mb-0 text-muted">
                                                                Room Mate
                                                            </p>
                                                            <p className="text-muted">
                                                                Groomsmen
                                                            </p>
                                                            <div className="ww-social-links">
                                                                <a
                                                                    className="btn btn-link"
                                                                    href="#"
                                                                >
                                                                    <i
                                                                        className="fab fa-facebook-f"
                                                                        aria-hidden="true"
                                                                    />
                                                                </a>
                                                                <a
                                                                    className="btn btn-link"
                                                                    href="#"
                                                                >
                                                                    <i
                                                                        className="fab fa-twitter"
                                                                        aria-hidden="true"
                                                                    />
                                                                </a>
                                                                <a
                                                                    className="btn btn-link"
                                                                    href="#"
                                                                >
                                                                    <i
                                                                        className="fab fa-google-plus-g"
                                                                        aria-hidden="true"
                                                                    />
                                                                </a>
                                                                <a
                                                                    className="btn btn-link"
                                                                    href="#"
                                                                >
                                                                    <i
                                                                        className="fab fa-instagram"
                                                                        aria-hidden="true"
                                                                    />
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-md-4">
                                                    <div className="card d-block mb-3">
                                                        <img
                                                            className="card-img-top"
                                                            src="/images/groom-men-3.jpg"
                                                            alt="Groom Men 3"
                                                        />
                                                        <div className="card-body text-center">
                                                            <div className="h5 text-center">
                                                                Arthur Wright
                                                            </div>
                                                            <p className="mb-0 text-muted">
                                                                Friend
                                                            </p>
                                                            <p className="text-muted">
                                                                Groomsmen
                                                            </p>
                                                            <div className="ww-social-links">
                                                                <a
                                                                    className="btn btn-link"
                                                                    href="#"
                                                                >
                                                                    <i
                                                                        className="fab fa-facebook-f"
                                                                        aria-hidden="true"
                                                                    />
                                                                </a>
                                                                <a
                                                                    className="btn btn-link"
                                                                    href="#"
                                                                >
                                                                    <i
                                                                        className="fab fa-twitter"
                                                                        aria-hidden="true"
                                                                    />
                                                                </a>
                                                                <a
                                                                    className="btn btn-link"
                                                                    href="#"
                                                                >
                                                                    <i
                                                                        className="fab fa-google-plus-g"
                                                                        aria-hidden="true"
                                                                    />
                                                                </a>
                                                                <a
                                                                    className="btn btn-link"
                                                                    href="#"
                                                                >
                                                                    <i
                                                                        className="fab fa-instagram"
                                                                        aria-hidden="true"
                                                                    />
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="carousel-item">
                                            <div className="row">
                                                <div className="col-md-4">
                                                    <div className="card d-block mb-3">
                                                        <img
                                                            className="card-img-top"
                                                            src="/images/bride-maid-1.jpg"
                                                            alt="Bride Maid 1"
                                                        />
                                                        <div className="card-body text-center">
                                                            <div className="h5">
                                                                Rachel Lawson
                                                            </div>
                                                            <p className="mb-0 text-muted">
                                                                Best Friend
                                                            </p>
                                                            <p className="text-muted">
                                                                Bridesmaids
                                                            </p>
                                                            <div className="ww-social-links">
                                                                <a
                                                                    className="btn btn-link"
                                                                    href="#"
                                                                >
                                                                    <i
                                                                        className="fab fa-facebook-f"
                                                                        aria-hidden="true"
                                                                    />
                                                                </a>
                                                                <a
                                                                    className="btn btn-link"
                                                                    href="#"
                                                                >
                                                                    <i
                                                                        className="fab fa-twitter"
                                                                        aria-hidden="true"
                                                                    />
                                                                </a>
                                                                <a
                                                                    className="btn btn-link"
                                                                    href="#"
                                                                >
                                                                    <i
                                                                        className="fab fa-google-plus-g"
                                                                        aria-hidden="true"
                                                                    />
                                                                </a>
                                                                <a
                                                                    className="btn btn-link"
                                                                    href="#"
                                                                >
                                                                    <i
                                                                        className="fab fa-instagram"
                                                                        aria-hidden="true"
                                                                    />
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-md-4">
                                                    <div className="card d-block mb-3">
                                                        <img
                                                            className="card-img-top"
                                                            src="/images/bride-maid-2.jpg"
                                                            alt="Bride Maid 2"
                                                        />
                                                        <div className="card-body text-center">
                                                            <div className="h5 text-center">
                                                                Betty George
                                                            </div>
                                                            <p className="mb-0 text-muted">
                                                                Room Mate
                                                            </p>
                                                            <p className="text-muted">
                                                                Bridesmaids
                                                            </p>
                                                            <div className="ww-social-links">
                                                                <a
                                                                    className="btn btn-link"
                                                                    href="#"
                                                                >
                                                                    <i
                                                                        className="fab fa-facebook-f"
                                                                        aria-hidden="true"
                                                                    />
                                                                </a>
                                                                <a
                                                                    className="btn btn-link"
                                                                    href="#"
                                                                >
                                                                    <i
                                                                        className="fab fa-twitter"
                                                                        aria-hidden="true"
                                                                    />
                                                                </a>
                                                                <a
                                                                    className="btn btn-link"
                                                                    href="#"
                                                                >
                                                                    <i
                                                                        className="fab fa-google-plus-g"
                                                                        aria-hidden="true"
                                                                    />
                                                                </a>
                                                                <a
                                                                    className="btn btn-link"
                                                                    href="#"
                                                                >
                                                                    <i
                                                                        className="fab fa-instagram"
                                                                        aria-hidden="true"
                                                                    />
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-md-4">
                                                    <div className="card d-block mb-3">
                                                        <img
                                                            className="card-img-top"
                                                            src="/images/bride-maid-3.jpg"
                                                            alt="Bride Maid 3"
                                                        />
                                                        <div className="card-body text-center">
                                                            <div className="h5 text-center">
                                                                Emma Snyder
                                                            </div>
                                                            <p className="mb-0 text-muted">
                                                                Friend
                                                            </p>
                                                            <p className="text-muted">
                                                                Bridesmaids
                                                            </p>
                                                            <div className="ww-social-links">
                                                                <a
                                                                    className="btn btn-link"
                                                                    href="#"
                                                                >
                                                                    <i
                                                                        className="fab fa-facebook-f"
                                                                        aria-hidden="true"
                                                                    />
                                                                </a>
                                                                <a
                                                                    className="btn btn-link"
                                                                    href="#"
                                                                >
                                                                    <i
                                                                        className="fab fa-twitter"
                                                                        aria-hidden="true"
                                                                    />
                                                                </a>
                                                                <a
                                                                    className="btn btn-link"
                                                                    href="#"
                                                                >
                                                                    <i
                                                                        className="fab fa-google-plus-g"
                                                                        aria-hidden="true"
                                                                    />
                                                                </a>
                                                                <a
                                                                    className="btn btn-link"
                                                                    href="#"
                                                                >
                                                                    <i
                                                                        className="fab fa-instagram"
                                                                        aria-hidden="true"
                                                                    />
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="ww-section bg-light" id="gallery">
                            <div className="ww-photo-gallery">
                                <div className="container">
                                    <h2
                                        className="h1 text-center pb-3 ww-title"
                                        data-aos="zoom-in-down"
                                        data-aos-duration={1000}
                                    >
                                        Photo Gallery
                                    </h2>
                                    <div className="col-md-12 text-center ww-category-filter mb-4">
                                        <a
                                            className="btn btn-outline-primary ww-filter-button"
                                            href="#"
                                            data-filter="all"
                                        >
                                            All
                                        </a>
                                        <a
                                            className="btn btn-outline-primary ww-filter-button"
                                            href="#"
                                            data-filter="vacation"
                                        >
                                            Our Vacation
                                        </a>
                                        <a
                                            className="btn btn-outline-primary ww-filter-button"
                                            href="#"
                                            data-filter="party"
                                        >
                                            Party
                                        </a>
                                        <a
                                            className="btn btn-outline-primary ww-filter-button"
                                            href="#"
                                            data-filter="ceremony"
                                        >
                                            Ceremony
                                        </a>
                                        <a
                                            className="btn btn-outline-primary ww-filter-button"
                                            href="#"
                                            data-filter="wedding"
                                        >
                                            Wedding
                                        </a>
                                    </div>
                                    <div
                                        className="ww-gallery"
                                        data-aos="fade-zoom-in"
                                        data-aos-easing="ease-in-back"
                                        data-aos-delay={300}
                                        data-aos-duration={1000}
                                        data-aos-offset={0}
                                    >
                                        <div className="card-columns">
                                            <div
                                                className="card"
                                                data-groups='["vacation","ceremony"]'
                                            >
                                                <a
                                                    href="/images/gallery-pic-1.jpg"
                                                    data-toggle="lightbox"
                                                    data-gallery="ww-gallery"
                                                >
                                                    <img
                                                        className="img-fluid"
                                                        src="/images/gallery-pic-1.jpg"
                                                        alt="Gallery Pic 1"
                                                    />
                                                </a>
                                            </div>
                                            <div
                                                className="card"
                                                data-groups='["party","wedding"]'
                                            >
                                                <a
                                                    href="/images/gallery-pic-2.jpg"
                                                    data-toggle="lightbox"
                                                    data-gallery="ww-gallery"
                                                >
                                                    <img
                                                        className="img-fluid"
                                                        src="/images/gallery-pic-2.jpg"
                                                        alt="Gallery Pic 2"
                                                    />
                                                </a>
                                            </div>
                                            <div
                                                className="card"
                                                data-groups='["vacation"]'
                                            >
                                                <a
                                                    href="/images/gallery-pic-3.jpg"
                                                    data-toggle="lightbox"
                                                    data-gallery="ww-gallery"
                                                >
                                                    <img
                                                        className="img-fluid"
                                                        src="/images/gallery-pic-3.jpg"
                                                        alt="Gallery Pic 3"
                                                    />
                                                </a>
                                            </div>
                                            <div
                                                className="card"
                                                data-groups='["party","vacation"]'
                                            >
                                                <a
                                                    href="/images/gallery-pic-4.jpg"
                                                    data-toggle="lightbox"
                                                    data-gallery="ww-gallery"
                                                >
                                                    <img
                                                        className="img-fluid"
                                                        src="/images/gallery-pic-4.jpg"
                                                        alt="Gallery Pic 4"
                                                    />
                                                </a>
                                            </div>
                                            <div
                                                className="card"
                                                data-groups='["vacation"]'
                                            >
                                                <a
                                                    href="/images/gallery-pic-5.jpg"
                                                    data-toggle="lightbox"
                                                    data-gallery="ww-gallery"
                                                >
                                                    <img
                                                        className="img-fluid"
                                                        src="/images/gallery-pic-5.jpg"
                                                        alt="Gallery Pic 5"
                                                    />
                                                </a>
                                            </div>
                                            <div
                                                className="card"
                                                data-groups='["wedding","ceremony","party"]'
                                            >
                                                <a
                                                    href="/images/gallery-pic-6.jpg"
                                                    data-toggle="lightbox"
                                                    data-gallery="ww-gallery"
                                                >
                                                    <img
                                                        className="img-fluid"
                                                        src="/images/gallery-pic-6.jpg"
                                                        alt="Gallery Pic 6"
                                                    />
                                                </a>
                                            </div>
                                            <div
                                                className="card"
                                                data-groups='["vacation"]'
                                            >
                                                <a
                                                    href="/images/gallery-pic-7.jpg"
                                                    data-toggle="lightbox"
                                                    data-gallery="ww-gallery"
                                                >
                                                    <img
                                                        className="img-fluid"
                                                        src="/images/gallery-pic-7.jpg"
                                                        alt="Gallery Pic 7"
                                                    />
                                                </a>
                                            </div>
                                            <div
                                                className="card"
                                                data-groups='["wedding","party"]'
                                            >
                                                <a
                                                    href="/images/gallery-pic-8.jpg"
                                                    data-toggle="lightbox"
                                                    data-gallery="ww-gallery"
                                                >
                                                    <img
                                                        className="img-fluid"
                                                        src="/images/gallery-pic-8.jpg"
                                                        alt="Gallery Pic 8"
                                                    />
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div
                            className="ww-section ww-rsvp-detail text-white"
                            id="rsvp"
                        >
                            <div
                                className="container"
                                data-aos="zoom-in-up"
                                data-aos-duration={1000}
                            >
                                <div className="col text-center">
                                    <h2
                                        className="h1 ww-title pb-3"
                                        data-aos="zoom-in-down"
                                        data-aos-duration={1000}
                                    >
                                        Join Our Party
                                    </h2>
                                </div>
                                <div className="row ww-rsvp-form">
                                    <div className="col-md-10">
                                        <div className="card-body">
                                            <form
                                                action="https://formspree.io/example@email.com"
                                                method="POST"
                                            >
                                                <div className="row">
                                                    <div className="col md-6 pb-3">
                                                        <div className="form-group">
                                                            <label htmlFor="name-input">
                                                                Your Name*
                                                            </label>
                                                            <input
                                                                className="form-control"
                                                                id="name-input"
                                                                type="text"
                                                                name="name"
                                                                required={true}
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6 pb-3">
                                                        <div className="form-group">
                                                            <label htmlFor="email-input">
                                                                Your Email*
                                                            </label>
                                                            <input
                                                                className="form-control"
                                                                id="email-input"
                                                                type="email"
                                                                name="_replyto"
                                                                required={true}
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col md-6 pb-3">
                                                        <div className="form-group">
                                                            <label htmlFor="guest-input">
                                                                Number of Guests
                                                            </label>
                                                            <select
                                                                className="form-control"
                                                                id="guest-input"
                                                                name="guest"
                                                            >
                                                                <option
                                                                    value={1}
                                                                >
                                                                    One
                                                                </option>
                                                                <option
                                                                    value={2}
                                                                >
                                                                    Two
                                                                </option>
                                                                <option
                                                                    value={3}
                                                                >
                                                                    Three
                                                                </option>
                                                                <option
                                                                    value={4}
                                                                >
                                                                    Four
                                                                </option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6 pb-3">
                                                        <div className="form-group">
                                                            <label htmlFor="events-input">
                                                                I am Attending
                                                            </label>
                                                            <select
                                                                className="form-control"
                                                                id="events-input"
                                                                name="events"
                                                            >
                                                                <option value="all-event">
                                                                    All Events
                                                                </option>
                                                                <option value="wedding-ceremony">
                                                                    Wedding
                                                                    ceremony
                                                                </option>
                                                                <option value="reception-party">
                                                                    Reception
                                                                    Party
                                                                </option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col">
                                                        <div className="form-group">
                                                            <label htmlFor="message-input">
                                                                Your Message
                                                            </label>
                                                            <textarea
                                                                className="form-control"
                                                                id="message-input"
                                                                name="message"
                                                                rows={4}
                                                                defaultValue={
                                                                    ''
                                                                }
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col text-center">
                                                        <button
                                                            className="btn btn-primary btn-submit"
                                                            type="submit"
                                                        >
                                                            Send
                                                        </button>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="ww-footer bg-light">
                            <div className="container text-center py-4">
                                <p className="my-0">
                                    © Wonderful Wedding. All rights reserved.
                                </p>
                                <p className="mb-0">
                                    Design -{' '}
                                    <a
                                        className="credit"
                                        href="https://templateflip.com"
                                        target="_blank"
                                    >
                                        TemplateFlip
                                    </a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <footer />
            </div>
            <Footer />
        </>
    );
};

export async function getServerSideProps(ctx: NextPageContext) {
    const server_prop = JSON.parse(JSON.stringify(ctx.query));
    console.log(`aaaaa`);

    const props: Props = {
        aaa: server_prop.aaa as any,
    };
    return { props };
}
export default Main;
