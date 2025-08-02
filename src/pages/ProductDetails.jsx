import { FeaturedCategories } from "../components/Sliders";
import Offers from "../components/Offers";
import {
  AddToWishListButton,
  CompareButton,
  Rating,
} from "../components/Product";
import { AddToCartButton } from "../components/Product";
import "react-medium-image-zoom/dist/styles.css";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

// import required modules
import { FreeMode, Navigation, Thumbs } from "swiper/modules";

export default function ProductDetails() {
  const fakeProduct = {
    id: 6,
    title: "Organic Bananas (1 lb)",
    price: 0.79,
    category: "Fruits",
    bgImage: "/assets/banner/banner-6.png",
    expiresInDays: 44,
    seller: "SportMode",
    rate: 3.5,
    images: [
      "product-2-1.jpg",
      "product-2-2.jpg",
      "product-1-1.jpg",
      "product-1-2.jpg",
      "product-3-1.jpg",
      "product-3-2.jpg",
      "product-4-1.jpg",
      "product-4-2.jpg",
    ],
    isOfferOn: true,

    startOn: "2025-08-19",
    stock: 40,
    description: {
      text: "Fresh Organic Tomatoes is a high quality organic item provided by Fresh Farms.",
      size: "320",
      dimensions: "Standard market size",
    },
  };
  const [mainImage, setMainImage] = useState(fakeProduct.images[0]);

  return (
    <div className="container mx-auto px-3 mt-10">
      <div className=" flex gap-15 flex-wrap ">
        <div className="flex flex-col  gap-4 w-full min-lg:w-[450px] ">
          <div className="border border-gray-200 rounded py-10">
            <div className="relative w-fit overflow-hidden  group mx-auto ">
              <img
                src={`/assets/products/All Products/${mainImage}`}
                alt="Zoom"
                className=" h-80 w-90 object-cover transition-transform duration-300 group-hover:scale-125"
              />
            </div>
          </div>
          <div>
            <Swiper
              loop={true}
              spaceBetween={20}
              slidesPerView={4}
              freeMode={true}
              watchSlidesProgress={true}
              modules={[FreeMode, Navigation, Thumbs]}
              className="mySwiper"
            >
              {fakeProduct.images.map((img, i) => (
                <SwiperSlide className="border border-gray-200 rounded">
                  <img
                    key={i}
                    src={`/assets/products/All Products/${img}`}
                    alt={`Thumbnail ${i}`}
                    onClick={() => setMainImage(img)}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
        <div className="grow">
          <span className="px-2 py-1 rounded text-white bg-red-400">
            Sale Off
          </span>
          <h3 className="text-2xl font-bold mt-2">
            Seeds of Change Organic Quinoa, Brown
          </h3>
          <Rating rate="4.5" />
          <span className="block my-6 text-4xl text-green-600">
            $38
            <span className="line-through text-gray-500 text-xl ml-2">$52</span>
          </span>
          <p className="min-lg:w-[400px] text-gray-600 mb-6">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam
            rem officia, corrupti reiciendis minima nisi modi, quasi, odio minus
            dolore impedit fuga eum eligendi.
          </p>

          <div className="my-6">
            <p className="font-semibold mb-2">Size / Weight:</p>
            <div className="flex flex-wrap gap-2">
              <button className="px-4 py-2 cursor-pointer text-gray-600 duration-200 font-bold hover:text-white hover:bg-green-500 focus:text-white  focus:bg-green-500 rounded border border-gray-200">
                50g
              </button>
              <button className="px-4 py-2 cursor-pointer text-gray-600 duration-200 font-bold hover:text-white hover:bg-green-500 focus:text-white  focus:bg-green-500 rounded border border-gray-200">
                60g
              </button>
              <button className="px-4 py-2 cursor-pointer text-gray-600 duration-200 font-bold hover:text-white hover:bg-green-500 focus:text-white  focus:bg-green-500 rounded border border-gray-200">
                70g
              </button>
              <button className="px-4 py-2 cursor-pointer text-gray-600 duration-200 font-bold hover:text-white hover:bg-green-500 focus:text-white  focus:bg-green-500 rounded border border-gray-200">
                80g
              </button>
              <button className="px-4 py-2 cursor-pointer text-gray-600 duration-200 font-bold hover:text-white hover:bg-green-500 focus:text-white  focus:bg-green-500 rounded border border-gray-200">
                100g
              </button>
              <button className="px-4 py-2 cursor-pointer text-gray-600 duration-200 font-bold hover:text-white hover:bg-green-500 focus:text-white  focus:bg-green-500 rounded border border-gray-200">
                150g
              </button>
            </div>
          </div>

          <div className="flex gap-2 my-6">
            <input
              type="number"
              defaultValue={1}
              min={1}
              className="border border-green-500 rounded duration-200 text-center w-20 font-bold hover:border-green-500 outline-none focus:border-green-500"
            />
            <AddToCartButton title="Add To Cart" product={fakeProduct} />
            <AddToWishListButton
              product={fakeProduct}
              style="border border-gray-200 p-2 rounded text-gray-600"
            />
            <CompareButton
              product={fakeProduct}
              style="border border-gray-200 p-2 rounded text-gray-600 "
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
            <ul className="space-y-2">
              <li className="flex gap-2">
                <span className="font-semibold">Type:</span>
                <span className="text-green-400 font-bold">Organic</span>
              </li>
              <li className="flex gap-2">
                <span className="font-semibold">MFG:</span>
                <span className="text-green-400 font-bold">Jun 4.2024</span>
              </li>
              <li className="flex gap-2">
                <span className="font-semibold">LIFE:</span>
                <span className="text-green-400 font-bold">70 days</span>
              </li>
            </ul>
            <ul className="space-y-2">
              <li className="flex gap-2">
                <span className="font-semibold">SKU:</span>
                <span className="text-green-400 font-bold">FWM15VKT</span>
              </li>
              <li className="flex gap-2">
                <span className="font-semibold">Tags:</span>
                <span className="text-green-400 font-bold">
                  Snack, Organic, Brown
                </span>
              </li>
              <li className="flex gap-2">
                <span className="font-semibold">Stock:</span>
                <span className="text-green-400 font-bold">
                  8 Items In Stock
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="mt-12 space-y-4 text-sm text-gray-700 leading-relaxed border border-gray-200 p-5 rounded ">
        <h3 className="text-xl font-bold mb-4">Product Description</h3>
        <p>
          Uninhibited carnally hired played in whimpered dear gorilla koala
          depending and much yikes off far quetzal goodness and from for
          grimaced goodness unaccountably and meadowlark near unblushingly
          crucial scallop tightly neurotic hungrily some and dear furiously this
          apart.
        </p>
        <p>
          Spluttered narrowly yikes left moth in yikes bowed this that grizzly
          much hello on spoon-fed that alas rethought much decently richly and
          wow against the frequent fluidly at formidable acceptably flapped
          besides and much circa far over the bucolically hey precarious
          goldfinch mastodon goodness gnashed a jellyfish and one however
          because.
        </p>

        <h4 className="font-semibold mt-6">Type Of Packing</h4>
        <ul className="list-disc list-inside pl-4">
          <li>Bottle</li>
        </ul>

        <h4 className="font-semibold mt-4">Color</h4>
        <ul className="list-disc list-inside pl-4">
          <li>Green, Pink, Powder Blue, Purple</li>
        </ul>

        <h4 className="font-semibold mt-4">Quantity Per Case</h4>
        <ul className="list-disc list-inside pl-4">
          <li>100ml</li>
        </ul>

        <h4 className="font-semibold mt-4">Ethyl Alcohol</h4>
        <ul className="list-disc list-inside pl-4">
          <li>70%</li>
        </ul>

        <h4 className="font-semibold mt-4">Piece In One</h4>
        <ul className="list-disc list-inside pl-4">
          <li>Carton</li>
        </ul>

        <p>
          Laconic overheard dear woodchuck wow this outrageously taut beaver hey
          hello far meadowlark imitatively egregiously hugged that yikes
          minimally unanimous pouted flirtatiously as beaver beheld above
          forward energetic across this jeepers beneficently cockily less a the
          raucously that magic upheld far so the this where crud then below
          after jeez enchanting drunkenly more much wow callously irrespective
          limpet.
        </p>

        <h4 className="font-semibold mt-6">Packaging & Delivery</h4>
        <p>
          Less lion goodness that euphemistically robin expeditiously bluebird
          smugly scratched far while thus cackled sheepishly rigid after due one
          assenting regarding censorious while occasional or this more crane
          went more as this less much amid overhung anathematic because much
          held one exuberantly sheep goodness so where rat wry well
          concomitantly.
        </p>
        <p>
          Scallop or far crud plain remarkably far by thus far iguana lewd
          precociously and and less rattlesnake contrary caustic wow this near
          alas and next and pled the yikes articulate about as less cackled
          dalmatian in much less well jeering for the thanks blindly sentimental
          whimpered less across objectively fanciful grimaced wildly some wow
          and rose jeepers outgrew lugubrious luridly irrationally attractively
          dachshund.
        </p>

        <h4 className="font-semibold mt-6">Suggested Use</h4>
        <ul className="list-disc list-inside pl-4">
          <li>Refrigeration not necessary.</li>
          <li>Stir before serving</li>
        </ul>

        <h4 className="font-semibold mt-4">Other Ingredients</h4>
        <ul className="list-disc list-inside pl-4">
          <li>Organic raw pecans, organic raw cashews.</li>
          <li>
            This butter was produced using a LTG (Low Temperature Grinding)
            process
          </li>
          <li>
            Made in machinery that processes tree nuts but does not process
            peanuts, gluten, dairy or soy
          </li>
        </ul>

        <h4 className="font-semibold mt-4">Warnings</h4>
        <p>Oil separation occurs naturally. May contain pieces of shell.</p>
      </div>
      <Offers />
      <FeaturedCategories />
    </div>
  );
}
