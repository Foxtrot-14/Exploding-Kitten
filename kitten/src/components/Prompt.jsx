import "./Prompt.css";
const Prompt = (text) => {
  return (
    <div className="prompt">
      <h1 className="">{text.text}</h1>
    </div>
  );
};

export default Prompt;
