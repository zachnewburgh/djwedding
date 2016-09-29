function Faq($resource) {
  var Faq = $resource('http://localhost:3000/api/v1/faqs/:id.json', {id: '@id'}, {
    update: {method: 'PUT'}
  });
  return Faq;
};

angular
  .module('app')
  .factory('Faq', Faq);