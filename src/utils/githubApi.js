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

async function getLastFollower(username) {
  const response = await fetch(`https://api.github.com/users/${username}/followers`);
  const followers = await response.json();
  console.log(`Fetching followers for user: ${username}`);
  console.log(`Followers fetched: ${followers.length}`);

  if (followers.length === 0) {
    console.warn(`No followers found for user: ${username}`);
    return null;
  }

  const follower = followers[followers.length - 1];

  const followerDetailsResponse = await fetch(follower.url);
  const followerDetails = await followerDetailsResponse.json();
  console.log('Detalhes do seguidor:', followerDetails);

  return followerDetails;
}

async function getRepositories(user) {
  const repositories = await GithubRequest(`users/${user}/repos`);
  return repositories;
}

module.exports = { getLastFollower, getRepositories };