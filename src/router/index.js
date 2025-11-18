import AdminHomeVue from "@/pages/admin/AdminHome.vue";
import CommunicationVue from "@/pages/admin/Communication.vue";
import CustomersVue from "@/pages/admin/Customers.vue";
import Dashboard_adminVue from "@/pages/admin/Dashboard_admin.vue";
import InquiriesVue from "@/pages/admin/Inquiries.vue";
import LoginAdminVue from "@/pages/admin/LoginAdmin.vue";
import ReservationsVue from "@/pages/admin/Reservations.vue";
import SettingsVue from "@/pages/admin/Settings.vue";
import Worker_adminVue from "@/pages/admin/Worker_admin.vue";
import CalendarVue from "@/pages/worker/Calendar.vue";
import DashboardVue from "@/pages/worker/Dashboard.vue";
import JobsVue from "@/pages/worker/Jobs.vue";
import LoginWorkerVue from "@/pages/worker/LoginWorker.vue";
import PaymentVue from "@/pages/worker/Payment.vue";
import HomeVue from "@/views/Home.vue";
import ReserVue from "@/views/Reser.vue";
import ReviewVue from "@/views/Review.vue";
import { createRouter, createWebHistory } from "vue-router";
const routes = [
  { path: "/", component: HomeVue, name: "HomeVue" },
  { path: "/reser", component: ReserVue, name: "ReserVue" },
  { path: "/review", component: ReviewVue, name: "ReviewVue" },
  // 관리자 페이지
  { path: "/admin", component: LoginAdminVue, name: "LoginAdminVue" },
  {
    path: "/admin",
    component: AdminHomeVue,
    redirect: "admin/dashboard",
    children: [
      { path: "dashboard", component: Dashboard_adminVue },
      { path: "reservations", component: ReservationsVue },
      { path: "workers", component: Worker_adminVue },
      { path: "customers", component: CustomersVue },
      { path: "inquiries", component: InquiriesVue },
      { path: "customer-communication", component: CommunicationVue },
      { path: "settings", component: SettingsVue },
    ],
  },
  // 기사 페이지
  { path: "/worker", component: LoginWorkerVue, name: "LoginWorkerVue" },
  {
    path: "/worker/dashboard",
    component: DashboardVue,
    redirect: "/worker/dashboard/jobs",
    children: [
      { path: "jobs", component: JobsVue, name: "MobileJobs" },
      { path: "calendar", component: CalendarVue, name: "MobileCalendar" },
      { path: "payment", component: PaymentVue, name: "MobilePayment" },
    ],
  },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
