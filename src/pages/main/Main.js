import React from 'react';
import { withRouter } from 'react-router-dom';

import { CssBaseline } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

import Header from '../../common/Header';
import PostContainer from './posts/PostContainer';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto',
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
}));

const Main = () => {

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Header />
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <PostContainer />
      </main>
    </div>
  );
};

export default withRouter(Main);
