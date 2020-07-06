import { ADD, DELETE, LOAD_DATA, EDIT } from "../../../util/constants";

const postsReducer = (posts, action) => {
    switch (action.type) {
        case LOAD_DATA:
            return action.data;
        case ADD:
            return [
                ...posts,
                action.post
            ];
        case EDIT:
            const position = posts.findIndex(item => item.id === action.post.id);
            posts.splice(position, 1, action.post);
            return posts;
        case DELETE:
            return posts.filter(post => post.id !== action.id);
        default:
            return posts;
    }
};

export default postsReducer;