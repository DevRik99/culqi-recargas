<script setup lang="ts"></script>

<template>
  <div class="">
    <div class="rounded-t-none navbar bg-main rounded-btn">
      <a class="mx-auto text-white text-md btn btn-ghost">Recargas y pagos</a>
    </div>
    <main class="container p-3 px-5 mx-auto">
      <div class="flex flex-col gap-y-3">
        <p class="text-gray-500">
          Saldo Virtual
          <Icon
            src="https://api.iconify.design/material-symbols:error-circle-rounded-outline-sharp.svg"
          />
        </p>
        <span class="text-3xl font-bold text-black">S/150.00</span>
        <button class="p-2 border-gray-400 h-min min-h-min w-max btn btn-outline">
          ¿Cómo recargo mi saldo virtual?
        </button>
        <p class="my-2 text-gray-500">
          Código para cargar tu saldo:
          <span class="font-semibold text-aqua">{123456}</span>
        </p>
        <hr />
      </div>
      <ul class="my-5">
        <li>
          <nuxt-link to="/recharge"
            ><button class="block w-full mb-3 text-black text-start btn">
              Recargas
            </button></nuxt-link
          >
        </li>
        <li>
          <button class="block w-full mb-3 text-black text-start btn">
            Pago de servicios
          </button>
        </li>
        <li>
          <button class="block w-full mb-3 text-black text-start btn">
            Historial de ganancias y operaciones
          </button>
        </li>
      </ul>
    </main>
  </div>
</template>
