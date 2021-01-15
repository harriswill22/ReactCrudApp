import logo from './logo.svg';
import './App.css';
import { Route, Switch, Link } from 'react-router-dom'
import { NoteList } from './NoteList'
import { CreateNote } from './CreateNote'
import { EditNote } from './EditNote'

function App() {
  return (
    <div>
    <nav className="navbar bg-light navbar-expand-lg navbar-light">
      <ul className="navbar-nav mr-auto">
        <li className="navbar-item">
          <Link to="/" className="nav-link">Notes List</Link>
        </li>
        <li className="navbar-item">
          <Link to="/create" className="nav-link">Create Note</Link>
        </li>
      </ul> 
    </nav>
  <Switch>
    <Route exact path="/" component={NoteList}/>
    <Route path="/edit/:id" component={EditNote}/>
    <Route path="/create" component={CreateNote}/>
  </Switch>
  </div>
  );
}

export default App;
