<template>
  <scroller style="background-color: #3a3a3a">
    <div class="container1" style="background-image:linear-gradient(to right,#a80077,#66ff00);">
      <text class="direction">to right</text>
    </div>
    <div class="container1" style="background-image:linear-gradient(to left,#a80077,#66ff00);">
      <text class="direction">to left</text>
    </div>
    <div class="container1" style="background-image:linear-gradient(to bottom,#a80077,#66ff00);">
      <text class="direction">to bottom</text>
    </div>
    <div class="container1" style="background-image:linear-gradient(to top,#a80077,#66ff00);">
      <text class="direction">to top</text>
    </div>
    <div style="flex-direction: row;align-items: center;justify-content: center">
      <div class="container2" style="background-image:linear-gradient(to bottom right,#a80077,#66ff00);">
        <text class="direction">to bottom right</text>
      </div>
      <div class="container2" style="background-image:linear-gradient(to top left,#a80077,#66ff00);">
        <text class="direction">to top left</text>
      </div>
    </div>
  </scroller>
</template>
<style>
  .container1 {
    margin: 10px;
    width: 730px;
    height: 200px;
    align-items: center;
    justify-content: center;
    border: solid;
    border-radius: 10px;
  }

  .container2 {
    margin: 10px;
    width: 300px;
    height: 300px;
    align-items: center;
    justify-content: center;
    border: solid;
    border-radius: 10px;
  }

  .direction {
    font-size: 40px;
    color: white;
  }
</style>