import { useTypewriter, Cursor } from "react-simple-typewriter";

const Typetext = () => {
  const [text] = useTypewriter({
    words: ["Developer", "Creator", "Innovator", "Explorer", "Designer"],
    loop: {},
  });

  return (
    <>
      <div className="flex items-center justify-center">
        <h1 style={{ margin: "50px", color: "white" }}>
          I am a{" "}
          <span style={{ fontWeight: "bold", color: "red" }}>{text}</span>
          <span>
            <Cursor cursorStyle="<" />
          </span>
        </h1>
      </div>
    </>
  );
};

export default Typetext;
