
import './App.css';
import Header from './Header';
import Banner from './Banner';
import Product from './Product';
import About from './About';
import Modal from './Modal';
import Contact from './Contact';
import Footer from './Footer';



function App() {
  return (
    <div className="App">
      <Header />
      <Banner />
      <Product />
      <About />
      <Contact/>
      <Footer />
      
     
      
    </div>
  );
}
// document.querySelector('.owl-carousel').owlCarousel({
//   loop:true,
//   margin:10,
//   autoplay:true,
//   autoplayTimeout:2000,
//   responsiveClass:true,
//   responsive:{
//       0:{
//           items:1,
//           nav:true
//       },
//       600:{
//           items:3,
//           nav:false
//       },
//       1000:{
//           items:3,
//           nav:false,
//           loop:true,

//       }
//   }
// })




export default App;
