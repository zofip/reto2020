import React from 'react';

import { Grid } from '@material-ui/core';
import PostCard from './PostCard';

export default function PostBody(props) {

  const postCards = props.posts.map((post, index) =>
    <Grid item xs={12} md={3} sm={3} key={index}>
      <PostCard
        post={post}
        handleOpenEdit={props.handleOpenEdit}
        handleDelete={props.handleDelete} />
    </Grid>
  );

  return (
    <Grid container spacing={2} direction="row" justify="space-around" alignItems="center">
      {postCards}
    </Grid>
  );
}
