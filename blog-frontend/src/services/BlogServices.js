import axios from 'axios';


const BLOG_API_BASE_URL = "http://localhost:8080/api";


class BlogService {

    getAuthorById(author_id) {
        return axios.get(BLOG_API_BASE_URL + '/author/' + author_id);
    }

    getBlogs() {
        return axios.get(BLOG_API_BASE_URL + '/blog');
    }

    getBlogsByHashtag(hashtag) {
        return axios.get(BLOG_API_BASE_URL, '/blog/' + hashtag);
    }

    getLoginCredential(author) {
        return axios.post(BLOG_API_BASE_URL + '/login/');         // author id 
    }

    postNewPost(newPost) {
        return axios.post(BLOG_API_BASE_URL + '/author/' + newPost);
    }

    createNewUser() {
        return axios.post(BLOG_API_BASE_URL, '/register');
    }

    // updatePost(author, postId) {}

    // deletePost(author,postId) {}

}