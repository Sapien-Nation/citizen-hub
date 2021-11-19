import NextHead from 'next/head';

interface Props {
  children?: React.ReactElement | null;
  title: string;
}

const Head = ({ children = null, title }: Props) => (
  <NextHead>
    <title>Sapien | {title}</title>
    <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    {children}
  </NextHead>
);

export default Head;
