import Link from 'next/link';
import React from 'react';

interface BreadcrumbItem {
    label: string;
    path: string;
}

interface BreadcrumbsProps {
    items: BreadcrumbItem[];
    className?: string;
}

const Breadcrumbs = ({ items, className }: BreadcrumbsProps) => {


    return (
        <nav className={`flex space-x-1 ${className} absolute bottom-8 left-6`}>
            {items.map((item, index) => {
                const isLast = index === items.length - 1;

                return (
                    <div key={item.path} className="flex items-center space-x-1">
                        <Link href={item.path} className="text-black hover:text-gray-700">
                            {item.label}
                        </Link>

                        {!isLast && <span className="text-gray-400">/</span>}
                    </div>
                );
            })}
        </nav >
    );
};

export default Breadcrumbs;
