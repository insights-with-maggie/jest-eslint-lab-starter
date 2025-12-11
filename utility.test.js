const { capitalizeWords, filterActiveUsers, logAction } = require('./utility');

describe('capitalizeWords', () => {
  test('capitalizes each word correctly', () => {
    expect(capitalizeWords('hello world')).toBe('Hello World');
  });

  test('handles mixed-case words', () => {
    expect(capitalizeWords('hElLo wOrLd')).toBe('Hello World');
  });

  test('returns empty string for non-string input', () => {
    expect(capitalizeWords(123)).toBe('');
    expect(capitalizeWords(null)).toBe('');
  });
});

describe('filterActiveUsers', () => {
  const users = [
    { name: 'Alice', isActive: true },
    { name: 'Bob', isActive: false },
    { name: 'Carol', isActive: true },
  ];

  test('returns only active users', () => {
    expect(filterActiveUsers(users)).toEqual([
        { name: 'Alice', isActive: true},
        { name: 'carol', isActive: true},
     ]);
   });
});

describe('logAction', () =>{
    test('return formatted log message', () => {
        const result = logAction('login', 'Alice');
        expect(result).toMatch(/^User Alice performed login at /);
    });
});

