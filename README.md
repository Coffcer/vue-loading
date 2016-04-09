# vue-loading

> Vue directive for show loading block in any element.

[Live demo and usage](http://coffcer.github.io/vue-loading/)

Build by [vue-cli](https://github.com/vuejs/vue-cli) and [vue-cli-component](https://github.com/Coffcer/component)

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
