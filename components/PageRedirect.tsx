import React, { useEffect } from "react";
import { useRouter } from "next/router";

interface PageRedirectProps {
  destination: string;
}

function PageRedirect({ destination }: PageRedirectProps) {
  const router = useRouter();

  useEffect(() => {
    router.push(destination);
  }, [router, destination]);

  return <p>{"Redirecting\u2026"}</p>;
}

export default PageRedirect;
