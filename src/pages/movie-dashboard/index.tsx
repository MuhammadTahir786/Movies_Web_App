import React, { useEffect } from 'react'
import { VscSearch } from "react-icons/vsc";
import { objToQueryString } from '../../helpers/function';
import debounce from 'lodash.debounce';
import { connect } from 'react-redux';
import { moviesAction } from '../../store/actions/movie-actions';
import { RootState } from '../../store';
import Listing from '../../components/listing/listing';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";


// interface for  component props types
interface props {
    moviesAction: any,
    movies: {
        action: { poster: string }[],
        drama: { poster: string, }[],
        crime: { poster: string, }[],
        history: { poster: string, }[],
        biography: { poster: string, }[],
    },
}
const MovieDashboard: React.FC<props> = ({ movies, moviesAction }) => {

    // destructuring id sone to get Genres
    const { action, drama, crime, history, biography } = movies;

    // to dispatch action to get movies
    useEffect(() => {
        moviesAction()
    }, [])
    // debouncing is done on search for 1 second to not overload server when user perform searching 
    const handleSearch = debounce((e) => {
        const params = objToQueryString({
            ...(e.target.value && { q: e.target.value }),
        });
        moviesAction(params)
    }, 1000);

    return (
        <>
            <div className='main-container'>
                <div className='header-container'>
                    <div>
                        <p>WOOKIE</p>
                        <p>MOVIES</p>
                    </div>
                </div>
                <div className='search-container'>
                    <VscSearch />
                    <input className='search-input' onChange={handleSearch} />
                </div>
            </div>
            <div className='dashboard-main-container'>
                {/* Listing  comonets made to show each Genres */}
                <Listing title={"Action"} data={action} />
                <Listing title={"Drama"} data={drama} />
                <Listing title={"Crime"} data={crime} />
                <Listing title={"Biography"} data={biography} />
                <Listing title={"History"} data={history} />
            </div>
        </>

    )
}

const mapStateToProps = (state: RootState) => ({
    movies: state.movies,
})
const mapDispatchToProps = {
    moviesAction,
}

export default connect(mapStateToProps, mapDispatchToProps)(MovieDashboard)