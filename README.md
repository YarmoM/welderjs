# WelderJS

Transition between CSS states, no matter how they are positioned!

No dependencies, only 1.5Kb when minified! Uses CSS animations.

## Installation

### CDN

``` html
<script src="https://cdn.jsdelivr.net/welderjs/latest/welder.min.js"></script>
```

### npm
``` bash
$ npm install welderjs
```

### Bower
``` bash
$ bower install welderjs
```

## Example

HTML

``` html
<div id="weldMe" data-state="oldState"></div>
```

CSS

``` css
#weldMe[data-state="oldState"] {
  display: block;
  position: relative;
  width: 128px;
  height: 128px;
}
#weldMe[data-state="newState"] {
  display: block;
  position: fixed;
  width: 100%;
  height: 128px;
  top: 0px;
  left: 0px;
}
```

JavaScript

``` js
// Initialize the library
welder.init();

// Transition an element to a new state
var el = document.querySelector('#weldMe');
welder.transition(el, 'newState');
```

## Basics

This library can transition elements between CSS states by simply switching a data attribute. By default, welder uses `data-state`, but this is configurable. After initializing the library, simply call `weld.transition(...)` and give it the string of the new state to transition to this state.

## API

#### `welder.init(options)`

Initializes the welder plugin.  
**options**: must be an object with options (see below) [optional]

#### `welder.transition(element, newStateValue, [options])`

Transitions an element to a new state.  
**element**: the element that will be transitioned  
**newStateValue**: the value of the data attribute used to style the states of the element  
**options**: must be an object with options (see below) [optional]

## Configuration

Both upon initializing and requesting a transition, welder can be configured as follows. If an option is not given upon requesting a transition, either the default value or the value set upon initializing will be used.

``` js
var globalOpts = {
  delay: 50,                   // Delay in ms before transition occurs. Default (recommended): 50
  duration: 400,               // Duration of transition in ms. Default: 400
  easing: 'ease-out',          // CSS transition easing. Default: 'ease-out'
  dataAttribute: 'data-state'  // The attribute used to switch between states. Default: 'data-state'
}
welder.init(globalOpts);

/* ... */

var el = document.querySelector('#weldMe');

var opts = {
  delay: 50,                    // Delay in ms before transition occurs. Default (recommended): 50
  duration: 400,                // Duration of transition in ms. Default: 400
  easing: 'ease-out',           // CSS transition easing. Default: 'ease-out'
  dataAttribute: 'data-state',  // The attribute used to switch between states. Default: 'data-state'
  relativeTo: document.querySelector('...')   // The reference for the transition (see below). Default: null
}

welder.transition(el, 'newState', opts);
```

### Using a reference

When you set the `relativeTo` option to anything other than *null* (its default value), welder will use the corresponding DOM element (must be a parent!) instead of the viewport as the point of reference for the transition. This is particularly handy when scrolling might occur while the transition is playing.

The way it works is that the transition element will have `absolute` positioning instead of the default `fixed` positioning. Please keep in mind that for this to work, the reference needs to have `relative`, `absolute` or `fixed` positioning.

## Contributing

Feeling inspired? Please feel free to contribute! I will gladly accept the pull requests.  
Currently in need of demos and testing.

## Roadmap

- Testing
- Ability to transition between states using classes

[MIT License](http://yarmomackenbach.mit-license.org/) © Yarmo Mackenbach
