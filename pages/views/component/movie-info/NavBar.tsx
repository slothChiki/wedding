import { NextPage } from 'next';
import { NavMenu } from 'src/enums/wedding.enum';

interface Props {
    setStep: any;
}
const NavBar: NextPage<Props> = ({ setStep = null }) => {
    const goNavMenu = (step: NavMenu) => {
        setStep(step);
    }
    return (
        <>
            <div className="card-navbar">
                <ul className="menu-list">
                <li>
                        <button className="nav-menu" onClick={() => { goNavMenu(NavMenu.MAIN) }}>메인</button>
                    </li>
                    <li>
                        <button className="nav-menu" onClick={() => { goNavMenu(NavMenu.CAST) }}>등장인물</button>
                    </li>
                    <li>
                        <button className="nav-menu" onClick={() => { goNavMenu(NavMenu.ALBUM) }}>포토앨범</button>
                    </li>
                    <li>
                        <button className="nav-menu" onClick={() => { goNavMenu(NavMenu.BOOKING) }}>예약하기</button>
                    </li>
                    <li>
                        <button className="nav-menu" onClick={() => { goNavMenu(NavMenu.REVIEW) }}>방명록</button>
                    </li>
                </ul>
            </div>
        </>
    );
};
export default NavBar;
