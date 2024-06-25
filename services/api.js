import axios from 'axios';

export const api  = axios.create({
    baseURL: 'https://vxfjstwydulnkpnvnkvw.supabase.co/rest/v1/',
    headers: {
        apikey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZ4ZmpzdHd5ZHVsbmtwbnZua3Z3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTkzNTE1MDIsImV4cCI6MjAzNDkyNzUwMn0.DBlOpFB5twU7C56YlP7ycJZhJmJ5XxI8MVSa7uAuj14",
        authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZ4ZmpzdHd5ZHVsbmtwbnZua3Z3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTkzNTE1MDIsImV4cCI6MjAzNDkyNzUwMn0.DBlOpFB5twU7C56YlP7ycJZhJmJ5XxI8MVSa7uAuj14"
    }
})
