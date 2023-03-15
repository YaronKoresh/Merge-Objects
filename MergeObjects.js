const MergeObjects = function( removeDuplicateValues , useOriginalIndexes , ...objs ){
	let res = {};
	let globalIndex = 0;
	let temp = objs.map(
		(r)=>{
			let temp2 = Object.keys(r).map(
				(key,index)=>{
					let newValue = Object.values(r)[index];
					if( typeof res[key] == "object" && res[key].length ){
						if( !(removeDuplicateValues && res[key].includes(newValue)) ){
							if(useOriginalIndexes){
								res[key][globalIndex] = newValue
							} else {
								res[key].push( newValue );
							}
						}
					} else if( typeof res[key] == "undefined" ){
						if(useOriginalIndexes){
							res[key] = [newValue];
						} else {
							res[key] = newValue;
						}
					} else {
						if( !(removeDuplicateValues && res[key]==(newValue)) ){
							res[key] = [res[key]];
							if(useOriginalIndexes){
								res[key][globalIndex] = newValue;
							} else {
								res[key].push( newValue );
							}
						}
					}
				}
			);
			globalIndex++;
		}
	);
	if(useOriginalIndexes){
		let temp3 = Object.keys(res).map(
			function(key){
				let dif = globalIndex - res[key].length;
				for( let i = 0 ; i < dif.length ; i++ ){
					res[key].push(null);
				}
			}
		);
	}
	return res;
}
exports = MergeObjects;
