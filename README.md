# JavaScript isInside() utility method

Sometimes you'll add a click or touch event listener to the `<body>`, but if a certain element is clicked on inside of the `<body>`, you might not want the event attached to the `<body>` to fire.

A good example is when you click a link and get a dropmenu to appear - you want to allow the user to click anywhere else on the page to remove the dropmenu. But if they click the dropmenu itself, you don't necessarily want it to close.

With `isInside()` - it can determine whether the click/touch event has occured inside of that DOM element you're concerned about, and you can decide what to do with the event outcome from there.

## The example explained

1. We add a click event listener onto the `<body>` element
2. When that click event fires; the `onBodyClick` handler runs the `isInside` method

Note; We don't want anything to happen if the click event occured inside this DOM element; `<div class="box" id="js-box" data-id="box">`

3. So, we pass `isInside` the **attribute name** of the DOM element to check for. The uncommented choice is the `class` attribute (but I could have gone with the `id` or `data-id` attribute)
4. Then we pass `isInside` the expected **value** of that attribute - in this case `box`
5. We finally pass it the `event` object
6. The method does the check, and returns `true` or `false`
7. If it's `false`, we output a message to the console in this case

Please see the example files for more information.
