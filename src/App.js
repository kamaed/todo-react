import React, { useState, useEffect, } from 'react';
import TodoList from './TodoList';
import TodoEdit from './TodoEdit';
import { Box, Typography, CssBaseline, AppBar, } from '@material-ui/core';
import useStyles from './styles';
import GoogleAuth from './GoogleAuth';

function App() {
  const classes = useStyles();
  const [loginError, setLoginError] = useState(null);
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
        if (json._embedded) {
          setTodos(json._embedded.todos)
          setCollectionLink(json._links.self.href)
        }
      });
  };

  const fetchDelete = (link) => {
    fetch(link, {method: 'DELETE'})
    .then(fetchData)
  }

  const fetchEdit = (todo) => {
    fetch(todo?._links?.self?.href || collectionLink, {
      method: todo?.id ? 'PATCH' : 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(todo)
    }).then(fetchData)
  }

  const login = (account) => {
    setAccount(account);
  }

  const setDone = (todo, done) => {
    fetchEdit({...todo, done: done})
  }

  useEffect(fetchData, []);

  if (!account) { 
    return (<>
      <GoogleAuth
        onSuccess={login}
        onFailure={setLoginError}
      />
      {loginError && <div>
        <Typography variant='h5' color='error'>Shit, something go wrong</Typography>
        <Typography variant='h5' color='error'>{loginError}</Typography>
      </div>}
    </>)
  }

  return (
    <>
      <CssBaseline />
      <AppBar position="relative" className={classes.AppBar}>
        <Typography variant='h4' className={classes.title}>Todo</Typography>
        {account && <Typography variant='h6' className={classes.accountName}>{account.profileObj.name}</Typography>}
      </AppBar>
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
                setDone={setDone}
              />
            </>
          ) : <Typography>Loading...</Typography>}
        </Box>
    </>
  );
}

export default App;
