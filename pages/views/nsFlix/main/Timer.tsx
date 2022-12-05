import { NextPage } from 'next';
import { PosterDto } from 'src/domain/nsflix/dto/nsflixs.dto';
import DetailBody from '../detail/ViewContents';
import * as weddingReducer from '../../../../modules/reducer/wedding';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../../modules/reducer/rootReducer';
import { useEffect, useState } from 'react';
import moment from 'moment';
import { TimerType } from '../../../../src/enums/wedding.enum';

interface Props {
    startDate: string;
    endDate: string;
    type: TimerType;
}
const Timer: NextPage<Props> = ({
    startDate = '',
    endDate = '',
    type = TimerType.FLOW,
}) => {
    const [day, setDay] = useState('');

    useEffect(() => {
        console.log(`endDate --- ${endDate}`);
        console.log(`startDate --- ${startDate}`);
        let f = '';
        let s = '';
        if (type == TimerType.DDAY) {
            f = endDate;
            s = startDate;
        } else {
            f = startDate;
            s = endDate;
        }
        const diff = Number(moment(f).diff(s, 'day'));

        setDay(diff > 0 ? diff.toString() : (-1 * diff).toString());
    }, []);

    return <>{day}</>;
};
export default Timer;
