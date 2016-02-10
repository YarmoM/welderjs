# WelderJS

Transition between CSS states, no matter how they are positioned!

No dependencies, only 1.3Kb when minified! Uses CSS animations.

## Installation

### npm
``` bash
$ npm install welderjs
```

Bower
``` bash
$ bower install welderjs
```

## Example

``` js
// Include the library
<script src="js/welder.js" charset="utf-8"></script>

// Initialize the library with options
var globalOpts = {
  duration: 400
}
welder.init(globalOpts);

// Transition an element to a new state
var el = document.querySelector('#weldMe');
welder.transition(el, 'newState', options);
```

## Basics

This library can transition elements between CSS states by simply switching a data attribute. By default, welder uses `data-state`, but this is configurable. After initializing the library, simply call `weld.transition(...)` and give it the string of the new state to transition to this state.

## Configuration

Both upon initializing and requesting a transition, welder can be configured as follows. If an option is not given upon requesting a transition, either the default value or the value set upon initializing will be used.

``` js
var globalOpts = {
  delay: 50,                     // Delay in ms before transition occurs. Default (recommended): 50
  duration: 400,                // Duration of transition in ms. Default: 400
  easing: 'ease-out',           // CSS transition easing. Default: 'ease-out'
  dataAttribute: 'data-state'  // The attribute used to switch between states. Default: 'data-state'
}
welder.init(globalOpts);

/* ... */

var el = document.querySelector('#weldMe');

var opts = {
  delay: 50,                     // Delay in ms before transition occurs. Default (recommended): 50
  duration: 400,                // Duration of transition in ms. Default: 400
  easing: 'ease-out',           // CSS transition easing. Default: 'ease-out'
  dataAttribute: 'data-state'  // The attribute used to switch between states. Default: 'data-state'
}

welder.transition(el, 'newState', opts);
```

## Contributing

Feeling inspired? Please contribute! Currently in need of demos and testing.

[MIT License](http://yarmomackenbach.mit-license.org/) © Yarmo Mackenbach
