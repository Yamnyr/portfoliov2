import type React from "react"
import { Badge } from "@/once-ui/components"

interface CategoryBadgeProps {
    category: string
}

const categoryConfig = {
    "dev-web": {
        label: "Dev Web",
        variant: "primary" as const,
    },
    "ui-ux": {
        label: "UI/UX",
        variant: "secondary" as const,
    },
    "ia-data": {
        label: "IA & Data",
        variant: "tertiary" as const,
    },
} as const

export const CategoryBadge: React.FC<CategoryBadgeProps> = ({ category }) => {
    const config = categoryConfig[category as keyof typeof categoryConfig]

    if (!config) return null

    return (
        <Badge variant={config.variant} size="s">
            {config.label}
        </Badge>
    )
}
