import React from "react";
import { useWindowSize } from "../../hooks/useWindowSize";

interface Props {
  color: string | undefined;
}

export const Cart: React.FC<Props> = ({ color }) => {
  const windowSize = useWindowSize();
  
  const size = windowSize.width
    ? windowSize.width > 768
      ? windowSize.width * 0.03
      : windowSize.width * 0.05
    : 0;

  return (

    <svg
      width={size}
      height={size}
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M5.6923 3.8H2V2H7.53846L9.38462 7.4H25C25.5523 7.4 26 7.84772 26 8.4V15.5762C26 16.0547 25.661 16.4661 25.1914 16.5577L8.60087 19.7928C8.02821 19.9045 7.48197 19.5042 7.4159 18.9245L5.6923 3.8Z"
        fill={color}
      />
      <circle cx="11" cy="23" r="2" fill={color} />
      <circle cx="22" cy="23" r="2" fill={color} />
    </svg>

  );
};

export default Cart;
