import { NextPage, NextPageContext } from "next";
import Head from 'next/head'
import Image from 'next/image'
import { useEffect } from "react";
import styles from '../styles/Home.module.css'

interface Props {
  aaa: string;
}
const Card01: NextPage<any> = ({ aaa }) => {
  useEffect(()=>{
    console.log(`hi ${aaa}`);
    
  },[]);
  return (
  <>
   <div style={{ marginBottom: 25 }}>
   {aaa}
   </div> 
  </>);
};

export async function getServerSideProps(ctx: NextPageContext) {
  const server_prop = JSON.parse(JSON.stringify(ctx.query));
  const props: Props = {
    aaa: server_prop.aaa as any,
  };
  return { props };
}
export default Card01;
