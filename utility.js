// 1. Capitalize each word in a string
function capitalizeWords(input) {
  if (typeof input !== 'string') return '';
  return input
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(' ');
}

// 2. Filter only active users
function filterActiveUsers(users) {
  if (!Array.isArray(users)) return [];
  return users.filter(user => user.isActive);
}

// 3. Log a user action
function logAction(action, username) {
  const timestamp = new Date().toISOString();
  return `User ${username} performed ${action} at ${timestamp}`;
}

module.exports = { capitalizeWords, filterActiveUsers, logAction };