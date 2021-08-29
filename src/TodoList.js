import { Container, Grid, Button } from '@material-ui/core';
import React from 'react';
import TodoItem from './TodoItem';
import AddIcon from '@material-ui/icons/Add';
import useStyles from './styles';

function TodoList({items, setEditVisible, setEditedTodo, deleteMethod}) {
  const classes = useStyles();
    return (
      <Container maxWidth="md">
        <Button
          onClick={() => {
            setEditedTodo(null)
            setEditVisible(true)
          }}
          variant="outlined"
          color="primary"
          className={classes.ButtonCenter}
        >
          <AddIcon/>
          Add
        </Button>
        <Grid container alignItems="center" justifyContent="center">
          <ul>{items.map(todo => (<TodoItem key={todo.id}
              todo={todo}
              setEditVisible={setEditVisible}
              setEditedTodo={setEditedTodo}
              deleteMethod={deleteMethod}/>))}</ul>
        </Grid>
      </Container>
    );
}

export default TodoList;