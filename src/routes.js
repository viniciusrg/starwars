import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import SearchPage from "./pages/SearchPage";

export default function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/searchPage" element={<SearchPage />} />
            </Routes>
        </BrowserRouter>
    )
}