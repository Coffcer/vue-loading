# vue-loading

> Vue directive for show loading block in any element.

[Live demo and usage](http://coffcer.github.io/vue-loading/)

<img width="600" src="http://coffcer.github.io/vue-loading/demo.png">

## Usage

```javascript
import loading from 'vue-loading';
export default {
    directives: { loading }
}
```
template: 
```html
<div v-loading="loading (Boolean)" :loading-options="{ options }"></div>
```
