import React, { useContext } from 'react';
import PropTypes from 'prop-types';

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';

import Context from "../Context";
import { DELETE } from '../../../../util/constants';

const useStyles = makeStyles(theme => ({
  root: {
    maxWidth: 345
  },
  media: {
    height: 0,
    paddingTop: '56.25%' // 16:9
  },
  avatar: {
    backgroundColor: red[500]
  },
  paper: {
    maxWidth: 400,
    margin: `${theme.spacing(1)}px auto`,
    padding: theme.spacing(2),
  },
}));

const PostCard = props => {

  const classes = useStyles();
  const dispatch = useContext(Context);

  function deletePost(id) {
    dispatch({
        type: DELETE,
        id: id
    });
    props.handleDelete(id)
}

  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={
         (<Avatar aria-label="recipe" className={classes.avatar}>R</Avatar>)
        }
        title={props.post.title}
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {props.post.body}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="edit" onClick={() => props.handleOpenEdit(props.post)}>
          <EditIcon />
        </IconButton>
        <IconButton aria-label="delete" onClick={() => deletePost(props.post.id)}>
          <DeleteIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
};

PostCard.propTypes = {
  post: PropTypes.object.isRequired
};

export default PostCard;
