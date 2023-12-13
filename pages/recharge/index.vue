<template>
  <div>
    <div class="rounded-t-none navbar bg-main rounded-btn">
      <nuxt-link to="/">
        <Icon name="ic:baseline-arrow-back" color="white" />
      </nuxt-link>
      <a class="mx-auto text-white text-md btn btn-ghost">Recargas</a>
    </div>
    <main class="container p-3 mx-auto">
      <div class="flex flex-col gap-y-2">
        <label for="query" class="font-bold">Buscar empresa</label>
        <input
          type="text"
          id="query"
          placeholder="ej. Culqi"
          class="w-full input hover:input-bordered bg-[#f4f5f6]"
        />
        <div class="flex my-2 gap-x-2">
          <span
            class="p-3 badge"
            :class="{
              'border-orange-500': option.active,
              'border-gray-300': !option.active,
            }"
            v-for="option in options"
            :key="option.name"
          >
            <Icon :name="option.icon"></Icon> {{ option.name }}</span
          >
        </div>
      </div>
      <ul class="my-5">
        <li v-for="companie of companies" :key="companie.name">
          <div class="flex items-center justify-between">
            <nuxt-link
              class="w-full"
              :to="'/recharge/' + companie.name + '?logo=' + companie.logo"
            >
              <button class="items-center justify-start w-full text-black btn btn-ghost">
                <div class="avatar">
                  <div class="w-8 rounded">
                    <img
                      class="object-contain object-center"
                      :src="companie.logo"
                      :alt="companie.name"
                    />
                  </div>
                </div>
                {{ companie.name }}
              </button>
            </nuxt-link>
            <button
              class="bg-transparent border-none shadow-none hover:bg-transparent btn"
              @click="toggleFavorite(companie.name)"
            >
              <Icon
                :name="companie.favorite ? 'ic:outline-star' : 'ic:round-star-border'"
                size="28"
                :color="companie.favorite ? 'yellow' : '#d1d5db'"
              />
            </button>
          </div>
          <hr />
        </li>
      </ul>
    </main>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
const options = [
  {
    name: "Todas",
    icon: "ic:baseline-favorite-border",
    active: true,
  },
  {
    name: "Favoritas",
    icon: "ic:round-star-border",
    active: false,
  },
  {
    name: "Telefonia",
    icon: "ic:round-phone-in-talk",
    active: false,
  },
];
const companies = ref([
  {
    name: "Bitel",
    logo: "https://planesbitel.com/wp-content/uploads/2022/12/bitel.png",
    favorite: false,
  },
  {
    name: "Claro",
    logo: "https://seeklogo.com/images/C/CLARO-logo-B5C0FF5F47-seeklogo.com.png",
    favorite: false,
  },
  {
    name: "Directv",
    logo:
      "https://c3.klipartz.com/pngpicture/301/38/sticker-png-tv-channel-icons-pack-directv-color-thumbnail.png",
    favorite: false,
  },
  {
    name: "Entel",
    logo: "https://i.pinimg.com/originals/82/08/1a/82081a17900bb85c7b09a33b1366ad81.png",
    favorite: false,
  },
  {
    name: "Netflix",
    logo: "https://i.pinimg.com/originals/e9/88/40/e9884007598e2e329d53bb448ede4084.png",
    favorite: false,
  },
]);
const toggleFavorite = (name: string) => {
  const companie = companies.value.find((companie) => companie.name === name);
  if (companie) {
    companie.favorite = !companie.favorite;
  }
};
</script>
<style lang="postcss" scoped>
:deep(.avatar img) {
  @apply object-contain object-center;
}
</style>
