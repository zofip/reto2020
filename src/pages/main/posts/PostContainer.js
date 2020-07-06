import React, { useState, useEffect, useReducer } from 'react';
import useCombinedReducers from 'use-combined-reducers';

import { Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

import DialogMessage from '../../../common/DialogMessage';
import PostBody from './components/PostBody';
import AddPost from './components/AddPost';
import DialogPostEdit from './components/DialogPostEdit';
import { handleErrors } from '../../../util/utility';
import {
  INFORMATION,
  ERROR,
  MESSAGE_SAVE_POST_SUCCESFULLY,
  MESSAGE_SYSTEM_ERROR,
  EMPTY,
  MESSAGE_EDIT_POST_SUCCESFULLY,
  MESSAGE_DELETE_POST_SUCCESFULLY,
  LOAD_DATA
}
  from '../../../util/constants';
import { getPosts, addPost, editPost, deletePost } from '../../../services/servicePosts';
import postsReducer from '../reducers/postReducer';
import Context from './Context';

const useStyles = makeStyles(() => ({
  container: {
    paddingTop: 32,
    paddingBottom: 32,
  },
}));

const PostContainer = (props) => {
  const classes = useStyles();

  const [state, dispatch] = useCombinedReducers({
    posts: useReducer(postsReducer, [])
  });
  const { posts } = state;

  const [selectedPost, setSelectedPost] = useState({
    title: EMPTY,
    body: EMPTY
  });
  const [open, setOpen] = useState(false);
  const [openPostEdit, setOpenPostEdit] = useState(false);
  const [title, setTitle] = useState();
  const [message, setMessage] = useState();

  useEffect(() => {
    getPosts().then(response => response.json())
      .then(data => {
        dispatch({ type: LOAD_DATA, data: data })
      });
  }, []);

  function handleAdd(post) {
    addPost(post)
      .then(handleErrors)
      .then(response => {
        setTitle(INFORMATION);
        setMessage(MESSAGE_SAVE_POST_SUCCESFULLY);
        setOpen(true);
      }).catch(error => {
        launchErrorDialog(error);
      });
  };

  function handleEdit(post) {
    editPost(post)
      .then(handleErrors)
      .then(response => {
        setTitle(INFORMATION);
        setMessage(MESSAGE_EDIT_POST_SUCCESFULLY);
        setOpen(true);
      }).catch(error => {
        launchErrorDialog(error);
      });
    setOpenPostEdit(false);
  };

  function handleDelete(id) {
    deletePost(id)
      .then(handleErrors)
      .then(response => {
        setTitle(INFORMATION);
        setMessage(MESSAGE_DELETE_POST_SUCCESFULLY);
        setOpen(true);
      }).catch(error => {
        launchErrorDialog(error);
      });
  };

  function launchErrorDialog(error) {
    setTitle(ERROR);
    setMessage(MESSAGE_SYSTEM_ERROR);
    setOpen(true);
    console.error(error);
  }

  function handleOpenEdit(post) {
    setSelectedPost(post);
    setOpenPostEdit(true);
  }

  function handleCancel() {
    setOpenPostEdit(false);
  }

  function handleClose() {
    setOpen(false);
  }

  return (
    <Context.Provider value={dispatch}>
      <Container fixed className={classes.container}>
        <AddPost addPost={handleAdd}></AddPost>
        <PostBody
          posts={posts}
          handleOpenEdit={handleOpenEdit}
          handleDelete={handleDelete} />
        <DialogPostEdit
          open={openPostEdit}
          onClose={handleEdit}
          onCancel={handleCancel}
          post={selectedPost}
        ></DialogPostEdit>
        <DialogMessage
          title={title}
          message={message}
          open={open}
          handleClose={handleClose}>
        </DialogMessage>
      </Container>
    </Context.Provider>
  );
};

export default PostContainer;
