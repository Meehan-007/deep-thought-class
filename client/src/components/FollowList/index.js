import React from 'react';
import { Link } from 'react-router-dom';

const FollowList = ({ followCount, username, following }) => {
  if (!following || !following.length) {
    return <p className="bg-dark text-light p-3">{username}, following no one</p>;
  }

  return (
    <div>
      <h5>
        {username}  following {followCount} {followCount === 1 ? 'person' : 'people'}
      </h5>
      {following.map(follow => (
        <button className="btn w-100 display-block mb-2" key={follow._id}>
          <Link to={`/profile/${follow.username}`}>{follow.username}</Link>
        </button>
      ))}
    </div>
  );
};

export default FollowList;
