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

async function getRandomFollower(user) {
  console.log(`Fetching followers for user: ${user}`);
  const followers = await GithubRequest(`users/${user}/followers`);
  console.log(`Followers fetched: ${followers.length}`);

  if (followers.length === 0) {
    console.warn(`No followers found for user: ${user}`);
    return null;
  }

  const randomFollowerIndex = Math.floor(Math.random() * followers.length);

  const selectedFollowerName = followers[randomFollowerIndex].login;
  console.log(`Selected follower: ${selectedFollowerName}`);
  return selectedFollowerName;
}

async function getRepositories(user) {
  const repositories = await GithubRequest(`users/${user}/repos`);
  return repositories;
}

module.exports = { getRandomFollower, getRepositories };