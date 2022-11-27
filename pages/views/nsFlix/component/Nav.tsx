import { NextPage } from 'next';

interface props {}
const Nav: NextPage<props> = ({}) => {
    return (
        <>
            <nav>
                <div className="left">
                    <div className="logo">
                        <a href="#">
                            <img src="./img/logo.png" alt="" />
                        </a>
                    </div>
                    <div className="mobile-menu">메뉴</div>
                    <ul className="menu-list">
                        <li>
                            <a href="#">시리즈</a>
                        </li>
                        <li>
                            <a href="#">영화</a>
                        </li>
                        <li>
                            <a href="#">내가 찜한 콘텐츠</a>
                        </li>
                    </ul>
                </div>
                <div className="right">
                    <div className="icon search">
                        <div className="search-bar">
                            <i className="fa-solid fa-magnifying-glass" />
                            <input type="text" placeholder="제목, 사람, 장르" />
                        </div>
                    </div>
                    <div className="icon kids">
                        <a href="#">키즈</a>
                    </div>
                    <div className="icon bell">
                        <a href="#">
                            <i className="fa-solid fa-bell" />
                        </a>
                    </div>
                    <div className="icon profile">
                        <a href="#">
                            <div className="avatar-box" />
                            <i className="fa-solid fa-caret-down" />
                        </a>
                    </div>
                </div>
            </nav>
        </>
    );
};
export default Nav;
