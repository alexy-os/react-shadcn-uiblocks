import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import { ChartNoAxesGantt } from "lucide-react";

// Define brand configuration
const BRAND_CONFIG = {
    path: "/",
    label: "buildy/ui",
    color: "#37bcf7",
    strokeWidth: 3.3
} as const;

type BrandProps = {
    className?: string;
}

export function Brand({ className }: BrandProps) {
    return (
        <Link to={BRAND_CONFIG.path} className={cn("mr-6 flex items-center space-x-2", className)}>
            <ChartNoAxesGantt 
                color={BRAND_CONFIG.color} 
                strokeWidth={BRAND_CONFIG.strokeWidth} 
                className="w-5 h-5 -mb-0.5" 
            />
            <span className="font-bold">{BRAND_CONFIG.label}</span>
        </Link>
    );
}