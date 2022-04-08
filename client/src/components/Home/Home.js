import ColorBox from "./ColorBox";

const Home = () => {
  return (
    <div>

      <ColorBox user="Admin" color="blue" register={false} />
      <ColorBox user="Teacher" color="white" register={false} />
      <ColorBox user="Student" color="blue" register={false} />

    </div>
  );
};

export default Home;
