import axios from 'axios';


const BLOG_API_BASE_URL = "http://localhost:8080/api";


class BlogService {

    getAuthorById(author_id) {
        return axios.get(BLOG_API_BASE_URL + '/author/' + author_id);          // hmm i don't need this one 
    }
                                                                // done
    getBlogs() {
        return axios.get(BLOG_API_BASE_URL + '/blogs');
    }

    getBlogsByHashtag(hashtag) {                                 // done
        return axios.get(BLOG_API_BASE_URL, '/blog/' + hashtag);
    }

    getLoginCredential(author) {                                  // done 
        return axios.post(BLOG_API_BASE_URL + '/login');         // author id 
    }
                                                                // done
    postNewPost(newPost) {
        return axios.post(BLOG_API_BASE_URL + '/author/' + newPost);
    }

    createNewUser() {                                           // done
        return axios.post(BLOG_API_BASE_URL, '/register');
    }

    // updatePost(author, postId) {}

    // deletePost(author,postId) {}

}


export default new BlogService()