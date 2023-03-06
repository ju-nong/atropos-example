import { useState } from "react";
import Atropos from "atropos/react";
import { useRouter } from "next/router";
import { SideContainer } from "@/components/SideContainer";

function Home() {
    const router = useRouter();
    const [reverse, setReverse] = useState(false);

    const moveProfile = () => router.replace("https://github.com/ju-nong");

    return (
        <>
            <div className="atropos-container">
                <h1>Put your mouse up!</h1>

                <div className="atropos-main">
                    <Atropos
                        className="atropos-element rounded"
                        shadowScale={1.05}
                        onClick={moveProfile}
                    >
                        <img
                            className="background"
                            src="/images/atropos-bg.svg"
                        />
                        <img
                            src="/images/atropos-bg.svg"
                            data-atropos-offset="-4.5"
                        />
                        {/* <img
                            className="esul-head custom"
                            src="/images/esul.png"
                            data-atropos-offset="-5"
                        /> */}
                        <img
                            src="/images/atropos-mountains.svg"
                            data-atropos-offset="-2.5"
                        />
                        <img
                            src="/images/atropos-forest-back.svg"
                            data-atropos-offset="0"
                        />

                        <img
                            src="/images/atropos-forest-mid.svg"
                            data-atropos-offset="2"
                        />
                        <img
                            className="yong-sook-head custom"
                            src="/images/yong-sook.png"
                            data-atropos-offset="3"
                        />
                        <img
                            src="/images/atropos-forest-front.svg"
                            data-atropos-offset="4"
                        />
                        <img
                            src="/images/yongsook-logo.png"
                            data-atropos-offset="5"
                        />
                        {/* <img
                            src="/images/atropos-logo-en.svg"
                            data-atropos-offset="5"
                        /> */}
                    </Atropos>
                </div>

                <div className="atropos-main">
                    <Atropos
                        className="atropos-element box"
                        shadow={false}
                        stretchX={1000}
                        stretchY={1000}
                        stretchZ={1000}
                        rotateChildren={SideContainer()}
                    >
                        <div className="front-continer">
                            <img
                                className="background"
                                src="/images/atropos-bg.svg"
                            />
                            <img
                                src="/images/atropos-bg.svg"
                                data-atropos-offset="-4.5"
                            />
                            <img
                                src="/images/atropos-mountains.svg"
                                data-atropos-offset="-2.5"
                            />
                            <img
                                src="/images/atropos-forest-back.svg"
                                data-atropos-offset="0"
                            />

                            <img
                                src="/images/atropos-forest-mid.svg"
                                data-atropos-offset="2"
                            />
                            <img
                                src="/images/atropos-forest-front.svg"
                                data-atropos-offset="4"
                            />
                            <img
                                src="/images/box-logo.png"
                                data-atropos-offset="5"
                            />
                        </div>
                    </Atropos>
                </div>
            </div>
        </>
    );
}

export { Home as default };
