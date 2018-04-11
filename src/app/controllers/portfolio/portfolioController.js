function PortfolioController() {
  const vm = this;

  vm.portfolio = [
    {
      name: 'Machine Learning Builder',
      description: 'MLBuilder is a cloud-enabled, mobile-ready, AngularJS powered HTML5 platform helping beginners in Data Science to start learning and building their own ML solutions.',
      client: '',
      thumbnail: 'portfolio-machine-learning-builder',
      link: 'https://joeffison.github.io/MachineLearningBuilder/',
      readme: 'https://github.com/Joeffison/MachineLearningBuilder#machine-learning-builder',
      repository: 'https://github.com/Joeffison/MachineLearningBuilder/'
    }
  ];
}

angular.module('app')
  .controller('PortfolioController', [
    PortfolioController]);
