import React from "react";

export default function Footer(){
    return (
    <footer className="p-4 bg-white sm:p-6 dark:bg-gray-900">
        <div className="md:flex md:justify-between">
        <div className="sm:flex sm:items-center sm:justify-between">
            <div className="flex mt-4 icomed space-x-6 sm:justify-center sm:mt-0">
                <a  className="text-gray-500 hover:text-gray-900 dark:hover:text-white"  href="https://" >
                <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24" width="52px" height="52px">    <path d="M12,2C6.477,2,2,6.477,2,12c0,5.013,3.693,9.153,8.505,9.876V14.65H8.031v-2.629h2.474v-1.749 c0-2.896,1.411-4.167,3.818-4.167c1.153,0,1.762,0.085,2.051,0.124v2.294h-1.642c-1.022,0-1.379,0.969-1.379,2.061v1.437h2.995 l-0.406,2.629h-2.588v7.247C18.235,21.236,22,17.062,22,12C22,6.477,17.523,2,12,2z"/></svg>
                </a>
                <a  className="text-gray-500 hover:text-gray-900 dark:hover:text-white" href="https://" >
                <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24" width="52px" height="52px">    <path d="M 8 3 C 5.239 3 3 5.239 3 8 L 3 16 C 3 18.761 5.239 21 8 21 L 16 21 C 18.761 21 21 18.761 21 16 L 21 8 C 21 5.239 18.761 3 16 3 L 8 3 z M 18 5 C 18.552 5 19 5.448 19 6 C 19 6.552 18.552 7 18 7 C 17.448 7 17 6.552 17 6 C 17 5.448 17.448 5 18 5 z M 12 7 C 14.761 7 17 9.239 17 12 C 17 14.761 14.761 17 12 17 C 9.239 17 7 14.761 7 12 C 7 9.239 9.239 7 12 7 z M 12 9 A 3 3 0 0 0 9 12 A 3 3 0 0 0 12 15 A 3 3 0 0 0 15 12 A 3 3 0 0 0 12 9 z"/></svg>                    <span className="sr-only">Instagram page</span>
                </a>
                <a className="text-gray-500 hover:text-gray-900 dark:hover:text-white"  href="https://">
                <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24" width="52px" height="52px"><path d="M10.053,7.988l5.631,8.024h-1.497L8.566,7.988H10.053z M21,6v12	c0,1.657-1.343,3-3,3H6c-1.657,0-3-1.343-3-3V6c0-1.657,1.343-3,3-3h12C19.657,3,21,4.343,21,6z M17.538,17l-4.186-5.99L16.774,7	h-1.311l-2.704,3.16L10.552,7H6.702l3.941,5.633L6.906,17h1.333l3.001-3.516L13.698,17H17.538z"/></svg>                    <span className="sr-only">Twitter page</span>
                </a>
                <a  className="text-gray-500 hover:text-gray-900 dark:hover:text-white"  href="https://">
                <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24" width="52px" height="52px">    <path d="M21.582,6.186c-0.23-0.86-0.908-1.538-1.768-1.768C18.254,4,12,4,12,4S5.746,4,4.186,4.418 c-0.86,0.23-1.538,0.908-1.768,1.768C2,7.746,2,12,2,12s0,4.254,0.418,5.814c0.23,0.86,0.908,1.538,1.768,1.768 C5.746,20,12,20,12,20s6.254,0,7.814-0.418c0.861-0.23,1.538-0.908,1.768-1.768C22,16.254,22,12,22,12S22,7.746,21.582,6.186z M10,15.464V8.536L16,12L10,15.464z"/></svg>                    <span className="sr-only">GitHub account</span>
                </a>
            </div>
        </div>
            <div className="mb-6 md:mb-0">
                <a className="flex items-center wtp"  href="https://">
                <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24" width="52px" height="52px">    <path d="M19.077,4.928C17.191,3.041,14.683,2.001,12.011,2c-5.506,0-9.987,4.479-9.989,9.985 c-0.001,1.76,0.459,3.478,1.333,4.992L2,22l5.233-1.237c1.459,0.796,3.101,1.215,4.773,1.216h0.004 c5.505,0,9.986-4.48,9.989-9.985C22.001,9.325,20.963,6.816,19.077,4.928z M16.898,15.554c-0.208,0.583-1.227,1.145-1.685,1.186 c-0.458,0.042-0.887,0.207-2.995-0.624c-2.537-1-4.139-3.601-4.263-3.767c-0.125-0.167-1.019-1.353-1.019-2.581 S7.581,7.936,7.81,7.687c0.229-0.25,0.499-0.312,0.666-0.312c0.166,0,0.333,0,0.478,0.006c0.178,0.007,0.375,0.016,0.562,0.431 c0.222,0.494,0.707,1.728,0.769,1.853s0.104,0.271,0.021,0.437s-0.125,0.27-0.249,0.416c-0.125,0.146-0.262,0.325-0.374,0.437 c-0.125,0.124-0.255,0.26-0.11,0.509c0.146,0.25,0.646,1.067,1.388,1.728c0.954,0.85,1.757,1.113,2.007,1.239 c0.25,0.125,0.395,0.104,0.541-0.063c0.146-0.166,0.624-0.728,0.79-0.978s0.333-0.208,0.562-0.125s1.456,0.687,1.705,0.812 c0.25,0.125,0.416,0.187,0.478,0.291C17.106,14.471,17.106,14.971,16.898,15.554z"/></svg>                   
                 <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">WhatsApp</span>
                </a>
            </div>
            <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
                <div>
                    <ul className="text-gray-600 dark:text-gray-400">
                        <li className="mb-4">
                            <a  className="hover:underline"  href="https://">المدونة</a>
                        </li>
                        <li className="mb-4">
                            <a  className="hover:underline"  href="https://">الحماية</a>
                        </li>
                        <li className="mb-4">
                            <a  className="hover:underline "  href="https://">الخصوصية</a>
                        </li>
                    </ul>
                </div>
                <div>
                    <ul className="text-gray-600 dark:text-gray-400">
                        <li className="mb-4">
                            <a  className="hover:underline "  href="https://">مهمتنا</a>
                        </li>
                        <li className="mb-4">
                            <a  className="hover:underline"  href="https://">الخصائص</a>
                        </li>
                        <li className="mb-4">
                            <a className="hover:underline"  href="https://">للأنشطة التجارية</a>
                        </li>
                    </ul>
                </div>
                <div>
                    <ul className="text-gray-600 dark:text-gray-400">
                        <li className="mb-4">
                            <a className="hover:underline"  href="https://">استشارات أمنية</a>
                        </li>
                        <li>
                            <a  className="hover:underline"  href="https://">تنزيل</a>
                        </li>
                        
                    </ul>
                </div>
                <div>
                    <ul className="text-gray-600 dark:text-gray-400">
                        <li className="mb-4">
                            <a className="hover:underline"  href="https://">الاتصال بنا</a>
                        </li>
                        <li>
                            <a  className="hover:underline"  href="https://">مركز المساعدة</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <div className="sm:flex sm:items-center sm:justify-between">
            <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">2024 ©‏ شركة الشروط وسياسة الخصوصية خريطة الموقع</span>
            
        </div>
    </footer>
    );
}