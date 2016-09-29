function FaqsController(Faq, $location, $state) {

  var ctrl = this;
  ctrl.faqs = Faq.query();

  ctrl.deleteFaq = function(faq) {
    faq.$delete(function() {
      $state.reload();
    });
  };

};

angular
  .module('app')
  .controller('FaqsController', FaqsController);