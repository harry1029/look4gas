export function getUser(jsonData, email, pass) {
  const findUser = jsonData.find(user => (user.email === email && user.password === pass));

  if (!jsonData || jsonData.length === 0 || !findUser) {
    return null;
  };

  return findUser;
}