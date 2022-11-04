import { NextPage, NextPageContext } from "next";

interface Props {
  aaa: string;
}
const Card01: NextPage<any> = ({ aaa }) => {
  return <> {aaa}</>;
};

export async function getServerSideProps(ctx: NextPageContext) {
  const server_prop = JSON.parse(JSON.stringify(ctx.query));
  const props: Props = {
    aaa: server_prop.aaa as any,
  };
  return { props };
}
export default Card01;
