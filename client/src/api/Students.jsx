import axios from "axios";
import { apiURL } from "./apiUrl";
export const fetchAllStudents = () => apiURL.get("/students");
export const getStudent = (id) => apiURL.get(`/students/${id}`);
export const createStudent = (newStudent) =>
  apiURL.post("/students", newStudent);
export const updateStudent = (id, data) =>
  apiURL.patch(`/students/${id}`, data);
