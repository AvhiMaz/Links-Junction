import Typetext from "./componets/typetext";
import Image from "./componets/image";
import Name from "./componets/name";
import "./App.css";
import Buttonsss from "./componets/Buttons";
import Moving from "./assets/Moving.json";
import Lottie from "lottie-react";
import Footer from "./componets/footer";
import Icons from "./componets/icons";
import Bio from "./componets/bio";

function App() {
  return (
    <>
      <div className="min-h-sreen">
        <div style={{
          width: "100%",
          height: "100px"
        }} className="text-3xl font-sans flex items-center justify-center font-black">
          <Typetext />
        </div>
        <div className="mb-10">
          <Image />
        </div>
        <div>
          <Name />
        </div>
        <div>
          <Bio />
        </div>
        <div>
          <Buttonsss />
        </div>
        <div>
          <Icons />
        </div>
        <div>
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;