const batteryLevel = document.querySelector(".batteryLevel");
const batteryCharging = document.querySelector(".batteryCharging");
const batteryChargingTime = document.querySelector(".batteryChargingTime");
const batteryDisChargingTime = document.querySelector(
  ".batteryDisChargingTime"
);


const battery=()=>{

  if("getBattery" in navigator){
    navigator.getBattery().then(battery=>{
      function updateAllBatteryDetails(){
        updateCharginginfo();
        updateLevelChange();
      updateDischargingTimeInfo();
      updateChargingTimeChangeInfo();
      }
      updateAllBatteryDetails();
      //battery charging change
      battery.addEventListener("chargingchange",()=>{
        updateCharginginfo();
      });
      function updateCharginginfo(){
        const isCharging=battery.charging ? "Yes" : "No";
        batteryCharging.innerHTML=isCharging;
      }
      //battery charging time
      battery.addEventListener("chargingtimechange",()=>{
        updateChargingTimeChangeInfo();
      });
      function updateChargingTimeChangeInfo(){
        console.log(battery.chargingTime);
        const charge=battery.chargingTime+" seconds";
         batteryChargingTime.innerHTML=charge;
       }
      //battery discharging time 
      battery.addEventListener("dischargingtimechange",()=>{
          updateDischargingTimeInfo();
      });
      function updateDischargingTimeInfo(){
        // console.log(battery.dischargingTime);
        const discharge=battery.dischargingTime + " seconds";
        batteryDisChargingTime.innerHTML=discharge;
      }
      //battery level change
      battery.addEventListener("levelchange",()=>{
        updateLevelChange();
      });
      function updateLevelChange(){
        const level=battery.level*100+"%";
        batteryLevel.innerHTML=level; 
      }
    });
  }
}
battery();