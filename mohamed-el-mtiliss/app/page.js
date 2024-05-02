'use client'
import Head from "next/head"
import { BiSolidMoon } from "react-icons/bi";
import { AiFillTwitterCircle, AiFillLinkedin, AiFillYoutube  } from "react-icons/ai";
import Image from "next/image";
import mdes from "../public/photo-profile.png"
import proj1 from "../public/proj_1.png"
import proj2 from "../public/proj_2.png"
import proj3 from "../public/proj_3.png"
import proj4 from "../public/proj_4.png"
import { useState } from "react";



export default function Home() {
  const [darkMode, setDarkMode] = useState(false)
  return (
    <div className={darkMode ? 'dark': ""}>
      <main className="bg-white px-10 md:px-20 lg:px-40 dark:bg-gray-900">
        <section className="min-h-screen">
            <nav className="py-10 bn-12 flex justify-between">
              <h1 className="text-xl font-burtons dark:text-gray-100">Mohamed EL MTILISS</h1>
              <ul className="flex items-center">
                <li>
                  <BiSolidMoon onClick={() => setDarkMode(!darkMode)} className="cursor-pointer text-2xl mr-1" />
                </li>
                <li>
                  <a className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md" href='#'>Resume</a>
                </li>
              </ul>
            </nav>
            <div className="text-center p-10">
              <h2 className="text-5xl py-2 text-teal-600 font-medium md:text-6xl" >Mohamed EL MTILISS</h2>
              <h3 className="tex-2x py-2 md:text-3xl dark:text-white">Devlopper and IT</h3>
              <p className="text-md py-5 leading-8 text-gray-800 md:text-xl max-w-lg mx-auto dark:text-gray-100">
              I'm a passionate computer science graduate with a Bachelor's degree in Infrastructures, Treatment, and Analysis of Massive Data (BIG DATA). My journey in the tech world has been exciting, and I'm always eager to learn and create.
              </p>
            </div>
            <div className="text-5xl flex justify-center gap-16 py-3 text-gray-500 dark:text-gray-100">
              <AiFillTwitterCircle />
              <AiFillLinkedin />
              <AiFillYoutube />
            </div>
            <div className="relative mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 overflow-hidden md:h-96 md:w-96">
              <Image src={mdes} alt="alt" layout="fill" objectFit="contain" className=""/>
            </div>
        </section>

        <section>
          <div className="">
            <h3 className="text-3xl py-1 dark:text-white">Project</h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-white">
              Sience the beginning of my jorney as Devlopper, I've done a lot of project sach as 
            </p>
          </div>
          <div className="lg:flex gap-10">
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white">
              <Image className="rounded-lg object-cover" layout="responsive" width={"100%"} src={proj1} alt="alt"/>
              <h4 className="text-lg font-medium pt-8 pb-2">PC Builder</h4>
              <p className="py-2">
                Imagine creating your dream gaming PC effortlessly on a user-friendly website. Not only can you customize every component to fit your preferences,but the platform also calculates the power consumption and price in real-time.... Once you've fine-tuned your specifications, the website generates a detailed invoice, providing transparency on the cost and power requirements of your personalized gaming rig. This streamlined process ensures that enthusiasts can easily design their ideal gaming setup while having a clear understanding of the associated costs and power usage
              </p>
              <h5 className="py-4 text-teal-600">Tools and languages</h5>
              <p className="text-gray-800 py-1">PHP</p>
              <p className="text-gray-800 py-1">MySQL</p>
              <p className="text-gray-800 py-1">HTML</p>
              <p className="text-gray-800 py-1">CSS</p>
              <p className="text-gray-800 py-1">Javascript</p>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white">
              <Image className="rounded-lg object-cover" layout="responsive" width={"100%"} src={proj4} alt="alt"/>
              <h4 className="text-lg font-medium pt-8 pb-2">Tableau de bord d'image de OCP sur la zone Safi</h4>
              <p className="py-2">
                The primary aim was to delineate the image of the OCP group in Safi through the utilization of web data processed via machine learning tools.... The outcomes, effectively showcased on a dashboard, demonstrated success for both the year 2023 and preceding years. The envisioned enhancements encompass the incorporation of tabs and charts, the integration of supplementary websites, and the implementation of dynamic data extraction. These improvements are poised to broaden the project's scope, fostering a more comprehensive understanding of the company's image while refining analytical capabilities.
              </p>
              <h5 className="py-4 text-teal-600">Tools and languages</h5>
              <p className="text-gray-800 py-1">Python</p>
              <p className="text-gray-800 py-1">Keras</p>
              <p className="text-gray-800 py-1">TensorFlow</p>
              <p className="text-gray-800 py-1">Requests</p>
              <p className="text-gray-800 py-1">BeautifulSoup</p>
              <p className="text-gray-800 py-1">Dash</p>
              <p className="text-gray-800 py-1">Dash boostrap</p>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white">
              <Image className="rounded-lg object-cover" layout="responsive" width={"100%"} src={proj3} alt="alt"/>
              <h4 className="text-lg font-medium pt-8 pb-2">Hospital Managment System</h4>
              <p className="py-2">
              The website facilitates a streamlined process for the administration to add patients, seamlessly manage their appointments, and subsequently generate invoices for payment.... Administrators can efficiently input patient information, schedule appointments, and then utilize the platform to create invoices, providing a comprehensive and efficient solution for the management of patient data, appointments, and financial transactions within a single integrated system.
              </p>
              <h5 className="py-4 text-teal-600">Tools and languages</h5>
              <p className="text-gray-800 py-1">PHP</p>
              <p className="text-gray-800 py-1">MySQL</p>
              <p className="text-gray-800 py-1">HTML</p>
              <p className="text-gray-800 py-1">CSS</p>
              <p className="text-gray-800 py-1">Javascript</p>
              <p className="text-gray-800 py-1">JQuery</p>
              <p className="text-gray-800 py-1">Ajax</p>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white">
              <Image className="rounded-lg object-cover" layout="responsive" width={"100%"} src={proj2} alt="alt"/>
              <h4 className="text-lg font-medium pt-8 pb-2">E-Commerce Web-Site</h4>
              <p className="py-2">
              Introducing our user-friendly platform where sellers can effortlessly sign up and create announcements for their products....With a seamless interface, sellers can showcase their items, providing potential buyers with detailed information and appealing visuals. Users, in turn, can easily browse through the diverse range of products available, making informed decisions and completing purchases with confidence. Our platform aims to connect sellers and buyers in a convenient and efficient manner, fostering a dynamic marketplace for everyone.
              </p>
              <h5 className="py-4 text-teal-600">Tools and languages</h5>
              <p className="text-gray-800 py-1">PHP</p>
              <p className="text-gray-800 py-1">MySQL</p>
              <p className="text-gray-800 py-1">HTML</p>
              <p className="text-gray-800 py-1">CSS</p>
              <p className="text-gray-800 py-1">Javascript</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
