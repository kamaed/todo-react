import React from 'react';
import { Dialog, DialogActions, TextField, Button } from '@material-ui/core';
import useStyles from './styles';

function TodoEdit({open, onClose, editedTodo, setEditedTodo, editMethod}) {
    const classes = useStyles();

    const handleChange = (event) => {
        setEditedTodo({...editedTodo, [event.target.id]:event.target.value})
    }

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
                value={editedTodo.content}
                onChange={handleChange}
            />
            <TextField
                className={classes.TextField}
                id="date"
                label="When"
                type="datetime-local"
                value={new Date(editedTodo.date).toISOString().slice(0,16)}
                onChange={handleChange}
                InputLabelProps={{
                shrink: true,
                }}
            />
            <div className={classes.heroButtons}>
                <DialogActions>
                    <Button
                        onClick={()=>{
                            editMethod(editedTodo)
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