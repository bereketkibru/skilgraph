import "./styles.css";
import Graph from "./graph";
import React from "react";
import nodesData from "./d";
import { useState } from "react";
import Skills from "./skills";

export default function App() {
  const [selected, setSelected] = useState({ id: 21, name: "python" });
  console.log("node data ", nodesData[selected.name]);
  const nodeData = nodesData[selected.name];
  return (
    <main className="flex flex-col flex-1  ">
      <header className="bg-gray-50 p-4 ">
        <div className="flex flex-row justify-between ">
          <h1 className="flex items-center flex-wrap md:text-xl mb-3">
            <p className="font-mono font-semibold">
              {selected.name.toUpperCase()}
            </p>
          </h1>
          <div>
            {" "}
            <Skills selected={selected} setSelected={setSelected} />
          </div>
        </div>
      </header>
      <div
        className="container relative space-y-4 flex flex-col md:grid md:space-y-0 w-full
		md:grid-cols-12
		md:flex-1 md:grid-rows-full 
		md:gap-6	 p-4
	"
      >
        <div className="pt-8 border-gray-100 md:col-span-7 pb-24 relative ">
          <div className="pb-2 flex flex-row justify-between ">
            {" "}
            <p className="font-mono font-semibold ">Skill graph</p>
          </div>

          <Graph data={nodeData["neiGraph"]} />
        </div>
        <div className="pt-8 border-gray-100 md:col-span-5 pt-6 md:pb-24 md:pl-6 md:border-l order-first md:order-none">
          <div className="mb-5 flex justify-between ">
      
          </div>
       
        </div>
      </div>
    </main>
  );
}
