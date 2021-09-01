import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit'
import { CardActions, CardContent, Grid, Typography, Card, Checkbox } from '@material-ui/core';
import useStyles from './styles'
  
  function TodoItem({todo, setEditVisible, setEditedTodo, editMethod, deleteMethod, }) {
    const classes = useStyles();
    
    const editTodo = () => {
      setEditedTodo(todo);
      setEditVisible(true);
    }

    const setDoneTodo = (event) => {
      editMethod({...todo, done: event.target.checked})
    }

    const deleteTodo = deleteMethod.bind(this, todo._links.self.href);
    
    return (
      <Grid item xs={12}>
        <Card className={classes.Card}>
          <Checkbox checked={todo.done} onChange={setDoneTodo} color="primary"/>
          <CardContent className={classes.CardContent}>
            <Typography variant='h6'>{todo.content}</Typography>
            <Typography variant='subtitle1'>{new Date(todo.date).toISOString().slice(0,16)}</Typography>
          </CardContent>
          <CardActions className={classes.CardActions}>
            <IconButton aria-label="Edit" className={classes.IconButtons} onClick={editTodo}>
              <EditIcon />
            </IconButton>
            <IconButton aria-label="Delete" className={classes.IconButtons} onClick={deleteTodo}>
              <DeleteIcon />
            </IconButton>
          </CardActions>
        </Card>
      </Grid>
    );
  }

  export default TodoItem;