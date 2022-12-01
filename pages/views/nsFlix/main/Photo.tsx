import { NextPage } from 'next';
import styled from 'styled-components';
import {
    PhotoDto,
    PosterDto,
} from '../../../../src/domain/nsflix/dto/nsflixs.dto';
import { useDispatch } from 'react-redux';
import * as weddingReducer from '../../../../modules/reducer/wedding';
import { detailDataChoice } from '../../../../modules/reducer/wedding';
import { DetailType } from '../../../../src/enums/wedding.enum';

interface Props {
    photo: PhotoDto;
    slide: number;
}

const Photo: NextPage<Props> = ({
    photo = { typeof: DetailType.IMG, src: '' },
    slide = 0,
}) => {
    // TODO - props 로 줘야 할까?
    const dispatch = useDispatch();
    const detailDataChoice = () => {
        dispatch(weddingReducer.detailDataChoice({ ...photo } as PosterDto));
        dispatch(weddingReducer.modalChange(true));
    };

    return (
        <>
            <li
                style={{
                    transform: `translateX(${slide}px)`,
                    transition: '0.5s ease',
                }}
                onClick={detailDataChoice}
            >
                <img className="image-container" src={photo.src} />
            </li>
        </>
    );
};
export default Photo;
