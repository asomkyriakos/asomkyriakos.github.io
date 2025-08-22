import { useState } from "react";

export default function Popup() {
    const [task, setTask] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        const trimmedTask = task.trim();

        if (trimmedTask !== "") {
            window.opener?.postMessage(
                { type: "new-task", task: trimmedTask },
                "*"
            );
            window.close();
        }
    };

    return (
        <div className="p-6 text-center">
            <h2 className="text-xl font-bold mb-2">This is the popup page!</h2>
            <p className="mb-4">Put any content here you want in the popup.</p>

            <form
                onSubmit={handleSubmit}
                className="flex gap-2 justify-center mb-4"
            >
                <input
                    type="text"
                    value={task}
                    onChange={(e) => setTask(e.target.value)}
                    placeholder="Add task"
                    required
                    className="border rounded-lg p-2 w-64"
                />
                <button
                    type="submit"
                    className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
                >
                    Submit
                </button>
            </form>

            <button
                onClick={() => window.close()}
                className="bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-600"
            >
                Close
            </button>
        </div>
    );
}
