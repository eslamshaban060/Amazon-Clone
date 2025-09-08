import React from 'react';


const AuthFooter: React.FC = () => {
  return (
    <div className="footer flex flex-col items-center mx-auto p-5 border-t w-[90%] border-[var(--bg)]/70">
      <ul className="w-full flex justify-center flex-wrap gap-5">
        <li className="text-[15px] sm:text-[20px] text-[var(--blue-link)] hover:underline">
          <a href="">Conditions of Use</a>
        </li>
        {/* Privacy Notice link */}
        <li className="text-[15px] sm:text-[20px] text-[var(--blue-link)] hover:underline">
          <a href="">Privacy Notice</a>
        </li>
        {/* Help link */}
        <li className="text-[15px] sm:text-[20px] text-[var(--blue-link)] hover:underline">
          <a href="">Help</a>
        </li>
      </ul>
      {/* Copyright text */}
      <p className="copy text-[15px] sm:text-lg text-center">
        © 1996-2024, Amazon.com, Inc. or its affiliates
      </p>
    </div>
  );
};

export default AuthFooter;