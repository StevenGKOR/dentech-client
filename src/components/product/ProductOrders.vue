<template>
  <div class="col-lg-12 mt-2">
    <span class="badge bg-primary fs-6 fw-normal p-2 w-100 mb-2"
      >Παραγγελίες <i class="fa-solid fa-truck-fast ms-1"></i
    ></span>
    <div class="card shadow w-100 mb-2" v-for="(order, index) in orders" :key="index">
      <div class="card-body d-flex flex-wrap justify-content-between p-1">
        <p class="m-1 text-muted">
          Ημ/νία παραλαβής:
          <span class="text-dark"
            >{{ formattedDate(order?.takenDate) }}
            <i class="fa-solid fa-calendar-days text-primary"></i
          ></span>
        </p>
        <p class="m-1 text-muted">
          Ημ/νία αποστολής:
          <span class="text-dark"
            >{{ formattedDate(order?.sendDate) }}
            <i class="fa-solid fa-calendar-days text-primary" v-if="order?.sendDate"></i
          ></span>
        </p>
        <p class="m-1 text-muted">
          Συνολικό κόστος:
          <span class="text-dark">{{ order?.totalCost.toFixed(2) }}€</span>
        </p>
        <p class="m-1 text-muted">
          Εξοφλημένο:
          <span class="text-dark">{{ order?.paid ? order?.paid.toFixed(2) : 0 }}€</span>
        </p>
        <p class="m-1 text-muted">
          Μη εξοφλημένο:
          <span class="text-dark">{{ order?.unPaid.toFixed(2) }}€</span>
        </p>
      </div>
      <div class="card-footer p-2 text-center">
        <router-link :to="`/order/${order?._id}`">Δείτε τη παραγγελία</router-link>
      </div>
    </div>
    <not-found-entity
      v-if="!orders.length"
      :message="'Δεν βρέθηκαν παραγγελίες για το προιόν'"
      :use-margin-top="true"
    />
  </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'
import { Order } from '../../types/interfaces'
import { formattedDate } from '../../utils/date'
import NotFoundEntity from '../NotFoundEntity.vue'

defineProps<{
  orders: Order[]
}>()
</script>
