import { Link } from 'react-router-dom';

const NotFoundPage = () => {
  return (
    <div>
      <p>
        The page you are searching for is not found! <br /> Sorry!{' '}
      </p>
      <div>
        <p>Please go back to</p>
        <Link to="/">HOME PAGE</Link>
      </div>
    </div>
  );
};

export default NotFoundPage;
