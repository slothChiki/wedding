import { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useDispatch } from 'react-redux';
import { NavMenu } from 'src/enums/wedding.enum';

interface Props {
    setStep: any;
}
const NavBar: NextPage<Props> = ({ setStep = null }) => {
    const dispatch = useDispatch();
    const router = useRouter();

    const goNavMenu = (step: NavMenu) => {
        setStep(step);
    }

    const goPage = (path: string) => {
        router.push(path);
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
                        <button className="nav-menu" onClick={() => { goPage('/board') }}>방명록</button>
                    </li>
                </ul>
            </div>
        </>
    );
};
export default NavBar;
