function UserProfile({ user }) {
  return (
    <div>
      <h3>{user.name}</h3>
      <p>Age: {user.age}</p>
    </div>
  );
}

export default UserProfile;
