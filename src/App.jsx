import React from 'react';
import Datagrid from './Datagrid.jsx';
import "./App.css"


const data = [
  { id: 1, name: 'John', order: 3, totelspent: '234.32 $US', photo: "https://imgs.search.brave.com/6W4IgS_e5kK-rFkUlANoFUYVwCZIjdoacWJ40j41ME4/rs:fit:860:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJjYXZlLmNv/bS93cC93cDI2MzYz/NjAuanBn", lastSeen: '2024-03-20', email: 'john@example.com', salary: '5000 $US', lastPurchase: ' mon dec 11 2024 9:9:2' },

  { id: 2, name: 'Jane', order: 5, totelspent: '23.4 $US', photo: 'https://imgs.search.brave.com/kDxCKc2WgzrfLxE3-yvskZf9SpY0MoK1Ftq28K50omA/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvOTE3/NDY0MDMyL3Bob3Rv/L25ldy15b3JrLW55/LW1vZGVsLW5pbmEt/YWdkYWwtcG9zZXMt/Zm9yLWEtcGhvdG8t/b3V0c2lkZS1vZi10/aGUtemltbWVybWFu/bi1mYXNoaW9uLXNo/b3ctaW4uanBnP3M9/NjEyeDYxMiZ3PTAm/az0yMCZjPWhRekk1/NjhvZFJMM29SZXNW/NzVUV0xYTWtjVjh1/c1pfUGhrRHIzc0Zv/b2M9', lastSeen: '2024-03-19', email: 'jane@example.com', salary: '6000 $US', lastPurchase: 'sun fab 02 2019 8:0:20' },
  
  
  { id: 3, name: 'Doe', order: 0, totelspent: '0.00 $US', photo: 'https://imgs.search.brave.com/e7XvO1MB_b5XiJfNdAZSUuW-Fx7yPqgr1wC7eyGibXQ/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvOTE3/NDYzOTEyL3Bob3Rv/L25ldy15b3JrLW55/LW9saXZpYS1wYWxl/cm1vLXBvc2VzLWZv/ci1hLXBob3RvLW91/dHNpZGUtb2YtdGhl/LXppbW1lcm1hbm4t/ZmFzaGlvbi1zaG93/LWluLWdhbGxlcnku/anBnP3M9NjEyeDYx/MiZ3PTAmaz0yMCZj/PTBzSDRZejdCOFZY/X0ZmTm1ZMGNJSlJV/eUxkWkkxRnE5d3Jo/Q01XdU1fdjg9', lastSeen: '2024-03-18',email: 'Doe@gmail.com', salary: '2000 $US', lastPurchase: 'sar mar 01 2021 8:3:34'  },


  { id: 4, name: 'Alice', order: 7, totelspent: '0.00 $US', photo: 'https://imgs.search.brave.com/Cef8stkcTY0p7QzQBAEBiMoDkHrkj9uWzERpYzGXF3c/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTY2/OTAxMTU1Mi9waG90/by9uZXcteW9yay1u/ZXcteW9yay1hLW1v/ZGVsLXdhbGtzLXRo/ZS1ydW53YXktYXQt/dGhlLXVwcy14LWlt/Zy1mYXNoaW9uLXNo/b3ctZHVyaW5nLW5l/dy15b3JrLmpwZz9z/PTYxMng2MTImdz0w/Jms9MjAmYz13SERf/c3U2UElrdEl2dFpH/bUswU2dBZ0FtRWJ3/MFZkVUk0X1Budnhi/eDBJPQ', email: 'Alice@gmail.com.com', salary: '300 $US', lastPurchase: '  thur jan 14 2024 3:50:50'  },


  { id: 5, name: 'Kishan', order: 2, totelspent: '283.93 $US', photo: 'https://imgs.search.brave.com/wejR0sKDfgFND_s6NlmUCNx5WHCR5SXZPLqf_ZFe1Ok/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9jZG4u/cGl4YWJheS5jb20v/cGhvdG8vMjAxOC8w/OC8xOC8xMS8wOC9s/b3JkLTM2MTQ1NzZf/NjQwLmpwZw', lastSeen: '2024-03-16'  , email: 'kishan@gmail.com', salary: '10000 $US', lastPurchase: ' tues mar 11 2023 2:2:02' },


  { id: 6, name: 'Ram', order: 5, totelspent: '0.00 $US', photo: 'https://imgs.search.brave.com/0MMtKXV-RrFduqmF9UGLaZPR7TQ2P-EXkmEFh6u0qug/rs:fit:860:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzA1LzI0LzI4LzM1/LzM2MF9GXzUyNDI4/MzU2NV9IY1VzNWVx/T0lVNmphckV2dnpD/NmZzUjhZc21LaWlF/eS5qcGc', lastSeen: '2024-01-22' , email: 'Ram@gmail.com', salary: '1000 $US', lastPurchase: 'mon july 2018 22:03:2' },


  { id: 7, name: 'NTR', order: 4, totelspent: '0.00 $US', photo: 'https://imgs.search.brave.com/Qy1MafCuA9K2y0YUBdpkJuYVUwDksJiPCiEeM-6df8I/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzL2E2L2E1/LzE4L2E2YTUxOGU5/Nzc2NGYxZTI0YjQw/NmI5NzdjZDNhMjRh/LmpwZw', email: 'NTR@gmail.com', salary: '6000 $US', lastPurchase: 'wed mar 01  2020 2:08:9'  },


  { id: 8, name: 'Radha', order: 3, totelspent: '4.029 $US', photo: 'https://imgs.search.brave.com/DR-U3p8X4g_lUVYhXIGHPL4y6PFKm_dY82n8Zgcf5p8/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzL2EyL2Fj/LzM3L2EyYWMzN2Y5/ZDg4ODY1NDJiMjZj/MjVmZDI1OTY1NmM0/LmpwZw', lastSeen: '2024-03-13',email: 'Radhe@gamil.com', salary: '7000 $US', lastPurchase: ' thur apr 01 2023 20:03:10'  },
];


const App = () => {
  return (
    <div>
      <h1>Employe Data</h1>
      <Datagrid data={data} />
    </div>
  );
};

export default App;
