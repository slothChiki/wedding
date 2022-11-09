import { NextPage, NextPageContext } from 'next';
import { useEffect } from 'react';
import Metainfo from './MetaInfo';

interface Props {}
const Header: NextPage<Props> = ({}) => {
    return (
        <>
            <Metainfo />
        </>
    );
};

export async function getServerSideProps(ctx: NextPageContext) {
    const server_prop = JSON.parse(JSON.stringify(ctx.query));
    const props: Props = {
        aaa: server_prop.aaa as any,
    };
    return { props };
}
export default Header;
