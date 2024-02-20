import LastComponent from "./LastComponent";

const SecondComponent = ({ background }) => {
  return (
    <div>
      <LastComponent background={background} />
    </div>
  );
};

export default SecondComponent;
