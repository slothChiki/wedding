import { NextPage } from 'next';
import { ActorType, DetailType } from '../../../../src/enums/wedding.enum';
import { useDispatch } from 'react-redux';
import * as weddingReducer from '../../../../modules/reducer/wedding';
import { useState } from 'react';

interface props {}
const Nav: NextPage<props> = ({}) => {
    const dispatch = useDispatch();
    const detailDataChoice = (actor: ActorType) => {
        viewList();
        dispatch(weddingReducer.detailActorChoice(actor));
        dispatch(
            weddingReducer.modalOn({
                showModal: true,
                detailType: DetailType.ACTOR,
            }),
        );
    };

    const [classOn, setClassOn] = useState(false);
    const viewList = () => {
        setClassOn(!classOn);
    };
    return (
        <>
            <nav>
                <div className="left">
                    <div className="logo">
                        <a href="/">
                            <img src="/images/icon/logo.png" alt="" />
                        </a>
                    </div>
                    <div
                        className={`mobile-menu ${classOn ? 'on' : ''}`}
                        onClick={viewList}
                    >
                        축의금
                    </div>
                    <ul className={`menu-list ${classOn ? 'on' : ''}`}>
                        <li>
                            <a
                                onClick={() => {
                                    detailDataChoice(ActorType.NY);
                                }}
                            >
                                신부에게 마음전하기
                            </a>
                        </li>
                        <li>
                            <a
                                onClick={() => {
                                    detailDataChoice(ActorType.SM);
                                }}
                            >
                                신랑에게 마음전하기
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="right">
                    {/*<div className="icon search">*/}
                    {/*    <div className="search-bar">*/}
                    {/*        <i className="fa-solid fa-magnifying-glass" />*/}
                    {/*        <input type="text" placeholder="제목, 사람, 장르" />*/}
                    {/*    </div>*/}
                    {/*</div>*/}
                    {/* <div className="icon kids">
                        <a href="pages/views/nsFlix/main/Nav#">마음전하기</a>
                    </div>
                    <div className="icon bell">
                        <a href="pages/views/nsFlix/main/Nav#">
                            <i className="fa-solid fa-bell" />
                        </a>
                    </div>
                    <div className="icon profile">
                        <a href="pages/views/nsFlix/main/Nav#">
                            <div className="avatar-box" />
                            <i className="fa-solid fa-caret-down" />
                        </a>
                    </div> */}
                </div>
            </nav>
        </>
    );
};
export default Nav;
