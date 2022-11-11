import { NextPage } from 'next';
import Main from 'public/style/main';
import Bootstrap from 'public/style/bootstrap';
import BootstrapMin from 'public/style/bootstrap-min';
import Common from 'public/style/common_my';

interface Props {}
const StyleImport: NextPage<Props> = ({}) => {
    return (
        <>
            <style jsx global key={'css_common'}>
                {Common}
            </style>
            <style jsx global key={'css_main'}>
                {Main}
            </style>
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
