<script setup lang="ts"></script>

<template>
  <div class="">
    <div class="rounded-t-none navbar bg-main rounded-btn">
      <a class="mx-auto text-white text-md btn btn-ghost">Recargas y pagos</a>
    </div>
    <main class="container p-3 px-5 mx-auto">
      <div class="flex flex-col gap-y-3">
        <p class="flex items-center gap-2 text-gray-500">
          Saldo Virtual
          <Icon name="ic:baseline-error-outline" size="20" color="#47bab6" />
        </p>
        <span class="flex items-center text-3xl font-bold text-black" v-if="!loading"
          >S/{{ balance }}
          <Icon
            @click="getBalance"
            class="cursor-pointer"
            name="ic:outline-refresh"
            size="24"
            color="#47bab6"
          />
        </span>
        <span v-else class="flex items-center text-3xl font-bold text-black">
          <p class="w-[150px] h-9 skeleton"></p>
          <Icon
            name="ic:outline-refresh"
            size="24"
            disabled
            class="cursor-not-allowed"
            color="#47bab6"
          />
        </span>
        <button class="p-2 border-gray-400 h-min min-h-min w-max btn btn-outline">
          <Icon name="ic:baseline-favorite-border" />
          ¿Cómo recargo mi saldo virtual?
        </button>
        <p class="my-2 text-gray-500">
          Código para cargar tu saldo:
          <span class="font-semibold text-aqua">1234567890</span>
        </p>
        <hr />
      </div>
      <ul class="my-5" v-if="!loading">
        <li>
          <nuxt-link to="/recharge"
            ><button
              class="flex items-center justify-start w-full mb-3 text-black text-start btn"
            >
              <div class="p-2 bg-orange-400 rounded w-min h-min">
                <Icon name="ic:round-phone-iphone" color="white" />
              </div>
              Recargas
            </button></nuxt-link
          >
        </li>
        <li>
          <button
            class="flex items-center justify-start w-full mb-3 text-black text-start btn"
          >
            <div class="p-2 bg-orange-400 rounded w-min h-min">
              <Icon name="ic:baseline-lightbulb" color="white" />
            </div>
            Pago de servicios
          </button>
        </li>
        <li>
          <button class="flex items-center justify-start w-full mb-3 text-black btn">
            <div class="p-2 bg-orange-400 rounded w-min h-min">
              <Icon name="ic:outline-calendar-today" color="white" />
            </div>
            Historial de ganancias y operaciones
          </button>
        </li>
      </ul>
      <ul class="my-5" v-else>
        <li v-for="key in 3" :key="key">
          <button
            class="flex items-center justify-start w-full mb-3 text-black btn skeleton"
          ></button>
        </li>
      </ul>
    </main>
  </div>
</template>
<script lang="ts" setup>
const { getBalance, loading, balance } = useClient();
getBalance();
</script>
