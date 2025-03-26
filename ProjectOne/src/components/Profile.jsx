import { Navigate } from 'react-router-dom';

function Profile({ user }) {
  if (!user) {
    return <Navigate to="/Main" replace />;
  }
  return (
    <div style={{ padding: 20 }}>
      <p>Now you are able to purchase or add to cart.</p>
    </div>
  );
}

export default Profile;
