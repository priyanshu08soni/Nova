import { clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs) {
  return twMerge(clsx(inputs))
}

export const BASE_URL = "https://nova-qr37.onrender.com";
export const API_PATHS = {
    AUTH:{
        REGISTER: `${BASE_URL}/auth/signup`,
        LOGIN: `${BASE_URL}/auth/login`,
    }
}