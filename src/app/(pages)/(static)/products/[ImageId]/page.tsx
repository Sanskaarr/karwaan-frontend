"use client";
import {
  FacebookShareButton,
  PinterestShareButton,
  WhatsappShareButton,
  TwitterShareButton,
  TelegramShareButton,
} from "next-share";
import React, { useEffect, useState, useCallback } from "react";
import styles from "./style.module.css";
import { useParams, useRouter, usePathname } from "next/navigation";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import { useProduct } from "@/hooks/useProduct";
import { useCart } from "@/hooks/useCart";
import { toast } from "react-toastify";
import { useOrder } from "@/hooks/UseOrder";
import { ClipLoader } from "react-spinners";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { changeAddress_success } from "@/redux/reducers/AddressReqestReducer";
import { createOrder_success } from "@/redux/reducers/OrderRequestReducer";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import {
  Telegram,
  Twitter,
  Pinterest,
  FacebookRounded,
} from "@mui/icons-material";
const shop = () => {
  const router = useRouter();
  const pathname = usePathname();
  const dispatch = useDispatch();
  const resCartItem = useSelector((state: RootState) => state.cart.products);
  type validSize = '8"x12"' | '12"x18"' | '16"x24"' | '20"x30"' | '24"x36"';
  const [selectedSize, setSelectedSize] = useState<validSize>('8"x12"');
  const { ImageId } = useParams<{ ImageId: string }>();
  const [isItemInCart, setIsItemInCart] = useState<boolean>(false);
  const isAddressConfirm = useSelector(
    (state: RootState) => state.addressRequest.changeAddress.confirm
  );
  const order = useSelector((state: RootState) => state.orderRequests.order);

  const { handleGetProduct, handleGetAllProduct, response, singleResponse } =
    useProduct(null, null, null, ImageId);

  const [token, setToken] = useState<string | null>(null);
  const [userId, setUserId] = useState<string>("");

  useEffect(() => {
    if (typeof window !== "undefined") {
      const user = JSON.parse(localStorage.getItem("user") as string);
      if (user?.token) {
        setToken(user.token);
        setUserId(user._id);
      } else {
        setToken(null);
        setUserId("");
      }
    }
  }, []);

  const { handleCreateOrder } = useOrder({ token, userId });
  const { handleAddItemToCart, handleGetAllItem } = useCart({
    token,
    productId: ImageId,
    userId,
    size: selectedSize,
    quantity: 1,
  });

  useEffect(() => {
    if (token && userId) {
      handleGetAllItem();

      if (isAddressConfirm && order.linkToPaymentGateway) {
        let link = order.linkToPaymentGateway;
        dispatch(changeAddress_success(false));
        dispatch(
          createOrder_success({ linkToPaymentGateway: "", reDirectTo: "" })
        );
        window.open(link);
      }
    }
  }, [token, userId]);

  // Check if the current item is in the cart or not
  const isProductInCart = useCallback(
    (productId: string, size: validSize): boolean => {
      return resCartItem.some(
        (item) =>
          item.productDetails.productId === productId && item.size === size
      );
    },
    [resCartItem]
  );
  const splitIntoParagraphs = (text:string) => {
    const regex = /(?<!@)\. /;
    return text.split(regex).map(paragraph => paragraph.trim());
  };
  useEffect(() => {
    if (singleResponse) {
      setIsItemInCart(isProductInCart(singleResponse._id, selectedSize));
    }
  }, [singleResponse, selectedSize, isProductInCart]);

  const handleBuy = useCallback(
    (e: any) => {
      if (token) {
        e.preventDefault();
        const updatedResCartItems: resDataType[] = [
          {
            productDetails: {
              productId: singleResponse._id,
              description: singleResponse.description,
              name: singleResponse.name,
              price: singleResponse.price,
              tags: singleResponse.tags,
              url: singleResponse.url,
            },
            quantity: 1,
            size: selectedSize,
            userId: singleResponse.userId,
            _id: singleResponse._id,
          },
        ];
        handleCreateOrder(e, updatedResCartItems);
      } else {
        toast.error("Please log in to buy the product");
        router.push("/signup");
      }
    },
    [token, singleResponse, selectedSize, handleCreateOrder, router]
  );

  const [isLoaded, setIsloaded] = useState(false);
  const apiCalls = async () => {
    await handleGetAllProduct();
    await handleGetProduct();
    setIsloaded(true);
  };
  useEffect(() => {
    apiCalls();
  }, [isLoaded, ImageId, token]);

  // Price calculator function
  const priceCalculator = useCallback(
    (price: number) => {
      const pricePerSquareInch = price / 96;
      const prices = {
        '8"x12"': pricePerSquareInch * 8 * 12,
        '12"x18"': pricePerSquareInch * 12 * 18,
        '16"x24"': pricePerSquareInch * 16 * 24,
        '20"x30"': pricePerSquareInch * 20 * 30,
        '24"x36"': pricePerSquareInch * 24 * 36,
      };
      return Math.floor(prices[selectedSize]);
    },
    [selectedSize]
  );

  // Define resDataType
  type resDataType = {
    productDetails: {
      productId: string;
      description: string;
      name: string;
      price: number;
      tags: string[];
      url: string;
    };
    quantity: number;
    size: validSize;
    userId: string;
    _id: string;
  };

  // Read more feature
  // const [isReadMoreOpen, setIsReadMoreOpen] = useState<boolean>(false);

  return (
    <div className={styles.singleProductPage}>
      {/* <div className={styles.singleProductPageSlider}>
        <div className={styles.singleProductPageSliderButton} onClick={()=>router.push(`/products/${response[response.findIndex((obj:any) => {obj._id === singleResponse._id||obj.media.type === singleResponse.media.type})-1]._id}`)}><KeyboardArrowLeftIcon  style={{backgroundColor:"white",color:"black"}} className={styles.icons}/></div>
        <div className={styles.singleProductPageSliderButton} onClick={()=>router.push(`/products/${response[response.findIndex((obj:any) => {obj._id === singleResponse._id||obj.media.type === singleResponse.media.type})+1]._id}`)}><KeyboardArrowRightIcon style={{backgroundColor:"white",color:"black"}} className={styles.icons}/></div>
    
        </div> */}

      {singleResponse ? (
        <>
          <div className={styles.singleProductPageUpperSection}>
            <div className={styles.singleProductPageUpperLeftSection}>
              {singleResponse && (
                <img
                  src={
                    singleResponse.url.startsWith("http")
                      ? singleResponse.url
                      : `https://${singleResponse.url}`
                  }
                  style={{ objectFit: "contain" }}
                  alt={singleResponse.name}
                />
              )}
            </div>
            <div className={styles.singleProductPageUpperRightSection}>
              <div>
                {singleResponse && (
                  <h3 style={{ color: "black" }}>{singleResponse.name}</h3>
                )}
                {singleResponse && <div>{singleResponse.tags.join(", ")}</div>}
                {singleResponse && (
                  <h3 style={{ color: "black" }}>
                    <CurrencyRupeeIcon />
                    {priceCalculator(singleResponse.price) + " "}
                  </h3>
                )}
              </div>
              {/* {singleResponse&& <p>{singleResponse.description}    </p>} */}
              {singleResponse?.description &&
                splitIntoParagraphs(singleResponse.description)
                  .map((des: string, index: number) => {
                    return (
                      <>
                        <div style={{ color: "black" }} key={index}>
                          {des.trim() + "."}
                        </div>
                        <br />
                      </>
                    );
                  })}
              <p style={{ alignSelf: "flex-end" }}>SIZE</p>
              <select
                style={{
                  borderRadius: "5px",
                  background: "white",
                  outline: "0",
                  border: "1px solid black",
                  color: "black",
                }}
                value={selectedSize}
                onChange={(e) => {
                  setSelectedSize(e.target.value as validSize);
                  setIsItemInCart(
                    isProductInCart(
                      singleResponse._id,
                      e.target.value as validSize
                    )
                  );
                }}
              >
                <option value={'8"x12"'}>8" X 12"</option>
                <option value={'12"x18"'}>12" X 18"</option>
                <option value={'16"x24"'}>16" X 24"</option>
                <option value={'20"x30"'}>20" X 30"</option>
                <option value={'24"x36"'}>24" X 36"</option>
              </select>
              <div className={styles.buttons}>
                {isItemInCart ? (
                  <button
                    className={styles.button}
                    onClick={() => {
                      router.push("/products/cart");
                    }}
                  >
                    Added to cart
                  </button>
                ) : (
                  <button
                    className={styles.button}
                    onClick={(e: any) => {
                      if (token) {
                        handleAddItemToCart(e, ImageId, selectedSize);
                        handleGetAllItem();
                      } else {
                        toast.error("Please login first... ");
                        router.push("/signup");
                      }
                      setIsItemInCart(true);
                    }}
                  >
                    Add To Cart
                  </button>
                )}
                <button
                  className={styles.button}
                  onClick={(e: any) => {
                    if(isItemInCart){
                      router.push("/products/cart")
                      return;
                    }
                    if (token) {
                      handleAddItemToCart(e, ImageId, selectedSize);
                      handleGetAllItem();
                    } else {
                      toast.error("Please login first... ");
                      router.push("/signup");
                      return;
                    }
                    setIsItemInCart(true);
                    router.push("/products/cart")
                  }}
                >
                  {isItemInCart?"Go to cart":"Buy"}
                </button>
              </div>
              <div className={styles.share}>
                share :
                <FacebookShareButton
                  url={`https://www.karwaanfilms.com${pathname}`}
                  quote={"check out this frame"}
                  hashtag={"#KarwaanFilms"}
                >
                  <FacebookRounded className={styles.socialIcons} />
                </FacebookShareButton>
                <WhatsappShareButton
                  url={`https://www.karwaanfilms.com${pathname}`}
                  title={"check out this frame"}
                  separator=":: "
                >
                  <WhatsAppIcon className={styles.socialIcons} />
                </WhatsappShareButton>
                <TelegramShareButton
                  url={`https://www.karwaanfilms.com${pathname}`}
                  title={"check out this frame"}
                >
                  <Telegram className={styles.socialIcons} />
                </TelegramShareButton>
                <TwitterShareButton
                  url={`https://www.karwaanfilms.com${pathname}`}
                  title={"check out this frame"}
                >
                  <Twitter className={styles.socialIcons} />
                </TwitterShareButton>
                <PinterestShareButton
                  url={`https://www.karwaanfilms.com${pathname}`}
                  media={"check out this frame"}
                >
                  <Pinterest className={styles.socialIcons} />
                </PinterestShareButton>
              </div>
            </div>
          </div>

          <p className={styles.shopProductsHeading}>
            New Modern Design Collection
          </p>

          <div className={styles.shopProducts}>
            {response &&
              singleResponse &&
              response
                .filter(
                  (product: any) =>
                    product._id !== singleResponse?._id &&
                    product?.media?.type === singleResponse?.media?.type
                )
                .slice(0, 3)
                .map((data: any, index: number) => {
                  return (
                    <div
                      key={index}
                      className={styles.oneProduct}
                      onClick={() => router.push(`/products/${data._id}`)}
                    >
                      <img
                        src={
                          data.url.startsWith("http")
                            ? data.url
                            : `https://${data.url}`
                        }
                        alt={data.name}
                        className={styles.image}
                      />
                      <div className={styles.imagesCategory}>
                        {data.tags.join(", ")}
                      </div>
                      <div className={styles.imagesName}>{data.name}</div>
                    </div>
                  );
                })}
          </div>
        </>
      ) : (
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%,-50%)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <ClipLoader
            color="blue"
            cssOverride={{}}
            size={30}
            speedMultiplier={0.5}
          />
          <div style={{ color: "black" }}>loading</div>
        </div>
      )}
    </div>
  );
};

export default shop;
