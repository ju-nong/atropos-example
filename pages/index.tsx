import Atropos from "atropos/react";
import { useRouter } from "next/router";

function Home() {
  const router = useRouter();

  const moveProfile = () => router.replace("https://github.com/ju-nong");

  return (
    <div className="atropos-container">
      <Atropos
        className="my-atropos"
        activeOffset={40}
        shadowScale={1.05}
        onClick={moveProfile}
        // onEnter={() => console.log("Enter")}
        // onLeave={() => console.log("Leave")}
        // onRotate={(x, y) => console.log("Rotate", x, y)}
      >
        <img className="background" src="/images/atropos-bg.svg" />
        <img src="/images/atropos-bg.svg" data-atropos-offset="-4.5" />
        <img
          className="esul-head custom"
          src="/images/esul.png"
          data-atropos-offset="-5"
        />
        <img src="/images/atropos-mountains.svg" data-atropos-offset="-2.5" />
        <img src="/images/atropos-forest-back.svg" data-atropos-offset="0" />

        <img src="/images/atropos-forest-mid.svg" data-atropos-offset="2" />
        <img
          className="yong-sook-head custom"
          src="/images/yong-sook.png"
          data-atropos-offset="3"
        />
        <img src="/images/atropos-forest-front.svg" data-atropos-offset="4" />
        <img src="/images/atropos-logo-en.svg" data-atropos-offset="5" />
      </Atropos>
    </div>
  );
}

export { Home as default };
