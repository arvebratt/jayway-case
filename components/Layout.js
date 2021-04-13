import Meta from "./Meta";
import Title from "./Title";
import UnderTitle from "./UnderTitle";
import Search from "./Search";
import Display from "./Display";
import Footer from "./Footer";

export default function Layout() {
  return (
    <>
      <Meta />
      <Title />
      <UnderTitle />
      <Search />
      <Display />
      <Footer />
    </>
  );
}
