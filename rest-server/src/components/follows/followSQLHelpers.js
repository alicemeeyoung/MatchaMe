export const fetchStarredMatchesHelper = () => {
  return `
  SELECT * FROM follow
  INNER JOIN MATCH ON follow.matchid = match.id
  INNER JOIN users ON follow.userid = users.id OR match.user1_id = users.id OR match.user2_id = users.id
  WHERE starred = '1' 
  `;
};

export const fetchUnstarredMatchesHelper = () => {
  return `
  SELECT * FROM follow
  INNER JOIN MATCH ON follow.matchid = match.id
  INNER JOIN users ON follow.userid = users.id OR match.user1_id = users.id OR match.user2_id = users.id
  WHERE starred = '0' 
  `;
};

export const starSingleMatchHelper = (body) => {
  return `
  SELECT * FROM follow
  INNER JOIN MATCH ON follow.matchid = match.id 
  INNER JOIN users ON match.user1_id = users.id OR MATCH.user2_id = users.id
  WHERE userid =${body.userid} 
  `;
};

export const unstarSingleMatchHelper = (body) => {
  return `
  SELECT * FROM follow
  INNER JOIN MATCH ON follow.matchid = match.id 
  INNER JOIN users ON match.user1_id = users.id OR MATCH.user2_id = users.id
  WHERE userid =${body.userid}
  `;
};