import "./App.css";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Body from './components/Body'
import Details from './components/Details'
import CourseChapter from './components/CourseChapter'
import React from 'react';
import './index.css';
import {createBrowserRouter,Outlet} from 'react-router-dom'



export default function App() {
  return (
    <div class="container">
      <div class="navbar">
        <Navbar />
      </div>
      <div class="body-wrapper">
        <div class="sidebar">
          <Sidebar />
        </div>
        <div class="body">
          <Outlet/>
        </div>
      </div>
      <footer class="footer">
        <Footer />
      </footer>
    </div>
  );
}
export const appRouter = createBrowserRouter([
  {
    path:'/',
    element:<App/>,
    children:[
      {
        path:'/',
        element:<Body/>,
      },
      {
        path:'/details',
        element:<Details/>
      },
      {
        path:'/Chapter',
        element:<CourseChapter/>
      }
    ]
  }
])
