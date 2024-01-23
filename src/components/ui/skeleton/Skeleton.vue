<script setup lang="ts">
import { cn } from '@/lib/utils';

interface SkeletonProps {
  class?: string
}

const props = defineProps<SkeletonProps>()
</script>

<template>
    <div :class="cn('animate-pulse rounded-md bg-secondary', props.class)" >
  <div class="logo text-sky-400">
      
      RY
    </div>
    </div>
</template>
<style scoped>
.logo{
    font-size: 64pt;
    font-family:"NM";
}
</style>