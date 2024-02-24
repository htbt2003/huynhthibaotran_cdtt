import { useEffect, useState } from "react";
import { BiSolidStar } from "react-icons/bi";
import { FaRegStar } from "react-icons/fa6";
import swal from "sweetalert";
import ReviewServies from '../../../services/ReviewServies';
import { connect } from "react-redux";

const ProductReview = ( prop ) => {
    const [selectedRating, setSelectedRating] = useState(0);
    const [comment, setsComment] = useState("")
    const [review, setReview] = useState([])
    const [reviews, setReviews] = useState([]);
    const [reload, setReload] = useState();
    useEffect(function () {
        (async function () {
            const result = await ReviewServies.getReviewProduct(prop.product_id);
            setReviews(result.reviews);

            // const resultpro = await ReviewServies.getReviewProductByUser(prop.product_id, 13)
            // setReview(resultpro.review);

        })();
    }, [reload])
    async function handleSubmitReview () {
        if (comment === "") {
            swal("Failed", "Vui lòng viết bình luận đánh giá", "error");
            return
        }
        const review = {
            user_id: prop.user.id,
            product_id: prop.product_id,
            comment: comment,
            rating: selectedRating+1,
        }
        await ReviewServies.create(review)
        .then((result) => {
            setSelectedRating(0);
            setsComment("");
        })
        setReload(Date.now);
    }

    return (
        <div className="tab-pane fade" id="reviews" role="tabpanel">
            <div className="product_info_content">
            </div>
            {reviews && reviews.map(function (review, index) {
                return (
                    <div className="product_info_inner" key={index}>
                        <div className="product_ratting mb-10">
                            <ul>
                                {[...Array(5)].map(function (_, i) {
                                    
                                    return (
                                        <li key={i}>
                                            <a>
                                                <BiSolidStar size={20} color={i < review.rating ? "#00bba6" : 'black'} />
                                            </a>
                                        </li>
                                    )
                                })}
                            </ul>
                            <strong>{review.user_name}</strong>
                            <p>{review.created_at}</p>
                        </div>
                        <div className="product_demo">
                            {/* <strong>demo</strong> */}
                            <p>{review.comment}</p>
                        </div>
                    </div>
                )
            })}
            <div className="product_review_form">
                <div >
                    <h2>Add a review </h2>
                    <p>
                        Your email address will not be published. Required fields
                        are marked{" "}
                    </p>
                    <div className="">
                        <ul className="row">
                            {[...Array(5)].map(function (_, i) {
                                return (
                                    <li key={i} >
                                        {
                                            i <= selectedRating ?
                                            ( 
                                                <BiSolidStar size={20} color="#00bba6" onClick={()=> setSelectedRating(i)}/>
                                                
                                            )
                                            :
                                            (
                                                <FaRegStar size={20} onClick={()=> setSelectedRating(i)}/>
                                            )
                                        }
                                           
                                        
                                    </li>
                                )
                            })}
                        </ul>
                    </div>

                    <div className="row">
                        <div className="col-12">
                            <label >Your review </label>
                            <textarea
                                value={comment} onChange={(e)=> setsComment(e.target.value)} 
                            />
                        </div>
                    </div>
                    <button onClick={handleSubmitReview}>Submit</button>
                </div>
            </div>
        </div>

    );
}

const mapStateToProps = state => {
    return {
      user: state._todoUser.user,
    }
  }
  
export default connect(mapStateToProps)(ProductReview);

