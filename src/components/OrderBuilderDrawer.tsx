import React, { useState } from 'react';
import { CartItem } from '../types';
import { X, Trash2, Plus, Minus, MessageCircle, ShoppingBag, ArrowRight } from 'lucide-react';
import { MENU_ITEMS, OUTLET_INFO, LovableMenuItem } from '../data/restaurantData';

interface OrderBuilderDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  cart: CartItem[];
  onUpdateQuantity: (id: string, delta: number) => void;
  onRemoveItem: (id: string) => void;
  onClearCart: () => void;
  onAddDishDirectly: (dish: { name: string; price: number; description: string; category: string; image?: string }) => void;
}

export const OrderBuilderDrawer: React.FC<OrderBuilderDrawerProps> = ({
  isOpen,
  onClose,
  cart,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart,
  onAddDishDirectly,
}) => {
  if (!isOpen) return null;

  const [customerName, setCustomerName] = useState('');
  const [orderType, setOrderType] = useState<'delivery' | 'dinein' | 'takeaway'>('delivery');
  const [addressNotes, setAddressNotes] = useState('');

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(price);
  };

  const subtotal = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  // Quick addon suggestions
  const suggestedItems = MENU_ITEMS.filter((m) => m.category === 'Tambahan').slice(0, 2);

  const handleSendToWhatsApp = () => {
    if (cart.length === 0) return;

    const orderTypeLabel = {
      delivery: 'Delivery ke Alamat',
      dinein: 'Dine-in / Santap di Tempat',
      takeaway: 'Takeaway / Ambil Sendiri',
    }[orderType];

    let message = `Halo *${OUTLET_INFO.name}*, saya ingin melakukan pemesanan:\n\n`;
    message += `*📋 DAFTAR PESANAN:*\n`;

    cart.forEach((item, index) => {
      message += `${index + 1}. *${item.quantity}x ${item.name}* (${formatPrice(item.price * item.quantity)})\n`;
      if (item.riceChoice) message += `   • Nasi: ${item.riceChoice}\n`;
      if (item.sambalChoice) message += `   • Sambal: ${item.sambalChoice}\n`;
      if (item.notes) message += `   • Catatan: ${item.notes}\n`;
    });

    message += `\n*💰 TOTAL ESTIMASI: ${formatPrice(subtotal)}*\n\n`;
    message += `*👤 DATA PEMESAN:*\n`;
    message += `• Nama: ${customerName.trim() || 'Pelanggan 234'}\n`;
    message += `• Tipe Pesanan: ${orderTypeLabel}\n`;
    if (addressNotes.trim()) {
      message += `• Alamat / Catatan: ${addressNotes.trim()}\n`;
    }
    message += `\nMohon konfirmasi ketersediaan dan total biaya pemesanan. Terima kasih!`;

    const waUrl = `https://wa.me/${OUTLET_INFO.whatsapp}?text=${encodeURIComponent(message)}`;
    window.open(waUrl, '_blank');
  };

  return (
    <div
      className="fixed inset-0 z-50 overflow-hidden bg-black/60 backdrop-blur-xs flex justify-end animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="w-full max-w-md bg-white h-full shadow-2xl flex flex-col relative animate-in slide-in-from-right duration-300"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Drawer Header */}
        <div className="p-4 sm:p-5 border-b border-neutral-200 flex items-center justify-between bg-[#163e2d] text-white">
          <div className="flex items-center gap-2.5">
            <ShoppingBag className="w-5 h-5 text-[#f5b041]" />
            <div>
              <h3 className="font-display font-bold text-base">Keranjang & Pemesanan</h3>
              <p className="text-[11px] text-emerald-200">Penyetan 234 Bandung</p>
            </div>
          </div>
          <button
            onClick={onClose}
            aria-label="Tutup keranjang"
            className="p-1.5 rounded-full hover:bg-white/10 text-white/80 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Drawer Content */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-5 space-y-5">
          {cart.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center py-12">
              <div className="w-16 h-16 rounded-full bg-[#eef4f1] text-[#2a6b50] flex items-center justify-center mb-4">
                <ShoppingBag className="w-8 h-8" />
              </div>
              <h4 className="font-display font-bold text-base text-neutral-800 mb-1">
                Keranjang Masih Kosong
              </h4>
              <p className="text-xs text-neutral-500 max-w-xs mb-6">
                Pilih menu penyetan favorit Anda dari daftar menu untuk kalkulasi pesanan otomatis via WhatsApp.
              </p>
              <button
                onClick={onClose}
                className="px-5 py-2.5 rounded-full bg-[#2a6b50] text-white text-xs font-bold hover:bg-[#225741] transition-colors"
              >
                Jelajahi Menu
              </button>
            </div>
          ) : (
            <>
              {/* Cart Items List */}
              <div className="space-y-3">
                <div className="flex items-center justify-between text-xs text-neutral-500 pb-1 border-b border-neutral-100">
                  <span>Daftar Pesanan ({cart.length} item)</span>
                  <button
                    onClick={onClearCart}
                    className="text-[#cc2e35] hover:underline flex items-center gap-1 font-medium"
                  >
                    <Trash2 className="w-3 h-3" />
                    <span>Kosongkan</span>
                  </button>
                </div>

                {cart.map((item) => (
                  <div
                    key={item.id}
                    className="p-3 bg-neutral-50 rounded-2xl border border-neutral-200/80 space-y-2.5"
                  >
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <h5 className="font-display font-bold text-sm text-neutral-900 leading-snug">
                          {item.name}
                        </h5>
                        <p className="text-xs font-mono font-bold text-[#cc2e35]">
                          {formatPrice(item.price)}
                        </p>
                      </div>
                      <button
                        onClick={() => onRemoveItem(item.id)}
                        className="p-1 text-neutral-400 hover:text-red-500 transition-colors"
                        title="Hapus menu"
                      >
                        <X className="w-4 h-4" />
                      </button>
                    </div>

                    {/* Quantity Stepper */}
                    <div className="flex items-center justify-between pt-1">
                      <div className="flex items-center gap-1.5 bg-white border border-neutral-200 rounded-lg p-1">
                        <button
                          onClick={() => onUpdateQuantity(item.id, -1)}
                          className="p-1 rounded text-neutral-600 hover:bg-neutral-100"
                        >
                          <Minus className="w-3.5 h-3.5" />
                        </button>
                        <span className="w-6 text-center text-xs font-bold font-mono">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => onUpdateQuantity(item.id, 1)}
                          className="p-1 rounded text-neutral-600 hover:bg-neutral-100"
                        >
                          <Plus className="w-3.5 h-3.5" />
                        </button>
                      </div>

                      <span className="font-mono text-xs font-bold text-neutral-900">
                        {formatPrice(item.price * item.quantity)}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Quick Addons */}
              {suggestedItems.length > 0 && (
                <div className="pt-2">
                  <span className="text-[11px] font-bold text-neutral-400 uppercase tracking-wider block mb-2">
                    Tambah Menu Pelengkap?
                  </span>
                  <div className="grid grid-cols-2 gap-2">
                    {suggestedItems.map((sug) => (
                      <button
                        key={sug.name}
                        onClick={() =>
                          onAddDishDirectly({
                            name: sug.name,
                            price: sug.priceNum || 6000,
                            description: sug.desc,
                            category: sug.category,
                            image: sug.image,
                          })
                        }
                        className="p-2.5 rounded-xl border border-dashed border-neutral-300 hover:border-[#2a6b50] hover:bg-[#eef4f1] text-left transition-all cursor-pointer"
                      >
                        <p className="text-xs font-bold text-neutral-800 truncate">{sug.name}</p>
                        <p className="text-[11px] text-[#2a6b50] font-mono font-semibold">
                          +{sug.price}
                        </p>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Customer Information Form */}
              <div className="space-y-3 pt-4 border-t border-neutral-200">
                <span className="text-xs font-bold text-neutral-800 block">
                  Informasi Pemesan
                </span>

                <div>
                  <input
                    type="text"
                    placeholder="Nama Anda"
                    value={customerName}
                    onChange={(e) => setCustomerName(e.target.value)}
                    className="w-full text-xs px-3.5 py-2.5 bg-neutral-50 border border-neutral-200 rounded-xl text-neutral-800 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-[#2a6b50]"
                  />
                </div>

                <div className="grid grid-cols-3 gap-1 bg-neutral-100 p-1 rounded-xl text-xs font-medium">
                  <button
                    onClick={() => setOrderType('delivery')}
                    className={`py-1.5 rounded-lg text-center transition-all cursor-pointer ${
                      orderType === 'delivery'
                        ? 'bg-white font-bold text-[#2a6b50] shadow-xs'
                        : 'text-neutral-600 hover:text-neutral-900'
                    }`}
                  >
                    Delivery
                  </button>
                  <button
                    onClick={() => setOrderType('dinein')}
                    className={`py-1.5 rounded-lg text-center transition-all cursor-pointer ${
                      orderType === 'dinein'
                        ? 'bg-white font-bold text-[#2a6b50] shadow-xs'
                        : 'text-neutral-600 hover:text-neutral-900'
                    }`}
                  >
                    Dine In
                  </button>
                  <button
                    onClick={() => setOrderType('takeaway')}
                    className={`py-1.5 rounded-lg text-center transition-all cursor-pointer ${
                      orderType === 'takeaway'
                        ? 'bg-white font-bold text-[#2a6b50] shadow-xs'
                        : 'text-neutral-600 hover:text-neutral-900'
                    }`}
                  >
                    Take Away
                  </button>
                </div>

                <div>
                  <textarea
                    rows={2}
                    placeholder={
                      orderType === 'delivery'
                        ? 'Alamat pengantaran & patokan lokasi...'
                        : 'Waktu kedatangan / catatan khusus...'
                    }
                    value={addressNotes}
                    onChange={(e) => setAddressNotes(e.target.value)}
                    className="w-full text-xs px-3.5 py-2.5 bg-neutral-50 border border-neutral-200 rounded-xl text-neutral-800 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-[#2a6b50]"
                  />
                </div>
              </div>
            </>
          )}
        </div>

        {/* Drawer Footer with WA Button */}
        {cart.length > 0 && (
          <div className="p-4 sm:p-5 border-t border-neutral-200 bg-neutral-50/80 space-y-3">
            <div className="flex items-center justify-between text-xs text-neutral-600">
              <span>Total Estimasi ({totalCartCount(cart)} item):</span>
              <span className="font-mono text-base font-bold text-[#cc2e35]">
                {formatPrice(subtotal)}
              </span>
            </div>

            <button
              onClick={handleSendToWhatsApp}
              className="w-full py-3.5 px-4 rounded-xl bg-[#25D366] hover:bg-[#20BD5A] text-white font-bold text-sm flex items-center justify-center gap-2 shadow-lg shadow-[#25D366]/20 transition-all hover:scale-[1.02] active:scale-95 cursor-pointer"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              <span>Kirim Pesanan ke WhatsApp</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

function totalCartCount(cart: CartItem[]): number {
  return cart.reduce((acc, item) => acc + item.quantity, 0);
}
