function NewFaqController(Faq, $location) {

  var ctrl = this;
  ctrl.faq = new Faq();

  ctrl.newFaq = function() {
    ctrl.faq.$save(function() {
      $location.path('faqs');
    });
  };
};

angular
  .module('app')
  .controller('NewFaqController', NewFaqController);