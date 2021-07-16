import React from "react";
import Svg, { Path } from "react-native-svg";

const PokeballIcon = (props) => {
  return (
    <Svg
      width={props.width ? props.width : "20"}
      height={props.height ? props.height : "20"}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Path
        d="M10 0C4.489 0 0 4.489 0 10C0 15.511 4.489 20 10 20C15.511 20 20 15.511 20 10C20 4.489 15.511 0 10 0ZM10 2C14.0907 2 17.4412 5.04577 17.9316 9H12.8125C12.3951 7.84267 11.2932 7 10 7C8.70684 7 7.60486 7.84267 7.1875 9H2.06836C2.55885 5.04577 5.90935 2 10 2ZM10 9C10.5641 9 11 9.43587 11 10C11 10.5641 10.5641 11 10 11C9.43587 11 9 10.5641 9 10C9 9.43587 9.43587 9 10 9ZM2.06836 11H7.1875C7.60486 12.1573 8.70684 13 10 13C11.2932 13 12.3951 12.1573 12.8125 11H17.9316C17.4412 14.9542 14.0907 18 10 18C5.90935 18 2.55885 14.9542 2.06836 11Z"
        fill="white"
      />
    </Svg>
  );
};

export default PokeballIcon;
