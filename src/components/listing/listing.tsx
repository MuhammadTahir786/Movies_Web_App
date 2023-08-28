import React from 'react'
import { Link } from 'react-router-dom'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";


interface props {

    data: { poster: string }[],
    title: string,
}

const Listing: React.FC<props> = ({ data, title }) => {
    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 4,
            slidesToSlide: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2,
            slidesToSlide: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
            slidesToSlide: 1
        }
    };
    return (
        <>
            {data.length > 0 && <p>{title}</p>}
            <Carousel
                showDots={false}
                arrows={true}
                responsive={responsive}>
                {data?.map((item: { poster: string }) => (
                    <Link to={"/detail"} state={item}>
                        <img className='movie-image' src={item?.poster} />
                    </Link>
                ))}
            </Carousel>
        </>
    )
}

export default Listing