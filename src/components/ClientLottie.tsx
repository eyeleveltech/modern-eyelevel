import { useEffect, useState, type ComponentType } from "react";
import type { LottieRefCurrentProps } from "lottie-react";

type ClientLottieProps = Record<string, unknown>;

const ClientLottie = (props: ClientLottieProps) => {
  const [LottieComponent, setLottieComponent] = useState<ComponentType<ClientLottieProps> | null>(null);

  useEffect(() => {
    let isMounted = true;

    import("lottie-react")
      .then((module) => {
        if (isMounted) {
          setLottieComponent(() => module.default as ComponentType<ClientLottieProps>);
        }
      })
      .catch((error) => {
        console.error("Failed to load Lottie component:", error);
      });

    return () => {
      isMounted = false;
    };
  }, []);

  if (!LottieComponent) {
    return null;
  }

  return <LottieComponent {...props} />;
};

export type { LottieRefCurrentProps as ClientLottieRef };
export default ClientLottie;
