function ViewFaqController(Faq, $stateParams) {
  var ctrl = this;
  ctrl.faq = Faq.get({id: $stateParams.id});
}

angular
  .module('app')
  .controller('ViewFaqController', ViewFaqController);