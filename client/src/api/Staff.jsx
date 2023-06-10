import axios from "axios";
import { apiURL } from "./apiUrl";
export const fetchAllStaffs = () => apiURL.get("/staffs");
export const getStaff = (id) => apiURL.get(`/staffs/${id}`);
export const createStaff = (newStaff) =>
  apiURL.post("/staffs", newStaff);
export const updateStaff = (id, data) =>
  apiURL.patch(`/staffs/${id}`, data);
