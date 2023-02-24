import React from 'react';

export const Success = ({ count }) => {
  return (
    <div className="success-block">
      <img src="/assets/success.svg" alt="Success" />
      <h3>Successfully!</h3>
      <p>All {count} users have been invited.</p>
      <button onClick={() => window.location.reload()} className="send-invite-btn">Return</button>
    </div>
  );
};
