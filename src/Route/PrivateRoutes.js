import AddOrEditProfilePic from "../Components/Cells/AddOrEditProfilePic";
import PickupFromMap from "../Components/Molecules/SelectLocationFromMap";
import Profile from "../Components/Molecules/Profile";
import AddVehicleDetails from "../Components/Molecules/Profile/ProfileView/AddVehicle";
import EditOrDeleteVehicle from "../Components/Molecules/Profile/ProfileView/AddVehicle/EditorDeleteVehicle";
import DropOf from "../Components/Molecules/Publish ride/DropOf";
import Pickup from "../Components/Molecules/Publish ride/Pickup";
import SelectRoute from "../Components/Molecules/Publish ride/SelectRoute/SelectRoute";
import AddStop from "../Components/Cells/AddStop.js";

export const PRIVATE_ROUTES = [
  {
    path: "/dashboard/profile/menu",
    component: <Profile />,
  },
 
  {
    path: "/dashboard/profile/picture",
    component: <AddOrEditProfilePic />,
  },
  {
    path: "/dashboard/profile/vehicle/:id",
    component: <EditOrDeleteVehicle />,
  },
  {
    path: "/dashboard/profile/vehicle/add",
    component: <AddVehicleDetails />,
  },
  {
    path: "/offer-seats/departure",
    component: <Pickup />,
  },
  {
    path: "/offer-seats/departure/precise/:coordinates/:type",
    component: <PickupFromMap />,
  },
  {
    path: "/offer-seats/arrival",
    component: <DropOf />,
  },
  {
    path: "/offer-seats/choose-your-route",
    component: <SelectRoute />,
  },
  {
    path: "/offer-seats/declared-stopovers",
    component: <AddStop />,
  },
  
  
];