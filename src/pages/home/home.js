import './home.css';
import Header from '../../header/header';
import Posts from '../../posts/posts';
import Sidebar from '../../sidebar/sidebar';

export default function home() {
  return (
    <>
      <Header />
      <div className="home">
        <Posts />
        <Sidebar />
      </div>
    </>
  );
}
