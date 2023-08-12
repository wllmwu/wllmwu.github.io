import React, { useEffect } from "react";
import { useRouter } from "next/router";

interface PageRedirectProps {
  destination: string;
}

function PageRedirect({ destination }: PageRedirectProps) {
  const router = useRouter();

  useEffect(() => {
    void router.push(destination);
  }, [router, destination]);

  return <p>Redirecting&hellip;</p>;
}

export default PageRedirect;
