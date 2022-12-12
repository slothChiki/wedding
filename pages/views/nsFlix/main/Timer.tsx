import { NextPage } from 'next';
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
