const fs = require("fs");

const createSub = (seq, startTime, endTime, text) => {
  const sub = `${seq}
00:${startTime},000 --> 00:${endTime},000
${text}

`;
  return sub;
};
const srtFilePath =
  "C:\\Users\\BrianAndrewPagal\\Videos\\PBI Preview PO from other Apps\\Script Demo Recordings\\";
const fileName = "HP_PC_PO_PreviewPOAPIABuyer3";
const subArr = [
  [
    "00:59",
    "01:06",
    "Creating Buyer 3 > No Checkboxes checked in Buyers tab.\nBUYER WITH NO RIGHTS TO OTHER PO",
  ],
  ["01:21", "01:26", "Logging in Buyer 3"],
  ["01:56", "02:02", "Creating AP Invoice Approvals"],
  ["02:06", "02:23", "Selecting PO"],
  ["02:37", "02:40", "Buyer 3 can only Print, Copy PO"],
  [
    "02:41",
    "02:46",
    "Find PO dropdown > Buyer 3 can't search all POs. Only POs created by Buyer 3",
  ],
  [
    "02:49",
    "02:50",
    "List View > Buyer 3 can't search all POs. Only POs created by Buyer 3",
  ],
  ["02:59", "03:05", "Deleting AP Invoice Approval"],
];

const finalSubs = subArr
  .map((elem, index) => {
    const seq = index + 1;
    return createSub(seq.toString(), ...elem);
  })
  .join("");

fs.writeFile(`${srtFilePath}${fileName}.srt`, finalSubs, (err) => {
  if (err) throw err;
  console.log(`${fileName}.srt saved`);
});
