function FaqsController(Faq, $location, $state) {

  var ctrl = this;
  ctrl.faqs = Faq.query();

};

angular
  .module('app')
  .controller('FaqsController', FaqsController);