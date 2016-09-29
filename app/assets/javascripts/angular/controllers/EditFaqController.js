function EditFaqController(Faq, $location, $stateParams) {
  var ctrl = this;
  ctrl.faq = Faq.get({id: $stateParams.id});

  ctrl.editFaq = function() {
    ctrl.faq.$update(function() {
      $location.path('faqs');
    });
  };
};

angular
  .module('app')
  .controller('EditFaqController', EditFaqController);