import Layout from "../Layout/Layout";
import AllMeetupsPage from "../../pages/AllMeetUpsPage/AllMeetupsPage";
import FavoritesPage from "../../pages/FavoritesPage";
import NewMeetupsPage from "../../pages/NewMeetUpPage/NewMeetupPage";
import { Routes, Route, Navigate } from "react-router-dom";
import MainNavigation from "../Navigators/MainNavigator/MainNavigation";
import {
  ALL_MEETUP_PAGE,
  FAVORITES_PAGE,
  NEW_MEETUP_PAGE,
} from "../../utils/constants";

function App() {
  return (
    <Layout>
      <MainNavigation />
      <Routes>
        <Route path="/" element={<Navigate to={ALL_MEETUP_PAGE} />} />
        <Route path={ALL_MEETUP_PAGE} element={<AllMeetupsPage />} />
        <Route path={FAVORITES_PAGE} element={<FavoritesPage />} />
        <Route path={NEW_MEETUP_PAGE} element={<NewMeetupsPage />} />
      </Routes>
    </Layout>
  );
}

export default App;
