<template>
  <nav>
    <ul>
      <li><router-link to="/">Home</router-link></li>
      <li><router-link to="/about">About</router-link></li>
    </ul>
  </nav>
</template>

<style scoped>
ul {
  display: flex;
  justify-content: center;
}
li {
  margin: 20px;
  list-style: none;
}
a {
  text-decoration: none;
  color: #555;
  letter-spacing: 1.2px;
}
</style>
