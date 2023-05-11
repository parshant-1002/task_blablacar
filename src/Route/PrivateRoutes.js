import AddOrEditProfilePic from "../Components/Cells/AddOrEditProfilePic";
import PickupFromMap from "../Components/Molecules/SelectLocationFromMap";
import Profile from "../Components/Molecules/Profile";
import AddVehicleDetails from "../Components/Molecules/Profile/ProfileView/AddVehicle";
import EditOrDeleteVehicle from "../Components/Molecules/Profile/ProfileView/AddVehicle/EditorDeleteVehicle";
import DropOf from "../Components/Molecules/Publish ride/DropOf";
import Pickup from "../Components/Molecules/Publish ride/Pickup";
import SelectRoute from "../Components/Molecules/Publish ride/SelectRoute/SelectRoute";
import AddStop from "../Components/Cells/AddStop.js";
import DateOfRide from "../Components/Cells/DateOfRide";
import RideTime from "../Components/Cells/RideTime";
import OfferSeatConfortChoice from "../Components/Cells/OfferSeatConfortChoice";
import NoOfPassangers from "../Components/Cells/NoOfPassangers";
import PassangersCanBookInstantly from "../Components/Cells/PassangersCanBookInstantly";
import SetPrice from "../Components/Cells/SetPrice";
import DeleteAccount from "../Components/Molecules/Profile/AccountView/DeleteAccount";
import AboutRide from "../Components/Cells/AboutRide";

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
  {
    path: "/offer-seats/departure-date",
    component: <DateOfRide />,
  },
  {
    path: "/offer-seats/departure-date/time",
    component: <RideTime />,
  },
  {
    path: "/offer-seats/comfort",
    component: <OfferSeatConfortChoice />,
  },
  {
    path: "/offer-seats/seats",
    component: <NoOfPassangers />,
  },
  
  {
    path: "/offer-seats/request_approval",
    component: <PassangersCanBookInstantly />,
  },
  {
    path: "/offer-seats/price-recommendation",
    component: <SetPrice />,
  },
  {
    path: "/dashboard/profile/close",
    component: <DeleteAccount />,
  },
  {
    path: "/offer-seats/comment",
    component: <AboutRide />,
  }

  
];