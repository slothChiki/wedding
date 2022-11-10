import { NextPage } from 'next';

interface Props {
    aaa: string;
}
const Introduce: NextPage<any> = () => {
    return (
        <>
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
                                    Hi I am Raymond,Lorem ipsum dolor sit amet
                                    consectetur adipiscing, elit nulla enim arcu
                                    dictum lobortis, ac congue non hendrerit
                                    accumsan. Ut penatibus litora platea mi mus
                                    tempus eros proin, maecenas hac eget
                                    hendrerit inceptos per tempor sodales, id
                                    varius nulla commodo augue lectus pulvinar.
                                    Etiam suscipit leo sollicitudin vivamus
                                    tempor himenaeos vitae mattis dictum
                                    posuere, tincidunt aenean litora aptent
                                    facilisis eu est gravida.
                                </p>
                                <h3 className="h2 ww-title">Raymond</h3>
                                <div className="ww-social-links">
                                    <a className="btn btn-link" href="#">
                                        <i
                                            className="fab fa-facebook-f"
                                            aria-hidden="true"
                                        />
                                    </a>
                                    <a className="btn btn-link" href="#">
                                        <i
                                            className="fab fa-twitter"
                                            aria-hidden="true"
                                        />
                                    </a>
                                    <a className="btn btn-link" href="#">
                                        <i
                                            className="fab fa-google-plus-g"
                                            aria-hidden="true"
                                        />
                                    </a>
                                    <a className="btn btn-link" href="#">
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
                                    Hi I am Susan,Lorem ipsum dolor sit amet
                                    consectetur adipiscing, elit nulla enim arcu
                                    dictum lobortis, ac congue non hendrerit
                                    accumsan. Ut penatibus litora platea mi mus
                                    tempus eros proin, maecenas hac eget
                                    hendrerit inceptos per tempor sodales, id
                                    varius nulla commodo augue lectus pulvinar.
                                    Etiam suscipit leo sollicitudin vivamus
                                    tempor himenaeos vitae mattis dictum
                                    posuere, tincidunt aenean litora aptent
                                    facilisis eu est gravida.
                                </p>
                                <h3 className="h2 ww-title">Susan</h3>
                                <div className="ww-social-links">
                                    <a className="btn btn-link" href="#">
                                        <i
                                            className="fab fa-facebook-f"
                                            aria-hidden="true"
                                        />
                                    </a>
                                    <a className="btn btn-link" href="#">
                                        <i
                                            className="fab fa-twitter"
                                            aria-hidden="true"
                                        />
                                    </a>
                                    <a className="btn btn-link" href="#">
                                        <i
                                            className="fab fa-google-plus-g"
                                            aria-hidden="true"
                                        />
                                    </a>
                                    <a className="btn btn-link" href="#">
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
        </>
    );
};
export default Introduce;
