import { NextPage } from 'next';

interface Props {
    aaa: string;
}
const Home: NextPage<any> = () => {
    return (
        <>
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
        </>
    );
};
export default Home;
