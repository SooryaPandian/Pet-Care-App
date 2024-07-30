import React from 'react';

const UserProfile = () => {
  const profile = {
    name: 'John Doe',
    bio: 'Pet lover and enthusiast',
    pets: ['Dog', 'Cat'],
    posts: 120
  };

  return (
    <div className="user-profile">
      <h2>{profile.name}</h2>
      <p>{profile.bio}</p>
      <ul>
        <li>Pets: {profile.pets.join(', ')}</li>
        <li>Posts: {profile.posts}</li>
      </ul>
    </div>
  );
};

export default UserProfile;
