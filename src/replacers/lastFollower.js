const { getLastFollower } = require('../utils/githubApi');
const { drawFollowerImage } = require('../utils/drawFollowerImage');

module.exports = async function (data) {
  const follower = await getLastFollower(data.user);

  if (!follower) {
    console.warn('No followers found for the user.');
    return '';
  }

  console.log('Seguidor selecionado com detalhes:', follower);

  const imageName = 'lastFollower.png';

  await drawFollowerImage(follower, imageName);

  return `<a href="${follower.html_url}" alt="${follower.name}"><img style="height:150px;" src="./src/resources/images/${imageName}" alt="Last follower"/></a>`;
};