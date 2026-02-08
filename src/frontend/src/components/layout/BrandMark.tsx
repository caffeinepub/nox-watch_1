import { siteContent } from '@/content/noxContent';

export default function BrandMark() {
  return (
    <div className="flex items-center gap-2">
      <img
        src={siteContent.branding.logoPath}
        alt={siteContent.branding.storeName}
        className="h-8 w-auto object-contain"
      />
    </div>
  );
}
