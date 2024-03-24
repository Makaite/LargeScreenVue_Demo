<template>
  <svg
      id="abnormal"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      width="456"
      height="127"
      viewBox="0 0 456 127"
    >
      <defs>
        <linearGradient
          id="abnormal-linear-gradient"
          x1="432"
          y1="61.625"
          x2="2"
          y2="61.625"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stop-color="#26cadd" />
          <stop offset="0.301" stop-color="#26a3ff" />
          <stop offset="0.624" stop-color="#26cadd" />
          <stop offset="0.994" stop-color="#26a3ff" />
          <stop offset="1" stop-color="#26a3ff" />
        </linearGradient>
        <linearGradient
          id="abnormal-linear-gradient-2"
          x1="432"
          y1="61.625"
          x2="2"
          y2="61.625"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stop-color="#2b6bdc" />
          <stop offset="0.031" stop-color="#2b6bdc" />
          <stop offset="0.597" stop-color="#2bdcd2" />
          <stop offset="1" stop-color="#2b6bdc" />
        </linearGradient>
        <filter
          id="abnormal-filter"
          filterUnits="userSpaceOnUse"
        >
          <feGaussianBlur result="blur" stdDeviation="6.667" in="SourceAlpha" />
          <feComposite result="composite" />
          <feComposite result="composite-2" />
          <feComposite result="composite-3" />
          <feFlood result="flood" flood-color="#f98800" flood-opacity="0.6" />
          <feComposite result="composite-4" operator="in" in2="composite-3" />
          <feBlend result="blend" in2="SourceGraphic" />
          <feBlend result="blend-2" in="SourceGraphic" />
        </filter>
        <filter
          id="abnormal-filter-2"
          x="67"
          y="-6"
          width="50"
          height="49"
          filterUnits="userSpaceOnUse"
        >
          <feGaussianBlur result="blur" stdDeviation="6.667" in="SourceAlpha" />
          <feComposite result="composite" />
          <feComposite result="composite-2" />
          <feComposite result="composite-3" />
          <feFlood result="flood" flood-color="#f98800" flood-opacity="0.6" />
          <feComposite result="composite-4" operator="in" in2="composite-3" />
          <feBlend result="blend" in2="SourceGraphic" />
          <feBlend result="blend-2" in="SourceGraphic" />
        </filter>
      </defs>
      <path
        id="curve_right"
        class="abnormal-cls-1"
        d="M2.006,86.083H31.461l3.006-9.664,4.208,13.288,4.208-10.268,3.006,6.644H73.541l4.208-10.872L83.76,103l7.871-82.748,10.163,71.876,3.607-6.644h11.421l3.607,13.892L124.637,72.8l5.41,20.536,3.006-7.852h46.888l4.208-15.7,6.011,28.388,5.41-19.932,4.208,7.248h37.815L241,76l4,14,5-11,3,6h27l4-11,6,29,10-69,8,57,3-6h13l3,14,4-27,6,20,2-7h46l6-16,5,29,7-20,4,7h25"
      />
      <path
        id="curve"
        class="abnormal-cls-2"
        d="M2.006,86.083H31.461l3.006-9.664,4.208,13.288,4.208-10.268,3.006,6.644H73.541l4.208-10.872L83.76,103l7.871-82.748,10.163,71.876,3.607-6.644h11.421l3.607,13.892L124.637,72.8l5.41,20.536,3.006-7.852h46.888l4.208-15.7,6.011,28.388,5.41-19.932,4.208,7.248h37.815L241,76l4,14,5-11,3,6h27l4-11,6,29,10-69,8,57,3-6h13l3,14,4-27,6,20,2-7h46l6-16,5,29,7-20,4,7h25"
      />
      <circle  class="abnormal-cls-3" cx="0" cy="0" r="5">
        <animateMotion
          dur="10s"
          repeatCount="indefinite"
          rotate="auto"
          begin="0s"
        >
          <mpath href="#curve"></mpath>
        </animateMotion>
      </circle>
  </svg>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.abnormal-cls-1,
.abnormal-cls-2 {
  fill: none;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: 4px;
  fill-rule: evenodd;
}

.abnormal-cls-1 {
  opacity: 0.8;
  stroke: url(#abnormal-linear-gradient);
}

.abnormal-cls-2 {
  stroke: url(#abnormal-linear-gradient-2);
}

.abnormal-cls-3,
.abnormal-cls-4 {
  fill: #f98800;
}

.abnormal-cls-3 {
  filter: url(#abnormal-filter);
}
.abnormal-cls-4 {
  filter: url(#abnormal-filter-2);
}
</style>