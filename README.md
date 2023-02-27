# Merge-Objects

### Just like:

* the spread operator (...).

* The `Object.assign()` method.

===> But with the option to remove duplicates <===

# Example

```
var MergeObjects = require("./MergeObjects.js");

var temp1 = MergeObjects(false,{a:1},{a:1},{b:3});
// temp1 is { a:[1,1] , b:3 }

var temp2 = MergeObjects(true,{a:1},{a:1},{b:3});
// temp1 is { a:1 , b:3 }
```

Enjoy!
