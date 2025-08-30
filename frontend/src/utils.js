import { toast } from 'react-toastify';

import { clsx } from "clsx"
import { twMerge } from "tailwind-merge"
export const handleSuccess = (msg) => {
    toast.success(msg, {
        position: 'top-right'
    })
}

export const handleError = (msg) => {
    toast.error(msg, {
        position: 'top-right'
    })
}

export function cn(...inputs) {
  return twMerge(clsx(inputs))
}