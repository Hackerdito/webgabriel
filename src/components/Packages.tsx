import { useEffect } from 'react';

declare global {
  interface Window {
    ShopifyBuy: any;
  }
}

export default function Packages() {
  useEffect(() => {
    // Only load script once
    if (document.getElementById('shopify-buy-button-script')) {
      initShopify();
      return;
    }

    const scriptURL = 'https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js';
    const script = document.createElement('script');
    script.id = 'shopify-buy-button-script';
    script.async = true;
    script.src = scriptURL;
    
    script.onload = initShopify;
    document.body.appendChild(script);

    function initShopify() {
      if (window.ShopifyBuy && window.ShopifyBuy.UI) {
        const client = window.ShopifyBuy.buildClient({
          domain: 'cwczwf-w1.myshopify.com',
          storefrontAccessToken: 'ec3598da88ba300f357a57f2eb70e185',
        });
        window.ShopifyBuy.UI.onReady(client).then(function (ui: any) {
          // @ts-ignore
          window.ShopifyUI = ui;
          
          const options = {
            "product": {
              "styles": {
                "product": {
                  "@media (min-width: 601px)": {
                    "max-width": "100%",
                    "margin-left": "0px",
                    "margin-bottom": "0px"
                  },
                  "background-color": "#fafafa",
                  "padding": "20px",
                  "border-radius": "8px"
                }
              },
              "text": {
                "button": "Agregar al carrito"
              }
            },
            "productSet": {
              "styles": {
                "products": {
                  "@media (min-width: 601px)": {
                    "margin-left": "-20px"
                  }
                }
              }
            },
            "modalProduct": {
              "contents": {
                "img": false,
                "imgWithCarousel": true,
                "button": false,
                "buttonWithQuantity": true
              },
              "styles": {
                "product": {
                  "@media (min-width: 601px)": {
                    "max-width": "100%",
                    "margin-left": "0px",
                    "margin-bottom": "0px"
                  }
                }
              },
              "text": {
                "button": "Agregar al carrito"
              }
            },
            "option": {},
            "cart": {
              "text": {
                "total": "Subtotal",
                "button": "Checkout"
              }
            },
            "toggle": {
              "styles": {
                "toggle": {
                  "background-color": "#B4853F",
                  ":hover": {
                    "background-color": "#9E7435"
                  }
                }
              }
            }
          };

          // Renderizar 4 productos idénticos
          [1, 2, 3, 4].forEach(index => {
            const containerId = `product-component-${index}`;
            const container = document.getElementById(containerId);
            if (container) {
              container.innerHTML = '';
            }
            ui.createComponent('product', {
              id: '9373915578586',
              node: document.getElementById(containerId),
              moneyFormat: '%24%20%7B%7Bamount%7D%7D',
              options: options,
            });
          });
        });
      }
    }
  }, []);

  return (
    <section id="paquetes" className="py-24 px-6 md:px-12 lg:px-24 bg-cream relative z-20 overflow-hidden">
      {/* Decorative premium background elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-50 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-gold/10 via-cream to-cream pointer-events-none" />
      <div className="absolute top-0 right-0 w-64 h-64 bg-gold/5 rounded-full blur-3xl pointer-events-none" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col items-center justify-center text-center mb-16 md:mb-24">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium text-dark leading-tight tracking-tight max-w-2xl">
            Elige el formato perfecto para ti
          </h2>
          <p className="mt-6 text-dark/70 text-lg font-light max-w-xl">
            Disfruta del sabor y los beneficios naturales de nuestra miel en la presentación que mejor se adapte a tu estilo de vida.
          </p>
        </div>
        
        <div className="flex justify-center w-full min-h-[500px]">
          <div className="w-full max-w-7xl bg-white/40 p-6 md:p-12 rounded-[2rem] shadow-sm border border-gold/10 backdrop-blur-sm">
            {/* Products Grid: Cambia las columnas en diferentes tamaños de pantalla (1 en móvil, 2 en tablets, 4 en PC) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 justify-items-center w-full">
              {/* Producto 1 */}
              <div id='product-component-1' className="w-full flex justify-center bg-white p-4 md:p-6 rounded-2xl shadow-sm border border-gray-100"></div>
              {/* Producto 2 */}
              <div id='product-component-2' className="w-full flex justify-center bg-white p-4 md:p-6 rounded-2xl shadow-sm border border-gray-100"></div>
              {/* Producto 3 */}
              <div id='product-component-3' className="w-full flex justify-center bg-white p-4 md:p-6 rounded-2xl shadow-sm border border-gray-100"></div>
              {/* Producto 4 */}
              <div id='product-component-4' className="w-full flex justify-center bg-white p-4 md:p-6 rounded-2xl shadow-sm border border-gray-100"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
