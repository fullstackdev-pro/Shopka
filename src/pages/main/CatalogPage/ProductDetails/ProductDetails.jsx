import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { selectedProduct } from "../../../../redux/actions";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { FaTelegramPlane } from "react-icons/fa";
import {
  AiOutlineRight,
  AiOutlineLeft,
  AiOutlineCalculator,
  // AiOutlineCheck,
} from "react-icons/ai";
import { BsTruck } from "react-icons/bs";
import ShowRoom from "../../HomePage/Info/ShowRoom";
import PartnerCarousel from "../../HomePage/Info/PartnerCarousel";
// import { SlBasket, SlStar } from "react-icons/sl";

function ProductDetails(props) {
  const { productId } = useParams();
  const [showAll, setShowAll] = useState(false);
  // const [productCategory, setProductCategory] = useState("");

  const dispatch = useDispatch();
  const fetchProductDetail = async () => {
    const response = await axios
      .get(`http://localhost:3001/goods/${productId}`)
      .catch((e) => console.log("Error ", e.message));
    dispatch(selectedProduct(response.data));
  };

  useEffect(() => {
    if (productId && productId !== "") fetchProductDetail();

    return () => {
      //   dispatch(removeSelectedProduct);
    };
    // eslint-disable-next-line
  }, [productId]);

  const data = useSelector((state) => state.selectedProduct);
  // const allData = useSelector((state) => state.data);
  const {
    title,
    id,
    price,
    status,
    category,
    manufacturer,
    brand,
    size,
    weight,
    watersupply,
    frostresistant,
    consumption,
    quantitypallet,
    quantitycar,
    color,
  } = data;

  // useEffect(() => {
  //   if (category !== undefined) {
  //     setProductCategory(category);
  //   }
  // }, [allData]);

  // let recomended = allData.map((data, index) => {
  //   const { title, id, price, info, status, category } = data;
  //   if (window.innerWidth <= 320 && index > 3) return "";
  //   if (window.innerWidth <= 480 && index > 5) return "";
  //   if (window.innerWidth <= 768 && index > 5) return "";
  //   if (window.innerWidth <= 1000 && index > 7) return "";
  //   if (window.innerWidth > 1000 && index > 9) return "";
  //   console.log(category);
  //   return (
  //     <div
  //       key={id}
  //       className="border-none md:border-solid md:border-[1px] md:border-[#8686864D] md:rounded md:pr-1 md:py-4 md:relative"
  //     >
  //       <SlStar className="hidden md:block md:absolute w-6 h-6 right-3 mt-1 text-[#5661CB]" />
  //       <div
  //         className={`hidden md:block md:absolute text-[12px] text-white rounded-r ${
  //           status === "Лидер продаж"
  //             ? "bg-[#F2994A] py-[4px] px-[12px] "
  //             : status === "Лучшая цена"
  //             ? "bg-[#DD4747] py-[4px] px-[12px] "
  //             : status === "Привезем сегодня"
  //             ? "bg-[#27AE60E5] py-[4px] px-[12px] "
  //             : ""
  //         }`}
  //       >
  //         {status}
  //       </div>

  //       <img
  //         src={require("../../../../img/goods/1.png")}
  //         className="p-4 md:mt-[30px] md:mx-[40px]"
  //         alt="goods"
  //       />

  //       <div className="text-[12px] font-medium mx-2 md:text-[16px]">
  //         <Link to={`/product/${id}`}>{title}</Link>
  //       </div>

  //       <p className="hidden md:grid md:text-[14px] md:font-light md:px-2 md:mt-[8px]">
  //         {info}
  //       </p>

  //       <div className="md:flex md:justify-between md:mt-[10px]">
  //         <button
  //           onClick={() => {
  //             // delivery(id);
  //           }}
  //           className="px-2 underline underline-offset-1 text-[11px] text-[#7D7D7D] font-light cursor-pointer md:text-[12px] "
  //         >
  //           бесплатная доставка
  //         </button>
  //         <button className="hidden underline underline-offset-1 md:grid md:text-[#219653] md:font-light md:text-[12px] md:pr-1 cursor-pointer">
  //           в наличии
  //         </button>
  //       </div>

  //       <div className="flex justify-between">
  //         <div className={`px-2 mt-[7px] md:mt-[11px]`}>
  //           <span
  //             className={`font-medium text-[14px] md:text-[18px] ${
  //               status === "Лучшая цена" ? "text-red-600" : ""
  //             }`}
  //           >
  //             {price}
  //           </span>
  //           {" \u20BD "} / шт
  //         </div>
  //         <div
  //           className={`hidden md:flex px-2 mt-[9px] md:mt-[11px] text-[12px] md:text-[18px] ${
  //             status === "Лучшая цена" ? "line-through" : "hidden"
  //           }`}
  //         >
  //           <span className="font-medium">{price + 200}</span>
  //           {" \u20BD "} / шт
  //         </div>
  //       </div>
  //       <div className="flex">
  //         <button
  //           onClick={() => {
  //             // buy(id);
  //           }}
  //           className="mx-2 py-[8px] mt-[10px] w-[95%] bg-[#5661CB] text-white rounded-md cursor-pointer md:w-[70%] hover:bg-[#219653]"
  //         >
  //           Купить в 1 клик
  //         </button>
  //         <button className="hidden md:grid px-4 pt-[0.7rem] h-10 mt-[0.7rem] text-[#5661CB] border-[1px] border-[#5661CB] rounded-md cursor-pointer">
  //           <SlBasket className="" />
  //           <AiOutlineCheck className="hidden " />
  //         </button>
  //       </div>
  //     </div>
  //   );
  // });

  return (
    <div
      key={id}
      className="border-none mt-[25px] md:border-[#8686864D] md:rounded md:pr-1 md:py-4 md:relative"
    >
      <p className="text-[16px] font-medium md:text-[16px] mx-[20px]">
        {title}
      </p>

      <div className="flex justify-between mt-[14px] mx-[20px] md:hidden">
        <button className="text-[13px] text-[#7D7D7D] font-light cursor-pointer">
          Товар:{" "}
          <span className="text-green-700 underline underline-offset-1">
            в наличии
          </span>
        </button>
        <button className="text-[13px] text-[#7D7D7D] font-light cursor-pointer">
          Доставка:{" "}
          <span className="text-green-700 underline underline-offset-1">
            бесплатная
          </span>
        </button>
      </div>

      <div className="md:flex md:justify-start">
        <div className="mt-[14px] mx-[20px] md:border-[1px] md:w-[40%] md:pb-24 lg:w-[80%]">
          <div
            className={`absolute text-[12px] text-white rounded-r md:mt-4 ${
              status === "Лидер продаж"
                ? "bg-[#F2994A] py-[4px] px-[12px] "
                : status === "Лучшая цена"
                ? "bg-[#DD4747] py-[4px] px-[12px] "
                : status === "Привезем сегодня"
                ? "bg-[#27AE60E5] py-[4px] px-[12px] "
                : ""
            }`}
          >
            {status}
          </div>
          <div className="flex justify-between pt-[70px]">
            <div className="grid content-center">
              <AiOutlineLeft className="text-[2rem] text-[#5661CB] md:hidden lg:block lg:text-[3rem] lg:mt-2" />
            </div>
            <img
              src={require("../../../../img/selectedProduct/c1f13144-6c36-4b14-9ef7-7c3aea1259d0_image_large 1.png")}
              className="w-[50%] md:mt-[64px] md:w-[80%] lg:w-[65%]"
              alt="goods"
            />
            <div className="grid content-center ">
              <AiOutlineRight className="text-[2rem] text-[#5661CB] md:hidden lg:block lg:text-[3rem]" />
            </div>
          </div>
        </div>

        <div className="md:border-[1px] mt-[14px] md:w-full md:px-6 md:mr-[18px]">
          <p className="text-[16px] font-medium md:text-[14px] mx-[20px] md:mt-[15px]">
            Производитель: {title}
          </p>
          <p className="text-[16px] font-medium md:text-[14px] mx-[20px] hidden md:flex md:mt-[8px]">
            Марка прочности: {brand}
          </p>

          <div className="hidden justify-between mt-[14px] mx-[20px] md:flex md:justify-start">
            <button className="text-[13px] text-[#7D7D7D] font-light cursor-pointer md:text-[14px]">
              Товар:{" "}
              <span className="text-green-700 underline underline-offset-1">
                в наличии
              </span>
            </button>
            <button className="text-[13px] text-[#7D7D7D] font-light cursor-pointer md:text-[14px] md:ml-16">
              Доставка:{" "}
              <span className="text-green-700 underline underline-offset-1">
                бесплатная
              </span>
            </button>
          </div>

          <div className="md:flex">
            <div className="mx-[20px] md:w-[50%]">
              <div className="mt-[50px] md:mt-[10px]">
                <span className="text-[#7D7D7D] md:hidden">
                  Цена со склада:
                </span>
                <span
                  className={`font-medium text-[25px] md:text-[40px] pl-16 md:pl-0 ${
                    status === "Лучшая цена" ? "text-red-600" : ""
                  }`}
                >
                  {price / 100}
                </span>
                {" \u20BD "} / шт
              </div>
              <p className="text-[#7D7D7D] hidden md:flex text-[14px]">
                Цена со склада:
              </p>
              <div className="mt-[14px] md:mt-[10px]">
                <span className="text-[#7D7D7D] md:hidden">
                  Цена с доставкой:
                </span>
                <span
                  className={`font-medium text-[25px] md:text-[40px] pl-12 md:pl-0 ${
                    status === "Лучшая цена" ? "text-red-600" : ""
                  }`}
                >
                  {price / 100 + 8}
                </span>
                {" \u20BD "} / шт
              </div>
              <p className="text-[#7D7D7D] hidden md:flex text-[14px]">
                Цена с доставкой от 20 тонн
              </p>
            </div>
            <div className="hidden md:block text-[14px] mt-[40px] text-[#7D7D7D ]">
              <p>Количество (кратно поддону):</p>
              <input
                className="w-[50%] mt-[10px] py-1 border-2 border-[#BDBDBD] rounded-md text-center text-black"
                type="number"
                placeholder="288"
              />
              <p className="text-[14px] mt-[10px] text-[#7D7D7D]">
                Итого:{" "}
                <span className="text-black">10,260.00 {" \u20BD "}</span>{" "}
              </p>
            </div>
          </div>

          <div className="mt-[24px] mx-[16px] text-center md:flex md:justify-start md:mb-[20px]">
            <div>
              <button className="w-[63%] border-2 border-[#5661CB] p-2 rounded-md md:w-full md:px-[28px]">
                Добавить в корзину
              </button>
              <input
                className="w-[30%] ml-4 py-2 px-8 border-2 border-[#BDBDBD] rounded-md md:hidden"
                type="number"
                placeholder="288"
              />
            </div>
            <div>
              <button
                className="py-[8px] mt-[13px] w-[98%] bg-[#5661CB] text-white rounded-md cursor-pointer 
                md:w-full md:mt-0 md:px-[40px] hover:bg-[#219653] md:ml-6"
              >
                Купить в 1 клик
              </button>
            </div>
          </div>

          <div className="mx-[16px] hidden lg:flex lg:pb-[25px]">
            <button className="flex mt-[13px] py-2 pl-1 border-[1px] border-[#5661CB] w-full rounded cursor-pointer mr-2">
              <AiOutlineCalculator className="text-[1.2rem] text-[#5661CB] ml-[1rem] mr-4" />{" "}
              Онлайн калькулятор
            </button>
            <button className="flex mt-[13px] py-2 pl-1 border-[1px] border-[#5661CB] w-full rounded cursor-pointer ml-2">
              <BsTruck className="text-[1.2rem] text-[#5661CB] ml-[1rem] mr-4" />{" "}
              Расчет доставки
            </button>
          </div>
        </div>
      </div>

      <div className="md:flex md:justify-start md:mx-[20px]">
        <div className="md:w-[70%]">
          <ul className="mt-[21px] mx-[20px] md:mx-0">
            <li className="md:text-[14px]">Категория: {category}</li>
            <hr className="hidden lg:block mt-[8px]" />
            <li className="pt-[9px] md:pt-[7px] md:text-[14px]">
              Производитель: {manufacturer}
            </li>
            <hr className="hidden lg:block mt-[8px]" />
            <li className="pt-[9px] md:pt-[7px] md:text-[14px]">
              Марка прочности: {brand}
            </li>
            <hr className="hidden lg:block mt-[8px]" />
            <li className="pt-[9px] md:pt-[7px] md:text-[14px]">
              Размер, мм: {size}
            </li>
            <hr className="hidden lg:block mt-[8px]" />
            <li className="pt-[9px] md:pt-[7px] md:text-[14px]">
              Вес, кг: {weight}
            </li>
            <hr className="hidden lg:block mt-[8px]" />
            <li className="pt-[9px] md:pt-[7px] md:text-[14px]">
              Водополгащение, %: {watersupply}
            </li>
            <hr className="hidden lg:block mt-[8px]" />
            <li className="pt-[9px] md:pt-[7px] md:text-[14px]">
              Морозостойкость: {frostresistant}
            </li>
            <hr className="hidden lg:block mt-[8px]" />
            <button
              className={`underline underline-offset-1 cursor-pointer ${
                showAll
                  ? "hidden"
                  : "grid pt-[9px] md:pt-[7px] md:text-[14px] lg:hidden"
              }`}
              onClick={() => {
                setShowAll(!showAll);
              }}
            >
              Все характеристики
            </button>
            <li
              className={`${
                showAll
                  ? "grid pt-[9px] md:pt-[7px] md:text-[14px]"
                  : "hidden lg:block lg:text-[14px] lg:pt-[7px]"
              }`}
            >
              Расход, шт/м2: {consumption}
            </li>
            <hr className="hidden lg:block mt-[8px]" />
            <li
              className={`${
                showAll
                  ? "grid pt-[9px] md:pt-[7px] md:text-[14px]"
                  : "hidden lg:block lg:text-[14px] lg:pt-[7px]"
              }`}
            >
              Кол-во на поддоне, шт: {quantitypallet}
            </li>
            <hr className="hidden lg:block mt-[8px]" />
            <li
              className={`${
                showAll
                  ? "grid pt-[9px] md:pt-[7px] md:text-[14px]"
                  : "hidden lg:block lg:text-[14px] lg:pt-[7px]"
              }`}
            >
              Кол-во на машине 20 т, шт: {quantitycar}
            </li>
            <hr className="hidden lg:block mt-[8px]" />
            <li
              className={`${
                showAll
                  ? "grid pt-[9px] md:pt-[7px] md:text-[14px]"
                  : "hidden lg:block lg:text-[14px] lg:pt-[7px]"
              }`}
            >
              Цвет: {color}
            </li>
          </ul>

          <div className="mx-[20px] md:mx-0 lg:hidden">
            <button className="flex mt-[13px] py-2 pl-8 border-[1px] border-[#5661CB] w-full rounded cursor-pointer">
              <AiOutlineCalculator className="text-[1.2rem] text-[#5661CB] mt-[2.5px] ml-[1rem] mr-4" />{" "}
              Онлайн калькулятор
            </button>
            <button className="flex sm:hidden mt-[13px] py-2 pl-8 border-[1px] border-[#5661CB] w-full rounded cursor-pointer">
              <FaTelegramPlane className="text-[1.2rem] text-[#0088cc] mt-[2px] ml-[1rem] mr-4" />{" "}
              Написать в Telegram
            </button>
            <button className="hidden sm:flex md:hidden mt-[13px] py-2 pl-8 border-[1px] border-[#5661CB] w-full rounded cursor-pointer">
              <BsTruck className="text-[1.2rem] text-[#5661CB] mt-[2px] ml-[1rem] mr-4" />{" "}
              Расчет доставки
            </button>
          </div>
        </div>

        <div className="ml-4 mt-[21px] hidden md:block lg:w-[59%]">
          <h3 className="text-[14px] font-medium hidden lg:block">ОПИСАНИЕ</h3>
          <hr className="hidden lg:block mt-[8px]" />
          <p className="mt-[7px] text-[14px] hidden lg:block lg:mr-6">
            На кирпич и камень керамические общие технические условия и
            стандарты качества, установленные ГОСТ. Эти материалы обладают
            высокой прочностью, морозостойкостью, негорючестью, небольшая
            теплопроводность, влагостойкостью. продольное и поперечное.
          </p>
          <hr className="hidden lg:block mt-[8px]" />
          <h3 className="text-[14px] font-medium ml-6 lg:ml-0 lg:mt-[7px]">ОПЛАТА</h3>
          <p className="mt-[7px] text-[14px] ml-6 lg:ml-0">
            Мы принимаем наличные, банковские карты и безналичные расчеты.
          </p>
          <hr className="hidden lg:block mt-[8px]" />
          <h3 className="mt-[16px] text-[14px] font-medium ml-6 lg:ml-0">ДОСТАВКА</h3>
          <p className="mt-[8px] text-[14px] ml-6 lg:ml-0 lg:mr-32">
            Срок доставки: от 2 до 20 часов с момента подтверждения заказа
          </p>
          <p className="mt-[8px] text-[14px] ml-6 lg:ml-0">
            Бесплатная доставка: 20 км от Казани
          </p>
          <button className="hidden md:flex mt-[2.75rem] py-2 pl-8 border-[1px] border-[#5661CB] w-full rounded cursor-pointer lg:hidden">
            <BsTruck className="text-[1.2rem] text-[#5661CB] mt-[2px] ml-[1rem] mr-4" />{" "}
            Расчет доставки
          </button>
        </div>
      </div>

      {/* <div className="mt-[26px] mx-[20px]">
        <h3 className="text-[20px] font-medium">Рекомендованные товары</h3>
        <div className="grid grid-col-2">{recomended}</div>
      </div> */}

      <ShowRoom />
      <PartnerCarousel />
    </div>
  );
}

export default ProductDetails;