import React, { useState } from 'react';
import { MenuItem } from '../types';
import { X, Flame, Plus, Minus, ShoppingBag, Check } from 'lucide-react';
import { RICE_OPTIONS, SAMBAL_OPTIONS } from '../data/restaurantData';

interface DishDetailModalProps {
  dish: MenuItem | null;
  onClose: () => void;
  onAddToCart: (
    dish: MenuItem,
    quantity: number,
    sambalChoice: string,
    riceChoice: string,
    notes: string
  ) => void;
}

export const DishDetailModal: React.FC<DishDetailModalProps> = ({
  dish,
  onClose,
  onAddToCart,
}) => {
  if (!dish) return null;

  const [quantity, setQuantity] = useState(1);
  const [selectedSambal, setSelectedSambal] = useState(SAMBAL_OPTIONS[0]);
  const [selectedRice, setSelectedRice] = useState(RICE_OPTIONS[0]);
  const [notes, setNotes] = useState('');
  const [isAdded, setIsAdded] = useState(false);

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(price);
  };

  const handleAdd = () => {
    onAddToCart(dish, quantity, selectedSambal, selectedRice, notes);
    setIsAdded(true);
    setTimeout(() => {
      setIsAdded(false);
      onClose();
    }, 600);
  };

  const isMainDish = dish.category === 'ayam-bebek' || dish.category === 'ikan-seafood';

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-3xl max-w-lg w-full overflow-hidden shadow-2xl border border-neutral-100 max-h-[90vh] flex flex-col relative animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Tutup detail menu"
          className="absolute top-4 right-4 z-10 p-2 rounded-full bg-white/90 text-neutral-700 hover:bg-white hover:text-black shadow-md transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Scrollable Body */}
        <div className="overflow-y-auto">
          {/* Header Image or Fallback */}
          <div className="relative aspect-[16/10] bg-neutral-100 overflow-hidden">
            {dish.image ? (
              <img
                src={dish.image}
                alt={dish.name}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-[#2A6B50]/10 to-[#CC2E35]/10">
                <span className="font-display font-bold text-2xl text-[#2A6B50]">
                  {dish.name}
                </span>
              </div>
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
            <div className="absolute bottom-3 left-4 right-4 text-white flex items-end justify-between">
              <div>
                <span className="text-xs uppercase tracking-wider text-emerald-300 font-semibold">
                  {dish.portion || 'Porsi Reguler'}
                </span>
                <h3 className="text-xl sm:text-2xl font-display font-extrabold text-white drop-shadow-sm">
                  {dish.name}
                </h3>
              </div>
              <span className="text-lg sm:text-xl font-bold font-mono text-emerald-200 bg-black/40 backdrop-blur-sm px-2.5 py-1 rounded-lg">
                {formatPrice(dish.price)}
              </span>
            </div>
          </div>

          <div className="p-5 sm:p-6 space-y-5">
            {/* Description */}
            <div>
              <p className="text-sm text-neutral-600 leading-relaxed">
                {dish.description}
              </p>
            </div>

            {/* Ingredients */}
            {dish.ingredients && dish.ingredients.length > 0 && (
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-neutral-500 block mb-2">
                  Komposisi & Kelengkapan
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {dish.ingredients.map((ing, idx) => (
                    <span
                      key={idx}
                      className="text-xs px-2.5 py-1 rounded-md bg-neutral-100 text-neutral-700"
                    >
                      {ing}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Customization for Main Dishes */}
            {isMainDish && (
              <div className="space-y-4 pt-2 border-t border-neutral-100">
                {/* Rice Selection */}
                <div>
                  <label className="text-xs font-bold uppercase tracking-wider text-neutral-700 block mb-2">
                    Pilihan Nasi (Refill Sepuasnya)
                  </label>
                  <select
                    value={selectedRice}
                    onChange={(e) => setSelectedRice(e.target.value)}
                    className="w-full text-xs font-medium bg-neutral-50 border border-neutral-200 rounded-xl px-3 py-2.5 text-neutral-800 focus:outline-none focus:ring-2 focus:ring-[#2A6B50]"
                  >
                    {RICE_OPTIONS.map((rice: string) => (
                      <option key={rice} value={rice}>
                        {rice}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Sambal Selection */}
                <div>
                  <label className="text-xs font-bold uppercase tracking-wider text-neutral-700 block mb-2">
                    Pilihan Sambal Ulek
                  </label>
                  <select
                    value={selectedSambal}
                    onChange={(e) => setSelectedSambal(e.target.value)}
                    className="w-full text-xs font-medium bg-neutral-50 border border-neutral-200 rounded-xl px-3 py-2.5 text-neutral-800 focus:outline-none focus:ring-2 focus:ring-[#CC2E35]"
                  >
                    {SAMBAL_OPTIONS.map((s: string) => (
                      <option key={s} value={s}>
                        {s}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            )}

            {/* Special Notes */}
            <div>
              <label className="text-xs font-bold uppercase tracking-wider text-neutral-500 block mb-1.5">
                Catatan Khusus (Opsional)
              </label>
              <input
                type="text"
                placeholder="Contoh: Sambal dipisah, paha atas, tidak pedas..."
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                className="w-full text-xs bg-neutral-50 border border-neutral-200 rounded-xl px-3 py-2.5 text-neutral-800 focus:outline-none focus:ring-2 focus:ring-[#2A6B50]"
              />
            </div>
          </div>
        </div>

        {/* Modal Bottom Footer Actions */}
        <div className="p-4 sm:p-5 bg-neutral-50 border-t border-neutral-100 flex items-center justify-between gap-4">
          {/* Quantity Stepper */}
          <div className="flex items-center gap-2 bg-white border border-neutral-200 rounded-xl p-1 shrink-0">
            <button
              onClick={() => setQuantity(Math.max(1, quantity - 1))}
              disabled={quantity <= 1}
              aria-label="Kurangi jumlah"
              className="p-1.5 rounded-lg text-neutral-600 hover:bg-neutral-100 disabled:opacity-40"
            >
              <Minus className="w-4 h-4" />
            </button>
            <span className="w-7 text-center font-bold text-sm font-mono text-neutral-800">
              {quantity}
            </span>
            <button
              onClick={() => setQuantity(quantity + 1)}
              aria-label="Tambah jumlah"
              className="p-1.5 rounded-lg text-neutral-600 hover:bg-neutral-100"
            >
              <Plus className="w-4 h-4" />
            </button>
          </div>

          {/* Add to Cart CTA */}
          <button
            onClick={handleAdd}
            className={`flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-sm font-bold text-white shadow-md transition-all ${
              isAdded
                ? 'bg-emerald-600 shadow-emerald-600/20'
                : 'bg-[#2A6B50] hover:bg-[#225741] active:bg-[#1A4433]'
            }`}
          >
            {isAdded ? (
              <>
                <Check className="w-4 h-4" />
                <span>Berhasil Ditambahkan!</span>
              </>
            ) : (
              <>
                <ShoppingBag className="w-4 h-4" />
                <span>Tambah ({formatPrice(dish.price * quantity)})</span>
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};
