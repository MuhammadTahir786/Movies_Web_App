import React, { useState } from 'react'
import { VscSearch } from "react-icons/vsc";
import Rating from '@mui/material/Rating';
import { useLocation } from 'react-router-dom';
import { connect } from 'react-redux';
import { RootState } from '../../store';
import { objToQueryString } from '../../helpers/function';
import debounce from 'lodash.debounce';
import { moviesAction } from '../../store/actions/movie-actions';

// interface for  component props types

interface props {
    moviesAction: any,
    movies: {
        data: {
            title: string,
            year: Date,
            director: [string] | string,
            poster: string,
            cast: [string],
            overview: string,
            imdb_rating: number
        }[],
    },
}

const MovieDetail: React.FC<props> = ({ movies }) => {

    const { state } = useLocation();
    const { data } = movies;

    const [search, setSearch] = useState("")
    const [show, setShow] = useState(false)

    const handleSearch = debounce((e) => {
        setSearch(e.target.value)
        const params = objToQueryString({
            ...(e.target.value && { q: e.target.value }),
        });
        moviesAction(params)
        if (e.target.value === "") setShow(false)
        else { setShow(true) }
    }, 1000);

    // if user view the movie detail and perform search than that movie details show on the page
    const filterData = data.find((item) => item.title.toLowerCase().includes(search.toLowerCase()));
    const movieDetail = show === true ? filterData : state;

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
            <div className='movie-detail-main-container'>
                <div>
                    <img className='movie-detail-image' src={movieDetail?.poster} />
                </div>
                <div className='movie-detail-container'>
                    <p>{movieDetail?.title} (<>{movieDetail?.imdb_rating})</></p>
                    <div className='rating-container'>
                        <Rating name="read-only" value={movieDetail?.imdb_rating / 2} readOnly />
                    </div>
                    <div className='movie-detail'>
                        <p>{new Date(movieDetail?.released_on).getFullYear()} | {movieDetail?.length} |&nbsp;{typeof (movieDetail?.director) == "string" ? movieDetail?.director : movieDetail?.director?.map((item: React.ReactNode, index: number) => <p>{index ? ', ' : ''}{item}</p>)}  </p>
                    </div>
                    <div className='movie-detail'>
                        <p>Cast:&nbsp;{movieDetail?.cast?.map((item: React.ReactNode, index: number) => <p>{index ? ', ' : ''}{item} </p>)} </p>
                    </div>
                    <p className='movie-description'>Movie Description: {movieDetail?.overview}</p>
                </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(MovieDetail)