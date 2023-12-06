let currentUserId = null;

const setCurrentUserId = (newUserId) => {
  currentUserId = newUserId;
};

const getCurrentUserId = () => {
  return currentUserId;
};

export { setCurrentUserId, getCurrentUserId };