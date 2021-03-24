import React, { useState, useEffect } from 'react'
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Login from './pages/Login'
import PrivateRoute from './components/PrivateRoute'
import Header from './components/Header'
import UserHome from './pages/UserHome'


function App() {

  const [items, setItems] = useState([])
  const [user, setUser] = useState([])
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [selectedItem, setSelectedItem] = useState([])

  useEffect(() => {
    if (localStorage.token){
        fetch('http://localhost:8000/profile/', {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${localStorage.token}`
            }
        })
        .then(response => response.json())
        .then(results => {
            setUser(results)
            setItems(results.items)
            setIsLoggedIn(true)
        })
    }
  },[isLoggedIn])

  const login = (user, history) => {
    fetch('http://localhost:8000/login/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(user)
    })
      .then(response => response.json())
      .then(({access}) => {
        localStorage.setItem('token', access)
      })
      .then(() => setIsLoggedIn(true))
      .then(() => history.push("/user"))
  }

  const register = (user, history) => {
    fetch('http://localhost:8000/users/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(user)
    })
      .then(response => response.json())
      .then(() => history.push("/"))
  }

  const logout = () => {
    localStorage.clear()
    setIsLoggedIn(false)
  }

  const addItem = (item) => {
    fetch('http://localhost:8000/items/', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${localStorage.token}`,
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(item)
    })
    .then(response => response.json())
    .then(item => setItems([...items, item]))
  }

  const deleteItem = (itemToDelete) => {
    let remainingItems = items.filter(item => item !== itemToDelete)

    setItems(remainingItems)

    fetch(`http://localhost:8000/items/${itemToDelete.id}`, {
      method: "DELETE",
      headers: {
        'Authorization': `Bearer ${localStorage.token}`
      }
    })
  }

  const showDetails = (selectedItem) => {
    let search = items.find(item => item === selectedItem)
    setSelectedItem(search)
  }
  
  return (
    <Router>
      <div className="app">
        <Header isLoggedIn={isLoggedIn} logout={logout} />
        <Switch> 
          <Route exact path='/' render={(props) => <Login {...props} login={login} register={register}/>} />
          <PrivateRoute path='/user'>
            <UserHome 
              user={user} 
              logout={logout} 
              addItem={addItem} 
              deleteItem={deleteItem}
              items={items} 
              setItems={setItems} 
              isLoggedIn={isLoggedIn} 
              selectedItem={selectedItem} 
              showDetails={showDetails} 
            />
          </PrivateRoute>
        </Switch>
      </div>
    </Router>
  );

}

export default App;
