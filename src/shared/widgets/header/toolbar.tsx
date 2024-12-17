"use client";

import { Button } from "@nextui-org/react";
import Link from "next/link";
import React from "react";

const Toolbar = () => {
  return (
    <>
      <Button className="text-lg" color="primary">
        Start Trial
      </Button>
      <Link href={"/sign-up"}>Login</Link>
    </>
  );
};

export default Toolbar;
