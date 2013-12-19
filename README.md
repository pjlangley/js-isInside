# JavaScript isInside() utility method

Sometimes you'll add a click or touch event listener to the `<body>`, but if a certain element is clicked on inside of the `<body>`, you might not want the event attached to the `<body>` to fire.

A good example is when you click a link and get a dropmenu to appear - you want to allow the user to click anywhere else on the page to remove the dropmenu. But if they click the dropmenu itself, you don't necessarily want it to close.

With `isInside()` - it can determine whether the click/touch event has occured inside of that DOM element you're concerned about, and you can decide what to do with the event outcome from there.

Please see the example files on how to use it.
