import React from "react";
import { LeftSide } from "./LeftSide";
import { RightSide } from "./RightSide";
import { TopSide } from "./TopSide";
import { BottomSide } from "./BottomSide";

function SideContainer() {
    return (
        <>
            <LeftSide />
            <RightSide />
            <TopSide />
            <BottomSide />
        </>
    );
}

export { SideContainer };
