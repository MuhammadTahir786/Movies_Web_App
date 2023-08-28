import { Routes, Route } from "react-router-dom";
import MovieDashboard from "../pages/movie-dashboard";
import MovieDetail from "../pages/movie-detail";

const Navigation = () => {
    return (
        <Routes>
            {/* Route change to Movie-WEB-APP to access on github pages */}
            {/* These are the two routes first is the main dashboard screen and second one show movie details */}
            <Route path="/" element={<MovieDashboard />} />
            <Route path="/detail" element={<MovieDetail />} />
        </Routes>
    )
}
export default Navigation