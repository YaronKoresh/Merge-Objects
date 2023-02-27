# Merge-Objects

The spread operator (...) OR the `Object.assign()` method, but with the ability to remove/keep duplicates.

# Example

```
var MergeObjects = require("./MergeObjects.js");

var temp1 = MergeObjects(false,{a:1},{a:1},{b:3});
// temp1 is { a:[1,1] , b:3 }

var temp2 = MergeObjects(true,{a:1},{a:1},{b:3});
// temp1 is { a:1 , b:3 }
```

Enjoy!
