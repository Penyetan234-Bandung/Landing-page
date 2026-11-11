# Website Landing Page Penyetan 234 Bandung

Modern, high-converting official landing page for **Penyetan 234 Bandung** (Halal Lagi Thayyib), highlighting authentic Indonesian penyetan dishes, the unique Free Refill prasmanan concept (rice, sambal, and fresh lalapan), Nasi Kotak catering packages, an interactive WhatsApp order builder, delivery apps integration, and Bandung outlet location.

---

### User Review & Critical Decisions

> [!IMPORTANT]
> The following parameters were confirmed during interactive clarification and will be directly incorporated:

- **Confirmed Bandung Outlet Location**: `Jl. K.H. Ahmad Dahlan No.66, Malabar, Kec. Lengkong, Kota Bandung, Jawa Barat 40262` (Google Maps embed and direct navigation link).
- **Confirmed Contact & WhatsApp Hotline**: `081167051693` (`+62 811-6705-1693` / `https://wa.me/6281167051693`).
- **Confirmed Ordering Experience**: Dual flow offering an **Interactive WhatsApp Order Builder & Calculator** (allowing customers to pick dishes, sambal variants, rice types, and box quantities before generating a formatted WhatsApp message) alongside instant direct redirect buttons to **GrabFood, GoFood, and ShopeeFood**.

---

### 1. Overview & Core Concept

- **What It Does**: Serves as the primary digital home and conversion funnel for Penyetan 234 Bandung. It establishes brand trust (*Halal Lagi Thayyib*, hygienic, family-friendly), displays an appetizing visual menu with detailed filtering and sambal options, promotes bulk catering (Nasi Kotak), and drives dine-in visits and delivery orders.
- **Target Audience / Persona**:
  1. *Food Enthusiasts & Families in Bandung* looking for authentic, comforting penyetan with generous free refill rice and spicy sambal options.
  2. *Office Workers, Event Planners & University Organizers* searching for reliable, delicious Nasi Kotak catering in Bandung for meetings and events.
  3. *Delivery Diners* looking for quick online ordering via WhatsApp, GoFood, GrabFood, or ShopeeFood.
- **Key Value**: Crisp appetizing visual presentation, transparent pricing, hassle-free WhatsApp message generation with selected items, and clear outlet details with zero friction.

---

### 2. User Experience & Visual Design

#### Key User Flows
1. **Hero & Discovery**: Visitor arrives on an appetizing visual hero displaying signature crispy & grilled chicken/duck penyetan with vibrant sambal. Quick-action CTAs allow immediate navigation to "Lihat Menu" or launching "Pesan Sekarang".
2. **Brand & Concept Walkthrough**: Seamless transition into "Tentang Kami" (Halal, Berkualitas, Lezat, Ramah) and the marquee **"Makan Puas, Pilih Sesuka Hati"** section emphasizing the Free Refill prasmanan (Nasi Putih/Liwet/Daun Jeruk, 5 signature sambals, and crisp lalapan).
3. **Interactive Menu Exploration**: Filterable menu grid (Semua, Ayam & Bebek, Ikan & Seafood, Pilihan Nasi, Aneka Sambal, Menu Tambahan, Minuman) with item search, badges (Recommended/Favorit), price in Rupiah, and click-to-view dish detail modals.
4. **Nasi Kotak Catering Packages**: Dedicated packages (Paket Hemat, Paket Komplit, Paket Juara, Paket Bebek) with included side dishes, minimum order guides, and a 1-click WhatsApp catering inquiry button.
5. **Interactive WhatsApp Order Builder**: Modal or slide-over drawer where users can construct their custom meal (main dish + rice + sambal + drinks), calculate totals, and click "Kirim Pesanan via WhatsApp" with pre-filled readable text.
6. **Promotions & Delivery Channels**: Active discounts/student promos banner, followed by verified links to GrabFood, GoFood, and ShopeeFood.
7. **Location & Contact**: Interactive Google Maps embed of Jl. K.H. Ahmad Dahlan No.66 Bandung, opening hours (08.00 - 22.00), one-click directions, Instagram (@penyetan234.official), and TikTok links.

#### Visual Identity & Theme
- **Color Palette (60-30-10 Rule)**:
  - *Dominant Canvas (60%)*: Warm clean neutral `#F9FAFB` and crisp white `#FFFFFF` cards for food legibility.
  - *Structural Brand Surfaces (30%)*: Deep Forest Green `#2A6B50` (Penyetan 234 signature primary) for headers, badges, highlights, and footer.
  - *Accent Budget (10%)*: Sambal Chili Red `#CC2E35` for high-intent conversion buttons, badges, and spicy flavor indicators.
- **Typography**:
  - *Display / Headings*: Plus Jakarta Sans (bold, modern, warm, friendly).
  - *Body Prose*: DM Sans (crisp readability for menu descriptions).
  - *Numerals & Pricing*: Tabular numbers (`font-mono tabular-nums`) for clean price alignment.
- **Micro-Interactions & Motion**:
  - Header scroll transition (transparent to solid with subtle backdrop-blur).
  - Appetizing floating badge animations on Hero food visual.
  - Smooth tab switches and responsive cards with subtle lift (`hover:-translate-y-1 hover:shadow-lg`).
  - Mobile sticky bottom quick-action bar with WhatsApp shortcut (strictly under 15% mobile viewport height).

---

### 3. Key Product Decisions & Trade-Offs

- **Decision 1: Interactive WhatsApp Order Builder vs Simple External Link**
  - *Chosen Approach*: Provide both. A prominent direct WhatsApp button that opens a pre-composed greeting, PLUS an interactive order builder where users can pick menu items and generate a structured order receipt directly into WhatsApp.
  - *Why*: Greatly increases order conversion and eliminates back-and-forth messaging for both customer and restaurant staff.
  - *Alternatives Considered*: Pure static link requires the customer to type their whole order manually.
- **Decision 2: Image Strategy & Appetite Appeal**
  - *Chosen Approach*: Generate high-fidelity Indonesian culinary photography using `generate_image` (crispy ayam goreng kremes with sambal ulek, bebek bakar madu, nasi liwet daun jeruk, and aesthetic nasi kotak packaging), with robust CSS fallback containers and `no-referrer` tags.
  - *Why*: Avoids external flaky placeholder URLs while meeting the PRD's requirement for professional restaurant imagery.
- **Decision 3: Local SEO & Bandung Search Optimization**
  - *Chosen Approach*: Implement Schema.org `Restaurant` / `LocalBusiness` JSON-LD in `index.html` with exact coordinates, address (Jl. K.H. Ahmad Dahlan No.66 Bandung), opening hours, price range, and telephone, synced with meta tags and OpenGraph.
  - *Why*: Essential for organic ranking in "Ayam penyet Bandung", "Penyetan 234 Bandung", and "Nasi kotak Bandung".

---

### 4. Technical Architecture & Data Strategy

```
┌────────────────────────────────────────────────────────────────────────┐
│                        index.html & SEO Layer                          │
│  - Meta Title: "Penyetan 234 Bandung | Halal Lagi Thayyib"            │
│  - Meta Description & OpenGraph Social Cards                           │
│  - Schema.org LocalBusiness (Restaurant, Address, OpeningHours, Phone) │
└───────────────────────────────────┬────────────────────────────────────┘
                                    │
┌───────────────────────────────────▼────────────────────────────────────┐
│                             App.tsx                                    │
│  State: activeCategory, searchQuery, selectedDishModal,                │
│         orderCartItems, isOrderBuilderOpen, isMobileNavOpen            │
└───────┬───────────────────────────┬────────────────────────────┬───────┘
        │                           │                            │
┌───────▼─────────────┐     ┌───────▼─────────────┐      ┌───────▼───────┐
│     Navigation      │     │    Core Content     │      │ Order System  │
│  - Sticky Navbar    │     │  - Hero Section     │      │ - Order Cart  │
│  - Mobile Drawer    │     │  - Tentang Kami     │      │   Drawer      │
│  - Floating FAB     │     │  - Konsep Refill    │      │ - Dish Detail │
│  - Quick Jump Links │     │  - Menu Grid & Tabs │      │   Modal       │
└─────────────────────┘     │  - Nasi Kotak Cards │      │ - WhatsApp    │
                            │  - Promo Showcase   │      │   Composer    │
                            │  - Online Delivery  │      │ - Delivery    │
                            │  - Maps & Contact   │      │   Aggregator  │
                            │  - Footer           │      └───────────────┘
                            └─────────────────────┘
```

#### Core Data Entities & Static Catalog
- `MENU_ITEMS`: Array of dishes with id, name, category, price, description, isRecommended, spicyLevel, image, options (sambal pairing).
- `NASI_KOTAK_PACKAGES`: Tiered corporate and event packages with package name, price starting from, list of inclusions, minimum order, and custom catering inquiry hook.
- `PROMOTIONS`: Active promotions (e.g. promo bundling jumat berkah, student discount, promo opening) with expiry dates and terms.
- `DELIVERY_PLATFORMS`: GrabFood, GoFood, and ShopeeFood direct links and branded badges.
- `OUTLET_INFO`: Address, operational hours (08:00 - 22:00 WIB), phone (`081167051693`), Instagram (`@penyetan234.official`), TikTok, and Google Maps embed URL.
