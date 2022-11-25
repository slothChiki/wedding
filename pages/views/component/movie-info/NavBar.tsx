import { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useDispatch } from 'react-redux';
import { MainManu, NavMenu } from 'src/enums/wedding.enum';

interface Props {}
const NavBar: NextPage<Props> = ({}) => {
    const dispatch = useDispatch();
    const router = useRouter();

    const goNavMenu = (menu: NavMenu) => {
        let path = '';
        switch (menu) {
            case NavMenu.CAST: {
                path = '/movie-info/cast';
                break;
            }
            case NavMenu.ALBUM: {
                path = '/movie-info/album';
                break;
            }
            case NavMenu.BOOKING: {
                path = '/movie-info/booking';
                break;
            }
            case NavMenu.REVIEW: {
                path = '/movie-info/review';
                break;
            }
            case NavMenu.MAIN:
            default: {
                path = '/movie-info';
                break;
            }
        }
        router.push(path);
    };

    return (
        <>
            <div className="card-navbar">
                <ul className="menu-list">
                    <li>
                        <button
                            className="nav-menu"
                            onClick={() => {
                                goNavMenu(NavMenu.MAIN);
                            }}
                        >
                            메인
                        </button>
                    </li>
                    <li>
                        <button
                            className="nav-menu"
                            onClick={() => {
                                goNavMenu(NavMenu.CAST);
                            }}
                        >
                            등장인물
                        </button>
                    </li>
                    <li>
                        <button
                            className="nav-menu"
                            onClick={() => {
                                goNavMenu(NavMenu.ALBUM);
                            }}
                        >
                            포토앨범
                        </button>
                    </li>
                    <li>
                        <button
                            className="nav-menu"
                            onClick={() => {
                                goNavMenu(NavMenu.BOOKING);
                            }}
                        >
                            예약하기
                        </button>
                    </li>
                    <li>
                        <button
                            className="nav-menu"
                            onClick={() => {
                                goNavMenu(NavMenu.REVIEW);
                            }}
                        >
                            방명록
                        </button>
                    </li>
                </ul>
            </div>
        </>
    );
};
export default NavBar;
