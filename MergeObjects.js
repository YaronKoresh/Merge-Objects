const MergeObjects = function( objs , settings = {} ){
	if(typeof settings.placeholder == "undefined"){
		settings.placeholder = false;
	}
	if(typeof settings.merge == "undefined"){
		settings.merge = false;
	}
	let useOriginalIndexes = !!settings.placeholder;
	let removeDuplicateValues = !!settings.merge;
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
							res[key] = [];
							res[key][globalIndex] = newValue;
						} else {
							res[key] = [newValue];
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
				let arr = Array(globalIndex).fill(settings.placeholder);
				for( let i = 0 ; i < res[key].length ; i++ ){
					if(res[key][i]){
						arr[i] = res[key][i];
					}
				}
				res[key] = arr;
			}
		);
	}
	return res;
}
module.exports = MergeObjects;
