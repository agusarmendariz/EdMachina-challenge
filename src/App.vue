
<template>
 <ul>
    <li>
      <router-link to="/overview">Overview</router-link>
    </li>
    <li>
      <router-link to="/enrollment">Enrollment</router-link>
    </li>
    <li>
      <router-link to="/academic">Academic</router-link>
    </li>
  </ul>
  <router-view ></router-view>
  <router-view  name="a"></router-view>
  <router-view  name="b"></router-view>
</template>