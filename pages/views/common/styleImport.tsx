import { NextPage } from 'next';
import Main from 'public/style/main';
import Bootstrap from 'public/style/bootstrap';
import BootstrapMin from 'public/style/bootstrap-min';

interface Props {}
const StyleImport: NextPage<Props> = ({}) => {
    return (
        <>
            <style jsx global key={'css_main'}>
                {Main}
            </style>
            <style jsx global>
                {Bootstrap}
            </style>
            <style jsx global>
                {BootstrapMin}
            </style>
        </>
    );
};
export default StyleImport;
