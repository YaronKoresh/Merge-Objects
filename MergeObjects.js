const MergeObjects = function( removeDuplicateValues , ...objs ){

	var res = {};

	var temp = objs.map(

		(r)=>{

			Object.keys(r).map(

				(key,index)=>{

					var newValue = Object.values(r)[index];

					if( typeof res[key] == "object" ){

						if( !(removeDuplicateValues && res[key].includes(newValue)) ){
							res[key].push( newValue );
						}

					} else if( typeof res[key] == "undefined" ){

						res[key] = newValue;

					} else {

						if( !(removeDuplicateValues && res[key]==(newValue)) ){
							res[key] = [
								res[key],
								newValue
							];
						}
					}
				}
			);
		}
	);
	return res;
};
exports = MergeObjects;
