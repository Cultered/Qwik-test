import { component$, Slot } from '@builder.io/qwik';
import Header from '../components/header';
import Menu from '../components/menu';
import Footer from '~/components/footer';
 
export default component$(() => {
  return (
    <>
      <Header />
      <Menu />
      <Slot /> {/* <== This is where the route will be inserted */}
      <Footer/>
    </>
  );
});