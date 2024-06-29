'use client';

import { Button } from "@nextui-org/button";

export default function ReadMoreButton(
  { text }: { 
    text: string,
  },
) {
  return (
    <Button color="primary" radius="full" variant="bordered" fullWidth={true}>
      {text}
    </Button>
  )
}