import { FC } from "react";
import { Text, View } from "react-native";
import SubmitButton from "components/SubmitButton/SubmitButton";
import { IPaymentInfoProps } from "./type";

const PaymentInfo: FC<IPaymentInfoProps> = ({ total, deliveryFee }): JSX.Element => {
  return (
    <View className="bg-white p-4 mt-14 space-y-4">
      <View className="flex-row">
        <Text className="flex-1 text-gray-400">Subtotal</Text>
        <Text className="text-gray-400">${total}</Text>
      </View>
      <View className="flex-row">
        <Text className="flex-1 text-gray-400">Delivery Fee</Text>
        <Text className="text-gray-400">${deliveryFee}</Text>
      </View>
      <View className="flex-row">
        <Text className="flex-1">Order Total</Text>
        <Text>${deliveryFee + total}</Text>
      </View>
      <View>
        <SubmitButton
          title="Place Order"
          onPressHandler={() => {
            console.log("object");
          }}
        />
      </View>
    </View>
  );
};

export default PaymentInfo;
