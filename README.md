# JavaScript isInside() utility method

Sometimes you'll add a click or touch event listener to the `<body>`, but if a certain element is clicked on inside of the `<body>`, you might not want the event attached to the `<body>` to fire.

A good example is when you click a link and get a dropmenu to appear - you want to allow the user to click anywhere else on the page to remove the dropmenu. But if they click the dropmenu itself, you don't necessarily want it to close.

With `isInside()` - it can determine whether the click/touch event has occured inside of that DOM element you're concerned about, and you can decide what to do with the event outcome from there.

## The example explained

- We add a click event listener onto the `<body>` element
- When that click event fires; the `onBodyClick` handler runs the `isInside` method

Note; We don't want anything to happen if the click event occured inside this DOM element: `<div class="box" id="js-box" data-id="box">`

Here's what we pass to isInside:
`isInside( 'class', 'box', event )`

- Firstly, we pass the **attribute name** of the DOM element to check for. The uncommented choice is the `class` attribute (but I could have gone with the `id` or `data-id` attribute)
- Then we pass the expected **value** of that attribute - in this case `box`
- We finally pass it the `event` object
- The method does the check, and returns `true` or `false`
- If it's `false`, we output a simply message to the console

Please see the example files for more information.
