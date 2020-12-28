import React, { useContext } from "react";
import { HamburgerContext } from "../contexts/HamburgerContext";
import Lottie from "react-lottie";
import animationData from "../lotties/burger.json";
import { Layout,OrderMessage } from "../components/Layout/Layout.styled";
const Order = () => {
  const { getCalculatedTotalPrice } = useContext(HamburgerContext);
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <Layout>
      <Lottie options={defaultOptions} height={450} width={900} />
      <OrderMessage>
        Your order has been successfully received Total Price:${getCalculatedTotalPrice()}
      </OrderMessage>
    </Layout>
  );
};

export default Order;
