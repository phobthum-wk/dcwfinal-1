import React from "react";

export default function Loading() {
    return (
        <div>

            <div className="spinner-grow text-danger" role="status" style={{ height: '100px', width: '100px', marginTop: '100px' }}>
                <span className="sr-only">Loading...</span>
            </div>

        </div>
    );
}