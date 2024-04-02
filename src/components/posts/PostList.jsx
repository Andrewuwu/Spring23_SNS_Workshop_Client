import PostCard from './PostCard';

function PostList({posts}){

    return (
      <div style={{marginTop: "2rem"}}>
        {posts.map((post, index) => (
          <div key={index}>
            <PostCard key={post._id} post={post}></PostCard>
          </div>
        ))}
      </div>
    );
}

export default PostList;