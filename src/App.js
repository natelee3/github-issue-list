import './App.css';
import IssueList from './components/IssueList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src='/github.png' alt='github logo'></img>
        <input type="text" placeholder="Search or jump to..."></input>
        <ul>
          <li>Pull Requests</li>
          <li>Issues</li>
          <li>Marketplace</li>
          <li>Explore</li>
        </ul>
      </header>
      <IssueList />
    </div>
  );
}

export default App;
