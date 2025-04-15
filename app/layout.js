import Footer from "./shared/Footer";
import Header from "./shared/Header";
import './globel.css';

 
 

export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <body>
        <Header/>
          {children}
          <Footer/>

      </body>
    </html>
  );
}