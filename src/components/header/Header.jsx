"use client";

import Image from "next/image";
import { useRef } from "react";
import useBoundingSize from "@/app/hooks/useBoundingSize";

import LoginImage from "@/static/images/login.jpg";
import RegisterImage from "@/static/images/register.jpg";

const SlidesView = ({ images, content, canvasSize }) => {
  console.log(canvasSize);

  return (
    <div className="w-full h-full flex space-x-14">
      <div className="flex-col w-full">
        <Image src={LoginImage} className={`bg-pink-400 flex-grow`} style={{ width: canvasSize.width, height: canvasSize.height }} />
      </div>
      <div className="flex-col" style={{ width: canvasSize.width }}>
        <Image src={RegisterImage} className="bg-red-400 h-full w-full" style={{ width: canvasSize.width, height: canvasSize.height }} />
      </div>
      <div className="flex-col" style={{ width: canvasSize.width }}>
        <Image src={LoginImage} className="bg-yellow-400 h-full w-full" style={{ width: canvasSize.width, height: canvasSize.height }} />
      </div>
    </div>
  );
};

const QuotationForm = () => {
  return (
    <form className="">
      <h2 className="text-4xl text-center font-bold mb-12">Ask for Quotation</h2>
      <div className="mb-3">
        <label htmlFor="name" className="block text-sm font-medium text-gray-700">
          Full Name
        </label>
        <input
          id="name"
          type="text"
          name="name"
          placeholder="John Doe"
          className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-slate-900 shadow-sm"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
          Email
        </label>
        <input
          id="email"
          type="email"
          name="email"
          placeholder="someone@example.com"
          className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-slate-900 shadow-sm"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="address-from" className="block text-sm font-medium text-gray-700">
          Address From:
        </label>
        <input
          id="address-from"
          type="text"
          name="address-from"
          placeholder=""
          className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-slate-900 shadow-sm"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="address-to" className="block text-sm font-medium text-gray-700">
          Address To:
        </label>
        <input
          id="address-to"
          type="text"
          name="address-to"
          placeholder=""
          className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-slate-900 shadow-sm"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="weight" className="block text-sm font-medium text-gray-700">
          Estimated Weight {`(+/- 10% allowed)`}:
        </label>
        <input
          id="weight"
          type="text"
          name="weight"
          placeholder=""
          className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-slate-900 shadow-sm"
        />
      </div>
      <button
        type="submit"
        className="inline-block shrink-0 w-full rounded-md border border-cyan-600 bg-cyan-600 px-12 py-2 text-sm font-medium text-white transition hover:bg-transparent hover:text-cyan-600 focus:outline-none focus:ring active:text-cyan-500"
      >
        Get Quotation
      </button>
    </form>
  );
};

const index = () => {
  const boundingRef = useRef(null);
  const size = useBoundingSize(boundingRef);

  return (
    <section className="mt-4">
      <div className="container">
        <div className="grid grid-cols-12 space-x-4 ">
          <div className="col-span-8 rounded-md bg-slate-100 overflow-hidden" ref={boundingRef}>
            <SlidesView canvasSize={size} />
          </div>
          <div className="col-span-4 bg-slate-100 rounded-md p-8 overflow-hidden">
            <QuotationForm />
          </div>
        </div>
      </div>
    </section>
  );
};
export default index;
