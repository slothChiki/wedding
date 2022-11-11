import { NextPage, NextPageContext } from 'next';
import { useEffect } from 'react';
import Header from './common/Header';
import Footer from './common/Footer';
import Banner from './component/Banner';
import NavBar from './component/NavBar';
import Introduce from './component/Introduce';
import Location from './component/Location';
import Board from './component/Board';
import PopupImage from './component/PopupImage';
import PopupShare from './component/PopupShare';

interface Props {
    aaa: string;
}
const Main: NextPage<any> = ({ aaa }) => {
    useEffect(() => {
        console.log(`hi ${aaa}`);
    }, []);
    return (
        <>
            <Header />
            <div className="container">
                <div className="wrap">
                    <Banner />
                    <h2>Navbar</h2>
                    <NavBar />
                    <h2>Groom & Bride</h2>
                    <Introduce />
                    <h2>Location</h2>
                    <Location />
                    <h2>Board</h2>
                    <Board />
                    <PopupImage />
                    <PopupShare />
                </div>
            </div>
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
