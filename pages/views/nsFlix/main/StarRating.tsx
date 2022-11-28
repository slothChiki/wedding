import StarRatings from 'react-star-ratings';

interface props {
    voteAverage: number;
}
const StarRating = ({ voteAverage = 1 }: props) => {
    return (
        <StarRatings
            rating={5}
            numberOfStars={5}
            starRatedColor="yellow"
            starDimension="15px"
            starSpacing="0px"
        />
    );
};
export default StarRating;
