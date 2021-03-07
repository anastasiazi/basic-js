const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  let newName = '';

  if ( members === undefined || members === null || members.length === 0) {
    return false;
  } else {
    for ( i = 0; i < members.length; i++ ) {
      if ( typeof(members[i]) === 'string') {
          newName += (members[i]).trim().toUpperCase().charAt(0);
      }
  }

  return (((Array.from(newName))).sort()).join('');
  }
};
