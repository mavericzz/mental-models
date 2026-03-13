import { Routes, Route } from "react-router-dom";
import { Layout } from "./components/Layout";
import { Home } from "./pages/Home";
import Explore from "./pages/Explore";
import { CategoryPage } from "./pages/CategoryPage";
import { LearnPage } from "./pages/LearnPage";
import { Profile } from "./pages/Profile";
import { useBadgeChecker } from "./hooks/useBadgeChecker";

export default function App() {
  useBadgeChecker();

  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/category/:categoryId" element={<CategoryPage />} />
        <Route path="/learn/:modelId" element={<LearnPage />} />
        <Route path="/profile" element={<Profile />} />
      </Route>
    </Routes>
  );
}
