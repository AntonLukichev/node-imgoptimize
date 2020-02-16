import fs from 'fs';
const { COPYFILE_EXCL } = fs.constants;

const cpSync = (src, dest, flag = COPYFILE_EXCL) => {
  try {
    fs.copyFileSync(src, dest, flag);
    return true
  } catch (e) {
    return false
  }
};

module.exports = {
  cpSync
};
