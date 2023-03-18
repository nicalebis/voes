const dataManager = {
  trainingTrialsData: [],
  mainTrialsData: [],
  attentionCheckData: [],

  addMainTrialData: function (trialType, outcome, scene, reactionTimeDifference) {
    this.mainTrialsData.push({
      trialType: trialType,
      outcome: outcome,
      scene: scene,
      reactionTimeDifference: reactionTimeDifference,
    });
  },

  addAttentionCheckData: function (checkType, eventTime, reactionTime) {
    this.attentionCheckData.push({
      checkType: checkType,
      eventTime: eventTime,
      reactionTime: reactionTime,
    });
  },
  
  addTrainingTrialData: function (trialType, outcome, scene, eventTime, reactionTimeDifference) {
  this.trainingTrialsData.push({
    trialType: trialType,
    outcome: outcome,
    scene: scene,
    eventTime: eventTime,
    reactionTimeDifference: reactionTimeDifference,
  });
},

  getMainTrialsData: function () {
    return this.mainTrialsData;
  },

  getAttentionCheckData: function () {
    return this.attentionCheckData;
  },
};
