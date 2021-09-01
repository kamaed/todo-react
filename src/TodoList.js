import { Container, Button, AppBar, Tabs, Tab, Box, } from '@material-ui/core';
import React from 'react';
import AddIcon from '@material-ui/icons/Add';
import useStyles from './styles';
import TodoItems from './TodoItems';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-auto-tabpanel-${index}`}
      aria-labelledby={`scrollable-auto-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          {children}
        </Box>
      )}
    </div>
  );
}

function a11yProps(index) {
  return {
    id: `scrollable-auto-tab-${index}`,
    'aria-controls': `scrollable-auto-tabpanel-${index}`,
  };
}

const emptyTodo = {
  content: "",
  date: new Date()
};

function TodoList({items, setEditVisible, setEditedTodo, editMethod, deleteMethod, }) {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  function TodoItemsWithFilter({filter}) {
    return (
      <TodoItems
        items={items.filter(filter)}
        setEditVisible={setEditVisible}
        setEditedTodo={setEditedTodo}
        editMethod={editMethod}
        deleteMethod={deleteMethod}
      />
    );
  }
    return (
      <Container maxWidth="md" className={classes.ContentCenter}>
        <Button
          onClick={() => {
            setEditedTodo(emptyTodo)
            setEditVisible(true)
          }}
          variant="outlined"
          color="primary"
          className={classes.Button}
        >
          <AddIcon/>
          Add
        </Button>
        <div className={classes.root}>
          <AppBar position="static" color="default">
            <Tabs
              value={value}
              onChange={handleChange}
              indicatorColor="primary"
              textColor="primary"
              variant="scrollable"
              scrollButtons="auto"
              aria-label="scrollable auto tabs example"
            >
              <Tab label="In progress" {...a11yProps(0)} />
              <Tab label="Done" {...a11yProps(1)} />
            </Tabs>
          </AppBar>
          <TabPanel value={value} index={0} className={classes.TabPanel}>
            <TodoItemsWithFilter filter={todo => !todo.done}/>
          </TabPanel>
          <TabPanel value={value} index={1} className={classes.TabPanel}>
            <TodoItemsWithFilter filter={todo => todo.done}/>
          </TabPanel>
        </div>
        
      </Container>
    );
}

export default TodoList;