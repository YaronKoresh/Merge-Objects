
# merge-objects v3.0.0 

## A small tools for the community, made by: Yaron Koresh, Israel.

### This project is licensed under MIT open-source license.

* merge-objects utility, is a deep merging function.

* An optional duplicates removal.

* The source objects are NOT being changed (Objects are not being passed "by reference").

# Example

```
// Require/Import this package

import "merge-objects" // or: require("merge-objects");

// Now you have a new global async function, called: "DeepMerge"

// First variable
let a = {
	a:{
		b: [1,2,3],
		c: {
			a:1,
			b:2
		}
	}
};

// Second variable
let b = {
	a:{
		b: [1,2,3],
		c: {
			a:2,
			b:2
		}
	}
};

// Third variable
let c = 4;

// Deep Merging while duplicates are included
const dup = await DeepMerge( "Dup", a, b, c );

// Deep Merging while duplicates are removed from arrays
// array with 1 element left, will not be returned as Array
const unq = await DeepMerge( "Unq", a, b, c );

console.log(dup);
// [
//	{
//		a:{
//			b: [1,2,3,1,2,3],
//			c: {
//				a: [1, 2],
//				b: [2, 2]
//			}
//		}
//	},
//	4
// ]

console.log(unq);
// [
//	{
//		a:{
//			b: [1,2,3],
//			c: {
//				a: [1, 2],
//				b: 2
//			}
//		}
//	},
//	4
// ]
```

---

The "DeepMerge" global async function, has a spesific syntax, of: `action` & `parameter(s)`;

We have 2 actions:

# Dup:

* All object are being deeply merged & duplicates values are includes.

# Unq:

* All object are being deeply merged & duplicates values are removed (duplicates will be returned only 1 time).

# Enjoy!
