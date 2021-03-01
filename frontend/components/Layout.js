import Head from "next/head";
import TopBar from "./TopBar";

const Layout = (props) => {
  return (
    <div>
      <Head>
        <title>Lingo Link</title>
      </Head>
      <div>
        <TopBar />
        {props.children}
      </div>
    </div>
  );
};

export default Layout;
