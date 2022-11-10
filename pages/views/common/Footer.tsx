import { NextPage } from 'next';

interface Props {
    aaa: string;
}
const Footer: NextPage<any> = ({ aaa }) => {
    return (
        <>
            <script src="/scripts/jquery.min.js?ver=1.1.0"></script>
            <script src="/scripts/bootstrap.bundle.min.js?ver=1.1.0"></script>
            <script src="/scripts/aos.js?ver=1.1.0"></script>
            {/* 얘 때문에 에러 나는데... 어카징*/}
            <script src="/scripts/ekko-lightbox.min.js?ver=1.1.0"></script>
            <script src="/scripts/main.js?ver=1.1.0"></script>
        </>
    );
};

export default Footer;
