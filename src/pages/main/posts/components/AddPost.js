import React, { useState, useContext } from 'react';

import { Grid, TextField, makeStyles, Button } from '@material-ui/core';

import { EMPTY, ADD } from "../../../../util/constants";
import Context from "../Context";


const useStyles = makeStyles(theme => ({
    button: {
        margin: theme.spacing(1)
    },
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: 350
    },
}));

export default function AddPost(props) {

    const classes = useStyles();
    const dispatch = useContext(Context);

    const [values, setValues] = useState({
        title: EMPTY,
        body: EMPTY
    });

    const handleChange = input => event => {
        setValues({ ...values, [input]: event.target.value });
    };

    function addPost() {
        dispatch({
            type: ADD,
            post: values
        });
        props.addPost(values);
    }

    return (
        <Grid container spacing={2} direction="row" justify="space-around" alignItems="center">
            <Grid item xs={12} md={6} sm={6}>
                <TextField
                    id="title"
                    label="Title"
                    className={classes.textField}
                    value={values.title}
                    onChange={handleChange("title")} />
            </Grid>
            <Grid item xs={12} sm={6}>
                <TextField
                    id="body"
                    label="Content"
                    className={classes.textField}
                    value={values.body}
                    onChange={handleChange("body")} />
            </Grid>
            <Grid item xs={12} sm={12}>
                <Button
                    id="btnSave"
                    variant="contained"
                    color="primary"
                    className={classes.button}
                    onClick={() => addPost()}
                >
                    Save
              </Button>
            </Grid>
        </Grid>
    );
}
