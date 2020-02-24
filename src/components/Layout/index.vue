<template>
  <div>
    <Nav />
    <slot />
  </div>
</template>


<script>
import Nav from "./components/Nav";
export default {
  components: {
    Nav
  }
};
</script>