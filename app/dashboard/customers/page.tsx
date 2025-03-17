import {useState} from "react";

export default function Page() {
    const now = new Date();
    const [count, setCount] = useState(0);
    const [showMessage, setShowMessage] = useState(false);

    // Function that will need testing
    const handleClick = () => {
        setCount(prevCount => prevCount + 1);

        // Conditional logic that should be tested
        if (count >= 5) {
            setShowMessage(true);
        }
    };

    // Another function that would need testing
    const resetCounter = () => {
        setCount(0);
        setShowMessage(false);
    };

    // Complex calculation function
    const calculateProgress = () => {
        if (count < 3) return "Just getting started";
        if (count < 7) return "Making progress";
        return "Almost there!";
    };

    return (
        <>
            <p>
                Customer Pnage
            </p>
            <div className={"bg-red-500"}>
                <button onClick={handleClick}>
                    Click me! ({count})
                </button>

                {count > 0 && (
                    <button onClick={resetCounter} className="ml-4 bg-blue-400 px-2 py-1 rounded">
                        Reset
                    </button>
                )}

                {showMessage && (
                    <div className="mt-3 p-2 bg-green-200 rounded">
                        You've clicked 5+ times!
                    </div>
                )}

                <div className="mt-2 text-white">
                    Status: {calculateProgress()}
                </div>
            </div>
            <main>
                <p>
                    The current date is {now.toLocaleDateString()}
                </p>

                <div className="mt-5">
                    {count % 2 === 0 ? (
                        <p>Count is even</p>
                    ) : (
                        <p>Count is odd</p>
                    )}
                </div>

                <section className="mt-3">
                    {[...Array(Math.min(count, 3))].map((_, i) => (
                        <div key={i} className="bg-gray-200 p-1 m-1">
                            Click result {i + 1}
                        </div>
                    ))}
                </section>
            </main>
        </>
    );
}