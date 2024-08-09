type ButtonPropsType = {
  callBack: () => void;
  name: string;
};

export const Button = (props: ButtonPropsType) => {
  const callBackHandler = () => {
    props.callBack();
    // НУЖНО ДОПИСАТЬ
  };

  return (
    <button id={"hw04-button"} onClick={callBackHandler}>
      {props.name}
    </button>
  );
};
