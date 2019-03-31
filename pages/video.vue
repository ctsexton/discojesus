<template lang="pug">
  v-container.ma-0.pa-0(fluid fill-height width="100%")
    v-layout.pa-4(row wrap justify-center align-start xs12 id="videoPage" grow)
      v-responsive.mt-5(:aspect-ratio="16/9")
        iframe(
          src="https://www.youtube.com/embed/1rez22_YmaM"
          frameborder="0"
          allow="accelerometer; encrypted-media; gyroscope; picture-in-picture"
          height="100%"
          width="100%"
          )
</template>
