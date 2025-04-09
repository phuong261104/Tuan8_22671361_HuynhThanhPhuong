import { Fragment } from "react";

export default function Modal({ isOpen, onClose, title, children }) {
    if (!isOpen) return null;

    return (
        <Fragment>
            {/* Overlay */}
            <div
                className="fixed inset-0 bg-white/30 backdrop-blur-sm z-40"
                onClick={onClose}
            ></div>

            {/* Modal Content */}
            <div className="fixed inset-0 flex items-center justify-center z-50">
                <div className="bg-white rounded-lg shadow-lg w-full max-w-md mx-4 p-6 relative">
                    {/* Close Button */}
                    <button onClick={onClose} className="absolute top-2 right-2 text-gray-500 hover:text-gray-700">
                        ✕
                    </button>

                    {/* Title */}
                    {title && (
                        <h2 className="text-xl font-bold mb-4 text-center text-pink-500">{title}</h2>
                    )}

                    {/* Body */}
                    {children}
                </div>
            </div>
        </Fragment>
    );
}
