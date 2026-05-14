import React from 'react';
import { Eatery } from '../types';
import { MapPin, Star } from 'lucide-react';

const EateryCard: React.FC<{ eatery: Eatery; onView: (id: string) => void; onContact?: (eatery: Eatery) => void }> = React.memo(({ eatery, onView, onContact }) => {
  const menuTeaser = eatery.menu && eatery.menu.length ? eatery.menu.slice(0,2).map(m => `${m.itemName} • ${m.price}`).join(' | ') : '';

  return (
    <div className="group relative bg-[#000000] rounded-[10px] overflow-hidden cursor-pointer transition-all duration-400 hover:shadow-[0_24px_70px_rgba(201,162,77,0.15)] flex flex-col h-full">
      <div className="relative flex-shrink-0" style={{aspectRatio: '2.5 / 1.6'}}>
        <img src={eatery.images?.[0] || ''} alt={eatery.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
        <div className="absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-black/70 via-black/40 to-transparent" />

        <div className="absolute top-1.5 left-1.5 flex gap-1">
          {eatery.premiumTier === 'Elite' && (
            <div className="bg-gradient-to-r from-[#E0C36A] to-[#C9A24D] text-black text-[6px] font-bold uppercase px-1.5 py-0.25 rounded-full shadow-[0_6px_20px_rgba(201,162,77,0.18)]" style={{letterSpacing: '0.08em'}}>Elite</div>
          )}
          {eatery.verified && (
            <div className="bg-[#0b0b0b] text-[#E0C36A] text-[6px] font-semibold px-1 py-0.25 rounded-full flex items-center gap-0.5 border border-[#E0C36A]/20" style={{letterSpacing: '0.03em'}}>✓</div>
          )}
        </div>
      </div>

      <div className="flex-1 p-2 bg-[#0b0b0b] border-t border-white/5 flex flex-col">
        <div className="mb-1 flex-shrink-0">
          <h3 className="text-[11px] md:text-xs font-serif text-white leading-tight tracking-tight line-clamp-2">{eatery.name}</h3>
          <div className="flex items-center gap-1 mt-0.5 text-[9px]">
            <div className="flex items-center gap-0.5 text-[#E0C36A] font-semibold">★ {eatery.rating?.toFixed(1) || '—'}</div>
            <div className="text-[#3a3a3a] text-[8px]">•</div>
            <div className="text-gray-400 text-[8px] line-clamp-1">{eatery.category}</div>
          </div>
        </div>

        <div className="flex items-center text-[8px] text-gray-400 mb-1 flex-shrink-0">
          <div className="flex items-center gap-0.5 line-clamp-1"><MapPin size={9} className="text-[#C9A24D] flex-shrink-0"/> <span className="line-clamp-1 text-[8px]">{typeof eatery.location === 'string' ? eatery.location : eatery.location.area}</span></div>
        </div>

        <div className="mt-auto flex items-center justify-between gap-1 flex-shrink-0">
          <button onClick={() => onView(eatery.id)} className="flex-1 bg-gradient-to-r from-[#E0C36A] to-[#C9A24D] text-black px-1.5 py-0.75 rounded text-[10px] font-semibold transition-all duration-300 hover:shadow-[0_8px_24px_rgba(201,162,77,0.25)] hover:scale-105">View</button>
          <button onClick={() => onContact && onContact(eatery)} className="border border-[#C9A24D]/30 text-[#E0C36A] px-1.5 py-0.75 rounded text-[10px] font-semibold transition-all duration-300 hover:border-[#C9A24D]/60 hover:bg-white/5">Info</button>
        </div>
      </div>
    </div>
  );
});

EateryCard.displayName = 'EateryCard';
export default EateryCard;
