import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h1>Home Page</h1>
      <p>Welcome to our website! Explore our dynamic pages.</p>
      
      {/* Links to Dynamic Posts */}
      <ul>
        <li><Link to="/post/1">Post 1</Link></li>
        <li><Link to="/post/2">Post 2</Link></li>
        <li><Link to="/post/3">Post 3</Link></li>
      </ul>
    </div>
  );
};

export default Home;
