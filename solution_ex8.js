const portIds = ["S01", "S02", "S03", "S04", "S05", "S06"];
const portStatuses = ["AVAILABLE", "CHARGING", "ERROR", "AVAILABLE", "CHARGING", "AVAILABLE"];
const portPowersKw = [250, 150, 60, 250, 60, 150];

const indexS01 = portIds.indexOf("S01");
if (indexS01 !== -1) {
  portStatuses[indexS01] = "CHARGING";
}

const indexS03 = portIds.indexOf("S03");
if (indexS03 !== -1) {
  portStatuses[indexS03] = "AVAILABLE";
}

let availableCount = 0;
let maxAvailablePower = -1;
let bestPortId = "";

for (let i = 0; i < portIds.length; i++) {
  if (portStatuses[i] === "AVAILABLE") {
    availableCount++;
    if (portPowersKw[i] > maxAvailablePower) {
      maxAvailablePower = portPowersKw[i];
      bestPortId = portIds[i];
    }
  }
}

console.log("==================================================");
console.log("    BÁO CÁO VẬN HÀNH TRẠM SẠC VINFAST (6 TRỤ)     ");
console.log("==================================================");
console.log("DANH SÁCH TRẠM SẠC HIỆN TẠI:");
for (let i = 0; i < portIds.length; i++) {
  console.log(`- Trụ ${portIds[i]}: Trạng thái = ${portStatuses[i].padEnd(9)} | Công suất = ${portPowersKw[i]} kW`);
}
console.log("--------------------------------------------------");
console.log(`Số trụ sẵn sàng (AVAILABLE): ${availableCount} trụ`);
if (availableCount > 0) {
  console.log(`Trụ sẵn sàng có công suất cao nhất: ${bestPortId} (${maxAvailablePower} kW)`);
} else {
  console.log("Hiện không có trụ nào sẵn sàng sạc.");
}
console.log("==================================================");