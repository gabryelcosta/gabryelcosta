// This data is passed to be used in the replacers. Like a ".env" file.
// I opted to not use .env so it is possible to create custom objects, arrays and logic here.
// You can modify, create or delete any property you want.
const { colors } = require('./theme');

module.exports = {
  user: 'gabryelcosta',
  startedProgramming: '02/03/2023',
  repoQuantity: 5,
  header: {
    styles: {
      align: 'center',
      style: 'for-the-badge',
      color: colors.lightSecondary.base,
      logoColor: colors.lightSecondary.over,
    },
    image: {
      src: 'src/resources/images/gabryel.png',
      width: 600,
    },
    description: "Olá sou o Gabryel Costa apenas um entusiasta da programação.",
    badges: [
      {
        type: 'badge',
        name: 'X',
        href: 'https://x.com/GabryelVercoza',
      },
      {
        type: 'badge',
        name: 'linkedin',
        href: 'https://www.linkedin.com/in/gabryel-costa-86620a2a8/',
      },
    ],
  },
  aboutme: {
    list: ['* Gabryel Costa, 30 years', '* Full Stack programmer', '* Currently studying React, Ruby and Javascript'],
  },
  skillswall: {
    styles: {
      style: 'for-the-badge',
      align: 'left',
      highlightColor: colors.primary,
      wallColors: [colors.secondary, colors.lightSecondary],
    },
    randomOrder: true,
    skills: [
      { name: 'JavaScript', isHighlighted: true },
      { name: 'HTML5', isHighlighted: true },
      { name: 'Markdown' },
      { name: 'CSS3', isHighlighted: true },
      { name: 'Python'},
      { name: 'React', isHighlighted: true },
      { name: 'Node.JS', isHighlighted: true },
      { name: 'Express.js', logo: 'express' },
      { name: 'Styled Components'},
      { name: 'SQLite'},
      { name: 'Photoshop', logo: 'adobe-photoshop'},
      { name: 'Figma'},
      { name: 'Git', isHighlighted: true },
      { name: 'GitHub', isHighlighted: true },
      { name: 'Visual Studio Code'},
      { name: 'Docker', isHighlighted: true },
      { name: 'MySQL', isHighlighted: true },
      { name: 'Ruby'},
      { name: 'API REST'},
    ],
  },
  recentworks: {
    styles: {
      title_color: colors.primary.base,
      text_color: colors.secondary.over,
      bg_color: colors.secondary.base,
      border_color: colors.black.base,
      icon_color: colors.secondary.over,
    },
  },
  socialMedias: {
    styles: {
      align: 'left',
      style: 'for-the-badge',
      color: colors.lightSecondary.base,
      logoColor: colors.lightSecondary.over,
    },
    links: [
      {
        name: 'X',
        href: 'https://x.com/GabryelVercoza',
      },
      {
        name: 'linkedin',
        href: 'https://www.linkedin.com/in/gabryel-costa-86620a2a8/',
      },
      {
        name: 'email',
        logo: 'gmail',
        href: 'mailto:gabryelrenatocosta@gmail.com',
      },
      {
        name: 'gblvc',
        logo: 'discord',
        labelColor: colors.secondary.base,
      },
    ],
  },
  githubStats: {
    styles: {
      style: 'for-the-badge',
      align: 'center',
      title_color: colors.primary.base,
      text_color: colors.secondary.over,
      bg_color: colors.secondary.base,
      border_color: colors.black.base,
      show_icons: true,
      icon_color: colors.secondary.over,
      rank_icon: 'github',
    },
  },
};
