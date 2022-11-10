import { NextPage, NextPageContext } from 'next';
import { useEffect } from 'react';

interface Props {
    aaa: string;
}
const Card01: NextPage<any> = ({ aaa }) => {
    useEffect(() => {
        console.log(`hi ${aaa}`);
    }, []);
    return (
        <>
            <div style={{ marginBottom: 25 }}>{aaa}</div>
            <img src={'/bride.jpg'} />
            <div style={{ background: 'url(/bride.jpg)' }}> ddd </div>
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
export default Card01;
