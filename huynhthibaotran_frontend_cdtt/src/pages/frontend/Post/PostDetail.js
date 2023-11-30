import { useEffect, useState } from "react";
import PostServices from "../../../services/PostServices"
import { useParams } from "react-router-dom";
import { urlImage } from "../../../config";
import PostItem from "../../../components/PostItem";

function PostDetail() {
    const [post, setPost] = useState([]);
    const [post_other, setProductOther] = useState([]);
    const { slug } = useParams();
    useEffect(function () {
        (async function () {
            try {
                const result = await PostServices.getTopicBySlug(slug)
                setPost(result.data.post)
                setProductOther(result.data.post_other)
            }
            catch (error) {
                console.log(error)
            }
        })();
    }, [slug]);
    return (
        <section className="maincontent m-4">
            <div className="container my-4 mb-5">
                <div className="row">
                    <h1 className="text-center text-primary">{post.title}</h1>
                    <div>{post.detail}</div>
                    <div className="img_feature my-4">
                        <img
                            src={urlImage + "post/" + post.image}
                            alt={post.title}
                        />
                    </div>
                </div>
            </div>
            <hr></hr>
            <h2 style={{marginLeft:200}}>Có thể bạn quan tâm</h2>
                <div className="row">
                <div className="col-md-2">
                    </div>
                    <div className="col-md-8">
                        {post_other.map(function(post,index){
                            return <PostItem key={index} post={post}/>
                        })}
                    </div>
                </div>
        </section>
    );
}

export default PostDetail;