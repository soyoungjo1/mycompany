<template>
    <div>
      <h2>게시글 목록</h2>
      <ul>
        <li v-for="(list, index) in employeesList">
          <h3>사원번호 : {{ list.empno }}</h3>
          <h3>사원명 : {{ list.ename }}</h3>
          <h3>생년월일 : {{ dayjs(list.hiredate).format('YYYY-MM-DD') }}</h3>
        </li>
      </ul>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue';
  import { getData, postData } from '../common'; 
  import dayjs from 'dayjs';
  
  const employeesList = ref([]);
  
  onMounted(() => {
    getEmployeesList();
  });


  const getEmployeesList = async () => {
    const data = await getData('/employees');
    
    if (data.resultCode === '200') {
      employeesList.value = data.resultData;
    }
  }

  </script>
  
  <style scoped>
  
  </style>