import Footer from "./shared/Footer";
import Header from "./shared/Header";


 
 

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