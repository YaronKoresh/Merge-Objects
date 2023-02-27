# Merge-Objects

Merge JS objects into a single one.

# Example

```
var MergeObjects = require("./MergeObjects.js");

var temp1 = MergeObjects(false,{a:1},{a:1},{b:3});
// temp1 is { a:[1,1] , b:3 }

var temp2 = MergeObjects(true,{a:1},{a:1},{b:3});
// temp1 is { a:1 , b:3 }
```

Enjoy!
