"use client";

import { Button } from "./components/shared/Button";

export default function Home() {
  return (
    <div>
      <Button onClick={(e) => console.log(e)}>Click me</Button>
      <div> Start tracking your progress with Tracker</div>
    </div>
  );
}
