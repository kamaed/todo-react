import TodoItem from './TodoItem';
import { Grid, } from '@material-ui/core';
import useStyles from './styles';

 const TodoItems = ({items, setEditVisible, setEditedTodo, editMethod, deleteMethod, }) => {
    const classes = useStyles();
    return (
        <Grid container direction='column' className={classes.ContentCenter}>
              {items.map(todo => (<TodoItem key={todo.id}
                  todo={todo}
                  setEditVisible={setEditVisible}
                  setEditedTodo={setEditedTodo}
                  editMethod={editMethod}
                  deleteMethod={deleteMethod} 
                />
                )
              )}
        </Grid>
    );
};

export default TodoItems;