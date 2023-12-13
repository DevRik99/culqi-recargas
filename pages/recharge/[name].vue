<template>
  <div class="flex flex-col h-screen">
    <div class="rounded-t-none navbar bg-main rounded-btn">
      <nuxt-link to="/recharge">
        <Icon name="ic:baseline-arrow-back" color="white" />
      </nuxt-link>
      <a class="mx-auto text-white text-md btn btn-ghost">Validación de datos</a>
    </div>
    <form @submit.prevent="makeRecharge" class="container flex flex-col flex-1 mx-auto">
      <main class="w-full p-3 mx-auto">
        <div class="flex flex-col items-center justify-center gap-y-2">
          <div class="avatar">
            <div class="w-12 rounded">
              <img :src="logo" />
            </div>
          </div>
          <p class="text-xl font-bold text-black">{{ name }}</p>
          <p class="text-gray-500">Ingresa los datos de la recarga</p>
          <hr class="w-full" />
        </div>
        <div class="my-3">
          <label class="w-full form-control">
            <div class="label">
              <span class="font-bold label-text">Nro. de Celular</span>
            </div>
            <input
              type="number"
              v-model.number="phone"
              required
              minlength="9"
              placeholder=""
              class="w-full input hover:input-bordered bg-[#f4f5f6]"
            />
          </label>
          <label class="w-full mt-4 form-control"
            ><div class="label">
              <span class="font-bold label-text">Monto a recargar (S/)</span>
            </div></label
          >
          <div class="relative rounded-md shadow-sm">
            <div
              class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none"
            >
              <span class="font-bold label-text">S/</span>
            </div>
            <input
              type="number"
              placeholder=""
              v-model.number="amount"
              required
              min="3"
              max="100"
              class="w-full input hover:input-bordered bg-[#f4f5f6] pl-8"
            />
          </div>
          <p>
            El monto minimo de recarga es
            <span class="font-bold text-orange-500">S/3.00</span> y el máximo es de
            <span class="font-bold text-orange-500">S/100.00.</span>
          </p>
        </div>
      </main>
      <div class="flex items-end flex-1 p-3">
        <button class="w-full my-5 text-white btn bg-aqua hover:bg-aqua">
          Continuar
        </button>
      </div>
    </form>
    <dialog id="voucher" class="modal">
      <div class="border-[8px] border-dotted modal-box">
        <form method="dialog">
          <button
            class="absolute btn btn-sm btn-circle btn-ghost right-2 top-2 text-aqua w-max"
          >
            <span class="flex items-center justify-between">Cerrar ✕</span>
          </button>
        </form>

        <p class="py-4 text-xl font-bold text-center">
          Recarga <span class="text-aqua"> exitosa</span>
        </p>
      </div>
    </dialog>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();
const logo = route.query.logo || "";
const name = route.params.name;

const phone = ref<number>();
const amount = ref<number>();

const makeRecharge = () => {
  document.getElementById("voucher")?.showModal();
};
</script>
<style lang="postcss" scoped>
:deep(.avatar img) {
  @apply object-contain object-center;
}
</style>
