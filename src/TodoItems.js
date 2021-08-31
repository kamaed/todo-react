import TodoItem from './TodoItem';
import { Grid, } from '@material-ui/core';
import useStyles from './styles';

 const TodoItems = ({items, setEditVisible, setEditedTodo, deleteMethod, setDone}) => {
    const classes = useStyles();
    return (
        <Grid container direction='column' className={classes.ContentCenter}>
              {items.map(todo => (<TodoItem key={todo.id}
                  todo={todo}
                  setEditVisible={setEditVisible}
                  setEditedTodo={setEditedTodo}
                  deleteMethod={deleteMethod}
                  setDone={setDone}  
                />
                )
              )}
        </Grid>
    );
};

export default TodoItems;