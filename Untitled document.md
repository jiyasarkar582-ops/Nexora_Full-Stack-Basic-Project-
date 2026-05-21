# **1\. Overall Aesthetic**

These platforms share a very modern **developer-first SaaS aesthetic** with:

* Minimal but polished visuals  
* Strong typography hierarchy  
* Spacious layouts  
* Soft neutral palettes  
* Subtle gradients and glows  
* Clean rounded components  
* High readability  
* Utility-driven consistency  
* Elegant micro-interactions

The design language feels:

* Professional  
* Technical  
* Startup-focused  
* Premium but lightweight  
* Fast and modern

Your project should follow a:

“Clean SaaS \+ modern startup \+ minimal dashboard” visual system.

---

# **2\. Core Visual Identity**

## **Design Keywords**

* Minimal  
* Airy  
* Structured  
* Premium  
* Soft shadows  
* Glassmorphism accents  
* Developer-centric  
* Elegant gradients  
* Subtle animations  
* Clean spacing

---

# **3\. Color System**

## **Primary Palette**

### **Base Backgrounds**

| Usage | Color |
| ----- | ----- |
| Main background | `#0B1120` (dark navy) |
| Secondary background | `#111827` |
| Card surface | `#1F2937` |
| Light mode bg | `#F9FAFB` |

---

## **Accent Colors**

### **Primary Accent**

Inspired heavily by Tailwind \+ Flowbite:

| Accent | Hex |
| ----- | ----- |
| Indigo | `#6366F1` |
| Violet | `#8B5CF6` |
| Cyan | `#06B6D4` |

Use gradients:

![][image1]**Neutral Palette**

| Shade | Hex |
| ----- | ----- |
| Gray 50 | `#F9FAFB` |
| Gray 100 | `#F3F4F6` |
| Gray 400 | `#9CA3AF` |
| Gray 600 | `#4B5563` |
| Gray 900 | `#111827` |

---

## **Semantic Colors**

| Purpose | Color |
| ----- | ----- |
| Success | `#10B981` |
| Warning | `#F59E0B` |
| Error | `#EF4444` |
| Info | `#3B82F6` |

---

# **4\. Typography System**

## **Font Style**

### **Primary Font**

Use:

Inter

Alternative:

Plus Jakarta Sans

Why?

* Clean readability  
* Startup/SaaS aesthetic  
* Excellent UI scaling  
* Modern tech feel

---

## **Typography Hierarchy**

### **Hero Title**

![][image2]![][image3]**5\. Layout System**

## **Page Width**

max-w-7xl mx-auto px-6 lg:px-8  
---

## **Section Spacing**

Large vertical rhythm:

py-24 md:py-32  
---

## **Grid Philosophy**

Use:

* 12-column responsive grids  
* Asymmetrical layouts  
* Alternating feature sections  
* Card-based content blocks

Preferred:

grid grid-cols-1 lg:grid-cols-2 gap-16  
---

# **6\. Component Design Language**

## **Buttons**

### **Primary Button**

* Rounded XL  
* Bold text  
* Gradient or solid indigo  
* Soft hover glow

Example:

rounded-xl  
px-6 py-3  
font-medium  
bg-indigo-600  
hover:bg-indigo-500  
shadow-lg shadow-indigo-500/20  
transition-all  
---

### **Secondary Button**

* Transparent  
* Border-based  
* Soft hover fill

---

## **Cards**

### **Style**

* Rounded 2xl  
* Thin borders  
* Very soft shadows  
* Slight blur backgrounds

Example:

rounded-2xl  
border border-white/10  
bg-white/5  
backdrop-blur-xl  
---

## **Inputs**

Inspired mostly from Flowbite:

* Large padding  
* Rounded XL  
* Neutral backgrounds  
* Focus ring on accent color

focus:ring-2 focus:ring-indigo-500  
---

## **Navbar**

Characteristics:

* Transparent initially  
* Blur on scroll  
* Minimal links  
* CTA on right side

Example:

backdrop-blur-md  
bg-white/5  
border-b border-white/10  
---

# **7\. Hero Section Style**

Inspired strongly by Cruip \+ Tailwind Plus.

## **Structure**

### **Left Side**

* Large headline  
* Small supporting paragraph  
* CTA buttons  
* Trust badges

### **Right Side**

* Dashboard mockup  
* Floating cards  
* Gradient glow  
* Glassmorphism panels

---

## **Hero Background**

Use:

* Radial gradients  
* Grid overlays  
* Noise texture  
* Blurred blobs

Example:

bg-gradient-to-br from-indigo-950 via-slate-950 to-black  
---

# **8\. Animation Language**

Very subtle.

## **Use:**

* Fade-up on scroll  
* Hover lift  
* Glow transitions  
* Smooth opacity changes  
* Floating dashboard motion

Avoid:

* Excessive bouncing  
* Loud animations  
* Over-rotation

---

## **Motion Timing**

transition-all duration-300 ease-out  
---

# **9\. UI Patterns**

## **Preferred Patterns**

### **Sections**

* Feature grids  
* Bento layouts  
* Testimonial cards  
* Pricing tables  
* Logo clouds  
* Dashboard previews  
* Code snippets  
* Stats blocks

---

## **Dashboard Style**

Use:

* Sidebar \+ topbar  
* Compact cards  
* Soft charts  
* Neutral backgrounds  
* Subtle separators

Inspired by:

* Tailwind Catalyst  
* Cruip Mosaic

---

# **10\. Dark Mode Philosophy**

These ecosystems strongly prioritize dark mode.

## **Recommendation**

Default:

Dark-first UI

With optional light mode.

---

## **Dark Mode Rules**

### **Background**

Never pure black.

Use:

Slate / Navy / Zinc

### **Borders**

Use low opacity:

border-white/10

### **Text**

text-white  
text-gray-400  
---

# **11\. Iconography**

Use:

* Lucide Icons  
* Heroicons

Style:

* Outline icons  
* 1.5px stroke  
* Minimal shapes

---

# **12\. Image & Illustration Style**

Use:

* Product mockups  
* Gradient UI previews  
* Abstract 3D blobs  
* SaaS dashboards  
* Minimal illustrations

Avoid:

* Cartoon graphics  
* Overly corporate stock photos  
* Bright saturated imagery

---

# **13\. Recommended Tailwind Setup**

## **Tailwind Plugins**

npm install @tailwindcss/forms  
npm install @tailwindcss/typography  
npm install tailwindcss-animate  
---

## **UI Libraries**

### **Use Together**

* Flowbite → ready-made interactions  
* shadcn/ui → scalable components  
* Tailwind Plus inspiration → layout polish  
* Cruip inspiration → landing page structure

---

# **14\. Suggested Design Tokens**

## **Border Radius**

| Element | Radius |
| ----- | ----- |
| Buttons | `rounded-xl` |
| Cards | `rounded-2xl` |
| Modals | `rounded-3xl` |

---

## **Shadows**

shadow-lg shadow-black/20

Glow shadow:

shadow-indigo-500/20  
---

# **15\. Recommended Page Structure**

## **Landing Page**

1. Navbar  
2. Hero  
3. Trusted by logos  
4. Features grid  
5. Product showcase  
6. Metrics/stats  
7. Testimonials  
8. Pricing  
9. FAQ  
10. CTA footer

---

# **16\. Recommended Tech UI Stack**

Since your inspiration stack is Tailwind-native:

## **Recommended Frontend UI Stack**

| Layer | Recommendation |
| ----- | ----- |
| Framework | Next.js 15 |
| Styling | Tailwind CSS v4 |
| Components | shadcn/ui |
| Icons | Lucide |
| Animation | Framer Motion |
| Charts | Recharts |
| Theme | next-themes |

---

# **17\. Final Design Direction**

Your project should feel like:

“A modern YC-backed SaaS startup with premium developer tooling aesthetics.”

Think:

* Linear  
* Vercel  
* Tailwind Plus  
* Raycast  
* Supabase  
* Cruip templates

But simpler and cleaner.

---

# **18\. Design Principles to Follow**

## **DO**

✅ Large whitespace  
✅ Strong typography  
✅ Consistent spacing  
✅ Subtle gradients  
✅ Dark mode first  
✅ Rounded modern components  
✅ Elegant hover states  
✅ Minimal borders  
✅ Glassmorphism accents

[image1]: <data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAZIAAABjCAYAAACxO4byAAAOs0lEQVR4Xu3dCZAVxR3H8eU+RSwR5FIQQU5BEAQUIigKggjIoQgIIpcIAqJCkFITURSMKEG0jNGgohhR0cRoTqNVOSDmLFOmlJgYIIkmmotEyyo7++ulnzPdM+/EFd5+p+pTzHT39Nzzn+6Zt1RUVFQYAABKECQAAFCIIAEAgEIECQAAFCJIAACgEEECAACFCBIAAChEkAAAQCGCBAAAChEkHBS1a9c2devWNQ0aNDCNGzc2TZs2NUcccQQAoMxU+AGgWLVq1bIBw1XcpEkT07x5c9OiRQvTqlUrc+yxxwIAylCFHxAKpVaHCx5qdbRs2TJYCACgfFX4gSFfderUibU8/IoBADVDUYHEve9o1qxZUCEAoGYpKJC4Vki9evV47wEAsPIOJPXr1890ZfmVAABqrrwCiVogCiK8CwEA+HIGEtedRRABACTJGUh4qQ4AyCZrIFEQadiwYTATAABOaiBp1KiR5c8AAEBUaiBRa0R/3sSfAQCAqMRAoh8c6o8t+oUBAPAlBhK1RvjBIQAgH0Eg0XsRXrADAPIVBBK1Ro455pigIAAASWKBRP+niAKJXwgAgDSxQKIuLf6WFgCgELFAwie/AIBCBYHEL3A4GjdunNm/f7/R8OGHH5qpU6cGZYYOHWpeffVVW+aNN94wM2bMKKoMANR0ZRdIdu3aZW/8e/bsMXfeeaf9V8OLL76YKbN69Wqb9uabb5o1a9aYnTt32unnn3++oDIAgGoOJBqmTJkSS3vllVfM3r17M/mbNm0K5suXWhAatm/fHkvXMjUMHz7cTmt46623YmU2bNhg0910PmUAANUYSN577z3z8ccfB+ka1BWl8enTp9vpfv36BeXysXv37tQbvVonCxYssOMa1FLxy0TlUwYAUE2BRK0MDe3atYulqzXi3/hd15RfRz40JAUr39q1a21ZDRs3bjTdu3cvqgwAoJoCiW7uapH46Rpca8RRa0SDuqn88rloeP3114P0JKp/3759mWChYcyYMQWXAYCarloCiVoiGqLvP5JaI6JBrRI/PR9u8NNzad++vXn//fezzptPGQCoiaolkIh7/9GlSxc7rcFvjaS9R8nX1q1bU2/0b7/9ttm8ebMdnzx5smnTpk0sv3Xr1nbePn365F0GAFCNgUTWrVuXGd+yZUuQv379+uA9SqE0fPTRR7G0l19+2aZ37NgxU+a1116LlXnhhRdserSeXGUAANUcSKrD4MGD7c3eH9ynvzJgwAA/2w7R9x/5lAEAlGEgcXTD148Ke/XqFeQ5PXv2NKtWrTL9+/cP8gopAwA1WdkGEgBA9SCQAABKQiABAJSEQAIAKAmBBABQEgIJAKAkBBIAQEkIJACAkhBIAAAlIZAAAEpCIAEAlIRAAgAoCYEEAFASAgkAoCQEEgBASQgkAICSEEgAACUhkAAASkIgAQCUhEACACgJgQQAUBICCQCgJAQSAEBJCCSVVjz7PzPj1heD9EIdf2K3IG3iiofNyuc+DNJrMu2PXoNGBenVoZhlt23fwXQ4sbuVdIyBmq5aA4ku4uVf/7u57EuvmIGjLwvyPyuj5q0zp5w5PkgvVFLA6HHaCDN28aYg/dOk9fBF8zv37J9Jv/qJvwXzj5yzNpM/5fptQX6ppq153rRp1z5Irw7FLPvUsy8yF163xUxe9bi55sn3g/x8jJh5Y5CWD/84Lnzg9Vh+9FhJmzbtUvOnXP9EUH8uxa734WrK6ieCfR7Nz3XtLHrwzUz+yaefF+SXq2oLJH2HTTRzNu4M0suJf9J9VlY++0GQFsvXDadt1Q1nwjUPmhlrv5PJ69C5h1mxY39m+upt79aoCyKb4zt1LTqQFHturHzugyDNcceq31lT7HTXU86ILedgHMti1/twteC+3wTBOCq4dm775NoZe9U9Zub6l2Jl/fnLVbUEEkXua7b/w1z3zH47LmdMuNLmKbgoXTr3GpD4FDB47Dzbkrn2qX+as6atyqRffMNTpkvvQfbGOXTSUjNp5aN23uNO6BKsQxLdFNyyh0/7fCzv5DPG2KdXPZGpfi3bnUDOhdc+ZK6sfALR/AqU0fXWfK7uZY/9JVj2CV17m6se/qO59ul/m95Dzrflovlp25yLLoIr7v9tkO6cdt7MWL6ezqPrPf/eX5lB58/JTJ85Zbk9dn49Sa575j+V+/6kT9Jat45tl9sf/rZG6WJUV+PV294xJ5x0cpCfxq9zyMTFsYs617IHj52bc39nCyRTb3rG7sfL7/pxLP2CJZvt+e6eYB1//iS5jqV/rMTe6A60uPz8Qo6lW8/oeuvGGS0zYflXbaDTU3iX3oODOrJp2/54e4xV/9xNr8bydIyO69g5SItOz7rjh3be+Zt/GUufsfbbptegkWbazd+sqvvLPwuWnU22wJ3r2vHvW5o+d/aaoJ5yVC2BRAaNudxc8sXngnRHO10XcUfdPCpvQC5dT1vRi/eqh982Z150jR2f+oUdlRfwDtO6TVs7/wld+5hhF19rTya//mx08zpr+vWxNN3clz72Z9Nz4Dl2euTlt9ibfmaexZvsuuik1bSW659IogtCNyg/XWVP6lN18bnuB5eXbZtz6d5/uLn4xqfN4i1/sHXOvP37Nsi5fK23lqfxbv0+Z8v4F0Pr1m3s+JiFd9kgmLRdSXTzjr5r0rJGX3FnUC6tvlFzbzezN1TdiBVE0solWfTQ72PvPvQknvRAkVRnvvs7LZAse/yv5vRxC+y4exjyyySl5ZJ0LP063bHSv+5Y9hpctR9KOZbRZfhpMnvDjzLXsx6wVE7BwS+XRuU79zrNjqtrefmT72Xy9FA3bc23MtNjFm6IdQ+r7ICRM6rKXrKy8r7xr0ye9tGSR/dmgqmC3PmLNgbLT6P1cg+FqrfQa8eNL3pot32wKvRedLg6pAKJnybz7vlF5oQTBQ13Y1YgcU9C0fnn3/tr+6+eoJL0HjI2toy0QKInpmhadBl6avabwEnbkBRIuvYdYk+0tHmzbbOCj789jvJPH39FVV0HgrEuQk2rBaTp6ZU3+iETFlVu72obuP1lu3E96V16+/eC/FyS6vKlpfui5fxt9Y+l9svir72VOG9anc68ym1N299RaYHEr9OfTksr5lhG18vV2al7XzuuwDn9lhfs8Y3mF3sss5X300fOudWMuPQGO+5vi79deuDzry0/6OdzHiXlK5AouLhpBdWFD/zOjmfb3+48Ul3u4UfXt6YLvXZ0bxg4ZnblQ+i59gHHX99ydEgHkvbHd0pMd2lVgWRQML8LJHpJmkQXXrS+tEAyZ+OuxOX649nSkgKJ9oVOyrR5k+pxabqZ+dvj+PM46tIYv/wBO+4Ci4KVX7cb14UQ7d5JWp80Sx7ZU/VlU+XNL9o/H5VWX7RrU/350XL+tiYdS1d+6KQl5oIl9wb1py0737RsgcTXsUvPoIw/XzHHMlqPxnWsVuz4byZNL+N7DDg7ll/sscxW3k9Xt88lN3/Djvvb4m+XWoCz7ng5qDNKXWmum1TbEM3Tter289Kt+2LrokDS/5ypmWk9aLoHjGz7278nOInXTqQ7zT8e4uoafME828Xm11mODulAIurn1Q3GTdunxQPN4FyBJF/FBJJSWiTRkztp3mzbnIu6l/R+J5qm90fjlt5nx/sMHResZ3R61vqXMk+Ooq/Zljzyp2A5adQdc+lt37X7VMfczxd/+dH0aN94Wrk0Or9OPn10agCTpDrz3d/ZAomf5sunjC/pWGY7Vi7fdWf5+YUeS1efn5aUrq7fETNvCsolSWqR+F/S6frTw5a65FwLy/GXHZ3OFkjy4e/PQq4djUfvCQqWSV2k5SgIJK1atQoKHQzFBpJTR1wcuxHrpHBN188ykGgeXZSuX37Y1OsStyEpkLi63Bc046/+SmzebNuci37rYG8mlTdDTY+ae5ud1hc8roym7buoyvHL7/6JmbjykUye+rljF8ezH9hPHv3lZKP5k/ZFNN9Pc+muT1p94Gnl0uhmpA8Y/CfYqKQ6893faYFE7x50/LMtQ18DjVt2f5CeTdKxjN6A3bFyL3QHjp5loi+Lg2P5XHHHstupw4L0OXf/1H7sonHXBaTf2/jl0qi8C95675C0X9POI6W5D1/0DiJaptRAotbdOZfdbMfdu1f/2nEfgfjXjrr23LK0L5LWvVwFgaRZs2ZBoYMhLZDoRZg7YdJOHD2RqE9SX25En3pKDST+cmXmuh/YvFyBRPRjQ70I1cmnkzeaf9789UHd0XzdJHRzUdPcvbiL1p22zfnQk5PWSXWqb7zHgLNi+W3bHWef2pWv3/T48/cdPimzvp+bvCzIz0WfRPrvgMTfFxJ9X6Wgq/VWIND54u+TfGge/wnWpfuiy862v3MdS9HXh0pTl0zajxbVUtPNPFuLyecfSz9fx0oPNHbZ295NzHfrW8yxbN+hk5m76ed2fvdk7rivJLV8vffz581GN1rXfRntZo3Shxe6Pvz0fmdfdGB737HrFz0WpQYSUdeV6lRwK/TaueiG7Qf29wexAFTuYoGkYcOGplGjRkEhHFzqetCnk9E0/8YE1HS6GXfqdkqQjkNPLJDUqlXrU31Pgk+o1aTgod+h6F/9At4vA9RUuiZc7wAOfbFA4rq3jjzyyKAgAABJgkCirq0GDRoEBQEASBIEEtcqOfroo4PCAAD4EgNJ06ZNTf369YPCAAD4EgOJa5V8Wp8CAwDKR2og0bsSPgUGAOSSGkhcq6RevXrBTAAAOFkDiQsm+qGiPyMAAJIzkNSpU8cGk8aNGwczAwCQM5CIurcIJgCAJHkFEtHnwAomfBYMAIjKO5CI6+ZSC6VFixZBZQCAmqegQOLoB4sKKHweDAAoKpCIa500adKEdycAUIMVHUicunXr2oDiWihHHXVUsBAAQPmq8ANDsfR/mahl4oKKWir6t3nz5vYPQLZs2TJYOADg8FfhB4SDpXbt2ra1oj9JrwDj3qsAAMpLhR8AAAAoUJAAAEAhggQAAAoRJAAAUIggAQCAQgQJAAAUIkgAACBv/wfZeNBqAIpRuQAAAABJRU5ErkJggg==>

[image2]: <data:image/png;base64,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>

[image3]: <data:image/png;base64,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>