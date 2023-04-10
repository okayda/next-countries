import useStore from "../store";

const Background = function () {
  const theme = useStore((state) => state.theme);

  return (
    <div className="background" id={theme ? "bg-dark" : "bg-light"}>
      <div className="circle-bg">
        <div className="circle-1"></div>
        <div className="circle-2"></div>
        <div className="circle-3"></div>
        <div className="circle-4"></div>
        <div className="circle-5"></div>
        <div className="circle-6"></div>
        <div className="circle-7"></div>
      </div>
    </div>
  );
};

export default Background;
