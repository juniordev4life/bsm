import { c as create_ssr_component, v as validate_component } from "../../chunks/ssr.js";
import { w as writable } from "../../chunks/index.js";
import "../../chunks/client.js";
import "firebase/auth";
import "firebase/app";
import "firebase/database";
const session = writable();
const Sidebar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<nav class="bg-[#121e31] h-screen top-0 left-0 w-[250px] py-6 px-4 font-[sans-serif] overflow-auto" data-svelte-h="svelte-pqdue9"><div class="relative flex flex-col h-full"><ul class="space-y-3 my-10 flex-1"> <li><a href="/seats" class="text-white text-sm flex items-center hover:bg-gray-700 rounded px-4 py-3 transition-all"><svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="w-[18px] h-[18px] mr-4" viewBox="0 0 511.414 511.414"><path d="M497.695 108.838a16.002 16.002 0 0 0-9.92-14.8L261.787 1.2a16.003 16.003 0 0 0-12.16 0L23.639 94.038a16 16 0 0 0-9.92 14.8v293.738a16 16 0 0 0 9.92 14.8l225.988 92.838a15.947 15.947 0 0 0 12.14-.001c.193-.064-8.363 3.445 226.008-92.837a16 16 0 0 0 9.92-14.8zm-241.988 76.886-83.268-34.207L352.39 73.016l88.837 36.495zm-209.988-51.67 71.841 29.513v83.264c0 8.836 7.164 16 16 16s16-7.164 16-16v-70.118l90.147 37.033v257.797L45.719 391.851zM255.707 33.297l55.466 22.786-179.951 78.501-61.035-25.074zm16 180.449 193.988-79.692v257.797l-193.988 79.692z" data-original="#000000"></path></svg> <span>Inventar</span></a></li> <li><a href="/rents" class="text-white text-sm flex items-center hover:bg-gray-700 rounded px-4 py-3 transition-all"><svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="w-[18px] h-[18px] mr-4" viewBox="0 0 193.769 193.769"><path d="m149.203 41.104-9.348 12.009c20.15 15.679 30.201 41.063 26.234 66.253-2.906 18.484-12.838 34.73-27.964 45.748-15.131 11.012-33.64 15.488-52.124 12.567-38.157-6.008-64.32-41.938-58.322-80.098C30.585 79.097 40.52 62.85 55.648 51.835c13.208-9.615 28.991-14.233 45.086-13.317L87.579 52.319l9.759 9.313 20.766-21.801.005.008 9.303-9.769-9.752-9.303-.005.003L95.862 0l-9.31 9.769 14.2 13.525c-19.303-.913-38.21 4.702-54.059 16.242C28.28 52.943 16.19 72.717 12.65 95.221c-7.302 46.445 24.54 90.184 70.985 97.493a86.181 86.181 0 0 0 13.434 1.055c17.89 0 35.273-5.623 50.011-16.356 18.415-13.409 30.503-33.183 34.043-55.682 4.829-30.654-7.403-61.55-31.92-80.627z" data-original="#000000"></path><path d="M105.24 151.971v-.003h.001v-8.757c10.383-1.159 20.485-7.718 20.485-20.17 0-16.919-15.732-18.859-27.223-20.274-7.347-.878-12.97-1.897-12.97-6.348 0-6.188 8.722-6.855 12.473-6.855 5.567 0 11.507 2.617 13.525 5.957l.586.971 11.542-5.341-.571-1.164c-4.301-8.793-12.009-11.337-17.85-12.364v-7.71H91.723v7.677c-12.582 1.856-20.054 8.839-20.054 18.829 0 16.29 14.791 17.943 25.582 19.153 9.617 1.134 14.094 3.51 14.094 7.469 0 7.563-10.474 8.154-13.685 8.154-7.147 0-14.038-3.566-16.031-8.301l-.495-1.169-12.539 5.316.5 1.169c3.713 8.691 11.725 14.137 22.63 15.425v8.336h13.515z" data-original="#000000"></path></svg> <span>Miete</span></a></li> <li><a href="javascript:void(0)" class="text-white text-sm flex items-center hover:bg-gray-700 rounded px-4 py-3 transition-all"><svg fill="currentColor" class="w-[18px] h-[18px] mr-4" viewBox="0 0 512 512"><g id="Sign_Out"><path d="M180.455,360.91H24.061V24.061h156.394c6.641,0,12.03-5.39,12.03-12.03s-5.39-12.03-12.03-12.03H12.03
                    C5.39,0.001,0,5.39,0,12.031V372.94c0,6.641,5.39,12.03,12.03,12.03h168.424c6.641,0,12.03-5.39,12.03-12.03
                    C192.485,366.299,187.095,360.91,180.455,360.91z"></path><path d="M381.481,184.088l-83.009-84.2c-4.704-4.752-12.319-4.74-17.011,0c-4.704,4.74-4.704,12.439,0,17.179l62.558,63.46H96.279
                    c-6.641,0-12.03,5.438-12.03,12.151c0,6.713,5.39,12.151,12.03,12.151h247.74l-62.558,63.46c-4.704,4.752-4.704,12.439,0,17.179
                    c4.704,4.752,12.319,4.752,17.011,0l82.997-84.2C386.113,196.588,386.161,188.756,381.481,184.088z"></path></g></svg> <span>Logout</span></a></li></ul> <div class="flex flex-wrap items-center cursor-pointer border border-gray-500 rounded-full px-2 py-1"><img src="https://ui-avatars.com/api/?name=Marco+Slusalek" class="w-9 h-9 rounded-full border-2 border-white"> <div class="ml-4"><p class="text-sm text-white">Marco Slusalek</p></div></div></div></nav>`;
});
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  let loading = true;
  let loggedIn = false;
  session.subscribe((cur) => {
    loading = cur?.loading;
    loggedIn = cur?.loggedIn;
  });
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `${loading ? `<div data-svelte-h="svelte-194gxkm">Loading...</div>` : `<div class="flex">${loggedIn ? `${validate_component(Sidebar, "Sidebar").$$render($$result, {}, {}, {})}` : ``} <div class="container mx-auto">${slots.default ? slots.default({}) : ``}</div></div>`}`;
});
export {
  Layout as default
};
