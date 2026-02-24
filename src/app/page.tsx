'use client';
import { useRouter } from "next/navigation";

export default function InicioPage() {
  const router = useRouter();

  router.push("/dashboard");

  return null;
}
