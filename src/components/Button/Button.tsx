import { Slot } from "@radix-ui/react-slot"
import clsx from "clsx"
import type { ComponentPropsWithoutRef } from "react"
import s from "./Button.module.css"

type Props = {
    variant?: "primary" | "outlined" | "secondary"
    asChild?: boolean
} & ComponentPropsWithoutRef<"button">

export const Button = ({ variant = "primary", asChild, className, ...rest }: Props) => {
    const Component = asChild ? Slot : "button"
    return <Component className={clsx(s.button, s[variant], className)} {...rest} />
}