import { FC } from "react";
import MapView, { Marker } from "react-native-maps";
import { COLOR_PALETTE } from "constants/colors";
import { LATTITUDE_DELTA } from "constants/maps";
import { IMapProps } from "./type";

const Map: FC<IMapProps> = ({ description, lattitude, longtitude, title }) => {
  return (
    <MapView
      initialRegion={{
        latitude: lattitude,
        longitude: longtitude,
        latitudeDelta: LATTITUDE_DELTA,
        longitudeDelta: LATTITUDE_DELTA,
      }}
      mapType="standard"
      className="flex-1 -mt-10 z-0"
    >
      <Marker
        coordinate={{ latitude: lattitude, longitude: longtitude }}
        title={title}
        description={description}
        pinColor={COLOR_PALETTE.cyan}
        identifier="origin"
      />
    </MapView>
  );
};

export default Map;
