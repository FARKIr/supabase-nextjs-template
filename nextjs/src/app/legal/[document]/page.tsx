'use client';

import React from 'react';
import LegalDocument from '@/components/LegalDocument';
import { notFound } from 'next/navigation';

const legalDocuments = {
    'privacy': {
        title: 'Privacy Notice',
        path: '/terms/privacy-notice.md'
    },
    'terms': {
        title: 'Terms of Service',
        path: '/terms/terms-of-service.md'
    },
    'refund': {
        title: 'Refund Policy',
        path: '/terms/refund-policy.md'
    }
} as const;

type LegalDocument = keyof typeof legalDocuments;

const getSlovakTitle = (document: LegalDocument): string => {
    switch (document) {
        case 'privacy':
            return 'Oznámenie o ochrane súkromia';
        case 'terms':
            return 'Obchodné podmienky';
        case 'refund':
            return 'Zásady vrátenia peňazí';
        default:
            return '';
    }
};

interface LegalPageProps {
    document: LegalDocument;
    lng: string;
}

interface LegalPageParams {
    params: Promise<LegalPageProps>
}

export default function LegalPage({ params }: LegalPageParams) {
    const {document, lng} = React.use<LegalPageProps>(params);

    if (!legalDocuments[document]) {
        notFound();
    }

    const { title, path } = legalDocuments[document];
    const filePath = lng === 'sk' ? path.replace('.md', '_SK.md') : path;
    const displayTitle = lng === 'sk' ? getSlovakTitle(document) : title;

    return (
        <div className="container mx-auto px-4 py-8">
            <LegalDocument
                title={displayTitle}
                filePath={filePath}
            />
        </div>
    );
}