import Head from 'next/head';
import { NextPage } from 'next';
// import router from 'next/router';
interface Props {}
const Metainfo: NextPage<Props> = ({}) => {
    return (
        <>
            <Head>
                <title>나연 상민 모바일 청첩장</title>
            </Head>
            {/* {router.asPath} */}
        </>
    );
};
export default Metainfo;
