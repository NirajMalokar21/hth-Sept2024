"use client";
import React, { useEffect, useState } from "react";
import { ReactFlow } from "@xyflow/react";
import "@xyflow/react/dist/style.css";

export default function App() {
    const [initialNodes, setInitialNodes] = useState([]);
    const [initialEdges, setInitialEdges] = useState([]);

    useEffect(() => {
        const fetchNodes = async () => {
            const response = await fetch("/nodes/");
            const data = await response.json();
            let increment = 0;
            let yPositionDifference = 200;
            const nodes = data
                .filter((node: { id: string; name: string; description: string }) => node.name.includes("COMP"))
                .map((node: { id: string; name: string; description: string }) => ({
                    id: node.id.toString(),
                    position: { x: (increment += 200), y: (yPositionDifference *= -1) },
                    data: { label: node.name },
                }));
            setInitialNodes(nodes);
        };

        const fetchEdges = async () => {
            const response = await fetch("/requirements"); // Fetching edges from the new API
            if (!response.ok) {
                console.error("Failed to fetch requirements:", response.statusText);
                return;
            }
            const requirements = await response.json();
            let thing = 1;
            const edges = requirements.map((requirement: { node_id: number; pre_req_node_id: number }) => ({
                id: thing++,
                source: requirement.pre_req_node_id.toString(),
                target: requirement.node_id.toString(),
            }));
            console.log("Refined Edges:", edges);
            setInitialEdges(edges);
        };

        fetchNodes();
        fetchEdges();
    }, []);

    return (
        <div style={{ width: "100vw", height: "100vh" }}>
            <ReactFlow nodes={initialNodes} edges={initialEdges} />
        </div>
    );
}
