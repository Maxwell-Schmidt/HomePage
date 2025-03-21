import HomePageLayout from './HomePageLayout'
import HomeContent from '../Content/HomeContent'
import FeaturedPage from '../Content/FeaturedPage';
import NoMatch from '../Content/NoMatch';

import { HashRouter, Route, Routes } from 'react-router-dom';

function Home() {
  return (
    <div>
      <HashRouter>
        <Routes>
          <Route path="/" element={<HomePageLayout/>}>
            <Route index element={<HomeContent/>} />
            <Route path="/featured" element={<FeaturedPage/>}></Route>
            <Route path="*" element={<NoMatch />} />
        </Route>
        </Routes>

      </HashRouter>
    </div>
  );
}

export default Home;
