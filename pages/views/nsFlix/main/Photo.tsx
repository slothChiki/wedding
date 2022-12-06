import { PosterDto } from 'dist/domain/nsflix/dto/nsflixs.dto';
import { NextPage } from 'next';
import { ActorDto, PhotoDto } from 'src/domain/nsflix/dto/nsflixs.dto';
import { SliderType } from 'src/enums/wedding.enum';

interface Props {
    data: PosterDto | PhotoDto | ActorDto;
    slide: number;
    clickMethod: any;
    sliderType: SliderType;
}

const Photo: NextPage<Props> = ({ data = { src: '' }, slide = 0, clickMethod, sliderType = SliderType.IMG }) => {
    // TODO - props 로 줘야 할까?

    const category = sliderType === SliderType.CONTENTS ? data['category'] : null;
    return (
        <>
            <li
                style={{
                    transform: `translateX(${slide}px)`,
                    transition: '0.5s ease',
                }}
                onClick={clickMethod}
            >
                <div className="image-container">
                    <img src={data.src} />
                    {sliderType !== SliderType.IMG ? (
                        <div className={`small-name`}>
                            {category}<br />
                            {data['name']}
                        </div>
                    ) : null}
                </div>
            </li>
        </>
    );
};
export default Photo;
