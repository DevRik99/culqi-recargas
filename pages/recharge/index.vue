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
      <ul class="my-5" v-if="!loading">
        <li v-for="provider of providers" :key="provider._id">
          <div class="flex items-center justify-between">
            <nuxt-link
              class="w-full"
              :to="'/recharge/' + provider.company + '?logo=' + provider.image"
            >
              <button class="items-center justify-start w-full text-black btn btn-ghost">
                <div class="avatar">
                  <div class="w-8 rounded">
                    <img
                      class="object-contain object-center"
                      :src="provider.image"
                      :alt="provider.company"
                    />
                  </div>
                </div>
                {{ provider.company }}
              </button>
            </nuxt-link>
            <button
              class="bg-transparent border-none shadow-none hover:bg-transparent btn"
            >
              <Icon name="ic:round-star-border" size="28" color="#d1d5db" />
            </button>
          </div>
          <hr />
        </li>
      </ul>
      <ul class="my-5" v-else>
        <li v-for="key of 10" :key="key" class="mt-2">
          <div class="flex items-center justify-between">
            <button
              class="items-center justify-start w-full text-black btn btn-ghost skeleton"
            ></button>
          </div>
          <hr />
        </li>
      </ul>
    </main>
  </div>
</template>

<script lang="ts" setup>
const { getProviders, loading, providers } = useProviders();
getProviders();

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
</script>
<style lang="postcss" scoped>
:deep(.avatar img) {
  @apply object-contain object-center;
}
</style>
