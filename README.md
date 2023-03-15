# MergeObjects

### Just like:

* the spread operator (...).

* The `Object.assign()` method.

### But with two new abilities:

* Remove duplicates.

* Preserve the objects indexes (instead of just pushing into the array)

# Example

```
let MergeObjects = require("@yaronkoresh/merge-objects");
let arr = [{a:1},{b:3},{a:1},{b:4}];

let sett2 = {
  merge: true
}
let sett3 = {
  placeholder: "I fill empty",
  merge: true
}
let sett4 = {
  placeholder: "Nothing here!"
}

// Default value settings.placeholder is: false
// Default value settings.merge is: false

// Here, no ability was activated!
let temp1 = MergeObjects(arr);
// temp1 is { a:[1,1] , b:[3,4] }

// Here, we remove duplicates!
let temp2 = MergeObjects(arr,sett2);
// temp2 is { a:[1] , b:[3,4] }

// Here, we remove duplicates & preserve the original indexes!
let temp3 = MergeObjects(arr,sett3);
// temp3 is { a:[1,'I fill empty','I fill empty','I fill empty'] , b:['I fill empty',3,'I fill empty',4] }

// Here, we only preserve the original indexes, but keep any duplicates!
let temp4 = MergeObjects(arr,sett4);
// temp4 is { a:[1,'Nothing here!',1,'Nothing here!'] , b:['Nothing here!',3,'Nothing here!',4] }
```

Enjoy!
