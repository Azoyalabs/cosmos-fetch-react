import React from "react";
import { CHAIN_NAME, PRETTY_NAME } from "@/constants";
import "./HelloWorld.css";

export const HelloWorld: React.FC<{ msg: string }> = ({ msg }) => {
  return (
    <>
      <div className="greetings">
        <h1 className="green">{msg}</h1>
        <h3>
          You’ve successfully created a project with
          {" "}
          <a href="https://vitejs.dev/" target="_blank" rel="noopener">
            Vite
          </a>{" "}
          +
          <a href="https://vuejs.org/" target="_blank" rel="noopener">
            React
          </a>{" "}
          on the{" "}
          <span id="chain-name">
            {PRETTY_NAME} {CHAIN_NAME}
          </span>{" "}
          network. What's next?
        </h3>
      </div>
    </>
  );
};
