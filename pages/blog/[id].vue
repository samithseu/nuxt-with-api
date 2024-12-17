<script setup lang="js">
const route = useRoute();
definePageMeta({
  layout: "default",
});
useHead({
  title: `Blog ${route.params.id} - JROCH`
});
</script>

<template>
  <div>
    <h1 class="text-2xl text-green-500 font-bold mb-4">
      Blog {{ route.params.id }}
    </h1>
    <p lang="en">
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sunt sit
      voluptatibus alias. Sequi nostrum deleniti obcaecati dolorum doloribus
      libero provident quam accusamus repellendus. Animi sit ipsum, debitis id
      impedit pariatur excepturi alias distinctio quos sequi quam repellendus
      hic, porro minima quaerat eum similique! Id laboriosam, saepe voluptatem
      possimus cum totam explicabo eveniet quidem tempore beatae. Vel odio,
      beatae quia nemo culpa mollitia vitae maiores rerum numquam, molestiae
      fuga velit eius dicta reprehenderit, voluptatem possimus? Reiciendis sint
      officia minus! Libero nostrum ratione perferendis nesciunt, accusantium
      consectetur eaque temporibus, labore adipisci veritatis nihil ea sed quam
      animi pariatur perspiciatis rem molestias! Ad illo, cupiditate atque
      laboriosam voluptatem reprehenderit aperiam! Officiis ab, cupiditate iure
      similique ea accusantium ipsam libero nisi amet facere! Perspiciatis,
      commodi, quia cupiditate sapiente veniam totam veritatis facere ipsum,
      molestias quas reprehenderit laboriosam quibusdam vitae ea adipisci beatae
      soluta quo expedita ex tempore similique sunt cumque exercitationem culpa!
      Expedita, tenetur est distinctio minima neque optio nostrum quibusdam
      reiciendis rerum ratione sint voluptatum eos laudantium repellendus amet
      repellat similique perferendis nihil itaque totam assumenda recusandae?
      Animi nobis expedita voluptatem. Delectus vitae nisi voluptatibus
      doloremque incidunt, consequatur aperiam eum a facere ab quo porro libero
      numquam enim. Praesentium sapiente nihil dolores voluptas!
    </p>
  </div>
</template>
