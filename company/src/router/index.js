import { createRouter, createWebHistory } from 'vue-router';

// 컴포넌트 가져오기
import EmployeeList from '../components/EmployeeList.vue';

// 라우터 설정
const routes = [
  {
    path: '/',
    name: 'EmployeeList',
    component: EmployeeList
  },
];

// Vue Router 인스턴스 생성
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
});

export default router;