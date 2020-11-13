<template>
  <div class="loading">
    <div class="loading_icon">
      <hr/><hr/><hr/><hr/>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  @keyframes spin{
    0%,100%{transform:translate(0)}
    25%{transform:translate(160%)}
    50%{transform:translate(160%, 160%)}
    75%{transform:translate(0, 160%)}
  }
  .loading{
    position: fixed;
    left: 0;
    top: 0;
    @include size(100vw, 100vh);
    background: rgba(255, 255, 255, 0.3);

    .loading_icon{
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 50px;
      height: 50px;

      hr{
        @include size(40%, 40%);
        position: absolute;
        left: 0;
        top: 0;
        margin: 0;
        border: 0;
        border-radius: 50%;
        animation: spin 2s ease infinite;

        &:nth-child(1){ animation-delay: -1.5s; }
        &:nth-child(2){ animation-delay: -1s; }
        &:nth-child(3){ animation-delay: -0.5s; }
        &:nth-child(2n){ background: $custom_green; }
        &:nth-child(2n+1){ background: $border_color; }
      }
    }

  }
</style>