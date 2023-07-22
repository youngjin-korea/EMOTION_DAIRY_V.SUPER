import React from "react";

const MyButton = ({ text, type, onClick }) => {
  const BtnType = ["positive", "negative"].includes(type) ? type : "default";

  return (
    <button
      // 배열.join()메소드로 클래스 이름 동적으로 정의
      className={["MyButton", `MyButton_${BtnType}`].join(" ")}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

MyButton.defaultProps = {
  type: "default",
};

export default MyButton;
