<template>
  <div class="col-12">
    <span class="badge bg-primary fs-6 fw-normal p-2 w-100 mb-2"
      >Πληροφορίες <i class="fa-solid fa-info ms-1"></i
    ></span>
    <div class="card border shadow">
      <div class="card-body text-secondary d-flex flex-wrap justify-content-between">
        <p class="mb-1 ms-1">
          Ονοματεπώνυμο:
          <span class="text-dark text-capitalize">{{ user?.fullName }}</span>
        </p>
        <p class="mb-1 ms-1">
          E-mail:
          <span class="text-dark"
            >{{ user?.email }}<i class="text-primary fa-solid fa-envelope ms-1"></i
          ></span>
        </p>
        <p class="mb-1 ms-1">
          Ρόλος:
          <span class="text-dark">
            {{ user?.role }}
            <i v-if="user?.role === Roles.DENTIST" class="fa-solid fa-stethoscope text-primary"></i>
            <i
              v-else-if="user?.role === Roles.UNCATEGORIZED"
              class="fa-solid fa-user text-primary"
            ></i
            ><i v-else class="fa-solid fa-crown text-primary"></i>
          </span>
        </p>
        <p class="mb-1 ms-1">
          Κινητό τηλέφωνο:
          <span class="text-dark me-3" v-if="user?.cellPhone">
            {{ user.cellPhone }}
            <i class="fa-solid fa-mobile-screen-button text-primary"></i>
          </span>
          <span v-else> -- </span>
        </p>
        <p class="mb-1 ms-1">
          Σταθερό τηλέφωνο:
          <span class="text-dark" v-if="user?.telephone">
            {{ user?.telephone }}
            <i class="fa-solid fa-phone text-primary"></i>
          </span>
          <span v-else class="text-primary"> -- </span>
        </p>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { defineProps } from 'vue'
import { CurrentUser, User } from '../../types/interfaces'
import { Roles } from '../../types/enums'

defineProps<{
  user: User | CurrentUser
}>()
</script>
