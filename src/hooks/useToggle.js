import { useState } from "react";

export const useToggle = (initialValue = true) => {
    const [isToggle, setIsToggle] = useState(initialValue);

    const openUsersidebar = () => setIsToggle(true);
    const closeUsersidebar = () => setIsToggle(false);

    return[isToggle, openUsersidebar, closeUsersidebar];
};