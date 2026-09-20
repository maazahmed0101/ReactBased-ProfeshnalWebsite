import { Navigate, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout.jsx";
import EmptyState from "./components/EmptyState/EmptyState.jsx";
import Home from "./pages/Home.jsx";
import Search from "./pages/Search.jsx";
import Watch from "./pages/Watch.jsx";

function UnavailablePage() {
  return (
    <EmptyState fill title="This page is not available yet">
      Try Home or search for a video instead.
    </EmptyState>
  );
}

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search />} />
        <Route path="/watch/:videoId" element={<Watch />} />
        <Route path="*" element={<UnavailablePage />} />
      </Route>
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
