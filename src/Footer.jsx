import React, { useEffect, useState } from "react";

export default function Footer() {
    const appName = import.meta.env.VITE_APP_NAME_FOOTER;

    return (
        <span className="text-xs font-bold">
            Built and designed by {appName}.
            <p>All rights reserved. </p>
        </span>
    );
}