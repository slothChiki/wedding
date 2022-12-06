import { NextPage } from 'next';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../../modules/reducer/rootReducer';
import { ActorDto } from '../../../../dist/domain/nsflix/dto/nsflixs.dto';

interface Props {}
const ViewActor: NextPage<Props> = ({}) => {
    const state = useSelector((state: RootState) => state.wedding);
    const dispatch = useDispatch();
    const actor: ActorDto = state.detailActor;

    return (
        <>
            <div className="actor">
                <div className="actor-face">
                    <img src={actor.src} />
                </div>
            </div>
        </>
    );
};
export default ViewActor;
