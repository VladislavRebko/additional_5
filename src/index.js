module.exports = function check(str, bracketsConfig) {

	strArray = str.split('');

	for ( let i = 0; i < bracketsConfig.length; i++ ) {
		for ( let j = 0; j < strArray.length; j++ ) {

			if ( bracketsConfig[i][0] == strArray[j] && strArray[j + 1] == bracketsConfig[i][1] ) {
				strArray.splice(j, 2);
				i=0;	
				j = -1;
			}
		}
	}

	if ( strArray.length != 0 ) {
		return false;
	}
	else {
	  return true;
	}
}
