import { FC } from "react";
import { TextInput, View } from "react-native";
import { AdjustmentsVerticalIcon, MagnifyingGlassIcon } from "react-native-heroicons/outline";
import { COLOR_PALETTE } from "constants/colors";

const Search: FC = (): JSX.Element => {
  return (
    <View className="flex-row items-center space-x-2 px-4 pb-2">
      <View className="flex-row flex-1 space-x-2 bg-gray-200 p-3 rounded-md">
        <MagnifyingGlassIcon color="gray" size={20} />
        <TextInput
          selectionColor="gray"
          className="text-gray-600"
          keyboardType="default"
          placeholder="Restaurants and cuisines"
        />
      </View>
      <AdjustmentsVerticalIcon color={COLOR_PALETTE.default} />
    </View>
  );
};

export default Search;
