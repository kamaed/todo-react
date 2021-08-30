import React, { useState } from 'react';
import { Dialog, DialogActions, TextField, Button } from '@material-ui/core';
import useStyles from './styles';

function TodoEdit({open, onClose, editedTodo, editMethod}) {
    const classes = useStyles();
    const [content, setContent] = useState(editedTodo ? editedTodo.content : "");
    const [date, setDate] =  useState((editedTodo ? new Date(editedTodo.date) : new Date()).toISOString().slice(0,16));

    return (
        <Dialog 
            className={classes.Modal}
            open={open}
            onClose={onClose}
            aria-labelledby="form-dialog-title"
            fullWidth
            maxWidth="sm"
        >
            <TextField
                className={classes.TextField}
                autoFocus
                id="content"
                label="What do you want to do"
                value={content}
                onChange={(event) => setContent(event.target.value)}
            />
            <TextField
                className={classes.TextField}
                id="date"
                label="When"
                type="datetime-local"
                value={date}
                onChange={(event) => setDate(event.target.value)}
                InputLabelProps={{
                shrink: true,
                }}
            />
            <div className={classes.heroButtons}>
                <DialogActions>
                    <Button
                        onClick={()=>{
                            editMethod({content: content, date: date}, editedTodo && editedTodo._links.self.href)
                            onClose()
                        }}
                        color="primary"
                    >
                        Ok
                    </Button>
                    <Button onClick={onClose} variant="outlined" color="primary">
                        Close
                    </Button>
                </DialogActions>
            </div>
        </Dialog>
    );
};

export default TodoEdit;