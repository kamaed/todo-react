import React, { useState, useEffect } from 'react';
import TodoList from './TodoList';
import TodoEdit from './TodoEdit';
import { Box, Typography, CssBaseline, AppBar } from '@material-ui/core';
import useStyles from './styles'
import GoogleAuth from './GoogleAuth';

function App() {
  const classes = useStyles();
  const [isLogged, setLogged] = useState(false);
  const [account, setAccount] = useState(null);
  const [isLoaded, setLoaded] = useState(false);
  const [todos, setTodos] = useState([]);
  const [editVisible, setEditVisible] = useState(false);
  const [editedTodo, setEditedTodo] = useState(null);
  const [collectionLink, setCollectionLink] = useState(null);

  const fetchData = () => {
    fetch('http://localhost:8080/todos')
      .then(response => {
        setLoaded(response.status >= 200 && response.status < 300);
        return response.json();
      })
      .then(json => {
        if (isLoaded) {
          setTodos(json._embedded.todos)
          setCollectionLink(json._links.self.href)
        }
      });
  };

  const fetchDelete = (link) => {
    fetch(link, {method: 'DELETE'})
  }

  const fetchEdit = (obj, link) => {
    fetch(editedTodo ? link : collectionLink, {
      method: editedTodo ? 'PATCH' : 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(obj)
    })
  }

  useEffect(fetchData);

  return (
    <>
      <CssBaseline />
      <AppBar position="relative">
        <Typography variant='h4' className={classes.title}>Todo</Typography>
      </AppBar>
      {!isLogged ? 
        <GoogleAuth
          onSuccess={(response) => console.log(response)}
          onFailure={(response) => console.log(response)}
        /> :
        <Box className={classes.container}>
          {isLoaded ? (
            <>
              {editVisible && <TodoEdit
                  open={editVisible}
                  onClose={setEditVisible.bind(this, false)}
                  editedTodo={editedTodo}
                  editMethod={fetchEdit}
              />}
              <TodoList
                items={todos}
                setEditVisible={setEditVisible}
                setEditedTodo={setEditedTodo}
                deleteMethod={fetchDelete}
              />
            </>
          ) : <Typography>Loading...</Typography>}
        </Box>
      }
    </>
  );
}

export default App;
