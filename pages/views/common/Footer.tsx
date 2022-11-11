import { NextPage } from 'next';
import Scripts from '../component/location/Script';

interface Props {
    aaa: string;
}
const Footer: NextPage<any> = ({ aaa }) => {
    return (
        <>
            <script src="/scripts/jquery.min.js?ver=1.1.0"></script>
            <script src="/scripts/bootstrap.bundle.min.js?ver=1.1.0"></script>
            <script
                type="text/javascript"
                src="https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=2qbc932mh5"
            ></script>
            <Scripts />
        </>
    );
};

export default Footer;
