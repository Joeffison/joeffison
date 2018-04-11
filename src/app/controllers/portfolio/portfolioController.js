function PortfolioController() {
  const vm = this;

  vm.portfolio = [
    {
      name: 'My Website',
      description: 'This website is not perfectly crafted on purpose because I wanted it to have no dependency on jQuery, Bootstrap, Materialize or other modern frameworks and tools I use to make sure I would have a lightweight website exploring my potential when I do not have access to this external components. AngularJs is used merely for routing and having this as a SPA with my web components.',
      thumbnail: 'portfolio-my-website',
      link: 'https://joeffison.github.io/joeffison/',
      readme: 'https://github.com/Joeffison/joeffison#my-homepage',
      repository: 'https://github.com/Joeffison/joeffison'
    },
    {
      name: 'Coding Challenges',
      description: 'Coding challenges that I solved (with Python) for different Online Judges. In this project, I include the descriptions, all my intermediate solutions and the test cases I wrote.',
      readme: 'https://github.com/Joeffison/coding_challenges#coding-challenges',
      repository: 'https://github.com/Joeffison/coding_challenges/tree/master/challenges'
    },
    {
      name: 'Machine Learning Builder',
      description: 'MLBuilder is a cloud-enabled, mobile-ready, AngularJS powered HTML5 platform helping beginners in Data Science to start learning and building their own ML solutions.',
      client: '',
      thumbnail: 'portfolio-machine-learning-builder',
      link: 'https://joeffison.github.io/MachineLearningBuilder/',
      readme: 'https://github.com/Joeffison/MachineLearningBuilder#machine-learning-builder',
      repository: 'https://github.com/Joeffison/MachineLearningBuilder/'
    },
    {
      name: 'Instagram Utility',
      description: 'This project is a collection of all the features you miss on Instagram.',
      client: '',
      thumbnail: 'portfolio-instagram-utility',
      link: 'https://joeffison.github.io/InstagramUtility/',
      readme: 'https://github.com/Joeffison/InstagramUtility#instagramutility',
      repository: 'https://github.com/Joeffison/InstagramUtility'
    }
  ];
}

angular.module('app')
  .controller('PortfolioController', [
    PortfolioController]);
