import NextHead from 'next/head';

interface Props {
  title: string;
}

const Head = ({ title }: Props) => (
  <NextHead>
    <title>Sapien | {title}</title>
    <meta name="viewport" content="initial-scale=1.0, width=device-width" />
  </NextHead>
);

export default Head;
