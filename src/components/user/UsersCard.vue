<template>
  <div v-for="(user, index) in users" :key="index" :class="['p-1 col-lg-4']">
    <div :class="['card shadow']">
      <div class="p-2 card-header text-muted">
        <span class="me-1 ps-2">Ον/Eπ:</span>
        <span class="text-dark">{{ user?.fullName }}</span>
      </div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item pe-2 text-muted">
          E-mail:
          <span class="text-dark"
            >{{ user?.email }}<i class="fa-solid fa-envelope ms-1 text-primary"></i>
          </span>
        </li>
        <li class="list-group-item pe-2 text-muted">
          Ρόλος:
          <span class="text-dark"
            >{{ user?.role }}
            <i v-if="user?.role === Roles.DENTIST" class="fa-solid fa-stethoscope text-primary"></i>
            <i
              v-else-if="user?.role === Roles.UNCATEGORIZED"
              class="fa-solid fa-user text-primary"
            ></i
            ><i v-else class="fa-solid fa-crown text-primary"></i
          ></span>
        </li>
        <li class="list-group-item pe-2 text-muted">
          Σταθερό τηλέφωνο:
          <span class="text-dark" v-if="user?.telephone"
            >{{ user?.telephone }} <i class="fa-solid fa-phone text-primary"></i
          ></span>
          <span class="text-dark" v-else>--</span>
        </li>
        <li class="list-group-item pe-2 text-muted">
          Κινήτο τηλέφωνο:
          <span class="text-dark" v-if="user?.cellPhone"
            >{{ user?.cellPhone }} <i class="fa-solid fa-mobile-screen-button text-primary"></i
          ></span>
          <span class="text-dark" v-else>--</span>
        </li>
      </ul>
      <div
        class="d-flex align-items-center justify-content-center p-2 card-footer"
        v-if="userStore.user.role === Roles.ADMIN"
      >
        <router-link :to="`profile/${user?._id}`">Προφίλ</router-link>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { defineProps } from 'vue'
import { User } from '../../types/interfaces'
import { Roles } from '../../types/enums'
import { useUserStore } from '../../stores/userStore'

defineProps<{
  users: User[]
}>()

const userStore = useUserStore()
</script>
