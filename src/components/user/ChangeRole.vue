<template>
  <span class="badge bg-warning fs-6 fw-normal p-2 w-100 mb-2 mt-2"
    >Αλλαγή ρόλου <i class="fa-solid fa-arrow-rotate-right ms-1"></i
  ></span>
  <div class="d-flex flex-column mt-1 mb-2 border shadow p-3 bg-white rounded">
    <select class="form-select mb-1" @change="onChange">
      <option selected disabled>Επιλέξτε ρόλο</option>
      <option v-for="role in roles" :key="role" :value="role">
        {{ role }}
      </option>
    </select>
    <button type="button" class="btn btn-update" @click="emitUpdateRole" :disabled="loading">
      <button-content v-if="loading" />
      <span v-else>Αλλαγή ρόλου <i class="fa-solid fa-pencil"></i></span>
    </button>
  </div>
</template>

<script lang="ts" setup>
import { defineProps, ref } from 'vue'
import { Roles, ToastConclusion, ToastHeader } from '../../types/enums'
import { useToastStore } from '../../stores/toastStore'
import ButtonContent from './../ButtonContent.vue'
import { useDoctorStore } from '../../stores/doctorStore'

defineProps<{
  roles: Roles[]
  loading: boolean
}>()

const selectedRole = ref('')
const toast = useToastStore()
const doctors = useDoctorStore()

const emit = defineEmits(['update-role'])

const emitUpdateRole = () => {
  if (selectedRole.value) {
    if (selectedRole.value === Roles.DENTIST) {
      doctors.isFetched = false
    }
    emit('update-role', selectedRole.value)
  } else {
    toast.showToast('Επιλέξτε ρόλο!', ToastHeader.ATT, ToastConclusion.ATT)
  }
}

const onChange = (event: Event) => {
  const target = event.target as HTMLSelectElement
  selectedRole.value = target.value
}
</script>

<style scoped>
.btn {
  max-width: 240px;
}
</style>
