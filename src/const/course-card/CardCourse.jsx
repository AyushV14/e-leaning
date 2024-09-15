import React from "react";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
} from "@headlessui/react";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";
import InnerCard from "./innercard"

export default function CardCourse({user}) {
  return (
    <>
      <header className="bg-white shadow">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900">
            Welcome to Dashboard {user.given_name}
          </h1>
        </div>
      </header>
      <main  className="bg-gray-100 h-screen overflow-scroll flex justify-center">
        <div className=" max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          {
            <InnerCard user={user}/>
          }
        </div>
      </main>
    </>
  );
}
