import type { Metadata } from "next";
import { Stage } from "./_components/voyage/Stage";

export const metadata: Metadata = {
  other: {
    "google-site-verification": "tYZTuGSt007FnLrQkrxF3DnAjILwFNHzV4r7oRwpkw8",
  },
};

export default function Home() {
  return <Stage />;
}
