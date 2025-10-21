import { useState } from "react";
import Layout from "../Layout/Layout";
import AllMeetupsPage from "../../pages/AllMeetupsPage";
import FavoritesPage from "../../pages/Favorites";
import NewMeetupsPage from "../../pages/NewMeetup";
import {
  ALL_MEETUP_PAGE,
  FAVORITES_PAGE,
  NEW_MEETUP_PAGE,
} from "../../utils/constants";
import MainNavigation from "../Navigators/MainNavigator/MainNavigation";

function App() {
  const [page, setPage] = useState(ALL_MEETUP_PAGE);

  function getCurrentPageComponent() {
    let currentPageComponent = <AllMeetupsPage />;
    switch (page) {
      case FAVORITES_PAGE:
        currentPageComponent = <FavoritesPage />;
        break;
      case NEW_MEETUP_PAGE:
        currentPageComponent = <NewMeetupsPage />;
        break;
      default:
        currentPageComponent = <AllMeetupsPage />;
    }

    return currentPageComponent;
  }

  return (
    <div data-testid="app">
      <MainNavigation setPage={setPage} />
      <Layout>{getCurrentPageComponent()}</Layout>
    </div>
  );
}

export default App;
