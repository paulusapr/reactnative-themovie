import {Review} from '../entities/Review';

export default interface ReviewRepository {
  getReviewsByMovieId: (movieId: number) => Promise<Review[]>;
}
