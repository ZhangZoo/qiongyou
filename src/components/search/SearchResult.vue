<template>
  <div class="search-result-list">
    <ul>
      <li>
        <a></a>
      </li>
      <li v-for="result in resultList" :key="result.key">
        <a :href="result.url" v-html="result.val">
          <!-- {{result.val}} -->
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
    props:["resultList"],

};
</script>

<style lang='stylus' scoped>
.search-result-list
    background: #fff;
    width: 100%;
    li
      font-size: .18rem;
      border-top: 1px solid #e6e8ea;
      a
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        display: block;
        color: #444;
     
    li:first-child 
        border-top: 0;

</style>
<style lang="stylus">
 .qui-list-li-place
  height: .4rem;
  padding: .1rem 0 .1rem .5rem;
  color: #9ea3ab;
  .photo
    float: left;
    margin-left: -50px;
    width: .4rem;
    height: .4rem;
  .title
    text-align: left;
    width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-size: .18rem;
    line-height: .2rem;
  .sub
    text-align: left;
    width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    margin-top: .06rem;
    font-size: .12rem;
    line-height: .14rem;
</style>
