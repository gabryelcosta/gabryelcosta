async function GithubRequest(url) {
  const headers = new Headers({
    'Content-Type': 'application/json',
    'user-agent': 'node.js',
  });
  if (process.env.GITHUB_TOKEN) {
    headers.append('Authorization', `Bearer ${process.env.GITHUB_TOKEN}`);
  }

  try {
    const response = await fetch(`https://api.github.com/${url}`, {
      headers,
    });

    if (!response.ok) {
      throw new Error(`GitHub API request failed: ${response.status} ${response.statusText}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching data from GitHub API:', error);
    throw error;
  }
}

async function getRandomFollower(username) {
  const userResponse = await fetch(`https://api.github.com/users/${username}`);
  const user = await userResponse.json();
  const totalFollowers = user.followers;
  console.log(`Total de seguidores para o usuário ${username}: ${totalFollowers}`);

  if (totalFollowers === 0) {
    console.warn(`No followers found for user: ${username}`);
    return null;
  }

  const perPage = 30;
  const totalPages = Math.ceil(totalFollowers / perPage);

  const randomPage = Math.floor(Math.random() * totalPages) + 1;

  const response = await fetch(`https://api.github.com/users/${username}/followers?per_page=${perPage}&page=${randomPage}`);
  const followers = await response.json();

  const randomIndex = Math.floor(Math.random() * followers.length);
  const follower = followers[randomIndex];

  const followerDetailsResponse = await fetch(follower.url);
  const followerDetails = await followerDetailsResponse.json();

  return followerDetails;
}

async function getRepositories(user) {
  const repositories = await GithubRequest(`users/${user}/repos`);
  return repositories;
}

module.exports = { getRandomFollower, getRepositories };