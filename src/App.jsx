import heroGraphics from "./assets/hero-graphics.svg";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import StudentData from "./components/StudentData";

function App() {
  return (
    <body className="bg-[#172227] font-[Inter] text-white">
      {/* Navbar */}
      <Navbar />

      {/* Begin hero */}
      <section className="bg-[radial-gradient(50%_50%_at_50%_50%,#17956D_0%,#0F684C_100%)] pt-32 pb-20 -mt-[92px] md:-mt-[118px] px-[20px]">
        <div className="container">
          <div className="grid md:grid-cols-2 items-center w-10/12 mx-auto">
            <img
              className="md:order-2 object-cover ml-auto animate-updown"
              src={heroGraphics}
              width="500px"
              height="500px"
              alt="Banner"
            />
            <div>
              <h1 className="text-4xl lg:text-[56px] font-bold leading-[1.1] mb-8">
                The Future of Learning starts with students at the center
              </h1>
              <a className="px-5 py-2.5 bg-[#038C61] rounded-[44px]" href="#">
                Learn More
              </a>
            </div>
          </div>
        </div>
      </section>
      {/* End Hero */}

      {/*Students table */}
      <StudentData />

      {/* Footer */}
      <Footer />
    </body>
  );
}

export default App;
