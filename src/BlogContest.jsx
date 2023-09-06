// BlogContext.js
import React, { createContext, useContext, useReducer } from 'react';

const BlogContext = createContext();

const initialState = {
  blogs: [],
};

const blogReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_BLOG':
      return {
        ...state,
        blogs: [...state.blogs, action.payload],
      };
    default:
      return state;
  }
};

export const BlogProvider = ({ children }) => {
  const [state, dispatch] = useReducer(blogReducer, initialState);

  const addBlog = (blog) => {
    dispatch({ type: 'ADD_BLOG', payload: blog });
  };

  return (
    <BlogContext.Provider value={{ state, addBlog }}>
      {children}
    </BlogContext.Provider>
  );
};

export const useBlogContext = () => {
  return useContext(BlogContext);
};
