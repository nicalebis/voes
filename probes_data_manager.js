// data_manager.js

class DataManager {
    constructor() {
      this.probeData = [];
      this.keyPressData = [];
    }
  
    addProbeData(probeShownTime, videoTime) {
      this.probeData.push({
        probeShownTime,
        videoTime,
      });
    }
  
    addKeyPressData(keyPressTime, videoTime) {
      this.keyPressData.push({
        keyPressTime,
        videoTime,
      });
    }
  
    // You can add more methods to retrieve or analyze the data as needed
  }
  
  const dataManager = new DataManager();
  