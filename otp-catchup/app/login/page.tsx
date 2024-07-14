import OtpLogin from "@/components/OtpLogin";
import React from "react";

function LoginPage() {
  return (
    <div className="flex flex-col items-center">
      <h1 className="font-bold text-center mb-5">
        How to add one-time password phone authentication.
      </h1>
      <OtpLogin />
    </div>
  );
}

export default LoginPage;
