/** @format */

import { FaGoogle } from "react-icons/fa";

function SignInButton() {
  return (
    <form >
      <button className="flex items-center gap-6 text-lg border border-primary-300 px-10 py-4 font-medium">
        <FaGoogle />
        <span>Continue with Google</span>
      </button>
    </form>
  );
}

export default SignInButton;
