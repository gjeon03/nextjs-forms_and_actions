"use client";

import FormButton from "@/components/button";
import FormInput from "@/components/input";
import { handleForm } from "./action";
import { useFormState } from "react-dom";
import { EnvelopeIcon, KeyIcon, UserIcon } from "@heroicons/react/16/solid";
import { FireIcon } from "@heroicons/react/24/solid";
import { CheckBadgeIcon } from "@heroicons/react/24/outline";

export default function Home() {
  const [state, action] = useFormState(handleForm, null);

  return (
    <div className="flex flex-col items-center justify-between min-h-screen p-6">
      <div className="w-full flex flex-col gap-10 py-8 px-6 max-w-96">
        <div className="flex items-center justify-center">
          <FireIcon className="w-16 h-16 text-red-400" />
        </div>
        <form action={action} className="flex flex-col gap-3">
          <FormInput
            name="email"
            type="email"
            placeholder="Email"
            required
            errors={state?.error?.fieldErrors.email ?? []}
            icon={<EnvelopeIcon className="w-4 h-4 text-gray-500" />}
          />
          <FormInput
            name="username"
            type="text"
            placeholder="Username"
            required
            errors={state?.error?.fieldErrors.username ?? []}
            icon={<UserIcon className="w-4 h-4 text-gray-500" />}
          />
          <FormInput
            name="password"
            type="password"
            placeholder="Password"
            required
            errors={state?.error?.fieldErrors.password ?? []}
            icon={<KeyIcon className="w-4 h-4 text-gray-500" />}
          />
          <FormButton text="Log in" />
          {state?.success && (
            <div className="h-11 bg-green-500 rounded-xl flex items-center pl-4 text-sm font-bold">
              <CheckBadgeIcon className="w-5 h-5 text-black" />
              Welcome back!
            </div>
          )}
        </form>
      </div>
    </div>
  );
}
