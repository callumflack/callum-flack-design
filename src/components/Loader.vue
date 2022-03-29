<template>
  <div class="Dots">
    <span></span>
    <span></span>
    <span></span>
  </div>
</template>

<style lang="postcss">
/* https://ui-snippets.dev/ */
.Dots span {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: black;
  animation: flashing 1.4s infinite linear;
  margin: 0 4px;
  display: inline-block;
}

.Dots span:nth-child(2) {
  animation-delay: 0.2s;
}

.Dots span:nth-child(3) {
  animation-delay: 0.4s;
}

@keyframes flashing {
  0% {
    opacity: 0.2;
  }
  20% {
    opacity: 1;
  }
  100% {
    opacity: 0.2;
  }
}
</style>
