# vue-loading

> Vue directive for show loading block in any element.

[Live demo and usage](http://coffcer.github.io/vue-loading/)

Build by [vue-cli](https://github.com/vuejs/vue-cli) and [vue-cli-component](https://github.com/Coffcer/component)

## Usage

General usage
```vue
<script>
    import loading from 'vue-loading';
    export default {
        directives: { loading },
        data () {
            return { isLoading: false }
        }
    }
</script>

<template>
    <div v-loading="isLoading" :loading-options="{ options }"></div>
    <!--click the button will show the loading block.-->
    <button @click="isLoading = true"></button>
</template>
```

You can also use `vue-loading` with vue-router [$loadingRouteData](http://vuejs.github.io/vue-router/en/pipeline/data.html#details)
```vue
<script>
    export default {
        router: {
            data (transition) {
                // the vue-loading is show.

                window.setTimeout(() => {
                    // the vue-loading will closed after next().
                    transition.next();
                }, 3000);
            }
        }
    }
</script>

<template>
    <div v-loading="$loadingRouteData"></div>
</template>
```

## Options

**text:**  
* loading block text
* default value: "Loading ..."
 
**bg:** 
* loading block backgroundColor css, 
* default value: "rgba(230, 233, 236, 0.8)"
