"use client";
import React, { useEffect, useState } from "react";
import { FaPlus } from "react-icons/fa6";

const AddToWishListBtn = () => {
  return (
    <button className="btn btn-info md:btn-sm btn-xs rounded-full flex gap-1 group my-1 md:mt-2">
      Add to WishList
      <FaPlus className="inline-block group-hover:scale-105 duration-200" />
    </button>
  );
};

export default AddToWishListBtn;
