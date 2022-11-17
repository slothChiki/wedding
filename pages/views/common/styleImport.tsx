import { NextPage } from 'next';
import Bootstrap from 'public/style/bootstrap';
import BootstrapMin from 'public/style/bootstrap-min';

interface Props {}
const StyleImport: NextPage<Props> = ({}) => {
    return (
        <>
            <style jsx global key={'css_bootstrap'}>
                {Bootstrap}
            </style>
            <style jsx global key={'css_bootstrap_min'}>
                {BootstrapMin}
            </style>
        </>
    );
};
export default StyleImport;
