import Head from 'next/head'

interface CustomHead {
  title: string
  keywords: string
  desc: string
}

export default function CustomHead({ title, keywords, desc }:CustomHead) {
  return (
    <Head>
      <title>{ title ? title : "Paul Heading | Front End Dev | Portfolio" }</title>
      { keywords && <meta name="keywords" content={ keywords } /> }
      { desc && <meta name="description" content={ desc } /> }      
      <meta name="author" content="Paul Heading" />
    </Head>
  );
}