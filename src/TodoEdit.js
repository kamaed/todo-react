import React, { useState } from 'react';
import { Dialog, DialogActions, TextField, Button } from '@material-ui/core';
import useStyles from './styles';

function TodoEdit({open, onClose, editedTodo, editMethod}) {
    const classes = useStyles();

    const initialTodoState = {
        id: editedTodo?.id,
        content: editedTodo?.content || "",
        date: (editedTodo ? new Date(editedTodo.date) : new Date()).toISOString().slice(0,16),
        _links: {
            self: {
                href: editedTodo?._links?.self?.href
            },
        },
    };

    const [todo, setTodo] = useState(initialTodoState);

    const handleChange = (event) => {
        setTodo({...todo, [event.target.id]:event.target.value})
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
                value={todo.content}
                onChange={handleChange}
            />
            <TextField
                className={classes.TextField}
                id="date"
                label="When"
                type="datetime-local"
                value={todo.date}
                onChange={handleChange}
                InputLabelProps={{
                shrink: true,
                }}
            />
            <div className={classes.heroButtons}>
                <DialogActions>
                    <Button
                        onClick={()=>{
                            editMethod(todo)
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